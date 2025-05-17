---
sidebar_position: 5329
title: AD_DirectMembership Job
---

# AD\_DirectMembership Job

The AD\_DirectMembership Job identifies users who do not have any group membership. This condition may indicate unnecessary user accounts that are suitable candidates for review and cleanup.

## Analysis Tasks for the AD\_DirectMembership Job

Navigate to the **Active Directory** > **2.Users** > **AD\_DirectMembership** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DirectMembership Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Users/DirectMembershipAnalysis.png "Analysis Tasks for the AD_DirectMembership Job")

The default analysis tasks are:

* User Details – Creates the SA\_AD\_DirectMembership\_Details table accessible under the job’s Results node
* Domain Summary – Creates the SA\_AD\_DirectMembership\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_DirectMembership Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| No Group Membership | This report identifies users with no group membership. | None | This report is comprised of three elements:   * Bar Chart – Displays top domains by users with no membership  * Table – Provides details on all users with no group membership  * Table – Provides details on top domains by users with no membership |