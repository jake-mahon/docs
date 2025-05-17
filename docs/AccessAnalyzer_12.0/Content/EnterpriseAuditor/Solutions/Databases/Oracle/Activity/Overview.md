---
sidebar_position: 5506
title: 2.Activity Job Group
---

# 2.Activity Job Group

The 2.Activity Job Group is designed to provide insight into user login activity, object permission changes, unusual database activity, SQL activity against sensitive data, and SQL activity against selective or all database objects.

![Activity Job Group](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup25.png "Activity Job Group")

The jobs in the 2.Activity Job Group are:

* [Oracle\_Activity Job](Oracle_Activity "Oracle_Activity Job") – This job is designed to provide insight into user activity in target Oracle database server instances and databases in each instance based on the Oracle Unified Audit settings
* [Oracle\_Logons Job](Oracle_Logons "Oracle_Logons Job") – This job group is designed to provide insight into failed and successful Oracle database login activity across all the targeted Oracle database servers
* [Oracle\_PermissionChanges Job](Oracle_PermissionChanges "Oracle_PermissionChanges Job") – This job is designed to provide detailed information about the changes in permissions across all the database objects. Audited activities include granting, altering, and revoking permissions on database objects.
* [Oracle\_SchemaChanges Job](Oracle_SchemaChanges "Oracle_SchemaChanges Job") – This job is designed to provide detailed information about the changes in permissions across all the database objects. Audited activities include granting, altering, and revoking permissions on database objects.
* [Oracle\_SensitiveDataActivity Job](Oracle_SensitiveDataActivity "Oracle_SensitiveDataActivity Job") – This job is designed to provide detailed information about all the DML (UPDATE, INSERT, DELETE, TRUNCATE) against objects containing sensitive data
* [Oracle\_SuspiciousActivity Job](Oracle_SuspiciousActivity "Oracle_SuspiciousActivity Job") – This job is designed to provide insight into suspicious behavior based on user activity that does not conform to normal database activity
* [Oracle\_UnusualActivity Job](Oracle_UnusualActivity "Oracle_UnusualActivity Job") – This job is designed to analyze user activity based on the audited actions and identify any outliers based on a modified z-score. Modified z-scores of 3.5 or higher are considered to be possible outliers.