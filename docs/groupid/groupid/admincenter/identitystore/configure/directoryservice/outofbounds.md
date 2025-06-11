# Manage Group Membership Settings

Directory Manager enables you to update group membership in the following ways:

- Add members manually (only recommended for static groups)
- Auto update Smart Groups and Dynasties using a Smart Group Update schedule.
- Import members using an external data source

To avoid large, unforeseen changes to Smart Group and Dynasty memberships, you can configure the following group membership setting for an identity store:

- Specify the maximum number of members for Smart Groups and Dynasties. Then determine the action to take when the member limit is exceeded, such as not to update or break the membership into smaller, nested groups.
- Define a criterion for out-of-bounds exceptions to raise alerts for group owners.

What do you want to do?

- [Set the Maximum Number of Group Members](#Set-the-Maximum-Number-of-Group-Members)
- [Manage Orphan Nested Groups](#Manage-Orphan-Nested-Groups)
- [Set a Group Update Threshold](#Set-a-Group-Update-Threshold)

## Set the Maximum Number of Group Members

You can set the maximum membership limit for groups and set Directory Manager to do one of the following when an update to a group breaches this limit.

- Not to update the group membership, thereby retaining the old membership.

  Or
- Create nested groups to accommodate membership. Nested groups are created as sub-groups of the group being updated. This simplifies permissions by allowing sub-groups to inherit permissions from the parent group.

__Example:__

Let’s assume you set the maximum membership limit to 500 and opt for nested groups when membership exceeds this limit.

__Scenario 1__: On update, 485 objects are fetched to be added to Group A’s membership. Since the count is less than 500, the objects are directly added as group members.

__Scenario 2:__ On the next update, 620 objects are fetched to be added to Group A’s membership. Since the count exceeds 500, it breaks the membership into 2 child groups (Group 1 with 500 members and Group 2 with
120 members) and nests them into Group A. Hence, Directory Manager checks the member count and takes necessary action before adding members to the group.

NOTE: In case of an Office 365 group, the option to break the membership into child groups has the following impact - An Office 365 group (Group A) will be updated according to the Smart Group update process. However, when the maximum membership limit
is hit, the update process will create child group(s) and try to add them as members of Group A. Since an Office 365 group cannot have groups as members, Group A’s membership will be empty. The child groups will continue to exist but without any
link to Group A.

__To set group membership limits:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Out of Bounds__.
4. In the __Maximum membership per group__ box on the __Out of Bounds__ page, enter the number of maximum members that a Smart Group or Dynasty can contain.
5. Select one of the following options for __When threshold reached:__

   - __Do not update:__ to prevent any action when the maximum membership limit is hit on update. As a result, the group will not be updated and will retain its old membership.
   - __Nest into child groups:__ to create nested child groups when the maximum membership limit is reached. Each nested group, in turn, cannot have more than the maximum number of members specified. Nested groups
     are displayed in Directory Manager as members of the parent group.
6. Click __Save__.

## Manage Orphan Nested Groups

An orphan nested group is one that has its relationship cut-off from the parent group, since this orphan group has no members to bind it to the parent group.

This may happen, for example, when the membership of a group decreases, or the maximum membership limit is increased. As a result, when group membership is updated, members from one or more nested child groups are emptied, leaving the nested groups
orphan.

You can choose to delete or retain the orphan nested groups in the identity store.

__To delete orphan nested groups:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Out of Bounds__.
4. On the __Out of Bounds__ page, select the __Delete orphan nested groups__ check box to delete nested groups that become orphan on membership update.  
   To retain orphan nested
   groups, do not select the check box.
5. Click __Save__.

## Set a Group Update Threshold

Out-of-bounds exceptions prevent large, unforeseen membership changes to groups. When an out-of-bounds exception occurs, Directory Manager does not update group membership and notifies the intended recipient(s) by email. If they deem the change as valid, they
can update the group manually in the Directory Manager portal.

NOTE: 1. Settings in the __Threshold__ section apply in case of membership update through a Smart Group Update schedule. On manual update, these settings
have no impact.  
 2. If the group is not updated manually after an out-of-bounds exception, the changes remain pending and the group will not be updated in future when the Smart Group Update job runs.  
 3. Out-of-bounds exception notifications
are sent as per notification settings configured for the Smart Group Update schedule responsible for updating the respective group.

__To set a group update threshold:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Out of Bounds__.
4. On the __Out of Bounds__ page, use the toggle button for __Do not update and alert__ to monitor out-of-bounds exceptions in group memberships
   and enable alerts in case an out-of-bounds exception occurs.
5. Provide values for the following:

   1. In the __Percent change in membership exceeds__ box, enter a percentage of membership change that, when exceeded, raises an out-of-bounds exception.

      Membership change is the difference between new membership and the existing membership. Percentage change in membership is calculated by the following formula:  
      (newMemberCount - oldMemberCount) x 100 / oldMemberCount

      Let’s assume you specify 20 in this field. When group membership changes by 20% or more, Directory Manager considers it as an exception.

      So, if Group A has 500 members and 200 new members are to be added, the formula will be as  
      (newMemberCount - oldMemberCount) x 100 / oldMemberCount   
      (700-500) x 100 / 500 = 40

      Since 40 is greater than 20, Directory Manager treats it as an out-of-bounds exception.
   2. In the __And either current or new membership exceeds__ box, type the number of current or new memberships. If the current or new membership of a group is equal or less than the specified number, Directory Manager
      does not raise an out-of-bounds exception for the group, even when the change percentage is exceeded. This allows you to ignore changes to small groups.

      For example, you set the change percentage to 20 and specify 25 in the __And either current or new membership exceeds__ box. It works as follows:

      - For current (existing) membership - When the existing membership of a group is equal or less than 25, Directory Manager does not trigger out-of-bounds for this group when the change percentage is exceeded (is greater than 20). For example, adding 3 new members to a group of 10 members
        would not trigger an exception. Directory Manager will ignore the change percentage and update the group.
      - For new membership - When, say 12 new members are added to a group with 10 existing members, the new membership reaches 22, which is less than 25. Even though the change percentage is exceeded, Directory Manager will not raise an exception and update group membership.
6. Click __Save__.

__See Also__

- [Manage Dynasty Settings](/docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/dynastysettings.md)
- [Smart Group Update Schedule](/docs/groupid/groupid/admincenter/schedule/smartgroupupdate.md)
