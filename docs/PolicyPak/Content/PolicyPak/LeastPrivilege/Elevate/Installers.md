---
sidebar_position: 4165
title: How do I elevate installers that are classified as Installers but not Applications?
  Like Ninite, 7z, or Self-Extract?
---

# How do I elevate installers that are classified as Installers but not Applications? Like Ninite, 7z, or Self-Extract?

The problem is when you elevating an application but it keeps giving the UAC prompt.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/723_1_uac.png)

Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager detects Application Installers by searching for default keywords in FileDescription, ProductName, OriginalFileName, InternalName or Comments from File Information.It also searches for keywords in Description section from File Manifest (if exists).

Default keywords are **Setup**, **Installer**, **Install**, **Upgrade**, **Update**, **SFX**, **7zS**, **Self-Extract**.

You can extend this list by enabling the Endpoint Policy Manager ADMX setting and entering required keywords. If you don't know how to enable Endpoint Policy Manager ADMX settings then see this link: [Troubleshooting with ADMX files](../../Video/Troubleshooting/ADMXFiles "Troubleshooting with ADMX files")

In this example we are going to show you how to set Ninite installer as an elevated Application Executable.

**Step 1 –** Open **Properties** to view Ninite installer File Description keyword.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/723_2_image-20201103180355-1.png)

**Step 2 –** Browse the following location under Endpoint Policy Manager ADMX Setting and set it as shown in the screenshot:

* Location:

  `Computer Configuration\Administrative Templates\PolicyPak ADMX Settings\Client-Side Extension\Least Privilege Manager\`
* Settings name:

  Use additional keywords to detect Application Installers

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/723_3_image-20201103180355-2.png)