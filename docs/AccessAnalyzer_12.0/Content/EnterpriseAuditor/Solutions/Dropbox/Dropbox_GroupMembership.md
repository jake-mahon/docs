---
sidebar_position: 5016
title: 3.Group Membership > Dropbox_GroupMembership Job
---

# 3.Group Membership > Dropbox\_GroupMembership Job

The Dropbox\_GroupMembership job provides insight into group membership within the targeted Dropbox environment, highlighting the largest groups. It is dependent on data collected by the 0.Collection job group. This job processes analysis tasks and generates a report.

![3.Group Membership > Dropbox_GroupMembership Job in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Dropbox/GroupMembershipJobsTree.png "3.Group Membership > Dropbox_GroupMembership Job in the Jobs Tree")

The Dropbox\_GroupMembership job is located in the 3.Group Membership job group.

## Analysis Tasks for the Dropbox\_GroupMembership Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **3.Group Membership** > **Dropbox\_GroupMembership** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Dropbox_GroupMembership Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Dropbox/GroupMembershipAnalysis.png "Analysis Tasks for the Dropbox_GroupMembership Job")

* Get group membership details – Creates an interim processing table in the database for use by downstream analysis and report generation
* Summarize group membership by team – Creates the SA\_Dropbox\_GroupMembership\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display group membership details, the Dropbox\_GroupMembership job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Membership | This report lists membership and owners for all groups within Dropbox. | None | This report is comprised of three elements:   * Bar Chart – Displays largest groups * Table – Provides summary of group membership * Table – Provides details on membership |