# 0-AzureSQL\_InstanceDiscovery Job

The Azure SQL Instance Discovery job is responsible for enumerating a list of Azure SQL Server Instances from target endpoints and populating the necessary instance connection information which will be used throughout the solution set.

## Queries for the 0-AzureSQL\_InstanceDiscovery Job

The 0-AzureSQL\_InstanceDiscovery job uses the SQL Data Collector for the following query:

![Query Selection - Instance Discovery](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/instancediscquery.png)

- Azure SQL Instance Discovery — Collects the list of Azure SQL Server Instances from target endpoints and populates the necessary instance connection information

## Analysis Tasks for the 0-AzureSQL\_InstanceDiscovery Job

Navigate to the __Databases__ > __0.Collection__ > __AzureSQL__ > __0-AzureSQL\_InstanceDiscovery__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/instancediscanalysis.png)

The default analysis tasks is:

- SQL Instances — Brings SA\_SQL\_Instances table to view
