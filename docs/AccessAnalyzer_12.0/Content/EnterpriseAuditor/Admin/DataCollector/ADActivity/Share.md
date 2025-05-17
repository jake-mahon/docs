---
sidebar_position: 6190
title: 'ADActivity: Share'
---

# ADActivity: Share

The Share page provides options for configuring share settings. It is a wizard page for the category of:

* Import from Share

![Active Directory Activity DC wizard Share settings page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ADActivity/Share.png "Active Directory Activity DC wizard Share settings page")

The following connection setting can be configured to connect to the AD activity archives that must be located on a Domain Controller share:

* UNC Path – Enter the path of the share that stores AD Activity from the AD Agent(s). The ellipsis (**…**) opens a file explorer where the path can be navigated to and selected.

  * *Remember,* all AD Agent logs must be archived to this location or the AD Activity data is not queried by Access Analyzer
* Include Sub-Directories – Select to include sub-directories on the targeted share. Use this option if there are multiple archives in the same location.