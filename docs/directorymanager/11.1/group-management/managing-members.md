# Members page

You can add members to the group. You can also remove members. By default, you are a member of the
group.

- To add member(s), click **Add**. Enter a search string to locate the object to add as a group
  member, or click **Advance** to use the [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md) for performing
  a search.

  The selected members get listed in the grid on the **Members** page.

- You can also add members to the group using an external file. You can also choose to import all
  members of an existing group or groups to the membership of this group.

  Click **Import** to launch the **Import Members** wizard for importing group members. See
  [Import Group Members](/docs/directorymanager/11.1/group-management/managing-members.md) for information.

- To remove an object from the members list, select it and click **Remove**.

The **Members** table displays the following information:

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type         | The object type of the member object, such as user or group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Display Name | The name of the member object. You can view the memberships of groups that are members of this group. For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who will receive the messages sent to the distribution group. Click the plus sign (![plus](/img/product_docs/directorymanager/directorymanager/portal/group/create/activedirectory/plus.webp)) next to a member group to view its members. Group membership can be viewed up to the nth level. However, you cannot modify membership of nested groups here. For a parent Dynasty, all child Dynasties are listed as members. NOTE: For an expired security group and Office 365 group, the members list would be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Membership   | Indicates whether the object is a temporary or permanent member of this group. The available membership types are: - Perpetual – To make the object a permanent member of the group. - Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership. - Addition Pending – Indicates that the object will be a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. Example. You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith would not be added to group membership in the provider. On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership in the provider. After May 30, Smith will be removed from Group A as a member in Directory Manager and in the provider. - Removal Pending - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. Example. You remove Smith from Group A on May 15 for future dates, May 20-30. Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19. On May 20, Smith’s membership type in Directory Manager will change to ‘Temporary Removed’; lasting till May 30. However, Smith will be removed from Group A’s membership in the provider. After May 30, Smith will be added back to Group A as a permanent member in Directory Manager and in the provider. - Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member. When the object is a perpetual member, the Membership column is blank. Click anywhere in the row to make it editable for changing the membership type of the group member. NOTE: You cannot change the membership type when the member object is a group. |
| Beginning    | Displays the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Ending       | Shows the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes
temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added to group membership for three days - Wednesday till Friday, it
will not be added. This happens because the Membership Life Cycle job did not run on the particular
days for temporary membership update.

After adding members, click **Next**.

# Group Membership functions

Groups let you apply a common set of policies to multiple users. Groups also guarantee consistency
of permissions and privileges across the membership.

You can add members to groups manually, using a scheduled job, or import them from an external data
source.

## Group Membership Settings

To avoid large, unusual changes to Smart Group and Dynasty memberships, the administrator can
configure the ‘Out of Bounds’ setting for an identity store.

The administrator can:

- Specify the maximum number of members for a Smart Group and Dynasty.
- Determine actions to take if the limit is exceeded, such as not updating group membership or
  breaking the membership into smaller nested groups.

**Example:**

Let’s assume the administrator sets the maximum membership limit to 500 and opts for nested groups
when membership exceeds this limit.

**Scenario 1**: On update, 485 objects are fetched to be added to Group A’s membership. Since the
count is less than 500, the objects are directly added as group members.

**Scenario 2:** On the next update, 620 objects are fetched to be added to Group A’s membership.
Since the count exceeds 500, it breaks the membership into 2 child groups (Group 1 with 500 members
and Group 2 with 120 members) and nests them into Group A. Hence, Directory Manager checks the
member count and takes necessary action before adding members to the group.

NOTE: An Office 365 group cannot have other groups as members. Therefore, the option to break the
membership into child groups would have the following impact:  
 An Office 365 group (Group A) will be updated according to the Smart Group update process. When the
maximum membership limit is hit, the update process will create child group(s). These child groups
will exist but without any link to Group A. Hence, Group A’s membership will be empty.

## Add members to a group

You can add one or more objects to the membership of one or more groups. These objects would be
added as permanent members. You will find them listed as members on the Members tab in
[Group Properties](/docs/directorymanager/11.1/group-management/overview.md).

NOTE: In a Microsoft Entra ID based identity store, only user objects can be added as members of an
Office 365 group.

Use any of the following methods to add members to groups.

### Method 1:

1. [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the required objects.
2. Select these objects on the **Search Results** page and click **Add to Group** on the toolbar.
3. The [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md) is displayed, where you can search and select the
   group(s) to add the objects to.

### Method 2:

1. [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the group you want to add members to.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

   The group's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed.

3. On the **Members** tab, click **Add**.
4. Enter a search string to locate the objects to add as members, or click **Advanced** to use the
   [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md) for performing a search.
5. Save the changes.

NOTE: These methods for adding members are recommended for static (unmanaged) groups only. For Smart
Groups, Directory Manager will discard any manual membership changes when it updates the group
through the Smart Group Update job.

To add a member temporarily to a group, see Change the membership type of a group member .

## Change the membership type of a group member

By default, all new members are added as permanent member to a group. However, you can change the
membership type of an object from permanent to temporary and vice versa.

You can also add or remove an object from a group's membership for a temporary period.

1. [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) a group to change the membership type of its
   member(s).
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

   The group's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed, where the
   **Members** tab lists the group members.

3. To change the membership type of a member, click anywhere in the respective row to make it
   editable, and select one of the following options from the **Membership** list:

   - Perpetual – To make the object a permanent member of the group.
   - Temporary Member – To make the object a temporary member of the group for the period you
     specify in the Beginning and Ending boxes. At the end of the period, the object is removed
     from the group membership.
   - Addition Pending – Indicates that the object will be a temporary member of the group for a
     period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning
     date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date,
     the membership type changes to ‘Temporary Member’.

     Example.

     You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30.

     Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership
     type from May 15 to 19. However, Smith would not be added to group membership in the
     provider.

     On May 20, Smith will become a temporary member of Group A and its membership type will
     change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership
     in the provider.

     After May 30, Smith will be removed from Group A as a member in Directory Manager and in the
     provider.

   - Removal Pending - Indicates that the object will be temporarily removed from group membership
     for a period in the future. Use the Beginning and Ending boxes to set a period. Before the
     beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the
     beginning date, the membership type will change to ‘Temporary Removed’.

     Example.

     You remove Smith from Group A on May 15 for future dates, May 20-30.

     Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type
     from May 15 to 19.

     On May 20, Smith’s membership type in Directory Manager will change to ‘Temporary Removed’;
     lasting till May 30. However, Smith will be removed from Group A’s membership in the
     provider.

     After May 30, Smith will be added back to Group A as a permanent member in Directory Manager
     and in the provider.

   - Temporary Removed – Indicates that the object is temporarily removed from group membership for
     the period specified in the Beginning and Ending boxes. At the end of the period, the object
     is added back to the group membership as a permanent member.

4. Save the changes.

The Membership Life Cycle job updates the temporary membership of groups. It adds and removes
temporary members from group membership on the specified dates.

Consider a scenario where the Membership Life Cycle job is scheduled to run once a week, say
Mondays. If an object is to be added to group membership for three days - Wednesday till Friday, it
will not be added. This happens because the Membership Life Cycle job did not run on the particular
days for temporary membership update.

## Remove members permanently from a group

Follow the steps to remove members permanently from a group.

1. [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the group you want to remove member(s) from.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

   The group's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed.

3. On the **Members** tab, select the group members you want to remove and click **Remove**.
4. Save the changes.

NOTE: This method of removing members is recommended for static (unmanaged) groups only. For Smart
Groups, Directory Manager will discard any manual membership changes when it updates the group
through the Smart Group Update job.

To remove a member temporarily from a group, see Change the membership type of a group member .

## Add a group to the membership of another group (nesting)

Follow the steps to add a group to the membership of another group (nesting).

1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.
2. Select the My Groups, **My Memberships**, or **My Expiring Groups** tab.
3. Select the group(s) to add to the membership of another group and click **Add to Group** on the
   toolbar.
4. On the [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md), search and select the group to add members to it,
   and click **OK**.

## Import members to a group

You can import members to a group using an external file.

NOTE: In a Microsoft Entra ID based identity store, only user objects can be added as members of an
Office 365 group.

1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.

   The Groups page is displayed with the **My Groups** tab in view.

2. Select the group you want to import members to, and click **Properties** on the toolbar.

   The group's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed.

3. On the [Group properties - Members tab](/docs/directorymanager/11.1/group-management/managing-members.md), click **Import** to launch the
   **Import Members** wizard.
4. See [Import Group Members](/docs/directorymanager/11.1/group-management/managing-members.md) for further information and
   instructions.
5. Save the changes.

## Export group members

You can export members of a group to an external file.

1. [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) a group to export its members to an external file.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

   The group's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed.

3. On the **Members** tab, click **Export** to launch the **Export Members** wizard.
4. On the **Attributes** page:

   1. In the **Attributes** list, select the required directory attributes and move them to the
      **Selected Attributes** list.

      Members' data for the selected attributes is exported to the output file.

   2. Click **Next**.

5. On the **File Type** page, select the file type to export the data to. Supported file types are:

   - Microsoft Excel (.xls and .xlsx)
   - Comma Separated Value (.csv)
   - Extensible Markup Language (.xml)
   - Text (.txt)

6. Click **Finish**.
7. When the file is successfully generated, you can save it to your machine.

## Invite a guest user

For a Microsoft Entra ID based identity store, the portal enables you to invite a user from another
Microsoft Entra ID tenant to the membership of a group in your domain.

1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.

   The Groups page is displayed with the **My Groups** tab in view.

   Or

   [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the group you want to invite a guest user to.

2. Select the required group from the list and click **Properties** on the toolbar. The group's
   [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed.
3. On the **Members** tab, click the **Invite User** button.
4. On the **Invite User** dialog box, provide the following information:

   1. In the **Email** box, enter the email address of the user you want to invite to your domain.
   2. In the **Redirect URL** box, provide the URL of a portal page, such as the My Profile page.
      On accepting the invite, the guest user will be redirected to this page.
   3. Add any message for the guest user in the **Personal Message** box.
   4. Click **Invite User**.

      NOTE: If the group you want to invite a guest user to is a distribution group and the
      invited user is not in the guest user list of Microsoft 365 Admin portal than the invited
      user is not added into the group on the first invite but on the second invite.

5. The guest user is sent an email with the redirect link. On clicking this link, the guest user is
   successfully invited.

   The **Invite User** button on the **Invite User** dialog box changes to **Add To Group**.

6. Click the **Add To Group** button to add the guest user as a group member.
7. Save the information.

An object for the guest user is created in Microsoft Entra ID, with type as ‘guest user’. This user
has the same rights and permissions as any other group member.

# My Memberships

To view the groups that you are a member of, click **Groups** on the left navigation pane and select
**My Groups**. On the My Groups page, click the **My Memberships** tab.

The **My Memberships** tab lists only active groups that you are a member of; expired and deleted
groups are not displayed.

You can [Modify Search Directory](/docs/directorymanager/11.1/group-management/allgroups.md#modify-search-directory) to search your memberships
and add [Filter All Groups](/docs/directorymanager/11.1/group-management/allgroups.md#filter-all-groups)by clicking **My Memberships Grid
Filters**. All your memberships matching the filters will be displayed.

# Import Group Members

The **Import Members** wizard enables you to add members to the group using an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as
members to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

## Import group members using a wizard

Use the **Import** button on the **Members** tab of the New Group page and in group properties to
launch the **Import Members** wizard.

1. On the **Lifecycle** page, select whether the imported members should be added permanently or
   temporarily to the group membership. You can also import members from an existing group.

   - **Import Members Perpetually**: to add imported members permanently to the group membership.
   - **Import Members Temporarily**: to add imported members to the group membership for a specific
     period. At end of the period, the imported members are automatically removed from membership.
   - **Import Members From Group(s)**: to add all members of another group or groups to the
     membership of this group. See Import members of an existing group to this group.

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
     2. Click the **Up** arrow to upload the file to the Directory Manager server for processing.
     3. The **File Options** section appears after uploading the file. Select the sheet from the
        drop-down list.
     4. Click **Read Data** to complete the selection process.
     5. Click **Next**.

   - **External Data Source**

     1. On the **Providers** page, select [Query Designer](/docs/directorymanager/11.1/group-management/overview.md) to
        create a query. The query will fetch all those members that match the set criteria.

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

      NOTE: While establishing mapping between a source field and a destination directory
      attribute, select a source field that has unique values, such as email address or
      sAMAccountName.

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
2. Click the **Search Groups** button; the [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md) is displayed,
   where you can search and select the group(s) whose members you want to import into the membership
   of this group.
3. Click **Next**.
4. The **Preview** page lists the groups whose members are to be imported. Click the name of a group
   to view a list of its members.
5. If you do not want existing group members to be deleted during import, make sure that the
   **Append existing items (uncheck to replace)** check box is selected.
6. Click **Finish** to import members from the selected group(s).

# properties - Member Of tab

Use this tab to view the groups of which this group is a member. You can add and remove this group
from the membership of other groups.

**Member Of**

This group is a member of all groups listed in this grid.

For each group listed, you can view the display name, email, and description.

For each column in the grid, an item level filter is also available that lets you filter records
based on a particular criterion. For example; to show groups whose display names start with D, type
**D** in the box under the **Display Name** header and press Enter.

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display Name | Displays the names of the groups this user is a member of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Membership   | Indicates whether the user is a temporary or permanent member of the group. - Perpetual – To make the object a permanent member of the group. - Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership. - Addition Pending – Indicates that the object will be a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. Example. You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith would not be added to group membership in the provider. On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership in the provider. After May 30, Smith will be removed from Group A as a member in Directory Manager and in the provider. - Removal Pending - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. Example. You remove Smith from Group A on May 15 for future dates, May 20-30. Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19. On May 20, Smith’s membership type in Directory Manager will change to ‘Temporary Removed’; lasting till May 30. However, Smith will be removed from Group A’s membership in the provider. After May 30, Smith will be added back to Group A as a permanent member in Directory Manager and in the provider. - Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member. When the user is a perpetual member, the **Membership** column is blank. You cannot change the membership type of the user for any group on the **Member Of** tab. Rather, go to the properties of the specific group and change the user's membership type on the [Group properties - Members tab](/docs/directorymanager/11.1/group-management/managing-members.md). |
| Beginning    | Displays the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Ending       | Displays the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

**Add**

Click it to add this group to the memberships of another group (for example, Group A).

Enter a search string to locate the required group (Group A), or click **Advance** to use the
[Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md) for performing a search

The selected group(s) get listed in the **Member Of** grid.

**Remove**

Select a group (Group A) from the Member Of list and click **Remove** to remove this group from the
membership of Group A.

# Group properties - Members tab

Use this tab to view or modify the members of a group. By default, the primary owner is also a
member of the group.

NOTE: In a Microsoft Entra ID based identity store, only user objects can be added as members of an
Office 365 group.

**Members**

Displays a list of member objects in this group.

| Column Name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type         | The object type of the member object, such as user or group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Display Name | The name of the member object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|              | You can view the memberships of groups that are members of this group. For example, when you add a group (Group B) as a member of this group (Group A), you can view the membership of Group B. You can continue to view memberships of groups that are members of Group B, and so on. This enables the owner of a distribution group to view all users who will receive the messages sent to the distribution group. Click the plus sign next to a member group to view its members. Group membership can be viewed up to the nth level. However, you cannot modify membership of nested groups here. For a parent Dynasty, all child Dynasties are listed as members. NOTE: For an expired security group and Office 365 group, the members list would be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Membership   | Indicates whether the object is a temporary or permanent member of this group. The available membership types are: - Perpetual – To make the object a permanent member of the group. - Temporary Member – To make the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership. - Addition Pending – Indicates that the object will be a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date, the membership type changes to ‘Temporary Member’. Example. You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30. Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership type from May 15 to 19. However, Smith would not be added to group membership in the provider. On May 20, Smith will become a temporary member of Group A and its membership type will change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership in the provider. After May 30, Smith will be removed from Group A as a member in Directory Manager and in the provider. - Removal Pending - Indicates that the object will be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the beginning date, the membership type will change to ‘Temporary Removed’. Example. You remove Smith from Group A on May 15 for future dates, May 20-30. Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type from May 15 to 19. On May 20, Smith’s membership type in Directory Manager will change to ‘Temporary Removed’; lasting till May 30. However, Smith will be removed from Group A’s membership in the provider. After May 30, Smith will be added back to Group A as a permanent member in Directory Manager and in the provider. - Temporary Removed – Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member. When the object is a perpetual member, the Membership column is blank. Click anywhere in the row to make it editable for changing the membership type of the group member. NOTE: You cannot change the membership type when the member object is a group. |
| Beginning    | Shows the beginning date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Ending       | Shows the ending date of the temporary addition or removal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

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
member, or click **Advance** to use the [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md) for performing a
search.

The selected members get listed in the **Members** grid.

NOTE: This button is disabled for Smart Groups and Dynasties since their memberships is determined
by the query set on the [Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.1/group-management/smartgroup.md).  
 See
[Schedule periodic membership updates for Smart Groups/Dynasties](/docs/directorymanager/11.1/group-management/scheduleupdate.md#schedule-periodic-membership-updates-for-smart-groupsdynasties).

**Import**

You can add members to the group using an external file.

You can also choose to import all members of an existing group or groups to the membership of this
group.

Click **Import** to launch the **Import Members** wizard for importing group members. See
[Import Group Members](/docs/directorymanager/11.1/group-management/managing-members.md) for information and instructions.

**Export**

You can export the list of members to an external file. Supported file formats are: .txt, .csv,
.xls, .xlsx and .xml.

Click **Export** to launch the **Export Members** wizard for exporting group members. Select the
attributes you want to export. For information and instructions, see
[Export group members](/docs/directorymanager/11.1/group-management/managing-members.md#export-group-members).

**Remove All**

To remove all the members at together, click **Remove all**.

**Remove**

To remove an object from the members list, select it and click **Remove**.
