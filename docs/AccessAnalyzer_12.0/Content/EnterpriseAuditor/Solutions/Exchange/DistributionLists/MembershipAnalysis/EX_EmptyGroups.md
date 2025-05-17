---
sidebar_position: 5571
title: EX_EmptyGroups Job
---

# EX\_EmptyGroups Job

The EX\_EmptyGroups job identifies empty distribution groups that are candidates for cleanup.

## Analysis Tasks for the EX\_EmptyGroups Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership Analysis** > **EX\_EmptyGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_EmptyGroups Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/DistributionLists/EmptyGroupsAnalysis.png "Analysis Tasks for the EX_EmptyGroups Job")

The following analysis tasks are selected by default:

* 0. Drop tables – Drops tables from previous runs
* 1. Empty Groups – Creates the SA\_EX\_EmptyGroups\_Empty table, accessible under the job’s Results node
* 2. Single User Groups – Creates the SA\_EX\_EmptyGroups\_SingleUser table, accessible under the job’s Results node
* 3. Summarize Empty Groups – Creates the SA\_EX\_EmptyGroups\_EmptySummary table, accessible under the job’s Results node
* 4. Summarize Single User Groups – Creates the SA\_EX\_EmptyGroups\_SingleUserSummary table, accessible under the job’s Results node