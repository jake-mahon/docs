# MySQL\_SensitiveDataScan Job

The MySQL\_SensitiveDataScan Job is designed to discover sensitive data in MySQL databases based on pre-defined or user-defined search criteria.

## Queries for the MySQL\_SensitiveDataScan Job

The MySQL\_SensitiveDataScan Job uses the SQL Data Collector for queries.

![Query Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mysql/collection/sensitivedatascan.webp)

The query is:

- Sensitive Data Scan - Discovers MySQL Sensitive Data. See the [Configure the SensitiveDataScan Query](#configure-the-sensitivedatascan-query) for additional information.

### Configure the SensitiveDataScan Query

The MySQL\_SensitiveDataScan Job is preconfigured to run using the default settings for the Sensitive Data Collection category. Follow the steps to customize configurations.

__Step 1 –__ Navigate to the Databases > 0.Collection > MySQL > MySQL\_SensitiveDataScan > Configure node and select Queries.

__Step 2 –__ In the Query Selection view, select the Sensitive Data Scan query click on Query Properties. The Query Properties window appears.

__Step 3 –__ Select the Data Source tab, and click Configure. The SQL Data Collector Wizard opens.

__CAUTION:__ Do not make changes to other wizard pages as they have been pre-configured for this job.

![Sensitive Data Scan Settings](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mysql/collection/sensitivedatscan_optionspage.webp)

__Step 4 –__ To modify sensitive data scan options, select the desired scan options. See the [SQL: Options](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/sql/options.md#sqloptions) page for additional information.

__NOTE:__ The Sensitive Data Scan Settings are pre-configured for optimal performance for a high-level table scan. Configuring these settings to increase the scope of the sensitive data scan may significantly increase scan time.

![DLP Criteria for Scan](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mysql/collection/sensitivedatscan_criteriapage.webp)

__Step 5 –__ To modify criteria, navigate to the [SQL: Criteria](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/sql/criteria.md#sqlcriteria) page. By default, the Sensitive Data Scan job is configured to scan for criteria configured in the Global Criteria settings. See the [Sensitive Data Criteria Editor](/docs/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information.

![Filters Page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mysql/collection/sensitivedatscan_filterspage.webp)

__Step 6 –__ MySQL databases must be added to the query before they can be scanned. Navigate to the __Filter__ page and click __Connections__ to open the Manage Connections window.

![Manage Connections](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mysql/collection/manageconnectionsmysql.webp)

__Step 7 –__ In the Manage Connections window, click __New Connection__ and add the following information:

- Instance Label — The name of the instance
- Database System — Select MySQL from the dropdown list
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. The default port for MySQL is 3306

Exit the Manage Connections window to return to the Filter page.

__Step 8 –__ On the Filter page, the query is configured by default to target Only select database objects. Click Retrieve. The Available database objects box will populate. The default filter will scan all MySQL Databases returned, excluding the listed system schemas and tables in red. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Use the Add Custom Filter button to create and apply a custom filter.

__Step 9 –__ Navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The MySQL\_SensitiveDataScan Job is now ready to run with the customized settings.

## Analysis Tasks for the MySQL\_SensitiveDataScan Job

Navigate to the __Databases__ > __0.Collection__ > __MySQL__ > __MySQL\_SensitiveDataScan__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mysql/collection/analysismysqlsensitivedatascan.webp)

The default analysis tasks are:

- Bring SA\_SQL\_Instances to View — Displays the SA\_SQL\_Instances table
- MySQL SDD Matches View — Bring the MySQL SDD Matches View to the SA console
- MySQL SDD Match Hits View — Bring the MySQL SDD Match Hits View to the SA console
- MySQL SDD AIC Import — Imports to MySQL SDD to the AIC
