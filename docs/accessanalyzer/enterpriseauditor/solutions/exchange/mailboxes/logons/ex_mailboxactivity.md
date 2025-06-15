# 0.Collection > EX_MailboxActivity Job

The EX_MailboxActivity job collects logs of Native Mailbox Access Auditing from Exchange to provide reporting around mailbox logon activity.

![0.Collection > EX_MailboxActivity Job in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.webp)

The EX_MailboxActivity job is located in the 0.Collection job group.

__NOTE:__ This job requires that Exchange Access Auditing is enabled in the Exchange environment.

## Queries for the EX_MailboxActivity Job

The EX_MailboxActivity Job uses the ExchangePS Data Collector.

![Queries for the EX_MailboxActivity Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/logons/mailboxactivityquery.webp)

The following query is included with the EX_MailboxActivity job:

- Exchange Mailbox Logons – Collects data on Exchange mailbox access logons

  - By default set to search all mailboxes. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](../../casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector) topic for additional information

  __NOTE:__ The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](../../../../requirements/solutions/exchange/powershell.md) topic for credential requirements.
