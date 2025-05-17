---
sidebar_position: 5573
title: EX_StaleGroups Job
---

# EX\_StaleGroups Job

The EX\_StaleGroups job identifies potentially stale distribution groups based on the last domain logon of the members. These groups should be reviewed and cleaned up.

## Analysis Tasks for the EX\_StaleGroups Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership Analysis** > **EX\_StaleGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_StaleGroups Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/DistributionLists/StaleGroupsAnalysis.png "Analysis Tasks for the EX_StaleGroups Job")

The following analysis tasks are selected by default:

* 1. Stale User Details – Creates the SA\_EX\_StaleGroups\_Details table, accessible under the job’s Results node
* 2. Group Summary – Creates the SA\_EX\_StaleGroups\_GroupSummary table, accessible under the job’s Results node
* 3. Stale Groups – Creates an interim processing table in the database, for use by downstream analysis and report generations