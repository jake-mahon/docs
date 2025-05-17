---
sidebar_position: 5426
title: 0.Collection > SQL Job Group
---

# 0.Collection > SQL Job Group

The 0.Collection Job Group is designed to collect high level summary information form targeted Microsoft SQL Servers. This information is used by other jobs in the SQL solution set for further analysis and for producing reports.

![0.Collection Job Group - SQL](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup1.png "0.Collection Job Group - SQL")

The jobs in the 0.Collection Job Group are:

* [0-SQL\_InstanceDiscovery Job](0-SQL_InstanceDiscovery "0-SQL_InstanceDiscovery Job") – This job is designed to enumerate and store the list of SQL Server Instances running on the targeted servers
* [1-SQL\_PermissionsScan](1-SQL_PermissionsScan "Navigates to the 1-SQL_PermissionsScan Job section") – This job is designed to collect SQL Server instance and database level permissions from all targeted servers
* [2-SQL\_SensitiveDataScan Job](2-SQL_SensitiveDataScan "Navigates to the 2-SQL_SensitiveDataScan Job section") – This job is designed to discover sensitive data in the database SQL Server instances and databases based on a pre-defined or user-defined search criteria
* [3-SQL\_ActivityScan Job](3-SQL_ActivityScan "Navigates to the 3-SQL_ActivityScan Job section") – This job is designed to capture user activity from all targeted SQL server instances and databases
* [4-SQL\_ServerLogons Job](4-SQL_ServerLogons "Navigates to the 4-SQL_ServerLogons Job section") – This job is designed to capture all types of SQL server logon activity including successful or failed logons
* [5-SQL\_ServerSettings Job](5-SQL_ServerSettings "Navigates to the 5-SQL_ServerSettings Job section") – This job is designed to collect SQL server instance and database configuration settings so that they can be evaluated against recommended best practices