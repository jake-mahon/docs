# SP\_SiteCollectionPerms Job

Most content will inherit the permissions configured at the root of the site collection. Having an understanding of how those permissions are assigned is useful for gaining perspective on the overall SharePoint permission configuration.

## Analysis Tasks for the SP\_SiteCollectionPerms Job

Navigate to the __Jobs__ > __SharePoint__ > __1.Direct Permissions__ > __SP\_SiteCollectionPerms__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_SiteCollectionPerms Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/directpermissions/sitecollectionpermsanalysis.webp)

They need to remain in the default order:

- 1. Site Collection Direct Permissions

  - Creates the SA\_SP\_SiteCollectionPerms\_DirectPerms table accessible under the job’s Results node
  - Creates an interim processing table in the database for use by downstream analysis and report generation
- 2. Site Collection Details – Creates the SA\_SP\_SiteCollectionPerms\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display direct permissions at the root of the site collections, the SP\_SiteCollectionPerms Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Direct Site Collection Permissions | Most content will inherit the permissions configured at the root of the site collection. Having an understanding of how those permissions are assigned is useful for gaining perspective on the overall SharePoint permission configuration. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 site collections by direct permissions - Table – Provides details on site collections by direct permissions breakdown |
