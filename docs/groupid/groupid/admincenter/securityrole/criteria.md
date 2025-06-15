# Security Role – Criteria

You can specify a criterion that determines which users fall in the security role.

On the __Create Security Role/Copy Security Role/Update Security Role__ page, click __Add Criteria__ in the __Criteria__ area. You can select a group or a container as criteria.

__Designate a group as criteria:__

1. On the __Add Criteria__ dialog box, select the __Group__ tile.
2. Enter a search string in the search field to search for your required group in the directory. You can also click __Advanced__ to search the group by display name or email.  
   On selecting a group, its members
   and nested become members of this role.
3. Click __Preview__ to view a list of role members.
4. Click __Save__.

__Designate a container as criteria:__

1. On the __Add Criteria__ dialog box, select the __Container__ tile.
2. Click the down arrow head in the box below and select an OU.  
   All users residing in this OU and its nested OUs become members of this role.
3. Click __Preview__ to view a list of role members.
4. Click __Save__.

__Allow client-based access__

You can specify the Directory Manager clients that this role can access or restrict this role to access a specific client, such as one Directory Manager portal rather than all portals. This may be required, for example, when you create portals with specific purposes – say, Portal A for creating groups, Portal B for approving workflow requests, and Portal C for managing user profiles. Hence, you may want role members to access Portal A only.

1. On the __Add Criteria__ dialog box, click __Show Advanced__.
2. Click __Add Expression__. A row with three drop-down lists is displayed. Use these to restrict role members to one or more Directory Manager clients (such as Admin Center and a Directory Manager portal).
3. Select an option in the first drop-down list.

   - _Client Name:_ selecting this option would populate the names of all Directory Manager clients in the third drop-down list. Clients are:

     - Management Shell
     - Admin Center
     - Each Directory Manager portal (all portals are listed individually)

     This enables you to select a specific Directory Manager client, such as a specific portal, to restrict role members to access this client only, or to allow them to access all except this client.
   - _Client Type:_ selecting this option would populate the different types of Directory Manager clients in the third drop-down list. Client types are:

     - Management Shell
     - Admin Center
     - Directory Manager portal (portals are not listed individually, so this option represents all Directory Manager portals)

     This enables you to allow role members to access all clients of the same type, such as all Directory Manager portals, or access all clients except this client type.
4. In the second drop-down list, select:

   - _is exactly:_ indicates that role members can only access the client/client type you select in the third drop-down list.
   - _is not:_ indicates that role members can access all Directory Manager clients/client types except the one you select in the third drop-down list.
5. Values displayed in the third drop-down list depend on your selection in the first drop-down list.

   - For client name, this list displays the names of all Directory Manager clients. Select a client. Based on your selection in the second drop-down list, role members can either access this client only or access all clients except this client.
   - For client type, this list displays the Directory Manager client types. Select an option. Based on your selection in the second drop-down list, role members can either access all clients of the selected type or are denied access to all clients of the
     selected type.
6. The ‘And’ or ‘Or’ operator applies when two or more expressions have been defined. Select:

   - _And:_ to apply all expressions to role members.
   - _Or:_ to apply one of the expressions to role members.

   Click an operator to apply it. The tile changes to blue, indicating that it has been applied.
7. Click __Save__.

See Also

- [Security Roles](overview.md)
- [Create a Security Role](create.md)
- [Manage Security Roles](manage.md)
