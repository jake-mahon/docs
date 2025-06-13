# Specify Attributes for Object List View

In the portal, the object list refers to a listing of groups that are similar to another group, Group similarity is measured on the basis of group type and membership.

Let’s assume you want to view the groups that are similar to Group A. On the __Similar Groups__ tab in Group A’s properties, six groups that bear the most similarity to Group A will be displayed, with the strongest match at the top. It is as:

![similar_groups](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/design/similar_groups.png)

For a similar group, three attributes are displayed:

- Attribute 1 - The group’s display name. This attribute cannot be changed.
- Attribute 2 - You can specify any attribute. The default attribute is _mail_.
- Attribute 3 - You can specify any attribute. The default attribute is _expiration policy_.

What do you want to do?

- [Change the Attributes on the Object List](#Change-the-Attributes-on-the-Object-List)

## Change the Attributes on the Object List

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Card View__ in the left pane.
5. On the __Card View__ page, select _Object List_ in the __Select Directory Object__ drop-down list.  
   The __Name__ list shows the _Header_ option only.
6. Click __Edit__ for _Header_.  
   On the __Card View Header/Footer__ pane, you can view the attributes currently displayed for a similar group in the portal.
7. The __Title__ box displays the displayName attribute. The value of this attribute will be displayed as the name of a similar group.
8. The __Image__ box displays the thumbnailPhoto attribute, which can store images for directory objects .
9. Use the __Attribute 1__ and __Attribute 2__ boxes to display any other object attributes for similar groups. By default, the _mail_ and _expiration policy_ attributes are selected.
10. Click __OK__.
11. Click __Save__ on the __Card View__ page.

__See Also__

- [Design a Portal with Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/overview.md)
- [Specify Attributes for the Object Card](/versioned_docs/groupid_11.0/groupid/admincenter/portal/design/objectcard.md)
