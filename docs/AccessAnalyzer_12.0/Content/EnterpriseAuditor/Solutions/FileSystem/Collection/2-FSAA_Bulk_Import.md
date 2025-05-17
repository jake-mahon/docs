---
sidebar_position: 5208
title: 2-FSAA Bulk Import Job
---

# 2-FSAA Bulk Import Job

The 2-FSAA Bulk Import job is designed to import collected access information from the targeted file servers.

## Query for the 2-FSAA Bulk Import Job

The Bulk import query uses the FSAA Data Collector and has been preconfigured to use the File system access/permission auditing Bulk import category.

![Query for the 2-FSAA Bulk Import Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSAABulkImportQuery.png "Query for the 2-FSAA Bulk Import Job")

* Bulk import – Imports scan data into SQL Server

  * Typically, this query is not modified. See the [FileSystemAccess Data Collector](../../../Admin/DataCollector/FSAA/Overview "FileSystemAccess Data Collector") topic for information on when this query should be modified.

## Analysis Tasks for the 2-FSAA Bulk Import Job

View the analysis tasks by navigating to the **FileSystem** > **0.Collection** > **2-FSAA Bulk Import** > **Configure** node and selecting **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the 2-FSAA Bulk Import Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSAABulkImportAnalysis.png "Analysis Tasks for the 2-FSAA Bulk Import Job")

The following analysis tasks are selected by default:

* Update Statistics – Improves performance on the FSAA tables
* Resolve links – Resolves DFS links in standard tables

The following analysis task is deselected by default:

* Nasuni – Resolves links for Nasuni Hosts