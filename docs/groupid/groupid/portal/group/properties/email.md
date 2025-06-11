# Group properties - Email tab

Use this tab to view the email addresses assigned to this group. If your portal is connected to an identity store having Exchange 2013/2016/2019 deployed; then on this tab, you can also specify Exchange additional owners for the group. Exchange
additional owners have the same privileges as the primary owner.

__Addresses__

In case of a mail-enabled group, Microsoft Exchange assigns different addresses to it for communication with different repositories (such as Address Book, SIP, Outlook). These addresses are displayed in this box.

__Managed by__

Microsoft Exchange 2013/2016/2019 offers the co-managed by feature that enables you to specify Exchange additional owners for a group.

The __Managed by__ section is displayed when Microsoft Exchange Server 2013/2016/2019 is deployed as the messaging provider for the identity store your portal is connected to. This list shows Exchange additional owners specified for the group.

GroupID sends group expiry, deletion, and renewal notifications to all Exchange additional owners along with the group’s primary owner and additional owners. See [Group properties - Owner tab](/docs/groupid/groupid/portal/group/properties/owner.md) in group properties.

- Click __Add__ to add an Exchange additional owner. Enter a search string to locate the required object, or click __Advance__ to use the [Find Dialog Box](/docs/groupid/groupid/portal/search/find.md) for performing
  a search.
- To remove an Exchange additional owner, select it and click __Remove__.

NOTE: Only mail-enabled users can be designated as Exchange additional owners.
