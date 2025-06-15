# FS_StaleFileActivity Job

The FS_StaleFileActivity job is designed to report on user activity event information involving stale files from targeted file servers.

## Analysis Tasks for the FS_StaleFileActivity Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Suspicious Activity__ > __FS_StaleFileActivity__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_StaleFileActivity Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/stalefileactivityanalysis.png)

- Summarize Hourly Norms and Deviations – Creates the SA_FS_StaleFileActivity_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_StaleFileActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Stale File Activity | This report highlights periods of abnormally high activity involving stale shared resources. | None | This report is comprised of two elements:   - Bar Chart – Displays abnormal stale file activity - Table – Provides details on abnormal stale file activity |
