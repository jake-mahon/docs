---
sidebar_position: 6133
title: SystemInfo Data Collector
---

# SystemInfo Data Collector

The SystemInfo Data Collector extracts information from the target system based on the selected category. The SystemInfo Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Windows Solution. While the data collector is available with all Access Analyzer license options, the Windows Solution is only available with a special Access Analyzer license. See the [Windows Solution](../../../Solutions/Windows/Overview "Windows Solution") topic for additional information.

Protocols

* Remote Registry
* RPC
* WMI

Ports

* TCP 135-139
* Randomly allocated high TCP ports

Permissions

* Member of the Local Administrators group

## SystemInfo Query Configuration

The SystemInfo Data Collector is configured through the System Info Data Collector Wizard, which contains the following wizard pages:

* Welcome
* [SystemInfo: Category](Category "SystemInfo: Category")
* [SystemInfo: Results](Results "SystemInfo: Results")
* [SystemInfo: Shares List](SharesList "SystemInfo: Shares List")
* [SystemInfo: Probable Owner](ProbableOwner "SystemInfo: Probable Owner")
* [SystemInfo: VIP Membership](VIPMembership "SystemInfo: VIP Membership")
* [SystemInfo: File Types](FileTypes "SystemInfo: File Types")
* [SystemInfo: Options](Options "SystemInfo: Options")
* [SystemInfo: Summary](Summary "SystemInfo: Summary")

![System Info Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/SystemInfo/Welcome.png "System Info Data Collector Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.