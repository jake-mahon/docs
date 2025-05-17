---
sidebar_position: 5183
title: AAD_StaleUsers Job
---

# AAD\_StaleUsers Job

The AAD\_StaleUsers Job identifies potentially stale users based on a variety of factors. These accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

## Analysis Tasks for the AAD\_StaleUsers Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD\_StaleUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_StaleUsers Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Users/StaleUsersAnalysis.png "Analysis Tasks for the AAD_StaleUsers Job")

The default analysis tasks are:

* Stale User Details – Creates the AAD\_StaleUsers\_Details table accessible under the job’s Results node
* Summarize by Domain – Creates the AAD\_StaleUsers\_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_StaleUsers Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Users | This report identifies user accounts which have not logged into the domain for an extended amount of time or are currently disabled. A user account is considered stale if the last logon is over 30 days ago or is currently disabled. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays users by domain * Table – Provides details on users * Tables – Provides details on users by domain |