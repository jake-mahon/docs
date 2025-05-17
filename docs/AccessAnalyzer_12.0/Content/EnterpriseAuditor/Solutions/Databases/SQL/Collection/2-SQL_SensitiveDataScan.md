---
sidebar_position: 5432
title: 2-SQL_SensitiveDataScan Job
---

# 2-SQL\_SensitiveDataScan Job

The 2-SQL\_SensitiveDataScan Job discovers sensitive data in the database SQL server instances and databases based on a pre-defined or user defined search criteria.

Special Dependency

* Sensitive Data Discovery Add-On installed on the Access Analyzer Console server
  * See the [Installation & Configuration Overview](../../../../Install/Application/Overview "Installation & Configuration Overview") topic for installation information.
  * See the [Sensitive Data Discovery](../../../../SensitiveDataDiscovery/Overview "Sensitive Data Discovery Add-On") topic for additional information.

Though the job is visible within the console, it requires an additional installer package before data collection occurs.

## Queries for the 2-SQL\_SensitiveDataScan Job

The SensitiveDataScan Job uses the SQL Data Collector for the following query:

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup9.png "Query Selection")

* SensitiveDataScan – Collects Sensitive Data from targeting instances
  * (Optional) This query can be modified to target specific databases/instances. See the [Configure the SensitiveDataScan Query](#_Configure_the_SensitiveDataScan_1 "Navigates to the Configure the SensitiveDataScan Query section") topic for additional information.

### Configure the SensitiveDataScan Query

The 2-SQL\_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive Data Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 2-SQL\_SensitiveDataScan > Configure node and select Queries.

**Step 2 –** In the Query Selection view, select the SensitiveDataScan query click on Query Properties. The Query Properties window appears.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for this job.

![](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/2SQLSensitiveDataScanOptionsPage.png)

**Step 4 –** Select the desired scan options. Navigate to the [SQL: Options](../../../../Admin/DataCollector/SQL/Options "Navigates to the SQL: Options section") page for additional information.

**NOTE:** The Sensitive Data Scan Settings are pre-configured for optimal performance for a high-level table scan. Configuring these settings to increase the scope of the sensitive data scan may significantly increase scan time.

![Criteria Page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/2SQLSensitiveDataScanQueryCriteriaPage.png "Criteria Page")

**Step 5 –** To modify criteria, navigate to the [SQL: Criteria](../../../../Admin/DataCollector/SQL/Criteria "Navigates to the SQL: Criteria section") page. By default, the following System Criteria have been selected:

* Credit Cards
* Tax Forms
* US SSN
* User ID
* Password

  Add or remove criteria if needed. See the [Sensitive Data Criteria Editor](../../../../SensitiveDataDiscovery/CriteriaEditor/Overview "Sensitive Data Criteria Editor") topic for additional information.

![Filter Page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/2SQLSensitiveDataScanFilterPage.png "Filter Page")

**Step 6 –** To query for specific database/instance, navigate to the [SQL: Filter](../../../../Admin/DataCollector/SQL/Filter "Navigates to the SQL: Filter section") page. The query is configured by default to target Only select database objects. Click Retrieve. The Available database objects box will populate. Databases and instances can be added in the following ways:

* Select the desired database objects and click Add.
* Use the Import CSV button to import a list from a CSV file, if desired.
* Optionally use the Add Custom Filter button to create and apply a custom filter.

**Step 7 –** Navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 2-SQL\_SensitsveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 2-SQL\_SensitiveDataScan Job

Navigate to the **Databases** > 0.Collection > SQL > 2-SQL\_SensitiveDataScan > Configure node and select Analysis to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup13.png "Analysis Selection")

The default analysis task is:

* SQL Server SDD Matches View — Brings the SQL Server SDD Matches View to the SA console
* SQL Server SDD Match Hits View — Brings the SQL Server SDD Match Hits View to the SA console
* AIC Import — Creates the SA\_AIC\_SddMatchesImport