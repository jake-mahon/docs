# Group properties - Smart Group/Query Designer tab

Use this tab to view and modify the query defined for the Smart Group/Dynasty, and even schedule updates.

The group’s membership is updated with the records fetched by the query.

NOTE: In case of an Office 365 group in a Microsoft Entra ID based identity store, group membership is updated with user objects only.

Membership update settings defined for the identity store also impact Smart Group and Dynasty membership update.

__Container(s)__

Displays the domain or containers the query will run on.

__Object Types__

Lists the object types the query will fetch.

__Server and Storage__

These areas are displayed if the query only fetches messaging system recipients. They display the server and storage for the query to fetch the records from.

__Query Designer__

To modify the query, click the __Query Designer__ button. This launches the [Query Designer](/docs/groupid/groupid/portal/group/querydesigner/overview.md) dialog box, where you can modify the query.

Smart Groups and Dynasties in a Microsoft Entra IDbased identity store use a device structured query language while those in an Active Directory based identity store use LDAP queries to update group membership.

__Membership Preview__

You can preview the group members of the smart group before executing the changes.

__Clear__

To remove all the queries set in the Query Designer, click __Clear__.

__Scheduled Job__

You can associate a Smart Group Update job with the group; this is a scheduled job that updates the group’s membership when it runs.

From the __Scheduled Job__ list, select a Smart Group Update job to associate with the group.

This list contains Smart Group Update jobs define for the identity store.

NOTE: If the administrator has enforced the job selection option, you cannot save any changes unless you associate a scheduled job with this group.

__Updated On__

Display the date and time when the group was updated based on the schedule set for it.

__Create a Schedule__

You can create a new schedule other than the ones on the list.
