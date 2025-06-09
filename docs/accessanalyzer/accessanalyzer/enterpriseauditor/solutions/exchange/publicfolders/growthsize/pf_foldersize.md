# PF\_FolderSize Job

The PF\_FolderSize job provides details related to public folder sizing and growth.

## Analysis Tasks for the PF\_FolderSize Job

View the analysis tasks by navigating to the __Exchange__ > __5. Public Folders__ > __Growth and Size__ > __PF\_FolderSize__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the PF_FolderSize Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/growthsize/foldersizeanalysis.png)

The following analysis tasks are selected by default:

- 01.Create History Table – Creates the SA\_PF\_FolderSize\_History table, accessible under the job’s Results node
- 02.SET HISTORY RETENTION – Sets retention period in months

  - The default is 3 months. It can be modified.
  - See the [Exchange History Retention](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Exchange-History-Retention) topic for additional information
- 03.Latest Run Per Folder – Creates the SA\_PF\_FolderSize\_Latest table, accessible under the job’s Results node
- 04.30 Day Growth – Creates the SA\_PF\_FolderSize\_Growth table, accessible under the job’s Results node

The following analysis task clears table data from data collection and analysis jobs. This analysis task should remain cleared unless specifically needed:

__CAUTION:__ Do not select the __00. Delete all Historical Data__ option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

- 00.Delete all Historical Data
  - See the [Troubleshooting Data Collection](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Troubleshooting-Data-Collection) topic for additional information

In addition to the tables and views created by the analysis tasks, the PF\_FolderSize job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Public Folder Size and Growth | This report shows the largest public folders and percent change over 30 days. | None | This report is comprised of two elements:   - Bar Chart – Displays largest public folders - Table – Provides details on largest public folders |
