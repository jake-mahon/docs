# Group Owners Policy

The Group Owners policy enables you to specify a group ownership criterion that role members must fulfill when they create or update static groups and Smart Groups using the GroupID portal or GroupID Management Shell. You can:

- Control whether groups must have a primary owner.
- Specify a range of additional owners, say 2-6, which implies that a group must have any number of additional owners in this range.

What do you want to do?

- [Enforce a Primary Owner](#Enforce-a-Primary-Owner)
- [Enforce Additional Owners](#Enforce-Additional-Owners)

## Enforce a Primary Owner

The Group Owners policy ensures that groups that are created and managed using GroupID have a primary owner. This will substantially reduce the occurrence of orphan groups in the directory.

When a new group is created using GroupID, the logged-on user is set as its primary owner. With the primary owner enforced under the Group Owners policy, the user who creates or manages the group can change the primary owner, but cannot remove it.

__To enforce a primary owner:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.  
   The __Add Policies__ pane is displayed with the __Group Owners__ tab in view.
6. Select the __Primary Owner is required__ check box to prevent role members from removing the group's primary owner while creating or updating groups. They can, however, change the primary owner.  
   If this check box is clear, role members can choose to remove the primary owner while creating or updating groups.

   NOTE: In a Microsoft Entra ID identity store, a primary owner must be specified for groups, regardless of whether the Group Owners policy enforces it or not.
7. Click __OK__.
8. On the __Edit Security Role__ page, click __Update Security Role__.
9. On the __Security Roles__ page, click __Save__.

## Enforce Additional Owners

You can specify a range of additional owners, say 2-10, so that role members cannot create or update a group unless its number of additional owners fall in the given range.

By default, there is no restriction on the number of additional owners. Groups created or updated by role members can have any number of additional owners and even no additional owner.

__To enforce additional owners:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.  
   The __Add Policies__ pane is displayed with the __Group Owners__ tab in view.
6. In the __Minimum__ box, type or select a number in the range, 0-3, to set the minimum number of additional owners that a group must have, when created or updated by a role member.  
   The default value ‘0’ indicates that role members can create groups with any number of additional owners or even without additional owners.
7. In the __Maximum__ box, type or select a number in the range, 0-100, to set the maximum number of additional owners that a group can have, when created or updated by a role member. This value should either be equal
   or higher than the value provided in the __Minimum__ box.
8. Click __OK__.
9. On the __Edit Security Role__ page, click __Update Security Role__.
10. On the __Security Roles__ page, click __Save__.

NOTE: When additional owners have been added using an earlier version of GroupID, and their number exceeds the value of this setting, GroupID will retain them. However, more additional owners cannot be added.

__See Also__

- [Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/overview.md)
- [Security Role Policies](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/overview.md)
