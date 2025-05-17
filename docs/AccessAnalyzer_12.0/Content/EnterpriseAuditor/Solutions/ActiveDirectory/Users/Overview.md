---
sidebar_position: 5323
title: 2.Users Job Group
---

# 2.Users Job Group

The 2.Users Job Group identifies user conditions and pinpoint potential areas of administrative concern such as weak passwords, user token size, or stale users.

![2.Users Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Users/JobsTree.png "2.Users Job Group in the Jobs Tree")

The following components comprise the 2.Users Job Group:

* [AD\_DirectMembership Job](AD_DirectMembership "AD_DirectMembership Job") – Identifies users who do not have any group membership. This condition may indicate unnecessary user accounts that are suitable candidates for review and cleanup.
* [AD\_DuplicateUsers Job](AD_DuplicateUsers "AD_DuplicateUsers Job") – Identifies multiple user accounts which may be owned by a single employee. A user may have accounts in multiple domains or administrative accounts with greater access than their normal account.
* [AD\_OrphanedUsers Job](AD_OrphanedUsers "AD_OrphanedUsers Job") – Identifies users whose managers are stale or disabled. These user accounts should be reviewed and appropriate management should be assigned.
* [AD\_PasswordStatus Job](AD_PasswordStatus "AD_PasswordStatus Job") – Highlights potential issues with user password settings that may exploited or compromised if not addressed
* [AD\_ServiceAccounts Job](AD_ServiceAccounts "AD_ServiceAccounts Job") – Offers information about service accounts and if they are vulnerable to Kerberoasting. An account is deemed vulnerable to a Kerberoasting attack if the msDS-SupportedEncryptionTypes value supports RC4 as the highest encryption type.
* [AD\_SIDHistory Job](AD_SIDHistory "AD_SIDHistory Job") – Enumerates historical SIDs in the audited environment and highlights exceptions involving the SIDHistory attribute on AD user objects. Specific conditions include when a user has a historical SID from their current domain, or when a non-admin user has a historical SID with administrative rights, both of which may be indicators of compromise.
* [AD\_StaleUsers Job](AD_StaleUsers "AD_StaleUsers Job") – Identifies potentially stale users based on the amount of time since their last login to the domain, or if the account has been disabled. These accounts should be reviewed and cleaned up in order to increase security and reduce complexity.
* [AD\_UserAttributeCompletion Job](AD_UserAttributeCompletion "AD_UserAttributeCompletion Job") – Identifies which attributes are present within User fields in Active Directory, and which ones are blank for a majority of objects. This may indicate accounts within Active Directory which are lacking appropriate information.
* [AD\_UserDelegation Job](AD_UserDelegation "AD_UserDelegation Job") – Highlights user accounts which are trusted for delegation. Kerberos delegation enables an application to access resources hosted on a different server, and opens up several avenues to compromise based on the type of delegation enabled.
* [AD\_UserToken Job](AD_UserToken "AD_UserToken Job") – Identifies and reports the number of SIDS and estimated token size associated with each user. Token bloat can lead to issues during login and can also cause applications that use Kerberos authentication to fail.
* [AD\_WeakPasswords Job](AD_WeakPasswords "AD_WeakPasswords Job") – Analyzes user account password hashes to determine how easily each could be compromised or the likelihood their passwords are known through comparison with compromised password dictionaries and other exceptions