# SQL\_PublicPermissions Job

The SQL\_PublicPermissions Job provides the list of SQL server logins that have the PUBLIC roles assigned. In addition, it also provides the list of permissions assigned to the PUBLIC role as well.

## Analysis Tasks for the SQL\_PublicPermissions Job

Navigate to the __Databases__ > SQL > 5.Permissions > SQL\_PublicPermissions > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/permissions/sqljobgroup40.png)

The default analysis tasks are:

- Calculate public permissions – Creates the SA\_SQLServer\_PublicPermissions\_Details table accessible under the job’s Results node
- Public Permissions Summary – Creates the SA\_SQLServer\_PublicPermissions\_DatabaseSummary table accessible under the job’s Results node
- Public Permissions Summary – Highlights permissions that have been granted to the public role on objects that are not-default SQL or Azure SQL server objects
- Public Permissions Instance Summary (Non-Default) – Summarizes non-default SQL and Azure SQL server public permissions by instance

In addition to the tables and views created by the analysis task, the SQL\_PublicPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Public Permissions | This report determines highlights objects with public permissions applied. | None | This report is comprised of three elements:   - Bar Chart – Displays top databases by public permission count - Table – Provides details on databases by public permission count - Table – Provides details on public permission details |
