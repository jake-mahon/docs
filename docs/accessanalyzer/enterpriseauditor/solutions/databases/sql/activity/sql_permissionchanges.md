# SQL\_PermissionChanges Job

The SQL\_PermissionChanges Job provides detailed information on permission changes for all database objects, specifically objects containing sensitive data.

## Analysis Tasks for the SQL\_PermissionChanges Job

Navigate to the __Databases__ > SQL > 2.Activity > SQL\_PermissionChanges > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sqljobgroup33.webp)

The default analysis tasks are:

- SQLServer Permission Changes – Creates the SA\_SQLServer\_PermissionChanges\_Details table accessible under the job’s Results node
- Permission Changes Instance Summary – Creates the SA\_SQLServer\_PermissionChanges\_InstanceSummary table accessible under the job’s Results node. This analysis task summarizes permission change activity per instance.

In addition to the tables and views created by the analysis tasks, the SQL\_SensitiveDataActivity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Permission Change Activity | This report lists all permission change related SQL events, and summarizes them by instance. | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by permission change activity - Table – Provides details on instances by permission change activity - Table – Provides details on event details |
