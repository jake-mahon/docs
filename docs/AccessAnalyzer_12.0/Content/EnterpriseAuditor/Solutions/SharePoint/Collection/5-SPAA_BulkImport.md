---
sidebar_position: 5136
title: 5-SPAA_BulkImport Job
---

# 5-SPAA\_BulkImport Job

This job is responsible for retrieving the SPAA Tier 2 database information and import it to the Access Analyzer SQL database.

## Queries for the 5-SPAA\_BulkImport Job

The 5-SPAA\_BulkImport Job uses the SharePoint Access Data Collector for the following query:

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/SPAABulkImportQuery.png)

The query for the 5-SPAA\_BulkImport Job is:

* Bulk Import – Imports scan data into the SQL Server

### Configure 5-SPAA\_BulkImport Job

The 5-SPAA\_BulkImport Job has been preconfigured to run with the default settings with the SPAA Data Collector category of Bulk Import Access Scan Results, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job. Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **SharePoint** > **0.Collection** > **2-SPAA\_BulkImport** > **Configure** node and select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window displays.

**Step 3 –** Select the **Data Source** tab, and click **Configure**.

![Bulk Import Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/BulkImportSettings.png "Bulk Import Settings")

**Step 4 –** On the [SPAA: Bulk Import Settings](../../../Admin/DataCollector/SPAA/BulkImportSettings "SPAA: Bulk Import Settings") page, the **Set Host Identifier** is not configured by default. Click **Next**.

**NOTE:** Unless SQL Server Replication is used, it should not be necessary to adjust the **Host Identifier** seed.

**CAUTION:** Do not configure the options on the Results page.

**Step 5 –** On the Results page, all Available Properties are selected by default. Click **Next**.

**Step 6 –** On the Summary page, click **Finish** to save any setting modifications or click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 5-SPAA\_BulkImport Job has now been customized.

## Analysis Tasks for 5-SPAA\_BulkImport Job

Navigate to the **Jobs** > **SharePoint** > **0.Collection** > **2-SPAA\_BulkImport** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** The analysis tasks are preconfigured for this job. Never modify or deselect the selected analysis tasks.

![Analysis Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Collection/SPAABulkImportAnalysis.png "Analysis Selection")

The default analysis tasks are:

* 0. TryConvert for UniqueIdentifiers – Simulates Try\_Convert functionality for SQL Server 2008 and below
* 1. Update data types – Access Analyzer uses custom SQL data types to render data. This analysis creates updates to those data types.
* 2. Import new functions (for SA Core) – Creates functions used in the SharePoint Solution
* 3. Import new functions (for SA SPAA) – Creates functions used in the SharePoint Solution
* 4. Create exception schema – Creates the SA\_SPAA\_Exceptions table
* 5. Create views – Creates views visible through the Results node