use sysinfo::*;

use crate::{appcore::app_include::AppProcessInfo};

pub struct AppProcess {
    pub process_info: Vec<AppProcessInfo>,
}

impl AppProcess {
    pub fn init() -> bool {
        let mut process_info: Vec<AppProcessInfo> = vec![];
        let bOk = Self::get_process_info(&mut process_info);
        if false == bOk {
            return false;
        }

        Self {
            process_info: process_info,
        };
        return true;
    }

    pub fn get_process_info(process_info:&mut Vec<AppProcessInfo>) -> bool {
        let mut sysinfo = System::new_all();
        sysinfo.refresh_processes(ProcessesToUpdate::All, true);

        for (pid, process) in sysinfo.processes() {
            let mut cmdline  = "".to_string();
            for s in process.cmd() {
                if s.is_empty() {
                    continue;
                }
                cmdline.push_str(s.clone().into_string().unwrap().as_str());
                cmdline.push_str("|");
            }
            let process_ctx = AppProcessInfo{
                pid: pid.as_u32(),
                th32parentprocessid: match process.parent() {
                    Some(_) => { process.parent().unwrap().as_u32() },
                    None => { 0 },
                },
                exefile: process.name().to_os_string().into_string().unwrap(),
                priclassbase: process.status().to_string(),
                threadcount: 0,
                processfullpath: cmdline,
            };
            process_info.push(process_ctx);
        }

        if process_info.is_empty() {
            return false;
        }
        return true;
    }
    
}
