---
sidebar_position: 5010
title: 2.High Risk Sites > SP_OpenAccess Job
---

# 2.High Risk Sites > SP\_OpenAccess Job

The 2.High Risk Sites Job Group provides insight into any high risk repositories and high risk data that may exist within the targeted SharePoint environment. High risk data is effectively open to the entire organization through modification of SharePoint permissions to apply well known security principals such as NT AUTHORITY\Authenticated Users. The data must be monitored closely because of its exposure.

![2.High Risk Sites > SP_OpenAccess Job in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/OpenAccessJobsTree.png "2.High Risk Sites > SP_OpenAccess Job in the Jobs Tree")

The job group is comprised of the SP\_OpenAccess Job. Minimizing your attack surface is the goal. Open site collections can potentially provide access to privileged data, greatly increasing your vulnerability. The SP\_OpenAccess Job will identify places in the environment where data is able to be accessed by a very large amount of employees.

It is dependent on data collected by the [SharePoint Access Auditing](Collection/Overview#SharePoi "SharePoint Access Auditing") or [SharePoint Sensitive Data Discovery Auditing (SEEK)](Collection/Overview#SharePoi3 "SharePoint Sensitive Data Discovery Auditing (SEEK)") components of the [0.Collection Job Group](Collection/Overview "0.Collection Job Group").

## Analysis Tasks for the SP\_OpenAccess Job

Navigate to the **Jobs** > **SharePoint** > **2.High Risk Sites** > **SP\_OpenAccess** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_OpenAccess Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/OpenAccessAnalysis.png "Analysis Tasks for the SP_OpenAccess Job")

The default analysis tasks are:

* 1. Determine Access to Resources – Creates the SA\_SP\_OpenAccess\_AccessDetails table accessible under the job’s Results node
* 2. Summarize by Site Collection – Creates the SA\_SP\_OpenAccess\_SiteCollectionSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display resources with open access, the SP\_OpenAccess Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Open Access | This report identifies site collections with open resources. | Open Access | This report is comprised of two elements:   * Stacked Bar – Displays top site collections with open access * Table – Provides site collection details * Table – Provides access details |