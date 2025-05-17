---
sidebar_position: 5233
title: FS_UnresolvedSIDs Job
---

# FS\_UnresolvedSIDs Job

The FS\_UnresolvedSIDs job is designed to report on unresolved SIDs that have been granted direct permissions on resources from targeted file servers.

## Analysis Tasks for the FS\_UnresolvedSIDs Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** > **FS\_UnresolvedSIDs** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_UnresolvedSIDs Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/DirectPermissions/UnresolvedSIDsAnalysis.png "Analysis Tasks for the FS_UnresolvedSIDs Job")

The following analysis task is selected by default:

* Unresolved SIDs – Creates the SA\_FS\_UnresolvedSIDs\_SIDsByResourcePath table accessible under the job's Results node

In addition to the tables and views created by the analysis task, the FS\_UnresolvedSIDs job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unresolved SIDs | This report identifies where permissions are assigned for users which no longer exist. | None | This report is comprised of two elements:   * Bar Chart – Displays top servers by affected folders * Table – Provides details on top unresolved SIDs * Table – Provides details on top servers by affected folders |