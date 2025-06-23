---
title: Resources Tab for Resource Based Access Policies
sidebar_label: add resources to policy
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Resources Tab for Resource Based Access Policies

The Resources tab shows the resources associated with the selected access policy.

![Resource based policy resources tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/policyresource/resourcestab.webp)

The Resources table has the following features:

- Add — Opens the Add Resources and Resource Groups window. See the
  [Add Resources and Resource Groups Window](/docs/privilegesecure/4.2/administration/policies/access-policies/add-resources-to-policy.md)
  topic for additional information.
- Remove — Removes the selected item from being associated with the policy
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion:

  - All — Displays all individual and group types
  - Resource — Displays individual types
  - Resource Group — Displays group types

- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the resource. Click the link to view additional details. The details
  vary based on the type of resource. See the [Resources Page](/docs/privilegesecure/4.2/administration/resources/index.md) topic for
  additional information.
- Type — Icon indicates the type of object
- DNS Host Name — Displays the DNS host name for a host resource or the FQDN for a domain resource
- Operating System — Displays the operating system of the resource
- Active Session Count — Displays the number of active sessions on the resource

The table columns can be resized and sorted in ascending or descending order.

# Add Resources and Resource Groups Window

The Add Resources and Resource Groups window provides a list of resources that have been onboarded.
Resources are onboarded in the [Resources Page](/docs/privilegesecure/4.2/administration/resources/index.md).

![Add resources and resource groups window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/addresourcesandresourcegroups.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: All, Resource or Resource
  Group
- Available Resources and Resource Groups — Shows all available resources and resource groups that
  have been onboarded
- Resources and Resource Groups to Add — Shows selected resources and resource groups
- Add — Adds modifications and closes window
- Cancel — Discards modifications and closes the window

Both tables have the following columns:

- Name — Displays the name of the resource
- Operating System— Displays the operating system of the resource

## Add Resources

Follow the steps to add resources and resource groups to the selected access policy.

**Step 1 –** Navigate to the Policy > Access Policies page.

**Step 2 –** In the Access Policy list, select the name of the access policy and select the
Resources tab

**Step 3 –** Click Add to open the Add Resources and Resource Groups window.

The Add Resources and Resource Groups window has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Available Resources and Resource Groups – Shows all resources that have been added to the console
- Resources and Resource Groups to Add – Shows the resources to be added to the protection policy
- Column headers can be sorted in ascending or descending order

  - Name – The name of the resource
  - Operating System – Operating System of resource

**Step 4 –** Filter by Resources or Resource Groups, and use the search feature.

**Step 5 –** To add a resource or resource group to the access policy, click a row in the Available
Resources / Resource Groups table and it is immediately moved to the Resources and Resource Groups
to Add table.

**Step 6 –** (Optional) Click a row in the Resources and Resource Groups to Add table to move it
back to the Available Resources / Resource Groups table.

**Step 7 –** Click Add to add the resource(s) and resource group(s) to the access policy.

The new resource(s) and resource group(s) are added to the access policy and are shown in the
[Resources Tab for Resource Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-resources-to-policy.md).
