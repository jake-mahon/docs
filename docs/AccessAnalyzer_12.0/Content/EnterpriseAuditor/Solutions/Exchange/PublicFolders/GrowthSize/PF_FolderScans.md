---
sidebar_position: 5583
title: Collection > PF_FolderScans Job
---

# Collection > PF\_FolderScans Job

The PF\_FolderScans job is comprised of data collection that focuses on collecting sizing information for each public folder.

![Collection > PF_FolderScans Job in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/GrowthSize/CollectionJobsTree.png "Collection > PF_FolderScans Job in the Jobs Tree")

The PF\_FolderScans job is located in the Collection job group.

## Queries for the PF\_FolderScans Job

The PF\_FolderScans job uses the ExchangePS Data Collector.

![Queries for the PF_FolderScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/GrowthSize/FolderScansQuery.png "Queries for the PF_FolderScans Job")

The following query is included in the PF\_FolderScans Job:

* PF Size & Msg Counts – Collects public folder size and message counts

  * By default set to search all public folders. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

## Analysis Tasks for the PF\_FolderScans Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Growth and Size** > **Collection** > **PF\_FolderScans** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the PF_FolderScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/GrowthSize/FolderScansAnalysis.png "Analysis Tasks for the PF_FolderScans Job")

The following analysis task is selected by default:

* Strip Replicas from Reports – Removes duplicates from reports