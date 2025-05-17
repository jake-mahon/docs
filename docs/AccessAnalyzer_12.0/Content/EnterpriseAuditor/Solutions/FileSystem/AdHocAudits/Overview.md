---
sidebar_position: 5221
title: Ad Hoc Audits Job Group
---

# Ad Hoc Audits Job Group

The Ad Hoc Audits Job Group is designed to report on resources and trustees that have been provided by the user from targeted file servers.

The Ad Hoc Audits Job Group tables and reports are blank if the CSV file is not modified to contain the required information before job execution.

***RECOMMENDED:*** Run these jobs independently of the solution.

![Ad Hoc Audits Job Group](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/AdHocAudits/JobsTree.png "Ad Hoc Audits Job Group")

The Ad Hoc Audits Job Group is comprised of:

* [FS\_ShareAudit Job](FS_ShareAudit#_FS_ShareAudit_Job_1 "Navigates to the FS_ShareAudit Job section") – Designed to report on shares from targeted file servers based on user input
* [FS\_TrusteePermissions Job](FS_TrusteePermissions#_FS_TrusteePermissions_Job "Navigates to the FS_TrusteePermissions Job section") – Designed to report on trustees from targeted file servers based on user input

For both of these jobs, the host list is set to Local host at the job level. The assigned Connection Profile needs to have rights on the Access Analyzer Console server to access the CSV file saved in the job’s directory. The Connection Profile can be set at either the Ad Hoc Audits > Settings > Connection node (applies to both jobs) or in the job’s Properties window on the Connection tab.