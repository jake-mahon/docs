---
id: linux
title: Linux Search Query
---

# Linux Search Query

You can search Linux file server and NAS device activity that has been monitored and recorded to a File output. When you select **Linux** from the magnifying glass drop-down menu, a New Search tab opens with the applicable query filters.

![Linux Search Query](/img/activitymonitor/admin/LinuxSearchQueryBar.png "Linux Search Query")

By default, the query is set to return all event activity for the past day. Configuring query filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate activity log files and returns the events that match the filters. You can [Filter](/Admin/Search/Overview.md#filter "Filter") and [Sort](/Admin/Search/Overview.md#sort "Sort") the results using the column headers. Below the Search button is the [Export](/Admin/Search/Overview.md#export "Export") option.

Filter Value Entry

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from values known to the application.

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains an asterisk (*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## Query Filter Options

The sections have the following filters:

- Events time range – The time frame filter must be configured for every search query:

  - From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a calendar.
  - To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a calendar.
- File Path – Filter the data for a specific file path where activity has occurred
- Hosts – Filter the data for a specific target host of the event
- Source – Filter the data for a specific source of the activity
- User/Group – Filter the data for a specific user, or perpetrator of the event. You can also filter by a group.

- GID
- Types – Filter the data for a specific event result: All, Success, Fail
- Operations – Filter the data by the type of file operation: Read, Add, Update, Delete, Rename, Permissions. The Operations checkbox at the top acts as select/deselect all option.
- I/O Type – Filter the data by the type of input/output: Filesystem, Shadow copy (VSS). The I/O Type checkbox at the top acts as select/deselect all option.
- Object Type – Filter the data by the type of file object: File, Folder, Link, Share. The Object Types checkbox at the top acts as select/deselect all option.