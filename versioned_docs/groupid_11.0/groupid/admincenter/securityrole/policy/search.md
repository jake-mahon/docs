# Search Policy

The Search policy sets the search scope for the GroupID portal, GroupID Management Shell, and the GroupID mobile app.

By default, any search performed by role members returns objects from all containers in the identity store. Use the Search policy to:

- Limit the search scope to one container for role members.
- Designate a criterion to limit the objects that role members can search.

NOTE: Microsoft Entra ID supports a single container only, so the search scope cannot be restricted container-wise in a Microsoft Entra ID identity store.

## How does the Search Policy Work?

Let’s assume you specify a container, localOU, and set the LDAP filter to (Country=United States\*) for an Active Directory identity store. Now consider these scenarios:

- When a role member performs a search, GroupID looks up the localOU container and displays objects with the _Country_ attribute set to _United States_.
- If you specify a container only, a search performed by role members returns all matching objects residing in that container.
- If you specify an LDAP filter only, a search performed by role members displays objects with the _Country_ attribute set to _United States_ from all containers in the
  identity store.

## Impact of the Search Policy on GroupID Portal

The Search policy has the following impact on the GroupID portal:

- It determines the groups to display in all group listings, such as those on the __All Groups__ and __My Groups__ pages.
- It determines the users to display in user listings, namely __My Direct Reports__ and __Disabled Users__.
- It sets the search scope for the Find dialog box.
- It sets the scope for quick search and advanced search.

What do you want to do?

- [Set the Search Scope to a Specific Container](#set-the-search-scope-to-a-specific-container)
- [Set the Search Scope to all Containers in the Identity Store](#set-the-search-scope-to-all-containers-in-the-identity-store)
- [Designate a Criterion for the Search Scope](#designate-a-criterion-for-the-search-scope)

## Set the Search Scope to a Specific Container

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __Search__ tab.
7. Click __Add__ next to __Add Container__.
8. On the __Add Container__ dialog box, select a container and click __Add__.  
   Search performed by role members will display objects from this container and its sub-containers.
9. Click __OK__.
10. On the __Edit Security Role__ page, click __Update Security Role__.
11. On the __Security Roles__ page, click __Save__.

NOTE: An advanced setting for the GroupID portal, _Search Default_, controls the search scope of the portal. If its value is "Global Catalog", the container specified here is ignored and the portal shows objects
from the entire directory. See the [Manage Advanced Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/advanced.md) topic.

## Set the Search Scope to all Containers in the Identity Store

When no container is specified as the search scope for an identity store, search performed by role members fetches objects from all OUs in the identity store.

__To set the search scope to all containers:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button or an identity store and select __Edit.__
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __Search__ tab.
7. In the __Container__ area, click __Remove__ for a container to remove it.
8. Click __OK__.
9. On the __Edit Security Role__ page, click __Update Security Role__.
10. On the __Security Roles__ page, click __Save__.

## Designate a Criterion for the Search Scope

When you apply a filter criterion, search performed by role members shows objects that match the criteria.

__To designate a criterion:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __Search__ tab.
7. In the __Filters__ area, click __Add Filter__.
8. A row is displayed for adding a criterion.

   1. Select a schema attribute in the first drop-down list (for example, _mail_).
   2. Select an operator in the second drop-down list (for example, _Ends with_).
   3. Enter a value for the schema attribute in the third box (for example, _@Netwrix.com_).

   With this filter, search performed by role members will display objects with email addresses created on the netwrix.com
   domain.

Advanced Filter

You can also define a query by adding more rows and applying the __AND__ or __OR__ operator to group them.

1. After defining two or more filter expressions, select two or more rows and apply one of these operators:  
   (To select a row, click the down arrow next to it and click __Select Row__.)

   - __AND:__ to display the objects having the specified values for all attributes.
   - __OR:__ to display objects having the specified value for any one of the attributes.

   ![search_query](/img/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/search_query.png)
2. Click the ellipsis button for an applied operator to display the context menu, which has the following options:

   - __Select Group:__ to select all rows that make up the query.
   - __Ungroup:__ to remove the operator and ungroup the rows.
   - __Change to OR:__ to change the AND operator to OR and vice versa.
   - __Add Clause:__ to add a new row for specifying another clause for the query.
   - __Delete:__ to delete the operator along with all the rows that the operator joins.

   You can also:

   - Click __Tree View__ to view a list of all queries defined.
   - Click __Preview__ to preview the search results that will be displayed with this Search policy, i.e., with the container and filter settings on
     the __Search__ tab.
   - Click __Clear__ to clear the __Filter__ area.
3. After defining a filter, click __OK__.
4. On the __Edit Security Role__ page, click __Update Security Role__.
5. On the __Security Roles__ page, click __Save__.

__See Also__

- [Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/overview.md)
- [Security Role Policies](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/overview.md)
