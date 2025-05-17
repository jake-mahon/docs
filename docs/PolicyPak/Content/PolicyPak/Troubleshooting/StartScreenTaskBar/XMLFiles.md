---
sidebar_position: 3895
title: Inspecting the XML Files
---

# Inspecting the XML Files

Start Screen & Taskbar Manager will dynamically write the file that Windows needs to make the Start Screen and Taskbar. This file is called ssmResults.xml, and there will be one file per user located in

`%programdata%\PolicyPak\PolicyPak Start Screen Manager\RSoP\User\`, as seen in Figure 58. A good first troubleshooting step would be to see what the file contains.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Troubleshooting.png)

Figure 58. The ssmResults.xml file shows what Start Screen & Taskbar Manager has performed.

In looking at the ssmResults.xml file, you can see which icons are to be in which groups, and also which should be pinned to the Taskbar. If you are expecting an application to be present on the Start Menu or Taskbar, but it is absent, start by checking this file to see if the application is present. If the association is absent, then, most likely, the target computer didn't get the policy to add the icon to the Start Menu or Taskbar.