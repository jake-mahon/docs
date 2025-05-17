---
sidebar_position: 5469
title: 3-AzureSQL_ActivityScan Job
---

# 3-AzureSQL\_ActivityScan Job

The 3–AzureSQL\_ActivityScan job captures user activity from all targeted Azure SQL instances and databases.

## Queries for the 3–AzureSQL\_ActivityScan Job

The 3–AzureSQL\_ActivityScan Job uses the SQL Data Collector for the following query:

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/ActivityScanJob.png "Query Selection")

* Activity — Collects activity events for Azure SQL

## Analysis Task for the 3–AzureSQL\_ActivityScan Job

Navigate to the **Databases** > **0.Collection** > **Azure SQL** > **3–AzureSQL\_ActivityScan** > **Configure** node and select **Analysis** to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![3-AzureSQL_ActivityScan Job - Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/ActivityScanJobAnalysis.png "3-AzureSQL_ActivityScan Job - Analysis Selection")

The default analysis task is:

* AIC Import – Activity — Imports Azure SQL Activity to the AIC