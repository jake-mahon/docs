---
sidebar_position: 5477
title: MySQL_SensitiveDataPermissions Job
---

# MySQL\_SensitiveDataPermissions Job

The MySQL\_SensitiveDataPermissions Job is designed to provide information on all types of permissions on database objects containing sensitive data across all the targeted MySQL servers based on the selected scan criteria.

## Analysis Tasks for the MySQL\_SensitiveData Job

Navigate to the **Jobs > MySQL > Sensitive Data > MySQL\_SensitiveDataPermissions > Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/MySQL/AnalysisMySQLSensitiveDataPermission.png "Analysis Selection")

The default analysis tasks are:

* Sensitive Data Permission Details – Creates the MySQL\_SensitiveDataPermissions\_Details table accessible under the job’s Results node
* Sensitive Data Permissions Database Summary – Creates the MySQL\_SensitiveDataPermissions\_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the MySQL\_SensitiveDataPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None | This report is comprised of three elements:   * Bar Chart – Displays top databases by permission count * Table – Provides details on database permission summary * Table – Provides details on sensitive data permission details |