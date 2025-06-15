# SP_PermissionChanges Job

This job identifies permission changes which have been performed on all monitored SharePoint sites over the past 30 days.

## Analysis Tasks for the SP_PermissionChanges Job

Navigate to the __Jobs__ > __SharePoint__ > __7.Activity__ > __Forensics__ > __SP_PermissionChanges__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_PermissionChanges Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/box/activity/forensics/permissionchangesanalysis.webp)

The default analysis tasks are:

- Analyze Permission Changes – Creates the SA_SP_PermissionChanges table accessible under the job’s Results node
- Permission Changes Counts – Creates the SA_SP_PermissionChanges_Counts table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_PermissionChanges Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Permission Changes | This report identifies SharePoint permission changes based on activity events and determines whether or not that permission change is considered a high security risk. | None | This report is comprised of two elements:   - Bar Chart – Displays permission change activity in the past seven days - Table – Provides permission change details |
