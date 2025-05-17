---
sidebar_position: 5447
title: SQL_DomainUserPermissions Job
---

# SQL\_DomainUserPermissions Job

The SQL\_DomainUserPermissions Job provides insight into Microsoft Active Directory domain users’ access to SQL and Azure SQL server objects at both the instance and database level.

## Analysis Tasks for the SQL\_DomainUserPermissions Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL\_DomainUserPermissions > Configure node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup39.png "Analysis Selection")

The default analysis tasks are:

* Domain User Permissions Details – Creates the SA\_SQLServer\_DomainUserPermissions\_Details table accessible under the job’s Results node
* Domain User Permissions Summary – Creates the SA\_SQLServer\_DomainUserPermissions\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_DomainUserPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain User SQL Access | This report looks at SQL server permissions granted to domain users across the audited environment. | None | This report is comprised of three elements:   * Bar Chart – Displays top users by instance count * Table – Provides details on access sprawl * Table – Provides details on permission details |