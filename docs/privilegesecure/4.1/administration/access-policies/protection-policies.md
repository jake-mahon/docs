---
title: Add Protection Policy
sidebar_label: protection policies
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Add Protection Policy

Follow the steps to add a Protection policy to the console.

**Step 1 –** Navigate to the Policy > Protection Policies page.

**Step 2 –** In the Protection Policy list, click the Plus icon.

![Add Protection Policy](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/add/addprotectionpolicy.webp)

**Step 3 –** Enter the following information:

- Name – Name of the protection policy
- Description – (Optional) Brief description to identify the protection policy

**Step 4 –** Click Save to create the new protection policy.

The new protection policy has been created. The next step is to associate Resources, Users, and
Schedule to the policy. See the following topics for additional information:

- [Resources Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md)
- [Allowed Members Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md)
- [Schedule Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)

# Protection Policies Page

Protection policies are used to protect specific resources and can only be accessed by specific
users and groups. Essentially, all members who are not specified in the
[Allowed Members Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md)
are removed from the resource.

Protection policies can also be created to reserve resources for specific people or groups such as
executive team resources, business critical resources or shared resources.

The Protection Policies page is accessible from the Navigation pane under Policy. It shows the
configured protection policies, which are used to monitor local groups on a resource for changes.
Only users or groups added to the protection policy are permitted. When the resource is scanned, any
local group members that are not listed on the
[Allowed Members Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md)
are removed from the resource.

It is also possible to add the action _Invoke Protection Policy_ to the Post Session group of an
activity. This will proactively run all protection policies that apply to the target resource when
the session completes, instead of waiting for the scheduled sync. See the
[Activities Page](/docs/privilegesecure/4.1/administration/activities/index.md)
topic for additional information.

![Protection policies page](/img/versioned_docs/threatprevention_7.4/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The pane on the left side of the page displays a list of the configured protection policies. This
pane has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new protection policy. See the Add Protection Policy topic for additional
  information.
- Copy icon — Create a new protection policy based on the current selection. Icon appears when the
  policy is hovered over.
- Trashcan icon — Deletes the protection policy. Icon appears when policy is hovered over. A
  confirmation window will display.

The selected protection policy details display at the top of the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

When a protection policy is selected, the following tabs are displayed for the selected policy:

- [Resources Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md)
- [Allowed Members Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md)
- [Schedule Tab for Protection Policies](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
