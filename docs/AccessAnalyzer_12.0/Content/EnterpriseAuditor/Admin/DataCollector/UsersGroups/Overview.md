---
sidebar_position: 5935
title: UsersGroups Data Collector
---

# UsersGroups Data Collector

The UsersGroups Data Collector audits user and group accounts for both local and domain, extracting system policies.

The UsersGroups Data Collector has been preconfigured within the Windows Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Windows Solution](../../../Solutions/Windows/Overview "Windows Solution") topic for additional information.

Protocols

* RPC
* SMBV2
* WMI

Ports

* TCP 135-139
* Randomly allocated high TCP ports
* 445

Permissions

* Member of the Local Administrators group

  * If a less-privileged option is required, you can use a regular domain user that has been added to the **Network access: Restrict clients allowed to make remote calls to SAM** Local Security Policy
* Member of the Domain Administrators group (if targeting domain controllers)

## UsersGroups Query Configuration

The UsersGroups Data Collector is configured through the Users and Groups Browser wizard, which contains the following wizard pages:

* Welcome
* [UsersGroups: Results](Results#_Results_1 "UsersGroups: Results")
* [UsersGroups: Summary](Summary#_Summary "UsersGroups: Summary")

![Users and Groups Browser wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/UsersGroups/Welcome.png "Users and Groups Browser wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** box when the wizard is open and configuration settings are saved.