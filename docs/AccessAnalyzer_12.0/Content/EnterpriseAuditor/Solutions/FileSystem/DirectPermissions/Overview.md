---
sidebar_position: 5227
title: 2.Direct Permissions Job Group
---

# 2.Direct Permissions Job Group

The 2.Direct Permissions job group is designed to report on Direct Permissions information from targeted file servers.

![2.Direct Permissions Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/DirectPermissions/JobsTree.png "2.Direct Permissions Job Group in the Jobs Tree")

The 2.Direct Permissions job group is comprised of:

* [FS\_DomainUserACLs Job](FS_DomainUserACLs "FS_DomainUserACLs Job") – Reports on domain users that have been granted direct permissions on resources from targeted file servers
* [FS\_HighRiskACLs Job](FS_HighRiskACLs "FS_HighRiskACLs Job") – Reports on high risk security principals that have been granted direct permissions on resources from targeted file servers
* [FS\_LocalUsersAndGroups Job](FS_LocalUsersAndGroups "FS_LocalUsersAndGroups Job") – Reports on local users and groups that have been granted direct permissions on resources from targeted file servers
* [FS\_MissingFullControl Job](FS_MissingFullControl "FS_MissingFullControl Job") – Reports on resources from targeted file servers that have no Full Control rights granted to it
* [FS\_NestedShares Job](FS_NestedShares "FS_NestedShares Job") – Reports on nested shares that have been granted direct permissions from targeted file servers
* [FS\_SIDHistory Job](FS_SIDHistory "FS_SIDHistory Job") – Reports on trustees that have a historical SID that has been granted direct permissions on resources from targeted file servers
* [FS\_UnresolvedSIDs Job](FS_UnresolvedSIDs "FS_UnresolvedSIDs Job") – Reports on unresolved SIDs that have been granted direct permissions on resources from targeted file servers