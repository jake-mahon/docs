---
sidebar_position: 5106
title: 3.Groups Job Group
---

# 3.Groups Job Group

The 3.Groups job group provides details on AWS IAM group membership, orphaned groups (those with no policy assigned to them), sensitive security group membership, and stale groups.

![3.Groups Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Groups/JobsTree.png "3.Groups Job Group in the Jobs Tree")

The 3.Groups job group is comprised of:

* [AWS\_GroupMembers Job](AWS_GroupMembers "AWS_GroupMembers Job") – Provides details about group members and the policies assigned to those groups
* [AWS\_NoPolicyGroups Job](AWS_NoPolicyGroups "AWS_NoPolicyGroups Job") – Provides details on groups that have no policies assigned to them
* [AWS\_StaleGroups Job](AWS_StaleGroups "AWS_StaleGroups Job") – Highlights groups that have members that are considered stale