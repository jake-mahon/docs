# Default Role Details Page

The Role Management page is accessible from the Navigation pane under Users & Group. It provides
details on all available roles for Privilege Secure users. There are default roles, and custom roles
can be created.

![rolemanagementpage](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/rolemanagementpage.webp)

When a default role (Administrator, User, or Reviewer) is selected, the selected role details
display at the top of the main pane with the following features:

- Name — Name of the access policy
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: User, Group, Application,
  Collection, and Local User
- Add User — The Add options change based on the selected role:

  - Administrator — Opens the Add Administrators window. See the
    [Add Administrators Window](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/add-administrators.md) topic for
    additional information.
  - Users — Opens a list of available user types to add

    - New Domain Users — Opens the Add Users and Groups window. See the
      [Add Users & Groups Window](/docs/privilegesecure/4.2/administration/users-and-groups/user-management/add-users-groups.md) topic for
      additional information.
    - New Application User — Opens the Add Application page. See the
      [Add Application](/docs/privilegesecure/4.2/administration/resources/platforms/entra-id.md) for additional information.
    - New Local User — Opens the Add Local User page. See
      [Add Local User](/docs/privilegesecure/4.2/administration/users-and-groups/user-management/local-users.md) topic for additional information.

  - Reviewers — Opens the Add Reviewers window. See the
    [Add Reviewers Window](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/add-reviewers.md) topic for additional
    information.

- Remove — Removes console access from the selected account
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/administration/users-and-groups/user-tabs/properties.md) topic for additional
  information.
- User Name — Displays the sAMAccountName for the account
- Email — Displays the associated email address, if available
- Last Login — Date timestamp for the last time the user logged into the application

The table columns can be resized and sorted in ascending or descending order.

## Default Role Permissions

The default roles provide users with the following permissions:

- Administrators — Grants access to all Privilege Secure Console configuration options
- Users — Creates sessions based on assigned access policy. This role is automatically assigned when
  a user is onboarded.
- Reviewers — Grants ability to review access entitlement. See the
  [Access Certification Page](/docs/privilegesecure/4.2/administration/reporting/access-certification/certification-overview.md) topic for
  additional information.

# Role Management Page

The Role Management page is accessible from the Navigation pane under Users & Group. It provides
details on all available roles for Privilege Secure users. There are default roles, and custom roles
can be created.

![rolemanagementpage](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/rolemanagementpage.webp)

The pane on the left side of the page displays a list of the configured roles. This pane has the
following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new role. See the [Add Custom Role](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/custom-roles.md) for additional
  information.
- Copy icon — Clones a role and adds a new entry to the Role list
- Trashcan icon — Deletes the access policy. Icon appears when policy is hovered over. A
  confirmation window will display.

**NOTE:** The default Administrator, User, and Reviewer roles cannot be copied, deleted, or
modified. Only custom roles can be copied, deleted, or modified.

The details that display the main pane vary based on the type of role selected. See the
[Default Role Details Page](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/default-roles.md) and the
[Custom Role Details Page](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/custom-roles.md) topics for additional information.

# Group Roles Tab

The Group Roles tab shows whether the current group has been assigned an application role.

![Group Roles Tab for User Groups](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/usergroupsgrouproletab.webp)

The Group Roles tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add Role — Enables the selected role
- Remove Role — Removes the selected role assignment
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Role — List of available roles. See the [Role Management Page](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/default-roles.md) topic
  for additional details.
- Assigned — Indicates whether the role has been assigned

The table columns can be resized and sorted in ascending or descending order.

# User Roles Tab

The User Roles tab shows whether the current user has been assigned an application role.

![User Roles Tab for Application User](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/userroletab.webp)

The User Roles tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add Role — Enables the selected role
- Remove Role — Removes the selected role assignment
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Role — List of available roles. See the [Role Management Page](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/default-roles.md) topic
  for additional details.
- Assigned — Indicates whether the role has been assigned

The table columns can be resized and sorted in ascending or descending order.

# Add Role Users Window

The Add Role Users window provides a list of users that have been onboarded. Users are onboarded in
the [Users & Groups Page](/docs/privilegesecure/4.2/administration/users-and-groups/index.md). It allows users to be added to a custom role.

![Add Role Users Window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addroleusers.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion:User, Group, Application,
  Collection, and Local User
- Available Accounts — Shows all available users, groups, applications, collections, and local users
  that have been onboarded
- Accounts to Add — Shows selected users, groups, applications, collections, and local users
- Add button — Adds modifications and closes window
- Cancel — Closes the window

The tables in both sections have the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account
- User Name — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account
- Email — Displays the associated email address, if available
- Last Login — Date timestamp for the last time the user logged into the application

## Add Role Users

Follow the steps below to add a role user to a custom role.

**Step 1 –** Navigate to the **Users & Groups** > **Role Management** page.

**Step 2 –** In the Role list, click the name of the desired custom role to open the
[Custom Role Details Page](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/custom-roles.md).

**Step 3 –** Click the **Add Role Users** button.

**Step 4 –** Select the checkbox for the desired users in the Available Role Users table.

**Step 5 –** Click Add to add one or more user roles.

**Step 6 –** Click Add to add the role user(s) to the role.

The selected users are now granted the permissions associated with the selected custom role.
