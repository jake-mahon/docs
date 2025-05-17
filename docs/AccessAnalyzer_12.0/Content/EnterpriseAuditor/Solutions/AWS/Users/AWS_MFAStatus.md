---
sidebar_position: 5125
title: AWS_MFAStatus Job
---

# AWS\_MFAStatus Job

The AWS\_MFAStatus job provides details on each user's MFA status, highlighting users that have it disabled.

## Analysis Tasks for the AWS\_MFAStatus Job

Navigate to the **AWS** > **2.Users** > **AWS\_MFAStatus** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_MFAStatus Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Users/MFAStatusAnalysis.png "Analysis Tasks for the AWS_MFAStatus Job")

The following analysis tasks are selected by default:

* MFAStatus – Checks user accounts in AWS for Multi-Factor Authentication. Creates the AWS\_MFAStatus\_Details table accessible under the job’s Results node.
* MFAStatus Summary – Summarizes AWS IAM Multi-Factor Authentication status by organisation. Creates the AWS\_MFAStatus\_Summary table accessible under the job’s Results node.

## Report for the AWS\_MFAStatus Job

In addition to the tables and views created by the analysis task, the AWS\_MFAStatus job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| MFA Status | This report identifies the MFA status of each AWS user | None | This report is comprised of the following elements:   * Pie Chart – Displays MFA status * Table – Shows status by account * Table – Provides details on MFA |