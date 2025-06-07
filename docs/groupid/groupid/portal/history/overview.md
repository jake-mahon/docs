# History

The Directory Manager portal maintains a log of actions when objects are created, modified, and deleted in the portal provided that the Directory Manager administrator has enabled history tracking for the identity store. Directory Manager portal also tracks all actions that are committed to the directory using:

- Directory Manager Management Shell cmdlets
- Directory Manager APIs

The administrator can configure the following for history tracking:

- track all or specific events
- retain history data forever or for a specified duration

Therefore, history data represents only the events that history-tracking is configured to track. Furthermore, if history-tracking is not enabled or has been recently disabled for the identity store, the portal does not display history data or it displays
data that was logged before history-tracking was turned off.

A user can add a note to a history action that he/she performed. Other users can just view that note. This note may explain the reason for performing that action. See the [Configure History Tracking](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/historytracking.md) topic.

## History views in the portal

The Directory Manager Portal displays history as below:

- __My Account History__ on the portal's dashboard  
  Displays a list of actions performed by the logged-on user.
- The __History__ tab in group / user / mailbox / contact properties.  
  Displays the actions performed on the object by different users.
- The [My History](/docs/product_docs/groupid/groupid/portal/history/myhistory.md) page.  
  Displays the actions performed by the logged-on user and any changes made to this user's profile by another user.
- The [My Direct Reports' History](/docs/product_docs/groupid/groupid/portal/history/mydirectreport.md) page.  
  Displays the changes made to the logged-on user's direct reports by this user or by any other user.
- The [My Groups' History](/docs/product_docs/groupid/groupid/portal/history/mydirectorygroup.md) page.  
  Displays the changes made by the logged-on user to a group that they own.

Use the __History items to display on home page__ setting on the User Settings panel to specify the number of history items to display on Dashboard.

Use the __History items to display__ setting on the User Settings panel to specify the number of history items to display on the History tab, My History page, My Direct Reports History
page, and My Groups History page.

Use the __Most recent objects__ setting on the User Settings panel to specify the number of recent objects to show on the __My Account History__ card on Dashboard.
