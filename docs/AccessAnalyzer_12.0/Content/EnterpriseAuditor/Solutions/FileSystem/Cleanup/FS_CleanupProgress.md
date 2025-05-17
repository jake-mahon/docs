---
sidebar_position: 5243
title: FS_CleanupProgress Job
---

# FS\_CleanupProgress Job

The FS\_CleanupProgress job summarizes the progress of the cleanup effort and highlights the amount of storage reclaimed on each host.

## Analysis Tasks for the FS\_CleanupProgress Job

Navigate to the **FileSystem** > **Cleanup** > **FS\_CleanupProgress** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_CleanupProgress Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/CleanupProgressAnalysis.png "Analysis Tasks for the FS_CleanupProgress Job")

The following analysis tasks are selected by default:

* Summarize share- and host-level cleanup progress – Creates the SA\_FS\_CleanupProgress\_ShareDetails table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_CleanupProgress job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Cleanup Progress | This report gives a high-level overview of an organization's cleanup effort | None | This report is comprised of two elements:   * Bar Chart – Displays the host summary of cleanup progress * Table – provides details on cleanup progress |