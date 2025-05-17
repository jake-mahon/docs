---
sidebar_position: 5024
title: 5.Open Access > AD_OpenAccess Job
---

# 5.Open Access > AD\_OpenAccess Job

The AD\_OpenAccess Job reports on all Active Directory permissions granting open access within the targeted domains. Open Access can be defined as access granted to security principals such as: Domain Users, Authenticated Users, and Everyone.

![5.Open Access Job Group in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/OpenAccessJobsTree.png "5.Open Access Job Group in the Jobs Tree")

The AD\_OpenAccess Job is located in the 5.Open Access Job Group.

## Analysis Tasks for the AD\_OpenAccess Job

Navigate to the **Active Directory Permissions Analyzer** > **5.Open Access** > **AD\_OpenAccess** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_OpenAccess Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/OpenAccessAnalysis.png "Analysis Tasks for the AD_OpenAccess Job")

The default analysis tasks are:

* Determine open access – Creates the SA\_AD\_OpenAccess\_Details table accessible under the job’s Results node
* Summarize open access by domain – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_OpenAccess Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Open Access by Domain | This report highlights instances of open access on AD objects, and summarizes open access by domain. | None | This report is comprised of three elements:   * Bar Chart – Displays open access by domain * Table – Provides details on open access * Table – Provides details on open access by domain |