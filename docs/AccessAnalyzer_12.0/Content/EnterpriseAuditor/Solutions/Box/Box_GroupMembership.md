---
sidebar_position: 4975
title: Box_GroupMembership Job
---

# Box\_GroupMembership Job

The Box\_GroupMembership Job provides visibility into group membership within an organization's Box environment.

## Analysis Tasks for the Box\_GroupMembership Job

Navigate to **Box** > **Box\_GroupMembership** > **Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_GroupMembership Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/GroupMembershipAnalysis.png "Analysis Tasks for the Box_GroupMembership Job")

The following analysis task is selected by default:

* Summarize Group Membership – Creates the Box\_GroupMembership\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box\_Content Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Membership (Box Group Membership) | This report summarizes Box group membership and lists all group membership across the audited environment. | None | This report is comprised of three elements:   * Bar Chart – Displays top groups by member count * Table – Provides summary of group membership * Table – Provides details on group membership |