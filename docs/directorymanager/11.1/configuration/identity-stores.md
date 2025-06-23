---
title: Identity Stores Configuration Guide
sidebar_label: Identity Stores
description: Configure Active Directory and Microsoft Entra ID identity stores including group lifecycle policies, naming conventions, and dynamic group management.
---

# Microsoft Entra ID vs. Active Directory Identity Stores

This topic discusses the differences between an Active Directory and Microsoft Entra ID identity
store in Directory Manager.

## Group Expiration Policy

Microsoft Entra ID offers limited options to define a default expiry policy for groups whereas
Directory Manager provides a comprehensive Group Life Cycle policy. See the
[Manage Group Lifecycle Settings](/docs/directorymanager/11.1/administration/services/overview.md) topic.

Since these policies are not integrated; you should either useMicrosoft Entra ID’s or Directory
Manager’s expiration policy settings for groups in an Microsoft Entra ID identity store.

## Group Naming Policy

The group naming policy defined in Microsoft Entra ID is not integrated with the Group Name Prefixes
policy in Directory Manager. As a result:

- Microsoft Entra ID's group naming policy has no impact on groups created using Directory Manager.
- Using Directory Manager, you cannot modify the prefixes and suffixes that are applied to groups
  created directly in Microsoft Entra Admin Center.

To use the same prefixes for group names as are defined in Microsoft Entra Admin Center, the
administrator should define the same prefixes in Directory Manager. See the
[Group Name Prefixes](/docs/directorymanager/11.1/administration/services/overview.md) topic.

## Dynamic Groups in Microsoft Entra ID

A dynamic group created in Microsoft Entra Admin Center will not be automatically upgraded to a
Smart Group in Directory Manager. It will be displayed as a static (unmanaged) group. However, its
membership will be managed dynamically in Microsoft Entra ID and displayed in Directory Manager.

You should apply a query to a group either in Microsoft Entra Admin Center or in Directory Manager.
Do not manipulate the same object simultaneously from Directory Manager and Microsoft Entra Admin
Center.

## Multifactor Authentication Policy

The multifactor authentication (MFA) policy defined for Microsoft Entra Admin Center cannot be
integrated with the multifactor authentication policy defined for a Microsoft Entra ID identity
store in Directory Manager. MFA in Entra applies to Microsoft Entra Admin Center while MFA in
Directory Manager applies while performing account unlock and password reset in the respective
identity store.

## User Roles in Microsoft Entra ID and Directory Manager

When a user, with a standard user role in Microsoft Entra Admin Center, is assigned an elevated role
in Directory Manager, he or she can manipulate directory objects using Directory Manager that he or
she cannot otherwise manipulate directly in Microsoft Entra Admin Center due to limited role
permissions.

The actions that a user can perform in Directory Manager depend on the permissions assigned to his
or her role in Directory Manager. These permissions may conflict with the permissions that the user
has in Microsoft Entra Admin Center. For example, a user who does not have permissions to create
groups in Microsoft Entra Admin Center will be able to create groups in Microsoft Entra ID using
Directory Manager if his or her Directory Manager role has permissions to create new groups.

To avoid conflicts, Directory Manager administrators should grant permissions to security roles with
discretion.

## Groups in Microsoft Entra ID

- To create security groups and Office 365 groups using Directory Manager, Office 365 must be set as
  the messaging provider for the identity store. Security groups cannot be mail-enabled. Use an
  Office 365 group as an alternative to a mail-enabled security group.
- Microsoft Entra ID does not allow a group to be added to the membership of an Office 365 group.
  For this reason:

  - An Office 365 group can only have user objects as its members.
  - Even if the query for an Office 365 group returns different object types, only user objects
    are added to group membership.
  - The nesting option in the _Out of Bounds_ settings for an identity store will empty the
    membership of a Smart Group of the Office 365 type, because nested groups cannot be added as
    group members. See the
    [Manage Group Membership Settings](/docs/directorymanager/11.1/administration/services/overview.md)topic.
  - A Dynasty cannot be created as an Office 365 group.

- You can create and manage distribution groups.
- You can also create teams and channels in MS Teams.
- You cannot create Office 365 connected Yammer groups and Planner groups using Directory Manager.
  These groups can be created from their respective portals. However, Yammer and Planner groups are
  displayed in the Directory Manager portal when their respective subscriptions are added to
  Office 365. When you update these groups using Directory Manager, your changes will be reflected
  on the Yammer, and Planner portals respectively.
- Microsoft Entra ID supports multiple primary owners for a group. One primary owner is mandatory.
- Only user objects can be set as primary owners.
- When you expire an Office 365 group using Directory Manager, its member list is backed up in the
  database and then cleared from Office 365. The Microsoft Graph API does not allow for the
  modification and removal of the mail attribute; therefore, it is not possible to remove the
  group’s email and make it mail-disabled.
- Directory Manager cannot manipulate directory-synced objects (objects that are synced from
  on-premises Active Directory to Microsoft Entra ID).

## User and Contact Objects in Microsoft Entra ID

- You can create users (non mail-enabled) and mailboxes in a Microsoft Entra IDidentity store. The
  contact object type is not supported.
- The Photo attribute is only available for an Office 365 user (mailbox).
- The Directory Manager portal does not display the password expiry date of a user account in a
  Microsoft Entra ID identity store.
- The ‘block sign in’ option in Microsoft Entra Admin Center is enabled when a user's account is
  disabled or locked out in Directory Manager. For example, if a user is locked out due to the
  domain policy or disabled by the User Life Cycle schedule, block sign in will be enabled. The
  disabled/locked user will not be able to log into his or her workstation either.

## Miscellaneous

- For a Microsoft Entra ID identity store, you must configure Office 365 as the messaging provider
  and SMTP server.
- The Recycle Bin does not display any data for a Microsoft Entra ID identity store.
- Directory Manager Management Shell cannot communicate directly or remotely with Microsoft Entra ID
  and Office 365.
- Smart Groups and Dynasties in a Microsoft Entra ID identity store use a device structured query
  language (and not an LDAP query) to update group membership.
- Only the Microsoft Entra ID attributes listed in the Microsoft Graph API v 3.26.0 schema file are
  available in Directory Manager.
- The company attribute in Microsoft Entra ID stores the name of the company registered in Microsoft
  Entra Admin Center, and cannot be manipulated using Directory Manager. A Microsoft Entra ID
  identity stores uses the OfficeLocation attribute as an alternative to the company attribute.

# Configure an Identity Store

Various configurations can be defined for an identity store.

**To manage configurations:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. You can configure the following for an identity store:

   - Identity Store-specific Configurations
   - Security Roles
   - Replication Settings
   - Identity Store History
   - Workflows
   - Entitlements
   - Schedules

## Identity Store-specific Configurations

The following configurations have to be defined for an identity store:

- An SMTP server for sending email notifications. See the
  [Configure an SMTP Server](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.
- Authentication types and policies. See the [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.
- A group life cycle policy that controls the expiry and deletion of groups in the identity store.
  See the [Manage Group Lifecycle Settings](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- Membership life cycle policies for static groups. See the
  [Manage Membership Life Cycle Policies](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- Inheritance settings for Dynasties. See the
  [Manage Dynasty Settings](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- Group update and membership settings. See the
  [Manage Group Membership Settings](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- Group name prefixes, which are used to append group names. See the
  [Group Name Prefixes](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- Settings for history tracking. See the
  [Configure History Tracking](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- A messaging provider so that mail-enabled objects can be created in the identity store. See the
  [Configure a Messaging Provider](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- Profile validation settings to ensure the accuracy of users’ information in the directory. See the
  [Configure User Profile Validation](/docs/directorymanager/11.1/administration/services/overview.md) topic.
- Circular reference settings for object update. See the
  [Manage Circular Reference ](/docs/directorymanager/11.1/administration/services/overview.md)topic.
- Password restrictions and rules for setting identity store passwords. See the
  [Configure Password Options](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Security Roles

An identity store has security roles defined for it, and only role members can access Directory
Manager. See the [Security Roles](/docs/directorymanager/11.1/administration/security-roles.md) topic.

You can specify the following configurations for a role:

- Assign permissions on different Directory Manager functions. See the
  [Security Role – Permissions](/docs/directorymanager/11.1/administration/permissions.md) topic.
- Specify policies for roles. See the [Security Role Policies](/docs/directorymanager/11.1/administration/security-policies.md)
  topic.

## Replication Settings

The Replication service is responsible for replicating objects that are created or modified directly
on the directory server, to the Elasticsearch repository. You can specify the attributes for the
Replication Service to replicate from the provider to the Elasticsearch repository.

See the [Manage Local Replication Settings](/docs/directorymanager/11.1/configuration/replication.md) topic for details.

## Identity Store History

You can view the changes made to an identity store’s configurations, workflows, and security roles
in an identity store. See the [Identity Store History](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Workflows

Workflows are a built-in auditing system to ensure that changes made to directory objects are
approved by an authorized user before they are committed to the directory.

You can define different workflows for an identity store. For example, you can define a workflow
that triggers when a user creates a group in the directory using Directory Manager. See the
[Workflows](/docs/directorymanager/11.1/workflows/overview.md) topic for details.

## Entitlements

Specify file servers in Active Directory and SharePoint sites to view and update the permissions
assigned to objects on shared resources. See the [Entitlement](/docs/directorymanager/11.1/configuration/entitlements.md) topic.

## Schedules

Define schedules to auto execute different Directory Manager functions, such as group expiry and
deletion, Smart Group membership update, temporary additional manager assignment to users, and more.
See the [Schedules](/docs/directorymanager/11.1/automation/overview.md) topic.

**See Also**

- [Manage an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md)

# Authentication Policy

The Directory Manager authentication policy is based on:

- Second Factor Authentication
- Multifactor Authentication
- Second Way Authentication

## Authentication Policies - A Comparison

The following table shows a comparison between second factor authentication, multifactor
authentication, and second way authentication.

|                                                         | Second Factor Authentication                                                                            | Multifactor Authentication                                                                                                                                                                               | Second Way Authentication                                                                                                    |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Configuration                                           | It is enabled and configured for an identity store, and then for a security role in the identity store. | It is enabled and configured for an identity store. Settings for a security role are optional.                                                                                                           | It is configured for an identity store                                                                                       |
| Applies when                                            | Users sign into Admin Center or the Directory Manager portal                                            | Users reset password or unlock account in the Directory Manager portal. Helpdesk users need to verify the identity of users before resetting their password and unlocking their account in Admin Center. | Unenrolled users attempt to reset their identity store account password or unlock account using the Directory Manager portal |
| Supported authentication types                          | - Security Questions - SMS - Email - Authenticator - YubiKey - Windows Hello                            | - Security Questions - SMS - Email - Authenticator - Linked Account - YubiKey - Windows Hello                                                                                                            | - Security Questions - SMS - Email                                                                                           |
| Number of authentication types required to authenticate | Only one                                                                                                | Can be more than one, as set by the administrator                                                                                                                                                        | Can be one or more, as set by the administrator                                                                              |

# Enable Authentication Types

You must enable authentication types for an identity store to allow users to use them for second
factor authentication and multifactor authentication.

Moreover, you must also enable enrollment for an identity store, so users can enroll their accounts.

## Enable Authentication Types

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Authentication
   Types**.
4. On the **Authentication Types** page, use the toggle button for an authentication type to enable
   or disable it.  
   Enabled authentications types are available to identity store users for enrollment and
   authentication. You must configure them before they can be used. Supported authentication types
   are:

   - Security Questions
   - SMS
   - Email
   - Authenticator
   - Linked Account
   - YubiKey
   - Windows Hello

5. Click **Save**.

## Enable Enrollment

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations under Settings** in the left pane. Then click **Authentication Types**.
4. On the **Authentication Types** page, select the **Enrollment Enabled** check box to force
   unenrolled users to enroll their identity store accounts in Directory Manager.  
   Do not select this check box if you do not want to use multifactor authentication or second
   factor authentication in Directory Manager.
5. Click **Save**.

NOTE: For second factor authentication and multifactor authentication to work in Directory Manager,
the **Enrollment Enabled** check box must be selected. Else, users will not be able to enroll, which
will prevent them from using Directory Manager.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Configure Second Factor Authentication](/docs/directorymanager/11.1/configuration/authentication/multi-factor-auth.md)
- [Configure Multifactor Authentication](/docs/directorymanager/11.1/configuration/authentication/multi-factor-auth.md)
- [Set Up Authentication Types](/docs/directorymanager/11.1/configuration/authentication/authentication-methods.md)

# Configure Password Options

You can define the following password restrictions and rules for an identity store:

- Specify restricted passwords
- Define regular expressions for allowed passwords
- Specify disallowed passwords using an external file

When identity store users reset or change their passwords using Directory Manager, their new
passwords must adhere to the defined rules.

NOTE: (1) These password configurations do not apply when helpdesk users reset passwords of
end-users.  
 (2) In case a user has linked his or her accounts in different identity stores, the password
configurations for the master account apply.

In addition to these password restrictions, you can define a password policy for a security role in
an identity store. See the
[Directory Manage Password Policy ](/docs/directorymanager/11.1/administration/security-policies.md) topic.

What do you want to do?

- Define Restricted Passwords
- Specify Regular Expressions for Allowed Passwords
- Specify Disallowed Passwords Using an External File

## Define Restricted Passwords

You can specify certain strings of text that users cannot use as passwords or part of passwords. You
can also specify regular expressions to prevent users from creating passwords that match the
expression.

**To restrict passwords:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Password Options**.
4. In the **Password Exception** area on the **Password Options** page, click **Add Password
   Exception**.
5. On the **Add New Password Exception** dialog box, select an operator in the **Type** drop down
   list.

   - **Equals:** passwords that match the value you specify in the **Exception Value** box are not
     allowed.
   - **Starts with:** passwords that start with the value you specify in the **Exception Value**
     box are not allowed.
   - **Ends With:** passwords that end with the value you specify in the **Exception Value** box
     are not allowed.
   - **Contains:** passwords that contain the value you specify in the **Exception Value** box are
     not allowed.
   - **Regular Expression:** passwords that satisfy the regular expression you specify in the
     **Exception Value** box are not allowed. See the
     [What are Regular Expressions?](/docs/directorymanager/11.1/configuration/display-types.md#what-are-regular-expressions)
     topic to learn about regular expressions and their syntax.

6. Type a value for the selected operator in the **Exception Value** box.
7. Click **OK**.
8. Follow steps 4 to 7 to define as many exceptions as required. All exceptions are treated as
   password restrictions.

   **To remove a password restriction:**

   - In the **Password Exception** area, click **Remove** for a restriction or rule to remove it.
   - To remove all restrictions, click **Remove All**.

9. Click **Save** on the **Password Options** page.

## Specify Regular Expressions for Allowed Passwords

By specifying regular expression(s) for allowed passwords, you ensure that passwords created by
users follow certain rules and patterns.

**To specify a regular expression:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Password Options**.
4. In the **Password Rules** area on the **Password Options** page, click **Add Password Rule**.
5. On the **Add Rules** dialog box, type a regular expression in the **Regular Expression** box.  
   See the
   [What are Regular Expressions?](/docs/directorymanager/11.1/configuration/display-types.md#what-are-regular-expressions)
   topic to learn about regular expressions and their syntax.
6. Click **OK**. The regular expression is displayed in the In the **Password Rules** area.
7. Follow steps 4 to 6 to define as many regular expressions as required. Passwords that satisfy any
   of the regular expressions are allowed.

   **To remove a regular expression:**

   - In the **Password Rules** area, click **Remove** for a regular expression to remove it.
   - To remove all regular expressions, click **Remove All**.

8. Click **Save** on the **Password Options** page.

## Specify Disallowed Passwords Using an External File

A simple way of preventing users from using certain words or strings as passwords is to add those
restricted passwords to a .csv or .txt file and upload it to Directory Manager.

**To upload the file:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Password Options**.
4. On the **Password Options** page, select the **Check for disallowed passwords from imported
   file** check box in the **Import Disallowed Password** List area to enable file upload.
5. Click **Import** to browse and select the file (.csv, .txt) containing the disallowed passwords.
6. Click **Save** on the **Password Options** page.

NOTE: Only a single file containing disallowed passwords can be imported for an identity store;
importing another file will replace the existing one.

**See Also**

- [Directory Manage Password Policy ](/docs/directorymanager/11.1/administration/security-policies.md)

# Manage the Local Question Pool

When you create a new identity store, four questions from the global question pool are added to the
identity store’s local pool by default. A local pool is maintained individually by each identity
store. You can modify a local pool by (a) adding questions from the global question pool, (b) adding
questions of your choice (questions that are not in the global pool), and (c) by removing questions
from it.

To enroll using security questions, identity store users must select a certain number of questions
from the local pool and provide answers.

What do you want to do?

- Add a Question to the Local Pool from the Global Pool
- Add a Question of your Choice to the Local Pool
- Remove a Question from the Local Pool

## Add a Question to the Local Pool from the Global Pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Security Questions**.
4. On the **Security Questions** page, click in the box at the top and select a security question
   from the list of global security questions. You can also type a search string to filter the
   questions containing the string. After selecting a question, click **Add**. The question is added
   to the **Questions** list.
5. Click **Save**.

## Add a Question of your Choice to the Local Pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Security Questions**.
4. On the **Security Questions** page, click in the box at the top and type a security question.
   Then click **Add**. The question is added to the **Questions** list.
5. Click **Save**.

## Remove a Question from the Local Pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Security Questions**.
4. On the **Security Questions** page, click **Remove** for a security question to remove it from
   the local pool. To remove all questions, click **Remove All**.
5. Click **Save**.  
   Deleting a question does not impact the users currently enrolled with the question.

**See Also**

- [Manage the Global Question Pool ](/docs/directorymanager/11.1/administration/general-settings.md)
- [Set up Authentication via Security Questions](/docs/directorymanager/11.1/configuration/authentication/authentication-methods.md)

# Configure an SMTP Server

An identity store requires an SMTP server for sending email notifications. It can be an Exchange
server deployed in your environment or an external SMTP server; for example, Gmail or Office 365.

When configuring a provider that supports modern authentication, such as Exchange Online and Office
365, you have the option to use OAuth for modern authentication.

NOTE: With Microsoft Entra ID's mandatory multifactor authentication policy, basic authentication
cannot be used for an Office 365 SMTP server. You can only use OAuth for modern authentication.

You can also specify notification recipients, that can be:

- individual recipients
- the user who makes a change to a directory object
- the directory object being modified
- group owners and user managers—a practice that does not require update when role assignments
  change
- owners of a public group on membership changes
- an object that is added to the membership of a group
- an object that is removed from the membership of a group

What do you want to do?

- Configure an SMTP Server
- Specify Notification Recipients
- Specify a Portal URL for Password Expiry Group Notifications
- Manage Membership Life Cycle Notifications
- Manage Managed by Life Cycle Notifications

## Configure an SMTP Server

Follow the steps to configure an SMTP Server.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under **Settings** in the left pane. Then click **Notifications**.
The **Notifications** page is displayed.

Step 4 – In the **SMTP Server** section, enter the fully qualified domain name or IP address of the
SMTP server in the **SMTP Server** box. Email notifications will be routed through this server.

Step 5 – Enter the email address to use for sending notifications in the **From email address** box.

Step 6 – Enter a port for communicating with the SMTP server in the **Port** box.

Step 7 – Select the **SSL enabled** check box if the SMTP server is SSL-enabled.

**Set up user authentication**

By default, the credentials of the user logged into Admin Center are used to connect to the SMTP
server. Hence, each user connects to the server in the context of the identity store and credentials
he or she has currently used to sign into Admin Center.  
However, you may choose to specify a single account for connecting, in case your user accounts do
not have rights on the SMTP server or you want to use a dedicated account. Select the **Use SMTP
user authentication** check box. This enables the credentials options, where you can choose _basic
authentication_ or _OAuth_; then provide the credentials of an authorized user account on the SMTP
server.

- **For basic authentication**

  1. Select the **Basic** tile.
  2. Enter the username and password of an authorized user account on the SMTP server in the
     **SMTP username** and **SMTP password** boxes.

- **For modern authentication**

  OAuth settings are available when you specify a provider that supports modern authentication,
  such as Exchange Online and Office 365.

  NOTE: For OAuth to work, you must enable the Graph API’s ‘SMTP.Send’ permission for the
  Directory Manager app in Microsoft Entra Admin Center:

  1. Click the **OAuth 2.0** tile.
  2. In the **Token Endpoint** box, provide the following URL:  
     https://login.microsoftonline.com/organizations/oauth2/v2.0/token

     NOTE: In case of Office 365 provider, you need to provide Graph Endpoint of your CloudType
     in the **Token Endpoint** box, for example, https://graph.microsoft.com/v1.0

  3. In the **Client ID** box, provide the client ID assigned to the Directory Manager application
     when you registered it in Microsoft Entra Admin Center.
  4. In the **Client Secret** box, provide the client secret value generated against the
     certificate uploaded to Microsoft Entra Admin Center while registering the Directory Manager
     application.
  5. In the **Scope** box, provide the following URL:  
     https://outlook.office365.com/SMTP.Send

     NOTE: In case of Office 365 provider, provide name of the tenant the **Scope** box, for
     example, abcd.onmicrosoft.com

  6. In the **Username** and **Password** boxes, provide the credentials to connect to the SMTP
     server.

  NOTE: The user account used for SMTP Authentication for OAuth should have no MFA applied to it
  or have a conditional bypass for GraphAPI requests.

**Test the connection**

Step 8 – Click **Test Server** to check the server settings. In the **Test Notification** dialog
box, enter an email address to receive the test notification, and click **OK**. A test email is sent
to the provided email address using the configured SMTP settings.

Step 9 – Click **Save** on the **Notifications** page.

## Specify Notification Recipients

Follow the steps to specify notfication recipients.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under **Settings** in the left pane. Then click **Notifications**.
The **Notifications** page is displayed.

Step 4 – In the **To:** and **CC:** boxes in the **Recipients** section, enter the email addresses
of one or more notification recipients, separating multiple addresses with a semicolon (;). All
email notifications generated for the identity store are sent to these recipients.

Step 5 – You can also select other recipients to send email notifications for different events. In
the **Also Notify** area, select the required check boxes.

- Logged in users for their actions – To send email notifications to the logged-on user for changes
  they make to directory objects using Admin Center, Directory Manager portal, and Management Shell.
  This setting applies to mail-enabled users only.
- Object being modified – To send email notifications to the object (group, user, contact) being
  modified. In case of a group, all members are notified.
- Group ownser(s) for their groups To send email notifications to the primary and additional owners
  of groups about changes made to their respective groups.
- Manager(s) for their direct reports – To send email notifications to managers about changes made
  to their respective direct reports.
- Newly added group members on addition – To send email notifications to objects when they are added
  to the membership of a group.
- Removed group member on removal – To send email notifications to objects when they are removed
  from the membership of a group.
- Public group owner for membership – To send email notifications to the primary and additional
  owners of a public group on membership change. See the
  [Group Security Types](/docs/directorymanager/11.1/administration/general-settings.md#group-security-types) topic.

Step 6 – Click **Save** on the **Notifications** page.

## Specify a Portal URL for Password Expiry Group Notifications

A password expiry Smart Group can be created using the Directory Manager portal. Its membership is
limited to users whose identity store account passwords are approaching their expiry dates.

The administrator can apply a setting to send a password expiry warning email to group members every
time group membership is updated. This email includes the URL of a Directory Manager portal to
redirect users there for changing their passwords.

Users who change their passwords are removed from group membership.

Follow the steps to specify the portal URL.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Store page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Notifications**. The
Notifications page is displayed.

Step 4 – In the Password Expiry Group Notifications section, select the URL of a Directory Manager
portal in the **GroupID Portal URL** drop-down list. This URL will be included in password expiry
warning emails to redirect users to the portal, where they can change their identity store account
passwords.  
The list contains URLs of all Directory Manager portals linked with the identity store.

Step 5 – Click **Save** on the **Notifications** page.

NOTE: Password expiry Smart Groups cannot be created in a Microsoft Entra ID identity store.

## Manage Membership Life Cycle Notifications

Membership lifecycle notifications are triggered on the following events:

- When the Membership Life Cycle schedule temporarily adds or removes a user from the membership of
  a semi-private or public group, the respective user is notified.
- Peers and managers can temporarily join or leave a group on behalf of another user (User A).
  Membership lifecycle notifications are sent to User A when the Membership Life Cycle schedule adds
  or removes him or her from group membership.
- Users are also notified when they are temporarily added or removed from group membership according
  to membership lifecycle policies. See the
  [Manage Membership Life Cycle Policies](/docs/directorymanager/11.1/administration/services/overview.md) topic.

You can choose to send notification when users are temporarily added to groups, removed from groups,
or on both events.

Follow the steps to set Membership Life Cycle notifications.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Notifications**. The
page is displayed.

Step 4 – In the Membership Lifecycle Notifications section, select your desired options.

- On joining group – Sends email notifications to users when the Membership Life Cycle schedule
  temporarily adds them to group membership.
- On leaving group – ends email notifications to users when the Membership Life Cycle schedule
  temporarily removes them from group membership.
- X days before user is going to leave the group – Select this check box and specify a certain
  number of days, say 2. The user receives a notification 2 days before he or she is removed from
  group membership by the Membership Life Cycle schedule. This setting also applies to users who
  have been marked for removal from group membership in the group attestation process. (See the
  **Specify member inactive period** setting in the
  [Enable Group Attestation](/docs/directorymanager/11.1/administration/services/overview.md#enable-group-attestation) topic.

Step 5 – Click **Save** on the **Notifications** page.

## Manage Managed by Life Cycle Notifications

You can set up email notifications for objects when the Managed By Life Cycle schedule adds or
removes them as temporary additional owners for groups and temporary additional managers for users.

When a group is set or removed as a temporary additional owner, all its members are notified.

Follow the steps to set up Managed By Life Cycle notifications.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Notifications**. The
**Notifications** page is displayed.

Step 4 – In the **Managed By Notifications** section, select your desired options.

- Same as membership life cycle – Applies the membership lifecycle notification settings to the
  managed by life cycle and disables the **Managed By Notifications** section. For example, if _On
  joining group_ is selected for Membership life cycle, it has the same behavior as discussed for
  _Object is added as additional owner/manager_.
- Object is added as additional owner/manager – **Object is added as additional owner/manager** -
  Sends an email notification to an object when the Managed By Life Cycle schedule adds it as the
  temporary additional owner of a group or the temporary additional manager of a user. The primary
  owner or primary manager is also notified accordingly.
- Object is removed as additional owner/manager – Sends an email notification to an object when the
  Managed By Life Cycle schedule removes it as the temporary additional owner of a group or the
  temporary additional manager of a user. The primary owner or primary manager is also notified
  accordingly.
- X Days before object is removed as additional owner/manager – Select this check box and specify a
  certain number of days, say 2. The temporary additional manager/owner receives a notification 2
  days before the Managed By Life Cycle schedule removes him or her as additional manager/owner.

Step 5 – Click **Save** on the Notifications page.

**See Also**

- [Notifications](/docs/directorymanager/11.1/configuration/notifications.md)
- [Membership Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md)
- [Managed By Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md)

# Create an Identity Store

To perform group and identity management operations in an identity provider using Directory Manager,
the first step is to create an identity store for that provider.

You can create identity stores for the following providers:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

To create an identity store, you have to specify an identity provider and its connection details.

After creating an identity store, you must configure certain settings for it. These configurations
are discussed in the [Configure an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Create an Identity Store for Active Directory

Follow the steps to create an identity store for Active Directory.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click **Create Identity Store** in the top right corner.

Step 3 – On the Create Identity Store page, use the Store Type drop-down list to select an identity
provider to create an identity store for.  
This list displays the supported providers. By default, Active Directory is selected. Fields on this
page vary, depending on the provider you select.

Step 4 – Enter a name for the identity store in the Name box.

Step 5 – In the Domain Name box, enter the fully qualified name of the Active Directory domain you
want to create the identity store for.

Step 6 – In theService Accout box, enter the username of a service account or a group managed
service account (gMSA) to connect to Active Directory.

- For a service account – The service account must have sufficient privileges on the provider to
  facilitate group and identity management operations using Directory Manager. The minimum
  permissions the service account requires for Active Directory are discussed in the
  [Service Account for Active Directory and Exchange](/docs/directorymanager/11.1/installation/requirements.md)
  topic.
- For a gMSA – If you provide a service account with
  ‘$’ as its last character (as in MyAdminAccounts$), Directory Manager entertains it as a Group
  Managed Service Account (gMSA). To use a gMSA to connect an identity store to Active Directory,
  make sure the gMSA is configured properly and has sufficient permissions. See the
  [gMSA for Active Directory](/docs/directorymanager/11.1/installation/requirements.md) topic.

Step 7 – In the **Service Account Password** box, enter the service account password.  
Skip this box for a gMSA.

Step 8 – Select the **SSL Enabled** check box if the directory server is LDAP over SSL enabled.

NOTE: Directory Manager 11 supports LDAPS; however, the Replication Service will still connect to
the domain controller via the LDAP 389 port. Hence, both LDAP and LDAPS protocols must be enabled on
the domain controller.

Step 9 – Click **Create Identity Store**. The **Replicate Identity Store** message is displayed.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.

## Create an Identity Store for Microsoft Entra ID

In Admin Center, click **Identity Stores** in the left pane.

Step 1 – On the Identity Stores page, click **Create Identity Store** in the top right corner.

Step 2 – On the Identity Stores page, use the Store Type drop-down list to select an identity
provider to create an identity store for.  
This list displays the supported providers. Select _Microsoft Azure_.

Step 3 – Enter a name for the identity store in the Name box.

Step 4 – From the Cloud drop-down list, select the cloud where your Microsoft Entra ID tenant
exists.

Step 5 – In the Domain Name box, enter the fully qualified name of the Microsoft Entra ID domain you
want to create the identity store for.

Step 6 – Specify the path to the .pfx certificate in the PFX Certificate box. For that, click
**Choose File** and browse for the file. Select it and click **Open**.  
As a prerequisite, the .pfx certificate must be generated on the Directory Manager machine. See the
[Certificate for Entra ID Authentication ](/docs/directorymanager/11.1/misc/directorymanager/configureentraid/register/modauth.md)topic for
information on generating a certificate and then converting it into the .pfx format.

Step 7 – In the PFX Certificate Password box, enter the password that was created while exporting
the .pfx certificate.

Step 8 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

Step 9 – In the **Registered Client Secret on EntraID** box, provide the client secret value
generated against the certificate uploaded to Microsoft Entra Admin Center while registering the
Directory Manager application.

Step 10 – If you bind a custom domain with your Microsoft Entra ID tenant and create an identity
store for Microsoft Entra ID using the credentials of that custom domain, then you must provide the
name of the primary domain in the **Primary Domain Name** box, so that the _write_ operations are
not affected.

Step 11 – Click **Create Identity Store**. The Replicate Identity Store message is displayed.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identify Stores page. You can specify different
configurations for it.

NOTE: Microsoft’s throttling policy restricts an application (such as Directory Manager) to create a
maximum of 3 concurrent sessions with Microsoft Entra ID. With this in view, Directory Manager
allows only one active session at any given time, which is used by Data service and Replication
service.

## Create an Identity Store for Generic LDAP

Create a Generic LDAP identity store to connect to any LDAP version 3-compliant directory server,
such as Sun ONE directory server. This provider does not support dynamic schema detection. The
schema included for this provider mostly contains commonly used fields.

Follow the steps to create an identity store

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click **Create Identity Store** in the top right corner.

Step 3 – On the **Create Identity Store** page, use the **Store Type** drop-down list to select an
identity provider to create an identity store for.  
This list displays the supported providers. Select _Generic LDAP_.

Step 4 – Enter a name for the identity store in the **Name** box.

Step 5 – In the **Hostname** box, enter the fully qualified domain name or IP address of the machine
that hosts the generic LDAP server.

Step 6 – In the **Port Number** box, enter the port on which LDAP is running. This port is used to
communicate with the host machine.

Step 7 – In the **Domain Name** box, enter the fully qualified name of the domain you want to create
the identity store for.

Step 8 – In the **Service Account** box, enter the fully qualified username of a service account
(for example, CN=Admin,CN=Users,DC=Imanami,DC=COM) to connect to _Generic LDAP_. The service account
must have sufficient privileges on the provider to facilitate group and identity management
operations using Directory Manager.

Step 9 – In the **Service Account Password** box, enter the service account password.

Step 10 – Click **Create Identity Store**. The **Replicate Identity Store** message is displayed.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.

## Create an Identity Store for Google Workspace

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click **Create Identity Store** in the top right corner.

Step 3 – On the Create Identity Store page, use the Store Type drop-down list to select an identity
provider to create an identity store for.  
This list displays the supported providers. Select _Google Workspace_.

Step 4 – Enter a name for the identity store in the **Name** box.

Step 5 – In the Service Account box, enter the service account name assigned to you when you created
your Google Workspace account.

Step 6 – In the Admin Username box, enter the username of an authorized user account to connect to
the provider.  
The account must have the _Super Admin_ role in Google Workspace to facilitate group and identity
management operations using Directory Manager.

Step 7 – In theAPI Keybox, enter the API key generated for your account in Google Workspace.  
To generate the key, see
[Create access credentials](https://developers.google.com/workspace/guides/create-credentials).

Step 8 – Specify the path to the p12 key file in the P12 Certificatebox. For that, click **Choose
File** and browse for the file. Select it and click **Open**.  
As a prerequisite, the p12 key file for your account must be generated in Google Cloud Console and
downloaded to a machine.

Step 9 – Click **Create Identity Store**. The Replicate Identity Store message is displayed. Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.

# History Item Details

Details of a history item are displayed on the **History Details** dialog box. If the target
attribute is single-valued, the old and new values of the attribute are shown. For multi-valued
attributes, the lists of added items and removed items are displayed.

Information includes:

- **Attribute Modified** - The name of the target attribute.
- **Object Name** - The name of the Directory Manager function this history item pertains to. For
  example, if it pertains to a workflow, the name of the workflow is displayed here.
- **Who** - The name of the user who performed the action.
- **Where** - The name of the computer the action was performed on.
- **When** - The date and time of the action.

The following lists are available when the target attribute is multi-valued:

- **Added Item** - A list of values that were added to the multi-value attribute.
- **Removed Items** - A list of values that were removed from the multi-value attribute.

The following lists are available when the target attribute is single-valued:

- **Old Value** - The value before the action was performed.
- **New Value** - The value after the action was performed.

## Annotate History Items

Directory Manager enables a user to add notes to history actions that he or she performed. A note
may explain the reason for an action, such as why he or she changed the security type for a group.
Only the user who added a note can update it. Other users can view it, but they cannot edit it or
add comments.

On the **History Details** dialog box, one of the following is available to you:

- **The Add Note button** - When you are the user who performed the action that logged this history
  item, and you haven’t added any note yet.
- **The Save Note button** - When you are the user who performed the action that logged this history
  item and you have already added a note.
- **The note text** - When the user who performed the action has added a note.
- **None of the above** - When you are not the user who performed the action and the user performing
  the action has not added any note.

### Add a Note

Notes can be added to history items logged for an identity store. Only the user (i.e., the doer of
the action) can add and update notes.

**To add a note:**

1. Click **Add Note** to add a note to the history item. The **Note** text box is displayed.
2. Type a note for the history item. Your note can have a maximum of 500 characters.
3. Click **Save Note**. On the **History** page, the annotated item is displayed with a **View
   Note** button next to it. This helps distinguish annotated items from non-annotated items.

### Edit a Note

1. On the **History Details** dialog box, the **Note** box displays your note for the history item.
   Make the required changes to the text.
2. Click **Save Note**.

### Remove a Note

On the **History Details** dialog box, the **Note** box displays your note. Remove it and click
**Save Note**.

**See Also**

- [Identity Store History](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Admin Center History](/docs/directorymanager/11.1/administration/general-settings.md)

# Event Logging

Directory Manager employs Windows logging and file logging to maintain event logs for all Directory
Manager clients and services, namely:

- Admin Center
- Directory Manager portals
- Data Service (file logging only)
- Security Service (file logging only)
- Replication Service
- Email Service
- Scheduler service
- Directory Manager Management Shell

In case of multiple deployments of a client or service, separate logs are maintained for each
deployment instance.

Use the **Applications** node in Admin Center to manage Windows logging and file logging for each of
the above (except for Management Shell).

## File Logging

File logging records events for Directory Manager clients, scheduled jobs, and services in log
files. Log file location depends on where the respective instance of the client or service is
deployed.

**For a native IIS and remote IIS deployment:**

1. Launch IIS and navigate to:  
   …\Sites\<site that hosts the client or service instance>\<client or service instance name>  
   Example:  
   …\Sites\GroupIDSite11\GroupIDDataService
2. Right-click this directory and select **Explore**.
3. Locate the **Logs** folder to read the logs.

Events are logged in a text file. When the file size reaches 100 MB, Directory Manager archives it
in the same directory by replacing the file extension with the suffix .Log.X and then creating a new
text file with the original name. X in .Log.X is a number from 1 to 10 representing the archiving
order; where ‘1’ denotes the most recent file.

## Windows Logging

Under Windows logging, events for Directory Manager clients and services are logged to the Windows
application log.

**See Also**

- [Directory Manage Applications](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Get Logs](/docs/directorymanager/11.1/administration/logging.md)

# Identity Store History

In Admin Center, you can view the history data that the Directory Manager history-tracking function
collects for changes made to the configurations, workflows, and security roles in an identity store.

This data represents the events that history-tracking is configured to track. For example, history
is logged when a user enables enrollment for the identity store, removes an approver from a
workflow, modifies a policy for a security role, and more. History is not logged when a user
refreshes a page or previews any information.

Furthermore, if history tracking is not enabled or has been lately disabled, the **Identity Store
History** page is blank or it displays data that was logged before history-tracking was turned off.

What do you want to do?

- View Identity Store History
- Filter History Data
- Navigate Through History Items
- Annotate History Items
- Export History Data

## View Identity Store History

Changes made to identity store configurations, security roles, and workflows can be tracked and
viewed in Admin Center.

**To view identity store history:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.

   The **Identity Store History** page displays history data in a descriptive and concise manner.
   Items are sorted according to the date and time they were last updated, with the most recent at
   the top.  
   Click a history item to view its details. See the [History Item Details](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Filter History Data

Directory Manager provides filters to limit the history results displayed on the **Identity Store
History** page. You can define a criterion to filter history data by action, machine name, new
value, old value, and more.

**To define a filter:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.  
   On the **Identity Store History** page, use the **History Filters** area to specify a filter.
4. In the _Select a Filter_ drop-down list, select an attribute to use for filtering history
   records. Options are:

   - Action
   - Machine Name
   - Modified On
   - New Value
   - Old Value
   - User Name

5. In the _Select an Operator_ drop-down list, select an operator to apply to the selected
   attribute. This drop-down displays the operators on the basis of the selected attribute.
   Available operators are:

   | Condition           | Description                                                                                                                 |
   | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
   | Starts with         | Returns everything that starts with the value.                                                                              |
   | Does not start with | Returns everything that does not start with the value.                                                                      |
   | Ends with           | Returns everything that ends with the value. Searching with this condition is resource-intensive for the directory.         |
   | Does not end with   | Returns everything that does not end with the value. Searching with this condition is resource-intensive for the directory. |
   | Is exactly          | Returns everything that matches the value.                                                                                  |
   | Is not              | Returns everything that does not match the value.                                                                           |
   | Contains            | Returns everything that contains the value. Searching with this condition is resource-intensive for the directory.          |
   | Not contain         | Returns everything that does not contain the value. Searching with this condition is resource-intensive for the directory.  |
   | Present             | Returns everything that has a value.                                                                                        |
   | Not present         | Returns everything that does not have a value.                                                                              |
   | Greater or equal    | Returns everything with a value greater than or equal to the given value.                                                   |
   | Less or equal       | Returns everything with a value lesser than or equal to the given value.                                                    |

6. In the _Select a Value_ box, specify a value for the attribute. The selected attribute and
   operator determine the kind of value that can be entered in this box.  
   For some operators, such as _Present_ and _Not Present_, this field is not available. These
   operators check if a value for the attribute is present or not.

   **Add more filters** - On adding a filter, the next row is displayed, so you can add another
   filter.  
    **Remove a filter row** - To remove a filter row, click **Remove** for it.  
    **Remove the filter** - To remove all the filter rows, click **Clear**.

7. To apply the filter, click **Apply**. With multiple filters, history items that satisfy all the
   filters are displayed.

## Navigate Through History Items

By default, the page size for the **Identity Store History** page is set to 10, indicating that ten
history items are displayed per page. You can set the page size to a maximum of 100 items.

To move through pages and navigate the records, use the page numbers and arrows given at the bottom
of the listing.

**Set the page size:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.
4. On the **Identity Store History** page, use the Items per page drop-down list to specify the
   number of items to be displayed per page.

**Navigate through records:**

Navigation options are displayed at the bottom of the history records. You can view the history
items count along with the range of items you are currently viewing.

- Click **First** to jump to the first page, containing the latest history records.
- Click **Last** to jump to the last page, containing the oldest history records.
- Use the arrows to move to the previous or next page.
- Click a page number to jump to that page.

## Annotate History Items

Directory Manager enables a user to add notes to history actions that he or she performed. A note
may explain the reason for an action, such as why he or she changed the security type for a group.
Only the user who added a note can update it. Other users can view it, but they cannot edit it or
add comments.

**To annotate history items:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.
4. On the **Identity Store History** page, click a history item.
5. On the **History Details** dialog box, manage notes for the history item. See the
   [Annotate History Items](/docs/directorymanager/11.1/configuration/identity-stores.md#annotate-history-items) topic.

## Export History Data

You can export identity store history to Microsoft Excel, CSV, and XML formats.

**To export history:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.
4. On the **Identity Store History** page, click **Export History**.
5. On the **Export History** dialog box, enter a name for the history file in the **Name** box or
   leave it to default.
6. Select a format for the history file in the Format drop-down list. Available formats are Excel,
   CSV, and XML
7. Click **Export History**. The file is saved at the download location specified in browser
   settings.
8. A message is displayed that history data is successfully exported. Click **OK**.

**See Also**

- [Configure History Tracking](/docs/directorymanager/11.1/administration/services/overview.md)
- [History in Directory Manager](/docs/directorymanager/11.1/administration/audit-history.md)
- [Event Logging](/docs/directorymanager/11.1/configuration/identity-stores.md)

# Manage an Identity Store

Once you create and configure an identity store, you can perform group and identity management
operations in the identity provider using Directory Manager.

What do you want to do?

- View Identity Store Details
- Enable or Disable an Identity Store
- Update General Info for an Identity Store
- Exclude an Active Directory Domain from Replication
- Set DC Priority for an Active Directory Identity Store
- Delete an Identity Store

## View Identity Store Details

In Admin Center, click **Identity Stores** in the left pane. The **Identity Stores** page displays
the identity stores created in Directory Manager.

The card for an identity store displays the following information:

| Info                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Basic info                     | The display name of the identity store and the identity provider it is built on, such as Active Directory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Identity store status          | The status is displayed on the top right corner of the card. An identity store has one of the following statuses: - **Healthy:** Indicates that the identity store is fully functional. Hover the mouse over the status to view the factors used to determine health. - **Errors:** Indicates that the identity store has run into one or both of the following errors: - It cannot connect to the identity provider using the service account provided on the **Identity Store Details** page. - Data from the provider is not replicated to Elasticsearch within the required time interval. The last replication time and date is displayed at the bottom of the card. Hover the mouse over the status to view the reason for the _Errors_ status.                                                                                                                                                                                                                                                                                                                                                                  |
| History                        | Indicates whether history tracking for the identity store is enabled or disabled. See the [Configure History Tracking](/docs/directorymanager/11.1/administration/services/overview.md) topic to enable or disable history tracking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| MFA                            | Indicates whether second factor authentication is enabled for security roles in the identity store. See the [Configure Second Factor Authentication](/docs/directorymanager/11.1/configuration/authentication/multi-factor-auth.md) topic. One of the following is displayed for MFA: - **Available for x/x roles:** Indicates the number of security roles that second factor authentication is enabled for, out of the total security roles in the identity store. For example, 1/3 indicates that there are 3 security roles defined for the identity store and second factor authentication is enabled for one of those roles. - **Not Available:** Indicates that second factor authentication is not enabled for any security role in the identity store.                                                                                                                                                                                                                                                                                                                                                        |
| Last replication date and time | The last run date and time of the Replication service. If the service does not run at the specified interval, the identity store status changes to **Errors**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Ellipsis                       | Click it to launch a shortcut menu with the following options: - **Edit:** launches the identity store properties page, where you can manage identity store settings, workflows, security roles, replication attributes, and more. See the [Configure an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md) topic. - **Disable:** disables the identity store. - **Replicate Objects:** runs the Replication service to replicate object data in the identity store. See the [Force Run the Replication Service (for Object Replication)](/docs/directorymanager/11.1/configuration/replication.md#force-run-the-replication-service-for-object-replication) topic. - **Replicate Deleted Objects:** runs the Replication service to remove those objects from Elasticsearch that have been deleted from the identity provider. See the [Force Run the Replication Service (for Deleting Objects)](/docs/directorymanager/11.1/configuration/replication.md#force-run-the-replication-service-for-deleting-objects) topic. - **Delete:** deletes the identity store from Directory Manager. |

## Enable or Disable an Identity Store

When you disable an identity store, all users logged into Directory Manager with that store are
logged out, and the identity store is unavailable for operations.

You can disable an identity store in any of the following ways. However, a disabled identity store
can be enabled using **Method 1** only.

**Method 1: Enable or disable an identity store**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Enable** or **Disable**.

**Method 2: Disable an identity store**

1. In Admin Center, click Identity Stores in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, use the toggle button in the top right to disable the
   identity store.
4. Click **Save**.

## Update General Info for an Identity Store

You can change the display name for an identity store, add a description for it, change the service
account credentials to connect to the identity provider, and update any other information you
provided while creating it.

**To update the info:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, update the required information on the **General** tab.  
   This page differs by provider. Refer to the steps for creating the respective provider in the
   [Create an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md) topic for more information.
4. Click **Save**.

## Exclude an Active Directory Domain from Replication

By default, Directory Manager replicates the domain specified for the identity store and its child
domains. You can exclude a domain or a child domain from replication, in which case the Replication
service will not replicate it. See the [Elasticsearch and Replication ](/docs/directorymanager/11.1/configuration/replication.md)
topic.

You can still create and manage objects in an excluded domain using Directory Manager.

**To exclude a domain:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, click the **Connection** tab.
4. In the **Excluded Domains** areas, select the check boxes for the domains you want to exclude
   from replication.  
   To select all domains, select the check box in the header area.
5. Click **Save**.

## Set DC Priority for an Active Directory Identity Store

You can select a domain controller in an Active Directory domain to work with Directory Manager.
Data service and Replication service will connect to this domain controller to perform their
respective operations in the domain. In this way, you can ensure that the selected domain controller
is always available with minimum downtime.

To understand how the DC priority function works, let’s assume the following:

- gene.local is your parent domain with two child domains.
- You have four domain controllers in the parent domain: DC_N, DC_S, DC_E, and DC_W.
- You also have two domain controllers in each of the two child domains.

You can set a separate DC priority list for the parent domain and each of the child domains.

To create a DC priority list for a domain, list the domain controllers in the order of priority.
Let’s say you set priority for the parent domain as:

Priority 1:     DC_E  
Priority 2:    DC_S  
DC_N and DC_W are not included in your priority list.

When the Data service restarts for reasons such as IIS restart, it does the following:

- The Data service attempts to connect to the first domain controller in the priority list, i.e.,
  DC_E.
- If DC_E is not available, the Data service attempts to connect to the second domain controller in
  the priority list, i.e., DC_S.
- If DC_S is not available either, the Data service will resort to the normal lookup process.

Normal lookup process for Data service

Data service makes a connection with a domain controller through the System.DirectoryServices API.
It sends a request to the API, which, in turn, connects to any domain controller in the domain. In
this way, Data Service communicates with the domain controller to perform the required function.

System.DirectoryServices does not evaluate the domain controller in the DC priority list for
creating a connection. Hence, in the above example, the API will connect to DC_N or DC_W.

“Server Not Operational” error

When Data service connects to a domain controller (say DC_E), it caches the domain logon information
and uses it to create all subsequent sessions with the domain controller. Hence it does not iterate
on the DC priority list every time it has to create a session.

In case DC_E is down, the ‘Server Not Operational” error will be displayed in Directory Manager. It
indicates that Data service has lost connection with the domain and needs to re-establish a
connection.

To resolve the error, restart IIS. In this way, Data service will make a connection again using the
process discussed above. It will connect to a different domain controller and cache the domain logon
information (and continue to make a session with this domain controller unless Data service is
restarted).

DC priority and Replication

Every time the Replication service is triggered, it consults the DC priority list to connect to a
domain controller for replication. If it is unable to connect to any domain controller in the
priority list, it reverts to the normal lookup process to connect to a domain controller in the
domain.

In a nutshell

- If DC priority is defined for a domain, Data service and Replication service will connect to a
  domain controller in the domain using the defined DC priority list. If no domain controller in the
  list is available, the services will rely on the normal lookup process to connect to a domain
  controller in the domain.
- If DC priority is not defined for a domain, Data service and Replication service will connect to
  it using the normal lookup process.

**To set DC priority for a domain:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, click the **Connection** tab. The **DC Priority** area
   displays two options:

   - **Set default priority:** This tile is selected by default and indicates that no DC priority
     is set for the identity store domain. As a result, Data service and Replication service will
     connect to it using the normal lookup process.
   - **Choose my own priority:** Select this tile to set a DC priority list for the identity store
     domain and its child domains, if any.

4. On selecting the **Choose my own priority** tile, the following fields are displayed:

   1. **Select Domain:** This drop-down list displays the identity store domain and its child
      domains, if any. Excluded domains are not listed. Select a domain to define a DC priority
      list for it.  
      Note that each domain in the list has either _Priority set_ or _Default Priority_ displayed
      next to it.

      - _Priority set:_ indicates that DC priority has been defined for the domain, even if it is
        set for one DC and not for all DCs in the domain.
      - _Default Priority:_ indicates that priority has not been set for any DC in the domain.

   2. The table displays the domain controllers in the selected domain. The **DC Name** column
      displays the name of the DC while the **Priority** column displays the priority assigned to
      it, with ‘1’ being the highest priority. When no priority is assigned to a DC, _Not set_ is
      displayed for it.  
      You can choose to assign priority to selected DCs in the domain. For example, if a domain has
      4 DCs, you can set priority for two and leave the rest.

      - To assign priority to a domain controller, click **Set priority** for it. The **Priority**
        column displays the priority assigned to it. To revoke priority, click **Reset priority**.
      - To change the priority for a DC, click in the row, hold down the left mouse button, and
        drag to change its position in the list. By default, "1" is assigned as priority to the
        first DC in the list, followed by '2' to the second DC in the list, and so on.
      - To revoke priority for all DCs in the domain, click **Reset all to default**. With this,
        _Default Priority_ is displayed next to the domain in name in the **Select Domain**
        drop-down list.

5. Click **Save**.

NOTE: When you change the DC priority for a domain or a child domain, it takes effect instantly.
Data service reestablishes a connection with a DC based on new priority.

## Delete an Identity Store

You can delete an identity store with all its configurations. As a result, Directory Manager cannot
be connected to that identity store, nor can it be used in a Synchronize job.

NOTE: You cannot delete an identity store that has been linked to another identity store. You must
first delete the link(s) before deleting the identity store.

**To delete an identity store:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Delete**.

**See Also**

- [Identity Stores](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Configure an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Replication Service](/docs/directorymanager/11.1/configuration/replication.md)

# Identity Stores

Directory Manager enables you to create an identity store on an identity provider and perform
different functions in that provider through the identity store. These functions include:

- Group management tasks, such as creating groups, scheduling group updates, and expiring groups.
- User management tasks, such as creating users and mailboxes, managing users’ profiles, and
  managing direct reports.
- Bulk user provisioning and deprovisioning in an identity provider, database or even a file, such
  as an Excel file.
- Entitlement related tasks, such as updating the effective NTFS permissions for shared resources on
  a file server.
- Reporting and analytics.

Directory Manager supports the following identity providers for creating an identity store, to
perform identity and access management tasks:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

Identity stores created for these providers can also be used as source and destination in
Synchronize jobs for bulk user management tasks.

You can also link Active Directory and Microsoft Entra ID identity stores to sync identical objects
there.

NOTE: You can define a custom identity store for non-supported identity providers in Directory
Manager. Contact Netwrix Client Services for support.

**See Also**

- [Create an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Manage an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Configure an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Link Identity Stores](/docs/directorymanager/11.1/configuration/identity-store-linking.md)
