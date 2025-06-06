---
id: sqlserver
title: SQL Server Search Query
---

# SQL Server Search Query

You can search SQL Server activity that has been monitored and recorded to a File output. When you select **SQL Server** from the magnifying glass drop-down menu, a New Search tab opens with the applicable query filters.

![SQL Server Search Query](/img/activitymonitor/admin/SQLSearchQueryToolbar.png "SQL Server Search Query")

The filters are separated into the following categories:

- General
- User
- SQL

By default, the query is set to return all event activity for the past day. Configuring query filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate activity log files and returns the events that match the filters. You can [Filter](/Admin/Search/Overview.md#filter "Filter") and [Sort](/Admin/Search/Overview.md#sort "Sort") the results using the column headers. Below the Search button is the [Export](/Admin/Search/Overview.md#export "Export") option.

Filter Value Entry

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from values known to the application.

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains an asterisk (*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter must be configured for every search query.

![General Filters](/img/activitymonitor/admin/GeneralFilter.png "General Filters")

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a calendar.
- Event Result – Filter the data for a specific event result: Any, Success, or Failure
- Reason
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is 10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![](/img/activitymonitor/admin/UserFilter.png)

This section has the following filters:

- Name or ID
- IP Address

## SQL Category

The SQL category scopes the query by SQL Server activity.

![SQL Filters](/img/activitymonitor/admin/SQLFilters.png "SQL Filters")

This section has the following filters:

- Server name
- Database
- Application
- Object
- SQL Text