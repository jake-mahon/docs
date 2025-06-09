# FS\_NotifyOwners\_Status Job

The FS\_NotifyOwners\_Status job is comprised of analysis and reports that summarize the actions performed by the FS\_NotifyOwners job. See the [FS\_NotifyOwners Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/notify/fs_notifyowners.md) topic for additional information.

## Analysis Tasks for the FS\_NotifyOwners\_Status Job

Navigate to the __FileSystem__ > __Cleanup__ > __2. Notify__ > __FS\_NotifyOwners\_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_NotifyOwners_Status Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/notify/notifyownersstatusanalysis.png)

The following analysis tasks are selected by default:

- Summarize notifications – Creates the SA\_FS\_CleanupAssessment\_ShareDetails\_NotifySummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_NotifyOwners\_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Owner Notifications  (Share Owner Notifications) | This report summarizes share owner notifications which have occurred during the Cleanup effort | None | This report is comprised of two elements:   - Line Chart – Displays the historical summary of notify share owners - Table – provides details on notify share owners |
