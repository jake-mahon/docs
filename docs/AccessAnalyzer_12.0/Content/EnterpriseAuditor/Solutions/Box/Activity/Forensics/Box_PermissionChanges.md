---
sidebar_position: 5382
title: Box_PermissionChanges Job
---

# Box\_PermissionChanges Job

The Box\_PermissionChannges Job provides details on permission changes that have occurred over the past 30 days.

## Analysis Tasks for the Box\_PermissionChanges Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box\_PermissionChanges** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_PermissionChanges Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/Forensics/PermissionChangesAnalysis.png "Analysis Tasks for the Box_PermissionChanges Job")

The following analysis tasks are selected by default:

* Permission Change Details – Creates the Box\_PermissionChange\_Details table accessible under the job’s Results node
* Permission Changes (Last 30 Days) – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_PermissionChanges Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Permission Changes | This report identifies all resources where successful permission changes have occurred. The line chart shows data for the past 30 days only. | None | This report is comprised of two elements:   * Line Chart – Displays last 30 days of permission changes * Table – Provides details on permission changes |