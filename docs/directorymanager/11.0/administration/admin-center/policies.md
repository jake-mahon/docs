---
title: policies
sidebar_label: policies
description: Directory Manager 11.0 documentation for policies with configuration details, usage instructions, and implementation guidance.
---

# Authentication Policy for Security Roles

Having enabled and configured authentication types for an identity store, you can:

- Enforce authentication type(s) for a user role for multifactor authentication (MFA). Role members
  must use each of the enforced authentication types for account enrollment and authentication.  
  When not enforced, role members can enroll using any authentication type that has been enabled for
  the identity store.
- Enable second factor authentication (SFA) for a security role in an identity store.

NOTE: For MFA and SFA to work for an identity store, make sure you enable enrollment for it. See the
[Enable Enrollment](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#enable-enrollment)
topic.

What do you want to do?

- [Enforce Authentication Types for Multifactor Authentication](#enforce-authentication-types-for-multifactor-authentication)
- [Enable Second Factor Authentication](#enable-second-factor-authentication)

## Enforce Authentication Types for Multifactor Authentication

Before enforcing an authentication type for a security role, make sure it is enabled and configured
for the identity store.

**To enforce authentication types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Authentication** tab.
7. In the **Multifactor Authentication Policies** area, select the **Enforced** check box for an
   authentication type to enforce it for the role. The **Enforced** box displays the number of
   authentication types you enforced for the role.  
   Role members must enroll and authenticate for multifactor authentication using each of the
   enforced authentication types.
8. In the **Chosen by End User** box, specify a number. Role members must use this x number of
   authentication types, in addition to the enforced authentication types, for multifactor
   enrollment and authentication.  
   Let’s assume five authentication types have been enabled and configured for the identity store.

   - When you do not enforce any authentication type and specify 2 in the **Chosen by End User**
     box, role members can use any two authentication types from the five enabled types for
     multifactor authentication.
   - However, when you enforce two authentication types and specify 1 in the **Chosen by End User**
     box, role members must enroll and authenticate by the two enforced types, and then choose
     another one from the remaining three enabled authentication types, for multifactor
     authentication.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Enable Second Factor Authentication

You can enable second factor authentication for a security role in an identity store.

For second factor authentication, role members can enroll using any of the authentication types
enabled and configured for the identity store.

Users must pass second factor authentication when signing into Admin Center, GroupID portal, and the
GroupID mobile app.

**To enable second factor authentication for a role:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Authentication** tab.
7. Use the toggle button for **Second Factor Authentication** to enable or disable it for the
   security role.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)

# Group Owners Policy

The Group Owners policy enables you to specify a group ownership criterion that role members must
fulfill when they create or update static groups and Smart Groups using the GroupID portal or
GroupID Management Shell. You can:

- Control whether groups must have a primary owner.
- Specify a range of additional owners, say 2-6, which implies that a group must have any number of
  additional owners in this range.

What do you want to do?

- [Enforce a Primary Owner](#enforce-a-primary-owner)
- [Enforce Additional Owners](#enforce-additional-owners)

## Enforce a Primary Owner

The Group Owners policy ensures that groups that are created and managed using GroupID have a
primary owner. This will substantially reduce the occurrence of orphan groups in the directory.

When a new group is created using GroupID, the logged-on user is set as its primary owner. With the
primary owner enforced under the Group Owners policy, the user who creates or manages the group can
change the primary owner, but cannot remove it.

**To enforce a primary owner:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.  
   The **Add Policies** pane is displayed with the **Group Owners** tab in view.
6. Select the **Primary Owner is required** check box to prevent role members from removing the
   group's primary owner while creating or updating groups. They can, however, change the primary
   owner.  
   If this check box is clear, role members can choose to remove the primary owner while creating or
   updating groups.

   NOTE: In a Microsoft Entra ID identity store, a primary owner must be specified for groups,
   regardless of whether the Group Owners policy enforces it or not.

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Enforce Additional Owners

You can specify a range of additional owners, say 2-10, so that role members cannot create or update
a group unless its number of additional owners fall in the given range.

By default, there is no restriction on the number of additional owners. Groups created or updated by
role members can have any number of additional owners and even no additional owner.

**To enforce additional owners:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.  
   The **Add Policies** pane is displayed with the **Group Owners** tab in view.
6. In the **Minimum** box, type or select a number in the range, 0-3, to set the minimum number of
   additional owners that a group must have, when created or updated by a role member.  
   The default value ‘0’ indicates that role members can create groups with any number of additional
   owners or even without additional owners.
7. In the **Maximum** box, type or select a number in the range, 0-100, to set the maximum number of
   additional owners that a group can have, when created or updated by a role member. This value
   should either be equal or higher than the value provided in the **Minimum** box.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

NOTE: When additional owners have been added using an earlier version of GroupID, and their number
exceeds the value of this setting, GroupID will retain them. However, more additional owners cannot
be added.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)

# Helpdesk Policy

The Helpdesk policy is meant for the helpdesk role in an identity store.

Helpdesk role members use the Helpdesk node in Admin Center to reset the domain account passwords
and unlock accounts of identity store users. They can also unenroll identity store accounts of users
in GroupID. Moreover, they can view the actions that users perform in the identity store, such as
password change/reset, account enrollment/unenrollment, and the date and time they logged into
GroupID.

NOTE: The helpdesk role must be granted the following permissions in an identity store to enable
them to perform their job:

- Reset Any Password
- Unlock Any Account
- Unenroll

If these permissions are denied, the Helpdesk policy would have no impact, as role members would not
be authorized to perform the respective operations. See
[Password Management](/docs/directorymanager/11.0/administration/admin-center/security-roles.md#password-management)
in the
[Security Role – Permissions](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
topic.

The Helpdesk policy defines:

- Whether helpdesk role members should operate under the restricted or unrestricted mode when
  performing the account unlock, account unenroll, and password reset functions.
- The password reset options available to helpdesk role members.

NOTE: Account unlock is not supported in a Microsoft Entra ID identity store.

What do you want to do?

- [Set Restricted Mode](#set-restricted-mode)
  - [Limit Helpdesk to Manage Users in a Specific OU](#limit-helpdesk-to-manage-users-in-a-specific-ou)
  - [Enforce Helpdesk to Authenticate Users](#enforce-helpdesk-to-authenticate-users)
  - [Enforce Helpdesk to Use Security Questions for Authentication](#enforce-helpdesk-to-use-security-questions-for-authentication)
- [Set Unrestricted Mode](#set-unrestricted-mode)
- [Specify Password Reset Options](#specify-password-reset-options)
  - [Specify a Password Reset Method](#specify-a-password-reset-method)
  - [Force Users to Change Password on Next Logon](#force-users-to-change-password-on-next-logon)

## Set Restricted Mode

You can apply all or any of the following restrictions to a helpdesk role under the restricted mode:

- Limit helpdesk users to reset passwords, unlock user accounts, and unenroll accounts that reside
  in a specific OU.
- Enforce helpdesk users to authenticate end-users before resetting their passwords or unlocking
  their identity store accounts.
- Specify the minimum number of security questions helpdesk users must use to authenticate
  end-users.

Under this mode, helpdesk role members cannot perform password reset and account unlock for
unenrolled users.

### Limit Helpdesk to Manage Users in a Specific OU

You can specify a container to limit helpdesk users to reset passwords, unenroll users, and unlock
accounts of users that reside in that container.

**To specify a container:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Restricted Mode** tile.
8. Click **Add** next to **Add Container**. Then select a container on the **Add Container** dialog
   box and click **Add**. The container name is displayed on the **Helpdesk** tab.  
   Helpdesk users can reset passwords, unenroll users, and unlock the accounts of users residing in
   the specified container only. When no container is selected, helpdesk users can perform these
   operations for all users in the identity store.

   - **To change the container:** Click **Modify Container** and use the **Add Container** dialog
     box to select another container.
   - **To remove the container:** Click **Remove** for a container to remove it.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

### Enforce Helpdesk to Authenticate Users

Under the restricted mode, you can enforce helpdesk users to authenticate users before resetting
their passwords and unlocking their accounts.

On receiving an account unlock or password reset request from an end-user, the helpdesk user must
authenticate the user over phone before carrying out the requested operation. This authentication is
done through all or some of the authentication types the user's account is enrolled with.

**To enforce authentication:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Restricted Mode** tile.
8. Select the **Do not allow Helpdesk to reset password or unlock account without User's
   interaction** check box, and then select one of the following options:

   - **Enforce multifactor authentication as applies to end user:** to force helpdesk role members
     to authenticate an end-user as per the authentication policy defined for the security role of
     that user. See
     the[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/administration/admin-center/policies.md#enforce-authentication-types-for-multifactor-authentication)
     topic.

     Or

   - **Enforce at least selected level of multifactor authentication:** to force helpdesk role
     members to authenticate end-users with x number of authentication types. Specify the number of
     authentication types in the box (say, 2). Suppose an end-user is enrolled with 4
     authentication types. A helpdesk user can choose any 2 of these types to authenticate that
     user.

   NOTE: Helpdesk users cannot authenticate end-users with the Linked account, Windows Hello, and
   YubiKey authentication types.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

### Enforce Helpdesk to Use Security Questions for Authentication

You can specify the minimum number of security questions helpdesk role members must use to
authenticate end-users before unlocking their identity store accounts or resetting their passwords.

RECOMMENDED: As a prerequisite to applying this setting, make sure that the Security Questions
authentication type is enabled and configured for the identity store, as well as enforced as an
account enrollment method for security roles. See the
[Set up Authentication via Security Questions](/docs/directorymanager/11.0/user-guide/user-management/manage-users.md)
topic.

**To enforce security questions for authentication:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Restricted Mode** tile.
8. Select the **Helpdesk must verify answers of at least x Questions** check box and specify a
   number that indicates the number of questions to be answered.  
   For security and privacy concerns, answers to security questions are not visible to helpdesk
   users. Helpdesk users have to type in the answers that end-users provide over phone for
   verification.

   NOTE: If a user has not enrolled his or her account using security questions, the helpdesk user
   will get an error message when he or she attempts to authenticate this user for password
   reset/account unlock.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Set Unrestricted Mode

The unrestricted mode enables helpdesk users to reset passwords and unlock accounts of identity
store users without authenticating them through the authentication types(s) they enrolled their
accounts with.

- On receiving an account unlock request from an end-user, a helpdesk user operating under the
  unrestricted mode can directly unlock the account of the requester.
- On receiving a password reset request from an end-user, a helpdesk user operating under this mode
  can directly reset the password or send a secure password reset link to the requester. See the
  [Specify a Password Reset Method](#specify-a-password-reset-method) topic.

**To set the unrestricted mode:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Click the **Unrestricted Mode** tile.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

## Specify Password Reset Options

As part of the Helpdesk policy, you can:

- Enable helpdesk role members to generate a new password or a secure password reset link, or both,
  and communicate it to the end-users.
- Force end-users to change the password the next time they sign to their workstations.

Remember, These settings are available if the _Reset Any Password_ permission is granted to the
Helpdesk role in the identity store.

### Specify a Password Reset Method

You can enable helpdesk role members to reset user account passwords by any of the following
methods, or limit them to use one of these methods:

- Generate a new password and communicate it to the end-user by SMS, email, or both mediums.
- Generate a secure password reset link and send it to the end-user by SMS or email or both. The
  user must click this link to reset his or her password.

**To specify a password reset method:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select one or both of the following options to specify the password reset method:

   - **Allow Helpdesk to Reset Password** - Select this check box to enable helpdesk users to
     generate new passwords and communicate them to end-users by SMS or email. Clear this check box
     to prevent helpdesk role members from generating new passwords.
   - **Allow Helpdesk to Send Secure Password Link to End User** - Select this check box to enable
     helpdesk users to generate a secure password reset link and send it to end-users by SMS or
     email or both. End-users must click this link to reset their identity store passwords.

   When you select both the **Allow Helpdesk to Reset Password** and **Allow Helpdesk to Send
   Secure Password Link to End User** check boxes, helpdesk role members can use any method to
   reset an end user's password.

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

NOTE: (1) An SMS gateway account must be linked with the identity store for an SMS to be sent on the
end-users' mobile phones. See the
[Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#link-an-sms-gateway-account-to-an-identity-store)
topic.  
 (2) An SMTP server must be configured for the identity store for email to be sent to end-users. See
the
[Configure an SMTP Server](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
topic.

### Force Users to Change Password on Next Logon

When a helpdesk user resets the password of an end-user, it's always safe to force the end-user to
change the password the next time they login to their workstations.

**To force password change:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Users must change password at next logon** check box to force users to change their
   passwords when they login to their workstations for the first time after password reset.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [Authentication Policy](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)

# New Object Policy

The New Object policy applies when role members create directory objects using the GroupID portal or
GroupID Management Shell. Use this policy to:

- Limit role members to create new directory objects in the OUs they reside in respectively.

  OR

- Specify one or more OUs to limit object creation to those. Separate OUs can be specified for
  different object types.

You can specify one or more OUs for an object type. For example, you can specify OUA and OUB for
Group objects and OUC for Mailbox objects, so that role members can create groups in OUA and OUB,
and mailboxes in OUC.

By default, or when no OU is set for an object type, role members can select any OU in the identity
store to create objects of that type. For example, when no OU is specified for the User object, role
members can create user objects in any OU in the identity store.

NOTE: (1) When a user has multiple roles in an identity store with a different New Object policy for
each role, then the policies configured for all roles apply to the user. Hence, a user with three
roles - where a different OU for the Group object is specified for each role - can create groups in
any of the three OUs.  
(2( The New Object policy does not apply to a Microsoft Entra ID identity store.

What do you want to do?

- [Limit Object Creation to the OU the User Resides in](#limit-object-creation-to-the-ou-the-user-resides-in)
- [Restrict Role Members to Create Objects in Specific OUs](#restrict-role-members-to-create-objects-in-specific-ous)
- [Remove an OU](#remove-an-ou)

## Limit Object Creation to the OU the User Resides in

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **New Object** tab.
7. Select the **Users can create objects only in their own container** check box to limit role
   members to create directory objects in the organizational unit they reside in respectively.  
   Selecting this option disables the remaining options on the tab.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

NOTE: When role members create a new object, the _Container_ option shows the distinguished name of
the OU the logged-in user resides in as read-only.

## Restrict Role Members to Create Objects in Specific OUs

You can specify one or more containers for an object type (say Group) to restrict role members to
create group objects in those container(s) only.

**To specify OU(s) for object creation:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **New Object** tab.
7. Click **Add** and select an object type to specify the container(s) for.
8. On the **Add Container** dialog box, select one or more containers where role members can create
   the particular objects. Then click **Add**. The container(s) are displayed with the name of the
   respective object type.
9. You can choose to set a container for all object types. Click the **Copy** button for a container
   and then click **Yes** on the **Copy Container** message box. The container is displayed with all
   object types.
10. Click **OK**.
11. On the **Edit Security Role** page, click **Update Security Role**.
12. On the **Security Roles** page, click **Save**.

NOTE: When role members create a new object, the _Container_ option shows the containers specified
for the respective object type. The user can select the desired container to create the object
there. When one container is specified, the _Container_ option displays its distinguished name as
read-only.

## Remove an OU

You can remove a container to prevent role members from creating objects in it. When you remove all
containers for an object type, role members can create the particular objects in any container in
the directory.

**To remove a container:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **New Object** tab.
7. For each object type, the allowed containers are listed with it.

   - Click **Remove** for a container to remove it.
   - Click **Remove All** for an object type to remove all containers for it.

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)

# Security Role Policies

You can define policies for security roles. Along with role permissions, these policies also control
what role members can do in GroupID.

You can define the following policies for a role:

- Group Owners Policy
- Group Name Prefixes Policy
- New Object Policy
- Search Policy
- Authentication Policy
- Password Policy
- Helpdesk Policy
- Synchronize Policy
- Query Designer Policy

In this way, you can create security roles with varying degrees of policy restrictions.

NOTE: For users with multiple roles, the policies specified for the highest priority role apply (see
[Priority](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)). The _Search
policy_, _New Object policy_, and _Group Name Prefixes_ policy, however, apply with respect to all
assigned roles. For example, if different search containers are specified for two different roles of
a user, that user can search and view objects in both containers.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Create a Security Role](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Group Owners Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [Set Group Name Prefixes](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
- [New Object Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [Search Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [Authentication Policy for Security Roles](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [Set a Password Policy ](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [Helpdesk Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [Synchronize Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
- [ Query Designer Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)

# Set a Password Policy

Using GroupID, you can implement a Password policy (a) for an identity store, (b) for security roles
in an identity store, or (c) both at the identity store and role levels.

- For an identity store, you can specify rules and restrictions for identity store account
  passwords.
- For a security role, you can specify validation checks for passwords that role members create for
  their identity store accounts using GroupID. Hence, password validation checks are role-specific

The Password policy also enables you to manage settings related to security questions and account
lockout for security roles in an identity store.

What do you want to do?

- [Set Password Restrictions and Rules for an Identity Store](#set-password-restrictions-and-rules-for-an-identity-store)
- [Define Security Question Settings for a Security Role](#define-security-question-settings-for-a-security-role)
- [Specify an Authentication Lockout Policy for a Security Role](#specify-an-authentication-lockout-policy-for-a-security-role)
- [Specify Password Validation Checks for a Security Role](#specify-password-validation-checks-for-a-security-role)

## Set Password Restrictions and Rules for an Identity Store

See the
[Configure Password Options](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
topic.

## Define Security Question Settings for a Security Role

You can specify certain settings related to security questions for user roles in an identity store.
As a result, different roles in an identity store can have different settings for the following:

- the number of questions role members must select to enroll their account in GroupID
- the minimum number of characters an answer should contain

**To specify settings for security questions:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Password** tab.  
   The following settings in the **Password Policies** area relate to security questions:

   | Setting               | Description                                                                                                                                                                                                                                                                                                                                               |
   | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Number of Questions   | The number of security questions role members must select while enrolling their accounts in GroupID for multifactor authentication or second factor authentication. The default number is 4. Changing the number of security questions for a role has no impact on already enrolled role members unless they update their security questions information. |
   | Minimum Answer Length | The minimum number of characters that a role member must type when saving the answer to a security question at the time of account enrollment. Answers with less than the specified number of characters will not be saved.                                                                                                                               |

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Specify an Authentication Lockout Policy for a Security Role

The authentication lockout policy comes into play when users authenticate for multifactor
authentication and second factor authentication in GroupID. The policy controls the following:

- The consecutive number of times a role member can provide a wrong value for an authentication type
  in GroupID, after which authentication is disabled.
- The duration for authentication to remain disabled.

With authentication disabled, role members cannot sign into GroupID.

NOTE: The authentication lockout policy only disables the user account in GroupID. It does not
disable it in the provider, such as Active Directory.

**To specify an authentication lockout policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Password** tab.  
   The following settings in the **Password Policies** area control authentication lockout:

   |     | Setting                                  | Description                                                                                                                                                                                                                                                                                                                                                                                               |
   | --- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | 1.  | Failed Authentication Attempts Threshold | The number of consecutive attempts to provide a wrong value for an authentication type. Authentication is disabled for a user when the number of consecutive unsuccessful attempts by him or her reach the number given here.                                                                                                                                                                             |
   | 2.  | Account Locked out Duration              | The number of minutes to disable authentication in GroupID after consecutive unsuccessful attempts to provide the right value for an authentication type. Note the following: - Authentication is automatically enabled after the specified duration. - Else it is enabled when, during the lockout period, the user correctly enters his or her identity store account credentials to sign into GroupID. |

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Specify Password Validation Checks for a Security Role

Identity providers have password validation and complexity policies defined, and users must follow
them while creating passwords. With GroupID, you can extend these policies.

GroupID enables you to specify password validation checks for a security role in an identity store.
This extended policy applies when:

- Role members change or reset their identity store account passwords using GroupID.
- Administrators or helpdesk members reset the identity store account passwords of role members
  using the Helpdesk section in Admin Center.

The policy does not apply when password is reset using the **Reset Password** option in user
properties in the GroupID portal.

**To specify password validation checks:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Password** tab.
7. Password validation settings are listed in the **Password Validation Options** area. Select the
   check box for a setting to apply it.

   |     | Setting                                             | Descriptions                                                                                                                              |
   | --- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
   | 1.  | Reject User Name in Password                        | Prevent role members from creating passwords that contain the user's account name.                                                        |
   | 2.  | Reject Display Name in Password                     | Prevent role members from creating passwords that contain the user's display name.                                                        |
   | 3.  | Reject First Name in Password                       | Prevent role members from creating passwords that contain the user's first name.                                                          |
   | 4.  | Reject Last Name in Password                        | Prevent role members from creating passwords that contain the user's last name.                                                           |
   | 5.  | Reject Number as First Character in Password        | Prevent role members from creating passwords that begin with a number.                                                                    |
   | 6.  | Reject Number as Last Character in Password         | Prevent role members from creating passwords that end with a number.                                                                      |
   | 7.  | Reject Consecutive Identical Characters in Password | Prevent role members from creating passwords that contain the consecutive use of identical characters.                                    |
   | 8.  | Enforce Password History (Domain Policy)            | Prevent role members from creating passwords that do not satisfy the password policy for password age/history, as defined for the domain. |

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Configure Access Control** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)

# Query Designer Policy

You can define a role-based access policy for the Query Designer. Using the Query Designer, users
can create queries for various purposes, as discussed in the
[ Specify Smart Group Query Attributes](/docs/directorymanager/11.0/administration/admin-center/index.md)
topic.

The Query Designer policy enables you to restrict the following Query Designer features for a
security role:

- Policy application on new groups or on existing groups as well.
- The _Start In_ container - Specify container(s) that will be displayed to role members on the
  Query Designer. Queries created by role members cannot run beyond the specified containers. You
  can also enforce the allowed containers so that role members cannot change them.
- Object types - Limit the object types that will be available to role members for including in
  queries. You can also enforce the allowed object types, so that role members cannot exclude any of
  them from queries.
- Tabs on the Query Designer - The Query Designer has multiple tabs and all of them are available to
  users by default. You can choose to hide any of these tab from role members.
- Attributes and their respective operators. - Specify the attributes that will be available to role
  members for building queries for Smart Groups and Dynasties. For each attribute, you can also
  specify the operators that role members can apply to it.

![querydesigner](/img/versioned_docs/directorymanager_11.0/directorymanager/admincenter/securityrole/policy/querydesigner.webp)

You can also specify a default filter criterion, involving an attribute, an operator, and a value,
that will be displayed to users on the Filter Criteria tab of the Query Designer. Role members can
change this criterion as required.

If you already have restricted some schema attributes for the Query Designer pages in portal, those
settings will be override by the schema attribute settings specified here.

What do you want to do?

- [Apply the Policy to Groups ](#apply-the-policy-to-groups)
- [Limit the Search Scope of the Query to Specific Containers](#limit-the-search-scope-of-the-query-to-specific-containers)
- [Limit the Objects for Use in a Query](#limit-the-objects-for-use-in-a-query)
- [Hide the Tabs on the Query Designer](#hide-the-tabs-on-the-query-designer)
- [Restrict the Attributes and Operators for Building a Query](#restrict-the-attributes-and-operators-for-building-a-query)
- [Specify a Default Filter Criteria](#specify-a-default-filter-criteria)

## Apply the Policy to Groups

You can specify whether the defined role-based access policy for the Query Designer is to be applied
on the newly created groups (Smart Groups and dynaasties) in GroupID  11.1 only or to all existing
groups as well.

**To apply the policy on groups:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. On the **Query Designer** tab:

   - enable the **Apply policy only to newly created groups** toggle button to apply the policy on
     the new groups created in GroupID 11.1.

     Let's say the following policy is defined for a user role:

     Start In Container: Users

     Enforce Start In Containers: Enabled

     Objects: Users with Mailboxes

     Users with External Email-Address

     Objects: Users

     Enforce Objects: Enabled

     Default filter Criteria: Department is exactly HR

     When a user of this role creates a new group the policy is applied on it.

   - disable the **Apply policy only to newly created groups** toggle button to apply the policy on
     the existing groups as well.

   After some time, if you enable the option again for the user role, the policy (with or without
   any modification) will no longer be applied to the existing groups. All the Query Designer
   configurations will be available to the user for the existing groups.

## Limit the Search Scope of the Query to Specific Containers

By default, all containers in the directory and all their sub-containers are displayed in the _Start
In_ field on the Query Designer, indicating that the query will run on the entire directory to fetch
matching objects. Users can exclude any container or sub-container, though.

You can restrict the search scope of the query to one or more containers and sub-containers for role
members. Specify the containers and sub-containers to be displayed in the **Start In** field on the
**Query Designer** dialog box. You can also enforce the container(s) so that role members cannot
remove a container or sub-container.

**To specify container(s):**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. On the **Query Designer** tab, the **Start In Container** area lists each container and
   sub-container in the directory individually, indicating that the entire directory is set as the
   _Start In_ container.

   - To remove a container or sub-container, click **Remove** for it.
   - To modify the list of allowed containers, click **Modify Container**. On the **Modify
     Container** dialog box, select the required containers and sub-containers, and click **OK**.
     The selected containers are displayed in the **Start In Container** area.

   You can allow a sub-container even if you do not allow its parent container. In this case, the
   query will run in the sub-container but not in the parent container.

8. Use the **Enforce Start In Containers** toggle button to enforce the start-in containers.

   - When you enforce the allowed containers, they will be displayed as disabled in the **Start
     In** field on the Query Designer. Role members will not be able to change this setting.
   - When not enforced, role members can remove any of the allowed containers but they cannot add a
     container beyond the allowed ones.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Limit the Objects for Use in a Query

By default, several object types are available to users on the Query Designer for including in
queries. Users select an object type from the **Find** drop-down list and then select its sub-types
on the _General_ tab of the Query Designer. The query returns the specified object types to include
in group membership. The object types and their sub-types are discussed in the
[Query Designer - General tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
topic.

You can limit the object types available to role members for use in queries. You can also enforce
the object types so that role members cannot exclude an allowed object type from queries.

**To limit object types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. The **Objects** area lists the object types with their sub-types. Here is a mapping of the object
   types displayed here with the options in the **Find** list on the Query Designer:

   - Exchange = Messaging System Recipients  
     Note that the sub-types displayed under **Exchange** are the same as displayed on the General
     tab when you select _Messaging System Recipients_ in the **Find** drop-down list.
   - Computer = Computers
   - All = Users, Contacts and Groups

   Select the check boxes for the object sub-types that you want to display to role members in the
   Query Designer.

8. Use the **Enforce Objects** toggle button to enforce the allowed objects.

   - When you enforce the allowed object types, they will be displayed as disabled in the Query
     Designer. Role members will not be able to exclude any object type; hence all the allowed
     object types will be included in the query.
   - When not enforced, role members can exclude any of the allowed object types but there is no
     option to include an object type beyond the allowed ones.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Hide the Tabs on the Query Designer

The Query Designer has multiple tabs, where each tab groups similar settings. These tabs are:

- General - select the object types to include in the query
- Storage - filter mailboxes
- Filter Criteria - specify a filter criteria to add objects to group membership
- Include/Exclude - specify objects to include or exclude in group membership, regardless of the
  query
- Database - combine an external data source with the directory to determine a group's membership
- Script - write scripts to manipulate group membership
- Password Expiry Options - available for Smart Groups with a password expiry condition

You can hide any of these tabs from role members.

NOTE: The General tab is displayed to all users and cannot be hidden. However, you can hide the
objects displayed on it, as discussed in the
[Limit the Objects for Use in a Query](#limit-the-objects-for-use-in-a-query) topic.

**To hide a tab:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. The **Tabs** area lists the tabs available on the Query Designer, except the General tab. By
   default, all tabs are selected, indicating that they are displayed to role members.  
   Clear the check box for a tab to hide it from role members.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

## Restrict the Attributes and Operators for Building a Query

By default, all schema attributes are displayed to role members for creating a filter criterion for
the query (see the **Filter Criteria** tab of the Query Designer). You can:

- limit the list of attributes to be displayed to role members
- limit the operators that role members can apply to an attribute

**To allow specific attributes and operators:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. Click **Edit Allowed Attributes** in the **Attributes** area.  
   The **Allowed Attributes** dialog box is displayed. By default, all attributes are selected. This
   indicates that all attributes are available to role members on the **Filter Criteria** tab of the
   Query Designer for creating queries.

   - Clear the check boxes for the attributes that you do not want to display to role members. Use
     the search box to search for your required attributes.
   - You can also clear the **Allow all attributes** check box to deny all attributes, then select
     the check boxes for the required attributes. At least one attribute must be selected.

8. For each attribute, you can specify the operator(s) that can be applied to the attribute on the
   **Filter Criteria** tab.  
   On the **Allowed Attributes** dialog box, click the plus sign next to an attribute and select the
   check box for the operators you want to provide for the attribute. When role members select an
   attribute, only the respective operators will be displayed for it. For example, if you allow the
   ‘Contains’ and ‘Equals’ operators for the ‘cn’ attribute, then only these operators will be
   displayed when role members select the ‘cn’ attribute.

   NOTE: This schema attribute setting will override the schema attribute setting specified on the
   Smart Group Attribute page in portal's design settings. See the
   [ Specify Smart Group Query Attributes](/docs/directorymanager/11.0/administration/admin-center/index.md)
   topic.

9. Click **Save Selection** on the **Allowed Attributes** dialog box. The **Attributes** area
   displays the allowed attributes count.  
   To view or update the allowed attributes, click **Edit Allowed Attributes**. On the **Allowed
   Attributes** dialog box, select the **Show only selected** check box to get a list of the allowed
   attributes. Make the desired changes and close the dialog box.
10. Click **OK**.
11. On the **Edit Security Role** page, click **Update Security Role**.
12. On the **Security Roles** page, click **Save**.

## Specify a Default Filter Criteria

Role members can specify a filter criterion on the **Filter Criteria** tab of the Query Designer to
determine a group's membership. This criteria is created using an attribute, operator, and a value.
For example, the following criterion will add the users in the Human Resources department to the
membership of the group.

Attribute: department  
Operator: Equals  
Value: Human Resources

You can specify a default criteria, that will be displayed to role members on the **Filter
Criteria** tab. They can change it as required

NOTE: If you have limited the attributes and operators for role members, then only the allowed
attributes and operators are available to create a default filter criteria.

**To specify a default filter criteria:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. Click **Add Filter** in the **Default Filter Criteria** area. A row is displayed for adding a
   default criterion.

   - Select a schema attribute in the first drop-down list (for example, _title_).
   - Select an operator in the second drop-down list (for example, _Equals_).
   - Enter a value for the attribute in the third box (for example, _Manager_).

   With this filter, the query would fetch users whose job titles are set to Manager. Role members
   can change it as required.

8. You can also create an advanced query by adding more rows and applying the **AND** or **OR**
   operator to group them. See steps 1-2 in the Advanced Filter section of the
   [Designate a Criterion for the Search Scope](/docs/directorymanager/11.0/administration/admin-center/policies.md#designate-a-criterion-for-the-search-scope)
   topic.  
   After creating a query, you can:

   - Click **Preview** to get a list of the objects fetched by the query created by the current
     settings on the **Query Designer** tab, namely the start-in container, objects, and default
     filter criteria.
   - Click **Clear** to delete the default filter criteria.

9. Click **OK** on the **Query Designer** tab.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)

# Search Policy

The Search policy sets the search scope for the GroupID portal, GroupID Management Shell, and the
GroupID mobile app.

By default, any search performed by role members returns objects from all containers in the identity
store. Use the Search policy to:

- Limit the search scope to one container for role members.
- Designate a criterion to limit the objects that role members can search.

NOTE: Microsoft Entra ID supports a single container only, so the search scope cannot be restricted
container-wise in a Microsoft Entra ID identity store.

## How does the Search Policy Work?

Let’s assume you specify a container, localOU, and set the LDAP filter to (Country=United States\*)
for an Active Directory identity store. Now consider these scenarios:

- When a role member performs a search, GroupID looks up the localOU container and displays objects
  with the _Country_ attribute set to _United States_.
- If you specify a container only, a search performed by role members returns all matching objects
  residing in that container.
- If you specify an LDAP filter only, a search performed by role members displays objects with the
  _Country_ attribute set to _United States_ from all containers in the identity store.

## Impact of the Search Policy on GroupID Portal

The Search policy has the following impact on the GroupID portal:

- It determines the groups to display in all group listings, such as those on the **All Groups** and
  **My Groups** pages.
- It determines the users to display in user listings, namely **My Direct Reports** and **Disabled
  Users**.
- It sets the search scope for the Find dialog box.
- It sets the scope for quick search and advanced search.

What do you want to do?

- [Set the Search Scope to a Specific Container](#set-the-search-scope-to-a-specific-container)
- [Set the Search Scope to all Containers in the Identity Store](#set-the-search-scope-to-all-containers-in-the-identity-store)
- [Designate a Criterion for the Search Scope](#designate-a-criterion-for-the-search-scope)

## Set the Search Scope to a Specific Container

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. Click **Add** next to **Add Container**.
8. On the **Add Container** dialog box, select a container and click **Add**.  
   Search performed by role members will display objects from this container and its sub-containers.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

NOTE: An advanced setting for the GroupID portal, _Search Default_, controls the search scope of the
portal. If its value is "Global Catalog", the container specified here is ignored and the portal
shows objects from the entire directory. See the
[Manage Advanced Settings](/docs/directorymanager/11.0/configuration/services/portal-configuration.md)
topic.

## Set the Search Scope to all Containers in the Identity Store

When no container is specified as the search scope for an identity store, search performed by role
members fetches objects from all OUs in the identity store.

**To set the search scope to all containers:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button or an identity store and select
   **Edit.**
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. In the **Container** area, click **Remove** for a container to remove it.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

## Designate a Criterion for the Search Scope

When you apply a filter criterion, search performed by role members shows objects that match the
criteria.

**To designate a criterion:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. In the **Filters** area, click **Add Filter**.
8. A row is displayed for adding a criterion.

   1. Select a schema attribute in the first drop-down list (for example, _mail_).
   2. Select an operator in the second drop-down list (for example, _Ends with_).
   3. Enter a value for the schema attribute in the third box (for example, _@Netwrix.com_).

   With this filter, search performed by role members will display objects with email addresses
   created on the netwrix.com domain.

Advanced Filter

You can also define a query by adding more rows and applying the **AND** or **OR** operator to group
them.

1. After defining two or more filter expressions, select two or more rows and apply one of these
   operators:  
   (To select a row, click the down arrow next to it and click **Select Row**.)

   - **AND:** to display the objects having the specified values for all attributes.
   - **OR:** to display objects having the specified value for any one of the attributes.

   ![search_query](/img/versioned_docs/directorymanager_11.0/directorymanager/admincenter/securityrole/policy/search_query.webp)

2. Click the ellipsis button for an applied operator to display the context menu, which has the
   following options:

   - **Select Group:** to select all rows that make up the query.
   - **Ungroup:** to remove the operator and ungroup the rows.
   - **Change to OR:** to change the AND operator to OR and vice versa.
   - **Add Clause:** to add a new row for specifying another clause for the query.
   - **Delete:** to delete the operator along with all the rows that the operator joins.

   You can also:

   - Click **Tree View** to view a list of all queries defined.
   - Click **Preview** to preview the search results that will be displayed with this Search
     policy, i.e., with the container and filter settings on the **Search** tab.
   - Click **Clear** to clear the **Filter** area.

3. After defining a filter, click **OK**.
4. On the **Edit Security Role** page, click **Update Security Role**.
5. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)

# Synchronize Policy

Using GroupID, you can create identity stores for several identity providers (such as Active
Directory and Microsoft Entra ID) as well as create data sources for providers such as files and
databases. These identity stores and data sources can be used as source and destination in
Synchronize jobs. Moreover, all object types with all their attributes in an identity store or data
source are available for use.

Using the Synchronize policy, you can:

- Allow or disallow a provider to be used as a source in a Synchronize job - You can apply this
  setting to all or specific identity stores/data sources created for the provider. For example, you
  may have three data sources created for the MS Excel provider. You can choose to prevent a
  security role from using the data sources created for MS Excel as a source, or prevent two of the
  three data sources from being used as a source in a Synchronize job.
- Allow or disallow a provider to be used as a destination in a Synchronize job - You can apply this
  setting to all or specific identity stores/data sources created for the provider.
- Choose the object types that can be created or synced at the destination using a Synchronize job -
  This setting is individually defined for each identity store and data source.
- For each object type in an identity store and data source, specify the attributes that will be
  available for mapping the source and destination fields in a Synchronize job - This setting is
  individually defined for each object type in an identity store and data source.

These granular controls enable you to drill down from the provider to the attribute level.

- You can disallow a provider as a whole, or disallow a specific identity store/data source created
  for the provider.
- At the next level, you can disallow certain object type(s) in a specific identity store or data
  source built on a provider.
- Further down, you can disallow certain attributes for an object type in a specific identity store
  or data source built on a provider.

What do you want to do?

- [Prevent Role Members from Using a Provider as Source or Destination](#prevent-role-members-from-using-a-provider-as-source-or-destination)
- [Prevent Role Members from Using an Identity Store or Data Source as Source or Destination](#prevent-role-members-from-using-an-identity-store-or-data-source-as-source-or-destination)
- [Prevent Role Members from Manipulating Specific Object Type(s)](#prevent-role-members-from-manipulating-specific-object-types)
- [Prevent Role Members from Using Specific Attributes for Mapping](#prevent-role-members-from-using-specific-attributes-for-mapping)

## Prevent Role Members from Using a Provider as Source or Destination

When creating or modifying a Synchronize job, users can specify any identity store or data source in
GroupID as a source and destination. You can prevent role members from using the identity stores and
data sources build on specific provider(s) in a job.

**To disallow a provider:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.  
   This tab lists the providers that can be used as source and destination in Synchronize jobs.

   **Allow a provider to be used as source and destination:**

   - Select the **Source** check box for a provider to enable role members to use the identity
     stores/data sources for the provider as source in Synchronize jobs.
   - Select the **Destination** check box for a provider to enable role members to use the identity
     stores/data sources for the provider as destination in Synchronize jobs.

   **Disallow a provider to be used as source and destination:**

   - Clear the **Source** check box for a provider to prevent role members from using the identity
     stores/data sources for it as source in Synchronize jobs.
   - Clear the **Destination** check box for a provider to prevent role members from using the
     identity stores/data sources for it as destination in Synchronize jobs.

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

NOTE: If you disallow a provider as a source, all Synchronize jobs already using an identity
store/data source for that provider as source will become read-only for role members and they will
not be able to run them. Similarly, if you disallow a provider as a destination, all Synchronize
jobs already using an identity store/data source for that provider as destination will become
read-only for role members and they will not be able to run them.

## Prevent Role Members from Using an Identity Store or Data Source as Source or Destination

When creating or modifying a Synchronize job, users can specify any identity store or data source in
GroupID as a source and destination. You can prevent role members from using a specific identity
store or data source in a job.

**To disallow an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to get a list of the identity stores or data sources created
   for it in GroupID.

   **To allow an identity store or data source to be used as source and destination:**

   - Select the **Source** check box for an identity store or data source to enable role members to
     use it as source in Synchronize jobs.
   - Select the **Destination** check box for an identity store or data source to enable role
     members to use it as destination in Synchronize jobs.

   **To disallow an identity store or data source to be used as source and destination:**

   - Clear the **Source** check box for an identity store or data source to prevent role members
     from using it as source in Synchronize jobs.
   - Clear the **Destination** check box for an identity store or data source to prevent role
     members from using it as destination in Synchronize jobs.

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

NOTE: If you disallow an identity store or data source as a source, all Synchronize jobs already
using it as source will become read-only for role members and they will not be able to run them.
Similarly, if you disallow an identity store or data source as destination, all Synchronize jobs
already using it as destination will become read-only for role members and they will not be able to
run them.

## Prevent Role Members from Manipulating Specific Object Type(s)

Using a Synchronize job, users can create and update different object types from a source to a
destination identity store. For an Active Directory identity store, for example, users can create
and update the following object types:

- User
- Group
- Contact
- Mail-enabled User
- Mailbox-enabled User
- Linked-Mailbox
- Mail-enabled Contact

You can disallow any of these object types for an identity store. When that identity store is used
as source or destination in a Synchronize job, role members will not be able to create or update the
disallowed objects at the destination. For example, if you disallow the user object type for
IdentityStore_A, role members will not be able to provision, update and deprovision user objects in
identityStore_A through a Synchronize job.

NOTE: If you disallow an object type in an identity store or data source, all Synchronize jobs
already using that identity store or data source (either as source or destination) while only
provisioning or updating the disallowed object type, will become read-only for role members and they
will not be able to run them. If a job provisions or updates multiple objects, where the disallowed
object is one of the object types it processes, it will run as usual, except that the disallowed
object will not be processed.  
**Example:** Suppose you disallow the mailbox object type in IdentityStore_A, when this identity
store is already used as a destination in a Synchronize job that provisions mailbox objects, then
the job will become read-only for role members and they will not be able to run it.  
If IdentityStore_A is used as a source or destination in a Synchronize job that provisions multiple
objects types, then the job will run as usual, except that the mailbox object will not be processed.

For data sources, you can disallow the following to role members as an alternate to object types:

- Sheets in an Excel workbook
- Tables in an Access, Oracle, and SQL database
- For ODBC, you can disallow tables in case of an SQL database and sheets in case of Excel
- For text/CSV, this does not apply

**To disallow object types in an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to get a list of the identity stores or data sources created
   for it in GroupID.
8. Click **Edit Object Policies** for an identity store or data source. The next page displays the
   object types that can be created in the identity store. For data sources, it displays alternate
   options, such as sheets for Excel and tables for databases.

   - Select the **Allow** check box for an object type to enable role members to use it in a
     Synchronize job that uses the particular identity store or data source as source or
     destination.
   - Clear the **Allow** check box for an object type to prevent role members from using it in a
     Synchronize job that uses the particular identity store as source or destination.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Prevent Role Members from Using Specific Attributes for Mapping

A Synchronize job makes use of attribute mapping, where object attributes from the source provider
are mapped to attributes of the destination provider to facilitate data syncing.

Each object type in an identity store has a different set of attributes. By default, all attributes
of the allowed object types in the source and destination identity stores are available for mapping
in a Synchronize job. You can disallow any number of attributes for an object type in an identity
store, so that the disallowed attributes are not available to role members for mapping.

For data sources, you can disallow the following to role members as an alternate to object
attributes:

- Columns in an Excel sheet
- Columns in an Access, Oracle, and SQL table
- For ODBC, you can disallow columns in case of an SQL table and columns in case of an Excel sheet
- For text/CSV, each value in the first row, as separated by the delimiter

**To disallow attributes for an object type in an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to get a list of the identity stores or data sources created
   for it in GroupID.
8. Click **Edit Object Policies** for an identity store or data source.
9. On the next page, click **Edit Attribute Selection** for an object type. This option is available
   for the ‘allowed’ object types only.
10. By default, all attributes are selected on the **Edit Attribute Selection** dialog box. Clear
    the check box for an attribute to disallow them to role members. Use the search box to search
    and locate the required attributes. When done, click **Save Selection**.  
    Disallowed attributes will not be available to role members for the object type in the identity
    store or data source. When this identity store or data source is used as a source or destination
    in a Synchronize job that works with the respective object type, the disallowed attributes will
    not be available for mapping.
11. Click **OK**.
12. On the **Edit Security Role** page, click **Update Security Role**.
13. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)
