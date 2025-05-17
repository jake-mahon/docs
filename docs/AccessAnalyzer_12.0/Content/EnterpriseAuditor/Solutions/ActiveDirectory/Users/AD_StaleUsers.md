---
sidebar_position: 5327
title: AD_StaleUsers Job
---

# AD\_StaleUsers Job

The AD\_StaleUsers job identifies potentially stale users based on the amount of time since their last login to the domain, or if the account has been disabled. These accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

**NOTE:** The definition of a stale user is set by the .Active Directory Inventory solution. These parameters, including the number of days since last login to be considered stale (by default 60 days), can be customized within the **.Active Directory Inventory** > **3-AD\_Exceptions** job's **Stale Users** analysis task. See the [3-AD\_Exceptions Job](../../ActiveDirectoryInventory/3-AD_Exceptions "3-AD_Exceptions Job") topic for additional information.

## Analysis Tasks for the AD\_StaleUsers Job

Navigate to the **Active Directory** > **2.Users** > **AD\_StaleUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_StaleUsers Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Users/StaleUsersAnalysis.png "Analysis Tasks for the AD_StaleUsers Job")

The default analysis tasks are:

* User Details – Creates the SA\_AD\_StaleUsers\_Details table accessible under the job’s Results node
* Summarize by Domain – Creates the SA\_AD\_StaleUsers\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_StaleUsers job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Users | This report identifies user accounts which have not logged into the domain for an extended amount of time or are currently disabled. A user account is considered stale if the last logon is over 60 days ago, is currently disabled, or expired. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays users by domain  * Table – Provides details on users  * Table – Provides details on users by domain |