---
sidebar_position: 7272
title: Admin Center History
---

# Admin Center History

Directory Manager auto tracks the following actions performed in Admin Center:

* Creation and deletion of identity store
* Creation and deletion of SMS gateway accounts
* Creation and deletion of applications, namely Directory Manager portal, Data service, and Security service
* Addition and removal of security questions in the global question pool
* Changes to global replication settings
* Manual sending and deletion of notifications in the notification queue
* Modifications to notification templates

History can be viewed using the **History** node in Admin Center. You can:

* Annotate a history action that you have performed. These annotations may explain the reason for performing an action.
* Narrow down the history items using filters.
* Export history data to Microsoft Excel, CSV, and XML formats.

See the [History in Directory Manager](../History "History in Directory Manager") and [Event Logging](../IdentityStore/History/EventLogging "Event Logging") topics for additional information.

What do you want to do?

* [View Admin Center History](#View "View Admin Center History")
* [Annotate History Items](#Annotate "Annotate History Items")
* [Export Admin Center History](#Export "Export Admin Center History")

## View Admin Center History

You can view the history data that Directory Manager auto tracks for high level actions performed in Admin Center.

To view history:

1. In Admin Center, click **History** in the left pane.  
   The **Admin Center History** page displays history data in a descriptive, concise, and user-friendly manner. Items are sorted according to the date and time, with the most recent at the top.
2. Click a history item to view its details. The **History Details** dialog box displays the following:
   * **Object Name:** The name of the object the action was performed on.
   * **Who:** The name of the user who performed the action.
   * **Where:** The name of the computer the action was performed on.
   * **When:** The date and time of the action.
   * **Added Item(s):** A short description of the action.
   * **Removed Item(s):** This box is displayed for actions showing deletion. It displays a short description of the action.
3. The **Add Note** button is available if you performed this action. See [Annotate History Items](../IdentityStore/History/Details#annotate "Annotate History Items") to manage notes.
4. Click **Close**.

### Filter History Data

Filters on the **Admin Center History** page are similar to those on the **Identity Store History** page. Refer to the [Filter History Data](../IdentityStore/History/View#Filter "Filter History Data") topic to apply the filters.

### Navigate the History Data

Navigation options on the **Admin Center History** page are similar to those on the **Identity Store History** page. Refer to the [Navigate Through History Items](../IdentityStore/History/View#Navigate "Navigate Through History Items") topic for help.

## Annotate History Items

1. In Admin Center, click **History** in the left pane.
2. On the **Admin Center History** page, click a history item and proceed to add a note. See the [Annotate History Items](../IdentityStore/History/Details#annotate "Annotate History Items") topic for details.

## Export Admin Center History

You can export Admin Center history to Microsoft Excel, CSV, and XML formats.

**To export history:**

1. In Admin Center, click **History** in the left pane.
2. On the **Admin Center History** page, click **Export History**.
3. On the **Export History** dialog box, enter a name for the history file in the **Name** box or leave it to default.
4. Select a format for the history file in the **Format** drop-down list. Available formats are Excel, CSV, and XML
5. Click **Export History**. The file is saved at the download location specified in browser settings.
6. A message is displayed that history data is successfully exported. Click **OK**.