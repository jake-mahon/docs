---
sidebar_position: 5606
title: EX_Delegates Job
---

# EX\_Delegates Job

The EX\_Delegates job collects data from Active Directory to identify the delegates applied to a mailbox.

## Queries for the EX\_Delegates Job

The EX\_Delegates job uses the ExchangePS Data Collector.

![Queries for the EX_Delegates Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Permissions/DelegatesQuery.png "Queries for the EX_Delegates Job")

The following query is included with the EX\_Delegates job:

* Delegates – Collects delegates applied to each mailbox

  * By default set to search all mailboxes. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](../../../../../Requirements/Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for credential requirements.