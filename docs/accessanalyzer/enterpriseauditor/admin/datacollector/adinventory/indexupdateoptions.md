# ADInventory: Index Update Options

Configure options for maintaining SQL Server indexes while running queries using the Index Update Options page.

![Active Directory Inventory DC Wizard Index Update Options page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/adinventory/indexupdateoptions.png)

The options on the Index Update Options page are:

- SQL Index Update Options:

  - Maximum Degree of Parallelism – Set the maximum limit of the Degree of Parallelism used for the query. Default is __1__.
  - Minimum Index Reorganization Threshold – Set the minimum index reorganization threshold that is performed while running the query. Default is __5__ percent.
  - Minimum Index Rebuilding Threshold – Set the minimum index rebuilding threshold that is performed while running the query. Default is __31__ percent.
- Select Data Collector Schemas– Select which schemas to maintain when running the query by selecting them from the table. Enable a schema for indexing by selecting the checkbox next to it. Right-click in the table to show options for __Check All__, __Clear All__, __Check All Selected Items__, and __Clear All Selected Items__.
