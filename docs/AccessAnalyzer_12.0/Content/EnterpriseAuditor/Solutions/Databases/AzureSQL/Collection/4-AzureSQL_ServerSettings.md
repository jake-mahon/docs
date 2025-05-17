---
sidebar_position: 5470
title: 4-AzureSQL_ServerSettings Job
---

# 4-AzureSQL\_ServerSettings Job

The 4–AzureSQL\_ServerSettings Job is designed to collect Azure SQL instance and database configuration settings so they can be evaluated against recommended best practices.

## Queries for the 4–AzureSQL\_ServerSettings Job

The 4–AzureSQL\_ServerSettings Job uses the SQL Data Collector for the following query:

![0.Collection_4–AzureSQL_ServerSettings Job - Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/ServerSettings.png "0.Collection_4–AzureSQL_ServerSettings Job - Query Selection")

* Database Sizing— Returns details on database sizing
* Server Details — Collects Azure SQL Server properties
* Configuration Details— Collects database configuration properties
* Table Row Counts— Returns Azure SQL table row counts for additional data points in the sensitive data reports
* Standalone Database Sizing— Returns the size of Azure standalone databases

## Analysis Tasks for the 4–AzureSQL\_ServerSettings Job

Navigate to the **Databases** > **0.Collection** > **Azure SQL** > **4–AzureSQL\_ServerSettings** > **Configure** node and select **Analysis** to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/ServerSettingsAnalysis.png "Analysis Selection")

The default analysis tasks are:

* Update Database Sizing — Updates the database sizing table with the data from the standalone database sizing table