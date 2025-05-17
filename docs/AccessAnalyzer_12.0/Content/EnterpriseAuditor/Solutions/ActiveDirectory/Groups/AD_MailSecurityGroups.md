---
sidebar_position: 5309
title: AD_MailSecurityGroups Job
---

# AD\_MailSecurityGroups Job

The AD\_MailSecurityGroups Job identifies mail-enabled security groups within Active Directory.

## Analysis Tasks for the AD\_MailSecurityGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD\_MailSecurityGroups** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_MailSecurityGroups Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Groups/MailSecurityGroupsAnalysis.png "Analysis Tasks for the AD_MailSecurityGroups Job")

The default analysis tasks are:

* Calculate Effective Membership – Creates the SA\_AD\_MailSecurityGroups\_Membership table accessible under the job’s Results node
* Mail Enabled Domain Summary – Creates the SA\_AD\_MailSecurityGroups\_DomainSummary table accessible under the job’s Results node
* Membership Summary – Creates the SA\_AD\_MailSecurityGroups\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_MailSecurityGroups Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Mail Enabled Security Groups | This report displays summary data for mail enabled security groups. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays mail enabled security groups per domain  * Table – Provides summary of mail enabled security groups  * Table – Provides summary of mail enabled security groups by domain |