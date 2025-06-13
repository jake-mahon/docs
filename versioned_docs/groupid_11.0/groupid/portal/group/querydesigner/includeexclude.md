# Query Designer - Include/Exclude tab

Use this tab to include or exclude an object from group membership, regardless of whether it is returned by the query. The Include and Exclude lists affect group membership at two points in the update process:

- __Immediately__ - When you close the Query Designer dialog box, the GroupID portal adds the objects in the Include list to the group membership and removes the objects in the Exclude list from the group
  membership. If you have removed objects from the Include list, the group’s membership is updated immediately. However, if you have removed objects from the Exclude list, the group’s membership is updated only by manual update or by a scheduled
  job.
- __At group membership update__ - When the group membership is updated using a scheduled job or the Update command, GroupID obtains the query results, adds the objects to include, and then removes the objects
  to exclude.

NOTE: For best performance, use query criteria to include or exclude objects as opposed to statically selecting the objects using this tab.

__Include__

Displays the list of objects to include in group membership. The list also displays the objects that are imported to the membership of this group using the portal's import feature. Use the __Add__ and __Remove__ buttons
to modify this list.

__Exclude__

Displays the list of objects to exclude from group membership. Use the __Add__ and __Remove__ buttons to modify this list.

__Preview__

Enables you to preview the results returned with the criteria specified on all tabs of the Query Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to the directory.

__OK__

Saves settings and closes the dialog box.

__Cancel__

Discards settings and closes the dialog box.

__LDAP Query__

View the provider query in the LDAP Query box.

__See Also__

- [Query Designer](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/overview.md)
