# FSAA: Scoping Queries

Use the Scoping Queries page to query the SQL database and return exclude and include resources from a specified host. This feature bypasses share permission requirements and eliminates the need for the Connection Profile credentials to have local Administrator or Power User permissions. It is a wizard page for the following categories:

- File System Access/Permission Auditing Scan
- Sensitive Data

![FSAA Data Collector Wizard Scoping Queries page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/scopingqueries.png)

The Scoping Queries buttons have the following functionality:

- Add – Add a resource to be included or excluded in the scoping query. Opens the Scoping Query Configuration window. See the [Scoping Query Configuration Window](#Scoping-Query-Configuration-Window) topic for additional information.
- View / Edit – Make changes to a previously added scoping query. Opens the Scoping Query Configuration window. See the [Scoping Query Configuration Window](#Scoping-Query-Configuration-Window) topic for additional information.
- Remove – Deletes the resource from the table and therefore the scan
- Migrate Scan Resource Filters – Migrates configured scan resource filters from the ```FSAAConfig.xml``` file and imports them into the FSAA data collector

  - There are two Scan Resource Filters migrated by default:

    - DFS Shares

      - Scoping Query that will query the SQL database and return a list of Distributed File System (DFS) Shares from the targeted host to include in the Scan
      - Requires the 0-FSDFS System Scans, 1-FSAA System Scans, and 2-FSAA Bulk Import jobs to have been run as a prerequisite
    - DG Open Shares

      - Scoping Query that will query the SQL database and return a list of Open Shares as identified by the 3-FSAA Exceptions job
      - Requires the 1-FSAA System Scans, 2-FSAA Bulk Import, and 3-FSAA Exceptions jobs to have been run as a prerequisite

__NOTE:__ These two Scan Resource Filters are both Share Include queries by default. To restrict the scan to only Open Shares or only DFS Shares it is necessary to also configure the Scoping Options on the previous page of the wizard to exclude all other shares.

For example, to restrict the scan to only Open Shares and exclude all other shares, the Scoping Options page should be configured as shown:

![FSAA Data Collector Wizard Scoping Options page Open shares configuration](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/scopingoptionsopenshares.png)

The Scoping Queries page should be configured as shown:

![FSAA Data Collector Wizard Scoping Queries page Open shares configuration](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/scopingqueriesopenshares.png)

See the [FSAA: Scoping Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/scopingoptions.md) topic for additional information and common scoping scenarios.

## Scoping Query Configuration Window

The Scoping Query Configuration window allows you to create a custom Scoping Query to specify shares and folders to be included in or excluded from the scan.

![Scoping Query Configuration window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/scopingqueryconfiguration.png)

Configure the following fields:

- Name – Enter a unique name for the scoping query
- Scoping Type – Choose from the dropdown menu the type of resource to scan
- Configure Query – Select __Configure Query__ to open the Advanced Scoping Options Query Configuration window. See the [Advanced Scoping Options Query Configuration Window](#Advanced-Scoping-Options-Query-Configuration-Window) topic for additional information.

___RECOMMENDED:___ Provide a descriptive Comment on the Scoping Queries page.

### Advanced Scoping Options Query Configuration Window

Clicking __Configure Query__ on the Scoping Query Configuration Window brings up the Advanced Scoping Options Query Configuration window.

![Advanced Scoping Options Query Configuration window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/advancedscopingoptionsqueryconfiguration.png)

Follow the steps to configure a query.

__Step 1 –__ Enter a SQL Query that will return a list of resources to be included in or excluded from the scan.

__NOTE:__ The target tables must reside within the Access Analyzer database and the result must return at least the following columns:

- Name
- Priority

__Step 2 –__ (Optional) Enter a host in the Host parameter value (@host) textbox to test the query to retrieve the data for that host.

__Step 3 –__ Select __Test Query__ to open a preview of the results in the Query Results window. Ensure that the data being retrieved by the query is expected.

__Step 4 –__ Click __OK__.

When a query configuration is enabled, the data collector runs against the target table to configure scoping for shares or folders in the environment.
