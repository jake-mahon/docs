---
sidebar_position: 5055
title: AD_UserPermissions Job
---

# AD\_UserPermissions Job

The AD\_UserPermissions job is comprised of analysis tasks and reports which use the data collected by the 0.Collection job group to provide information on permissions and ownership applied to user objects in Active Directory.

## Analysis Tasks for the AD\_UserPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **1.Users** > **AD\_UserPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_UserPermissions Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Users/UserPermissionsAnalysis.png "Analysis Tasks for the AD_UserPermissions Job")

The default analysis tasks are:

* List user object permissions – Creates the SA\_AD\_UserPermissions\_Details table accessible under the job’s Results node
* Summarize user object permissions – Creates an interim processing table in the database for use by downstream analysis and report generation
* User Ownership – Lists the owners of each user object and determines if they are a non-standard owner. Principals that are not administrators are considered non-standard owners of user objects. Creates the SA\_AD\_UserOwnership\_Details table accessible under the job’s Results node.
* User Ownership Summary – Summarizes the owner type by domain

In addition to the tables and views created by the analysis tasks, the AD\_UserPermissions job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Ownership | This report highlights instances where Active Directory user objects are owned by non admin principals. This information is summarized at the domain level. | None | This report is comprised of two elements:   * Stacked Bar Chart – Displays a summary of user ownership by domain * Table – Provides details on non-standard user ownership |
| User Permissions | This report highlights instances where permissions are applied to Active Directory user objects. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   * Bar Chart – Displays user permissions by domain * Pie Chart – Provides details on user permission types * Table – Provides details on user permissions |