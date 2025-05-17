---
sidebar_position: 7770
title: Protection Policies Page
---

# Protection Policies Page

The Protection Policies page is accessible from the Navigation pane under Policy. It shows the configured protection policies, which are used to monitor local groups on a resource for changes. Only users or groups added to the protection policy are permitted. When the resource is scanned, any local group members that are not listed on the [Allowed Members Tab for Protection Policies](../Tab/PolicyProtection/AllowedMembers#Allowed "Jump to the Allowed Members Tab section") are removed from the resource.

It is also possible to add the action *Invoke Protection Policy* to the Post Session group of an activity. This will proactively run all protection policies that apply to the target resource when the session completes, instead of waiting for the scheduled sync. See the [Activities Page](Activities "Jump to the Activities section") topic for additional information.

![Protection policies page](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Policy/ProtectionPolicies/Page.png "Protection policies page")

The pane on the left side of the page displays a list of the configured protection policies. This pane has the following features:

* Search — Searches the table or list for matches to the search string. When matches are found, the table or list is filtered to the matching results.
* Blue + button — Create a new protection policy. See the Add Protection Policy topic for additional information.
* Copy icon — Create a new protection policy based on the current selection. Icon appears when the policy is hovered over.
* Trashcan icon — Deletes the protection policy. Icon appears when policy is hovered over. A confirmation window will display.

The selected protection policy details display at the top of the main pane:

* Name — Displays the name of the policy
* Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to commit the modifications. Click **Cancel** to discard the modifications.

The tabs at the bottom of the main pane are for associating Resource, Members, and Schedule to the protection policy. See the following topics for additional information:

* [Resources Tab for Protection Policies](../Tab/PolicyProtection/Resources#Resource "Jump to the Resources Tab section")
* [Allowed Members Tab for Protection Policies](../Tab/PolicyProtection/AllowedMembers#Allowed "Jump to the Allowed Members Tab section")
* [Schedule Tab for Protection Policies](../Tab/PolicyProtection/Schedule#Schedule "Jump to the Schedule Tab section")