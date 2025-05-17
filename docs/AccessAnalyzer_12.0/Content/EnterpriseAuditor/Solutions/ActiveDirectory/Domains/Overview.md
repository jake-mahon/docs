---
sidebar_position: 5289
title: 5.Domains Job Group
---

# 5.Domains Job Group

The 5.Domains job group provides details on domains, sites, and trusts, and highlights domain level configurations that may leave your environment at risk.

![Domains Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/JobsTree.png "Domains Job Group in the Jobs Tree")

The following components comprises the 5.Domains job group:

* [0.Collection Job Group](Collection/Overview "0.Collection Job Group") – Collects the data which will be further analyzed in order to provide details on domains, sites, and trusts
* [AD\_DCSummary Job](AD_DCSummary "AD_DCSummary Job") – Provides operational reporting related to the details collected for each domain controller. For each domain controller, the report identifies the FSMO role, whether it is a bridgehead server, whether it is a global catalog, and the time server it syncs to.
* [AD\_DomainInfo Job](AD_DomainInfo "AD_DomainInfo Job") – Provides operational reporting related to the collected domains, sites, and trusts, providing details such as high level object counts by domain or site, domain and forest functional levels, and types and directions of trusts
* [AD\_DSRMSettings Job](AD_DSRMSettings "AD_DSRMSettings Job") – Provides details on domain controller registry settings for the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to log in to the domain controller even if it has not been started in DSRM which can present a potential security vulnerability.
* [AD\_KerberoastingRisk Job](AD_KerberoastingRisk "AD_KerberoastingRisk Job") – Identifies accounts vulnerable to kerberoasting. Kerberoasting is a threat where attackers target service accounts in Active Directory to steal their passwords.