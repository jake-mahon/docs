---
sidebar_position: 5436
title: 2.Activity Job Group
---

# 2.Activity Job Group

The jobs in the 2. Activity Job Group provides insight into user login activity, object permission changes, unusual database activity, SQL and Azure SQL activities against sensitive data, and SQL and Azure SQL activities against selected or all database objects.

![2.Activity Job Group](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup30.png "2.Activity Job Group")

The jobs in the 2.Activity Job Group are:

* [SQL\_Activity Job](SQL_Activity "Navigates to the SQL_Activity Job section") – This job is designed to provide insight into user activity in target SQL and Azure SQL server instances and databases in each instance based on the SQL Server Audit Specification settings
* [SQL\_Logons Job](SQL_Logons "Navigates to the SQL_Logons Job section") – This job is designed to provide insight into failed or successful SQL and Azure SQL server logon activity across all the targeted SQL and Azure SQL Servers
* [SQL\_PermissionChanges Job](SQL_PermissionChanges "Navigates to the SQL_PermissionChanges Job section") – This job is designed to provide detailed information about the changes in permissions across all the database objects, specifically objects containing sensitive data
* [SQL\_SensitiveDataActivity Job](SQL_SensitiveDataActivity "Navigates to the SQL_SensitiveDataActivity Job section") – This job is designed to provide detailed information about all the DML (UPDATE, INSERT, DELETE, TRUNCATE) against objects containing selective data
* [SQL\_UnusualActivity Job](SQL_UnusualActivity "Navigates to the SQL_UnusualActivity Job section") – This job group is designed to highlight any anomalies related to outlying user activity by database across all the targeted SQL and Azure SQL server instances.