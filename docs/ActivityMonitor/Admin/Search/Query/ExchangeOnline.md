---
id: exchangeonline
title: Exchange Online Search Query
---

# Exchange Online Search Query

You can search Exchange Online activity that has been monitored and recorded to a File output. When you select **Exchange Online** from the magnifying glass drop-down menu, a New Search tab opens with the applicable query filters.

![Exchange Online - Search Quary Bar](/img/activitymonitor/admin/SearchQueryBar.png "Exchange Online - Search Quary Bar")

The filters are separated into the following categories:

- [General Category](#general-category "General Category")
- [User Category](#user-category "User Category")
- [Target Category](#target-category "Target Category")
- [DLP Category](#dlp-category "DLP Category")

By default, the query is set to return all event activity for the past day. Configuring query filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate activity log files and returns the events that match the filters.You can [Filter](/Admin/Search/Overview.md#filter "Filter") and [Sort](/Admin/Search/Overview.md#sort "Sort") the results using the column headers. Below the Search button is the [Export](/Admin/Search/Overview.md#export "Export") option.

Filter Value Entry

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from values known to the application.

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains an asterisk (*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter must be configured for every search query.

![Exchange Online - General Category](/img/activitymonitor/admin/General.png "Exchange Online - General Category")

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a calendar.
- Source – Filter the data by the source type: All, Admin Audit, Mailbox Access, DLP, Sensitivity Label, Other

  **NOTE:** Disabling a source that is also a category will hide that category from the query options.
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is 10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![Exchange Online Search - User Filter](/img/activitymonitor/admin/User.png "Exchange Online Search - User Filter")

This section has the following filters:

- Name or UPN – Filter the data by name or User Principal Name (UPN)
- User Type – Filter the data by the type of user: All, Regular, Reserved, Admin, DcAdmin, System, Application, ServicePrincipal, CustomPolicy, SystemPolicy, Unknown
- IP Address – Filter the data by IP address.
- Client App or Browser – Filter the data by specified client application or browser.

## Target Category

The Target category scopes the query by the target of the file.

![Exchange Online Search - Target Filter](/img/activitymonitor/admin/Target.png "Exchange Online Search - Target Filter")

This section has the following filters:

- Object
- Mailbox
- Accessed Mail

## DLP Category

The DLP category scopes the query by the DLP policy.

![Exchange Online Search - DLP Filter](/img/activitymonitor/admin/DLP.png "Exchange Online Search - DLP Filter")

This section has the following filters:

- Policy Name