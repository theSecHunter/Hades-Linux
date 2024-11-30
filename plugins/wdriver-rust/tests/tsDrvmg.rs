use netCom::DrivenManageImpl;

#[test]
// 驱动启动状态
pub fn UnitGetDrivenStu() {
    let strDrivenName :String= String::from("\\Hades\\HadesNet");
    let mut hObjDrivenMang: DrivenManageImpl = DrivenManageImpl::new();
    let bSuc: bool = hObjDrivenMang.OpenDriverHandle(strDrivenName);
    loop {
        if bSuc == false {
            break;
        }
        // checkout handle invalid
        if hObjDrivenMang.m_hDriver.is_invalid() {
            break;
        }
        
        break;
    }
}