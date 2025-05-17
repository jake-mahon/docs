---
sidebar_position: 5088
title: Collection Job Group
---

# Collection Job Group

The Collection job group collects group policy settings, local users, and local group membership information from Windows servers which will be further analyzed to provide insight into privileged users within the environment.

![Collection Job Group in the Jobs Tree](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/CollectionJobsTree.png "Collection Job Group in the Jobs Tree")

The jobs in the Collection job group are:

* [SG\_GroupPolicy Job](SG_GroupPolicy "SG_GroupPolicy Job") – This job collects policy assignments from all targeted servers. In particular, **Allow log on locally**, **Log on as a batch job**, **Allow log on through Remote Desktop Services**, and **Log on as a service** are audited.
* [SG\_LocalMembership Job](SG_LocalMembership "SG_LocalMembership Job") – This job collects local group membership details from all targeted servers
* [SG\_LocalUsers Job](SG_LocalUsers "SG_LocalUsers Job") – This job collects local user accounts from all targeted servers