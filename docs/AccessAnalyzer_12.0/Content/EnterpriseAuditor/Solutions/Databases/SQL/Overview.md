---
sidebar_position: 5417
title: SQL Job Group
---

# SQL Job Group

The SQL Job Group reports on SQL Server, AzureSQL, or both depending on which collection jobs were run. The SQL Job Group is a comprehensive set of pre-configured audit jobs and reports that provide information on users and roles, activity, permissions, configuration, sensitive data, and overall security assessment.

Supported Platforms

* Azure SQL

* SQL Server 2022
* SQL Server 2019
* SQL Server 2017
* SQL Server 2016

Requirements, Permissions, and Ports

See the [Target SQL Server Requirements, Permissions, and Ports](../../../Requirements/Target/DatabaseSQL "Target SQL Server Requirements, Permissions, and Ports") topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

**NOTE:** The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the server. The JDK deployed is prepackaged and does not require any configuration; it has been preconfigured to work with Access Analyzer and should never be customized through Java. It will not conflict with other JDKs or Java Runtimes in the same environment.

Location

The SQL Job Group within the Jobs tree, as part of the Database Solution: Jobs > Database > SQL.

The Database Solution license includes all supported database platforms supported by Access Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for sensitive data.

![SQL Job Group](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup.png "SQL Job Group")

The SQL Job Group includes:

* Databases > 0.Collection > SQL > [0.Collection > SQL Job Group](Collection/Overview "0.Collection Job Group") – This job group is designed to collect high level summary information from Microsoft SQL servers. This information is used by other jobs in the SQL solution set for further analysis and for producing respective reports.
* Databases > 0.Collection > AzureSQL > [0.Collection > Azure SQL Job Group](../AzureSQL/Collection/Overview "0.Collection Job Group") — This job group is designed to collect high level summary information from targeted Azure SQL Instances. This information is used by other jobs in the Azure SQL solution set to provide further analysis and for producing respective reports.
* [1.Users and Roles Job Group](UsersRoles/Overview "Navigates to the 1.Users and Roles Job Group section")– This job group is designed to provide insight into user security, roles, and object permissions to all the SQL server objects
* [2.Activity Job Group](Activity/Overview "Navigates to the 2.Activity Job Group section") – This job group is designed to provide insight into use login activity, object permission changes, any unusual database activity, SQL activity against sensitive data, SQL activity against selective or all database objects
* [3.Permissions Job Group](Permissions/Overview "Navigates to the 3.Permissions Job Group section") – This job group is designed to provide insight into all types of permissions at the instance, database, and object level across all the targeted SQL servers
* [4.Configuration Job Group](Configuration/Overview "Navigates to the 4.Configuration Job Group section") – This job group is designed to provide insight into potential vulnerabilities related to SQL server configuration settings
* [5.Sensitive Data Job Group](SensitiveData/Overview "Navigates to the 5.Sensitive Data Job Group section")– This job group is designed to provide insight into where sensitive data exists and who has access to it across all the targeted SQL server databases
* [SQL\_SecurityAssessment Job](SQL_SecurityAssessment "Navigates to the SQL_SecurityAssessment Job section") – This job is designed to summarize and categorize the security findings into HIGH, MEDIUM, LOW, and NO FINDING categories based on their severity.