---
sidebar_position: 5604
title: 0. Collection Job Group
---

# 0. Collection Job Group

The 0. Collection job group is comprised of data collection and analysis that focus on access granted to each mailbox in the environment including: Mailbox Rights, Active Directory Permissions, Delegation, and Folder Permissions.

![0.Collection Job Group in the Jobs Tree](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Permissions/CollectionJobsTree.png "0.Collection Job Group in the Jobs Tree")

The jobs in the 0. Collection job group are:

* [EX\_Delegates Job](EX_Delegates "EX_Delegates Job") – Collects data from Active Directory to identify the delegates applied to a mailbox
* [EX\_MBRights Job](EX_MBRights "EX_MBRights Job") – Collects data from Active Directory to identify the mailbox rights applied to a mailbox
* [EX\_Perms Job](EX_Perms "EX_Perms Job") – Collects information about permissions applied to the folders within Exchange mailboxes
* [EX\_SendAs Job](EX_SendAs "EX_SendAs Job") – Collects data from Active Directory to identify the Active Directory rights applied to a mailbox