---
sidebar_position: 5394
title: Box_WeekendActivity Job
---

# Box\_WeekendActivity Job

The Box\_WeekendActivity Job highlights unusual download activity for a user on a specific day by analyzing the download activity for a given user and looking for outliers. Unusual download activity could indicate a compromised account or a malicious insider.

## Analysis Tasks for the Box\_WeekendActivity Job

Navigate to **Box** >  **1.Activity** >  **Suspicious Activity** >  **Box\_WeekendActivity** >  **Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_WeekendActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/SuspiciousActivity/WeekendActivityAnalysis.png "Analysis Tasks for the Box_WeekendActivity Job")

The following analysis tasks are selected by default:

* Weekend Activity – Creates the Box\_WeekendActivity\_Details table accessible under the job’s Results node
* Weekend Activity Summary – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_WeekendActivity Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Weekend Activity | This report highlights the activity occurring on weekends in the target Box environment over the last 30 days. | None | This report is comprised of three elements:   * Bar Chart – Displays last 30 days of weekend activity for top 5 users * Table – Provides summary top 30 days of weekend activity * Table – Provides details on weekend Activity Details |