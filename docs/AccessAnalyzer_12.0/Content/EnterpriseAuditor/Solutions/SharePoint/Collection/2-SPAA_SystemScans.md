---
sidebar_position: 5134
title: 2-SPAA_SystemScans Job
---

# 2-SPAA\_SystemScans Job

The job collects information on permissions, users, and groups to determine who has access to each structural level in the SharePoint farm.

## Queries for the 2-SPAA\_SystemScans Job

The 2-SPAA\_SystemScans Job uses the SharePoint Access Data Collector for the following query:

![Query Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/SPAASystemScansQuery.png "Query Selection")

The query for the 2-SPAA\_SystemScans Job is:

* Scan SharePoint – Scans SharePoint systems

### Configure 2-SPAA\_SystemScans Job

The 2-SPAA\_SystemScans Job has been preconfigured to run with the default settings using the SPAA Data Collector category of Scan SharePoint Access, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job.

**CAUTION:** Users should not change scans in a way that would result in less data being returned on a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in the Tier 2 database and subsequently removed from the Tier 1 database.

Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **SharePoint** > **0.Collection** > **1-SPAA\_SystemScans** > **Configure** node and select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window displays.

**Step 3 –** Select the **Data Source** tab, and click **Configure**.

![SharePoint Data Collection Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/DataCollectionSettingsSPAA.png "SharePoint Data Collection Settings")

**Step 4 –** On the [SPAA: SharePoint Data Collection Settings](../../../Admin/DataCollector/SPAA/Settings "SPAA: SharePoint Data Collection Settings") page, customize as desired and click **Next**.

![Scan Scoping Options](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/ScanScopingOptions.png "Scan Scoping Options")

**Step 5 –** On the [SPAA: Scan Scoping Options](../../../Admin/DataCollector/SPAA/ScanScopingOptions "SPAA: Scan Scoping Options") page, no web applications or site collections have been added. If desired, limit the scope of the scan to specific web applications or site collections. Click **Next**.

![Additional Scoping](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/AdditionalScopingSPAA.png "Additional Scoping")

**Step 6 –** On the [SPAA: Additional Scoping](../../../Admin/DataCollector/SPAA/AdditionalScoping "SPAA: Additional Scoping") page, **Limit scanned depth to:** is selected with the default set at **2** levels. Customize this setting as desired and click **Next**.

![Agent Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/AgentSettings.png "Agent Settings")

**Step 7 –** On the [SPAA: Agent Settings](../../../Admin/DataCollector/SPAA/AgentSettings "SPAA: Agent Settings") page, use the default settings unless an agent scan mode is desired. Click **Next**.

**CAUTION:** Do not configure the options on the Results page.

**Step 8 –** On the Results page, all Available Properties are selected by default. Click **Next**.

**Step 9 –** On the Summary page, click **Finish** to save any setting modifications or click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-SPAA\_SystemScans Job has now been customized.