---
sidebar_position: 5059
title: Privileged Accounts Job Group
---

# Privileged Accounts Job Group

Vital to security is the ability to accurately assess who has administrative privileges to each system and how. The Privileged Accounts job group provides the collection and correlation capabilities needed to unravel complex access assignments, including local administrator membership, users with remote logon rights, and service accounts.

![Privileged Accounts Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/JobsTree.png "Privileged Accounts Job Group in the Jobs Tree")

The job groups in the Privileged Accounts job group are:

* [Local Administrators Job Group](LocalAdministrators/Overview "Local Administrators Job Group") – This group identifies the effective membership for all local administrator groups along with LAPS local policies configured on the target hosts to provide an understanding of what accounts within the environment are privileged and how they are being secured
* [Logon Rights Job Group](LogonRights/Overview "Logon Rights Job Group") – The jobs within this group collect local policy information to provide insight into privileged users within the environment
* [Service Accounts > SG\_ServiceAccounts Job](SG_ServiceAccounts "Service Accounts > SG_ServiceAccounts Job") – This job indicates which domain accounts are being used to run services on member servers, highlighting password age and settings