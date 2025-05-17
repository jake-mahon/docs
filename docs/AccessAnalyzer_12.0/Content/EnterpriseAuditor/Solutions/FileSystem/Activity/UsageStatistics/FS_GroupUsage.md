---
sidebar_position: 5273
title: FS_GroupUsage Job
---

# FS\_GroupUsage Job

The FS\_GroupUsage job is designed to report on group usage from targeted file servers.

## Analysis Tasks for the FS\_GroupUsage Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage Statistics** > **FS\_GroupUsage** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_GroupUsage Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/UsageStatistics/GroupUsageAnalysis.png "Analysis Tasks for the FS_GroupUsage Job")

The following analysis task is selected by default:

* 1. Identify Last Time a Group was used for Access

  * Creates an interim processing table in the database for use by downstream analysis and report generation
  * Creates the SA\_FS\_GroupUsage\_DaysSinceUse view accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_GroupUsage job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Groups | This report identifies the last possible time a group was used for providing file system access. | None | This report is comprised of two elements:   * Bar Chart – Displays top unused groups * Table – Provides details on unused groups |