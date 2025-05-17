---
sidebar_position: 5437
title: SQL_Activity Job
---

# SQL\_Activity Job

The SQL\_Activity Job provides insight into user activity in target SQL server instances and databases based on SQL Server Audit Specification settings.

## Analysis Tasks for the SQL\_Activity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL\_Activity > Configure node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup31.png "Analysis Selection")

The default analysis tasks are:

* List SQL User Activity Details – Creates the SA\_SQLServer\_Activity\_Details table accessible under the job’s Results node
* User Activity Database Summary – Creates the SA\_SQLServer\_Activity\_UserDatabaseSummary table accessible under the job’s Results node
* User Activity Instance Summary – Creates the SA\_SQLServer\_Activity\_UserInstanceSummary table accessible under the job’s Results node

In addition to the tables and views created the analysis task, the SQL\_Activity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Activity Summary | This report lists all SQL events, and summarizes them by database and instance. | None | This report is comprised of three elements:   * Bar Chart – Displays users with most events by instance * Table – Provides details on users with most events by database * Table – Provides details on event details |