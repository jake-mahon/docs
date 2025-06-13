# Attest an Expiring Group

If the GroupID administrator enables group attestation for the identity store, then group owners must review and validate the attributes and membership of an expiring group before renewing it.

While attesting a group, the owner can:

- Update a few attributes, such as the group’s display name, expiration policy, security type, etc.
- Verify the group’s membership and inactivate unrequired members. Inactive members are removed from group membership instantly or after x number of days, depending on the configurations made by the administrator.

A group expires when it is not attested and renewed during its expiring days.

__History Logging__

GroupID tracks and maintains history for group attestation. On the [Object properties - History tab](/versioned_docs/groupid_11.0/groupid/portal/group/properties/history.md) in group properties, the following is logged:

- The date the group was attested on.
- Any attribute value updated during group attestation.
- The status of a group member set to ‘active’ or ‘inactive’.

What do you want to do?

- [Attest a group](#Attest-a-group)

## Attest a group

1. In GroupID portal, on the left navigation bar, click __Groups.__ On the __Groups__ page select the __All Groups__ tab.
2. Select an expiring group and click __Attest Group__ on the toolbar.

   The button would be disabled if you select multiple groups.
3. On the __Attest Group__ wizard, review the values provided for the group attributes and update any information, if required. Then click __Next Step__.
4. On the __Step 2: Member Attestation__ page, verify the group members. The page has 3 tabs:

   - __Disabled Members__: Lists group members that are disabled in the directory.
   - __Not logged in 30 days__: Lists group members that have not logged into their workstations in the last 30 days.
   - __All Members__: Lists active group members only. Disabled members and those who have not logged in during the last 30 days are not included.
5. On each of these tabs, review the members list and set their status to _active_ or _inactive_.

   - Use the __Active All__ and __Inactive All__ buttons to mark the status of all members as active or inactive respectively. To individually mark an active member as inactive and vice versa, click the relevant button for it.

     The __Active All__ and __Inactive All__ buttons are available if the administrator has allowed group owners to specify the status of all member in a single click.
   - If the __Active All__ and __Inactive All__ buttons are not available, the group owner must verify each member one by one (by individually specifying its status as active or inactive.

   NOTE: Setting ‘active’ as status for a disabled user does not activate or enable the user's account.  
    Setting ‘active’ as status for users who have not logged in during the last 30 days does not move them to the __All Members__ listing.
6. The __Membership__ column displays the membership type for active members.

   You can change the membership type of users in all three listings – __All Members__,__Disabled Members__ and __Not logged in 30 days__.

   Membership types are:

   - __Perpetual__ - To make the object a permanent member of the group.
   - __Temporary Member__ - To make the object a temporary member of the group for the period you specify in the __Beginning__ and __Ending__ boxes. At the end of the period, the object is removed from the group membership.
   - __Addition Pending__ - Indicates that the object will be a temporary member of the group for a period in the future. Use the __Beginning__ and __Ending__ boxes to set a period. Before the beginning date, the
     object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’.

     __Here is an example:__

     You add Smith as a temporary member to Group A on May 15, 2019 for future dates, May 20-30, 2019.

     Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19, 2019. However, Smith would
     not be added to group membership in the provider.

     On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30, 2019. Smith will also be added to group membership
     in the provider.

     After May 30, Smith will be removed from Group A as a member in GroupID and in the provider.
   - __Removal Pending__ - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the __Beginning__ and __Ending__ boxes to set a period. Before the beginning
     date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’.

     _Here is an example:_

     You remove Smith from Group A on May 15, 2019 for future dates, May 20-30, 2019.

     Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19, 2019.

     On May 20, Smith’s membership type in
     GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. However, Smith will be removed from Group A’s membership in the provider.

     After May 30, Smith will be added back to Group A as a permanent member in GroupID and in the
     provider.
   - __Temporary Removed__ - Indicates that the object is temporarily removed from group membership for the period specified in the __Beginning__ and __Ending__ boxes. At the end of the period, the object is added
     back to the group membership as a permanent member.
7. For inactive members, the __Membership__ column displays the status as _Inactive_. The duration for an inactive member to remain in group membership depends on configurations made by the administrator.

   - The administrator can specify X number of days, say 5.

     When the status of a member is set to inactive, he/she is immediately removed from group membership in the directory provider. In GroupID, however, he/she remains a group member till the specified number of days, starting from the inactivation date. On the __Attest & Renew Group__ wizard, the __Beginning__ column displays the date when the user’s status was set to inactive, and the __Ending__ column displays the date when the user would be removed from group membership in GroupID, based on the specified days.

     During this period, the member can be activated (added back to group membership). When the member is not activated, the Membership Life Cycle job removes it from group membership in GroupID too.
   - If the administrator has not specified any days, the inactivated member is removed from group membership in the directory provider and in GroupID when the __Attest & Renew Group__ wizard completes. In this case, the __Beginning__ and __Ending__ columns remain blank.
8. Click __Next Step__.
9. The __Summary__ page displays the attributes that have been updated and the members’ updated status.

   Click __Attest Group__ to attest and renew the group.

   On attestation, the group’s expiration policy is re-applied to it, starting from today.

__See Also__

- [My Expiring Groups](/versioned_docs/groupid_11.0/groupid/portal/group/myexpiringgroups.md)
- [Working with Groups](/versioned_docs/groupid_11.0/groupid/portal/group/manage/workingwithgroups.md)
