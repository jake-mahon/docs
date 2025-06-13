# Customize the Navigation Bar

The left navigation bar in a portal lists nodes that enable users to navigate in the portal: These nodes are:

- Create New
- Dashboard
- Groups
- Users
- Requests
- History
- Entitlement
- Synchronize
- Reports

On expanding a node, its sub-nodes are displayed. On clicking a sub-node, users are redirected to a page that contains tabs under that sub-node. It is as:

![navigation_bar](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/design/navigation_bar.png)

GroupID enables you to customize the nodes, sub-nodes, and their respective tabs.

What do you want to do?

__At the node level:__

- [Add a Node (Category)](#add-a-node-category)
- [Update the Details of a Node](#update-the-details-of-a-node)
- [Rearrange the Nodes on the Navigation Bar](#rearrange-the-nodes-on-the-navigation-bar)
- [Remove a User-defined Node](#remove-a-user-defined-node)

__At the sub-node level:__

- [Add a Sub-node to a Node](#add-a-sub-node-to-a-node)
- [Update the Details of a Sub-node](#update-the-details-of-a-sub-node)
- [Rearrange the Sub-nodes for a Node](#rearrange-the-sub-nodes-for-a-node)
- [Remove a Sub-node from a Node](#remove-a-sub-node-from-a-node)

__At the tab level:__

- [Update Tab Properties](#update-tab-properties)
- [Rearrange the Tabs for a Sub-node](#rearrange-the-tabs-for-a-sub-node)
- [Remove a Tab from a Sub-node](#remove-a-tab-from-a-sub-node)

## Add a Node (Category)

The following nodes have been defined by default on the navigation bar:

| Category (Node) | Mapped To |
| --- | --- |
| Create New | The Create New button on the portal’s navigation bar. It has four buttons as its sub-nodes: Group, User, Mailbox, and Contact. Sub nodes do not have tabs. |
| High Priority | The Dashboard node on the navigation bar. It has one sub-node, Dashboard, with no tab. |
| Groups | The Groups node on the navigation bar. It has four sub-nodes: All Groups, My Groups, Transfer Ownership, and Deleted Groups. All except the Transfer Ownership sub-node have tabs. |
| Users | The Users node on the navigation bar. It has two sub-nodes: My Direct Reports and Linked Accounts. Only the My Direct Reports sub-node has tabs. |
| Requests | The Requests node on the navigation bar. It has three sub-nodes: All Requests, My Requests, and Request Inbox. Sub nodes do not have tabs. |
| Others | The History node on the navigation bar. It has one sub-node, History, that has tabs. |
| External Links | The Entitlement, Synchronize, and Reports nodes on the navigation bar. It has three sub-nodes, Entitlement, Synchronize, and Reports, that can be modified to a limited extent. You cannot manage the tabs or other options displayed under these nodes in the portal. |

Note the following:

- The _Create New_, _High Priority_, _Others_, and _External Links_ nodes cannot be edited or removed.
- You can add and remove sub-nodes for nodes; however, you cannot add sub-nodes for the __Create New__ node.
- You cannot add tabs to sub-nodes; only edit and remove tabs that exist by default.

__To add a node:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane.  
   The __Navigation Bar__ page has two tabs: the __Navigation Bar Categories__ tab is used to manage nodes while the __Navigation Bars__ tab is used to manage sub-nodes and their respective tabs.
5. Click __Navigation Bar Categories__ to define a new node.
6. On the __Navigation Bar Categories__ tab, click __Add__. The __Add Navigation Category__ pane is displayed.
7. Enter a name for the node in the __Title__ box. The node will be displayed with this name on the navigation bar.
8. In the __Access Level__ drop-down list, select a security role. The node would be visible to users of this role and roles with a priority value higher than this role. For all other users, the node would be hidden. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).  
   Select _Never_ to hide the node for all users.
9. In the __Tooltip Text__ box, enter the text to appear when a user hovers the mouse over the node.
10. Use the __Icon Class__ box to upload the image (icon) to be displayed with the node name.

    - If no image is uploaded, click __Save__ to browse and select an image for upload.
    - If an image has been uploaded, the very image is displayed. Click the icon below the image to replace the existing image with a new one.

      NOTE: Image dimensions: 30 x 30 pixels  
       Supported formats: .png, .jpg, .jpe, .jpeg
11. Click __OK__.
12. Click __Save__ on the __Navigation Bar__ page.

## Update the Details of a Node

You can update the following details for the Groups, Users, and Requests nodes on the portal’s navigation bar:

- Node name
- Access level
- Tooltip text
- Node icon

The _Create New_, _High Priority_, _Others_, and _External Links_ nodes cannot be modified.

__To update a node:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. Then click the __Navigation Bar Categories__ tab.
5. On the __Navigation Bar Categories__ tab, click __Edit__ for a node to update it.  
   The __Edit Navigation Category__ pane is displayed. Follow step 7 and onwards in the [Add a Node (Category)](#add-a-node-category) topic to update node details.

## Rearrange the Nodes on the Navigation Bar

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. Then click the __Navigation Bar Categories__ tab. The __Navigation Bar Categories__ tab is displayed.
5. To rearrange the nodes on the navigation bar, click the equal sign for a node and drag to change its position.  
   You can move all except the _Create New_ node.
6. Click __Save__.

## Remove a User-defined Node

You can delete user-defined nodes on the portal’s navigation bar. System-defined nodes cannot be deleted.

__To delete a node:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. Then click the __Navigation Bar Categories__ tab.
5. On the __Navigation Bar Categories__ tab, click __Remove__ for a node to delete it.
6. Click __Save__.

## Add a Sub-node to a Node

You can customize the nodes on the portal’s navigation bar by defining sub-nodes for them. Note that:

- You cannot add sub-nodes to the _Create New_ node.
- You cannot add tabs to a sub-node.

__To define a sub-node:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. The __Navigation Bar__ page is displayed with the __Navigation Bars__ tab selected by default.
5. In the __Select Navigation Bar Type__ drop-down list, select a node on the portal’s navigation bar; its sub-nodes get listed under __Name__.
6. To add a sub-node to the selected node, click __Add__ .The __Add Link__ pane is displayed.
7. In the __Tab Name__ box, enter a name for the sub-node.
8. In the __Display Text__ box, enter the text to display as the sub-node name on the navigation bar.
9. In the __Tooltip Text__ box, enter the text to appear when a user hovers the mouse over the sub-node.
10. Use the __Icon Class__ box to upload the image (icon) to be displayed with the sub-node name. See step 10 in the [Add a Node (Category)](#add-a-node-category) topic for details.  
    The facility to upload an image is not available for sub-nodes under _Groups_. _Users_, _Requests_, and _External Links_.
11. In the __URL__ box, provide the URL of a webpage to link to this sub-node. The respective webpage will be displayed when users click the sub-node in the portal.  
    Use the following formats to specify the URL:

    - To link a page from within the GroupID portal template:  
      GroupManagement/Groups/MyGroups
    - To link to an external webpage:  
      https://www.xyz.com.

    Click __View in Browser__ to preview the webpage.
12. Select the __Open in new tab__ check box to open the linked page in a new tab in the browser.   
    If you do not select it, users will directly navigate to the linked page. They will have to use the browser’s back button to return to the previous page.
13. In the __Access Level__ drop-down list, select a security role. The sub-node would be visible for users of this role and roles with a priority value higher than this role. For all other users, the sub-node would be hidden. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).  
    Select _Never_ to hide the sub-node for all users.
14. Click __OK__.
15. Click __Save__ on the __Navigation Bar__ page.

## Update the Details of a Sub-node

You can change the following for a sub-node:

- The name of the sub-node
- The display name of the sub-node (this is the sub-node’s name on the portal’s navigation bar)
- The tooltip text for the sub-node
- The URL of the webpage that opens when a user clicks the sub-node
- Access level

__To update sub-node properties:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. The __Navigation Bar__ page is displayed with the __Navigation Bars__ tab selected by default.
5. In the __Select Navigation Bar Type__ drop-down list, select a node on the portal’s navigation bar; its sub-nodes get listed under __Name__.
6. Click __Edit__ for a sub-node to update its properties; the __Edit Link__ pane is displayed.
7. Follow steps 7-14 in the [Add a Sub-node to a Node](#add-a-sub-node-to-a-node) topic to update the required information and save it.  
   The __Links__ section is displayed for system-defined nodes only. Use it to manage the tabs for a sub-node.

## Rearrange the Sub-nodes for a Node

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under Design Settings. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. The __Navigation Bar__ page is displayed with the __Navigation Bars__ tab selected by default.
5. In the __Select Navigation Bar Type__ drop-down list, select a node on the portal’s navigation bar; its sub-nodes get listed under __Name__.
6. To rearrange the sub-nodes under the selected node, click the equal sign for a sub-node and drag to change its position.
7. Click __Save__.

## Remove a Sub-node from a Node

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. The __Navigation Bar__ page is displayed with the __Navigation Bars__ tab selected by default.
5. In the __Select Navigation Bar Type__ drop-down list, select a node on the portal’s navigation bar; its sub-nodes get listed under __Name__.
6. Click __Remove__ for a sub-node to remove it. This also removes all tabs defined for the sub-node.
7. Click __Save__.

## Update Tab Properties

You can modify the following for a tab:

- The name of the tab
- The display name of the tab (the tab is displayed in the portal with this name)
- Tooltip text
- The URL of the webpage that opens when a user clicks the tab
- Access level

__To update tab properties:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. The __Navigation Bar__ page is displayed with the __Navigation Bars__ tab selected by default.
5. In the __Select Navigation Bar Type__ drop-down list, select a node on the portal’s navigation bar; its sub-nodes get listed under __Name__.
6. Click __Edit__ for a system-defined sub-node. On the __Edit Link__ pane, the __Links__ area lists the tabs for the sub-node (in case the sub-node has tabs).
7. Click __Edit__ for a tab to edit it.
8. On the __Edit Link__ pane (for the tab), update the required information and click __OK__:

   1. __Link Name__ – The name of the tab.
   2. __Display Text__ – The text displayed as the tab name in the portal.
   3. __Tooltip Text__ – The text that appears when a user hovers the mouse over the tab.
   4. __URL__ – The address of the webpage to display when a user clicks the tab.
   5. __Access Level__ – Select a security role. The tab would be visible to users of this role and roles with a priority value higher than this role. For all other users, the tab would be hidden. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).  
      Select _Never_ to hide the tab for all users.
9. Click __OK__ twice on the __Edit Link__ pane.
10. Click __Save__ on the __Navigation Bar__ page.

## Rearrange the Tabs for a Sub-node

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Setting__s. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. The __Navigation Bar__ page is displayed with the __Navigation Bars__ tab selected by default.
5. In the __Select Navigation Bar Type__ drop-down list, select a node on the portal’s navigation bar; its sub-nodes get listed under __Name__.
6. Click __Edit__ for a system-defined sub-node. On the __Edit Link__ pane, the __Links__ area lists the tabs for the sub-node (in case the sub-node has tabs).
7. To change the order in which tabs are displayed in the portal, click the equal sign for a tab and drag to change its position.
8. Click __OK__.
9. Click __Save__ on the __Navigation Bar__ page.

## Remove a Tab from a Sub-node

1. In GroupID Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Navigation Bar__ in the left pane. The __Navigation Bar__ page is displayed with the __Navigation Bars__ tab selected by default.
5. In the __Select Navigation Bar Type__ drop-down list, select a node on the portal’s navigation bar; its sub-nodes get listed under __Name__.
6. Click __Edit__ for a system-defined sub-node. On the __Edit Link__ pane, the __Links__ area lists the tabs for the sub-node (in case the sub-node has tabs).
7. Click __Remove__ for a tab to remove it.
8. Click __OK__.
9. Click __Save__ on the __Navigation Bar__ page.

See Also

- [Design a Portal with Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/overview.md)
