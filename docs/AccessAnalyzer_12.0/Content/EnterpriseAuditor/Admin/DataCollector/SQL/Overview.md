---
sidebar_position: 6211
title: SQL Data Collector
---

# SQL Data Collector

The SQL Data Collector provides information on database configuration, permissions, data extraction, application name of the application responsible for activity events, an IP Address or Host name of the client server, and sensitive data reports. This data collector also provides information on Oracle databases including infrastructure and operations.

The SQL Data Collector has been preconfigured within the Database data collection jobs for Db2, MySQL, Oracle, PostgreSQL, Redshift, and SQL Server databases. Both this data collector and the Database Solution are available with a special Access Analyzer license. See the following topics for additional information:

* [Db2 Solution](../../../Solutions/Databases/DB2/Overview "Db2 Solution")
* [MySQL Solution](../../../Solutions/Databases/MySQL/Overview "MySQL Solution")
* [PostgreSQL Solution](../../../Solutions/Databases/PostgreSQL/Overview "PostgreSQL Solution")
* [Oracle Solution](../../../Solutions/Databases/Oracle/Overview "Oracle Solution")
* [Redshift Solution](../../../Solutions/Databases/Redshift/Overview "Redshift Solution")
* [SQL Job Group](../../../Solutions/Databases/SQL/Overview "SQL Solution")

Protocols

TCP

Ports

For Db2:

* Specified by Instances table (default is 5000)

For MySQL:

* Specified by Instances table (default is 3306)

For Oracle:

* Specified by Instances table (default is 1521)

For PostgreSQL:

* Specified by Instances table (default is 5432)

For SQL:

* Specified by Instances table (default is 1433)

Permissions

For MySQL:

* Read access to MySQL instance to include all databases contained within each instance
* Windows Only — Domain Admin or Local Admin privilege

For Oracle:

* User with SYSDBA role
* Local Administrator on the target servers – Only applies to Windows Servers and not on Linux or Unix operating systems

For PostgreSQL:

* Read access to all the databases in PostgreSQL cluster or instance
* Windows Only — Domain Admin or Local Admin privilege

For Redshift:

* Read-access to the following tables:

  * pg\_tables
  * pg\_user

For SQL:

* For Instance Discovery, local rights on the target SQL Servers:

  * Local group membership to Remote Management Users
  * Permissions on the following WMI NameSpaces: `root\Microsoft\SQLServer, root\interop`
* For permissions for data collection:

  * Read access to SQL instance
  * Requires SQL Full-Text and Semantic Extractions for Search feature to be installed on the target SQL instance(s) when using the **Scan full rows for sensitive data** option on the Options wizard page
  * Grant Authenticate Server to [DOMAIN\USER]
  * Grant Connect SQL to [DOMAIN\USER]
  * Grant View any database to [DOMAIN\USER]
  * Grant View any definition to [DOMAIN\USER]
  * Grant View server state to [DOMAIN\USER]
  * Grant Control Server to [DOMAIN\USER] (specifically required for the Weak Passwords Job)

See the [Azure SQL Auditing Configuration](../../../Requirements/Target/Config/AzureSQLAccess "Azure SQL Auditing Configuration") topic and the [AzureSQL Target Least Privilege Model](../../../Requirements/Target/Config/DatabaseAzureSQL "AzureSQL Target Least Privilege Model") topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## SQL Query Configuration

The SQL Data Collector is configured through the SQL Data Collector Wizard. The wizard contains the following pages, which change based upon the query category selected:

**NOTE:** The SQL Data Collector is used in multiple Access Analyzer Solutions, and the query categories used are dependent on the solution.

* [SQL: Category](Category "SQL: Category")
* [SQL: Options](Options "SQL: Options")
* [SQL: Criteria](Criteria "SQL: Criteria")
* [SQL: Filter](Filter "SQL: Filter")
* [SQL: Settings](Settings "SQL: Settings")
* [SQL: Custom SQL Query](CustomQuerySQL "SQL: Custom SQL Query")
* [SQL: Custom Oracle Query](CustomQueryOracle "SQL: Custom Oracle Query")
* [SQL: Results](Results "SQL: Results")
* [SQL: Rowkey](Rowkey "SQL: Rowkey")
* [SQL: Summary](Summary "SQL: Summary")