---
sidebar_position: 7410
title: Specify Attributes for Object List View
---

# Specify Attributes for Object List View

In the portal, the object list refers to a listing of groups that are similar to another group, Group similarity is measured on the basis of group type and membership.

Let’s assume you want to view the groups that are similar to Group A. On the **Similar Groups** tab in Group A’s properties, six groups that bear the most similarity to Group A will be displayed, with the strongest match at the top. It is as:

![](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/Application/similar groups.png)

For a similar group, three attributes are displayed:

* Attribute 1 - The group’s display name. This attribute cannot be changed.
* Attribute 2 - You can specify any attribute. The default attribute is *mail*.
* Attribute 3 - You can specify any attribute. The default attribute is *expiration policy*.

What do you want to do?

* [Change the Attributes on the Object List](#list "Change the Attributes on the Object List")

## Change the Attributes on the Object List

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, select *Object List* in the **Select Directory Object** drop-down list.  
   The **Name** list shows the *Header* option only.
6. Click **Edit** for *Header*.  
   On the **Card View Header/Footer** pane, you can view the attributes currently displayed for a similar group in the portal.
7. The **Title** box displays the displayName attribute. The value of this attribute will be displayed as the name of a similar group.
8. The **Image** box displays the thumbnailPhoto attribute, which can store images for directory objects .
9. Use the **Attribute 1** and **Attribute 2** boxes to display any other object attributes for similar groups. By default, the *mail* and *expiration policy* attributes are selected.
10. Click **OK**.
11. Click **Save** on the **Card View** page.

**See Also**

* [Design a Portal with Display Types](../DisplayType/Overview "Design a Portal with Display Types")
* [Specify Attributes for the Object Card](ObjectCard "Specify Attributes for the Object Card")