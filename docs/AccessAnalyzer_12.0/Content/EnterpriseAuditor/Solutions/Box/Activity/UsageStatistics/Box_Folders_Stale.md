---
sidebar_position: 5390
title: Box_Folders_Stale Job
---

# Box\_Folders\_Stale Job

The Box\_Folders\_Stale Job identifies the last time activity occurred for each folder in the Box environment, highlighting stale folders which have not had activity in the last 30 days. These folders can be subject to cleanup or consolidation.

## Analysis Tasks for the Box\_Folders\_Stale Job

Navigate to **Box** > **1.Activity** > **Usage Statistics** > **Box\_Folders\_Stale** > **Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_Folders_Stale Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/UsageStatistics/FoldersStaleAnalysis.png "Analysis Tasks for the Box_Folders_Stale Job")

The following analysis tasks are selected by default:

* Stale Folder Details – Creates the Box\_Folders\_Stale table accessible under the job’s Results node
* No Activity – Creates the Box\_Folders\_NoActivity table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box\_Folders\_Stale Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Folders | This report highlights stale resources in the target Box environment over the last 30 days | None | This report is comprised of three elements:   * Bar Chart – Displays top 5 stale folders * Table – Provides summary of folders with no activity * Table – Provides details on stale folders |