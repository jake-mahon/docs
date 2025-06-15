# AD_DomainRights Job

The AD_DomainRights Job provides data collection to identify permissions applied to Domains in Active Directory.

## Query for the AD_DomainRights Job

The AD_DomainRights Job uses the ADPermissions Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_DomainRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/domainrightsquery.png)

- Domain Access Permissions – Returns domain access permissions

  - See the [ADPermissions Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD_DomainRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD_DomainRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DomainRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/domainrightsanalysis.png)

The default analysis tasks are:

- Domain Rights View – Creates the SA_AD_DomainRights_Details_PermissionsView visible under the job’s Results node
- AIC domain permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
