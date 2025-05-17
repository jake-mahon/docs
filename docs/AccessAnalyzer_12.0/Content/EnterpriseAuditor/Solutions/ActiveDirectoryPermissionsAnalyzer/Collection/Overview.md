---
sidebar_position: 5033
title: 0.Collection Job Group
---

# 0.Collection Job Group

The 0.Collection job group collects data on permissions applied to certificates, computers, groups, organizational units, and users. It is dependent on data collected by the .Active Directory Inventory job group. The jobs which comprise the 0.Collection job group process analysis tasks.

![0.Collection Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/JobsTree.png "0.Collection Job Group in the Jobs Tree")

The jobs in the 0.Collection job group are:

* [AD\_CertificateRights Job](AD_CertificateRights "AD_CertificateRights Job") – Collects all Active Directory permissions applied to certificate objects within the targeted domains
* [AD\_ComputerRights Job](AD_ComputerRights "AD_ComputerRights Job") – Collects all Active Directory permissions applied to computer objects within the targeted domains
* [AD\_ContainerRights Job](AD_ContainerRights "AD_ContainerRights Job") – Collects all Active Directory permissions applied to container objects within the targeted domains
* [AD\_DomainRights Job](AD_DomainRights "AD_DomainRights Job") – Collects all Active Directory permissions applied to domain objects within the targeted domains
* [AD\_GroupRights Job](AD_GroupRights "AD_GroupRights Job") – Collects all Active Directory permissions applied to group objects within the targeted domains
* [AD\_OURights Job](AD_OURights "AD_OURights Job") – Collects all Active Directory permissions applied to group objects within the targeted domains
* [AD\_SiteRights Job](AD_SiteRights "AD_SiteRights Job") – Collects all Active Directory permissions applied to site objects within the targeted domains
* [AD\_UserRights Job](AD_UserRights "AD_UserRights Job") – Collects all Active Directory permissions applied to user objects within the targeted domains