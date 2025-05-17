---
sidebar_position: 5188
title: 1.Users and Groups Job Group
---

# 1.Users and Groups Job Group

The jobs within the 1.Users and Groups job group provide visibility into users and groups, helping to pinpoint potential areas of administrative concern.

![1.Users and Groups Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/UsersGroups/JobsTree.png "1.Users and Groups Job Group in the Jobs Tree")

The jobs in the 1.Users and Groups job group are:

* [0.Collection > UX\_UsersAndGroups Job](UX_UsersAndGroups "0.Collection > UX_UsersAndGroups Job") – Collects user and group related information from /etc/shadow and their equivalents in order to provide details on user and group conditions to help pinpoint areas of administrative concerns
* [UX\_DuplicateGroups Job](UX_DuplicateGroups "UX_DuplicateGroups Job") – This job identifies duplicate groups within the audited Unix or Linux environment. Duplicate groups contain the same group membership as one another and are suitable candidates for cleanup.
* [UX\_EmptyGroups Job](UX_EmptyGroups "UX_EmptyGroups Job") – This job identifies empty groups found within the audited Unix or Linux environment. These are suitable candidates for consolidation or cleanup.
* [UX\_LargeGroups Job](UX_LargeGroups "UX_LargeGroups Job") – This job identifies groups with large member counts. These types of groups may cause administrative overhead and burden in being able to easily understand who is getting access to resources, or how much access is being granted to resources through these groups.
* [UX\_LocalGroups Job](UX_LocalGroups "UX_LocalGroups Job") – This job provides an overview of all local groups within the audited Unix and Linux environments
* [UX\_LocalUsers Job](UX_LocalUsers "UX_LocalUsers Job") – This job provides an overview of all local users within the audited Unix and Linux environments
* [UX\_PasswordSettings Job](UX_PasswordSettings "UX_PasswordSettings Job") – This job provides visibility into user passwords and system password configurations within audited Unix and Linux environments