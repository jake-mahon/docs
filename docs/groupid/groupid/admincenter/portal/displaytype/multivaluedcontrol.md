# Multi-Valued Control Display Type

The multi-valued control display type supports multi-valued attributes in Active Directory. Examples include:

- The carLicense, otherTelephone, and otherHomePhone attributes for user objects
- The msExchExtensionCustomAttribute1 through msExchExtensionCustomAttribute5 attributes for group objects

The multi-valued control display type is rendered in the portal similar to a drop-down list; only that it enables users to select multiple values.

To create a custom multi-valued control display type, you have to specify the values (options) to display in the list. This custom display type can then be linked to a schema attribute. Options in the multi-valued control drop-down list are the different values that users can
select for the schema attribute you link this display type with.

## Define a Multi-Valued Control Display Type

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to define a custom display type for it.  
   All identity stores associated with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Custom Display Types__ in the left pane.
5. On the __Custom Display Types__ page, click __Add__ on the __Custom Display Types__ tab.
6. On the __New Display Type__ pane, enter a name for the display type and select _MultiValued Control_ in the __Type__ drop-down list.  
   You cannot
   change the name of a custom display type once you have created it.
7. Use the __Values__ area to specify the values to be displayed in the multi-valued drop-down list.

   1. Click __Add Value__.
   2. Specify a value and a display text for that value in the respective boxes. The display text will be displayed in the multi-valued drop-down list, while the value will be saved in the directory or database when a user selects the display text from the multi-valued drop-down
      list.  
      (The value will be saved in the directory when the multi-valued control display type is mapped to a directory attribute. It will be saved in the database when the display type is mapped to a database attribute.)
   3. In the __Visibility__ drop-down list, select one or more security roles. The value in the multi-valued drop-down list will be visible to users of the selected role(s) only. If you do not select any role, the value will be hidden from all users.  
      The __Visibility__ drop-down list displays all predefined and user-defined security roles.
   4. In the __Accessibility__ drop-down list, select one or more security roles. Only users of the selected role(s) can select the value from the multi-valued drop-down list in the portal. For all other users, the value will be greyed out and they will not be able to select it. If you do not select any role, the value will be greyed out for all users and they will not be able to select it.  
       The __Accessibility__ drop-down list displays all predefined and user-defined security roles.

      NOTE: (1) If a user has visibility on a value but not accessibility, and that value is set as default (see Step 9), then in the portal, the value will be displayed as selected to the user. Once the user removes it, he or she cannot select it again from the multi-valued drop-down list.  
      (2) If a user has accessibility on a value but not visibility, the value will not be displayed to the user. Hence, accessibility will have no impact.
   5. Click __OK__. The value is listed in the __Values__ area, represented by its display text.
8. Repeat step 7 to define more values in the list.

   - To edit a value, click __Edit__ for it.
   - To remove a value from the list, click __Delete__ for it.
9. Select one or more values in the __Default Selection__ list to set as the default value(s) for the multi-valued drop-down list in the portal.  
   The __Default Selection__ list contains all values
   defined in the __Values__ area.
10. In the __Custom Value Edit Roles__ list, select one or more security role(s). Users of the selected role(s) can specify a new value for the multi-valued drop-down list in the portal. For example, if Role A does not have accessibility and visibility on any values in the multi-valued drop-down, but has custom value edit rights, then role members will see the drop-down as empty but they can add new values.
11. Click __OK__.
12. Click __Save__ on the __Custom Display Types__ page.

__See Also__

- [Design a Portal with Display Types](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
- [Display Type Categories](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/categories.md)
- [Define Custom Display Types](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/custom.md)
