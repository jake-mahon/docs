# SP\_DomainUsers Job

The SP\_DomainUsers Job identifies locations where there are domain users directly applied on permissions. Best practices dictate that groups should be used to provide access to resources.

## Analysis Tasks for the SP\_DomainUsers Job

Navigate to the __Jobs__ > __SharePoint__ > __1.Direct Permissions__ > __SP\_DomainUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_DomainUsers Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/directpermissions/domainusersanalysis.webp)

The default analysis tasks are:

- 1. Direct Permissions. Shows All Direct User Permissions – Creates the SA\_SP\_DomainUsers\_DirectPermissions table accessible under the job’s Results node
- 2. Rank Resources by Number of Directly Applied Users – Creates an interim processing table in the database for use by downstream analysis and report generation
- 3. Rank Domain Users by Number of Direct Assignments – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the table created by the analysis task which displays all direct user permissions, the SP\_DomainUsers Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain User Permissions | This report identifies locations where there are domain users directly applied on permissions. Best practices dictate that groups should be used to provide access to resources. | None | This report is comprised of three elements:   - Bar chart – Displays the top 5 resources by directly applied users - Table – Provides details on directly applied users by resource - Table – Provides details on direct permission counts by user |
