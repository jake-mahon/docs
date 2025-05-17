---
sidebar_position: 5492
title: Oracle_InstanceNameIssues Job
---

# Oracle\_InstanceNameIssues Job

The Oracle\_InstanceNameIssues Job discovers if names used for Oracle database instances conform to Oracle recommended best practices. The job also checks to see if Oracle SIDs conform to DISA STIG V-61413 – Oracle instance name or SID should not contain Oracle version numbers.

## Analysis Tasks for the Oracle\_InstanceNameIssues Job

Navigate to the **Jobs > Databases > Oracle > 4.Configuration > Oracle\_InstanceNameIssues > Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/AnalysisInstanceNameIssues.png "Analysis Selection")

The default analysis tasks are:

* Find Weak Instance Names – Checks SID names for default names and version numbers. Creates the SA\_Oracle\_WeakInstanceNames\_Details table accessible under the job’s Results node.
* Summarize Number of Weak Instance Names – Counts the number of weak instance names in all instances. Creates the SA\_Oracle\_WeakInstanceNames\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the **Oracle\_InstanceNameIssues Job** produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Instance Name Issues | This report highlights default instance names or those containing version numbers. | None | This report is comprised of two elements:   * Pie Chart – Displays percentage of instance names with issues * Table – Provides details of instance issues |