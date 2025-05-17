---
sidebar_position: 4973
title: Databases Solutions
---

# Databases Solutions

Access Analyzer Databases Solution Set is a comprehensive set of pre-configured audit jobs and reports that provide visibility into various aspects of supported databases:

* [Db2 Solution](DB2/Overview "Db2 Solution") – Db2 Solution is a comprehensive set of pre-configured audit jobs and reports that provide visibility into various aspects of Db2, such as Data Collection, Configuration, user Permissions, and Sensitive Data.
* [MongoDB Solution](MongoDB/Overview "MongoDB Solution") – Access Analyzerfor MongoDB automates the process of understanding where MongoDB databases exist and provides an overview of the MongoDB environment in order to answer questions around data access.
* [MySQL Solution](MySQL/Overview "MySQL Solution") – Access Analyzer for MySQL automates the process of understanding where MySQL databases exist and provides an overview of the MySQL environment in order to answer questions around data access.
* [Oracle Solution](Oracle/Overview "Oracle Solution") – Access Analyzer for Oracle automates the process of understanding where Oracle databases exist and provides an overview of the Oracle environment in order to answer questions around data access.
* [PostgreSQL Solution](PostgreSQL/Overview "PostgreSQL Solution") – Access Analyzer for PostgreSQL automates the process of understanding where PostgreSQL databases exist and provides an overview of the PostgreSQL environment in order to answer questions around data access.
* [Redshift Solution](Redshift/Overview "Redshift Solution") – Redshift Solution Set is a comprehensive set of pre-configured audit jobs and reports that provide visibility into various aspects of Redshift: Data Collection, Configuration, and Sensitive Data.
* [SQL Job Group](SQL/Overview "SQL Job Group") – SQL Job Group is a comprehensive set of pre-configured audit jobs and reports that provide information on users and roles, activity, permissions, configuration, sensitive data, and overall security assessment for both the SQL 0.Collection Job Group and Azure SQL 0.Collection Job Group.

The Database Solution license includes all supported database platforms supported by Access Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for sensitive data.

The following table identifies the type of audit functionality for each supported database platform:

| Database Platforms | Instance Discovery | Permission Audit | Activity Audit | Sensitive Data Discovery | Configuration Audit |
| --- | --- | --- | --- | --- | --- |
| SQL Server | Fully Supported | Fully Supported | Fully Supported | Fully Supported | Fully Supported |
| Oracle | Fully Supported | Fully Supported | Fully Supported | Fully Supported | Fully Supported |
| DB2 |  | Fully Supported |  | Fully Supported | \*\*Partially Supported |
| MongoDB |  |  |  | Fully Supported | \*\*Partially Supported |
| MySQL |  | \*Partially Supported |  | Fully Supported | \*\*Partially Supported |
| PostgreSQL |  | \*Partially Supported |  | Fully Supported | \*\*Partially Supported |
| Redshift |  | \*Partially Supported |  | Fully Supported | \*\*Partially Supported |

In the above table:

* \*Partially Supported, "Permission Audit" means the permissions as solely collected at the table level.
* \*\*Partially Supported, "Permission Audit" means only the database size information is collected.