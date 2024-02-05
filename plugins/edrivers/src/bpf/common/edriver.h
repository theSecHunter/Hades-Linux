// SPDX-License-Identifier: GPL-2.0-or-later

#ifndef __EDRIVERS_H__
#define __EDRIVERS_H__
#include <vmlinux.h>
#include <missing_definitions.h>
#include "consts.h"
#include "common.h"
#include "maps.h"
#include "bpf_core_read.h"
#include "bpf_helpers.h"

static struct proc_info *proc_info_init(struct task_struct *);
static unsigned int proc_info_args(struct proc_info *, struct task_struct *);
static unsigned int proc_info_envs(struct proc_info *, struct task_struct *);
static __noinline struct sock *proc_socket_info(struct task_struct *, pid_t *);
static __noinline int match_key(char *, int, uint64_t, int);

SEC("raw_tracepoint/sched_process_exec")
int rtp__process_exec(struct bpf_raw_tracepoint_args *ctx)
{
    struct task_struct *task = (struct task_struct *) bpf_get_current_task();
    if (task == NULL)
        return 0;

    /* ingore kernel threads */
    u32 flags = BPF_CORE_READ(task, flags);
	if (flags & PF_KTHREAD)
		return -1;

    /* fulfill proc information */
    struct proc_info *proc_i = proc_info_init(task);
    if (proc_i == NULL)
        return -1;
    proc_info_args(proc_i, task);
    proc_info_envs(proc_i, task);

    /* report */
    struct hds_context c = {0};
    c.ctx = ctx;
    c.data_type = SYS_ENTER_EXECVE;
    c.sbt = get_percpu_buf(PRINT_CACHE);

    SBT((&c), &c.data_type, S_U32);
    SBT((&c), &proc_i->pid, S_U32);
    SBT((&c), &proc_i->tgid, S_U32);
    SBT((&c), &proc_i->pgid, S_U32);
    SBT((&c), &proc_i->ppid, S_U32);
    SBT((&c), &proc_i->sid, S_U32);
    SBT((&c), &proc_i->socket_pid, S_U32);
    SBT_CHAR((&c), &proc_i->comm);
    SBT_CHAR((&c), &proc_i->node);
    SBT_CHAR((&c), &proc_i->args);
    SBT_CHAR((&c), &proc_i->ssh_conn);
    SBT_CHAR((&c), &proc_i->ld_pre);
    SBT_CHAR((&c), &proc_i->ld_lib);
    SBT_CHAR((&c), get_task_tty_str(task));
    /* pwd */
    struct path pwd = BPF_CORE_READ(task, fs, pwd);
    save_path(GET_FIELD_ADDR(pwd) ,(&c));
    /* stdin */
    save_fd(0, (&c));
    /* stdout */
    save_fd(1, (&c));
    /* exe */
    struct path exe_path = BPF_CORE_READ(task, mm, exe_file, f_path);
    save_path(GET_FIELD_ADDR(exe_path), (&c));
    SBT((&c), &proc_i->sinfo, sizeof(struct hds_socket_info));

    report_event(&c);
    return 0;
}

/* proc_info init */
static struct proc_info *proc_info_init(struct task_struct *task)
{
    struct proc_info *proc_i;
    u32 tgid, pid;
    long ret = 0;

    pid = BPF_CORE_READ(task, pid);
    tgid = BPF_CORE_READ(task, tgid);

    /* get proper process info */
    if (bpf_map_update_elem(&proc_info_cache, &tgid, &_proc, BPF_NOEXIST))
        return NULL;
    proc_i = bpf_map_lookup_elem(&proc_info_cache, &tgid);
    if (!proc_i)
        return NULL;

    /* process info fullfill */
    proc_i->pid = pid;
    proc_i->socket_pid = pid;
    proc_i->tgid = tgid;
    proc_i->ppid = BPF_CORE_READ(task, real_parent, tgid);
    proc_i->pgid = get_task_pgid(task);
    char *uts_name = BPF_CORE_READ(task, nsproxy, uts_ns, name.nodename);
    if (uts_name)
        bpf_probe_read_str(proc_i->node, MAX_NODENAME, uts_name);
    ret = bpf_get_current_comm(&proc_i->comm, TASK_COMM_LEN);
    if (ret < 0)
        return NULL;
    struct sock *sk = proc_socket_info(task, &proc_i->socket_pid);
    if (!sk) {
        proc_i->socket_pid = 0;
    } else {
        struct hds_socket_info sinfo = {};
        sinfo.family = BPF_CORE_READ(sk, sk_family);
        if (sinfo.family == AF_INET) {
            get_sock_v4(sk, &sinfo);
        }
        proc_i->sinfo = sinfo;
    }

    return proc_i;
}

/* fill up args for proc_info */
static unsigned int proc_info_args(struct proc_info *info, struct task_struct *task)
{
    unsigned long arg_start, arg_end;
    unsigned int arg_len, sl, len = 0;

    /* args information */
    arg_start = BPF_CORE_READ(task, mm, arg_start);
    arg_end = BPF_CORE_READ(task, mm, arg_end);
    arg_len = (unsigned int)(arg_end - arg_start);
    if (arg_len == 0)
        return 0;
    if (arg_len >= MAX_STR)
        arg_len = MAX_STR_MASK;
    
    buf_t *cache = get_percpu_buf(LOCAL_CACHE);
    if (cache == NULL)
        return 0;
    
    /* args mapping */
#pragma unroll
    for (int i = 0; i < ARR_ARGS_LEN; i++)
    {
        if (len >= arg_len)
            goto out;
        sl = bpf_probe_read_str(&cache->buf[len & MAX_STR_MASK], MAX_STR, (void *)(arg_start + len));
        if (sl <= 0)
            goto out; /* notice: break do not work on unroll */
        len = len + sl;
        cache->buf[(len - 1) & MAX_STR_MASK] = 0x20;
    }
out:
    cache->buf[(len - 1) & MAX_STR_MASK] = '\0';
    return bpf_probe_read_str(info->args, len & MAX_STR_MASK, cache->buf);
}

/* fill up envs for proc_info */
static unsigned int proc_info_envs(struct proc_info *info, struct task_struct *task)
{
    unsigned long env_start, env_end;
    unsigned int env_len, sl, len = 0;
    unsigned int offset = 0;

    /* args information */
    env_start = BPF_CORE_READ(task, mm, env_start);
    env_end = BPF_CORE_READ(task, mm, env_end);
    env_len = (unsigned int)(env_end - env_start);
    if (env_len == 0)
        return 0;
    
    buf_t *cache = get_percpu_buf(LOCAL_CACHE);
    if (cache == NULL)
        return 0;
    
    /* args mapping */
#pragma unroll
    for (int i = 0; i < ARR_ENVS_LEN; i++)
    {
        sl = bpf_probe_read_str(&cache->buf[0], MAX_STR_MASK, (void *)(env_start + len));
        if (sl <= 0)
            goto out; /* notice: break do not work on unroll */
        len = len + sl;
        // cache->buf[(len - 1) & MAX_STR_MASK] = 0x20;
        if (match_key(&cache->buf[0], sl, 0x4e4e4f435f485353UL, 14)) {
            /* SSH_CONN */
            bpf_probe_read_str(info->ssh_conn, MAX_STR_ENV, &cache->buf[15]);
        } else if (match_key(&cache->buf[0], sl, 0x4f4c4552505f444cUL, 10)) {
            /* LD_PRELO */
            bpf_probe_read_str(info->ld_pre, MAX_STR_ENV, &cache->buf[11]);
        } else if (match_key(&cache->buf[0], sl, 0x415242494c5f444cUL, 15)) {
            /* LD_LIBRA */
            bpf_probe_read_str(info->ld_lib, MAX_STR_ENV, &cache->buf[16]);
        } else {
            continue;
        }
    }
out:
    return 0;
}

static __noinline struct sock *proc_socket_info(struct task_struct *task, pid_t *pid)
{
    struct task_struct *parent;
    struct sock *sk;

    /* try find sockfd for current (given) task */
    sk = find_sockfd(task);
    if (sk) {
        *pid = BPF_CORE_READ(task, tgid);
        goto out;
    }
    /* process for parent process of current */
    parent = (struct task_struct *)BPF_CORE_READ(task, real_parent);
    if (!parent || parent == task)
        goto out;
    sk = find_sockfd(parent);
    if (sk) {
        *pid = BPF_CORE_READ(parent, tgid);
        goto out;
    }
    /* process grandfather process */
    task = parent;
    parent = (struct task_struct *)BPF_CORE_READ(task, real_parent);
    if (!parent || parent == task)
        goto out;
    sk = find_sockfd(parent);
    if (sk) {
        *pid = BPF_CORE_READ(parent, tgid);
        goto out;
    }
out:
    return sk;
}

#endif

/* from Elkeid 1.8-rc, easier way to match */
static __noinline int match_key(char *envs, int lenv, uint64_t key, int es)
{
    uint64_t *d = (void *)envs;
    return (lenv > es && *d == key && envs[es & MAX_STR_MASK] == '=');
}