---
sidebar_position: 5185
title: AAD_DisabledUsers Job
---

# AAD\_DisabledUsers Job

The AAD\_DisabledUsers Job identifies disabled user accounts within Microsoft Entra ID. These accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

## Analysis Tasks for the AAD\_DisabledUsers Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD\_DisabledUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_DisabledUsers Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Users/DisabledUsersAnalysis.png "Analysis Tasks for the AAD_DisabledUsers Job")

The default analysis tasks are:

* Get disabled user account information – Creates the AAD\_DisabledUsers\_Details table accessible under the job’s Results node
* Summarize disabled user information – Creates the AAD\_DisabledUsers\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_DisabledUsers Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Disabled User Accounts | This report identifies disabled user accounts and summarizes them by domain. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays disabled users by domain * Table – Provides user details * Tables – Provides details on disabled users by domain |