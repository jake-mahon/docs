# 1-Db2\_SensitiveDataScan

This job discovers sensitive data in the Db2 databases across all the targeted Db2 database servers based on pre-defined or user-defined criteria.

## Queries for the 1-Db2\_Sensitive Data Scan Job

The 1-Db2 Sensitive Data Job uses the SQL Data Collector for the following queries.

![sensitivedatascanquery](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/sensitivedatascanquery.png)

The query is:

- Db2 SensitiveData – Scans Db2 databases for sensitive data

## Recommended Configuration for the SensitiveDataScan Query

It is only necessary to set up the connection for the 1-Db2 SensitiveDataScan Job. Once the connection is established, custom configurations apply to all other job queries within the 0.Collection job group. Follow the steps to customize configurations.

__Step 1 –__ Navigate to the Databases > 0.Collection > Db2 > 1-Db2\_SensitiveDataScan > Configure node and select Queries.

__Step 2 –__ In the Query Selection view, select the SensitiveDataScan query click on Query Properties. The Query Properties window appears.

__Step 3 –__ Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens with Sensitive Data Collection category selected.

![Category page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/sensitivedatacategory.png)

__Step 4 –__ Click __Next__. The Sensitive Data Scan Settings view appears.

![Sensitive Data Scan Settings](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/sensitivedatajoboptions.png)

__Step 5 –__ To modify sensitive data scan options, select the desired scan options. See the [SQL: Options](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/sql/options.md#sqloptions) page for additional information.

__CAUTION:__ The Sensitive Data Scan Settings are preconfigured for optimal performance for a high-level table scan. Configuring these settings to increase the scope of the sensitive data scan may significantly increase scan time.

__Step 6 –__ Click __Next__. The Select Criteria view appears.

![Select Criteria](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/sensitivedatacriteria.png)

__Step 7 –__ To modify criteria, click on __Use the following selected criteria:__ and select your choices. By default, the Sensitive Data Scan job is set to __Use Global Criteria__.

__NOTE:__  For more information on adding or deleting criteria, navigate to the [SQL: Criteria](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/sql/criteria.md#sqlcriteria) page or See the [Sensitive Data Criteria Editor](/docs/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information.

__Step 8 –__ Click __Next__. The Filters view appears.

![Filters](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/sensitivedatafilter.png)

__Step 9 –__ Click __Connections__ to open the Manage Connections window.

__NOTE:__ SQL databases must be added to the query before they can be scanned. Before you can add a query, you must establish a connection to the database.

![Manage Connections](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/sensitivedataconnection.png)

__Step 10 –__ In the Manage Connections window, enter the following information:

- Instance Label — Custom name of the instance
- Database System — A drop down containing all available database servers. Select the Db2LUW server to configure Db2 queries.
- Service Name — Custom name of the service
- Host — Name or IP address of the host where the database is located. Host list is IBM DB2
- Port Number — Port number for the selected database
- Default Database — Default Database

__Step 11 –__ After completing the above information fields, click __Test Connection__ to validate the new connection. Once validated, click __Create New Connection__ to finalize the connection.

__Step 12 –__ Navigate to the Filter page. Select Only select database objects or __All database objects__. Collection queries are configured by default to target Only select database objects.

__NOTE:__ For more information on filtering, see the [SQL: Filter](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/sql/filter.md#sqlfilter) page.

__Step 13 –__ Click Retrieve. The Available database objects box will populate.

__Step 14 –__ Add the Databases and instances to be audited. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally use the Add Custom Filter button to create and apply a custom filter.

Selected database objects to be audited will display.

__Step 15 –__ Click __Next__ and navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 1-Db2\_SensitsveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-Db2\_SensitiveDataScan Job

Navigate to the __Databases__ > __0.Collection__ > __Db2__ > __1-Db2\_SensitiveDataScan__ > __Configure__ node and select __Analysis__ to view the Analysis Tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/sensitivedatascananalysis.png)

The default analysis tasks are:

- Update Instance Name — Updates the instance name with a port if there are multiple instances in a single host
- Db2 Matches — Brings the Db2 SDD Matches View to the Access Analyzer console
- Db2 Match Hits — Brings the Db2 Match Hits View to the Access Analyzer console
- AIC Sensitive Data Import — Db2 Match Imports discovered Db2 sensitive data to the AIC
