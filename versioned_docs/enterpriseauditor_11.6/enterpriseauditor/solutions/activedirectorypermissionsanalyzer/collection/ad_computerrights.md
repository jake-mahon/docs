# AD\_ComputerRights Job

The AD\_ComputerRights Job provides data collection to identify permissions applied to computers in Active Directory.

## Query for the AD\_ComputerRights Job

The AD\_ComputerRights Job uses the ADPermissions Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_ComputerRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/computerrightsquery.png)

- Computer Access Permissions – Returns computer access permission

  - See the [ADPermissions Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD\_ComputerRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD\_ComputerRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the AD_ComputerRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/computerrightsanalysis.png)

- Computer Rights View – Creates the SA\_AD\_ComputerRights\_Details\_PermissionsView visible under the job’s Results node
- AIC computer permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
