---
sidebar_position: 5572
title: Membership Analysis Job Group
---

# Membership Analysis Job Group

The Membership Analysis job group provides visibility into toxic conditions contained with the environment, such as circular nesting, large groups, empty groups, nesting, and potentially stale groups.

![Membership Analysis Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/DistributionLists/MembershipAnalysisJobsTree.png "Membership Analysis Job Group in the Jobs Tree")

The jobs in the Membership Analysis job group are:

* [EX\_CircularNesting Job](EX_CircularNesting "EX_CircularNesting Job") – Identifies where circular nesting exists within distribution groups
* [EX\_EmptyGroups Job](EX_EmptyGroups "EX_EmptyGroups Job") – Identifies empty distribution groups that are candidates for cleanup
* [EX\_LargestGroups Job](EX_LargestGroups "EX_LargestGroups Job") – Identifies distribution groups with a high member count
* [EX\_NestedGroups Job](EX_NestedGroups "EX_NestedGroups Job") – Identifies where nesting exists within distribution groups
* [EX\_StaleGroups Job](EX_StaleGroups "EX_StaleGroups Job") – Identifies potentially stale distribution groups based on the last domain logon of the members. These groups should be reviewed and cleaned up.