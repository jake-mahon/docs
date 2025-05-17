---
sidebar_position: 5108
title: AWS_GroupMembers Job
---

# AWS\_GroupMembers Job

The AWS\_GroupMembers job group provides details on AWS IAM group membership, orphaned groups (those with no policy assigned to them), sensitive security group membership, and stale groups.

## Analysis Tasks for the AWS\_GroupMembers Job

Navigate to the **AWS** > **3.Groups** > **AWS\_GroupMembers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_GroupMembers Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Groups/GroupMembersAnalysis.png "Analysis Tasks for the AWS_GroupMembers Job")

The following analysis tasks are selected by default:

* Group Membership – Identifies groups and their members. Creates the AWS\_GroupMember\_Details table accessible under the job’s Results node.
* Group Member Summary – Summarizes group member counts and number of policies applied to the groups. Creates the AWS\_GroupMember\_Summary table accessible under the job’s Results node.

## Report for the AWS\_GroupMembers Job

In addition to the tables and views created by the analysis task, the AWS\_GroupMembers job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Group Members | This report identifies group members and summarizes policies applied to those groups. | None | This report is comprised of the following elements:   * Stacked Bar Chart – Displays a summary of group members * Stacked Bar Chart – Displays a summary of group policies * Table – Provides details on groups |