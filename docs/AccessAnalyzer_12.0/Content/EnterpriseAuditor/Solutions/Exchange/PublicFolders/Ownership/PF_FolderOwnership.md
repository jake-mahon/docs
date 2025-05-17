---
sidebar_position: 5591
title: Collection > PF_FolderOwnership Job
---

# Collection > PF\_FolderOwnership Job

The PF\_FolderOwnership job is comprised of data collection that focuses on collecting each public folder’s owner and identifying the Most Probable Owner. The Most Probable Owner is a unique algorithm built into the public folder data collector that is determined based on folder ownership, content posted, and size of content posted. Modifications can be made to the data collector to change the way the Most Probable Owner is determined.

![Collection > PF_FolderOwnership Job in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Ownership/CollectionJobsTree.png "Collection > PF_FolderOwnership Job in the Jobs Tree")

The PF\_FolderOwnership job is located in the Collection job group.

## Queries for the PF\_FolderOwnership Job

The PF\_FolderOwnership job uses the ExchangePublicFolder Data Collector.

![Queries for the PF_FolderOwnership Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Ownership/FolderOwnershipQuery.png "Queries for the PF_FolderOwnership Job")

The following queries are included in the PF\_FolderOwnership job:

* Probable Ownership – Collects and calculates probable owners

  * By default set to search all public folders. It can be scoped.
  * See the [Scope the ExchangePublicFolder Data Collector for the PF\_FolderOwnership Job](#_Scope_the_ExchangePublicFolder "Scope the ExchangePublicFolder Data Collector for the PF_FolderOwnership Job") topic for additional information
* Assigned Ownership – Collects assigned owners

  * By default set to search all public folders. It can be scoped.
  * Probable Owner Calculation can be modified
  * See the [Scope the ExchangePublicFolder Data Collector for the PF\_FolderOwnership Job](#_Scope_the_ExchangePublicFolder "Scope the ExchangePublicFolder Data Collector for the PF_FolderOwnership Job") topic for additional information

### Scope the ExchangePublicFolder Data Collector for the PF\_FolderOwnership Job

The ExchangePublicFolder Data Collector can be scoped if desired. Follow the steps to modify the query configuration.

**NOTE:** These instructions include information on modifying the calculation used to determine probable ownership. Step 5 is only applicable to the Probable Ownership Query in the PF\_FolderOwnership Job.

**Step 1 –** Navigate to job’s **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the query and click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Exchange Public Folder Data Collector Wizard opens.

**CAUTION:** Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![Exchange Public Folder Data Collector Wizard Scope page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ExchangePublicFolder/Scope.png "Exchange Public Folder Data Collector Wizard Scope page")

**Step 4 –** To modify the scope of the search, navigate to the Scope page. The scope is configured using the following settings:

* Choose Type of Public Folder to be queried – Select the type of public folder to be queried:

  * Default Public Folders – Select this option to access folders directly with client applications such as Microsoft Outlook. In its default configuration, Exchange System Manager displays these folders when a public folder tree is expanded.
  * System Public Folders – Select this option to access folders that cannot be directly accessed. Client applications, such as Microsoft Outlook, use these folders to store information such as free and busy data, offline address lists, and organizational forms. Other folders hold configuration information that is used by custom applications or by Exchange itself. The Public Folders tree contains extra system folders, such as the EFORMS REGISTRY folder, that do not exist in general-purpose public folder trees.
* Choose Scope of Public Folders to be queried – Select a scoping option for public folders:

  * All Public Folders – Select this option to return all public folders within the targeted environment
  * Selected Public Folders – Select this option to return only those public folders specified on the Scope page of the query
  * Selected Table – Select this option to return only those public folders within the table and field name specified on the Scope page of the query

  *Remember,* the scoping options available vary based on the pre-defined query configurations.

See the [ExchangePublicFolder: Scope](../../../../Admin/DataCollector/ExchangePublicFolder/Scope "ExchangePublicFolder: Scope") topic for additional information.

![Exchange Public Folder Data Collector Wizard Probable Owner Settings page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Ownership/DCWizardProbableOwnerSettings.png "Exchange Public Folder Data Collector Wizard Probable Owner Settings page")

**Step 5 –** To modify the probable owner calculation, navigate to the Probable Owner page. The calculation is configured with the following defaults:

* Determine Owner – Use custom weights – Allows customization of factors that determine returned results
* Result weights – Customized when Use Custom Weights is selected under Determine Owner
* Output options – Configures the number of returned probable owners

See the [ExchangePublicFolder: Probable Owner](../../../../Admin/DataCollector/ExchangePublicFolder/ProbableOwner "ExchangePublicFolder: Probable Owner") topic for additional information.

**Step 6 –** Navigate to the Summary page. Click **Finish**.

The job applies the modification to future job executions.

## Analysis Tasks for the PF\_FolderOwnership Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Ownership** > **Collection** > **PF\_FolderOwnership** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the PF_FolderOwnership Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Ownership/FolderOwnershipAnalysis.png "Analysis Tasks for the PF_FolderOwnership Job")

The following analysis task is selected by default:

* Post Process Collection – Applies an index and removes replica duplicates