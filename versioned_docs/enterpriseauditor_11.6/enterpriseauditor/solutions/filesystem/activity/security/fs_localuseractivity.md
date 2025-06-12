# FS\_LocalUserActivity Job

The FS\_LocalUserActivity job is designed to report on local user activity event information from targeted file servers.

## Analysis Tasks for the LocalUserActivity Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Security__ > __FS\_LocalUserActivity__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the LocalUserActivity Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/activity/security/localuseractivityanalysis.png)

- 1. Local User Activity Details – Creates the SA\_FS\_LocalUserActivity\_Details table accessible under the job’s Results node
- 2. Top Local User Accounts – Creates the SA\_FS\_LocalUserActivity\_TopUsers table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_LocalUserActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Local User Activity | This report identifies local accounts with file system activity. | None | This report is comprised of two elements:   - Bar Chart – Displays top local user account activity (last 30 days) - Table – Provides details on local user activity |
