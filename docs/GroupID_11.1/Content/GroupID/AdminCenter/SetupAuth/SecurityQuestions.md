---
sidebar_position: 7296
title: Set up Authentication via Security Questions
---

# Set up Authentication via Security Questions

Directory Manager provides a list of predefined security questions. This list can be referred to as the global question pool, as it is available to all identity stores in Directory Manager. You can add and remove questions to this pool.

Use the questions from the global pool to create a local pool of security questions for each identity store. Questions in the local pool are available to identity store users for enrolling with the security questions authentication type.

You can also specify the following settings for a user role in an identity store:

* The number of questions role members must use for enrollment and authentication
* The minimum answer length

What do you want to do?

* [Modify the Global Question Pool](#global "Modify the Global Question Pool")
* [Modify the Local Question Pool](#local "Modify the Local Question Pool")
* [Enable Security Question Authentication for an Identity Store](#enable "Enable Security Question Authentication for an Identity Store")
* [Enforce Security Question Authentication for a Role in an Identity Store](#enforce "Enforce Security Question Authentication for a Role in an Identity Store")
* [Specify Policies for Security Question Authentication](#specify "Specify Policies for Security Question Authentication")

## Modify the Global Question Pool

See the [Manage the Global Question Pool](../General/GlobalPool "Manage the Global Question Pool") topic.

## Modify the Local Question Pool

See the [Manage the Local Question Pool](../IdentityStore/Configure/Security/SecurityQuestions "Manage the Local Question Pool") topic.

## Enable Security Question Authentication for an Identity Store

The security question authentication type must be enabled for an identity store before users can use it for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](../IdentityStore/Configure/AuthTypes "Enable Authentication Types") topic.

## Enforce Security Question Authentication for a Role in an Identity Store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](../SecurityRole/Policy/Authentication#MFA "Enforce Authentication Types for Multifactor Authentication") topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

## Specify Policies for Security Question Authentication

See the [Define Security Question Settings for a Security Role](../SecurityRole/Policy/Password#settings "Define Settings for Security Questions") topic.

See Also

* [Authentication Policy](../IdentityStore/Configure/AuthPolicy "Authentication Policy")
* [Manage the Local Question Pool](../IdentityStore/Configure/Security/SecurityQuestions "Manage the Local Question Pool")