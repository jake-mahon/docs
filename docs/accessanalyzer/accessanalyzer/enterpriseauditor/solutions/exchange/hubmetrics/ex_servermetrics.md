# EX\_ServerMetrics Job

The EX\_ServerMetrics Job provides visibility into server mail flow statistics, such as, sent, received, journaling, transport, and NDR counts and sizes.

## Analysis Tasks for the EX\_ServerMetrics Job

View the analysis tasks by navigating to the __Exchange__ > __1. HUB Metrics__ > __EX\_ServerMetrics__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_ServerMetrics Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/servermetricsanalysis.png)

The following analysis tasks are selected by default:

- 01. Transport – Creates the SA\_EX\_ServerMetrics\_Transport table, accessible under the job’s Results node
- 02. NDRs – Creates the SA\_EX\_ServerMetrics\_NDRs table, accessible under the job’s Results node
- 03. Journaling – Creates the SA\_EX\_ServerMetrics\_Journaling table, accessible under the job’s Results node
- 04. Yesterday – Creates the SA\_EX\_ServerMetrics\_Yesterday table, accessible under the job’s Results node
- 05. Last 7 Days – Creates the SA\_EX\_ServerMetrics\_Last7Days table, accessible under the job’s Results node
- 06. Last 30 Days – Creates the SA\_EX\_ServerMetrics\_Last30Days table, accessible under the job’s Results node
- 07. Historical Statistics – Creates the SA\_EX\_ServerMetrics\_HistoricalStatistics table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_ServerMetrics Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Journaling (Journaling Traffic) | This report summarizes journaling message traffic across the organization. | None | This report is comprised of two elements:   - Bar Chart – Displays top servers by journaling messages (last 30 days) - Table – Provides details on top servers by journaling messages (last 30 days) |
| NDRs (Exchange NDRs) | This report shows NDR counts broken down by server. | None | This report is comprised of two elements:   - Bar Chart – Displays top servers by NDRs (last 30 days) - Table – Provides details on top servers by NDRs (last 30 days) |
| Server Traffic (Top Servers by Traffic) | This report summarizes server traffic across the organization for the Last 30 Days. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays top servers by total traffic - Table – Provides details top servers by total traffic |
| Transport (Transport Messages) | This report summarizes transport messages across the exchange organization. | None | This report is comprised of two elements:   - Bar Chart – Displays top servers by transport messages (last 30 days) - Table – Provides details on top servers by transport messages (last 30 days) |
