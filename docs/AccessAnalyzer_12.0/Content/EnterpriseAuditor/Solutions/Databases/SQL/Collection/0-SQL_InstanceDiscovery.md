---
sidebar_position: 5429
title: 0-SQL_InstanceDiscovery Job
---

# 0-SQL\_InstanceDiscovery Job

The 0-SQL\_InstanceDiscovery job enumerates and stores the list of SQL Server Instances running on the targeted servers.

## Queries for the 0-SQL\_InstanceDiscovery Job

The 0-SQL\_InstanceDiscovery job uses the SQL Data Collector for the following query:

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/InstanceDisc_Query.png "Query Selection")

* SQL Server Instance Discovery — Collects the list of SQL Server Instances from target endpoints and populates the necessary instance connection information

## Analysis Tasks for the 0-SQL\_InstanceDiscovery Job

Navigate to the **Databases** > **0.Collection** > **SQL** > **0-SQL\_InstanceDiscovery** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/InstanceDisc_Analysis.png "Analysis Selection")

The default analysis tasks is:

* SQL Instances — Brings SA\_SQL\_Instances table to view