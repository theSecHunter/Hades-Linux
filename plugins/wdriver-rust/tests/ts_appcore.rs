use wdriver_rs::appcore::app_account;
use wdriver_rs::appcore::app_net;
use wdriver_rs::appcore::app_process;

#[test]
pub fn unit_test_account() {
    let b = app_account::AppAccount::init();
    if b {
        println!("account init success.");
    }
}

#[test]
pub fn unit_test_network() {
    let b = app_net::AppNetwork::init();
    if b {
        println!("network init success.");
    }
}

#[test]
pub fn unit_test_processinfo() {
    let b = app_process::AppProcess::init();
    if b {
        println!("process init success.");
    }
}