# AD\_UserRights Job

The AD\_UserRights Job provides data collection to identify permissions applied to users in Active Directory.

## Query for the AD\_UserRights Job

The AD\_UserRights Job uses the ADPermissions Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_UserRights Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/userrightsquery.webp)

- User Access Permissions – Returns user permissions

  - See the [ADPermissions Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD\_UserRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD\_UserRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_UserRights Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/userrightsanalysis.webp)

The default analysis tasks are:

- User Rights View – Creates the SA\_AD\_UserRights\_Details\_PermissionsView visible under the job’s Results node
- AIC user permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
