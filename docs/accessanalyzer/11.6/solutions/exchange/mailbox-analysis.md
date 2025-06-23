---
title: exchange mailbox analysis
sidebar_label: mailbox analysis
description: Solution guide for exchange mailbox analysis including implementation steps, configuration, and best practices.
---

# Features > EX_Features Job

The EX_Features job is comprised of data collection and a report that provides information around
which features have been enabled or disabled on Mailboxes, such as ActiveSync, IMAP, POP and more.

**_RECOMMENDED:_** Schedule the Features Job Group to run weekly on any desired recurrence.

![Features > EX_Features Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/featuresjobstree.webp)

The EX_Features job is located in the Features job group.

## Queries for the EX_Features Job

The EX_Features Job uses the ExchangePS Data Collector.

![Queries for the EX_Features Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/featuresquery.webp)

The following query is included with the EX_Features Job:

- User Mailbox Settings – Collects user mailbox settings

  - By default set to search all mailboxes. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
  Exchange on-premises environments. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for credential requirements.

In addition to the table created by the query, the EX_Features Job produces the following
pre-configured report:

| Report           | Description                                                              | Default Tags | Report Elements                                                                         |
| ---------------- | ------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------- |
| Mailbox Features | This report identifies features introduced in Exchange for each mailbox. | None         | This report is comprised of one element: - Table – Provides details on mailbox features |

# 0.Collection > EX_MailboxActivity Job

The EX_MailboxActivity job collects logs of Native Mailbox Access Auditing from Exchange to provide
reporting around mailbox logon activity.

![0.Collection > EX_MailboxActivity Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The EX_MailboxActivity job is located in the 0.Collection job group.

**NOTE:** This job requires that Exchange Access Auditing is enabled in the Exchange environment.

## Queries for the EX_MailboxActivity Job

The EX_MailboxActivity Job uses the ExchangePS Data Collector.

![Queries for the EX_MailboxActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/logons/mailboxactivityquery.webp)

The following query is included with the EX_MailboxActivity job:

- Exchange Mailbox Logons – Collects data on Exchange mailbox access logons

  - By default set to search all mailboxes. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
  Exchange on-premises environments. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for credential requirements.

# EX_MailboxLogons Job

The EX_MailboxLogons Job provides details around Mailbox logon activity occurring within the
Exchange environment.

## Analysis Tasks for the EX_MailboxLogons Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Logons** >
**EX_MailboxLogons** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_MailboxLogons Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/logons/mailboxlogonsanalysis.webp)

The following analysis tasks are selected by default:

- 1. Create History Table – Creates the SA_EX_MailboxLogons_Details table, accessible under the
     job’s Results node
- 02.Hourly Activity – Creates the SA_EX_MailboxLogons_HourlyActivity table, accessible under the
  job’s Results node
- 03.SET HISTORY RETENTION – Sets retention period in months

  - By default set to retain 6 months. It can be modified.
  - See the
    [Exchange History Retention](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#exchange-history-retention)
    topic for additional information

- 04.Last Week Top Offenders – Creates the SA_EX_MailboxLogons_LastWeekSummary table, accessible
  under the job’s Results node
- 05.Hourly by Client IP – Creates the SA_EX_MailboxLogons_HourlyActivityByClient table, accessible
  under the job’s Results node
- 06.Import Logon Activity to AIC – Imports Logon Activity to Access Information Center

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

**CAUTION:** Do not select the **00. Delete All Historical Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.

- 00.Delete All Historical Data

  - See the
    [Troubleshooting Data Collection](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#troubleshooting-data-collection)
    topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_MailboxLogons Job produces
the following pre-configured reports:

| Report                                                                        | Description                                                                                                                   | Default Tags | Report Elements                                                                                                                                                            |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Non Owner Mailbox Logons – Last Week (Top Users Logging into Other Mailboxes) | Lists the number of distinct non-owner mailboxes accessed by each user and counts of non-owner logons in the last seven days. | None         | This report is comprised of two elements: - Bar Chart – Displays top users for non-owner activity – last week - Table – Provides details on all mailbox logons             |
| Top Hourly Activity (By IP) (Top Hourly Activity)                             | This report shows periods where there was large amounts of traffic coming from a single machine.                              | None         | This report is comprised of two elements: - Bar Chart – Displays top machines by user account activity - Table – Provides details on top machines by user account activity |
| Top Hourly Activity (By User) (Top Hourly Activity)                           | This report shows periods when users are most active.                                                                         | None         | This report is comprised of two elements: - Bar Chart – Displays top machines by non-owner logons - Table – Provides details on top users by non-owner logons              |

# Logons Job Group

The Logons Job Group provides collection of Native Mailbox Access Auditing logs from Exchange to
provide reporting around mailbox logon activity.

**_RECOMMENDED:_** Schedule the Logons Job Group to run daily at 7 PM.

The data collection job requires that Exchange Access Auditing is enabled in the Exchange
environment.

![Logons Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Logons Job Group are:

- [0.Collection > EX_MailboxActivity Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Collects logs of Native Mailbox Access Auditing from Exchange to provide reporting around
  mailbox logon activity
- [EX_MailboxLogons Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides details around Mailbox logon activity occurring within the Exchange environment

# 4.Mailboxes Job Group

The 4. Mailboxes job group is comprised of data collection, analysis, and reports around mailbox
features, logons, permissions, and sizing.

![4.Mailboxes Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following comprise the 4. Mailboxes job group:

**NOTE:** These jobs are compatible with the Office 365 environment.

- [Features > EX_Features Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Comprised of data collection and a report that provides information around which features have
  been enabled or disabled on mailboxes, such as ActiveSync, IMAP, POP and more
- [Logons Job Group](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides collection of Native Mailbox Access Auditing logs from Exchange to provide reporting
  around mailbox logon activity
- [Permissions Job Group](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Comprised of data collection, analysis and reports that focus on access granted to each mailbox
  in the environment including, Mailbox Rights, Active Directory Permissions, Delegation, and Folder
  Permissions
- [Sizing Job Group](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides data collection, analyses, and reports which focus on mailbox sizing, growth, and
  trends

# EX_Delegates Job

The EX_Delegates job collects data from Active Directory to identify the delegates applied to a
mailbox.

## Queries for the EX_Delegates Job

The EX_Delegates job uses the ExchangePS Data Collector.

![Queries for the EX_Delegates Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/collection/delegatesquery.webp)

The following query is included with the EX_Delegates job:

- Delegates – Collects delegates applied to each mailbox

  - By default set to search all mailboxes. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
  Exchange on-premises environments. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for credential requirements.

# EX_MBRights Job

The EX_MBRights job collects data from Active Directory to identify the mailbox rights applied to a
mailbox.

## Queries for the EX_MBRights Job

The EX_MBRights job uses the ExchangePS Data Collector.

![Queries for the EX_MBRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/collection/mbrightsquery.webp)

The following query is included in the EX_MBRights Job:

- Mailbox Rights – Collects mailbox rights

  - By default set to search all mailboxes. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
  Exchange on-premises environments. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for credential requirements.

# EX_Perms Job

The EX_Perms job collects information about permissions applied to the folders within Exchange
mailboxes.

## Queries for the EX_Perms Job

The EX_Perms job uses the EWSMailbox Data Collector.

![Queries for the EX_Perms Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/collection/permsquery.webp)

The following query is included in the EX_Perms job.

- Exchange Mailbox Permissions – Returns Exchange mailbox folder permissions

  - By default set to search all mailboxes. It can be scoped.
  - See the
    [EWSMailbox Data Collector](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
    topic for additional information

# EX_SendAs Job

The EX_SendAs job collects data from Active Directory to identify the Active Directory rights
applied to a mailbox.

## Queries for the EX_SendAs Job

The EX_SendAs job uses the ExchangePS Data Collector.

![Queries for the EX_SendAs Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/collection/sendasquery.webp)

The following query is included in the EX_SendAs Job:

- Send AS - Rights – Collects Exchange mailbox folder permissions

  - By default set to search all mailboxes. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
  Exchange on-premises environments. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for credential requirements.

## Analysis Tasks for the EX_SendAs Job

View the analysis task by navigating to the **Exchange** > **4. Mailboxes** > **Permissions** >
**0.Collection** > **EX_SendAs** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the EX_SendAs Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/collection/sendasanalysis.webp)

The following analysis task is selected by default:

- Index Collection – Creates an index on the collection for use by downstream analysis and report
  generation

# 0. Collection Job Group

The 0. Collection job group is comprised of data collection and analysis that focus on access
granted to each mailbox in the environment including: Mailbox Rights, Active Directory Permissions,
Delegation, and Folder Permissions.

![0.Collection Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The jobs in the 0. Collection job group are:

- [EX_Delegates Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Collects data from Active Directory to identify the delegates applied to a mailbox
- [EX_MBRights Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Collects data from Active Directory to identify the mailbox rights applied to a mailbox
- [EX_Perms Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Collects information about permissions applied to the folders within Exchange mailboxes
- [EX_SendAs Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Collects data from Active Directory to identify the Active Directory rights applied to a mailbox

# EX_AdminGroups Job

The EX_AdminGroups job provides visibility into the direct and effective membership of Exchange
Administrative groups.

## Analysis Tasks for the EX_AdminGroups Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Permissions** >
**EX_AdminGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_AdminGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/admingroupsanalysis.webp)

The following analysis tasks are selected by default:

- 00.Calculate Effective Membership – Creates the SA_EX_AdminGroups_Membership table accessible
  under the job’s Results node
- 01.Rank groups by Size – Creates the SA_EX_AdminGroups_Ranked table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the EX_AdminGroups Job produces
the following pre-configured report:

| Report                         | Description                                                                            | Default Tags | Report Elements                                                                                                             |
| ------------------------------ | -------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Exchange Administration Groups | This report shows effective membership for the default Exchange Administration groups. | None         | This report is comprised of two elements: - Bar Chart – Displays largest admin groups - Table – Provides membership details |

# EX_MailboxAccess Job

The EX_MailboxAccess job provides visibility into access granted to each mailbox in the environment
taking into consideration Mailbox Rights, Active Directory Permissions, Delegation, and Folder
Permissions.

## Analysis Tasks for the EX_Mailbox Access Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Permissions** >
**EX_MailboxAccess** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_Mailbox Access Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/mailboxaccessanalysis.webp)

The following analysis tasks are selected by default:

- 00.Regional Send As Rights – Creates the SA_EX_MailboxAccess_SendAs table, accessible under the
  job’s Results node
- 01.Regional Full Control Rights – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- 02.Regional Delegates – Creates the SA_EX_MailboxAccess_Delegates table, accessible under the
  job’s Results node
- 03.Regional Mailbox Permissions – Creates the SA_EX_MailboxAccess_Permissions table, accessible
  under the job’s Results node
- 04.Regional Delegated Access – Creates the SA_EX_MailboxAccess_DelegatedAccess table, accessible
  under the job’s Results node
- 05.Regional Mailbox Rights – Creates the SA_EX_MailboxAccess_Rights table, accessible under the
  job’s Results node
- 06.Missing Anonymous Permissions – Creates the SA_EX_MailboxAccess_MissingAnon table, accessible
  under the job’s Results node
- 07.Incorrect Default/Anonymous Rights – Creates the SA_EX_MailboxAccess_DefaultAnonIssues table,
  accessible under the job’s Results node
- 08.Expanded Rights – Creates the SA_EX_MailboxAccess_ExpandedRights table, accessible under the
  job’s Results node
- 09.Incorrect Default/Anonymous Permissions Summary – Creates the
  SA_EX_MailboxAccess_DefaultAnonSummary table, accessible under the job’s Results node
- 10.Permissions Summary – Creates the SA_EX_MailboxAccess_PermissionSummary table, accessible under
  the job’s Results node
- 11.Full Control Summary – Creates the SA_EX_MailboxAccess_FullControlSummary table, accessible
  under the job’s Results node
- 12.Send As Summary – Creates the SA_EX_MailboxAccess_SendAsSummary table accessible under the
  job’s Results node

The following analysis tasks is selected to export data to the AIC:

- 13.AIC Import - Export Exchange Permissions – Exports delegates, Send AS rights, mailbox
  permissions, and Active Directory rights to the Access Information Center

  **NOTE:** This task sends data to the Access Information Center during future job executions.
  See the User Reports and the Group Reports topics in the
  [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
  for additional information.

In addition to the tables and views created by the analysis tasks, the EX_MailboxAccess Job produces
the following pre-configured reports:

| Report                                            | Description                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                                                                                      |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Delegation (Delegates)                            | This report identifies users where Delegate/Send on Behalf Of rights have been assigned and which objects the users have been given rights to. | None         | This report is comprised of two elements: - Bar Chart – Displays top users by number of delegates - Table – Provides details on top users by number of delegates                                                                     |
| Full Control Access (Mailboxes with Full Control) | This report identifies users with the largest amount of Full Control rights assigned to other individuals.                                     | None         | This report is comprised of two elements: - Bar Chart – Displays top users with full control granted - Table – Provides details on top users with full control granted                                                               |
| Incorrect Default And Anon Permissions            | This report identifies where Default or Anonymous have any role assignment other than **None** or **Free/Busy time**.                          | None         | This report is comprised of three elements: - Bar Chart – Displays top users with incorrect default/anon permissions - Table – Provides details on top users with incorrect default/anon permissions - Table – Provides role details |
| Missing Anonymous Permissions                     | This report identifies folders where Anonymous permissions are not assigned.                                                                   | None         | This report is comprised of one element: - Table – Provides details on missing anonymous permissions                                                                                                                                 |
| Send As (Send-As Rights)                          | This report identifies which users have the highest number of users with Send-As rights to their mailbox.                                      | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays top users by send as rights granted - Table – Provides details on top users by send as right granted - Table – Provides additional details                |

# Permissions Job Group

The Permissions job group is comprised of data collection, analysis and reports that focus on access
granted to each mailbox in the environment including, Mailbox Rights, Active Directory Permissions,
Delegation, and Folder Permissions.

**_RECOMMENDED:_** Schedule the Permissions job group to run weekly on Fridays at 6 PM.

![Permissions Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The job groups and jobs in the Permissions job group are:

- [0. Collection Job Group](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Comprised of data collection and analysis that focus on access granted to each mailbox in the
  environment including: Mailbox Rights, Active Directory Permissions, Delegation, and Folder
  Permissions
- [EX_AdminGroups Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides visibility into the direct and effective membership of Exchange Administrative groups
- [EX_MailboxAccess Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides visibility into access granted to each mailbox in the environment taking into
  consideration Mailbox Rights, Active Directory Permissions, Delegation, and Folder Permissions

# Recommended Configurations for the 4. Mailboxes Job Group

Dependencies

This job group requires the following items to be enabled:

- Exchange Access Auditing is enabled in the Exchange environment

  - This is required for the Logons Job Group. See the
    [Enable Exchange Mailbox Access Auditing](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md#enable-exchange-mailbox-access-auditing)
    topic for additional information.

The following job groups need to be successfully run:

- **.Active Directory Inventory** Job Group
- **.Entra ID Inventory** Job Group
- **Exchange** > **1. HUB Metrics** Job Group (Optional)
  - Provides data on mailbox metrics for on-premises Exchange environments and the last time a
    distribution list received mail
- **Exchange** > **2. CAS Metrics** Job Group (Optional)
  - Provides data on mailbox staleness for on-premises Exchange environments
- **Exchange** > **8. Exchange Online** > **Mailflow** Job Group (Optional)
  - Provides data on distribution list metrics for Exchange Online environments and the last time
    a distribution list received mail

Targeted Hosts

The **Features** > **EX_Features** job, **Logons** > **0.Collection** job group, **Permissions** >
**0.Collection** job group, and **Sizing** > **0.Collection** job group have been set for Exchange
on-premises to run against:

- Local host

This Job Group can target a custom host list for Exchange Online instead of targeting Exchange
on-premises. However, do not try to target both types of environments.

Connection Profile

A Connection Profile must be set directly on the collection jobs within each sub-job group:

- **Features** > **EX_Features** Job
- **Logons** > **0.Collection** > **EX_MailboxActivity** Job
- **Permissions** > **0. Collection**:

  - EX_Delegates Job
  - EX_MBRights Job
  - EX_Perms Job
  - EX_SendAs Job

- **Sizing** > **0. Collection** > **EX_MBSize** Job

See the
[Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for the required permissions. See the
[Exchange Custom Connection Profile & Host List](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

Schedule Frequency

It is not recommended to run these jobs at the 4. Mailboxes job group level. The Logons sub-job
group and Sizing job group have been designed to run daily. The Features sub-job group and
Permissions job group have been designed to run weekly. See the table for recommended times:

| Job Group Name | Frequency | Recommended Time                    |
| -------------- | --------- | ----------------------------------- |
| Logons         | Daily     | 4 AM                                |
| Sizing         | Daily     | 7 PM                                |
| Features       | Weekly    | No recommendation, run when desired |
| Permissions    | Weekly    | Fridays at 6 PM                     |

History Retention

History retention should not be enabled on this job group. History is kept through analysis tasks.
Modify the following analysis tasks to customize the amount of history which is kept:

| Job Name          | Analysis Task Name    | Default History |
| ----------------- | --------------------- | --------------- |
| EX_DMailboxLogons | SET HISTORY RETENTION | 6 Months        |
| EX_MailboxSizes   | SET HISTORY RETENTION | 6 Months        |

Query Configuration

The 4. Mailboxes job group is designed to be run with the default query configurations. However, the
following queries can be modified:

- **Features** > **EX_Features** Job – **User Mailbox Settings** Query
- **Logons** > **0.Collection** > **EX_MailboxActivity** Job – **Exchange Mailbox Logons** Query
- **Permissions** > **0. Collection** > **EX_Delegates** Job – **Delegates** Query
- **Permissions** > **0. Collection** > **EX_MBRights** Job – **Mailbox Rights** Query
- **Permissions** > **0. Collection** > **EX_Perms** Job – **Exchange Mailbox Permissions** Query
- **Permissions** > **0. Collection** > **EX_SendAs** Job – **Send AS - Rights** Query
- **Sizing** > **0. Collection** > **EX_MBSize** Job – **Mailbox Counts and Sizes** Query

No other queries should be modified.

Analysis Configuration

The 4. Mailboxes job group should be run with the default analysis configurations.

**CAUTION:** Most of these analysis tasks are preconfigured and should not be modified or
deselected. There are some tasks that are deselected by default, as they are for troubleshooting
purposes.

The following analysis tasks should not be deselected, but their parameters can be modified:

- **Logons** > **EX_MailboxLogons** Job – **03.SET HISTORY RETENTION** Analysis Task
- **Sizing** > **EX_MailboxSizes** Job – **02.SET HISTORY RETENTION** Analysis Task

The following analysis tasks is enabled to send Exchange mailbox permission data to the  
Netwrix Access Information Center:

- **Permissions** > **EX_MailboxAccess** Job – **13.AIC Import - Export Exchange Permissions**
  Analysis Task

Workflow

**Step 1 –** Set a Connection Profile on the jobs that run data collection.

**Step 2 –** Schedule the jobs. The following are the recommended schedules:

- Daily Execution

  - Schedule the **Logons** job group to run daily
  - Schedule the **Sizing** job group to run daily

- Weekly Execution

  - Schedule the **Features** job group to run weekly
  - Schedule the **Permissions** job group to run weekly

**Step 3 –** Review the reports generated by the jobs.

# EX_MailboxSizes Job

The EX_MailboxSizes job provides analysis and reporting around mailbox sizing and growth.

#### Analysis Tasks for the EX_Mailbox Sizes Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Sizing** >
**EX_MailboxSizes** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_Mailbox Sizes Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/sizing/mailboxsizesanalysis.webp)

The following analysis tasks are selected by default:

- 01.Update or Create Details Table – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- 02.Regional Track Mailbox Size History – Creates an interim processing table in the database for
  use by downstream analysis and report generation
- 03.SET HISTORY RETENTION – Sets retention period in months

  - The default is 6 months. It can be modified.
  - See the
    [Exchange History Retention](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#exchange-history-retention)
    topic for additional information

- 04.Store History – Creates the SA_EX_MailboxSizes_StoreHistory table, accessible under the job’s
  Results node
- 05.Current Sizes – Creates the SA_EX_MailboxSizes_CurrentSnapshot table, accessible under the
  job’s Results node
- 06.Dumpster Sizes – Creates the SA_EX_MailboxSizes_DumpstersByStore table, accessible under the
  job’s Results node
- 07.Current Store Size – Creates the SA_EX_MailboxSizes_CurrentStoreSize table, accessible under
  the job’s Results node

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

**CAUTION:** Do not select the **00.Delete All Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database:

- 00.Delete All Data

  - See the
    [Troubleshooting Data Collection](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#troubleshooting-data-collection)
    topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_MailboxAccess Job produces
the following pre-configured reports:

| Report                                                               | Description                                                                        | Default Tags | Report Elements                                                                                                                                                            |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Largest Recoverable Items Folder (Dumpster) (Dumpster Sizes by User) | This report identifies users with the largest Recoverable Items folder (dumpster). | None         | This report is comprised of two elements: - Bar Chart – Displays users with largest Recoverable Items folders - Table – Provides details on user Recoverable Items folders |
| Largest Mailboxes (Top Users by Mailbox Size)                        | This report identifies users with the largest mailboxes.                           | None         | This report is comprised of two elements: - Bar Chart – Displays users with the largest mailboxes - Table – Provides details on users with largest mailboxes               |

# 0.Collection > EX_MBSize Job

The EX_MBSize job collects information from the Exchange environment about the mailbox sizes in the
environment.

![0.Collection > EX_MBSize Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The EX_MBSize job is located in the 0.Collection job group.

## Queries for the EX_MBSize Job

The EX_MBSize Job uses the ExchangePS Data Collector.

![Queries for the EX_MBSize Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/sizing/mbsizequery.webp)

The following query is included in the EX_MBSize Job:

- Mailbox Counts and Sizes – Identifies the Active Directory rights applied to a mailbox

  - By default set to search all mailboxes. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
  Exchange on-premises environments. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for credential requirements.

# EX_StaleMailboxes Job

The EX_StaleMailboxes job provides analysis and reporting around orphaned and stale mailboxes.

## Analysis Tasks for the EX_StaleMailboxes Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Sizing** >
**EX_StaleMailboxes** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_StaleMailboxes Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/sizing/stalemailboxesanalysis.webp)

The following analysis tasks are selected by default:

- 1. Mailbox Orphans – Creates the SA_EX_StaleMailboxes_Orphans table, accessible under the job’s
     Results node
- 2. Stale User Mailboxes – Creates the SA_EX_StaleMailboxes_Details table, accessible under the
     job’s Results node
- 3. Organization Summary – Creates the SA_EX_StaleMailboxes_OrgSummary table, accessible under
     the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX_StaleMailboxes Job
produces the following pre-configured reports:

| Report                                                    | Description                                                                                                           | Default Tags | Report Elements                                                                                                                                                                                       |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orphaned Mailboxes                                        | Orphaned Mailboxes do not have an Active Directory account associated with them, and generally can be safely deleted. | None         | This report is comprised of three elements: - Bar Chart – Displays orphan mailbox storage - Table – Provides details on all orphaned mailboxes - Table – Provides details on orphan mailbox storage   |
| Stale Users (Mailboxes associated with Stale AD Accounts) | This report shows mailboxes which are tied to stale user accounts.                                                    | None         | This report is comprised of three elements: - Bar Chart – Displays stale user mailboxes - Table – Provides details stale user mailboxes - Table – Provides additional details on stale user mailboxes |

# EX_StoreSizes Job

The EX_StoreSizes job provides analysis and reporting around database sizing based on mailbox sizes.

## Analysis Tasks for the EX_StoreSizes Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** >
**Sizing** > **EX_StoreSizes** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_StoreSizes Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/sizing/storesizesanalysis.webp)

The following analysis tasks are selected by default:

- 00.Users Ranked by Store – Creates the SA_EX_StoreSize_UsersByStore table, accessible under the
  job’s Results node
- 01.Rank Stores – Creates the SA_EX_StoreSize_Ranked table, accessible under the job’s Results node
- 02.30 Day Growth – Creates the SA_EX_StaleMailboxes_30DayChange table, accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the EX_StoreSizes Job produces
the following pre-configured reports:

| Report                               | Description                                                                       | Default Tags | Report Elements                                                                                                                                         |
| ------------------------------------ | --------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Store Sizes and Growth (Store Sizes) | This report identifies 30 day growth for every mail store within the environment. | None         | This report is comprised of two elements: - Bar Chart – Displays fastest-growing mail stores - Table – Provides details on mail stores – percent change |
| Top Users by Store                   | This report identifies the top users for every mail store.                        | None         | This report is comprised of one element: - Table – Provides details on top users by store                                                               |

# Sizing Job Group

The Sizing job group provides data collection, analyses, and reports which focus on mailbox sizing,
growth, and trends.

**_RECOMMENDED:_** Schedule the Sizing job group to run daily at 4 AM.

![Sizing Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Sizing job group are:

- [0.Collection > EX_MBSize Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Collects information from the environment about the mailbox sizes in the environment
- [EX_MailboxSizes Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides analysis and reporting around Mailbox sizing and growth
- [EX_StaleMailboxes Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides analysis and reporting around orphaned and Stale Mailboxes
- [EX_StoreSizes Job](/docs/accessanalyzer/11.6/solutions/exchange/mailbox-analysis.md)
  – Provides analysis and reporting around Database Sizing based on Mailbox Sizes
