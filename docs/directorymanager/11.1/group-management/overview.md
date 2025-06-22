# Groups

Using Directory Manager portal, you can create:

- An unmanaged group or a static group.

  - A static group is a group you would normally create in a directory (for example, by using the
    Active Directory Users and Computers snap-in). Though such groups can be created using
    Directory Manager portal, Directory Manager does not support dynamic updates to them. Any
    changes to the membership have to be updated manually.

- A managed group or a Smart Group or a Dynasty.

  - A Smart Group (normal Smart Group and Smart Group with a password expiry condition)

    A Smart Group is one that dynamically maintains its membership based on rules. These rules
    are applied in the form of a user-defined query, such as an LDAP query. This query is
    defined once and scheduled for membership update using a Smart Group Update job. When the
    Smart Group update job runs, it applies the defined rules to update the group's memberships.

    In this way, Smart Groups are automatically updated whenever the directory information
    changes. This automated group management allows administrators to easily maintain large
    distribution lists and security groups without having to manually add or remove members.

  - A Dynasty is a Smart Group that creates and manages other Smart Groups using information in
    the directory. Dynasties help you manage large distribution lists by creating hierarchical
    group structures that represent your organization’s hierarchy.

# Dynasty

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. Dynasties help you manage large distribution lists by creating hierarchical group
structures that represent your organization. The Smart Groups that the Dynasty creates are called
child groups and become members of their respective parent Dynasty.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups.

## The group-by field determines child groups

When you create a Dynasty, you specify a query and a field, referred to as the _group-by_ field. The
group-by field is used to divide the query results into groups.

For example, if you set ‘department’ as the group-by field, then each distinct value for the
‘department’ field is returned, for instance, Sales, Marketing, and Human Resources. Thus, a Dynasty
with the group-by field set to ‘department’ creates child groups for each distinct value: Sales,
Marketing, and Human Resources.

## Built-in updates

Directory Manager keeps the Dynasty active in two ways:

- By adding new child groups as new values are returned for the group-by field.
- By removing existing child groups as previous values of the group-by field no longer exist in the
  directory.

Thus, as new values of the ‘department’ field appear, new groups are created, and as old values
disappear, the corresponding child groups are deleted.

The same process occurs with the membership of each child group. When a user’s department changes
from Sales to Marketing, for example, the user is removed from the Sales child group and added to
the Marketing child group.

## The child-parent relationship

Dynasty children inherit their parent's characteristics and properties, such as group type, group
security, expiry policy, owner, delivery restrictions, message size restrictions and more.
Inheritance saves administrators incalculable time through the systematic application of pre-defined
properties to new groups.

You can modify the values of all inherited attributes for a child, except the expiry policy. Child
Dynasties always inherit the expiry policy from the parent Dynasty and it can only be modified at
the parent level.

Depending on the inheritance option selected for the parent Dynasty on the
[Group properties - Dynasty Options tab](/docs/directorymanager/11.1/group-management/group-dynasties.md) in group properties, the
modified values of inherited attributes may or may not persist.

## Multi-level Structure

Dynasties have a multi-level structure. For example, you can create a Dynasty that groups first by
country, then state, and then city. When updated, the Dynasty creates a group for every country,
then it creates a group for every state in a country, and finally it creates a group for each city
within each state. Thus, each user in the organization belongs to a country group, a state group,
and a city group, and as the groups are updated through their multi-level structure, you do not need
to worry that they will go out-of-date.

Dynasties come in handy for creating and maintaining large dynamic distribution lists in your
organization.

# Group Management

Directory Manager portal enables you to manage directory groups, that includes both static groups
and Smart Groups. You can:

- Create static groups, Smart Groups and Dynasties.
- Manage the type, scope, security type, and ownerships of groups.
- Manage group membership dynamically.
- Specify an expiry policy for groups. This policy defines the period for which the group remains
  active. When the period is over, the group becomes inactive and is locked for all activities.
- Groups can also be moved between domains within a single forest.

Examples of directory groups include distribution lists and security groups.

Directory Manager portal updates Smart Groups and Dynasties on the basis of user-defined queries.
When directory information changes, Directory Manager portal automatically updates the appropriate
groups, thus ensuring that groups are never out of date.

This allows administrators to easily maintain large groups without having to manually add and remove
members.

NOTE: You must [Log in](/docs/directorymanager/11.1/misc/directorymanager/portal/login.md#log-in) before using it for group management.

NOTE: When two identity stores (say, ID1 and ID2) are connected to the same domain (for example,
demo1.com), then objects in demo1.com would have a distinct state in ID1 and ID2. For example, an
object’s state (such as expiry policy, Smart Group criteria, additional owners, etc.) would be
different in both identity stores.

# Group Properties

You can view and manipulate the properties of groups in the connected identity store, depending on
the permissions the Directory Manager administrator has granted you.

Select the required object and click **Properties** on the toolbar. The object's properties page is
displayed.

**On the group's properties page, you can:**

1. Save the changes made in the properties by clicking **Save**.
2. Click **Delete** to delete the group.
3. **Join** a group as a
   [Join a group temporarily](/docs/directorymanager/11.1/group-management/groupjoinleave.md#join-a-group-temporarily) or
   [Join a group permanently](/docs/directorymanager/11.1/group-management/groupjoinleave.md#join-a-group-permanently)

   Select **Other** to add other users to the group.

4. **Leave** a group’s membership
   [Leave a group temporarily](/docs/directorymanager/11.1/group-management/groupjoinleave.md#leave-a-group-temporarily) or
   [Leave a group permanently](/docs/directorymanager/11.1/group-management/groupjoinleave.md#leave-a-group-permanently).

   Select **Other** to remove other users from the group.

5. To **Join/Leave** the group, you can also click on **Want to write reason to group owner?** and
   state the the reason for joining or leaving the group for the group owner.
6. Click **Upgrade To** to change the group into one of the following:

   - Smart Group
   - Dynasty
   - Managerial Dynasty

7. Select a group and click **Move Group** from the toolbar. You can specify a new container from
   **Select Container** box where you want to move the group.
8. Add a group’s email to your email contact list using the vCard.

   Select a group and click **Add to Contacts** on the toolbar. The portal creates the group's
   vCard and prompts you to save it on your machine. You can then use it to add the group's email
   address to your email contact list.

9. Select a group and click **Send Email** on the toolbar. This launches the default Windows email
   application for sending an email to group members.
10. For Teams, click **Subscribe Group** to get subscriptions of that Teams channel.
11. To unsubscribe from the Teams channel, click **Unsubscribe Group** from the toolbar.

## Group Properties

- [Group properties - General tab](/docs/directorymanager/11.1/group-management/general.md)
- [Group properties - Owner tab](/docs/directorymanager/11.1/group-management/owner.md)
- [Group properties - Members tab](/docs/directorymanager/11.1/group-management/managing-members.md)
- [properties - Member Of tab](/docs/directorymanager/11.1/group-management/managing-members.md)
- [Group properties - Delivery Restrictions tab](/docs/directorymanager/11.1/group-management/deliveryrestrictions.md)
- [Object properties - Attributes tab](/docs/directorymanager/11.1/group-management/attributes.md)
- [Group properties - Email tab](/docs/directorymanager/11.1/group-management/email.md)
- [Group properties - Advanced tab](/docs/directorymanager/11.1/group-management/advanced.md)
- [Group properties - Tree View](/docs/directorymanager/11.1/group-management/treeview.md)
- [Group Properties - Entitlement tab](/docs/directorymanager/11.1/group-management/entitlements.md)
- [Group properties - Similar Groups tab](/docs/directorymanager/11.1/group-management/similargroups.md)
- [Object properties - History tab](/docs/directorymanager/11.1/group-management/history.md)
- [Teams Properties - Channels](/docs/directorymanager/11.1/group-management/channels.md) (For Teams only)
- [Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.1/group-management/smartgroup.md) (for Smart Groups and Dynasties
  only)
- [Group properties - Dynasty Options tab](/docs/directorymanager/11.1/group-management/group-dynasties.md) (for Dynasties only)

NOTE: The **Delivery Restrictions**, **Attributes**, **Email**, and **Advanced** tabs are not
available for groups in a Microsoft Entra IDbased identity store.

# Query Designer

The Query Designer enables you to create queries for Smart Groups, Dynasties and directory objects
searches. These queries provide a quick and consistent way to retrieve a common set of directory
objects on which you want to perform specific tasks. For example, you can construct a query to
retrieve all users having mailboxes on a particular Exchange Server or you can build a query to
retrieve all directory objects whose information is present in an external data source, such as
Microsoft SQL Server.

If the administrator has defined a Query Designer access policy for your role, you can create
queries as per the defined policy. A banner is displayed on the Query Designer dialog box indicating
that the administrator has implemented a policy for your role. See the
[ Query Designer Policy](/docs/directorymanager/11.1/administration/security-policies.md) topic.

The query language depends on the identity store type.

- An Active Directory based identity store supports an LDAP query.
- A Microsoft Entra ID based identity store supports a device structured query language.

## Launch the Query Designer

You can launch the Query Designer dialog box for a Smart Group or a Dynasty or a search query in any
of the following ways:

- While creating a Smart Group or Dynasty - On the Smart Group/Query Designer page of the New Smart
  Group wizard or New Dynasty wizard, click **Query Designer**.
- From group properties - On the Smart Group/Query Designer tab in Smart Group/Dynasty properties,
  click **Query Designer**.
- When you upgrade a static group to a Smart Group or Dynasty.
- From the Queries page - On the Advanced Search page, click the **Or use the new query based
  search** link. Then click **Query Designer**.

## The Query Designer Interface

The Query Designer dialog box provides a visual interface for designing queries, so that you do not
have to write the commands. Its preview feature returns the results for the query before you commit
them to the directory server.

The Query Designer dialog box groups similar query options by tabs. Settings that are not grouped in
tabs are global; they apply to all tabs.

### Common Settings and Buttons

**Find**

Select an option to specify the type of object to include in the membership of the group.

- **Messaging System Recipients** - Mail-enabled objects
- **Computers** - Returns computers only
- **Custom** - Returns all objects regardless of objectClass. Be sure to add an objectClass
  predicate on the Database tab to avoid unpredictable results.

  Be sure to combine an external data source with the directory to search directory objects on the
  Database tab to avoid unpredictable results.

- **Users, Contacts, and Groups** - Any user, contact, or group, whether mail-enabled or not.

NOTE: The _Computers_ and _Contact_ object types are not supported in a Microsoft Entra ID identity
store.

**Start in**

Click this button to select the containers to search in. The query would search for objects only in
this container and its sub-containers to determine a group’s membership.

Preview

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

OK

Saves settings and closes the dialog box.

Cancel

Discards settings and closes the dialog box.

LDAP Query

View the provider query in the LDAP Query box.

### Tabs

The Query Designer has the following tabs:

- [Query Designer - General tab](/docs/directorymanager/11.1/group-management/general.md)
- [Query Designer - Storage tab](/docs/directorymanager/11.1/group-management/storage.md)
- [Query Designer - Filter Criteria tab](/docs/directorymanager/11.1/group-management/filtercriteria.md)
- [Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/group-management/includeexclude.md)
- [Query Designer - Database tab](/docs/directorymanager/11.1/group-management/database.md)
- [Query Designer - Script tab](/docs/directorymanager/11.1/group-management/script.md)
- [Query Designer - Password Expiry Options tab](/docs/directorymanager/11.1/group-management/passwordexpiryoptions.md)[Query Designer - Password Expiry Options tab](/docs/directorymanager/11.1/group-management/passwordexpiryoptions.md)
  (only available for Smart Groups with a password expiry condition)

NOTE: The **Storage** and **Script** tabs are not available for groups in a Microsoft Entra ID
identity store.

# Deleted Groups

Directory Manager portal handles group deletion as either physical or logical.

## Tombstone Groups

Physically deleted groups have Tombstone as type. Physical group deletion refers to manually
deleting groups using the **Delete** option on the **Actions** menu or shortcut menu. Directory
Manager moves a physically deleted it to the Recycle Bin while stripping it of most of its
properties. You can delete or restore a group from the Recycle Bin. The restoration process not only
restores the group to its original container, but it also reinstates the home container for the
group, if deleted.

When restored, a physically deleted group is restored with limited attributes; its membership is not
restored.

A Smart Group and Dynasty is restored as a static group with no members and no query.

NOTE: Tombstone groups are not available in Microsoft Entra ID.

## Logical Deletion

Groups that are deleted by the Group Lifecycle job are considered to be logically deleted. The job
deletes expired groups X number of days after group expiry, as specified in Group Lifecycle policy
settings.

Upon deletion, logically deleted groups are moved to the Recycle Bin, with all their attributes
intact. As a result, a logically deleted group, when restored, returns to its state it had at the
time of deletion. The restoration process not only restores the group to the container from where it
was deleted but it also reinstates the home container for the group, if deleted.

You can also manually delete a logically deleted group in the Recycle Bin, making it physically
deleted. Simply select the required group and select Delete on the shortcut menu.

## Deletion notifications

When the Group Lifecycle job deletes a group, it notifies the group owners or, if there is no owner,
the default approver specified in the Group Lifecycle policy.

## Modify Search Directory

You can modify the search results in **Modify Search Directory**. You can select entire directory or
a domain to search deleted groups from.

## Filter Deleted Groups

You can add filters while searching for specific deleted groups from Tombstone or Logically Deleted
Groups.

1. Click **Add Filter** to specify a criterion for filtering deleted groups.
2. From the **Select a Filter** list, select the attribute to filter deleted groups.
3. Two more boxes get displayed next to **Select a Filter** box upon selecting a filter.

   - **Select an Operator** from the first list.
   - Specify a value for the selected operator in the second box.

4. Click **Apply Filter**.

   Deleted Groups that match the specified criterion are displayed.

5. You can add additional filters by clicking **Add Filter**.
6. To undo the filters, click **Reset Filter.** It will remove all the criteria set before.

## Delete a group from Recycle Bin

Follow the steps to delete a group from Recycle Bin.

1. In Directory Manager portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Delete** on the shortcut menu.

The group / groups will be permanently deleted from the recycle bin.

## Restore a deleted group

Follow the steps to restore a deleted group.

1. In Directory Manager portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Restore** on the shortcut menu.

The group / groups will be restored in the directory.

NOTE: You can only restore a physically deleted group from the Recycle Bin if the service account
for the connected identity store has the ‘Reanimate Tombstone’ permissions.

NOTE: While all searches in Directory Manager are catered through Elasticsearch, the Recycle Bin is
an exception, as it fetches data from the directory.

NOTE: The Recycle Bin does not display data for a Microsoft Entra ID based identity store.
