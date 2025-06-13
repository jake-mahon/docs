# AD\_DomainPermissions Job

The AD\_DomainPermissions Job reports on all Active Directory permissions applied to domain objects within the targeted domains.

#### Analysis Tasks for the AD\_DomainPermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __8.Domains__ > __AD\_DomainPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DomainPermissions Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/domains/domainpermissionsanalysis.png)

The default analysis tasks are:

- List domain object permissions – Creates the SA\_AD\_DomainPermissions\_Details table accessible under the job’s Results node
- Summarize domain permissions – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_DomainPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Permissions | This report highlights instances where permissions are applied to Active Directory domain objects. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   - Bar Chart – Displays permissions by domain - Pie Chart – Provides details on enterprise domain permissions by type - Table – Provides details on domain permissions |
