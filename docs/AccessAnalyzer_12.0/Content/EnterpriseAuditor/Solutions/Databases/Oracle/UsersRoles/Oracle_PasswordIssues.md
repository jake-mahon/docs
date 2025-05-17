---
sidebar_position: 5518
title: Oracle_PasswordIssues Job
---

# Oracle\_PasswordIssues Job

The Oracle\_PasswordIssues Job is designed to analyze the Oracle user passwords and evaluate if they comply with prescribed password policies. In addition, the job group will also scan for weak passwords.

## Query for the Oracle\_PasswordIssues Job

The Oracle\_PasswordIssues Job uses the PowerShell Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup20.png "Query Selection")

* Weak Password Hash – Locates the dictionary file used to compare Oracle passwords to determine if they are weak.

See the [PowerShell Data Collector](../../../../Admin/DataCollector/PowerShell/Overview "PowerShell Data Collector") topic for additional information.

## Analysis Tasks for the Oracle\_PasswordIssues Job

Navigate to the **Jobs** > **Oracle** > **1.Users and Roles** > **Oracle\_PasswordIssues** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup21.png "Analysis Selection")

The default analysis tasks are:

* Oracle Weak Password Details – Lists details of weak passwords in Oracle. Adds data to the SA\_Oracle\_PasswordIssues\_Details table accessible under the job’s Results node.
* Weak Hashes – Highlights user accounts with weak hashes. Adds data to the SA\_Oracle\_PasswordIssues\_Details table accessible under the job’s Results node.
* Default Passwords – Finds users with default passwords. Adds data to the SA\_Oracle\_PasswordIssues\_Details table accessible under the job’s Results node.
* Weak Password Instance Summary – Summarizes weak passwords per instance. Creates the SA\_Oracle\_PasswordIssues\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle\_PasswordIssues Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Weak Passwords | This report highlights users with weak passwords in the audited Oracle environment | None | This report is comprised of three elements:   * Bar Chart – Displays password issues by instance * Table – Provides details on password issues by instance * Table – Provides information on password issue details |