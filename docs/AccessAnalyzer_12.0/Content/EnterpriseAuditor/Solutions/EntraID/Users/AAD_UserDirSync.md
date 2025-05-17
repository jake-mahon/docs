---
sidebar_position: 5181
title: AAD_UserDirSync Job
---

# AAD\_UserDirSync Job

The AAD\_UserDirSync Job summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment.

## Analysis Tasks for the AAD\_UserDirSync Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD\_UserDirSync** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_UserDirSync Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Users/UserDirSyncAnalysis.png "Analysis Tasks for the AAD_UserDirSync Job")

The default analysis tasks are:

* Get user DirSync details – Creates the AAD\_UserDirSync\_Details table accessible under the job’s Results node
* Summarize user DirSync details – Creates the AAD\_UserDirSync\_EnterpriseSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_UserDirSync Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Syncing | This report indicates the sync status of user accounts within the audited environment. | None | This report is comprised of two elements:   * Bar Chart – Displays enterprise user synchronization summary * Table – Provides user sync details |