# Oracle\_ObjectPermissions Job

The Oracle\_ObjectPermissions Job provides insight into user and role permissions to database objects in targeted Oracle database servers.

## Analysis Tasks for the Oracle\_ObjectPermissions Job

Navigate to the __Oracle__ > __3.Permissions__ > __Oracle\_ObjectPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/permissions/jobgroup35.webp)

The default analysis tasks are:

- Oracle Object Permissions – Highlights permissions on Oracle Objects. Creates the SA\_Oracle\_ObjectPermission\_Details table accessible under the job’s Results node.
- Object Permissions Instance Summary – Summarizes Object Permissions by Instance. Creates the SA\_Oracle\_ObjectPermission\_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_ObjectPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Oracle Object Permissions | This report highlights Object permissions and summarizes them by instance and domain user | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by object permissions - Table –  Provides details on instances by object permission count - Table – Provides details on object permissions |
