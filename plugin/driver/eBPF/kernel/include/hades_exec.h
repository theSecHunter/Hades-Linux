// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Authors: chriskalix@protonmail.com
 */
#ifndef CORE
#include <linux/sched.h>
#include <linux/binfmts.h>
#include <linux/kconfig.h>
#include <linux/prctl.h>
#include <uapi/linux/ptrace.h>
#else
#include <vmlinux.h>
#include <missing_definitions.h>
#endif

#include "define.h"
#include "utils_buf.h"
#include "utils.h"
#include "bpf_helpers.h"
#include "bpf_core_read.h"
#include "bpf_tracing.h"

struct _sys_enter_execve
{
    unsigned long long unused;
    long syscall_nr;
    const char *filename;
    const char *const *argv;
    const char *const *envp;
};

struct _sys_exit_execve
{
    unsigned long long unused;
    long syscall_nr;
    long ret;
};

struct _sys_enter_execveat
{
    unsigned long long unused;
    long syscall_nr;
    int fd;
    const char *filename;
    const char *const *argv;
    const char *const *envp;
    int flags;
};

struct _tracepoint_sched_process_fork
{
    unsigned long long unused;
    char parent_comm[16];
    pid_t parent_pid;
    char child_comm[16];
    pid_t child_pid;
};

struct _sys_enter_kill
{
    unsigned long long unused;
    pid_t pid;
    int sig;
};

struct _sys_exit_kill
{
    unsigned long long unused;
    long ret;
};

struct _sys_enter_prctl
{
    unsigned long long unused;
    long syscall_nr;
    int option;
    unsigned long arg2;
    unsigned long arg3;
    unsigned long arg4;
    unsigned long arg5;
};

struct _sys_enter_ptrace
{
    unsigned long long unused;
    long syscall_nr;
    long request;
    long pid;
    unsigned long addr;
    unsigned long data;
};

struct _sys_enter_memfd_create
{
    unsigned long long unused;
    long syscall_nr;
    const char *uname;
    unsigned int flags;
};

/*
 * raw_tracepoint should be considered since it's perform better than
 * tracepoint and kprobe. References are here:
 * https://github.com/aquasecurity/tracee/pull/205
 * https://lwn.net/Articles/748352/
 *
 * Also, fields like stdin/stdout are not same as Elkeid. Need check
 * for this.
 *
 * issue #34: the filename from ctx is not the execute path we
 * expected. We need to get the right execute path from kretprobe or
 * sys_exit_execve in task_struct->mm
 * 
 * Also, in tracee, they said that the argv/envp pointers are invaild
 * in both entry and exit, be careful if we change the hook to raw_
 * tracepoint.
 */

// With *bpf.Fwd, reconsider
// BPF_LRU_HASH(execve_cache, __u64, struct event_data, 10240);

SEC("tracepoint/syscalls/sys_enter_execve")
int sys_enter_execve(struct _sys_enter_execve *ctx)
{
    event_data_t data = {};
    if (!init_event_data(&data, ctx))
        return 0;
    data.context.type = SYS_ENTER_EXECVE;
    /* filename
     * The filename contains dot slash thing. It's not abs path,
     * but the args[0] of execve(at)
     * like Elkeid, we should get this in kretprobe/exit from
     * the get_exe_from_task function. (current->mm->exe_file->f_path)
     * and it's safe to access path in it's own context
     */
    // void *exe = get_exe_from_task(data.task);
    // save_str_to_buf(&data, exe, 0);
    save_str_to_buf(&data, (void *)ctx->filename, 0);

    struct fs_struct *file = get_task_fs(data.task);
    if (file == NULL)
        return 0;
    void *file_path = get_path_str(GET_FIELD_ADDR(file->pwd));
    save_str_to_buf(&data, file_path, 1);

    void *ttyname = get_task_tty_str(data.task);
    save_str_to_buf(&data, ttyname, 2);

    void *stdin = get_fraw_str(0);
    save_str_to_buf(&data, stdin, 3);

    void *stdout = get_fraw_str(1);
    save_str_to_buf(&data, stdout, 4);

    get_socket_info(&data, 5);

    save_pid_tree_to_buf(&data, 8, 6);
    save_str_arr_to_buf(&data, (const char *const *)ctx->argv, 7);
    save_envp_to_buf(&data, (const char *const *)ctx->envp, 8);
    return events_perf_submit(&data);
    // __u64 pid = bpf_get_current_pid_tgid();
    // return bpf_map_update_elem(&execve_cache, &pid, &data, BPF_ANY);
}

// SEC("tracepoint/syscalls/sys_exit_execve")
// int sys_exit_execve(struct _sys_exit_execve *ctx)
// {
//     __u64 pid = bpf_get_current_pid_tgid();
//     event_data_t *data = NULL;
//     data = bpf_map_lookup_elem(&execve_cache, &pid);
//     if (data == NULL)
//         return 0;
//     if (ctx->ret < 0)
//         goto clean;
//     // events_perf_submit(data);
//     bpf_probe_read(&(data->submit_p->buf[0]), sizeof(context_t), &data->context);
//     int size = data->buf_off & (MAX_PERCPU_BUFSIZE - 1);
//     void *output_data = data->submit_p->buf;
//     bpf_perf_event_output(data->ctx, &exec_events, BPF_F_CURRENT_CPU, output_data, size);
// clean:
//     bpf_map_delete_elem(&execve_cache, &pid);
//     return 0;
// }

SEC("tracepoint/syscalls/sys_enter_execveat")
int sys_enter_execveat(struct _sys_enter_execveat *ctx)
{
    event_data_t data = {};
    if (!init_event_data(&data, ctx))
        return 0;
    data.context.type = SYS_ENTER_EXECVEAT;
    // filename
    save_str_to_buf(&data, (void *)ctx->filename, 0);
    // cwd
    struct fs_struct *file = get_task_fs(data.task);
    if (file == NULL)
        return 0;
    void *file_path = get_path_str(GET_FIELD_ADDR(file->pwd));
    save_str_to_buf(&data, file_path, 1);
    // tty
    void *ttyname = get_task_tty_str(data.task);
    save_str_to_buf(&data, ttyname, 2);
    // stdin
    void *stdin = get_fraw_str(0);
    save_str_to_buf(&data, stdin, 3);
    // stdout
    void *stdout = get_fraw_str(1);
    save_str_to_buf(&data, stdout, 4);
    // socket
    get_socket_info(&data, 5);
    // pid_tree
    save_pid_tree_to_buf(&data, 8, 6);
    save_str_arr_to_buf(&data, (const char *const *)ctx->argv, 7);
    save_envp_to_buf(&data, (const char *const *)ctx->envp, 8);
    return events_perf_submit(&data);
}

/*
 * Prctl(CAP)/Ptrace(SYS_ENTER) inject process
 * In Elkeid, only PR_SET_NAME is collected, in function "prctl_pre_handler".
 * using PR_SET_NAME to set name for a process or thread. prctl is the
 * function that we use for change(get) the attribute of threads. But there
 * are too many options for this function. Some references:
 *
 * http://www.leveryd.top/2021-12-26-%E5%A6%82%E4%BD%95%E4%BC%AA%E8%A3%85%E8%BF%9B%E7%A8%8B%E4%BF%A1%E6%81%AF/
 * https://stackoverflow.com/questions/57749629/manipulating-process-name-and-arguments-by-way-of-argv
 * https://www.blackhat.com/docs/us-16/materials/us-16-Leibowitz-Horse-Pill-A-New-Type-Of-Linux-Rootkit.pdf
 */
SEC("tracepoint/syscalls/sys_enter_prctl")
int sys_enter_prctl(struct _sys_enter_prctl *ctx)
{
    event_data_t data = {};
    if (!init_event_data(&data, ctx))
        return 0;
    data.context.type = SYS_ENTER_PRCTL;

    int option;
    char *newname = NULL;
    unsigned long flag2;

    bpf_probe_read(&option, sizeof(option), &ctx->option);
    if (option != PR_SET_NAME && option != PR_SET_MM)
        return 0;
    save_to_submit_buf(&data, &option, sizeof(int), 0);

    void *exe = get_exe_from_task(data.task);
    save_str_to_buf(&data, exe, 1);

    switch (option)
    {
    case PR_SET_NAME:
        bpf_probe_read_user_str(&newname, TASK_COMM_LEN, (char *)ctx->arg2);
        save_str_to_buf(&data, &newname, 2);
        break;
        /*
         * Some reference:
         * https://man7.org/linux/man-pages/man2/prctl.2.html
         * https://cloud.tencent.com/developer/article/1040079
         */
    case PR_SET_MM:
        bpf_probe_read_user(&flag2, sizeof(flag2), &ctx->arg2);
        save_to_submit_buf(&data, &flag2, sizeof(unsigned long), 2);
        break;
    default:
        break;
    }
    return events_perf_submit(&data);
}

// @Reference: https://www.giac.org/paper/gcih/467/tracing-ptrace-case-study-internal-root-compromise-incident-handling/105271
// @Reference: https://driverxdw.github.io/2020/07/06/Linux-ptrace-so%E5%BA%93%E6%B3%A8%E5%85%A5%E5%88%86%E6%9E%90/
SEC("tracepoint/syscalls/sys_enter_ptrace")
int sys_enter_ptrace(struct _sys_enter_ptrace *ctx)
{
    event_data_t data = {};
    if (!init_event_data(&data, ctx))
        return 0;
    data.context.type = SYS_ENTER_PTRACE;
    long request;
    bpf_probe_read(&request, sizeof(request), &ctx->request);
    if (request != PTRACE_POKETEXT && request != PTRACE_POKEDATA)
        return 0;

    void *exe = get_exe_from_task(data.task);
    save_str_to_buf(&data, exe, 0);

    save_to_submit_buf(&data, &request, sizeof(long), 1);

    save_to_submit_buf(&data, &ctx->pid, sizeof(long), 2);

    save_to_submit_buf(&data, &ctx->addr, sizeof(unsigned long), 3);

    save_pid_tree_to_buf(&data, 12, 4);
    return events_perf_submit(&data);
}

// https://xeldax.top/article/linux_no_file_elf_mem_execute
SEC("tracepoint/syscalls/sys_enter_memfd_create")
int sys_enter_memfd_create(struct _sys_enter_memfd_create *ctx)
{
    event_data_t data = {};
    if (!init_event_data(&data, ctx))
        return 0;
    data.context.type = SYS_ENTER_MEMFD_CREATE;
    void *exe = get_exe_from_task(data.task);
    save_str_to_buf(&data, exe, 0);
    save_str_to_buf(&data, (char *)ctx->uname, 1);
    save_to_submit_buf(&data, &ctx->flags, sizeof(unsigned int), 2);
    return events_perf_submit(&data);
}
