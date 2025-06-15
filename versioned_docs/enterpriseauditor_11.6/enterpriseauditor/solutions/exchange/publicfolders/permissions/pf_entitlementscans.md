# Collection > PF_EntitlementScans Job

The PF_EntitlementScans job is comprised of data collection that focuses on public folder permissions.

![Collection > PF_EntitlementScans Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The PF_EntitlementScans job is located in the Collection job group.

## Queries for the PF_EntitlementScans Job

The PF_EntitlementScans job uses the ExchangePS Data Collector.

![Queries for the PF_EntitlementScans Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/publicfolders/permissions/entitlementscansquery.png)

The following query is included in the PF_EntitlementScans job:

- Public Folder Permissions – Collects public folder permissions

  - By default set to search all public folders. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector) topic for additional information

## Analysis Tasks for the PF_EntitlementScans Job

View the analysis tasks by navigating to the __Exchange__ > __5. Public Folders__ > __Permissions__ > __Collection__ > __PF_EntitlementScans__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the PF_EntitlementScans Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/publicfolders/permissions/entitlementscansanalysis.png)

The following analysis tasks are selected by default:

- Compress and Index Collection – Compresses and indexes the collection
- Strip Replicas from Reports – Updates table to remove replicas
