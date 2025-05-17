---
sidebar_position: 5170
title: SP_InactiveSites Job
---

# SP\_InactiveSites Job

This job highlights your environments least active Sites or Site Collections.

## Analysis Tasks for the SP\_InactiveSites Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Usage Statistics** > **SP\_InactiveSites** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_InactiveSites Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Activity/InactiveSitesAnalysis.png "Analysis Tasks for the SP_InactiveSites Job")

The default analysis task is:

* Inactive Sites Last 30 Days – Creates the SA\_SP\_InactiveSites\_Last30Days table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_InactiveSites Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Inactive Sites | This report identifies Sites that have not had activity for at least 30 days. [View], [Delete], [Update], [Delete] fields reflect the number of unique operations of each type that was performed on the inactive site for this time frame. | None | This report is comprised of two elements:   * Bar Chart – Displays information on inactive sites * Table – Provides details on inactive sites |