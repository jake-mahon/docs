---
sidebar_position: 5559
title: 6. Distribution Lists Job Group
---

# 6. Distribution Lists Job Group

The 6. Distribution Lists job group lists the direct and effective membership to distribution lists, in addition to providing context around potentially stale distribution lists.

![6. Distribution Lists Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/DistributionLists/JobsTree.png "6. Distribution Lists Job Group in the Jobs Tree")

The following comprise the 6. Distribution Lists job group:

**NOTE:** These jobs are compatible with the Office 365 environment.

* [Effective Membership > EX\_GroupExpansion Job](EX_GroupExpansion "Effective Membership > EX_GroupExpansion Job") – Expands the direct membership of distribution groups in the environment
* [Membership Analysis Job Group](MembershipAnalysis/Overview "Membership Analysis Job Group") – Provides visibility into toxic conditions contained with the environment, such as circular nesting, large groups, empty groups, nesting, and potentially stale groups
* [EX\_DLCleanup Job](EX_DLCleanup "EX_DLCleanup Job") – Identifies potentially stale distribution groups based on the last domain logon of the members, membership counts, and last time mail was sent to the distribution lists. These DLs should be reviewed and cleaned up.