# properties - Member Of tab

Use this tab to view the groups of which this group is a member. You can add and remove this group from the membership of other groups.

__Member Of__

This group is a member of all groups listed in this grid.

For each group listed, you can view the display name, email, and description.

For each column in the grid, an item level filter is also available that lets you filter records based on a particular criterion. For example; to show groups whose display names start with D, type __D__ in the box under the __Display Name__ header and press Enter.

| Column Name | Description |
| --- | --- |
| Display Name | Displays the names of the groups this user is a member of. |
| Membership | Indicates whether the user is a temporary or permanent member of the group.   - Perpetual – To make the object a permanent member of the group. - Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership. - Addition Pending – Indicates that the object will be a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the   object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’.  Example.  You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30.  Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith would   not be added to group membership in the provider.  On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership   in the provider.  After May 30, Smith will be removed from Group A as a member in Directory Manager and in the provider. - Removal Pending - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning   date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’.  Example.  You remove Smith from Group A on May 15 for future dates, May 20-30.  Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19.  On May 20, Smith’s membership type in   Directory Manager will change to ‘Temporary Removed’; lasting till May 30. However, Smith will be removed from Group A’s membership in the provider.  After May 30, Smith will be added back to Group A as a permanent member in Directory Manager and in the   provider. - Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added   back to the group membership as a permanent member.   When the user is a perpetual member, the __Membership__ column is blank.  You cannot change the membership type of the user for any group on the __Member Of__ tab. Rather, go to the properties of the specific group and change the user's membership type on the [Group properties - Members tab](/docs/groupid/groupid/portal/group/properties/members.md). |
| Beginning | Displays the beginning date of the temporary addition or removal. |
| Ending | Displays the ending date of the temporary addition or removal. |

__Add__

Click it to add this group to the memberships of another group (for example, Group A).

Enter a search string to locate the required group (Group A), or click __Advance__ to use the [Find Dialog Box](/docs/groupid/groupid/portal/search/find.md) for performing a search

The selected group(s) get listed in the __Member Of__ grid.

__Remove__

Select a group (Group A) from the Member Of list and click __Remove__ to remove this group from the membership of Group A.
