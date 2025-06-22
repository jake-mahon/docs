# Manage Circular Reference

By default, Directory Manager checks for circular reference and does not allow it when users update
objects manually or when objects are auto updated via a Directory Manager schedule. If a circular
reference occurs, Directory Manager displays an error and prevents the user from saving the change.

Examples of circular reference are:

- When UserA is a direct report of UserB and UserB is a direct report of UserC, a circular reference
  would occur when you try to set UserA as UserC's manager.
- When you try to add a group as its member, say, add GroupA as a member of GroupA, a circular
  reference would occur.
- When GroupA is a member of GroupB, GroupB is a member of GroupC, a circular reference would occur
  when you try to add GroupC as a member of GroupA.

You can change the default setting to allow Directory Manager to save updates to objects even when a
circular reference occurs.

What do you want to do?

- Allow Circular Reference
- Skip the replication of members of a dynamic group in Entra ID 

## Allow Circular Reference

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Miscellaneous**.
4. On the **Miscellaneous** page, uncheck the **Check for Circular Reference** check box to allow
   Directory Manager to save changes to objects that involve circular reference.  
   The check box is selected by default, indicating that Directory Manager prevents circular
   reference in objects.
5. Click **Save**.

## Skip the replication of members of a dynamic group in Entra ID

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Miscellaneous**.
4. On the **Miscellaneous** page, select the **Skip Replicating members related attributes of Groups
   with dynamic membership** check box to skip the replication of members of a dynamic group in
   Microsoft Entra ID based identity store.
5. Click **Save**.

# Manage Dynasty Settings

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. The Smart Groups that a Dynasty creates are called child groups that become members of
their respective parent Dynasties.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups. To learn more about Dynasties,
see the [Dynasties](/docs/directorymanager/11.1/administration/general-settings.md#dynasties) topic.

You can control how Directory Manager processes Dynasties through the following settings:

- Auto update Dynasty children when parent changes
- Auto delete empty and orphan child Dynasties
- Specify attributes for inheritance

**How does Directory Manager update Dynasties?**

Each Smart Group and Dynasty has a query defined for it. On update, this query is executed to update
membership.

The Directory Manager portal provides two methods to update Smart Groups and Dynasties:

- Manual update - You can manually execute the query for a Dynasty and Smart Group any time.
- Scheduled update - Scheduled updates, powered by a Smart Group Update schedule, auto run at a
  specified frequency to update the target groups and Dynasties. See the
  [Smart Group Update Schedule](/docs/directorymanager/11.1/automation/overview.md) topic.

**What happens on Dynasty update?**

When a Dynasty is updated, the following happens:

- Each Dynasty has a query defined for it. On update, the query retrieves records from the directory
  and updates Dynasty membership.
- You can specify certain attributes whose values are passed on from parent to child Dynasties. The
  values of these attributes are updated when the Dynasty is updated. See the Specify Attributes for
  Inheritance topic.

What do you want to do?

- Auto Update Dynasty Children When Parent Changes
- Auto Delete Empty and Orphan Dynasty Children
- Specify Attributes for Inheritance

## Auto Update Dynasty Children When Parent Changes

By default, when you update a parent Dynasty, its child groups are also updated. However, you can
disable the Dynasty children update option, in which case, each child group will have to be updated
like a single Smart Group.

**To apply auto update settings:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, select the **Update Dynasty Children** check box. This will update the
   child groups every time the parent Dynasty is updated.  
   Clear this check box to prevent Dynasty children from getting updated with the parent Dynasty.
5. Click **Save**.

## Auto Delete Empty and Orphan Dynasty Children

An empty child Dynasty is one with no member and an orphan child Dynasty is one whose parent Dynasty
has been removed.

By default, empty and orphan Dynasty children are auto deleted from the identity store. However, you
can disable this setting to retain empty and orphan Dynasty children in the identity store.

**To auto delete empty and orphan Dynasty children:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, select the **Delete Empty and Orphan Dynasty Children** check box.
   This ensures that empty and orphan Dynasty children are automatically deleted from the identity
   store.  
   When this check box is not selected, empty and orphan Dynasty children are retained in the
   identity store.
5. Click **Save**.

## Specify Attributes for Inheritance

You can control the attributes that a child Dynasty inherits from its parent.

By default, the values of the following attributes are passed on from the parent to child Dynasties
(for an Active Directory identity store):

| Attribute        | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| unauthOrig       | Contains the list of DNs of users who do not have permissions to send email to the group. |
| authOrig         | Contains the list of DNs of users who have permissions to send email to the group.        |
| dLMemRejectPerms | Contains the DNs of groups that do not have permissions to send email to the group.       |
| dLMemSubmitPerms | Contains the DNs of groups that have permissions to send email to the group.              |
| delivContLength  | Contains the maximum limit for incoming messages to the group.                            |
| managedBy        | Contains information about the group’s primary owner.                                     |
| groupType        | Contains information about the group’s type, i.e., security or distribution group.        |

You can add and remove attributes to this list.

**To add/remove attributes for inheritance:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, the **Attributes** area lists the attributes that child Dynasties
   inherit from their respective parent Dynasties.

   - To add an attribute, click **Add Attributes**. On the **Add Fields** dialog box, select the
     required attributes and click **Add**.
   - To remove an attribute, click **Remove** for it.

5. Click **Save**.

NOTE: (1) At the Dynasty level, you can control whether child Dynasties should inherit these
attributes only when child Dynasties are created, or every time the parent Dynasty is updated. You
can also opt to disable attribute inheritance for child Dynasties.  
 (2) If, for a managerial Dynasty, the ‘Set manager as owner’ option is applied and the managedBy
attribute is set for inheritance, then the latter settings will not have any impact and the manager
of a child Dynasty will be set as its owner.

NOTE: In a Microsoft Entra ID identity store, where a group can have multiple primary owners, the
owner of the parent Dynasty and the manager of a child Dynasty are collectively set as owners of
that child Dynasty.

# Group Expiry and Deletion

Using Directory Manager, you can expire and delete groups in two ways:

- Manually expire and delete groups
- Automatically expire and delete groups using the Group Life Cycle schedule

## What Happens When a Group Expires

Directory Manager provides two ways to expire a group:

- You can manually expire a group from the Directory Manager portal.
- The Group Life Cycle schedule expires groups automatically based on the expiry policy specified
  for the respective group.

The following events take place when a group expires:

**In case of an Active Directory identity store with Microsoft Exchange as messaging provider:**

- The group becomes inactive and is locked for all activities.
- "EXPIRED\_" is added as a prefix to the group name.
- A mail-enabled distribution group is mail-disabled.
- For a security group, its member list is cleared. However, Directory Manager keeps a backup of its
  membership in the database.

**In case of an Active Directory identity store with Office 365 as messaging provider:**

The following happens when a distribution group is expired manually or via the Group Lifecycle job:

- The group’s email address is removed in Active Directory.
- "EXPIRED\_" is added as a prefix to the group name.
- The group is removed from Office 365 when the AAD Sync schedule runs.

On renewing an expired distribution group, the following happens:

- The group’s email address is added in Active Directory.
- The "EXPIRED\_" prefix is removed from the group’s name.
- The group is created with members in Office 365 when the AAD Sync schedule runs.

**In case of a Microsoft Entra ID identity store with Office 365 as messaging provider:**

The following happens when a distribution group is expired manually or via the Group Life Cycle
schedule:

- Directory Manager takes a backup of the group’s membership.
- It empties out the group’s membership in Office 365.

  NOTE: When an Office 365 group is expired, its member list is backed up in the database and
  cleared from Office 365.

On renewing an expired distribution group, the following happens:

- The group’s membership is repopulated in Microsoft Entra ID and Office 365.

### Renewal of Expired Groups

If you want an expired group back, you can renew it. On renewal, the group becomes active again and
its expiry policy is re-applied to it, starting from the date of renewal.

## What Happens When a Group is Deleted

Using Directory Manager, groups can be deleted physically or logically. Deleted groups can be viewed
in the Directory Manager portal. You can distinguish physically deleted groups from logically
deleted groups as:

- Physically deleted groups are listed under _Tombstone Groups_.
- Logically deleted groups are listed under _Logically Deleted Groups_. They also have Deleted\_
  prefixed to their display names. However, groups in the Recycle Bin are displayed by their names,
  not their display names.

Both types are locked for further operations until restored.

NOTE: While all searches in Directory Manager are catered through Elasticsearch, the Recycle Bin is
an exception; it fetches data from the directory.

NOTE: The Recycle Bin does not display data for a Microsoft Entra ID identity store.

### Physical Deletion

Physical group deletion refers to manually deleting groups from the Directory Manager portal.
Directory Manager moves a physically deleted group to the Recycle Bin while stripping it of most of
its properties. You cannot delete a group from the Recycle Bin; however, you can restore it. The
restoration process not only restores the group to its original container, but it also reinstates
the home container for the group, if deleted.

A physically deleted group is restored with limited attributes; its membership is not restored.
Smart Groups and Dynasties are restored as static groups with no members and no query.

### Logical Deletion

Groups that are deleted by the Group Life Cycle schedule are considered as logically deleted. The
schedule deletes expired groups x number of days after group expiry, as specified in the
[Auto Delete Expired Groups](/docs/directorymanager/11.1/administration/services/overview.md#auto-delete-expired-groups) topic.

On deletion, logically deleted groups are moved to the Recycle Bin with all their attributes intact.
As a result, a logically deleted group, when restored, returns to its state it had at the time of
deletion. The restoration process not only restores the group to the container from where it was
deleted but it also reinstates the home container for the group, if deleted.

You can also manually delete a logically deleted group in the Recycle Bin, making it physically
deleted.

### Deletion Notifications

When the Group Life Cycle schedule deletes a group, it notifies the group owners or, if there is no
owner, the default approver. The job does not delete a group that neither has an owner nor a default
approver. See the
[Specify a Default Approver](/docs/directorymanager/11.1/workflows/overview.md#specify-a-default-approver)
topic.

**See Also**

- [Manage Group Lifecycle Settings](/docs/directorymanager/11.1/administration/services/overview.md)
- [Group Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md)[Specify a Default Approver](/docs/directorymanager/11.1/workflows/overview.md#specify-a-default-approver)

# Manage Group Lifecycle Settings

Directory Manager can effectively manage group life cycle through all stages, from creation to
deletion. It enables you to define the following setting to control the group life cycle in an
identity store:

- A default expiry policy for groups
- Exclude groups from expiration and deletion
- Prevent the expiry of security groups
- Wait period for deleting expired groups
- Group usage life cycle
- Group attestation
- Notifications for expiring groups

Of these, only the first setting, i.e., the group expiry policy, can be changed for individual
groups. All other settings apply to all groups in the identity store and cannot be changed for
individual groups.

The Group Life Cycle schedule defined for the identity store is responsible for applying the group
life cycle settings to groups. This schedule runs on containers you specify as its targets, to
process the groups that reside therein. Groups that reside outside of the target containers will not
be processed by the schedule; hence, the group life cycle policy is not applied to them. See the
[Group Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md) topic.

NOTE: Before you specify a group life cycle policy for a Microsoft Entra ID identity store, see the
[Group Expiration Policy](/docs/directorymanager/11.1/configuration/identity-stores.md#group-expiration-policy) section in the
[Microsoft Entra ID vs. Active Directory Identity Stores](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

What do you want to do?

- Set a Default Expiry Policy for Groups
- Apply Policy on Specific Containers
- Exempt Security Groups from Expiry
- Auto Delete Expired Groups
- Enable Group Usage Lifecycle
- Enable Group Attestation
- Set Group Expiry Notifications

## Set a Default Expiry Policy for Groups

The expiry policy specifies the period for which a group remains active. When the period ends, the
group expires.

When a group is created, it inherits the default expiry policy, but you can change it for individual
groups. The Group Life Cycle schedule executes the Group Lifecycle policy as defined for the
identity store, but monitors group expiry dates as determined by each group’s expiry policy. This
job expires groups according to their respective expiry policy.

**To set a default expiry policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Lifecycle**.
4. In the **Default Expiration Policy** drop-down list on the **Group Lifecycle** page, select an
   expiration criterion that you want to set as default. Options are:

   - Never Expire
   - Expire Every 30 Days
   - Expire Every 60 Days
   - Expire Every 90 Days
   - Expire Every 120 Days
   - Expire Every 6 Months
   - Expire Every Year
   - Other: On selecting this, two boxes are displayed. Select a unit of time (years, months, days)
     from the second list and specify a number in the first box to set a custom period for group
     expiration.

5. Click **Save**.

## Apply Policy on Specific Containers

By default, the Group Life Cycle schedule evaluates all groups that reside in the container(s)
specified as its targets, and processes them according to the group lifecycle policy. However, you
can exempt containers from the Group Life Cycle schedule, so that it does not process the groups in
those containers.

**To limit the policy to specific containers:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Lifecycle**.
4. On the **Group Lifecycle** page, select one of the following options:

   - **Do not apply policy on following containers**

     1. Select this option and click **Add/Modify Container(s)**.
     2. On the **Add Container(s)** dialog box, select the containers you want to exempt from the
        Group Lifecycle policy settings and click **Add**. The selected containers are displayed
        in the **Container(s)** area. The Group Life Cycle schedule will not process the groups
        in these containers even when they are set as its targets.

   - **Apply policy only on following containers**

     1. Select this option and click **Add/Modify Container(s)**.
     2. In the **Add Container(s)** dialog box, select the container(s) you want to apply the
        Group Lifecycle policy to, and click **Add**. The selected containers are displayed in
        the **Container(s)** area. The Group Life Cycle schedule will only process groups in
        these containers in the identity store.

5. Click **Save**.

NOTE: If a container is set as target in a Group Life Cycle schedule while it is also listed as an
exempted container in the Group Lifecycle policy, the schedule does not process it. As a result,
different aspects of the Group Lifecycle policy, such as group expiry and group attestation does not
apply to groups in the container.

## Exempt Security Groups from Expiry

By default, security group expiration is disabled, indicating that security groups in the identity
store cannot be expired either manually or by the Group Life Cycle schedule. You must enable it to
expire security groups.

When a security group expires, its membership is cleared. However, Directory Manager keeps a backup
of its membership in the database.

NOTE: In a Microsoft Entra ID identity store, the security group expiry option also applies to
Office 365 groups.

**The security group expiration paradox**

A security group may grant or restrict access to network resources to its members. Enabling security
group expiry may pose a problem; the members of an expired security group will get undesired access
to network resources, or will be denied access to resources that were assigned to it.

To manage this, make sure your critical security groups reside in the OU that the expiry policy does
not apply to. Use the **Do not apply policy on following containers** option to set the OU aside
(see the Apply Policy on Specific Containers topic). In this way, those groups will not expire even
if you enable the expiry of security groups.

**To enable security group expiry:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Lifecycle**.
4. On the **Group Lifecycle** page, select the **Expire Security Groups** check box to allow the
   expiry of security groups in the identity store. (Security groups can be expired manually and by
   the Group Life Cycle schedule.)  
   Clear the check box to prevent the expiry of security group.
5. Click **Save**.

## Auto Delete Expired Groups

You can set Directory Manager to auto delete expired groups x number of days after expiry. These
wait days apply to both auto expired and manually expired groups. The Group Life Cycle schedule is
responsible for deleting expired groups. These auto deleted groups are called logically deleted
groups.

**To set wait days:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Lifecycle**.
4. On the **Group Lifecycle** page, select the **Delete Expired Groups** check box and type the
   number of days after which you want an expired group to be deleted, starting from the expiry
   date.
5. Click **Save**.

## Enable Group Usage Lifecycle

You can set the expiry of mail-enabled distribution groups based on their usage. It is as:

- If an expiring group is used in the last x number of days, it will be renewed by reapplying the
  expiry policy to it.
- If a group is not used in the last x number of days, its life will be reduced to 7 days.

The Group Usage Service schedule time stamps each mail-enabled distribution group with respect to
its last usage. The Group Life Cycle schedule extends or reduces the life of a group based on this
information.

**To enable group usage lifecycle:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Lifecycle**.
4. On the **Group Lifecycle** page, use the toggle button for **Extend** **or reduce the life of
   mail-enabled groups** to enable group usage lifecycle.
5. Select one of the following options:

   - **Extend group life if used in last x Days:** select this option button and specify x number
     of days in the box to prevent your active mail-enabled distribution groups from expiry. If an
     expiring group is used in the last x number of days, the Group Life Cycle schedule will renew
     it by reapplying its expiry policy.
   - **Reduce group life if not used in last x Days:** select this option button and specify x
     number of days in the box to reduce the life of mail-enabled distribution groups that have not
     received any email in the last x number of days.

     By default, this setting works for groups that are idle for 60 days since their creation,
     last renewal, or last usage. You can change the number of days anywhere from 1 to 360. The
     Group Life Cycle schedule will reduce the life of such groups to 7 days and send an email
     notification to the group owner or the default approver (for groups without owners),
     informing them of the approaching expiry. See the
     [Specify a Default Approver](/docs/directorymanager/11.1/workflows/overview.md#specify-a-default-approver)
     topic.

6. Click **Save**.

## Enable Group Attestation

You can enforce group owners to review and validate the attributes and membership of expiring groups
before renewing them. While enabling group attestation, consider the following:

- Group attestation does not apply to groups that have ‘Never Expire’ as their expiry policy.
- The Membership Life Cycle schedule must be defined for the identity store.
- Group attestation does not apply to excluded containers. See the Apply Policy on Specific
  Containers topic.
- With group attestation enabled, the Group Usage Lifecycle settings cannot be applied. If those
  settings are already defined, they get disabled when you enable group attestation. See the the
  Enable Group Usage Lifecycle topic.
- For attestation, group owners must use the Directory Manager portal.
- In the default portal template, a few fields (attributes) for group attestation are specified. You
  can add and remove fields to include those that you want group owners to validate and update.
- In case of a Dynasty, parent and child Dynasties have to be attested individually. Child Dynasties
  include both middle and leaf Dynasties. However, child Dynasties cannot be renewed after
  attestation, as they are renewed with their respective parent Dynasty.
- When attesting the membership of a parent Dynasty, child Dynasty, or a Smart Group, the members
  list does not include group objects for attestation. Only users and contacts are displayed. When
  attesting static groups, however, the members list also includes groups for attestation.

**To enable group attestation:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Lifecycle**.
4. On the **Group Lifecycle** page, use the toggle button for **Enforce group owners to attest
   expiring groups** to enable group attestation for the identity store.
5. Select the **Enforce user to verify each member** check box to enforce group owners to verify
   each group member one by one (by individually specifying the status of each member as _active_ or
   _inactive_). When this check box is not selected, group owners can select all members in a single
   click and specify their status as _active or inactive_.
6. You can specify the duration for which inactive members remain in group membership.

   - Select the **Specify member inactive period** check box and specify a duration in days (for
     example, 5). When the status of a member is set to _inactive_, he or she is instantly removed
     from group membership in the directory. In Directory Manager, however, he or she remains a
     group member till the specified number of days, starting from the inactivation date. During
     this period, the member can be activated (added back to group membership). If the member is
     not activated, the Membership Life Cycle schedule removes it from group membership in
     Directory Manager when the specified number of days lapse.
   - If you want inactive members to be instantly removed from group membership in the directory
     and in Directory Manager, do one of the following:

     - Select the **Specify member inactive period** check box and specify ‘0’ in the box.
     - Do not select the **Specify member inactive period** check box.

7. Click **Save**.

## Set Group Expiry Notifications

You can choose to send email notifications 1 day, 7 days, or 30 days before a group expires, to
inform the group owners (or the default approver when the group has no primary or additional owners)
about the approaching expiry.

**To set group expiry notifications:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Lifecycle**.
4. In the **Notification Options** section on the **Group Lifecycle** page, select any of the
   following options to specify when group expiry notifications should be sent:

   - 1 day before group expiration
   - 7 days before group expiration
   - 30 days before group expiration

5. Click **Save**.

**Group expiry notifications and the Group Lifecycle schedule**

The Group Life Cycle schedule handles group expiry notifications as follows:

- When no option is selected for expiry notifications, the schedule expires the groups in the
  identity store without notifying anyone.
- When notifications are enabled, the schedule notifies the primary and additional owners of the
  group, or the default approver (in case the group has no owner) about the approaching expiry. In
  case the notification could not be sent or no recipient is available, the schedule extends the
  expiry date of the group by 7 days on the group’s expiry day. It continues to do so until the
  notification is sent.
- When the **1 day before group expiration** option is selected for sending notifications and the
  Group Life Cycle schedule evaluates the group for the first time a day before its expiration date,
  Directory Manager will extend the group’s expiration date by 7 days.

**See Also**

- [Schedules](/docs/directorymanager/11.1/automation/overview.md)
- [ Group Expiry and Deletion](/docs/directorymanager/11.1/administration/services/overview.md)

# Configure History Tracking

In Directory Manager, history for an identity store is tracked at two levels:

- **When objects are created, modified, and deleted** - When you enable history tracking for an
  identity store, Directory Manager tracks all actions that are committed to the directory using:

  - Directory Manager portal (whether manually, through Synchronize jobs. or changes to object
    entitlements)
  - Management Shell cmdlets
  - Admin Center (actions performed by schedules only)
  - APIs

  You can choose to track specific actions, such as ownership change and object deletion. The
  table in the Track Specific Actions for an Identity Store topic lists some individual actions
  available for tracking.

  Use the _History_ node in the Directory Manager portal to view the history data that the history
  tracking function collects for objects. History for individual objects is also displayed in the
  respective object’s properties.

- **When changes are made to an identity store’s configurations** - Directory Manager enables you to
  track the changes made to an identity store’s configurations, which include the following:

  - identity store properties
  - workflows
  - security roles

  See the [Identity Store History](/docs/directorymanager/11.1/configuration/identity-stores.md) topic to view the tracked history data.

By default, history tracking is disabled. You can:

- Enable the history tracking function for an identity store.
- Track all or specific actions.
- Specify a period for retaining history data in the Directory Manager database. When the period is
  over, data is exported to CSV files and deleted from the database.

RECOMMENDED: History tracking can slow down system performance. For optimal performance, it is
recommended that you track only specific, more important actions and limit Directory Manager history
data storage to the most recent records.

See the [History in Directory Manager](/docs/directorymanager/11.1/administration/audit-history.md) and
[Event Logging](/docs/directorymanager/11.1/configuration/identity-stores.md) topics for additional information.

What do you want to do?

- Enable History Tracking for All Actions
- Track Specific Actions for an Identity Store
- Retain Complete History Data
- Retain History for a Specific Period
- Disable History Tracking

## Enable History Tracking for All Actions

You can choose to enable or disable history tracking for an identity store. When enabled, all
actions that users perform on directory objects using Directory Manager are tracked by default. For
example, when a user creates a group, adds members to it, changes its expiry date, and assigns
owners, history logs are generated in Directory Manager. Moreover, changes made to identity store
configurations, workflows, and security roles are also tracked.

**To enable history tracking:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. Use the toggle button in the top right corner to enable or disable history tracking for the
   identity store.

   - On enabling, _All Actions_ is auto selected in the **Track** drop-down list. This indicates
     that (a) all actions that users perform on directory objects and (b) changes made to identity
     store configurations, workflows, and security roles are tracked for the identity store.  
     To track specific actions, see the Track Specific Actions for an Identity Store topic.
   - Disabling history tracking does not delete already recorded history data.

5. Click **Save**.

## Track Specific Actions for an Identity Store

Rather than tracking all actions for an identity store, you can choose to track the most important
actions, such as changes to a group’s primary owner and object creation.

**To track specific actions:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, make sure history tracking is enabled. Them select _Selected Actions_ in
   the **Track** drop-down list. This enables the **Actions** area, where the following actions are
   listed:

   | Action                   | Description                                                                                                                                                                                                                                    |
   | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Ownership Change         | Changes to a group's primary ownership                                                                                                                                                                                                         |
   | Additional Owner Change  | Addition and removal of a group's additional owner(s)                                                                                                                                                                                          |
   | Expiration Policy Change | Any change to a group's expiry policy                                                                                                                                                                                                          |
   | Group Expire/Renew       | Expiration of a group and renewal of an expired group                                                                                                                                                                                          |
   | Query Change             | Changes to the query of a Smart Group or Dynasty                                                                                                                                                                                               |
   | Object Created           | Creation of a new object                                                                                                                                                                                                                       |
   | Object Deleted           | Deletion of an object                                                                                                                                                                                                                          |
   | Workflows history        | Addition, deletion, or modification made to a workflow. It does not track the deletion of workflow requests, that is tracked under the **Identity Store history** option.                                                                      |
   | Security Roles history   | Addition, deletion, or modification made to a security role                                                                                                                                                                                    |
   | Security Type Change     | Changes to a group's security type                                                                                                                                                                                                             |
   | Identity Store history   | Changes to an identity store’s settings. This includes the configurations available for an identity store. This option does not track changes made to workflows and security roles. It does, however, track the deletion of workflow requests. |

5. Click an action to track it for the identity store. The tile for the action changes to blue,
   indicating that it is tracked.
6. Click **Save**.

## Retain Complete History Data

You can set Directory Manager to retain history data for the identity store in the Directory Manager
database forever.

**To retain history data forever:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, select _All_ in the **History Options** drop-down list to retain all
   tracked history data in the database.

   NOTE: This setting may result in a massive increase in the database size and may affect
   Directory Manager performance.

5. Click **Save**.

## Retain History for a Specific Period

You can set Directory Manager to retain an identity store's history data for a specified length of
time in the database. When the retention period is over, the History Retention schedule archives
this data by moving it from the database to CSV files. See the
[History Retention Schedule](/docs/directorymanager/11.1/automation/overview.md) topic.

**To retain history data for a specific period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, select one of the following options in the **History Options** drop-down
   list:

   - Last 30 Days
   - Last 60 Days
   - Last 90 Days
   - Last 120 Days
   - Last 6 Months
   - Last 1 Year
   - Last 2 Years
   - Last 5 Years

5. Click **Save**.

## Disable History Tracking

On disabling history tracking for an identity store, Directory Manager does not log the history for
actions performed in the identity store. Disabling history tracking does not delete any already
recorded history data.

**To disable history tracking:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **History**.
4. On the **History** page, use the toggle button in the top right corner to disable history
   tracking for the identity store.
5. Click **Save**.

# Manage Membership Life Cycle Policies

A membership lifecycle policy enables you to specify a period, so that all members added or removed
from specific group(s) during that period are treated as temporary addition or removal respectively.

You can define a membership policy for groups and OUs. In case of an OU, the policy applies to all
groups in that OU. The Membership Life Cycle schedule is responsible for applying membership
lifecycle policies to groups.

NOTE: Membership lifecycle policies apply to static groups only. You cannot specify system critical
objects, Smart Groups, and Dynasties as target groups in a policy.

NOTE: When Smart Groups and Dynasties reside in a target OU, Directory Manager does not process
them.

## Types of Membership Lifecycle Policies

You can define two types of membership life cycle policies:

- **Add temporary** - Users added to group membership during a specified period will be temporary
  members, to be removed from membership at the end of the period. If this policy is extended to
  existing group members, then all members (including permanent members) will be removed from group
  membership when the period ends.
- **Remove temporary** - Users added to group membership during a specified period will be
  temporarily removed on addition, to be permanently added to group membership at the end of the
  period. If this policy is extended to existing group members, then all members (including
  permanent members) will be temporarily removed from group membership for the specified period. At
  the end of the period, they will be added back as permanent members.

## Key Features

Some main features of the membership lifecycle policies are:

- **Groups with nested membership** - If a policy is applied to a group with nested membership, it
  does not affect nested membership. For an OU with nested OUs, the policy applies to all nested
  OUs.
- **Groups with different settings for individual members** - When a policy is applied to a group
  having members with temporary addition or removal applied to them individually, then individual
  member settings take precedence over the group policy. Temporary addition or removal applied to
  individual members remains intact when you remove a policy from a group or OU.
- **Single policy rule** - A single policy can be applied to a group or an OU at a time. Hence, a
  group or OU cannot be set as the target in more than one policy. If you apply a policy to an OU
  that contains a group with a different policy already applied to it, then the group policy would
  be effective.
- **Notifications** - Directory Manager generates notifications when users are temporarily added or
  removed from a group’s membership. See the
  [Manage Membership Life Cycle Notifications](/docs/directorymanager/11.1/configuration/identity-stores.md#manage-membership-life-cycle-notifications)
  topic.

What do you want to do?

- Specify an ‘Add Temporary’ Membership Policy
- Specify a ‘Remove Temporary’ Membership Policy
- Edit a Policy
- Reapply a Policy
- Delete a Policy

## Specify an ‘Add Temporary’ Membership Policy

An _add temporary_ membership policy states that all members added to the target groups during a
certain period will be temporary. When the period ends, they will be removed from group membership.

**To define a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.  
   The **Group/OU Based Membership Lifecycle** page displays any group/OU based membership policy
   already defined.
4. Click **Add**; the **Add Group/OU Based Membership Lifecycle Policy** dialog box is displayed.
5. In the **Membership Type** drop-down list, select _Add Temporary_.
6. To specify a duration for the policy, select one of these options:

   - Click **Days** and in the box below, specify the number of days the policy will apply to
     target group(s), starting from today.
   - Click **Custom** and specify a date range in the **Starting Date** and **Ending Date** boxes.
     The starting date must be the current or future date.

7. Specify groups and OUs to apply the policy to.

   - In the **Add Group and OU to Membership Policy** area, enter a search string in the box. Group
     and OU names starting with the string are displayed as you type. Click **Add** for an object
     to add it to the policy.

     Or

   - Click **Advanced** to search an object by different parameters, such as name, display name,
     and email.

   The selected objects are displayed with their type (can be group or OU), display name, and
   distinguished name.

   - For a container, the policy applies to all groups residing in it and its sub-containers.
   - For a group, the policy does not apply to any groups that are nested into your selected
     group(s).

   To remove an object, click **Remove** for it.

8. Click **Add**.
9. On the **Apply Policy to Existing Members** message box, do one of the following:

   - Click **Yes** to extend the policy to include the target groups’ existing membership. All
     members of the target group(s) convert to temporary at the start of the period, and get
     removed from the respective group(s) when the period ends. Simply put, a group’s membership
     will be emptied when the period ends. Membership change is also logged in the group’s history.
   - Click **No** to apply the policy to new members only and exempt existing members.

10. The policy is displayed on the **Group/OU Based Membership Life Cycle** page. Click **Save**.  
    To view the impact of the policy, go to the properties of a target group in the Directory
    Manager portal.

## Specify a ‘Remove Temporary’ Membership Policy

A _remove temporary_ policy states that all members added to the target group(s) during a certain
period will be temporarily removed from membership. When the period ends, those members would be
added back as permanent members.

**To define a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.  
   The **Group/OU Based Membership Life Cycle** page displays any group/ OU based membership policy
   already defined.
4. Click **Add**; the **Add Group/OU Based Membership Lifecycle Policy** dialog box is displayed.
5. In the **Membership Type** drop-down list, select _Remove Temporary_.
6. To specify a duration for the policy, select one of these options:

   - Click **Days** and in the box below, specify the number of days the policy will apply to
     target group(s), starting from today.
   - Click **Custom** and specify a date range in the **Starting Date** and **Ending Date** boxes.
     The starting date must be the current or future date.

7. Specify groups and OUs to apply the policy to.

   - In the **Add Group and OU to Membership Policy** area, enter a search string in the box. Group
     and OU names starting with the string are displayed as you type. Click **Add** for an object
     to add it to the policy.

     Or

   - Click **Advanced** to search an object by different parameters, such as name, display name,
     and email.

   The selected objects are displayed with their type (can be group or OU), display name, and
   distinguished name.

   - For a container, the policy applies to all groups residing in it and its sub-containers.
   - For a group, the policy does not apply to any groups that are nested into your selected
     group(s).

   To remove an object, click **Remove** for it.

8. Click **Add**.
9. On the **Apply Policy to Existing Members** message box, do one of the following:

   - Click **Yes** to extend the policy to include the target groups’ existing membership. All
     membership of the target group(s) is temporarily removed at the start of the period, and is
     added back as permanent members when the period ends. Membership change is also logged in the
     group’s history.
   - Click **No** to apply the policy to new members only and exempt existing members.

10. The policy is displayed on the **Group/OU Based Membership Life Cycle** page. Click **Save**.  
    To view the impact of the policy, go to the properties of a target group in the Directory
    Manager portal.

## Edit a Policy

You can edit a policy to change its details.

Let’s assume you have an ‘add temporary’ policy with May 1 and May 31 set as starting and ending
dates. By May 14, User A and User B are added as temporary members, to be removed from membership on
May 31.

On May 15, you change the policy’s ending date to May 20. The new ending date will apply to members
that are added to the group hence onwards; it does not apply to User A and User B, who will still be
removed on May 31. However, if the policy is applied to existing members, User A and User B will
also be removed from membership on May 20.

**To edit a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.
4. On the **Group/OU Based Membership Life Cycle** page, click the ellipsis button for a policy and
   select **Edit**.
5. Make the required changes to the policy on the **Edit Group/OU Based Membership Lifecycle
   Policy** dialog box.

   - For an _add temporary_ policy, follow step 5 and onwards in the Specify an ‘Add Temporary’
     Membership Policy topic.
   - For a _remove temporary_ policy, follow step 5 and onwards in the Specify a ‘Remove Temporary’
     Membership Policy topic.

6. On the **Group/OU Based Membership Life Cycle** page, click **Save**.

## Reapply a Policy

You need to reapply a policy when:

- A new group is created in the policy’s target OU through the identity provider, such as Active
  Directory. To extend the policy to the new group, you have to reapply it.
- A group is moved to a target OU using Directory Manager or the identity provider.

You do not need to reapply a policy when a new group is created in the policy’s target OU through
Directory Manager. In this case, the policy is automatically applied.

Consider the following:

- If a policy has been defined for future dates and you add a group to a target OU before the start
  date, you must reapply the policy. Reapplying a policy when no group has been added to a target OU
  has no impact.
- If you add a group to a target OU of a policy that is currently active, you must reapply it to
  extend the policy to that group.
- When you reapply a policy after its effective dates, it has no impact.  
  **Example:** Let’s assume a policy is active from Jan. 20-31. Reapplying it on Feb 1 will have no
  impact.\

NOTE: When you move a group from a target OU in a policy (OUA) to an OU that is not the target of
any policy (OUB), the policy applied to the group in OUA will continue to apply to till its end
date.

**To reapply a policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.
4. On the **Group/OU Based Membership Life Cycle** page, click the ellipsis button for a policy and
   select **Reapply**.
5. On the **Reapply Membership Lifecycle Policy** dialog box, click **Yes** to reapply the policy to
   the target groups’ new and existing members or **No** to close the dialog box without reapplying
   the policy.
6. Click **Save**.

## Delete a Policy

Deleting a membership lifecycle policy has the following impact:

- When a policy is deleted before or after its effective dates, it has no impact.
- When a policy is deleted during its effective dates, all members of the target groups and those of
  groups in the target OUs become permanent members of the respective groups.

To delete a policy:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Membership Life
   Cycle**.
4. On the **Group/OU Based Membership Life Cycle** page, click the ellipsis button for a policy and
   select **Delete**.
5. The **Delete Membership Lifecycle Policy** message box is displayed.

   - On clicking **Yes**, all members of the target groups and those of groups in the target OUs
     become permanent members of the respective groups and the policy is deleted.
   - On clicking **No**, the policy is not deleted and continues to apply to the target groups and
     OUs.

6. Click **Save**.

**See Also**

- [Membership Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md)

# Configure a Messaging Provider

Directory Manager can create email addresses for mail-enabled objects (groups, users, and contacts)
with any mailing system. It can be an Exchange Server (2013/2016/2019) deployed in your environment
or an external email provider such as Exchange Online and Office 365.

Directory Manager supports the following messaging providers:

- Microsoft Exchange 2013/2016/2019
- Office 365
- Google Workspace
- Other external providers, such as Exchange Online, Office 365, Yahoo, Gmail, and Google Groups

When a messaging provider is not available in your environment or you want to restrict the creation
of mail-enabled objects in the identity store, select the _None_ option.

## Exchange Server Priority

In environments that run multiple versions of Microsoft Exchange, Directory Manager enables you to
set Exchange Server priority. All messaging provider-related actions will reiterate on Exchange
servers according to priority.

Let’s assume you have an environment with:

- Active Directory 2012
- Exchange 2013 with two servers: ExchA and ExchB, where you set Exchange server priority as ExchB
  and ExchA

When you create a mail-enabled group using Directory Manager, it will be created in Active Directory
first. Messaging provider-related configurations will go to ExchB. In case of failure, the system
will reiterate the same action on ExchA.

What do you want to do?

- Set Microsoft Exchange as Messaging Provider
- Set Office 365 as Messaging Provider
- Set Google Workspace as Messaging Provider
- Set an External Provider to Create Email Addresses
- Do Not Set a Messaging Provider

## Set Microsoft Exchange as Messaging Provider

Follow the steps to set Microsoft Exchange as a messaging provider.

Step 1 – In the Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settingsin the left pane. Then click **Messaging System**.
The Messaging System page is displayed.

Step 4 – In the Messaging Provider drop-down list, select the **Exchange version** that you want to
use.

Step 5 – Enter the domain name where the mail server resides in the Domain name box.

Step 6 – Enter the username and password of an authorized user account on the mail server in the
Username and Password boxes.

Step 7 – The Server Name column in the Server Status & Priority area lists the mail servers in the
environment. Directory Manager randomly assigns the highest priority to a server. You can change its
priority level and set the priority for other servers..

Step 8 – If your required server is not listed, click **Sync Again**.

- In the Server Status & Priority section, select the check box for the server you want to specify
  or change the priority for. Directory Manager checks the availability of the server and displays
  its status as _Online_ (available) or _Offline_ (unavailable) in the **Status** column.
- In the Priority box, select a priority level for the server, with ‘1’ representing the highest
  priority.

Step 9 – Click **Save**.

## Set Office 365 as Messaging Provider

Follow the steps to set Office 365 as a messaging provider.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On theIdentity page, click the ellipsis button for an identity store and select **Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Messaging System**.

Step 4 – On theMessaging System page, select _Office 365_ in the Messaging Provider drop-down list.

Step 5 – From the Cloud drop-down list, select the cloud where your Microsoft Entra ID tenant
exists.

Step 6 – Enter the domain name configured for Office 365 in the **Domain name** box.

Step 7 – In the ApplicationID box, enter the application ID assigned to the Directory Manager
application when you registered it in Microsoft Entra Admin Center.

Step 8 – In the Client box, provide the client secret value generated against the certificate
uploaded to Microsoft Entra Admin Center while registering the Directory Manager application.

Step 9 – Specify the path to the PFX certificate in the PFX Certificate box. For that, click
**Choose File** and browse for the file. Select it and click **Open**.  
As a prerequisite, the PFX certificate must be generated on the Directory Manager server and
exported to this machine for upload.

Step 10 – In the PFX Certificate Password box, enter the password that was created while exporting
the PFX certificate.

Step 11 – In the Server Status & Priority area, the **Server Name** box displays the name of the
mail server; the priority option does not apply to it. Directory Manager checks the availability of
the server and displays its status as _Online_ (available) or _Offline_ (unavailable) in theStatus
column.  
If the server is not listed, click **Sync Again**.

Step 12 – Click **Save**.

NOTE: When Office 365 is configured as the messaging provider for an Active Directory identity
store, Directory Manager creates distribution groups but does not populate their membership in
Office 365. Use AD Connect or any directory synchronize tool to replicate information (such as
membership info) between on-premises AD and Office 365.

## Set Google Workspace as Messaging Provider

Follow the steps to set a Google Workspace as a messaging provider.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Storespage, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Messaging System**.

Step 4 – On the Messaging System page, select _Google Workspace_ in the **Messaging Provider**
drop-down list.

Step 5 – In theService Account box, enter the service account name assigned to you when you created
your Google Workspace account.

Step 6 – Enter the username of an authorized user on the messaging provider in the Admin Username
box.

Step 7 – Specify the path to the p12 key file in the P12 Certificate box.  
 Click **Choose File** and browse for the file. Select the file and click **Open**.  
As a prerequisite, you must generate the p12 key file for your account in Google Cloud Console and
download it.

Step 8 – In the Server Status & Priority area, the Server Name box displays the name of the mail
server; the priority option does not apply to it. Directory Manager checks the availability of the
server and displays its status as _Online_ (available) or _Offline_ (unavailable) in the Status
column.  
If the server is not listed, click **Sync Again**.

Step 9 – Click **Save**.

## Set an External Provider to Create Email Addresses

Follow the steps to set an external provider to create email addresses.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Messaging System**.

Step 4 – On the Messaging System page, select _Other_ in the **Messaging Provider** drop-down list.

Step 5 – In the Domain Name box, enter the domain name of the external email provider, for example,
googlegroups.com.

Step 6 – In the Maximum Length Allowed for Email Alias box, specify the maximum number of characters
that an email alias can contain.

Step 7 – Enter a regular expression in the Email Alias Regular Expression box; the email alias
created in the external provider must satisfy this regular expression.  
Follow these links for information about regular expressions and their syntax:

- [Introduction to Regular Expressions](<https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/28hw3sce(v%3dvs.100)>)
- [Regular Expression Syntax Reference](https://msdn.microsoft.com/en-us/library/ms840427.aspx)

Step 8 – In the Enter Example to Validate Regular Expression box, enter an email alias as an
example, and then click **Validate** to verify that the example satisfies the regular expression.

Step 9 – Click **Save**.

## Do Not Set a Messaging Provider

Follow the steps to not set a messaging provider.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** underSettings in the left pane. Then click **Messaging System**.

Step 4 – When no messaging provider is available in your environment or you want to prevent users
from creating mail-enabled objects in the identity store, select _None_ in the Messaging Provider
drop-down list.

Step 5 – Click **Save**.

**See Also**

- [Configure an SMTP Server](/docs/directorymanager/11.1/configuration/identity-stores.md)

# Manage Group Membership Settings

Directory Manager enables you to update group membership in the following ways:

- Add members manually (only recommended for static groups)
- Auto update Smart Groups and Dynasties using a Smart Group Update schedule.
- Import members using an external data source

To avoid large, unforeseen changes to Smart Group and Dynasty memberships, you can configure the
following group membership setting for an identity store:

- Specify the maximum number of members for Smart Groups and Dynasties. Then determine the action to
  take when the member limit is exceeded, such as not to update or break the membership into
  smaller, nested groups.
- Define a criterion for out-of-bounds exceptions to raise alerts for group owners.

What do you want to do?

- Set the Maximum Number of Group Members
- Manage Orphan Nested Groups
- Set a Group Update Threshold

## Set the Maximum Number of Group Members

You can set the maximum membership limit for groups and set Directory Manager to do one of the
following when an update to a group breaches this limit.

- Not to update the group membership, thereby retaining the old membership.

  Or

- Create nested groups to accommodate membership. Nested groups are created as sub-groups of the
  group being updated. This simplifies permissions by allowing sub-groups to inherit permissions
  from the parent group.

**Example:**

Let’s assume you set the maximum membership limit to 500 and opt for nested groups when membership
exceeds this limit.

**Scenario 1**: On update, 485 objects are fetched to be added to Group A’s membership. Since the
count is less than 500, the objects are directly added as group members.

**Scenario 2:** On the next update, 620 objects are fetched to be added to Group A’s membership.
Since the count exceeds 500, it breaks the membership into 2 child groups (Group 1 with 500 members
and Group 2 with 120 members) and nests them into Group A. Hence, Directory Manager checks the
member count and takes necessary action before adding members to the group.

NOTE: In case of an Office 365 group, the option to break the membership into child groups has the
following impact - An Office 365 group (Group A) will be updated according to the Smart Group update
process. However, when the maximum membership limit is hit, the update process will create child
group(s) and try to add them as members of Group A. Since an Office 365 group cannot have groups as
members, Group A’s membership will be empty. The child groups will continue to exist but without any
link to Group A.

**To set group membership limits:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. In the **Maximum membership per group** box on the **Out of Bounds** page, enter the number of
   maximum members that a Smart Group or Dynasty can contain.
5. Select one of the following options for **When threshold reached:**

   - **Do not update:** to prevent any action when the maximum membership limit is hit on update.
     As a result, the group will not be updated and will retain its old membership.
   - **Nest into child groups:** to create nested child groups when the maximum membership limit is
     reached. Each nested group, in turn, cannot have more than the maximum number of members
     specified. Nested groups are displayed in Directory Manager as members of the parent group.

6. Click **Save**.

## Manage Orphan Nested Groups

An orphan nested group is one that has its relationship cut-off from the parent group, since this
orphan group has no members to bind it to the parent group.

This may happen, for example, when the membership of a group decreases, or the maximum membership
limit is increased. As a result, when group membership is updated, members from one or more nested
child groups are emptied, leaving the nested groups orphan.

You can choose to delete or retain the orphan nested groups in the identity store.

**To delete orphan nested groups:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. On the **Out of Bounds** page, select the **Delete orphan nested groups** check box to delete
   nested groups that become orphan on membership update.  
   To retain orphan nested groups, do not select the check box.
5. Click **Save**.

## Set a Group Update Threshold

Out-of-bounds exceptions prevent large, unforeseen membership changes to groups. When an
out-of-bounds exception occurs, Directory Manager does not update group membership and notifies the
intended recipient(s) by email. If they deem the change as valid, they can update the group manually
in the Directory Manager portal.

NOTE: 1. Settings in the **Threshold** section apply in case of membership update through a Smart
Group Update schedule. On manual update, these settings have no impact.  
 2. If the group is not updated manually after an out-of-bounds exception, the changes remain
pending and the group will not be updated in future when the Smart Group Update job runs.  
 3. Out-of-bounds exception notifications are sent as per notification settings configured for the
Smart Group Update schedule responsible for updating the respective group.

**To set a group update threshold:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Out of Bounds**.
4. On the **Out of Bounds** page, use the toggle button for **Do not update and alert** to monitor
   out-of-bounds exceptions in group memberships and enable alerts in case an out-of-bounds
   exception occurs.
5. Provide values for the following:

   1. In the **Percent change in membership exceeds** box, enter a percentage of membership change
      that, when exceeded, raises an out-of-bounds exception.

      Membership change is the difference between new membership and the existing membership.
      Percentage change in membership is calculated by the following formula:  
       (newMemberCount - oldMemberCount) x 100 / oldMemberCount

      Let’s assume you specify 20 in this field. When group membership changes by 20% or more,
      Directory Manager considers it as an exception.

      So, if Group A has 500 members and 200 new members are to be added, the formula will be as  
       (newMemberCount - oldMemberCount) x 100 / oldMemberCount  
       (700-500) x 100 / 500 = 40

      Since 40 is greater than 20, Directory Manager treats it as an out-of-bounds exception.

   2. In the **And either current or new membership exceeds** box, type the number of current or
      new memberships. If the current or new membership of a group is equal or less than the
      specified number, Directory Manager does not raise an out-of-bounds exception for the group,
      even when the change percentage is exceeded. This allows you to ignore changes to small
      groups.

      For example, you set the change percentage to 20 and specify 25 in the **And either current
      or new membership exceeds** box. It works as follows:

      - For current (existing) membership - When the existing membership of a group is equal or
        less than 25, Directory Manager does not trigger out-of-bounds for this group when the
        change percentage is exceeded (is greater than 20). For example, adding 3 new members to a
        group of 10 members would not trigger an exception. Directory Manager will ignore the
        change percentage and update the group.
      - For new membership - When, say 12 new members are added to a group with 10 existing
        members, the new membership reaches 22, which is less than 25. Even though the change
        percentage is exceeded, Directory Manager will not raise an exception and update group
        membership.

6. Click **Save**.

**See Also**

- [Manage Dynasty Settings](/docs/directorymanager/11.1/administration/services/overview.md)
- [Smart Group Update Schedule](/docs/directorymanager/11.1/automation/overview.md)

# Set up messages for your users

Each Password Policy Enforcer password policy has multiple message templates, one for each of the
Password Policy messages.

- Password Policy – Displays the password policy guidelines on that have the Netwrix Password Policy
  Enforcer installed.
- [POLICY] – Customize the text for the active rules.
- [LIVE_POLICY] – Password Policy messages can be configured to display live feedback for the active
  rules to users as they reset or change their passwords. This feature enables users to see if their
  passwords meet the requirements of the policy set by the organization.
- Rejection Reason – Displays why an intended password was rejected.
- Generic Rejection – Displays if Password Policy Enforcer does not have a specific reason for the
  rejection, generally because the password does not comply with the Windows password policy

Follow the steps to set up message template for active rules.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , click **Edit**.

Or

Click on a policy name to open the policy configuration page.

Step 5 – Open the **Messages** tab.

Step 6 – Select the message language from the drop-down list. You can set messages for multiple
languages.

Step 7 – Edit the message templates in the Password policy, [POLICY], [LIVE_POLICY], Rejection
Reason, and Generic rejection messages.

# Netwrix Password Policy Enforcer Policies

Netwrix Password Policy Enforcer (PPE) helps secure your network by ensuring users set strong
passwords. You can now enforce PPE policies to Active Directory domain accounts when they change and
reset their passwords in Directory Manager.

Remember, You can only use PPE policies in Directory Manager when Password Policy Enforcer 11 is
deployed on your domain controller.

The PPE policies use rules to decide if it should accept or reject a password. You can assign these
policies to users, groups, and containers (Organizational Units). You can also:

- define a different set of rules for passphrases
- define a default password character set
- Select a template based on the requirements of the most popular regulatory frameworks
- provide the name of an executable you want to execute upon change and reset password functions in
  Directory Manager.

Directory Manager also has its Password policy which can be defined at an identity store level and
for a particular security role in that identity store. At one point in time, you can either apply
Directory Manager Password policy or PPE policies. See the
[Directory Manage Password Policy ](/docs/directorymanager/11.1/administration/security-policies.md)for additional
information.

In Directory Manager, you can

- Add a PPE Policy
- Edit a PPE Policy
- Delete a PPE Policy

## Add a PPE Policy

Follow these steps to add a new policy

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Select the domain of the connected identity store from the **Select Domain** box for which
you wish to add a policy. No PPE policies found message is displayed on the page if no policy is
defined so far.

Step 5 – Click the **Add Policy** button.

Step 6 – Password Policy Enforcer contains the out-of-the-box policy templates based on the
requirements of the most popular regulatory frameworks. Select one of the following:

- Policy – Blank policy with no configurations
- CIS Password Policy Guide – Center for Internet Security (CIS) Password Policy Guide – See the
  [CIS Password Policy Guide ](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)article
  for additional information.
- CIS Password Policy Guide MFA – Center for Internet Security (CIS) Password Policy Guide MFA – See
  the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- CISA – Cybersecurity Information Sharing Act (CISA)
- CJIS – minal Justice Information Services (CJIS) Security Policy
- CMMC – Cybersecurity Maturity Model Certification (CMMC)
- DFARS – Defense Federal Acquisition Regulation Supplement (DFARS)

After the selection of a policy template, the Add Policy page is displayed.

Step 7 – Click **Add**.  
The policy gets listed on PPE Policies page by the name of the template selected while adding the
policy. See the [Set up policy properties](/docs/directorymanager/11.1/administration/services/overview.md) topic for additional information on
renaming a policy.

## Edit a PPE Policy

Once you add a Password Policy Enforcer policy either on the basis of a blank template or on the
basis of pre-configured template, you can edit the policy as per your needs.

Follow the steps to edit a PPE policy.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , you want to edit and click
**Edit**.

Step 5 – The Edit Policy page displays, while editing you can

- [Set up Rules](/docs/directorymanager/11.1/administration/services/overview.md)
- [Assign Policies to Users, Groups & Containers](/docs/directorymanager/11.1/administration/services/overview.md)
- [Enable the use of an optional passphrase](/docs/directorymanager/11.1/administration/services/overview.md)
- [Set up policy properties](/docs/directorymanager/11.1/administration/services/overview.md)
- [Set up messages for your users](/docs/directorymanager/11.1/administration/services/overview.md)

Step 6 – After setting up the policy, click **Update**.

When users of the specified domain reset or change their password, they can only do that as per the
settings of the applied PPE policy.

## Delete a PPE Policy

If a PPE policy is no longer needed, you can delete it.

Follow the steps to delete a PPE policy

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon against the policy you intend to delete.

Step 5 – Select **Delete.** A warning confirmation is displayed when you delete a policy.

When you delete a policy from Directory Manager it is deleted from the policy OU of Password Policy
Enforcer on the domain the policy will not be available to PPE users as well.

# Enable the use of an optional passphrase

Passphrases have gained popularity in recent years as they can be more difficult to crack and easier
to remember than passwords. The difference between passwords and passphrases is their length.
Passwords are rarely longer than 15 characters, but passphrases commonly contain 20 or more
characters.

Complexity and dictionary rules are less important for passphrases as passphrases rely primarily on
length for security. You may want to relax some password policy requirements for passphrases.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , click **Edit**.

Or

Click on a policy name to open the policy configuration page.

Step 5 – Open the **Passphrase** tab.

Step 6 – Select the number of characters the password must contain before the selected rules are
disabled.

Step 7 – Select the rules to be disabled.

Disabled rules are not counted when calculating the compliance level, but Password Policy Enforcer
accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This
ensures that passphrases can be used, even if they do not meet the compliance level when Password
Policy Enforcer is configured to disable one or more rules for passphrases.

NOTE: Opinions differ on how long a passphrase needs to be. Even a 30 character passphrase can be
weaker than a well-chosen password. Do not disable too many rules under the assumption that length
alone makes up for the reduced complexity.

# Set up policy properties

Sets the properties for the selected policy.

Follow the steps to set up policy properties.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , click **Edit**.

Or

Click on a policy name to open the policy configuration page.

Step 5 – Open the **Properties** tab.

- Name – Each policy must have a unique name. To change the name of a policy, type the new name in
  the **Name** box.

- Notes – Enter any **Notes** about the policy.

- Default Character Set – Select the **Default characters set**. The default value (Netwrix Password
  Policy Enforcer) requires users to comply with rules that use the Password Policy Enforcer
  character set. Choose the alternate option (Windows) to have users comply with rules that use the
  Windows character set.

- Characters classified as a space, punctuation, control or blank by Windows are included in the
  Special character set. If these characters are also included in some other set by Windows (for
  example, a superscript one is both a decimal digit and punctuation), then Password Policy Enforcer
  only includes them in the Special character set when the Windows character set is selected.
- When using the Password Policy Enforcer character set, all characters above ANSI 126 are included
  in the High set. When using the Windows character set, a character is only included in the High
  set if it is above ANSI 126 and not included in any other set by Windows.

- Password must comply with – Select the number of rules for **Passwords must comply with** from the
  drop-down list to specify the required compliance level for this policy. The default value **(all
  the rules**) requires users to comply with all enabled rules. Choose an alternative option if
  Password Policy Enforcer should enforce a more lenient password policy. The
  [Age (Min) Rule](/docs/directorymanager/11.1/administration/services/overview.md) and [Age (Max) Rule](/docs/directorymanager/11.1/administration/services/overview.md) rules
  are excluded from compliance level calculations. See the [Set up Rules](/docs/directorymanager/11.1/administration/services/overview.md) topic
  for additional information.

  When setting the compliance level, consider that some rules may be disabled when a user enters a
  passphrase. See the [Enable the use of an optional passphrase](/docs/directorymanager/11.1/administration/services/overview.md) topic for
  additional information. Password Policy Enforcer accepts passphrases that comply with all
  enabled rules, irrespective of the compliance level. This ensures that passphrases can be used,
  even if they do not meet the compliance level when Password Policy Enforcer is configured to
  disable one or more rules for passphrases.

- You can execute a program whenever a user successfully changes or resets their password. Enter the
  full path to the executable in the Execute the Program When Password is Changed text box.

# Character (Granular) Rules

Password Policy Enforcer has seven Character rules that reject passwords if they contain, or do not
contain certain characters. These rules can increase password strength or ensure password
compatibility with other systems.

All the Character rules work identically, but each has their own default character set. A character
set is the collection of characters that each rule searches for when checking a password. You can
use the Character rules with their default character sets, or define your own. By default, the
Password Policy Enforcer selects the Password Policy Enforcer character on the Set Priorities page.

- Enable the **Characters (Granular)** button to enable the Characters rule.
- Character First – Select character rule(s) for the first character of password

  - Select the **Begin** option if this rule should ensure that first character of password should
    start with the certain characters of the selected rule(s).
  - Select **Not Begin** option if this rule should ensure that the first character of password
    should not start with the certain characters of the selected rule(s).

- Character Last – Select character rule(s) for the last character password

  - Select the **End** option if this rule should ensure that the last character of password
    should end with the certain characters of the selected rule(s).
  - Select the **Not End** option if this rule should ensure that the last chracter of password
    should not end the certain character of the selected rule(s).

- Characters (Alpha Lower), Characters (Alpha Upper), Character (Alpha), Character (Custom),
  Characters (High), Characters (Numeric), character (Special)

  For each selected character rule, select whether they **Contain** or **Not contain** the
  specified number of characters.

  - Select the **contain** option if this rule should ensure that new passwords contain certain
    characters. Only one character is required by default, but you can specify a different value
    by choosing the required number of characters from the drop-down list beside the **contain**
    option.
  - Select the **not contain any...** option if this rule should ensure that new passwords do not
    contain certain characters.

  You can further restrict the rule by defining positions or embedding characters. Click the +
  sign by the character set.

  - Select **In position**

    If you want to restrict this rule to certain character positions, choose the starting
    position from the first entry box and the ending position from the second entry box. For
    example, you may want to enforce a rule that requires a numeric character in the second
    character position to maintain compatibility with some other system.

  - Select **Embedded**

    Select the **Embedded** check box if users are required to embed these characters within
    their passwords. For example, the passwords "12hello", "1hello", and "hello$987" do not
    contain any embedded numeric characters, but these passwords do contain embedded numeric
    characters (shown in bold type): "he**7**llo", "4he**3**llo", "23hello**7**$45". Embedded
    numeric and special characters can help to protect passwords from cracking attacks.

### Enforcing Complex Character Requirements

Character rules can be combined to enforce complex password requirements. For example, you may need
to enforce a policy such as "passwords must contain a numeric character, but not in the first two
positions" to ensure compatibility with some other system.

This is done by using two of the Character rules:

Set **Characters (Complexity)** to require 1 Numeric character.

Set **Characters (Granular)** to not contain numeric values in the first two positions.

# Characters (Complexity) Rule

The Complexity rule rejects passwords that do not contain characters from a variety of character
sets. Using several character types can make passwords more difficult to crack.

- Enable the **Characters (Complexity)** button to enable the Character Complexity rule.

- Must contain characters from at least `number` of character sets – Select the number of required
  character sets. Passwords are rejected if they do not contain characters from at least the
  specified number of character sets.

- Select the available character sets. The number of available character sets must be equal to or
  greater than the number of required character sets.

- Select the **Passwords must always comply with this rule** check box to make the Complexity rule
  mandatory. Password Policy Enforcer rules are mandatory by default, but can be made optional by
  changing the Reject passwords that do not comply with value in the Policy Properties page. A
  mandatory rule can still be disabled when a passphrase is used. See the Passphrases topic for
  additional information.

NOTE: The Complexity rule uses custom character set definitions from the Character rules, even if
the Character rules are disabled.

This default character set contains the following:

| Rule        | Default character set                              |
| ----------- | -------------------------------------------------- |
| Alpha Lower | Lowercase alphabetic (a - z)                       |
| Alpha Upper | Uppercase alphabetic (A - Z)                       |
| Alpha       | Uppercase and lowercase alphabetic (a - z & A - Z) |
| Numeric     | Numerals (0 - 9)                                   |
| Special     | All characters not included above                  |
| High        | All characters above ANSI 126                      |
| Custom      | No default characters                              |

# Compromised Rule

The Compromised rule rejects passwords from prior breaches. These passwords should not be used as
they are vulnerable to credential stuffing attacks.

- Enable the **Compromised** button to enable the Compromised rule.

- Type path to your compromised passwords base files into the text box. The path can contain
  environment variables like %SystemRoot%.

  **CAUTION:** Using shared hash files degrades performance, and could jeopardize security.

# Dictionary Rule

The Dictionary rule rejects passwords that are vulnerable to guessing, hybrid, and precomputed
attacks. These attacks can crack weak passwords in seconds, and they can be very effective if
passwords are based on common words.

There are two Dictionary rules in each password policy. You can use the second rule with a different
dictionary file, or to enforce a more tolerant policy for passphrases by disabling the primary rule
for long passwords.

- Enable the **Dictionary** button to enable the Dictionary rule.
- The Dictionary file box displays name **Dict.txt** of a sample file, it is installed in the
  **\Program Files\Password Policy Enforcer** folder. This file is sorted and ready to use. It
  contains approximately 257,000 words, names, and acronyms.
- If you wish to add a secondary dictionary, **Click** +Add Dictionary to add a secondary
  dictionary.
- **Type** a path of the secondary dictionary file in the Secondary dictionary box.  
  You can specify rules for both the dictionaries as follows:

  - Select the **Detect inclusion of non-alpha characters** check box if Password Policy Enforcer
    should remove all non-alphabetic characters during analysis. This allows Password Policy
    Enforcer to reject passwords such as "myp8asswor8d."
  - Select the **Detect character substitution** check box if Password Policy Enforcer should
    reject passwords that rely on character substitution to comply with this rule.
  - Select the **Bi-directional analysis** check box if Password Policy Enforcer should
    additionally test passwords with their characters reversed. Enabling bi-directional analysis
    stops users from circumventing this rule by reversing the order of characters in their
    password. For example, a user may enter "drowssapym" instead of "mypassword".
  - Select the **Wildcard analysis** check box if Password Policy Enforcer should search for
    wildcard templates in the dictionary file. Wildcard templates are specially formatted
    dictionary words that Password Policy Enforcer uses to reject a range of passwords. The
    Dictionary rule supports two wildcard template formats:

    | Format | Example   | Description                                                                      |
    | ------ | --------- | -------------------------------------------------------------------------------- | --- | --- | --- | --------- | --- | ------- | --- | --- | --- | --- | --- | --- | --------------------------------------------------------------------------------- | --- | ---------------------------------------------------------------------------------------- | --- |
    | Prefix |           |                                                                                  |     | --- |     | !!BAN\*!! |     | !!2\*!! |     |     |     |     | --- |     | Rejects passwords that start with BAN. For example: band, banish, ban, bank, etc. |     | Rejects passwords that start with the numeric character 2. For example: 2ABC, 2123, etc. |     |
    | Suffix | !!\*ING!! | Rejects passwords that end with ING. For example: pushing, howling, trying, etc. |

    Partial matching is performed even if Wildcard analysis is disabled. For example, the
    dictionary word "password" will reject the passwords "My**Password**$", "**Password**100",
    and "12**password**34" even if Wildcard analysis is disabled.

    Wildcard analysis should only be used to limit matching to the characters at the start or
    end of a password.

    Enabling Wildcard analysis slightly increases search times, so only enable this option if
    the dictionary file contains wildcard templates. The sample dictionary file included with
    Password Policy Enforcer does not contain any wildcard templates.

  - Choose a value from the Tolerance drop-down list to specify the maximum number of consecutive
    matching characters that Password Policy Enforcer will tolerate before rejecting a password.
    For example, the dictionary word "**sword**", and the password "4my**sword**%" contain five
    consecutive matching characters (shown in bold type). Password Policy Enforcer will reject
    this password if the tolerance is four (or lower), and accept it if the tolerance is five (or
    higher).

# History Rule

The History rule rejects passwords that are identical to recently used passwords. Password reuse
should be avoided because it defeats the purpose of regular password changes. Password Policy
Enforcer can stop users from reusing passwords for a specified number of password changes or a
number of days.

- Enable the **History** button to enable the History rule.

- Select one of the options:

- One of the last `<_number_>` of password – stop passwords from being reused for a specified number
  of password changes. Choose the number of password changes from the drop-down list.

- A password used in the last `<_number_>` of days – stop passwords from being reused for a
  specified number of days. Type the number of days in the text box.

- Hash function – Choose an item from the drop-down list.

  Argon2 is recommended for best security. The Argon2 option uses 100,000 times more computing
  power to create a hash, so an attacker needs 100,000 more computing power to crack Argon2
  hashes. Argon2 increases password change times by 400%, so a domain controller that can handle
  1,000 password changes a minute with SHA-256 can be expected to handle 250 password changes a
  minute with Argon2. All numbers are approximate. Use Argon2 if your domain controllers can
  handle the load.

  NOTE: Changing the **Hash function** does not modify existing history records. It sets the
  function to be used for new password history records. If a user has Argon2 and SHA-256 hashes in
  their password history, then Password Policy Enforcer calculates both the Argon2 and SHA-256
  hashes during a password change to ensure the new password is not in the password history.

- Enforce this rule when a password is reset – The History rule is normally not enforced when a
  password is reset. Select the check box to override the default behavior.

# Length Rule

The Length rule rejects passwords that contain too few or too many characters. Longer passwords are
generally stronger, so only specify a maximum password length if password compatibility must be
maintained with a system that cannot accept long passwords.

- Enable the **Length** button to enable the Length rule.
- Select one of the options

  - At least `number of` characters – specify the minimum number of characters that passwords must
    contain. Choose the minimum number of characters from the drop-down list.
  - No more than `number of` characters – specify the maximum number of characters that passwords
    can contain. Choose the maximum number of characters from the drop-down list.
  - Between `number` of `number` characters – specify the minimum and maximum number of characters
    that passwords can contain. Choose the minimum number of characters from the first drop-down
    list, and the maximum from the second drop- down list.

# Age (Max) Rule

The Maximum Age rule forces users to change their passwords regularly. This decreases the likelihood
of an attacker discovering a password before it changes. This rule can only be enforced by PPE
policies.

- Enable/Disable button – Enable the **Age (Max)** rule button to enable the Maximum Age rule.

- Users must change password after days – Choose a value from the drop-down list to specify how many
  days must elapse before passwords expire.

- Delay expiration by `<_number of days_>` if the password contains `<_number of characters_>` or
  more characters – You can encourage users to choose longer passwords by extending the lifetime of
  their password if it exceeds a certain length. To enable this feature, choose a higher value from
  the number of days drop-down list and a minimum length from the number of characters drop-down
  list. Passwords that contain the required number of characters do not expire until the number of
  days (higher) days value. If both days values (i.e. number of days in Users must change password
  after days and number of days in this in this field) are identical, then passwords will expire
  after the specified number of days, irrespective of length.

  NOTE: When the Maximum Age rule is configured to delay the expiry of longer passwords, it
  creates an Active Directory security group called "PPE Extended Maximum Age Users". Password
  Policy Enforcer uses this group to identify which users are eligible for a delayed password
  expiry. Users are added and removed from the group automatically. You can move and rename this
  group, but do not change the pre-Windows 2000 name. Contact Netwrix support if you must change
  the pre-Windows 2000 name. Change a Password Policy Enforcer configuration setting (any setting)
  after moving or renaming the group to trigger a cache update in Password Policy Enforcer.
  Password Policy Enforcer recreates this group if you delete it. To stop creating a group, make
  the two days values equal in all policies.

- Mode – Mode Choose a value from the Mode drop-down list to specify how Password Policy Enforcer
  handles expired passwords. The Standard mode forces all users with expired passwords to change
  their password during logon. The Transitional modes force a percentage of users with expired
  passwords to change their password during logon. The Warning mode warns users that their password
  has expired without forcing them to change it.

  Use the Warning and Transitional modes to gradually introduce a new password policy. These modes
  reduce the number of forced password changes, allowing the help desk to deal with any extra
  calls relating to the new policy. Switch to the Standard mode after most users have had a chance
  to change their password.

  It takes approximately 50 days for all users with expired passwords to be forced to change them
  in the 2% Transitional mode (2% every day). The 5% Transitional mode reduces this to 20 days,
  and the 10% Transitional mode further reduces it to 10 days. The selection algorithm is
  randomized, so these are estimates only. You must switch to the Standard mode to ensure that all
  old passwords will expire.

  Users with expired passwords are always prompted to change their password, even in the
  Transitional and Warning modes. Users can ignore the prompt to change their password unless they
  are being forced to change it.

  NOTE: The password expiry prompt is a Windows client feature, and is displayed even if the
  Password Policy Client is not installed. Windows clients display the prompt 5 days before
  passwords expire by default. You can alter this behavior in the Windows Group Policy security
  settings. See the
  [Interactive logon: Prompt user to change password before expiration](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/interactive-logon-prompt-user-to-change-password-before-expiration)
  Microsoft article for additional information.

  Password Policy Enforcer expires passwords at 1:00 AM every day on the domain controller holding
  the PDC emulator operations master role. It sets "User must change password at next logon" for
  users whose password has expired, or is due to expire on that day. Password Policy Enforcer does
  not expire passwords if the Maximum Age rule is in Warning mode, or for users with "Password
  never expires" set in Active Directory. Some passwords will not expire immediately when the
  Maximum Age rule is in a Transitional mode.

## Set up Email

Click the **Set up email** to configure the e-mail message options.

Type the _name_ and _email address_ you wish to appear in the email's From field in the From text
box. The correct format is "Display Name" `<mailbox@domain.com>`

Type the text for the email's **Subject** field in the Subject text box.

Type the _body_ of the email in the large text box.

### Set up SMTP

Currently not supported .

## Expired Password Log

If you want to record every event of an expired password in a log check the Log event for every
expired password check box. It will record the event in a log named at the following path.

# Age (Min) Rule

The Minimum Age rule stops users from quickly cycling through a series of passwords in order to
evade the History and Similarity rules. This rule can only be enforced by domain policies.

- Enable the **Age (Min)** button to enable the Minimum Age rule.

- Select the number of days before a user can change their password.

NOTE: The Minimum Age rule is unique because users cannot comply with it by choosing a different
password; they must wait until the required number of days has elapsed.

# Set up Rules

Netwrix Password Policy Enforcer uses rules to decide if it should accept or reject a password. Each
policy has rules that are configured independently of the rules in other policies.

Follow the steps to define rules a PPE policy

Step 1 – The Rules tab opens by default and the following rules are listed in the left pane.

- [Age (Max) Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Age (Min) Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Characters (Complexity) Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Character (Granular) Rules](/docs/directorymanager/11.1/administration/services/overview.md)
- [Compromised Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Dictionary Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [History Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Length Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Patterns Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Repetition Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Similarity Rule](/docs/directorymanager/11.1/administration/services/overview.md)
- [Unique Characters Rule](/docs/directorymanager/11.1/administration/services/overview.md)

A button beside a rule indicates that the rule is enabled (being enforced) or not. Click a rule to
set the rule's properties and save it.

Prior to setting up the rules for the policy, review the sections on Detecting Character
Substitutionand Tolerance .

## Detecting Character Substitution

Character substitution is a technique used by some users to improve password quality. They replace
some alphabetic characters with non-alphabetic characters that have a similar appearance. For
example, "sold" becomes "$old". Many of these substitutions are well known and do little to improve
password strength.

Some Password Policy Enforcer rules have a Detect Character Substitution check box. When this check
box is selected, Password Policy Enforcer tests passwords with, and without character substitution.
This stops users from circumventing the rule by substituting some characters. Password Policy
Enforcer detects these common character substitutions:

| Original | Substituted    |
| -------- | -------------- |
| A a      | `^ @`          |
| B b      | `8`            |
| C c      | `( or {  <  [` |
| D d      | `) or }  >  ]` |
| E e      | `3`            |
| G g      | `6 or 9`       |
| I i      | `! or 1`       |
| O o      | `0 or (zero)`  |
| S s      | `$ or 5`       |
| T t      | `+ or 7`       |
| Z z      | `2`            |

## Tolerance

Some Password Policy Enforcer rules have a Tolerance drop-down list that allows you to control how
strictly the rule is enforced. Tolerance is normally expressed as the maximum allowable number of
consecutive matching characters in the password and some other parameter. Password Policy Enforcer
rejects a password if the specified tolerance is exceeded. For example, the logon name
"mary**jones**", and the password "**Jones**town" contain five consecutive matching characters
(shown in bold type). Password Policy Enforcer will reject this password if the tolerance for the
User Logon Name rule is four (or lower), and accept it if the tolerance is five (or higher).

The User Logon Name, User Display Name, Similarity, and Character Patter rules have an Auto
tolerance option. Setting the tolerance to Auto instructs Password Policy Enforcer to only reject
passwords that contain the entire parameter being compared. This is very useful when the length of
the comparison parameter is unknown. For example, if you want Password Policy Enforcer to reject
passwords that contain the user's entire logon name, then you cannot specify a fixed tolerance
unless all logon names have the same length. Setting the tolerance to Auto allows Password Policy
Enforcer to calculate an appropriate tolerance during every password change.

Password Policy Enforcer sets the tolerance to the length of the comparison parameter minus one. The
table below shows some parameter values and the calculated tolerance. Password Policy Enforcer
rejects a password if it contains all the text in the Value column (or a derivative of it if
character substitution detection or bi-directional analysis is enabled).

| Rule              | Parameter         | Value      | Tolerance |
| ----------------- | ----------------- | ---------- | --------- |
| User Logon Name   | Logon name        | maryjones  | 8         |
| User Display Name | Display name      | Mary Jones | 9         |
| Similarity        | Current password  | oldpass    | 6         |
| Character Pattern | Character pattern | abcdefgh   | 7         |

Password Policy Enforcer's Auto tolerance calculation has a minimum limit to stop passwords from
being rejected when the comparison parameter is very short. The limit is set to two characters by
default, so Password Policy Enforcer accepts passwords that contain the parameter value if the
comparison parameter only contains one or two characters. Contact Netwrix support if you need to
change the minimum limit.

# Patterns Rule

The Patterns rule rejects passwords that contain character patterns such as "abcde". Character
patterns weaken the password.

- Enable the **Patterns** button to enable the Patterns rule.
- Reject character patterns like "abcde" – Enable this button to check for character patterns.

  - Detect character substitution – Select this check box if Password Policy Enforcer should
    reject passwords that rely on character substitution to comply with this rule.
  - Detect words typed backwards – Select this check box if Password Policy Enforcer should
    additionally test passwords with their characters reversed. Enabling this analysis stops users
    from circumventing this rule by reversing the order of characters in their password. For
    example, a user may enter "edcba" instead of "abcde".
  - Tolerance – Choose a value from the drop-down list to specify the longest pattern that
    Password Policy Enforcer allows before rejecting a password. For example, the password
    "password **wxyz**" contains a four-character pattern (shown in bold type). Password Policy
    Enforcer rejects this password if the tolerance is set to three (or lower), and accept it if
    the tolerance is set to four (or higher).

- Character patterns – Click the **Character Patterns** button to set the patterns to apply. Default
  is both English alphabet (a-z) and Numbers (0-9).

- Enable the **Reject keyboard patterns like "qwerty"** button to enable check for keyboard
  patterns.

  - Detect `<_keyboard type_>` keyboard patterns – Select keyboard layouts to set the keyboard
    type, Horizontal, Vertical or Horizontal and Vertical.
  - Detect direction change – Select this check box for entries that change direction. For
    example, qweewq.
  - Detect key repeat – Select the check box for repeated keys, based on the Tolerance value. If
    Tolerance is 4, aaaa is accepted and aaaaa is rejected.
  - Detect key skip – Select this check box for skipped keys, such as qetuo.
  - Tolerance – Set tolerance for the number of characters in a keyboard pattern is allowed before
    the password is rejected.

# Repetition Rule

The Repetition rule rejects passwords that contain excessive character or pattern repetition.
Reducing repetition increase resistance to both brute-force and dictionary cracking algorithms. The
Repetition rule is not case sensitive, so "mypaSssSword" contains four consecutive repeating
characters (SssS).

- Enable the **Repetition** button to enable the repetition rule.

- Reject repetition `<_character_>` and more consecutive characters like "aaaA" – Select the option
  and set the maximum number of consecutive repeating characters that passwords can contain.

- Reject repetition like "wordword" or "p@$s_p@$s" – Select the option to enable pattern repetition.

- Detect character substitution – Select if Password Policy Enforcer should reject passwords that
  rely on character substitution to comply with this rule.

- Bi-directional analysis – Select if Password Policy Enforcer should additionally test passwords
  with their characters reversed. Enabling this analysis stops users from circumventing this rule by
  reversing the order of characters in their password. For example, a user may enter "edcba" instead
  of "abcde".

- Tolerance – Choose a value from the drop-down list to specify the longest pattern that Password
  Policy Enforcer allows before rejecting a password. For example, the password "password**wxyz**"
  contains a four-character pattern. Password Policy Enforcer rejects this password if the tolerance
  is set to three (or lower), and accept it if the tolerance is set to four (or higher).

# Similarity Rule

The Similarity rule rejects passwords that are similar to a user's current password. Password
similarity may indicate that a user is serializing their passwords. For example, "password1",
"password2", "password3". Password serialization allows an attacker to guess the new password.

- Enable the **Similarity** button to enable the Similarity rule.

- Current password – applies the similarity rules to the user's existing password.

- User display name – rejects passwords that are similar to a user's Active Directory display name
  (full name for local accounts).

- User logon name – rejects passwords that are similar to a user's logon name (user name).

For each option enabled, set the rules:

- Character substitution – Select the check box to reject passwords that rely on character
  substitution to comply with this rule.
- Words typed backward – Select the check box too additionally test passwords with their characters
  reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing
  the order of characters in their password. For example, a user may enter "drowssapdloym" instead
  of "myoldpassword".
- Tolerance – Select value to specify the maximum number of matching characters that Password Policy
  Enforcer allows before rejecting a password. For example, the two passwords "old**passwd**" and
  "new**passwd**" contain six consecutive matching characters (shown in bold type). Password Policy
  Enforcer rejects the new password if the tolerance is five (or lower), and accepts it if the
  tolerance is six (or higher).

# Unique Characters Rule

The Unique Characters rule rejects passwords that do not contain a minimum number of unique
characters. For example, the password "aaaaaaaa" only contains one unique character (a), whereas
"mypassword" contains nine unique characters (mypasword). Increasing the number of unique characters
in a password increases password strength by avoiding repetitive sequences that are easily guessed.
The Unique Characters rule is case sensitive, so "LoOpHole" contains seven unique characters
(LoOpHole).

- Enable the **Unique characters** button to enable the Unique Characters rule.
- Must contain `<_number_>` or more unique characters – Select the minimum number of unique
  characters in the number drop-down list the passwords must contain.

# Assign Policies to Users, Groups & Containers

Password Policy Enforcer uses policy assignments to decide which policy to enforce for each user.
Domain policies can be assigned to users, groups, and containers (Organizational Units).

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , click **Edit**.

Or

Click on a policy name to open the policy configuration page.

Step 5 – Open the **Users & Groups** tab.

Assign Policies to Users

Step 6 – When a domain policy is assigned to a user, Password Policy Enforcer stores the user's
information in the configuration. The assignment remains valid even if the user is renamed.

1. Click **+Add User** to add user(s) you want to apply policy on.
2. On the Add Object(s) dialog box, select a container from the **Search Container** drop down list.
3. By default, the Include Sub-Contaners check box is selected. If you do not want to apply the
   policy on the users in the sub-containers, uncheck it.
4. Click **Advanced**, to search users using the search fields displayed such as Name, Display Name,
   First Name, Last Name and so on.
5. Click **Search**. Users matching the given criteria get listed.
6. Click the **Add** button next to the users name listed on the page.
7. After adding all the required users from the search list, Click **Add** on the Add Objects dialog
   box.
8. The selected users get listed in the Users box. You can remove a user from the list by clicking
   the cross (x) icon next to its name.

Assign Policies to Groups

Step 7 – When a domain policy is assigned to a group, Password Policy Enforcer stores the group's
information in the configuration. The assignment remains valid even if the group is renamed.
Password Policy Enforcer enforces the policy for all members of the group as well as any nested
groups. For example, if the Helpdesk group is a member of the Info Tech group, then any policy
assigned to the Info Tech group also applies to the members of the Helpdesk group. If this behavior
is not desired, then you can assign a different policy to the Helpdesk group.

1. Click **+Add Group** to add groups for the policy assignment.
2. On the Add Object(s) dialog box, select a container from the **Search Container** drop down list.
3. By default, the Include Sub-Contaners check box is selected. If you do not want to apply the
   policy on the groups in the sub-containers, uncheck it.
4. Click **Advanced**, to search groups using the Name, Display Name, and Description fields.
5. Click **Search**. Groups matching the given criteria get listed.
6. Click the **Add** button next to the users name listed on the page.
7. After adding all the required groups from the search list, Click **Add** on the Add Objects
   dialog box.
8. The selected groups get listed in the Groups box. You can remove a group from the list by
   clicking the cross (x) icon next to its name.

Assign Policies to Containers

Step 8 – When a policy is assigned to a container, Password Policy Enforcer enforces the policy for
all users in the container as well as any child containers. For example, if the Helpdesk and
Managers OUs are children of the Info Tech OU, then any policy assigned to the Info Tech OU also
applies to the two child OUs. If this behavior is not desired, then you can assign a different
policy to a child OU.

NOTE: Different assignment types can be used for a single policy. For example, you may assign users
to a policy by both OU and group at the same time.

1. Click **+Add Container** to add groups for the policy assignment.
2. On the Add Container (s) dialog box, click **+** to expand the Entire Directory.
3. Select the check box before the domain name to select the entire directory or select desired
   containers you You can remove a containervfrom the list by clicking the cross (x) icon next to
   its name.

Step 9 – Click **Update**.

## Policy Assignment Conflicts

A policy assignment conflict occurs when more than one policy is assigned to a user. Password Policy
Enforcer can resolve these conflicts and choose one policy for each user.

Password Policy Enforcer first tries to resolve a policy assignment conflict by examining the
assignment type. Assignments by user take precedence over assignments by group, which in turn take
precedence over assignments by container. For example, if Policy A is assigned to a user by group,
and Policy B is assigned to the same user by container, then Password Policy Enforcer enforces
Policy A because assignments by group take precedence over assignments by container.

If all the policies are assigned to the user by container, then Password Policy Enforcer enforces
the policy that is assigned to the nearest parent container. For example, if Policy A is assigned to
the Users OU, and Policy B is assigned to the Users\Students OU, then Password Policy Enforcer
enforces Policy B for all users in the Users\Students and Users\Students\Science OUs because it is
the policy assigned to the nearest parent container.

If a policy assignment conflict still exists, then Password Policy Enforcer checks the priority of
each remaining policy, and enforces the policy with the highest priority. See the Manage Policies
topic for a diagrammatic representation of this algorithm.

Click **Test Policy** and expand the **View log** to see which policy Password Policy Enforcer
enforces for a particular user.

# Group Name Prefixes

You can standardize group names in the directory by defining prefixes. When users create groups
using the Directory Manager portal, they must select a prefix, which is added to the group’s name
and display name.

NOTE: The Group Name Prefixes policy does not apply when a user creates a group using Directory
Manager Management Shell.

You can define group name prefixes (a) for an identity store, (b) for security roles in an identity
store, or (c) both at the identity store and role levels.

- Prefixes defined for an identity store are available to all security roles in an identity store.
  When creating a group, users must select a prefix to append the group’s name.
- Prefixes defined for a security role are available to role members only. You can enforce members
  to select a role-specific prefix to append a group’s name while creating a group. Role-specific
  prefixes help distinguish between groups created by different roles.
- When prefixes are defined at both the identity store and role levels, both sets of prefixes are
  available to role members in a single drop-down list. Role members can select any prefix to append
  a group’s name. However, when prefixes are enforced at the role level, role members can only
  select a role-specific prefix to append a group’s name.

NOTE: (1) For a user with multiple roles, prefixes for all roles are displayed when creating or
updating groups.  
(2) If prefixes are enforced for the highest priority role of a user, he or she must select a prefix
from the list of prefixes defined for this highest priority role.  
(3) If prefixes are enforced for a role other than the highest priority role of a user, enforcement
does not apply to him or her.

Consider the following:

- For existing groups, the prefix option is available for unmanaged groups (and not for Smart Groups
  and Dynasties). A user can choose to add a prefix to the group name in group properties. Once
  added, it cannot be removed.
- For managed groups (Smart Groups and Dynasties), prefixes can only be added while creating a group
  and cannot be changed or removed later.

A group naming policy defined in Microsoft Entra Admin Center has no impact in Directory Manager.
For details, see the [Group Naming Policy](/docs/directorymanager/11.1/configuration/identity-stores.md#group-naming-policy) topic.

What do you want to do?

- Add a Prefix for an Identity Store
- Add a Prefix for a Security Role in an Identity Store

## Add a Prefix for an Identity Store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Name Prefixes**.
4. On the **Group Name Prefixes** page, type a prefix in the box displayed at the top and click
   **Add**. The prefix is displayed in the **Group Name Prefix** area.
5. Click **Save**.

Edit a Prefix

1. On the **Group Name Prefixes** page, click **Edit** for a prefix and update it. Then click the
   check mark icon to save or the cross icon to discard your changes.
2. Click **Save**.  
   The change does not propagate to group names that have already been created with the prefix.

Delete a Prefix

1. On the **Group Name Prefixes** page, click **Remove** for a prefix to delete it.
2. Click **Save**.  
   Deleting a prefix has no impact on group names that have already been created with it.

## Add a Prefix for a Security Role in an Identity Store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Group Name Prefixes** tab.
7. Refer to step 4 and onwards in the Add a Prefix for an Identity Store topic to add, edit, or
   delete a group name prefix for a security role.
8. Select the **Enforce Prefix** check box to make it mandatory for role members to select a
   role-specific prefix to append group names while creating groups.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.1/administration/security-roles.md)
- [Security Role Policies](/docs/directorymanager/11.1/administration/security-policies.md)

# Configure User Profile Validation

The profile validation process in Directory Manager is designed to ensure the accuracy of users’
information in the directory.

When you apply profile validation to a group, all group members must verify and update their profile
information in the directory using the Directory Manager portal. You must also specify a profile
validation life cycle period (for example, 90 days), so that each member must validate his or her
profile once during each 90-day cycle.

Additionally, you can choose to specify a different profile validation period for new users. Once a
new user validates his or her profile within this period, the regular profile validation cycle
applies.

By default, a few attributes (fields) are available in the Directory Manager portal for profile
validation. You can add and remove fields as required. See the
[Manage Property Validation Attributes](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.

## What can Users do While Validating their Profiles?

When performing profile validation, a user can:

- Update his or her directory profile
- Change his or her primary manager - When a user changes his or her primary manager (Manager A),
  then Manager A and the user’s additional managers are notified through email to accept or reject
  the request. If any of them accepts it, the user’s manager is changed. If any approver rejects it,
  the user remains with Manager A.

  NOTE: This is the default flow of the _change manage_ workflow for the identity store. If the
  administrator disables the workflow or changes the approver, the flow changes accordingly.

- Transfer his or her direct reports to another manager - When a user transfers his or her direct
  report, the new manager is notified by email to accept or reject the transfer. If the manager
  accepts it, the direct report is transferred to him or her. If the manager rejects the transfer,
  the direct report remains with the old manager.

  NOTE: This is the default flow of the _transfer a user_ workflow for the identity store. If the
  administrator disables the workflow or changes the approver, the flow changes accordingly.

- Terminate his or her direct reports - When a user terminates his or her direct report, it takes
  effect immediately when the _terminate a user_ workflow is disabled. If enabled, a request is sent
  to the approver. If the approver accepts it, the direct report is terminated and if the approver
  rejects it, the direct report remains with the manager.

For workflows in an identity store, see the
[System Workflows](/docs/directorymanager/11.1/workflows/overview.md#system-workflows) topic.

## What Happens When Users do not Validate their Profiles?

Periodically, users receive reminder emails to validate their profile. Directory Manager expires the
users who ignore these reminders and do not validate their profiles within the required time.
Consequently, their accounts get disabled.

Expired users can request the administrator or helpdesk to unlock their accounts temporarily and
grant an extension period. If they do not validate their profile within that extension period
either, Directory Manager expires them again and notifies their managers by email. To reactivate
these accounts, users’ managers must send a request to the helpdesk.

To identify user accounts that are disabled for not validating their profiles, see the Identify User
Accounts Expired due to Non-Profile Validation topic.

## The User Life Cycle Schedule

The [User Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md) monitors the profile validation
function in Directory Manager. It:

- Monitors the profile validation dates for users.
- Generates reminder emails, if reminder notifications settings are applied.
- Expires (disables) users who do not validate their profiles within the given period.
- Marks user accounts that are disabled due to profile non-validation, provided that the ‘Profile
  Validation Attribute’ setting is applied.
- Deletes the profile validation date if it is x number of days old, provided that the ‘Clear the
  validation data for disabled users, x number of days after they are disabled’ setting is applied.

What do you want to do?

- Specify a Group for Profile Validation
- Set a Profile Validation Life Cycle Period
- Specify a Profile Validation Period for New Users
- Specify a Duration for the Extension Period
- Specify Reminder Notification Settings
- Identify User Accounts Expired due to Non-Profile Validation
- Apply Settings to Clear the Validation Date

## Specify a Group for Profile Validation

By default, profile validation is not enabled for an identity store, and therefore does not apply to
any user.

You can apply profile validation to a directory group. As a result, all group members will be
required to validate their profiles. Only one group can be specified at a time.

**To specify a group:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the **Search for the Criteria** box to search and specify
   a group.

   - Type a search string in the box. Directory Manager displays all groups with names that start
     with the string. Click **Select** for a group to select it for profile validation.

     Or

   - Click **Advanced** to search a group by different parameters, such as name, display name, and
     description. Enter a search string and click **Search**. Groups matching the string are
     displayed. Select the required group.

   The selected group is displayed in the **Search for the Criteria** box. Members of this group
   have to validate their profiles according to the settings you configure on the **Profile
   Validation** page.

   **To preview group members:**

   - To view the members of the selected group, click **Preview**.

   **To remove the group:**

   - To remove the selected group, click **Remove** for it.

5. Click **Save**.

## Set a Profile Validation Life Cycle Period

By default, the profile validation life cycle period is set to 90 days, which means that users must
validate their profiles once during each cycle of 90 days. When a user validates his or her profile,
the current cycle ends and the next cycle starts for him or her.

The User Life Cycle schedule monitors the profile validation dates for users; it expires users who
do not validate their profiles within the given period.

**To specify a life cycle period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. In the **User Profile Validation Lifecycle** box on the **Profile Validation** page, type the
   number of days to set as the profile validation life cycle period.  
   If this number of days is less than the days set for any of the reminders configured in the
   **Reminder Notification Settings** area, Directory Manager removes that reminder from the list.
5. Click **Save**.

## Specify a Profile Validation Period for New Users

Apart from the regular profile validation life cycle, Directory Manager enables you to set a
separate profile validation period for newly found user objects (by way of newly created objects or
by way of disabled object enabled again) in the directory.

For new users, you can specify a certain number of days, say 30, to serve as the first profile
validation life cycle period. New users receive a welcome email and a profile validation request,
directing them to validate their profiles for the first time within the given number of days. Once
they validate their profiles, the regular profile validation life cycle settings would apply to
them.

**To specify a profile validation period for new users:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button next to the **New Object Profile
   Validation Lifecycle** box to enable a separate profile validation life cycle for new users.
5. In the **New Object Profile Validation Lifecycle** box, specify a certain number of days to set
   as the profile validation period. New users must validate their profiles within this period. If
   they fail to do so, their accounts will be disabled.
6. Click **Save**.

## Specify a Duration for the Extension Period

Using the Directory Manager portal, the administrator or helpdesk can grant an extension period to
users who have been expired due to non-profile validation. If users do not validate their profile
within the extended period, Directory Manager disables them again, and an email notification is sent
to their managers.

On the **Profile Validation** page, you can specify the duration of the extension period in days.

**To set the extension period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. In the **Extension Period** box on the **Profile Validation** page, specify the number of days
   that will be granted as extension period to expired users.  
   By default, the extension period is set to four days. You can extend it to seven days.
5. Click **Save**.

## Specify Reminder Notification Settings

By default, three email notifications are sent to a user, precisely 30, 21 and 14 days before the
profile validation period ends. These notifications serve as reminders, directing users to validate
their profiles. The final reminder is sent to the user and the user’s manager.

You can change the number of reminders to be sent along with their _Before # of Days_ value. The
User Life Cycle schedule sends reminder notifications to users according to the specified settings.

For email notifications, an SMTP Server must be configured for the identity store. See the an
[Configure an SMTP Server](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

**To set a new reminder:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. In the **Reminder Notification Settings** area, click **Add Reminder**.
5. On the **Add Reminder** dialog box, provide a name for the reminder in the **Reminder Name** box.
6. Enter a value in the **Before Number of Days** box. The reminder is sent to the user when x
   number of days are left for the profile validation period to end. For example, if you enter 5,
   the reminder will be sent five days before the profile validation period ends.
7. Click **Add**.

   **Edit a reminder:**

   1. In the **Reminder Notification Settings** area, click **Edit** for a reminder.
   2. On the **Edit Reminder** dialog box, update the name and _before no. of days_ setting for the
      reminder.
   3. Click **OK**.

   **Remove a reminder**:

   - In the **Reminder Notification Settings** area, click **Remove** for a reminder to remove it.

8. On the **Profile Validation** page, click **Save**.

## Identify User Accounts Expired due to Non-Profile Validation

User accounts in an identity store may get disabled for various reasons, such as when the
administrator disables a user in the directory or when the User Life Cycle schedule expires a user
account because the user did not validate his or her directory profile during a given period.

To identify users that are disabled by the User Life Cycle schedule, the administrator can apply the
**Profile Validation Attribute** setting. This setting requires the administrator to select a schema
attribute and specify a string as its value.

- When the User Life Cycle schedule expires a user, it sets the given string as the attribute’s
  value for the user.
- For active users or those disabled for a different reason, this attribute does not have the
  specified string as value.

When the administrator or a helpdesk user extends the profile validation period for a disabled user,
the string value is cleared and the attribute is empty again.

The administrator can access the directory server to check whether the string value is set for the
attribute. For example, he or she can use a standard Microsoft-based Active Directory tool to view
the attribute’s value either natively in the given propertysheet options or via the ADSI property
sheet shell extension.

**To designate an attribute with a value:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button for **Set an attribute that will be
   updated with the desired value for users that are expired due to non-profile validation** to
   enable the attribute value setting.
5. Select a schema attribute in the **Attribute** drop-down list and specify a string as value for
   it in the **Desired Value** box.  
   When the User Life Cycle schedule expires a user who does not validate his or her profile within
   the given period, it also sets the attribute’s value to the specified string for that user.
6. Click **Save**.

## Apply Settings to Clear the Validation Date

The administrator can specify an x number of days for the ‘Clear the validation data for disabled
users, x number of days after they are disabled’ setting. The User Life Cycle schedule scans all
disabled users and if x number of days have passed since the last validation date, it clears the
validation date.

This setting is required for a potential rehire scenario, in which case the user will be treated as
a newly created object and the validation process for new users will apply to it.

**To apply the setting:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button for **Clear the validation data for
   disabled users, x number of days after they are disabled** to enable the clear validation date
   setting.
5. In the **After number of Days** box, specify a certain number of days, say 60. The User Life
   Cycle schedule scans all disabled users and if 60 days have passed since the last validation
   date, it clears the validation date.  
   If you specify zero (0), the schedule clears the validation date as soon as it expires the user.
6. Click **Save**.

# Admin Center

Admin Center enables administrators to configure settings that are used by different functions of
the application and manage Directory Manager clients.

When multiple instances of Directory Manager are deployed, a separate Admin Center application is
created for each instance in native IIS.

## View Admin Center Hosting Details

Follow the steps to view Admin Center Hosting details.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the **Admin Center** tab.  
The tab displays Admin Center hosted in native IIS. When multiple Directory Manager instances have
been deployed, you will find multiple Admin Center cards on this tab page, each card representing a
separate instance. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/administration/services/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topic.  
For details displayed on an Admin Center card, see the table in the
[View Data Service Details](/docs/directorymanager/11.1/administration/services/data-service.md#view-data-service-details) topic for additional
information.

You cannot create an Admin Center application or delete an existing one from Admin Center tab.

## Launch Admin Center

Follow the steps to launch Admin Center.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Admin Center tab, click **Launch Application** on an Admin Center card.  
Provide the Admin Center URL to admin and helpdesk users so they can access it. You can either copy
the URL from the address bar or from Admin Center deployment settings. See the See the
[View the Launch URL for a Service](/docs/directorymanager/11.1/administration/services/data-service.md#view-the-launch-url-for-a-service) topic.

## Change the Application Display Name

To change the display name of the Admin Center application, see the
[Change a Service’s Display Name](/docs/directorymanager/11.1/administration/services/data-service.md#change-a-services-display-name) topic.
Replace references to the service with Admin Center.

## View Deployment Settings

You can view deployment settings for Admin Center, such as the IIS site that hosts it, the IIS
Application name given to it, and the URL to launch it.

Follow the steps to view deployment settings.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Admin Center tab, click the ellipsis button on an Admin Center card and select
**Settings**.

Step 3 – Click **Deployments** under Server Settings. The Deployment Settings page is displayed,
where you can view Admin Center deployment details in native IIS.

## Configure Event Logging

To configure file logging and Windows logging for Admin Center, see the
[Specify Log Settings for a Service](/docs/directorymanager/11.1/administration/services/data-service.md#specify-log-settings-for-a-service) topic
for additional information.

# Services

Directory Manager services are long-running, non-UI software applications that operate in the
background and run in their own Windows sessions. They are usually started when you boot the machine
they are hosted on, and are scheduled to run in the background to execute some tasks. You can also
start, pause, and stop them manually.

Directory Manager relies on a few of its own services and third-party services for different
functions.

## Directory Manager Services

The following table discusses Directory Manager services.

| Service             | Description                                                                                                                                                                                                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data service        | Directory Manager uses it to perform core operations and to communicate with Microsoft SQL Server for storing and fetching data in the database.                                                                                                                                          |
| Security service    | - Authenticates and authorizes users on different Directory Manager functions in accordance with their roles. - Encrypts and decrypts data that Directory Manager Data service stores and fetches from the SQL database.                                                                  |
| Replication service | Replicates attributes of the group, user, contact, computer, and organizational unit object from the provider (such as Active Directory) to the Elasticsearch repository. In case of multiple Elasticsearch clusters, this service is also responsible for syncing data between clusters. |
| Email service       | Maintains a queue of all notification requests generated by identity stores, and sends them one by one.                                                                                                                                                                                   |
| Scheduler service   | Initiates schedule runs for scheduled jobs defined in Directory Manager.                                                                                                                                                                                                                  |

These services run in the context of specific accounts that are different from the logged-on user or
the default computer account. See the Accounts to Run the Servicestopic for details.

### Where are these Services Hosted?

Directory Manager services are hosted on a web server, that could be native IIS, remote IIS, and
Docker.

You can create multiple Data services and Security services while hosting them on different web
servers. For example, you can host one Data service in native IIS and another in Docker.

- To launch IIS on a machine, see
  [Opening IIS Manager](<https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525920(v=vs.90)>).

![in_iis](/img/product_docs/directorymanager/directorymanager/admincenter/portal/in_iis.webp)

- To open Docker Desktop on Windows, search for Docker and select Docker Desktop in the search
  results.

![indocker](/img/product_docs/directorymanager/directorymanager/admincenter/service/indocker.webp)

## Third-party Services

Directory Manager requires the following third-party services:

| Service                        | Description                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL Server Browser service     | This service fetches the SQL servers present in the environment and displays them on the Database Settings page of the Directory Manager Configuration Tool, where you configure a database for Directory Manager. Moreover, Directory Manager stops when this service stops.                                     |
| Key Distribution Service (KDS) | You must enable the Key Distribution Service (KDS) on the Directory Manager server if you want to use Group Managed Service Accounts (gMSA) in Directory Manager. Directory Manager supports a gMSA in various contexts, such as for the Directory Manager app pool and as service account for an identity store. |
| Elasticsearch service          | This service is responsible for searching the Elasticsearch repository to display object listings and search results in Directory Manager. If this service stops, Directory Manager will not work.                                                                                                                |

### Where are these Services Hosted?

Third-party services are created as Windows services in Windows Services Manager:

To launch the Services Manager, type ‘ services.msc’ in the Run dialog box and click OK. Here is an
example of services in Windows Services Manager. You can start, stop, disable, and delay a service.

![inwindowsservicesmanager](/img/product_docs/directorymanager/directorymanager/admincenter/service/inwindowsservicesmanager.webp)

## Accounts to Run the Services

The Directory Manager Configuration Tool enables you to specify the service accounts to use for the
Directory Manager app pool and Windows services.

| Services                          | Service Account Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Directory Manager App Pool in IIS | Use a domain account or a Group Managed Service Account (gMSA). The account must be a member of the Administrators group or both the Backup Operators and IIS_IUSRS groups. The account is used to manage the Directory Manager app pool in IIS. Data service, Security service, and the portals run under the app pool. For a Microsoft Entra ID identity store, you can specify a local account (with local administrator rights) in app pool for a machine that is not joined to any domain. |
| Windows services                  | Use a domain account, system user account, or gMSA. The account must be a member of the Backup Operators group. The account is used to run the Windows services for Directory Manager, as discussed in the Third-party Services topic.                                                                                                                                                                                                                                                          |

## Elasticsearch Clusters, Nodes, and Directory Manager

When you have multiple Elasticsearch clusters in your environment and each cluster has multiple
nodes, you will notice that for each node in a cluster the following are created.

- An Admin Center
- A Data service
- A Security service
- A Replication service
- A Scheduler service
- An Email service

Cluster syncing

To sync data between clusters, Directory Manager uses the Replication service. You have to enable
data sync for at least one Replication service within a cluster to sync the cluster's data to other
clusters. See the
[Enable Elastic Cluster Syncing](/docs/directorymanager/11.1/configuration/replication.md#enable-elastic-cluster-syncing) topic for
additional information.
