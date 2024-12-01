use fast_log::{consts::LogSize, plugin::{file_split::RollingType, packer::LogPacker}};
use wdriver_rs::rule::RuleImpl;

#[test]
pub fn unit_get_dns_rule() {
    let mut yaml_data: String = String::from("");
    let mut current_path = std::env::current_dir().unwrap().to_str().unwrap().to_string();
    if current_path.is_empty() {
        log::error!("Get Rule DirPath Failuer.");
        return;
    }
    let rule_path: String = current_path + "\\config\\networkRuleConfig.yaml";
    let b: bool = RuleImpl::get_dns_rule(rule_path, &mut yaml_data);
    if false == b {
        log::error!("Get Rule DirPath Failuer.");
        return;
    }
    println!("Analyze Rule Success. {}", yaml_data);
}