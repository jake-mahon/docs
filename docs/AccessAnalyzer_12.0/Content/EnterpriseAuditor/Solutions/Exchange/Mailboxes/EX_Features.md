---
sidebar_position: 5545
title: Features > EX_Features Job
---

# Features > EX\_Features Job

The EX\_Features job is comprised of data collection and a report that provides information around which features have been enabled or disabled on Mailboxes, such as ActiveSync, IMAP, POP and more.

***RECOMMENDED:*** Schedule the Features Job Group to run weekly on any desired recurrence.

![Features > EX_Features Job in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/FeaturesJobsTree.png "Features > EX_Features Job in the Jobs Tree")

The EX\_Features job is located in the Features job group.

## Queries for the EX\_Features Job

The EX\_Features Job uses the ExchangePS Data Collector.

![Queries for the EX_Features Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/FeaturesQuery.png "Queries for the EX_Features Job")

The following query is included with the EX\_Features Job:

* User Mailbox Settings – Collects user mailbox settings

  * By default set to search all mailboxes. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](../../../Requirements/Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for credential requirements.

In addition to the table created by the query, the EX\_Features Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Mailbox Features | This report identifies features introduced in Exchange for each mailbox. | None | This report is comprised of one element:   * Table – Provides details on mailbox features |