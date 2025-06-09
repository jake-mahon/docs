# PgSQL\_SensitiveDataPermissions Job

The PgSQL\_SensitiveDataPermissions Job is designed to provide information on all types of permissions on database objects containing sensitive data across all the targeted PostgreSQL servers based on the selected scan criteria.

## Analysis Tasks for the PgSQL\_SensitiveData Job

Navigate to the __Jobs > Databases > PostgreSQL > Sensitive Data > PgSQL\_SensitiveDataPermissions > Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/postgresql/sensitivedata/sensitivedatapermission.png)

The default analysis tasks are:

- Sensitive Data Permission Details – Creates the PgSQL\_SensitiveDataPermissions\_Details table accessible under the job’s Results node
- Sensitive Data Permissions Database Summary – Creates the PgSQL\_SensitiveDataPermissions\_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the PgSQL\_SensitiveDataPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None | This report is comprised of three elements:   - Bar Chart – Displays top databases by permission count - Table – Provides details on database permission summary - Table – Provides details on sensitive data permission details |
