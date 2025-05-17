---
sidebar_position: 3116
title: What are the two ways that can I install the GPMC on my Admin Station (Server
  or Windows 10) machine?
---

# What are the two ways that can I install the GPMC on my Admin Station (Server or Windows 10) machine?

There are two ways to install the GPMC.

If you want to use a server as your GPMC editing station, you'll need to get the GPMC installed there.

**NOTE:**  This is already on your DCs, but Netwrix Endpoint Policy Manager (formerly PolicyPak) does not require that you install the admin console MSI into a DC.

On a server, go into Server Manager and select it as a featureto add.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Install/268_1_img-01_950x550.png)

You can also install the GPMC on a Windows 10 client,which is preferred method. If you want to do this, there are two ways.

## 1: Download the Windows 10 RSAT tools.

This is the most reliable way to get the GPMC installed. First, download them from Microsoft here: [https://www.microsoft.com/en-us/download/details.aspx?id=45520](https://www.microsoft.com/en-us/download/details.aspx?id=45520 "Remote Server Administration Tools for Windows 10")

Next, verify that the GPMC gets installed and checked on automatically.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Install/268_3_img-02.png)

## 2: Use PowerShell in Windows 10 (Windows 10 1809 and later)

If you install Windows 10 1809 or later, you can install the GPMC with a DISM command:

`DISM.exe /Online /add-capability /CapabilityName:Rsat.GroupPolicy.Management.Tools~~~~0.0.1.0`

The result will look like this.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Install/268_5_img-03_950x237.png)

Now you are ready to install the Endpoint Policy Manager Admin Console MSI, which then gets you the Endpoint Policy Manager node within the Group Policy Editor.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Install/268_7_img-04_950x743.png)