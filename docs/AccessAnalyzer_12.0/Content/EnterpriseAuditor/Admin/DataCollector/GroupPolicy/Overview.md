---
sidebar_position: 5971
title: GroupPolicy Data Collector
---

# GroupPolicy Data Collector

The GroupPolicy Data Collector provides the ability to retrieve the GPO’s list in the domain and where they are linked, return information on configured policies and policy parts from the individual policies that have been selected, return information on selected policy parts from all policies within the domain, and return effective security policies in effect at the individual workstation.

The GroupPolicy Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Active Directory Solution and the Windows Solution. While the data collector is available with all Access Analyzer license options, the Windows Solution is only available with a special Access Analyzer licenses. See the following topics for additional information:

* [Active Directory Solution](../../../Solutions/ActiveDirectory/Overview "Active Directory Solution")
* [Windows Solution](../../../Solutions/Windows/Overview "Windows Solution")

Protocols

* LDAP
* RPC

Ports

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

Permissions

* Member of the Domain Administrators group (if targeting domain controllers)
* Member of the Local Administrators group

## GroupPolicy Query Configuration

The GroupPolicy Data Collector is configured through the Group Policy Data Collector Wizard. The available pages change based upon the query category selected. It contains the following wizard pages:

* Welcome
* [GroupPolicy: Category](Category "GroupPolicy: Category")
* [GroupPolicy: Target](Target "GroupPolicy: Target")
* [GroupPolicy: Policies List](PoliciesList "GroupPolicy: Policies List")
* [GroupPolicy: Options](Options "GroupPolicy: Options")
* [GroupPolicy: Summary](Summary "GroupPolicy: Summary")

![Group Policy Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/GroupPolicy/Welcome.png "Group Policy Data Collector Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.