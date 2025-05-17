---
sidebar_position: 5610
title: EX_PublicFolder_SDD Job
---

# EX\_PublicFolder\_SDD Job

The EX\_PublicFolder\_SDD job locates sensitive data found in public folders in the Exchange environment.

## Queries for the EX\_PublicFolder\_SDD Job

The EX\_PublicFolder\_SDD job uses the EWSPublicFolder Data Collector.

![Queries for the EX_PublicFolder_SDD Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/PublicFolderSDDQuery.png "Queries for the EX_PublicFolder_SDD Job")

The following query is included in the EX\_PublicFolder\_SDD job:

* Exchange Sensitive Data Discovery – Scans Exchange public folders for specified sensitive data

  * Set to search all public folders. It can be scoped.
  * Default sensitive data criteria includes:

    * Birth Records
    * Credit Cards
    * Passwords
    * Tax Forms
    * US SSN
  * See the [Configure the EX\_PublicFolder\_SDD Query](#Configure_EX_PublicFolder_SDD_Query "Configure the EX_PublicFolder_SDD Query") topic for additional information

### Configure the EX\_PublicFolder\_SDD Query

The Exchange Sensitive Data Discovery query has been preconfigured to run with the EWSPublicFolder Data Collector to scan for sensitive data.

**Step 1 –** Navigate to the **Exchange** > **7. Sensitive Data** > **0. Collection** > **EX\_EWSPublicFolder\_SDD** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select **Exchange Sensitive Data Discovery** and click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The EWS Public Folder Data Collector Wizard opens.

**CAUTION:** Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![EWS Public Folder Data Collector Wizard SDD Options page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/EWSPublicFolder/SDDOptions.png "EWS Public Folder Data Collector Wizard SDD Options page")

**Step 4 –** To enable storage of discovered sensitive data, navigate to the SDD Options page. Sensitive data matches can be limited to reduce storage space. See the [EWSPublicFolder: SDD Options](../../../../Admin/DataCollector/EWSPublicFolder/SDDOptions "EWSPublicFolder: SDD Options") topic for additional information.

**NOTE:** By default, discovered sensitive data strings are not stored in the Access Analyzer database.

![EWS Public Folder Data Collector Wizard Criteria page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/EWSPublicFolder/Criteria.png "EWS Public Folder Data Collector Wizard Criteria page")

**Step 5 –** To modify criteria, navigate to the Criteria page. Add or remove criteria as desired. See the [EWSPublicFolder: Critieria](../../../../Admin/DataCollector/EWSPublicFolder/Critieria "EWSPublicFolder: Critieria") topic for additional information.

* (Optional) To create custom criteria, see the [Sensitive Data Criteria Editor](../../../../SensitiveDataDiscovery/CriteriaEditor/Overview "Sensitive Data Criteria Editor") topic for additional information

![EWS Public Folder Data Collector Wizard Filter Settings page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/DCWizard/PublicFolderFilterSettings.png "EWS Public Folder Data Collector Wizard Filter Settings page")

**Step 6 –** To filter the scan to specific mailbox folders, navigate to the Filter page. Include or exclude folders and attachments as desired. See the [EWSPublicFolder: Filter](../../../../Admin/DataCollector/EWSPublicFolder/Filter "EWSPublicFolder: Filter") topic for additional information.

* To modify the threshold for message size, set the **Limit message size to** value as desired. The default is 2000 KB.
* To modify the threshold for large attachment size, set the **Limit attachment size to** value as desired. The default is 2000 KB.

![EWS Public Folder Data Collector Wizard Results page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/DCWizard/PublicFolderResults.png "EWS Public Folder Data Collector Wizard Results page")

**Step 7 –** To select which properties are gathered based on category, navigate to the Results page.  See the [EWSPublicFolder: Results](../../../../Admin/DataCollector/EWSPublicFolder/Results "EWSPublicFolder: Results") topic for additional information.

**NOTE:** By default, all categories are selected under sensitive data.

**Step 8 –** Navigate to the Summary page, click **Finish** to save any setting modifications or click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window

The job applies the modification to future job executions.