extern crate yaml_rust;
use napi::threadsafe_function::ThreadsafeFunction;
use napi_derive::napi;
use serde::{Deserialize, Serialize};
use std::{
    fs,
    io::Read,
    path::PathBuf,
    ptr::null,
    sync::{
        atomic::{AtomicBool, Ordering},
        Arc,
    },
};
use yaml_rust::{YamlEmitter, YamlLoader};

pub struct RuleImpl {
    // // dns
    // rule_dns: Arc<RuleDns>,

    // // redirect
    // rule_redirect: Arc<RuleRediRect>,

    // // transport
    // rule_transport: Arc<RuleTranSport>,

    // // directory
    // rule_directory: Arc<RuleDirectoryArray>,

    // // process
    // rule_process: Arc<RuleProcess>,

    // // thread
    // rule_thread: Arc<RuleThread>,

    // // register
    // rule_register: Arc<RuleResgiter>,
    // dns
    rule_dns: RuleDns,

    // redirect
    rule_redirect: RuleRediRect,

    // transport
    rule_transport: RuleTranSport,

    // directory
    rule_directory: RuleDirectoryArray,

    // process
    rule_process: RuleProcess,

    // thread
    rule_thread: RuleThread,

    // register
    rule_register: RuleResgiter,
}

impl RuleImpl {
    pub async fn init() -> bool {
        // get cuurent exec path
        let current_path = std::env::current_dir()
            .unwrap()
            .to_str()
            .unwrap()
            .to_string();
        if current_path.is_empty() {
            log::error!("Get Rule DirPath Failuer.");
            return false;
        }

        // init dns rule
        let mut rule_dns = RuleDns {
            name: "".to_string(),
            address: "".to_string(),
            protocol: "".to_string(),
            action: "".to_string(),
        };
        {
            let mut _data: String = String::from("");
            let rule_path: String = current_path.clone() + "\\config\\networkRuleConfig.yaml";
            let b: bool = RuleImpl::get_dns_rule(rule_path, &mut _data);
            if true == b {
                println!("analyze dns rule success. {}", _data);
            } else {
                log::error!("get dns rule fails.");
            }
        }

        // init redirect rule
        let mut rule_redirect = RuleRediRect {
            name: "".to_string(),
            address: "".to_string(),
            protocol: "".to_string(),
            action: "".to_string(),
        };
        {
            let mut _data: String = String::from("");
            let rule_path: String = current_path.clone() + "\\config\\networkRuleConfig.yaml";
            let b: bool = RuleImpl::get_redirect_rule(rule_path, &mut _data);
            if true == b {
                println!("analyze redirect rule success. {}", _data);
            } else {
                log::error!("get redirect rule fails.");
            }
        }

        // init transport rule
        let mut rule_transport = RuleTranSport {
            name: "".to_string(),
            address: "".to_string(),
            protocol: "".to_string(),
            action: "".to_string(),
        };
        {
            let mut _data: String = String::from("");
            let rule_path: String = current_path.clone() + "\\config\\networkRuleConfig.yaml";
            let b: bool = RuleImpl::get_transport_rule(rule_path, &mut _data);
            if true == b {
                println!("analyze transport rule success. {}", _data);
            } else {
                log::error!("get transport rule fails.");
            }
        }

        // init directory rule
        let mut vec_directory: Vec<RuleDirectory> = Vec::new();
        let mut rule_directory = RuleDirectoryArray {
            rule_array: vec_directory,
        };
        {
            let mut _data: String = String::from("");
            let rule_path: String = current_path.clone() + "\\config\\directoryRuleConfig.json";
            let _ = RuleImpl::get_dirtecory_rule(rule_path, &mut _data);
            // if true == b {
            //     println!("analyze directory success. {}", _data);
            // } else {
            //     log::error!("get directory rule fails.");
            // }
        }

        // init process rule
        let mut rule_process = RuleProcess {
            rule_type: "".to_string(),
            process_name: "".to_string(),
        };
        {
            let mut _data: String = String::from("");
            let rule_path: String = current_path.clone() + "\\config\\processRuleConfig.json";
            let b: bool = RuleImpl::get_process_rule(rule_path, &mut _data);
            if true == b {
                println!("analyze transport success. {}", _data);
            } else {
                log::error!("get transport rule fails.");
            }
        }

        // init thread rule
        let mut rule_thread = RuleThread {
            process_name: "".to_string(),
        };
        {
            let mut _data: String = String::from("");
            let rule_path: String = current_path.clone() + "\\config\\threadRuleConfig.json";
            let b: bool = RuleImpl::get_thread_rule(rule_path, &mut _data);
            if true == b {
                println!("analyze thread success. {}", _data);
            } else {
                log::error!("get thread rule fails.");
            }
        }

        // init register rule
        let mut rule_register = RuleResgiter {
            rule_type: "".to_string(),
            process_name: "".to_string(),
            register_key: "".to_string(),
            register_permiss: "".to_string(),
        };
        {
            let mut _data: String = String::from("");
            let rule_path: String = current_path.clone() + "\\config\\registerRuleConfig_.json";
            let b: bool = RuleImpl::get_register_rule(rule_path, &mut _data);
            if true == b {
                println!("analyze register success. {}", _data);
            } else {
                log::error!("get register rule fails.");
            }
        }

        Self {
            rule_dns,
            rule_redirect,
            rule_transport,
            rule_directory,
            rule_process,
            rule_thread,
            rule_register,
        };

        return true;
    }

    // Read json, yaml Data
    pub fn read_file_data(file_path: String, _data: &mut String) -> bool {
        if file_path.is_empty() || null() == _data {
            return false;
        }
        if !PathBuf::from(file_path.to_string()).exists() {
            log::error!("Checkout Yaml File exists failuer. {}", file_path);
            return false;
        }
        *_data = fs::read_to_string(file_path.to_string()).unwrap();
        return true;
    }

    // Analyze dns rule
    pub fn get_dns_rule(file_path: String, _data: &mut String) -> bool {
        if file_path.is_empty() {
            return false;
        }

        RuleImpl::read_file_data(file_path, _data);
        if _data.is_empty() {
            return false;
        }

        let docs: Vec<yaml_rust::Yaml> = YamlLoader::load_from_str(_data).unwrap();

        // Multi document support, doc is a yaml::Yaml
        let doc: &yaml_rust::Yaml = &docs[0];

        // Debug support
        println!("{:?}", doc);

        // Index access for map & array
        // assert_eq!(doc["foo"][0].as_str().unwrap(), "list1");
        // assert_eq!(doc["bar"][1].as_f64().unwrap(), 2.0);

        // // Chained key/array access is checked and won't panic,
        // // return BadValue if they are not exist.
        // assert!(doc["INVALID_KEY"][100].is_badvalue());

        // // Dump the YAML object
        // let mut out_str = String::new();
        // {
        //     let mut emitter = YamlEmitter::new(&mut out_str);
        //     emitter.dump(doc).unwrap(); // dump the YAML object to a String
        // }
        // println!("{}", out_str);
        return true;
    }

    // Analyze Redirect rule
    pub fn get_redirect_rule(file_path: String, _data: &mut String) -> bool {
        if file_path.is_empty() {
            return false;
        }

        RuleImpl::read_file_data(file_path, _data);
        if _data.is_empty() {
            return false;
        }

        let docs: Vec<yaml_rust::Yaml> = YamlLoader::load_from_str(_data).unwrap();

        // Multi document support, doc is a yaml::Yaml
        let doc: &yaml_rust::Yaml = &docs[0];

        // Debug support
        println!("{:?}", doc);
        return true;
    }

    // Analyze transport layer rule
    pub fn get_transport_rule(file_path: String, _data: &mut String) -> bool {
        if file_path.is_empty() {
            return false;
        }

        RuleImpl::read_file_data(file_path, _data);
        if _data.is_empty() {
            return false;
        }

        let docs: Vec<yaml_rust::Yaml> = YamlLoader::load_from_str(_data).unwrap();

        // Multi document support, doc is a yaml::Yaml
        let doc: &yaml_rust::Yaml = &docs[0];

        // Debug support
        println!("{:?}", doc);
        return true;
    }

    // Analyze directory rule
    pub fn get_dirtecory_rule(file_path: String, _data: &mut String) -> Result<(), napi::Error> {
        loop {
            if file_path.is_empty() {
                break;
            }
            RuleImpl::read_file_data(file_path, _data);
            if _data.is_empty() {
                break;
            }
            let rule_array: RuleDirectoryArray = serde_json::from_str(&_data)?;
            break;
        }

        Ok(())
    }

    // Analyze process rule
    pub fn get_process_rule(file_path: String, _data: &mut String) -> bool {
        return true;
    }

    // Analyze thread rule
    pub fn get_thread_rule(file_path: String, _data: &mut String) -> bool {
        return true;
    }

    // Analyze register rule
    pub fn get_register_rule(file_path: String, _data: &mut String) -> bool {
        return true;
    }
}

#[derive(Serialize, Deserialize)]
pub struct RuleDns {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "address")]
    pub address: String,
    #[serde(rename = "protocol")]
    pub protocol: String,
    #[serde(rename = "action")]
    pub action: String,
}

#[derive(Serialize, Deserialize)]
pub struct RuleRediRect {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "address")]
    pub address: String,
    #[serde(rename = "protocol")]
    pub protocol: String,
    #[serde(rename = "action")]
    pub action: String,
}

#[derive(Serialize, Deserialize)]
pub struct RuleTranSport {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "address")]
    pub address: String,
    #[serde(rename = "protocol")]
    pub protocol: String,
    #[serde(rename = "action")]
    pub action: String,
}

#[derive(Serialize, Deserialize)]
pub struct RuleDirectory {
    #[serde(rename = "FileIORuleMod")]
    pub rule_type: String,
    #[serde(rename = "processName")]
    pub process_name: String,
    #[serde(rename = "Directory")]
    pub directory_path: String,
}
#[derive(Serialize, Deserialize)]
pub struct RuleDirectoryArray {
    rule_array: Vec<RuleDirectory>,
}

#[derive(Serialize, Deserialize)]
pub struct RuleProcess {
    #[serde(rename = "processRuleMod")]
    pub rule_type: String,
    #[serde(rename = "processName")]
    pub process_name: String,
}

#[derive(Serialize, Deserialize)]
pub struct RuleResgiter {
    #[serde(rename = "registerRuleMod")]
    pub rule_type: String,
    #[serde(rename = "processName")]
    pub process_name: String,
    #[serde(rename = "registerValuse")]
    pub register_key: String,
    #[serde(rename = "permissions")]
    pub register_permiss: String,
}

#[derive(Serialize, Deserialize)]
pub struct RuleThread {
    #[serde(rename = "InjectIpsProcessNameArray")]
    pub process_name: String,
}

// Unit test
#[cfg(test)]
mod test {}
