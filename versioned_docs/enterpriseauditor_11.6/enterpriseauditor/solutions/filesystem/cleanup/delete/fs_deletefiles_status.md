# FS\_DeleteFiles\_Status Job

The FS\_DeleteFiles\_Status job is designed to report on deleted resources from targeted file servers that were deleted from the FS\_DeleteFiles job. See the [FS\_DeleteFiles Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/cleanup/delete/fs_deletefiles.md) topic for additional information.

## Analysis Tasks for the FS\_DeleteFiles\_Status Job

Navigate to the __FileSystem__ > __Cleanup__ > __4. Delete__ > __FS\_DeleteFiles\_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_DeleteFiles_Status Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/cleanup/delete/deletefilesstatusanalysis.png)

The following analysis task is selected by default:

- Summarize file deletion actions – Creates the SA\_FS\_Delete\_Status\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_DeleteFiles\_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Deletions | This report summarizes file deletions which have occurred during the Cleanup process | None | This report is comprised of two elements:   - Line Chart – Displays the historical summary of file deletions - Table – provides details on file deletions |
