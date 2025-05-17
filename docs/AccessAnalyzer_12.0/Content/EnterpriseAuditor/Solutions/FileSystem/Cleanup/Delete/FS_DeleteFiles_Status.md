---
sidebar_position: 5254
title: FS_DeleteFiles_Status Job
---

# FS\_DeleteFiles\_Status Job

The FS\_DeleteFiles\_Status job is designed to report on deleted resources from targeted file servers that were deleted from the FS\_DeleteFiles job. See the [FS\_DeleteFiles Job](FS_DeleteFiles "FS_DeleteFiles Job") topic for additional information.

## Analysis Tasks for the FS\_DeleteFiles\_Status Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS\_DeleteFiles\_Status** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_DeleteFiles_Status Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/Delete/DeleteFilesStatusAnalysis.png "Analysis Tasks for the FS_DeleteFiles_Status Job")

The following analysis task is selected by default:

* Summarize file deletion actions – Creates the SA\_FS\_Delete\_Status\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_DeleteFiles\_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Deletions | This report summarizes file deletions which have occurred during the Cleanup process | None | This report is comprised of two elements:   * Line Chart – Displays the historical summary of file deletions * Table – provides details on file deletions |