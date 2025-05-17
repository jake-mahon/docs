---
sidebar_position: 5608
title: EX_SendAs Job
---

# EX\_SendAs Job

The EX\_SendAs job collects data from Active Directory to identify the Active Directory rights applied to a mailbox.

## Queries for the EX\_SendAs Job

The EX\_SendAs job uses the ExchangePS Data Collector.

![Queries for the EX_SendAs Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Permissions/SendAsQuery.png "Queries for the EX_SendAs Job")

The following query is included in the EX\_SendAs Job:

* Send AS - Rights – Collects Exchange mailbox folder permissions

  * By default set to search all mailboxes. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

  **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](../../../../../Requirements/Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for credential requirements.

## Analysis Tasks for the EX\_SendAs Job

View the analysis task by navigating to the **Exchange** > **4. Mailboxes** > **Permissions** > **0.Collection** > **EX\_SendAs** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_SendAs Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Permissions/SendAsAnalysis.png "Analysis Tasks for the EX_SendAs Job")

The following analysis task is selected by default:

* Index Collection – Creates an index on the collection for use by downstream analysis and report generation