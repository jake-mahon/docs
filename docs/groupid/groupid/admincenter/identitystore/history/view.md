# Identity Store History

In Admin Center, you can view the history data that the Directory Manager history-tracking function collects for changes made to the configurations, workflows, and security roles in an identity store.

This data represents the events that history-tracking is configured to track. For example, history is logged when a user enables enrollment for the identity store, removes an approver from a workflow, modifies a policy for a security role, and more.
History is not logged when a user refreshes a page or previews any information.

Furthermore, if history tracking is not enabled or has been lately disabled, the __Identity Store History__ page is blank or it displays data that was logged before history-tracking was turned off.

What do you want to do?

- [View Identity Store History](#View-Identity-Store-History)
- [Filter History Data](#Filter-History-Data)
- [Navigate Through History Items](#Navigate-Through-History-Items)
- [Annotate History Items](#Annotate-History-Items)
- [Export History Data](#Export-History-Data)

## View Identity Store History

Changes made to identity store configurations, security roles, and workflows can be tracked and viewed in Admin Center.

__To view identity store history:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __History__ under __Settings__ in the left pane.

   The __Identity Store History__ page displays history data in a descriptive and concise manner. Items are sorted according to the date and time they were last updated, with the most recent at the top.  
   Click a history item to view its details. See the [History Item Details](/docs/groupid/groupid/admincenter/identitystore/history/details.md) topic.

## Filter History Data

Directory Manager provides filters to limit the history results displayed on the __Identity Store History__ page. You can define a criterion to filter history data by action, machine name, new value, old value, and more.

__To define a filter:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __History__ under __Settings__ in the left pane.  
   On the __Identity Store History__ page, use the __History Filters__ area to specify a filter.
4. In the _Select a Filter_ drop-down list, select an attribute to use for filtering history records. Options are:

   - Action
   - Machine Name
   - Modified On
   - New Value
   - Old Value
   - User Name
5. In the _Select an Operator_ drop-down list, select an operator to apply to the selected attribute. This drop-down displays the operators on the basis of the selected attribute. Available operators are:

   | Condition | Description |
   | --- | --- |
   | Starts with | Returns everything that starts with the value. |
   | Does not start with | Returns everything that does not start with the value. |
   | Ends with | Returns everything that ends with the value.  Searching with this condition is resource-intensive for the directory. |
   | Does not end with | Returns everything that does not end with the value.  Searching with this condition is resource-intensive for the directory. |
   | Is exactly | Returns everything that matches the value. |
   | Is not | Returns everything that does not match the value. |
   | Contains | Returns everything that contains the value.  Searching with this condition is resource-intensive for the directory. |
   | Not contain | Returns everything that does not contain the value.  Searching with this condition is resource-intensive for the directory. |
   | Present | Returns everything that has a value. |
   | Not present | Returns everything that does not have a value. |
   | Greater or equal | Returns everything with a value greater than or equal to the given value. |
   | Less or equal | Returns everything with a value lesser than or equal to the given value. |
6. In the _Select a Value_ box, specify a value for the attribute. The selected attribute and operator determine the kind of value that can be entered in this box.  
   For some operators, such as _Present_ and _Not Present_, this field is not available. These operators check if a value for the attribute is present or not.

   __Add more filters__ - On adding a filter, the next row is displayed, so you can add another filter.  
   __Remove a filter row__ - To remove a filter row, click __Remove__ for it.  
   __Remove the filter__ - To remove all the filter rows, click __Clear__.
7. To apply the filter, click __Apply__. With multiple filters, history items that satisfy all the filters are displayed.

## Navigate Through History Items

By default, the page size for the __Identity Store History__ page is set to 10, indicating that ten history items are displayed per page. You can set the page size to a maximum of 100 items.

To move through pages and navigate the records, use the page numbers and arrows given at the bottom of the listing.

__Set the page size:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __History__ under __Settings__ in the left pane.
4. On the __Identity Store History__ page, use the Items per page drop-down list to specify the number of items to be displayed per page.

__Navigate through records:__

Navigation options are displayed at the bottom of the history records. You can view the history items count along with the range of items you are currently viewing.

- Click __First__ to jump to the first page, containing the latest history records.
- Click __Last__ to jump to the last page, containing the oldest history records.
- Use the arrows to move to the previous or next page.
- Click a page number to jump to that page.

## Annotate History Items

Directory Manager enables a user to add notes to history actions that he or she performed. A note may explain the reason for an action, such as why he or she changed the security type for a group. Only the user who added a note can update it. Other users can
view it, but they cannot edit it or add comments.

__To annotate history items:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __History__ under __Settings__ in the left pane.
4. On the __Identity Store History__ page, click a history item.
5. On the __History Details__ dialog box, manage notes for the history item. See the [Annotate History Items](/docs/groupid/groupid/admincenter/identitystore/history/details.md#annotate-history-items) topic.

## Export History Data

You can export identity store history to Microsoft Excel, CSV, and XML formats.

__To export history:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __History__ under __Settings__ in the left pane.
4. On the __Identity Store History__ page, click __Export History__.
5. On the __Export History__ dialog box, enter a name for the history file in the __Name__ box or leave it to default.
6. Select a format for the history file in the Format drop-down list. Available formats are Excel, CSV, and XML
7. Click __Export History__. The file is saved at the download location specified in browser settings.
8. A message is displayed that history data is successfully exported. Click __OK__.

__See Also__

- [Configure History Tracking](/docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/historytracking.md)
- [History in Directory Manager](/docs/groupid/groupid/admincenter/history.md)
- [Event Logging](/docs/groupid/groupid/admincenter/identitystore/history/eventlogging.md)
