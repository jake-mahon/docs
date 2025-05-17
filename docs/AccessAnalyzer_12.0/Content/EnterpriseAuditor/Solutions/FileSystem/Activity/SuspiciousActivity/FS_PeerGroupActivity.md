---
sidebar_position: 5282
title: FS_PeerGroupActivity Job
---

# FS\_PeerGroupActivity Job

The FS\_PeerGroupActivity job is designed to report on abnormal activity event information based on peer group analysis from targeted file servers.

## Analysis Tasks for the FS\_PeerGroupActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious Activity** > **FS\_PeerGroupActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_PeerGroupActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/SuspiciousActivity/PeerGroupActivityAnalysis.png "Analysis Tasks for the FS_PeerGroupActivity Job")

* Summarize Hourly Norms and Deviations – Creates the SA\_FS\_PeerGroupActivity\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_PeerGroupActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual Peer Group Activity | This report highlights unusual periods of activity based on peer group analysis. When a user accesses an abnormal amount of data from outside of their own department, the failure of separation of duties can indicate a security threat. | None | This report is comprised of one element:   * Table – Provides details on abnormal peer group activity |