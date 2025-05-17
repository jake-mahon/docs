---
sidebar_position: 5569
title: 0. Collection > EX_Mailflow Job
---

# 0. Collection > EX\_Mailflow Job

The EX\_Mailflow job collects message trace data from Office 365.

![0. Collection > EX_Mailflow Job in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Online/CollectionJobsTree.png "0. Collection > EX_Mailflow Job in the Jobs Tree")

The EX\_Mailflow job is located in the **Mailflow** > **0. Collection** job group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](../../../../Admin/Jobs/Job/Overview#Parameter_Configuration "Parameter Configuration") topic for instructions on how to edit parameters on a job overview page.

The EX\_Mailflow job has the following configurable parameter:

* Number of months to keep

See the [Analysis Tasks for the EX\_Mailflow Job](#Analysis "Analysis Tasks for the EX_Mailflow Job") topic for additional information.

## Queries for the EX\_Mailflow Job

The EX\_Mailflow job uses the ExchangePS Data Collector.

![Queries for the EX_Mailflow Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Online/MailflowQueries.png "Queries for the EX_Mailflow Job")

The following queries are included in the EX\_Mailflow job:

* MailFlow – Collects Message Tracking data

  * The default is the **Last 7 Days**. It can be modified to a shorter date range
  * See the [Configure the ExchangePS Data Collector for Mail Flow Metrics](#_Configure_the_ExchangePS "Configure the ExchangePS Data Collector for Mail Flow Metrics") topic for additional information
* LocalDomains – Collects domains local to the Office 365 environment

  **CAUTION:** Do not modify this query. The query is preconfigured for this job.

  * See the [ExchangePS Data Collector](../../../../Admin/DataCollector/ExchangePS/Overview "ExchangePS Data Collector") topic for additional information

### Configure the ExchangePS Data Collector for Mail Flow Metrics

The ExchangePS Data Collector configured with the Mail Flow Metrics category can be scoped to specific report dates. By default, the MailFlow Query is set to report on the Last 7 Days.

Follow the steps to modify the query configuration:

**Step 1 –** Navigate to the **Exchange** > **8. Exchange Online** > **0. Collection** > **EX\_Mailflow** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the query and click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The ExchangePS Data Collector Wizard opens.

**CAUTION:** Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![ExchangePS Data Collector Wizard Mail Flow page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Online/MailFlowMetricsDCWizard.png "ExchangePS Data Collector Wizard Mail Flow page")

**Step 4 –** To modify the report dates, navigate to the Mail Flow page. Set the report data range as desired. See the [ExchangePS Data Collector](../../../../Admin/DataCollector/ExchangePS/Overview#ExchangePS_MailFlow "Navigates to the ExchangePS: Mail Flow section") topic for additional information.

*Remember,* the date range must be 7 days or less.

**Step 5 –** Navigate to the Summary page. Click **Finish**.

The job applies the modification to future job executions.

## Analysis Tasks for the EX\_Mailflow Job

View the analysis tasks by navigating to the **Exchange** > **8. Exchange Online** > **0. Collection** > **EX\_Mailflow** > **Configure** node and selecting **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_Mailflow Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Online/MailflowAnalysis.png "Analysis Tasks for the EX_Mailflow Job")

The following analysis tasks are selected by default:

* 01.EX\_Mailflow\_History – Creates the SA\_EX\_Mailflow\_History table, accessible under the job’s Results node
* 02.Update History Table – Updates the SA\_EX\_Mailflow\_History table, with data from the .Active Directory Inventory and .Entra ID Inventory solutions to determine local users and distribution lists
* 03. SET HISTORY RETENTION – Sets retention period in months

  * By default, retention is set to 6 months. This period can be modified. See the [Parameter Configuration](#Paramete "Parameter Configuration") topic for additional information.
  * Alternatively, the `@Months` parameter can be modified in the SQL Script Editor. See the [Configure the Customizable Parameters in an Analysis Task](../../../../Admin/Jobs/Job/Configure/AnalysisCustomizableParameters "Configure the Customizable Parameters in an Analysis Task") topic for additional information

The following analysis task deletes table data from data collection and analysis jobs. This analysis task should remain cleared unless specifically needed:

**CAUTION:** Do not select the **00. Deletes all Stored Data** option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

* 00. Deletes all Stored Data - LEAVE UNCHECKED – Deletes all historical data

  * See the [Troubleshooting Data Collection](../../HUBMetrics/Collection/EX_MetricsCollection#Troubleshooting_Data_Collection "Troubleshooting Data Collection") topic for additional information