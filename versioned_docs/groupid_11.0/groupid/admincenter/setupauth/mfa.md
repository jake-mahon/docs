# Configure Multifactor Authentication

You can define a multifactor authentication (MFA) policy for an identity store. This policy enforces users to enroll their identity store accounts in GroupID using one or more authentication types. Supported authentication types are discussed in the [Authentication Policies - A Comparison](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authpolicy.md#authentication-policies-a-comparison) topic.

Once enrolled, users must authenticate their identity store accounts using the authentication types they enrolled with, when they perform any of the following actions in the GroupID portal or the GroupID mobile app:

- Reset identity store account passwords
- Unlock their accounts

Helpdesk users with restricted access also use authentication type(s) to authenticate end-users before resetting their password or unlocking their identity store account. See the [Set Restricted Mode](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/helpdesk.md#set-restricted-mode) topic.

NOTE: Multifactor authentication defined in Microsoft Entra Admin Center does not integrate with MFA in GroupID. See the [Multifactor Authentication Policy](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/moreinfo/advsentraid.md#multifactor-authentication-policy) topic.

What do you want to do?

- [Configure Multifactor Authentication](#configure-multifactor-authentication)

## Configure Multifactor Authentication

To configure multifactor authentication for a security role in an identity store, do the following:

1. Enable one or more authentication types for the identity store.  
   See the [Enable Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authtypes.md) topic for details.
2. Enforce role members to use specific authentication types for multifactor authentication.  
   See the [Enforce Authentication Types for Multifactor Authentication](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication) topic for details.

See Also

- [Authentication Policy](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authpolicy.md)
- [Configure Second Factor Authentication](/versioned_docs/groupid_11.0/groupid/admincenter/setupauth/sfa.md)
- [Enroll with Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/enroll.md)
- [Authenticate with Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/authenticate.md)
