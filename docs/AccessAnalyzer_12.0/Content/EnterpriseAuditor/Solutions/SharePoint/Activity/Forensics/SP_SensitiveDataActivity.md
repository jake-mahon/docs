---
sidebar_position: 5166
title: SP_SensitiveDataActivity Job
---

# SP\_SensitiveDataActivity Job

This job highlights user activity involving sensitive data and provides details on who is interacting with your environments sensitive content.

## Analysis Tasks for the SP\_SensitiveDataActivity Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Forensics** > **SP\_SensitiveDataActivity** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_SensitiveDataActivity Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/Activity/SensitiveDataActivityAnalysis.png "Analysis Tasks for the SP_SensitiveDataActivity Job")

The default analysis tasks are:

* Sensitive Data Activity – Creates the SA\_SP\_SensitiveDataActivity table accessible under the job’s Results node
* Sensitive Data Activity User Count – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the SQL\_SensitiveDataActivity Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Activity | This Report shows user activity on sensitive data. | None | This report is comprised of two elements:   * Bar Chart – Displays sensitive data activity * Table – Provides details on sensitive data activity |