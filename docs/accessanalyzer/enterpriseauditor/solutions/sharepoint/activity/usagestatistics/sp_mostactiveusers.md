# SP\_MostActiveUsers Job

This job identifies the most active users from the last 30 days on all monitored SharePoint servers with a view of Reads, Updates, Deletes, and Permission changes performed by a user.

## Analysis Tasks for the SP\_MostActiveUsers Job

Navigate to the __Jobs__ > __SharePoint__ > __7.Activity__ > __Usage Statistics__ > __SP\_MostActiveUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_MostActiveUsers Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/usagestatistics/mostactiveusersanalysis.png)

The default analysis task is:

- Most Active Users Last 30 Days – SA\_SPAC\_MostActiveUsers\_Last30Days table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_MostActiveUsers Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Most Active Users – Last 30 Days | This report identifies the top users for the past 30 days. [View], [Delete], [Update], [Delete] fields reflect the number of unique operations of each type that was performed by the user for this time frame. Unique Resources are the number of distinct resources that have had activity during that time. | None | This report is comprised of two elements:   - Bar Chart – Displays information on top users by operation count - Table – Provides details on top users by operation count |
