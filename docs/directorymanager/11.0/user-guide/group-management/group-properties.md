# Group properties - Advanced tab

Use this tab to control the group's visibility in the messaging provider's address book and manage
out-of-office notifications.

You can also specify non-delivery report (NDR) recipients when this group does not receive a message
sent to it. The non-delivery report lets the recipient know that the message was not delivered.

**Admin Note**

Notes from the administrator.

**OOF Reply to originator**

Set a mail-enabled group (Group A) to send out-of-office auto-replies to the message originator
(sender), when the group (Group A) receives a message and one or more group members have
out-of-office status.

NOTE: This setting applies if Microsoft Exchange is configured as the messaging system for the
identity store.

**Hide membership**

Indicates whether to hide the membership of mail-enabled groups in the messaging provider's address
book (such as the Outlook address book).

If selected, the group members will not be visible from within the address book.

**Delivery Reports**

Specify non-delivery report (NDR) recipients when a message sent to this group is not delivered. The
non-delivery report lets the recipient know that the message was not delivered.

Options are:

- **Report to originator** - The non-delivery report is sent to the sender to inform him or her that
  the message was not delivered to the target group.
- **Report to owner** - The non-delivery report is sent to the group owner to inform him or her that
  a message sent to the group was not delivered to group members.
- **Do not send delivery report** - Non-delivery reports are not sent to anyone.

NOTE: Non-delivery reports are sent if an SMTP server is configured for the identity store.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Object properties - Attributes tab

Use this tab to manage custom attributes for this object. These attributes are used to store
additional information about the object. For example, you can use custom attributes to save health
insurance data of a user.

Attribute 1

The value of the custom attribute 1.

Attribute 2

The value of the custom attribute 2.

Attribute 3

The value of the custom attribute 3.

Attribute 4

The value of the custom attribute 4.

Attribute 5

The value of the custom attribute 5.

Attribute 6

The value of the custom attribute 6.

Attribute 7

The value of the custom attribute 7.

Attribute 8

The value of the custom attribute 8.

Attribute 9

The value of the custom attribute 9.

Attribute 10

The value of the custom attribute 10.

Attribute 11

The value of the custom attribute 11.

Attribute 12

The value of the custom attribute 12.

Attribute 13

The value of the custom attribute 13.

Attribute 14

The value of the custom attribute 14.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Teams Properties - Channels

Use this tab to view, add, and remove the channels in a Teams group.

## Add

To add channel(s) to the group, click **Add** on the toolbar. It displays the **Add Channel** dialog
box.

Add the information for the following:

- **Display Name**

  Assign a display name for the channel that you are adding.

- **Privacy**

  Select the security for the channel. You can choose one of the following options:

  - **Public:** Does not require any members. It is open to all.
  - **Private:** Requires you to add members who will be allowed to view the channel.

- **Description**

  Provide a description for the channel you are creating.

- **Members**

  It is displayed only if you select Private from the Privacy drop-down list.

  Click **Add** and enter a search string to locate the user to add as a member, or click
  **Advance** to use the
  [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
  search.

  Click **Remove** if you want to remove any member.

Click **Add** to add the channel to the Teams group. The channel get listed in the **Channels** grid

## Remove

Select a channel from the **Channels** list and click **Remove** to remove this channel from the
membership of Teams group.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - Delivery Restrictions tab

Use this tab to apply email restrictions to this group. You can manage the list of objects (users,
contacts, groups) from whom this group can and cannot receive emails.

By default, no object is added to the **Accept from** and **Reject from** lists, which indicates
that the group can receive emails from any object. However, when you specify an object in the
**Accept from** list, the group will receive emails from that object only.

**A scenario can be as:**

If you want the group to receive emails from all except one member (Member A) of a group (Group A),
add Group A to the Accept from list and then add Member A to the Reject from list.

**Accept from**

Shows the objects that can send emails to the group.

**Reject from**

Shows the objects whose emails will not be delivered to the group.

**Add**

To add an object to a list, click **Add** in the respective area. Enter a search string to locate
the required object, or click **Advance** to use the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
search.

**Remove**

To remove an object from a list, select it and click **Remove** in the respective area.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - Dynasty Options tab

GroupID provides advanced options that you can use to enhance the Dynasty structure and its
membership. You can:

- Modify the attributes an Organizational/Geographical/Custom Dynasty is build on
- Modify the structure of a managerial Dynasty
- Edit the template used to generate the alias and display names of child groups
- Control the attribute inheritance behavior

Your changes will be reflected on the next update of the Dynasty.

NOTE: Advanced Dynasty options are available for Dynasties of the parent and middle level, but not
for the leaf level.

## For an Organizational/Geographical/Custom Dynasty

**Alias Template**

This setting generates the alias names of child groups. **%GROUPBY%** is replaced with the actual
value of the Attributes.

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                               | Valid Characters                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange Server 2013 Exchange Server 2016 Exchange Server 2019 | - Uppercase letters (A - Z) - Lowercase letters (a - z) - Numeric digits (0 - 9) - Special characters (#, $, %, &, ', \*, +, -, /, =, ?, ^, \_, \`, \{, \| , \} or ~). You can use one or more periods in an alias, but each must be preceded and followed by at least one of the other characters |
| All other messaging systems                                    | - Uppercase letters (A - Z) - Lowercase letters (a - z) - Numeric digits (0 - 9)                                                                                                                                                                                                                   |

**Display Name Template**

The template to use to generate the display names of the child groups. **%GROUPBY%** is replaced
with the actual value of the Attributes.

**Attributes**

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes**
area.

You can view and change the attributes for parent and middle Dynasties.

- Click **Add** to select a new attribute to add a new level to the Dynasty.
- Select an attribute and click **Edit** to modify it.
- Click **Remove** to remove the selected attribute.

See the
[Dynasty Options page](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
for details.

**Inheritance**

Use this setting to specify when Dynasty children inherit attributes. Options are:

- **Inherit on creation**: Dynasty children will inherit the attributes' values only when the
  Dynasty is created. Moreover, whenever a new child group is created, it will inherit the
  attributes' values.
- **Always inherit**: Dynasty children will inherit the attributes' values every time the parent
  Dynasty is updated.
- **Never inherit**: Dynasty children will never inherit attribute values from the parent.

The attributes to be inherited are specified at the identity store level. See Dynasty Settings.

When, for a child Dynasty, you change the value of an inherited attribute, the new value may or may
not persist, depending on the inheritance option selected for the parent Dynasty. Here is an
example:

Suppose the administrator has set the managedBy attribute for inheritance.

- With the **Always inherit** option selected for the parent Dynasty, any modifications made to the
  value of the managedBy attribute for a child Dynasty will be replaced with the value of the
  managedBy attribute set for the parent Dynasty, whenever the Dynasty is updated.
- With the **Never inherit** option selected, any modifications made to the value of the managedBy
  attribute for a child Dynasty will persist after update

## For a Managerial Dynasty

Top Manager, Include manager as member, Set manager as owner, Create a Flat managerial list, Exclude
nested lists of direct reports, Create groups in same container as manager, Create groups in this
container

When you create a managerial Dynasty, you specify a Dynasty structure that determines how query
results are grouped.

For example, you specify whether you want to create a separate Smart Group for the direct reports of
the top manager and sub-level managers, or add all direct reports of the top manager and sub-level
managers as members of a single group.

You can view and change these structure options for parent and middle Dynasties. For details, see
the
[Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md).

NOTE: (1) If the **Set manager as owner** check box is selected, the **Always inherit** option is
set for Inheritance, and the managedBy attribute is specified for inheritance, the **Set manager as
owner** option takes priority over the managedBy attribute inheritance. Hence, the manager of a
child Dynasty would be set as its respective primary owner.  
(2) When you clear the **Set manager as owner** check box, the manager set as the primary owner of a
parent Dynasty will not be removed. However, when the Dynasty is updated, the primary owner of a
child Dynasty may be updated, depending on the Dynasty inheritance options. For example, if the
**Always inherit** option is set for Inheritance and the managedBy attribute is specified for
inheritance, the primary owner of the parent Dynasty would be set as the primary owner for all child
Dynasties, replacing their respective primary owners.

**Attributes**

Set a custom attribute to create a managerial lineage in the context of this attribute.

See the
[Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)for
a discussion on attributes.

In addition to the scenarios discussed, the following also apply on Dynasty update:

- Specify the 'XadditionalManager' attribute in addition to the 'Manager' attribute for a parent
  managerial Dynasty.

  On update, new child Dynasties are created with respect to the additional manager attribute data
  and added in their respective managers' direct reports and additional manager's direct reports.

- Remove the 'XadditionalManager' attribute for a parent managerial Dynasty.

  On update, the direct reports of users created with respect to the additional manager attribute
  data are removed from their respective managers' and additional managers' direct reports.

  If the Delete Empty and Orphan Dynasty children setting is applied, direct reports of users
  created due to the additional manager attribute data are not only removed from their respective
  managers' and additional managers' direct reports; they also get deleted.

**Alias Template**

This setting is used to generate the alias names of the Dynasty's child groups. **%MANAGER%** is
replaced with the alias of the manager being processed. Normally, the mailnickname attribute is used
to store the alias. However, if this attribute is not set, then **%MANAGER%** is replaced with the
display name of the manager.

To use an attribute other than mailNickname for generating the alias for child groups, update the
**%MANAGER%** statement with the desired attribute name. Note that the value of the attribute must
be unique.

Example using the cn attribute:

%MANAGER.cn%

Example using the name attribute:

%MANAGER.name%

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                               | Valid Characters                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange Server 2013 Exchange Server 2016 Exchange Server 2019 | - Uppercase letters (A - Z) - Lowercase letters (a - z) - Numeric digits (0 - 9) - Special characters (#, $, %, &, ', \*, +, -, /, =, ?, ^, \_, \`, \{, \| , \} or ~). You can use one or more periods in an alias, but each must be preceded and followed by at least one of the other characters |
| All other messaging systems                                    | - Uppercase letters (A - Z) - Lowercase letters (a - z) - Numeric digits (0 - 9)                                                                                                                                                                                                                   |

**Display Name Template**

The template is used to generate the display names of the Dynasty's child groups. **%MANAGER%** is
replaced with the display name of the manager being processed. To use an attribute other than
displayName to name the child groups, update the **%MANAGER%** statement with the desired attribute
name. Note that the value of the attribute must be unique.

Example using the cn attribute:

%MANAGER.cn%

Example using the name attribute:

%MANAGER.name%

NOTE: For a managerial Dynasty, the **%MANAGER%** variable for the alias and display name templates
must be the same. The selected attribute must be a string and cannot include characters that are not
supported in pre-Windows 2000 group names.

**Inheritance**

See Inheritance.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)

# Group properties - Email tab

Use this tab to view the email addresses assigned to this group. If your portal is connected to an
identity store having Exchange 2013/2016/2019 deployed; then on this tab, you can also specify
Exchange additional owners for the group. Exchange additional owners have the same privileges as the
primary owner.

**Addresses**

In case of a mail-enabled group, Microsoft Exchange assigns different addresses to it for
communication with different repositories (such as Address Book, SIP, Outlook). These addresses are
displayed in this box.

**Managed by**

Microsoft Exchange 2013/2016/2019 offers the co-managed by feature that enables you to specify
Exchange additional owners for a group.

The **Managed by** section is displayed when Microsoft Exchange Server 2013/2016/2019 is deployed as
the messaging provider for the identity store your portal is connected to. This list shows Exchange
additional owners specified for the group.

GroupID sends group expiry, deletion, and renewal notifications to all Exchange additional owners
along with the group’s primary owner and additional owners. See
[Group properties - Owner tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
in group properties.

- Click **Add** to add an Exchange additional owner. Enter a search string to locate the required
  object, or click **Advance** to use the
  [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
  search.
- To remove an Exchange additional owner, select it and click **Remove**.

NOTE: Only mail-enabled users can be designated as Exchange additional owners.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group Properties - Entitlement tab

Entitlement computes the effective NTFS permissions granted to objects on shared resources residing
on a server in an Active Directory identity store. The Entitlement tab provides an interface for
users to view these permissions. Users can view the permissions granted to an the group over files
and folder residing on a server.

Permission types include:

- Explicit permissions
- Inherited permissions (inherited from a group or folder)

So, for example, if a user is a member of a group that has permissions on a shared server, you can
simply remove the user from group membership to revoke his/her access to that server.

To facilitate permission viewing, do the following:

- Specify one or more servers in identity store configurations.  
   This must be a server in an Active Directory based identity store.
- Compute all permissions that directory objects have on the shared files and folders on those
  server(s).
- View these permissions in the GroupID portal.

## Insights job

When you add the first server for permission analysis, an Insights job is automatically created for
that identity store and displayed against the Scheduling node. By default, this job runs daily to
replicate permissions granted on shared files and folders on the servers.

## Permissions on the GroupID Insights portal

You can enable or restrict a security role from accessing the Insights portal. Use the Criteria tab
in role properties to specify the GroupID clients that role members can or cannot access.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - General tab

This tab allows you to view or modify the general information about the group.

**Display name**

The display name of the group.

**Alias**

The alias for the group.

**Manager can update membership**

Select this check box to enable the group managers (primary owner and Exchange additional owners) to
update this group’s membership directly on the directory server. Additional owners are not included
because they are GroupID-specific and the directory does not recognize them.

This is a provider-end permission and does not impact role-based permissions assigned at the
identity store level in GroupID. Nor do role-based permissions assigned at the identity store level
have any impact on this feature.

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

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Object properties - History tab

This tab displays the object's history, which includes all changes to the object since its creation.

History is available if the administrator has enabled history tracking for the identity store in
GroupID Management Console. See
[History](/docs/directorymanager/11.0/user-guide/portal/index.md).

What do you want to do?

- [View History](#view-history)
- [Export History Data](#export-history-data)
- [Add notes to history items](#add-notes-to-history-items)

## View History

The **History** area displays the history for the object. History items in the view are arranged
according to date, showing the most recent at the top.

This view is also called the detailed view.

### Switch to Administrative View

Click the **Switch to Administrative View** link to switch to the administrative view. This view is
only available if you have administrative privileges.

It displays history data in a tabular form. History items are grouped by date. Each date group
displays changes made to the object during that period.

You can expand an item to view more details, such as the names of the attributes modified in an
action along with their old and new values.

## Export History Data

You can export history data displayed on this page to an external file.

1. Click the **Export History** button and select the file type to export history data to. Supported
   formats are:

   - Excel
   - CSV
   - XML

2. The file is created at the download location specified in the browser settings.

## Add notes to history items

GroupID enables a user to add notes to history items that were logged as a result of any change they
made. A note may explain the reason for making a certain change, such as why they changed the
security type for a group.

Only the user who added the note can update it. Other users can only view this note; they cannot
edit or add comments.

- The **Add Note** button is available next to a history item listed.
- Once you add a note, the **Add Note** button changes to **View Note**. All portal users can use
  this button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and all History
pages i.e.[My History](/docs/directorymanager/11.0/user-guide/portal/index.md),
[My Direct Reports' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
and [My Groups' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
pages.

1. Click the **Add Note** button next to a history item to add a note to it.
2. On the **Add Note** dialog box, write a note and click **Add Note** to save it.

   Your note can have a maximum of 500 characters.

### Edit a note

You can only edit the note that you have added.

1. Click the **View Note** button next to a history item to view or edit the note for it.
2. On the **Note** dialog box, click the **Edit Note** button and update the note.
3. Click **Update Note** to save the changes.

### View a note

Once a note is added, other users can view it, but they cannot edit it or add comments to it.

- In the Detailed view:

  Click the **View Note** button next to a history item to view the note for it.

- In the Administrative view:

  The **Note** column displays the note.

### Remove a note

You can only remove the note that you have added.

1. Click the **View Note** button next to a history item to view or remove the note for it.
2. Click the **Edit Note** button and remove the note.
3. Click **Update Note**.

See Also

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)

# Import Additional Owners

The **Import Additional Owners** wizard enables you to specify additional owners for a group using
an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as
additional owners to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

What do you want to do?

- [Import additional owners using a wizard](#import-additional-owners-using-a-wizard)

## Import additional owners using a wizard

Use the **Import** button on the **Owners** tab of the New Group page and in group properties to
launch the **Import Additional Owners** wizard.

1. On the **File** page, click **Browse** to locate and select the file containing the data to
   upload.
2. Click the **Up** arrow to upload the file to the GroupID server for processing.
3. Click **Next**.
4. On the **Import** page, follow these steps:

   1. In the **Import Options** section, select this site/domain or the entire directory from the
      **Search** drop-down list.

      The wizard compares records in the import file with records in the selected domain or
      directory to update the group's membership.

   2. In the **Map Field** area, map a field in the source file (**Source Field**) with a directory
      attribute (**Destination**).

      The value in the selected source field is compared to the value of the selected destination
      field, and records with matching values are added to the group as members.

5. The **Preview** page displays the possible outcome of the import process based on the settings
   specified on the previous pages. The wizard processes the records from the source file by
   matching the values of the source and destination fields. Results displayed may include the
   following types of items:

   - **Resolved Items:**

     Shows all objects that will be successfully processed.

   - **Unresolved Items:**

     Shows objects that will not be processed because a matching object could not be found in the
     destination directory.

   - **Ambiguous Items:**

     Shows objects for which duplicate entries were found in the destination directory.

6. Click **Finish** to import the Additional Owners.

**See Also**

- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Import Group Members

The **Import Members** wizard enables you to add members to the group using an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as
members to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

What do you want to do?

- [Import group members using a wizard](#import-group-members-using-a-wizard)
- [Import members of an existing group to this group](#import-members-of-an-existing-group-to-this-group)

## Import group members using a wizard

Use the **Import** button on the **Members** tab of the New Group page and in group properties to
launch the **Import Members** wizard.

1. On the **Lifecycle** page, select whether the imported members should be added permanently or
   temporarily to the group membership. You can also import members from an existing group.

   - **Import Members Perpetually**: to add imported members permanently to the group membership.
   - **Import Members Temporarily**: to add imported members to the group membership for a specific
     period. At end of the period, the imported members are automatically removed from membership.
   - **Import Members From Group(s)**: to add all members of another group or groups to the
     membership of this group. See
     [Import members of an existing group to this group](#import-members-of-an-existing-group-to-this-group).

2. In case of temporary membership, use the **Duration** list to specify the membership duration of
   the imported members. Options are:

   - **7 Days**, to add members to the group for 7 days starting today.
   - **30 Days**, to add members to the group for 30 days starting today.
   - **60 Days**, to add members to the group for 60 days starting today.
   - **90 Days**, to add members to the group for 90 days starting today.
   - **Custom**, to add objects to the group for the period you specify in the **From Date** and
     **To Date** boxes.

3. Click **Next**.
4. On the Data Source page, select the data source that contains the objects to import to the group
   membership from the directory. Select either of the two options:

   - **Local File**

     1. On the **File** page, click **Browse** to locate and select the file containing the data
        to upload.
     2. Click the **Up** arrow to upload the file to the GroupID server for processing.
     3. The **File Options** section appears after uploading the file. Select the sheet from the
        drop-down list.
     4. Click **Read Data** to complete the selection process.
     5. Click **Next**.

   - **External Data Source**

     1. On the **Providers** page, select
        [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
        to create a query. The query will fetch all those members that match the set criteria.

        The Query Designer is not working. After adding provider in the data source, it is
        unable to read the table.

     2. Click **Next**.

5. On the **Import** page, follow these steps:

   1. In the **Import Options** section, select this site/domain or the entire directory from the
      **Search** drop-down list.

      The wizard compares records in the import file with records in the selected domain or
      directory to update the group's membership.

   2. In the **Map Field** area, map a field in the source file (**Source Field**) with a directory
      attribute (**Destination**).

      The value in the selected source field is compared to the value of the selected destination
      field, and records with matching values are added to the group as members.

6. Click **Next**.
7. The **Preview** page displays the possible outcome of the import process based on the settings
   specified on the previous pages. The wizard processes the records from the source file by
   matching the values of the source and destination fields. Results displayed may include the
   following types of items:

   - **Resolved Items:**

     Shows all objects that will be successfully processed.

   - **Unresolved Items:**

     Shows objects that will not be processed because a matching object could not be found in the
     destination directory.

   - **Ambiguous Items:**

     Shows objects for which duplicate entries were found in the destination directory.

8. If you do not want existing group members to be deleted during import, make sure that the
   **Append existing items (uncheck to replace)** check box is selected.
9. Click **Finish** to import members from the specified file or provider.

## Import members of an existing group to this group

You can import all members of an existing group or groups to the membership of another group.

Use the **Import** button on the **Members** page of the New Group wizard and in group properties to
launch the **Import Members** wizard.

1. On the **Lifecycle** page, select the **Import Members From Group(s)** option to add all members
   of another group or groups to the membership of this group.
2. Click the **Search Groups** button; the
   [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) is displayed, where
   you can search and select the group(s) whose members you want to import into the membership of
   this group.
3. Click **Next**.
4. The **Preview** page lists the groups whose members are to be imported. Click the name of a group
   to view a list of its members.
5. If you do not want existing group members to be deleted during import, make sure that the
   **Append existing items (uncheck to replace)** check box is selected.
6. Click **Finish** to import members from the selected group(s).

**See Also**

- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - Member Of tab

Use this tab to view the groups of which this group is a member. You can add and remove this group
from the membership of other groups.

**Member Of**

This group is a member of all groups listed in this grid.

For each group listed, you can view the display name, email, and description.

For each column in the grid, an item level filter is also available that lets you filter records
based on a particular criterion. For example; to show groups whose display names start with D, type
**D** in the box under the **Display Name** header and press Enter.

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display Name | Displays the names of the groups this user is a member of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Membership   | Indicates whether the user is a temporary or permanent member of the group. - **Perpetual** - To make the object a permanent member of the group. - **Temporary Member** - To make the object a temporary member of the group for the period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the object is removed from the group membership. - **Addition Pending** - Indicates that the object will be a temporary member of the group for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. **Here is an example:** You add Smith as a temporary member to Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19, 2019. However, Smith would not be added to group membership in the provider. On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30, 2019. Smith will also be added to group membership in the provider. After May 30, Smith will be removed from Group A as a member in GroupID and in the provider. - **Removal Pending** - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. _Here is an example:_ You remove Smith from Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19, 2019. On May 20, Smith’s membership type in GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. However, Smith will be removed from Group A’s membership in the provider. After May 30, Smith will be added back to Group A as a permanent member in GroupID and in the provider. - **Temporary Removed** - Indicates that the object is temporarily removed from group membership for the period specified in the **Beginning** and **Ending** boxes. At the end of the period, the object is added back to the group membership as a permanent member. When the user is a perpetual member, the **Membership** column is blank. You cannot change the membership type of the user for any group on the **Member Of** tab. Rather, go to the properties of the specific group and change the user's membership type on the [Group properties - Members tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md). |
| Beginning    | Displays the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Ending       | Displays the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

**Add**

Click it to add this group to the memberships of another group (for example, Group A).

Enter a search string to locate the required group (Group A), or click **Advance** to use the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
search

The selected group(s) get listed in the **Member Of** grid.

**Remove**

Select a group (Group A) from the Member Of list and click **Remove** to remove this group from the
membership of Group A.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - Members tab

Use this tab to view or modify the members of a group. By default, the primary owner is also a
member of the group.

NOTE: In a Microsoft Entra ID based identity store, only user objects can be added as members of an
Office 365 group.

**Members**

Displays a list of member objects in this group.

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Type         | The object type of the member object, such as user or group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Display Name | The name of the member object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|              | You can view the memberships of groups that are members of this group. For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who will receive the messages sent to the distribution group. Click the plus sign next to a member group to view its members. Group membership can be viewed up to the nth level. However, you cannot modify membership of nested groups here. For a parent Dynasty, all child Dynasties are listed as members. NOTE: For an expired security group and Office 365 group, the members list would be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Membership   | Indicates whether the object is a temporary or permanent member of this group. The available membership types are: - **Perpetual** - To make the object a permanent member of the group. - **Temporary Member** - To make the object a temporary member of the group for the period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the object is removed from the group membership. - **Addition Pending** - Indicates that the object will be a temporary member of the group for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. **Here is an example:** You add Smith as a temporary member to Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19, 2019. However, Smith would not be added to group membership in the provider. On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30, 2019. Smith will also be added to group membership in the provider. After May 30, Smith will be removed from Group A as a member in GroupID and in the provider. - **Removal Pending** - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. _Here is an example:_ You remove Smith from Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19, 2019. On May 20, Smith’s membership type in GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. However, Smith will be removed from Group A’s membership in the provider. After May 30, Smith will be added back to Group A as a permanent member in GroupID and in the provider. - **Temporary Removed** - Indicates that the object is temporarily removed from group membership for the period specified in the **Beginning** and **Ending** boxes. At the end of the period, the object is added back to the group membership as a permanent member. When the object is a perpetual member, the Membership column is blank. Click anywhere in the row to make it editable for changing the membership type of the group member. NOTE: You cannot change the membership type when the member object is a group. |
| Beginning    | Shows the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Ending       | Shows the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

NOTE: For each column, an item level filter is also available that lets you filter records based on
a particular criterion. For example; to show objects whose display names start with D, type **D** in
the box under the **Display Name** header and press Enter.

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes
temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added to group membership for three days - Wednesday till Friday, it
will not be added. This happens because the Membership Life Cycle job did not run on the particular
days for temporary membership update.

**Add**

To add member(s) to the group, click **Add**. Enter a search string to locate the object to add as a
member, or click **Advance** to use the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing a
search.

The selected members get listed in the **Members** grid.

NOTE: This button is disabled for Smart Groups and Dynasties since their memberships is determined
by the query set on the
[Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md).

See
[Schedule periodic membership updates for Smart Groups/Dynasties](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#schedule-periodic-membership-updates-for-smart-groupsdynasties).

**Import**

You can add members to the group using an external file.

You can also choose to import all members of an existing group or groups to the membership of this
group.

Click **Import** to launch the **Import Members** wizard for importing group members. See
[Import Group Members](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
for information and instructions.

**Export**

You can export the list of members to an external file. Supported file formats are: .txt, .csv,
.xls, .xlsx and .xml.

Click **Export** to launch the **Export Members** wizard for exporting group members. Select the
attributes you want to export. For information and instructions, see
[Export group members](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#export-group-members).

**Remove All**

To remove all the members at together, click **Remove all**.

**Remove**

To remove an object from the members list, select it and click **Remove**.

See Also

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group Properties

You can view and manipulate the properties of groups in the connected identity store, depending on
the permissions the GroupID administrator has granted you.

Select the required object and click **Properties** on the toolbar. The object's properties page is
displayed.

**On the group's properties page, you can:**

1. Save the changes made in the properties by clicking **Save**.
2. Click **Delete** to delete the group.
3. **Join** a group as a
   [Join a group temporarily](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#join-a-group-temporarily)
   or
   [Join a group permanently](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#join-a-group-permanently)

   Select **Other** to add other users to the group.

4. **Leave** a group's membership
   [Leave a group temporarily](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#leave-a-group-temporarily)
   or
   [Leave a group permanently](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#leave-a-group-permanently).

   Select **Other** to remove other users from the group.

5. To **Join/Leave** the group, you can also click on **Want to write reason to group owner?** and
   state the the reason for joining or leaving the group for the group owner.
6. Click **Upgrade To** to change the group into one of the following:

   - Smart Group
   - Dynasty
   - Managerial Dynasty

7. Select a group and click **Move Group** from the toolbar. You can specify a new container from
   **Select Container** box where you want to move the group.
8. Add a group's email to your email contact list using the vCard.

   Select a group and click **Add to Contacts** on the toolbar. The portal creates the group's
   vCard and prompts you to save it on your machine. You can then use it to add the group's email
   address to your email contact list.

9. Select a group and click **Send Email** on the toolbar. This launches the default Windows email
   application for sending an email to group members.
10. For Teams, click **Subscribe Group** to get subscriptions of that Teams channel.
11. To unsubscribe from the Teams channel, click **Unsubscribe Group** from the toolbar.

## Group Properties

- [Group properties - General tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Owner tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Members tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Member Of tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Delivery Restrictions tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Email tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Advanced tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Tree View](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Properties - Entitlement tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Similar Groups tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Object properties - History tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Teams Properties - Channels](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
  (For Teams only)
- [Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
  (for Smart Groups and Dynasties only)
- [Group properties - Dynasty Options tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
  (for Dynasties only)

NOTE: The **Delivery Restrictions**, **Attributes**, **Email**, and **Advanced** tabs are not
available for groups in a Microsoft Entra IDbased identity store.

**See Also**

- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- Group Properties
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# Group properties - Owner tab

This tab displays the primary and additional owners of the group. You can do the following,
depending on the Group Owner policy.

- Change the primary owner or even remove it.
- Add and remove additional owners for the group.

Additional owners have the same privileges as the primary owner to manage the group.

NOTE: Only users, contacts and security groups can be set as the primary and additional owners of a
group.  
 If you specify a group, all its members are considered additional owners.

You can also specify Exchange additional owners for the group. See the
[Group properties - Email tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
in group properties.

NOTE: 1. For groups in an Microsoft Entra ID based identity store, only users can be set as primary
owners. Moreover, Microsoft Entra ID supports multiple primary owners for a group. Exchange
additional owners are not supported.  
2. A group must have at least one primary owner.

**Owner**

The primary owner of the group.

To change the primary owner, click **Browse** next to the **Owner** box to launch the
[Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md), where you can search
and select a primary owner.

If the administrator has not enforced the selection of a primary owner in the Group Owner policy,
you can also remove the primary owner. Click the **Remove** button next to the **Owner** box to
remove the primary owner.

NOTE: In a Microsoft Entra ID based identity store, use the **Add** and **Remove** buttons to update
the group's primary owners.

**Suggested Owners**

The GroupID portal can suggest a primary owner for orphan groups, provided that the **Suggest
Owner/Manager** setting is enabled by the administrator in GroupID Admin Center.

The owner is suggested with respect to the group’s membership; GroupID checks the managers of group
members and the user who shows up most as a manager is suggested as the group owner. This user may
or may not be a member of the group.

For example, when 40 members of Group A have User A as their manager and 38 members have User B as a
manager, User A is suggested as Group A’s primary owner. User A may not necessarily be a member of
Group A.

- Click **Make Owner** to set the suggested user as the group's primary owner.
- You may also click **Show more options** to view a list of suggested owners.

**Additional Owners**

Lists the additional owners of the group, if any.

The **Additional Owners** grid displays the following information:

| Column Name   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type          | The object type of the additional owner, such as user or group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Name          | The display name of the additional owner.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Ownership     | Indicates whether an object is a temporary or permanent additional owner of a group. The available ownership types are: - **Perpetual** - To make the object a permanent additional owner of the group. - **Temporary Owner** - To make the object a temporary additional owner of the group for the period you specify in the **Beginning** and **Ending** boxes. At the end of the period, the object is removed from the group ownership. - **Addition Pending** - Indicates that the object will be a temporary additional owner of the group for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Addition Pending’. On the beginning date, the ownership type changes to ‘Temporary Owner’. **Here is an example:** You add Smith as a temporary additional owner of Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be listed with Group A’s additional owners with ‘Addition Pending’ as its ownership type from May 15 to 19, 2019. On May 20, Smith will become a temporary additional owner of Group A and its ownership type will change to ‘Temporary Owner’ from May 20 to 30, 2019. After May 30, Smith will be removed from Group A as an additional owner. - **Removal Pending** - Indicates that the object will be temporarily removed from group ownership for a period in the future. Use the **Beginning** and **Ending** boxes to set a period. Before the beginning date, the object’s ownership type is displayed as ‘Removal Pending’. On the beginning date, the ownership type will change to ‘Temporary Removed’. **Here is an example:** You remove Smith as an additional owner of Group A on May 15, 2019 for future dates, May 20-30, 2019. Smith will be displayed as Group A’s additional owner with ‘Removal Pending’ as ownership type from May 15 to 19, 2019. On May 20, Smith’s ownership type in GroupID will change to ‘Temporary Removed’; lasting till May 30, 2019. After May 30, Smith will be added back to Group A as a permanent additional owner. - **Temporary Removed** - Indicates that the object is temporarily removed from group ownership for the period specified in the **Beginning** and **Ending** boxes. At the end of the period, the object is added back to the group as a permanent additional owner. When the object is a perpetual additional owner, the **Ownership** column is blank. Click anywhere in the row to make it editable for changing the ownership type of the additional owner. NOTE: You cannot change the ownership type when the additional owner is a group. |
| Beginning     | Displays the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Ending        | Displays the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Do not notify | By default, all group-related notifications (such as expiry, deletion, and renewal notifications) are sent to the primary owner and all additional owners, so they can take the necessary action indicated. To exclude an additional owner from receiving notifications, select the **Do not notify** check box. NOTE: When a Smart Group Update job runs on a group, the notification behavior is as follows: Even when the **Do not Notify** check box is selected, the additional owner will receive the notifications if the administrator has included its email address for job-specific notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

NOTE: For each column, a filter is also available that lets you filter records based on a criterion.
For example; to show objects whose display names start with D, type D in the box under the **Name**
header and press **Enter**.  
The Managed By Life Cycle job updates the temporary ownership of groups by adding and removing
temporary owners on the specified dates.

Consider a scenario where the Managed By Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added as a group’s temporary additional owner for three days -
Wednesday till Friday, it will not be added. This happens because the Managed By Life Cycle job did
not run on the particular days for temporary ownership update.

**Add**

To specify additional owner(s) for the group, click **Add**.

Enter a search string to locate the object to add as an additional owner, or click **Advance** to
use the [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) for performing
a search.

**Import**

You can also specify additional owners for the group using an external file. Click **Import** to
launch the **Import Additional Owners** wizard for importing additional owners. See
[Import Additional Owners](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
for further information and instructions.

**Export**

You can export the list of additional owners to an external file. Supported file formats are: .txt,
.csv, .xls, .xlsx and .xml.

Click **Export** to launch the **Export Additional Owners** wizard for exporting additional owners.
Select the attributes you want to export. For information and instructions, see
[Export additional owners](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#export-additional-owners).

**Remove**

To remove an object from the additional owners list, select it and click **Remove**.

NOTE: On saving group properties, you may observe a message, asking you to select X number of
additional owners. It occurs because the Group Owner policy defined for your role at the identity
store level requires that the group must have at least x number of additional owners. Do the needful
and then save the information.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - Similar Groups tab

GroupID enables you to compare groups for similarity on the basis of:

- Group type
- Membership

Take an example of a distribution group (Group A) that has 3 members; Sarah, Frank, and Robin. On
the Similar Groups tab in Group A properties, the portal displays six groups that have the strongest
similarity to Group A. To be ranked as similar to Group A, groups must be of the ‘distribution’ type
and have any or all three members that Group A has.

The six similar groups are sorted in the order of strength, with the strongest match at the top.

Click a group bar or a group in the left pane to view similarity details. The **Similarity Details**
dialog box displays the common type and common members that both groups have.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - Smart Group/Query Designer tab

Use this tab to view and modify the query defined for the Smart Group/Dynasty, and even schedule
updates.

The group’s membership is updated with the records fetched by the query.

NOTE: In case of an Office 365 group in a Microsoft Entra ID based identity store, group membership
is updated with user objects only.

Membership update settings defined for the identity store also impact Smart Group and Dynasty
membership update.

**Container(s)**

Displays the domain or containers the query will run on.

**Object Types**

Lists the object types the query will fetch.

**Server and Storage**

These areas are displayed if the query only fetches messaging system recipients. They display the
server and storage for the query to fetch the records from.

**Query Designer**

To modify the query, click the **Query Designer** button. This launches the
[Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md) dialog
box, where you can modify the query.

Smart Groups and Dynasties in a Microsoft Entra IDbased identity store use a device structured query
language while those in an Active Directory based identity store use LDAP queries to update group
membership.

**Membership Preview**

You can preview the group members of the smart group before executing the changes.

**Clear**

To remove all the queries set in the Query Designer, click **Clear**.

**Scheduled Job**

You can associate a Smart Group Update job with the group; this is a scheduled job that updates the
group’s membership when it runs.

From the **Scheduled Job** list, select a Smart Group Update job to associate with the group.

This list contains Smart Group Update jobs define for the identity store.

NOTE: If the administrator has enforced the job selection option, you cannot save any changes unless
you associate a scheduled job with this group.

**Updated On**

Display the date and time when the group was updated based on the schedule set for it.

**Create a Schedule**

You can create a new schedule other than the ones on the list.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Group properties - Tree View

Using the GroupID portal, you can view the hierarchy for a group. This hierarchy is displayed in the
form of a tree. For example, if Group A is a member of Group B, the graph will display group A and B
in a heirarchical form in this tab.

**Export**

You can also export the graphical representation of the group in the form of a png file.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
