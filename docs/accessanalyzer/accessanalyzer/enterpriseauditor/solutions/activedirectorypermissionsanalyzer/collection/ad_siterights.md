# AD\_SiteRights Job

The AD\_SiteRights Job provides data collection to identify permissions applied to sites in Active Directory.

## Query for the AD\_SiteRights Job

The AD\_SiteRights Job uses the ADPermissions Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_SiteRights Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/siterightsquery.png)

- Site Access Permissions – Returns site permissions

  - See the [ADPermissions Data Collector](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD\_SiteRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD\_SiteRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_SiteRights Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/userrightsanalysis.png)

The default analysis tasks are:

- Site Rights View – Creates the SA\_AD\_SiteRights\_Details\_PermissionsView visible under the job’s Results node
- AIC Site Permissions Import – Creates an interim processing table in the database for use by downstream analysis and report generation
