# Db2\_SensitiveDataPermissions Job

This job provides all types of permissions on database objects containing sensitive data across all the targeted Db2 database servers.

## Analysis Tasks for the Db2\_SensitiveDataPermissions Job

Navigate to the __Jobs__ > __Databases__ > __Db2__ > __Sensitive Data__ >  __Db2\_SensitiveDataPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Db2_SensitiveDataPermissions Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/db2/sensitivedata/sensitivedatapermissionsanalysis.png)

The default analysis tasks are:

- Sensitive Data Permissions – Provides details on which users have permissions on discovered Db2 Sensitive Data
- Sensitive Data Permissions Database Summary – Summarizes sensitive data permissions by database

## Report for the Db2\_SensitiveDataPermissions Job

In addition to the tables and views created the analysis task, the Db2\_SensitiveDataPermissions job has the following preconfigured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None | This report is comprised of three elements:   - Bar Chart – Displays Top Databases by Permission Count - Table – Displays Database Sensitive Data Permissions Summary - Table – Displays data details |
