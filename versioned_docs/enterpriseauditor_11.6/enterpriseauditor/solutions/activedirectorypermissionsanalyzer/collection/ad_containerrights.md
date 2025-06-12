# AD\_ContainerRights Job

The AD\_ContainerRights Job provides data collection to identify permissions applied to Containers in Active Directory.

## Query for the AD\_ContainerRights Job

The AD\_ContainerRights Job uses the ADPermissions Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_ContainerRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/containerrightsquery.png)

- Container Access Permissions – Returns containers under the given scope

  - See the [ADPermissions Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD\_ContainerRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD\_ContainerRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ContainerRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/containerrightsanalysis.png)

The default analysis tasks are:

- Container Rights View – Creates the SA\_AD\_ContainerRights\_Details\_PermissionsView visible under the job’s Results node
- AIC container permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
