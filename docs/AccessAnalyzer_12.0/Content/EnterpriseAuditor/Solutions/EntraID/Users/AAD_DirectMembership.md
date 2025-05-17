---
sidebar_position: 5184
title: AAD_DirectMembership Job
---

# AAD\_DirectMembership Job

The AAD\_DirectMembership Job identifies Microsoft Entra ID users who do not have any group membership. This condition may indicate unnecessary user accounts that are suitable candidates for review and cleanup.

## Analysis Tasks for the AAD\_DirectMembership Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD\_DirectMembership** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_DirectMembership Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Users/DirectMembershipAnalysis.png "Analysis Tasks for the AAD_DirectMembership Job")

The default analysis tasks are:

* Get user direct membership details – Creates the AAD\_DirectMembership\_Details table accessible under the job’s Results node
* Summarize user direct membership details by domain – Creates the AAD\_DirectoryMembership\_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_DirectMembership Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| No Group Membership | This report identifies users with no group membership. | None | This report is comprised of three elements:   * Bar Chart – Displays top domains by users with no group membership * Table – Provides details on all users with no group membership * Tables – Provides details on top domains by users with no group membership |