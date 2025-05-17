---
sidebar_position: 5263
title: FS_LocalUserActivity Job
---

# FS\_LocalUserActivity Job

The FS\_LocalUserActivity job is designed to report on local user activity event information from targeted file servers.

## Analysis Tasks for the LocalUserActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Security** > **FS\_LocalUserActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the LocalUserActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/Security/LocalUserActivityAnalysis.png "Analysis Tasks for the LocalUserActivity Job")

* 1. Local User Activity Details – Creates the SA\_FS\_LocalUserActivity\_Details table accessible under the job’s Results node
* 2. Top Local User Accounts – Creates the SA\_FS\_LocalUserActivity\_TopUsers table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_LocalUserActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Local User Activity | This report identifies local accounts with file system activity. | None | This report is comprised of two elements:   * Bar Chart – Displays top local user account activity (last 30 days) * Table – Provides details on local user activity |