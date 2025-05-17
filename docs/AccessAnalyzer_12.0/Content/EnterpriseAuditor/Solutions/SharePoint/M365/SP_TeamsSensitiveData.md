---
sidebar_position: 5159
title: SP_TeamsSensitiveData Job
---

# SP\_TeamsSensitiveData Job

The SP\_TeamsSensitiveData Job analyzes sensitive data activity within Teams Sites.

## Analysis Tasks for the SP\_TeamsSensitiveData Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP\_TeamsSensitiveData** >**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_TeamsSensitiveData Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/M365/TeamsSensitiveDataAnalysis.png "Analysis Tasks for the SP_TeamsSensitiveData Job")

The default analysis task is:

* Analyze Teams Sensitive Data – Creates the SA\_TeamsSensitiveDataActivityDetails table accessible under the job's Results node

In addition to the table created by the analysis task, the SP\_TeamsSensitiveData Job produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Teams Sensitive Data Report | This report analyzes sensitive data activity in Teams sites. | None | This report is comprised of two elements:   * Bar Chart – Provides information on the top Teams users by sensitive file interaction count * Table – Provides details on user activity |