# Specify Attributes for the Object Card

In the portal, the names of directory objects are displayed as links. When a user hovers the mouse over this link, a card is displayed, showcasing information about the object. For a user object, for example, the card displays the name, email address and phone number. It is as:

![usercard](../../../../../../static/img/product_docs/groupid/groupid/admincenter/portal/design/usercard.webp)

For each object type, you can specify a different set of attributes to display on this card. For a group, the card is as:

![groupcard](../../../../../../static/img/product_docs/groupid/groupid/admincenter/portal/design/groupcard.webp)

Notice that the card has three sections, namely:

- Header - The card template allows for four attributes to be specified for display in the header. When a specified attribute does not contain a value, NA is displayed on the card.
- Body - You can specify any number of attributes for this section. When you do not specify any attribute, this section is not displayed.
- Footer - This section has the _Add To Contact_ and _Send An Email_ buttons. You can choose whether you want to display these buttons on the card or not.

What do you want to do?

- Manage the Card Header
- Manage the Card Footer
- Specify an Attribute for the Card Body
- Update the Display Name for an Attribute
- Remove an Attribute

## Manage the Card Header

By default, four attributes are specified for display in the card header. You can change the default attributes, but you cannot add a fifth attribute or reduce the number to three.

__To modify the card header:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Card View__ in the left pane. The __Card View__ page is displayed.
5. In the __Select Directory Object__ drop-down list, select _User_, _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. In the __Name__ list, click __Edit__ for __Header__.  
   The __Card View Header/Footer__ pane displays a sample header and how the specified attributes populate it.
7. From the __Title__ drop-down list, select an attribute whose value will be displayed as the title of the header. By default, the title is set to the object’s display name.
8. From the __Image__ drop-down list, select an attribute that can store images for directory objects .
9. Use the __Attribute 1__ and __Attribute 2__ drop-down lists to select any other object attributes to display on the card. By default, _mail_ and _mobile_ are selected.
10. Click __OK__.
11. Click __Save__ on the __Card View__ page.

## Manage the Card Footer

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Card View__ in the left pane.
5. On the __Card View__ page, use the __Select Directory Object__ drop-down list to select _User_, _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. In the __Name__ list, click __Edit__ for _Header_.
7. In the __Footer__ section of the __Card View Header/Footer__ pane, select the __Add to Contact__ and __Send Email__ check boxes to display the respective buttons on the card.
8. Click __OK__.
9. Click __Save__ on the __Card View__ page.

## Specify an Attribute for the Card Body

In addition to the card header, you can specify additional object attributes for the card. The values of these attributes would be displayed on the card body.

__To add an attribute:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Card View__ in the left pane.
5. On the __Card View__ page, use the __Select Directory Object__ drop-down list to select _User_, _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. Click __Add__ to add an attribute to the body of the card. The __Add New Card View Attribute__ pane is displayed.
7. Use the __Field Name__ box to select one or more schema attributes. The value of these attributes will be displayed on the object card.
8. Specify a name for the attribute in the __Display Name__ box. The attribute value would be displayed next to this label on the card.  
   This box is not available when multiple attributes are selected.
9. Click __OK__.
10. Click __Save__ on the __Card View__ page.

## Update the Display Name for an Attribute

You can update the display name of an attribute on the body of an object card.

__To update the display name:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Card View__ in the left pane.
5. On the __Card View__ page, use the __Select Directory Object__ drop-down list to select _User_, _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. In the __Name__ list, click __Edit__ for an attribute.
7. On the __Edit Card View Attribute__ pane, the __Field Name__ box is not editable, so you cannot change the attribute. However, you can specify a different display name for it. This display name is displayed on the card's body and the attribute’s value is shown next to it.
8. Click __OK__.
9. Click __Save__ on the __Card View__ page.

## Remove an Attribute

You can remove an attribute from the body of an object card.

__To remove an attribute:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Card View__ in the left pane.
5. On the __Card View__ page, use the __Select Directory Object__ drop-down list to select _User_, _Contact_, _Group_, or _Mailbox_ to manage the card for.
6. In the __Name__ list, click __Remove__ for an attribute to remove it.
7. Click __Save__.

__See Also__

- [Design a Portal with Display Types](../displaytype/overview.md)
- [Specify Attributes for Object List View](objectlist.md)
