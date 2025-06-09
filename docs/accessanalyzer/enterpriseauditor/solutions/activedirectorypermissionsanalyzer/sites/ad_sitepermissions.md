# AD\_SitePermissions Job

The AD\_SitePermissions Job reports on all Active Directory permissions applied to site objects within the targeted domains.

## Analysis Tasks for the AD\_SitePermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __9.Sites__ > __AD\_SitePermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_SitePermissions Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/sites/sitepermissionsanalysis.png)

The default analysis tasks are:

- Site Permissions – Creates the SA\_AD\_SitePermissions\_Details table accessible under the job’s Results node
- Summarize Site Permissions – Creates the SA\_AD\_SitePermissions\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_SitePermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Site Permissions | This report highlights instances where permissions are applied to Active Directory Site objects. | None | This report is comprised of three elements:   - Bar Chart – Displays permissions by site - Pie chart – Provides details on enterprise site permissions by type - Table – Provides details on site permissions |
