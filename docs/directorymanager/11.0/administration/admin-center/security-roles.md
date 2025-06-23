# Check the Roles of a User

As discussed in the
[Assign Distinct Roles to a User in Different GroupID Clients](/docs/directorymanager/11.0/administration/admin-center/security-roles.md#assign-distinct-roles-to-a-user-in-different-groupid-clients)
topic, a user in an identity store can have different security roles assigned to it in different
GroupID clients. Moreover, a user can also have multiple roles in a client, in which case the
highest priority role takes precedence when the user logs into that specific client. See
[Priority](/docs/directorymanager/11.0/administration/admin-center/security-roles.md).

GroupID enables you to view the highest priority role of a user in a client. This role identifies
the access level of that user in the client. Select a client and specify a user. GroupID fetches the
highest priority role of the user with respect to the client.

What do you want to do?

- [View the Highest Priority Role of a User in a GroupID Client](#view-the-highest-priority-role-of-a-user-in-a-groupid-client)

## View the Highest Priority Role of a User in a GroupID Client

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit.**
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Check Security Roles**. The **Check Security Roles**
   dialog box is displayed.
5. In the **Client name** drop-down list, select a GroupID client to view the highest priority role
   of a user within it. For example, select a GroupID portal to view the highest priority role that
   a user has in the portal.  
   This list displays the names of the deployed clients only. If a client, such as the GroupID
   mobile app, is not deployed for the identity store, it will not be listed.  
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

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)

# Create a Security Role

To create a security role for an identity store, you have to specify the following:

- **Criteria** - See
  [Criteria ](/docs/directorymanager/11.0/administration/admin-center/security-roles.md).
- **Priority** - See
  [Priority](/docs/directorymanager/11.0/administration/admin-center/security-roles.md).
- **Permissions** - Permissions refer to the different actions that role members can perform using
  GroupID, for example, creating directory objects, managing groups, managing scheduled jobs,
  managing user profiles, and more.
- **Policies** - Policies refer to settings that apply to role members. For example, the search
  policy limits role members to search for objects in a particular container.

You can create a role from scratch or by copying an existing role.

NOTE: You can disable a role to prevent its members from accessing GroupID. To prevent an individual
role member from accessing GroupID, you must remove him or her from the group or container specified
as role criteria.

What do you want to do?

- [Create a Security Role from Scratch](#create-a-security-role-from-scratch)
- [Create a Role by Copying an Existing Role](#create-a-role-by-copying-an-existing-role)

## Create a Security Role from Scratch

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Add Security Role**. The **Create Security Role** page is
   displayed.
5. Enter a name for the security role in the **Name** box.
6. Enter a brief description for the role in the **Description** box.
7. In the **Priority** box, type or select a value in the range, 1-99, to set the role priority.
   This should be a unique value for each role in an identity store.
8. In the **Criteria** area, specify a criterion to determine role members. For details, see the
   [Security Role – Criteria](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
   topic.
9. Next, assign group management, user management, and other permissions to the security role. For
   details, see the
   [Security Role – Permissions](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
   topic.
10. Click **Create Security Role**.
11. Click **Save** on the **Security Roles** page.

## Create a Role by Copying an Existing Role

You can use a security role as a template to create a new role. In this case, the criteria,
permissions, and policies of the template role are copied to the new role.

**To copy a role:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click the ellipsis button for the security role you want to use
   as template and select **Copy**. The **Copy Security Role** page is displayed.
5. Follow steps 5-9 in the
   [Create a Security Role from Scratch](#create-a-security-role-from-scratch) topic to update role
   info and click **Update Security Role**.
6. On the **Security Roles** page, click **Save**.
7. To update the policies for the new role, see the
   [Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)
   topic.

See Also

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)

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

You can specify the GroupID clients that this role can access or restrict this role to access a
specific client, such as one GroupID portal rather than all portals. This may be required, for
example, when you create portals with specific purposes – say, Portal A for creating groups, Portal
B for approving workflow requests, and Portal C for managing user profiles. Hence, you may want role
members to access Portal A only.

1. On the **Add Criteria** dialog box, click **Show Advanced**.
2. Click **Add Expression**. A row with three drop-down lists is displayed. Use these to restrict
   role members to one or more GroupID clients (such as Admin Center and a GroupID portal).
3. Select an option in the first drop-down list.

   - _Client Name:_ selecting this option would populate the names of all GroupID clients in the
     third drop-down list. Clients are:

     - GroupID Management Shell
     - GroupID Admin Center
     - GroupID Mobile app
     - Each GroupID portal (all portals are listed individually)

     This enables you to select a specific GroupID client, such as a specific portal, to restrict
     role members to access this client only, or to allow them to access all except this client.

   - _Client Type:_ selecting this option would populate the different types of GroupID clients in
     the third drop-down list. Client types are:

     - GroupID Management Shell
     - GroupID Admin Center
     - GroupID Mobile app
     - GroupID portal (portals are not listed individually, so this option represents all GroupID
       portals)

     This enables you to allow role members to access all clients of the same type, such as all
     GroupID portals, or access all clients except this client type.

4. In the second drop-down list, select:

   - _is exactly:_ indicates that role members can only access the client/client type you select in
     the third drop-down list.
   - _is not:_ indicates that role members can access all GroupID clients/client types except the
     one you select in the third drop-down list.

5. Values displayed in the third drop-down list depend on your selection in the first drop-down
   list.

   - For client name, this list displays the names of all GroupID clients. Select a client. Based
     on your selection in the second drop-down list, role members can either access this client
     only or access all clients except this client.
   - For client type, this list displays the GroupID client types. Select an option. Based on your
     selection in the second drop-down list, role members can either access all clients of the
     selected type or are denied access to all clients of the selected type.

6. The ‘And’ or ‘Or’ operator applies when two or more expressions have been defined. Select:

   - _And:_ to apply all expressions to role members.
   - _Or:_ to apply one of the expressions to role members.

   Click an operator to apply it. The tile changes to blue, indicating that it has been applied.

7. Click **Save**.

See Also

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Create a Security Role](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)

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

   | Label        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
   | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Enable       | Shows whether the security role is enabled or disabled. Use the toggle button for an enabled role to disable it and vice versa. Members of a disabled role cannot access GroupID.                                                                                                                                                                                                                                                                                                                                                |
   | Display name | The display name of the security role.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   | Priority     | Each security role is assigned a value from 1-99, where 1 indicates the highest priority and 99 indicates the lowest priority. Role priority is unique for a role in an identity store. Role priority is used to resolve conflicts when a user has more than one role in GroupID. For example, when a user has two roles, Administrator and User, with role priority set to 1 and 25 respectively, then permissions and policies for the higher priority role (i.e., Administrator), will apply when the user logs into GroupID. |
   | Criteria     | Role criteria determines the users the role applies to. You can specify as container or group as criteria for a role. - In case of a container, all users residing in it are assigned the role. - For a group, all group members are assigned the role.                                                                                                                                                                                                                                                                          |
   | Description  | A description for the security role.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
   | Actions      | - Click **Edit** for a security role to update its details, criteria, policies, and permissions. - Click the ellipsis button and select Delete to delete the security role. - Click the ellipsis button and select Copy to create a new security role by copying the respective role.                                                                                                                                                                                                                                            |

## Enable or Disable a Role

You can disable a role to prevent its members from signing into GroupID. You can also enable a
disabled role to allow its members to access GroupID. By default, all new roles created for an
identity store are enabled.

NOTE: To prevent an individual role member from accessing GroupID, you must remove him or her from
the group or container specified as role criteria.

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

By changing role criteria, you can specify a different set of users as members of a role.

**To change role criteria:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, the **Criteria** area displays the role criteria. Click **Add
   Criteria** to change it. On the **Add Criteria** dialog box, update the criteria. See the
   [Security Role – Criteria](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
   topic for details.
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
   permissions, see the
   [Security Role – Permissions](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
   topic.
7. After assigning the required permissions, click **OK**.
8. Click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Define Policies for a Role

To define policies for a security role, see the
[Security Role Policies](/docs/directorymanager/11.0/administration/admin-center/policies.md)
topic.

## Delete a Role

When you delete a security role, role members will not be able to access GroupID.

**To delete a role:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click the ellipsis button for a security role and select
   **Delete** to delete it.
5. Click **Save**.

See Also

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Create a Security Role](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)

# Security Roles

Security roles enable you to control access to GroupID and the directory. An identity store in
GroupID has the following built-in roles that you can assign to users:

- **Administrator:** By default, this role has permissions on all functions that can be performed in
  an identity store.
- **Helpdesk:** This role is available for helpdesk users, who can reset identity store account
  passwords and unlock identity store accounts on behalf of other users.

  NOTE: The Helpdesk role is not available by default for a Microsoft Entra ID identity store.

- **User:** This role can be assigned to standard users, who can create new groups, manage their
  groups, update their directory profiles, and manage their direct reports.

These roles are highly customizable. You can modify their display name, priority level, permissions,
policies, and more. If the built-in roles do not meet your specific needs, you can create custom
security roles.

**View security role info**

To view information about a security role, see the
[View Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
topic.

**User policies and permissions**

Settings defined for an identity store apply to all users while role-based permissions and policies
only apply to members of a role. See the
[Configure an Identity Store](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)topic.

## Assign Distinct Roles to a User in Different GroupID Clients

You can assign different roles to a user in different GroupID clients. For example, a user can have
the administrator role in GroupID Management Shell and the role of a standard user in a GroupID
portal. This flexibility is built into security roles using client-based criteria. See the
[Security Role – Criteria](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
topic.

GroupID clients include:

- Admin Center
- All GroupID portals created using Admin Center
- GroupID Management Shell
- GroupID mobile app

Consider the following scenario:

- For the Administrator role, you allow role members to access one GroupID client: GroupID
  Management Shell. User A is a member of the Administrator role, so it gets access to Management
  Shell as an admin. User A cannot access any other GroupID client.
- For the User role, you allow role members to access the GroupID portal only. User A is a member of
  the User role, so it gets access to the portal as a standard user.

As a result, User A has two different roles in two GroupID clients.

Not only that, a user can also have multiple roles in a GroupIDGroupID client, in which case role
priority is used to determine the access level of the user on the specific client. See
[Priority](/docs/directorymanager/11.0/administration/admin-center/security-roles.md).

To view the highest priority role of a user with respect to a GroupID client, see the
[Check the Roles of a User](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
topic.

See Also

- [Identity Stores](/docs/directorymanager/11.0/configuration/identity-stores/index.md)
- [Create a Security Role](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)

# Security Role Permissions

You can allow or deny permissions to a security role on different GroupID functions.

On the **Create Security Role/Copy Security Role/Update Security Role** page, click **Select what
members can do** in the **Permissions** area to grant permissions to role members.

By default, all permissions displayed on the **Add Permissions** dialog box are denied to the new
role. Select the **Allow** option button for a permission to grant it to the role. To deny a
permission, select the **Deny** option button. After assigning the required permissions, click
**OK**.

Permissions are grouped under the following heads, with each tab representing a different head:

- [Users](#users)
- [Groups](#groups)
- [Admin Center](#admin-center)
- [Synchronize](#synchronize)
- [Password Management](#password-management)
- [Miscellaneous](#miscellaneous)
- [Container](#container)
- [Entitlement](#entitlement)

## Users

User-related permissions apply to all the GroupID clients that facilitate user management, such as
the GroupID portal, GroupID Management Shell, and the GroupID mobile app.

Click the **Users** tab on the **Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions                      | Descriptions                                                                                                                                     |
| --- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.  | Create Mailbox                   | Enables role members to create mailbox-enabled users.                                                                                            |
| 2.  | Manage My Direct Reports         | Enables role members to update the properties of their respective direct reports and add/remove them from the membership of groups.              |
| 3.  | Create Contact                   | Enables role members to create contact objects.                                                                                                  |
| 4.  | Create User                      | Enables role members to create users (both mail-enabled and non-mail enabled).                                                                   |
| 5.  | Delete                           | Enables role members to delete users from the directory.                                                                                         |
| 6.  | Join/Leave on behalf of any user | Enables role members to add/remove any user from the membership of groups.                                                                       |
| 7.  | Join/Leave on behalf of Peer     | Enables role members to add/remove their peers from the membership of groups. ‘Peers’ refer to users who report to the same manager as the user. |
| 8.  | Manage Any Profile               | Enables role members to update the profiles of other users.                                                                                      |
| 9.  | Manage My Profile                | Enables role members to update their directory profiles.                                                                                         |

Remember, Generalized permissions override limited permissions. Hence, if **Manage My Profile** is
denied and **Manage Any Profile** allowed, role members can manage their own profiles as well.

## Groups

Group-related permissions apply to all the GroupID clients that facilitate group management, such as
the GroupID portal, GroupID Management Shell, and the GroupID mobile app.

Click the **Groups** tab on the **Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions         | Descriptions                                                                                                                                                                                                           |
| --- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Manage My Groups    | Enables role members to modify the groups they own as primary owner, additional owner, and Exchange 2013/2016/2019 additional owner. Role members can update group properties, delete groups, expire groups, and more. |
| 2.  | Create Static Group | Enables role members to create static (unmanaged) groups.                                                                                                                                                              |
| 3.  | Create Smart Group  | Enables role members to create Smart Groups and Dynasties (managed groups).                                                                                                                                            |
| 4.  | Manage Any Group    | Enables role members to update the properties of any group, delete any group, expire any group, and more.                                                                                                              |

Remember, Generalized permissions override limited permissions. So, if **Manage My Groups** is
denied and **Manage Any Group** allowed, role members can manage all groups, including their own
groups.

## Admin Center

To manage permissions for Admin Center, click the **Admin Center** tab on the **Add Permissions**
dialog box.

Permissions are discussed in the following table:

|     | Permissions                          | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.  | Create Application                   | Enables role members to create a new application using the **Applications** node in Admin Center: This permission only allows role members to create an application from scratch. They cannot create an application by copying an existing one or create another instance of an application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.  | Create Data Source                   | Enables role members to create data sources for Synchronize jobs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.  | Create Identity Store                | Enables role members to create identity stores in GroupID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.  | Manage Admin Center Settings         | Enables role members to manage the following in Admin Center settings: - Add and remove question to the global question pool. - Add, edit, and remove GroupID licenses. - Download log files for GroupID. These options can be accessed by clicking the **Settings** button at the bottom of the left navigation pane in Admin Center. If this permission is denied, role members can view the question pool, licenses, and dump logs function as read-only.                                                                                                                                                                                                                                                                                                                         |
| 5.  | Manage Application Design Settings   | Enables role members to update the design settings for an application in Admin Center. Applications can be accessed using the **Applications** node in the left pane. If this permission is denied, design settings are displayed to role members as read-only. NOTE: The **Manage Applications** permission must be granted to the role as a prerequisite to the **Manage Application Design Settings** permission.                                                                                                                                                                                                                                                                                                                                                                 |
| 6.  | Manage Application Server Settings   | Enables role members to update the server settings for an application in Admin Center. Applications can be accessed using the **Applications** node in the left pane. If this permission is denied, server settings are displayed to role members as read-only. NOTE: The **Manage Applications** permission must be granted to the role as a prerequisite to the **Manage Application Server Settings** permission.                                                                                                                                                                                                                                                                                                                                                                 |
| 7.  | Manage Applications                  | Enables role members to do the following using the **Applications** node in Admin Center: - Create new applications by copying an existing application, deploy instances of an application, and delete an application. - View the already created applications as read-only. NOTE: If you allow this permission to the role while denying the **Manage Application Server Settings** and **Manage Application Design Settings** permissions, role members will not be able to update the server and design settings for an application. These settings will be displayed as read-only. To enable them to update the server and design configurations for an application, this permission must be granted as a prerequisite along with the respective permission(s).                  |
| 8.  | Manage Data Source                   | Enables role members to update and delete the data sources created for Synchronize jobs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 9.  | Manage Entitlement                   | **For an Active Directory identity store:** Enables role members to specify and manage file servers for entitlement analysis in an Active Directory identity store. **For a Microsoft Entra ID identity store:** Enables role members to specify and manage SharePoint sites for entitlement analysis in a Microsoft Entra ID identity store. If this permission is denied, the Entitlement page in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Entitlement** permission.                                                                                                                                                                             |
| 10. | Manage Identity Store                | Enables role members to do the following using the **Identity Stores** node in Admin Center: - Disable and delete identity stores. - View the properties of identity stores as read-only. NOTE: To enable role members to define and update identity store properties, you must grant the **Manage Identity Store** permission along with the following identity store-specific permissions: - Manage Entitlement - Manage Identity Store Configurations - Manage Identity Store General Info - Manage Replication - Manage Scheduling - Manage Security Roles - Manage Workflows If you deny any of the above permissions, the respective area in identity store properties will be read-only.                                                                                      |
| 11. | Manage Identity Store Configurations | Enables role members to manage all the configurations for an identity store. These configurations are displayed when you select the **Configurations** option in identity store properties. If this permission is denied, these configurations will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Identity Store Configurations** permission.                                                                                                                                                                                                                                                                                                                                          |
| 12. | Manage Identity Store General Info   | Enables role members to: - Update the general info for an identity store, such as the identity store name and the service account used to connect to the provider. - Include/exclude child domains from replication. - Set DC priority. If this permission is denied, the Identity Store Detail page in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Identity Store General Info** permission.                                                                                                                                                                                                                                                         |
| 13. | Manage Identity Store Link           | Enables role members to create, update, and delete identity store links.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 14. | Manage Notifications Editor          | Enables role members to manage the Notification Editor in Admin Center, such as search and edit notification templates. The Notification Editor can be accessed in any of the following ways: - Using the Notification Editor button at the bottom of the left navigation pane in Admin Center. - Using the Notification Editor button on the Notification Queue page. If this permission is denied, the following happens: - The Notification Editor button on the Notification Queue page is disabled. - When launched using the Notification Editor button in the navigation pane, the Notification Editor page is displayed as read-only.                                                                                                                                        |
| 15. | Manage Notifications Queue           | Enables role members to manage the notification queue in Admin Center, such as resend and delete queued notifications . The Notification Queue page can be accessed using the Notifications node in the left pane. If this permission is denied, role members can only view the page as read-only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 16. | Manage Replication                   | Enables role members to manage replication in GroupID. Role members will be able to manage the following: - Global replication settings on the Replication page, that can be accessed by clicking the Replication node in Admin Center. - Replication settings for an identity store, that are controlled from within that identity store. - Run replication for an identity store from the identity store card pinned on the Identity Stores page. If this permission is denied, the Replication pages for both global and identity store settings will be read-only, while the replication option will not be available on the identity store card. NOTE: The Manage Identity Store permission must be granted to the role as a prerequisite to the Manage Replication permission. |
| 17. | Manage SAML                          | Enables role members to access GroupID Authenticate and manage: - GroupID as an identity provider - GroupID as a service provider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 18. | Manage Scheduling                    | Enables role members to create, update, and delete scheduled jobs for the identity store. If this permission is denied, the Scheduling page in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Scheduling** permission.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 19. | Manage Security Roles                | Enables role members to manage security roles in the identity store, such as create, update, and delete roles. Role members would also be able to manage policies and permissions for roles. If this permission is denied, security roles and their configurations in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Security Roles** permission.                                                                                                                                                                                                                                                                                                        |
| 20. | Manage SMS Gateways                  | Enables role members to create, update, and delete SMS gateway accounts in Admin Center. If this permission is denied, role members can view the gateway accounts as read-only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 21. | Manage Workflows                     | Enables role members to manage workflows in the identity store, such as create, update, and delete workflows. Role members can also manage advanced workflow settings for the identity store. If this permission is denied, workflows and related settings in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Workflows** permission.                                                                                                                                                                                                                                                                                                                     |

## Synchronize

To manage permissions for Synchronize in the GroupID portal, click the **Synchronize** tab on the
**Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions  | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Create Job   | Enables role members to create Synchronize jobs and job collections in the identity store.                                                                                                                                                                                                                                                                                                                                                |
| 2.  | Delete Job   | Enables role members to delete the Synchronize jobs and job collections for which they are the owners. To enable them to delete any job, grant the **View Any Job** permission with this permission.                                                                                                                                                                                                                                      |
| 3.  | Edit Job     | Enables role members to edit Synchronize jobs and job collections in the identity store, such as change field mappings, apply transformations, update notification options, schedule the job run, and add/remove jobs from a job collection. Role members can only edit the jobs and job collections for which they are the owners. To enable them to edit any job, grant the **View Any Job** permission with this permission.           |
| 4.  | Run Job      | Enables role members to manually run the jobs and job collections for which they are the owners. To enable them to run any job, grant the **View Any Job** permission with this permission.                                                                                                                                                                                                                                               |
| 5.  | View Any Job | Enables role members to view a list of all jobs and job collections in the identity store, regardless of whether they are the job owner or not. NOTE: If you only grant this permission to the role, jobs and job collections will be displayed to role members as read-only. To enable them to edit, delete, or run jobs and job collections, this permission must be granted as a prerequisite along with the respective permission(s). |

## Password Management

To manage password reset and account unlock permissions, click the **Password Management** tab on
the **Add Permissions** dialog box.

End-users can manage their identity store account passwords and unlock their accounts using the
GroupID portal while helpdesk users can reset passwords and unlock accounts for other users through
Admin Center.

Permissions are discussed in the following table:

|     | Permissions           | Descriptions                                                                             |
| --- | --------------------- | ---------------------------------------------------------------------------------------- |
| 1.  | Unlock My Account     | Enables role members to unlock their identity store account.                             |
| 2.  | Manage Linked Account | Enables role members to link their accounts that exist in different identity stores.     |
| 3.  | Change My Password    | Enables role members to change their identity store account password.                    |
| 4.  | Reset Any Password    | Enables helpdesk users to reset the account password for any user in the identity store. |
| 5.  | Reset My Password     | Enables role members to reset their identity store account password.                     |
| 6.  | Unenroll              | Enables helpdesk users to unenroll a user’s identity store account in GroupID.           |
| 7.  | Unlock Any Account    | Enables helpdesk users to unlock the identity store account for any user.                |

NOTE: Account unlock is not supported in a Microsoft Entra ID identity store.

Remember, Generalized permissions override limited permissions. For example, if Unlock My Account is
denied and Unlock Any Account allowed, role members can unlock all accounts, including their own.

## Miscellaneous

To grant permissions on miscellaneous functions in GroupID, click the **Misc** tab on the **Add
Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions                      | Descriptions                                                                                                                                                           |
| --- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Enable Login to Service Provider | Enables role members to log into third-party applications using GroupID as an identity provider.                                                                       |
| 2.  | Manage All Requests              | Enables roles members to approve/deny workflow requests, even when they are not designated as approvers of those requests.                                             |
| 3.  | Manage Report                    | Enables role members to create, edit, and delete reports for the identity store in the GroupID portal. Role members will not be able to view and download the reports. |
| 4.  | View and Download Report         | Enables role members to view and download the reports generated for the identity store in the GroupID portal.                                                          |

## Container

To manage permissions related to containers in the directory, click the **Container** tab on the
**Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions      | Descriptions                                                                     |
| --- | ---------------- | -------------------------------------------------------------------------------- |
| 1.  | Create Container | Enables role members to create new containers in the directory (identity store). |

## Entitlement

To grant permissions on entitlements in the GroupID portal, click the **Entitlement** tab on the
**Add Permissions** dialog box.

For an Active Directory identity store, this tab lists the file servers that have been selected for
permissions analysis on the **Entitlement** page. Click a file server to manage permissions for it.

Permissions are discussed in the following table:

|     | Permissions                          | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Permission Set                       | Select the kind of permission set to grant to role members. - Administrative: Grants all the effective NTFS permissions to role members on all the file server shares. - Basic: Enables role members to navigate within the file server to view shared resources and the permissions assigned on them. You can change the permission set for both Administrative and Basic. Use the toggle button for each of the listed permissions to allow or deny it. |
| 2.  | Allow user to navigate to this share | Enables role members to navigate this file server and explore the shared resources along with the permissions assigned on them. If this check box is not selected, role members will be able to view basic information about the file server only. They will not be able to navigate the file server to view the shares and permissions.                                                                                                                  |
| 3.  | Add new user / group                 | Enables role members to search and select users/groups from the directory and grant permissions to them on one or more shares on the file server. The **Type** column lists the effective NTFS permissions. While adding users, role members will be able to grant permissions that you enable here.                                                                                                                                                      |
| 4.  | Modify user / group                  | Enables role members to update the permissions assigned to users and groups on file server shares. The **Type** column lists the effective NTFS permissions. Role members will only be able to modify the permissions that you enable here.                                                                                                                                                                                                               |
| 5.  | Remove user / group                  | Enables role members to remove users and groups from the permission list of shares on the file server. Removed users and groups will not be able to access the respective share on the file server.                                                                                                                                                                                                                                                       |

For a Microsoft Entra ID identity store, this tab lists the SharePoint sites that have been selected
for permissions analysis on the **Entitlement** page. Click a site to manage permissions for it.

Permissions are discussed in the following table:

|     | Permissions                          | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Permission Set                       | Select the kind of permission set to grant to role members. - Administrative: Grants all the effective permissions to role members on all the document libraries in the site. - Basic: Enables role members to navigate within the site to view the document libraries and the permissions assigned on them. You can change the permission set for both Administrative and Basic. Use the toggle button for each of the listed permissions to allow or deny it.   |
| 2.  | Allow user to navigate to this share | Enables role members to navigate this SharePoint site and explore the document libraries along with the permissions assigned on them. If this check box is not selected, role members will be able to view basic information about the site only. They will not be able to navigate the site to view the document libraries and permissions.                                                                                                                      |
| 3.  | Add new user                         | Enables role members to search and select users from the directory and grant permissions to them on one or more document libraries in the site. NOTE: The facility to search and select groups is not available. Groups have to be added from SharePoint. Using GroupID, role members can manage group permissions. The **Type** column lists the effective permissions. While adding users, role members will be able to grant permissions that you enable here. |
| 4.  | Modify user / group                  | Enables role members to update the permissions assigned to users and groups on document libraries in the site. The **Type** column lists the effective permissions. Role members will only be able to modify the permissions that you enable here.                                                                                                                                                                                                                |
| 5.  | Remove user / group                  | Enables role members to remove users and groups from the permission list of document libraries in the site. Removed users and groups will not be able to access the respective document library in the site.                                                                                                                                                                                                                                                      |

NOTE: For more information on role permissions, see the
[User Roles in Microsoft Entra ID and GroupID](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#user-roles-in-microsoft-entra-id-and-groupid)
topic.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Create a Security Role](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
- [Manage Security Roles](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
