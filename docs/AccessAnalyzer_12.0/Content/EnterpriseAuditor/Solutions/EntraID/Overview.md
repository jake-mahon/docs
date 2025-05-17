---
sidebar_position: 5002
title: "Entra ID\_Solution"
---

# Entra ID Solution

The Entra ID Solution is a comprehensive set of audit jobs and reports that provide the information regarding Microsoft Entra ID configuration, operational management, and troubleshooting. The jobs within this group help pinpoint potential areas of administrative and security concerns related to Microsoft Entra ID users and groups, including syncing with on-premises Active Directory.

Supported Platforms

* Microsoft Entra ID (formerly Azure AD)

Requirements, Permissions, and Ports

See the [Microsoft Entra ID Tenant Target Requirements](../../../Config/EntraID/Overview "Microsoft Entra ID Tenant Target Requirements") topic for additional information.

Location

The Entra ID Solution requires a special Access Analyzer license. It can be installed from the Instant Job Wizard, see the [Instant Job Wizard](../../Admin/Jobs/InstantJobs/Overview "Instant Job Wizard") topic for additional information. Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **Entra ID**.

The .Entra ID Inventory Job Group collects the data. The Entra ID Job Groups run analysis and generate reports on the collected data.

## Job Groups

![Entra ID Job Group Overview page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/OverviewPage.png "Entra ID Job Group Overview page")

The job groups in the Entra ID Solution are:

* [1.Groups Job Group](Groups/Overview "1.Groups Job Group") – Identifies group conditions and pinpoints potential areas of administrative concern
* [2.Users Job Group](Users/Overview "2.Users Job Group") – Identifies areas of administrative concern related to Microsoft Entra ID users