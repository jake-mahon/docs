# My Expired Groups

To view a list of your expired groups in the identity store, click __Groups__ on the left navigation pane and select __My Groups__. On the My Groups page, click the __My Expired Groups__ tab.

The following events occur when a group expires:

- The group becomes inactive and is locked for all activities.
- "EXPIRED\_" is added as a prefix to the group name.
- A mail-enabled distribution group is mail-disabled, which means that any emails sent to the group are bounced back with an expiry message.
- For an Office 365 group, its member list is backed up in the database and cleared from Office 365.
- For a security group, its member list is cleared and any permissions set for that group no longer apply. However GroupID keeps a backup of its membership in the database.

All groups that are expired by the Group Lifecycle job are available on the __My Expired Groups__ page. Moreover, when you manually expire a group that has an expiry policy other than ‘Never expire’, it is also moved to this page.

The Group Lifecycle job is responsible for logically deleting expired groups, but you can also physically delete a group. See [ Group Deletion](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupdeletion.md).

By default, the __My Expired Groups__ tab lists the groups that you are the primary owner for. To include the groups for which you are an additional owner, select the __Display additional group ownership in My Expired Groups__ check box on the [Portal Settings](/versioned_docs/groupid_11.0/groupid/portal/setting/portal.md) panel.

You can [Modify Search Directory](/versioned_docs/groupid_11.0/groupid/portal/group/allgroups.md#modify-search-directory) to search expired groups and add [Filter All Groups](/versioned_docs/groupid_11.0/groupid/portal/group/allgroups.md#filter-all-groups)by clicking __My Expired Group Grid Filters__.
All the expired groups matching the filters will be displayed.

__See Also__

- [My Groups](/versioned_docs/groupid_11.0/groupid/portal/group/mygroups.md)
- [Groups](/versioned_docs/groupid_11.0/groupid/portal/group/create/overview.md)
- [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md)
- [Group Expiry](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupexpiry.md)
- [ Group Deletion](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupdeletion.md)
- [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md)
