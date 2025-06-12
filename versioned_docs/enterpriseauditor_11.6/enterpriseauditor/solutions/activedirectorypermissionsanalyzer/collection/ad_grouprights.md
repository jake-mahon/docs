# AD\_GroupRights Job

The AD\_GroupRights Job provides data collection to identify permissions applied to groups in Active Directory.

## Query for the AD\_GroupRights Job

The AD\_GroupRights Job uses the ADPermissions Data Collector for the following query:

__CAUTION:__  Do not modify the query. The query is preconfigured for this job.

![Query for the AD_GroupRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/grouprightsquery.png)

- Group Access Permissions – Returns group access permissions

  - See the [ADPermissions Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD\_GroupRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD\_GroupRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/grouprightsanalysis.png)

The default analysis tasks are:

- Group Rights View – Creates the SA\_AD\_GroupRights\_Details\_PermissionsView visible under the job’s Results node
- AIC group permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
