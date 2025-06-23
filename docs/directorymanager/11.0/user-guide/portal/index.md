---
title: Portal Features and Navigation
sidebar_label: Features
description: Comprehensive portal features including directory search, find dialog, portal settings, user account management, and customizable toolbars.
---

# General Portal Features

GroupID Portal encompasses various functionalities available for the users that are:

- [Directory Search](#directory-search)
- [Find Dialog Box](#find-dialog-box)
- [ Portal Settings ](#portal-settings)
- [ User Account Settings ](#user-account-settings)
- [Toolbars ](#toolbars)

## Directory Search

The GroupID portal provides a robust search feature that empowers users to efficiently manage
various directory objects within their identity store. These objects include mailboxes, users,
groups, and contacts. Once a search is performed, the results are displayed on the **Search
Results** page.

See the [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md) topic.

## Find Dialog Box

The Find dialog box enables you to search **User**, **Group**, and **Contact** objects in the
connected identity store. The object types available for search may vary, depending on the page you
launch the **Find** dialog box from.

See the [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md) topic.

## Portal Settings

GroupID Portal offers flexible portal settings to customize the user experience and personalize the
portal for each user.

See the [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md) topic.

## User Account Settings

Users can manage their own profile information and perform various account-related actions through
the User Settings.

See the [User Account Settings](/docs/directorymanager/11.0/user-guide/portal/index.md) topic.

## Toolbars

The portal provides toolbars with diverse options that users can use on the objects. These actions
include editing properties, managing membership, viewing history, and more.

See the [Toolbar](/docs/directorymanager/11.0/user-guide/portal/navigation.md) topic.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [Find Dialog Box](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [Query Based Advanced Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [User Account Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [Toolbar](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# My Groups' History

To view a detailed list of the actions that you have performed on the groups that you own using the
following, click **History** on the left navigation bar:

- GroupID portal
- GroupID Management Shell cmdlets
- GroupID mobile app
- GroupID APIs

History page opens with the **My History** tab in view. On the displayed page, click the **My Groups
History** tab.

History is logged for groups that have you as the primary or additional owner.

What do you want to do?

- History view modes
- Filter history data
- Add notes to history items
- Export history data

## History view modes

History data can be viewed in two modes:

### Detailed view

Displays history data in a descriptive and user-friendly manner. Items are sorted according to the
date and time of modification, showing the most recent at the top.

This is the default view of history data.

### Administrative view

This view is only available if you have administrative privileges.

Click **Switch to Administrative View** to view history data in administrative mode. It displays
history data in a tabular form. History items are grouped by date. Each date group displays changes
made to your groups during that period.

You can expand an item to view more details, such as the names of the attributes modified in an
action along with their old and new values.

## Filter history data

1. Click **My Groups History Grid Filter** to specify a criteria for filtering history data.
2. Click **Add Filter** to add the filter criteria.
3. From the **Select a filter** list, select attributes to filter history data on the basis of the
   attribute modified.
4. Two more boxes get displayed next to **Select a filter** box upon selecting a filter.

   - **Select an Operator**: Select an operator from the first list.
   - **Select a Value**: Specify a value for the selected operator in the second box.

   For example, if you select '_Modified on_' from the first list, '_is exactly_' from the second
   list, and specify a date in the third box, then history items that were modified on the
   specified date will be displayed.

5. Click **Apply Filter**.

   History items that match the specified criteria are displayed.

6. Use the **Search In** list to load history data from the entire directory or a domain.

   This list shows a tree view of all the domains in the connected identity store. Select the
   required domains or select **Entire Directory** to view objects' history from all domains.

7. Click **Refresh** to reload history data for the domains selected in the **Search In** list.

## Add notes to history items

GroupID enables a user to add notes to history items that were logged as a result of any change they
made. A note may explain the reason for making a certain change, such as why they changed the
security type for a group.

Only the user who added the note can update it. Other users can only view this note; they cannot
edit or add comments.

- The **Add Note** button is available next to a history item listed.
- Once you add a note, the **Add Note** button changes to **View Note**. All portal users can use
  this button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and all History
pages i.e.[My History](/docs/directorymanager/11.0/user-guide/portal/index.md),
[My Direct Reports' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
and My Groups' History pages.

1. Click the **Add Note** button next to a history item to add a note to it.
2. On the **Add Note** dialog box, write a note and click **Add Note** to save it.

   Your note can have a maximum of 500 characters.

### Edit a note

You can only edit the note that you have added.

1. Click the **View Note** button next to a history item to view or edit the note for it.
2. On the **Note** dialog box, click the **Edit Note** button and update the note.
3. Click **Update Note** to save the changes.

### View a note

Once a note is added, other users can view it, but they cannot edit it or add comments to it.

- In the Detailed view:

  Click the **View Note** button next to a history item to view the note for it.

- In the Administrative view:

  The **Note** column displays the note.

### Remove a note

You can only remove the note that you have added.

1. Click the **View Note** button next to a history item to view or remove the note for it.
2. Click the **Edit Note** button and remove the note.
3. Click **Update Note**.

## Export history data

You can export history data displayed to an external file.

Click the **Export History** button and select the file type to export history data to. Supported
formats are:

- Excel
- CSV
- XML

The file is created at the download location specified in the browser settings.

**See Also**

- [History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)

# My Direct Reports' History

To view the history of updates and changes made to your direct reports, click **History** on the
left navigation bar. History page opens with the **My History** tab in view. On the displayed page,
click the **My Direct Reports' History** tab.

The following events are logged on this page:

- When an object is added as your direct reports.
- When a direct report is removed from your direct reports.
- When you or any other user makes certain changes to the properties of a direct report.

NOTE: When any of your direct reports is deleted, its history is also deleted.

What do you want to do?

- History view modes
- Filter history data
- Add notes to history items
- Export history data

## History view modes

History data can be viewed in two modes:

### Detailed view

Displays history data in a descriptive and user-friendly manner. Items are sorted according to the
date and time of modification, showing the most recent at the top.

This is the default view of history data.

### Administrative view

This view is only available if you have administrative privileges.

Click **Switch to Administrative View** to view history data in administrative mode. It displays
history data in a tabular form. History items are grouped by date. Each date group displays changes
made to your direct reports during that period.

You can expand an item to view more details, such as the names of the attributes modified in an
action along with their old and new values.

## Filter history data

1. Click **My Direct Reports History Grid Filter** to specify a criteria for filtering history data.
2. Click **Add Filter** to add the filter criteria.
3. From the **Select a filter** list, select attributes to filter history data on the basis of the
   attribute modified.
4. Two more boxes get displayed next to **Select a filter** box upon selecting a filter.

   - **Select an Operator**: Select an operator from the first list.
   - **Select a Value**: Specify a value for the selected operator in the second box.

   For example, if you select '_Modified on_' from the first list, _'is exactly_' from the second
   list, and specify a date in the third box, then history items that were modified on the
   specified date will be displayed.

5. Click **Apply Filter**.

   History items that match the specified criteria are displayed.

6. Use the **Search In** list to load history data from the entire directory or a domain.

   This list shows a tree view of all the domains in the identity store. Select the required
   domains or select **Entire Directory** to view objects' history from all domains.

7. Click **Refresh** to reload history data for the domains selected in the **Search In** list.

## Add notes to history items

GroupID enables a user to add notes to history items that were logged as a result of any change they
made. A note may explain the reason for making a certain change, such as why they changed the
security type for a group.

Only the user who added the note can update it. Other users can only view this note; they cannot
edit or add comments.

- The **Add Note** button is available next to a history item listed.
- Once you add a note, the **Add Note** button changes to **View Note**. All portal users can use
  this button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and all History
pages i.e.[My History](/docs/directorymanager/11.0/user-guide/portal/index.md), My Direct
Reports' History and
[My Groups' History](/docs/directorymanager/11.0/user-guide/portal/index.md) pages.

1. Click the **Add Note** button next to a history item to add a note to it.
2. On the **Add Note** dialog box, write a note and click **Add Note** to save it.

   Your note can have a maximum of 500 characters.

### Edit a note

You can only edit the note that you have added.

1. Click the **View Note** button next to a history item to view or edit the note for it.
2. On the **Note** dialog box, click the **Edit Note** button and update the note.
3. Click **Update Note** to save the changes.

### View a note

Once a note is added, other users can view it, but they cannot edit it or add comments to it.

- In the Detailed view:

  Click the **View Note** button next to a history item to view the note for it.

- In the Administrative view:

  The **Note** column displays the note.

### Remove a note

You can only remove the note that you have added.

1. Click the **View Note** button next to a history item to view or remove the note for it.
2. Click the **Edit Note** button and remove the note.
3. Click **Update Note**.

## Export history data

You can export history data displayed to an external file.

Click the **Export History** button and select the file type to export history data to. Supported
formats are:

- Excel
- CSV
- XML

The file is created at the download location specified in the browser settings.

**See Also**

- [History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)

# My History

To view a log of all actions you have performed in the identity store using the following: , click
**History** on the left navigation bar.

On the History page, click **My History** tab to view your history.

The log also tracks any change that another user makes to your profile using the portal.

What do you want to do?

- History view modes
- Filter history data
- Add notes to history items
- Export history data

## History view modes

History data is available in two modes:

### Detailed view

Displays history data in a descriptive and user-friendly manner. Items are sorted according to the
date and time of modification, showing the most recent at the top.

This is the default view of history data.

### Administrative view

This view is only available if you have administrative privileges.

Click **Switch to Administrative View** to view history data in administrative mode. It displays
history data in a tabular form. History items are grouped by date. Each date group displays changes
made to directory objects during that period.

You can expand an item to view more details, such as the names of the attributes modified in an
action along with their old and new values.

## Filter history data

1. Click **My History Grid Filter** to specify a criteria for filtering history data.
2. Click **Add Filter** to add the filter criteria.
3. From the **Select a filter** list, select attributes to filter history data on the basis of the
   attribute modified.
4. Two more boxes get displayed next to **Select a filter** box upon selecting a filter.

   - **Select an Operator**: Select an operator from the first list.
   - **Select a Value**: Specify a value for the selected operator in the second box.

   For example, if you select '_Modified on_' from the first list, _'is exactly_' from the second
   list, and specify a date in the third box, then history items that were modified on the
   specified date will be displayed.

5. Click **Apply Filter**.

   History items that match the specified criteria are displayed.

6. Click **Reset Filter** to remove all the filters.

## Add notes to history items

GroupID enables a user to add notes to history items that were logged as a result of any change they
made. A note may explain the reason for making a certain change, such as why they changed the
security type for a group.

Only the user who added the note can update it. Other users can only view this note; they cannot
edit or add comments.

- The **Add Note** button is available next to a history item listed.
- Once you add a note, the **Add Note** button changes to **View Note**. All portal users can use
  this button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and all History
pages i.e.My History,
[My Direct Reports' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
and [My Groups' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
pages.

1. Click the **Add Note** button next to a history item to add a note to it.
2. On the **Add Note** dialog box, write a note and click **Add Note** to save it.

   Your note can have a maximum of 500 characters.

### Edit a note

You can only edit the note that you have added.

1. Click the **View Note** button next to a history item to view or edit the note for it.
2. On the **Note** dialog box, click the **Edit Note** button and update the note.
3. Click **Update Note** to save the changes.

### View a note

Once a note is added, other users can view it, but they cannot edit it or add comments to it.

- In the Detailed view:

  Click the **View Note** button next to a history item to view the note for it.

- In the Administrative view:

  The **Note** column displays the note.

### Remove a note

You can only remove the note that you have added.

1. Click the **View Note** button next to a history item to view or remove the note for it.
2. Click the **Edit Note** button and remove the note.
3. Click **Update Note**.

## Export history data

You can export history data displayed to an external file.

Click the **Export History** button and select the file type to export history data to. Supported
formats are:

- Excel
- CSV
- XML

The file is created at the download location specified in the browser settings.

**See Also**

- [History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)

# History

The GroupID portal maintains a log of actions when objects are created, modified, and deleted in the
portal provided that the GroupID administrator has enabled history tracking for the identity store.
GroupID portal also tracks all actions that are committed to the directory using:

- GroupID Management Shell cmdlets

- GroupID mobile app

- GroupID APIs

The administrator can configure the following for history tracking:

- track all or specific events
- retain history data forever or for a specified duration

Therefore, history data represents only the events that history-tracking is configured to track.
Furthermore, if history-tracking is not enabled or has been recently disabled for the identity
store, the portal does not display history data or it displays data that was logged before
history-tracking was turned off.

A user can add a note to a history action that he/she performed. Other users can just view that
note. This note may explain the reason for performing that action. See the
[Configure History Tracking](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
topic.

## History views in the portal

The GroupID Portal displays history as below:

- **My Account History** on the portal's dashboard  
  Displays a list of actions performed by the logged-on user.
- The **History** tab in group / user / mailbox / contact properties.  
  Displays the actions performed on the object by different users.
- The [My History](/docs/directorymanager/11.0/user-guide/portal/index.md) page.  
  Displays the actions performed by the logged-on user and any changes made to this user's profile
  by another user.
- The
  [My Direct Reports' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
  page.  
  Displays the changes made to the logged-on user's direct reports by this user or by any other
  user.
- The [My Groups' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
  page.  
  Displays the changes made by the logged-on user to a group that they own.

Use the **History items to display on home page** setting on the User Settings panel to specify the
number of history items to display on Dashboard.

Use the **History items to display** setting on the User Settings panel to specify the number of
history items to display on the History tab, My History page, My Direct Reports History page, and My
Groups History page.

Use the **Most recent objects** setting on the User Settings panel to specify the number of recent
objects to show on the **My Account History** card on Dashboard.

See Also

- [My History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [My Direct Reports' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [My Groups' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)
- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [History in GroupID](/docs/directorymanager/11.0/administration/audit-history/index.md)

# Portal Settings

You can fine-tune your portal pages by customizing display options. This also enables you to
personalize the GroupID portal.

These settings are saved for a user with respect to the identity store. When this user logs on to
another GroupID portal for the same identity store, the settings apply there too.

What do you want to do?

- [Set Identity Store mode](#set-identity-store-mode)
- [Set a language for notifications](#set-a-language-for-notifications)
- [Set the time zone](#set-the-time-zone)
- [Set a default start page](#set-a-default-start-page)
- [Set the number of history items to show on the home page](#set-the-number-of-history-items-to-show-on-the-home-page)
- [Set the number of history items to show for objects](#set-the-number-of-history-items-to-show-for-objects)
- [Set the number of recent objects to show](#set-the-number-of-recent-objects-to-show)
- [Set the default domains for search lists](#set-the-default-domains-for-search-lists)
- [Set the number of results to show on a page](#set-the-number-of-results-to-show-on-a-page)
- [Show additional group ownership in My Groups](#show-additional-group-ownership-in-my-groups)
- [Show additional group ownership in My Expiring Groups](#show-additional-group-ownership-in-my-expiring-groups)
- [Show additional group ownership in My Expired Groups](#show-additional-group-ownership-in-my-expired-groups)
- [Show additional group ownership in My Deleted Groups](#show-additional-group-ownership-in-my-deleted-groups)
- [Display additional group ownership in my Smart Groups](#display-additional-group-ownership-in-my-smart-groups)
- [Display additional group ownership in my Dynasties](#display-additional-group-ownership-in-my-dynasties)
- [Display Additional Manager Direct Reports](#display-additional-manager-direct-reports)
- [Reset default user options](#reset-default-user-options)

## Set Identity Store mode

GroupID portal works with a single identity store. However, GroupID also enables administrators to
link different identity stores. If an administrator creates a GroupID Portal and associates it with
the linked identity stores, the portal users can view the data from the linked identity stores at
the same time, rather than having to switch identity stores.

Via Portal settings, you can choose either of the two modes by following these steps:

1. Click the **Settings** icon at the top of the page.
2. From the **Identity Store Mode** list, select one of the following mode:

   - Stand-alone mode
   - Linked mode

3. Click **Save**.

## Set a language for notifications

GroupID generates a number of notifications that are, by default, sent to users in the English
language. However, a user can opt to receive notifications in a different language by personalizing
the language settings from the **User Settings** panel in the portal.

However, there are a few exceptions to it. See the
[Localization](/docs/directorymanager/11.0/administration/admin-center/notifications.md#localization)
topic for more information.

1. Click the **Settings** icon at the top of the page.
2. From the **Notification Language** list, select a language for receiving the notifications in.
3. Click **Save**.

## Set the time zone

You can set the portal's date and time for your time zone.

1. Click the **Settings** icon at the top of the page.
2. In the **User Time Zone** list, select the time zone for your region.
3. Click **Save**.

## Set a default start page

You can set the first page you see when you log into the portal.

1. Click the **Settings** icon at the top of the page.
2. From the **Default startup page** list, select a page to set as your start page.
3. Click **Save**.

## Set the number of history items to show on the home page

You can specify the number of history items to display in the History section on the portal's home
page.

1. Click the **Settings** icon at the top of the page.
2. In the **History items to display on home page** box, set the maximum number of history items to
   be displayed on the portal's home page.
3. Click **Save**.

History is displayed if the administrator has enabled history tracking for the identity store.

## Set the number of history items to show for objects

Set the number of history items to display on the History tab. This tab is displayed when viewing
the properties for a User, Group, Contact or Mailbox.

This setting also controls the number of history items displayed on the
[My History](/docs/directorymanager/11.0/user-guide/portal/index.md),
[My Direct Reports' History](/docs/directorymanager/11.0/user-guide/portal/index.md),
and [My Groups' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
pages.

1. Click the **Settings** icon at the top of the page.
2. In the **History items to display** box, set the number of history items to display on the pages
   that display history data.
3. Click **Save**.

History is displayed if the administrator has enabled history tracking for the identity store.

## Set the number of recent objects to show

The GroupID portal keeps a list of recently viewed objects on the left navigation bar. This provides
a convenient way to navigate back to objects later. You can specify the number of recent objects to
be shown on the navigation bar.

1. Click the **Settings** icon at the top of the page.
2. In the **Most recent objects** box, type the number of recent objects to display on the
   navigation bar.
3. Click **Save**.

## Set the default domains for search lists

You can specify the default domains to be searched when you perform a search using the portal. If
portal is running in:

- **Stand-alone mode**: domain of the associated identity store is listed.

- **Linked mode**: domains of all the linked identity stores are listed.

To select domain(s) for searches:

1. Click the **Settings** icon at the top of the page.
2. In the **Domains to search** list, select the domains that you use frequently in your searches.
3. Click **Save**.

## Set the number of results to show on a page

You can specify the number of search results to be displayed on a portal page.

1. Click the **Settings** icon at the top of the page.
2. In the **Search results per page** box, type or select the number of search results to display on
   a page.
3. Click **Save**.

## Show additional group ownership in My Groups

By default, the **My Groups** page displays the groups that you are a primary owner for. You can,
however, set this page to display those groups too for which you are an additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Groups** check box.

   Selecting this option also displays the history of these groups in the **My Groups History**
   view.

3. Click **Save**.

## Show additional group ownership in My Expiring Groups

By default, the **My Expiring Groups** page displays the soon-to-expire groups that you are the
primary owner of. You can, however, set this page to display those expiring groups too for which you
are an additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Expiring Groups** check box.
3. Click **Save**.

## Show additional group ownership in My Expired Groups

By default, the **My Expired Groups** page displays the expired groups that you are the primary
owner for. You can, however, set this page to display those expired groups too for which you are an
additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Expired Groups** check box.
3. Click **Save**.

## Show additional group ownership in My Deleted Groups

By default, the **My Deleted Groups** page displays the deleted groups that you are the primary
owner for. You can, however, set this page to display those deleted groups too for which you are an
additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Deleted Groups** check box.
3. Click **Save**.

## Display additional group ownership in my Smart Groups

By default, the **My Smart Groups** page displays the Smart Group that you are the primary owner
for. You can, however, set this page to display those Smart Groups too for which you are an
additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Smart Groups** check box.
3. Click **Save**.

## Display additional group ownership in my Dynasties

By default, the My Dynasties page displays the Dynasties that you are the primary owner for. You
can, however, set this page to display those Dynasties too for which you are an additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Dynasties** check box.
3. Click **Save**.

## Display Additional Manager Direct Reports

By default, the **My Direct Reports** page displays the users that you are the primary manager for.
You can, however, set this page to display those users too for which you are an additional manager.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display Additional Manager Direct Reports** check box.
3. Click **Save**.

## Reset default user options

You can reset the settings on the **User Settings** panel to their default values.

1. Click the **Settings** icon at the top of the page.
2. On the **User Settings** page, click **Reset Defaults**.

   The following table lists the default values that are reset:

   | Option                                         | Default Value                                    |
   | ---------------------------------------------- | ------------------------------------------------ |
   | Identity Store Mode                            | Stand-alone                                      |
   | Notification Language                          | English                                          |
   | User Time Zone                                 | The time zone set on the GroupID server machine. |
   | Default startup page                           | Welcome                                          |
   | History items to display on home page          | 10                                               |
   | History items to display                       | 10                                               |
   | Most recent objects                            | 5                                                |
   | Domains to Search                              | Entire Directory                                 |
   | Search results per page                        | 25                                               |
   | Display additional group ownership check boxes | Not selected                                     |
   | Display Additional Manager Direct Reports      | Not selected                                     |

**See Also**

- [My History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [My Groups' History](/docs/directorymanager/11.0/user-guide/portal/index.md)
- [My Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [My Expiring Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
- [My Expired Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
- [My Deleted Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)

# User Account Settings

Using the GroupID portal, you can manage your profile information and even change your password,
provided that the GroupID administrator has granted you the required permissions. You can also add
your picture to your profile.

Administrators can also reset the passwords of other user accounts in the identity store. They can
also set the expiration policy of user accounts, lock or unlock accounts, and enable or disable
accounts.

What do you want to do?

- [Update your account information](#update-your-account-information)
- [Add a photo to your profile](#add-a-photo-to-your-profile)
- [Set a user account to never expire](#set-a-user-account-to-never-expire)
- [Set a user account to expire on a specific date](#set-a-user-account-to-expire-on-a-specific-date)
- [Lock/Unlock a user account](#lockunlock-a-user-account)
- [Enable/Disable a user account](#enabledisable-a-user-account)

## Update your account information

1. In GroupID portal, click **Dashboard** in the left pane and click the **My Profile** card.
2. Make the required changes to your profile on the My Profile page.
3. Click **Save**.

NOTE: If the administrator has specified this action for review, your changes will not take effect
until verified by an approver.

## Add a photo to your profile

1. In GroupID portal, click **Dashboard** in the left pane and click the **My Profile** card.
2. Click the **General** tab.
3. Click **Modify** next to the **Photo** box.

   The **Manage Photo** dialog box is displayed.

4. Click **Browse** to browse the file system to select the photo. The size of the image should not
   exceed the size displayed in the header area of the dialog box.

   Use the options on the dialog box to edit the photo as desired.

5. Click **OK** to close the **Manage Photo** dialog box.
6. Click **Save.**

NOTE: If the administrator has specified this action for review, your changes will not take effect
until verified by an approver.

## Set a user account to never expire

1. Search a user to set its directory account to 'never expire'.
2. Select this user on the **Search Results** page and click **Properties** on the toolbar.

   The user's properties page is displayed.

3. On the **Account** tab, select the **Never** option button for **Account Expires**.
4. Click **Save**.

## Set a user account to expire on a specific date

1. Search a user to set its directory account to expire on a specific date.
2. Select this user on the **Search Results** page and click **Properties** on the toolbar.

   The user's properties page is displayed.

3. On the **Account** tab, select **End of** from the **Account Expire** options and click the
   Calendar button to set the date for expiring the user account.
4. Click **Save**.

## Lock/Unlock a user account

1. Search a user to lock or unlock their directory account.
2. Select this user on the **Search Results** page and click **Properties** on the toolbar.

   The user's properties page is displayed.

3. On the **Account** tab:

   - Select the **Account is locked out** check box to lock the user account.
   - Clear the **Account is locked out** check box to unlock the account.

4. Click **Save**.

## Enable/Disable a user account

1. Search a user to disable or enable their directory account.
2. Select this user on the **Search Results** page and click **Properties** on the toolbar.

   The user's properties page is displayed.

3. On the **Account** tab:

   - Select the **Account is disabled** check box to disable the user account.
   - Clear the **Account is disabled** check box to enable the user account.

4. Click **Save**.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
