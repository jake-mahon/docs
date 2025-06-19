# Oracle_Activity Job

The Oracle_Activity Job is designed to provide insight into user activity in target Oracle database
servers and instances based on Oracle Unified Audit settings.

## Analysis Tasks for the Oracle_Activity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_Activity** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup26.webp)

The default analysis tasks are:

- Oracle Activity Details – Creates the SA_Oracle_Activity_Details table accessible under the job’s
  Results node
- Activity Database Summary – Summarizes all activity by database. Creates the
  SA_Oracle_Activity_UserDatabaseSummary table accessible under the job’s Results node.
- Activity Instance Summary – Summarizes Oracle activity by Instance. Creates the
  SA_Oracle_Activity_UserInstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created the analysis task, the Oracle_Activity Job produces the
following pre-configured report.

| Report                | Description                                                                        | Default Tags | Report Elements                                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User Activity Summary | This report lists all Oracle events, and summarizes them by database and instance. | None         | This report is comprised of three elements: - Bar Chart – Displays users with most events by instance - Table – Provides details on users with most events by instance - Table – Provides details on event details |

# Oracle_Logons Job

The Oracle_Logons Job is designed to provide insight into failed and successful Oracle database
login activity across all targeted Oracle database servers.

## Analysis Tasks for the Oracle_Logons Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_Logons** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup27.webp)

The default analysis tasks are:

- Oracle Logons – Reports on all Oracle logon events. Creates the SA_Oracle_Logons_Details table
  accessible under the job’s Results node.
- Logons Summary – Provides a summary of logons by Instance. Creates the SA_Oracle_Logons_Summary
  table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_Logons Job produces
the following pre-configured report.

| Report        | Description                                                             | Default Tags | Report Elements                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logon Summary | This report outlines successful and failed logins over the last 30 days | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by failed logons - Table – Provides details on logon summary - Table – Provides details on logon details |

# Oracle_PermissionChanges Job

The Oracle_PermissionsChanges Job is designed to provide detailed information about changes in
permissions across all database objects. Audited activities include granting, altering, and revoking
permissions on database objects.

## Analysis Tasks for the Oracle_PermissionsChanges Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_PermissionChanges** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup28.webp)

The default analysis tasks are:

- Oracle Permission Changes – Highlights activity involving permission changes on audited Oracle
  Instances. Creates the SA_Oracle_PermissionChange_Details table accessible under the job’s Results
  node.
- Oracle Permission Changes Instance Summary – Summarizes Permission Changes per Instance. Creates
  the SA_Oracle_PermissionChange_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_PermissionsChanges Job
produces the following pre-configured report.

| Report                             | Description                                                                                     | Default Tags | Report Elements                                                                                                                                                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission Change Activity Summary | This report lists all permission change related Oracle events, and summarizes them by instance. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by permission change activity - Table –  Provides details on instances by permission change activity - Table – Provides details on permission change details |

# Oracle_SchemaChanges Job

The Oracle_SchemaChanges Job is designed to provide detailed information about changes in schema
across all database objects.

## Analysis Tasks for the Oracle_SchemaChanges Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_SchemaChanges** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup29.webp)

The default analysis tasks are:

- Oracle Schema Change Details – Highlights activity involving schema changes in the audited Oracle
  Instances. Creates the SA_Oracle_SchemaChange_Details table accessible under the job’s Results
  node.
- Schema Change Summary – Summarizes schema changes per instance. Creates the
  SA_Oracle_SchemaChange_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_SchemaChanges Job
produces the following pre-configured report.

| Report                 | Description                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schema Change Activity | This report lists all schema change related Oracle events, and summarizes them by instance. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by schema change activity - Table –  Provides details on instances by schema change activity - Table – Provides details on schema change details |

# Oracle_SensitiveDataActivity Job

The Oracle_SensitiveDataActivity Job is designed to provide detailed information about DML (UPDATE,
INSERT, DELETE, TRUNCATE) against objects containing sensitive data.

## Analysis Tasks for the Oracle_SensitiveDataActivity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_SensitiveDataActivity** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup30.webp)

The default analysis tasks are:

- SDD Activity – Highlights activity on Oracle sensitive data. Creates the
  SA_Oracle_SensitiveDataActivity_Details table accessible under the job’s Results node.
- SDD Activity Instance Summary – Summarizes SDD Activity by Instance. Creates the
  SA_Oracle_SensitiveDataActivity_UserSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_SensitiveDataActivity
Job produces the following pre-configured report.

| Report                  | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                                            |
| ----------------------- | --------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Activity | This report highlights events in databases containing sensitive data. | None         | This report is comprised of three elements: - Bar Chart – Displays top users by instance - Table – Provides details on user activity by instance - Table – Provides details on sensitive data activity details by database |

# Oracle_SuspiciousActivity Job

The Oracle_SuspiciousActivity job is designed to provide insight into suspicious behavior based on
user activity that does not conform to normal database activity.

## Analysis Tasks for the Oracle_SuspiciousActivity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_SuspiciousActivity** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup31.webp)

The default analysis tasks are:

- Oracle Suspicious Activity Details – Analyzes the audited events and collects those that represent
  suspicious activity by the database users. Creates the SA_Oracle_SuspiciousActivity_Details table
  accessible under the job’s Results node.
- Suspicious Activity Instance Summary – Summarizes all suspicious activity found and groups it by
  instance. Creates the SA_Oracle_SuspiciousActivity_Summary table accessible under the job’s
  Results node.

In addition to the tables and views created by the analysis task, the Oracle_SuspiciousActivity Job
produces the following pre-configured report.

| Report              | Description                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Suspicious Activity | This report highlights the number of suspicious events found per instance as well as provides the details about those events | None         | This report is comprised of three elements: - Bar Chart – Displays suspicious activity by instance - Table –  Provides details on suspicious activity by instance - Table – Provides details on suspicious activity details |

# Oracle_UnusualActivity Job

The Oracle_UnusualActivity job has analysis tasks and reports that use data collected by the
0.Collection Job Group to analyze user activity based on audited actions and identify any outliers
based on a modified z-score. Modified z-scores of 3.5 or over are considered possible outliers.

## Analysis Tasks for the Oracle_UnusualActivity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_UnusualActivity** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup32.webp)

The default analysis tasks are:

- Unusual Hourly Activity Details – Finds user activity outliers based on median hourly activity of
  all users in that instance. Creates the SA_Oracle_UnusualHourlyActivity_Details table accessible
  under the job’s Results node.
- Hourly Unusual Activity Summary – Groups unusual activity outliers by instance. Creates the
  SA_Oracle_UnusualHourlyActivity_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_UnusualActivity Job
produces the following pre-configured report.

| Report                  | Description                                                                                                                | Default Tags | Report Elements                                                                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unusual Hourly Activity | This report highlights the number of unusual events found per instance, hourly as well as provides details on those events | None         | This report is comprised of three elements: - Bar Chart – Displays unusual user activity - Table – Provides details on number of outliers per instance - Table – Provides details on unusual user activity details |

# 2.Activity Job Group

The 2.Activity Job Group is designed to provide insight into user login activity, object permission
changes, unusual database activity, SQL activity against sensitive data, and SQL activity against
selective or all database objects.

![Activity Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/activity/jobgroup25.webp)

The jobs in the 2.Activity Job Group are:

- [Oracle_Activity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide insight into user activity in target Oracle database server
  instances and databases in each instance based on the Oracle Unified Audit settings
- [Oracle_Logons Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to provide insight into failed and successful Oracle database login
  activity across all the targeted Oracle database servers
- [Oracle_PermissionChanges Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide detailed information about the changes in permissions across all
  the database objects. Audited activities include granting, altering, and revoking permissions on
  database objects.
- [Oracle_SchemaChanges Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide detailed information about the changes in permissions across all
  the database objects. Audited activities include granting, altering, and revoking permissions on
  database objects.
- [Oracle_SensitiveDataActivity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide detailed information about all the DML (UPDATE, INSERT, DELETE,
  TRUNCATE) against objects containing sensitive data
- [Oracle_SuspiciousActivity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide insight into suspicious behavior based on user activity that
  does not conform to normal database activity
- [Oracle_UnusualActivity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to analyze user activity based on the audited actions and identify any
  outliers based on a modified z-score. Modified z-scores of 3.5 or higher are considered to be
  possible outliers.

# 0-Oracle_Servers Job

The 0-Oracle_Servers job is designed to enumerate and store the list of Oracle Database Instances
running on the targeted servers.

## Query for the Oracle_Servers Job

The Server Discovery query uses the PowerShell Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup3.webp)

- Oracle Servers – Returns a list of Oracle servers from the specified host list

Regarding Oracle instance discovery, there may be errors running the query that are not reported. An
additional log to store the issues has been added for instance discoveries named
`Oracle_Server_log_[target_hostname]`. This file can be found in
`%sainstalldir%\Jobs\GROUP_ORACLE_0.Collection\GROUP_1.Discovery\JOB_Oracle_Servers\OUTPUT`. See the
[PowerShell Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
topic for additional information.

## Analysis Task for the Oracle_Servers Job

Navigate to the **Databases** > **0.Collection** > **Oracle** > **0-Oracle_Servers** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup4.webp)

The default analysis task is:

- Insert Instances in SA_SQL_Instances table – Creates the SA_SQL_Instances table accessible under
  the job’s Results node

# 1-Oracle_PermissionsScan Job

The 1-Oracle_PermissionsScan Job is designed to collect Oracle database level permissions from all
targeted Oracle database servers.

## Query for the 1-Oracle_PermissionsScan Job

The PermissionsScan query uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup6.webp)

- PermissionsScan – Collects permissions from targeted instances

### Configure the 1-Oracle_PermissionsScan Query

The 1-Oracle_PermissionsScan Job is preconfigured to run using the default settings for the
Permissions Collection category in the SQL Data Collector. Follow the steps to customize
configurations:

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **Oracle** >
**1-Oracle_PermissionsScan** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the PermissionScan query and click on Query
Properties. The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

**CAUTION:** Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.

![Filter Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/1oraclepermissionscanjobqueryfilter.webp)

**Step 4 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 5 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 1-Oracle_PermissionsScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-Oracle_PermissionsScan Job

Navigate to the **Databases** > **0.Collection** > **Oracle** > **1-Oracle_PermissionsScan** >
**Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup8.webp)

The default analysis tasks are:

- Oracle Setup – Sets up functions and tables for the Oracle Solution Set
- Oracle Permissions Import – Imports Oracle permissions into the AIC
- Oracle Local Groups Import – Creates the SA_AIC_LocalGroupsImport table accessible under the job’s
  Results node

# 2-Oracle_SensitiveDataScan Job

The 2-Oracle_SensitiveDataScan Job discovers sensitive data in Oracle databases across all targeted
Oracle database servers based on pre-defined or user-defined search criteria.

Special Dependency

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server
  - See the
    [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
    topic for installation information.
  - See the
    [Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/accessanalyzer/sensitivedatadiscovery/overview.md)
    topic for additional information.

**NOTE:** Though the job is visible within the console, it requires an additional installer package
before data collection will occur.

## Query for the 2-Oracle_SensitiveDataScan Job

The SensitiveDataScan Query uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup9.webp)

- SensitiveDataScan – Collects Sensitive Data from targeted instances

### Configure the 2-Oracle_SensitiveDataScan Query

The 2-Oracle_SensitiveDataScan Job is preconfigured to run using the default settings for the
Sensitive Data Collection category in the SQL Data Collector. Follow the steps to customize
configurations:

**Step 1 –** Navigate to the **Databases > 0.Collection >** Oracle > > 2-Oracle_SensitiveDataScan >
Configure node and select Queries.

**Step 2 –** In the Query Selection view, select the SensitiveDataScan query and click on Query
Properties. The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

**CAUTION:** Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.

![Sensitive Data Scan Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/optionspage.webp)

**Step 4 –** Navigate to the Options page. Enable or disable configuration options as needed. Click
Next to continue.

![Criteria Page of the SQL Data Collector Wizard](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/criteriapage.webp)

**Step 5 –** Navigate to the Criteria page. Select or deselect criteria used to define sensitive
data. Click Next to continue.

![Filter Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/2oraclesensitivedatascanfilterpgae.webp)

**Step 6 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 7 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 2-Oracle_SensitiveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 2-Oracle_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **Oracle** > **2-Oracle_SensitiveDataScan** >
**Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup13.webp)

The default analysis tasks are:

- Oracle SDD Permission View – Creates a view of all permissions on sensitive data
- Oracle Effective SDD Perms – Creates a view of effective permissions on Oracle SDD data
- Oracle SDD Import – Creates the SA_AIC_SddMatchesImport table accessible under the job’s Results
  node

# 3-Oracle_ActivityScan Job

The 3-Oracle_ActivityScan Job captures user activity from all the targeted Oracle database servers.

Special Dependency

- Oracle Server Audit Specifications to be configured on the target databases
  - Audit destination must be a binary file
  - See the Microsoft
    [Create a Server Audit and Database Audit Specification](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/create-a-server-audit-and-database-audit-specification)
    article for additional information.

## Query for the 3-Oracle_ActivityScan Job

The ActivityScan Query uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup14.webp)

- ActivityScan – Collects activity from targeted instances

### Configure the 3-Oracle_ActivityScan Query

The 3-Oracle_ActivityScan Job is preconfigured to run using the default settings for the Server
Audit Events Collection category in the SQL Data Collector. Follow the steps to customize
configurations:

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **Oracle** >
**3-Oracle_ActivityScan** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the ActivityScan query and click on Query
Properties. The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

**CAUTION:** Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.

![Sensitive Data Scan Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/optionspage.webp)

**Step 4 –** Navigate to the Options page. Enable or disable configuration options as needed. Click
Next to continue.

![Filter Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/3oracleactivityscanfilterpage.webp)

**Step 5 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 6 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 3-Oracle_ActivityScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 3-Oracle_ActivityScan Job

Navigate to the **Databases** > **0.Collection** > **Oracle** > **3-Oracle_ActivityScan** >
**Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup16.webp)

The default analysis tasks are:

- Oracle Activity Import – Creates the SA_AIC_ActivityEventsImport table accessible under the job’s
  Results node
- Delete Activity Older than 30 Days – Drops Activity from the AIC tables older than 30 days

# 4-Oracle_DefaultPasswordUsers Job

The 4-Oracle_DefaultPasswordUsers Job provides a list of users in the database that are configured
to use default passwords.

## Query for the 4-Oracle_DefaultPasswordUsers Job

The 4-Oracle_DefaultPasswordUsers Job uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/jobgroup17.webp)

- Users with Default Passwords – Collects usernames of users whose passwords have not been updated
  since the database creation

### Configure the 4-Oracle_DefaultPasswordUsers Query

The 4-Oracle_DefaultPasswordUsers Job is preconfigured to run using the default settings for the
Permissions Collection category in the SQL Data Collector. Follow the steps to customize
configurations:

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **Oracle** >
**4-Oracle_DefaultPasswordUsers** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the Users with Default Passwords query and click on
Query Properties. The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

**CAUTION:** Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.

![Filters Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/4oracledefaultpasswordsfilterpage.webp)

**Step 4 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 5 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 4-Oracle_DefaultPasswordUsers Job is now ready to run with the customized settings.

# 5-Oracle_Configuration Job

The 5-Oracle_Configuration Job is designed to return additional configuration settings from Oracle
servers.

## Queries for the 5-Oracle_Configuration Job

The queries for the 5-Oracle_Configuration Job query uses the SQL Data Collector.

![5oracleconfigurationqueries](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/5oracleconfigurationqueries.webp)

The queries are:

- Database Sizing – Returns database size data
- Database Links – Returns details about Oracle database links

### Configure the 5-Oracle_Configuration Queries

The 5-Oracle_Configuration Job is preconfigured to run using the default settings for the Custom
Oracle Query category in the SQL Data Collector. Follow the steps to customize configurations:

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **Oracle** >
**5-Oracle_Configuration Job** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select one of the queries and click on Query Properties.
The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

**CAUTION:** Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.

![Filters page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/5oracleconfigjobqueryfilterpage.webp)

**Step 4 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 5 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 5-Oracle_Configuration Job is now ready to run with the customized settings.

# 0.Collection Job Group

The Oracle Job Group is designed to collect a high level summary of information from the targeted
Oracle Database Servers. This information is used by other jobs in the Oracle Job Group for further
analysis, and for producing reports.

![Oracle 0Collection Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/collection/0collection.webp)

The job groups in the 0.Collection Job Group are:

- [0-Oracle_Servers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to enumerate and store the list of Oracle Database Instances running on the
  targeted servers
- [1-Oracle_PermissionsScan Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to collect Oracle database level permissions from all the targeted Oracle
  database servers
- [2-Oracle_SensitiveDataScan Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to discover sensitive data in the Oracle database across all the targeted
  Oracle database servers based on pre-defined or user-defined search criteria
- [3-Oracle_ActivityScan Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to capture user activity from all the targeted Oracle database servers
- [4-Oracle_DefaultPasswordUsers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide a list of users in the database that are configured to use
  default passwords
- [5-Oracle_Configuration Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to return additional configuration settings from Oracle servers.

# Oracle_DatabaseLinks Job

The Oracle_DatabaseLinks Job contains a report that provides information on Database Links where the
listed Oracle Server is able to execute remote commands.

## Analysis Tasks for the Oracle_DatabaseLinks Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle_DatabaseLinks
Job >Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/configuration/analysisdblinks.webp)

The default analysis tasks are:

- Database Link Details – Provides details about Oracle Database links
- Oracle Database Link Summary – Summarizes Oracle Database links by instance

In addition to the tables created by the analysis tasks, the **Oracle_DatabaseLinks Job** produces
the following preconfigured report:

| Report         | Description                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Links | This report highlights Database Links where the listed Oracle Server is able to execute remote commands. | None         | This report is comprised of three elements: - Bar Chart – Provides information on top five database links by instance - Bar Chart – Provides information on database links by instance (GB) - Table – Provides details on database links |

# Oracle_DatabaseSizing Job

The Oracle_DatabaseSizing Job provides details on tablespace file sizes and overall tablespace
sizes.

## Analysis Tasks for the Oracle_DatabaseSizing Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle_DatabaseSizing
Job >Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/configuration/analysisdbsizing.webp)

The default analysis tasks are:

- Database Sizing Details – Provides details on database files and sizes
- Database Sizing Summary – Summarizes file size by instance

In addition to the tables created by the analysis tasks, the **Oracle_DatabaseSizing Job** produces
the following preconfigured report:

| Report          | Description                                                    | Default Tags | Report Elements                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report highlights the size of tablespace files in Oracle. | None         | This report is comprised of three elements: - Bar Chart – Provides information on top tablespaces by size - Bar Chart – Provides information on size by host (GB) - Table – Provides details on database sizes |

# Oracle_DataDictionaryProtection Job

The Oracle_DataDictionaryProtection Job is designed to identify if the Oracle data dictionary views
are accessible by all schemas. Oracle best practice recommendation is to restrict access to data
dictionary views by default and grant explicit system privileges to access the dictionary views when
needed.

## Analysis Tasks for the Oracle_DataDictionaryProtection Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle_DataDictionaryProtection >
Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/configuration/analysisddprotection.webp)

The default analysis tasks are:

- Find Instances with Modifiable Data Dictionary – Finds Oracle database instances where data
  dictionary can be modified by users with system privilege access. Creates the
  SA_Oracle_DictionaryAccessible_Details table accessible under the jobs Result’s node.
- Data Dictionary Accessibility Summary – Highlights the number of database instances with the data
  dictionary access enabled and disabled. Creates the SA_Oracle_DictionaryAccessible_Summary table
  accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the
**Oracle_DataDictionaryProtection Job** produces the following pre-configured report.

| Report                        | Description                                                                                            | Default Tags | Report Elements                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data Dictionary Accessibility | The report highlights the number of instances with either accessible or inaccessible data dictionaries | None         | This report is comprised of two elements: - Pie Chart – Displays data dictionary accessibility - Table – Provides information on dictionary accessibility details |

# Oracle_InstanceNameIssues Job

The Oracle_InstanceNameIssues Job discovers if names used for Oracle database instances conform to
Oracle recommended best practices. The job also checks to see if Oracle SIDs conform to DISA STIG
V-61413 – Oracle instance name or SID should not contain Oracle version numbers.

## Analysis Tasks for the Oracle_InstanceNameIssues Job

Navigate to the **Jobs > Databases > Oracle > 4.Configuration > Oracle_InstanceNameIssues >
Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/configuration/analysisinstancenameissues.webp)

The default analysis tasks are:

- Find Weak Instance Names – Checks SID names for default names and version numbers. Creates the
  SA_Oracle_WeakInstanceNames_Details table accessible under the job’s Results node.
- Summarize Number of Weak Instance Names – Counts the number of weak instance names in all
  instances. Creates the SA_Oracle_WeakInstanceNames_Summary table accessible under the job’s
  Results node.

In addition to the tables and views created by the analysis task, the **Oracle_InstanceNameIssues
Job** produces the following pre-configured report.

| Report               | Description                                                                        | Default Tags | Report Elements                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Instance Name Issues | This report highlights default instance names or those containing version numbers. | None         | This report is comprised of two elements: - Pie Chart – Displays percentage of instance names with issues - Table – Provides details of instance issues |

# Oracle_RemoteOSAuthentication Job

The Oracle_RemoteOSAuthentication Job is designed to discover if remote OS authentication is enabled
for the targeted Oracle database servers.

## Analysis Tasks for the Oracle_RemoteOSAuthentication Job

Navigate to the **Jobs > Databases > Oracle > 4.Configuration > Oracle_RemoteOSAuthentication >
Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/configuration/analysisremoteosauth.webp)

The default analysis tasks are:

- Find Instances With Remote OS Authentication Enabled – Finds database instances with remote OS
  authentication setting set to “TRUE”. Creates the SA_Oracle_RemoteAuthenticationEnabled_Details
  table accessible under the job’s Results node.
- Remote OS Authentication Summary – Counts the number of database instances where the
  ‘remote_os_authent’ parameter is set to “TRUE” and also those that are set to “FALSE”. Creates the
  SA_Oracle_RemoteOSAuthentication_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_RemoteOSAuthentication
Job produces the following pre-configured report.

| Report                          | Description                                                                                | Default Tags | Report Elements                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Oracle Remote OS Authentication | This report shows the number of instances that have remote_os_auth parameter set to “TRUE” | None         | This report is comprised of two elements: - Pie Chart – Displays remote OS authentication - Table – Provides information on remote OS authentication details |

# 4.Configuration Job Group

The SQL > 4.Configuration Job Group Is designed to provide insight into potential vulnerabilities
related to Oracle Database Instance configuration settings.

![Configuration Job Group - Oracle](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/configuration/configoverview.webp)

The jobs in the 4.Configuration Job Group are:

- [Oracle_DatabaseLinks Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – Contains a report that provides information on Database Links where the listed Oracle Server is
  able to execute remote commands
- [Oracle_DatabaseSizing Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – Provides details on tablespace file sizes and overall tablespace sizes
- [Oracle_DataDictionaryProtection Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to identify if the Oracle data dictionary views are accessible by all the
  schemas or not. Oracle best practice recommendations are to restrict access to data dictionary
  views by default and grant explicit system privilege to access the dictionary views when needed.
- [Oracle_InstanceNameIssues Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to find out if the names used for the Oracle database instances conform to
  Oracle recommended best practices. The job also checks to see if the Oracle SID conforms to DISA
  STIG V-61413 – Oracle instance name or SID should not contain Oracle version numbers.
- [Oracle_RemoteOSAuthentication Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to find out if remote OS authentication is enabled for the targeted Oracle
  database servers

# Oracle_SecurityAssessment Job

The Oracle_SecurityAssessment Job is designed to summarize and categorize the security findings from
the Oracle Solution into HIGH, MEDIUM, LOW, and NO FINDING categories base on severity.

![Oracle Security Assessment Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/jobgroup46.webp)

## Analysis Tasks for the Oracle_SecurityAssessment Job

Navigate to the **Databases** > **Oracle** > **Oracle_SecurityAssessment** > **Configure** node and
select Analysis to view the analysis tasks.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/jobgroup47.webp)

The default analysis task is:

- Summarize Audit Findings – Aggregates all security issues in the Oracle environment. Creates the
  #scopeOfAudit table used to create the Oracle Security Assessment report under the Configure >
  Reports node

In addition to the tables and views created by the analysis task, the Oracle_SecurityAssessment Job
produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags        | Report Elements                                                                                                                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Security Assessment | This report summarizes security related results from the Oracle solution set. | Security Assessment | This report is comprised of four elements: - Table – Provides information on the scope of the audit - Pie Chart – Displays remote OS authentication - Table – Displays findings by category - Table – Provides details of the security assessment |

# Oracle Solution

Data privacy and security is quickly evolving to be on equal footing with traditional security
measures focused on the network, hardware, or software the data is contained within. Organizations
aligning to concepts like Data-Centric Audit and Protection (DCAP) as defined by Gartner, or the
requirements of strict compliance regulations like EU GDPR, are looking to implement processes that
help them understand where sensitive data is stored, who or what is leveraging their privileges to
access the data, and how each database has been configured.

This solution is a comprehensive part of the Data Access Governance suite for structured and
unstructured data. Enterprise Auditor for Oracle automates the process of understanding where Oracle
databases exist and provides an overview of the Oracle environment in order to answer questions
around data access:

- Who HAS access to your data?
- Who IS accessing your data?
- What sensitive data IS being stored and accessed?

With visibility into every corner of Oracle® server and the Windows® operating system it relies
upon, organizations can proactively highlight and prioritize risks to sensitive data. Additionally,
organizations can automate manual, time-consuming, and expensive processes associated with
compliance, security, and operations to easily adhere to best practices that keep Oracle Server safe
and operational.

The Oracle Solution requires a special Enterprise Auditor license. The Database Solution license
includes all supported database platforms supported by Enterprise Auditor. Additionally, the
Sensitive Data Discovery Add-On enables the solution to search database content for sensitive data.

Supported Platforms

- Oracle Database 12c
- Oracle Database 18c
- Oracle Database 19c

Requirements, Permissions, and Ports

See the
[Target Oracle Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For example, if the job is
configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Location

The Oracle Solution requires a special Enterprise Auditor license. It can be installed from the
Enterprise Auditor Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to
the solution: **Jobs** > **Databases** > **0.Collection** > **Oracle** for the 0.Collection job
group for Oracle.

The 0.Collection Job Group discovers Oracle Instances on the target hosts. The other job groups at
**Jobs** > **Databases** > **Oracle** analyze and report on the data collected by the 0.Collection
Job Group.

The Database Solution license includes all supported database platforms supported by Enterprise
Auditor. Additionally, the Sensitive Data Discovery Add-On enables the solution to search database
content for sensitive data.

## Job Groups

The Oracle Solution is a comprehensive set of pre-configured audit jobs and reports that provide
visibility into various aspects of an Oracle Database Server, including information on Users and
Roles, Sensitive Data Discovery, Object Permissions, Configuration, User Activity, and overall
Security Assessment.

![Oracle Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/oraclejobgroup.webp)

The job groups/jobs in the Oracle Solution are:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to collect high level summary information from targeted Oracle
  Database Servers. This information is used by other jobs in the Oracle solution set for further
  analysis and for producing respective reports. The O.Collection job group is located at **Jobs** >
  **Databases** > **0.Collection** > **Oracle**.
- [1.Users and Roles Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to provide insight into user security, roles, and object permissions
  on all the Oracle database objects
- [2.Activity Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to provide insight into user login activity, object permission
  changes, any unusual database activity, SQL activity against sensitive data, and SQL activity
  against selective or all database objects
- [3.Permissions Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to provide insight into all types of permissions at the instance,
  database, and object level across all the targeted Oracle database servers
- [4.Configuration Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to provide insight into potential vulnerabilities related to Oracle
  Database Instance configuration settings
- [5.Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide insight into where sensitive data exists, and who has access to
  it across all the targeted Oracle database servers
  - Requires the Sensitive Data Discovery Add-On.
- [Oracle_SecurityAssessment Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to summarize and categorize the security findings into HIGH, MEDIUM, LOW,
  and NO FINDING categories based on their severity

# Oracle_DomainUserPermissions Job

The Oracle_DomainUserPermissions Job provides insight into Microsoft Active Directory domain user
accesses to Oracle database objects both at the instance and object level.

## Analysis Tasks for the Oracle_DomainUserPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_DomainUserPermissions** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup34.webp)

The default analysis tasks are:

- Calculate domain user permissions details – Creates the SA_ORACLE_DomainUserPermissions_Details
  table accessible under the job’s Results node
- Summarize domain user permissions – Creates the SA_ORACLE_DomainUserPermissions_Summary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the Oracle_DomainUserPermissions
Job produces the following pre-configured report.

| Report             | Description                                                                             | Default Tags | Report Elements                                                                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain User Access | This report looks at permissions granted to domain users across the audited environment | None         | This report is comprised of three elements: - Bar Chart – Displays top users by instance count - Table – Provides details on access sprawl - Table – Provides information on permission details |

# Oracle_ObjectPermissions Job

The Oracle_ObjectPermissions Job provides insight into user and role permissions to database objects
in targeted Oracle database servers.

## Analysis Tasks for the Oracle_ObjectPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_ObjectPermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup35.webp)

The default analysis tasks are:

- Oracle Object Permissions – Highlights permissions on Oracle Objects. Creates the
  SA_Oracle_ObjectPermission_Details table accessible under the job’s Results node.
- Object Permissions Instance Summary – Summarizes Object Permissions by Instance. Creates the
  SA_Oracle_ObjectPermission_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_ObjectPermissions Job
produces the following pre-configured report.

| Report                    | Description                                                                               | Default Tags | Report Elements                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Object Permissions | This report highlights Object permissions and summarizes them by instance and domain user | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by object permissions - Table –  Provides details on instances by object permission count - Table – Provides details on object permissions |

# Oracle_PublicPermissions Job

The Oracle_PublicPermissions Job provides a list of permissions assigned to Public profile in
targeted Oracle database servers.

## Analysis Tasks for the Oracle_PublicPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_PublicPermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup36.webp)

The default analysis tasks are:

- Oracle Public Permissions – Analyzes permissions for the Public Oracle account. Creates the
  SA_Oracle_PublicPermission_Details table accessible under the job’s Results node.
- Public Permissions Instance Summary – Summarizes public permissions by Instance. Creates the
  SA_Oracle_PublicPermission_InstanceSummary accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_PublicPermissions Job
produces the following pre-configured report.

| Report             | Description                                                               | Default Tags | Report Elements                                                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public Permissions | This report highlights public permissions and summarizes them by instance | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by public permission - Table – Provides details on instances by public permission count - Table – Provides details on public permission details |

# Oracle_ServerPermissions Job

The Oracle_ServerPermissions Job analyzes permissions granted at the database level and reports on
effective database level permissions across all audited Oracle database servers.

## Analysis Tasks for the Oracle_ServerPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_ServerPermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup37.webp)

The default analysis tasks are:

- Determine Server Permissions – Highlights Oracle permissions on the Server. Creates the
  SA_Oracle_ServerPermission_Details table accessible under the job’s Results node.
- Server Permissions Instance Summary – Summarizes server permissions by Instance. Creates the
  SA_Oracle_ServerPermission_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_ServerPermissions Job
produces the following pre-configured report.

| Report             | Description                                                               | Default Tags | Report Elements                                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Permissions | This report highlights server permissions and summarizes them by instance | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by server permissions - Table – Provides details on instances by server permission count - Table – Provides details on server permissions |

# Oracle_SysSchemaPermissions Job

The Oracle_SysSchemaPermissions Job provides insight into users that have access to objects in the
SYS schema, and the type permissions to those objects across all audited Oracle database servers.

## Analysis Tasks for the Oracle_SysSchemaPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_SysSchemaPermissions** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup38.webp)

The default analysis tasks are:

- Oracle Sys Schema Permissions – Highlights all permissions on tables in the Oracle schema. Creates
  the SA_Oracle_SysSchema table accessible under the job’s Results table.
- Oracle Sys Schema Summary – Summarizes sys schema permissions per instance. Creates the
  SA_Oracle_SysSchema_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_SysSchemaPermissions
Job produces the following pre-configured reports.

| Report                 | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                   |
| ---------------------- | ---------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SYS Schema Permissions | This report highlights SYS schema permissions across the audited environment | None         | This report is comprised of three elements: - Bar Chart – Displays sys schema permission by instance - Table – Provides details on sys schema permissions by instance - Table – Provides details on sys schema permission details |

# 3.Permissions Job Group

The 3.Permissions Job Group is designed to provide insight into all types of permissions at the
instance, database, and object levels across all targeted Oracle database servers.

![Permissions Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup33.webp)

The jobs in the 3.Permissions Job Group are:

- [Oracle_DomainUserPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job will provide insight into Microsoft Active Directory domain users access to Oracle
  database objects both at the instance and object level
- [Oracle_ObjectPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job will provide insight into user and role permissions to all the database objects in the
  targeted Oracle database server
- [Oracle_PublicPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job provides the list of all the permission assigned to the PUBLIC profile in all the
  targeted Oracle database servers
- [Oracle_ServerPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job analyzes all the permission granted at the database level and repots on the effective
  database level permissions across all the audited Oracle database servers
- [Oracle_SysSchemaPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job provides insight into all the users who have access to the objects in the SYS schema
  and the type permissions to those objects across all the audited Oracle database servers

# Recommended Configuration

The Oracle Solution has been configured to inherit down from the Oracle > Settings node. However, it
is best practice to assign the host list and the Connection Profile at the data collection level,
0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

Dependencies

- .Active Directory Inventory Job Group run successfully
- For Activity Auditing – Oracle Server audit specifications to be configured on the target
  databases
- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  Enterprise Auditor Console server

Some of the queries in the **Jobs** > **Databases** > **0.Collection** > **Oracle Job Group** can be
scoped to target specific databases and/or instances. However, it is necessary for the
SA_SQL_Instances table to be populated before attempting to scope the queries. Therefore, the
0-Oracle_Servers job must be executed before attempting to scope the rest of the 0.Collection Job
Group queries.

Targeted Host(s)

The 0.Collection Job Group must be set to run against the following dynamic host list:

- Oracle Servers

Default dynamic host lists are populated from hosts in the Host Master Table which meet the host
inventory criteria for the list. Ensure the appropriate host list(s) have been populated through
host inventory results.

Connection Profile

The SQL Data Collector requires a specific set of permissions. The account used can be either an
Active Directory account or an Oracle account.

For a Windows-integrated Oracle instance it is possible to use one Active Directory credential that
has permissions on both the Oracle database and the server. This will not generally be the case in
most customer environments, but it is possible.

If the required permissions are assigned to one Active Directory credential, once the account has
been provisioned, create a custom Connection Profile containing the credentials for the targeted
environment. See the
[SQL Data Collector](/docs/accessanalyzer/11.6/data-collection/databases/sql-server.md)
topic for additional information on permissions and creating a SQL custom connection profile.

Alternatively, create a connection profile with both the Oracle database credentials and the server
credentials for the targeted host.

A Connection Profile with the applicable permissions should be assigned under each jobs Connection
node as follows:

- Both the Oracle database credentials and the Server credentials for the targeted host (or the
  previously provisioned AD credentials) for:
  - 0-Oracle_Servers Job
- Oracle Database credentials only for:
  - 1-Oracle_PermissionsScan Job
  - 2-Oracle_SensitiveDataScan Job
  - 3-Oracle_ActivityScan Job
  - 4-Oracle_DefaultPasswordUsers Job
  - 5-Oracle_Configuration Job

The Connection Profile is set to Use the Default Profile, as configured at the global settings
level. However, since this may not be the Connection Profile with the necessary permissions for the
assigned hosts, click the radio button for the Select one of the following user defined profiles
option and select the appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

One of the most important decisions to make is how frequently to collect this data. The Oracle Job
Group can be scheduled to run as desired depending on the types of auditing being conducted and the
scope of the target environment. The general recommendation is to schedule the solution to run
daily.

Run Order

The 0-Oracle_Servers Job within the Oracle 0.Collection Job Group must be run first, before running
the rest of the jobs.

**_RECOMMENDED:_** Run the solution at the top level: Oracle Job Group

The other job groups in the Jobs > Databases > Oracle Job Group can be run in any order only after
running the 0.Collection Job Group.

Query Configuration

This solution is designed to be run with the default query configurations. However, the following
SQL Data Collector configurations can be modified if desired:

- Options page – Customize scan options and/or sensitive data (DLP) options in the following jobs:
  - 2-Oracle_SensitiveDataScan Job
  - 1-Oracle_ActivityScan Job
- Criteria page – Customize the criteria used to define sensitive data in the following job:
  - 2-Oracle_SensitiveDataScan Job
- Filter page – Scope the query to target specific databases/instances in the following jobs:

  Remember, it is necessary for the
  [0-Oracle_Servers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  to run at least once before attempting to scope any of the following queries:

  - 1-Oracle_PermissionsScan Job
  - 2-Oracle_SensitiveDataScan Job
  - 3-Oracle_ActivityScan Job
  - 4-Oracle_DefaultPasswordUsers Job
  - 5-Oracle_Configuration Job

  **_RECOMMENDED:_** For reporting purposes, scope all queries to target the same
  databases/instances if applying a scope.

Analysis Configuration

This solution should be run with the default analysis configurations. These analysis tasks are
preconfigured and should not be modified or deselected!

Remember, disabling obsolete or un-desired jobs allows the solution to run more efficiently. To
disable a job or job group, right-click on the item and select Disable Job.

**_RECOMMENDED:_** Do not delete any jobs. Instead, jobs should be disabled.

Workflow

1. Set a Connection Profile for the 0.Collection Job Group with the permissions listed in the
   Recommended Configurations section. See the
   [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
   section for additional information.
2. For Sensitive Data Discovery Auditing – Ensure the Sensitive Data Discovery Add-On is installed
   on the Enterprise AuditorEnterprise Auditor Console server.
3. Schedule the solution to run daily or as desired.
4. Review the reports generated by the jobs.

# Oracle_SensitiveData Job

The Oracle_SensitveData Job is designed to provide information on all sensitive data that was
discovered in targeted Oracle database servers based on selected scan criteria.

## Analysis Tasks for the Oracle_SensitiveData Job

Navigate to the **Oracle > 5.Sensitve Data > Oracle_SensitveData > Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/sensitivedata/jobgroup44.webp)

The default analysis tasks are:

- Determine sensitive data details – Creates the SA_Oracle_SensitiveData_Details table accessible
  under the job’s Results node
- Instance Summary – Creates the SA_Oracle_SensitiveData_InstanceSummary table accessible under the
  job’s Results node
- Enterprise Summary – Creates the SA_Oracle_SensitiveData_EnterpriseSummary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the **Oracle_SensitveData Job**
produces the following pre-configured reports.

| Report                  | Description                                                                 | Default Tags | Report Elements                                                                                                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise | None         | This report is comprised of two elements: - Pie Chart – Displays exceptions by match count - Table – Provides information on exception details                                                                               |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria        | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by sensitive data hits - Table – Provides details on instances with sensitive data - Table – Provides information on sensitive data details |

# Oracle_SensitiveDataPermissions Job

The Oracle_SensitiveDataPermissions Job is designed to provide information on permissions on
database objects containing sensitive data across all targeted Oracle database servers.

## Analysis Tasks for the Oracle_SensitiveDataPermissions Job

Navigate to the **Oracle > 5.Sensitive Data > Oracle_SensitiveDataPermissions > Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/sensitivedata/jobgroup45.webp)

The default analysis tasks are:

- Detail Oracle SDD Permissions – Creates the SA_Oracle_SensitiveDataPermissions_Details table
  accessible under the job’s Results node
- SDD Perms Instance Summary – Creates the SA_Oracle_SensitiveDataPermissions_InstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the
**Oracle_SensitiveDataPermissions Job** produces the following pre-configured report.

| Report                     | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by permission count - Table – Provides details on instance permission summary - Table – Provides information on sensitive data permission details |

# 5.Sensitive Data Job Group

The 5.Sensitive Data Job Group is designed to provide insight into where sensitive data exists and
who has access to said data across all targeted Oracle database servers.

Special Dependency for Data Collection

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

![Sensitive Data Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/sensitivedata/jobgroup43.webp)

The jobs in the 5.Sensitive Data Job Group are:

- [Oracle_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide information on all the sensitive data that was discovered in the
  targeted Oracle database servers based on the selected scan criteria
- [Oracle_SensitiveDataPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to provide all types of permissions on database objects containing
  sensitive data across all the targeted Oracle database servers

# Oracle_PasswordIssues Job

The Oracle_PasswordIssues Job is designed to analyze the Oracle user passwords and evaluate if they
comply with prescribed password policies. In addition, the job group will also scan for weak
passwords.

## Query for the Oracle_PasswordIssues Job

The Oracle_PasswordIssues Job uses the PowerShell Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/usersroles/jobgroup20.webp)

- Weak Password Hash – Locates the dictionary file used to compare Oracle passwords to determine if
  they are weak.

See the
[PowerShell Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
topic for additional information.

## Analysis Tasks for the Oracle_PasswordIssues Job

Navigate to the **Jobs** > **Oracle** > **1.Users and Roles** > **Oracle_PasswordIssues** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/usersroles/jobgroup21.webp)

The default analysis tasks are:

- Oracle Weak Password Details – Lists details of weak passwords in Oracle. Adds data to the
  SA_Oracle_PasswordIssues_Details table accessible under the job’s Results node.
- Weak Hashes – Highlights user accounts with weak hashes. Adds data to the
  SA_Oracle_PasswordIssues_Details table accessible under the job’s Results node.
- Default Passwords – Finds users with default passwords. Adds data to the
  SA_Oracle_PasswordIssues_Details table accessible under the job’s Results node.
- Weak Password Instance Summary – Summarizes weak passwords per instance. Creates the
  SA_Oracle_PasswordIssues_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_PasswordIssues Job
produces the following pre-configured reports.

| Report         | Description                                                                        | Default Tags | Report Elements                                                                                                                                                                                                   |
| -------------- | ---------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weak Passwords | This report highlights users with weak passwords in the audited Oracle environment | None         | This report is comprised of three elements: - Bar Chart – Displays password issues by instance - Table – Provides details on password issues by instance - Table – Provides information on password issue details |

# Oracle_RoleMembers Job

The Oracle_RoleMembers Job is designed to analyze and provide information about role members across
all targeted Oracle database servers.

## Analysis Tasks for the Oracle_RoleMembers Job

Navigate to the **Oracle** > **1.Users and Roles** > **Oracle_RoleMembers** > Configure node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/usersroles/jobgroup22.webp)

The default analysis tasks are:

- Role Member Details – Creates the SA_Oracle_RoleMember_Details table accessible under the job’s
  Results node
- Role Membership Instances Summary – Creates the SA\_ Oracle_RoleMember_Summary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the Oracle_RoleMembers Job
produces the following pre-configured report.

| Report          | Description                                                                                   | Default Tags | Report Elements                                                                                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Role Membership | This report shows details on the roles and role membership in the audited Oracle environment. | None         | This report is comprised of three elements: - Bar Chart – Displays top roles by role membership - Table – Provides details on roles by role membership - Table – Provides information on role membership details |

# Oracle_SystemAdministrators Job

The Oracle_SystemAdministrators Job is designed to provide insight into users who have DBA, SYSDBA,
and SYSOPER roles across all targeted Oracle database servers.

## Analysis Tasks for the Oracle_SystemAdministrators Job

Navigate to the **Oracle** > **1.Users and Roles** > **Oracle_SystemAdministrators** > Configure
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/usersroles/jobgroup23.webp)

The default analysis tasks are:

- Oracle Administrators – Returns members of specified administrator roles. Creates the
  SA_Oracle_SystemAdministrators table accessible under the job’s Results node.
- System Admin Instance Summary – Summarizes System Administrators by Instance. Creates the
  SA_Oracle_SystemAdministrators_InstanceSummary table accessible under the job’s Results node.
- System Admin Domain Users – Highlights System Administrators which are domain accounts. Creates
  the SA_Oracle_SystemAdmins_DomainUsers table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_SystemAdministrators
Job produces the following pre-configured report.

| Report        | Description                                                                              | Default Tags | Report Elements                                                                                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin Summary | This report highlights all principals which are members of specified administrator roles | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by admin count - Table – Provides information on admin details - Table – Provides details on top instances by admin count |

# Oracle_Users Job

The Oracle_Users Job is designed to provide insight into all attributes associated with users in all
databases in targeted Oracle database servers.

## Analysis Tasks for the Oracle_Users Job

Navigate to the **Oracle** > **1.Users and Roles** > **Oracle_Users** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/usersroles/jobgroup24.webp)

The default analysis tasks are:

- Determine user details – Creates the SA_Oracle_Users_Details table accessible under the job’s
  Results node
- Summarize by Instance – Creates the SA_Oracle_Users_Summary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the Oracle_Users Job produces the
following pre-configured report.

| Report       | Description                                                          | Default Tags | Report Elements                                                                                                                                                                                       |
| ------------ | -------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Users | This report shows details on users in the audited Oracle environment | None         | This report is comprised of three elements: - Bar Chart – Displays users by instance - Table – Provides details on oracle user instance summary - Table – Provides information on oracle user details |

# 1.Users and Roles Job Group

The 1.Users and Roles Job Group is designed to provide insight into user security, roles, and object
permissions on all Oracle database objects.

![Users and Roles Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/oracle/usersroles/jobgroup19.webp)

The jobs in the 1.Users and Roles Job Group are:

- [Oracle_PasswordIssues Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to analyze the Oracle user passwords and evaluate if they comply with
  the prescribed password policies. In addition, the job will also scan the passwords for weak
  passwords.
- [Oracle_RoleMembers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job is designed to analyze and provide information about all the role members in each of
  the Oracle database roles across all the targeted Oracle database servers
- [Oracle_SystemAdministrators Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to provide insight into all the users who have DBA, SYSDBA, and
  SYSOPER roles across all the targeted Oracle database servers
- [Oracle_Users Job](/docs/accessanalyzer/11.6/solutions/databases/oracle-analysis.md)
  – This job group is designed to provide insight into all the attributes associated with all the
  users in the Oracle database across all targeted Oracle database servers
