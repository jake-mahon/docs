# 2-Dropbox\_Permissions Bulk Import Job

The 2-Dropbox\_Permissions Bulk Import job imports the data collected by the 1-Dropbox \_Permissions Scan job to the Access Analyzer database for use by the analysis tasks.

__CAUTION:__ This job should not be run if running sensitive data scans against the Dropbox Business environment.

## Queries for the 2-Dropbox\_Permissions Bulk Import Job

The 2-Dropbox\_Permissions Bulk Import job has been preconfigured to run with the default settings with the category of Bulk Import Access Scan Results.

![Queries for the 2-Dropbox_Permissions Bulk Import Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/permissionsbulkimportquery.webp)

The query for the 2-Dropbox\_Permissions Bulk Import job is:

- Dropbox Bulk Import – Imports data collected by the 1-Dropbox\_Permissions Scan job to the Access Analyzer database

There are no customization options available for this job. The Summary page of the Dropbox Access Auditor Data Collector wizard can be viewed at the __Jobs__ > __Dropbox__ > __0.Collection__ > __2-Dropbox\_Permissions Bulk Import__ > __Configure__ > __Queries__ node.
