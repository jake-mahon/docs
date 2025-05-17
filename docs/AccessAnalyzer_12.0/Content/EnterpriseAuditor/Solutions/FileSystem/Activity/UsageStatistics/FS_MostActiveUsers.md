---
sidebar_position: 5272
title: FS_MostActiveUsers Job
---

# FS\_MostActiveUsers Job

The FS\_MostActiveUsers job is designed to report on the most active users within an environment.

## Analysis Tasks for the FS\_MostActiveUsers Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage Statistics** > **FS\_MostActiveUsers** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_MostActiveUsers Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/UsageStatistics/MostActiveUsersAnalysis.png "Analysis Tasks for the FS_MostActiveUsers Job")

The following analysis task is selected by default:

* Last 30 Days – Creates the SA\_FS\_MostActiveUsers\_Last30Days table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_MostActiveUsers job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Most Active Users – Last 30 Days | This report identifies the top users for the past 30 days. [Read], [Add], [Update], [Delete], [Permission Change], [Rename] fields reflect the number of unique operations of each type that was performed by the user for this time frame. Unique Folders are the number of distinct folders that have had activity during the time frame. | None | This report is comprised of two elements:   * Bar Chart – Displays top users by operation count * Table – Provides details on the most active users |