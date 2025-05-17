---
sidebar_position: 5349
title: AD_GroupStamping Job
---

# AD\_GroupStamping Job

The AD\_GroupStamping Job updates the Notes attribute for all security groups to show where the group is provisioned inside the environment. This overwrites the notes field with data from Access Analyzer.

## Analysis Tasks for the AD\_GroupStamping Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **2. Group Stamping AD\_GroupStamping** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupStamping Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Cleanup/GroupStampingAnalysis.png "Analysis Tasks for the AD_GroupStamping Job")

The default analysis tasks are:

* Identify Stale Groups – Creates the AD\_DeprovisionGroups\_Details table accessible under the job’s Results node
* Groups to Delete – Identifies groups in the Stale Groups OU ready to be deleted

In addition to the tables and views created by the analysis tasks, the AD\_GroupStamping Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Stamping | This report tracks all actions taken with the included group stamping workflow. | None | This report is comprised of three elements:   * Line Chart – Displays daily actions * Table – Provides details on daily actions * Table – Provides action details |

## Action Tasks for the AD\_GroupStamping Job

View the action tasks by navigating to the **Active Directory** > **Cleanup** >  **1.Groups** > **2. Group Stamping AD\_GroupStamping** > **Configure** node and select **Actions**.

![Action Tasks for the AD_GroupStamping Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Cleanup/GroupStampingAction.png "Action Tasks for the AD_GroupStamping Job")

* Stamp Groups – Update Notes field with Permissions

Select the checkbox next to The Stamp Groups Action Task and click **Execute Action** to execute the action task.