# 3-AzureSQL\_ActivityScan Job

The 3–AzureSQL\_ActivityScan job captures user activity from all targeted Azure SQL instances and databases.

## Queries for the 3–AzureSQL\_ActivityScan Job

The 3–AzureSQL\_ActivityScan Job uses the SQL Data Collector for the following query:

![Query Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/activityscanjob.png)

- Activity — Collects activity events for Azure SQL

## Analysis Task for the 3–AzureSQL\_ActivityScan Job

Navigate to the __Databases__ > __0.Collection__ > __Azure SQL__ > __3–AzureSQL\_ActivityScan__ > __Configure__ node and select __Analysis__ to view the analysis task.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![3-AzureSQL_ActivityScan Job - Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/activityscanjobanalysis.png)

The default analysis task is:

- AIC Import – Activity — Imports Azure SQL Activity to the AIC
