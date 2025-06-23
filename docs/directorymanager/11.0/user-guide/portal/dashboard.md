---
title: dashboard
sidebar_label: dashboard
description: Directory Manager 11.0 documentation for dashboard with configuration details, usage instructions, and implementation guidance.
---

# Dashboard

The interface of the portal is designed in a manner that you can quickly access the main functions
of the portal. These functions are available as links on the top and left navigation bars.

On logging into GroupID portal, you land on the dashboard.

![dashboard](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/dashboard.webp)

Use the following to navigate within the application:

- [Quick Search](#quick-search)
- [Top right options](#top-right-options)
- [Menu pane](#menu-pane)
- [The Dashboard](#the-dashboard)

## Quick Search

Look on the top of the page for **Search**. This element appears on every page. Use it to locate and
display information for objects. See the
[Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md) topic.

- Use Quick Search to locate an object by its name.
- Use Advanced Search to search an object using a range of attributes.

## Top right options

The top right corner of the application displays:

| Icon                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background tasks icon | View the status of Smart Group update jobs. A Smart Group Update job updates the membership of a Smart Group on the basis of a query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Portal Settings       | Personalize the portal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Help icon             | Launch the portal help.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| User profile icon     | Displays your profile picture with your name and the identity store that GroupID portal is connected to. Click it to launch the menu that displays the following: - GroupID version you’re using - The security role assigned to you in GroupID. The menu also displays the following options: - See full profile. See the [Object properties - General tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md) topic. - My Applications. See the [Access your Applications](/docs/directorymanager/11.0/administration/admin-center/index.md) topic. - Enroll your identity store account. See the [Enroll with Authentication Types](/docs/directorymanager/11.0/administration/admin-center/index.md) topic. - Change Password. See the [Change your Password](/docs/directorymanager/11.0/administration/admin-center/index.md) topic. - Switch account. See the [Switch Accounts](/docs/directorymanager/11.0/administration/admin-center/index.md) topic. - Sign Out |

## Menu pane

Look on the left side of the page for the navigation pane, which lists links to:

- Create New (Group, User, Contact)
- The Dashboard
- Groups
- Users
- Requests
- History
- Entitlement
- Synchronize
- Reports

## The Dashboard

The dashboard comprises of a few cards.

| Cards              | Description                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| My Profile         | View and update your profile in the directory.                                                                                                                 |
| All Users          | Displays number of active users. Clicking it takes you to the **Users** page.                                                                                  |
| My Expiring Groups | Directs your attention to your expiring groups and any workflow requests that you may have to approve.                                                         |
| My Groups          | Takes you to a listing of groups that you own.                                                                                                                 |
| Available Servers  | Displays number of available servers for computing the effective NTFS permissions granted on the shared resources residing on those server.                    |
| Pending Requests   | Displays logged-in user's requests that have not been approved yet.                                                                                            |
| Account Protection | Displays logged-in user's requests that have not been approved yet.                                                                                            |
| My Account History | Keeps track of the actions you performed using the portal. Use the **Add Note** button next to a history item to explain the reason for performing the action. |

**See Also**

- [Welcome to the Portal](/docs/directorymanager/11.0/user-guide/portal/dashboard.md)
- [Access Portal](/docs/directorymanager/11.0/user-guide/portal/dashboard.md)
- [Enroll Your Identity Store Account](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
- [ Change your password](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)

# Access Portal

Use the GroupID portal URL the administrator has provided you to access the portal. The URL lands
you on the **Welcome to GroupID** page. Using this page, you can perform the following functions:

- Unlock your identity store account
- Reset forgotten or lost passwords
- Sign In

To manage access in GroupID, security roles are defined for an identity store. Each role is granted
a set of permissions that enable role members to access specific GroupID functions.

## Sign In

You must connect GroupID portal to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.
- Select an identity store and sign in using a SAML provider.  
  (This option is available if a SAML provider is configured with the selected identity store.)

  NOTE: Microsoft Entra ID MFA enabled users cannot log into GroupID using their username and
  password. They will be authenticated through the SAML provider configured for in GroupID.

- Scan the displayed QR code with the GroupID app installed on your smartphone.  
  (This option is available if the QR code feature is enabled for the identity store you want to
  connect to.)

Next, you may have to pass second factor authentication, depending on whether it is enabled for your
role in the identity store. You can perform tasks in GroupID portal in keeping with your role and
permissions in the identity store.

**To sign in:**

1. Type the GroupID portal URL in the address bar of a web browser and press Enter. For example:  
   https://[machine name]:4443/[portal name]
2. You can sign in using any of the following methods:

   - [With your Identity Store Account](#with-your-identity-store-account)
   - [With a SAML Provider](#with-a-saml-provider)
   - [With QR Code](#with-qr-code)

### With your Identity Store Account

1. On the **GroupID Authenticate** page, click an identity store to connect to.
2. In the **Username** and **Password** boxes, enter the username and password of your identity
   store account, or click **Edit** next to the identity store name to connect to a different
   identity store.
3. After providing your credentials, click **Sign In**.

### With a SAML Provider

You can opt for single sign-on across all GroupID clients, provided that a SAML provider is
configured with GroupID. See the following topics for additional information on the SAML provider
configuration:

- [Configure GroupID in Microsoft Entra ID for SSO](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure the Microsoft Entra SSO Application in GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign
in.

NOTE: For Microsoft Entra ID multifactor-enabled users, a SAML provider must be configured for
signing into GroupID.

### With QR Code

If QR code is enabled for any of the identity stores, the **GroupID Authenticate** page displays the
code too. Use the QR code to sign into an identity store.

1. Open the GroupID app on your smartphone and connect to an identity store. This identity store
   should have the QR code feature enabled for it.  
   GroupID portal would connect to the same identity store you connect the app to.
2. Tap **Configure Application Using QR Code** in the app.
3. Capture the QR code through the app on your phone. One of the following happens:

   - If the identity store that the app is connected to does not have the QR code option enabled,
     an error message is displayed.
   - If the identity store that the app is connected to has the QR code option enabled, GroupID
     portal will connect to this identity store.

### Second Factor Authentication

When Second Factor Authentication is enabled for your role in the selected identity store, one of
the following applies:

- If you have not enrolled your identity store account in GroupID, the Enroll Account window is
  displayed. You must enroll your identity store account using at least one authentication type.

  See the
  [Enroll Your Identity Store Account](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
  topic.

- If you have already enrolled your identity store account in GroupID, the Authenticate window is
  displayed. It lists the authentication types that you used to enroll your account with. You must
  authenticate your identity store account with one authentication type.

  See the
  [Authenticate Your Identity Store Account](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
  topic.

## Sign Out

In GroupID portal, click your profile info in the top right corner and select **Sign Out**.

**See Also**

- [Second Factor Authentication](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
- [Unlock your accounts](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
- [Reset Passwords](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)

# Welcome to the Portal

A GroupID portal represents a virtual link with the directory. Using it, users can do the following
in an identity store:

- Search the directory.
- Perform group management tasks, such as create and update their groups, join/leave a group, attest
  an expiring group, group expiry and renew an expired group , and more.
- Carry out user management tasks, such as create, update, and delete users in the directory. Users
  can maintain and update their profiles, change password, manage their profile, direct reports, and
  more.
- Synchronize data between a source and a destination, such as directories, files, and databases.
- Manage user and group entitlements to shared resources on file servers and SharePoint sites.
- Approve and deny workflow requests.
- Generate hundreds of insightful reports on Active Directory, Microsoft Entra ID, Exchange, and
  Office 365 objects (groups, users, mailboxes, contacts, computers, and servers).
- View history data for directory objects that are created, updated, or deleted in the directory
  using GroupID.

Delegating group and user management tasks to end-users reduces the workload on IT administrators
and helpdesk, as users are empowered to manage their groups and direct reports without assistance
from an administrator. Moreover, when users maintain and update their profile information, data is
more accurate and reliable.

Administrators can maintain complete control over data integrity, as they can implement fine-grained
controls and policies that determine what users can view and change using the GroupID portal. They
can also define workflows for an identity store, that serve as a built-in auditing system to ensure
that users enter correct data before changes are committed to the directory.

A GroupID portal can be linked with multiple identity stores, thus eliminating the need to create a
separate portal for each identity store. Users can select an identity store to log in.

NOTE: Since the administrator can customize the portal for different identity stores and for
different user roles within an identity stores, you may not have access to all portal features.

**See Also**

- [Access Portal](/docs/directorymanager/11.0/user-guide/portal/dashboard.md)
- [Dashboard](/docs/directorymanager/11.0/user-guide/portal/dashboard.md)
- [Group Management](/docs/directorymanager/11.0/user-guide/group-management/index.md)
- [User Management](/docs/directorymanager/11.0/user-guide/user-management/index.md)
- [Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md)
- [History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [ Entitlement](/docs/directorymanager/11.0/user-guide/entitlements/access-management.md)
- [Synchronize](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Reports](/docs/directorymanager/11.0/user-guide/reporting/built-in-reports.md)
