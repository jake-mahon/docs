# AD_ComputerRights Job

The AD_ComputerRights Job provides data collection to identify permissions applied to computers in
Active Directory.

## Query for the AD_ComputerRights Job

The AD_ComputerRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_ComputerRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/computerrightsquery.png)

- Computer Access Permissions – Returns computer access permission

    - See the
      [ADPermissions Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/overview.md)
      topic for additional information

## Analysis Tasks for the AD_ComputerRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** >
**AD_ComputerRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Task for the AD_ComputerRights Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/computerrightsanalysis.png)

- Computer Rights View – Creates the SA_AD_ComputerRights_Details_PermissionsView visible under the
  job’s Results node
- AIC computer permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation
