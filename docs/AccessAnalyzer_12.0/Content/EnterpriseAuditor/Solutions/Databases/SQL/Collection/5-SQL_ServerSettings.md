---
sidebar_position: 5430
title: 5-SQL_ServerSettings Job
---

# 5-SQL\_ServerSettings Job

The 5-SQL\_ServerSettings Job collects SQL server instance and database configuration settings for evaluation against recommended best practices.

## Queries for the 5-SQL\_ServerSettings Job

The 5-SQL\_ServerSettings Job uses the SQL Data Collector for the following queries:

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup19.png "Query Selection")

* Configuration – Collects configuration properties
  * (Optional) This query can be modified to target specific databases/instances. See the [Configure the Configuration Query](#_Configure_the_Configuration "Navigates to the Configure the Configuration Query section") topic for additional information.
* Server – Collects server properties
  * (Optional) This query can be modified to target specific databases/instances. See the [Configure the Server Query](#_Configure_the_Server "Navigates to the Configure the Server Query section") topic for additional information.
* Connections – Returns connections to the instance
* Asymmetric Key Size – Returns the asymmetric key size
* Symmetric Key Encryption – Returns the symmetric key encryptions being used by the Instance
* CLR Assemblies – Returns CLR Assemblies being used by the Instance
* Instance Details – Provides details on Instance configuration
* Database Details – Returns details for each database in the scanned Instance
* Database Sizing – Returns details on database size
* Linked Servers – Collects information on SQL Linked Servers
* Table Row Count – Returns the number of rows for each table in SQL

### Configure the Configuration Query

The 5-SQL\_ServerSettings Job’s Configuration Query is configured to run with the default settings with the Configuration Properties category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 5-SQL\_ServerSettings > Configure node and select Queries.

**Step 2 –** In the Query Selection view, select the Configuration Query and click on Query Properties. The Query Properties window will appear.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard will open.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![Instance Filters](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/5SQLServerSettingsFilterPage.png "Instance Filters")

**Step 4 –** To scope the query for specific database/instance, navigate to the [SQL Data Collector](../../../../Admin/DataCollector/SQL/Overview "Navigates to the SQL: Filter section") page. The query is configured by default to target All instances. Change the query scope to Only select instances, and click Retrieve. The Available server audits will be populated. Databases and instances can be added in the following ways:

* Select the desired instances and click Add.
* Use the Import CSV button to import a list from a CSV file.
* (Optional) Use the Add Custom Filter button to create and apply a custom filter.

**Step 5 –** On the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 5-SQL\_ServerSettings Job is now ready to run with the customized settings.

### Configure the Server Query

The 5-SQL\_ServerSettingsJob > Server Query has been preconfigured to run with the default settings with the category of Server Properties. However, the query can be scoped to target specific databases/instances on the Filters page of the SQL Data Collector Wizard. Follow these steps to modify the query configuration.

**Step 1 –** Navigate to the **Databases** > 0.Collection > SQL > 5-SQL\_ServerSettings > Configure node and select Queries.

**Step 2 –** In the Query Selection view, select the Server query click on Query Properties. The Query Properties window will appear.

**Step 3 –** Select the Data Source tab, and click Configure. The SQL Data Collector Wizard will open.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![Filter Page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/5SQLServerSettingsFilterPage.png "Filter Page")

**Step 4 –** To scope the query for specific database/instance, navigate to the [SQL Data Collector](../../../../Admin/DataCollector/SQL/Overview "Navigates to the SQL: Filter section") page. The query is configured by default to target All instances. Change the query scope to Only select instances, and click Retrieve. The Available server audits will be populated. Databases and instances can be added in the following ways:

* Select the desired instances and click Add.
* Use the Import CSV button to import a list from a CSV file.
* Optionally use the Add Custom Filter button to create and apply a custom filter.

  Remember, it is necessary for the [0-SQL\_InstanceDiscovery Job](0-SQL_InstanceDiscovery "0-SQL_InstanceDiscovery Job") to run before attempting to scope this query.

**Step 5 –** On the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 5-SQL\_ServerSettings Job is now ready to run with the customized settings.