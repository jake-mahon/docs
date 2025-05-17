---
sidebar_position: 5596
title: EX_AdminGroups Job
---

# EX\_AdminGroups Job

The EX\_AdminGroups job provides visibility into the direct and effective membership of Exchange Administrative groups.

## Analysis Tasks for the EX\_AdminGroups Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Permissions** > **EX\_AdminGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_AdminGroups Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/AdminGroupsAnalysis.png "Analysis Tasks for the EX_AdminGroups Job")

The following analysis tasks are selected by default:

* 00.Calculate Effective Membership – Creates the SA\_EX\_AdminGroups\_Membership table accessible under the job’s Results node
* 01.Rank groups by Size – Creates the SA\_EX\_AdminGroups\_Ranked table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_AdminGroups Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Exchange Administration Groups | This report shows effective membership for the default Exchange Administration groups. | None | This report is comprised of two elements:   * Bar Chart – Displays largest admin groups * Table – Provides membership details |