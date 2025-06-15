# 0.Collection > EX_IISLogs Job

The 0.Collection > EX_IISLogs Job provides data collection to be utilized in the ActiveSync, Outlook Web Access, and Outlook Anywhere Reports. This job goes out to each server that contains the IIS Logs and parses the log to return the data to the Enterprise Auditor database.

![0.Collection > EX_IISLogs Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The EX_IISLogs job is located in the 0.Collection Job Group.

## Queries for the EX_IISLogs Job

The EX_IISLogs Job uses the SMARTLog Data Collector.

![Queries for the EX_IISLogs Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/casmetrics/iislogsquery.png)

The following query is included in the EX_IISLogs Job:

- IIS Logs – Collects IIS Logs

  - By default set to process log files for the last 3 days. This time frame can be modified
  - See the [Configure the IIS Logs Query](#configure-the-iis-logs-query) topic for additional information

### Configure the IIS Logs Query

The EX_IISLogs Job has been preconfigured to run with the default settings with the Log Type of Internet Information Server Log. However, the time frame for the log files to be processed can be modified on the Target Log page of the SMART Log DC Wizard. See the [SMARTLog Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/overview.md) topic for additional information.

Follow the steps to modify the query configuration.

__Step 1 –__ Navigate to the __Exchange__ > __2. CAS Metrics__ > __0. Collection__ > __EX_IISLogs__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The SMART Log DC Wizard opens.

__CAUTION:__ Do not modify other wizard pages. The other wizard pages are pre-configured for this job.

![SMART Log DC Wizard Target Log page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/casmetrics/smartlogdctargetlog.png)

__Step 4 –__ Navigate to the Target Log page, and configure the time frame as required. See the [SMARTLog: Target Log](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/targetlog.md) topic for additional information.

_Remember,_  if the date range configuration includes data older than the last scan, the __Persist Log State__ checkbox on the Log State page must be disabled.

__Step 5 –__ Navigate to the Summary page. Click __Finish__.

The EX_IISLogs Job applies the modifications to future job executions.
