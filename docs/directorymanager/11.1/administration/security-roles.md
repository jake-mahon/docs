---
title: security roles
sidebar_label: security-roles
description: Directory Manager 11.1 documentation for security roles with configuration details, usage instructions, and implementation guidance.
---

# Check the Roles of a User

As discussed in the
[Assign Distinct Roles to a User in Directory Manager Clients](/docs/directorymanager/11.1/administration/security-roles.md#assign-distinct-roles-to-a-user-in-directory-manager-clients)
topic, a user in an identity store can have different security roles assigned to it in different
Directory Manager clients. Moreover, a user can also have multiple roles in a client, in which case
the highest priority role takes precedence when the user logs into that specific client. See
[Priority](/docs/directorymanager/11.1/administration/security-roles.md).

Directory Manager enables you to view the highest priority role of a user in a client. This role
identifies the access level of that user in the client. Select a client and specify a user.
Directory Manager fetches the highest priority role of the user with respect to the client.

## View the Highest Priority Role of a User in a Directory Manager Client

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit.**
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Check Security Roles**. The **Check Security Roles**
   dialog box is displayed.
5. In the **Client name** drop-down list, select a Directory Manager client to view the highest
   priority role of a user within it. For example, select a Directory Manager portal to view the
   highest priority role that a user has in the portal.  
   This list displays the names of the deployed clients only. If a client, such as the Directory
   Manager portal, is not deployed for the identity store, it will not be listed.  
   To view the highest privileged role that a user has in the identity store, select _None_ in the
   **Client Name** list.
6. In the box below, specify a user.

   - Enter a search string and press **Enter**. User names starting with the string are displayed.
     Select the required user.

     OR

   - Click **Advanced** to search a user by different parameters, such as name, department,
     company, and email. Enter a search string and click **Search**. Users matching the string are
     displayed. Select the required user.

   To remove the selected user, click **Remove** for it.

7. On selecting a user, its highest priority role within the selected client is displayed along with
   the role priority number.  
   For _None_, the highest privileged role of the user in th identity store is displayed,
   irrespective of any client.
8. Click **Close** to close the dialog box.

See Also

- [Security Roles](/docs/directorymanager/11.1/administration/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.1/administration/security-roles.md)

# Create a Security Role

To create a security role for an identity store, you have to specify the following:

- Criteria - See [Criteria ](/docs/directorymanager/11.1/administration/security-roles.md).
- Priority - See [Priority](/docs/directorymanager/11.1/administration/security-roles.md).
- Permissions - Permissions refer to the different actions that role members can perform using
  Directory Manager, for example, creating directory objects, managing groups, managing scheduled
  jobs, managing user profiles, and more.
- Policies - Policies refer to settings that apply to role members. For example, the search policy
  limits role members to search for objects in a particular container.

You can create a role from scratch or by copying an existing role. See the
[Security Roles](/docs/directorymanager/11.1/administration/security-roles.md) topic for additional information on security roles.

NOTE: You can disable a role to prevent its members from accessing Directory Manager. To prevent an
individual role member from accessing Directory Manager, you must remove him or her from the group
or container specified as role criteria.

What do you want to do?

- Create a Security Role from Scratch
- Create a Role by Copying an Existing Role

## Create a Security Role from Scratch

Follow the steps to create a security role

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Security Roles** under Settings in the left pane.

Step 4 – On the **Security Roles** page, click **Add Security Role**. The **Create Security Role**
page is displayed.

Step 5 – Enter a name for the security role in the **Name** box.

Step 6 – Enter a brief description for the role in the **Description** box.

Step 7 – In the **Priority** box, type or select a value in the range, 1-99, to set the role
priority. This should be a unique value for each role in an identity store.

Step 8 – In the **Criteria** area, specify a criterion to determine role members. For details, see
the [Security Role – Criteria](/docs/directorymanager/11.1/administration/security-roles.md) topic.

Step 9 – Next, assign group management, user management, and other permissions to the security role.
For details, see the [Security Role – Permissions](/docs/directorymanager/11.1/administration/permissions.md) topic.

Step 10 – Select the **HelpDesk Role** checkbox if you want to restrict role members to the Helpdesk
node of Admin Center.

Step 11 – Click **Create Security Role**.

Step 12 – Click **Save** on the **Security Roles** page. See the [Manage Security Roles](/docs/directorymanager/11.1/administration/security-roles.md)
topic.

## Create a Role by Copying an Existing Role

You can use a security role as a template to create a new role. In this case, the criteria,
permissions, and policies of the template role are copied to the new role.

Follow the steps to copy a role

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Security Roles** under Settings in the left pane.

Step 4 – On the **Security Roles** page, click the ellipsis button for the security role you want to
use as template and select **Copy**. The **Copy Security Role** page is displayed.

Step 5 – Follow steps 5-9 in the Create a Security Role from Scratch topic to update role info and
click **Update Security Role**.

Step 6 – On the Security Roles page, click **Save**.

Step 7 – To update the policies for the new role, see the
[Security Role Policies](/docs/directorymanager/11.1/administration/security-policies.md) topic.

# Security Role – Criteria

You can specify a criterion that determines which users fall in the security role.

On the **Create Security Role/Copy Security Role/Update Security Role** page, click **Add Criteria**
in the **Criteria** area. You can select a group or a container as criteria.

**Designate a group as criteria:**

1. On the **Add Criteria** dialog box, select the **Group** tile.
2. Enter a search string in the search field to search for your required group in the directory. You
   can also click **Advanced** to search the group by display name or email.  
   On selecting a group, its members and nested become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Designate a container as criteria:**

1. On the **Add Criteria** dialog box, select the **Container** tile.
2. Click the down arrow head in the box below and select an OU.  
   All users residing in this OU and its nested OUs become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Allow client-based access**

You can specify the Directory Manager clients that this role can access or restrict this role to
access a specific client, such as one Directory Manager portal rather than all portals. This may be
required, for example, when you create portals with specific purposes – say, Portal A for creating
groups, Portal B for approving workflow requests, and Portal C for managing user profiles. Hence,
you may want role members to access Portal A only.

1. On the **Add Criteria** dialog box, click **Show Advanced**.
2. Click **Add Expression**. A row with three drop-down lists is displayed. Use these to restrict
   role members to one or more Directory Manager clients (such as Admin Center and a Directory
   Manager portal).
3. Select an option in the first drop-down list.

   - _Client Name:_ selecting this option would populate the names of all Directory Manager clients
     in the third drop-down list. Clients are:

     - Management Shell
     - Admin Center
     - Each Directory Manager portal (all portals are listed individually)

     This enables you to select a specific Directory Manager client, such as a specific portal,
     to restrict role members to access this client only, or to allow them to access all except
     this client.

   - _Client Type:_ selecting this option would populate the different types of Directory Manager
     clients in the third drop-down list. Client types are:

     - Management Shell
     - Admin Center
     - Directory Manager portal (portals are not listed individually, so this option represents
       all Directory Manager portals)

     This enables you to allow role members to access all clients of the same type, such as all
     Directory Manager portals, or access all clients except this client type.

4. In the second drop-down list, select:

   - _is exactly:_ indicates that role members can only access the client/client type you select in
     the third drop-down list.
   - _is not:_ indicates that role members can access all Directory Manager clients/client types
     except the one you select in the third drop-down list.

5. Values displayed in the third drop-down list depend on your selection in the first drop-down
   list.

   - For client name, this list displays the names of all Directory Manager clients. Select a
     client. Based on your selection in the second drop-down list, role members can either access
     this client only or access all clients except this client.
   - For client type, this list displays the Directory Manager client types. Select an option.
     Based on your selection in the second drop-down list, role members can either access all
     clients of the selected type or are denied access to all clients of the selected type.

6. The ‘And’ or ‘Or’ operator applies when two or more expressions have been defined. Select:

   - _And:_ to apply all expressions to role members.
   - _Or:_ to apply one of the expressions to role members.

   Click an operator to apply it. The tile changes to blue, indicating that it has been applied.

7. Click **Save**.

See Also

- [Security Roles](/docs/directorymanager/11.1/administration/security-roles.md)
- [Create a Security Role](/docs/directorymanager/11.1/administration/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.1/administration/security-roles.md)

# Manage Security Roles

After creating a security role, you can manage various settings for it, such as tole criteria,
permissions, and policies.

What do you want to do?

- View Security Roles
- Enable or Disable a Role
- Change Role Priority
- Criteria 
- Modify Role Permissions
- Define Policies for a Role
- Delete a Role

## View Security Roles

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.  
   On the **Security Roles** page, the following information is displayed for a role:

   | Label        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
   | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Enable       | Shows whether the security role is enabled or disabled. Use the toggle button for an enabled role to disable it and vice versa. Members of a disabled role cannot access Directory Manager.                                                                                                                                                                                                                                                                                                                                                          |
   | Display name | The display name of the security role.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
   | Priority     | Each security role is assigned a value from 1-99, where 1 indicates the highest priority and 99 indicates the lowest priority. Role priority is unique for a role in an identity store. Role priority is used to resolve conflicts when a user has more than one role in Directory Manager. For example, when a user has two roles, Administrator and User, with role priority set to 1 and 25 respectively, then permissions and policies for the higher priority role (i.e., Administrator), will apply when the user logs into Directory Manager. |
   | Criteria     | Role criteria determines the users the role applies to. You can specify as container or group as criteria for a role. - In case of a container, all users residing in it are assigned the role. - For a group, all group members are assigned the role.                                                                                                                                                                                                                                                                                              |
   | Description  | A description for the security role.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   | Actions      | - Click **Edit** for a security role to update its details, criteria, policies, and permissions. - Click the ellipsis button and select Delete to delete the security role. - Click the ellipsis button and select Copy to create a new security role by copying the respective role.                                                                                                                                                                                                                                                                |

## Enable or Disable a Role

You can disable a role to prevent its members from signing into Directory Manager. You can also
enable a disabled role to allow its members to access Directory Manager. By default, all new roles
created for an identity store are enabled.

NOTE: To prevent an individual role member from accessing Directory Manager, you must remove him or
her from the group or container specified as role criteria.

**To enable or disable a security role:**

**Method 1:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, use the **Enable** toggle button for a role to enable or disable
   it.
5. Click **Save**.

**Method 2:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Update Security Role** page, use the toggle button in the top left corner to enable or
   disable the role.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Change Role Priority

While changing role priority, remember that the priority number must be unique for a role in an
identity store.

**To change role priority:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. In the **Priority** box on the **Edit Security Role** page, change the value for role priority.
   This value must fall in the range, 1-99, where 1 indicates the highest and 99 indicates the
   lowest priority. See Priority.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Change Role Criteria

By changing role criteria , you can specify a different set of users as members of a role.

**To change role criteria:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, the **Criteria** area displays the role criteria. Click **Add
   Criteria** to change it. On the **Add Criteria** dialog box, update the criteria. See the
   [Security Role – Criteria](/docs/directorymanager/11.1/administration/security-roles.md) topic for details.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Modify Role Permissions

You can update the permissions assigned to a role.

**To update role permissions:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Select what members can do** in the **Permissions**
   area to change role permissions.
6. On the **Add Permissions** dialog box, select **Allow** for a permission to assign it to the
   role. Select **Deny** for a permission to deny it to the role. To learn about the available
   permissions, see the [Security Role – Permissions](/docs/directorymanager/11.1/administration/permissions.md) topic.
7. After assigning the required permissions, click **OK**.
8. Click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Define Policies for a Role

To define policies for a security role, see the [Security Role Policies](/docs/directorymanager/11.1/administration/security-policies.md) topic.

## Delete a Role

When you delete a security role, role members will not be able to access Directory Manager.

**To delete a role:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click the ellipsis button for a security role and select
   **Delete** to delete it.
5. Click **Save**.

See Also

- [Security Roles](/docs/directorymanager/11.1/administration/security-roles.md)
- [Create a Security Role](/docs/directorymanager/11.1/administration/security-roles.md)

# Security Roles

Security roles enable you to control access to Directory Manager and the directory. An identity
store in Directory Manager has the following built-in roles that you can assign to users:

- **Administrator:** By default, this role has permissions on all functions that can be performed in
  an identity store.
- **Helpdesk:** This role is available for helpdesk users, who can reset identity store account
  passwords and unlock identity store accounts on behalf of other users. Admin Center for this role,
  by default, is available in the Helpdesk mode only.

  NOTE: The Helpdesk role is not available by default for a Microsoft Entra ID identity store.

- **User:** This role can be assigned to standard users, who can create new groups, manage their
  groups, update their directory profiles, and manage their direct reports.

These roles are highly customizable. You can modify their display name, priority level, permissions,
policies, and more. If the built-in roles do not meet your specific needs, you can create custom
security roles. See the [Manage Security Roles](/docs/directorymanager/11.1/administration/security-roles.md) and [Create a Security Role](/docs/directorymanager/11.1/administration/security-roles.md)
topics for additional information.

**View security role info**

To view information about a security role, see the
[View Security Roles](/docs/directorymanager/11.1/administration/security-roles.md#view-security-roles) topic.

**User policies and permissions**

Settings defined for an identity store apply to all users while role-based permissions and policies
only apply to members of a role. See the
[Configure an Identity Store](/docs/directorymanager/11.1/configuration/identity-stores.md)topic for additional information.

## Assign Distinct Roles to a User in Directory Manager Clients

You can assign different roles to a user in different Directory Manager clients. For example, a user
can have the administrator role in Directory Manager Management Shell and the role of a standard
user in a Directory Manager portal. This flexibility is built into security roles using client-based
criteria. See the [Security Role – Criteria](/docs/directorymanager/11.1/administration/security-roles.md) topic.

Directory Manager clients include:

- Admin Center
- All Directory Manager portals created using Admin Center
- Directory Manager Management Shell

Consider the following scenario:

- For the Administrator role, you allow role members to access one Directory Manager client:
  Directory Manager Management Shell. User A is a member of the Administrator role, so it gets
  access to Management Shell as an admin. User A cannot access any other Directory Manager client.
- For the User role, you allow role members to access the Directory Manager portal only. User A is a
  member of the User role, so it gets access to the portal as a standard user.

As a result, User A has two different roles in two Directory Manager clients.

Not only that, a user can also have multiple roles in a Directory Manager client, in which case role
priority is used to determine the access level of the user on the specific client. See
[Priority](/docs/directorymanager/11.1/administration/security-roles.md).

To view the highest priority role of a user with respect to a Directory Manager client, see the
[Check the Roles of a User](/docs/directorymanager/11.1/administration/security-roles.md) topic.
