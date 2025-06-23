---
title: create groups
sidebar_label: create-groups
description: Directory Manager 11.0 documentation for create groups with configuration details, usage instructions, and implementation guidance.
---

# General page

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box to select or create the container or
   organizational unit to create the group in and click **OK**.

   If you want to create a container, click **Create** and then add container to create the group
   in. Click **Refresh** to remove the changes.

   This field will be read-only if the administrator has predefined a container for creating new
   groups.

2. In the **Group Name** box, provide a name for the group by selecting a prefix and then entering a
   name for the group.

   NOTE: The prefix box is displayed if the administrator has defined the prefixes. See Group name
   prefixes.  
    These prefixes, when appended to group names, help standardize the group naming convention
   across the enterprise.

3. The **Name Preview** is displayed if the prefix list is available and displays a preview of the
   prefix combined with the group name.
4. The group name is also displayed in the **Group Name (Pre Windows 2000)** box. Modify it, if
   required.
5. Select the **Mail Enabled** check box to create the group as mail-enabled. A mail-enabled group
   is one with an email address. Members of a mail-enabled group can receive emails.
6. The **Alias** box displays an alias for creating the group's email address. You can modify the
   alias, if required.

   If Microsoft Exchange Server is the designated messaging provider for the identity store, then
   the alias length is limited to 64 characters, it does not contain spaces, and it is unique to
   the forest. For other messaging systems, the alias length must not exceed the number of
   characters supported by the respective messaging system.

   Also, the alias must not contain characters that are invalid for the configured messaging
   system.

   The **Alias** box is displayed if the **Mail Enabled** check box is selected.

7. Set the group type by selecting an option for **Group Type**.

   - **Security** - this group will be used for securing public folders, printers and other network
     resources.
   - **Distribution** - this group will only be used for email distribution.

   NOTE: If the administrator has predefined a group type, you cannot change it.

8. In the **Group Scope** list, select a scope for the group.

   - **Domain Local** - if the group is to contain only users in this domain.
   - **Global Group** - if the group is to contain users from other domains, but should only be
     visible within its own domain.
   - **Universal Group** - if the group is to contain users and groups from any domain and be
     visible in the Global Catalog.

   NOTE: (1) If the administrator has predefined a group scope, you cannot change it.  
   (2) To create a mail-enabled group (with Exchange 2013/2016/2019 as the messaging provider), you
   must select **Universal** as the group scope.

9. In the **Security** list, select a security type for the group.
10. Enter a description for the group in the **Description** box.
11. Click **Next**.

**See Also**

- [Create Active Directory Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)

# Create Active Directory Groups

Using GroupID portal, you can create static groups and Smart Groups in an Active Directory identity
store.

NOTE: If the GroupID administrator has specified the group creation action for review, the new group
will be created after it is verified by an approver. See
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md).

What do you want to do?

- [Create a Static Group](#create-a-static-group)
- [Create a Smart Group](#create-a-smart-group)
- [Create a Password Expiry Group](#create-a-password-expiry-group)

## Create a Static Group

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the
   wizard by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Static Group** option button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify basic information about the group.
4. On the
   [Members page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify members for the group.
5. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the group.
6. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

## Create a Smart Group

A Smart Group is one that dynamically maintains its membership based on the rules applied by a
user-defined query, such as an LDAP query.

Rather than specifying static user memberships, you can use a query (for example, "All full-time
employees in my company") to dynamically build membership in a Smart Group. Managing memberships
with queries significantly reduces administrative costs.

**To create a Smart Group:**

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the
   wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Smart Group** option button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify basic information about the group.
4. On the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   review and modify the query for updating group membership.
5. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

6. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

## Create a Password Expiry Group

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do so, they are automatically removed from the group membership.

NOTE: Password Expiry group is not supported in Microsoft Entra ID.

**To create a Password Expiry Group:**

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the
   wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Password Expiry Group** option button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify basic information about the group.
4. On the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   review and modify the query for updating group membership.
5. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

6. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Members page

You can add members to the group. You can also remove members. By default, you are a member of the
group.

- To add member(s), click **Add**. Enter a search string to locate the object to add as a group
  member, or click **Advance** to use the
  [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
  search.

  The selected members get listed in the grid on the **Members** page.

- You can also add members to the group using an external file. You can also choose to import all
  members of an existing group or groups to the membership of this group.

  Click **Import** to launch the **Import Members** wizard for importing group members. See
  [Import Group Members](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
  for information.

- To remove an object from the members list, select it and click **Remove**.

The **Members** table displays the following information:

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Type         | The object type of the member object, such as user or group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Display Name | The name of the member object. You can view the memberships of groups that are members of this group. For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who will receive the messages sent to the distribution group. Click the plus sign (![plus](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/group/create/activedirectory/plus.webp)) next to a member group to view its members. Group membership can be viewed up to the nth level. However, you cannot modify membership of nested groups here. For a parent Dynasty, all child Dynasties are listed as members. NOTE: For an expired security group and Office 365 group, the members list would be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Membership   | Indicates whether the object is a temporary or permanent member of this group. The available membership types are: - **Perpetual** - To make the object a permanent member of the group. - **Temporary Member** - To make the object a temporary member of the group for the period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the object is removed from the group membership. - **Addition Pending** - Indicates that the object will be a temporary member of the group for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. **Here is an example:** You add Smith as a temporary member to Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19, 2019. However, Smith would not be added to group membership in the provider. On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30, 2019. Smith will also be added to group membership in the provider. After May 30, Smith will be removed from Group A as a member in GroupID and in the provider. - **Removal Pending** - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. _Here is an example:_ You remove Smith from Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19, 2019. On May 20, Smith’s membership type in GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. However, Smith will be removed from Group A’s membership in the provider. After May 30, Smith will be added back to Group A as a permanent member in GroupID and in the provider. - **Temporary Removed** - Indicates that the object is temporarily removed from group membership for the period specified in the **Beginning** and **Ending** boxes. At the end of the period, the object is added back to the group membership as a permanent member. When the object is a perpetual member, the Membership column is blank. Click anywhere in the row to make it editable for changing the membership type of the group member. NOTE: You cannot change the membership type when the member object is a group. |
| Beginning    | Displays the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Ending       | Shows the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes
temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added to group membership for three days - Wednesday till Friday, it
will not be added. This happens because the Membership Life Cycle job did not run on the particular
days for temporary membership update.

After adding members, click **Next**.

**See Also**

- [Create Active Directory Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)

# Owners page

You can manage the primary and additional owners for the group. Additional owners have the same
privileges as the primary owner to manage the group.

Users, contacts and security groups can be set as the primary and additional owners. In case of a
group, all its members are considered as owners.

- The **Owner** box displays your name as the primary owner of the group.

  To change the primary owner, click **Browse** next to the **Owner** box to launch the
  [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md), where you can
  search and select a primary owner.

- If the administrator has not enforced the selection of a primary owner (see Role policies), you
  can also remove the primary owner. Click the **Remove** button next to the **Owner** box to remove
  the primary owner.
- To specify additional owner(s) for the group, click **Add**.

  Enter a search string to locate the object to add as an additional owner, or click **Advance**
  to use the [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for
  performing a search.

- You can also specify additional owners for the group using an external file. Click **Import** to
  launch the **Import Additional Owners** wizard for importing additional owners. See
  [Import Additional Owners](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
  for further information and instructions.
- To remove an object from the additional owners list, select it and click **Remove**.

The **Additional Owners** grid displays the following information:

| Column Name   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type          | The object type of the additional owner, such as user or group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Name          | The display name of the additional owner.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Ownership     | Indicates whether an object is a temporary or permanent additional owner of a group. The available ownership types are: - **Perpetual** - To make the object a permanent additional owner of the group. - **Temporary Owner** - To make the object a temporary additional owner of the group for the period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the object is removed from the group ownership. - **Addition Pending** - Indicates that the object will be a temporary additional owner of the group for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Addition Pending’. On the beginning date, the ownership type changes to ‘Temporary Owner’. **Here is an example:** You add Smith as a temporary additional owner of Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be listed with Group A’s additional owners with ‘Addition Pending’ as its ownership type from May 15 to 19, 2019. On May 20, Smith will become a temporary additional owner of Group A and its ownership type will change to ‘Temporary Owner’ from May 20 to 30, 2019. After May 30, Smith will be removed from Group A as an additional owner. - **Removal Pending** - Indicates that the object will be temporarily removed from group ownership for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Removal Pending’. On the beginning date, the ownership type will change to ‘Temporary Removed’. **Here is an example:** You remove Smith as an additional owner of Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed as Group A’s additional owner with ‘Removal Pending’ as ownership type from May 15 to 19, 2019. On May 20, Smith’s ownership type in GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. After May 30, Smith will be added back to Group A as a permanent additional owner. - **Temporary Removed** - Indicates that the object is temporarily removed from group ownership for the period specified in the **Beginning** and **Ending** boxes. At the end of the period, the object is added back to the group as a permanent additional owner. When the object is a perpetual additional owner, the Ownership column is blank. Click anywhere in the row to make it editable for changing the ownership type of the additional owner. NOTE: You cannot change the ownership type when the additional owner is a group. |
| Beginning     | Displays the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Ending        | Displays the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Do not notify | By default, all group-related notifications (such as expiry, deletion, and renewal notifications) are sent to the primary owner and all additional owners, so they can take the necessary action indicated. To exclude an additional owner from receiving notifications, select the Do not notify check box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

The Managed By Life Cycle job updates the temporary ownership of groups by adding and removing
temporary owners on the specified dates.

Consider a scenario where the Managed By Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added as a group’s temporary additional owner for three days -
Wednesday till Friday, it will not be added. This happens because the Managed By Life Cycle job did
not run on the particular days for temporary ownership update.

After specifying group owners, click **Next**.

You may observe a message, asking you to select X number of additional owners. It occurs because the
Group Owners policy defined for your role in the identity store requires that the group must have at
least x number of additional owners. Do the needful and click **Next**.

**See Also**

- [Create Active Directory Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)

# Smart Group page

This page displays the default query for the Smart Group; however, you can modify it. The group’s
membership is updated with the records fetched by the query.

- The **Container(s)** area displays the domain or containers the query will run on.
- **Object Types**: Lists the object types the query will fetch.
- The **Server** and **Storage** areas are displayed if the query only fetches messaging system
  recipients. These areas display the server and storage for the query to fetch the records from.

In an Active Directory identity store, the default query returns the following:

- If a messaging provider is configured for the identity store, the default query returns messaging
  system recipients (users with mailboxes, users with external email addresses, and contacts with
  external email addresses).
- Without a messaging provider, the default query returns all users, contacts and groups in the
  identity store.

In a Microsoft Entra IDidentity store, the default query returns the following:

- If a messaging provider is configured for the identity store, the default query returns messaging
  system recipients (users with mailboxes and users with external email addresses).
- Without a messaging provider, the default query returns all users and groups. For an Office 365
  group, however, only user objects are added to group membership.

You can do the following:

1. To modify the query, click the **Query Designer** button. This launches the
   [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
   dialog box, where you can modify the query.
2. You can also associate a Smart Group Update job with the group; this is a scheduled job that
   updates the group’s membership when it runs.

   From the **Scheduled Job** list, select a Smart Group Update job to associate with the group.

   This list contains Smart Group Update jobs defined in the identity store.

   NOTE: If the administrator has enforced the job selection option, you cannot proceed unless you
   select a scheduled job for this group.

3. Click **Next**.

**See Also**

- [Create Active Directory Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)

# General page

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box to select the container or organizational unit to
   create the group in.

   This field would be read-only if the administrator has predefined a container for creating new
   groups.

2. In the **Group Name** box, provide a name for the group by selecting a prefix and then entering a
   name for the group.

   NOTE: The prefix box is displayed if the administrator has defined the prefixes. See the
   [Set Group Name Prefixes](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
   topic.  
    These prefixes, when appended to group names, help standardize the group naming convention
   across the enterprise.

3. The **Name Preview** is displayed if the prefix list is available and displays a preview of the
   prefix combined with the group name.
4. In the **Security** list, select a security type for the group.
5. Set the group type by selecting an option for **Group Type**

   - **Security** - this group will be used for securing public folders, printers and other network
     resources.
   - **Distribution** - this group will only be used for email distribution.
   - **Teams** - this groups is used for manage Microsoft Teams and their associated channels.
   - **Microsoft 365** - this group will be used to select a set of people to collaborate and use a
     collection of resources.

6. Enter a description for the group in the **Description** box.
7. Click **Next**.

**See Also**

- [Create Microsoft Entra ID Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)

# Create Microsoft Entra ID Groups

Using GroupID portal, you can create static groups and Smart Groups in the identity store.

NOTE: If the GroupID administrator has specified the group creation action for review, the new group
will be created after it is verified by an approver. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

What do you want to do?

- [Create a Static Group](#create-a-static-group)
- [Create a Smart Group](#create-a-smart-group)

## Create a Static Group

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the Create Group wizard may vary, since the administrator can
   customize the wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Static Group** option button and click **Next**.
3. On the [General page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify basic information about the group.
4. On the
   [Members page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   add objects to group membership.

   Only user objects can be added as members of an Office 365 group.

5. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the group.

   Only users can be set as primary owners. You can specify multiple primary owners for a group. At
   least one primary owner is mandatory.

6. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

## Create a Smart Group

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Remember, pages and fields on the Create Group wizard may vary, since the administrator can
   customize the wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
   page, select the **Smart Group** option button and click **Next**.
3. On the [General page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
   page, specify basic information about the group.
4. On the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
   page, review and modify the query for updating group membership.

   Smart Groups in an Microsoft Entra ID based identity store use a device structured query
   language to update group membership. You should either apply a query to a group in the Microsoft
   Entra ID portal or in GroupID.

5. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the group.

   - Only users can be set as primary owners.
   - You can specify multiple primary owners for a group. At least one primary owner is mandatory.
   - When a Smart Group Update job runs on a group, the notification behavior is as follows:

     Even when the **Do not Notify** check box is selected, the additional owner will receive the
     notifications if the administrator has included its email address for job-specific
     notifications.

6. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group Type page

Select the type of group you want to create and click **Next**. Options are:

- [Create a Static Group](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md#create-a-static-group)
- [Create a Smart Group](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md#create-a-smart-group)
- [Create a Password Expiry Group](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md#create-a-password-expiry-group)
  (not supported in Microsoft Entra ID)
- [Create a Dynasty using the Organizational/Geographical/Custom template](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md#create-a-dynasty-using-the-organizationalgeographicalcustom-template)
- [Create a Dynasty using the Managerial template](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md#create-a-dynasty-using-the-managerial-template)
- [Create Teams](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md) (for Microsoft
  Entra ID only)

**See Also**

- [Group Management](/docs/directorymanager/11.0/user-guide/group-management/index.md)

# Groups

Using GroupID portal, you can create:

- An unmanaged group or a static group.

  - A static group is a group you would normally create in a directory (for example, by using the
    Active Directory Users and Computers snap-in). Though such groups can be created using GroupID
    portal, GroupID does not support dynamic updates to them. Any changes to the membership have
    to be updated manually.

- A managed group or a Smart Group or a Dynasty.

  - A Smart Group (normal Smart Group and Smart Group with a password expiry condition)

    A Smart Group is one that dynamically maintains its membership based on rules. These rules
    are applied in the form of a user-defined query, such as an LDAP query. This query is
    defined once and scheduled for membership update using a Smart Group Update job. When the
    Smart Group update job runs, it applies the defined rules to update the group's memberships.

    In this way, Smart Groups are automatically updated whenever the directory information
    changes. This automated group management allows administrators to easily maintain large
    distribution lists and security groups without having to manually add or remove members.

  - A Dynasty is a Smart Group that creates and manages other Smart Groups using information in
    the directory. Dynasties help you manage large distribution lists by creating hierarchical
    group structures that represent your organization’s hierarchy.

**See Also**

- [Group Management](/docs/directorymanager/11.0/user-guide/group-management/index.md)
- [Create Active Directory Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Create Microsoft Entra ID Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)

# Teams

This page lists all the Microsoft Teams groups.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search teams and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **Teams Grid Filters**. All the teams matching the filters will be displayed.

**See Also**

- [All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)

# Create Teams

Using GroupID portal, you can create Team in the identity store.

What do you want to do?

- Create Teams

## Create Teams

1. In the GroupID portal, click the **Create New** button and select **Team**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the Create Group wizard may vary, since the administrator can
   customize the wizard by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the required group type and click **Next**.
3. On the General page, specify basic information about the group.
4. If you select Static Group, specify members for the group on the
   [Members page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md).
5. If you select Smart Group or a Dynasty, review and modify the query for updating group membership
   on the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md).
6. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the group.
7. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
