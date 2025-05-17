---
sidebar_position: 5539
title: ActiveSync > EX_ActiveSync Job
---

# ActiveSync > EX\_ActiveSync Job

The EX\_ActiveSync job provides visibility into ActiveSync Traffic in the Organization.

![ActiveSync > EX_ActiveSync Job in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/CASMetrics/ActiveSyncJobsTree.png "ActiveSync > EX_ActiveSync Job in the Jobs Tree")

The EX\_ActiveSync job is located in the ActiveSync job group.

## Analysis Tasks for the EX\_ActiveSync Job

View the analysis tasks by navigating to the **Exchange** > **2. CAS Metrics** > **ActiveSync** > **EX\_ActiveSync** > **Configure** node and select **Analysis**.

**CAUTION:** Most of these analysis tasks are preconfigured and should not be modified or deselected. There are some that are deselected by default, as they are for troubleshooting purposes.

![Analysis Tasks for the EX_ActiveSync Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/CASMetrics/ActiveSyncAnalysis.png "Analysis Tasks for the EX_ActiveSync Job")

The following analysis tasks are selected by default:

* 01b. Active Sync Data – Creates the SA\_EX\_ActiveSync\_Details table, accessible under the job’s Results node
* 02. Last Week Summary – Creates an interim processing table in the database for use by downstream analysis and report generation
* 03. User Device History – Creates the SA\_EX\_ActiveSync\_UserDeviceHistory table, accessible under the job’s Results node
* 04. Device Population – Creates the SA\_EX\_ActiveSync\_DevicePopulation table, accessible under the job’s Results node
* 05. Users Ranked – Creates the SA\_EX\_ActiveSync\_UsersRanked table accessible, under the job’s Results node
* 06. Servers Ranked – Creates the SA\_EX\_ActiveSync\_ServersRanked table accessible, under the job’s Results node
* 07. SET HISTORY RETENTION – Sets retention period in months

  * The default is **6 months**. It can be modified.
  * See the [Exchange History Retention](../HUBMetrics/Collection/EX_MetricsCollection#Exchange_History_Retention "Exchange History Retention") topic for additional information

The following analysis task deletes table data from the analysis jobs. This analysis task should remain cleared unless specifically needed:

**CAUTION:** Do not select the **00. Deletes all History** option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

* 00. Delete all History

  * See the [Troubleshooting Data Collection](../HUBMetrics/Collection/EX_MetricsCollection#Troubleshooting_Data_Collection "Troubleshooting Data Collection") topic for additional information

The following analysis task updates the table to clean the data so that any UserAgent information that is returned as NULL is updated based on existing data in the table:

* 01a. Clean NULL UserAgent – Updates UserAgent information which was returned as NULL based on existing data

In addition to the tables and views created by the analysis tasks, the EX\_ActiveSync Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Device Types (Device Population) | This report identifies what device models are currently being used with ActiveSync, and the average load they put on the environment each day. | None | This report is comprised of two elements:   * Bar Chart – Displays most popular devices * Table – Provides details on most popular devices |
| Server Traffic (Top Servers by Average Daily Traffic) | This report ranks CAS servers by volume of ActiveSync traffic. | None | This report is comprised of two elements:   * Bar Chart – Displays top users by average daily traffic * Table – Provides details on top users by average daily traffic |
| Top Users (Top Users by Average Daily Traffic) | This report shows the top users of ActiveSync. | None | This report is comprised of two elements:   * Bar Chart – Displays top users by average daily traffic * Table – Provides details on top users by average daily traffic |
| User Devices (User Phones) | This report identifies all devices which have been associated with a User, and the time frames when they were used. | None | This report is comprised of one element:   * Table – Provides details on user devices |