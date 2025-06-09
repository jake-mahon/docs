# 4-SPSEEK\_BulkImport Job

This job is responsible for retrieving the Tier 2 SPDLP database information and importing it to the SQL Server where Access Analyzer stores data.

## Queries for the 4-SPSEEK\_BulkImport Job

The 4-SPSEEK Bulk Import Job uses the SharePoint Access Data Collector for the following query:

![Query Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spseekbulkimportquery.png)

The query for the 4-SPSEEK Bulk Import Job is:

- Bulk Import – Imports scan data into the SQL Server

### Configure 4-SPSEEK\_BulkImport Job

The 4-SPSEEK\_BulkImport Job has been preconfigured to run with the default settings with the SPAA Data Collector category of __Bulk Import Sensitive Content Scan Results__, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job. Follow the steps to set any desired customizations.

__Step 1 –__ Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __4-SPSEEK\_BulkImport__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__.

![Bulk Import Settings](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/bulkimportsettings.png)

__Step 4 –__ On the [SPAA: Bulk Import Settings](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/bulkimportsettings.md) page, the __Set Host Identifier__ is not configured by default. Click __Next__.

__NOTE:__ Unless SQL Server Replication is used, it should not be necessary to adjust the __Host Identifier__ seed.

__CAUTION:__ Do not configure the options on the Results page.

__Step 5 –__ On the Results page, all Available Properties are selected by default. Click __Next__.

__Step 6 –__ On the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 4-SPSEEK\_BulkImport Job has now been customized.

## Analysis Tasks for 4-SPSEEK\_BulkImport Job

Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __4-SPSEEK\_BulkImport__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ The analysis tasks are preconfigured for this job. Never modify or deselect the selected analysis tasks.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spseekbulkimportanalysis.png)

The default analysis tasks are:

- 1. Update data types – Access Analyzer uses custom SQL data types to render data. This analysis creates updates to those data types.
- 2. Import new functions (for SA Core) – Creates functions used in the SharePoint Solution
- 3. Import new functions (for SA SPAA) – Creates functions used in the SharePoint Solution
- 4. Create exception schema – Creates the SA\_SPAA\_Exceptions table
- 5. Create DLP views – Creates the SA\_SPDLP\_MatchesView
- 6. Create exceptions view – Creates the SA\_SPAA\_ExceptionsView

The following analysis task is not selected by default, but can be enabled:

- Display Match Hits – Displays the SA\_SPDLP\_MatchesHitsView within Access Analyzer.
