---
sidebar_position: 5585
title: Collection > PF_ContentScans Job
---

# Collection > PF\_ContentScans Job

The PF\_ContentScans job is comprised of data collection that focuses on public folder content aging within each public folder.

![Collection > PF_ContentScans Job in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Content/CollectionJobsTree.png "Collection > PF_ContentScans Job in the Jobs Tree")

The PF\_ContentScans job is located in the 0.Collection job group.

## Queries for the PF\_ContentScans Job

The PF\_ContentScans job uses the ExchangePS Data Collector.

![Queries for the PF_ContentScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Content/ContentScansQuery.png "Queries for the PF_ContentScans Job")

The following query is included in the PF\_ContentScans job:

* PF Contents – Collects content aging information

  * By default set to search all public folders. It can be scoped.
  * See the [Scope the ExchangePS Data Collector](../../CASMetrics/EX_ASPolicies#Scope_the_ExchangePS "Scope the ExchangePS Data Collector") topic for additional information

## Analysis Tasks for the PF\_ContentScans Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Content** > **Collection** > **PF\_ContentScans** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the PF_ContentScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Content/ContentScansAnalysis.png "Analysis Tasks for the PF_ContentScans Job")

The following analysis task is selected by default:

* Strip Replicas from Reports – Removes duplicates from reports