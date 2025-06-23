---
title: multi factor auth
sidebar_label: multi-factor-auth
description: Directory Manager 11.1 documentation for multi factor auth with configuration details, usage instructions, and implementation guidance.
---

# Configure Multifactor Authentication

You can define a multifactor authentication (MFA) policy for an identity store. This policy enforces
users to enroll their identity store accounts in Directory Manager using one or more authentication
types. Supported authentication types are discussed in the
[Authentication Policies - A Comparison](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

Once enrolled, users must authenticate their identity store accounts using the authentication types
they enrolled with, when they perform any of the following actions in the Directory Manager portal:

- Reset identity store account passwords
- Unlock their accounts

Helpdesk users with restricted access also use authentication type(s) to authenticate end-users
before resetting their password or unlocking their identity store account. See the
[Set Restricted Mode](/docs/directorymanager/11.1/administration/security-policies.md#set-restricted-mode) topic.

NOTE: Multifactor authentication defined in Microsoft Entra Admin Center does not integrate with MFA
in Directory Manager. See the
[Multifactor Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md#multifactor-authentication-policy)
topic.

What do you want to do?

- Configure Multifactor Authentication

## Configure Multifactor Authentication

To configure multifactor authentication for a security role in an identity store, do the following:

1. Enable one or more authentication types for the identity store.  
   See the [Enable Authentication Types](/docs/directorymanager/11.1/configuration/identity-stores.md) topic for details.
2. Enforce role members to use specific authentication types for multifactor authentication.  
   See the
   [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#enforce-authentication-types-for-multifactor-authentication)
   topic for details.

See Also

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Configure Second Factor Authentication](/docs/directorymanager/11.1/configuration/authentication/multi-factor-auth.md)

# Configure Second Factor Authentication

You can enable second factor authentication (SFA) for a user role in an identity store. This policy
enforces role members to enroll their identity store accounts in Directory Manager using one or more
authentication types. Supported authentication types are discussed in the
[Authentication Policies - A Comparison](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

Once enrolled, role members must authenticate their accounts using an authentication type they
enrolled with, while signing into Admin Center or theDirectory Manager portal. Users enrolled with
multiple authentication types can use any one type to authenticate.

NOTE: Directory Manager SFA does not apply to Microsoft Entra ID MFA enabled users.

What do you want to do?

- Configure Second Factor Authentication

## Configure Second Factor Authentication

To configure second factor authentication for a security role in an identity store, do the
following:

Step 1 – Enable one or more authentication types for the identity store.

See the [Enable Authentication Types](/docs/directorymanager/11.1/configuration/identity-stores.md) topic for details.

Step 2 – Enable second factor authentication for a security role in an identity store.

See the
[Enable Second Factor Authentication](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#enable-second-factor-authentication)
topic for details.

See Also

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Configure Multifactor Authentication](/docs/directorymanager/11.1/configuration/authentication/multi-factor-auth.md)
