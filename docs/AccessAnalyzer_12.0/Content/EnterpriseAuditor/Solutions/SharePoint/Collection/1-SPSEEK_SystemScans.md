---
sidebar_position: 5141
title: 1-SPSEEK_SystemScans Job
---

# 1-SPSEEK\_SystemScans Job

This job is responsible for building the Tier2 SPDLP database repositories, which contain information regarding sensitive content that exists within SharePoint.

## Queries for the 1-SPSEEK\_SystemScans Job

The 1-SPSEEK SystemScans Job uses the SharePoint Access Data Collector for the following query:

![The query for the 1-SPSEEK SystemScans Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/SPSEEKSystemScansQuery.png "The query for the 1-SPSEEK SystemScans Job")

The query for the 1-SPSEEK SystemScans Job is:

* SharePoint Scan – Scans SharePoint for sensitive content

### Configure the Query for the 1-SPSEEK\_SystemScans Job

The 1-SPSEEK\_SystemScans Job has been preconfigured to run with the default settings using the SPAA Data Collector category of Scan for Sensitive Content, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job.

**CAUTION:** Users should not change scans in a way that would result in less data being returned on a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in the Tier 2 database and subsequently removed from the Tier 1 database.

Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **SharePoint** > **0.Collection** > **1-SPSEEK\_SystemScans** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window displays.

**Step 3 –** Select the **Data Source** tab, and click **Configure**.

![SharePoint Data Collection Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/DataCollectionSettingsSPSEEK.png "SharePoint Data Collection Settings")

**Step 4 –** On the [SPAA: SharePoint Data Collection Settings](../../../Admin/DataCollector/SPAA/Settings "SPAA: SharePoint Data Collection Settings") page, customize as desired and click **Next**.

![Scan Scoping Options](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/ScanScopingOptions.png "Scan Scoping Options")

**Step 5 –** On the [SPAA: Scan Scoping Options](../../../Admin/DataCollector/SPAA/ScanScopingOptions "SPAA: Scan Scoping Options") page, no web applications or site collections have been added. If desired, limit the scope of the scan to specific web applications or site collections. Click **Next**.

![Additional Scoping](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/AdditionalScopingSPSEEK.png "Additional Scoping")

**Step 6 –** On the [SPAA: Additional Scoping](../../../Admin/DataCollector/SPAA/AdditionalScoping "SPAA: Additional Scoping") page, **Limit scanned depth to:** is selected with the default set at **2** levels. Customize this setting as desired and click **Next**.

![Agent Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/AgentSettings.png "Agent Settings")

**Step 7 –** On the [SPAA: Agent Settings](../../../Admin/DataCollector/SPAA/AgentSettings "SPAA: Agent Settings") page, use the default settings unless an agent scan mode is desired. Click **Next**.

![DLP Audit Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/DLPAuditSettingsSPSEEK.png "DLP Audit Settings")

**Step 8 –** On the [SPAA: DLP Audit Settings](../../../Admin/DataCollector/SPAA/DLPAuditSettings "SPAA: DLP Audit Settings") page, the default setting is to **Don’t process files larger than: 2 MB** and to **Scan typical documents (recommended, fastest)**. These settings can be customized to adjust for scan time or database size. Click **Next**.

**NOTE:** The typical documents for this setting are files with the following extensions: .doc, .docx, .msg, .odt, .pages, .rtf, .wpd, .wps, .abw, .bib, .dotx, .eml, .fb2, .fdx, .gdoc, .lit, .sig, .sty, .wps, .wpt, .yml, .tex, .pdf, .csv, .xlr, .xls, .xlsx, .gsheet, .nb, .numbers, .ods, .qpw, .sdc, .wks, .xlsb, .xltm, .xltx, .aws, .fods, .ots, .rdf, .sxc, .uos, .xlsm, .txt

![Select DLP Criteria Page of the SPAA Data Collector Wizard](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/SelectDLPCriteriaSPSEEK.png "Select DLP Criteria Page of the SPAA Data Collector Wizard")

**Step 9 –** On the [SPAA: Select DLP Criteria](../../../Admin/DataCollector/SPAA/SelectDLPCriteria "SPAA: Select DLP Criteria") page, add or remove criteria as desired by either manually selecting criteria or using the **Select All** and **Clear All** buttons. Click **Next**. *(Optional)* To create custom criteria, see the [Sensitive Data Criteria Editor](../../../SensitiveDataDiscovery/CriteriaEditor/Overview "Sensitive Data Criteria Editor") topic for additional information.

**CAUTION:** Do not configure the options on the Results page.

**Step 10 –** On the Results page, all Available Properties are selected by default. Click **Next**.

**Step 11 –** On the Summary page, click **Finish** to save any setting modifications or click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-SPSEEK\_SystemScans Job has now been customized.