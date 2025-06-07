# 6-SPAC\_BulkImport Job

This job is responsible for retrieving the SPAC Tier 2 database information and import it to the Access Analyzer SQL database.

## Queries for the 6-SPAC\_BulkImport Job

The 6-SPAC\_BulkImport Job uses the SharePoint Access Data Collector for the following query:

![Query Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spacbulkimportquery.png)

The query for the 6-SPAC\_BulkImport Job is:

- Bulk Import – Imports scan data into the SQL Server

### Configure the Query for the 6-SPAC\_BulkImport Job

The 6-SPAC\_BulkImport Job has been preconfigured to run with the default settings with the category of Bulk Import SharePoint Activity Scan Results, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job. Follow the steps to set any desired customizations.

__Step 1 –__ Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __2-SPAC\_BulkImport__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__.

![Bulk Import Settings](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/bulkimportsettings.png)

__Step 4 –__ On the [SPAA: Bulk Import Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/bulkimportsettings.md) page, the __Set Host Identifier__ is not configured by default. Click __Next__.

__NOTE:__ Unless SQL Server Replication is used, it should not be necessary to adjust the __Host Identifier__ seed.

__CAUTION:__ Do not configure the options on the Results page.

__Step 5 –__ On the Results page, all Available Properties are selected by default. Click __Next__.

__Step 6 –__ On the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 6-SPAC\_BulkImport Job has now been customized.

## Analysis Tasks for 2-SPAC\_BulkImport Job

Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __6-SPAC\_BulkImport__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ The analysis tasks are preconfigured for this job. Never modify or deselect the selected analysis tasks.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spacbulkimportanalysis.png)

The default analysis tasks are:

- 1. Create Event Name Table – Creates the SA\_SPAC\_EventNames table associated with SPAC
- 2. Create Views – Creates the views associated with SPAC
