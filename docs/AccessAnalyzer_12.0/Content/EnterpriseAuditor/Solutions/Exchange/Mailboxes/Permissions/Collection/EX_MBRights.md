---
sidebar_position: 5607
title: EX_MBRights Job
---

# EX\_MBRights Job

The EX\_MBRights job collects data from Active Directory to identify the mailbox rights applied to a mailbox.

## Queries for the EX\_MBRights Job

The EX\_MBRights job uses the ExchangePS Data Collector.

![Queries for the EX_MBRights Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Permissions/MBRightsQuery.png "Queries for the EX_MBRights Job")

The following query is included in the EX\_MBRights Job:

* Mailbox Rights – Collects mailbox rights

  * By default set to search all mailboxes. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](../../../../../Requirements/Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for credential requirements.