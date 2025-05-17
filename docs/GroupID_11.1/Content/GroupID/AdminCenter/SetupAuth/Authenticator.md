---
sidebar_position: 7291
title: Set up Authentication via Authenticator
---

# Set up Authentication via Authenticator

Users must install an authenticator app, such as Google Authenticator or Microsoft Authenticator, on their phones and use it to enroll and authenticate their identity store accounts in Directory Manager.

What do you want to do?

* [Enable the Authenticator Authentication Type for an Identity Store](#Enable "Enable the Authenticator Authentication Type for an Identity Store")
* [Enforce Authentication by Authenticator for a Role in an Identity Store](#Enforce "Enforce Authentication by Authenticator for a Role in an Identity Store")

## Enable the Authenticator Authentication Type for an Identity Store

The Authenticator authentication type must be enabled for an identity store before it can be used for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](../IdentityStore/Configure/AuthTypes "Enable Authentication Types") topic.

## Enforce Authentication by Authenticator for a Role in an Identity Store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](../SecurityRole/Policy/Authentication#MFA "Enforce Authentication Types for Multifactor Authentication") topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

**See Also**

* [Authentication Policy](../IdentityStore/Configure/AuthPolicy "Authentication Policy")