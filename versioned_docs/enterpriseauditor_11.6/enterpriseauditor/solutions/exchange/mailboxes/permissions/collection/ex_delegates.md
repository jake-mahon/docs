# EX\_Delegates Job

The EX\_Delegates job collects data from Active Directory to identify the delegates applied to a mailbox.

## Queries for the EX\_Delegates Job

The EX\_Delegates job uses the ExchangePS Data Collector.

![Queries for the EX_Delegates Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/delegatesquery.png)

The following query is included with the EX\_Delegates job:

- Delegates – Collects delegates applied to each mailbox

  - By default set to search all mailboxes. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector) topic for additional information

  __NOTE:__ The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/solutions/exchange/powershell.md) topic for credential requirements.
