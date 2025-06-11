# Oracle\_SensitiveDataPermissions Job

The Oracle\_SensitiveDataPermissions Job is designed to provide information on permissions on database objects containing sensitive data across all targeted Oracle database servers.

## Analysis Tasks for the Oracle\_SensitiveDataPermissions Job

Navigate to the __Oracle > 5.Sensitive Data > Oracle\_SensitiveDataPermissions > Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/sensitivedata/jobgroup45.webp)

The default analysis tasks are:

- Detail Oracle SDD Permissions – Creates the SA\_Oracle\_SensitiveDataPermissions\_Details table accessible under the job’s Results node
- SDD Perms Instance Summary – Creates the SA\_Oracle\_SensitiveDataPermissions\_InstanceSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the __Oracle\_SensitiveDataPermissions Job__ produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by permission count - Table – Provides details on instance permission summary - Table – Provides information on sensitive data permission details |
