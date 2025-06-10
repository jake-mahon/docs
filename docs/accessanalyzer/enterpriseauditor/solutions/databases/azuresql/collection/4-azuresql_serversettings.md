# 4-AzureSQL\_ServerSettings Job

The 4–AzureSQL\_ServerSettings Job is designed to collect Azure SQL instance and database configuration settings so they can be evaluated against recommended best practices.

## Queries for the 4–AzureSQL\_ServerSettings Job

The 4–AzureSQL\_ServerSettings Job uses the SQL Data Collector for the following query:

![0.Collection_4–AzureSQL_ServerSettings Job - Query Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/serversettings.webp)

- Database Sizing— Returns details on database sizing
- Server Details — Collects Azure SQL Server properties
- Configuration Details— Collects database configuration properties
- Table Row Counts— Returns Azure SQL table row counts for additional data points in the sensitive data reports
- Standalone Database Sizing— Returns the size of Azure standalone databases

## Analysis Tasks for the 4–AzureSQL\_ServerSettings Job

Navigate to the __Databases__ > __0.Collection__ > __Azure SQL__ > __4–AzureSQL\_ServerSettings__ > __Configure__ node and select __Analysis__ to view the analysis task.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/serversettingsanalysis.webp)

The default analysis tasks are:

- Update Database Sizing — Updates the database sizing table with the data from the standalone database sizing table
