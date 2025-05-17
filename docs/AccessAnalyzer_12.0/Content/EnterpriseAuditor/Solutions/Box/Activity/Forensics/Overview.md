---
sidebar_position: 5381
title: Forensics Job Group
---

# Forensics Job Group

The Forensics Job Group highlights deletions, file downloads, permissions changes, external user activity, collaboration activity and high-risk collaborations within the targeted Box environment. It is dependent on data collected by the 0.Collection Job Group, also housed in the Box Job Group. The jobs that comprise the 1.Activity Job Group process analysis tasks and generate a report.

![Forensics Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/Forensics/JobsTree.png "Forensics Job Group in the Jobs Tree")

The Forensics Job Group is comprised of:

* [Box\_Deletions Job](Box_Deletions "Box_Deletions Job") – Provides details on file and folder deletions that have occurred over the past 30 days
* [Box\_Downloads Job](Box_Downloads "Box_Downloads Job") – Provides details on file and folder deletions that have occurred over the past 30 days
* [Box\_ExternalUserActivity Job](Box_ExternalUserActivity "Box_ExternalUserActivity Job") – Identifies and analyzes external user activity which has occurred over the past 30 days
* [Box\_ExternalUserCollaborations Job](Box_ExternalUserCollaborations "Box_ExternalUserCollaborations Job") – Identifies collaboration invites sent to external users. These collaborations should be reviewed to ensure sensitive data is not being shared outside of your organization.
* [Box\_PermissionChanges Job](Box_PermissionChanges "Box_PermissionChanges Job") – Provides details on permission changes that have occurred over the past 30 days
* [Box\_Sharing Job](Box_Sharing "Box_Sharing Job") – Provides details on sharing activity that has occurred over the past 30 days