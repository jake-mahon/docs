---
sidebar_position: 5369
title: 0.Collection Job Group
---

# 0.Collection Job Group

The **5.Domains > 0.Collection** Job Group collects the data which will be further analyzed in order to provide details on domains, sites, and trusts.

![0.Collection Job Group](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/CollectionJobsTree.png "0.Collection Job Group")

The 0.Collection Job Group is comprised of:

* [AD\_DomainControllers Job](AD_DomainControllers "AD_DomainControllers Job") – Collects domain controller details which will be further analyzed in order to provide information on domains, sites, and trusts.
* [AD\_DSRM Job](AD_DSRM "AD_DSRM Job") – Collects data related to domain controller registry settings for the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to log in to the domain controller even if it has not been started in DSRM which can present a potential security vulnerability. Additional information on this registry key is available in this [Microsoft Document](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN).
* [AD\_TimeSync Job](AD_TimeSync "AD_TimeSync Job") – Collects TimeSync information from the registry for each domain controller within the domain