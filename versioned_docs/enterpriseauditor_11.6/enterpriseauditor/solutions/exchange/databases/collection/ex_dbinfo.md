# 1.Local > EX\_DBInfo Job

The EX\_DBInfo job utilizes Exchange PowerShell to gather 2010/2013 Mailbox Size information.

![1.Local > EX_DBInfo Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/collection/localjobstree.png)

The EX\_DBInfo job is located in the 1.Local job group.

__NOTE:__ An actual CAS name is required for the data collection. When targeting Exchange 2013 or 2016, it is possible for the __Settings__ > __Exchange__ node to have been configured with a web address instead of an actual server. See the [ExchangePS Data Collector & Client Access Server](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/recommended.md) topic for additional information.

## Queries for the EX\_DBInfo Job

The EX\_DBInfo Job uses the ExchangePS Data Collector.

![Queries for the EX_DBInfo Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/collection/dbinfoquery.png)

The following query is included in the EX\_DBInfo Job:

- Exchange 2010 Store Size – Collects mailbox size information

  - By default set to search all mailboxes. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector) topic for additional information
