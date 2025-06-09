# EX\_DLMetrics Job

The EX\_DLMetrics Job provides information around distribution list usage.

## Analysis Tasks for the EX\_DLMetrics Job

View the analysis tasks by navigating to the __Exchange__ > __1. HUB Metrics__ > __EX\_DLMetrics__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_DLMetrics Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/dlmetricsanalysis.png)

The following analysis tasks are selected by default:

- 01. DL Metrics – Creates the SA\_EX\_DLMetrics\_Details table, accessible under the job’s Results node
- 02. Historical Metrics – Creates the SA\_EX\_DLMetrics\_HistoricalStatistics table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_DLMetrics Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Distribution Lists by Message Count (Most Active DLs by Message Count) | This report identifies the most active distribution lists by count of messages sent. | None | This report is comprised of two elements:   - Bar Chart – Displays top distribution lists by message count (last 30 days) - Table – Provides details on top distribution lists by message count (last 30 days) |
| Distribution Lists by Message Volume (Most Active DLs by Message Volume) | This report identifies the most active distribution lists by volume of messages sent. | None | This report is comprised of two elements:   - Bar Chart – Displays top distribution lists by message volume (last 30 days) - Table – Provides details on distribution lists by message volume (last 30 days) |
