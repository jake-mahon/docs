# Dynasty Options page (Managerial Dynasty)

On the **Dynasty Options** page, select whether you want to create separate Smart Groups for the
direct reports of the top manager and sub-level managers, or add all direct reports of the top
manager and sub-level managers as members of a single group. In any case, you must specify a top
manager to work as the starting point for the Dynasty.

On the Dynasty Options page:

1. Use the **Top Manager** field to specify the top-level manager, and thus, the start location for
   the Dynasty.

   Click the ellipsis button and use the [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md) to select a top
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

     Directory Manager would create a Dynasty with the following child groups:

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

     On the [Query Designer](/docs/directorymanager/11.1/group-management/overview.md) page, you can also specify a criterion
     to filter the managers for whom you want to create child groups in the Dynasty.

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

# Dynasty Options page

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes**
area. Depending on the Dynasty template selected, the **Attributes** area displays the default
attributes for the template; however, you can add and remove attributes. For the Custom template, no
attribute is displayed.

For example, if you specify the Country, State, and City attributes, Directory Manager creates a
group for every distinct country value, then for each state within a country, and finally for each
city in a state.

- Click **Add** to specify an attribute.
- Click **Edit** to edit the selected attribute options.
- Click **Remove** to remove the selected attribute.

On the Dynasty Options page:

1. (Optional) Click **Add** to add more attributes to those shown in the **Attributes** list.

   The **Add Attributes** dialog box is displayed.

   This filter is used to strip out values from Dynasties by allowing you to collapse several
   values into one.

   An example is populating the Office field with the building/office number, thus conveniently
   storing two items of related data in the same field. Now, suppose you need a distribution list
   for each building. If the building name was in its own field (custom attribute 1), you could
   create a Dynasty that groups by the custom attribute 1 field and Directory Manager would then
   create a group for each building value.

   Attribute value:

   Custom Attribute 1 = MacArthur Plaza

   Sample groups created by Directory Manager:

   Everyone in MacArthur Plaza

   However, if you were to create a Dynasty that groups by the Office field (which contains both
   the building name and office number), Directory Manager will create a group for each distinct
   building/office value. This strategy gives you a group for every office number, rather than for
   each building.

   Attribute value:

   Office = MacArthur Plaza/1256C

   Sample groups created by Directory Manager:

   Everyone in MacArthur Plaza/1256C

   The filter option solves this problem by enabling you to filter out unwanted permutations of
   values.

1. In the **Group items by** list, type or select the field to use for expanding the Dynasty.

   Directory Manager creates a child group for each unique value of this field.

1. The **Child container** box displays the container where new child groups will be created. If
   this setting is blank, Directory Manager creates child groups in the same container as the parent
   Dynasty.

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

# Dynasties Functions

In Directory Manager portal, you can manage Dynasty structure and its membership using the following
functions.

## Manage attributes for an Organizational/Geographical/Custom Dynasty

Dynasties are built on attributes. For example, if the Country, State, and City attributes are
specified for a Geographical Dynasty, Directory Manager creates a Smart Group for every distinct
country, then for each state within a country, and finally for each city within a state.

1. On the left navigation bar, click **Groups** and then select the **My Groups** tab.

   You can also [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the Organizational, Organizational, or
   custom Dynasty you want to change the attributes for.

2. Select the required Dynasty and click **Properties** on the toolbar.

   The Dynasty's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed with the
   **General** tab in view.

3. On the **Dynasty Options** tab, update the attributes in the **Attributes** area.

   Refer to the [Dynasty Options page](/docs/directorymanager/11.1/group-management/group-dynasties.md) for details.

4. Click **Save**.

## Manage Managerial Dynasty structure

Follow the steps to manage structure of a Managerial Dynasty.

1. On the left navigation bar, click **Groups** and then select the **My Groups** tab.

   You can also [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the Managerial Dynasty you want to
   restructure.

2. Select the required Dynasty and click **Properties** on the toolbar.

   The Dynasty's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed with the
   **General** tab in view.

3. On the **Dynasty Options** tab, modify the options related to the Dynasty structure.

   Refer to the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/group-management/group-dynasties.md)
   for details.

4. Click **Save**.

## Set attribute inheritance

Follow the steps to set attribute inheritance of a dynasty.

1. On the left navigation bar, click **Groups** and then select the **My Groups** tab.

   You can also [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the Dynasty you want to change the
   inheritance option for.

2. Select the required Dynasty and click **Properties** on the toolbar.

   The Dynasty's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed with the
   **General** tab in view.

3. On the **Dynasty Options** tab, select the required option from the **Inheritance** drop-down
   list.

   See [Inheritance](/docs/directorymanager/11.1/group-management/group-dynasties.md).

4. Click **Save**.

## Modify alias and display name templates

Follow the steps to modify alias of an Organizational/Geographical/Custom dynasty.

1. On the left navigation bar, click **Groups** and then select the **My Groups** tab.

   You can also [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the Dynasty you want to change the alias
   or display name template for.

2. Select the required Organizational/Geographical/Custom Dynasty and click **Properties** on the
   toolbar.

   The Dynasty's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed with the
   **General** tab in view.

3. On the **Dynasty Options** tab, use the **Alias Template** and **Display Name Template** boxes to
   modify the respective templates.

   For details, see [Alias Template](/docs/directorymanager/11.1/group-management/group-dynasties.md) and
   [Display Name Template](/docs/directorymanager/11.1/group-management/group-dynasties.md) for an
   Organizational/Geographical/Custom Dynasty.

4. Click **Save**.

Follow the steps to modify aloas of a Managerial dynasty.

1. On the left navigation bar, click **Groups** and then select the **My Groups** tab.

   You can also [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) the Dynasty you want to change the alias
   or display name template for.

2. Select the required Managerial Dynasty and click **Properties** on the toolbar.

   The Dynasty's [Group Properties](/docs/directorymanager/11.1/group-management/overview.md) page is displayed with the
   **General** tab in view.

3. On the **Dynasty Options** tab, use the **Alias Template** and **Display Name Template** boxes to
   modify the respective templates.

   For details, see [Alias Template](/docs/directorymanager/11.1/group-management/group-dynasties.md) and
   [Display Name Template](/docs/directorymanager/11.1/group-management/group-dynasties.md) for a Managerial Dynasty.

4. Click **Save**.

# Group properties - Dynasty Options tab

Directory Managerprovides advanced options that you can use to enhance the Dynasty structure and its
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

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange Server 2013, Exchange Server 2016, Exchange Server 2019 | - Uppercase letters (A–Z) - Lowercase letters (a–z) - Numeric digits (0–9) - Special characters: `#`, `$`, `%`, `&`, `'`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`, `` ` ``, `\{`, `\|`, `\}`, `~` - Periods (`.`) are allowed, but each must be preceded and followed by at least one other valid character |
| All other messaging systems                                      | - Uppercase letters (A–Z) - Lowercase letters (a–z) - Numeric digits (0–9)                                                                                                                                                                                                                                 |

**Display Name Template**

The template to use to generate the display names of the child groups. **%GROUPBY%** is replaced
with the actual value of theAttributes.

**Attributes**

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes**
area.

You can view and change the attributes for parent and middle Dynasties.

- Click **Add** to select a new attribute to add a new level to the Dynasty.
- Select an attribute and click **Edit** to modify it.
- Click **Remove** to remove the selected attribute.

See the [Dynasty Options page](/docs/directorymanager/11.1/group-management/group-dynasties.md) for details.

**Inheritance**

Use this setting to specify when Dynasty children inherit attributes. Options are:

- **Inherit on creation**: Dynasty children will inherit the attributes’ values only when the
  Dynasty is created. Moreover, whenever a new child group is created, it will inherit the
  attributes’ values.
- **Always inherit**: Dynasty children will inherit the attributes’ values every time the parent
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
the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/group-management/group-dynasties.md).

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

See the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/group-management/group-dynasties.md)for a
discussion on attributes.

In addition to the scenarios discussed, the following also apply on Dynasty update:

- Specify the ‘XadditionalManager’ attribute in addition to the ‘Manager’ attribute for a parent
  managerial Dynasty.

  On update, new child Dynasties are created with respect to the additional manager attribute data
  and added in their respective managers’ direct reports and additional manager's direct reports.

- Remove the ‘XadditionalManager’ attribute for a parent managerial Dynasty.

  On update, the direct reports of users created with respect to the additional manager attribute
  data are removed from their respective managers’ and additional managers’ direct reports.

  If the Delete Empty and Orphan Dynasty children setting is applied, direct reports of users
  created due to the additional manager attribute data are not only removed from their respective
  managers’ and additional managers’ direct reports; they also get deleted.

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

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange Server 2013, Exchange Server 2016, Exchange Server 2019 | - Uppercase letters (`A–Z`) - Lowercase letters (`a–z`) - Numeric digits (`0–9`) - Special characters: `#`, `$`, `%`, `&`, `'`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`, `` ` ``, `\{`, `\|`, `\}`, `~` - Periods (`.`) are allowed in aliases, but each must be preceded and followed by at least one other valid character |
| All other messaging systems                                      | - Uppercase letters (`A–Z`) - Lowercase letters (`a–z`) - Numeric digits (`0–9`)                                                                                                                                                                                                                                            |

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

See Inheritance section on this page.
