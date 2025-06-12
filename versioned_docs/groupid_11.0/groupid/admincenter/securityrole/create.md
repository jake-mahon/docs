# Create a Security Role

To create a security role for an identity store, you have to specify the following:

- __Criteria__ - See [Criteria ](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md#criteria).
- __Priority__ - See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md#priority).
- __Permissions__ - Permissions refer to the different actions that role members can perform using GroupID, for example, creating directory objects, managing groups, managing scheduled jobs, managing user profiles,
  and more.
- __Policies__ - Policies refer to settings that apply to role members. For example, the search policy limits role members to search for objects in a particular container.

You can create a role from scratch or by copying an existing role.

NOTE: You can disable a role to prevent its members from accessing GroupID. To prevent an individual role member from accessing GroupID, you must remove him or her from the group or container specified as role criteria.

What do you want to do?

- [Create a Security Role from Scratch](#create-a-security-role-from-scratch)
- [Create a Role by Copying an Existing Role](#create-a-role-by-copying-an-existing-role)

## Create a Security Role from Scratch

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Add Security Role__. The __Create Security Role__ page is displayed.
5. Enter a name for the security role in the __Name__ box.
6. Enter a brief description for the role in the __Description__ box.
7. In the __Priority__ box, type or select a value in the range, 1-99, to set the role priority. This should be a unique value for each role in an identity
   store.
8. In the __Criteria__ area, specify a criterion to determine role members. For details, see the [Security Role – Criteria](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/criteria.md) topic.
9. Next, assign group management, user management, and other permissions to the security role. For details, see the [Security Role – Permissions](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/permissions.md) topic.
10. Click __Create Security Role__.
11. Click __Save__ on the __Security Roles__ page.

## Create a Role by Copying an Existing Role

You can use a security role as a template to create a new role. In this case, the criteria, permissions, and policies of the template role are copied to the new role.

__To copy a role:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click the ellipsis button for the security role you want to use as template and select __Copy__. The __Copy Security Role__ page is displayed.
5. Follow steps 5-9 in the [Create a Security Role from Scratch](#create-a-security-role-from-scratch) topic to update role info and click __Update Security Role__.
6. On the __Security Roles__ page, click __Save__.
7. To update the policies for the new role, see the [Security Role Policies](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/overview.md) topic.

See Also

- [Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/overview.md)
- [Manage Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md)
