---
sidebar_position: 5182
title: 2.Users Job Group
---

# 2.Users Job Group

The jobs in the 2.Users group identify user conditions and pinpoint potential areas of administrative concerns within Microsoft Entra ID such as disabled or stale users.

![2.Users Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Users/JobsTree.png "2.Users Job Group in the Jobs Tree")

The jobs in the 2.Users Job Group are:

* [AAD\_DirectMembership Job](AAD_DirectMembership "AAD_DirectMembership Job") – Identifies Microsoft Entra ID users who do not have any group membership. This condition may indicate unnecessary user accounts that are suitable candidates for review and cleanup.
* [AAD\_DisabledUsers Job](AAD_DisabledUsers "AAD_DisabledUsers Job") – Identifies disabled user accounts within Microsoft Entra ID. These accounts should be reviewed and cleaned up in order to increase security and reduce complexity.
* [AAD\_StaleUsers Job](AAD_StaleUsers "AAD_StaleUsers Job")– Identifies potentially stale users based on a variety of factors. These accounts should be reviewed and cleaned up in order to increase security and reduce complexity.
* [AAD\_UserAttributeCompletion Job](AAD_UserAttributeCompletion "AAD_UserAttributeCompletion Job")– Identifies which attributes are present within User fields in Microsoft Entra ID, and which ones are blank for a majority of objects. This may indicate accounts within Microsoft Entra ID which are lacking appropriate information.
* [AAD\_UserDirSync Job](AAD_UserDirSync "AAD_UserDirSync Job") – Summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment