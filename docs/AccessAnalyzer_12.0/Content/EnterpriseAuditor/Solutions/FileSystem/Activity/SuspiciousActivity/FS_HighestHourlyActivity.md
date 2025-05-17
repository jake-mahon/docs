---
sidebar_position: 5274
title: FS_HighestHourlyActivity Job
---

# FS\_HighestHourlyActivity Job

The FS\_HighestHourlyActivity job is designed to report on the highest hourly activity event information from targeted file servers broken down by user.

## Analysis Tasks for the FS\_HighestHourlyActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious Activity** > **FS\_HighestHourlyActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_HighestHourlyActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/SuspiciousActivity/HighestHourlyActivityAnalysis.png "Analysis Tasks for the FS_HighestHourlyActivity Job")

The following analysis task is selected by default:

* Users Ranked – Creates the SA\_FS\_HighestHourlyActivity\_UsersRanked table accessible under the job’s Results node

The following analysis task is deselected by default:

* Create notifications view – Restores the SA\_FS\_HighestHourlyActivity\_Last24Hours\_NOTIFICATION view to be visible under the job’s Results node

The Notification analysis task is an optional analysis task which requires configuration before enabling it. The following analysis task is deselected by default:

* Hour Activity Notification – Alerts when large amounts of activity for a user have occurred within an hour

  * Add recipients, notification subject, and email content
  * See the [Configure the Notification Analysis Task](../Forensics/FS_Deletions#_Notification_Analysis_Task "Configure the Notification Analysis Task") topic for additional information

In addition to the tables and views created by the analysis tasks, the FS\_HighestHourlyActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual User Activity | This report identifies user accounts and time ranges where there was the largest and widest amount of activity across the file system. | None | This report is comprised of two elements:   * Bar Chart – Displays abnormal user activity * Table – Provides details on hourly user activity |