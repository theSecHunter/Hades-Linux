# Hades Windows Driver

wdriver-rsut等同于HadesSvc
```
HadesSvc - 插件服务
https://github.com/theSecHunter/Hades-Windows/tree/main/HadSvc
```
```
NetDrvlib64.dll - 内核网络
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/netdrvlib
```

```
RuleEnginelib64.dll - 规则引擎
https://github.com/theSecHunter/Hades-Windows/tree/main/RuleEngineSvc
```

```
SysMonDrvlib64.dll - 内核探针
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/sysmondrvlib
```

```
SysMonUserlib64.dll - 用户态探针
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/sysmonuserlib
```

依赖Driver驱动
```
SysMonDrvlib64 -> sysmondriver.sys - 内核驱动
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/sysmondrv
```

```
NetDrvlib64 -> hadesndr.sys - 网络驱动
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/netdrvlib
```

wdriver-rsut目标重构c++组件库HadesSvc，整合NetDrvlib64，RuleEnginelib64，SysMonDrvlib64，SysMonUserlib64动态库能力。

```
config/config.rs -> RuleEnginelib64.dll - 规则引擎
```

```
kercore/wfp -> NetDrvlib64.dll - 内核网络
```

```
kercore/ark -> SysMonDrvlib64.dll - 内核探针
```

```
appcore -> SysMonUserlib64.dll - 用户态探针
```

driver sys不变
```
kmonfilter -> sysmondriver.sys - 内核驱动
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/sysmondrv
```

```
knetfilter -> hadesndr.sys - 网络驱动
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/netdrvlib
```