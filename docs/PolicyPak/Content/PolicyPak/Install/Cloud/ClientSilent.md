---
sidebar_position: 4223
title: How do I deploy the Endpoint Policy Manager Cloud Client via command line silently?
---

# How do I deploy the Endpoint Policy Manager Cloud Client via command line silently?

The Command line is an easy way to deploy the Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud , providing a silent install that does not require a reboot.

Here are some examples of typical silent command lines to run:

```
To install the Cloud Client quietly with no UI:  
msiexec /i "C:\Temp\PolicyPak Cloud Client for company name.msi" /qn  
  
To install the Cloud Client quietly with no UI and no restart:  
msiexec /i "C:\Temp\PolicyPak Cloud Client for company name.msi" /qn /norestart  
  
To install the Cloud Client quietly using JOINTOKEN with no UI and no restart:  
msiexec /i "C:\Temp\PolicyPak Cloud Client for company name.msi" JOINTOKEN="AXBCDeVXbieqP9WUWQwnYM=" /qn /norestart
```
**NOTE:**  Replace `JOINTOKEN="AXBCDeVXbieqP9WUWQwnYM="` with the relevant JOINTOKEN string for your environment. See this video for more information on how to use JOINTOKEN:

[Endpoint Policy Manager Cloud: Automatically Join Groups with JOINTOKEN](../../Video/Cloud/JoinToken "Endpoint Policy Manager Cloud: Automatically Join Groups with JOINTOKEN")

For more information on the MSIEXEC command line switches, see this article: [Microsoft Standard Installer command-line options](https://docs.microsoft.com/en-us/windows/win32/msi/standard-installer-command-line-options "Microsoft Standard Installer command-line options")

You may also create a command file to run the install and collect logs.

```
setlocal  
set d=%DATE:~-4%-%DATE:~4,2%-%DATE:~7,2%  
set t=%time::=.%  
set t=%t: =%  
set logfile="%d%_%t%.log"  
msiexec /i %1 /norestart /quiet /lv*x %logfile%
```
![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Install/Cloud/530_1_image-20230330095004-1.png)