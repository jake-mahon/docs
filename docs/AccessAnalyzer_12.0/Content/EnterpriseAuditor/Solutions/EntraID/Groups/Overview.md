---
sidebar_position: 5173
title: 1.Groups Job Group
---

# 1.Groups Job Group

The jobs in the 1.Groups group identify group conditions and areas of administrative concern within Microsoft Entra ID, such as toxic group conditions or synchronization issues.

![1.Groups Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Groups/JobsTree.png "1.Groups Job Group in the Jobs Tree")

The jobs in the 1.Groups Job Group are:

* [AAD\_CircularNesting Job](AAD_CircularNesting "AAD_CircularNesting Job") – Identifies circularly-nested groups within Microsoft Entra ID which can pose administrative and operational challenges with identifying effective access to resources
* [AAD\_DuplicateGroups Job](AAD_DuplicateGroups "AAD_DuplicateGroups Job") – Identifies duplicate groups within Microsoft Entra ID. Duplicate groups contain the same group membership as one another and are suitable candidates for cleanup
* [AAD\_EmptyGroups Job](AAD_EmptyGroups "AAD_EmptyGroups Job") – Identifies empty groups within Microsoft Entra ID which are suitable candidates for consolidation or cleanup
* [AAD\_GroupDirSync Job](AAD_GroupDirSync "AAD_GroupDirSync Job") – Summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment
* [AAD\_LargestGroups Job](AAD_LargestGroups "AAD_LargestGroups Job") – Identifies groups with large effective member counts. These types of groups may cause administrative overhead and burden in being able to easily understand who is getting access to resources, or how much access is being granted to resources through these groups.
* [AAD\_NestedGroups Job](AAD_NestedGroups "AAD_NestedGroups Job") – Identifies nested groups within Microsoft Entra ID and provides details such as the levels of nesting. While Microsoft Entra ID provides the ability to nest certain types of groups within other groups, Microsoft recommends nesting does not go beyond two levels in order to avoid difficulties in understanding effective membership and access.
* [AAD\_ProbableOwners Job](AAD_ProbableOwners "AAD_ProbableOwners Job") – Determines potential owners for Microsoft Entra ID Groups which can be used to perform automated membership reviews and enable self-service group management and membership requests
* [AAD\_StaleGroups Job](AAD_StaleGroups "AAD_StaleGroups Job")– Identifies Microsoft Entra ID groups that contain potentially stale users. Users are considered stale if they have never logged onto the domain, have not logged onto the domain in the past 30 days, or are disabled. These group memberships should be reviewed and possibly removed.