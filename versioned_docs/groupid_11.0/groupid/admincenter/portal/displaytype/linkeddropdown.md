# Linked Field Drop-down List Display Type

A linked field drop-down list is displayed in the portal as a drop-down list with multiple values. When a user selects a value, all fields linked to that value are auto populated. Since these fields remain isolated, they are not displayed to the user.

Use a linked field drop-down list, for example, when you want the _Office Address, Business Phone Number, Fax Number_ and _Email_ fields to be auto populated when a user selects
his or her office name from a drop-down list. Here, `<office name>` is the key value while Office Address, Business Phone Number, Fax Number and Email are its linked (isolated) fields.

To define a linked field drop-down list:

- Specify a value, called a key value.
- Link schema attributes (fields) with this key value. For each attribute that you link, you must also provide a value.

What do you want to do?

- [Define a Linked Field Drop-down List Display Type](#Define-a-Linked-Field-Drop-down-List-Display-Type)

## Define a Linked Field Drop-down List Display Type

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to define a custom display type for it.  
   All identity stores associated with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Custom Display Types__ in the left pane.
5. On the __Custom Display Types__ page, click __Add__ on the __Custom Display Types__ tab.
6. On the __New Display Type__ pane, enter a name for the display type and select _Linked Field Dropdown List_ in the __Type__ drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. Use the __Values__ area to specify the key values to appear in the drop-down list.

   1. To add a key value, click __Add Value__. The __Key Value__ pane is displayed.
   2. In the __Key Value__ box, enter a key value. A key value is one that is displayed in the drop-down list in the portal. Selecting it auto populates the isolated linked fields.
   3. The __Linked Fields__ area is for specifying the fields to link with this key value. Click __Add Linked Field__. The __Linked Field__ pane is displayed.

      1. In the __Field__ drop-down list, select a schema attribute that you want to create as a linked field for the key value.
      2. In the __Value__ box, enter a value for the attribute.
      3. Click __OK__. The linked field gets listed in the __Linked Fields__ area on the  __Key Value__ pane.
   4. Repeat step 7c to add as many linked fields as required.
   5. After defining the linked fields, click __OK__ on the __Key Value__ pane.  
      With that, the key value is displayed in the __Values__ area on the __New Display Type__ pane.
8. Repeat step 7 to define more values in the list.

   - To edit a key value, click __Edit__ for it.
   - To remove a key value from the list, click __Delete__ for it.
9. Select a key value in the __Default Selection__ list to set it as the default value to be displayed in the drop-down list in the portal.  
   The __Default Selection__ list
   contains all key values defined in the __Values__ area.
10. Click __OK__.
11. Click __Save__ on the __Custom Display Types__ page.

A linked field drop-down list is displayed in the portal as a drop-down list. When a portal user selects a value and saves it, the isolated linked fields are auto populated with the predefined values and a message, similar to the following, is displayed.

![linked_field_message](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/linked_field_message.png)

Here, __Department__ is the key value. Selecting it in the drop-down list populates the __Company__ field with the predefined value.

__See Also__

- [Design a Portal with Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/overview.md)
- [Display Type Categories](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/categories.md)
- [Define Custom Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/custom.md)
