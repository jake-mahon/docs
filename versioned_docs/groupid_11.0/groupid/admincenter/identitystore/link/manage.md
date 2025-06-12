# Manage Identity Store Links

You can link identity stores built on the supported identity providers in GroupID. In this way, identical user and group objects existing in multiple identity stores (domains) can be linked together
and auto synced. GroupID further enables you to manage these linked identity stores.

What do you want to do?

- [Link Two Identity Stores](#Link-Two-Identity-Stores)
- [View the Identity Store Links](#View-the-Identity-Store-Links)
- [Edit a Link](#Edit-a-Link)
- [Disable or Enable a Link](#Disable-or-Enable-a-Link)
- [Delete a Link](#Delete-a-Link)

## Link Two Identity Stores

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click __Link Identity Stores Now__ in the __Identity Store Links__ area. In case a link already exists, the __Create Identity Store Link__ button is available.
3. On the __Link Identity Stores__ page, click __Add__. The __Add Identity Stores__ dialog box lists all the Active Directory and Microsoft Entra ID identity stores created in GroupID.
4. Select two identity stores and click __Add 2 Stores__. The selected identity stores are displayed on the __Link Identity Stores__ page.
5. Next, you have to specify the attributes for linking user and group objects in the identity stores. Separate filter expressions for user and group objects have to be created for this purpose.

   - To create a filter expression for linking user objects, click __Users__.
   - To create a filter expression for linking group objects, click __Groups__.

   The __Add Filter for Users__ or __Add Filter for Groups__ pane is displayed.
6. For mapping, follow these
   steps:

   1. Click __Add Filter__ to create a filter expression to map objects.

      - The first list displays schema attributes from the first identity store.
      - Next you have one condition, i.e., _Is Exactly_.
      - The third list displays schema attributes from the second identity store.

      Select a schema attribute from the first and third lists to map them. Users with identical values for both attributes in the respective identity stores will be linked.
   2. (Optional) You can add more clauses to enhance the filter. These clauses must be joined by a logical ‘and’ or ‘or’.
      - Click __Add More Filters__.
      - Select a schema attribute from the first and third lists to map them, with _Is Exactly_ as the condition.
      - Select two clauses and then group them by inserting a logical ‘and’ or ‘or’.  
        To select a clause, click the down arrow next to it and choose __Select row__. On selecting the second clause, _AND_ and _OR_ are displayed. Select an option to group the clauses.  
        You can add as many clauses as required. Moreover, you can group and regroup clauses. Users that satisfy the filter expression will be linked.
   3. On clicking the operator, a menu is displayed with the following options:

      - __Select Group / Deselect Group:__ This option is not relevant when there is only one group containing multiple clauses. It is relevant when you have two or more groups. Click it to select the respective group. Then select another group to bind them with a logical AND/OR.
      - __Ungroup:__ Removes the logical AND/OR to ungroup the clauses in the filter expression. In case the operator binds two groups, this option removes the operator to ungroup them.
      - __Change to AND/OR__: Changes the logical AND to OR and vice versa.
      - __Add Clause:__ Adds a new clause to the filter.
      - __Delete:__ Deletes the operator along with all the clauses that the operator joins.
   4. Notice the two buttons: __Clear__ and __Preview__, at the top of the filter expression.

      - __Clear:__ Clears the entire filter expression, thereby deleting all attribute mappings.
      - __Preview:__ Launches the __Preview Results__ dialog box, where you can view identical user objects in the identity stores, based on the filter expression.  
        On the __Preview Results__ dialog box, enter the name of an object (user or group) in the first box, select an identity store, and click __Preview__.

        - For an Active Directory identity store, GroupID looks up the values of the name, sAMAccountName, objectGUID, and distinguishedName attributes to match the string using the _Is exactly_ operator.
        - For a Microsoft Entra ID identity store, GroupIDlooks up the values of the userPrinicipalName, ObjectGUID, distinguishedName, and name (which is equivalent to display name) attributes to match the string using the _Is exactly_ operator.  
          Note that Microsoft Entra ID does not contain the distinguishedName attribute; however it is available as a pseudo attribute in GroupID and its value is the same as that of the distinguishedName attribute in Active Directory.

        The __Preview Results__ dialog box displays the user object found in the selected identity store on the basis of the search string. Next to it, one of the following is displayed:

        - The user object identical to it in the other identity store. This is fetched on the basis of the mapped attributes. The display name and distinguished name of the user are displayed in both identity stores.
        - If no identical object is found, nothing is displayed next to the user.
        - If multiple identities of a user are found in the other identity store, then a __Multiple Objects__ link is displayed. Click it to open a popup that lists all identical objects for the user found in the other identity store.

        If, on the __Preview Results__ dialog box, you do not enter a user name but simply select an identity store and click __Preview__, all user objects from the selected identity store are displayed along with their linked identities in the other identity store. If the process takes too long, you can click the orange button at the bottom to terminate the process.
   5. Click __Add Filter for Users__ in the bottom right corner of the __Add Filter for Users__ or __Add Filter for Groups__ pane.

      NOTE: If you have added multiple clauses but do not group them using the AND/OR operator, GroupID auto groups them using AND. Similarly, if you add two groups of clauses but do not group them using the AND/OR operator,
      GroupID auto groups them using AND.

      The filter is added and displayed on the __Link Identity Stores__ page.  
      You can specify one filter expression for the user object and one filter expression for
      the group object.
   6. Click __Add Filter Scope__ to specify a container for linked identities GroupID to link and sync later on when they are updated. New objects are also created in this container.
7. Click __Create Link__ to save the link.

   NOTE: An identity store link is effective when the two identity stores linked together are also associated with a GroupID portal, say Portal A. If a portal does not exist with both identity store associated with it, a message is displayed to alert you
   to it.

   The link is displayed on the __Identity Stores__ page.

## View the Identity Store Links

All identity store links created in GroupID are displayed under __Identity Store Links__ on the __Identity Stores__page.

__To view the links:__

1. In Admin Center, click __Identity Stores__ in the left pane.  
   On the __Identity Stores__ page, each card under __Identity Store Links__ represents a distinct link between two identity stores. The following information is displayed for a link:

   - The names of the two linked identity stores and the identity providers they have been created on.
   - The object types that are linked, i.e., user and group.
   - The link status, displayed in the top right corner of the card. A link can have one of the following statuses:

     - __Healthy__ - Indicates that both the identity stores are fully functional with replication occurring regularly.
     - __Errors__ - Indicates that one or both the identity stores have run into errors due to replication or connectivity issues. Check the concerned identity store to resolve the issue. You will notice that
       the card for the respective identity store also shows ‘Error’ as status.
2. Click the ellipsis button to launch a shortcut menu with the following options:

   - __Edit:__ launches the __Link Identity Stores__ page, where you can update the link.
   - __Disable:__ disables the link between the two identity stores.
   - __Delete:__ deletes the link.

## Edit a Link

A link between two identity stores involves (a) two identity stores (b) a filter that identifies identical user objects in the identity stores to link them, and (c) a filter that identifies identical group objects in the identity stores to link
them.

You can edit a link to:

- Replace an identity store in the link
- Update the filter expression for a user or group object
- Remove the filter expression for a user or group object

__To edit a link:__

1. In Admin Center, click __Identity Stores__ in the left pane.  
   On the __Identity Stores__ page, each card under __Identity Store Links__ represents a distinct link between two identity stores.
2. Click the ellipsis button on a card and select __Edit__.  
   The __Link Identity Stores__ page opens, displaying the linked identity stores and the filters.

   - __Replace an identity store__ - To change the identity store(s) in the link, either click __Edit__ next to the identity stores’ names. On the __Add Identity Stores__ dialog box, select the identity stores to replace the existing ones. Then click __Add 2 Stores__.  
     When one or both identity stores are replaced, the filter expression is automatically removed. You must create a new filter expression to establish a link between the identity stores.
   - __Modify the filter expression for user or group object__ - Click __Edit__ on the filter card for the user or group object. The __Add Filter__ pane
     is displayed, where you can update the filter expression. Follow step 6a-e in the [Link Two Identity Stores](#Link-Two-Identity-Stores) topic
     to update the filter expression.  
     Modifying the filter expression for the user or group object breaks the link for the respective objects in the linked identity stores. Objects
     will be relinked on the basis of the new filter expression and will be synced accordingly in the GroupID portal.
   - __Delete a filter expression__ - Click __Remove__ on the filter card for a user or group object to delete it. Deleting the filter
     expression for the user or group object breaks the link for the respective objects in the linked identity stores.

     NOTE:  At least one filter expression for the user object and one filter expression for the group object must exist for the identity store link. Else changes will not be saved.
3. After making the required changes, click __Update Link__.

## Disable or Enable a Link

When you disable a link between two identity stores, it becomes inactive and the objects in the identity stores are not linked anymore in the GroupID portal.

A disabled link can be enabled again to relink objects in the identity stores.

__To disable a link:__

1. In Admin Center, click __Identity Stores__ in the left pane.  
   On the __Identity Stores__ page, each card under __Identity Store Links__ represents a distinct link between two identity stores.
2. Click the ellipsis button on a card and select __Disable__ to disable the link.  
   Click the ellipsis button for a disabled link and select __Enable__ to reactivate it.

## Delete a Link

When you delete a link between two identity stores, the objects in the identity stores are not linked anymore in the GroupID portal.

__To delete a link:__

1. In Admin Center, click __Identity Stores__ in the left pane.  
   On the __Identity Stores__ page, each card under __Identity Store Links__ represents a distinct link between two identity stores.
2. Click the ellipsis button on a card and select __Delete__ to delete the link.

__See Also__

- [Link Identity Stores](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/link/overview.md)
