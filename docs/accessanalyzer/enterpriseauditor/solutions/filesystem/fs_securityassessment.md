# FS\_SecurityAssessment Job

The FS\_SecurityAssessment job is designed to provide a security assessment of all relevant information from targeted file servers. It is dependent upon the following jobs:

- 2.Direct Permissions Job Group

  - [FS\_LocalUsersAndGroups Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/fs_localusersandgroups.md)
  - [FS\_NestedShares Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/fs_nestedshares.md)
  - [FS\_SIDHistory Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/fs_sidhistory.md)
- [3.Broken Inheritance > FS\_BrokenInheritance Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_brokeninheritance.md)
- 5.Activity Job Group

  - [Least Privileged Access > FS\_LeastPrivilegedAccess Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/fs_leastprivilegedaccess.md)
  - Security > [FS\_HighRiskActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/security/fs_highriskactivity.md)
- 7.Sensitive Data Job Group

  - [7.Sensitive Data > FS\_DLPResults Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_dlpresults.md)

If only select sub-job groups have been run, there are blank sections in the overview report.

![FS_SecurityAssessment Job in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/securityassessmentjobstree.png)

The FS\_SecurityAssessment job is comprised of analysis and reports which use the data collected by the 0.Collection job group and analyzed by the jobs listed above.

## Analysis Task for the FS\_SecurityAssessment Job

View the analysis tasks by navigating to the __FileSystem__ > __FS\_SecurityAssessment__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the FS_SecurityAssessment Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/securityassessmentanalysis.png)

The following analysis tasks are selected by default:

- Assess Risk – Creates the SA\_FS\_SecurityAssessment\_Details table accessible under the job’s Results node
- Summary – Creates the SA\_FS\_SecurityAssessment\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_SecurityAssessment job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Security Assessment | This report identifies common issues and vulnerabilities across your file systems. | GDPR  SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of four elements:   - Table – Provides details of the scan Scope - Pie Chart – Provides details of findings by risk - Table – Provides details of findings by category - Table – Provides a summary of risk assessment details |
