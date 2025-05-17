---
sidebar_position: 5406
title: Configuration > MongoDB_Database_Sizing Job
---

### Analysis Tasks for the MongoDB\_Database\_Sizing Job

Navigate to the **Jobs > Databases > MongoDB > Configuration > MongoDB\_DatabaseSizing > Configure** node and select Analysis to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/MongoDB/DatabaseSizingJobAnalysis.png "Analysis Selection")

The default analysis tasks are:

* MongoDB Database Sizing Details — Provides details about MongoDB databases and sizing
* MongoDB Database Sizing Summary — Summarizes MongoDB database sizing by node or cluster

### Report for the MongoDB\_Database\_Sizing Job

In addition to the tables and views created the analysis task, the MongoDB\_DatabaseSizing Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Sizing | This report highlights the size of databases in MongoDB. | None. | This report is comprised of three elements:   * Bar Chart - Displays top databases by size (MB) * Bar Chart - Displays database size by host (GB) * Table - Displays details on database sizing |