use std::ffi::OsString;
use windows_service::{Result, service_dispatcher, service};

use crate::{util::windows_installed::App, appcore::app_include::AppServiceInfo, appcore::app_include::AppSoftWareInfo};

pub struct AppServiceSoftWare {
    services_info: Vec<AppServiceInfo>,
    software_info: Vec<AppSoftWareInfo>,
}

impl AppServiceSoftWare {
    pub fn init() -> bool {
        let mut services_info: Vec<AppServiceInfo> = vec![];
        let mut software_info: Vec<AppSoftWareInfo> = vec![];

        Self::get_services_info(&mut services_info);
        Self::get_software_info(&mut software_info);
        
        Self {
            services_info: services_info,
            software_info: software_info,
        };
        return true;
    }

    pub fn get_services_info(services_info:&mut Vec<AppServiceInfo>) -> bool {


        if services_info.is_empty() {
            return false;
        }
        return true;
    }

    pub fn get_software_info(software_info:&mut Vec<AppSoftWareInfo>) -> bool {
        // read uninstall register valuse
        let apps = App::list().unwrap();
        for app in apps {
            let mut installpath = "".to_string();
            if app.install_path().is_empty() {
                installpath = app.installlocal_path().into_owned();
            }
            else {
                installpath = app.install_path().into_owned();
            }
            let software_ctx = AppSoftWareInfo {
                name:app.name().into_owned(),
                version:app.version().into_owned(),
                helplink: app.helplink().into_owned(),
                size:app.size().into_owned(),
                insatllpath: installpath,
                uninstallpath: app.uninstall_path().into_owned(),
                venrel: app.publisher().into_owned(),
                icopath: app.icon().into_owned(),
            };

            software_info.push(software_ctx);
        }

        if software_info.is_empty() {
            return false;
        }
        return true;
    }
    
}