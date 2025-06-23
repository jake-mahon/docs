# 2.Users Job Group

The 2.Users Job Group identifies user conditions and pinpoint potential areas of administrative
concern such as weak passwords, user token size, or stale users.

![2.Users Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following components comprise the 2.Users Job Group:

- [AD_DirectMembership Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-direct-membership.md) – Identifies users who do not have any group
  membership. This condition may indicate unnecessary user accounts that are suitable candidates for
  review and cleanup.
- [AD_DuplicateUsers Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-duplicate-users.md) – Identifies multiple user accounts which may be
  owned by a single employee. A user may have accounts in multiple domains or administrative
  accounts with greater access than their normal account.
- [AD_OrphanedUsers Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-orphaned-users.md) – Identifies users whose managers are stale or
  disabled. These user accounts should be reviewed and appropriate management should be assigned.
- [AD_PasswordStatus Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-password-status.md) – Highlights potential issues with user password
  settings that may exploited or compromised if not addressed
- [AD_ServiceAccounts Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-service-accounts.md) – Offers information about service accounts and if
  they are vulnerable to Kerberoasting. An account is deemed vulnerable to a Kerberoasting attack if
  the msDS-SupportedEncryptionTypes value supports RC4 as the highest encryption type.
- [AD_SIDHistory Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-sid-history.md) – Enumerates historical SIDs in the audited environment and
  highlights exceptions involving the SIDHistory attribute on AD user objects. Specific conditions
  include when a user has a historical SID from their current domain, or when a non-admin user has a
  historical SID with administrative rights, both of which may be indicators of compromise.
- [AD_StaleUsers Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-stale-users.md) – Identifies potentially stale users based on the amount of
  time since their last login to the domain, or if the account has been disabled. These accounts
  should be reviewed and cleaned up in order to increase security and reduce complexity.
- [AD_UserAttributeCompletion Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-user-attribute-completion.md) – Identifies which attributes are
  present within User fields in Active Directory, and which ones are blank for a majority of
  objects. This may indicate accounts within Active Directory which are lacking appropriate
  information.
- [AD_UserDelegation Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-user-delegation.md) – Highlights user accounts which are trusted for
  delegation. Kerberos delegation enables an application to access resources hosted on a different
  server, and opens up several avenues to compromise based on the type of delegation enabled.
- [AD_UserToken Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-user-token.md) – Identifies and reports the number of SIDS and estimated
  token size associated with each user. Token bloat can lead to issues during login and can also
  cause applications that use Kerberos authentication to fail.
- [AD_WeakPasswords Job](/docs/accessanalyzer/12.0/solutions/active-directory/users/ad-weak-passwords.md) – Analyzes user account password hashes to determine
  how easily each could be compromised or the likelihood their passwords are known through
  comparison with compromised password dictionaries and other exceptions
