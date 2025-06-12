# AD\_ComputerPermissions Job

The AD\_ComputerPermissions Job reports on all Active Directory permissions applied to computer objects within the targeted domains.

## Analysis Tasks for the AD\_ComputerPermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __4.Computers__ > __AD\_ComputerPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ComputerPermissions Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/computers/computerpermissionsanalysis.png)

The default analysis tasks are:

- List computer object permissions – Creates the SA\_AD\_ComputerPermissions\_Details table accessible under the job’s Results node
- Summarize computer object permissions – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_ComputerPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Computer Permissions | This report highlights instances where permissions are applied to Active Directory computer objects. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   - Bar Chart – Displays computer permissions by domain - Pie Chart – Displays computer permissions by type - Table – Provides details on computer permissions |
