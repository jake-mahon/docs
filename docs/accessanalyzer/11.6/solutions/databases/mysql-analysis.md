---
title: databases mysql analysis
sidebar_label: mysql analysis
description: Solution guide for databases mysql analysis including implementation steps, configuration, and best practices.
---

# MySQL_Configuration Job

The MySQL_Configuration Job is designed to collect MySQL server instance and database configuration
settings for use in the following analysis jobs and respective reports.

## Queries for the MySQL_Configuration Job

The MySQL_Configuration Job uses the SQL Data Collector for queries.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/collection/configurationjob.webp)

The query is:

- Database Sizing - Returns size details for the selected MySQL databases

# MySQL_SensitiveDataScan Job

The MySQL_SensitiveDataScan Job is designed to discover sensitive data in MySQL databases based on
pre-defined or user-defined search criteria.

## Queries for the MySQL_SensitiveDataScan Job

The MySQL_SensitiveDataScan Job uses the SQL Data Collector for queries.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/sensitivedatascan.webp)

The query is:

- Sensitive Data Scan - Discovers MySQL Sensitive Data. See the
  [Configure the SensitiveDataScan Query](#configure-the-sensitivedatascan-query) for additional
  information.

### Configure the SensitiveDataScan Query

The MySQL_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive
Data Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the Databases > 0.Collection > MySQL > MySQL_SensitiveDataScan > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the Sensitive Data Scan query click on Query
Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for this
job.

![Sensitive Data Scan Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/sensitivedatscan_optionspage.webp)

**Step 4 –** To modify sensitive data scan options, select the desired scan options. See the
[SQL: Options](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page for additional information.

**NOTE:** The Sensitive Data Scan Settings are pre-configured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.

![DLP Criteria for Scan](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/sensitivedatscan_criteriapage.webp)

**Step 5 –** To modify criteria, navigate to the
[SQL: Criteria](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. By default, the Sensitive Data Scan job is configured to scan for criteria configured in the
Global Criteria settings. See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
topic for additional information.

![Filters Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/sensitivedatscan_filterspage.webp)

**Step 6 –** MySQL databases must be added to the query before they can be scanned. Navigate to the
**Filter** page and click **Connections** to open the Manage Connections window.

![Manage Connections](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/manageconnectionsmysql.webp)

**Step 7 –** In the Manage Connections window, click **New Connection** and add the following
information:

- Instance Label — The name of the instance
- Database System — Select MySQL from the dropdown list
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. The default port for MySQL is 3306

Exit the Manage Connections window to return to the Filter page.

**Step 8 –** On the Filter page, the query is configured by default to target Only select database
objects. Click Retrieve. The Available database objects box will populate. The default filter will
scan all MySQL Databases returned, excluding the listed system schemas and tables in red. Databases
and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Use the Add Custom Filter button to create and apply a custom filter.

**Step 9 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The MySQL_SensitiveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the MySQL_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **MySQL** > **MySQL_SensitiveDataScan** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/analysismysqlsensitivedatascan.webp)

The default analysis tasks are:

- Bring SA_SQL_Instances to View — Displays the SA_SQL_Instances table
- MySQL SDD Matches View — Bring the MySQL SDD Matches View to the SA console
- MySQL SDD Match Hits View — Bring the MySQL SDD Match Hits View to the SA console
- MySQL SDD AIC Import — Imports to MySQL SDD to the AIC

# MySQL_TablePrivileges Job

The MySQL_TablePrivileges job is designed to collect MySQL table privileges from all the targeted
servers.

## Queries for the MySQL_TablePrivileges Job

The MySQL_TablePrivileges Job uses the SQL Data Collector for queries.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/querytableprivileges.webp)

The query is:

- Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the MySQL_TablePrivileges Job

Navigate to the **Databases** > **0.Collection** > **MySQL** > **MySQL_TablePrivileges** >
**Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/collection/analysistableprivileges.webp)

The default analysis task is:

- AIC Import - MySQL Permissions – Imports MySQL permissions to the AIC.

# 0.Collection Job Group

The MySQL Solution Collection group is designed to collect high level summary information from
targeted MySQL Servers. This information is used by other jobs in the MySQL Solution Set for further
analysis and producing respective reports.

![0.Collection Job Group for MySQL](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/collection/0.collectionjobgroup.webp)

The jobs in the 0.Collection Job Group are:

- [MySQL_Configuration Job](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md)
  – Designed to collect MySQL server instance and database configuration settings for use in the
  following analysis jobs and respective reports
- [MySQL_SensitiveDataScan Job](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md)
  – Designed to discover sensitive data in MySQL databases based on pre-defined or user-defined
  search criteria
- [MySQL_TablePrivileges Job](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md)
  – Designed to collect MySQL table privileges from all the targeted servers.

Workflow

1. Set a Connection Profile for the 0.Collection Job Group with the permissions listed in the
   Recommended Configurations section. See the
   [Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
   topic for additional information.
2. For Sensitive Data Discovery Auditing – Ensure the Sensitive Data Discovery Add-On is installed
   on the StealthAUDIT Console server.
3. Schedule the solution to run daily or as desired.
4. Review the reports generated by the jobs.

# Configuration > MySQL_DatabaseSizing Job

The Configuration Job Group is designed to provide insight into MySQL server configuration settings.

![Configuration Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/configurationjobgroup.webp)

The job in the Configuration Job Group is:

- MySQL_DatabaseSizing Job - Provides details on database table sizes and overall database size

### Analysis Tasks for the MySQL_DatabaseSizing Job

Navigate to the **Jobs > Databases > MySQL > Configuration > MySQL_DatabaseSizing > Configure** node
and select Analysis to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/analysismysqldatabasesizing.webp)

The default analysis tasks are:

- Database Details - Returns size details for MySQL databases
- Database Summary - Summarizes database sizes by host

In addition to the tables and views created the analysis task, the MySQL_DatabaseSizing Job produces
the following pre-configured reports.

| Report          | Description                                                 | Default Tags | Report Elements                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report provides details on database tables and sizing. |              | This report is comprised of three elements: - Bar Chart - Displays top databases by size (MB) - Bar Chart - Displays database size by host (GB) - Table - Displays details on database sizing |

# MySQL Solution

Data privacy and security is quickly evolving to be on equal footing with traditional security
measures focused on the network, hardware, or software the data is contained within. Organizations
aligning to concepts like Data-Centric Audit and Protection (DCAP) as defined by Gartner, or the
requirements of strict compliance regulations like EU GDPR, are looking to implement processes that
help them understand where sensitive data is stored, who or what is leveraging their privileges to
access the data, and how each database has been configured.

As part of Stealthbits comprehensive Data Access Governance suite for structured and unstructured
data, Enterprise Auditor for MySQL automates the process of understanding where MySQL databases
exist and provides an overview of the MySQL environment in order to answer questions around data
access:

- Who has access to your data?
- Where is sensitive data being stored?

With visibility into every corner of MySQL, organizations can proactively highlight and prioritize
risks to sensitive data. Additionally, organizations can automate manual, time-consuming, and
expensive processes associated with compliance, security, and operations to easily adhere to best
practices that keep MySQL Server safe and operational.

The MySQL Solution requires a special Enterprise Auditor license. The Database Solution license
includes all supported database platforms supported by Enterprise Auditor. Additionally, the
Sensitive Data Discovery Add-On enables the solution to search database content for sensitive data.

By default, the job is configured to use 10 threads, which can be adjusted based on available
resources on the Enterprise Auditor server.

Supported Platforms

- MySQL 5.x
- MySQL 8.x
- Amazon MySQL RDS
- Amazon Aurora MySQL Engine
- MariaDB 10.x

Requirements, Permissions, and Ports

See the
[Target MySQL Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host.For example, if the job is configured to scan 8 hosts at a time , then
an extra 16 GB of RAM are required (8x2=16).

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Location

The Structured Sensitive Data Discovery License is required to run the MySQL Solution. It can be
installed from the Enterprise Auditor Instant Job Wizard. Once it has been installed into the Jobs
tree, navigate to the solution: Jobs > **Databases** > MySQL.

The 0.Collection Job Group discovers configuration settings and Sensitive Data in MySQL Instances on
the target hosts. The other job groups analyze and report on the data collected by the 0.Collection
Job Group.

The Database Solution license includes all supported database platforms supported by Enterprise
Auditor. Additionally, the Sensitive Data Discovery Add-On enables the solution to search database
content for sensitive data.

## Job Groups

The Enterprise Auditor MySQL Solution Set is a set of pre-configured audit jobs and reports that
provides visibility into MySQL Sensitive Data.

![MySQL Job Group Overview](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/mysqljobgroupoverview.webp)

The job groups in the MySQL Solution are:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md)
  – Designed to collect high level summary information from targeted MySQL Servers. This information
  is used by other jobs in the MySQL Solution Set for further analysis and producing respective
  reports.
- [Configuration > MySQL_DatabaseSizing Job](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md)
  – Designed to provide insight into MySQL server configuration settings
- [MySQL_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md)
  – Designed to provide insight into where sensitive data exists and who has access to it across all
  the targeted MySQL databases.

# Recommended Configurations for the MySQL Solution

The MySQL Solution has been configured to inherit down from the MySQL > Settings node. However, it
is best practice to assign the host list and the Connection Profile at the data collection level,
0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

Dependencies

- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  Enterprise Auditor Console server
- For AWS RDS and Aurora instances, right-click a job in the **MySQL** > **0.Collection** folder and
  open the properties window. Select the **Performance** tab and ensure that the **Skip Hosts that
  do not respond to PING**checkbox is not selected.

Targeted Host(s)

- The 0.Collection Job Group must be set to run against a custom host list containing the
  MySQL database instances / clusters.
- For AWS RDS instances, specify the endpoint when creating a host list. This value may change after
  saving the list if the instance is part of a cluster.

Connection Profile

The SQL Data Collector requires a specific set of permissions. For the MySQL Solution, the
credentials configured in the Connection Profile must be able to access the MySQL Database. See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information on permissions and creating a SQL custom connection profile.

The Connection Profile is set to Use the Default Profile, as configured at the global settings
level. However, since this may not be the Connection Profile with the necessary permissions for the
assigned hosts, click the radio button for the Select one of the following user defined profiles
option and select the appropriate Connection Profile drop-down menu.

Schedule Frequency

Daily

Run Order

The 0.Collection Job Group must be run first before running the other jobs and job groups.

**_RECOMMENDED:_** Run the solution at the top level: MySQL Job Group

Query Configuration

This solution is designed to be run with the default query configurations. However, the
MySQL_SensitiveDataScan Job query can be customized as needed. See the
[Configure the SensitiveDataScan Query](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md#configure-the-sensitivedatascan-query)
topic for additional information.

Analysis Configuration

This solution should be run with the default analysis configurations. These analysis tasks are
preconfigured and should not be modified or deselected.

Disabling obsolete or run-desired jobs allows the solution to run more efficiently. To disable a job
or job group, right-click on the item and select Disable Job.

**_RECOMMENDED:_** Do not delete any jobs. Instead, jobs should be disabled.

# MySQL_SensitiveData Job

The MySQL_SensitiveData Job is designed to provide information on all the sensitive data that was
discovered in the targeted MySQL servers based on the selected scan criteria.

## Analysis Tasks for the MySQL_SensitiveData Job

Navigate to the **Jobs > MySQL > Sensitive Data > MySQL_SensitiveData > Configure** node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/sensitivedata/analysismysqlsensitivedata.webp)

The default analysis tasks are:

- Sensitive Data Details - Returns details around sensitive data in MySQL
- Database Summary - Summarizes sensitive data in MySQL by database
- Enterprise Summary - Summarizes MySQL sensitive data for the organization

In addition to the tables and views created the analysis task, the MySQL_SensitiveData Job produces
the following pre-configured reports.

| Report                  | Description                                                                  | Default Tags   | Report Elements                                                                                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. |                | This report is comprised of two elements: - Bar Chart - Displays exceptions by match count - Table - Displays exception details                                                                                    |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | Sensitive Data | This report is comprised of three elements: - Bar Chart - Displays top databases by Sensitive Data Hits - Table - Provides details on top databases by sensitive data - Table - Provides details on sensitive data |

# MySQL_SensitiveDataPermissions Job

The MySQL_SensitiveDataPermissions Job is designed to provide information on all types of
permissions on database objects containing sensitive data across all the targeted MySQL servers
based on the selected scan criteria.

## Analysis Tasks for the MySQL_SensitiveData Job

Navigate to the **Jobs > MySQL > Sensitive Data > MySQL_SensitiveDataPermissions > Configure** node
and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mysql/sensitivedata/analysismysqlsensitivedatapermission.webp)

The default analysis tasks are:

- Sensitive Data Permission Details – Creates the MySQL_SensitiveDataPermissions_Details table
  accessible under the job’s Results node
- Sensitive Data Permissions Database Summary – Creates the
  MySQL_SensitiveDataPermissions_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the
MySQL_SensitiveDataPermissions Job produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                |
| -------------------------- | ----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None         | This report is comprised of three elements: - Bar Chart – Displays top databases by permission count - Table – Provides details on database permission summary - Table – Provides details on sensitive data permission details |

# Sensitive Data Job Group

The Sensitive Data Job Group is designed to provide insight into where sensitive data exists and who
has access to it across all the targeted MySQL databases.

![Sensitive Data Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/sensitivedata/sensitivedatajobgroup.webp)

The job in the Sensitive Data Job Group is:

- [MySQL_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md) -
  Designed to provide information on all the sensitive data that was discovered in the targeted
  MySQL servers based on the selected scan criteria
- [MySQL_SensitiveDataPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/mysql-analysis.md) -
  Designed to provide information on all types of permissions on database objects containing
  sensitive data across all the targeted MySQL servers based on the selected scan criteria.
