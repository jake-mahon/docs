---
sidebar_position: 5186
title: AAD_UserAttributeCompletion Job
---

# AAD\_UserAttributeCompletion Job

The AAD\_UserAttributeCompletion Job identifies which attributes are present within User fields in Microsoft Entra ID, and which ones are blank for a majority of objects. This may indicate accounts within Microsoft Entra ID which are lacking appropriate information.

## Analysis Tasks for the AAD\_UserAttributeCompletion Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD\_UserAttributeCompletion** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_UserAttributeCompletion Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Users/UserAttributeCompletionAnalysis.png "Analysis Tasks for the AAD_UserAttributeCompletion Job")

The default analysis tasks are:

* Gets details on user attribute completion, by attribute – Creates the AAD\_UserAttributeCompletion\_AttributeDetails table accessible under the job’s Results node
* Gets details on user attribute completion, by user – Creates the AAD\_UserAttributeCompletion\_UserDetails table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_UserAttributeCompletion Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Attribute Completion | This report identifies which attributes are present within User fields in Microsoft Entra ID, and which ones are blank for a majority of User objects. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays completeness by attribute * Table – Provides details on users with blank attributes * Tables – Provides details om completeness by attribute |