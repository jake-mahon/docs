---
sidebar_position: 5056
title: 7.Containers Job Group
---

# 7.Containers Job Group

The 7.Containers Job Group reports on all Active Directory permissions applied to container objects within the targeted domains.

![7.Containers Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Containers/JobsTree.png "7.Containers Job Group in the Jobs Tree")

The jobs in the 7.Containers Job Group are:

* [AD\_AdminSDHolder Job](AD_AdminSDHolder "AD_AdminSDHolder Job") – Reports on all non-default Active Directory permissions applied to the AdminSDHolder container within the targeted domains. The AdminSDHolder container can be leveraged by an attacker to create persistence within the environment. See the Microsoft [AdminSDHolder, Protected Groups and SDPROP](https://technet.microsoft.com/en-us/library/2009.09.sdadminholder.aspx "AdminSDHolder, Protected Groups and SDPROP") article for additional information.
* [AD\_ContainerPermissions Job](AD_ContainerPermissions "AD_ContainerPermissions Job") – Reports on all Active Directory permissions applied to container objects within the targeted domains