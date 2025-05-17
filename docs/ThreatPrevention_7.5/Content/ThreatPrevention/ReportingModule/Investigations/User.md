---
sidebar_position: 6716
title: User Details Page
---

# User Details Page

The User Details page displays group membership details for a user.

In an investigation report, user names appear as links under the Perpetrator column in the Event Details and Top Resources sections (see the [Investigation Reports](Reports "Investigation Reports") topic). Click a link to land on the User Details page.

![](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Reporting/Investigations/UserDetails.png)

The top of the page displays a user profile card which may contain the following information about the user:

* Name
* DN
* NT Name (SAM Account Name)
* Email
* Object GUID
* Object Type
* Domain
* Tags, with an option to add additional tags

## Group Membership

The Group Membership tab displays the groups the user is a member of. It has the following sub-tabs:

* Direct Member Of – Lists groups the user is a direct member of
* Indirect Member Of – Lists groups the user is a member of via membership in a nested group

Each sub-tab displays a table with the following columns:

* Name – The name of the group. Click the link to view group details. See the [Group Details Page](Group "Group Details Page") topic for additional information.
* Domain – Name of the domain. This may be either the domain DNS name or domain controller hostname.
* Tags – The tag present on the perpetrator, file, or host associated with the event