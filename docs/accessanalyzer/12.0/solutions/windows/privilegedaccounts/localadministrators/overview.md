---
title: windows privilegedaccounts localadministrators overview
sidebar_label: overview
description: Solution guide for windows privilegedaccounts localadministrators overview including implementation steps, configuration, and best practices.
---

# Local Administrators Job Group

![Local Administrators Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Local Administrators group are:

- [SG_LocalAdmins Job](/docs/accessanalyzer/12.0/solutions/windows/privilegedaccounts/localadministrators/sg-localadmins.md) – This job identifies the effective membership for all
  local administrator groups to gain an understanding of what accounts within the environment are
  privileged and should be monitored closely
- [SG_MicrosoftLAPS Job](/docs/accessanalyzer/12.0/solutions/windows/privilegedaccounts/localadministrators/sg-microsoftlaps.md) – This job assesses the LAPS (Local Administrator
  Password Solution) local policies on all targeted hosts. This offers insight into LAPS enablement
  and configuration across an environment. LAPS allows for centralized local administrator password
  management within Active Directory. See the Microsoft
  [Local Administrator Password Solution](<https://learn.microsoft.com/en-us/previous-versions/mt227395(v=msdn.10)>)
  article for additional information.
- [SG_Sessions Job](/docs/accessanalyzer/12.0/solutions/windows/privilegedaccounts/localadministrators/sg-sessions.md) – This job lists sessions and logged on users from all targeted
  hosts. These active sessions and logged on users may have their hashes stored in memory on the
  target machine, which could be leveraged in a Pass the Hash attack.
