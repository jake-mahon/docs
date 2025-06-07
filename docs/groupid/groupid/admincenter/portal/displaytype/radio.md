# Radio Button Display Type

Use a radio display type to present the portal users with a predefined set of mutually exclusive options, of which they can choose one. Usually radio buttons in a set are grouped together under a label.

To create a radio display type, provide a label for a set of radio buttons and then add at least two radio buttons to the set.

### Predefined Radio Display Types

A few radio display types used in the default portal template are:

| Display Type Name | Values | Description |
| --- | --- | --- |
| groupMainType | Static Group  Smart Group  Password Expiry Group  Organizational Dynasty  Geographical Dynasty  Managerial Dynasty  Custom Dynasty | Enables users to specify the type of group or Dynasty they want to create |
| groupType | Security Group  Distribution List | Enables users to specify whether they want to create a security group or a distribution list. |
| reportTo | Report To Originator  Report To Owner  Don’t Send Delivery Reports | Enables users to set delivery report recipients when a message sent to a group or user is not delivered. |

## Define a Radio Display Type

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to define a custom display type for it.  
   All identity stores associated with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Custom Display Types__ in the left pane.
5. On the __Custom Display Types__ page, click __Add__ on the __Custom Display Types__ tab.
6. On the __New Display Type__ pane, enter a name for the display type and select _Radio_ in the __Type__ drop-down list.  
   You cannot
   change the name of a custom display type once you have created it.
7. Use the __Values__ area to define a set of radio buttons, to be displayed in the portal under the label you entered in the __Name__ box.  
   You must individually define each
   radio button in the set.

   1. Click __Add Value__ to define a radio button. The __Radio Button__ pane is displayed.
   2. In the __Display Name__ box, enter a name for the radio button. This name is the radio button’s label in the portal, so it should represent the value of the radio button.
   3. In the __Tooltip__ box, enter the text that is displayed when a user hovers the mouse over the radio button.
   4. Enter a description for the radio button in the __Description__ box.
   5. Select a security role in the __Visibility__ drop-down list. The radio button will be visible to users of this role and roles with a priority value higher than this role. See [Priority](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md#Priority).  
      Select _Never_ to hide the radio button from all users.
   6. Click __OK__. The radio button is listed in the __Values__ area on the __New Display Type__ pane.
8. To define another radio button in the set, repeat step 7.

   - To modify the details of a radio button, click __Edit__ for it.
   - To remove a radio button from the set, click __Delete__ for it.
   - To change the order in which radio buttons are displayed in the portal, click the equal sign for a radio button and drag to change its position in the list.
9. In the __Default Selection__ drop-down list, select a radio button. In the portal, this radio button will be the default selection in the radio button set.  
   The __Default Selection__ list contains all radio buttons defined in the __Values__ area.
10. Click __OK__.
11. Click __Save__ on the __Custom Display Types__ page.

__See Also__

- [Design a Portal with Display Types](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
- [Display Type Categories](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/categories.md)
- [Define Custom Display Types](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/custom.md)
