# Least Privileged Access > FS\_LeastPrivilegedAccess Job

The FS\_LeastPrivilegedAccess job is designed to report on activity event information that can assist in identifying least privilege from targeted file servers. It identifies where trustees are not leveraging their permissions to resources from targeted file servers. Requires __Access Auditing__ component data collection.

![Least Privileged Access > FS_LeastPrivilegedAccess Job in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/leastprivilegedaccessjobstree.webp)

The FS\_LeastPrivilegedAccess job is located in the Least Privileged Access job group.

## Analysis Tasks for the FS\_LeastPrivilegedAccess Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Least Privileged Access__ > __FS\_LeastPrivilegedAccess__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_LeastPrivilegedAccess Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/leastprivilegedaccessanalysis.webp)

The following analysis tasks are selected by default:

- 1. Join Activity Data to Share – Creates the SA\_FS\_LeastPrivilegedAccess\_ActivityByShare table accessible under the job’s Results node
- 2. Get Effective Share Access for all Shares with Activity – Creates the SA\_FS\_LeastPrivilegedAccess\_EffectiveShareAccess table accessible under the job’s Results node
- 3. Compare Users activity to access – Creates the SA\_FS\_LeastPrivilegedAccess\_Comparision table accessible under the job’s Results node
- 4. Summarize Comparison by Share – Creates an interim processing table in the database for use by downstream analysis and report generation
- 5. Rollup by Share - Pie Chart – Creates an interim processing table in the database for use by downstream analysis and report generation
- 6. Summarize Entitlement Usage - Enterprise Wide – Creates interim processing tables in the database for use by downstream analysis and report generation
- 7. Recommend Changes to Group ACLs – Creates the SA\_FS\_LeastPrivilegedAccess\_RecommendedChanges table accessible under the job’s Results node
- 8. Resource Based Groups – Creates the SA\_FS\_LeastPrivilegedAccess\_ResourceGroups table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_LeastPrivilegedAccess job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Overprovisioning Risk by Share | This report identifies shares with the largest amount of unutilized entitlements and assigns a risk rating to each one. | GDPR   SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Pie Chart – Displays shares by overprovisioning risk - Table – Provides details on shares by overprovisioning risk |
| Overprovisioning Summary | This report shows the percentage of all entitlements which are being used. An entitlement refers to one user's access to one folder. | GDPR  SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Pie Chart – entitlements by level of usage - Table – Provides details on entitlements |
| Remediation | If all members of a group are not using their full access, then modification to group permissions on the share will be suggested here. | None | This report is comprised of one element:   - Table – Provides details on recommended changes to permissions |
