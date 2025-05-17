---
sidebar_position: 5557
title: EX_UserMetrics Job
---

# EX\_UserMetrics Job

The EX\_UserMetrics Job provides information around each users mail-flow in the organization.

## Analysis Tasks for the EX\_UserMetrics Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** > **EX\_UserMetrics** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_UserMetrics Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/HUBMetrics/UserMetricsAnalysis.png "Analysis Tasks for the EX_UserMetrics Job")

The following analysis tasks are selected by default:

* 01. User Metrics - Volume – Creates the SA\_EX\_UserMetrics\_Volume table, accessible under the job’s Results node
* 02. User Metrics - Count – Creates the SA\_EX\_UserMetrics\_Count table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_UserMetrics Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top Receivers by Message Count | This report identifies users who have received the most messages. | None | This report is comprised of two elements:   * Bar Chart – Displays top receivers by message count (last 30 days) * Table – Provides details on top receivers by message count (last 30 days) |
| Top Receivers by Message Volume | This report identifies users who have received the most mail by total volume. | None | This report is comprised of two elements:   * Bar Chart – Displays top receivers by message volume (last 30 days) * Table – Provides details on top receivers by message volume (last 30 days) |
| Top Senders by Message Count | This report identifies users who have sent the most mail. | None | This report is comprised of two elements:   * Bar Chart – Displays top senders by message count (last 30 days) * Table – Provides details on top senders by message count (last 30 days) |
| Top Senders by Message Volume | This report identifies users who have sent the most mail by total volume. | None | This report is comprised of two elements:   * Bar Chart – Displays top senders by message volume (last 30 days) * Table – Provides details on top senders by message volume (last 30 days) |