---
sidebar_position: 5281
title: FS_WeekendActivity Job
---

# FS\_WeekendActivity Job

The FS\_WeekendActivity job is comprised of analysis and reports which use the data collected by the **0.Collection** job group to provide information on weekend file server activity and the user accounts which perform the most weekend activity. Best practices often dictate monitoring of weekend activity for potential security concerns.

## Analysis Tasks for the FS\_WeekendActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious Activity** > **FS\_WeekendActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_WeekendActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/SuspiciousActivity/WeekendActivityAnalysis.png "Analysis Tasks for the FS_WeekendActivity Job")

The following analysis tasks are selected by default:

* Weekend Activity – Creates the SA\_FS\_WeekendActivity\_Details table accessible under the job’s Results node
* User Summary – Creates the SA\_FS\_WeekendActivity\_UserSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_WeekendActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Weekend Activity  (Most Active Users on Weekend) | This report shows users who are active on the weekend inside file shares. | None | This report is comprised of two elements:   * Bar Chart – Displays weekend share activity - top 5 users * Table – Provides details on weekend share activity by user |