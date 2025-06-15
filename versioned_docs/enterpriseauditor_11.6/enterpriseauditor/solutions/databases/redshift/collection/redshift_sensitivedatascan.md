# Redshift_SensitiveDataScan Job

This job discovers sensitive data in PostgreSQL databases on pre-defined or user-defined criteria.

## Queries for the Redshift_SensitiveData Scan Job

The Redshift_SensitiveDataScan Job uses the SQL Data Collector for queries.

![Query Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/collectionsensitivedataquery.png)

The query is:

- Redshift Sensitive Data Scan — Provides information on all the sensitive data that was discovered in the targeted Redshift servers based on the selected scan criteria.

## Recommended Configuration for the SensitiveDataScan Query

The Redshift_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive Data Collection category. It is necessary only to set up the connection for the Redshift- SensitiveDataScan Job. Once the connection is established, it applies to any other 0.Collection job query. Follow the steps to customize configurations.

__Step 1 –__ Navigate to the __Databases__ > __0.Collection__ > __Redshift__ > __Redshift_SensitiveDataScan__ > __Configure__ node and select Queries.

__Step 2 –__ In the Query Selection view, select the Redshift Sensitive Data Scan query click on Query Properties. The Query Properties window appears.

__Step 3 –__ Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens with Sensitive Data Collection category selected.

![Category Page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/collectionsensitivedatacategory.png)

__Step 4 –__ Click __Next__. The Sensitive Data Scan Settings view appears.

![Sensitive Data Scan Settings](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/collectionsensitivedatajoboptions.png)

__Step 5 –__ To modify sensitive data scan options, select the desired scan options. See the [SQL: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/sql/options.md) page for additional information.

__NOTE:__ The Sensitive Data Scan Settings are preconfigured for optimal performance for a high-level table scan. Configuring these settings to increase the scope of the sensitive data scan may significantly increase scan time.

__Step 6 –__ Click __Next__. The Select Criteria view appears.

![Select DLP Criteria for Scan](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/collectionsensitivedatacriteria.png)

__Step 7 –__ To modify criteria, click on __Use the following selected criteria:__ and select your choices. By default, the Sensitive Data Scan job is set to __Use Global Criteria__. Also by default, the following System Criteria have been selected:

- Credit Cards
- Tax Forms
- US SSN
- User ID
- Password

__NOTE:__  For more information on adding or deleting criteria, navigate to the [SQL: Criteria](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/sql/criteria.md) page or See the [Sensitive Data Criteria Editor](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information.

__Step 8 –__ Click __Next__. The Filters view appears.

![Filters Page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/collectionsensitivedatafilter.png)

__Step 9 –__ Click __Connections__ to open the Manage Connections window.

__NOTE:__ SQL databases must be added to the query before they can be scanned. Before you can add a query, you must establish a connection to the database.

![Manage Connections](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/collectionsensitivedataconnection.png)

__Step 10 –__ In the Manage Connections window, click __Create New Connection__ and add the following information:

- Instance Label — The name of the instance
- Database System — Unique identifier for the database. Select the server to connect to from the dropdown list.
- Service Name — Unique identifier for the service. Enter a Service Name.
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the selected database
- Default Database — Default Database

__Step 11 –__ Exit the Manage Connections window to return to the Filter page.

__Step 12 –__ Select Only select database objects. or __All database objects__. The query is configured by default to target Only select database objects.

__NOTE:__ For more information on filtering, see the [SQL: Filter](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/sql/filter.md) page.

__Step 13 –__ Click Retrieve. The Available database objects box will populate.

__Step 14 –__ Add the Databases and instances to be audited. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally use the Add Custom Filter button to create and apply a custom filter.

The selected database objects to be audited display.

__Step 15 –__ Click __Next__ and navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 1-Db2_SensitsveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the Redshift_SensitiveDataScan

Navigate to the ____Databases > 0.Collection >__Redshift >__ __Redshift_SensitiveDataScan__ > __Configure__ node and select __Analysis__ to view the Analysis Tasks. The Analysis tasks do not require any configuration as they just populate the reports with the collected information and do not collect data themselves.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/analysiscollectionsensitivedatascan.png)

The default analysis tasks are:

- Bring SA_SQL_Instances to View — Displays the SA_SQL_Instances table
- Redshift SDD Matches View — Brings the Redshift SDD Matches View to the Enterprise Auditor console
- Redshift SDD Matches Hits View — Brings the SA_SQL Match Hits View to the Enterprise Auditor console
- Redshift ADD AIC Import —Imports Redshift SDD into the AIC
