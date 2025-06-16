# Password Expiry Groups

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do so, they are automatically removed from the group membership.

On the **Password Expiry Options** tab of the Query Designer, you can define the password expiry
policy for the group. Based on this policy and the users' **PWDLASTSET** attribute, GroupID Portal
creates this group with users whose passwords will soon expire.

You can
[Modify Search Directory](/docs/groupid/11.0/groupid/portal/group/allgroups.md#modify-search-directory)
to search password expiry groups and add
[Filter All Groups](/docs/groupid/11.0/groupid/portal/group/allgroups.md#filter-all-groups)by
clicking **Password Expiry Group Grid Filters**. All the password expiry groups matching the filters
will be displayed.

**See Also**

- [All Groups](/docs/groupid/11.0/groupid/portal/group/allgroups.md)
- [Groups](/docs/groupid/11.0/groupid/portal/group/create/overview.md)
- [Group Properties](/docs/groupid/11.0/groupid/portal/group/properties/overview.md)
- [Group Expiry](/docs/groupid/11.0/groupid/portal/group/manage/groupexpiry.md)
- [Join/Leave a Group](/docs/groupid/11.0/groupid/portal/group/manage/groupjoinleave.md)
- [Directory Search](/docs/groupid/11.0/groupid/portal/search/search.md)
- [Working with Groups](/docs/groupid/11.0/groupid/portal/group/manage/workingwithgroups.md)
