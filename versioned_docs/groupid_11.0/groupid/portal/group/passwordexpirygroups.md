# Password Expiry Groups

A password expiry group is a Smart Group whose membership contains users whose identity store account passwords are approaching their expiry dates. Members of this group are notified by email to reset their passwords. When they do so, they are automatically
removed from the group membership.

On the __Password Expiry Options__ tab of the Query Designer, you can define the password expiry policy for the group. Based on this policy and the users' __PWDLASTSET__ attribute, GroupID Portal creates
this group with users whose passwords will soon expire.

You can [Modify Search Directory](/versioned_docs/groupid_11.0/groupid/portal/group/allgroups.md#Modify-Search-Directory) to search password expiry groups and add [Filter All Groups](/versioned_docs/groupid_11.0/groupid/portal/group/allgroups.md#Filter-All-Groups)by clicking __Password Expiry Group Grid Filters__.
All the password expiry groups matching the filters will be displayed.

__See Also__

- [All Groups](/versioned_docs/groupid_11.0/groupid/portal/group/allgroups.md)
- [Groups](/versioned_docs/groupid_11.0/groupid/portal/group/create/overview.md)
- [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md)
- [Group Expiry](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupexpiry.md)
- [Join/Leave a Group](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupjoinleave.md)
- [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md)
- [Working with Groups](/versioned_docs/groupid_11.0/groupid/portal/group/manage/workingwithgroups.md)
