# Customize the Create Object Wizards

Using a portal, users can create different directory objects, namely:

- User
- Mailbox
- Contact
- Static Group
- Smart Group
- Organizational Dynasty
- Geographical Dynasty
- Managerial Dynasty
- Custom Dynasty

The portal provides a separate wizard for creating each of these objects. You can customize a wizard as needed.

NOTE: In the portal, the _Create Group_ wizard starts with the _Group Type_ page, where users can select the type of group they want to create. Options on this page vary, depending on the permissions assigned to the user in the identity store.
(See the [Security Role – Permissions](/docs/groupid/groupid/admincenter/securityrole/permissions.md) topic.)

- If a user has the _Create Static Group_ permission and is denied the _Create Smart Group_ permission, only the _Static Group_ option is displayed on the _Group Type_ page.
- If a user has the _Create Smart Group_ permission and is denied the _Create Static Group_ permission, all options except _Static Group_ are displayed on the _Group Type_ page.
![group_type](/img/product_docs/groupid/groupid/admincenter/portal/design/group_type.png)

NOTE: You can customize the _Group Type_ page individually for static group, Smart Group, and each of the Dynasty types. However:

- If a user has permissions to create both static groups and Smart Groups, the _Group Type_ page created for _Static Group_ would be displayed to the user in the portal.
- If a user does not have permission to create static groups, but has permission to create Smart Groups, the _Group Type_ page created for _Smart Group_ would be displayed to the user in the portal for Smart Groups and Dynasties.

What do you want to do?

- [Add a Page to a Wizard](#Add-a-Page-to-a-Wizard)
- [Update a Wizard Page](#Update-a-Wizard-Page)
- [Rearrange the Pages on a Wizard](#Rearrange-the-Pages-on-a-Wizard)
- [Remove a Page from a Wizard](#Remove-a-Page-from-a-Wizard)
- [Add a Field to a Wizard Page](#Add-a-Field-to-a-Wizard-Page)
- [Update a Field](#Update-a-Field)
- [Rearrange the Fields on a Wizard Page](#Rearrange-the-Fields-on-a-Wizard-Page)
- [Remove a Field from a Wizard Page](#Remove-a-Field-from-a-Wizard-Page)

## Add a Page to a Wizard

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane. The __Create Object__ page is displayed.
5. In the __Select Directory Object__ drop-down list, select a directory object.  
   The __Name__ list displays the pages on the object’s creation wizard.
6. Click __Add__. The __Add Category__ pane is displayed.
7. In the __Name__ box, enter a name for the page. The page will be displayed in the wizard with this name.
8. In the __Visibility Level__ drop-down list, select a security role. The page would be visible to users of this role and roles with a priority value higher than this role. See [Priority](/docs/groupid/groupid/admincenter/securityrole/manage.md#Priority).  
   Select _Never_ to hide the page from all users.
9. To add fields to the page, see the [Add a Field to a Wizard Page](#Add-a-Field-to-a-Wizard-Page) topic.
10. Click __OK__.
11. Click __Save__ on the __Create Object__ page.

## Update a Wizard Page

You can update the following for a page:

- Name
- Visibility level

__To update a wizard page:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane.
5. On the __Create Object__ page, select a directory object in the __Select Directory Object__ drop-down list.
6. In the __Name__ list, click __Edit__ for a page.
7. On the __Edit Category__ pane, update the name and visibility level for the page. Follow steps 7-11 in the [Add a Page to a Wizard](#Add-a-Page-to-a-Wizard) topic for details.

## Rearrange the Pages on a Wizard

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Setting__s. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane.
5. On the __Create Object__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the pages on the object’s creation wizard.
6. To change the order that pages are displayed on the wizard, click the equal sign for a page and drag to change its position.
7. Click __Save__.

## Remove a Page from a Wizard

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane.
5. On the __Create Object__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the pages on the object’s creation wizard.
6. Click __Remove__ for a page to remove it.
7. Click __Save__.

## Add a Field to a Wizard Page

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane.
5. On the __Create Object__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the pages on the object’s creation wizard.
6. Click __Edit__ for the page you want to add a field to.
7. On the __Edit Category__ pane, click __Add Field.__The __Add Field__ pane is displayed.
8. In the __Field__ drop-down list, select a schema attribute to link to this field.
9. In the __Display Name__ box, enter a display name for the field. This name is the field’s label on the wizard.
10. In the __Display Type__ drop-down list, select a display type to use for rendering this field on the wizard.  
    The list contains basic display types and custom display types defined on the __Custom Display Types__ page. See the [Display Type Categories](/docs/groupid/groupid/admincenter/portal/displaytype/categories.md) topic.
11. In the __Visibility Level__ drop-down list, select a security role. The field would be visible to users of the selected role and roles with a priority value higher than the selected role. See [Priority](/docs/groupid/groupid/admincenter/securityrole/manage.md#Priority).  
    Select _Never_ to hide the field from all users.
12. As mentioned for visibility level, the field is visible to members of the selected role and roles with a priority value higher than the selected role.  
    In the __Exclude Roles__ area, select the check boxes for the higher priority role(s) you want to hide the field from.
13. In the __Tooltip Text__ box, enter the text to display when a user hovers the mouse over the field.
14. In the __Max Length__ box, enter a number that represents the maximum number of characters that users can enter as value for this field.  
    Entering _0_ indicates that users can enter an unlimited number of characters as value.
15. Use the __Search Object Types__ area to specify the object types (User, Contact, and/or Group) that can be searched on the portal’s _Find_ dialog box, to set as value for the field.  
    The following display types support the _Find_ dialog box:

    - DN
    - DNs
    - Custom display types created with the Grid type

    When you select any of these display types, Directory Manager identifies that the value for the field has to be searched using the _Find_ dialog box. The __Search Object Types__ area is displayed, where you can select the required object type(s). For example, if you select _Group_, only groups can be searched and selected as value for the field.  
    You can launch the _Find_ dialog box from multiple portal pages to search for objects to designate as owners, managers, additional owners, members, and more. While specifying the searchable object type(s), you must be aware of the kind of value the field requires.
16. In the __Default Value__ box, enter the default value that would be displayed in the field on the portal.  
    Users can update this value, provided that the __Is Read Only__ check box is not selected.
17. Select the __Is Required__ check box to make it mandatory for users to provide a value for the field.
18. Select the __Is Read Only__ check box to make the field read-only.
19. Select the __Filter Bad Words__ check box to ensure that users do not enter any bad word in this field.  
    A value entered for the field is checked against the words listed on the __Bad Words List__ page. Matched values cannot be saved. See the [Manage the Bad Words List](/docs/groupid/groupid/admincenter/portal/design/badwords.md) topic.
20. Click __OK__. The field is displayed in the __Fields__ area on the __Edit Category__ pane. You can rearrange the fields, update field properties, and even remove a field from the wizard page.
21. Click __OK__.
22. Click __Save__ on the __Create Object__ page.

## Update a Field

You can change the following for a field:

- The name of the field (this is the field label in the portal)
- The schema attribute linked with the field
- The display type used to render the field in the portal
- Visibility level
- Tooltip

The following field properties vary from field to field. You can:

- Set a default value for the field
- Specify the maximum characters that a user can enter as value for the field
- Make the field editable or read–only
- Prevent users from using certain words as value for the field
- Make it optional or mandatory for users to provide a value for the field
- For search fields, you can specify the object types (groups, users, contacts) that can be searched and set as field value

__To update field properties:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane.
5. On the __Create Object__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the pages on the object’s creation wizard.
6. Click __Edit__ for the page you want to edit a field for.
7. On the __Edit Category__ pane, click __Edit__ for a field to update its properties.
8. The __Edit Field__ pane is displayed. Follow steps 8-22 in the [Add a Field to a Wizard Page](#Add-a-Field-to-a-Wizard-Page) topic to update and save the information.

## Rearrange the Fields on a Wizard Page

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane.
5. On the __Create Object__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the pages on the object’s creation wizard.
6. Click __Edit__ for the page you want to rearrange the fields for.
7. On the __Edit Category__ pane, the fields on the wizard page are listed in the __Fields__ area.  
   To rearrange the fields on the page, click the equal sign for a field and drag to change its position.
8. Click __OK__.
9. Click __Save__ on the __Create Object__ page.

## Remove a Field from a Wizard Page

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Create Object__ in the left pane.
5. On the __Create Object__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the pages on the object’s creation wizard.
6. Click __Edit__ for the page you want to remove a field from.
7. On the __Edit Category__ pane, the fields on the wizard page are listed in the __Fields__ area.  
   Click __Remove__ for a field to remove it.
8. Click __OK__.
9. Click __Save__ on the __Create Object__ page.

See Also

- [Design a Portal with Display Types](/docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
