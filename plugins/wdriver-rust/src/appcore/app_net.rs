use std::ops::Deref;

use netstat2::*;
use sysinfo::*;
use crate::{appcore::app_include::AppNetWorkInfo};

pub struct AppNetwork {
    pub network_info: Vec<AppNetWorkInfo>,
}

impl AppNetwork {
    pub fn init() -> bool{
        let mut network_info: Vec<AppNetWorkInfo> = vec![];
        let bok = Self::get_socket_info(&mut network_info);
        if false == bok {
            return false;
        }

        Self {
            network_info: network_info,
        };
        return true;
    }

    pub fn get_socket_info(network_info:&mut Vec<AppNetWorkInfo>) -> bool{
        let af_flags: AddressFamilyFlags = AddressFamilyFlags::all();
        let proto_flags: ProtocolFlags = ProtocolFlags::all();
        let sockets_info = get_sockets_info(af_flags, proto_flags);
        if sockets_info.is_err() {
            return false;
        }
        let mut sysinfo = System::new_all();
        sysinfo.refresh_processes(ProcessesToUpdate::All, true);

        if let Ok(sockets_info) = sockets_info {
            for si in sockets_info {
                let proc_info = si
                    .associated_pids
                    .into_iter()
                    .find_map(|pid| sysinfo.process(Pid::from_u32(pid))).unwrap();
                    // .map(|p| ProcessInfo::new(&p.name().to_string_lossy(), p.pid().as_u32()))
                    // .unwrap_or_default();
                let mut cmdline  = "".to_string();
                for s in proc_info.cmd() {
                    if s.is_empty() {
                        continue;
                    }
                    cmdline.push_str(s.clone().into_string().unwrap().as_str());
                    cmdline.push_str("|");
                }
                match si.protocol_socket_info {
                    ProtocolSocketInfo::Tcp(tcp_si) => {
                        let network_ctx: AppNetWorkInfo = AppNetWorkInfo {
                            pid: proc_info.pid().as_u32(),
                            th32parentprocessid: match proc_info.parent() {
                                Some(_) => { proc_info.parent().unwrap().as_u32() },
                                None => { 0 },
                            },
                            processname: proc_info.name().to_os_string().into_string().unwrap(),
                            cmd: cmdline,
                            protocol: "TCP".to_string(),
                            localaddress: tcp_si.local_addr.to_string(),
                            remoteaddress: tcp_si.remote_addr.to_string(),
                            localport: tcp_si.local_port as u32,
                            remoteport: tcp_si.remote_port as u32,
                            state: tcp_si.state.to_string(),
                        };
                        network_info.push(network_ctx);
                    }
                    ProtocolSocketInfo::Udp(udp_si) => {
                        let network_ctx: AppNetWorkInfo = AppNetWorkInfo {
                            pid: proc_info.pid().as_u32(),
                            th32parentprocessid: match proc_info.parent() {
                                Some(_) => { proc_info.parent().unwrap().as_u32() },
                                None => { 0 },
                            },
                            processname: proc_info.name().to_os_string().into_string().unwrap(),
                            cmd: "".to_string(),
                            protocol: "UDP".to_string(),
                            localaddress: udp_si.local_addr.to_string(),
                            remoteaddress: "".to_string(),
                            localport: udp_si.local_port as u32,
                            remoteport: 0,
                            state: "".to_string(),
                        };
                        network_info.push(network_ctx);
                    }
                }
            }
        }

        if network_info.is_empty() {
            return false;
        }
        return true;
    }
    
}