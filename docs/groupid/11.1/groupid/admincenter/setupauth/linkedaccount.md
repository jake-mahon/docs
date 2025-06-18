# Set up Authentication via Linked Account

The Directory Manager portal enables a user to link accounts that he or she may have in different
identity stores. When the user enrolls any one of those linked accounts in Directory Manager, it
suffices for the enrollment of all linked accounts.

Users can then reset their account passwords and unlock accounts through a linked account. Let’s
assume a user links his or her accounts in Identity Store A and Identity Store B. Using the Linked
Account authentication type, the user can unlock the Identity Store A account by providing the
credentials of the Identity Store B account and vice versa.

NOTE: The Linked Account authentication type is available for multifactor authentication only.

What do you want to do?

- Enable Linked Account Authentication for an Identity Store
- Enforce Linked Account Authentication for a Security Role

## Enable Linked Account Authentication for an Identity Store

The Linked Account authentication type must be enabled for an identity store before it can be used
for multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/groupid/11.1/groupid/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce Linked Account Authentication for a Security Role

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/groupid/11.1/groupid/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

See Also

- [Authentication Policy](/docs/groupid/11.1/groupid/admincenter/identitystore/configure/authpolicy.md)
