---
sidebar_position: 5301
title: 6.Activity Job Group
---

# 6.Activity Job Group

The 6.Activity Job Group provides insights into access sprawl, privileged account usage, and operational health of the Active Directory environment. Information collected includes Active Directory Changes, Authentication, LDAP Traffic, Replication Traffic, and LSASS.EXE process injection on domain controllers.

The jobs that comprise the 6.Activity Job Group collect data, process analysis tasks, and generate reports.

*Remember,* this job group requires the Active Directory Activity license.

![6.Activity Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/JobsTree.png "6.Activity Job Group in the Jobs Tree")

The 6.Activity Job Group is comprised of the following jobs:

* [0.Collection > AD\_ActivityCollection Job](AD_ActivityCollection "0.Collection > AD_ActivityCollection Job") – Imports data from the Netwrix Activity Monitor logs into the Access Analyzer Database. Retention can be modified in the query (120 days default).
* [Changes Job Group](Changes/Overview "Changes Job Group") – Provides an audit trail for changes made to Computer, Group and User objects within the environment
* [Group Usage Job Group](GroupUsage/Overview "Group Usage Job Group") – Shows how group membership changes have affected access across the entire environment, the actions taken by the members of a group, and identifies where groups may be used for authorization in applications
* [LDAP > AD\_LDAPQueries Job](AD_LDAPQueries "LDAP > AD_LDAPQueries Job") – Analyzes LDAP traffic to determine trends such as most expensive queries, most active servers and users, successful/failed and signing status. This data can be used to troubleshoot performance issues, load balancing, and poorly configured services.
* [Lockouts > AD\_Lockouts Job](AD_Lockouts "Lockouts > AD_Lockouts Job")– Provides a listing of all account lockouts with relevant details which can be used to aid troubleshooting
* [Operations Job Group](Operations/Overview "Operations Job Group") – Reports on Active Directory activity events related to operational activity. This group can help report on probable machine owners based on authentications, domain controller traffic and activity, and authentication protocols being used in the environment.
* [Privileged Accounts Job Group](PrivilegedAccounts/Overview "Privileged Accounts Job Group")– Highlights the activity performed by this accounts, to identify potential abuses or unused accounts that can be deprovisioned