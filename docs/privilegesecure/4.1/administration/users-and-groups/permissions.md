# Local Rights Tab

The Local Rights tab shows information about the local rights granted for the selected user.

![Local Rights Tab for Application User](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/userlocalrightstab.webp)

The Local Rights tab has the following feature:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.

The table has the following columns:

- Name — Displays the name of the group the user is a member of
- Host — Resource where the local group resides. Click the link to view
  [Host Details Page](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md).

The table columns can be resized and sorted in ascending or descending order.

# Policies Tab

The Policies tab shows information about the session policies for the selected user, group, or
application.

![Policies Tab for Application Users](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/userpoliciestab.webp)

The Policies tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add — Opens the Add Account to Policies window. See
  [Add Account to Policies Window](/docs/privilegesecure/4.1/administration/users-and-groups/permissions.md)
  topic for additional information.
- Remove — Removes the selected item from being associated with the user group, or application
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the policy. Click the link to view additional details. See the
  [Access Policy Page](/docs/privilegesecure/4.1/administration/access-policies/index.md)
  topic for additional information.
- Activity — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.1/administration/activities/index.md)
  topic for additional information.
- Last Session — Date and timestamp for the last time the user used that activity and policy. This
  column is only on the User Details page.

The table columns can be resized and sorted in ascending or descending order.

# Add Account to Policies Window

The Add Account to Policies window provides a list of Policies that have been created. Policies are
created in the
[ Policy Interface](/docs/privilegesecure/4.1/administration/index.md).

![usersgroupsaddaccounttopoliciespage](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/usersgroups/usersgroupsaddaccounttopoliciespage.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Available Policies — Shows all available policies
- Policies s to Add — Shows selected policies
- Arrow icons — Use the arrows to move selection in and out of the Policies to Add section
- Okay button — Closes the window

Both tables have the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the policy
- Description — Description of the policy
- Policy Type — Icon indicates the type of object
- Connection Profile — Displays the name of the connection profile associated to the access policy

## Add Policies

Follow the steps below to add a policy to the present account.

**Step 1 –** Navigate to the Users & Groups page.

**Step 2 –** In the Users & Groups list, click the name of the desired account to open the User
page.

**Step 3 –** Select the Policies tab.

**Step 4 –** Click Add to open the Add Account to Policies window.

**Step 5 –** Select a policy in the Available Policies table and click the right arrow to move it to
the Policies to Add table.

**Step 6 –** Click Okay to add policies to the role.

The new policy is added to the applicable account.

# Add Activities and Groups Window

The Add Activities and Groups window provides a list of Activities that have been created.
Activities are created in the
[Activities Page](/docs/privilegesecure/4.1/administration/activities/index.md).

![Add activities and activity groups window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addactivitiesandactivitygroups.webp)

The window has the following features:

- Search — (missing or bad snippet)
- Filter — (missing or bad snippet) Activity or Activity Group
- Available Activities — (missing or bad snippet)
- Activities & Activity Groups to Add — (missing or bad snippet)
- Add button — (missing or bad snippet)

Both tables have the following columns:

- Type — (missing or bad snippet)
- Name — (missing or bad snippet)
- Description — (missing or bad snippet)

## Add Activities

Follow the steps to add activities to the selected access policy.

**Step 1 –** Navigate to the Policy > Access Policies page.

**Step 2 –** In the Access Policy list, select the name of the access policy and select the
Activities tab.

**Step 3 –** Click Add to open the Add Activities and Activity Groups window.

The Add Activities and Activity Groups window has the following features:

- Search – Searches the Name and Operating System columns to match the search string. When matches
  are found, both tables are filtered to the matching results.
- Available Credentials and Groups– Shows all Credentials and Groups that have been added to the
  console
- Credentials and Groups to Add – Shows the Credentials and Groups to be added to the protection
  policy
- Column headers can be sorted in ascending or descending order

  - Name – The name of the activity
  - Type – The type of activity, individual or group
  - Description – Additional details for the activity

**Step 4 –** To add an activity to the access policy, click a row in the Available Activities list
and it is immediately moved to the Activities & Groups to Add list.

**Step 5 –** (Optional) Click a row in the Activities & Groups to Add list to move it back to the
Available Activities list.

**Step 6 –** Click Add to add the activities and activity groups to the access policy.

The new activities and activity groups are added to the access policy and are shown in the
[Activities Tab for Resource Based Access Policies](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md).

# Add Policies Window

The Add Policies window provides a list of Policies that have been created. Policies are created in
the
[ Policy Interface](/docs/privilegesecure/4.1/administration/index.md).

![Add Policies to a Custom Role Window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addaccounttopolicies.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Available Policies — Shows all available policies
- Policies s to Add — Shows selected policies
- Add button — Adds modifications and closes window
- Cancel — Closes the window

Both tables have the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the policy
- Description — Description of the policy

## Add Policies

Follow the steps to add a policy to a custom role.

**Step 1 –** Navigate to the **Users & Groups** > **Role Management** page.

**Step 2 –** Select a custom role from the left-hand menu.

**Step 3 –** Click the **Policies Tab** in the custom role page.

**Step 4 –** Click the **Add Policies** button.

**Step 5 –** Select the checkbox for the desired Policies in the Available Policies table.

**Step 6 –** Click Add to add one or more policies to the custom role.

The new policies are added to the applicable custom role.

# Add Resources and Groups Window

The Add Resources And Groups window provides a list of resources that have been onboarded. Resources
are onboarded in the
[Resources Page](/docs/privilegesecure/4.1/administration/resources/index.md).

![Add resources and rescource groups window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addresourcesandresourcegroups.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Resource or Resource
  Group
- Available Resources And Resource Groups— Shows all available resources and resource groups that
  have been onboarded
- Resources And Resource Groups to Add — Shows selected resources and resource groups
- Add button — Adds modifications and closes window
- Cancel — Closes the window

Both tables have the following columns:

- Checkbox — Check to select one or more items
- Type — Classification of the activity
- Name — Displays the name of the resource. Click the link to view additional details. See the
  [Resources Page](/docs/privilegesecure/4.1/administration/resources/index.md)
  topic for addition information.
- Operating System— Displays the operating system of the resource

## Add Resources

Follow the steps to add resources and resource groups to the selected access policy or custom role.

**Step 1 –** Navigate to the Policy > Access Policies page or Users & Groups > Role Management page.

**Step 2 –** Select the name of the access policy or custom role and select the Resources tab.

**Step 3 –** Click Add to open the Add Resources window.

**Step 4 –** Select the checkbox for the desired resources in the Available Resources And Resource
Groups table.

**Step 5 –** Click Add to add one or more Resources or Resource Groups.

The new resource(s) and resource group(s) are added to the custom role.
