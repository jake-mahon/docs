---
title: Activities Tab for Credential Based Access Policies
sidebar_label: add activities to policy
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Activities Tab for Credential Based Access Policies

The Activities tab shows the activities associated with the selected access policy. Only the
Credential Release activity is associated with a Credential Based Access Policy.

![Credential based resource Activities tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/policycredentials/activitiestabcredentials.webp)

The Activities tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type— Provides options to filter results based on a chosen criterion:

  - All — Displays all activity for users and groups
  - Activity — Displays user activity
  - Activity Group — Displays group activity

- Refresh — Reload the information displayed

The table has the following columns:

- Name — Displays the name of the activity
- Type — Classification of the activity
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Activities Tab for Resource Based Access Policies

The Activities tab shows the activities associated with the selected access policy.

![Activities Tab for Resource based Policies](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/policyresource/activitiestab.webp)

The Activities tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type— Provides options to filter results based on a chosen criterion:

  - All — Displays all activity for users and groups
  - Activity — Displays user activity
  - Activity Group — Displays group activity

- Add — Opens the Add Activities and Activity Groups window. See the
  [Add Activities and Activity Groups Window](/docs/privilegesecure/4.2/administration/policies/access-policies/add-activities-to-policy.md)
  topic for additional information.
- Remove — Removes the selected item from being associated with the policy
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the activity . Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.2/administration/activities/index.md) topic for additional information.
- Type — Classification of the activity. Click the link to view additional details.
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Add Activities and Activity Groups Window

The Add Activities and Activity Groups window provides a list of Activities that have been created.
Activities are created in the [Activities Page](/docs/privilegesecure/4.2/administration/activities/index.md).

![Add Activities and Activity Groups Window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addactivitiesandactivitygroups.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: All, Activity or Activity
  Group
- Available Activities — Shows all available activities and activity groups
- Activities & Activity Groups to Add — Shows selected activities and activity groups
- Add — Adds modifications and closes window
- Cancel — Discards modifications and closes the window

Both tables have the following columns:

- Name — Displays the name of the activity
- Type — Classification of the activity
- Description — Description of the policy

## Add Activities

Follow the steps to add activities to the selected access policy.

**Step 1 –** Navigate to the Policy > Access Policies page.

**Step 2 –** In the Access Policy list, select the name of the access policy and select the
Activities tab.

**Step 3 –** Click Add to open the Add Activities and Groups window.

The Add Activities and Groups window has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Available Activities and Groups – Shows all activities and groups that have been added to the
  console
- Activities and Groups to Add – Shows all activities and groups that have been added to the
  protection policy
- Column headers can be sorted in ascending or descending order

  - Name — Displays the name of the activity
  - Type — Classification of the activity
  - Description — Description of the policy

**Step 4 –** To add an activity to the access policy, click a row in the Available Activities list
and it is immediately moved to the Activities & Groups to Add list.

**Step 5 –** (Optional) Click a row in the Activities & Groups to Add list to move it back to the
Available Activities list.

**Step 6 –** Click Add to add the activities and activity groups to the access policy.

The new activities and activity groups are added to the access policy and are shown in the
[Activities Tab for Resource Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-activities-to-policy.md).
