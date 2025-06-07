# Group properties - Members tab

Use this tab to view or modify the members of a group. By default, the primary owner is also a member of the group.

NOTE: In a Microsoft Entra ID based identity store, only user objects can be added as members of an Office 365 group.

__Members__

Displays a list of member objects in this group.

| Column Name | Description |
| --- | --- |
| Type | The object type of the member object, such as user or group. |
| Display Name | The name of the member object. |
|  | You can view the memberships of groups that are members of this group.  For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who will receive the messages sent to the distribution group.  Click the plus sign next to a member group to view its members. Group membership can be viewed up to the nth level. However, you cannot modify membership of nested groups here.  For a parent Dynasty, all child Dynasties are listed as members.  NOTE: For an expired security group and Office 365 group, the members list would be empty. |
| Membership | Indicates whether the object is a temporary or permanent member of this group. The available membership types are:   - Perpetual – To make the object a permanent member of the group. - Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership. - Addition Pending – Indicates that the object will be a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the   object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’.  Example.  You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30.  Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith would   not be added to group membership in the provider.  On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership   in the provider.  After May 30, Smith will be removed from Group A as a member in Directory Manager and in the provider. - Removal Pending - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning   date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’.  Example.  You remove Smith from Group A on May 15 for future dates, May 20-30.  Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19.  On May 20, Smith’s membership type in   Directory Manager will change to ‘Temporary Removed’; lasting till May 30. However, Smith will be removed from Group A’s membership in the provider.  After May 30, Smith will be added back to Group A as a permanent member in Directory Manager and in the   provider. - Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added   back to the group membership as a permanent member.   When the object is a perpetual member, the Membership column is blank.  Click anywhere in the row to make it editable for changing the membership type of the group member.  NOTE: You cannot change the membership type when the member object is a group. |
| Beginning | Shows the beginning date of the temporary addition or removal. |
| Ending | Shows the ending date of the temporary addition or removal. |

NOTE: For each column, an item level filter is also available that lets you filter records based on a particular criterion. For example; to show objects whose display names start with D, type __D__ in the box under the __Display Name__ header and press Enter.

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes temporary members from group membership
on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say Mondays. If an object is to be added to group membership for three days - Wednesday till Friday, it will not be added. This happens because the Membership
Life Cycle job did not run on the particular days for temporary membership update.

__Add__

To add member(s) to the group, click __Add__. Enter a search string to locate the object to add as a member, or click __Advance__ to use the [Find Dialog Box](/docs/product_docs/groupid/groupid/portal/search/find.md) for performing
a search.

The selected members get listed in the __Members__ grid.

NOTE: This button is disabled for Smart Groups and Dynasties since their memberships is determined by the query set on the [Group properties - Smart Group/Query Designer tab](/docs/product_docs/groupid/groupid/portal/group/properties/smartgroup.md).  
 See [Schedule periodic membership updates for Smart Groups/Dynasties](/docs/product_docs/groupid/groupid/portal/group/manage/scheduleupdate.md#Schedule-periodic-membership-updates-for-Smart-GroupsDynasties).

__Import__

You can add members to the group using an external file.

You can also choose to import all members of an existing group or groups to the membership of this group.

Click __Import__ to launch the __Import Members__ wizard for importing group members. See [Import Group Members](/docs/product_docs/groupid/groupid/portal/group/properties/importmembers.md) for information
and instructions.

__Export__

You can export the list of members to an external file. Supported file formats are: .txt, .csv, .xls, .xlsx and .xml.

Click __Export__ to launch the __Export Members__ wizard for exporting group members. Select the attributes you want to export. For information and instructions, see [Export group members](/docs/product_docs/groupid/groupid/portal/group/manage/groupmembershipfunction.md#Export-group-members).

__Remove All__

To remove all the members at together, click __Remove all__.

__Remove__

To remove an object from the members list, select it and click __Remove__.
