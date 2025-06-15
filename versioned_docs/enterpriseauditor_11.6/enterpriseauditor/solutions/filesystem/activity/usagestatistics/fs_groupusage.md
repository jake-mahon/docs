# FS_GroupUsage Job

The FS_GroupUsage job is designed to report on group usage from targeted file servers.

## Analysis Tasks for the FS_GroupUsage Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Usage Statistics__ > __FS_GroupUsage__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_GroupUsage Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/activity/usagestatistics/groupusageanalysis.png)

The following analysis task is selected by default:

- 1. Identify Last Time a Group was used for Access

  - Creates an interim processing table in the database for use by downstream analysis and report generation
  - Creates the SA_FS_GroupUsage_DaysSinceUse view accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_GroupUsage job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Groups | This report identifies the last possible time a group was used for providing file system access. | None | This report is comprised of two elements:   - Bar Chart – Displays top unused groups - Table – Provides details on unused groups |
