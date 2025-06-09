# EX\_MetricsDetails Job

The EX\_MetricsDetails Job collects daily user-to-user Traffic. Walk through this jobs query to configure the internal domains to collect the sender to recipient traffic from. By default, the query is configured to collect the previous 1 day of Message Tracking Logs and has @netwrix.com configured as the domain. If the domains are not configured in the query, then most likely data collection does not return.

## Queries for the EX\_MetricsDetails Job

The EX\_MetricsDetails Job uses the ExchangeMetrics Data Collector.

![Queries for the EX_MetricsDetails Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/metricsdetailsquery.png)

The following query is included in the EX\_MetricsDetails Job:

- Activity metrics – Collects user to user traffic per day

  - Domains must be configured for data collection to return data
  - See the [Configure the Activity Metrics Query](#Configure-the-Activity-Metrics-Query) topic for additional information

### Configure the Activity Metrics Query

The Activity Metrics Query has been preconfigured to run with the ExchangeMetrics Data Collector to collect user traffic per day. The domains must be configured for data collection to return data.

Follow the steps to configure the Activity Metrics Query.

__Step 1 –__ Navigate to the __Exchange__ > __1. HUB Metrics__ > __0. Collection__ > __EX\_MetricsDetails__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the Activity metrics Query and click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The Exchange Metrics Data Collector Wizard opens.

__CAUTION:__ Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![Exchange Metrics Data Collector Wizard Message Activity Filter page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/exchangemetricsmessageactivityfilter.png)

__Step 4 –__ Navigate to the [ExchangeMetrics: Message Activity Filter](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/messageactivityfilter.md) page to configure the internal domains from which to collect the sender to recipient traffic. The filter should remain __Ends With__. Replace the ```@netwrix.com``` variable for both the __Senders__ and __Recipients__ with the ```@domain.com``` variable to be audited.

__Step 5 –__ Navigate to the Summary page and click __Finish__.

The EX\_MetricsDetails Job returns data for the identified sender and recipient domains.

## Analysis Tasks for the EX\_MetricsDetails Job

View the analysis tasks by navigating to the __Exchange__ > __1. HUB Metrics__ > __0. Collection__ > __EX\_MetricsDetails__ > __Configure__ node and selecting __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_MetricsDetails Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/metricsdetailsanalysis.png)

The following analysis tasks are selected by default:

- 01. User to User Traffic History – Creates the SA\_EX\_ExhangeMetrics\_MessageTraffic table accessible under the job’s Results node
- 02. SET HISTORY RETENTION – Sets retention period in months

  - By default set to retain __6 months__
  - This retention period can be modified. See the [Exchange History Retention](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Exchange-History-Retention) topic for additional information.

The following analysis task clears table data from data collection and analysis jobs. This analysis task should remain deselected unless specifically needed:

__CAUTION:__ Do not select the __00. DROP HISTORY__ option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

- 00. DROP HISTORY - LEAVE UNCHECKED – Clears all historical data

  - See the [Troubleshooting Data Collection](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Troubleshooting-Data-Collection) topic for additional information
