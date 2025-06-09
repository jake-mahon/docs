# Password Expiry Groups

A password expiry group is a Smart Group whose membership contains users whose identity store account passwords are approaching their expiry dates. Members of this group are notified by email to reset their passwords. When they do so, they are automatically
removed from the group membership.

On the __Password Expiry Options__ tab of the Query Designer, you can define the password expiry policy for the group. Based on this policy and the users' __PWDLASTSET__ attribute, Directory Manager portal creates
this group with users whose passwords will soon expire.

You can [Modify Search Directory](/docs/groupid/groupid/portal/group/allgroups.md#modify-search-directory) to search password expiry groups and add [Filter All Groups](/docs/groupid/groupid/portal/group/allgroups.md#filter-all-groups)by clicking __Password Expiry Group Grid Filters__.
All the password expiry groups matching the filters will be displayed.
