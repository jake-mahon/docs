---
sidebar_position: 5463
title: Db2_DirectPermissions Job
---

# Db2\_DirectPermissions Job

This job provides insight into direct user and role permissions to all the database objects in the targeted Db2 database servers.

## Analysis Tasks for the Db2\_DirectPermissions Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Permissions** > **Db2\_DirectPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Db2_DirectPermissions Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Db2/DirectPermissionsAnalysis.png "Analysis Tasks for the Db2_DirectPermissions Job")

The default analysis tasks are:

* Direct Permissions – Highlights permissions directly assigned to Db2 objects
* Database Summary – Summarizes Db2 direct permissions by database

## Report for the Db2\_DirectPermissions Job

In addition to the tables and views created the analysis task, the Db2\_DirectPermissions job produces the following preconfigured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Direct Permissions | This report shows details on the direct permissions in the audited Db2 environment. | None | This report is comprised of three elements:   * Bar Chart – Displays Database Summary * Table – Displays Database Summary * Table – Displays permissions details |