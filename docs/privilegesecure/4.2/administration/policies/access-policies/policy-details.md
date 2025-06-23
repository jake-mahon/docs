# Access Policy Page

The Access Policies page is accessible from the Navigation pane underPolicyPolicies. It shows the
configured access policies, which are used to control which users can complete which activities on
which resources.

![Access Policy Page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The pane on the left side of the page displays a list of the configured access policies. This pane
has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Green + button — Create a new access policy. See the [Add Access Policy](/docs/privilegesecure/4.2/administration/policies/access-policies/add-access-policy.md)
  topic for additional information.
- Trashcan icon — Deletes the access policy. Icon appears when policy is hovered over. A
  confirmation window will display.

The selected access policy details display at the top of the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy
- Type — Icon indicates the type of object: Resource Based or Credential Based
- Connection Profile — Displays the name of the connection profile associated to the access policy.
  The green arrow will open the [Connection Profiles Page](/docs/privilegesecure/4.2/administration/policies/connection-profiles/add-connection-profile.md) to add or edit
  connection profiles.
- User icon — Shows extra group of users who can manage this access policy. The icon appears only if
  a custom role has been assigned to a policy. See the
  [Custom Role Details Page](/docs/privilegesecure/4.2/administration/users-and-groups/roles-and-permissions/custom-roles.md) for additional information.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The tabs at the bottom of the main pane are for associating Users, Activities, Resources, and
Credentials to the access policy. The content within the tabs change based on the type of policy.
See the following topics for additional information:

- Resource Based Policy:

  - Users Tab for Resource Based Access Policies
  - [Activities Tab for Resource Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-activities-to-policy.md)
  - [Resources Tab for Resource Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-resources-to-policy.md)

- Credential Based Policy:

  - [Users Tab for Credential Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/policy-details.md)
  - [Activities Tab for Credential Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-activities-to-policy.md)
  - [Credentials Tab for Credential Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-credentials-to-policy.md)

# Users Tab for Credential Based Access Policies

The Users tab shows the users and groups associated with the selected access policy.

![Credential based policy users tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/policycredentials/userstabcredentials.webp)

The Users tab has the following features:

- Add — Opens the Add Users and Groups window. See the
  [Add Users & Groups Window](/docs/privilegesecure/4.2/administration/users-and-groups/user-management/add-users-groups.md) topic for additional
  information.
- Remove — Removes the selected item from being associated with the policy
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion:

  - All — Displays all individual and group types
  - User — Displays user types
  - Group — Displays group types
  - Application — Displays application types
  - Collection — Displays collection types
  - Local User — Displays local user types

- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Expand — Click the expand () icon to show additional information about the activities and
  resources authorized for the selected user or group
- Name — Displays the name of the account. Click the link to view additional details.See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/administration/users-and-groups/user-tabs/properties.md) topic for
  additional information.
- Email — Displays the associated email address, if available
- User Name — Displays the sAMAccountName for the account
- Type — Icon indicates the type of object
- Certified — Indicates the access entitlement for the user or group. See the
  [Access Certification Page](/docs/privilegesecure/4.2/administration/reporting/access-certification/certification-overview.md) topic for
  additional information.

  - Approved — Access entitlements have been approved
  - Denied — Access entitlements have been revoked
  - Incomplete — No access entitlement review has been completed

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Resource Based Access Policies

The Users tab shows the users and groups associated with the selected access policy.

![Resource based policy users tab](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The Users tab has the following features:

- Add — Opens the Add Users and Groups window. See the
  [Add Users & Groups Window](/docs/privilegesecure/4.2/administration/users-and-groups/user-management/add-users-groups.md) topic for additional
  information.
- Remove — Removes the selected item from being associated with the policy
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion:

  - All — Displays all individual and group types
  - User — Displays user types
  - Group — Displays group types
  - Application — Displays application types
  - Collection — Displays collection types
  - Local User — Displays local user types

- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Expand — Click the expand () icon to show additional information about the activities and
  resources authorized for the selected user or group
- Name — Displays the name of the account. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/administration/users-and-groups/user-tabs/properties.md) topic for
  additional information.
- Email — Displays the associated email address, if available
- User Name — Displays the sAMAccountName for the account
- Type — Icon indicates the type of object
- Certified — Indicates the access entitlement for the user or group. See the
  [Access Certification Page](/docs/privilegesecure/4.2/administration/reporting/access-certification/certification-overview.md) topic for
  additional information.

  - Approved — Access entitlements have been approved
  - Denied — Access entitlements have been revoked
  - Incomplete — No access entitlement review has been completed

The table columns can be resized and sorted in ascending or descending order.
