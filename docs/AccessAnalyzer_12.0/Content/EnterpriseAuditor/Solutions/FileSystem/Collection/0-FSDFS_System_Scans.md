---
sidebar_position: 5210
title: 0-FSDFS System Scans Job
---

# 0-FSDFS System Scans Job

The 0-FSDFS System Scans job enumerates a list of all root and link targets in the distributed file system and creating a dynamic host list that will be used by the components.

## Query for the 0-FSDFS System Scans Job

The DFS System Scan Query uses the FSAA Data Collector and has been preconfigured to use the DFS Scan Category.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the 0-FSDFS System Scans Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSDFSSystemScansQuery.png "Query for the 0-FSDFS System Scans Job")

* DFS System Scan – Scans the DFS System

## Analysis Tasks for the 0-FSDFS System Scans Job

View the analysis tasks by navigating to the **FileSystem** > **0.Collection** > **0-FSDFS System Scans** > **Configure** node and selecting **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the 0-FSDFS System Scans Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSDFSSystemScansAnalysis.png "Analysis Tasks for the 0-FSDFS System Scans Job")

The following analysis tasks are selected by default:

* Create Hosts View – Creates the 0-FSDFS\_System\_HostView visible through the Results node that contains the dynamic host list
* Create Views – Creates the FSDFS\_NamespacesTraversalView visible through the Results node that contains expansion of all the scanned namespaces