---
sidebar_position: 7426
title: Define Custom Display Types
---

# Define Custom Display Types

In Directory Manager, several predefined custom display types are used in the default portal template. To customize the portal, you can use the predefined custom display types as well as define new ones.

* [Text Box Display Type](Textbox "Text Box Display Type")
* [Drop-down List Display Type](DropdownList "Drop-down List Display Type")
* [Linked Field Drop-down List Display Type](LinkedDropdown "Linked Field Drop-down List Display Type")
* [Image Display Type](Image "Image Display Type")
* [Grid Display Type](Grid "Grid Display Type")
* [Radio Button Display Type](Radio "Radio Button Display Type")
* [Multiline Textbox Display Type](MultilineTextbox "Multiline Textbox Display Type")
* [Multi-Valued Control Display Type](MultiValuedControl "Multi-Valued Control Display Type")
* [Linked Combo Display Type](../LinkedCombo/Overview "Linked Combo Display Type")

## How to Implement Display Types

On the Search Forms, Properties, Create Object, and Property Validation pages in a portal’s design settings, select a schema attribute and a display type to link them.

On linking, the display type is rendered on the portal’s page; enabling users to view or specify a value for the linked attribute.

## Delete a Custom Display Type

You can delete custom display types, including linked combos.

NOTE: You cannot delete a custom display type that has been linked to a field in the portal.

To delete a custom display type:

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to delete a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.

   * On the **Simple Types** tab, click **Delete** for a custom display type to delete it.
   * On the **Linked Combo Types** tab, click **Delete** for a linked combo to delete it.
5. Click **Save**.

**See Also**

* [Design a Portal with Display Types](Overview "Design a Portal with Display Types")
* [Display Type Categories](Categories "Display Type Categories")