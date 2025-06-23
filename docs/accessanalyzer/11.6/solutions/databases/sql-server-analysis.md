---
title: databases sql server analysis
sidebar_label: sql server analysis
description: Solution guide for databases sql server analysis including implementation steps, configuration, and best practices.
---

# 2.Activity Job Group

The jobs in the 2. Activity Job Group provides insight into user login activity, object permission
changes, unusual database activity, SQL and Azure SQL activities against sensitive data, and SQL and
Azure SQL activities against selected or all database objects.

![2.Activity Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/activity/sqljobgroup30.webp)

The jobs in the 2.Activity Job Group are:

- [SQL_Activity Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide insight into user activity in target SQL and Azure SQL server
  instances and databases in each instance based on the SQL Server Audit Specification settings
- [SQL_Logons Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide insight into failed or successful SQL and Azure SQL server logon
  activity across all the targeted SQL and Azure SQL Servers
- [SQL_PermissionChanges Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide detailed information about the changes in permissions across all
  the database objects, specifically objects containing sensitive data
- [SQL_SensitiveDataActivity Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide detailed information about all the DML (UPDATE, INSERT, DELETE,
  TRUNCATE) against objects containing selective data
- [SQL_UnusualActivity Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to highlight any anomalies related to outlying user activity by
  database across all the targeted SQL and Azure SQL server instances.

# SQL_Activity Job

The SQL_Activity Job provides insight into user activity in target SQL server instances and
databases based on SQL Server Audit Specification settings.

## Analysis Tasks for the SQL_Activity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_Activity > Configure node and select Analysis
to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/activity/sqljobgroup31.webp)

The default analysis tasks are:

- List SQL User Activity Details – Creates the SA_SQLServer_Activity_Details table accessible under
  the job’s Results node
- User Activity Database Summary – Creates the SA_SQLServer_Activity_UserDatabaseSummary table
  accessible under the job’s Results node
- User Activity Instance Summary – Creates the SA_SQLServer_Activity_UserInstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created the analysis task, the SQL_Activity Job produces the
following pre-configured report.

| Report                | Description                                                                     | Default Tags | Report Elements                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User Activity Summary | This report lists all SQL events, and summarizes them by database and instance. | None         | This report is comprised of three elements: - Bar Chart – Displays users with most events by instance - Table – Provides details on users with most events by database - Table – Provides details on event details |

# SQL_Logons Job

The SQL_Logons Job provides insight into failed and successful SQL and Azure SQL server logon
activity across all targeted SQL and Azure SQL servers.

## Analysis Tasks for the SQL_Logons Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_Logons > Configure node and select Analysis
to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/activity/sqljobgroup32.webp)

The default analysis tasks are:

- Logon Details – Creates the SA_SQLServer_Logons_Details table accessible under the job’s Results
  node
- Logons Summary – Creates the SA_SQL_Logons_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_Logons Job produces the
following pre-configured report.

| Report               | Description                                                             | Default Tags | Report Elements                                                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Logon Details | This report outlines successful and failed logins over the last 30 days | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays logon summary - Table – Provides details on logon summary - Table – Provides details on logon details |

# SQL_PermissionChanges Job

The SQL_PermissionChanges Job provides detailed information on permission changes for all database
objects, specifically objects containing sensitive data.

## Analysis Tasks for the SQL_PermissionChanges Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_PermissionChanges > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/activity/sqljobgroup33.webp)

The default analysis tasks are:

- SQLServer Permission Changes – Creates the SA_SQLServer_PermissionChanges_Details table accessible
  under the job’s Results node
- Permission Changes Instance Summary – Creates the SA_SQLServer_PermissionChanges_InstanceSummary
  table accessible under the job’s Results node. This analysis task summarizes permission change
  activity per instance.

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataActivity Job
produces the following pre-configured report.

| Report                     | Description                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission Change Activity | This report lists all permission change related SQL events, and summarizes them by instance. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by permission change activity - Table – Provides details on instances by permission change activity - Table – Provides details on event details |

# SQL_SensitiveDataActivity Job

The SQL_SensitiveDataActivity Job provides detailed information on DML (UPDATE, INSERT, DELETE,
TRUNCATE) used against objects containing sensitive data.

## Analysis Tasks for the SQL_SensitiveDataActivity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_SensitiveDataActivity > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/activity/sqljobgroup34.webp)

The default analysis tasks are:

- SDD Activity Details – Creates the SA_SQLServer_SensitiveDataActivity_Details table accessible
  under the job’s Results node
- SDD Activity Instance Summary – Creates the SA_SQLServer_SensitiveDataActivity_UserSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataActivity Job
produces the following pre-configured report.

| Report                  | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                                            |
| ----------------------- | --------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Activity | This report highlights events in databases containing sensitive data. | None         | This report is comprised of three elements: - Bar Chart – Displays top users by instance - Table – Provides details on user activity by instance - Table – Provides details on sensitive data activity details by database |

# SQL_UnusualActivity Job

The SQL_UnusualActivity Job identifies anomalies related to outlier user activity by database for
all targeted SQL and Azure SQL server instances.

## Analysis Tasks for the SQL_UnusualActivity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_UnusualActivity > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/activity/sqljobgroup35.webp)

The default analysis tasks are:

- Hourly User Activity Outlier Analysis – Creates the SA_SQLServer_UnusualHourlyUserActivity table
  accessible under the job’s Results node
- Hourly Unusual Activity Summary – Creates the SA_SQLServer_UnusualActivitySummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataActivity Job
produces the following pre-configured report.

| Report                         | Description                              | Default Tags | Report Elements                                                                                                                                                                                                    |
| ------------------------------ | ---------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unusual Hourly Activity Report | This report lists abnormal user activity | None         | This report is comprised of three elements: - Bar Chart – Displays abnormal user activity - Table – Provides details on number of outliers per instance - Table – Provides details on unusual hourly user activity |

# 0-SQL_InstanceDiscovery Job

The 0-SQL_InstanceDiscovery job enumerates and stores the list of SQL Server Instances running on
the targeted servers.

## Queries for the 0-SQL_InstanceDiscovery Job

The 0-SQL_InstanceDiscovery job uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/instancedisc_query.webp)

- SQL Server Instance Discovery — Collects the list of SQL Server Instances from target endpoints
  and populates the necessary instance connection information

## Analysis Tasks for the 0-SQL_InstanceDiscovery Job

Navigate to the **Databases** > **0.Collection** > **SQL** > **0-SQL_InstanceDiscovery** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/instancedisc_analysis.webp)

The default analysis tasks is:

- SQL Instances — Brings SA_SQL_Instances table to view

# 1-SQL_PermissionsScan

The 1-SQL_PermissionsScan Job collects SQL server instance and database level permissions from
targeted servers.

## Queries for the 1-SQL_PermissionsScan Job

The 1-SQL_PermissionsScan Job uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup6.webp)

- PermissionsScan – Collects permissions from targeted instances
  - (Optional) This query can be modified to target specific databases/instances. See the
    [Configure the PermissionsScan Query](#configure-the-permissionsscan-query) topic for
    additional information.

### Configure the PermissionsScan Query

The 1-SQL_PermissionScan Job is preconfigured to run using the default settings within the
Permissions Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 1-SQL_PermissionsScan > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the PermissionsScan query and click on Query
Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for this
job.

![Filters](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/azuresql/collection/1sqlpermissionscanfilterpage.webp)

**Step 4 –** To query for specific databases/instances, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. The default query target is All databases. The default query scope is Only select database
objects and click Retrieve. The Available database objects will be populated. Databases and
instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally, use the Add Custom Filter button to create and apply a custom filter.

**Step 5 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 1-SQL_PermissionsScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-SQL_PermissionScan Job

Navigate to the **Databases** > 0.Collection > SQL > 1-SQL_PermissionsScan > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup8.webp)

The default analysis tasks are:

- Remove Old AIC Resources — Removes AIC resources using the old path that did not include the
  schema
- AIC Import – Hosts — Imports SQL hosts to the AIC
- AIC Import – Instance Permissions Node — Imports a node for instance permissions for each instance
- AIC Import – Databases — Imports each database in the SQL instances
- AIC Import – Permissions — Imports SQL Permissions to the AIC
- AIC Import – Roles — Imports a Roles node into the AIC for SQL Server Roles
- AIC Import – Database Role Permissions — Imports role permissions at the database level
- AIC Import – Local SQL Groups — Imports SQL local groups to the AIC
- AIC Import – Instance Role Permissions — Imports permissions assigned to roles at the instance
  level

# 2-SQL_SensitiveDataScan Job

The 2-SQL_SensitiveDataScan Job discovers sensitive data in the database SQL server instances and
databases based on a pre-defined or user defined search criteria.

Special Dependency

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server
  - See the
    [Installation & Configuration Overview](/docs/accessanalyzer/11.6/installation/application/install.md)
    topic for installation information.
  - See the
    [Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/accessanalyzer/sensitivedatadiscovery/overview.md)
    topic for additional information.

Though the job is visible within the console, it requires an additional installer package before
data collection occurs.

## Queries for the 2-SQL_SensitiveDataScan Job

The SensitiveDataScan Job uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup9.webp)

- SensitiveDataScan – Collects Sensitive Data from targeting instances
  - (Optional) This query can be modified to target specific databases/instances. See the
    [Configure the SensitiveDataScan Query](#configure-the-sensitivedatascan-query) topic for
    additional information.

### Configure the SensitiveDataScan Query

The 2-SQL_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive
Data Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 2-SQL_SensitiveDataScan >
Configure node and select Queries.

**Step 2 –** In the Query Selection view, select the SensitiveDataScan query click on Query
Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for this
job.

![2sqlsensitivedatascanoptionspage](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/2sqlsensitivedatascanoptionspage.webp)

**Step 4 –** Select the desired scan options. Navigate to the
[SQL: Options](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page for additional information.

**NOTE:** The Sensitive Data Scan Settings are pre-configured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.

![Criteria Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/2sqlsensitivedatascanquerycriteriapage.webp)

**Step 5 –** To modify criteria, navigate to the
[SQL: Criteria](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. By default, the following System Criteria have been selected:

- Credit Cards
- Tax Forms
- US SSN
- User ID
- Password

  Add or remove criteria if needed. See the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  topic for additional information.

![Filter Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/2sqlsensitivedatascanfilterpage.webp)

**Step 6 –** To query for specific database/instance, navigate to the
[SQL: Filter](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. The query is configured by default to target Only select database objects. Click Retrieve. The
Available database objects box will populate. Databases and instances can be added in the following
ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally use the Add Custom Filter button to create and apply a custom filter.

**Step 7 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 2-SQL_SensitsveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 2-SQL_SensitiveDataScan Job

Navigate to the **Databases** > 0.Collection > SQL > 2-SQL_SensitiveDataScan > Configure node and
select Analysis to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup13.webp)

The default analysis task is:

- SQL Server SDD Matches View — Brings the SQL Server SDD Matches View to the SA console
- SQL Server SDD Match Hits View — Brings the SQL Server SDD Match Hits View to the SA console
- AIC Import — Creates the SA_AIC_SddMatchesImport

# 3-SQL_ActivityScan Job

The 3-SQL_ActivityScan Job captures user activity from targeted SQL server instances and databases.

Special Dependency

- SQL Server Audit Specifications to be configured on the target databases
  - Audit destination must be a binary file
  - See the Microsoft
    [Create a Server Audit and Database Audit Specification](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/create-a-server-audit-and-database-audit-specification)
    article for additional information.

## Queries for the 3-SQL_ActivityScan Job

The ActivityScan Job uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup14.webp)

- ActivityScan – Collects activity from targeted instances
  - (Optional) This query can be modified to target specific databases/instances. See the
    [Configure the ActivityScan Query](#configure-the-activityscan-query) topic for additional
    information.

### Configure the ActivityScan Query

The 3-SQL_ActivityScan Job is preconfigured to run using the default settings within the Server
Audits Events Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 3-SQL_ActivityScan > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, click on Query Properties. The Query Properties window
appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

![Options Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/3sqlactivityscanoptionspage.webp)

**Step 4 –** To modify scan options, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. Select the desired scan options. The query is preconfigured with the following default
settings:

- Collect only events since last scan – Collects activity recorded since the previous scan
- Number of days you want to keep events in the database – The default setting is 15 days
- Collect audits by name – Finds available audits in the database
- Collect audits by path – Collects audits by a specified path

![Filter Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/3sqlactivityscanfilterpage.webp)

**Step 5 –** To scope the query for specific database/instance, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. The query is configured by default to target Only select database objects. Click Retrieve. The
Available database objects will be populated. Databases and instances can be added in the following
ways:

Select the desired database objects and click Add.

Use the Import CSV button to import a list from a CSV file.

Optionally use the Add Custom Filter button to create and apply a custom filter.

**Step 6 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 3-SQL_ActivityScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 3-SQL_ActivityScan Job

Navigate to the **Databases** > 0.Collection > SQL > 3-SQL_ActivityScan > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup17.webp)

The default analysis tasks are:

- AIC Import – Activity– Creates the SA_AIC_ActivityEventsImport table accessible under the job’s
  Results node.

# 4-SQL_ServerLogons Job

The 4-SQL_ServerLogons Job captures SQL server logon activity, which includes successful or failed
logons.

## Queries for the 4-SQL_ServerLogons Job

The AppnLogSQL Query uses the SMARTLog Data Collector and has been preconfigured to process the
Windows Event Log Type.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![sqljobgroup18](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup18.webp)

- AppnLogSQL – Uses SmartLog Data Collector to gather logon events
  - See the
    [SMARTLog Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/overview.md)
    topic for additional information

# 5-SQL_ServerSettings Job

The 5-SQL_ServerSettings Job collects SQL server instance and database configuration settings for
evaluation against recommended best practices.

## Queries for the 5-SQL_ServerSettings Job

The 5-SQL_ServerSettings Job uses the SQL Data Collector for the following queries:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup19.webp)

- Configuration – Collects configuration properties
  - (Optional) This query can be modified to target specific databases/instances. See the
    [Configure the Configuration Query](#configure-the-configuration-query) topic for additional
    information.
- Server – Collects server properties
  - (Optional) This query can be modified to target specific databases/instances. See the
    [Configure the Server Query](#configure-the-server-query) topic for additional information.
- Connections – Returns connections to the instance
- Asymmetric Key Size – Returns the asymmetric key size
- Symmetric Key Encryption – Returns the symmetric key encryptions being used by the Instance
- CLR Assemblies – Returns CLR Assemblies being used by the Instance
- Instance Details – Provides details on Instance configuration
- Database Details – Returns details for each database in the scanned Instance
- Database Sizing – Returns details on database size
- Linked Servers – Collects information on SQL Linked Servers
- Table Row Count – Returns the number of rows for each table in SQL

### Configure the Configuration Query

The 5-SQL_ServerSettings Job’s Configuration Query is configured to run with the default settings
with the Configuration Properties category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 5-SQL_ServerSettings > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the Configuration Query and click on Query
Properties. The Query Properties window will appear.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard will
open.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

![Instance Filters](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/5sqlserversettingsfilterpage.webp)

**Step 4 –** To scope the query for specific database/instance, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. The query is configured by default to target All instances. Change the query scope to Only
select instances, and click Retrieve. The Available server audits will be populated. Databases and
instances can be added in the following ways:

- Select the desired instances and click Add.
- Use the Import CSV button to import a list from a CSV file.
- (Optional) Use the Add Custom Filter button to create and apply a custom filter.

**Step 5 –** On the Summary page, click Finish to save any setting modifications or click Cancel if
no changes were made. Then click OK to close the Query Properties window.

The 5-SQL_ServerSettings Job is now ready to run with the customized settings.

### Configure the Server Query

The 5-SQL_ServerSettingsJob > Server Query has been preconfigured to run with the default settings
with the category of Server Properties. However, the query can be scoped to target specific
databases/instances on the Filters page of the SQL Data Collector Wizard. Follow these steps to
modify the query configuration.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 5-SQL_ServerSettings > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the Server query click on Query Properties. The
Query Properties window will appear.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard will
open.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

![Filter Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/5sqlserversettingsfilterpage.webp)

**Step 4 –** To scope the query for specific database/instance, navigate to the
[SQL Data Collector](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page. The query is configured by default to target All instances. Change the query scope to Only
select instances, and click Retrieve. The Available server audits will be populated. Databases and
instances can be added in the following ways:

- Select the desired instances and click Add.
- Use the Import CSV button to import a list from a CSV file.
- Optionally use the Add Custom Filter button to create and apply a custom filter.

  Remember, it is necessary for the
  [0-SQL_InstanceDiscovery Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  to run before attempting to scope this query.

**Step 5 –** On the Summary page, click Finish to save any setting modifications or click Cancel if
no changes were made. Then click OK to close the Query Properties window.

The 5-SQL_ServerSettings Job is now ready to run with the customized settings.

# 0.Collection > SQL Job Group

The 0.Collection Job Group is designed to collect high level summary information form targeted
Microsoft SQL Servers. This information is used by other jobs in the SQL solution set for further
analysis and for producing reports.

![0.Collection Job Group - SQL](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/collection/sqljobgroup1.webp)

The jobs in the 0.Collection Job Group are:

- [0-SQL_InstanceDiscovery Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to enumerate and store the list of SQL Server Instances running on the
  targeted servers
- [1-SQL_PermissionsScan](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to collect SQL Server instance and database level permissions from all
  targeted servers
- [2-SQL_SensitiveDataScan Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to discover sensitive data in the database SQL Server instances and
  databases based on a pre-defined or user-defined search criteria
- [3-SQL_ActivityScan Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to capture user activity from all targeted SQL server instances and
  databases
- [4-SQL_ServerLogons Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to capture all types of SQL server logon activity including successful or
  failed logons
- [5-SQL_ServerSettings Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to collect SQL server instance and database configuration settings so that
  they can be evaluated against recommended best practices

# 4.Configuration Job Group

The 4.Configuration Job Group provides information on potential vulnerabilities related to SQL and
Azure SQL server configuration settings.

![configurationjobgroup](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/configurationjobgroup.webp)

The jobs in the 4.Configuration Job Group are:

- [SQL_Authentication Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job identifies authentication settings on targeted SQL and Azure SQL servers that allow SQL
  server authentication in addition to Windows authentication. Microsoft recommends that the SQL and
  Azure SQL servers should be generally configured to utilize Windows authentication versus SQL
  authentication.
- [SQL_BestPractices Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to analyze SQL and Azure SQL server configuration settings and report on
  any findings that deviate from recommended Microsoft Best Practices when it comes to creating,
  maintaining, and securing SQL servers
- [SQL_CMDShell Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to report if the `xp_cmdshell `stored procedure is enabled or disabled.
  Since `xp_cmdshell` allows a user to execute operating system commands when connected to the SQL
  or Azure SQL server, it can be used to launch malicious attacks. Microsoft recommends that the
  `xp_cmdshell` stored procedure be disabled.
- [SQL_DatabaseSizing Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – Provides details on database file sizes and overall database sizes
- [SQL_LinkedServers Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – Identifies Linked Servers or remote database servers on which the identified SQL and Azure
  SQL server can execute commands. Some of the common remote OLE DB providers include IBM DB2,
  Oracle, Access and Excel. Typically, linked servers are used to handle distributed queries in SQL
  and Azure SQL server.

# SQL_Authentication Job

The SQL_Authentication Job identifies authentication settings on targeted SQL and Azure SQL servers
that allow SQL server authentication in addition to Windows authentication. Microsoft recommends
that SQL and Azure SQL servers should be generally configured to utilize Windows authentication
versus SQL server authentication.

## Analysis Tasks for the SQL_Authentication Job

Navigate to the **Databases** > SQL > 4.Configuration > SQL_Authentication > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/configuration/sqljobgroup43.webp)

The default analysis tasks are:

- Determine authentication configurations – Creates the SA_SQLServer_Authentication_Details table
  accessible under the job’s Results node
- Authentication Summary – Creates the SA_SQLServer_Authentication_Summary table accessible under
  the job’s Results node. Provides a summary of targeted servers with SQL authentication enabled.

In addition to the tables and views created by the analysis task, the SQL_Authentication Job
produces the following pre-configured report.

| Report              | Description                                                                                                                                                                                                                                                                                                                                                                 | Default Tags | Report Elements                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL  Authentication | This report identifies authentication settings on the targeted servers, and highlights those with SQL Authentication enabled. Additionally, the number of SQL logins on a given instance, and whether or not the 'sa' login exists, are indicated. Best practices recommend that SQL instances be integrated login only, and that the 'sa' principal be renamed or removed. | None         | This report is comprised of two elements: - Pie Chart – Displays instances with integrated security only - Table – Displays integrated security details by instance |

# SQL_BestPractices Job

The SQL_BestPractices Job analyzes SQL and Azure SQL server configuration settings and reports any
findings that deviate from recommended Microsoft Best Practices when it comes to creating,
maintaining, and securing SQL and Azure SQL servers.

### Analysis Tasks for the SQL_BestPractices Job

Navigate to the **Databases** > SQL > 4.Configuration > SQL_BestPractices > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/configuration/sqljobgroup44.webp)

The default analysis tasks are:

- SQL Best Practices – Creates the SA_SQL_BestPractices table accessible under the job’s Results
  node
- SQL Best Practices Instance Summary – Creates the SA_SQL_BestPractices_Summary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_BestPractices Job
produces the following pre-configured report:

| Report                    | Description                                                                             | Default Tags | Report Elements                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL Server Best Practices | Evaluates settings on SQL and Azure SQL Instances and Databases for SQL Best Practices. | None         | This report is comprised of three elements: - Pie Chart – Displays best practice adherence - Table– Displays configuration settings - Table – Displays instance summary |

# SQL_CMDShell Job

The SQL_CMDShell Job reports on whether the `xp_cmdshell` stored procedure is enabled or disabled.
Since `xp_cmdshell` allows users to execute operating system commands when connected to the SQL or
the Azure SQL server, it can be used to launch malicious attacks. Microsoft recommends that the
`xp_cmdshell` stored procedure be disabled.

## Analysis Tasks for the SQL_CMDShell Job

Navigate to the **Databases** > SQL > 4.Configuration > SQL_CMDShell > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/configuration/sqljobgroup45.webp)

The default analysis task is:

- XP CMD Shell – Creates the SA_SQL_CMDShell_Status table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL_CMDShell Job produces the
following pre-configured report.

| Report               | Description                                                                                                                                                                                                                       | Default Tags | Report Elements                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| xp_cmdshell Settings | Because malicious users sometimes attempt to elevate their privileges by using xp_cmdshell, xp_cmdshell is disabled by default. Use sp_configure or Policy Based Management to disable it on any instances which have it enabled. | None         | This report is comprised of two elements: - Pie Chart – Displays instance summary - Table– Displays configuration details |

# SQL_DatabaseSizing Job

The SQL_DatabaseSizing Job provides details on database file sizes and overall database sizes.

## Analysis Tasks for the SQL_DatabaseSizing Job

Navigate to the **Databases** > Jobs > SQL > 4.Configuration > SQL_DatabaseSizing Job >Configure
node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/configuration/analysistask.webp)

The default analysis tasks are:

- Database Size Details – Provides details on database files and sizes
- Database Size Summary – Summarizes database file sizes by database

In addition to the tables created by the analysis tasks, the **SQL_DatabaseSizing Job** produces the
following preconfigured report:

| Report          | Description                                                | Default Tags | Report Elements                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report provides details on database files and sizing. | None         | This report is comprised of three elements: - Bar Chart – Provides information on the top five databases by size (MB) - Bar Chart – Provides information on database sizes by host (GB) - Table – Provides details on database sizing |

# SQL_LinkedServers Job

The SQL_LinkedServers Job identifies Linked Servers or remote database servers on which the
identified SQL and Azure SQL servers can execute commands. Some of the common remote
OLE DB providers include IBM DB2, Oracle, Access and Excel. Typically, linked servers are used to
handle distributed queries in SQL and Azure SQL server .

## Analysis Tasks for the SQL_LinkedServers Job

Navigate to the **Databases** > Jobs > SQL > 4.Configuration > SQL_LinkedServers Job >Configure node
and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
pre-configured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/instantjobs/analysistasks.webp)

The default analysis tasks are:

- Linked Server Details – Provides details on SQL Linked Servers
- Linked Server Summary – Summarizes Linked Servers by instance

In addition to the tables created by the analysis tasks, the **SQL_DatabaseSizing Job** produces the
following preconfigured report:

| Report         | Description                                                                                           | Default Tags | Report Elements                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linked Servers | This report highlights Linked Servers where the listed SQL Server is able to execute remote commands. | None         | This report is comprised of three elements: - Bar Chart – Provides information on top five linked servers by instance - Table – Provides details on linked servers by instance - Table – Provides details on linked servers |

# SQL Job Group

The SQL Job Group reports on SQL Server, AzureSQL, or both depending on which collection jobs were
run. The SQL Job Group is a comprehensive set of pre-configured audit jobs and reports that provide
information on users and roles, activity, permissions, configuration, sensitive data, and overall
security assessment.

Supported Platforms

- Azure SQL

- SQL Server 2022
- SQL Server 2019
- SQL Server 2017
- SQL Server 2016

Requirements, Permissions, and Ports

See the
[Target SQL Server Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
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

The SQL Job Group within the Jobs tree, as part of the Database Solution: Jobs > Database > SQL.

The Database Solution license includes all supported database platforms supported by Enterprise
Auditor. Additionally, the Sensitive Data Discovery Add-On enables the solution to search database
content for sensitive data.

![SQL Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/sqljobgroup.webp)

The SQL Job Group includes:

- Databases > 0.Collection > SQL >
  [0.Collection > SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to collect high level summary information from Microsoft SQL servers.
  This information is used by other jobs in the SQL solution set for further analysis and for
  producing respective reports.
- Databases > 0.Collection > AzureSQL >
  [0.Collection > Azure SQL Job Group](/docs/accessanalyzer/11.6/accessanalyzer/solutions/databases/azuresql/collection/overview.md)
  — This job group is designed to collect high level summary information from targeted Azure SQL
  Instances. This information is used by other jobs in the Azure SQL solution set to provide further
  analysis and for producing respective reports.
- [1.Users and Roles Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)–
  This job group is designed to provide insight into user security, roles, and object permissions to
  all the SQL server objects
- [2.Activity Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to provide insight into use login activity, object permission
  changes, any unusual database activity, SQL activity against sensitive data, SQL activity against
  selective or all database objects
- [3.Permissions Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to provide insight into all types of permissions at the instance,
  database, and object level across all the targeted SQL servers
- [4.Configuration Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to provide insight into potential vulnerabilities related to SQL
  server configuration settings
- [5.Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)–
  This job group is designed to provide insight into where sensitive data exists and who has access
  to it across all the targeted SQL server databases
  - Requires the Sensitive Data Discovery Add-On.
- [SQL_SecurityAssessment Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to summarize and categorize the security findings into HIGH, MEDIUM, LOW,
  and NO FINDING categories based on their severity.

# 3.Permissions Job Group

The 3.Permissions Job Group provides insight into permissions at the instance, database, and object
level across all targeted SQL and Azure SQL servers.

![sqljobgroup36](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/permissions/sqljobgroup36.webp)

The jobs in the 3.Permissions Job Group are:

- [SQL_ControlServer Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job will provide information on control server permissions. Users with control server
  permissions allow users to command full control of a SQL and Azure SQL server instances
- [SQL_DirectPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job will provide information about the permissions granted to users at the schema,
  database, and server levels
- [SQL_DomainUserPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job will provide insight into Microsoft Active Directory domain users’ access to SQL and
  Azure SQL server objects both at the instance and database level
- [SQL_PublicPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job analyzes all the permissions granted at the server level and reports on the effective
  server level permissions across all the audited SQL and Azure SQL server instances
- [SQL_ServerPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job provides the list of SQL and Azure SQL server logins that have the PUBLIC roles
  assigned. In addition, it also provides the list of permissions assigned to the PUBLIC role as
  well

# SQL_ControlServer Job

The SQL_ControlServer Job provides information on control server permissions. Users with control
server permissions can command full control of a SQL and Azure SQL server instance.

## Analysis Tasks for the SQL_ControlServer Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL_ControlServer > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/permissions/sqljobgroup37.webp)

The default analysis tasks are:

- Determine Control Server Rights – Creates the SA_SQL_ControlServer_Details table accessible under
  the job’s Results node
- Control Server Domain Users – Creates the SA_SQLServer_ControlServer_DomainUsers table accessible
  under the job’s Results node
- Control Server Instance Summary – Creates the SA_SQLServer_ControlServer_InstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL_ControlServer Job produces
the following pre-configured report.

| Report                     | Description                                                                                            | Default Tags | Report Elements                                                                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Control Server Permissions | This report highlights control server permissions, and summarizes them by instance and by domain user. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by control server permissions - Table – Provides details on instances by control server permission count - Table – Provides details on control server permissions |

# SQL_DirectPermissions Job

The SQL_DirectPermissions Job provides information on permissions granted to users at the schema,
database, and server level.

## Analysis Tasks for the SQL_DirectPermissions Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL_DirectPermissions > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/permissions/sqljobgroup38.webp)

The default analysis tasks are:

- Determine database permissions – Creates the SA_SQLServer_DirectPermissions_DatabaseDetails table
  accessible under the job’s Results node
- Determine schema permissions – Creates the SA_SQLServer_DirectPermissions_SchemaDetails table
  accessible under the job’s Results node
- Determine server permissions – Creates the SA_SQLServer_DirectPermissions_ServerDetails table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_DirectPermissions Job
produces the following pre-configured reports.

| Report               | Description                                                               | Default Tags | Report Elements                                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Database Permissions | This report highlights SQL permissions granted at the database level.     | None         | This report is comprised of three elements: - Bar Chart – Displays database permission summary - Table – Provides details on database permission summary - Table – Provides details on database permission details |
| Schema Permissions   | This report lists all SQL permissions granted at the schema level.        | None         | This report is comprised of three elements: - Bar Chart – Displays top schema by permission count - Table – Provides details on permission summary - Table – Provides details on schema permission details         |
| Server Permissions   | This report highlights SQL permissions being granted at the server level. | None         | This report is comprised of three elements: - Bar Chart – Displays server permission summary - Table – Provides details on server permission summary - Table – Provides details on server permission details       |

# SQL_DomainUserPermissions Job

The SQL_DomainUserPermissions Job provides insight into Microsoft Active Directory domain users’
access to SQL and Azure SQL server objects at both the instance and database level.

## Analysis Tasks for the SQL_DomainUserPermissions Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL_DomainUserPermissions > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/permissions/sqljobgroup39.webp)

The default analysis tasks are:

- Domain User Permissions Details – Creates the SA_SQLServer_DomainUserPermissions_Details table
  accessible under the job’s Results node
- Domain User Permissions Summary – Creates the SA_SQLServer_DomainUserPermissions_Summary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_DomainUserPermissions Job
produces the following pre-configured report.

| Report                 | Description                                                                                         | Default Tags | Report Elements                                                                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain User SQL Access | This report looks at SQL server permissions granted to domain users across the audited environment. | None         | This report is comprised of three elements: - Bar Chart – Displays top users by instance count - Table – Provides details on access sprawl - Table – Provides details on permission details |

# SQL_PublicPermissions Job

The SQL_PublicPermissions Job provides the list of SQL server logins that have the PUBLIC roles
assigned. In addition, it also provides the list of permissions assigned to the PUBLIC role as well.

## Analysis Tasks for the SQL_PublicPermissions Job

Navigate to the **Databases** > SQL > 5.Permissions > SQL_PublicPermissions > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/permissions/sqljobgroup40.webp)

The default analysis tasks are:

- Calculate public permissions – Creates the SA_SQLServer_PublicPermissions_Details table accessible
  under the job’s Results node
- Public Permissions Summary – Creates the SA_SQLServer_PublicPermissions_DatabaseSummary table
  accessible under the job’s Results node
- Public Permissions Summary – Highlights permissions that have been granted to the public role on
  objects that are not-default SQL or Azure SQL server objects
- Public Permissions Instance Summary (Non-Default) – Summarizes non-default SQL and Azure SQL
  server public permissions by instance

In addition to the tables and views created by the analysis task, the SQL_PublicPermissions Job
produces the following pre-configured report.

| Report             | Description                                                                | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public Permissions | This report determines highlights objects with public permissions applied. | None         | This report is comprised of three elements: - Bar Chart – Displays top databases by public permission count - Table – Provides details on databases by public permission count - Table – Provides details on public permission details |

# SQL_ServerPermissions Job

The SQL_ServerPermissions Job analyzes permissions granted at the server level and reports on
effective server level permissions across all audited SQL and Azure SQL server instances.

## Analysis Tasks for the SQL_ServerPermissions Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL_ServerPermissions > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/permissions/sqljobgroup41.webp)

The default analysis tasks are:

- Server Permissions – Creates the SA_SQLServer_ServerPermission_Details table accessible under the
  job’s Results node
- System Permissions Instance Summary –Creates the SA_SQLServer_ServerPermission_InstanceSummary
  table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL_ServerPermissions Job
produces the following pre-configured report.

| Report             | Description                                                                | Default Tags | Report Elements                                                                                                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Permissions | This report highlights server permissions and summarizes them by instance. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by server permissions - Table – Provides details on instances by server permission count - Table – Provides details on server permissions |

# Recommended Configurations

The following sections describe the recommended configurations for the SQL Solution 0.Collection Job
Group and the Azure SQL 0.Collection Job Group.

**NOTE:** The SQL Solution Jobs report on both the SQL and Azure SQL Collection Jobs.

## SQL Solution 0.Collection Job Group

The SQL Solution has been configured to inherit down from the SQL > Settings node. However, it is
best practice to assign the host list and the Connection Profile at the data collection level, the
0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

Dependencies

- .Active Directory Inventory Job Group run successfully
- For Activity Auditing – SQL Server Audit Specifications to be configured on the target databases
  - Audit destination must be a binary file
  - See the Microsoft
    [Create a Server Audit and Database Audit Specification](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/create-a-server-audit-and-database-audit-specification)
    article for additional information.
- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  Enterprise Auditor Console server
- For the SQL_SecurityAssessment Job – One or more of the following jobs or job groups must be run
  to produce results:
  - [0.Collection > SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  - [1.Users and Roles Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  - [3.Permissions Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  - [5.Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  - [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/privilegedaccounts/overview.md)
  - [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/privilegedaccounts/overview.md)

Some of the 0.Collection Job Group queries can be scoped to target specific databases/instances.
However, it is necessary for the SA_SQL_Instances table to be populated before attempting to scope
the queries. Therefore, the
[0-SQL_InstanceDiscovery Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
must be manually executed before attempting to scope the 0.Collection Job Group queries.

Targeted Host(s)

The 0.Collection Job Group has been set to run against the following default dynamic host list:

- All Microsoft SQL Server Hosts

  **NOTE:** Default dynamic host lists are populated from hosts in the Host Master Table which
  meet the host inventory criteria for the list. Ensure the appropriate host list(s) have been
  populated through host inventory results.

Connection Profile

The SQL Data Collector requires a specific set of permissions. See the Permissions section for
necessary permissions. The account used can be either an Active Directory account or a SQL account.
Once the account has been provisioned, create a custom Connection Profile containing the credentials
for the targeted environment. See the
[SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
topic for additional information.

The Connection Profile should be assigned under the SQL > 0.Collection > Settings > Connection node.
It is set to Use the Default Profile, as configured at the global settings level. However, since
this may not be the Connection Profile with the necessary permissions for the assigned hosts, click
the radio button for the Select one of the following user defined profiles option and select the
appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

One of the most important decisions to make is how frequently to collect this data. The SQL Job
Group can be scheduled to run as desired depending on the types of auditing being conducted and the
scope of the target environment. The general recommendation is to schedule the solution to run
daily.

Run Order

The 0.Collection Jobs must be run first and in order. The other SQL Solution sub-job groups can be
run in any order, together or individually, after running the 0.Collection Job Group.

**_RECOMMENDED:_** Run the solution at the top level.

Workflow

Prerequisites:

- Successful execution of the .Active Directory Inventory Job Group
- For the 3-SQL_ActivityScan, configure SQL Server Audit and SQL Server Audit Specifications on
  target SQL Server Databases. Audit destination for the configured server or database audit must be
  a binary file.
- The 5-SQL_ServerSettings Job contains the Orphaned Users query which returns users that are
  orphaned for each database. The query uses the sp_Change_users_login procedure which requires the
  db_owner fixed database to be assigned to the Enterprise Auditor User. See the
  [sp_change_users_login (Transact-SQL)](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-change-users-login-transact-sql?view=sql-server-ver15)
  Microsoft article for additional information.

1. (Optional) Configure the queries for the jobs in the 0.Collection Job Group
2. Schedule the 0.Collection Job Group to run daily or as desired

   **NOTE:** Running the 0.Collection Job Group is a prerequisite for the other job groups in the
   SQL solution

3. Review the reports generated by the 0.Collection Job Group’s jobs

## Azure SQL 0.Collection Job Group

The Azure SQL Solution has been configured to inherit down from the Azure SQL > Settings node.
However, it is best practice to assign the host list and the Connection Profile at the data
collection level, the 0.Collection Job Group. Once these are assigned to the job group, it can be
run directly or scheduled.

Dependencies

- Full registration within Microsoft's Azure portal:

  - Creation of a Enterprise Auditor Azure SQL Role in the Access control (IAM) section
  - Successful registration of the Enterprise Auditor app
  - Successful creation of an Application (client) ID

- Successful configuration of an AzureSQL-specific connection profile
- Creation of an Azure Tenancy host list (ex. COMPANY.onmicrosoft.com) and Azure Active Directory
  user credential(s)

  **_RECOMMENDED:_** To avoid functional issues with Enterprise Auditor, create multiple
  connection profiles to accommodate multiple credentials.

- Define and validate connection information in the Connection screen
- [0-AzureSQL_InstanceDiscovery Job](/docs/accessanalyzer/11.6/accessanalyzer/solutions/databases/azuresql/collection/0-azuresql_instancediscovery.md)
  run successfully

Targeted Host(s)

The 0.Collection Job Group has been set to run against the following default dynamic host list:

- All targeted Azure SQL Tenants

Connection Profile

The SQL Data Collector requires a specific set of permissions. See the Permissions section for
necessary permissions. The account used can be either an Active Directory account with database
login enabled or a SQL account. Once the account has been provisioned, create a custom Connection
Profile containing the credentials for the targeted environment. See the
[SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
topic for additional information.

The Connection Profile should be assigned under the **Databases** > 0.Collection > Azure SQL >
Settings > Connection node. It is set to Use the Default Profile, as configured at the global
settings level. However, since this may not be the Connection Profile with the necessary permissions
for the assigned hosts, click the radio button for the Select one of the following user defined
profiles option and select the appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

One of the most important decisions to make is how frequently to collect this data. The Azure SQL
Job Group can be scheduled to run as desired depending on the types of auditing being conducted and
the scope of the target environment. The general recommendation is to schedule the solution to run
daily.

Run Order

The 0.Collection Jobs must be run first and in order. The other Azure SQL Solution sub-job groups
can be run in any order, together or individually, after running the 0.Collection Job Group.

**_RECOMMENDED:_** Run the solution at the top level.

# 5.Sensitive Data Job Group

The 5.Sensitive Data Job Group provides information on where sensitive data exists, and who has
access to that sensitive data, across all targeted SQL and Azure SQL server databases.

Special Dependency for Data Collection

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

![5.Sensitive Data Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/sensitivedata/sqljobgroup46.webp)

The jobs in the 5.Sensitive Data Job Group are:

- [SQL_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide information on all the sensitive data that was discovered in the
  targeted SQL or Azure SQL servers based on the selected scan criteria
- [SQL_SensitiveDataPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide all types of permissions on database objects containing
  sensitive data across all the targeted SQL or Azure SQL servers

# SQL_SensitiveData Job

The SQL_SensitiveData Job designed to provide information on all the sensitive data that was
discovered in the targeted SQL or Azure SQL servers based on the selected scan criteria.

## Analysis Tasks for the SQL_SensitiveData Job

Navigate to the **Databases** > SQL > 5.Sensitve Data > SQL_SensitiveData > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/sensitivedata/sqljobgroup47.webp)

The default analysis tasks are:

- Determine sensitive data details – Creates the SA_SQLServer_SensitiveData_Details table accessible
  under the job’s Results node
- Database summary – Creates the SA_SQLServer_SensitiveData_DatabaseSummary table accessible under
  the job’s Results node
- Enterprise summary – Creates the SA_SQLServer_SensitiveData_EnterpriseSummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveData Job
produces the following pre-configured reports.

| Report                  | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. | None         | This report is comprised of two elements: - Pie Chart – Displays exceptions by match count - Table – Provides details on exception details                                                                               |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | None         | This report is comprised of three elements: - Bar Chart – Displays top databases by sensitive data hits - Table – Provides details on databases with sensitive data - Table – Provides details on sensitive data details |

# SQL_SensitiveDataPermissions Job

The SQL_SensitiveDataPermissions Job is designed to provide all types of permissions on database
objects containing sensitive data across all the targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_SensitiveDataPermissions Job

Navigate to the **Databases** > SQL > 5.Sensitve Data > SQL_SensitiveDataPermissions > Configure
node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/sensitivedata/sqljobgroup48.webp)

The default analysis tasks are:

- List sensitive data permission details – Creates the SA_SQL_SensitiveDataPermissions_Details table
  accessible under the job’s Results node
- Sensitive Data Permissions Database Summary – Creates the
  SA_SQL_SensitiveDataPermissions_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataPermissions
Job produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                |
| -------------------------- | ----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None         | This report is comprised of three elements: - Bar Chart – Displays top databases by permission count - Table – Provides details on database permission summary - Table – Provides details on sensitive data permission details |

# SQL_SecurityAssessment Job

The SQL_SecurityAssessment Job summarizes and categorizes security findings into HIGH, MEDIUM, LOW,
and NO FINDINGS categories based on severity.

![SQL_SecurityAssessment](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/sqljobgroup49.webp)

Special Dependencies

One or more of the following jobs or job groups must be run to produce results:

- [0.Collection > SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
- [SQL_PasswordIssues Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
- [SQL_RoleMembers Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
- [SQL_PublicPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
- [5.Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
- [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/privilegedaccounts/overview.md)
- [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/privilegedaccounts/overview.md)

Only information collected from jobs/groups being run will produce findings.

### Analysis Task for the SQL_SecurityAssessment Job

Navigate to the SQL > SQL_SecurityAssesment > Configure node and select Analysis to view the
analysis task.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/sqljobgroup50.webp)

The default analysis task is:

- Summarize Audit Findings – Pulls data from tables created by the jobs and job groups throughout
  the SQL Solution to provide a summary of results in the SQL Security Assessment report

In addition to the tables and views created by the analysis task, the SQL_SecurityAssessment Job
produces the following pre-configured report.

| Report                  | Description                                                                | Default Tags        | Report Elements                                                                                                                                                                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SQL Security Assessment | This report summarizes security related results from the SQL solution set. | Security Assessment | This report is comprised of four elements: - Table – Provides details on the scope of the audit of the SQL Solution set - Pie Chart – Displays job findings by severity - Table – Displays findings by category and provides details on the SQL_SecurityAssessment job results |

# 1.Users and Roles Job Group

The 1.Users and Roles Job Group is designed to provide insight into user security, roles, and object
permissions to all SQL or Azure SQL server objects.

![Users and Roles Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup22.webp)

The jobs in the 1.Users and Roles Job Group are:

- [SQL_DatabasePrinciples Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to provide detailed information on database principals across all the
  targeted SQL or Azure SQL server instances
- [SQL_PasswordIssues Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to analyze the SQL or Azure SQL login passwords and evaluate if they
  comply with the prescribed password policies. In addition, it checks for weak passwords.
- [SQL_RoleMembers Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to analyze and provide information about all the role members in each o the
  SQL or Azure SQL server role groups, both at the instance and database level, across all the
  targeted SQL or Azure SQL servers
- [SQL_ServerPrincipals Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide information about all the server principals on the instances
  across all the targeted SQL or Azure SQL servers
- [SQL_SQLLogins Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job is designed to provide information on both successful and failed SQL or Azure SQL
  server logins across all the targeted SQL or Azure SQL servers
- [SQL_SysAdmins Job](/docs/accessanalyzer/11.6/solutions/databases/sql-server-analysis.md)
  – This job group is designed to provide insight into all the users who have SQL or Azure SQL
  server administration roles across all the targeted SQL or Azure SQL servers

# SQL_DatabasePrinciples Job

The SQL_DatabasePrinciplesJob provides detailed information on database principals across all
targeted SQL or Azure SQL server instances.

## Analysis Tasks for the SQL_DatabasePrinciples Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_DatabasePrinciples > Configure node
and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup23.webp)

The default analysis tasks are:

- Determine user details – Creates the SA_SQLServer_DatabasePrincipals_Details table accessible
  under the job’s Results node
- Summarize by instance – Creates the SA_SQLServer_DatabasePrincipals_InstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_DataPrinciples Job
produces the following pre-configured report.

| Report              | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Principles | This report determines all database principals on a per-instance basis. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by domain principal count - Table – Provides details on principal count by instance - Table – Provides details on principal details |

# SQL_PasswordIssues Job

The SQL_PasswordIssues Job analyzes SQL or Azure SQL login passwords and evaluates SQL login
password compliance against prescribed password policies. The SQL_PasswordIssues Job also checks for
weak passwords.

## Queries for the SQL_Passwords Job

The Collect Weak Passwords Job uses the PowerShell Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup24.webp)

- Collect Weak Passwords – Locate the dictionary file containing the weak passwords and import the
  passwords
  - See
    [PowerShell Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
    for additional information.

## Analysis Tasks for the SQL_PasswordIssues Job

Navigate to the Jobs > **Databases** > SQL > 3.Users and Roles > SQL_PasswordIssues > Configure node
and select Analysis to view the analysis tasks.

**CAUTION:** Most of these analysis tasks are preconfigured and should not be modified and or
deselected unless otherwise specified.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqlpasswordissuesanalysistasks.webp)

The default analysis tasks are:

- Analyze the Weak Passwords – Compare the weak passwords list against the collected password hashes
  - This analysis task has a configurable parameter:
    - @ShowPassword – Set to **0** by default. Set to **1** to enable the analysis task to bring
      back the plain-text password that was found
    - See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
      topic for additional information on modifying analysis parameters.
- Shared Passwords – Highlights SQL Server Logins with shared password hashes
- No Password – Inserts users that do not have a password set into the details table
- Summarize the Weak Password Results – Summarizes the data that has been collected by the weak
  passwords job

The following analysis task is deselected by default:

- Drop SQL Login Password Hashes – Nulls the SQL password hashes for the SQLServer_SqlLogins table.
  - Enable this analysis task only if needed. This analysis task nulls the password_hash column in
    the SA_SqlServer_SqlLogins table.

In addition to the tables and views created by the analysis tasks, the SQL_PasswordIssues Job
produces the following pre-configured reports.

| Report           | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                      |
| ---------------- | ----------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reused Passwords | This report highlights instances where a password hash is being reused. | None         | This report is comprised of one element: - Table – Provides details on reused password details                                                                                                                       |
| Weak Passwords   | This report highlights SQL logins that have a weak password.            | None         | This report is comprised of three elements: - Bar Chart – Displays weak passwords by instance - Table – Provides details on weak passwords by instance data - Table – Provides details on logins with weak passwords |

# SQL_RoleMembers Job

The SQL_RoleMembers Job analyzes and provides information on role members in each SQL server role
group, both at the instance and database level, across all targeted SQL servers.

## Analysis Tasks for the SQL_RoleMembers Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_RoleMembers > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup26.webp)

The default analysis tasks are:

- Role Member Details – Creates the SA_SQLServer_RoleMember_Details table accessible under the job’s
  Results node
- Effective SQL Role Membership – Creates the SA_SQLServer_EffectiveMembership table accessible
  under the job’s Results node. This analysis task determines the Effective Role Membership for SQL
  or Azure SQL Roles.
- Effective AD Role Membership – Creates the SA_SQLServer_EffectiveRoleMembership table accessible
  under the job’s Results node. This analysis task determines the AD Effective Role Membership for
  SQL or Azure SQL Roles and adds them to the SQL Effective Membership table.
- Role Membership Instances Summary – Creates the SA_SQL_RoleMember_Summary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_RoleMembers Job produces
the following pre-configured report.

| Report          | Description                                                                                | Default Tags | Report Elements                                                                                                                                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Role Membership | This report shows details on the roles and role membership in the audited SQL environment. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays top instances by server and database role membership - Table – Provides details on instances by server and database role membership - Table – Provides details on role membership details |

# SQL_ServerPrincipals Job

The SQL_ServerPrincipals Job provides information on server principals at the instance level across
targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_ServerPrincipals Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_ServerPrincipals > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup27.webp)

The default analysis tasks are:

- Determine user details – Creates the SA_SQL_ServerPrincipals_Details table accessible under the
  job’s Results node
- Summarize by Instance – Creates the SA_SQL_ServerPrincipals_InstanceSummary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_ServerPrincipals Job
produces the following pre-configured report.

| Report            | Description                                                                                                                                                                                                                                                         | Default Tags | Report Elements                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Server Principals | This report determines all server principals on a per-instance basis. Users are considered stale if they have not authenticated to the domain in 60 days. This threshold can be configured in the 3-AD_Exceptions job in the .Active Directory Inventory job group. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances - Table – Provides details on principal count by instance - Table – Provides details on principal details |

# SQL_SQLLogins Job

The SQL_SQLLogins Job provides information on successful and failed SQL server logins across all
targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_SQLLogins Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_SQLLogins > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup28.webp)

The default analysis tasks are:

- Calculate user login details – Creates the SA_SQL_UserLogin_Details table accessible under the
  job’s Results node
- User Logins Instance Summary – Creates the SA_SQLServer_UserLogins_Summary table accessible under
  the job's Results node

In addition to the tables and views created by the analysis task, the SQL_SQLLogins Job produces the
following pre-configured report.

| Report     | Description                               | Default Tags | Report Elements                                                                                                                                                                                    |
| ---------- | ----------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL Logins | This report lists user login information. | None         | This report is comprised of three elements: - Bar Chart– Displays number of logins by instance - Table – Provides details on login exceptions by instance - Table – Provides details on SQL logins |

# SQL_SysAdmins Job

The SQL_SysAdmins Job provides insight into users who have SQL server administration roles across
all targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_SysAdmins Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_SysAdmins > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup29.webp)

The default analysis tasks are:

- Calculate admin details – Creates the SA_SQL_SysAdmins_Details table accessible under the job’s
  Results node
- Summarize SysAdmins – Creates the SA_SQL_SysAdmins_InstanceSummary table accessible under the
  job’s Results node
- Sys Admin Domain Users - Creates the SA_SQL_SysAdmins_DomainUsers table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis task, the **SQL_SysAdmins Job** produces
the following pre-configured report.

| Report        | Description                                                     | Default Tags | Report Elements                                                                                                                                                                                                                                     |
| ------------- | --------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin Summary | This report highlights all principals with the 'sysadmin' role. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by admin count - Table – Provides top instances by admin count - Table – Provides details on admin details - Table – Provides details on domain user admin details |
