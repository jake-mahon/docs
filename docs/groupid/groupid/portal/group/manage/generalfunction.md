# General Group functions

You can perform the following general functions on your directory groups.

## Search for groups

See [Directory Search](/docs/product_docs/groupid/groupid/portal/search/search.md).

## View object properties

You can view and modify the properties of a mailbox, group, user and contact.

1. [Directory Search](/docs/product_docs/groupid/groupid/portal/search/search.md) the required object.
2. Select this object on the __Search Results__ page and click __Properties__ on the toolbar.

   The object's [Group Properties](/docs/product_docs/groupid/groupid/portal/group/properties/overview.md) page is displayed.

## View groups managed by an object

You can get a list of all groups managed by a particular object (i.e., all groups for which the selected object is a primary or additional owner).

1. [Directory Search](/docs/product_docs/groupid/groupid/portal/search/search.md) the required object.
2. Select this object on the __Search Results__ page and click __Owner__ on the toolbar.

## Manage group access

A group’s security type determines how non-members can access the group and become its members.

A security type is assigned to the group when it is created. However, you can change it later, if required.

1. In Directory Manager portal, click __Groups__ in the left navigation pane, select Groups.

   The Groups page is displayed with the __My Groups__ tab in view.
2. Select a group and click __Properties__ on the toolbar.

   The group's [Group Properties](/docs/product_docs/groupid/groupid/portal/group/properties/overview.md) page is displayed with the __General__ tab in view.
3. Select a different security type for the group from the __Security__ list.
4. Click __Save__.

## Set email delivery restrictions

You can allow or restrict a group from receiving emails from specified recipients.

NOTE: This feature is not available for groups in a Microsoft Entra ID based identity store.

1. In Directory Manager portal, click __Groups__ in the left navigation pane, select __My Groups__.

   The Groups page is displayed with the __My Groups__ tab in view.
2. Select the required group and click __Properties__ on the toolbar.

   The group's [Group Properties](/docs/product_docs/groupid/groupid/portal/group/properties/overview.md) page is displayed.
3. Click the __Delivery Restrictions__ tab.
4. Specify the senders that the group can receive emails from:

   1. Click the __Add__ button in the __Accept from__ area.
   2. Enter a search string to locate the required object, or click __Advanced__ to use the [Find Dialog Box](/docs/product_docs/groupid/groupid/portal/search/find.md) for performing a search.
5. Select the senders that the group cannot accept emails from:
   1. Click the __Add__ button in the __Reject from__ area.
   2. Enter a search string to locate the required object, or click __Advanced__ to use the [Find Dialog Box](/docs/product_docs/groupid/groupid/portal/search/find.md) for performing a search.
6. Save the changes.
