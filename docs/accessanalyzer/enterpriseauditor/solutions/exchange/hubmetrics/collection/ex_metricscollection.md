# EX_MetricsCollection Job

The EX_MetricsCollection Job is comprised of multiple queries that utilize the ExchangeMetrics Data Collector to process and collect the message tracking logs on the Exchange servers in the environment. These queries collect server, domain, user, and distribution list traffic including but not limited to: sent, received, journal, NDRs, and transports messages. These queries are configured to process and collect that previous 7 days of Message Tracking Logs the first time this job is run, after that it only collects the previous day unless the __Enable Persistent Log State__ option has been enabled in the query.

___RECOMMENDED:___ Run this job with the default configuration settings for all queries.

See the [ExchangeMetrics Data Collector](../../../../admin/datacollector/exchangemetrics/overview.md) topic for additional information.

## Queries for the EX_MetricsCollection Job

The EX_MetricsCollection Job uses the ExchangeMetrics Data Collector.

![Queries for the EX_MetricsCollection Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/metricscollectionqueries.webp)

The following queries are included in the EX_MetricsCollection Job:

- Server Metrics – Collects server metrics
- User Metrics – Collects user metrics
- Internet Traffic Metrics – Collects internet traffic metrics
- Distribution List Metrics – Collects distribution list metrics
- Message Size Metrics – Collects message size metrics
- Delivery Time – Collects delivery times metrics
- Hourly Statistics – Collects server metrics

## Analysis Tasks for the EX_MetrixCollection Job

View the analysis tasks by navigating to the __Exchange__ > __1. HUB Metrics__ > __0. Collection__ > __EX_MetricsCollection__ > __Configure__ node and selecting __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_MetrixCollection Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/metricscollectionanalysis.webp)

The following analysis tasks are selected by default:

- 01. Delivery Times History – Creates the SA_ExhangeMetrics_DeliveryTimes table, accessible under the job’s Results node
- 02. DL History – Creates the SA_EX_ ExhangeMetrics_DistributionLists table, accessible under the job’s Results node
- 03. Internet Traffic History – Creates the SA_EX_ExhangeMetrics_InternetTraffic table, accessible under the job’s Results node
- 04. Hourly Traffic History – Creates the SA_EX_ExhangeMetrics_HourlyTraffic table, accessible under the job’s Results node
- 05. User Traffic History – Creates the SA_EX_ExhangeMetrics_UserTraffic table, accessible under the job’s Results node
- 06. Message Size History – Creates the SA_EX_ExhangeMetrics_MessageSize table, accessible under the job’s Results node
- 07. Server Traffic History – Creates the SA_EX_ExhangeMetrics_ServerTraffic table, accessible under the job’s Results node
- 08. SET HISTORY RETENTION – Sets retention period in months

  - By default set to retain __6 months__
  - This retention period can be modified. See the [Exchange History Retention](#exchange-history-retention) topic for additional information.

The following analysis task deletes table data from data collection and analysis jobs. This analysis task should remain deselected unless specifically needed:

__CAUTION:__ Do not select the __00. Deletes all Stored Data__ option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

- 00. Deletes all Stored Data - LEAVE UNCHECKED – Clears all historical data

  - See the [Troubleshooting Data Collection](#troubleshooting-data-collection) topic for additional information

## Exchange History Retention

The __08. SET HISTORY RETENTION__ analysis task controls the retention period for the job’s data. This is why the Data Retention Period options at the global, job group, or job Properties settings are not supported for the job group. The number of months can be modified. If desired, the parameter can be set to a specified number of days. Follow these steps to modify the history retention period.

__Step 1 –__ Navigate to the job’s __Configure__ node and select __Analysis__.

![08. SET HISTORY RETENTION task in the Analysis Selection view](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/sethistoryretentiontask.webp)

__Step 2 –__ In the Analysis Selection view, select the __08. SET HISTORY RETENTION__ analysis task and click __Analysis Configuration__. The SQL Script Editor opens.

![History Retention task in SQL Script Editor](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/sethistoryretentionscripteditor.webp)

__Step 3 –__ To modify the number of months: On line 6, modify the value for the months parameter:

Skip to Step 5.

__Step 4 –__ To change the period parameter from months to days:

- Comment out lines 4, 6, and 8 which contain the months parameter. To comment out a line add ```--``` preceding it. The months parameter section should be as follows:

  ```
  --Sets Retention Period in Months  
  --Declare @Months Float  
  --To Change the numbers of months to keep, Modify this value  
  --set @Months = 6  
  --Creates RetentionPeriod to be utilize in Where Clause  
  --Set @RetentionPeriod = CAST(DATEADD(MM, -@Months, GETDATE()) AS DATE)
  ```
- Uncomment out (remove ```--``` from) lines 12, 13, and 14 (which contain the days parameter). The days parameter section should be as follows:
- If desired, modify the number of days on line 13. The default days parameter is set to 30 days.

__Step 5 –__ Click __Save and Close__. The SQL Script Editor closes.

The modified history retention period is now applied during future job executions.

## Troubleshooting Data Collection

There might be times when it is necessary to purge the data either through dropping the tables from the database or truncating the data within the tables. This option is provided through ananalysis task that is not selected by default. Only one analysis task within a job should be enabled when the desire is to purge that database.

__CAUTION:__ This analysis task deletes information collected or produced by jobs in this solution.

Follow these steps to troubleshoot data collection:

__Step 1 –__ Navigate to the job’s __Configure__ node and select __Analysis__.

![Troubleshooting task selection](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/troubleshootingtaskselection.webp)

__Step 2 –__ In the Analysis Selection view, clear all default analysis tasks (if any) and select the analysis task which purges data.

_Remember,_ only one task should be selected.

__Step 3 –__ In the Navigation pane, right-click the __Analysis__ node and select __Execute Analyses__.

__Step 4 –__ After the analysis task has been executed, return to the Analysis Selection view. Deselect the analysis task which was executed and reselect the default analysis tasks (if any had been cleared in Step 2).

The selected purge of data and tables has taken place, and the analysis tasks have been reset to the default state.
