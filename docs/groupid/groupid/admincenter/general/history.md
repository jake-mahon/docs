# Admin Center History

Directory Manager auto tracks the following actions performed in Admin Center:

- Creation and deletion of identity store
- Creation and deletion of SMS gateway accounts
- Creation and deletion of applications, namely Directory Manager portal, Data service, and Security service
- Addition and removal of security questions in the global question pool
- Changes to global replication settings
- Manual sending and deletion of notifications in the notification queue
- Modifications to notification templates

History can be viewed using the __History__ node in Admin Center. You can:

- Annotate a history action that you have performed. These annotations may explain the reason for performing an action.
- Narrow down the history items using filters.
- Export history data to Microsoft Excel, CSV, and XML formats.

See the [History in Directory Manager](/docs/groupid/groupid/admincenter/history.md) and [Event Logging](/docs/groupid/groupid/admincenter/identitystore/history/eventlogging.md) topics for additional information.

What do you want to do?

- [View Admin Center History](#View-Admin-Center-History)
- [Annotate History Items](#Annotate-History-Items)
- [Export Admin Center History](#Export-Admin-Center-History)

## View Admin Center History

You can view the history data that Directory Manager auto tracks for high level actions performed in Admin Center.

To view history:

1. In Admin Center, click __History__ in the left pane.  
   The __Admin Center History__ page displays history data in a descriptive, concise, and user-friendly manner. Items are sorted according to the date and time, with the most recent at the top.
2. Click a history item to view its details. The __History Details__ dialog box displays the following:
   - __Object Name:__ The name of the object the action was performed on.
   - __Who:__ The name of the user who performed the action.
   - __Where:__ The name of the computer the action was performed on.
   - __When:__ The date and time of the action.
   - __Added Item(s):__ A short description of the action.
   - __Removed Item(s):__ This box is displayed for actions showing deletion. It displays a short description of the action.
3. The __Add Note__ button is available if you performed this action. See [Annotate History Items](/docs/groupid/groupid/admincenter/identitystore/history/details.md#Annotate-History-Items) to manage notes.
4. Click __Close__.

### Filter History Data

Filters on the __Admin Center History__ page are similar to those on the __Identity Store History__ page. Refer to the [Filter History Data](/docs/groupid/groupid/admincenter/identitystore/history/view.md#Filter-History-Data) topic to apply the filters.

### Navigate the History Data

Navigation options on the __Admin Center History__ page are similar to those on the __Identity Store History__ page. Refer to the [Navigate Through History Items](/docs/groupid/groupid/admincenter/identitystore/history/view.md#Navigate-Through-History-Items) topic for help.

## Annotate History Items

1. In Admin Center, click __History__ in the left pane.
2. On the __Admin Center History__ page, click a history item and proceed to add a note. See the [Annotate History Items](/docs/groupid/groupid/admincenter/identitystore/history/details.md#Annotate-History-Items) topic for details.

## Export Admin Center History

You can export Admin Center history to Microsoft Excel, CSV, and XML formats.

__To export history:__

1. In Admin Center, click __History__ in the left pane.
2. On the __Admin Center History__ page, click __Export History__.
3. On the __Export History__ dialog box, enter a name for the history file in the __Name__ box or leave it to default.
4. Select a format for the history file in the __Format__ drop-down list. Available formats are Excel, CSV, and XML
5. Click __Export History__. The file is saved at the download location specified in browser settings.
6. A message is displayed that history data is successfully exported. Click __OK__.
