---
sidebar_position: 5104
title: AWS_Roles Job
---

# AWS\_Roles Job

The AWS\_Roles job provides details on roles in the AWS IAM environment.

## Analysis Tasks for the AWS\_Roles Job

Navigate to the **AWS** > **4.Roles** > **AWS\_Roles** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_Roles Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Roles/RolesAnalysis.png "Analysis Tasks for the AWS_Roles Job")

The following analysis tasks are selected by default:

* Role Details – Provides detailed information on AWS Roles. Creates the AWS\_Role\_Details table accessible under the job’s Results node.
* Role Summary – Summarizes roles by AWS account. Creates the AWS\_Role\_Summary table accessible under the job’s Results node.

## Report for the AWS\_Roles Job

In addition to the tables and views created by the analysis task, the AWS\_Roles job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Roles | This report provides details on roles in the AWS IAM environment. | None | This report is comprised of the following elements:   * Stacked Bar Chart – Displays top roles by account * Table – Shows roles by account * Table – Provides details on roles |