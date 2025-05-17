---
sidebar_position: 3972
title: "Extended AppLock\u2122 Logs"
---

# Extended AppLock™ Logs

Technical support may ask you to turn on extended AppLock™ logging if the locking mechanism isn't working as expected. Navigate to `HKLM\SOFTWARE\PolicyPak\Config\AppLock` and set `ExtendedLogs` to a `REG_DWORD` value 1 of as seen in Figure 97.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/ApplicationSettings/Troubleshooting PolicyPak_1.png)

Figure 97. The AppLock key will not exist by default and must be created before the value is set within it.

AppLock™ logs are stored in separate files for each app. For example, WinZip logs are now located in `%localappdata%\PolicyPak\AppLock\WINZIP.EXE\ppAlClient.log`