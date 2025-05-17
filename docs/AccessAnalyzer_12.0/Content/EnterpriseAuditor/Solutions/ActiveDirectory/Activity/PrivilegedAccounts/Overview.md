---
sidebar_position: 5352
title: Privileged Accounts Job Group
---

# Privileged Accounts Job Group

The Privileged Accounts Job Group highlights the activity performed by this accounts, to identify potential abuses or unused accounts which can be deprovisioned.

![Privileged Accounts Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/PrivilegedAccounts/JobsTree.png "Privileged Accounts Job Group in the Jobs Tree")

The following Jobs make up the Privileged Accounts Job Group:

***RECOMMENDED:*** Schedule these jobs to run with the 0.Collection job group.

* [AD\_AdminAccounts Job](AD_AdminAccounts "AD_AdminAccounts Job") – Shows all actions taken by domain administrators within the environment being compromised
* [AD\_ServiceAccountAuth Job](AD_ServiceAccountAuth "AD_ServiceAccountAuth Job") – Shows the last time a service account, identified by the presence of a servicePrincipalName, was active within the environment