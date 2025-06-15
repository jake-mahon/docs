# EX_Delegates Job

The EX_Delegates job collects data from Active Directory to identify the delegates applied to a
mailbox.

## Queries for the EX_Delegates Job

The EX_Delegates job uses the ExchangePS Data Collector.

![Queries for the EX_Delegates Job](../../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/delegatesquery.webp)

The following query is included with the EX_Delegates job:

- Delegates – Collects delegates applied to each mailbox

    - By default set to search all mailboxes. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](../../../casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

    **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
    Exchange on-premises environments. See the
    [Exchange PowerShell Permissions](../../../../../requirements/solutions/exchange/powershell.md)
    topic for credential requirements.
