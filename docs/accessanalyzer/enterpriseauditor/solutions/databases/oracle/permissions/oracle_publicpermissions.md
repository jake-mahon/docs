# Oracle_PublicPermissions Job

The Oracle_PublicPermissions Job provides a list of permissions assigned to Public profile in targeted Oracle database servers.

## Analysis Tasks for the Oracle_PublicPermissions Job

Navigate to the __Oracle__ > __3.Permissions__ > __Oracle_PublicPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/permissions/jobgroup36.webp)

The default analysis tasks are:

- Oracle Public Permissions – Analyzes permissions for the Public Oracle account. Creates the SA_Oracle_PublicPermission_Details table accessible under the job’s Results node.
- Public Permissions Instance Summary – Summarizes public permissions by Instance. Creates the SA_Oracle_PublicPermission_InstanceSummary accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_PublicPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Public Permissions | This report highlights public permissions and summarizes them by instance | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by public permission - Table – Provides details on instances by public permission count - Table – Provides details on public permission details |
