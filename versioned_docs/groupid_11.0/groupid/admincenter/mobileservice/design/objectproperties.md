# Customize Object Properties Pages

Users can view basic information (properties) of the following directory objects in the GroupID app:

- Users/Contacts
- Groups

You can customize the property page for an object by specifying the fields (attributes) to display for that object in the app.

What do you want to do?

- [Add a Field to the Properties Page](#add-a-field-to-the-properties-page)
- [Edit a Field on the Properties Page](#edit-a-field-on-the-properties-page)
- [Remove a Field from the Properties Page](#remove-a-field-from-the-properties-page)

## Add a Field to the Properties Page

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Properties__ in the left pane. The __Properties__ page is displayed.
5. In the __Select Directory Object__ drop-down list, select a directory object.  
   The __Name__ list displays the tabs currently available on the object’s properties page.
6. Click __Edit__ for a form to modify it.
7. On the __Edit Design Category__ pane, the __Fields__ area displays the fields on the properties page. Click __Add Field__.
8. On the __Add Field__ pane, provide the following information and click __OK__:

   - __Field__ – Select a schema attribute to link to the field. The field will display the value of this attribute.
   - __Display Name__ – Enter a display name for the field. This name serves as the field’s label in the app.
   - __Display Type__ – Select a display type to render this field in the app.
9. Click __OK__ on the __Edit Design Category__ pane.
10. Click __Save__.

## Edit a Field on the Properties Page

You can change the following for a field on a properties page:

- The name of the field, as displayed in the app
- The schema attribute linked to the field
- The display type used to render the field in the app

__To update a field:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the tabs currently available on the object’s properties page.
6. Click __Edit__ for a form to modify it.
7. On the __Edit Design Category__ pane click __Edit__ for a field to update it.  
   The __Edit Field__ pane is displayed. Follow steps 8-10 in the [Add a Field to the Properties Page](#add-a-field-to-the-properties-page) topic to update the field.

## Remove a Field from the Properties Page

1. n Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Properties__ in the left pane.
5. On the __Properties__ page, select a directory object in the __Select Directory Object__ drop-down list.  
   The __Name__ list displays the tabs currently available on the object’s properties page.
6. Click __Edit__ for a form to modify it.
7. On the __Edit Design Category__ pane, the __Fields__ area displays the fields on the properties page. Click __Remove__ for a field to remove it from the properties page.
8. Click __OK__.
9. Click __Save__.

__See Also__

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)
- [Design Settings](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/design/overview.md)
