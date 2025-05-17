---
sidebar_position: 5442
title: 3.Permissions Job Group
---

# 3.Permissions Job Group

The 3.Permissions Job Group provides insight into permissions at the instance, database, and object level across all targeted SQL and Azure SQL servers.

![](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup36.png)

The jobs in the 3.Permissions Job Group are:

* [SQL\_ControlServer Job](SQL_ControlServer "Navigates to the SQL_ControlServer Job section") – This job will provide information on control server permissions. Users with control server permissions allow users to command full control of a SQL and Azure SQL server instances
* [SQL\_DirectPermissions Job](SQL_DirectPermissions "Navigates to the SQL_DirectPermissions Job section") – This job will provide information about the permissions granted to users at the schema, database, and server levels
* [SQL\_DomainUserPermissions Job](SQL_DomainUserPermissions "Navigates to the SQL_DomainUserPermissions Job section") – This job will provide insight into Microsoft Active Directory domain users’ access to SQL and Azure SQL server objects both at the instance and database level
* [SQL\_PublicPermissions Job](SQL_PublicPermissions "Navigates to the SQL_PublicPermissions Job section") – This job analyzes all the permissions granted at the server level and reports on the effective server level permissions across all the audited SQL and Azure SQL server instances
* [SQL\_ServerPermissions Job](SQL_ServerPermissions "Navigates to the SQL_ServerPermissions Job section") – This job provides the list of SQL and Azure SQL server logins that have the PUBLIC roles assigned. In addition, it also provides the list of permissions assigned to the PUBLIC role as well