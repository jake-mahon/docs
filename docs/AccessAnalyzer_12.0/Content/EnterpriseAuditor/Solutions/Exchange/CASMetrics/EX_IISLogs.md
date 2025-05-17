---
sidebar_position: 5540
title: 0.Collection > EX_IISLogs Job
---

# 0.Collection > EX\_IISLogs Job

The 0.Collection > EX\_IISLogs Job provides data collection to be utilized in the ActiveSync, Outlook Web Access, and Outlook Anywhere Reports. This job goes out to each server that contains the IIS Logs and parses the log to return the data to the Access Analyzer database.

![0.Collection > EX_IISLogs Job in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/CASMetrics/CollectionJobsTree.png "0.Collection > EX_IISLogs Job in the Jobs Tree")

The EX\_IISLogs job is located in the 0.Collection Job Group.

## Queries for the EX\_IISLogs Job

The EX\_IISLogs Job uses the SMARTLog Data Collector.

![Queries for the EX_IISLogs Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/CASMetrics/IISLogsQuery.png "Queries for the EX_IISLogs Job")

The following query is included in the EX\_IISLogs Job:

* IIS Logs – Collects IIS Logs

  * By default set to process log files for the last 3 days. This time frame can be modified
  * See the [Configure the IIS Logs Query](#_Configure_the_IISLogs "Configure the IIS Logs Query") topic for additional information

### Configure the IIS Logs Query

The EX\_IISLogs Job has been preconfigured to run with the default settings with the Log Type of Internet Information Server Log. However, the time frame for the log files to be processed can be modified on the Target Log page of the SMART Log DC Wizard. See the [SMARTLog Data Collector](../../../Admin/DataCollector/SMARTLog/Overview "SMARTLog Data Collector") topic for additional information.

Follow the steps to modify the query configuration.

**Step 1 –** Navigate to the **Exchange** > **2. CAS Metrics** > **0. Collection** > **EX\_IISLogs** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The SMART Log DC Wizard opens.

**CAUTION:** Do not modify other wizard pages. The other wizard pages are pre-configured for this job.

![SMART Log DC Wizard Target Log page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/CASMetrics/SMARTLogDCTargetLog.png "SMART Log DC Wizard Target Log page")

**Step 4 –** Navigate to the Target Log page, and configure the time frame as required. See the [SMARTLog: Target Log](../../../Admin/DataCollector/SMARTLog/TargetLog "SMARTLog: Target Log") topic for additional information.

*Remember,*  if the date range configuration includes data older than the last scan, the **Persist Log State** checkbox on the Log State page must be disabled.

**Step 5 –** Navigate to the Summary page. Click **Finish**.

The EX\_IISLogs Job applies the modifications to future job executions.