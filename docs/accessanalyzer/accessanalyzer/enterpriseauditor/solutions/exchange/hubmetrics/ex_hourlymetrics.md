# EX\_HourlyMetrics Job

The EX\_HourlyMetrics Job provides visibility into how much mail-flow the organization sends and receives each hour.

## Analysis Tasks for the EX\_HourlyMetrics Job

View the analysis tasks by navigating to the __Exchange__ > __1. HUB Metrics__ > __EX\_HourlyMetrics__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_HourlyMetrics Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/hourlymetricsanalysis.png)

The following analysis tasks are selected by default:

- 01. Server Averages – Creates the SA\_EX\_HourlyMetrics\_ServerAverages table, accessible under the job’s Results node
- 02. Org Averages – Creates the SA\_EX\_HourlyMetrics\_OrgAverages table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_HourlyMetrics Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Hourly Traffic (Average Hourly Traffic) | This report identifies which hours during the day have the most traffic by count of messages. | None | This report is comprised of two elements:   - Column Chart – Displays average hourly traffic by enterprise - Table – Provides details on average hourly traffic by server |
| Hourly Volume (Average Hourly Volume) | This report identifies which hours during the day have the most traffic by volume of messages. | None | This report is comprised of two elements:   - Column Chart – Displays average hourly volume (MB) - Table – Provides details on server averages |
