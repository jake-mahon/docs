---
sidebar_position: 5358
title: AD_UserModifications Job
---

# AD\_UserModifications Job

The AD\_UserModifications Job provides a report of all changes to user objects.

## Analysis Tasks for the AD\_UserModifications Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Changes** > **AD\_UserModifications** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_UserModifications Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/Changes/UserModificationsAnalysis.png "Analysis Tasks for the AD_UserModifications Job")

The following non-configurable analysis tasks are selected by default:

* All User Account Changes – Creates the SA\_AD\_UserModifications\_Details view accessible under the job’s Results node
* Summary of Changes – Creates the SA\_AD\_userModifications\_userSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_UserModifications Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Account Changes | Track changes to user objects. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   * Pie Chart – Displays changes by type  * Table – Displays changes by user account  * Table – Displays changes by user change details |