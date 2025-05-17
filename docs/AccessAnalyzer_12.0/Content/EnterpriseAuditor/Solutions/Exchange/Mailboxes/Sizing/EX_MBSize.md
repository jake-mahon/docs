---
sidebar_position: 5603
title: 0.Collection > EX_MBSize Job
---

# 0.Collection > EX\_MBSize Job

The EX\_MBSize job collects information from the Exchange environment about the mailbox sizes in the environment.

![0.Collection > EX_MBSize Job in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Sizing/CollectionJobsTree.png "0.Collection > EX_MBSize Job in the Jobs Tree")

The EX\_MBSize job is located in the 0.Collection job group.

## Queries for the EX\_MBSize Job

The EX\_MBSize Job uses the ExchangePS Data Collector.

![Queries for the EX_MBSize Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Sizing/MBSizeQuery.png "Queries for the EX_MBSize Job")

The following query is included in the EX\_MBSize Job:

* Mailbox Counts and Sizes – Identifies the Active Directory rights applied to a mailbox

  * By default set to search all mailboxes. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](../../../../Requirements/Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for credential requirements.