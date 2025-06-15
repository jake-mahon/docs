# 0-SQL_InstanceDiscovery Job

The 0-SQL_InstanceDiscovery job enumerates and stores the list of SQL Server Instances running on the targeted servers.

## Queries for the 0-SQL_InstanceDiscovery Job

The 0-SQL_InstanceDiscovery job uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/collection/instancedisc_query.png)

- SQL Server Instance Discovery — Collects the list of SQL Server Instances from target endpoints and populates the necessary instance connection information

## Analysis Tasks for the 0-SQL_InstanceDiscovery Job

Navigate to the __Databases__ > __0.Collection__ > __SQL__ > __0-SQL_InstanceDiscovery__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/collection/instancedisc_analysis.png)

The default analysis tasks is:

- SQL Instances — Brings SA_SQL_Instances table to view
