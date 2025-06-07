# AD\_ComputerPermissions Job

The AD\_ComputerPermissions job reports on all Active Directory permissions and ownership applied to computer objects within the targeted domains.

## Analysis Tasks for the AD\_ComputerPermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __4.Computers__ > __AD\_ComputerPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ComputerPermissions Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/computers/computerpermissionsanalysis.png)

The default analysis tasks are:

- List computer object permissions – Creates the SA\_AD\_ComputerPermissions\_Details table accessible under the job’s Results node
- Summarize computer object permissions – Creates an interim processing table in the database for use by downstream analysis and report generation
- Computer Ownership – Lists the owners of each computer object and determines if they are a non-standard owner. Users that are not administrators are considered non-standard owners of computer objects. Creates the SA\_AD\_ComputerOwnership\_Details table accessible under the job’s Results node.
- Computer Ownership Summary – Summarizes owner type by domain

In addition to the tables and views created by the analysis tasks, the AD\_ComputerPermissions job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Computer Ownership | This report highlights instances where Active Directory computer objects are owned by non admin principals. This information is summarized at the domain level. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays a summary of computer ownership by domain - Table – Provides details on non-standard computer owners |
| Computer Permissions | This report highlights instances where permissions are applied to Active Directory computer objects. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   - Bar Chart – Displays computer permissions by domain - Pie Chart – Displays computer permissions by type - Table – Provides details on computer permissions |
