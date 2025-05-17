---
sidebar_position: 5093
title: AWS_MemberAccountUsers Job
---

# AWS\_MemberAccountUsers Job

The AWS\_MemberAccountUsers job highlights users that are not located in the primary AWS Identity Source, which is generally the Master AWS Account for the Organization.

## Analysis Tasks for the AWS\_MemberAccountUsers Job

Navigate to the **AWS** > **1.Organizations** > **AWS\_MemberAccountUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_MemberAccountUsers Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Organizations/MemberAccountUsersAnalysis.png "Analysis Tasks for the AWS_MemberAccountUsers Job")

The following analysis tasks are selected by default:

* Member Account User Details – Provides details on users that exist outside the master AWS account. Creates the AWS\_MemberAccountUsers\_Details table accessible under the job’s Results node.
* Member Account Users Summary – Summarizes AWS member account users by organization. Creates the AWS\_MemberAccountUsers\_Summary table accessible under the job’s Results node.

## Report for the AWS\_MemberAccoutUsers Job

In addition to the tables and views created by the analysis task, the AWS\_MemberAccountUsers job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Member Account Users | This report highlights user accounts that are not contained in the AWS Master Account. | None | This report is comprised of the following elements:   * Stacked Bar Chart – Displays top member account users by org * Table – Shows member account users by Org * Table – Provides details on member account users |