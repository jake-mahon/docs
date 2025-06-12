# My Groups' History

To view a detailed list of the actions that you have performed on the groups that you own using the following, click __History__ on the left navigation bar:

- GroupID portal
- GroupID Management Shell cmdlets
- GroupID mobile app
- GroupID APIs

History page opens with the __My History__ tab in view. On the displayed page, click
the __My Groups History__ tab.

History is logged for groups that have you as the primary or additional owner.

What do you want to do?

- [History view modes](#history-view-modes)
- [Filter history data](#filter-history-data)
- [Add notes to history items](#add-notes-to-history-items)
- [Export history data](#export-history-data)

## History view modes

History data can be viewed in two modes:

### Detailed view

Displays history data in a descriptive and user-friendly manner. Items are sorted according to the date and time of modification, showing the most recent at the top.

This is the default view of history data.

### Administrative view

This view is only available if you have administrative privileges.

Click __Switch to Administrative View__ to view history data in administrative mode. It displays history data in a tabular form. History items are grouped by date. Each date group displays changes made to your groups during that period.

You can expand an item to view more details, such as the names of the attributes modified in an action along with their old and new values.

## Filter history data

1. Click __My Groups History Grid Filter__ to specify a criteria for filtering history data.
2. Click __Add Filter__ to add the filter criteria.
3. From the __Select a filter__ list, select attributes to filter history data on the basis of the attribute modified.
4. Two more boxes get displayed next to __Select a filter__ box upon selecting a filter.

   - __Select an Operator__: Select an operator from the first list.
   - __Select a Value__: Specify a value for the selected operator in the second box.

   For example, if you select '_Modified on_' from the first list, '_is exactly_' from the second list, and specify a date in the third box, then history items that were modified on the specified date will be displayed.
5. Click __Apply Filter__.

   History items that match the specified criteria are displayed.
6. Use the __Search In__ list to load history data from the entire directory or a domain.

   This list shows a tree view of all the domains in the connected identity store. Select the required domains or select __Entire Directory__ to view objects' history from all domains.
7. Click __Refresh__ to reload history data for the domains selected in the __Search In__ list.

## Add notes to history items

GroupID enables a user to add notes to history items that were logged as a result of any change they made. A note may explain the reason for making a certain change, such as why they changed the security type for a group.

Only the user who added the note can update it. Other users can only view this note; they cannot edit or add comments.

- The __Add Note__ button is available next to a history item listed.
- Once you add a note, the __Add Note__ button changes to __View Note__. All portal users can use this button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and all History pages i.e.[My History](/versioned_docs/groupid_11.0/groupid/portal/history/myhistory.md), [My Direct Reports' History](/versioned_docs/groupid_11.0/groupid/portal/history/mydirectreport.md) and [My Groups' History](#my-groups-history) pages.

1. Click the __Add Note__ button next to a history item to add a note to it.
2. On the __Add Note__ dialog box, write a note and click __Add Note__ to save it.

   Your note can have a maximum of 500 characters.

### Edit a note

You can only edit the note that you have added.

1. Click the __View Note__ button next to a history item to view or edit the note for it.
2. On the __Note__ dialog box, click the __Edit Note__ button and update the note.
3. Click __Update Note__ to save the changes.

### View a note

Once a note is added, other users can view it, but they cannot edit it or add comments to it.

- In the Detailed view:

  Click the __View Note__ button next to a history item to view the note for it.
- In the Administrative view:

  The __Note__ column displays the note.

### Remove a note

You can only remove the note that you have added.

1. Click the __View Note__ button next to a history item to view or remove the note for it.
2. Click the __Edit Note__ button and remove the note.
3. Click __Update Note__.

## Export history data

You can export history data displayed to an external file.

Click the __Export History__ button and select the file type to export history data to. Supported formats are:

- Excel
- CSV
- XML

The file is created at the download location specified in the browser settings.

__See Also__

- [History](/versioned_docs/groupid_11.0/groupid/portal/history/overview.md)
- [Portal Settings](/versioned_docs/groupid_11.0/groupid/portal/setting/portal.md)
