---
sidebar_position: 5280
title: FS_HourlyShareActivity Job
---

# FS\_HourlyShareActivity Job

The FS\_HourlyShareActivity job is designed to report on the highest hourly activity event information from targeted file servers broken down by share.

## Analysis Tasks for the FS\_HourlyShareActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious Activity** > **FS\_HourlyShareActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_HourlyShareActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/SuspiciousActivity/HourlyShareActivityAnalysis.png "Analysis Tasks for the FS_HourlyShareActivity Job")

The following analysis task is selected by default:

* Summarize hourly norms and deviations – Creates the SA\_FS\_HourlyShareActivity\_Deviations table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_HourlyShareActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual Share Activity | This report will show any outliers in hourly share activity, broken down by day of week and hour. | None | This report is comprised of two elements:   * Bar Chart – Displays abnormal share activity * Table – Provides details on share activity |