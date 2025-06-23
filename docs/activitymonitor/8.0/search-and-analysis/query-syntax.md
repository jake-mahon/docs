---
title: Activity Monitor Query Syntax
sidebar_label: Query Syntax
description: Query syntax and search capabilities for Activity Monitor including Active Directory searches with filters and query construction methods.
---

# Active Directory Search Query

You can search domain activity that has been monitored and recorded to a File output. When you
select **Active Directory** from the magnifying glass drop-down menu, a New Search tab opens with
the applicable query filters.

![Search - Active Directory New Search Tab](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/activedirectorynewsearchtab.webp)

The filters are separated into the following categories:

- General
- Object Changes
- LSASS Guardian
- LDAP Queries
- Authentication

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category addresses who, what, where, and when an object, user, host, or domain
controller is affected by the events selected in the other categories. The time frame filter must be
configured for every search query.

![Active Directory Search - General Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/generalfilters.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Event Source – Set which query categories will be used. The drop-down menu displays a checkbox
  list of categories.
- Event Result – Filter the data for a specific event result: Any, Success, or Failure
- Event Block – Filter the data for a specific event result related to blocking: Any, Allowed, or
  Blocked
- Agent Hosts – Filter the data for a specific agent
- Agent Domains – Filter the data for a specific domain
- Affected Object Name – Filter the data for a specific affected object name
- Affected Object Class – Filter the data for a specific affected object class
- User – Filter the data for a specific user, or perpetrator of the event

  - Specify account or group (...) – The ellipsis button beside the User textbox opens the Specify
    account or group window. Use this window to resolve the account for the user. See the
    [Specify Account or Group Window](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md) topic for
    additional information.

- From Hosts – Filter the data for a specific originating host of the event
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## Object Changes Category

The Object Changes category scopes the query by objects with change activity.

![Object Changes Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/objectchangesfilters.webp)

This section has the following filters:

- Account Changes – Filter the data by the type of account change: All, Account Locked, Account
  Unlocked, Account Disabled, Account Enabled, Password Changed
- Membership Changes – Filter the data by the type of group membership change: All, Group Members
  Added, Group Members Removed, Group Members Changed
- Object Changes – Filter the data by the type of group membership change: All, Object Moved, Object
  Renamed, Object Added, Object Modified, Object Deleted
- New Object Name – Filter the data for a specific new object name
- Old Object Name – Filter the data for a specific old object name
- Attribute Name – Filter the data for a specific attribute name
- Attribute Value – Filter the data for a specific attribute value

## LSASS Guardian Category

The LSASS Guardian category scopes the query by LSASS Guardian activity.

![LSASS Guardian Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/lsassguardianfilters.webp)

This section has the following filters:

- Process Name – Filter the data for a specific process name
- Process ID – Filter the data for a specific process ID
- Events – Filter the data by the type of event: All, Create Handle, Duplicate Handle

## LDAP Queries Category

The LDAP Queries category scopes the query by LDAP query activity.

![LDAP Queries Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/ldapqueriesfilters.webp)

This section has the following filters:

- Query – Filter the data for a specific LDAP query
- Connection – Filter the data by the type of connection : Any, Secure, Nonsecure

## Authentication Category

The Authentication category scopes the query by authentication activity.

![Authentication Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/authenticationfilters.webp)

This section has the following filters:

- Target Host – Filter the data for a specific host
- Authentication – Filter the data by the type of authentication: All, Kerberos, NTLM
- NTLM Logon Type – Filter the data by the type of NTLM Logon: All, Interactive, Network, Service,
  Generic, Transitive Interactive, Transitive Network, Transitive Service
- NTLM Version – Filter the data by the type of NTLM version: Any, V1, V2
- Encryption – Filter the data for a specific encryption
- SPN – Filter the data for a specific service principal name (SPN)
- Accounts – Filter the data by the type of account: Any, Existing, Nonexistent
- Ticket Type – Filter the data by the type of ticket type: Any, AS, TGS
- Search For – Filter the data by the selected item: Previous passwords usage only, Forged PAC only

# Microsoft Entra ID Search Query

You can search activity in Microsoft Entra ID (Azure AD) that has been monitored and recorded to a
File output. When you select **Azure AD / Entra ID** from the magnifying glass drop-down menu, a New
Search tab opens with the applicable query filters.

![Search Query - Entra ID](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/searchquery.webp)

The filters are separated into the following categories:

- General
- User
- Audit Events
- Target Resource
- Sign-in Events
- Location

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter
must be configured for every search query.

![Search Query - General Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/generalfilters.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Source – Set which query categories will be used. The drop-down menu displays a checkbox list of
  categories.
- Event Result – Filter the data for a specific event result: Any, Success, or Failure
- Reason
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![Search Query - User](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/userfilters.webp)

This section has the following filters:

- Name or ID
- IP Address
- Client App or Browser
- Client OS

## Audit Events Category

The Audit Events category scopes the query by the event type of the activity.

![Search Query - Audit Events](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/auditeventsfilters.webp)

This section has the following filters:

- Service – Filter the data by the Microsoft Entra ID service: All, AAD Management UX, Access
  Reviews, Account Provisioning, Application Proxy, Authentication Methods, B2C, Conditional Access,
  Core Directory, Device Registration Service, Entitlement Management, Hybrid Authentication,
  Identity Protection, Invited Users, MIM Service, MyApps, PIM, Self-service Group Management,
  Self-service Password Management, Terms of Use
- Category – Filter the data by the category type of activity: All, AdministrativeUnit,
  ApplicationManagement, Authentication, Authorization, AuthorizationPolicy, Contact, Device,
  DeviceConfiguration, DirectoryManagement, EntitlementManagement, GroupManagement,
  IdentityProtection, KerberosDomain, KeyManagement, Label, Other, PermissionGrantPolicy, Policy,
  PolicyManagement, ResourceManagement, RoleManagement, UserManagement
- Type – Filter the data by the type of activity: All, Add, Delete, Update, Assign, Unassign
- Operation

## Target Resource Category

The Target Resource category scopes the query by the target of the activity.

![Search Query - Target Resource](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/targetresourcefilters.webp)

This section has the following filters:

- Target
- Property
- Modifications – Filter the data to a specific type of modification: All, No changes, Has attribute
  changes

## Sign-in Events Category

The Sign-in Events category scopes the query by the sign-in event.

![Search Query - Sign-in Events](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/signinevents.webp)

This section has the following filters:

- Risk
- Conditional Access

## Location Category

The Location category scopes the query by the location of the user.

![Search Query - Location](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/locationfilters.webp)

This section has the following filters:

- City
- State
- Country

# Exchange Online Search Query

You can search Exchange Online activity that has been monitored and recorded to a File output. When
you select **Exchange Online** from the magnifying glass drop-down menu, a New Search tab opens with
the applicable query filters.

![Exchange Online - Search Quary Bar](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/searchquerybar.webp)

The filters are separated into the following categories:

- General Category
- User Category
- Target Category
- DLP Category

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters.You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter
must be configured for every search query.

![Exchange Online - General Category](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/general.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Source – Filter the data by the source type: All, Admin Audit, Mailbox Access, DLP, Sensitivity
  Label, Other

  **NOTE:** Disabling a source that is also a category will hide that category from the query
  options.

- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![Exchange Online Search - User Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/user.webp)

This section has the following filters:

- Name or UPN – Filter the data by name or User Principal Name (UPN)
- User Type – Filter the data by the type of user: All, Regular, Reserved, Admin, DcAdmin, System,
  Application, ServicePrincipal, CustomPolicy, SystemPolicy, Unknown
- IP Address – Filter the data by IP address.
- Client App or Browser – Filter the data by specified client application or browser.

## Target Category

The Target category scopes the query by the target of the file.

![Exchange Online Search - Target Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/target.webp)

This section has the following filters:

- Object
- Mailbox
- Accessed Mail

## DLP Category

The DLP category scopes the query by the DLP policy.

![Exchange Online Search - DLP Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/dlp.webp)

This section has the following filters:

- Policy Name

# File Search Query

You can search Windows file server and NAS device activity that has been monitored and recorded to a
File output. When you select **File** from the magnifying glass drop-down menu, a New Search tab
opens with the applicable query filters.

![Search UI Options Toolbar](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/searchuitop.webp)

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## Query Filter Options

The sections have the following filters:

- Events time range – The time frame filter must be configured for every search query:

  - From – Set the date and timestamp for the start of the activity range. The drop-down menu
    opens a calendar.
  - To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
    calendar.

- File Path – Filter the data for a specific file path where activity has occurred
- Hosts – Filter the data for a specific target host of the event
- Source – Filter the data for a specific source of the activity:

  - For local Windows activity, filter by a process name like notepad.exe
  - For network Windows activity, filter by the IP Address of the user
  - For NAS device activity, filter by the IP Address for the NAS device of the user

- User/Group – Filter the data for a specific user, or perpetrator of the event. You can also filter
  by a group.

  - Specify account or group (...) – The ellipsis button beside the User textbox opens the Specify
    account or group window. Use this window to resolve the account for the user. See the
    [Specify Account or Group Window](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md) topic for
    additional information.

- GID
- Types – Filter the data for a specific event result: All, Success, Fail
- Operations – Filter the data by the type of file operation: Read, Add, Update, Delete, Rename,
  Permissions. The Operations checkbox at the top acts as select/deselect all option.
- I/O Type – Filter the data by the type of input/output: Filesystem, Shadow copy (VSS). The I/O
  Type checkbox at the top acts as select/deselect all option.
- Object Type – Filter the data by the type of file object: File, Folder, Link, Share. The Object
  Types checkbox at the top acts as select/deselect all option.
- Search limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

# Linux Search Query

You can search Linux file server and NAS device activity that has been monitored and recorded to a
File output. When you select **Linux** from the magnifying glass drop-down menu, a New Search tab
opens with the applicable query filters.

![Linux Search Query](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/linuxsearchquerybar.webp)

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## Query Filter Options

The sections have the following filters:

- Events time range – The time frame filter must be configured for every search query:

  - From – Set the date and timestamp for the start of the activity range. The drop-down menu
    opens a calendar.
  - To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
    calendar.

- File Path – Filter the data for a specific file path where activity has occurred
- Hosts – Filter the data for a specific target host of the event
- Source – Filter the data for a specific source of the activity
- User/Group – Filter the data for a specific user, or perpetrator of the event. You can also filter
  by a group.

  - Specify account or group (...) – The ellipsis button beside the User textbox opens the Specify
    account or group window. Use this window to resolve the account for the user. See the
    [Specify Account or Group Window](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md) topic for
    additional information.

- GID
- Types – Filter the data for a specific event result: All, Success, Fail
- Operations – Filter the data by the type of file operation: Read, Add, Update, Delete, Rename,
  Permissions. The Operations checkbox at the top acts as select/deselect all option.
- I/O Type – Filter the data by the type of input/output: Filesystem, Shadow copy (VSS). The I/O
  Type checkbox at the top acts as select/deselect all option.
- Object Type – Filter the data by the type of file object: File, Folder, Link, Share. The Object
  Types checkbox at the top acts as select/deselect all option.

# SharePoint Search Query

You can search SharePoint activity that has been monitored and recorded to a File output. When you
select **SharePoint** from the magnifying glass drop-down menu, a New Search tab opens with the
applicable query filters.

![SharePoint New Search Tab](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/sharepointnewsearchtab.webp)

The filters are separated into the following categories:

- General
- Audit
- Move/Delete/Copy/Checkin
- Delete
- Search
- Permissions

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters.You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category addresses who, what, where, and when an object, user, host, or domain
controller is affected by the events selected in the other categories. The time frame filter must be
configured for every search query.

![General Category - SharePoint](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/generalfilters.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Event Type – Filter the data by the event type: All, CheckOut, CheckIn, View, Delete, Update,
  ProfileChange, ChildDelete, SchemaChange, Undelete, Workflow, Copy, Move, AuditMaskChange, Search,
  ChildMove, FileFragmentWrite, SecGroupCreate, SecGroupDelete, SecGroupMemberAdd,
  SecGroupMemberDel, SecRoleDefCreate, SecRoleDefDelete, SecRoleDefModify, SecRoleDefBreakInherit,
  SecRoleBindUpdate, SecRoleBindInherit, SecRoleBindBreakInherit, EventsDeleted, AppPermissionGrant,
  AppPermissionDelete, Custom

  **NOTE:** Disabling an event type that is also a category will hide that category from the query
  options.

- Item Type – Filter the data by the type of SharePoint item: All, Document, ListItem, List, Folder,
  Web, Site
- Protocol – Filter the data by the protocol: Any, HTTP, HTTPS
- Agent Hosts – Filter the data for a specific agent
- Agent Domains – Filter the data for a specific domain
- Item
- Source Name
- Site – Filter the data for a specific SharePoint site
- Document Location
- Web Application – Filter the data for a specific SharePoint web application
- Web Title
- User – Filter the data for a specific user, or perpetrator of the event

  - Specify account or group (...) – The ellipsis button beside the User textbox opens the Specify
    account or group window. Use this window to resolve the account for the user. See the
    [Specify Account or Group Window](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md) topic for
    additional information.

- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.
- Event Source – Filter the data by the source: Any, SharePoint, ObjectModel
- Location Type – Filter the data by the type of location: Any, Url, ClientLocation

## Audit Category

The Audit category scopes the query by audit mask activity.

![SharePoint Search - Audit filter section](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/auditmask.webp)

This section has the following filters:

- Audit Mask – Filter the data by the audit mask type: All, None, CheckOut, CheckIn, View, Delete,
  Update, ProfileChange, ChildDelete, SchemaChange, SecurityChange, Undelete, Workflow, Copy, Move,
  Search

## Move/Delete/Copy/Checkin Category

The Move/Delete/Copy/Checkin category scopes the query by file move and version activity.

![SharePoint Search Query - Move/Delete/Copy/Checkin Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/movedeletecopycheckinfilters.webp)

This section has the following filters:

- Child Document Location
- New Child Document Location
- Version

## Delete Category

The Delete category scopes the query by type of delete activity.

![SharePoint Search Query - Delete FIlters](/img/product_docs/platgovnetsuite/integrations/delete.webp)

This section has the following filters:

- Delete Type – Filter the data by the type of deletion: Any, MovedToRecycle, DeletedCompletely

## Search Category

The Search category scopes the query by search activity.

![SharePoint Search Query - Search Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/searchfilters.webp)

This section has the following filters:

- Search Query
- Search Constraint

## Permissions Category

The Permissions category scopes the query by permission change activity.

![SharePoint Search Query - Permissions Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/permissionsfilters.webp)

This section has the following filters:

- Group
- Trustee
- Trustee Type – Filter the data by the type of trustee: Any, Group, User
- Role
- Update Type – Filter the data by the type of update: All, Added, Removed, Updated
- Permission – Filter the data by the permission: All, EmptyMask, ViewListItems, AddListItems,
  EditListItems, DeleteListItems, CancelCheckout, ManagePersonalViews, ManageLists,
  AnonymousSearchAccessList, AnonymousSearchAccessWebLists, Open, ViewFormPages, ViewPages,
  AddAndCustomizePages, ApplyThemeAndBorder, ApplyStyleSheets, ViewUsageData, CreateSSCSite,
  ManageSubwebs, ManagePermissions, BrowseDirectories, BrowseUserInfo, AddDelPrivateWebParts,
  UpdatePersonalWebParts, ManageWeb, FullMask, UseClientIntegration, UseRemoteAPIs, ManageAlerts,
  CreateAlerts, EditMyUserInfo, EnumeratePermissions, ApproveItems, OpenItems, ViewVersions,
  DeleteVersions, CreateGroups

# SharePoint Online Search Query

You can search SharePoint Online activity that has been monitored and recorded to a File output.
When you select **SharePoint Online** from the magnifying glass drop-down menu, a New Search tab
opens with the applicable query filters.

![SharePoint Online - Search Quary Bar](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/sharepointonlinesearchquerybar.webp)

The filters are separated into the following categories:

- General
- User
- Location
- Item
- Sharing
- DLP
- Custom

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter
must be configured for every search query.

![SharePoint Online Search - General Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/generalfilters.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Source – Filter the data by the source type: All, File and Page, Folder, List, Sharing and Access
  Request, Site Permissions, Site Administration, Synchronization, DLP, Sensitivity Label, Content
  Explorer, Other

  **NOTE:** Disabling a source that is also a category will hide that category from the query
  options.

- Workload
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![SharePoint Online Search - User Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/user.webp)

This section has the following filters:

- Name or ID
- Login
- IP Address
- Client App or Browser
- User Type – Filter the data by the type of user: All, Regular, Reserved, Admin, DcAdmin, System,
  Application, ServicePrincipal, CustomPolicy, SystemPolicy, Unknown

## Location Category

The Location category scopes the query by the location of the file.

![SharePoint Online Search - Location Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/location.webp)

This section has the following filters:

- URL
- File Name
- File Extension

## Item Category

The Item category scopes the query by the item.

![SharePoint Online Search - Item Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/item.webp)

This section has the following filters:

- Item
- Item Type – Filter the data by the type of item: All, Unknown, File, Folder, Web, Site, Tenant,
  DocumentLibrary, Page
- Modifications – Filter the data by the type of item: All, No Changes, Has attribute changes

## Sharing Category

The Sharing category scopes the query by the type of sharing.

![SharePoint Online Search - Sharing Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/sharing.webp)

This section has the following filters:

- Target Account
- Access
- Target Type – Filter the data by the type of target: All, Member, Guest, SharePointGroup,
  SecurityGroup, Partner, Unknown

## DLP Category

The DLP category scopes the query by the DLP policy.

![SharePoint Online Search - DLP Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/dlp.webp)

This section has the following filters:

- Policy Name

## Custom Category

The Custom category scopes the query by custom event activity.

![SharePoint Online Search - Custom Filter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/custom.webp)

This section has the following filters:

- Event Data
- Custom Event

# SQL Server Search Query

You can search SQL Server activity that has been monitored and recorded to a File output. When you
select **SQL Server** from the magnifying glass drop-down menu, a New Search tab opens with the
applicable query filters.

![SQL Server Search Query](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/sqlsearchquerytoolbar.webp)

The filters are separated into the following categories:

- General
- User
- SQL

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/8.0/search-and-analysis/index.md#filter) and [Sort](/docs/activitymonitor/8.0/search-and-analysis/index.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/search-and-analysis/index.md#export) option.

Filter Value Entry

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

  - Selected values – Filters by the value selected from the drop-down menu for the textbox
  - Simple string with wildcards – Filters by the value entered into the textbox, which contains
    an asterisk (\*) as the wildcard
  - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter
must be configured for every search query.

![General Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/generalfilter.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Event Result – Filter the data for a specific event result: Any, Success, or Failure
- Reason
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![userfilter](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/userfilter.webp)

This section has the following filters:

- Name or ID
- IP Address

## SQL Category

The SQL category scopes the query by SQL Server activity.

![SQL Filters](/img/product_docs/activitymonitor/activitymonitor/admin/search/query/sqlfilters.webp)

This section has the following filters:

- Server name
- Database
- Operation – Filter the data by the type of Operation: All, Select, Insert, Update, Delete, merge,
  Execute, Login, Logout, Grant, Revoke, Deny, Error, AlterRole
- Application
- Object
- SQL Text
