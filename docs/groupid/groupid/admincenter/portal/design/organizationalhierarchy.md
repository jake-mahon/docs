# Specify Attributes for Organizational Hierarchy

Using the portal, you can view the organizational hierarchy for a user in the organization. This hierarchy is displayed in graphical form, creating a kind of an organogram. It presents a 360° view of the organization with the specified user as the focal point.

By default, the organizational hierarchy chart displays four attributes of a user: _title_, _display name_, _email_, and _picture_. You can replace an attribute with another one but you cannot add or remove attributes. Hence the attribute count remains ‘four’.

What do you want to do?

- [Replace an Attribute on the Organizational Hierarchy Tree](#Replace-an-Attribute-on-the-Organizational-Hierarchy-Tree)

## Replace an Attribute on the Organizational Hierarchy Tree

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Organizational Hierarchy__ in the left pane. The __Organizational Hierarchy__ page is displayed.  
   By default, the __Display Name__ area displays four attributes. The values of these attributes are displayed for users on the organizational hierarchy chart in the portal. You can only replace an attribute with another attribute; you cannot add a fifth attribute or reduce the list to three.
5. Click __Edit__ for an attribute to replace it. The __Edit Field__ pane is displayed.
6. In the __Field__ drop-down list, select a schema attribute to display on the organizational hierarchy chart.
7. In the __Display Name__ box, enter a user-friendly name for the attribute, that would serve as the attribute name on the chart. The attribute’s value will be displayed next to this name.
8. In the __Display Type__ drop-down list, select the display type to use for rendering the attribute on the organizational hierarchy chart. The display type must match the attribute. For example, the ‘TreePicture’ display type matches the ‘thumbnailPhoto’ attribute.  
   This list contains basic display types and custom display types defined on the __Custom Display Types__ page. See the [Display Type Categories](/docs/groupid/groupid/admincenter/portal/displaytype/categories.md) topic.
9. Click __OK__.
10. Click __Save__ on the __Organizational Hierarchy__ page.

__See Also__

- [Design a Portal with Display Types](/docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
