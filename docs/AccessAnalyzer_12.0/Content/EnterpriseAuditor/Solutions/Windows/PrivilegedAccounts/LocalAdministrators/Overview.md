---
sidebar_position: 5085
title: Local Administrators Job Group
---

# Local Administrators Job Group

![Local Administrators Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LocalAdministrators/JobsTree.png "Local Administrators Job Group in the Jobs Tree")

The jobs in the Local Administrators group are:

* [SG\_LocalAdmins Job](SG_LocalAdmins "SG_LocalAdmins Job") – This job identifies the effective membership for all local administrator groups to gain an understanding of what accounts within the environment are privileged and should be monitored closely
* [SG\_MicrosoftLAPS Job](SG_MicrosoftLAPS "SG_MicrosoftLAPS Job") – This job assesses the LAPS (Local Administrator Password Solution) local policies on all targeted hosts. This offers insight into LAPS enablement and configuration across an environment. LAPS allows for centralized local administrator password management within Active Directory. See the Microsoft [Local Administrator Password Solution](https://learn.microsoft.com/en-us/previous-versions/mt227395(v=msdn.10) "Local Administrator Password Solution") article for additional information.
* [SG\_Sessions Job](SG_Sessions "SG_Sessions Job") – This job lists sessions and logged on users from all targeted hosts. These active sessions and logged on users may have their hashes stored in memory on the target machine, which could be leveraged in a Pass the Hash attack.