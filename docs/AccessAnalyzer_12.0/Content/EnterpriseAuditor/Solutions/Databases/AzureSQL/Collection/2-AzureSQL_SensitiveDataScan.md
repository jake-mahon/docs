---
sidebar_position: 5466
title: 2-AzureSQL_SensitiveDataScan Job
---

# 2-AzureSQL\_SensitiveDataScan Job

The 2-AzureSQL\_SensitiveDataScan Job is designed to discover sensitive data in the Azure SQL instances and databases based on pre-defined or user-defined search criteria.

## Queries for the 2–AzureSQL\_SensitiveDataScan Job

The 2–AzureSQL\_SensitiveDataScan Job uses the SQL Data Collector for the following query:

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/SensitiveDataScanJob.png "Query Selection")

* Sensitive Data Scan — Collects sensitive data from targeted instances

### Analysis Task for 2-AzureSQL\_SensitiveDataScan Job

Navigate to the **Databases** > **0.Collection** > **AzureSQL** > **2–AzureSQL\_SensitiveDataScan** > **Configure** node and select Analysis to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/AzureSQL/Collection/SensitiveDataScanAnalysis.png "Analysis Selection")

The default analysis tasks are:

* Azure SQL SSD Matches View — Brings the Azure SQL SSD Matches View to the SA console
* Azure SQL SSD Match Hits View — Brings the Azure SQL SSD Match Hits View to the SA Console
* AIC Impot SSD — Imports Azure SQL SSD to the AIC