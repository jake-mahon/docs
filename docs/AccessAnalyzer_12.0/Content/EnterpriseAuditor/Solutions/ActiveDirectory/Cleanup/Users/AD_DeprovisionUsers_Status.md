---
sidebar_position: 5343
title: AD_DeprovisionUsers_Status Job
---

# AD\_DeprovisionUsers\_Status Job

The AD\_DeprovisionUsers\_Status Job tracks all actions taken by the included deprovisioning workflow.

## Analysis Tasks for the AD\_DeprovisionUsers\_Status Job

Navigate to the **Active Directory** > **Cleanup** > **2.Users** > **AD\_DeprovisionUsers\_Status** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the AD_DeprovisionUsers_Status Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Cleanup/DeprovisionUsersStatusAnalysis.png "Analysis Tasks for the AD_DeprovisionUsers_Status Job")

The default analysis task is:

* Track History – Tracks all actions taken. Creates the SA\_AD\_DeprovisionUsers\_Log accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the AD\_DeprovisionUsers\_Status Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Deprovisioning | This report tracks actions taken each day of the Stale User Deprovisioning campaign. | None | This report is comprised of three elements:   * Line Chart – Displays cleanup progress * Table – Provides details on user deprovisioning * Table – Provides action details |