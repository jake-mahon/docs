---
sidebar_position: 5355
title: Changes Job Group
---

# Changes Job Group

The Changes Job Group provides an audit trail for changes made to Computer, Group and User objects within the environment.

![Changes Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/Changes/JobsTree.png "Changes Job Group in the Jobs Tree")

The following Jobs make up the Changes Job Group:

***RECOMMENDED:*** Schedule these jobs to run with the 0.Collection job group.

* [AD\_ComputerModifications Job](AD_ComputerModifications "AD_ComputerModifications Job") – Reports on activity relating to changes made on computer objects
* [AD\_GroupModifications Job](AD_GroupModifications "AD_GroupModifications Job") – Reports on activity relating to changes made on a group objects and changes made to group membership
* [AD\_UserModifications Job](AD_UserModifications "AD_UserModifications Job") – Reports on activity relating to changes made on user objects