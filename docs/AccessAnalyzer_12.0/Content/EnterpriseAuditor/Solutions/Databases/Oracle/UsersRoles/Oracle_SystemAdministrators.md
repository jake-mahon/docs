---
sidebar_position: 5522
title: Oracle_SystemAdministrators Job
---

# Oracle\_SystemAdministrators Job

The Oracle\_SystemAdministrators Job is designed to provide insight into users who have DBA, SYSDBA, and SYSOPER roles across all targeted Oracle database servers.

## Analysis Tasks for the Oracle\_SystemAdministrators Job

Navigate to the **Oracle** > **1.Users and Roles** > **Oracle\_SystemAdministrators** > Configure node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup23.png "Analysis Selection")

The default analysis tasks are:

* Oracle Administrators – Returns members of specified administrator roles. Creates the SA\_Oracle\_SystemAdministrators table accessible under the job’s Results node.
* System Admin Instance Summary – Summarizes System Administrators by Instance. Creates the SA\_Oracle\_SystemAdministrators\_InstanceSummary table accessible under the job’s Results node.
* System Admin Domain Users – Highlights System Administrators which are domain accounts. Creates the SA\_Oracle\_SystemAdmins\_DomainUsers table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_SystemAdministrators Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Admin Summary | This report highlights all principals which are members of specified administrator roles | None | This report is comprised of three elements:   * Bar Chart – Displays top instances by admin count * Table – Provides information on admin details * Table – Provides details on top instances by admin count |