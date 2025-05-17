---
sidebar_position: 5516
title: Oracle_SysSchemaPermissions Job
---

# Oracle\_SysSchemaPermissions Job

The Oracle\_SysSchemaPermissions Job provides insight into users that have access to objects in the SYS schema, and the type permissions to those objects across all audited Oracle database servers.

## Analysis Tasks for the Oracle\_SysSchemaPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle\_SysSchemaPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup38.png "Analysis Selection")

The default analysis tasks are:

* Oracle Sys Schema Permissions – Highlights all permissions on tables in the Oracle schema. Creates the SA\_Oracle\_SysSchema table accessible under the job’s Results table.
* Oracle Sys Schema Summary – Summarizes sys schema permissions per instance. Creates the SA\_Oracle\_SysSchema\_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle\_SysSchemaPermissions Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SYS Schema Permissions | This report highlights SYS schema permissions across the audited environment | None | This report is comprised of three elements:   * Bar Chart – Displays sys schema permission by instance * Table – Provides details on sys schema permissions by instance * Table – Provides details on sys schema permission details |