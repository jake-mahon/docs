---
title: identity store linking
sidebar_label: identity-store-linking
description: Directory Manager 11.1 documentation for identity store linking with configuration details, usage instructions, and implementation guidance.
---

# Manage Identity Store Links

You can link identity stores built on the supported identity providers in Directory Manager. In this
way, identical user and group objects existing in multiple identity stores (domains) can be linked
together and auto synced. Directory Manager further enables you to manage these linked identity
stores.

What do you want to do?

- Link Two Identity Stores
- View the Identity Store Links
- Edit a Link
- Disable or Enable a Link
- Delete a Link

## Link Two Identity Stores

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click **Link Identity Stores Now** in the **Identity Store
   Links** area. In case a link already exists, the **Create Identity Store Link** button is
   available.
3. On the **Link Identity Stores** page, click **Add**. The **Add Identity Stores** dialog box lists
   all the Active Directory and Microsoft Entra ID identity stores created in Directory Manager.
4. Select two identity stores and click **Add 2 Stores**. The selected identity stores are displayed
   on the **Link Identity Stores** page.
5. Next, you have to specify the attributes for linking user and group objects in the identity
   stores. Separate filter expressions for user and group objects have to be created for this
   purpose.

   - To create a filter expression for linking user objects, click **Users**.
   - To create a filter expression for linking group objects, click **Groups**.

   The **Add Filter for Users** or **Add Filter for Groups** pane is displayed.

6. For mapping, follow these steps:

   1. Click **Add Filter** to create a filter expression to map objects.

      - The first list displays schema attributes from the first identity store.
      - Next you have one condition, i.e., _Is Exactly_.
      - The third list displays schema attributes from the second identity store.

      Select a schema attribute from the first and third lists to map them. Users with identical
      values for both attributes in the respective identity stores will be linked.

   2. (Optional) You can add more clauses to enhance the filter. These clauses must be joined by a
      logical ‘and’ or ‘or’.
      - Click **Add More Filters**.
      - Select a schema attribute from the first and third lists to map them, with _Is Exactly_ as
        the condition.
      - Select two clauses and then group them by inserting a logical ‘and’ or ‘or’.  
        To select a clause, click the down arrow next to it and choose **Select row**. On
        selecting the second clause, _AND_ and _OR_ are displayed. Select an option to group the
        clauses.  
        You can add as many clauses as required. Moreover, you can group and regroup clauses.
        Users that satisfy the filter expression will be linked.
   3. On clicking the operator, a menu is displayed with the following options:

      - **Select Group / Deselect Group:** This option is not relevant when there is only one
        group containing multiple clauses. It is relevant when you have two or more groups. Click
        it to select the respective group. Then select another group to bind them with a logical
        AND/OR.
      - **Ungroup:** Removes the logical AND/OR to ungroup the clauses in the filter expression.
        In case the operator binds two groups, this option removes the operator to ungroup them.
      - **Change to AND/OR**: Changes the logical AND to OR and vice versa.
      - **Add Clause:** Adds a new clause to the filter.
      - **Delete:** Deletes the operator along with all the clauses that the operator joins.

   4. Notice the two buttons: **Clear** and **Preview**, at the top of the filter expression.

      - **Clear:** Clears the entire filter expression, thereby deleting all attribute mappings.
      - **Preview:** Launches the **Preview Results** dialog box, where you can view identical
        user objects in the identity stores, based on the filter expression.  
        On the **Preview Results** dialog box, enter the name of an object (user or group) in the
        first box, select an identity store, and click **Preview**.

        - For an Active Directory identity store, Directory Manager looks up the values of the
          name, sAMAccountName, objectGUID, and distinguishedName attributes to match the string
          using the _Is exactly_ operator.
        - For a Microsoft Entra ID identity store, Directory Managerlooks up the values of the
          userPrinicipalName, ObjectGUID, distinguishedName, and name (which is equivalent to
          display name) attributes to match the string using the _Is exactly_ operator.  
          Note that Microsoft Entra ID does not contain the distinguishedName attribute; however
          it is available as a pseudo attribute in Directory Manager and its value is the same
          as that of the distinguishedName attribute in Active Directory.

        The **Preview Results** dialog box displays the user object found in the selected
        identity store on the basis of the search string. Next to it, one of the following is
        displayed:

        - The user object identical to it in the other identity store. This is fetched on the
          basis of the mapped attributes. The display name and distinguished name of the user
          are displayed in both identity stores.
        - If no identical object is found, nothing is displayed next to the user.
        - If multiple identities of a user are found in the other identity store, then a
          **Multiple Objects** link is displayed. Click it to open a popup that lists all
          identical objects for the user found in the other identity store.

        If, on the **Preview Results** dialog box, you do not enter a user name but simply
        select an identity store and click **Preview**, all user objects from the selected
        identity store are displayed along with their linked identities in the other identity
        store. If the process takes too long, you can click the orange button at the bottom to
        terminate the process.

   5. Click **Add Filter for Users** in the bottom right corner of the **Add Filter for Users** or
      **Add Filter for Groups** pane.

      NOTE: If you have added multiple clauses but do not group them using the AND/OR operator,
      Directory Manager auto groups them using AND. Similarly, if you add two groups of clauses
      but do not group them using the AND/OR operator, Directory Manager auto groups them using
      AND.

      The filter is added and displayed on the **Link Identity Stores** page.  
       You can specify one filter expression for the user object and one filter expression for the
      group object.

   6. Click **Add Filter Scope** to specify a container for linked identities Directory Manager to
      link and sync later on when they are updated. New objects are also created in this container.

7. Click **Create Link** to save the link.

   NOTE: An identity store link is effective when the two identity stores linked together are also
   associated with a Directory Manager portal, say Portal A. If a portal does not exist with both
   identity store associated with it, a message is displayed to alert you to it.

   The link is displayed on the **Identity Stores** page.

## View the Identity Store Links

All identity store links created in Directory Manager are displayed under **Identity Store Links**
on the **Identity Stores**page.

**To view the links:**

1. In Admin Center, click **Identity Stores** in the left pane.  
   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct
   link between two identity stores. The following information is displayed for a link:

   - The names of the two linked identity stores and the identity providers they have been created
     on.
   - The object types that are linked, i.e., user and group.
   - The link status, displayed in the top right corner of the card. A link can have one of the
     following statuses:

     - **Healthy** - Indicates that both the identity stores are fully functional with
       replication occurring regularly.
     - **Errors** - Indicates that one or both the identity stores have run into errors due to
       replication or connectivity issues. Check the concerned identity store to resolve the
       issue. You will notice that the card for the respective identity store also shows ‘Error’
       as status.

2. Click the ellipsis button to launch a shortcut menu with the following options:

   - **Edit:** launches the **Link Identity Stores** page, where you can update the link.
   - **Disable:** disables the link between the two identity stores.
   - **Delete:** deletes the link.

## Edit a Link

A link between two identity stores involves (a) two identity stores (b) a filter that identifies
identical user objects in the identity stores to link them, and (c) a filter that identifies
identical group objects in the identity stores to link them.

You can edit a link to:

- Replace an identity store in the link
- Update the filter expression for a user or group object
- Remove the filter expression for a user or group object

**To edit a link:**

1. In Admin Center, click **Identity Stores** in the left pane.  
   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct
   link between two identity stores.
2. Click the ellipsis button on a card and select **Edit**.  
   The **Link Identity Stores** page opens, displaying the linked identity stores and the filters.

   - **Replace an identity store** - To change the identity store(s) in the link, either click
     **Edit** next to the identity stores’ names. On the **Add Identity Stores** dialog box, select
     the identity stores to replace the existing ones. Then click **Add 2 Stores**.  
     When one or both identity stores are replaced, the filter expression is automatically removed.
     You must create a new filter expression to establish a link between the identity stores.
   - **Modify the filter expression for user or group object** - Click **Edit** on the filter card
     for the user or group object. The **Add Filter** pane is displayed, where you can update the
     filter expression. Follow step 6a-e in the Link Two Identity Stores topic to update the filter
     expression.  
     Modifying the filter expression for the user or group object breaks the link for the
     respective objects in the linked identity stores. Objects will be relinked on the basis of the
     new filter expression and will be synced accordingly in the Directory Manager portal.
   - **Delete a filter expression** - Click **Remove** on the filter card for a user or group
     object to delete it. Deleting the filter expression for the user or group object breaks the
     link for the respective objects in the linked identity stores.

     NOTE: At least one filter expression for the user object and one filter expression for the
     group object must exist for the identity store link. Else changes will not be saved.

3. After making the required changes, click **Update Link**.

## Disable or Enable a Link

When you disable a link between two identity stores, it becomes inactive and the objects in the
identity stores are not linked anymore in the Directory Manager portal.

A disabled link can be enabled again to relink objects in the identity stores.

**To disable a link:**

1. In Admin Center, click **Identity Stores** in the left pane.  
   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct
   link between two identity stores.
2. Click the ellipsis button on a card and select **Disable** to disable the link.  
   Click the ellipsis button for a disabled link and select **Enable** to reactivate it.

## Delete a Link

When you delete a link between two identity stores, the objects in the identity stores are not
linked anymore in the Directory Manager portal.

**To delete a link:**

1. In Admin Center, click **Identity Stores** in the left pane.  
   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct
   link between two identity stores.
2. Click the ellipsis button on a card and select **Delete** to delete the link.

**See Also**

- [Link Identity Stores](/docs/directorymanager/11.1/configuration/identity-store-linking.md)

# Link Identity Stores

You can link identity stores in Directory Manager. In this way, identical user and group objects
existing in multiple identity stores (domains) can be linked together and auto synced.

For example, you can create a link between the following types of identity stores:

- Two Active Directory identity stores
- An Active Directory identity store and a Microsoft Entra ID identity store
- Two Microsoft Entra ID identity stores
- An Active Directory identity store and a Google Workspace identity store

NOTE: (1) Two identity stores built on the same domain cannot be linked.  
(2) An identity store must be replicated in Directory Manager before it can be linked.

## Linked Identity Stores and the Directory Manager Portal

Linking, in itself, is not effective until the identity stores joined via linking are associated
with a Directory Manager portal, say Portal_A. Consider the following:

- The administrator links IdentityStoreA and identityStoreB.
- The administrator creates a portal, Portal_A, and associates both the linked identity stores with
  it.
- This enables portal users to view data from IdentityStoreA and identityStoreB at the same time,
  rather than having to switch identity stores. Users can also filter data for identical objects in
  both the identity stores.  
  Users can choose to view data for a single identity store or switch to the ‘linked’’ mode to view
  data simultaneously from both the linked identity stores.

When only IdentityStoreA or IdentityStoreB is associated with Portal_A, the linking between the two
identity stores serves no purpose.

### Benefits of Running the Portal Under the ‘Linked’ Mode

A portal running under the ‘linked’ mode is effectively connected to all the linked identity stores
that are associated with it. You can access objects in different identity stores in a single
instance of the portal, rather than having to log out and connect the portal to another identity
store.

The following portal functions are impacted under the ‘linked’ mode:

- When a user performs a search, results are fetched from all the linked identity stores.
- When an action is performed on a user or group object, it is replicated to all the identical
  objects in the linked identity store(s). In this way, identical user and group objects in the
  linked identity stores are auto synced. Consider the following:

  - When you create a static group, its identical static group is created in a linked identity
    store.
  - When you create a Smart Group, its identical group is created as a static group in a linked
    identity store.
  - When you create a mail-enabled group, an identical simple group is created in a linked
    identity store.
  - When you create a mailbox or a mail-enabled user, an identical simple user is created in a
    linked identity store.
  - When you delete a user or group object in an identity store, its linked object(s) are also
    deleted.
  - When you update the properties of a user or group object, those same properties are also
    updated for its linked object(s) in the linked identity store(s).
  - When you execute the query for a Smart Group to update it, its linked Smart Group(s) will not
    be auto updated.
  - When you upgrade a static group (say, GroupA) to a Smart Group, the linked static group(s)
    (say, GroupB and GroupC) in the linked identity store(s) will not be upgraded to Smart Groups.

- Group listings in the portal (namely All Groups, My Groups, and Deleted Groups) display the groups
  from all the linked identity stores. Users can select groups from any identity store to perform an
  action in bulk, such as expire them.
- User listings in the portal, such as My Direct Reports, display user objects from all the linked
  identity stores. Users can select user objects from any identity store to perform an action in
  bulk, such as terminate them.
- For entitlements, the portal shows Active Directory file server and SharePoint permissions from
  all the linked identity stores.

When the logged-in user exists in multiple linked identity stores, he or she can perform actions in
an identity store according to his or her role and permissions in the respective identity store. For
example, if the user is an administrator in IdentityStoreA and a standard user in IdentityStoreB, he
or she can perform administrative actions on groups in IdentityStoreA only, even though the group
listing displays all groups from both the linked identity stores.

## How to Link Two Identity Stores

Linking two identity stores follows a simple and straight-forward process:

- Select the required identity stores.
- Create a filter expression to map attributes. Select a schema attribute from IdentityStoreA and
  another from IdentityStoreB. This mapping establishes a link between the two identity stores.  
  You can also create an advanced filter expression by adding multiple clauses to the filter (where
  each clause is a one-to-one mapping of attributes) and joining them with the ‘and’ or ‘or’
  operator.  
  You have to create a separate filter expression for user and group objects.
- When two objects have the same value for the mapped attributes in the two identity stores,
  Directory Manager identifies them as identical objects, and hence links them.

For example, to link IdentityStoreA to IdentityStoreB, select the displayName and cn attributes from
IdentityStoreA and IdentityStoreB respectively to map them. Now when an object has _Mary Jones_ as
value for the distinguishedname attribute in dentityStoreA and an object has _Mary Jones_ as value
for the cn attribute in dentityStoreB, Directory Manager identifies them as identical objects
existing in two distinct directories, and links them.

RECOMMENDED: For mapping, always use attributes that store unique values.

## How to Link Multiple Identity Stores

You can link more than two identity stores; in fact, Directory Manager empowers you to link identity
stores created for Directory Manager supported providers.

You cannot just create one link to link multiple identity stores. Rather, if you want to link three
identity stores, you will have to create two links; to link four identity stores, create three
links, and so on. Each link involves two identity stores, thereby creating a chain of linked
identity stores.

Here is how it works:

- Link two identity stores, IdentityStoreA and IdentityStoreB, by following the discussion in the
  How to Link Two Identity Stores topic.  
  Directory Manager now considers this link as one entity. Let’s call it Entity1.
- Next, link IdentityStoreA or IdentityStoreB to IdentityStoreC using the same method.  
  This establishes a link between Entity1 and IdentityStoreC.

In this way, you can create a chain of links between identity stores.

**See Also**

- [Identity Stores](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Manage Identity Store Links](/docs/directorymanager/11.1/configuration/identity-store-linking.md)
