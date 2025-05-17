---
sidebar_position: 5613
title: 1.Local > EX_DBInfo Job
---

# 1.Local > EX\_DBInfo Job

The EX\_DBInfo job utilizes Exchange PowerShell to gather 2010/2013 Mailbox Size information.

![1.Local > EX_DBInfo Job in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Databases/LocalJobsTree.png "1.Local > EX_DBInfo Job in the Jobs Tree")

The EX\_DBInfo job is located in the 1.Local job group.

**NOTE:** An actual CAS name is required for the data collection. When targeting Exchange 2013 or 2016, it is possible for the **Settings** > **Exchange** node to have been configured with a web address instead of an actual server. See the [ExchangePS Data Collector & Client Access Server](../../Recommended#_ExchangePS_Data_Collector_1 "ExchangePS Data Collector & Client Access Server") topic for additional information.

## Queries for the EX\_DBInfo Job

The EX\_DBInfo Job uses the ExchangePS Data Collector.

![Queries for the EX_DBInfo Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Databases/DBInfoQuery.png "Queries for the EX_DBInfo Job")

The following query is included in the EX\_DBInfo Job:

* Exchange 2010 Store Size – Collects mailbox size information

  * By default set to search all mailboxes. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information