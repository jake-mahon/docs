---
sidebar_position: 5278
title: FS_ModifiedBinaries Job
---

# FS\_ModifiedBinaries Job

The FS\_ModifiedBinaries job is designed to report on activity event information where binaries were modified from targeted file servers.

## Analysis Tasks for the FS\_ModifiedBinaries Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious Activity** > **FS\_ModifiedBinaries** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_ModifiedBinaries Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/SuspiciousActivity/ModifiedBinariesAnalysis.png "Analysis Tasks for the FS_ModifiedBinaries Job")

The following analysis task is selected by default:

* Summarize modifications to binaries

  * Creates an interim processing table in the database for use by downstream analysis and report generation
  * Creates the SA\_FS\_ModifiedBinaries\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_ModifiedBinaries job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| First Time Binary Modifications | This report highlights recent instances where users have modified binaries for the first time. | None | This report is comprised of two elements:   * Bar Chart – Displays first time binary modifications by host * Table – Provides details on modified binaries |