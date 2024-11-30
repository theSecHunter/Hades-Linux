use windows::{
    core::*, Win32::Foundation::*, Win32::Storage::FileSystem::*, Win32::System::Threading::*,
    Win32::System::IO::*,
};
use std::{fs, ptr::null, io::Read, path::PathBuf};

pub struct DrivenManageImpl {
    pub m_hDriver: HANDLE,
}

impl DrivenManageImpl {
    pub fn new() -> Self {
        Self { m_hDriver: HANDLE(0) }
    }
    
    // Chekcout Driver Status
    pub fn GetStuFormDriver(strDrivenName:String) -> bool {
        
        return true;
    }

    // Open DriverHandle
    pub fn OpenDriverHandle(&mut self, strDrivenName:String) -> bool {
        unsafe {
            let dwAttribute:u32 = 2147483648u32 | 1073741824u32;
            let hResult: std::prelude::v1::Result<HANDLE, Error> = CreateFileA(
                PCSTR(strDrivenName.as_ptr()),
                dwAttribute,
                FILE_SHARE_MODE(0),
                None,
                OPEN_EXISTING,
                FILE_FLAG_OVERLAPPED,
                None,
            );
            if hResult.is_ok() {
                let hDriver: HANDLE = hResult.unwrap();
                self.m_hDriver = hDriver;
                return true;
            }
            else {
                let hResultError: std::prelude::v1::Result<(), Error> = GetLastError();
                println!("{}",hResultError.unwrap_err().code()); 
                return false;
            }
        }
    }

    // Send Data Pop Data
    pub fn  SendDataToDriver(iCode:u32, cData:String) -> bool {
        unsafe {

        }
        return true;
    }

    // Read Data Push Queue
    pub fn ReadDataFromDriver() {

    }
}