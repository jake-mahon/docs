---
sidebar_position: 5387
title: Box_Deletions Job
---

# Box\_Deletions Job

The Box\_Deletions Job is comprised of analysis and reports, which use the data collected by the 0.Collection Job Group to identify file and folder deletions that have occurred over the past 30 days.

## Analysis Tasks for the Box\_Deletions Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box\_Deletions** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_Deletions Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/Forensics/DeletionsAnalysis.png "Analysis Tasks for the Box_Deletions Job")

The following analysis tasks are selected by default:

* Deletion Details – Creates the Box\_Deletion\_Details table accessible under the job’s Results node
* Deletions (Last 30 Days) – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_Deletions Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File and Folder Deletions (Deletion Events) | This report identifies deletion events for the past 30 days. The detailed report shows all resources that were successfully deleted as well as which users performed those events. | None | This report is comprised of two elements:   * Line Chart – Displays last 30 days of deletions * Table – Provides details on deletions |