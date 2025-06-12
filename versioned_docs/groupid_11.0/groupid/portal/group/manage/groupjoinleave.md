# Join/Leave a Group

GroupID provides you the facility to join/leave a group temporarily or permanently for a specified period of time.

What do you want to do?

- [Join a group permanently](#Join-a-group-permanently)
- [Join a group temporarily](#Join-a-group-temporarily)
- [Leave a group permanently](#Leave-a-group-permanently)
- [Leave a group temporarily](#Leave-a-group-temporarily)
- [Join or leave a group on behalf of a direct report or peer](#Join-or-leave-a-group-on-behalf-of-a-direct-report-or-peer)

## Join a group permanently

You can join a semi-private or public group as a permanent member.

1. [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md) the group(s) you want to join.
2. On the page displayed, select the group(s) to join.
3. Point to the __Join__ button on the toolbar, make sure that the __Join Perpetually__ option is selected, and click __Join__.

   You can also join a group on the group's [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md) page by using the __Join__ button on the toolbar.

When a user joins a Smart Group or Dynasty, he or she is added to the __Include__ list on the [Query Designer - Include/Exclude tab](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/includeexclude.md) of the Query Designer. As a result, the user remains a group member
even when it does not fall in the scope of the query.

NOTE: For a semi-private group, the group owner must approve your _join_ request before you are added to group membership. See [Requests](/versioned_docs/groupid_11.0/groupid/portal/request/overview.md).

## Join a group temporarily

The logged-in user can join a semi-private or public group as a temporary member.

1. [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md) the group(s) you want to join.
2. On the page displayed, select the group(s) to join.
3. Point to the __Join__ button on the toolbar and select the __Join Temporarily__ option.
4. In the __Duration__ list, select one of the following options:

   - __7 Days__ - to join the selected group(s) for 7 days starting today
   - __30 Days__ - to join the selected group(s) for 30 days starting today.
   - __60 Days__ - to join the selected group(s) for 60 days starting today.
   - __90 Days__ - to join the selected group(s) for 90 days starting today.
   - __Custom__ - to join the selected group(s) for the time period you specify in the __From Date__ and __To Date__ boxes. You will become a member of the selected group(s) on the date given in the __From Date__ box.
5. Click __Join__.

   You can also join a group on the group's [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md) page by using the __Join__ button on the toolbar.

When a user joins a Smart Group or Dynasty, he or she is added to the __Include__ list on the [Query Designer - Include/Exclude tab](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/includeexclude.md) of the Query Designer. As a result, the user remains a group member
even when it does not fall in the scope of the query.

NOTE: For a semi-private group, the group owner must approve your _join_ request before you are added to group membership. See [Requests](/versioned_docs/groupid_11.0/groupid/portal/request/overview.md).

## Leave a group permanently

The logged-in user can permanently leave the membership of a semi-private or public group.

1. In GroupID portal, click __Groups__ in the left navigation pane, select Groups.

   Select the __My Groups__/__My Memberships__ tab.

   Or

   [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md) the group(s) you want to leave.
2. On the page displayed, select the required group(s).
3. Point to the __Leave__ button on the toolbar, make sure that the __Leave Perpetually__ option is selected, and click __Leave__.

   You can also leave a group on the group's [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md) page by using the __Leave__ button on the toolbar.

When a user leaves a Smart Group or Dynasty, he or she is added to the __Exclude__ list on the [Query Designer - Include/Exclude tab](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/includeexclude.md) of the Query Designer. As a result, the user is not added to group
membership even when it falls in the scope of the query.

NOTE: For a semi-private group, the group owner must approve your _leave_ request before you are removed from group membership. See [Requests](/versioned_docs/groupid_11.0/groupid/portal/request/overview.md).

## Leave a group temporarily

The logged-in user can leave the membership of a semi-private or public group on a temporary basis.

1. In GroupID portal, click __Groups__ in the left navigation pane, select Groups.

   Select the __My Groups__/__My Memberships__ tab.

   Or

   [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md) the group(s) you want to leave.
2. On the page displayed, select the required group(s).
3. Point to the __Leave__ button on the toolbar and select the __Leave Temporarily__ option.
4. In the __Duration__ list, select one of the following options:

   - __7 Days__ - to leave the selected group(s) for 7 days starting today.
   - __30 Days__ - to leave the selected group(s) for 30 days starting today.
   - __60 Days__ - to leave the selected group(s) for 60 days starting today.
   - __90 Days__ - to leave the selected group(s) for 90 days starting today.
   - __Custom__ - to leave the selected group(s) for the time period you specify in the __From Date__ and __To Date__ boxes. You will be removed from group membership on the date selected in the __From Date__ box.
5. Click __Leave__.

   You can also leave a group on the group's [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md) page by using the __Leave__ button on the toolbar.

When a user leaves a Smart Group or Dynasty, he or she is added to the __Exclude__ list on the [Query Designer - Include/Exclude tab](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/includeexclude.md) of the Query Designer. As a result, the user is not added to group
membership even when it falls in the scope of the query.

NOTE: For a semi-private group, the group owner must approve your _leave_ request before you are removed from group membership. See [Requests](/versioned_docs/groupid_11.0/groupid/portal/request/overview.md).

## Join or leave a group on behalf of a direct report or peer

Using the GroupID portal, a user can join or leave a group on behalf of another user.

- If a user has the ‘Manage my Direct Reports’ permission in the identity store, he or she can join or leave a group on behalf of any of his or her direct reports.

  For example, User A has two direct reports, User B and User C. User A can have User B and User C join/leave a group.
- Similarly, if a user has the ‘Join/Leave on behalf of Peer’ permission in the identity store, he or she can join or leave a group on behalf of any of his or her peers.

  For example, User A, User B and User C are peers (users having the same manager are considered as peers). If User A has the ‘Join/Leave on behalf of Peer’ permission, he or she can have User B and User C join/leave a group.

__To join on behalf__:

The logged-in user can join a group on behalf of a direct report or peer.

1. On the left navigation bar, click __Groups__ and then select the __My Groups__, __My Memberships__, or __My Expiring Groups__ tab.

   You can also [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md) the group you want to join on behalf of a direct report or peer.
2. On the page displayed, select the group to join.
3. Click __Join__ on the toolbar and then click __Other__ on the dialog box.

   The _Other_ option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both.
4. Search the required direct report or peer.

   - A user with the ‘Manage My Direct Reports’ permission can only search and select direct reports.
   - A user with the ‘Join/Leave on behalf of Peer’ permission can only search and select peers.
   - A user with both permissions can search and select both direct reports and peers.
5. Specify whether this direct report/peer should join the group for a permanent or temporary period, and click __Join__.

When a user is joined on behalf to a Smart Group or Dynasty, he or she is added to the __Include__ list on the [Query Designer - Include/Exclude tab](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/includeexclude.md) of the Query Designer. As a result, the user remains
a group member even when it does not fall in the scope of the query.

__To leave on behalf:__

The logged-in user can leave a group on behalf of a direct report or peer.

1. On the left navigation bar, click __Groups__ and then select the __My Groups__, __My Memberships__, or __My Expiring Groups__ tab.

   You can also [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md) the group you want to leave on behalf of a direct report or peer.
2. On the page displayed, select the group to leave.
3. Click __Leave__ on the toolbar and then click __Other__ on the dialog box.

   The _Other_ option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both.
4. Search the required direct report or peer.

   - A user with the ‘Manage My Direct Reports’ permission can only search and select direct reports.
   - A user with the ‘Join/Leave on behalf of Peer’ permission can only search and select peers.
   - A user with both permissions can search and select both direct reports and peers.
5. Specify whether this direct report/peer should leave the group for a permanent or temporary period, and click __Leave__.

When a user is removed on behalf from a Smart Group or Dynasty, he or she is added to the __Exclude__ list on the [Query Designer - Include/Exclude tab](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/includeexclude.md) of the Query Designer. As a result, the user is
not added to group membership even when it falls in the scope of the query.

NOTE: For a semi-private group, workflow is triggered and a notification is sent to the group’s primary owner for approval. If the requester is the default approver, the request is auto approved. Else, the request must be approved by an authorized user for
changes to take effect.

__See Also__

- [Working with Groups](/versioned_docs/groupid_11.0/groupid/portal/group/manage/workingwithgroups.md)
