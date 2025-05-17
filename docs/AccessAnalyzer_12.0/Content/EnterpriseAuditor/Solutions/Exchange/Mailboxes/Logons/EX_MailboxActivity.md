---
sidebar_position: 5595
title: 0.Collection > EX_MailboxActivity Job
---

# 0.Collection > EX\_MailboxActivity Job

The EX\_MailboxActivity job collects logs of Native Mailbox Access Auditing from Exchange to provide reporting around mailbox logon activity.

![0.Collection > EX_MailboxActivity Job in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Logons/CollectionJobsTree.png "0.Collection > EX_MailboxActivity Job in the Jobs Tree")

The EX\_MailboxActivity job is located in the 0.Collection job group.

**NOTE:** This job requires that Exchange Access Auditing is enabled in the Exchange environment.

## Queries for the EX\_MailboxActivity Job

The EX\_MailboxActivity Job uses the ExchangePS Data Collector.

![Queries for the EX_MailboxActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Logons/MailboxActivityQuery.png "Queries for the EX_MailboxActivity Job")

The following query is included with the EX\_MailboxActivity job:

* Exchange Mailbox Logons – Collects data on Exchange mailbox access logons

  * By default set to search all mailboxes. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](../../../../Requirements/Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for credential requirements.