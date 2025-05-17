---
sidebar_position: 6010
title: ActiveDirectory Data Collector
---

# ActiveDirectory Data Collector

The ActiveDirectory Data Collector audits objects published in Active Directory. It has been preconfigured within the Active Directory Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Active Directory Solution](../../../Solutions/ActiveDirectory/Overview "Active Directory Solution") topic for additional information.

Protocols

* ADSI
* LDAP
* RPC

Ports

* TCP 389/636
* TCP 135-139
* Randomly allocated high TCP ports

Permissions

* Member of the Domain Administrators group

## ActiveDirectory Query Configuration

The ActiveDirectory Data Collector is configured through the Active Directory Data Collector Wizard, which contains the following wizard pages:

* Welcome
* [ActiveDirectory: Category](Category "ActiveDirectory: Category")
* [ActiveDirectory: Directory Scope](DirectoryScope "ActiveDirectory: Directory Scope")
* [ActiveDirectory: Results](Results "ActiveDirectory: Results")
* [ActiveDirectory: Options](Options "ActiveDirectory: Options")
* [ActiveDirectory: Summary](Summary "ActiveDirectory: Summary")

![Active Directory Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ActiveDirectory/Welcome.png "Active Directory Data Collector Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.