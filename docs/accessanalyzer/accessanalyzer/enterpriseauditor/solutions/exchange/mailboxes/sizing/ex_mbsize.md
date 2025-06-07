# 0.Collection > EX\_MBSize Job

The EX\_MBSize job collects information from the Exchange environment about the mailbox sizes in the environment.

![0.Collection > EX_MBSize Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The EX\_MBSize job is located in the 0.Collection job group.

## Queries for the EX\_MBSize Job

The EX\_MBSize Job uses the ExchangePS Data Collector.

![Queries for the EX_MBSize Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/sizing/mbsizequery.png)

The following query is included in the EX\_MBSize Job:

- Mailbox Counts and Sizes – Identifies the Active Directory rights applied to a mailbox

  - By default set to search all mailboxes. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#Scope-the-ExchangePS-Data-Collector) topic for additional information

  __NOTE:__ The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/powershell.md) topic for credential requirements.
