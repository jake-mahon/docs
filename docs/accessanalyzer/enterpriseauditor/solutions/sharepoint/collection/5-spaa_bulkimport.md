# 5-SPAA_BulkImport Job

This job is responsible for retrieving the SPAA Tier 2 database information and import it to the Access Analyzer SQL database.

## Queries for the 5-SPAA_BulkImport Job

The 5-SPAA_BulkImport Job uses the SharePoint Access Data Collector for the following query:

![spaabulkimportquery](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spaabulkimportquery.webp)

The query for the 5-SPAA_BulkImport Job is:

- Bulk Import – Imports scan data into the SQL Server

### Configure 5-SPAA_BulkImport Job

The 5-SPAA_BulkImport Job has been preconfigured to run with the default settings with the SPAA Data Collector category of Bulk Import Access Scan Results, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job. Follow the steps to set any desired customizations.

__Step 1 –__ Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __2-SPAA_BulkImport__ > __Configure__ node and select the __Queries__ node.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__.

![Bulk Import Settings](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/bulkimportsettings.webp)

__Step 4 –__ On the [SPAA: Bulk Import Settings](../../../admin/datacollector/spaa/bulkimportsettings.md) page, the __Set Host Identifier__ is not configured by default. Click __Next__.

__NOTE:__ Unless SQL Server Replication is used, it should not be necessary to adjust the __Host Identifier__ seed.

__CAUTION:__ Do not configure the options on the Results page.

__Step 5 –__ On the Results page, all Available Properties are selected by default. Click __Next__.

__Step 6 –__ On the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 5-SPAA_BulkImport Job has now been customized.

## Analysis Tasks for 5-SPAA_BulkImport Job

Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __2-SPAA_BulkImport__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ The analysis tasks are preconfigured for this job. Never modify or deselect the selected analysis tasks.

![Analysis Selection](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spaabulkimportanalysis.webp)

The default analysis tasks are:

- 0. TryConvert for UniqueIdentifiers – Simulates Try_Convert functionality for SQL Server 2008 and below
- 1. Update data types – Access Analyzer uses custom SQL data types to render data. This analysis creates updates to those data types.
- 2. Import new functions (for SA Core) – Creates functions used in the SharePoint Solution
- 3. Import new functions (for SA SPAA) – Creates functions used in the SharePoint Solution
- 4. Create exception schema – Creates the SA_SPAA_Exceptions table
- 5. Create views – Creates views visible through the Results node
