# Oracle\_PermissionChanges Job

The Oracle\_PermissionsChanges Job is designed to provide detailed information about changes in permissions across all database objects. Audited activities include granting, altering, and revoking permissions on database objects.

## Analysis Tasks for the Oracle\_PermissionsChanges Job

Navigate to the __Oracle__ > __2.Activity__ > __Oracle\_PermissionChanges__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/activity/jobgroup28.png)

The default analysis tasks are:

- Oracle Permission Changes – Highlights activity involving permission changes on audited Oracle Instances. Creates the SA\_Oracle\_PermissionChange\_Details table accessible under the job’s Results node.
- Oracle Permission Changes Instance Summary – Summarizes Permission Changes per Instance. Creates the SA\_Oracle\_PermissionChange\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_PermissionsChanges Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Permission Change Activity Summary | This report lists all permission change related Oracle events, and summarizes them by instance. | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by permission change activity - Table –  Provides details on instances by permission change activity - Table – Provides details on permission change details |
