# Define Custom Display Types

In Directory Manager, several predefined custom display types are used in the default portal template. To customize the portal, you can use the predefined custom display types as well as define new ones.

- [Text Box Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/textbox.md)
- [Drop-down List Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/dropdownlist.md)
- [Linked Field Drop-down List Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/linkeddropdown.md)
- [Image Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/image.md)
- [Grid Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/grid.md)
- [Radio Button Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/radio.md)
- [Multiline Textbox Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/multilinetextbox.md)
- [Multi-Valued Control Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/multivaluedcontrol.md)
- [Linked Combo Display Type](/docs/product_docs/groupid/groupid/admincenter/portal/linkedcombo/overview.md)

## How to Implement Display Types

On the Search Forms, Properties, Create Object, and Property Validation pages in a portal’s design settings, select a schema attribute and a display type to link them.

On linking, the display type is rendered on the portal’s page; enabling users to view or specify a value for the linked attribute.

## Delete a Custom Display Type

You can delete custom display types, including linked combos.

NOTE: You cannot delete a custom display type that has been linked to a field in the portal.

To delete a custom display type:

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to delete a custom display type for it.  
   All identity stores associated with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Custom Display Types__ in the left pane.

   - On the __Simple Types__ tab, click __Delete__ for a custom display type to delete it.
   - On the __Linked Combo Types__ tab, click __Delete__ for a linked combo to delete it.
5. Click __Save__.

__See Also__

- [Design a Portal with Display Types](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
- [Display Type Categories](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/categories.md)
