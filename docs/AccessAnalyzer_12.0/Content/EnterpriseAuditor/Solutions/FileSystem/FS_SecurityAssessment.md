---
sidebar_position: 4995
title: FS_SecurityAssessment Job
---

# FS\_SecurityAssessment Job

The FS\_SecurityAssessment job is designed to provide a security assessment of all relevant information from targeted file servers. It is dependent upon the following jobs:

* 2.Direct Permissions Job Group

  * [FS\_LocalUsersAndGroups Job](DirectPermissions/FS_LocalUsersAndGroups "FS_LocalUsersAndGroups Job")
  * [FS\_NestedShares Job](DirectPermissions/FS_NestedShares "FS_NestedShares Job")
  * [FS\_SIDHistory Job](DirectPermissions/FS_SIDHistory "FS_SIDHistory Job")
* [3.Broken Inheritance > FS\_BrokenInheritance Job](FS_BrokenInheritance "3.Broken Inheritance > FS_BrokenInheritance Job")
* 5.Activity Job Group

  * [Least Privileged Access > FS\_LeastPrivilegedAccess Job](Activity/FS_LeastPrivilegedAccess "Least Privileged Access > FS_LeastPrivilegedAccess Job")
  * Security > [FS\_HighRiskActivity Job](Activity/Security/FS_HighRiskActivity "FS_HighRiskActivity Job")
* 7.Sensitive Data Job Group

  * [7.Sensitive Data > FS\_DLPResults Job](FS_DLPResults "7.Sensitive Data > FS_DLPResults Job")

If only select sub-job groups have been run, there are blank sections in the overview report.

![FS_SecurityAssessment Job in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/SecurityAssessmentJobsTree.png "FS_SecurityAssessment Job in the Jobs Tree")

The FS\_SecurityAssessment job is comprised of analysis and reports which use the data collected by the 0.Collection job group and analyzed by the jobs listed above.

## Analysis Task for the FS\_SecurityAssessment Job

View the analysis tasks by navigating to the **FileSystem** > **FS\_SecurityAssessment** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the FS_SecurityAssessment Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/SecurityAssessmentAnalysis.png "Analysis Task for the FS_SecurityAssessment Job")

The following analysis tasks are selected by default:

* Assess Risk – Creates the SA\_FS\_SecurityAssessment\_Details table accessible under the job’s Results node
* Summary – Creates the SA\_FS\_SecurityAssessment\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_SecurityAssessment job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Security Assessment | This report identifies common issues and vulnerabilities across your file systems. | GDPR  SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of four elements:   * Table – Provides details of the scan Scope * Pie Chart – Provides details of findings by risk * Table – Provides details of findings by category * Table – Provides a summary of risk assessment details |