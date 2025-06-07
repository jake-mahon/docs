# SP\_MostActiveSites Job

This job identifies the top five most active monitored sites.

## Analysis Tasks for the SP\_MostActiveSites Job

Navigate to the __Jobs__ > __SharePoint__ > __7.Activity__ > __Usage Statistics__ > __SP\_MostActiveSites__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_MostActiveSites Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/activity/usagestatistics/mostactivesitesanalysis.png)

The default analysis task is:

- Most Active Sites Last 30 Days – Creates the SA\_SPAC\_MostActiveSites\_Last30Days table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_MostActiveSites Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Most Active Sites – Last 30 Days | This report identifies the top five most active sites for the past 30 days. [Reads], [Updates], [Deletes], [Permission Changes] fields reflect the number of unique operations of each type that was performed on the site for this time frame. Unique Resources Accessed, number of active user performing operations on the site, as well as whether or not the active site contains sensitive information. | None | This report is comprised of two elements:   - Bar Chart – Displays information on most active sites by event count - Table – Provides details on most active sites by event count |
