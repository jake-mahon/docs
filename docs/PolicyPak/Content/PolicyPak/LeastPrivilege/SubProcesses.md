---
sidebar_position: 3154
title: Does Endpoint Policy Manager log sub-processes when launched from within CMD
  or Powershell?
---

# Does Endpoint Policy Manager log sub-processes when launched from within CMD or Powershell?

Yes. In the example below, an elevated command prompt (perhaps elevated by Self Elevate), you can see the command net stop spooler logged in the event log.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1335_1_3cd9340de297397c581bc79215cfae2d.png)

**NOTE:** If you are not seeing this be sure to upgrade to latest CSE.

*Remember,* internal commands like: DIR or SET won't be logged; the command must be an external command.