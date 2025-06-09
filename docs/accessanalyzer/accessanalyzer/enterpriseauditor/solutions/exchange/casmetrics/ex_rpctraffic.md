# Outlook Anywhere > EX\_RPCTraffic Job

The EX\_RPCTraffic job provides visibility into Outlook Anywhere or RPC\HTTPs Traffic in the organization.

![Outlook Anywhere > EX_RPCTraffic Job in the Jobs Tree](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/outlookanywherejobstree.png)

The EX\_RPCTraffic job is located in the Outlook Anywhere job group.

## Analysis Tasks for the EX\_RPCTraffic Job

View the analysis tasks by navigating to the __Exchange__ > __2. CAS Metrics__ > __Outlook Anywhere__ > __EX\_RPCTraffic__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_RPCTraffic Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/rpctrafficanalysis.png)

The following analysis tasks are selected by default:

- 01. RPC View – Creates the SA\_EX\_RPCTraffic\_Details table, accessible under the job’s Results node
- 02. User Summary – Creates the SA\_EX\_RPCTraffic\_UserSummary table, accessible under the job’s Results node
- 03. Server View – Creates the SA\_EX\_RPCTraffic\_ServerSummary table, accessible under the job’s Results node
- 04. Servers Ranked – Creates the SA\_EX\_RPCTraffic\_ServerRanked table, accessible under the job’s Results node
- 05. SET HISTORY RETENTION – Sets retention period in months

  - The default is 6 months. It can be modified.
  - See the [Exchange History Retention](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Exchange-History-Retention) topic for additional information

The following analysis tasks deletes table data from data collection and analysis jobs. These analysis tasks should remain cleared unless specifically needed:

__CAUTION:__ Do not select the __00. Delete all History__ option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

- 00. Delete all History - LEAVE UNCHECKED – Clears all historical data

  - See the [Troubleshooting Data Collection](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Troubleshooting-Data-Collection) topic for additional information

In addition to the tables and views created by the analysis tasks, the EX\_RPCTraffic Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top Servers by Average Load ( Top Servers by Average Daily User Count) | This report shows servers with the highest average load. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays top servers by average daily user count - Table – Provides details on top servers by average daily user count |
| Top Users (Outlook Anywhere Traffic) | This report identifies top users of Outlook Anywhere. | None | This report is comprised of two elements:   - Bar Chart – Displays top users - Table – Provides details on top users |
