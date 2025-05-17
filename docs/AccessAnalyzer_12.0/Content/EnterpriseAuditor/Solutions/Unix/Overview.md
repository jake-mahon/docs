---
sidebar_position: 4996
title: Unix Solution
---

# Unix Solution

The Unix Solution reports on areas of administrative concern for Unix and Linux systems. Attention is given to users and group details, privileged access rights, and NFS and Samba sharing configurations.

Supported Platforms

* AIX® 4+
* Solaris™ 8+
* Red Hat® Enterprise Linux® 4+
* Red Hat® Linux® 5.2+
* HP-UX® 11+
* CentOS® 7+
* SUSE® 10+

Requirements, Permissions, and Ports

See the [Target Unix Requirements, Permissions, and Ports](../../Requirements/Target/Unix "Target Unix Requirements, Permissions, and Ports") topic for additional information.

Location

The Unix Solution requires a special Access Analyzer license. It can be installed from the Access Analyzer Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **Unix**.

## Job Groups

The Unix solution is a set of audit jobs and reports that provide visibility into important Unix and Linux administration concepts.

![Unix Solution Overview page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/OverviewPage.png "Unix Solution Overview page")

The job groups in the Unix Solution are:

* [1.Users and Groups Job Group](UsersGroups/Overview "1.Users and Groups Job Group") – The jobs within this group provide visibility into users and groups, helping to pinpoint potential areas of administrative concern
* [2.Privileged Access Job Group](PrivilegedAccess/Overview "2.Privileged Access Job Group") – The jobs within this group provide visibility into privileged users within audited Unix and Linux environments by identifying all rights granted via sudoers and the owners of critical files such as passwd, shadow, sudoers, hosts.deny, and more
* [3.Sharing Job Group](Sharing/Overview "3.Sharing Job Group") – Provides information on NFS and Samba share configuration, and highlights potentially high-risk shares

Each job group within the Unix Solution is designed to run independently. See the [Recommended Configurations for the Unix Job Group](Recommended "Recommended Configurations for the Unix Job Group") topic for information on frequency and job group settings.