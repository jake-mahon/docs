---
title: databases db2 analysis
sidebar_label: db2 analysis
description: Solution guide for databases db2 analysis including implementation steps, configuration, and best practices.
---

# 3-Db2_Configuration Job

This job collects Db2 database configuration settings for use in the following analysis jobs and
respective reports.

## Queries for the 3-Db2_Configuration Job

The 3-Db2_Configuration Job uses the SQL Data Collector for queries.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/collection/configurationquery.webp)

The query is:

- Database Sizing — Returns the database size for the Db2 databases

## Recommended Configuration for the Configuration Query

Prior to running an Db2 0.Collection query, you must establish a connection to the appropriate IBM
Db2 server. As long as that connection is set up first, it is recommended that no configuration
changes be made to the 0.Collection jobs before they run.

It is also recommended that the connection only be established for the 1-Db2 SensitiveDataScan Job.
Once the connection is established, it applies to all jobs in the 0.Collection job group. It does
not apply to any other job groups. For additional information on establishing a database connection,
see
[1-Db2_SensitiveDataScan](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md).

# 2-Db2_PermissionScan Job

This job collects Db2 database level permissions from all the targeted Db2 database servers.

## Queries for the 2-Db2_PermissionScan Job

The 2-Db2_PermissionScan Job uses the SQL Data Collector for queries.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/permissionsscanquery.webp)

The query is:

- Db2 Permission — Scan Db2 databases for permissions

## Recommended Configuration for the Db2 Permission Query

Prior to running an Db2 0.Collection query, you must establish a connection to the appropriate IBM
Db2 server. As long as that connection is set up first, it is recommended that no configuration
changes be made to the 0.Collection jobs before they run.

It is also recommended that the connection only be established for the 1-Db2 SensitiveDataScan Job.
Once the connection is established, it applies to all jobs in the 0.Collection job group. It does
not apply to any other job groups. For additional information on establishing a database connection,
see
[1-Db2_SensitiveDataScan](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md).

## Analysis Tasks for the 2-Db2_PermissionScan Job

Navigate to the **Databases** > **0.Collection** > **Db2** > **2-Db2_PermissionScan** >
**Configure** node and select Analysis to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/permissionsscananalysis.webp)

The default analysis tasks are:

- Update Instance Name — Updates the instance name with a port if there are multiple instances in a
  single host
- AIC Permissions Import — Imports Db2 permissions to the AIC
- AIC Roles Import — Imports roles to the AIC for Db2

# 1-Db2_SensitiveDataScan

This job discovers sensitive data in the Db2 databases across all the targeted Db2 database servers
based on pre-defined or user-defined criteria.

## Queries for the 1-Db2_Sensitive Data Scan Job

The 1-Db2 Sensitive Data Job uses the SQL Data Collector for the following queries.

![sensitivedatascanquery](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/sensitivedatascanquery.webp)

The query is:

- Db2 SensitiveData – Scans Db2 databases for sensitive data

## Recommended Configuration for the SensitiveDataScan Query

It is only necessary to set up the connection for the 1-Db2 SensitiveDataScan Job. Once the
connection is established, custom configurations apply to all other job queries within the
0.Collection job group. Follow the steps to customize configurations.

**Step 1 –** Navigate to the Databases > 0.Collection > Db2 > 1-Db2_SensitiveDataScan > Configure
node and select Queries.

**Step 2 –** In the Query Selection view, select the SensitiveDataScan query click on Query
Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens
with Sensitive Data Collection category selected.

![Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/sensitivedatacategory.webp)

**Step 4 –** Click **Next**. The Sensitive Data Scan Settings view appears.

![Sensitive Data Scan Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/sensitivedatajoboptions.webp)

**Step 5 –** To modify sensitive data scan options, select the desired scan options. See the
[SQL: Options](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page for additional information.

**CAUTION:** The Sensitive Data Scan Settings are preconfigured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.

**Step 6 –** Click **Next**. The Select Criteria view appears.

![Select Criteria](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/sensitivedatacriteria.webp)

**Step 7 –** To modify criteria, click on **Use the following selected criteria:** and select your
choices. By default, the Sensitive Data Scan job is set to **Use Global Criteria**.

**NOTE:** For more information on adding or deleting criteria, navigate to the
[SQL: Criteria](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page or See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
topic for additional information.

**Step 8 –** Click **Next**. The Filters view appears.

![Filters](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/sensitivedatafilter.webp)

**Step 9 –** Click **Connections** to open the Manage Connections window.

**NOTE:** SQL databases must be added to the query before they can be scanned. Before you can add a
query, you must establish a connection to the database.

![Manage Connections](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/sensitivedataconnection.webp)

**Step 10 –** In the Manage Connections window, enter the following information:

- Instance Label — Custom name of the instance
- Database System — A drop down containing all available database servers. Select the Db2LUW server
  to configure Db2 queries.
- Service Name — Custom name of the service
- Host — Name or IP address of the host where the database is located. Host list is IBM DB2
- Port Number — Port number for the selected database
- Default Database — Default Database

**Step 11 –** After completing the above information fields, click **Test Connection** to validate
the new connection. Once validated, click **Create New Connection** to finalize the connection.

**Step 12 –** Navigate to the Filter page. Select Only select database objects or **All database
objects**. Collection queries are configured by default to target Only select database objects.

**NOTE:** For more information on filtering, see the
[SQL: Filter](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
page.

**Step 13 –** Click Retrieve. The Available database objects box will populate.

**Step 14 –** Add the Databases and instances to be audited. Databases and instances can be added in
the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally use the Add Custom Filter button to create and apply a custom filter.

Selected database objects to be audited will display.

**Step 15 –** Click **Next** and navigate to the Summary page, click Finish to save any setting
modifications or click Cancel if no changes were made. Then click OK to close the Query Properties
window.

The 1-Db2_SensitsveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-Db2_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **Db2** > **1-Db2_SensitiveDataScan** >
**Configure** node and select **Analysis** to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/azuresql/collection/sensitivedatascananalysis.webp)

The default analysis tasks are:

- Update Instance Name — Updates the instance name with a port if there are multiple instances in a
  single host
- Db2 Matches — Brings the Db2 SDD Matches View to the Enterprise Auditor console
- Db2 Match Hits — Brings the Db2 Match Hits View to the Enterprise Auditor console
- AIC Sensitive Data Import — Db2 Match Imports discovered Db2 sensitive data to the AIC

# 0.Collection Job Group

The Db2 Solution Set Collection Group collects high level summary information from targeted Db2
Database Servers. Other jobs in the Db2 Solution Set use this information for further analysis and
for producing respective reports.

![jobstree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 0.Collection Job Group are:

- [1-Db2_SensitiveDataScan](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  — Discovers sensitive data in the Db2 databases across all the targeted Db2 database servers based
  on pre-defined or user-defined search criteria
- [2-Db2_PermissionScan Job](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  — Collects Db2 database level permissions from all the targeted Db2 database servers
- [3-Db2_Configuration Job](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)—
  Collects Db2 database configuration settings for use in the following analysis jobs and respective
  reports

# Configuration > Db2_DatabaseSizing Job

The Db2_DatabaseSizing job provides details on overall database sizes.

![Configuration > Db2_DatabaseSizing Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/configurationjobstree.webp)

This job is located in the Configuration job group.

## Analysis Tasks for the Db2_DatabaseSizing Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Configuration** > **Db2_DatabaseSizing** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Db2_DatabaseSizing Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/databasesizinganalysis.webp)

The default analysis tasks are:

- Database Sizing – Returns size details for Db2 databases
- Database Summary – Summarizes Db2 database size by host

## Report for the Db2_DatabaseSizing Job

In addition to the tables and views created the analysis task, the Db2_DatabaseSizing job produces
the following preconfigured report.

| Report          | Description                                    | Default Tags | Report Elements                                                                                                                                                                           |
| --------------- | ---------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | Provides details on database tables and sizing | None         | This report is comprised of three elements: - Bar Chart – Displays top databases by size (MB) - Bar Chart – Displays top hosts by size (GB) - Table – Displays details on database sizing |

# Db2 Solution

The Enterprise Auditor Db2 Solution Set is a comprehensive set of pre-configured audit jobs and
reports that provide visibility into various aspects of Db2: Data Collection, Configuration, user
Permissions, and Sensitive Data.

Supported Platforms

- DB2LUW 11+

Requirements, Permissions, and Ports

See the
[Target Db2 Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Location

The Db2 Solution requires a special Enterprise Auditor license. It can be installed from the
Enterprise Auditor Instant Job Wizard. Once it has been installed in the Jobs tree, navigate to the
solution: Jobs > **Databases** > **Db2**.

The 0.Collection Job Group collects the data. The Db2 Solution Set Collection group is designed to
collect high level summary information from targeted Db2 Database Servers. This information is used
by other jobs in the Db2 Solution for further analysis and producing respective reports.

The Database Solution license includes all supported database platforms supported by Enterprise
Auditor. Additionally, the Sensitive Data Discovery Add-On enables the solution to search database
content for sensitive data.

## Db2 Job Group Overview

The Enterprise Auditor Db2 Solution is a comprehensive set of preconfigured audit jobs and reports
that provide visibility into various aspects of a Db2 Databases: Sensitive Data Discovery and
Objects Permissions.

![Db2 Overview](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overview.webp)

The following comprises the Db2 solution:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  — Collects high level summary information from targeted Db2 Servers. This information is used by
  other jobs in the Db2 Solution Set for further analysis and producing respective report.

- [Configuration > Db2_DatabaseSizing Job](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  — Provides insight into Db2 server configuration settings

- [Permissions Job Group](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)—
  Provides insight into all types of permissions at the database and object level across all the
  targeted Db2 database servers

- [Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  — Provides insight into where sensitive data exists and who has access to it across all the
  targeted Db2 databases

# Db2_DirectPermissions Job

This job provides insight into direct user and role permissions to all the database objects in the
targeted Db2 database servers.

## Analysis Tasks for the Db2_DirectPermissions Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Permissions** > **Db2_DirectPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Db2_DirectPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/permissions/directpermissionsanalysis.webp)

The default analysis tasks are:

- Direct Permissions – Highlights permissions directly assigned to Db2 objects
- Database Summary – Summarizes Db2 direct permissions by database

## Report for the Db2_DirectPermissions Job

In addition to the tables and views created the analysis task, the Db2_DirectPermissions job
produces the following preconfigured report.

| Report             | Description                                                                         | Default Tags | Report Elements                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Direct Permissions | This report shows details on the direct permissions in the audited Db2 environment. | None         | This report is comprised of three elements: - Bar Chart – Displays Database Summary - Table – Displays Database Summary - Table – Displays permissions details |

# Db2_EffectivePermissions Job

This job provides insight into effective user and role permissions to all the database objects in
the targeted Db2 database servers.

## Analysis Tasks for the Db2 \_EffectivePermissions Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Permissions** >
**Db2_EffectivePermissions** > **Configure** node and select **Analysis** to view the Analysis
Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Db2 _EffectivePermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/permissions/effectivepermissionsanalysis.webp)

The default analysis tasks are:

- Effective Permissions – Uses role membership to display effective permissions on Db2 objects
- Database Summary – Summarizes effective permissions by Db2 database

## Report for the Db2_Effective Job

In addition to the tables and views created the analysis task, the Db2_EffectivePermissions job
produces the following preconfigured report.

| Report                | Description                                                                        | Default Tags | Report Elements                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Effective Permissions | This report shows details on effective permissions in the audited Db2 environment. | None         | This report is comprised of three elements: - Bar Chart – Displays Database Summary - Table – Displays Database Summary - Table – Displays permissions details |

# Permissions Job Group

This job group provides insight into all types of permissions at the database and object level
across all the targeted Db2 database servers.

![Permissions Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/permissions/permissionsjobstree.webp)

The jobs in the Permission job group are:

- [Db2_DirectPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  – Provides insight into direct user and role permissions to all the database objects in the
  targeted Db2 database servers
- [Db2_EffectivePermissions Job](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  – Provides insight into effective user and role permissions to all the database objects in the
  targeted Db2 database servers

# Recommended Configuration for the Db2 Solution

The Db2 Solution has been configured to inherit down from the **Db2** > **Settings** node. However,
it is best practice to assign the host list and the Connection Profile at the data collection level,
the 0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

Dependencies

- Successful installation of the IBM Data Server Client. In addition, the following clients and
  drivers must be installed:

  - IBM Data Server Driver Package (DS Driver)
  - IBM Data Server Driver for JDBC and SQLJ (JCC Driver)
  - IBM Data Server Driver for ODBC and CLI (CLI Driver)
  - IBM Data Server Runtime Client
  - IBM Data Server Client
  - IBM Database Add-Ins for Visual Studio
  - IBM .NET Driver NuGet

  **NOTE:** All necessary clients and drivers can be found on IBM Support's
  [Download initial version 11.5 clients and drivers](https://www.ibm.com/support/pages/download-initial-version-115-clients-and-drivers)
  page.

- .Instance Discovery Job Group run successfully

Targeted Host(s)

The Db2 Job Group has been configured to inherit the host list assignment from the collection group
level.

The host list assignment should be assigned under the **Databases** > **0.Collection** > **Db2** >
**Settings** > **Host List Assignment** node. The Local host box is checked by default.

Connection Profile

The SQL Data Collector requires a specific set of permissions. See the Permissions section for
necessary permissions. The account used can be either an Active Directory account or a SQL account.
Once the account has been provisioned, create a custom Connection Profile containing the credentials
for the targeted environment. See the
[SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
topic for additional information.

The Connection Profile should be assigned under the Databases > 0.Collection > Db2 > Settings >
Connection node. It is set to Use the Default Profile, as configured at the global settings level.
However, since this may not be the Connection Profile with the necessary permissions for the
assigned hosts, click the radio button for the Select one of the following user defined profiles
option and select the appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

This job group can be scheduled to run as desired.

Run Order

The 0.Collection Jobs must be run first and in order. The other Db2 sub-job groups can be run in any
order, together or individually, after running the 0.Collection Job Group.

**_RECOMMENDED:_** Run the solution at the top level.

**Workflow**

1. Install IBM Db2 Server Client and required clients and drivers
2. Configure and assign host list and connection profile(s)
3. Define the connection information
4. Schedule the .Instance Discovery job group and 0.Collection job group to run as desired
5. Review the reports generated by the 0.Collection job group

# Db2_SensitiveData Job

This job provides information on all the sensitive data that was discovered in the targeted Db2
database servers based on the selection scan criteria.

## Analysis Tasks for the Db2 \_SensitiveData Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Sensitive Data** > **Db2_Sensitive Data** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Db2 _SensitiveData Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/collection/sensitivedataanalysis.webp)

The default analysis tasks are:

- Sensitive Data Details – Provides details on sensitive data in Db2 databases
- Database Summary – Summarizes Db2 sensitive data by database
- Enterprise Summary – Summarizes all discovered sensitive data by category

## Reports for the Db2_SensitiveData Job

In addition to the tables and views created the analysis task, the Db2_SensitiveData job produces
the following preconfigured reports.

| Report                  | Description                                                                  | Default Tags   | Report Elements                                                                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. | Sensitive Data | This report is comprised of two elements: - Bar Chart – Displays Exceptions by March Count - Table – Displays data details                                                                      |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | Sensitive Data | This report is comprised of three elements: - Bar Chart – Displays Top Databases by Sensitive Data Hits - Table – Displays Top Databases by Sensitive Data Hits - Table – Displays data details |

# Db2_SensitiveDataPermissions Job

This job provides all types of permissions on database objects containing sensitive data across all
the targeted Db2 database servers.

## Analysis Tasks for the Db2_SensitiveDataPermissions Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Sensitive Data** >
**Db2_SensitiveDataPermissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Db2_SensitiveDataPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/sensitivedata/sensitivedatapermissionsanalysis.webp)

The default analysis tasks are:

- Sensitive Data Permissions – Provides details on which users have permissions on discovered Db2
  Sensitive Data
- Sensitive Data Permissions Database Summary – Summarizes sensitive data permissions by database

## Report for the Db2_SensitiveDataPermissions Job

In addition to the tables and views created the analysis task, the Db2_SensitiveDataPermissions job
has the following preconfigured report.

| Report                     | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None         | This report is comprised of three elements: - Bar Chart – Displays Top Databases by Permission Count - Table – Displays Database Sensitive Data Permissions Summary - Table – Displays data details |

# Sensitive Data Job Group

This job group provides insight into where sensitive data exists and who has access to it across all
the targeted Db2 database servers.

![Sensitive Data Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/sensitivedata/sensitivedatajobstree.webp)

The jobs in the Sensitive Data job group are:

- [Db2_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  – Provides information on all the sensitive data that was discovered in the targeted Db2 database
  servers based on the selection scan criteria
- [Db2_SensitiveDataPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/db2-analysis.md)
  – Provides all types of permissions on database objects containing sensitive data across all the
  targeted Db2 database servers
