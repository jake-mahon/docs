# 2.Activity Job Group

The jobs in the 2. Activity Job Group provides insight into user login activity, object permission changes, unusual database activity, SQL and Azure SQL activities against sensitive data, and SQL and Azure SQL activities against selected or all database objects.

![2.Activity Job Group](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sqljobgroup30.webp)

The jobs in the 2.Activity Job Group are:

- [SQL\_Activity Job](/docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sql_activity.md) – This job is designed to provide insight into user activity in target SQL and Azure SQL server instances and databases in each instance based on the SQL Server Audit Specification settings
- [SQL\_Logons Job](/docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sql_logons.md) – This job is designed to provide insight into failed or successful SQL and Azure SQL server logon activity across all the targeted SQL and Azure SQL Servers
- [SQL\_PermissionChanges Job](/docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sql_permissionchanges.md) – This job is designed to provide detailed information about the changes in permissions across all the database objects, specifically objects containing sensitive data
- [SQL\_SensitiveDataActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sql_sensitivedataactivity.md) – This job is designed to provide detailed information about all the DML (UPDATE, INSERT, DELETE, TRUNCATE) against objects containing selective data
- [SQL\_UnusualActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sql_unusualactivity.md) – This job group is designed to highlight any anomalies related to outlying user activity by database across all the targeted SQL and Azure SQL server instances.
