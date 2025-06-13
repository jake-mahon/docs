# SP\_PermissionChanges Job

This job identifies permission changes which have been performed on all monitored SharePoint sites over the past 30 days.

## Analysis Tasks for the SP\_PermissionChanges Job

Navigate to the __Jobs__ > __SharePoint__ > __7.Activity__ > __Forensics__ > __SP\_PermissionChanges__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_PermissionChanges Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/activity/forensics/permissionchangesanalysis.png)

The default analysis tasks are:

- Analyze Permission Changes – Creates the SA\_SP\_PermissionChanges table accessible under the job’s Results node
- Permission Changes Counts – Creates the SA\_SP\_PermissionChanges\_Counts table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_PermissionChanges Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Permission Changes | This report identifies SharePoint permission changes based on activity events and determines whether or not that permission change is considered a high security risk. | None | This report is comprised of two elements:   - Bar Chart – Displays permission change activity in the past seven days - Table – Provides permission change details |
