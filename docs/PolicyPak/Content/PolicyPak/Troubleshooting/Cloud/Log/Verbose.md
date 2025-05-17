---
sidebar_position: 3952
title: How to enable verbose MSIEXEC logging for the installation of Endpoint Policy
  Manager Cloud Client MSI/Client Side Extension MSI?
---

# How to enable verbose MSIEXEC logging for the installation of Endpoint Policy Manager Cloud Client MSI/Client Side Extension MSI?

Below is the example of using msiexec command to create a verbose installation log file, define its location
and level of log messages.

**Step 1 –** Open command prompt, navigate to the folder with Netwrix Endpoint Policy Manager (formerly PolicyPak) installation MSI file (use cd
command).

**Step 2 –** Modify and paste the following command:

`msiexec /i "PathToMSIfile.msi" /L*v "C:/your_folder/LogFilename.txt"`

More parameters for msiexec command may be found at 

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Log/928_1_image-20230207215348-7_950x351.png)