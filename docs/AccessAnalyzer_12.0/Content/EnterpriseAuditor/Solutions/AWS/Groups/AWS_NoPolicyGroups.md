---
sidebar_position: 5109
title: AWS_NoPolicyGroups Job
---

# AWS\_NoPolicyGroups Job

The AWS\_NoPolicyGroups job provides details on groups that have no policies assigned to them.

## Analysis Tasks for the AWS\_NoPolicyGroups Job

Navigate to the **AWS** > **3.Groups** > **AWS\_NoPolicyGroups** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_NoPolicyGroups Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Groups/NoPolicyGroupsAnalysis.png "Analysis Tasks for the AWS_NoPolicyGroups Job")

The following analysis tasks are selected by default:

* No Policy Groups – Identifies groups that have no policies applied. Creates the AWS\_NoPolicyGroup\_Details table accessible under the job’s Results node.
* No Policy Groups Summary – Summarizes no policy groups across AWS Organizations. Creates the AWS\_NoPolicyGroup\_Summary table accessible under the job’s Results node.

## Report for the AWS\_NoPolicyGroups Job

In addition to the tables and views created by the analysis task, the AWS\_NoPolicyGroups job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Groups With No Policies | This report identifies groups that do not have a policy assigned. | None | This report is comprised of the following elements:   * Stacked Bar Chart – Displays top accounts by no policy group counts * Table – Shows no policy groups by accounts * Table – Provides details on no policy groups |