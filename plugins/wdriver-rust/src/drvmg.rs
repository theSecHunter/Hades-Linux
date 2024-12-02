use std::{fs, io::Read, path::PathBuf, ptr::null};
use windows::{
    core::*, Win32::Foundation::*, Win32::Storage::FileSystem::*, Win32::System::Threading::*,
    Win32::System::IO::*,
};

pub struct DrivenManageImpl {
    pub handle: HANDLE,
}

impl DrivenManageImpl {
    pub fn new() -> Self {
        Self { handle: HANDLE(0) }
    }

    // Chekcout Driver Status
    pub fn get_driver_stu(driver_name: String) -> bool {
        return true;
    }

    // Open DriverHandle
    pub fn open_driver_handle(&mut self, driver_name: String) -> bool {
        unsafe {
            let dwAttribute: u32 = 2147483648u32 | 1073741824u32;
            let hResult: std::prelude::v1::Result<HANDLE, Error> = CreateFileA(
                PCSTR(driver_name.as_ptr()),
                dwAttribute,
                FILE_SHARE_MODE(0),
                None,
                OPEN_EXISTING,
                FILE_FLAG_OVERLAPPED,
                None,
            );
            if hResult.is_ok() {
                let hDriver: HANDLE = hResult.unwrap();
                self.handle = hDriver;
                return true;
            } else {
                let hResultError: std::prelude::v1::Result<(), Error> = GetLastError();
                println!("{}", hResultError.unwrap_err().code());
                return false;
            }
        }
    }

    // Send Data Pop Data
    pub fn send_driver_data(code: u32, data: String) -> bool {
        return true;
    }

    // Read Data Push Queue
    pub fn read_driver_data() {}
}
