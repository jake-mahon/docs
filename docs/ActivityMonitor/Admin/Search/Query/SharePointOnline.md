---
id: sharepointonline
title: SharePoint Online Search Query
---

# SharePoint Online Search Query

You can search SharePoint Online activity that has been monitored and recorded to a File output. When you select **SharePoint Online** from the magnifying glass drop-down menu, a New Search tab opens with the applicable query filters.

![SharePoint Online - Search Quary Bar](/img/activitymonitor/admin/SharePointOnlineSearchQueryBar.png "SharePoint Online - Search Quary Bar")

The filters are separated into the following categories:

- General
- User
- Location
- Item
- Sharing
- DLP
- Custom

By default, the query is set to return all event activity for the past day. Configuring query filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate activity log files and returns the events that match the filters. You can [Filter](/Admin/Search/Overview.md#filter "Filter") and [Sort](/Admin/Search/Overview.md#sort "Sort") the results using the column headers. Below the Search button is the [Export](/Admin/Search/Overview.md#export "Export") option.

Filter Value Entry

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from values known to the application.

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains an asterisk (*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter must be configured for every search query.

![SharePoint Online Search - General Filters](/img/activitymonitor/admin/GeneralFilters_3.png "SharePoint Online Search - General Filters")

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a calendar.
- Source – Filter the data by the source type: All, File and Page, Folder, List, Sharing and Access Request, Site Permissions, Site Administration, Synchronization, DLP, Sensitivity Label, Content Explorer, Other

  **NOTE:** Disabling a source that is also a category will hide that category from the query options.
- Workload
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is 10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![SharePoint Online Search - User Filter](/img/activitymonitor/admin/User_1.png "SharePoint Online Search - User Filter")

This section has the following filters:

- Name or ID
- Login
- IP Address
- Client App or Browser
- User Type – Filter the data by the type of user: All, Regular, Reserved, Admin, DcAdmin, System, Application, ServicePrincipal, CustomPolicy, SystemPolicy, Unknown

## Location Category

The Location category scopes the query by the location of the file.

![SharePoint Online Search - Location Filter](/img/activitymonitor/admin/Location.png "SharePoint Online Search - Location Filter")

This section has the following filters:

- URL
- File Name
- File Extension

## Item Category

The Item category scopes the query by the item.

![SharePoint Online Search - Item Filter](/img/activitymonitor/admin/Item.png "SharePoint Online Search - Item Filter")

This section has the following filters:

- Item
- Item Type – Filter the data by the type of item: All, Unknown, File, Folder, Web, Site, Tenant, DocumentLibrary, Page
- Modifications – Filter the data by the type of item: All, No Changes, Has attribute changes

## Sharing Category

The Sharing category scopes the query by the type of sharing.

![SharePoint Online Search - Sharing Filter](/img/activitymonitor/admin/Sharing.png "SharePoint Online Search - Sharing Filter")

This section has the following filters:

- Access
- Target Type – Filter the data by the type of target: All, Member, Guest, SharePointGroup, SecurityGroup, Partner, Unknown

## DLP Category

The DLP category scopes the query by the DLP policy.

![SharePoint Online Search - DLP Filter](/img/activitymonitor/admin/DLP_1.png "SharePoint Online Search - DLP Filter")

This section has the following filters:

- Policy Name

## Custom Category

The Custom category scopes the query by custom event activity.

![SharePoint Online Search - Custom Filter](/img/activitymonitor/admin/Custom.png "SharePoint Online Search - Custom Filter")

This section has the following filters:

- Event Data
- Custom Event