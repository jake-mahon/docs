# AD\_GroupCleanup\_Permissions Job

The AD\_GroupCleanup\_Permissions Job reports on where security groups are being used to assign permissions. This can be used to prioritize remediation for groups that are rarely used.

## Analysis Tasks for the AD\_GroupCleanup\_Permissions Job

Navigate to the __Active Directory__ > __Cleanup__ > __1.Groups__ > __2. Group Stamping__ > __AD\_GroupCleanup\_Permissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupCleanup_Permissions Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/cleanup/groups/stamping/groupcleanuppermissionsanalysis.png)

The default analysis tasks are:

- Summarize Group Type/Scope – Creates the SA\_AD\_GroupCleanup\_GroupTypes table accessible under the job’s Results node
- Direct Permission Details – Creates the SA\_AD\_GroupCleanup\_PermissionsImport table accessible under the job’s Results node
- Expanded Perms Details – Creates the SA\_GroupCleanup\_ExpandedPermissions table accessible under the job’s Results node
- Expanded Perms Summary – Creates the SA\_GroupCleanup\_ExpandedPermissionsSummary table accessible under the job’s Results node
- Access Counts by Group – Creates the SA\_GroupCleanup\_GroupAccessSprawl table accessible under the job’s Results node
- Permission and Access Counts by Group Scope – Creates the SA\_AD\_GroupCleanup\_PermissionsByScope table accessible under the job’s Results node
- Permission and Access Counts by Toxic Condition – Creates the SA\_AD\_GroupCleanup\_PermissionsByCondition table accessible under the job’s Results node
- Permission and Access Counts by Scan Type – Creates the SA\_AD\_GroupCleanup\_ScanOverview table accessible under the job’s Results node
- Group Summary – Creates the SA\_GroupCleanup\_GroupSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_GroupCleanup\_Permissions Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Direct Permission Details | This report shows all direct permissions found by DAG for FileSystem, DAG for SharePoint, or imported into the Access Information Center from other sources. | None | This report is comprised of one element:   - Table – Provides group direct permission details |
| Group Permission Summary | This report identifies what types of resources each security group is being used to apply permissions. | None | This report is comprised of four elements:   - Table – Provides details on permission scans - Table – Provides details on group access - Table – Provides details on toxic conditions - Table – Provides a group overview |
