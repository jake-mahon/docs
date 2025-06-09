# AD\_AdminSDHolder Job

The AD\_AdminSDHolder Job is comprised of analysis tasks and reports which use the data collected by the 0.Collection Job Group to provide information on permissions applied to the AdminSDHolder Container in Active Directory.

## Queries for the AD\_AdminSDHolder Job

The AD\_AdminSDHolder Job uses the PowerShell Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Queries for the AD_AdminSDHolder Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/containers/adminsdholderquery.png)

- Default AdminSDHolder Perms – Creates a table of default AdminSDHolder permissions

  - See the [PowerShell Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/powershell/overview.md) topic for additional information

## Analysis Tasks for the AD\_AdminSDHolder Job

Navigate to the __Active Directory Permissions Analyzer__ > __7.Containers__ > __AD\_AdminSDHolder__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_AdminSDHolder Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/containers/adminsdholderanalysis.png)

The default analysis tasks are:

- Determine AdminSDHolder permissions – Creates the SA\_AD\_AdminSDHolder\_Details table accessible under the job’s Results node
- Summarize AdminSDHolder permissions – Creates the SA\_AD\_AdminSDHolder\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_AdminSDHolder Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| AdminSDHolder Permissions | This report highlights suspicious (non-default) permissions applied to the AdminSDHolder container across all audited domains, and enumerates all AdminSDHolder permissions. For more information on vulnerabilities involving AdminSDHolder access, see the Microsoft [AdminSDHolder, Protected Groups and SDPROP](https://technet.microsoft.com/en-us/library/2009.09.sdadminholder.aspx) article. | None | This report is comprised of three elements:   - Bar Chart – Displays suspicious AdminSDHolder permissions by domain - Table – Provides details on AdminSDHolder permissions - Table – Provides details on top users by suspicious AdminSDHolder permissions |
