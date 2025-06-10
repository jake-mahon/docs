# EX\_SendAs Job

The EX\_SendAs job collects data from Active Directory to identify the Active Directory rights applied to a mailbox.

## Queries for the EX\_SendAs Job

The EX\_SendAs job uses the ExchangePS Data Collector.

![Queries for the EX_SendAs Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/sendasquery.webp)

The following query is included in the EX\_SendAs Job:

- Send AS - Rights – Collects Exchange mailbox folder permissions

  - By default set to search all mailboxes. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector) topic for additional information

  __NOTE:__ The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](/docs/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/powershell.md) topic for credential requirements.

## Analysis Tasks for the EX\_SendAs Job

View the analysis task by navigating to the __Exchange__ > __4. Mailboxes__ > __Permissions__ > __0.Collection__ > __EX\_SendAs__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_SendAs Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/sendasanalysis.webp)

The following analysis task is selected by default:

- Index Collection – Creates an index on the collection for use by downstream analysis and report generation
