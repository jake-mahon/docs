# AD\_DomainRights Job

The AD\_DomainRights Job provides data collection to identify permissions applied to Domains in Active Directory.

## Query for the AD\_DomainRights Job

The AD\_DomainRights Job uses the ADPermissions Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_DomainRights Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/domainrightsquery.webp)

- Domain Access Permissions – Returns domain access permissions

  - See the [ADPermissions Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD\_DomainRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD\_DomainRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DomainRights Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/domainrightsanalysis.webp)

The default analysis tasks are:

- Domain Rights View – Creates the SA\_AD\_DomainRights\_Details\_PermissionsView visible under the job’s Results node
- AIC domain permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
