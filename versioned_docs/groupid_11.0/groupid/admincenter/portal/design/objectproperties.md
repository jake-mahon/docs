# Customize Properties Pages

GroupID enables you to customize the property pages displayed in the portal for these directory objects:

- User
- Group
- Smart Group
- Parent Dynasty
- Middle Dynasty
- Leaf Dynasty
- Mailbox
- Contact
- Computer (Only available for adding to group memberships in the portal. Its properties are read-only.)

NOTE: A Microsoft Entra ID identity store does not support the _computer_ and _contact_ object types.

In the GroupID portal, the properties page of an object has multiple tabs, where each tab groups similar attributes. These tabs are referred to as categories.

You can customize the following:

__For a tab:__

- Add a new tab (category) to an object’s properties page
- Update the details for a tab
- Remove a tab from an object’s properties page

__For a field on a tab:__

- Add a field to a tab
- Update the details for a field
- Rearrange the fields on a tab
- Remove a field from a tab

What do you want to do?

- [Add a Tab (Category)](#add-a-tab-category)
- [Update Tab Details](#update-tab-details)
- [Remove a Tab](#remove-a-tab)
- [Add a Field to a Tab](#add-a-field-to-a-tab)
- [Update a Field](#update-a-field)
- [Rearrange the Fields on a Tab](#rearrange-the-fields-on-a-tab)
- [Remove a Field from a Tab](#remove-a-field-from-a-tab)

## Add a Tab (Category)

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Properties__ in the left pane; the __Properties__ page is displayed.
5. In the __Select Directory Object__ list, select a directory object to add a tab to its properties page.  
   The __Name__ list displays the tabs (categories) currently available on the object’s properties page.
6. Click __Add__. The __Add Design Category__ pane is displayed.
7. Enter a name for the tab in the __Name__ box. The tab will be displayed on the object’s properties page with this name.
8. In the __Visibility Level__ drop-down list, select a security role. The tab would be visible to users of this role and roles with a priority value higher than this role. The tab would not be visible to group
   owners (for their respective groups) and user managers (for their direct reports) if they fall in a lower priority role. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).

   - Select _Never_ to hide the tab from all users.
   - Select _Manager and Owner_ to make the tab visible only to the owner (in case of a group) or manager (in case of a user or contact). It would be hidden from other users, such as group members or a user.
     For example:

     - If _Manager and Owner_ is selected for the _Email_ tab in group properties, the tab would be visible to group owners for their respective groups in the portal.
     - If _Manager and Owner_ is selected for the _Account_ tab in user properties, the tab would be visible to managers for their respective direct reports in the portal.
   - If you have selected ‘User’ or ‘Mailbox’ in the __Select Directory Object__ drop-down list, the _Self_ option is also available in the __Visibility Level__ drop-down list. Select _Self_ to make the tab visible to the respective user or mailbox. It would be hidden from other users, such as the user’s manager. For example, if the _Self_ role is selected for the _General_ tab in user properties, it means that:

     - A user can view the General tab on his or her properties page. He or she cannot view this tab on the properties page of another user.
     - A role with a higher priority value cannot see it for another user.
     - User managers cannot view it for their direct reports.
     - A role with the ‘Manage any profile’ permission in the identity store cannot view it for other users.
9. In the __Access Level__ drop-down list, select a security role. Users of this role and roles with a priority value higher than it can add and update the values of fields on this tab. If group owners/user managers
   fall in a lower priority role, they cannot update the fields on the tab for their respective groups/direct reports. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).

   - Select _Never_ to make the tab and its fields read-only for all users.
   - Select _Manager and Owner_ to enable the owner (in case of a group) or manager (in case of a user or contact) to specify or modify the value of the fields on the tab. It would be read-only for other users,
     such as group members or the respective user. For example, if _Manager and Owner_ is selected for the _Email_ tab in group properties, it means that:

     - Only group owners can specify or modify the values of fields on this tab for their respective groups in the portal.
     - A role with a higher priority value cannot specify or update field values.
     - Group members cannot specify or update field values.
     - A role with the ‘Manage any Group’ permission in the identity store cannot specify or update field values.
   - If you have selected ‘User’ or ‘Mailbox’ in the __Select Directory Object__ list, the _Self_ option is available in the __Access Level__ drop-down list.  
     Select _Self_ to enable the respective user or mailbox to specify or modify the value of the fields on the tab. The tab would be read-only for the user’s manager and other users. For example, if
     _Self_ is selected for the _General_ tab in user properties, it means that:

     - Only the user can add and update the values of fields on the General tab of his or her properties page.
     - A role with a higher priority value cannot specify or update field values.
     - The user’s manager cannot specify or update field values.
     - A role with the ‘Manage any profile’ permission in the identity store cannot specify or update field values.
10. To add fields to the tab, see the [Add a Field to a Tab](#add-a-field-to-a-tab) topic.
11. Click __OK__.
12. Click __Save__ on the __Properties__ page.

## Update Tab Details

You can change the following for a tab:

- Tab name
- Visibility level
- Access level
- Add and remove fields from the tab

__To update a tab:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ list.
6. In the __Name__ list, click __Edit__ for the tab you want to update.
7. On the __Edit Design Category__ pane, update the tab details. Refer to step 7 and onwards in the [Add a Tab (Category)](#add-a-tab-category) topic for details.

## Remove a Tab

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ list.
6. In the __Name__ list, click __Remove__ for a tab to remove it.
7. Click __Save__.

## Add a Field to a Tab

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ list.
6. In the __Name__ list, click __Edit__ for the tab you want to add a field to.
7. On the __Edit Design Category__ pane, click __Add Field__; the __Add Field__ pane is displayed.
8. In the __Field__ drop-down list, select a schema attribute to link to this field.  
   Updating the field in the portal is akin to updating the value of this attribute.
9. In the __Display Name__ box, enter a display name for the field. This name is the field’s label on the tab.
10. In the __Display Type__ drop-down list, select the display type to use for rendering this field on the tab.  
    The list contains basic display types and custom display types defined on the __Custom Display Types__ page. See the [Display Type Categories](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/categories.md) topic.
11. In the __Visibility Level__ drop-down list, select a security role. The tab would be visible to users of this role and roles with a priority value higher than this role. It would not be visible to group owners
    (for their respective groups) and user managers (for their direct reports) if they fall under a lower priority role. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).

    - Select _Never_ to hide the field from all users.
    - Select _Manager and Owner_ to make the field visible only to the owner (in case of a group) or manager (in case of a user or contact). It would be hidden from other users, such as group members or a user.
      For example:

      - If _Manager and Owner_ is selected for the _Expiration Date_ field on the _General_ tab in group
        properties, the field would be visible to group owners for their respective groups in the portal.
      - If _Manager and Owner_ is selected for the _Manager_ field on the _Organization_ tab in user properties, the
        field would be visible to managers for their direct reports in the portal.
    - If you have selected ‘User’ or ‘Mailbox’ in the __Select Directory Object__ drop-down list, the _Self_ option is also available in the __Visibility Level__ drop-down list. Select _Self_ to make the field visible to the respective user or mailbox. It would be hidden from other users, such as the user’s manager. For example, if _Self_ is selected for the _Notes_ field on the _Phone/Notes_ tab in user properties, it means that:

      - A user can view the field on his or her properties page only. He or she cannot see this field on the properties page of another user.
      - A role with a higher priority value cannot view it for another user.
      - User managers cannot view it for their direct reports.
      - A role with the ‘Manage any profile’ permission in the identity store cannot view it for other users.
12. In the __Access Level__ drop-down list, select a security role. Users of this role and roles with a priority value higher than this role can add and update the value of this field. If group owners/user managers
    fall in a lower priority role, they cannot able to update the value of the field for their respective groups/direct reports. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).

    - Select _Never_ to make this field read-only for all users.
    - Select _Manager and Owner_ to enable only the owner (in case of a group) or manager (in case of a user or contact) to specify or modify the value of this field. It would be read-only for other users, such
      as group members or the respective user. For example, if _Manager and Owner_ is selected for the _Expiration Date_ field on the _General_ tab in group properties, it
      means that:

      - Only group owners can specify or modify the value of this field for their groups in the portal.
      - A role with a higher priority value cannot specify or update the field value.
      - Group members cannot specify or update the field value.
      - A role with the ‘Manage any Group’ permission in the identity store cannot specify or update the field value.
    - If you have selected ‘User’ or ‘Mailbox’ in the __Select Directory Object__ list, the _Self_ option is available in the __Access Level__ drop-down list. Select _Self_ to enable the respective user or mailbox to specify or modify the value of the field. The field would be read-only for other users, such as the user’s manager or a role with a higher priority
      value. For example, if _Self_ is selected for the _Notes_ field on the _Phone / Notes_ tab in user properties, it means that:

      - Only the respective user can add and update the value of this field on the _Phone / Notes_ tab in his or her properties page.
      - A role with a higher priority value cannot specify or update the field value.
      - The user’s manager cannot specify or update the field value.
      - A role with the ‘Manage any profile’ permission in the identity store cannot specify or update the field values.
13. Click __Advanced Options__ to display additional fields.
14. As mentioned for visibility level and access level, the field is visible and editable for members of the selected role and roles with a priority value higher than it.  
    In the __Exclude Roles__ area, select the check boxes for the higher priority role(s) to deny them access and visibility on the field.
15. In the __Tooltip Text__ box, enter the text to display when a user hovers the mouse over the field.
16. In the __Max Length__ box, enter a number that represents the maximum number of characters that users can enter as value for this field.  
    Entering _0_ indicates that users can enter an unlimited number of characters as value.
17. Use the __Search Object Types__ area to specify the object types (User, Contact, and/or Group) that can be searched on the portal’s _Find_ dialog box, to set as value for the field.  
    The following display types support the __Find__ dialog box:

    - DN
    - DNs
    - Custom display types created with the Grid type

    When you select any of these display types, GroupID identifies that the value for the field has to be searched and selected using the _Find_ dialog box. The __Search Object Types__ area is displayed, where you can select the required object type(s). For example, if you select _Group_, only groups can be searched and selected as value for the field.  
    You can launch the _Find_ dialog box from multiple portal pages to search for objects to designate as owners, managers, additional owners, members, and more. While specifying the searchable object type(s),
    you must be aware of the kind of value the field requires.
18. Select the __Is Required__ check box to make it mandatory for users to provide a value for the field.
19. Select the __Is Read Only__ check box to make the field read-only.
20. Select the __Filter Bad Words__ check box to ensure that users do not enter any bad word in this field.  
    A value entered for the field is checked against the words listed on the __Bad Words List__ page. Matched values cannot be saved. See the [Manage the Bad Words List](/versioned_docs/groupid_11.0/groupid/admincenter/portal/design/badwords.md) topic.
21. The __Image Attribute__ list is available when ‘DN’ is selected as the display type. This list supports ‘thumbnailPhoto’ as its value.

    - Select the ‘thumbnailPhoto’ attribute in the __Image Attribute__ drop-down list when you want to auto upload an image for the field. Let’s assume you apply this setting for the Primary Manager field in group
      properties. In the portal, the primary manager's image will be displayed alongside his or her name on the group properties page.  
      Note that for the image to display, the ‘thumbnailPhoto’ attribute must have a value stored; in case of no value, an image placeholder is displayed.
    - If you do not want to auto upload an image for the field, clear the value in the __Image Attribute__ box.
22. Click __OK__.  
    The field is displayed in the __Fields__ area on the __Edit Design Category__ pane. You can rearrange the fields, update field details, and even remove a field from the tab.
23. Click __OK__.
24. Click __Save__ on the __Properties__ page.

## Update a Field

You can change the following for a field:

- The name of the field (used as the field’s label in the portal)
- The schema attribute linked with the field
- The display type used to render the field in the portal
- Visibility level
- Access level
- Tooltip

The following field properties vary from field to field. You can:

- Specify the maximum characters that a user can enter as value for the field
- Make the field editable or read–only
- Place a check that prevents users from using certain words as value for the field
- Make it optional or mandatory for users to provide a value for the field
- For search fields, you can specify the object types (groups, users, contacts) that can be searched and set as field value
- Specify whether to auto upload user photos with fields that require user names as value

__To update a field:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ list.
6. In the __Name__ list, click __Edit__ for the tab you want to update a field for.
7. On the __Edit Design Category__ pane, click __Edit__ for a field.
8. On the __Edit Field__ pane, update the field details. Refer to step 8 and onwards in the [Add a Field to a Tab](#add-a-field-to-a-tab) topic to update the required details and save the changes.

## Rearrange the Fields on a Tab

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ list.
6. In the __Name__ list, click __Edit__ for the tab you want to rearrange the fields for.
7. On the __Edit Design Category__ pane, the __Fields__ area displays the fields on the tab.  
   To rearrange the fields, click the equal sign for a field and drag to change its position.
8. Click __OK__.
9. Click __Save__ on the __Properties__ page.

## Remove a Field from a Tab

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ list.
6. In the __Name__ list, click __Edit__ for the tab you want to remove a field from.
7. On the __Edit Design Category__ pane, the __Fields__ area displays the fields on the tab.  
   Click __Remove__ for a field to remove it.
8. Click __OK__.
9. Click __Save__ on the __Properties__ page.

See Also

- [Design a Portal with Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/overview.md)
