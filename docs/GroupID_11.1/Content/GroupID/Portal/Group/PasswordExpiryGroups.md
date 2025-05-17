---
sidebar_position: 7501
title: Password Expiry Groups
---

# Password Expiry Groups

A password expiry group is a Smart Group whose membership contains users whose identity store account passwords are approaching their expiry dates. Members of this group are notified by email to reset their passwords. When they do so, they are automatically
removed from the group membership.

On the **Password Expiry Options** tab of the Query Designer, you can define the password expiry policy for the group. Based on this policy and the users' **PWDLASTSET** attribute, Directory Manager portal creates
this group with users whose passwords will soon expire.

You can [Modify Search Directory](AllGroups#modify "Modify Search Directory") to search password expiry groups and add [Filter All Groups](AllGroups#filter "Filter All Groups")by clicking **Password Expiry Group Grid Filters**.
All the password expiry groups matching the filters will be displayed.