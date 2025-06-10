# 1-AzureSQL\_PermissionScan Job

The 1–AzureSQL\_PermissionScan Job is designed to collect Azure SQL instance and database level permissions from all the targeted instances.

## Queries for the 1–AzureSQL\_PermissionsScan Job

The 1–AzureSQL\_PermissionsScan Job uses the SQL Data Collector for the following query:

![Query Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/permissionjob.webp)

- PermissionScan — Collects permissions from the targeted instances

### Configure the PermissionsScan Query

The 1-AzureSQL\_PermissionScan Job is preconfigured to run using the default settings within the Permissions Collection category. Follow the steps to customize configurations.

__Step 1 –__ Navigate to the __Databases__ > 0.Collection > AzureSQL > 1-AzureSQL\_PermissionsScan > Configure node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the PermissionsScan query and click on Query Properties. The Query Properties window appears.

__Step 3 –__ Select the Data Source tab and click Configure. The SQL Data Collector Wizard opens.

__CAUTION:__ Do not make changes to other wizard pages as they have been pre-configured for this job.

![Filters](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/1sqlpermissionscanfilterpage.webp)

__Step 4 –__ To query for specific databases/instances, navigate to the [SQL Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/sql/overview.md) page. The default query target is All databases. The default query scope is Only select database objects and click Retrieve. The Available database objects will be populated. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add.
- Use the Import CSV button to import a list from a CSV file, if desired.
- Optionally, use the Add Custom Filter button to create and apply a custom filter.

![Managed Connection Window](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/managedconnections.webp)

__Step 5 –__ To view all managed connections discovered during the 1-AzureSQL\_PermissionScan Job run, click Connections within the Filter page. This screen will list the following items retrieved during the job run:

- All databases discovered
- Any configurations made before the job run

Select any of the discovered databases and click Test Connection to ensure the database has connected properly.

__Step 6 –__ Navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 1-AzureSQL\_PermissionsScan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1–AzureSQL\_PermissionsScan Job

Navigate to the Databases > 0.Collection > __AzureSQL__ > 1-AzureSQL\_PermissionsScan > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/azuresql/collection/jobanalysis.webp)

The default analysis tasks are:

- AIC Import – Hosts — Imports SQL Hosts to the AIC
- AIC Import – Instance Permissions Node — Imports a node for instance permission for each instance
- AIC Import – Databases — Imports each database in the SQL instances
- AIC Import – Permissions — Imports SQL Permission to the AIC
- AIC Import – Roles — Imports a Roles node into the AIC for Azure SQL Roles
- AIC Import – Database Role Permissions — Imports role Permission at the database level
- AIC Import – Local SQL Server — Imports Azure SQL local groups to the AIC
- AIC Import – Instance Role — Imports permissions assigned to roles at the instance level
