# My Groups

To view and manage the groups that you own in the identity store, click __Groups__ on the left navigation pane and select __My Groups__. This page lists all your
active groups:

- [My Memberships](/versioned_docs/groupid_11.0/groupid/portal/group/mymemberships.md)
- [My Expired Groups](/versioned_docs/groupid_11.0/groupid/portal/group/myexpiredgroups.md)
- [My Expiring Groups](/versioned_docs/groupid_11.0/groupid/portal/group/myexpiringgroups.md)
- [My Deleted Groups](/versioned_docs/groupid_11.0/groupid/portal/group/mydeletedgroups.md)
- [My Smart Groups](/versioned_docs/groupid_11.0/groupid/portal/group/mysmartgroups.md)
- [My Dynasties](/versioned_docs/groupid_11.0/groupid/portal/group/mydynasties.md)
- [My Teams](/versioned_docs/groupid_11.0/groupid/portal/group/myteams.md) (for Microsoft Entra ID based identity store)

By default, the __My Groups__ tab displays the groups that you are the primary owner for. To include the groups for which you are an additional owner, select the __Display additional group ownership in My Groups__ check box on the [Portal Settings](/versioned_docs/groupid_11.0/groupid/portal/setting/portal.md) panel. This tab lists active groups only; expired and deleted groups are not displayed.

You can [Modify Search Directory](/versioned_docs/groupid_11.0/groupid/portal/group/allgroups.md#modify-search-directory) to search your groups and add [Filter All Groups](/versioned_docs/groupid_11.0/groupid/portal/group/allgroups.md#filter-all-groups)by clicking __My Groups Grid Filters__.
All your groups matching the filters will be displayed.

__You can:__

- Manually update the membership of a Smart Group using the __Update__ command. You can also view update details on __Processing Object (s)__ wizard. Click __OK__ once
  done. If you click __Background__, the update runs in the background and will show in the __Background Tasks__ tab.
- View and modify the [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md) of a group.
- Manually expire your groups. After expiring the group, it will be listed in __My Expired Groups__ list.
- Select a smart group and click __Renew__ on the toolbar; this re-applies the expiry policy of the group starting from today, thus renewing the group.
- Join a group as a [Join a group temporarily](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupjoinleave.md#join-a-group-temporarily) or [Join a group permanently](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupjoinleave.md#join-a-group-permanently)
- Leave a group’s membership [Leave a group temporarily](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupjoinleave.md#leave-a-group-temporarily) or [Leave a group permanently](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupjoinleave.md#leave-a-group-permanently).
- Join / leave a group [Join or leave a group on behalf of a direct report or peer](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupjoinleave.md#join-or-leave-a-group-on-behalf-of-a-direct-report-or-peer)a direct report or peer.
- To Join/Leave the group, you can also click on __Want to write reason to group owner?__ and state the the reason for joining or leaving the group for the group owner.
- Update the security type of your group using __Set Security Type__ option. You can select one of the following security types:

  - Public
  - Semi Private
  - Private
- Select a group and click __Move Group__ from the toolbar. You can specify a new container from __Select Container__ box where you want to move the group.
- Select a group and click __Add to Contacts__ on the toolbar to add a group’s email to your email contact list using the vCard. The portal creates the group's vCard and prompts you to save it on your machine. You can then use it
  to add the group's email address to your email contact list.
- Click __Add to Group__ to add the group into the membership of another group ([Add a group to the membership of another group (nesting)](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupmembershipfunction.md#add-a-group-to-the-membership-of-another-group-nesting)).
- Select a group and click __Send Email__ on the toolbar to send an email to the group. This launches the default Windows email application for sending an email to group members.
- Click __Export Results__ on the toolbar to export the group list to a Microsoft Excel file.
- Update the expiration policy of your group using __Set Expiration Policy__ option.
- Update owner for your group using __Set Owner__ option. The drop down list displays two options:

  - __Me:__ You can set yourself as the Owner
  - __Other:__ You can select some other user as the owner.
- Manually [ Group Deletion](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupdeletion.md) any of your group.
- Get a list of all groups managed by s particular group (i.e., all groups for which the selected group is a primary or additional owner)

  Select a group and click __Managed By__ on the toolbar to get a list of groups managed by the selected group.
- Click __Attest Group__ to update smart groups and dynasties, and verify your group's attributes and memberships.
- In the __Results__ box, select the number of search results to display on a page.

Use the page numbers under the group listing to page through all groups.

You can control the number of records to be displayed per page by modifying the __Search results per page__ setting on the [Portal Settings](/versioned_docs/groupid_11.0/groupid/portal/setting/portal.md) panel.

## Modify Search Directory

You can modify the search results in __Modify Search Directory.__ You can select entire directory or a domain to search active groups from.

## Transfer Ownership

You can find [Transfer Ownership](/versioned_docs/groupid_11.0/groupid/portal/group/transferownership.md) option on the top right corner. Transfer Ownership enables you to:

- Assign owners to orphan groups.
- Transfer group ownership (including Exchange 2013/2016/2019 additional ownership) from one recipient to another.

## Filter My Groups

You can add filters in __My Group Grid Filters__ while searching for specific groups.

1. Click __Add Filter__ to specify a criterion for filtering groups.
2. From the __Select a Filter__ list, select the attribute to filter groups.
3. Two more boxes get displayed next to __Select a Filter__ box upon selecting a filter.

   - __Select an Operator__ from the first list.
   - Specify a value for the selected operator in the second box.
4. Click __Apply Filter__.

   All your groups that match the specified criterion are displayed.
5. You can add additional filters by clicking __Add Filter.__
6. To undo the filters, click __Reset Filter.__

   It will remove all the criteria set before.

__See Also__

- [Groups](/versioned_docs/groupid_11.0/groupid/portal/group/create/overview.md)
- [Dynasty](/versioned_docs/groupid_11.0/groupid/portal/group/dynasty/overview.md)
- [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md)
- [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md)
- [Working with Groups](/versioned_docs/groupid_11.0/groupid/portal/group/manage/workingwithgroups.md)
