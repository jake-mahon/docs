---
sidebar_position: 5291
title: AD_DSRMSettings Job
---

# AD\_DSRMSettings Job

The AD\_DRSMSettings Job provides details on domain controller registry settings for the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to log in to the domain controller even if it has not been started in DSRM which can present a potential security vulnerability. Additional information on this registry key is available in this [Microsoft Document](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN "Opens the Mircrosoft article in a new window").

## Analysis Tasks for the AD\_DSRMSettings Job

Navigate to the **Active Directory > 5.Domains > AD\_DSRMSettings > Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/DSRMSettingsAnalysis.png)

The default analysis tasks are:

* Change tracking – Creates the SA\_AD\_DSRMSettings\_ChangeTracking table accessible under the job’s Results node
* Details – Creates the SA\_AD\_DSRMSettings\_Details table accessible under the job’s Results node
* Summary – Creates the SA\_AD\_DSRMSettings\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_DSRMSettings Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| DSRM Admin Security | This report highlights domain controller registry settings for the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin account can be used to log in to the domain controller even if it has not been started in DSRM. This is a potential vulnerability. See the Microsoft [Restartable AD DS Step-by-Step Guide](https://technet.microsoft.com/en-us/library/cc732714(v=ws.10).aspx "Opens the Restartable AD DS Step-by-Step Guide article in a new window") for additional information. | None | This report is comprised of two elements:   * Pie Chart – Displays DSRM admin logon  by domain controller  * Table – Provides details on domain controllers |