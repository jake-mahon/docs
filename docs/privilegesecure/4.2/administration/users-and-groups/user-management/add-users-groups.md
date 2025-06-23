---
title: Add Activities and Groups Window
sidebar_label: add users groups
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Add Activities and Groups Window

The Add Activities and Groups window provides a list of Activities that have been created.
Activities are created in the [Activities Page](/docs/privilegesecure/4.2/administration/activities/index.md).

![Add activities and activity groups window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addactivitiesandactivitygroups.webp)

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
[Activities Tab for Resource Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-activities-to-policy.md).

# Add Resources and Groups Window

The Add Resources And Groups window provides a list of resources that have been onboarded. Resources
are onboarded in the [Resources Page](/docs/privilegesecure/4.2/administration/resources/index.md).

![Add resources and rescource groups window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addresourcesandresourcegroups.webp)

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
  [Resources Page](/docs/privilegesecure/4.2/administration/resources/index.md) topic for addition information.
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

# Add Users & Groups Window

The Add Users & Groups window allows you to select users. From the
[Users & Groups Page](/docs/privilegesecure/4.2/administration/users-and-groups/index.md), this window is used to onboard users. From other
interfaces, this window is used to select onboarded users.

![Add Users and Groups to the console](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addusersgroupstoconsole.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion:

  - For Onboarding — User and Group,
  - For All Other Reasons — User, Group, Application, Collection, and Local User

- Available Accounts:

  - For Onboarding — Shows all available users and groups from the Active Directory sync
  - For All Other Reasons — Shows all available users, groups, applications, collections, and
    local users that have been onboarded

- Accounts to Add:

  - For Onboarding — Shows selected users and groups
  - For All Other Reasons — Shows selected users, groups, applications, collections, and local
    users

- Add button — Adds modifications and closes window
- Cancel — Closes the window

The tables in both sections have the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account
- User Name — Not included for onboarding Displays the sAMAccountName for the account
- User Principal Name — Only included for onboarding Displays the UPN value for the account
- Email — Not included for onboarding Displays the associated email address, if available
- Domain — Displays the domain name for the account

## Add Users and Groups

Follow the steps to add users and groups to the console from AD.

**Step 1 –** Navigate to the Policy > Users and Groups page.

**Step 2 –** Click Add to open the Add Users and Groups window.

**Step 3 –** Filter by Users or Groups, or use the Search feature.

**Step 4 –** Select the checkbox for the desired users in the Available Accounts table.

**Step 5 –** Click Add to add one or more accounts.

The selected accounts are now added to the Privilege Secure console.
