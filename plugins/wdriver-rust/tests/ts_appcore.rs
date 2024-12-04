use wdriver_rs::appcore::app_account;
use wdriver_rs::appcore::app_net;

#[test]
// pub fn unit_test_account() {
//     let b = app_account::AppAccount::init();
//     if b {
//         println!("account init success.");
//     }
// }

pub fn unit_test_network() {
    let b = app_net::AppNetwork::init();
    if b {
        println!("account init success.");
    }
}