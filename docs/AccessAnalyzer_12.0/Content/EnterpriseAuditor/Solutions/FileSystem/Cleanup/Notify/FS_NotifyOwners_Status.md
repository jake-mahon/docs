---
sidebar_position: 5244
title: FS_NotifyOwners_Status Job
---

# FS\_NotifyOwners\_Status Job

The FS\_NotifyOwners\_Status job is comprised of analysis and reports that summarize the actions performed by the FS\_NotifyOwners job. See the [FS\_NotifyOwners Job](FS_NotifyOwners "FS_NotifyOwners Job") topic for additional information.

## Analysis Tasks for the FS\_NotifyOwners\_Status Job

Navigate to the **FileSystem** > **Cleanup** > **2. Notify** > **FS\_NotifyOwners\_Status** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_NotifyOwners_Status Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/Notify/NotifyOwnersStatusAnalysis.png "Analysis Tasks for the FS_NotifyOwners_Status Job")

The following analysis tasks are selected by default:

* Summarize notifications – Creates the SA\_FS\_CleanupAssessment\_ShareDetails\_NotifySummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_NotifyOwners\_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Owner Notifications  (Share Owner Notifications) | This report summarizes share owner notifications which have occurred during the Cleanup effort | None | This report is comprised of two elements:   * Line Chart – Displays the historical summary of notify share owners * Table – provides details on notify share owners |