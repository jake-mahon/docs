---
sidebar_position: 5578
title: EX_MetricsDetails Job
---

# EX\_MetricsDetails Job

The EX\_MetricsDetails Job collects daily user-to-user Traffic. Walk through this jobs query to configure the internal domains to collect the sender to recipient traffic from. By default, the query is configured to collect the previous 1 day of Message Tracking Logs and has @netwrix.com configured as the domain. If the domains are not configured in the query, then most likely data collection does not return.

## Queries for the EX\_MetricsDetails Job

The EX\_MetricsDetails Job uses the ExchangeMetrics Data Collector.

![Queries for the EX_MetricsDetails Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/HUBMetrics/Collection/MetricsDetailsQuery.png "Queries for the EX_MetricsDetails Job")

The following query is included in the EX\_MetricsDetails Job:

* Activity metrics – Collects user to user traffic per day

  * Domains must be configured for data collection to return data
  * See the [Configure the Activity Metrics Query](#Configure_the_Activity "Configure the Activity Metrics Query") topic for additional information

### Configure the Activity Metrics Query

The Activity Metrics Query has been preconfigured to run with the ExchangeMetrics Data Collector to collect user traffic per day. The domains must be configured for data collection to return data.

Follow the steps to configure the Activity Metrics Query.

**Step 1 –** Navigate to the **Exchange** > **1. HUB Metrics** > **0. Collection** > **EX\_MetricsDetails** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the Activity metrics Query and click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Exchange Metrics Data Collector Wizard opens.

**CAUTION:** Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![Exchange Metrics Data Collector Wizard Message Activity Filter page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/HUBMetrics/Collection/ExchangeMetricsMessageActivityFilter.png "Exchange Metrics Data Collector Wizard Message Activity Filter page")

**Step 4 –** Navigate to the [ExchangeMetrics: Message Activity Filter](../../../../Admin/DataCollector/ExchangeMetrics/MessageActivityFilter "ExchangeMetrics: Message Activity Filter") page to configure the internal domains from which to collect the sender to recipient traffic. The filter should remain **Ends With**. Replace the `@netwrix.com` variable for both the **Senders** and **Recipients** with the `@domain.com` variable to be audited.

**Step 5 –** Navigate to the Summary page and click **Finish**.

The EX\_MetricsDetails Job returns data for the identified sender and recipient domains.

## Analysis Tasks for the EX\_MetricsDetails Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** > **0. Collection** > **EX\_MetricsDetails** > **Configure** node and selecting **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_MetricsDetails Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/HUBMetrics/Collection/MetricsDetailsAnalysis.png "Analysis Tasks for the EX_MetricsDetails Job")

The following analysis tasks are selected by default:

* 01. User to User Traffic History – Creates the SA\_EX\_ExhangeMetrics\_MessageTraffic table accessible under the job’s Results node
* 02. SET HISTORY RETENTION – Sets retention period in months

  * By default set to retain **6 months**
  * This retention period can be modified. See the [Exchange History Retention](EX_MetricsCollection#Exchange_History_Retention "Exchange History Retention") topic for additional information.

The following analysis task clears table data from data collection and analysis jobs. This analysis task should remain deselected unless specifically needed:

**CAUTION:** Do not select the **00. DROP HISTORY** option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

* 00. DROP HISTORY - LEAVE UNCHECKED – Clears all historical data

  * See the [Troubleshooting Data Collection](EX_MetricsCollection#Troubleshooting_Data_Collection "Troubleshooting Data Collection") topic for additional information