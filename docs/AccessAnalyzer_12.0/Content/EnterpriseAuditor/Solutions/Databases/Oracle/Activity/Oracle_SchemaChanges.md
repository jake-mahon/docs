---
sidebar_position: 5511
title: Oracle_SchemaChanges Job
---

# Oracle\_SchemaChanges Job

The Oracle\_SchemaChanges Job is designed to provide detailed information about changes in schema across all database objects.

## Analysis Tasks for the Oracle\_SchemaChanges Job

Navigate to the **Oracle** > **2.Activity** > **Oracle\_SchemaChanges** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup29.png "Analysis Selection")

The default analysis tasks are:

* Oracle Schema Change Details – Highlights activity involving schema changes in the audited Oracle Instances. Creates the SA\_Oracle\_SchemaChange\_Details table accessible under the job’s Results node.
* Schema Change Summary – Summarizes schema changes per instance. Creates the SA\_Oracle\_SchemaChange\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_SchemaChanges Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Schema Change Activity | This report lists all schema change related Oracle events, and summarizes them by instance. | None | This report is comprised of three elements:   * Bar Chart – Displays top instances by schema change activity * Table –  Provides details on instances by schema change activity * Table – Provides details on schema change details |