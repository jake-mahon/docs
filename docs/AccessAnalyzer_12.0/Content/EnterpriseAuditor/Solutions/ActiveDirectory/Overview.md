---
sidebar_position: 4983
title: Active Directory Solution
---

# Active Directory Solution

The Active Directory solution is a comprehensive set of audit jobs and reports that provide the information administrators need for Active Directory configuration, operational management, troubleshooting, analyzing effective permissions, and tracking who is making what changes within an organization.

Supported Platforms

* Windows Server 2016 and later
* Windows 2003 Forest level or higher

**NOTE:** See the Microsoft [Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support "Windows Server end of support and Microsoft 365 Apps") article for additional information.

Requirements, Permissions, and Ports

See the [Active Directory Domain Target Requirements](../../../Config/ActiveDirectory/Overview "Domain Activity Configuration") topic for additional information.

Location

The Active Directory Solution requires a special Access Analyzer license. It can be installed from the Access Analyzer Instant Job Wizard. See the [Instant Job Wizard](../../Admin/Jobs/InstantJobs/Overview "Instant Job Wizard") topic for additional information. Once installed into the Jobs tree, navigate to the solution: **Jobs** > **Active Directory**.

![Active Directory Solution](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/SolutionOverview.png "Active Directory Solution")

Each job group works independently from the other job groups. Some job groups run analysis tasks against the analyzed data collected by the .Active Directory Inventory Solution to generate reports, for example the 1.Groups job group. Other job groups run both data collection and analysis to generate reports. The AD\_SecurityAssessment job summarizes security related results from both the Active Directory solution and the Active Directory Permissions Analyzer solution.

**NOTE:** The Cleanup job group requires additional licenses to function. See the [Active Directory Job Groups](#Active "Active Directory Job Groups") topic for additional information.

## Active Directory Job Groups

The Active Directory solution is a comprehensive set of audit jobs and reports that provide the information every administrator needs for Active Directory configuration, operational management, troubleshooting, analyzing effective permissions, and tracking who is making what changes within an organization.

![Active Directory Job Group](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/ADSolutionJobGroup.png "Active Directory Job Group")

The following job groups comprise the Active Directory solution:

* [1.Groups Job Group](Groups/Overview "Navigates to the 1.Groups Job Group section") – Identifies effective group membership and pinpoints potential areas of administrative concern such as nested or stale groups
* [2.Users Job Group](Users/Overview "Navigates to the 2.Users Job Group section") – Identifies user conditions and pinpoint potential areas of administrative concern such as weak passwords, user token size, or stale users
* [3.Computers Job Group](Computers/Overview "Navigates to the 3.Computers Job Group section") – Pinpoints potential areas of administrative concern related to computer accounts, including stale computers and computers that have been trusted for delegation
* [4.Group Policy Job Group](GroupPolicy/Overview "Navigates to the 4.Group Policy Job Group section") – Audits GPOs and their settings, and provides in depth analysis of conditions such as where GPOs have been linked, misconfigurations that can cause security or operational issues, and redundant GPOs that can be consolidated
* [5.Domains Job Group](Domains/Overview "Navigates to the 5.Domains Job Group section") – Provides details on domains, sites, and trusts, and highlight domain level configurations that may leave your environment at risk
* [6.Activity Job Group](Activity/Overview "Navigates to the 6.Activity Job Group section") – Provides insights into access sprawl, privileged account usage, and operational health of the Active Directory environment. Information collected includes Active Directory Changes, Authentication, LDAP Traffic, Replication Traffic, and LSASS.EXE process injection on domain controllers

  * Requires the Active Directory Activity license feature to function
* [7.Certificate Authority Job Group](CertificateAuthority/Overview "7.Certificate Authority Job Group") – Collects settings, permissions, and configurations for Certificate Authorities. It details access rights for the Certificate Authority and reports on certificate requests, highlighting any that might expire soon.
* [Cleanup Job Group](Cleanup/Overview "Cleanup Job Group") – Identifies potential stale and unused users, computers, and groups as well as issues with group membership. Remediation workflows are included to de-provision unnecessary objects to help increase security and reduce complexity.

  * Requires the Active Directory Actions license feature to function
  * Requires the Active Directory Actions Module to be installed
* [AD Security Assessment Job](AD_SecurityAssessment "Navigates to the AD Security Assessment Job section") – Summarizes security related results from the Active Directory solution and the Active Directory Permissions Analyzer solution

Since each job group within the Active Directory solution is designed to run independently, refer to the Recommended Configurations topic for each job group, for information on frequency and job group settings.