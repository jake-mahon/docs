---
sidebar_position: 5561
title: EX_DLCleanup Job
---

# EX\_DLCleanup Job

The EX\_DLCleanup job identifies potentially stale Distribution Groups based on the last domain logon of the members, membership counts, and last time mail was sent to the distribution lists. These DLs should be reviewed and cleaned up.

## Analysis Tasks for the EX\_DLCleanup Job

View the analysis task by navigating to the **Exchange** > **6. Distribution Lists** > **EX\_DLCleanup** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_DLCleanup Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/DistributionLists/DLCleanupAnalysis.png "Analysis Tasks for the EX_DLCleanup Job")

The following analysis task is selected by default:

* 1. DL Cleanup – Creates the SA\_EX\_GroupCleanup\_GroupSummary table, accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the EX\_DLCleanup job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Distribution List Cleanup  (Distribution List Overview) | This report identifies common issues which may affect distribution list group membership. | None | This report is comprised of one element:   * Table – Provides a distribution list overview |