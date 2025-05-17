---
sidebar_position: 5341
title: AD_DeprovisionComputers_Status Job
---

# AD\_DeprovisionComputers\_Status Job

The AD\_DeprovisionComputers\_Status Job tracks and reports on the progress of the computer deprovisioning workflow.

## Analysis Tasks for the AD\_DeprovisionComputers\_Status Job

Navigate to the **Active Directory** > **Cleanup** > **3.Computers** > **AD\_DeprovisionComputers\_Status** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for AD_DeprovisionComputers_Status Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Cleanup/DeprovisionComputersStatusAnalysis.png "Analysis Tasks for AD_DeprovisionComputers_Status Job")

The default analysis tasks are:

* Track Deletion – Creates the AD\_DeprovisionComputers\_Log table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD\_DeprovisionComputers\_Status Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Computer Deprovisioning | This report tracks actions taken each day of the Stale Computer Deprovisioning campaign. | None | This report is comprised of three elements:   * Line Chart – Displays cleanup progress * Table – Provides details on computer deprovisioning * Table – Provides action details |