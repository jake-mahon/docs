# Collection > PF\_ContentScans Job

The PF\_ContentScans job is comprised of data collection that focuses on public folder content aging within each public folder.

![Collection > PF_ContentScans Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The PF\_ContentScans job is located in the 0.Collection job group.

## Queries for the PF\_ContentScans Job

The PF\_ContentScans job uses the ExchangePS Data Collector.

![Queries for the PF_ContentScans Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/content/contentscansquery.png)

The following query is included in the PF\_ContentScans job:

- PF Contents – Collects content aging information

  - By default set to search all public folders. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#Scope-the-ExchangePS-Data-Collector) topic for additional information

## Analysis Tasks for the PF\_ContentScans Job

View the analysis task by navigating to the __Exchange__ > __5. Public Folders__ > __Content__ > __Collection__ > __PF\_ContentScans__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the PF_ContentScans Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/content/contentscansanalysis.png)

The following analysis task is selected by default:

- Strip Replicas from Reports – Removes duplicates from reports
