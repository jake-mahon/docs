---
title: filesystem directpermissions overview
sidebar_label: overview
description: Solution guide for filesystem directpermissions overview including implementation steps, configuration, and best practices.
---

# 2.Direct Permissions Job Group

The 2.Direct Permissions job group is designed to report on Direct Permissions information from
targeted file servers.

![2.Direct Permissions Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 2.Direct Permissions job group is comprised of:

- [FS_DomainUserACLs Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs-domainuseracls.md) – Reports on domain users that have been granted
  direct permissions on resources from targeted file servers
- [FS_HighRiskACLs Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs-highriskacls.md) – Reports on high risk security principals that have
  been granted direct permissions on resources from targeted file servers
- [FS_LocalUsersAndGroups Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs-localusersandgroups.md) – Reports on local users and groups that
  have been granted direct permissions on resources from targeted file servers
- [FS_MissingFullControl Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs-missingfullcontrol.md) – Reports on resources from targeted file
  servers that have no Full Control rights granted to it
- [FS_NestedShares Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs-nestedshares.md) – Reports on nested shares that have been granted direct
  permissions from targeted file servers
- [FS_SIDHistory Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs-sidhistory.md) – Reports on trustees that have a historical SID that has
  been granted direct permissions on resources from targeted file servers
- [FS_UnresolvedSIDs Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs-unresolvedsids.md) – Reports on unresolved SIDs that have been granted
  direct permissions on resources from targeted file servers
