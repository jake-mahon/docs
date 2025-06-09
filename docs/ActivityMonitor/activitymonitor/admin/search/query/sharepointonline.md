# SharePoint Online Search Query

You can search SharePoint Online activity that has been monitored and recorded to a File output. When you select __SharePoint Online__ from the magnifying glass drop-down menu, a New Search tab opens with the applicable query filters.

![SharePoint Online - Search Quary Bar](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/sharepointonlinesearchquerybar.png)

The filters are separated into the following categories:

- General
- User
- Location
- Item
- Sharing
- DLP
- Custom

By default, the query is set to return all event activity for the past day. Configuring query filters will scope results returned.

Set the filters as desired and click __Search__. The application searches through the appropriate activity log files and returns the events that match the filters. You can [Filter](/docs/activitymonitor/activitymonitor/admin/search/overview.md#filter) and [Sort](/docs/activitymonitor/activitymonitor/admin/search/overview.md#sort) the results using the column headers. Below the Search button is the [Export](/docs/activitymonitor/activitymonitor/admin/search/overview.md#export) option.

Filter Value Entry

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter must be configured for every search query.

![SharePoint Online Search - General Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/generalfilters.png)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a calendar.
- Source – Filter the data by the source type: All, File and Page, Folder, List, Sharing and Access Request, Site Permissions, Site Administration, Synchronization, DLP, Sensitivity Label, Content Explorer, Other

  __NOTE:__ Disabling a source that is also a category will hide that category from the query options.
- Workload
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is 10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![SharePoint Online Search - User Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/user.png)

This section has the following filters:

- Name or ID
- Login
- IP Address
- Client App or Browser
- User Type – Filter the data by the type of user: All, Regular, Reserved, Admin, DcAdmin, System, Application, ServicePrincipal, CustomPolicy, SystemPolicy, Unknown

## Location Category

The Location category scopes the query by the location of the file.

![SharePoint Online Search - Location Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/location.png)

This section has the following filters:

- URL
- File Name
- File Extension

## Item Category

The Item category scopes the query by the item.

![SharePoint Online Search - Item Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/item.png)

This section has the following filters:

- Item
- Item Type – Filter the data by the type of item: All, Unknown, File, Folder, Web, Site, Tenant, DocumentLibrary, Page
- Modifications – Filter the data by the type of item: All, No Changes, Has attribute changes

## Sharing Category

The Sharing category scopes the query by the type of sharing.

![SharePoint Online Search - Sharing Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/sharing.png)

This section has the following filters:

- Target Account
- Access
- Target Type – Filter the data by the type of target: All, Member, Guest, SharePointGroup, SecurityGroup, Partner, Unknown

## DLP Category

The DLP category scopes the query by the DLP policy.

![SharePoint Online Search - DLP Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/dlp.png)

This section has the following filters:

- Policy Name

## Custom Category

The Custom category scopes the query by custom event activity.

![SharePoint Online Search - Custom Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/custom.png)

This section has the following filters:

- Event Data
- Custom Event
