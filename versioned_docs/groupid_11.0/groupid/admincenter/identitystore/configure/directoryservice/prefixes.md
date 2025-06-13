# Set Group Name Prefixes

You can standardize group names in the directory by defining prefixes. When users create groups using the GroupID portal, they must select a prefix, which is added to the group’s name and display name.

NOTE: The Group Name Prefixes policy does not apply when a user creates a group using GroupID Management Shell.

You can define group name prefixes (a) for an identity store, (b) for security roles in an identity store, or (c) both at the identity store and role levels.

- Prefixes defined for an identity store are available to all security roles in an identity store. When creating a group, users must select a prefix to append the group’s name.
- Prefixes defined for a security role are available to role members only. You can enforce members to select a role-specific prefix to append a group’s name while creating a group. Role-specific prefixes help distinguish between groups created by
  different roles.
- When prefixes are defined at both the identity store and role levels, both sets of prefixes are available to role members in a single drop-down list. Role members can select any prefix to append a group’s name. However, when prefixes are enforced
  at the role level, role members can only select a role-specific prefix to append a group’s name.

NOTE: (1) For a user with multiple roles, prefixes for all roles are displayed when creating or updating groups.  
(2) If prefixes are enforced for the highest priority role of a user, he or she must select a prefix from the list of prefixes defined
for this highest priority role.  
(3) If prefixes are enforced for a role other than the highest priority role of a user, enforcement does not apply to him or her.

Consider the following:

- For existing groups, the prefix option is available for unmanaged groups (and not for Smart Groups and Dynasties). A user can choose to add a prefix to the group name in group properties. Once added, it cannot be removed.
- For managed groups (Smart Groups and Dynasties), prefixes can only be added while creating a group and cannot be changed or removed later.

A group naming policy defined in Microsoft Entra Admin Center has no impact in GroupID. For details, see the [Group Naming Policy](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/moreinfo/advsentraid.md#Group-Naming-Policy) topic.

What do you want to do?

- [Add a Prefix for an Identity Store](#Add-a-Prefix-for-an-Identity-Store)
- [Add a Prefix for a Security Role in an Identity Store](#Add-a-Prefix-for-a-Security-Role-in-an-Identity-Store)

## Add a Prefix for an Identity Store

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Name Prefixes__.
4. On the __Group Name Prefixes__ page, type a prefix in the box displayed at the top and click __Add__. The prefix is displayed in the
   __Group Name Prefix__ area.
5. Click __Save__.

Edit a Prefix

1. On the __Group Name Prefixes__ page, click __Edit__ for a prefix and update it. Then click the check mark icon to save or the cross icon to discard your changes.
2. Click __Save__.  
   The change does not propagate to group names that have already been created with the prefix.

Delete a Prefix

1. On the __Group Name Prefixes__ page, click __Remove__ for a prefix to delete it.
2. Click __Save__.  
   Deleting a prefix has no impact on group names that have already been created with it.

## Add a Prefix for a Security Role in an Identity Store

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __Group Name Prefixes__ tab.
7. Refer to step 4 and onwards in the [Add a Prefix for an Identity Store](#Add-a-Prefix-for-an-Identity-Store) topic to add, edit, or delete a group name prefix for a security role.
8. Select the __Enforce Prefix__ check box to make it mandatory for role members to select a role-specific prefix to append group names while
   creating groups.
9. Click __OK__.
10. On the __Edit Security Role__ page, click __Update Security Role__.
11. On the __Security Roles__ page, click __Save__.

__See Also__

- [Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/overview.md)
- [Security Role Policies](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/overview.md)
