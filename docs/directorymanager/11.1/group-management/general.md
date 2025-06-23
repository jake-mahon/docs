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

# General page

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box to select the container or organizational unit to
   create the group in.

   This field would be read-only if the administrator has predefined a container for creating new
   groups.

2. In the **Group Name** box, provide a name for the group by selecting a prefix and then entering a
   name for the group.

   NOTE: The prefix box is displayed if the administrator has defined the prefixes. See the
   [Group Name Prefixes](/docs/directorymanager/11.1/administration/services/overview.md)
   topic for additional information.  
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

# General - Microsoft Entra ID

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box to select or create the container or
   organizational unit to create the group in and click **OK**.

   If you want to create a container, click **Create** and then add container to create the group
   in. Click **Refresh** to remove the changes.

   This field will be read-only if the administrator has predefined a container for creating new
   groups.

2. In the **Group Name** box, provide a name for the group by selecting a prefix and then entering a
   name for the group.

   NOTE: The prefix box is displayed if the administrator has defined the prefixes. See the
   [Group Name Prefixes](/docs/directorymanager/11.1/administration/services/overview.md)
   topic.  
    These prefixes, when appended to group names, help standardize the group naming convention
   across the enterprise.

3. In the **Security** list, select a security type for the group.
4. Set the group type by selecting an option for **Group Type**.

   - **Security** - this group will be used for securing public folders, printers and other network
     resources.
   - **Distribution** - this group will only be used for email distribution.
   - **Teams** - this groups is used for manage Microsoft Teams and their associated channels.
   - **Microsoft 365** - this group will be used to select a set of people to collaborate and use a
     collection of resources.

   NOTE: If the administrator has predefined a group type, you cannot change it.

5. Enter a description for the group in the **Description** box.
6. Click **Next**.

# Group properties - General tab

This tab allows you to view or modify the general information about the group.

**Display name**

The display name of the group.

**Alias**

The alias for the group.

**Manager can update membership**

Select this check box to enable the group managers (primary owner and Exchange additional owners) to
update this group’s membership directly on the directory server. Additional owners are not included
because they are Directory Manager-specific and the directory does not recognize them.

This is a provider-end permission and does not impact role-based permissions assigned at the
identity store level in Directory Manager. Nor do role-based permissions assigned at the identity
store level have any impact on this feature.

Enabling this setting auto-grants the required permissions to the manager. For Active Directory, for
example, the manager is granted the following permissions:

- Create, delete, and manage user accounts.
- Reset user password and force password change at next logon.
- Create, delete and manage groups.
- Modify the membership of a group.

NOTE: Do not update Smart Group membership manually; changes might be reversed when the Smart Group
Update job runs.

NOTE: The _manager can update membership_ feature is not available for groups in a Microsoft Entra
ID based identity store.

**Description**

The description provided for the group.

**Expiration Policy**

The expiry policy for this group. It specifies the duration the group remains active for. The group
would expire when the period ends.

If you select the Other option from the list, two boxes are displayed under the Expiration Policy
box. First, select an option (Days, Months, or Years) from the second list. Then enter a value for
the selected option in the first box. the group will remain active for the duration you specify
here.

The Group Life Cycle job is responsible for expiring groups.

**Expiration Date**

Displays the expiry date for the group. This box is blank when the expiration policy is set to
"Never expire".

When you change the expiration policy of a group, the expiration date is updated when you save the
changes.

**Group Scope**

The scope set for this group.

- **Domain Local** - Can only contain users in this domain.
- **Global Group** - Can contain users from other domains but is visible only within its own domain.
- **Universal Group** - Can contain users and groups from any domain and is visible in the Global
  Catalog.

NOTE: With Exchange 2013/2016/2019 configured as the messaging provider for the identity store, the
group scope must be set to _Universal_ for mail-enabled groups.

NOTE: In a Microsoft Entra ID based identity store, the group scope does not apply.

**Group Type**

The group type set for the group.

- **Security** - this group will be used for securing public folders, printers and other network
  resources.
- **Distribution** - this group will only be used for email distribution.

NOTE: In a Microsoft Entra ID based identity store, the group type is set to 'security' by default
and this option is not displayed.

**Security**

Indicates the security type set for the group.

**Email**

The email address of the group (applies to mail-enabled groups only, such as an Office 365 group).

# Query Designer - General tab

Use this tab to specify the type of objects to include in your search. Options vary according to the
object type selected in the **Find** list.

Select the sub-types of the selected object type to include in your search.

The following table lists the options available on the **General** tab for each object type in the
**Find** list.

| Find list option            | Objects available for selection                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Messaging System Recipients | - Users with mailboxes – Includes users with messaging system mailboxes - Users with External Email Address – Includes users with email addresses that are external to your organization - Contacts with External Email Address – Includes contacts with email addresses that are external to your organization - Mail-Enabled Groups – Includes mail-enabled groups - Mail-Enabled Folders – Includes mail-enabled folders |
| Computers                   | - Workstations and Servers – Includes workstations and servers - Domain Controllers – Includes domain controllers                                                                                                                                                                                                                                                                                                           |
| Custom                      | By default, it includes all object options for Messaging System Recipients, Computers, and Users, Contact, and Groups. For this reason, the General tab does not display any option for this object type.                                                                                                                                                                                                                   |
| Users, Contacts and Groups  | - Users – Includes users - Contacts – Includes contacts - Groups – Includes groups                                                                                                                                                                                                                                                                                                                                          |

NOTE: The Computer and Contact object types are not supported in a Microsoft Entra ID identity
store.

Preview

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

OK

Saves settings and closes the dialog box.

Cancel

Discards settings and closes the dialog box.

LDAP Query

View the provider query in the LDAP Query box.

# General tab

This tab displays the general attributes of the deleted group, such as the group name, last known
parent, creation date, and deletion date.

Use this tab to view attributes of the deleted groups.

This tab displays the following general attributes:

- Name
- Creation Date
- Common Name
- Object GUID
- Last Known Parent
- Deletion Date
- Distinguished Name
- Group Type
