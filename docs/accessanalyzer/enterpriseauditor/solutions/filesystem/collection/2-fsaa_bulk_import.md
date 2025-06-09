# 2-FSAA Bulk Import Job

The 2-FSAA Bulk Import job is designed to import collected access information from the targeted file servers.

## Query for the 2-FSAA Bulk Import Job

The Bulk import query uses the FSAA Data Collector and has been preconfigured to use the File system access/permission auditing Bulk import category.

![Query for the 2-FSAA Bulk Import Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/fsaabulkimportquery.png)

- Bulk import – Imports scan data into SQL Server

  - Typically, this query is not modified. See the [FileSystemAccess Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/overview.md) topic for information on when this query should be modified.

## Analysis Tasks for the 2-FSAA Bulk Import Job

View the analysis tasks by navigating to the __FileSystem__ > __0.Collection__ > __2-FSAA Bulk Import__ > __Configure__ node and selecting __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the 2-FSAA Bulk Import Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/fsaabulkimportanalysis.png)

The following analysis tasks are selected by default:

- Update Statistics – Improves performance on the FSAA tables
- Resolve links – Resolves DFS links in standard tables

The following analysis task is deselected by default:

- Nasuni – Resolves links for Nasuni Hosts
