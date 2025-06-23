# EX_Mailbox_SDD Job

The EX_Mailbox_SDD job locates sensitive data found in mailboxes in the Exchange environment.

Special Dependency

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

  - See the
    [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
    topic for additional information

  **NOTE:** Though the job is visible within the console, it requires an additional installer
  package before data collection occurs.

## Queries for the EX_Mailbox_SDD Job

The EX_Mailbox_SDD job uses the EWSMailbox Data Collector.

![Queries for the EX_Mailbox_SDD Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/mailboxsddquery.webp)

The following query is included in the EX_Mailbox_SDD job:

- Exchange Sensitive Data Discovery – Collects potentially-sensitive data from mailboxes

  - Set to search all mailboxes. It can be scoped.
  - Default sensitive data criteria includes:

    - Birth Records
    - Credit Cards
    - Passwords
    - Tax Forms
    - US SSN

- See the
  [Configure the EWSMailbox Data Collector for the EX_Mailbox_SDD Job](#configure-the-ewsmailbox-data-collector-for-the-ex_mailbox_sdd-job)
  topic for additional information

### Configure the EWSMailbox Data Collector for the EX_Mailbox_SDD Job

The Exchange Sensitive Data Discovery query has been preconfigured to run with the EWSMailbox Data
Collector to scan for sensitive data.

Follow the steps to configure the scope of the EWSMailbox Data Collector:

**Step 1 –** Navigate to the **Exchange** > **7. Sensitive Data** > **0. Collection** >
**EX_Mailbox_SDD** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the **Exchange Sensitive Data Discovery** query and
click**Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The EWS Mailbox Data Collector
Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

![EWS Mailbox Data Collector Wizard Mailbox scope settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/mailboxscopesettings.webp)

**Step 4 –** To scope the query for specific mailboxes, navigate to the Scope page. The query is
configured by default to target **All mailboxes**. Change the Mailboxes to be queried to **Select
mailboxes from list.**See the
[EWSMailbox: Scope](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

![EWS Mailbox Data Collector Wizard Scope select page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/mailboxscopeselect.webp)

**Step 5 –** To retrieve available mailboxes, click **Retrieve** on the Scope Select page. Select
the desired mailboxes and click **Add**. See the
[EWSMailbox: Scope Select](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

![EWS Mailbox Data Collector Wizard SDD Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/sddoptions.webp)

**Step 6 –** To enable storage of discovered sensitive data, navigate to the SDD Options page.
Sensitive data matches can be limited to reduce storage space. See the
[EWSMailbox: SDD Options](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

**NOTE:** By default, discovered sensitive data strings are not stored in the Enterprise Auditor
database.

![EWS Mailbox Data Collector Wizard Criteria page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

**Step 7 –** To modify criteria, navigate to the Criteria page. Add or remove criteria as desired.
See the
[EWSMailbox: Criteria](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

- (Optional) To create custom criteria, see the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  topic for additional information

![EWS Mailbox Data Collector Wizard Filter page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/mailboxfiltersettings.webp)

**Step 8 –** To filter the scan to specific mailbox folders, navigate to the Filter page. Include or
exclude folders and attachments as desired. See the
[EWSMailbox Data Collector](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

- To modify the threshold for message size, set the **Limit message size to** value as desired. The
  default is 2000 KB.
- To modify the threshold for large attachment size, set the **Limit attachment size to** value as
  desired. The default is 2000 KB.

![EWS Mailbox Data Collector Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/mailboxresults.webp)

**Step 9 –** Navigate to the Results page to select which properties are gathered based on category.
See the
[EWSMailbox: Results](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

**NOTE:** By default, all categories are selected under sensitive data.

**Step 10 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window

The job now applies the modification to future job executions.

## Analysis Tasks for the EX_Mailbox_SDD Job

View the analysis task by navigating to the **Exchange** > **7.Sensitive Data** >
**EX_Mailbox_SDD** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the EX_Mailbox_SDD Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/mailboxsddanalysis.webp)

The following analysis task is selected by default:

- AIC Import - Exchange SSD – Imports Exchange sensitive data to the Access Information Center

# EX_PublicFolder_SDD Job

The EX_PublicFolder_SDD job locates sensitive data found in public folders in the Exchange
environment.

Special Dependency

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

  - See the
    [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
    topic for additional information

  **NOTE:** Though the job is visible within the console, it requires an additional installer
  package before data collection occurs.

## Queries for the EX_PublicFolder_SDD Job

The EX_PublicFolder_SDD job uses the EWSPublicFolder Data Collector.

![Queries for the EX_PublicFolder_SDD Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/publicfoldersddquery.webp)

The following query is included in the EX_PublicFolder_SDD job:

- Exchange Sensitive Data Discovery – Scans Exchange public folders for specified sensitive data

  - Set to search all public folders. It can be scoped.
  - Default sensitive data criteria includes:

    - Birth Records
    - Credit Cards
    - Passwords
    - Tax Forms
    - US SSN

  - See the [Configure the EX_PublicFolder_SDD Query](#configure-the-ex_publicfolder_sdd-query)
    topic for additional information

### Configure the EX_PublicFolder_SDD Query

The Exchange Sensitive Data Discovery query has been preconfigured to run with the EWSPublicFolder
Data Collector to scan for sensitive data.

**Step 1 –** Navigate to the **Exchange** > **7. Sensitive Data** > **0. Collection** >
**EX_EWSPublicFolder_SDD** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select **Exchange Sensitive Data Discovery** and click
**Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The EWS Public Folder Data
Collector Wizard opens.

**CAUTION:** Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![EWS Public Folder Data Collector Wizard SDD Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/sddoptions.webp)

**Step 4 –** To enable storage of discovered sensitive data, navigate to the SDD Options page.
Sensitive data matches can be limited to reduce storage space. See the
[EWSPublicFolder: SDD Options](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md) topic
for additional information.

**NOTE:** By default, discovered sensitive data strings are not stored in the Enterprise Auditor
database.

![EWS Public Folder Data Collector Wizard Criteria page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

**Step 5 –** To modify criteria, navigate to the Criteria page. Add or remove criteria as desired.
See the
[EWSPublicFolder: Critieria](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

- (Optional) To create custom criteria, see the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  topic for additional information

![EWS Public Folder Data Collector Wizard Filter Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/publicfolderfiltersettings.webp)

**Step 6 –** To filter the scan to specific mailbox folders, navigate to the Filter page. Include or
exclude folders and attachments as desired. See the
[EWSPublicFolder: Filter](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md) topic
for additional information.

- To modify the threshold for message size, set the **Limit message size to** value as desired. The
  default is 2000 KB.
- To modify the threshold for large attachment size, set the **Limit attachment size to** value as
  desired. The default is 2000 KB.

![EWS Public Folder Data Collector Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/collection/publicfolderresults.webp)

**Step 7 –** To select which properties are gathered based on category, navigate to the Results
page.  See the
[EWSPublicFolder: Results](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md) topic
for additional information.

**NOTE:** By default, all categories are selected under sensitive data.

**Step 8 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window

The job applies the modification to future job executions.

# 0.Collection Job Group

The 0.Collection job group locates sensitive data found in mailboxes and public folders in the
Exchange environment.

![0.Collection Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The jobs in the 0.Collection job group are:

- [EX_Mailbox_SDD Job](/docs/accessanalyzer/11.6/solutions/exchange/sensitive-data.md)
  – Collects potentially sensitive data in mailboxes
- [EX_PublicFolder_SDD Job](/docs/accessanalyzer/11.6/solutions/exchange/sensitive-data.md)
  – Collects potentially sensitive data in public folders

# EX_SDDResults Job

The EX_SDDResults job contains analyses and reports to provide insight into the types of sensitive
data that is located within Exchange mailboxes and public folders within the environment.

## Analysis Tasks for the EX_SDDResults Job

View the analysis tasks by navigating to the **Exchange** > **7. Sensitive Data** >
**EX_SDDResults** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_SDDResults Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/sensitivedata/sddresultsanalysis.webp)

The following analysis tasks are selected by default:

- Mailbox Details – Creates the EX_SDDResults_MailboxDetails table, accessible under the job’s
  Results node. Provides details regarding the number of matches that are found per item in each
  mailbox.
- Mailbox Summary – Creates the EX_SDDResults_MailboxSummary table, accessible under the job’s
  Results node. Summarizes the items found with matches.
- Public Folder Details – Creates the EX_SDDResults_PublicFolderDetails table, accessible under the
  job’s Result node. Provides details regarding the number of matches that are found per item in
  each public folder.
- Public Folder Mailstore Summary – Creates the EX_SDDResults_PublicFolderSummary table, accessible
  under the job’s Results node. Summarizes the items found with matches.
- Enterprise Summary – Creates the EX_SDDResults_EnterpriseSummary table, accessible under the job’s
  Results node. Summarizes the type and amount of sensitive content found in the environment.

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

**CAUTION:** Do not select the **Deletes all Stored Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.

- Deletes all Stored Data - LEAVE UNCHECKED – Clears all historical SDD data

  - See the
    [Troubleshooting Data Collection](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#troubleshooting-data-collection)
    topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_SDDResults Job produces
the following pre-configured reports.

| Report                                                        | Description                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary (Sensitive Content)                        | This report identifies the type and amount of sensitive content found in scanned mailboxes. | None         | This report is comprised of two elements: - Bar Chart – Displays exceptions by item count - Table – Provides a criteria summary                                                                                        |
| Mailbox Details (Mailboxes with Sensitive Content)            | This report identifies the mailboxes containing sensitive data.                             | None         | This report is comprised of three elements: - Bar Chart – Displays top mailboxes by sensitive item count - Table – Provides mailbox details - Table – Provides details on top mailboxes by sensitive item count        |
| Public Folder Details (Public Folders with Sensitive Content) | This report identifies the public folders containing sensitive data.                        | None         | This report is comprised of three elements: - Bar Chart – Displays top folders by sensitive data item count - Table – Provides public folder details - Table – Provides details on top folders by sensitive item count |

# 7.Sensitive Data Job Group

The 7. Sensitive Data job group is comprised of jobs which locate sensitive data found in mailboxes
and public folders in the Exchange environment.

![7.Sensitive Data Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following comprise the 7. Sensitive Data job group:

**NOTE:** These jobs are compatible with the Office 365 environment.

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/exchange/sensitive-data.md)
  – Locates sensitive data found in mailboxes and public folders in the Exchange environment
- [EX_SDDResults Job](/docs/accessanalyzer/11.6/solutions/exchange/sensitive-data.md)
  – Contains analyses and reports to provide insight into the types of sensitive data that was
  located within Exchange mailboxes and public folders within the environment

The 7. Sensitive Data job group is comprised of jobs that utilize the EWSMailbox and EWSPublicFolder
Data Collectors to locate sensitive data found in mailboxes and public folders in the Exchange
environment. It also contains analysis and reporting jobs to order and analyze the data returned by
the queries. See the
[Exchange](/docs/accessanalyzer/11.6/administration/settings/exchange.md)
topic for additional information.

# Recommended Configurations for the 7. Sensitive Data Job Group

Dependencies

This job group requires the following item to be installed and configured on the Enterprise Auditor
Console:

- Enterprise Auditor Sensitive Data Add-On installed

The following job groups need to be successfully run:

- .Active Directory Inventory Job Group

Targeted Hosts

The 0.Collection Job Group needs to be set to run against:

- Local host

The **0.Collection** > **EX_Mailbox_SDD** and **0.Collection** > **EX_PublicFolder_SDD** jobs need
to be set to run against the version-appropriate default dynamic host list:

- Exchange 2010 MB Servers
- Exchange 2013 MB Servers
- Exchange 2016 MB Servers
- Exchange 2019 MB Servers

**NOTE:** Default dynamic host lists are populated from hosts in the Host Master Table which meet
the host inventory criteria for the list. Ensure the appropriate host lists have been populated
through host inventory results.

Connection Profile

A Connection Profile must be set directly on jobs within the 0.Collection job group. See the
[Exchange Web Services API Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for the EX_PFInfo job requirements.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

This job group has been designed to run as desired.

Query Configuration

The 7. Sensitive Data Job Group is designed to be run with the default query configurations.
However, the following queries can be modified:

- **0.Collection** > **EX_Mailbox_SDD** Job – **Exchange Sensitive Data Discovery** Query
- **0.Collection** > **EX_PublicFolder_SDD** Job – **Exchange Sensitive Data Discovery** Query

No other queries should be modified.

Workflow

**Step 1 –** Set the host on the EX_Mailbox_SDD or EX_PublicFolder_SDD job.

**Step 2 –** Set a Connection Profile on the jobs which run data collection.

**Step 3 –** Schedule the 7. Sensitive Data job group to run as desired.
