---
sidebar_position: 5130
title: 2-Dropbox_Permissions Bulk Import Job
---

# 2-Dropbox\_Permissions Bulk Import Job

The 2-Dropbox\_Permissions Bulk Import job imports the data collected by the 1-Dropbox \_Permissions Scan job to the Access Analyzer database for use by the analysis tasks.

**CAUTION:** This job should not be run if running sensitive data scans against the Dropbox Business environment.

## Queries for the 2-Dropbox\_Permissions Bulk Import Job

The 2-Dropbox\_Permissions Bulk Import job has been preconfigured to run with the default settings with the category of Bulk Import Access Scan Results.

![Queries for the 2-Dropbox_Permissions Bulk Import Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Dropbox/Collection/PermissionsBulkImportQuery.png "Queries for the 2-Dropbox_Permissions Bulk Import Job")

The query for the 2-Dropbox\_Permissions Bulk Import job is:

* Dropbox Bulk Import – Imports data collected by the 1-Dropbox\_Permissions Scan job to the Access Analyzer database

There are no customization options available for this job. The Summary page of the Dropbox Access Auditor Data Collector wizard can be viewed at the **Jobs** > **Dropbox** > **0.Collection** > **2-Dropbox\_Permissions Bulk Import** > **Configure** > **Queries** node.