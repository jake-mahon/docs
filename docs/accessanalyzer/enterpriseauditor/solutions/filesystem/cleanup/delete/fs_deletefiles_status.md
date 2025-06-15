# FS_DeleteFiles_Status Job

The FS_DeleteFiles_Status job is designed to report on deleted resources from targeted file servers that were deleted from the FS_DeleteFiles job. See the [FS_DeleteFiles Job](fs_deletefiles.md) topic for additional information.

## Analysis Tasks for the FS_DeleteFiles_Status Job

Navigate to the __FileSystem__ > __Cleanup__ > __4. Delete__ > __FS_DeleteFiles_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_DeleteFiles_Status Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/delete/deletefilesstatusanalysis.webp)

The following analysis task is selected by default:

- Summarize file deletion actions – Creates the SA_FS_Delete_Status_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_DeleteFiles_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Deletions | This report summarizes file deletions which have occurred during the Cleanup process | None | This report is comprised of two elements:   - Line Chart – Displays the historical summary of file deletions - Table – provides details on file deletions |
