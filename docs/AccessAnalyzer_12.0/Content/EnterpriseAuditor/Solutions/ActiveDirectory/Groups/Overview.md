---
sidebar_position: 5307
title: 1.Groups Job Group
---

# 1.Groups Job Group

The 1.Groups Job Group identifies effective group membership and pinpoints potential areas of administrative concern such as nested or stale groups.

![1.Groups Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Groups/JobsTree.png "1.Groups Job Group in the Jobs Tree")

The following jobs comprise the 1.Groups Job Group:

* [AD\_CircularNesting Job](AD_CircularNesting "AD_CircularNesting Job") – Identifies circularly nested groups within Active Directory which can pose administrative and operational challenges with identifying effective access to resources
* [AD\_DCLogonGroups Job](AD_DCLogonGroups "AD_DCLogonGroups Job") – Identifies users who are able to log on to Domain Controllers through effective membership to the Enterprise Admins, Domain Admins, Administrators, Backup Operators, Account Operators, Print Operators, or Remote Desktop Users groups. This type of access should be limited to only those individuals who require this level of administrative privileges.
* [AD\_DuplicateGroups Job](AD_DuplicateGroups "AD_DuplicateGroups Job") – Identifies duplicate groups within Active Directory. Duplicate groups contain the same group membership as one another and are suitable candidates for cleanup.
* [AD\_EmptyGroups Job](AD_EmptyGroups "AD_EmptyGroups Job") – Identifies empty and single member groups which are suitable candidates for consolidation or cleanup
* [AD\_GroupProbableOwners Job](AD_GroupProbableOwners "AD_GroupProbableOwners Job") – Determines potential owners for Active Directory Groups which can be used to perform automated membership reviews and enable self-service group management and membership requests
* [AD\_LargestGroups Job](AD_LargestGroups "AD_LargestGroups Job") – Identifies groups with large effective member counts. These types of groups may cause administrative overhead and burden in being able to easily understand who is getting access to resources, or how much access is being granted to resources through these groups.

  * The definition of a large group is set by the **.Active Directory Inventory** > **3-AD\_Exceptions** Job. It can be customized. See the [3-AD\_Exceptions Job](../../ActiveDirectoryInventory/3-AD_Exceptions "3-AD_Exceptions Job") topic for additional information.
* [AD\_MailSecurityGroups Job](AD_MailSecurityGroups "AD_MailSecurityGroups Job") – Identifies mail-enabled security groups within Active Directory
* [AD\_NestedGroups Job](AD_NestedGroups "AD_NestedGroups Job") – Identifies nested groups within Active Directory and provides details such as the levels of nesting. While Active Directory provides the ability to nest certain types of groups within other groups, Microsoft recommends nesting does not go beyond two levels in order to avoid difficulties in understanding effective membership and access.

  * The definition of a deeply nested group is set by the **.Active Directory Inventory** > **3-AD\_Exceptions** Job. It can be customized. See the [3-AD\_Exceptions Job](../../ActiveDirectoryInventory/3-AD_Exceptions "3-AD_Exceptions Job") topic for additional information.
* [AD\_SensitiveSecurityGroups Job](AD_SensitiveSecurityGroups "AD_SensitiveSecurityGroups Job") – Identifies users who are granted administrative access within Active Directory through membership to the Enterprise Admins, Domain Admins, Schema Admins, DNS Admins, or Administrators groups. This level of access should be limited to only those individuals who require this level of administrative privileges.
* [AD\_StaleGroups Job](AD_StaleGroups "AD_StaleGroups Job") – Identifies groups that contain potentially stale users. Users are considered stale if they have never logged onto the domain, have not logged onto the domain in the past 60 days, or are disabled. These group memberships should be reviewed and possibly removed.

  * The definition of a stale user” is set by the **.Active Directory Inventory** > **3-AD\_Exceptions** Job. It can be customized. See the [3-AD\_Exceptions Job](../../ActiveDirectoryInventory/3-AD_Exceptions "3-AD_Exceptions Job") topic for additional information.