# Create a Security Role

To create a security role for an identity store, you have to specify the following:

- Criteria - See [Criteria ](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md#Criteria).
- Priority - See [Priority](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md#Priority).
- Permissions - Permissions refer to the different actions that role members can perform using Directory Manager, for example, creating directory objects, managing groups, managing scheduled jobs, managing user profiles,
  and more.
- Policies - Policies refer to settings that apply to role members. For example, the search policy limits role members to search for objects in a particular container.

You can create a role from scratch or by copying an existing role. See the [Security Roles](/docs/product_docs/groupid/groupid/admincenter/securityrole/overview.md) topic for additional information on security roles.

NOTE: You can disable a role to prevent its members from accessing Directory Manager. To prevent an individual role member from accessing Directory Manager, you must remove him or her from the group or container specified as role criteria.

What do you want to do?

- [Create a Security Role from Scratch](#Create-a-Security-Role-from-Scratch)
- [Create a Role by Copying an Existing Role](#Create-a-Role-by-Copying-an-Existing-Role)

## Create a Security Role from Scratch

Follow the steps to create a security role

Step 1 – In Admin Center, click __Identity Stores__ in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select __Edit__.

Step 3 – Click __Security Roles__ under Settings in the left pane.

Step 4 – On the __Security Roles__ page, click __Add Security Role__. The __Create Security Role__ page is displayed.

Step 5 – Enter a name for the security role in the __Name__ box.

Step 6 – Enter a brief description for the role in the __Description__ box.

Step 7 – In the __Priority__ box, type or select a value in the range, 1-99, to set the role priority. This should be a unique value for each role in an identity
store.

Step 8 – In the __Criteria__ area, specify a criterion to determine role members. For details, see the [Security Role – Criteria](/docs/product_docs/groupid/groupid/admincenter/securityrole/criteria.md) topic.

Step 9 – Next, assign group management, user management, and other permissions to the security role. For details, see the [Security Role – Permissions](/docs/product_docs/groupid/groupid/admincenter/securityrole/permissions.md) topic.

Step 10 – Select the __HelpDesk Role__ checkbox if you want to restrict role members to the Helpdesk node of Admin Center.

Step 11 – Click __Create Security Role__.

Step 12 – Click __Save__ on the __Security Roles__ page. See the [Manage Security Roles](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md) topic.

## Create a Role by Copying an Existing Role

You can use a security role as a template to create a new role. In this case, the criteria, permissions, and policies of the template role are copied to the new role.

Follow the steps to copy a role

Step 1 – In Admin Center, click __Identity Stores__ in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select __Edit__.

Step 3 – Click __Security Roles__ under Settings in the left pane.

Step 4 – On the __Security Roles__ page, click the ellipsis button for the security role you want to use as template and select __Copy__. The __Copy Security Role__ page is displayed.

Step 5 – Follow steps 5-9 in the [Create a Security Role from Scratch](#Create-a-Security-Role-from-Scratch) topic to update role info and click __Update Security Role__.

Step 6 – On the Security Roles page, click __Save__.

Step 7 – To update the policies for the new role, see the [Security Role Policies](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/overview.md) topic.
