---
sidebar_position: 3959
title: 'Internet Explorer: Why does IE fail to launch after I apply ACL lockdown or
  all of the IE AppSet STIG settings?'
---

# Internet Explorer: Why does IE fail to launch after I apply ACL lockdown or all of the IE AppSet STIG settings?

There are some settings, which when you use ACL lockdown, will prevent IE from launching.

Removing ACL lockdown on either of these settings permits IE to launch:

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/ApplicationSettings/284_1_ghjgdffhykui88dr.png)

Under the hood, the keys that are edited are in

```
HKEY_Current_UserSoftwareMicrosoftInternet ExplorerMain
```