# Outlook Anywhere > EX_RPCTraffic Job

The EX_RPCTraffic job provides visibility into Outlook Anywhere or RPC\HTTPs Traffic in the organization.

![Outlook Anywhere > EX_RPCTraffic Job in the Jobs Tree](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/outlookanywherejobstree.webp)

The EX_RPCTraffic job is located in the Outlook Anywhere job group.

## Analysis Tasks for the EX_RPCTraffic Job

View the analysis tasks by navigating to the __Exchange__ > __2. CAS Metrics__ > __Outlook Anywhere__ > __EX_RPCTraffic__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_RPCTraffic Job](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/rpctrafficanalysis.webp)

The following analysis tasks are selected by default:

- 01. RPC View – Creates the SA_EX_RPCTraffic_Details table, accessible under the job’s Results node
- 02. User Summary – Creates the SA_EX_RPCTraffic_UserSummary table, accessible under the job’s Results node
- 03. Server View – Creates the SA_EX_RPCTraffic_ServerSummary table, accessible under the job’s Results node
- 04. Servers Ranked – Creates the SA_EX_RPCTraffic_ServerRanked table, accessible under the job’s Results node
- 05. SET HISTORY RETENTION – Sets retention period in months

  - The default is 6 months. It can be modified.
  - See the [Exchange History Retention](../hubmetrics/collection/ex_metricscollection.md#exchange-history-retention) topic for additional information

The following analysis tasks deletes table data from data collection and analysis jobs. These analysis tasks should remain cleared unless specifically needed:

__CAUTION:__ Do not select the __00. Delete all History__ option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

- 00. Delete all History - LEAVE UNCHECKED – Clears all historical data

  - See the [Troubleshooting Data Collection](../hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection) topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_RPCTraffic Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top Servers by Average Load ( Top Servers by Average Daily User Count) | This report shows servers with the highest average load. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays top servers by average daily user count - Table – Provides details on top servers by average daily user count |
| Top Users (Outlook Anywhere Traffic) | This report identifies top users of Outlook Anywhere. | None | This report is comprised of two elements:   - Bar Chart – Displays top users - Table – Provides details on top users |
