---
sidebar_position: 7294
title: Configure Multifactor Authentication
---

# Configure Multifactor Authentication

You can define a multifactor authentication (MFA) policy for an identity store. This policy enforces users to enroll their identity store accounts in Directory Manager using one or more authentication types. Supported authentication types are discussed in the [Authentication Policies - A Comparison](../IdentityStore/Configure/AuthPolicy#Authenti "Authentication Policies - A Comparison") topic.

Once enrolled, users must authenticate their identity store accounts using the authentication types they enrolled with, when they perform any of the following actions in the Directory Manager portal:

* Reset identity store account passwords
* Unlock their accounts

Helpdesk users with restricted access also use authentication type(s) to authenticate end-users before resetting their password or unlocking their identity store account. See the [Set Restricted Mode](../SecurityRole/Policy/Helpdesk#restrict "Set Restricted Mode") topic.

NOTE: Multifactor authentication defined in Microsoft Entra Admin Center does not integrate with MFA in Directory Manager. See the [Multifactor Authentication Policy](../IdentityStore/ADvsEntraID#MFA "Multifactor Authentication Policy") topic.

What do you want to do?

* [Configure Multifactor Authentication](#Configure "Configure Multifactor Authentication")

## Configure Multifactor Authentication

To configure multifactor authentication for a security role in an identity store, do the following:

1. Enable one or more authentication types for the identity store.  
   See the [Enable Authentication Types](../IdentityStore/Configure/AuthTypes "Enable Authentication Types") topic for details.
2. Enforce role members to use specific authentication types for multifactor authentication.  
   See the [Enforce Authentication Types for Multifactor Authentication](../SecurityRole/Policy/Authentication#MFA "Enforce Authentication Types for Multifactor Authentication") topic for details.

See Also

* [Authentication Policy](../IdentityStore/Configure/AuthPolicy "Authentication Policy")
* [Configure Second Factor Authentication](SFA "Configure Second Factor Authentication")