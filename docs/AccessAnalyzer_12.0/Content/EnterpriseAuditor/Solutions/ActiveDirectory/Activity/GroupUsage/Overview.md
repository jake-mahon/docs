---
sidebar_position: 5359
title: Group Usage Job Group
---

# Group Usage Job Group

The Group Usage Job Group reports shows how group membership changes have affected access across the entire environment, the actions taken by the members of a group, and identifies where groups may be used for authorization in applications.

![Group Usage Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/GroupUsage/JobsTree.png "Group Usage Job Group in the Jobs Tree")

The following Jobs make up the Group Usage Job Group:

***RECOMMENDED:*** Schedule these jobs to run with the 0.Collection job group.

* [AD\_AccessChanges Job](AD_AccessChanges "AD_AccessChanges Job") – Reports on activity relating to access changes for Active Directory groups, highlighting membership changes that have created large access change within the environment
* [AD\_GroupHosts Job](AD_GroupHosts "AD_GroupHosts Job") – Reports on what hosts groups are being used on within the environment
* [AD\_GroupMemberActivity Job](AD_GroupMemberActivity "AD_GroupMemberActivity Job") – Reports on the activity that group members are taking within the Active Directory environment