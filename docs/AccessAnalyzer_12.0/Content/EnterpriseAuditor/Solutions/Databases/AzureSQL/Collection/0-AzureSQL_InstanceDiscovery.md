---
sidebar_position: 5467
title: 0-AzureSQL_InstanceDiscovery Job
---

# 0-AzureSQL\_InstanceDiscovery Job

The Azure SQL Instance Discovery job is responsible for enumerating a list of Azure SQL Server Instances from target endpoints and populating the necessary instance connection information which will be used throughout the solution set.

## Queries for the 0-AzureSQL\_InstanceDiscovery Job

The 0-AzureSQL\_InstanceDiscovery job uses the SQL Data Collector for the following query:

![Query Selection - Instance Discovery](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/InstanceDiscQuery.png "Query Selection - Instance Discovery")

* Azure SQL Instance Discovery — Collects the list of Azure SQL Server Instances from target endpoints and populates the necessary instance connection information

## Analysis Tasks for the 0-AzureSQL\_InstanceDiscovery Job

Navigate to the **Databases** > **0.Collection** > **AzureSQL** > **0-AzureSQL\_InstanceDiscovery** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/InstanceDiscAnalysis.png "Analysis Selection")

The default analysis tasks is:

* SQL Instances — Brings SA\_SQL\_Instances table to view