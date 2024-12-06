
use crate::{util::windwos_autostart::App, appcore::app_include::AppRegRunInfo, appcore::app_include::AppTaskSchedulerRunInfo};

pub struct AppAutoStart {
    astart_register: Vec<AppRegRunInfo>,
    astart_tasksched: Vec<AppTaskSchedulerRunInfo>,
}

impl AppAutoStart {

    pub fn init() -> bool {
        let mut astart_register: Vec<AppRegRunInfo> = vec![];
        let mut astart_tasksched: Vec<AppTaskSchedulerRunInfo> = vec![];
        
        let _ = Self::get_astart_register(&mut astart_register);
        let _ = Self::get_astart_taskschedu(&mut astart_tasksched);

        if astart_register.is_empty() && astart_tasksched.is_empty() {
            return false;
        }

        Self {
            astart_register: astart_register,
            astart_tasksched: astart_tasksched,
        };
        return true;
    }

    pub fn get_astart_register(astart_register:&mut Vec<AppRegRunInfo>) -> bool {
        let apps = App::list().unwrap();
        for app in apps {
        }
        if astart_register.is_empty() {
            return false;
        }
        return true;
    }

    pub fn get_astart_taskschedu(astart_tasksched:&mut Vec<AppTaskSchedulerRunInfo>) -> bool {
        
        if astart_tasksched.is_empty() {
            return false;
        }
        return true;
    }

}
