---
sidebar_position: 5418
title: SQL_SecurityAssessment Job
---

# SQL\_SecurityAssessment Job

The SQL\_SecurityAssessment Job summarizes and categorizes security findings into HIGH, MEDIUM, LOW, and NO FINDINGS categories based on severity.

![SQL_SecurityAssessment](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup49.png "SQL_SecurityAssessment")

Special Dependencies

One or more of the following jobs or job groups must be run to produce results:

* [0.Collection > SQL Job Group](Collection/Overview "Navigates to the 0.Collection Job Group section")
* [SQL\_PasswordIssues Job](UsersRoles/SQL_PasswordIssues "Navigates to the SQL_PasswordIssues Job section")
* [SQL\_RoleMembers Job](UsersRoles/SQL_RoleMembers "Navigates to the SQL_RoleMembers Job section")
* [SQL\_PublicPermissions Job](Permissions/SQL_PublicPermissions "Navigates to the SQL_PublicPermissions Job section")
* [5.Sensitive Data Job Group](SensitiveData/Overview "Navigates to the 5.Sensitive Data Job Group section")
* [Privileged Accounts Job Group](../../Windows/PrivilegedAccounts/Overview "Navigates to the SG_ServiceAccounts Job section")
* [Privileged Accounts Job Group](../../Windows/PrivilegedAccounts/Overview "Navigates to the SG_LocalAdmins Job section")

Only information collected from jobs/groups being run will produce findings.

### Analysis Task for the SQL\_SecurityAssessment Job

Navigate to the SQL > SQL\_SecurityAssesment > Configure node and select Analysis to view the analysis task.

![Analysis Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup50.png "Analysis Selection")

The default analysis task is:

* Summarize Audit Findings – Pulls data from tables created by the jobs and job groups throughout the SQL Solution to provide a summary of results in the SQL Security Assessment report

In addition to the tables and views created by the analysis task, the SQL\_SecurityAssessment Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SQL Security Assessment | This report summarizes security related results from the SQL solution set. | Security Assessment | This report is comprised of four elements:   * Table – Provides details on the scope of the audit of the SQL Solution set * Pie Chart – Displays job findings by severity * Table – Displays findings by category and provides details on the SQL\_SecurityAssessment job results |