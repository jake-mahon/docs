---
sidebar_position: 5007
title: SP_Overview Job
---

# SP\_Overview Job

The SP\_Overview job provides an overview of the SharePoint Environment, providing a high level view into what makes up a SharePoint Environment and the types of security risks and toxic permissions found during scans.

![SP_Overview Job in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/OverviewJobsTree.png "SP_Overview Job in the Jobs Tree")

It is dependent on data collected by the [SharePoint Access Auditing](Collection/Overview#SharePoi "SharePoint Access Auditing"), [SharePoint Sensitive Data Discovery Auditing (SEEK)](Collection/Overview#SharePoi3 "SharePoint Sensitive Data Discovery Auditing (SEEK)"), and [SharePoint Activity Auditing](Collection/Overview#SharePoi2 "SharePoint Activity Auditing") components of the [0.Collection Job Group](Collection/Overview "0.Collection Job Group"). It also depends on the running of the sub-job groups within the solution. If only select sub-job groups have been run, there will be blank sections of this overview report.

## Analysis Tasks for the SP\_Overview Job

Navigate to the **Jobs** > **SharePoint** > **SP\_Overview** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_Overview Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/OverviewAnalysis.png "Analysis Tasks for the SP_Overview Job")

The default analysis tasks is:

* Generate Overview – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the table created by the analysis task which displays all direct user permissions, the SP\_Overview Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SharePoint Overview | This report provides an overview of the targeted SharePoint environment. | None | This report is comprised of one element:   * Table – Provides details on the targeted SharePoint environment |