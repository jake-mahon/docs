# History in Helpdesk

Directory Manager tracks the following actions performed by end-users and helpdesk users in an identity store and displays them as history to helpdesk users:

- Unenroll account
- Sending of secure link for password reset by helpdesk
- Change Password
- Reset Password
- Unlock Account
- Link Account
- Unlink Account
- Enroll account
- Authenticate with password, authentication types, or any other medium

History can be used for audit and analysis, such as how many users changed their passwords in the last x days, reset their passwords using secure link, and more. It can also be used to verify the identity of a user through the last action he or she performed.

What do you want to do?

- [View History in Helpdesk](#View-History-in-Helpdesk)
  - [Switch History Layouts](#Switch-History-Layouts)
- [Search History](#Search-History)
- [Export History to a File](#Export-History-to-a-File)

## View History in Helpdesk

1. In Admin Center, click __Helpdesk__ in the left pane.
2. On the __Helpdesk__ page, click the __History__ tab.  
   This tab displays the tracked history actions for all identity stores in Directory Manager. Use the pagination options at the bottom of the listing to navigate through records.

   To search for specific records, see the [Search History](#Search-History) topic.

### Switch History Layouts

You can view history in two layouts:

- __Basic view:__ displays history in a friendly, descriptive manner.
- __Administrative view:__ displays history in tabular form.

In both layouts, click __Details__ for an item to view more details.

You can also export history to MS Excel, CSV, and XML formats.

To Switch Layouts:

- In the Basic view, click the __Switch to Administrative View__ button to view history in Administrative layout.
- In the Administrative view, the button changes to __Switch to Basic View__. Click it to view history in Basic layout.

#### View History in Basic Layout

By default, the __History__ tab of the __Helpdesk__ page displays history in the Basic view, that lists the tracked actions in meaningful sentences.

Click __Details__ for a history item to launch the __History Details__ dialog box that displays the following:

- __Display name:__ the user on whom the action was performed.
- __Identity store:__ the identity store the action was performed in.
- __Action:__ the action performed.
- __Authentication type:__ the authentication type(s) used by the user to authenticate in order to perform the action. For some actions performed by helpdesk, such as sending a secure link for password reset, no authentication type is displayed. For other actions such as _unenroll_, the authentication type for which the end user is unenrolled will be displayed.
- __Status:__ whether the action was performed successfully or not.
- __Date/Time:__ the date and time the action was performed.
- __Performed by:__ the user who performed the action.
- __Client name:__ the name of the Directory Manager client the action was performed from.
- __Helpdesk action:__ whether the action was performed through helpdesk or not.
- __Machine name:__ the name of the machine the action was performed from.
- __IP:__ the IP address of the machine the action was performed from.
- __Browser:__ the name of the browser used to perform the action.
- __Device type:__ the device type used to perform the action, such as PC/laptop or mobile.

Click __Close__ to close the dialog box.

#### View History in Administrative Layout

The Administrative layout displays history in a table. On the __History__ tab of the __Helpdesk__ page, click __Switch to Administrative View__.

The following information is displayed for a record:

- __Name:__ The name of the user the action was performed on
- __Client Name:__ the name of the Directory Manager client the action was performed from.
- __Identity Store:__ The identity store the action was performed in
- __Action:__ The action performed
- __Date:__ The date and time the action was performed on

Click __Details__ for a history item to view its details on the __History Details__ dialog box. See the [View History in Helpdesk](#View-History-in-Helpdesk) topic for a discussion of the dialog box.

Use the pagination options at the bottom of the listing to navigate through records.

Sort the Listing

History records on the __History__ tab of the __Helpdesk__ page are sorted in chronological order, with the latest action at the top.

You can sort the listing in the Administrative view by any column name in the header row. Click a column name to sort the listing by that attribute. An arrow appears next to the column name.

- The upward arrow head indicates that the list is sorted in ascending order.
- The downward arrow head indicates that the list is sorted in descending order.

Click the arrow to change the order from ascending to descending and vice versa.

## Search History

You can search for history records in all the identity stores or specific identity stores. Simply enter the name of a user to view all actions performed for it, be it by that same user or another user, such as helpdesk. You can also create a filter based on multiple attributes to search for specific records.

To perform a search:

1. In Admin Center, click __Helpdesk__ in the left pane.
2. On the __Helpdesk__ page, click the __History__ tab.
3. On the __History__ tab, the following search options are available:

   - __Identity Store list__ - To get the history records for one or specific identity stores, click in the __Identity Store__ box and select the check boxes for the identity stores you want to view the history for.
   - __Search box to search for records specific to a user__ - In the _Search_ box, enter a user’s full name or part of a name and press _Enter_. Directory Manager
     displays all history actions that are performed by or performed on the user.
   - __Search filter__ - Click __Filter__. On the __Filter(s)__ dialog box, you can search the history
     data using the available filters individually or in combination.

     - __Date Logged:__ Specify a time period to view history data for. Click in the box and use the calendar for selecting a date range.
     - __Performed By:__ Specify whether you want to view the actions performed by end users, helpdesk users, or both.
     - __Device Type:__ Specify a device type (PC/laptop, mobile, or both) to view actions that have been performed using that device type.
     - __Status:__ Specify whether you want to view successful actions, failed actions, or both successful and failed actions
     - __Action Type:__ Select an action to view the history records for it. On selecting _Enrollment_ or _Authenticate_, another drop-down list is displayed that lists the authentication types. Select an option to view the enrollment or authentication actions performed using that specific type.

   Click __Apply__. History records matching the given criteria are displayed.

## Export History to a File

1. In Admin Center, click __Helpdesk__ in the left pane.
2. On the __Helpdesk__ page, click the __History__ tab.
3. On the __History__ tab, you can export all history records in all identity stores to a file or filter the listing to export specific records only. To narrow down records, see the [Search History](#Search-History) topic.
4. Click __Export History__ and select a file format in the list to export history data to.  
   The file is saved to the download location specified in your browser settings.

__See Also__

- [Dashboard](/docs/product_docs/groupid/groupid/admincenter/general/dashboard.md)
- [Search Users](/docs/product_docs/groupid/groupid/admincenter/helpdesk/operation/search.md)
- [History in Directory Manager](/docs/product_docs/groupid/groupid/admincenter/history.md)
