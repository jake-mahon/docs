---
sidebar_position: 5588
title: Collection > PF_EntitlementScans Job
---

# Collection > PF\_EntitlementScans Job

The PF\_EntitlementScans job is comprised of data collection that focuses on public folder permissions.

![Collection > PF_EntitlementScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Permissions/CollectionJobsTree.png "Collection > PF_EntitlementScans Job")

The PF\_EntitlementScans job is located in the Collection job group.

## Queries for the PF\_EntitlementScans Job

The PF\_EntitlementScans job uses the ExchangePS Data Collector.

![Queries for the PF_EntitlementScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Permissions/EntitlementScansQuery.png "Queries for the PF_EntitlementScans Job")

The following query is included in the PF\_EntitlementScans job:

* Public Folder Permissions – Collects public folder permissions

  * By default set to search all public folders. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

## Analysis Tasks for the PF\_EntitlementScans Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Permissions** > **Collection** > **PF\_EntitlementScans** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the PF_EntitlementScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Permissions/EntitlementScansAnalysis.png "Analysis Tasks for the PF_EntitlementScans Job")

The following analysis tasks are selected by default:

* Compress and Index Collection – Compresses and indexes the collection
* Strip Replicas from Reports – Updates table to remove replicas