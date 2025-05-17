---
sidebar_position: 4067
title: IE Message 2
---

# IE Message 2

Another IE Java message you might encounter is as follows:

This program will open outside of Protected mode. Internet Explorer's Protected mode helps protect your computer. If you do not trust this website, do not open this program.

*Name:* `icacls.exe`

Publisher: Microsoft Windows

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_8.png)

This specific prompt is received when the message is set manually or via Group Policy/PolicyPak.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_9.png)

This prompt can be made to automatically never occur again using Group Policy Preferences:

```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\{0F31AF05-4595-4736-BEF3-80ABE79E9211}. 
```
To do this, set the following registry values to the specific types and descriptions shown in the table below..

| Registry Values | Type | Description |
| --- | --- | --- |
| AppName | REG\_SZ | Icacls.exe |
| AppPath | REG\_SZ | C:\Windows\SysWOW64 |
| Policy | REG\_DWord | 3 |

By creating these registry values, you can make the Java messages automatically never pop-up again.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_10.png)

The result is that the prompt for iCacls is no longer received, but the Java applet will not run.