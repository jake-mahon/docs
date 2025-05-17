---
sidebar_position: 5081
title: Logon Rights Job Group
---

# Logon Rights Job Group

The Logon Rights job group collects local policy information and reports on privileged users.

![Logon Rights Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/JobsTree.png "Logon Rights Job Group in the Jobs Tree")

The jobs and job groups in the Logon Rights job group are:

* [Collection Job Group](Collection/Overview "Collection Job Group") – The jobs within this group collect group policy settings, local users, and local group membership from Windows servers which will be further analyzed to provide insight into privileged users within the environment
* [SG\_AccountPrivileges Job](SG_AccountPrivileges "SG_AccountPrivileges Job") – This job highlights account privileges across the audited environment, filtering out default privileges present on Windows servers
* [SG\_LocalPolicies Job](SG_LocalPolicies "SG_LocalPolicies Job") – This job identifies privileged accounts across the audited environments, based on the number of local security policies assigned