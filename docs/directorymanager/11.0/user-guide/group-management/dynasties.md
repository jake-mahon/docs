---
title: dynasties
sidebar_label: dynasties
description: Directory Manager 11.0 documentation for dynasties with configuration details, usage instructions, and implementation guidance.
---

# Dynasties

A [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)is a Smart Group
that creates and manages other Smart Groups using information in the directory. This view lists only
the Dynasties created in GroupID in the connected identity store, and does not include expired and
deleted Dynasties.

The **Type** column shows whether a Dynasty is a parent, middle, or leaf Dynasty. Both middle and
leaf Dynasties are child Dynasties. The parent Dynasty comes at the top of the hierarchy, followed
by middle and then leaf Dynasties.

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For a Geographical/Organizational/Custom Dynasty - The name of a child Dynasty starts with the
  name of its parent Dynasty (unless you change the naming template for Dynasty children).
- For a Managerial Dynasty - By default, the naming template for its child Dynasties starts with
  "Direct reports of `<manager>`".

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search dynasties and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **Dynasties Grid Filters**. All the dynasties matching the filters will be displayed.

**See Also**

- [All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Dynasties Functions](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# Create an Active Directory Dynasty

The GroupID portal provides the following templates for creating Dynasties:

- **Organizational:** To create a Smart Group for every distinct company, then for each department
  within a company, and finally for each title in a department.
- **Geographical:** To create a Smart Group for every distinct country, then for each state within a
  country, and finally for each city within a state.
- **Managerial:** To either create separate Smart Groups for the direct reports of each manager or
  add all direct reports of the top manager and sub-level managers to a single group.
- **Custom:** To begin with a blank Dynasty and select your own group-by attributes.

These templates provide pre-defined grouping attributes for creating Dynasty levels. You can define
custom group-by attributes to expand the Dynasty levels to suit your organizational model. You can
also combine an external data source with the templates to provide extended criteria for determining
group membership.

NOTE: Settings related to Dynasty membership are configured at the identity store level.

NOTE: Do not move a Dynasty from one domain to another. Child Dynasties would get orphaned and
subsequently deleted.

NOTE: You cannot create mail-enabled Dynasties of the Office 365 group type in a Microsoft Entra ID
based identity store, since an Office 365 group cannot have groups as its members. Only non
mail-enabled Dynasties of the security group type are supported.

Naming conventions for Child Dynasties

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For an Organizational/Geographical/Custom Dynasty:

  The name of a child Dynasty starts with the name of its parent Dynasty (unless you change the
  naming template for Dynasty children).

- For a Managerial Dynasty:

  By default, the naming template for its child Dynasties starts with "Direct reports of
  `<manager>`".

To modify the display name template for child Dynasties, see
[Modify alias and display name templates](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-alias-and-display-name-templates).

NOTE: In the Dynasty creation/update process, a child Dynasty will not be created if it bears the
same name as that of an existing object in the directory. For example, when you create a custom
Dynasty, test1, on one attribute, SamAccountName, it’s child Dynasties would be named as
test1-Robert, test1-John, and so on. However, if test1-Robert already exists as a user object,
GroupID will skip the test1-Robert child Dynasty and continue to create the rest of the Dynasty.

What do you want to do?

- [Create a Dynasty using the Organizational/Geographical/Custom template](#create-a-dynasty-using-the-organizationalgeographicalcustom-template)
- [Create a Dynasty using the Managerial template](#create-a-dynasty-using-the-managerial-template)

## Create a Dynasty using the Organizational/Geographical/Custom template

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Organizational Dynasty**, **Geographical Dynasty**, or **Custom Dynasty** option
   button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify basic information about the Dynasty.
4. On the
   [Dynasty Options page](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md),
   view or change the attributes in the **Attributes** area and click **Next**.

   Dynasties create Smart Groups for each distinct value of each listed attribute. Depending on the
   Dynasty template selected, the **Attributes** area displays the list of default attributes for
   the template; however, you can add and remove attributes. For the Custom template, no attribute
   is displayed.

5. The [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
   page displays the default query that GroupID will use to determine the Dynasty membership. The
   default query returns all users with Exchange mailboxes, along with users and contacts with
   external email addresses, which are then grouped by the specified group-by attributes.

   Review the query for selecting the group members, then click **Next**.

   For details, see the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md).

6. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

7. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

## Create a Dynasty using the Managerial template

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Managerial Dynasty** option button and click **Next**.
3. On the
   [General page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify basic information about the Dynasty.
4. On the
   [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md),
   specify a structure for the Dynasty and click **Next**.

   By default, GroupID constructs a managerial Dynasty structure by first creating a Smart Group
   for all direct reports of the selected top-level manager and then continues down the Dynasty
   structure, creating separate Smart Groups for the direct reports to each sub-level manager.
   However, you can choose to create a single Smart Group for the direct reports of all levels of
   managers rather than creating separate groups.

5. The [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
   page displays the default query that GroupID will use to determine the Dynasty membership. This
   query returns all users with Exchange mailboxes, along with users and contacts with external
   email addresses, which are then grouped as per the managerial Dynasty structure.

   Review the query for selecting the group members, then click **Next.**

   For details, see the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md).

6. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.  
    (3) If you have selected the **Set Manager as owner** option on the **Dynasty Options** page,
   the top manager would be displayed as the primary owner instead of the logged-in user.  
    In case you change the owner, the new recipient would be the Dynasty’s primary owner even if
   the **Set Manager as owner** check box is selected.

7. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Create a Microsoft Entra ID Dynasty

The GroupID portal provides the following templates for creating Dynasties:

- **Organizational:** To create a Smart Group for every distinct company, then for each department
  within a company, and finally for each title in a department.
- **Geographical:** To create a Smart Group for every distinct country, then for each state within a
  country, and finally for each city within a state.
- **Managerial:** To either create separate Smart Groups for the direct reports of each manager or
  add all direct reports of the top manager and sub-level managers to a single group.
- **Custom:** To begin with a blank Dynasty and select your own group-by attributes.

These templates provide pre-defined grouping attributes for creating Dynasty levels. You can define
custom group-by attributes to expand the Dynasty levels to suit your organizational model. You can
also combine an external data source with the templates to provide extended criteria for determining
group membership.

NOTE: Settings related to Dynasty membership are configured at the identity store level.

NOTE: Do not move a Dynasty from one domain to another. Child Dynasties would get orphaned and
subsequently deleted.

NOTE: You cannot create mail-enabled Dynasties of the Office 365 group type in a Microsoft Entra
IDbased identity store, since an Office 365 group cannot have groups as its members. Only non
mail-enabled Dynasties of the security group type are supported.

**Naming conventions for Child Dynasties**

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For an Organizational/Geographical/Custom Dynasty:

  The name of a child Dynasty starts with the name of its parent Dynasty (unless you change the
  naming template for Dynasty children).

- For a Managerial Dynasty:

  By default, the naming template for its child Dynasties starts with "Direct reports of
  `<manager>`".

To modify the display name template for child Dynasties, see
[Modify alias and display name templates](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-alias-and-display-name-templates).

NOTE: In the Dynasty creation/update process, a child Dynasty will not be created if it bears the
same name as that of an existing object in the directory. For example, when you create a custom
Dynasty, test1, on one attribute, SamAccountName, it’s child Dynasties would be named as
test1-Robert, test1-John, and so on. However, if test1-Robert already exists as a user object,
GroupID will skip the test1-Robert child Dynasty and continue to create the rest of the Dynasty.

What do you want to do?

- [Create a Dynasty using the Organization/Geographical/Custom template](#create-a-dynasty-using-the-organizationgeographicalcustom-template)
- [Create a Dynasty using the Managerial template](#create-a-dynasty-using-the-managerial-template)

## Create a Dynasty using the Organization/Geographical/Custom template

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Organizational Dynasty**, **Geographical Dynasty**, or **Custom Dynasty** option
   button and click **Next**.
3. On the
   [General - Microsoft Entra ID](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)page,
   specify basic information about the Dynasty.
4. On the
   [Dynasty Options page](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md),
   view or change the attributes in the **Attributes** area and click **Next**.

   Dynasties create Smart Groups for each distinct value of each listed attribute. Depending on the
   Dynasty template selected, the **Attributes** area displays the list of default attributes for
   the template; however, you can add and remove attributes. For the Custom template, no attribute
   is displayed.

5. The [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
   page displays the default query that GroupID will use to determine the Dynasty membership. The
   default query returns all users with Exchange mailboxes, along with users and contacts with
   external email addresses, which are then grouped by the specified group-by attributes.

   Review the query for selecting the group members, then click **Next**.

   For details, see the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md).

6. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

7. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click **Finish** to complete the wizard.

## Create a Dynasty using the Managerial template

1. In the GroupID portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   select the **Managerial Dynasty** option button and click **Next**.
3. On the
   [General - Microsoft Entra ID](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)page,
   specify basic information about the Dynasty.
4. On the
   [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md),
   specify a structure for the Dynasty and click **Next**.

   By default, GroupID constructs a managerial Dynasty structure by first creating a Smart Group
   for all direct reports of the selected top-level manager and then continues down the Dynasty
   structure, creating separate Smart Groups for the direct reports to each sub-level manager.
   However, you can choose to create a single Smart Group for the direct reports of all levels of
   managers rather than creating separate groups.

5. The [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
   page displays the default query that GroupID will use to determine the Dynasty membership. This
   query returns all users with Exchange mailboxes, along with users and contacts with external
   email addresses, which are then grouped as per the managerial Dynasty structure.

   Review the query for selecting the group members, then click **Next**.

   For details, see the
   [ Smart Group page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md).

6. On the
   [Owners page](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md),
   specify primary and additional owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.  
    (3) If you have selected the **Set Manager as owner** option on the **Dynasty Options** page,
   the top manager would be displayed as the primary owner instead of the logged-in user.  
    In case you change the owner, the new recipient would be the Dynasty’s primary owner even if
   the **Set Manager as owner** check box is selected.

7. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

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
   [Set Group Name Prefixes](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
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

**See Also**

- [Create a Microsoft Entra ID Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)

# Dynasty Options page (Managerial Dynasty)

On the **Dynasty Options** page, select whether you want to create separate Smart Groups for the
direct reports of the top manager and sub-level managers, or add all direct reports of the top
manager and sub-level managers as members of a single group. In any case, you must specify a top
manager to work as the starting point for the Dynasty.

On the Dynasty Options page:

1. Use the **Top Manager** field to specify the top-level manager, and thus, the start location for
   the Dynasty.

   Click the ellipsis button and use the
   [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) to select a top
   manager.

2. Select an option from **Dynasty Type** to specify the type of managerial Dynasty you want to
   create.

   - **Managerial List**

     Construct a managerial Dynasty structure by first creating a Smart Group containing all
     direct reports of the top-level manager as members, then creating separate Smart Groups for
     the direct reports (with their respective direct reports as members). This Dynasty structure
     continues till a Smart Group is created for all managers and sub-managers with their
     respective direct reports as members.

     **Example:**

     Take the following data set:

     - Paul is the top manager with three direct reports: Sam, Eric and Don.
     - Sam has two direct reports, Peter and Sean.
     - Eric has no direct report.
     - Don has three direct reports: Ashley, Jason and Tanya.
     - Jason has a direct report, April.

     GroupID would create a Dynasty with the following child groups:

     - Direct reports of Paul

       Members: Sam, Eric, Don

     - Direct reports of Sam

       Members: Peter, Sean

     - Direct reports of Don

       Members: Ashley, Jason, Tanya

     - Direct reports of Jason

       Members: April

   - **Flat Managerial List**

     A flat managerial list is one in which all direct reports of the top manager and sub-level
     managers are added as members of a single group; no separate groups are created for
     different levels of managers.

     Referring the data set used for a Managerial List, a flat managerial list would consist of
     one Smart Group for Paul, with all users as members.

     On selecting this option button, some options on this page get disabled since they do not
     apply to a flat managerial list.

   - **Recursive Flat Managerial List**

     Use a recursive flat managerial list to create a Smart Group for each manager and
     sub-manager. For members, each group would contain the respective manager’s direct reports,
     the direct reports of those direct reports, thus continuing till the nth level.

     Referring to the data set used for a Managerial List, the following child groups will be
     created:

     - Direct reports of Paul

       Members: Sam, Eric, Don, Peter, Sean, Ashley, Jason, Tanya, April

     - Direct reports of Sam

       Members: Peter, Sean

     - Direct reports of Don

       Members: Ashley, Jason, Tanya, April

     - Direct reports of Jason

       Members: April

     On the
     [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
     page, you can also specify a criterion to filter the managers for whom you want to create
     child groups in the Dynasty.

3. Select the **Include manager as member** check box to include the manager as a member of their
   group along with their direct reports, while creating groups for the managerial structure. With
   this check box selected, the manager receives a copy of any email sent to the direct reports
   group.

   By default, this check box is not selected, indicating that the manager of each level of direct
   reports is not included in their respective group.

4. Select the **Set Manager as owner** check box to set the top manager as the primary owner of the
   parent Dynasty.

   On the **Owners** page of the wizard, the top manager would be displayed as the primary owner.
   If you change it, the new recipient would be the owner, even with the **Set manager as owner**
   check box selected.

   In case the Dynasty is not a flat managerial Dynasty, the manager of each child Dynasty will be
   set as its respective owner.

5. For a hierarchical managerial Dynasty, by default, the Dynasty structure adds a sub-level
   manager’s Smart Groups in the membership of the top-level manager’s Smart Groups. Select the
   **Exclude nested lists of direct reports** check box to exclude them from the membership.
6. Specify a container for creating child groups. Options are:

   - **Create groups in same container as manager**: to create groups in the container the
     top-level manager resides in.
   - **Create groups in this container**: to specify a container or organizational unit for the
     child groups to be created in. Click **Browse** next to the **Child Dynasty Container** box to
     specify a container.

7. You can create a managerial Dynasty based on any attribute.

   Use the **Attributes** area to set a custom attribute, such as the XAdditonalManager attribute,
   to create a managerial lineage in the context of this attribute.

   By default, the ‘Manager’ attribute is selected to create a managerial lineage. This attribute
   involves the collaboration of two attributes: manager and direct reports, to create the
   Dynasty’s hierarchical structure.

   Some examples of a managerial Dynasty with a different set of attributes are give below:

   - To add another attribute, click **Add** and select the required attribute.
   - To remove an attribute, select it and click **Remove**.
   - To replace an attribute, select it and click **Edit**. Select another attribute as a
     replacement and click **OK**.
   - Specify the ‘XadditionalManager’ attribute in addition to the ‘Manager’ attribute to create a
     managerial lineage

     Here ‘Manager’ is the primary attribute to create the managerial lineage.)

     You select a top manager to create the Dynasty. The managerial hierarchy for this manager in
     a provider (such as Active Directory) is as follows:

     Top manager: Alan

     Alan is the manager of John, Jane, and Josephine

     John is the manager of Mark and Martin

     Mark is the manager of Sophia and Martin is the manager of Sarah

     John is also the additional manager of Sophia and Sarah

     When the Dynasty is updated:

     - ‘TestManagerial1’ is the parent Dynasty with child Dynasties such as:

       - Direct reports of John
       - Direct reports of Mark
       - Direct reports of Martin
       - Direct reports of Sophia

         (This child Dynasty will be a part of the Direct reports of John and Direct reports
         of Mark, since John is the additional manager and Mark is the primary manager.)

       - Direct reports of Sarah

         (This child Dynasty will be a part of the Direct reports of Martin.)

     If no user is set as additional manager, no child Dynasty will be created with the
     additional manager attribute.

   - Specify a single attribute, ‘XadditionalManager’

     Suppose the managerial hierarchy for the top manager in a provider (such as Active
     Directory) is as follows:

     Top manager: Alan

     Alan is the additional manager of John, Jane, and Josephine

     John is the additional manager of Mark and Martin

     Mark is the additional manager of Sophia and Martin is the additional manager of Sarah

     When the Dynasty is updated:

     - ‘TestManagerial1’ is the parent Dynasty with child Dynasties such as:
     - Direct reports of John
     - Direct reports of Mark
     - Direct reports of Martin

     When Alan is not the additional manager of any user, the parent Dynasty would be created
     without any child Dynasties.

   - Specify a custom attribute, ‘customattribute1’

     Let’s take employeeID as the custom attribute. Data will be as:

     Top manager: Alan with EmployeeId 1

     John (EmpID: 2, CA: 1); Jane (EmpID: 3, CA: 1); Josephine (EmpID: 4, CA: 1)

     Mark (EmpID: 5, CA: 2); Martin (EmpID: 6, CA: 2)

     Sophia (EmpID: 7, CA: 5); Sarah (EmpID: 8, CA: 6)

     When the Dynasty is updated:

     - ‘TestManagerial1’ is the parent Dynasty with child Dynasties such as:

       - Direct reports of John (having Mark and Martin)
       - Direct reports of Mark (having Sophia)
       - Direct reports of Martin (having Sarah)

   - Specify multiple attributes – ‘Manager’, ‘XadditionalManager’ and ‘customattribute1’

     Direct reports for users created with respect to additional manager and custom attribute 1
     are added in their respective managers and additional managers according to the custom
     attribute 1 data.

8. Click **Next**.

**See Also**

- [Create an Active Directory Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)

# Dynasty Options page

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes**
area. Depending on the Dynasty template selected, the **Attributes** area displays the default
attributes for the template; however, you can add and remove attributes. For the Custom template, no
attribute is displayed.

For example, if you specify the Country, State, and City attributes, GroupID creates a group for
every distinct country value, then for each state within a country, and finally for each city in a
state.

- Click **Add** to specify an attribute.
- Click **Edit** to edit the selected attribute options.
- Click **Remove** to remove the selected attribute.

**On the Dynasty Options page:**

1. (Optional) Click **Add** to add more attributes to those shown in the **Attributes** list.

   The **Add Attributes** dialog box is displayed.

   This filter is used to strip out values from Dynasties by allowing you to collapse several
   values into one.

   An example is populating the Office field with the building/office number, thus conveniently
   storing two items of related data in the same field. Now, suppose you need a distribution list
   for each building. If the building name was in its own field (custom attribute 1), you could
   create a Dynasty that groups by the custom attribute 1 field and GroupID would then create a
   group for each building value.

   Attribute value:

   Custom Attribute 1 = MacArthur Plaza

   Sample groups created by GroupID:

   Everyone in MacArthur Plaza

   However, if you were to create a Dynasty that groups by the Office field (which contains both
   the building name and office number), GroupID will create a group for each distinct
   building/office value. This strategy gives you a group for every office number, rather than for
   each building.

   Attribute value:

   Office = MacArthur Plaza/1256C

   Sample groups created by GroupID:

   Everyone in MacArthur Plaza/1256C

   The filter option solves this problem by enabling you to filter out unwanted permutations of
   values.

1. In the **Group items by** list, type or select the field to use for expanding the Dynasty.

   GroupID creates a child group for each unique value of this field.

1. The **Child container** box displays the container where new child groups will be created. If
   this setting is blank, GroupID creates child groups in the same container as the parent Dynasty.

   To change the container, click **Browse** and select a new container.

1. From the **Filter** drop-down list, select an additional group-by filter for greater control over
   the values used to create children.

   - **None**: Do not apply any filter. Simply create a group for each distinct value of the
     attribute selected in the **Group items by** list. For example, distinct values for the
     ‘department’ attribute might be _Engineering_, _Marketing_, and _Finance_.
   - **Left**: Select a portion of the group-by attribute starting from the left for the number of
     characters specified in the **Value** box, and create a group for each distinct value of the
     portion of the attribute selected.
   - **Right**: Select a portion of the group-by attribute, starting from the right for the number
     of characters specified in the **Value** box, and create a group for each distinct value of
     the portion of the attribute selected.
   - **Regular Expression**: A group is created for each distinct value of the regular expression
     specified in the **Value** box.

1. Each group-by level can have a separator. In the **Separator** box, enter a separator character
   to use in both the display name and alias of child groups to separate the group-by values.
1. Click **OK** to close the **Add Attributes** dialog box.

1. Click **Next**.

**See Also**

- [Create an Active Directory Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)

# Dynasty

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. Dynasties help you manage large distribution lists by creating hierarchical group
structures that represent your organization. The Smart Groups that the Dynasty creates are called
child groups and become members of their respective parent Dynasty.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups.

## The group-by field determines child groups

When you create a Dynasty, you specify a query and a field, referred to as the _group-by_ field. The
group-by field is used to divide the query results into groups.

For example, if you set ‘department’ as the group-by field, then each distinct value for the
‘department’ field is returned, for instance, Sales, Marketing, and Human Resources. Thus, a Dynasty
with the group-by field set to ‘department’ creates child groups for each distinct value: Sales,
Marketing, and Human Resources.

## Built-in updates

GroupID keeps the Dynasty active in two ways:

- By adding new child groups as new values are returned for the group-by field.
- By removing existing child groups as previous values of the group-by field no longer exist in the
  directory.

Thus, as new values of the ‘department’ field appear, new groups are created, and as old values
disappear, the corresponding child groups are deleted.

The same process occurs with the membership of each child group. When a user’s department changes
from Sales to Marketing, for example, the user is removed from the Sales child group and added to
the Marketing child group.

## The child-parent relationship

Dynasty children inherit their parent's characteristics and properties, such as group type, group
security, expiry policy, owner, delivery restrictions, message size restrictions and more.
Inheritance saves administrators incalculable time through the systematic application of pre-defined
properties to new groups.

You can modify the values of all inherited attributes for a child, except the expiry policy. Child
Dynasties always inherit the expiry policy from the parent Dynasty and it can only be modified at
the parent level.

Depending on the inheritance option selected for the parent Dynasty on the
[Group properties - Dynasty Options tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
in group properties, the modified values of inherited attributes may or may not persist.

## Multi-level Structure

Dynasties have a multi-level structure. For example, you can create a Dynasty that groups first by
country, then state, and then city. When updated, the Dynasty creates a group for every country,
then it creates a group for every state in a country, and finally it creates a group for each city
within each state. Thus, each user in the organization belongs to a country group, a state group,
and a city group, and as the groups are updated through their multi-level structure, you do not need
to worry that they will go out-of-date.

Dynasties come in handy for creating and maintaining large dynamic distribution lists in your
organization.

**See Also**

- [Group Management](/docs/directorymanager/11.0/user-guide/group-management/index.md)
- [Create an Active Directory Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Create a Microsoft Entra ID Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)

# My Dynasties

This page lists the Dynasties you are the primary owner of. To include the groups for which you are
an additional owner, select the **Display additional group ownership in My Dynasties** check box on
the [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md) panel.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search dynasties and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **My Dynasties Grid Filters**. All the dynasties matching the filters will be displayed.

**See Also**

- [My Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
