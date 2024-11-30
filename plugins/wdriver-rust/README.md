# Hades Windows Driver

wdriver-rsut优先提供Windows插件模块管理，管理组件核心dll
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

依赖于Driver驱动能力
```
SysMonDrvlib64 -> sysmondriver.sys - 内核驱动
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/sysmondrv
```

```
NetDrvlib64 -> hadesndr.sys - 网络驱动
https://github.com/theSecHunter/Hades-Windows/tree/main/MonitorEvent/netdrvlib
```

wdriver-rsut目标替换c++组件库，整合NetDrvlib64，RuleEnginelib64，SysMonDrvlib64，SysMonUserlib64动态库能力，重构插件。

```
rule.rs -> RuleEnginelib64.dll - 规则引擎
```

```
knetfilter.rs -> NetDrvlib64.dll - 内核网络
```

```
kmonfilter.rs -> SysMonDrvlib64.dll - 内核探针
```

```
umonfilter.rs -> SysMonUserlib64.dll - 用户态探针
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