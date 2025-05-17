---
sidebar_position: 3247
title: Intel Driver and Support Assistant
---

# Intel Driver and Support Assistant

If the Intel Driver and Support Assistant cannot install updates when Endpoint Policy Manager CSE is installed, even if all components are unlicensed, see the resolutions below.

Symptom

Any updates that you try to install using the Intel DSA console will display as "canceled".

![Intel Driver and Support Assistant Update error](../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/IntelDSAUpdates.png "Intel Driver and Support Assistant Update error")

Cause

The Least Privilege Manager Explicit Elevate option is intercepting the elevation attempt but does not show a UAC prompt, which is needed for the update to install.

Resolution 1

See the Scenario 2 section of the [How can I change the behavior of "Run as Admin" with Endpoint Privilege Manager and how has it changed from previous versions?](../LeastPrivilege/RunAsAdmin.htm "How can I change the behavior of /"Run as Admin/" with Endpoint Privilege Manager and how has it changed from previous versions?") topic for additional information on how to disable the Explicit Elevate option.

Resolution 2

Alternatively, you can import and use the Endpoint Policy Manager Admin Templates XML file below with this setting already configured.

```
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
0  
  
  
  
  

```
After completing one of the resolutions, try installing the Intel updates to verify the resolution worked.

![Intel Driver and Support Assistant Installer](../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/IntelDSAInstaller.png "Intel Driver and Support Assistant Installer")

If the Intel update is still canceled, try both resolutions before reaching out to support.