---
sidebar_position: 5051
title: AD_DCShadowPermissions Job
---

# AD\_DCShadowPermissions Job

The AD\_DCShadowPermissions Job highlights all Active Directory users that are capable of potentially performing a DCShadow attack within the targeted domains.

## Analysis Tasks for the AD\_DCShadowPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **9.Sites** > **AD\_DCShadowPermissions** > **Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DCShadowPermissions Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Sites/DCShadowPermissionsAnalysis.png "Analysis Tasks for the AD_DCShadowPermissions Job")

The default analysis tasks are:

* DCShadow Permissions – Creates the SA\_AD\_DCShadowPermissions\_Details table accessible under the job’s Results node
* DCShadow Summary – Creates the SA\_AD\_DCShadowPermission\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_DCShadowPermisssions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| DCShadow Permissions | This report highlights permissions applied to Site objects and Computer objects in Active Directory required to execute the DCShadow attack. By default this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None | This report is comprised of three elements:   * Bar Chart – Displays top users by computer count * Table – Provides details on top users by computer count * Table – Provides details on DCShadow permission details |