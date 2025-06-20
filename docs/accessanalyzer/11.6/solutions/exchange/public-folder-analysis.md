# Content Job Group

The Content job group provides visibility into public folder sizing and content aging.

![Content Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Content job group are:

- [Collection > PF_ContentScans Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of data collection that focuses on public folder content aging within each public
  folder
- [PF_Content Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of analysis and reports which focus on public folder sizing and content aging

# PF_Content Job

The PF_Content job is comprised of analyses and reports that focus on public folder sizing and
content aging.

## Analysis Tasks for the PF_Content Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Content** >
**PF_Content** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the PF_Content Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/content/contentanalysis.webp)

The following analysis tasks are selected by default:

- 00.PF Environment Aging by Size – Creates the SA_PF_Content_AgingBySize table, accessible under
  the job’s Results node
- 01.PF Environment Aging by Count – Creates the SA_PF_Content_AgingByCount table, accessible under
  the job’s Results node
- 02.Subtree Aging by Size – Creates the SA_PF_Content_SubtreeAgingBySize table, accessible under
  the job’s Results node
- 03.Subtree Aging by Count – Creates the SA_PF_Content_SubtreeAgingByCount table, accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the PF_Content job produces the
following pre-configured reports:

| Report                                                  | Description                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aging by File Count (Public Folder Aging by File Count) | This report highlights content aging within the targeted Public Folder environment, with a focus on the number of files. | None         | This report is comprised of three elements: - Bar Chart – Displays public folder environment aging - Table – Provides details on public folder environment aging by file count - Table – Provides details on aging by sub tree          |
| Aging by File Size (Public Folder Aging by File Size)   | This report highlights content aging within the targeted Public Folder environment, with a focus on the size of files.   | None         | This report is comprised of three elements: - Column Chart – Displays public folder environment aging by file size - Table – Provides details on public folder environment by file size - Table – Provides details on aging by sub tree |

# Collection > PF_ContentScans Job

The PF_ContentScans job is comprised of data collection that focuses on public folder content aging
within each public folder.

![Collection > PF_ContentScans Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The PF_ContentScans job is located in the 0.Collection job group.

## Queries for the PF_ContentScans Job

The PF_ContentScans job uses the ExchangePS Data Collector.

![Queries for the PF_ContentScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/content/contentscansquery.webp)

The following query is included in the PF_ContentScans job:

- PF Contents – Collects content aging information

  - By default set to search all public folders. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

## Analysis Tasks for the PF_ContentScans Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Content** >
**Collection** > **PF_ContentScans** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the PF_ContentScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/content/contentscansanalysis.webp)

The following analysis task is selected by default:

- Strip Replicas from Reports – Removes duplicates from reports

# Growth and Size Job Group

The Growth and Size job group is comprised of data collection, analysis, and reports that focus on
public folder sizing and growth.

![Growth and Size Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Growth and Size job group are:

- [Collection > PF_FolderScans Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of data collection that focuses on collecting sizing information for each public
  folder
- [PF_FolderSize Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Provides details related to public folder sizing and growth

# Collection > PF_FolderScans Job

The PF_FolderScans job is comprised of data collection that focuses on collecting sizing information
for each public folder.

![Collection > PF_FolderScans Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The PF_FolderScans job is located in the Collection job group.

## Queries for the PF_FolderScans Job

The PF_FolderScans job uses the ExchangePS Data Collector.

![Queries for the PF_FolderScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/growthsize/folderscansquery.webp)

The following query is included in the PF_FolderScans Job:

- PF Size & Msg Counts – Collects public folder size and message counts

  - By default set to search all public folders. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

## Analysis Tasks for the PF_FolderScans Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Growth and
Size** > **Collection** > **PF_FolderScans** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the PF_FolderScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/growthsize/folderscansanalysis.webp)

The following analysis task is selected by default:

- Strip Replicas from Reports – Removes duplicates from reports

# PF_FolderSize Job

The PF_FolderSize job provides details related to public folder sizing and growth.

## Analysis Tasks for the PF_FolderSize Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Growth and
Size** > **PF_FolderSize** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the PF_FolderSize Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/growthsize/foldersizeanalysis.webp)

The following analysis tasks are selected by default:

- 01.Create History Table – Creates the SA_PF_FolderSize_History table, accessible under the job’s
  Results node
- 02.SET HISTORY RETENTION – Sets retention period in months

  - The default is 3 months. It can be modified.
  - See the
    [Exchange History Retention](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#exchange-history-retention)
    topic for additional information

- 03.Latest Run Per Folder – Creates the SA_PF_FolderSize_Latest table, accessible under the job’s
  Results node
- 04.30 Day Growth – Creates the SA_PF_FolderSize_Growth table, accessible under the job’s Results
  node

The following analysis task clears table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

**CAUTION:** Do not select the **00. Delete all Historical Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.

- 00.Delete all Historical Data
  - See the
    [Troubleshooting Data Collection](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#troubleshooting-data-collection)
    topic for additional information

In addition to the tables and views created by the analysis tasks, the PF_FolderSize job produces
the following pre-configured report:

| Report                        | Description                                                                   | Default Tags | Report Elements                                                                                                                              |
| ----------------------------- | ----------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Public Folder Size and Growth | This report shows the largest public folders and percent change over 30 days. | None         | This report is comprised of two elements: - Bar Chart – Displays largest public folders - Table – Provides details on largest public folders |

# 5. Public Folders Job Group

The 5. Public Folders job group is comprised of data collection, analyses, and reports that focus on
public folder sizing, content aging, entitlement, ownership, and the identification of each public
folder’s Most Probable Owner. The Most Probable Owner is a unique algorithm built into the public
folder data collector that is determined based on folder ownership, content posted, and size of
content posted.

![5.Public Folders Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following comprise the 5. Public Folders job group:

- [Content Job Group](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Provides visibility into public folder sizing and content aging
- [Growth and Size Job Group](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of data collection, analysis, and reports that focus on public folder sizing and
  growth
- [Ownership Job Group](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of analysis and reports that focus on public folder ownership, and most importantly
  the identification of each public folder's Most Probable Owner
- [Permissions Job Group](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Provides visibility into permissions applied to each public folder
- [PF_Overview Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of analysis and reports that provides a top level summary of each parent public folder
  and correlates information from the message tracking logs to identify the last time a public
  folder received mail

The **5. Public Folders** > **Ownership** job group uses the ExchangePublicFolder, a MAPI-based data
collector. Therefore, it requires both Enterprise Auditor MAPI CDO and Microsoft Exchange MAPI CDO
to be installed on the Enterprise Auditor Console server. Once these have been installed, the
**Settings** > **Exchange** node must be configured for proper connection to the Exchange server.
See the
[Exchange](/docs/accessanalyzer/11.6/administration/settings/exchange.md)
topic for additional information.

# Ownership Job Group

The Ownership job group is comprised of analysis and reports that focus on public folder ownership,
and most importantly the identification of each public folder's Most Probable Owner. The Most
Probable Owner is a unique algorithm built into the public folder data collector that is determined
based on folder ownership, content posted, and size of content posted.

![Ownership Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The obs in the Ownership job group are:

- [Collection > PF_FolderOwnership Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Focuses on public folder sizing, content aging, entitlement, ownership, and most importantly the
  identification of each public folder's Most Probable Owner
- [PF_Owners Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of analysis and reports that focus on public folder ownership, and most importantly
  the identification of each public folder's Most Probable Owner

# Collection > PF_FolderOwnership Job

The PF_FolderOwnership job is comprised of data collection that focuses on collecting each public
folder’s owner and identifying the Most Probable Owner. The Most Probable Owner is a unique
algorithm built into the public folder data collector that is determined based on folder ownership,
content posted, and size of content posted. Modifications can be made to the data collector to
change the way the Most Probable Owner is determined.

![Collection > PF_FolderOwnership Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The PF_FolderOwnership job is located in the Collection job group.

## Queries for the PF_FolderOwnership Job

The PF_FolderOwnership job uses the ExchangePublicFolder Data Collector.

![Queries for the PF_FolderOwnership Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/ownership/folderownershipquery.webp)

The following queries are included in the PF_FolderOwnership job:

- Probable Ownership – Collects and calculates probable owners

  - By default set to search all public folders. It can be scoped.
  - See the
    [Scope the ExchangePublicFolder Data Collector for the PF_FolderOwnership Job](#scope-the-exchangepublicfolder-data-collector-for-the-pf_folderownership-job)
    topic for additional information

- Assigned Ownership – Collects assigned owners

  - By default set to search all public folders. It can be scoped.
  - Probable Owner Calculation can be modified
  - See the
    [Scope the ExchangePublicFolder Data Collector for the PF_FolderOwnership Job](#scope-the-exchangepublicfolder-data-collector-for-the-pf_folderownership-job)
    topic for additional information

### Scope the ExchangePublicFolder Data Collector for the PF_FolderOwnership Job

The ExchangePublicFolder Data Collector can be scoped if desired. Follow the steps to modify the
query configuration.

**NOTE:** These instructions include information on modifying the calculation used to determine
probable ownership. Step 5 is only applicable to the Probable Ownership Query in the
PF_FolderOwnership Job.

**Step 1 –** Navigate to job’s **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the query and click **Query Properties**. The Query
Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Exchange Public Folder
Data Collector Wizard opens.

**CAUTION:** Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![Exchange Public Folder Data Collector Wizard Scope page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

**Step 4 –** To modify the scope of the search, navigate to the Scope page. The scope is configured
using the following settings:

- Choose Type of Public Folder to be queried – Select the type of public folder to be queried:

  - Default Public Folders – Select this option to access folders directly with client
    applications such as Microsoft Outlook. In its default configuration, Exchange System Manager
    displays these folders when a public folder tree is expanded.
  - System Public Folders – Select this option to access folders that cannot be directly accessed.
    Client applications, such as Microsoft Outlook, use these folders to store information such as
    free and busy data, offline address lists, and organizational forms. Other folders hold
    configuration information that is used by custom applications or by Exchange itself. The
    Public Folders tree contains extra system folders, such as the EFORMS REGISTRY folder, that do
    not exist in general-purpose public folder trees.

- Choose Scope of Public Folders to be queried – Select a scoping option for public folders:

  - All Public Folders – Select this option to return all public folders within the targeted
    environment
  - Selected Public Folders – Select this option to return only those public folders specified on
    the Scope page of the query
  - Selected Table – Select this option to return only those public folders within the table and
    field name specified on the Scope page of the query

  _Remember,_ the scoping options available vary based on the pre-defined query configurations.

See the
[ExchangePublicFolder: Scope](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

![Exchange Public Folder Data Collector Wizard Probable Owner Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/ownership/dcwizardprobableownersettings.webp)

**Step 5 –** To modify the probable owner calculation, navigate to the Probable Owner page. The
calculation is configured with the following defaults:

- Determine Owner – Use custom weights – Allows customization of factors that determine returned
  results
- Result weights – Customized when Use Custom Weights is selected under Determine Owner
- Output options – Configures the number of returned probable owners

See the
[ExchangePublicFolder: Probable Owner](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

**Step 6 –** Navigate to the Summary page. Click **Finish**.

The job applies the modification to future job executions.

## Analysis Tasks for the PF_FolderOwnership Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Ownership** >
**Collection** > **PF_FolderOwnership** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the PF_FolderOwnership Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/ownership/folderownershipanalysis.webp)

The following analysis task is selected by default:

- Post Process Collection – Applies an index and removes replica duplicates

# PF_Owners Job

The PF_Owners job is comprised of analysis and reports that focus on public folder ownership, and
most importantly the identification of each public folder's Most Probable Owner. The Most
Probable Owner is a unique algorithm built into the public folder data collector that is determined
based on folder ownership, content posted, and size of content posted.

## Analysis Tasks for the PF_Owners Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Ownership** >
**PF_Owners** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the PF_Owners Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/ownership/ownersanalysis.webp)

The following analysis tasks are selected by default:

- 00.Probable Owners – Creates the SA_PF_Ownership_ProbableOwners table, accessible under the job’s
  Results node
- 01.ID rate by Root Folder – Creates the SA_PF_Ownership_SuccessRate table, accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the PF_Owners job produces the
following pre-configured reports:

| Report                                                      | Description                                                                                                                                | Default Tags | Report Elements                                                                                                                                                                 |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identification Success (Probable Owner Identification Rate) | This report identifies folder trees with a high success rate of probable owners identified. This may help scope initial cleanup campaigns. | None         | This report is comprised of two elements: - Stacked Bar Chart – Displays probable owner identification success - Table – Provides details probable owner identification success |
| Probable Owners                                             | This report identifies probable owners for all scanned folders.                                                                            | None         | This report is comprised of one element: - Table – Provides details on probable owners                                                                                          |

# Permissions Job Group

The Permissions job group provides visibility into permissions applied to each public folder.

![Permissions Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Permissions job group are:

- [Collection > PF_EntitlementScans Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of data collection that focuses on public folder permissions
- [PF_Entitlements Job](/docs/accessanalyzer/11.6/solutions/exchange/public-folder-analysis.md)
  – Comprised of analyses and reports that provide visibility into permissions applied to each
  public folder within the Exchange environment

# PF_Entitlements Job

The PF_Entitlements job is comprised of analyses and reports that provide visibility into
permissions applied to each public folder within the Exchange environment.

## Analysis Tasks for the PF_Entitlements Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** >
**Permissions** > **PF_Entitlements** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the PF_EntitlementScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/permissions/entitlementsanalysis.webp)

The following analysis tasks are selected by default:

- 00.Default + Anonymous ACLs – Creates the SA_PF_Entitlements_DefaultAnonymous table accessible
  under the job’s Results node
- 01.No Explicit Permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- 02.Stale User Entitlements – Creates the SA_PF_Entitlements_StaleUserEntitlements table,
  accessible under the job’s Results node
- 03.Unresolved SID Summary – Creates the SA_PF_Entitlements_UnresolvedSIDSummary table, accessible
  under the job’s Results node
- 04.Unresolved SIDs – Creates the SA_PF_Entitlements_UnresolvedSIDDetails table, accessible under
  the job’s Results node
- AIC Import - PF Entitlements – Imports public folder entitlements to the Access Information Center

In addition to the tables and views created by the analysis tasks, the PF_Entitlements job produces
the following pre-configured reports:

| Report                                                        | Description                                                                                                                                                                                                                     | Default Tags | Report Elements                                                                                                                                                                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default and Anonymous Entitlement                             | Indicates entitlements that are explicitly assigned to the default or anonymous accounts across all public folders.                                                                                                             | None         | This report is comprised of two elements: - Stacked Bar Chart – Displays folder trees by default and anonymous entitlements - Table – Provides details on folder trees by default and anonymous entitlements                              |
| No Explicit Permissions (Leaf Folders with No Explicit Perms) | Provides all leaf Public Folders that only have Default, Anonymous, or unresolved SIDs as the explicit permissions, and have no child folders. These can potentially be deleted since they may not be accessed by active users. | None         | This report is comprised of three elements: - Bar Chart – Displays percent of enterprises with issues - Table – Provides details on percent of enterprises with issues - Table – Provides details on folders with no explicit permissions |
| Unresolved SIDs (Unresolved SID Entitlements)                 | This report identifies any places where unresolved SIDs have been given entitlements.                                                                                                                                           | None         | This report is comprised of two elements: - Bar Chart – Displays top level trees by unresolved entitlements - Table – Provides details on top level trees by unresolved entitlements                                                      |

# Collection > PF_EntitlementScans Job

The PF_EntitlementScans job is comprised of data collection that focuses on public folder
permissions.

![Collection > PF_EntitlementScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The PF_EntitlementScans job is located in the Collection job group.

## Queries for the PF_EntitlementScans Job

The PF_EntitlementScans job uses the ExchangePS Data Collector.

![Queries for the PF_EntitlementScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/permissions/entitlementscansquery.webp)

The following query is included in the PF_EntitlementScans job:

- Public Folder Permissions – Collects public folder permissions

  - By default set to search all public folders. It can be scoped.
  - See the
    [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/metrics-analysis.md#scope-the-exchangeps-data-collector)
    topic for additional information

## Analysis Tasks for the PF_EntitlementScans Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** >
**Permissions** > **Collection** > **PF_EntitlementScans** > **Configure** node and select
**Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the PF_EntitlementScans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/permissions/entitlementscansanalysis.webp)

The following analysis tasks are selected by default:

- Compress and Index Collection – Compresses and indexes the collection
- Strip Replicas from Reports – Updates table to remove replicas

# PF_Overview Job

The PF_Overview job is comprised of analyses and reports that provide a top level summary of each
parent public folder and correlates information from the message tracking logs to identify the last
time a public folder received mail.

## Analysis Tasks for the PF_Overview Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** >
**PF_Overview** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the PF_Overview Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/overviewanalysis.webp)

The following analysis tasks are selected by default:

- 00.Top Level Folder Summary – Creates the SA_PF_Overview_TopLevelRollup table, accessible under
  the job’s Results node
- 01.Public Folders Message Traffic – Creates the SA_PF_Overview_ExchangeTraffic table, accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the PF_Overview job produces the
following pre-configured reports:

| Report                     | Description                                                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public Folder Mail Traffic | This report shows which mail-enabled public folders have mail traffic.                                                      | None         | This report is comprised of two elements: - Bar Chart – Displays oldest public folders - Table – Provides details on oldest public folders                                                                      |
| Public Folder Summary      | This report shows where data is concentrated within the public folder environment, sorted by the largest top-level folders. | None         | This report is comprised of three elements: - Bar Chart – Displays public folder environment - Table – Provides details largest public folder trees - Table – Provides details on the public folder environment |

# Recommended Configurations for the 5. Public Folders Job Group

Dependencies

This job group requires the following items to be installed and configured on the Enterprise Auditor
Console:

- Microsoft MAPI CDO installed
- Enterprise Auditor MAPI CDO installed
- **Settings** > **Exchange** node configured

The following job groups need to be successfully run:

- .Active Directory Inventory Job Group
- .Entra ID Inventory Job Group
- Exchange > 1. HUB Metrics Job Group (Optional)

  - Provides data on public folder metrics for on-premises Exchange environments and the last time
    a distribution list received mail

Targeted Hosts

The Content, Growth and Size, and Permissions job groups use Remote PowerShell through the
ExchangePS Data Collector and the host list should be set to the following:

- Local Host

The **Ownership** > **Collection** job group needs to be set to run against the appropriate host
list:

- For Exchange 2010 or 2013 – Assign a single host from the 2010/2013 environment

  - This can be assigned at the Collection job group level if the host has been added to a custom
    host list
  - This can be assigned at the **Collection** > **PF_FolderOwnership** job level by adding the
    individual host at the **Configure** > **Hosts** node

  **NOTE:** The target host should be set to an on-premises Exchange server. Exchange Online is
  not support.

Connection Profile

A Connection Profile must be set directly on the collection jobs. See the
[Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for credential requirements and assign the Connection Profile to the following jobs:

- **Content** > **Collection** > **PF_ContentScans** Job
- **Growth and Size** > **Collection** > **PF_FolderScans** Job
- **Permissions** > **Collection** > **PF_EntitlementScans** Job

See the
[MAPI-Based Data Collector Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for credential requirements and assign the Connection Profile to the following job:

- **Ownership** > **Collection** > **PF_FolderOwnership** Job

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

This job group has been designed to run weekly or bi-weekly to collect information about public
folders in the environment. This job group may be run more frequently depending on the size of the
public folders database and public folder count.

**_RECOMMENDED:_** Run this job group on Fridays at 8:00 PM.

History Retention

History retention should not be enabled on this job group. History is kept through analysis tasks.
Modify the following analysis task to customize the amount of history which is kept:

| Job Name      | Analysis Task Name    | Default History |
| ------------- | --------------------- | --------------- |
| PF_FolderSize | SET HISTORY RETENTION | 3 Months        |

Query Configuration

The 5. Public Folders job group is designed to be run with the default query configurations.
However, the following queries can be modified:

- **Content** > **Collection** > **PF_ContentScans** Job – **PF Contents** Query
- **Growth and Size** > **Collection** > **PF_FolderScans** Job – **PF Size & Msg Counts** Query
- **Ownership** > **Collection** > **PF_FolderOwnership** Job – **Probable Ownership** Query
- **Ownership** > **Collection** > **PF_FolderOwnership** Job – **Assigned Ownership** Query
- **Permissions** > **Collection** > **PF_EntitlementScans** Job – **Public Folder Permissions**
  Query

No other queries should be modified.

Analysis Configuration

The 5. Public Folders job group should be run with the default analysis configurations.

**CAUTION:** Most of these analysis tasks are preconfigured and should never be modified or
deselected. There are some that are deselected by default, as they are for troubleshooting purposes.

The following analysis tasks should not be deselected, but their parameters can be modified:

- **Growth and Size** > **PF_FolderSize** Job – **02.SET HISTORY RETENTION** Analysis Task

Workflow

**Step 1 –** Set the host on the **Ownership** > **Collection** job group.

**Step 2 –** Set a Connection Profile on the jobs that run data collection.

**Step 3 –** Schedule the 5. Public Folders job group to run weekly, biweekly, or as desired.

**Step 4 –** Review the reports generated by the jobs.
