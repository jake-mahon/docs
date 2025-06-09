# Redshift\_TablePrivileges Job

The Redshift\_TablePrivileges job is designed to collect Redshift table privileges from all the targeted servers.

## Queries for the Redshift\_TablePrivileges Job

The Redshift\_TablePrivileges Job uses the SQL Data Collector for queries.

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/redshift/collection/tableprivilegesquery.png)

The query is:

- Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the Redshift\_TablePrivileges Job

Navigate to the __Databases__ > __0.Collection__ > __Redshift__ > __Redshift\_TablePrivileges__ > __Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/redshift/collection/tableprivilegesanalysis.png)

The default analysis task is:

- AIC Import - Redshift Permissions – Imports Redshift table privileges to the AIC.
- AIC Import - Databases – Imports Redshift database and schema nodes to the AIC.
