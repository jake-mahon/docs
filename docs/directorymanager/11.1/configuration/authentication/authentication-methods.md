---
title: authentication methods
sidebar_label: authentication-methods
description: Directory Manager 11.1 documentation for authentication methods with configuration details, usage instructions, and implementation guidance.
---

# Set up Authentication via Email

Users can enroll and authenticate their identity store accounts using Email. An email sent to a
user’s email address contains a confirmation code that the user must enter in Directory Manager to
enroll and authenticate their accounts.

Directory Manager provides a default notification template for enrollment/authentication via email
in various languages. You can change the subject line and the body text in the template for any of
these languages.

NOTE: Before configuring Email authentication, make sure that an SMTP server is configured for the
identity store. See the [Configure an SMTP Server](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

What do you want to do?

- Enable Email Authentication for an Identity Store
- Modify the Email Template
- Enforce Email Authentication for a Role in an Identity Store

## Enable Email Authentication for an Identity Store

The email authentication type must be enabled for an identity store before users can use it for
second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Modify the Email Template

You can modify the subject line and body text of the email sent to users. The email contains a
confirmation code that users have to enter in Directory Manager to enroll/authenticate their
accounts.

**To modify the subject line and body of the email:**

1. In Admin Center, click **Notification Editor** at the bottom of the left navigation pane.  
   The **Notification Editor** is displayed.
2. By default, notifications templates are displayed in US English. You can select a different
   language to customize notification templates for that language.

   1. To select a language, click **Filter**.
   2. On the **Filter(s)** dialog box, use the **Locality** drop-down list to select the ISO code
      for your required language.
   3. Click **Apply**.

3. Search for _AccessCodeEmail_ and click **Edit** in the **Actions** column to open it.

   ![accesscode](/img/product_docs/directorymanager/directorymanager/admincenter/setupauth/accesscode.webp)

4. You can view the notification content in two distinct modes:

   - _Source Code (HTML)_ - This is the default mode, as shown in the figure above. You can make
     changes to the notification template in this mode.
   - _Interactive_ - This is the user-friendly, front-end view. Use it to view the email
     notification, as it will be sent to users.

5. Modify and format the text of the email, except the [USER] and [CODE] placeholders.  
   Directory Manager replaces [USER] with the name of the user and inserts a randomly generated
   verification code into the [Code] placeholder. The user must enter this code in Directory Manager
   to enroll and authenticate.
6. Click the **Title** tile to change the subject line of the email notification.
7. After making the required changes, click **Save**.
8. Click **Go Back** to return to the **Notification Editor**.

## Enforce Email Authentication for a Role in an Identity Store

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Customize Notifications](/docs/directorymanager/11.1/configuration/notifications.md)

# Set Up Authentication Types

The following topics guide you on how to set up different authentication types for an identity store
and enforce them for a security role.

- [Set up Authentication via Security Questions](/docs/directorymanager/11.1/configuration/authentication/authentication-methods.md)
- [SMS Authentication](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md)
- [Set up Authentication via Email](/docs/directorymanager/11.1/configuration/authentication/authentication-methods.md)
- [Set up Authentication via Authenticator](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md)
- [Set up Authentication via Linked Account](/docs/directorymanager/11.1/configuration/authentication/linked-accounts.md)
- [Set up Authentication via YubiKey](/docs/directorymanager/11.1/configuration/authentication/hardware-tokens.md)
- [Set up Authentication via Windows Hello](/docs/directorymanager/11.1/configuration/authentication/windows-hello.md)

**See Also**

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)

# Set up Authentication via Security Questions

Directory Manager provides a list of predefined security questions. This list can be referred to as
the global question pool, as it is available to all identity stores in Directory Manager. You can
add and remove questions to this pool.

Use the questions from the global pool to create a local pool of security questions for each
identity store. Questions in the local pool are available to identity store users for enrolling with
the security questions authentication type.

You can also specify the following settings for a user role in an identity store:

- The number of questions role members must use for enrollment and authentication
- The minimum answer length

What do you want to do?

- Modify the Global Question Pool
- Modify the Local Question Pool
- Enable Security Question Authentication for an Identity Store
- Enforce Security Question Authentication for a Role in an Identity Store
- Specify Policies for Security Question Authentication

## Modify the Global Question Pool

See the [Manage the Global Question Pool ](/docs/directorymanager/11.1/administration/general-settings.md)topic.

## Modify the Local Question Pool

See the [Manage the Local Question Pool](/docs/directorymanager/11.1/configuration/identity-stores.md)
topic.

## Enable Security Question Authentication for an Identity Store

The security question authentication type must be enabled for an identity store before users can use
it for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Enforce Security Question Authentication for a Role in an Identity Store

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

## Specify Policies for Security Question Authentication

See the
[Define Security Question Settings for a Security Role](/docs/directorymanager/11.1/administration/security-policies.md#define-security-question-settings-for-a-security-role) topic.

See Also

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Manage the Local Question Pool](/docs/directorymanager/11.1/configuration/identity-stores.md)
