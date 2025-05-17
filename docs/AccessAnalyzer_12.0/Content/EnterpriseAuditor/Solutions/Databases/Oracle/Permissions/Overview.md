---
sidebar_position: 5512
title: 3.Permissions Job Group
---

# 3.Permissions Job Group

The 3.Permissions Job Group is designed to provide insight into all types of permissions at the instance, database, and object levels across all targeted Oracle database servers.

![Permissions Job Group](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup33.png "Permissions Job Group")

The jobs in the 3.Permissions Job Group are:

* [Oracle\_DomainUserPermissions Job](Oracle_DomainUserPermissions "Oracle_DomainUserPermissions Job") – This job will provide insight into Microsoft Active Directory domain users access to Oracle database objects both at the instance and object level
* [Oracle\_ObjectPermissions Job](Oracle_ObjectPermissions "Oracle_ObjectPermissions Job") – This job will provide insight into user and role permissions to all the database objects in the targeted Oracle database server
* [Oracle\_PublicPermissions Job](Oracle_PublicPermissions "Oracle_PublicPermissions Job") – This job provides the list of all the permission assigned to the PUBLIC profile in all the targeted Oracle database servers
* [Oracle\_ServerPermissions Job](Oracle_ServerPermissions "Oracle_ServerPermissions Job") – This job analyzes all the permission granted at the database level and repots on the effective database level permissions across all the audited Oracle database servers
* [Oracle\_SysSchemaPermissions Job](Oracle_SysSchemaPermissions "Oracle_SysSchemaPermissions Job") – This job provides insight into all the users who have access to the objects in the SYS schema and the type permissions to those objects across all the audited Oracle database servers