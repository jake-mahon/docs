# Oracle\_SysSchemaPermissions Job

The Oracle\_SysSchemaPermissions Job provides insight into users that have access to objects in the SYS schema, and the type permissions to those objects across all audited Oracle database servers.

## Analysis Tasks for the Oracle\_SysSchemaPermissions Job

Navigate to the __Oracle__ > __3.Permissions__ > __Oracle\_SysSchemaPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/permissions/jobgroup38.webp)

The default analysis tasks are:

- Oracle Sys Schema Permissions – Highlights all permissions on tables in the Oracle schema. Creates the SA\_Oracle\_SysSchema table accessible under the job’s Results table.
- Oracle Sys Schema Summary – Summarizes sys schema permissions per instance. Creates the SA\_Oracle\_SysSchema\_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle\_SysSchemaPermissions Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SYS Schema Permissions | This report highlights SYS schema permissions across the audited environment | None | This report is comprised of three elements:   - Bar Chart – Displays sys schema permission by instance - Table – Provides details on sys schema permissions by instance - Table – Provides details on sys schema permission details |
