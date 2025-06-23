---
title: favorites and search
sidebar_label: favorites-and-search
description: Auditor 10.7 documentation for favorites and search with configuration details, usage instructions, and implementation guidance.
---

# Customizing Favorite Reports

The Favorite reports tile displays a shortened list of your favorite reports. To view, edit or
update the full list, click View all.

The Home > Reports page opens. This page includes several folders: Favorites, Predefined, Compliance
and Custom. Favorite reports are located in the Favorites folder.

![reportsfavorites](/img/product_docs/auditor/auditor/admin/navigation/reportsfavorites.webp)

Follow the steps to add or remove a Favorite report

**Step 1 –** Locate the desired report in one of the other folders.

**Step 2 –** Click the name of the report to view its description.

**Step 3 –** To change whether the report is a favorite, click the star icon in the upper right-hand
corner of the report description.

![reportsummary](/img/product_docs/auditor/auditor/admin/navigation/reportsummary.webp)

Report Summary with Star icon unchecked

## Other Actions for Favorite Reports

The options on the Reports page for Favorite reports are show below:

|                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![favoritesrestorerefresh](/img/product_docs/auditor/auditor/admin/navigation/favoritesrestorerefresh.webp) | ![reportsoptions](/img/product_docs/auditor/auditor/admin/navigation/reportsoptions.webp)                                                                                                                                                                                                                                                                                                                                                             |
| _Favorites Sub-Folder Options_                                                                              | _Favorites > [Report] Options_                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Option Name                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Restore Default                                                                                             | Repopulates the Favorites sub-folder with all reports that have been marked Favorite. When using Role-Based Access in Netwrix Auditor, if several users mark the same report as **Favorite**, then that report will be removed from the Favorites list if a user removes the report from the Favorites list. Using the **Restore Default** option will re-add the report to the Favorites list for all users that have not removed the Favorite mark. |
| Refresh                                                                                                     | Runs the reports in the Favorites folder to display the most recent information.                                                                                                                                                                                                                                                                                                                                                                      |
| View                                                                                                        | Opens the Preview Report page. There, you can modify report options (such as the timeframe) if desired, and then click View Report to see the resulting report. See the [View Reports](/docs/auditor/10.7/reporting/report-management/viewing-reports.md) topic for additional information.                                                                                                                                                           |
| Subscribe                                                                                                   | Opens the Add Subscription to Report page. See the [Create Subscriptions](/docs/auditor/10.7/reporting/report-management/report-subscriptions.md) topic for additional information.                                                                                                                                                                                                                                                                   |
| Add to Favorites                                                                                            | This option is greyed out when viewing the Favorites list, since all the reports shown have already been added to Favorites.                                                                                                                                                                                                                                                                                                                          |
| Remove from Favorites                                                                                       | Removes a report from the Favorites list. This option provides the same function as removing a report as a favorite using the **Star** icon.                                                                                                                                                                                                                                                                                                          |
| Go to Original                                                                                              | Expands the sub-folder in which the report is originally located. For example, clicking **Go to Original** for the Enterprise Overview report will expand the **Predefined > Organization Level Reports** sub-folder.                                                                                                                                                                                                                                 |

# Use Filters in Advanced Mode

Netwrix Auditor provides an advanced set of filters and match type operators that enable you to
customize your searches even more precisely.

Switch to Advanced mode to review your current search in details and modify it if necessary. Click
Add to add a new filter to your search.

Review the following for additional information:

- Apply Additional Filters
- Search Conditions

## Apply Additional Filters

Expand the Filter list to find additional filters or filter values. The most commonly used filters
are described in [Use Filters in Simple Mode](/docs/auditor/10.7/administration/navigation-and-ui/favorites-and-search.md). Review the following for additional
information:

| Filter          | Description                                                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | ------- | ---------------------- | --- | --------- | ------------------------- | --- | ---------- | ------------------------- | --- | ------ | ----------------------- | --- | ------- | ----------------------- | --- | --------- | ------------------------- | --- | ------------ | ------------- | --- | ------------------- | ------------------ | --- | -------------- | -------- | --- | -------- | ------ | --- | --------------- | ------------- | --- | ----------- | --- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action          | Limits your search to the selected actions only. Specify an action from the Value list or type it yourself. The Action filter in the Advanced mode contains actions besides those available in basic mode (added, modified, removed, and read). Reported actions vary depending on the data source and object type.  |                                                                                                                                                                                                                                                                                                                                                                                                                       |     |     | --- | --- |     | - Added | - Add (Failed Attempt) |     | - Removed | - Remove (Failed Attempt) |     | - Modified | - Modify (Failed Attempt) |     | - Read | - Read (Failed Attempt) |     | - Moved | - Move (Failed Attempt) |     | - Renamed | - Rename (Failed Attempt) |     | - Checked in | - Checked out |     | - Discard check out | - Successful Logon |     | - Failed Logon | - Logoff |     | - Copied | - Sent |     | - Session start | - Session end |     | - Activated |     |     | You are investigating suspicious user activity. You have already identified the intruder and now you want to see if any files were deleted or moved, and emails sent. Since you are interested in specific actions only, set the Action filter to Removed, Moved, and Sent. |
| Object type     | Limits your search to objects of a specific type only. Specify an object type from the Value list or type it yourself. This filter modifies the What filter. The value list is prepopulated with the most frequent object types.                                                                                     | You noticed that some domain policies were changed and you want to investigate this issue. Your What filter is set to _Policy_, and so you keep receiving search results such as _HiSecPolicy, \\FS\Share\NewPolicy.docx_, _http://corp/sites/col1/Lists/Policy._ These entries correspond to different object types and data sources. Since you are looking for GPOs only, select GroupPolicy from the Value list.   |
| Data source     | Limits your search to the selected data source only. Specify a data source from the Value list or type it yourself.                                                                                                                                                                                                  | You are investigating suspicious user activity. A user specified in the Who filter made a lot of changes across your IT infrastructure, so the search results became difficult to review. Since you are only interested in the way this user's activity could affect your Active Directory domain and Exchange organization, set the Data source filter to Active Directory and Exchange to limit the search results. |
| Monitoring plan | Limits your search to the selected plan only. Specify the name from the Value list or type it yourself.                                                                                                                                                                                                              | You are investigating suspicious user activity. A user specified in the Who filter made a lot of changes across your IT infrastructure, so the search results became difficult to review. Since you are only interested in the way this user's activity could affect file shares audited within a single plan, set the Monitoring plan filter to _"My servers"_ to limit the search results.                          |
| Item            | Limits your search to the selected item only. This filter can be helpful if have several items of the same type in your monitoring plan (e.g., two Active Directory domains). Specify the name from the Value list or type it yourself.                                                                              | Your monitoring plan is configured to track domains and includes your secured corporate domain and a domain for temporary employees. You are investigating who logged in your secured corporate domain outside business hours. You can set the Item filter to this domain name to limit the search results and exclude logons to computers from a less important domain.                                              |
| Working hours   | Limits your search results to entries that occurred within the specified hours. You can use this filter together with When if you need, for example, to search for activity in the non-business hours during the last week.                                                                                          | You are investigating an incident and want to know who accessed sensitive data outside business hours. You can set this filter as _Not equal to_ and specify the time interval from _8:00 AM_ to _6:00 PM_. Filtered data will include only operations that occurred outside this interval, that is, during non-business hours.                                                                                       |
| Data categories | Limits your search results to entries that contain sensitive data comply with a classification rule. You can use this filter together with Equal to PCIDSS to, for example, to search for sensitive files that contain data regulated by the PCIDSS.                                                                 | You are searching all documents containing cardholder data that can potentially be mapped with the PCIDSS compliance standard. You can set this filter _as equal to_ and specify the value as _PCIDSS_. Filtered data will contain only files that match this criteria. This filter shows activity records collected from the following data sources: - Windows File Servers - ShrePoint - SharePoint Online          |
| Details         | Limits your search results to entries that contain the specified information in the Details column. The Details column normally contains data specific to your target, e.g., assigned permissions, before and after values, start and end dates. This filter can be helpful when you are looking for a unique entry. | You discovered that a registry key was updated to _"242464"_. Now you want to investigate who made the change and what the value was before. You can set the Details filter to _242464_ to find this change faster.                                                                                                                                                                                                   |
| Before\*        | Limits your search results to entries that contain the specified before value in the Details column.                                                                                                                                                                                                                 | You are investigating an incident in which the SAM-account-name attribute was changed for an account in your Active Directory domain. You can set the Before filter to the previous name (e.g., _John2000_) to find the new name faster.                                                                                                                                                                              |
| After\*         | Limits your search results to entries that contain the specified after value in the Details column.                                                                                                                                                                                                                  | You are investigating a security incident and want to know who enabled a local Administrator account on your Windows Server. You can set the After filter to this account's current state (e.g., _Enabled_) to find this change faster.                                                                                                                                                                               |
| Everywhere      | Limits your search results to entries that contain the specified value in any column.                                                                                                                                                                                                                                | You are investigating a security incident. You have already identified the intruder (e.g., _BadActor_) and now you want to see all actions made by intruder's account or with it. Since the intruder can be the actor (Who), the object (What), or can even show up in details, set the Everywhere filter to intruder's name.                                                                                         |

\* If you plan to audit an SQL Server for data changes and browse the results using 'Before' and
'After' filter values, make sure that the audited SQL database tables have a primary key (or a
unique column). Otherwise, 'Before' and 'After' values will not be reported.

\* – If you plan to audit an SQL Server for data changes and browse the results using 'Before' and
'After' filter values, make sure that the audited SQL database tables have a primary key (or a
unique column). Otherwise, 'Before' and 'After' values will not be reported.

## Search Conditions

When you apply filters at search, you can specify operators that should be used as conditions for
data you want to retrieve and compare with the certain filter value. A condition can be, for
example, Contains, Starts with, and so on.

![advancedfilters_thumb_0_0](/img/product_docs/auditor/auditor/admin/search/advancedfilters_thumb_0_0.webp)

The following operators can be used to specify search conditions:

| Operator         | Description                                                                                                                                                                                                                                  | Example                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contains         | This operator shows all entries that contain a value specified in the filter.                                                                                                                                                                | If you set the Who filter to contains _John_, you will get the following results: _Domain1\John_, _Domain1\Johnson_, _Domain2\Johnny_, _John@domain.com_.                                 |
| Equals           | This operator shows all entries with the exact value specified. Make sure to provide a full object name or path. To apply this operator when adding filters in the Simple mode, provide a value in quotation marks (e.g., _"Domain1\John"_). | Use this operator if you want to get precise results, e.g., _\\FS\Share\NewPolicy.docx_.                                                                                                  |
| Not equal to     | This operator shows all entries except those with the exact value specified. In the Search field in the Simple mode, this operator appears as not, e.g., Who not for the Who filter.                                                         | If you set the Who filter to not equal to _Domain1\John_, you will exclude the exact user specified and find all changes performed by other users, e.g., _Domain1\Johnson, Domain2\John_. |
| Starts with      | This operator shows all entries that start with the specified value.                                                                                                                                                                         | If you set the Who filter to starts with _Domain1\John_, you will find all changes performed by _Domain1\John_, _Domain1\Johnson_, and _Domain1\Johnny_.                                  |
| Ends with        | This operator shows all entries that end with the exact specified value.                                                                                                                                                                     | If you set the Who filter to ends with _John_, you will find all changes performed by _Domain1\John_, _Domain2\Dr.John_, _Domain3\John_.                                                  |
| Does not contain | This operator shows all entries except those that contain the specified value. In the Search field in the Simple mode, this operator appears as not, e.g., Who not for the Who filter.                                                       | If you set the Who filter to does not contain _John_, you will exclude the following users: _Domain1\John_, _Domain2\Johnson_, and _Johnny@domain.com_.                                   |
| In group         | This operator relates to the Who filter. It instructs Netwrix Auditor to show only data for the accounts included in the specified group.                                                                                                    | If you set the In group condition for Who filter to _Domain\Administrators_, only the data for the accounts included in that group will be displayed.                                     |
| Not in group     | This operator relates to the Who filter. It instructs Netwrix Auditor to show only data for the accounts not included in the specified group.                                                                                                | If you set the Not in group condition for Who filter to _Domain\Administrators_, only the data for the accounts not included in that group will be displayed.                             |

When you add a new search filter, the Contains operator is used by default.

To modify conditions for the selected filters, make sure you have switched to the Advanced search
mode.

![advanced_thumb_0_0](/img/product_docs/auditor/auditor/admin/search/advanced_thumb_0_0.webp)

The image below represents the same search filters as they are shown in the Search field in the
Simple mode.

![advancedexample_thumb_0_0](/img/product_docs/auditor/auditor/admin/search/advancedexample_thumb_0_0.webp)

# Use Filters in Simple Mode

Filters are used to narrow your search results. To create a unique set of filters, you can:

- Add different filters to your search. Search results will be sorted by all selected filters since
  they work as a logical conjunction (e.g., Who: Administrator and  Action: Added).
- Specify several values in the same filter to search for any of them (e.g., Action: Modified
  or Action: Removed). To do this, select a filter again and specify a new value.

  Spaces do not separate values, so the whole expression will be included in your search as a
  single value. For example, if you want to search for any of three names, do not enter **Anna
  Mark Bill** but instead create a separate filter entry for each name.

## Filter Types

| Filter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Who    | Filter data by user (initiator) account. Specify an account name (e.g., John) to find all entries containing it (e.g., `Domain1\John`, `Domain1\Johnson`, `Domain2\Johnny`, `John@domain.com`). For exact match, use quotation marks and provide a user name in Domain\User or UPN format (e.g., `Domain1\John` or `John@domain.com`) .                                                                                                                                                           |
| Action | Filter data by action type (Added, Removed, etc.) Select an action type from the list (Added, Removed, Modified, Read). For additional actions, navigate to the Advanced mode. See the [Use Filters in Advanced Mode](/docs/auditor/10.7/administration/navigation-and-ui/favorites-and-search.md) topic for additional information.                                                                                                                                                              |
| What   | Specify an object name (e.g., _Policy_) to find all entries containing it (e.g., _HiSecPolicy_, `\\FileSserver\Share\NewFolder\NewPolicy.docx`, `http://sharepoint/sites/collection1/Lists/Policy`). Netwrix Auditor searches across all data sources. For an exact match, use quotation marks and provide an object name in the format that is typical for your data source (e.g., `HiSecPolicy`).                                                                                               |
| When   | Filter data by the time interval when the change occurred. Specify a timeframe or provide a custom date range. Netwrix Auditor allows you to see changes that occurred today, yesterday, in the last 7 or 30 days, or within the specified date range.                                                                                                                                                                                                                                            |
| Where  | Specify a resource name (e.g., _Enterprise_) to find all entries containing it (e.g., `Enterprise-SQL`, `FileStorage.enterprise.local`). The resource name can be a FQDN or NETBIOS server name, Active Directory domain or container, SQL Server instance, SharePoint farm, VMware host, etc. Netwrix Auditor searches across all data sources. For an exact match, use quotation marks and provide a resource name in the format that is typical for your data source (e.g., `Enterprise-SQL`). |

Follow the steps to add a filter to your search.

**Step 1 –** Click a filter type icon. Enter a value you want to search for.

![Account specification](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/add.webp)

Alternatively, you can type a value directly into the Search field.

- For exact match, use quotation marks.
- To further restrict your search, right-click the value and select a filter from the pop-up menu.
  To search across all columns in the results view (everywhere—Who, What, Where, Action, etc.),
  leave it as is.

![Filter](/img/product_docs/auditor/auditor/admin/search/addsuggestions.webp)

**Step 2 –** Click Search to apply your filters. By default, all entries that contain the filter
value are shown.

## Modifying and Removing Filters

| To...         | Do...                                                                                                                                                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modify filter | Double-click the filter and type a new value. ![Filter new value](/img/product_docs/auditor/auditor/admin/search/search_modify_filter.webp) If you need to modify the When filter, delete it and add a new value, or navigate to the Advanced mode (Simple mode does not support its modification). |
| Remove filter | Click the **Close** icon next to it.                                                                                                                                                                                                                                                                |

## Exporting and Importing Filters

To export or import filters as regular expressions, use the **Tools** menu commands:

| To...  | Use...                                                                                                                                                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Export | **Copy search** — copy the search filters that are currently applied to your search. This can be helpful if you want to share your search with a colleague (e.g., by pasting it in an email) or to modify a saved search query with your current filters. |
| Import | **Paste search** — paste the search filters you copied before. These can be filters copied from a previous search or those someone shared with you.                                                                                                       |

# View and Search Collected Data

Netwrix Auditor delivers complete visibility into your IT infrastructure. Its convenient interactive
search interface enables you to investigate incidents and browse data collected across the entire IT
infrastructure. When running a search, you are not limited to a certain data source, change type, or
object name. You can create flexible searches that provide you with precise results on _who_ changed
_what_, and _when_ and _where_ each change was made.

To review collected data, you must be assigned the **Global administrator** or **Global reviewer**
Netwrix Auditor role. Users with the **Reviewer** role on a certain plan or folder have limited
access to data—only within their delegated scope. See the
[Role-Based Access and Delegation](/docs/auditor/10.7/monitoring-plans/delegation-and-permissions.md) topic for additional
information.

This functionality is currently available for the following data sources:

- Active Directory
- Microsoft Entra ID (formerly Azure AD)
- Exchange
- Exchange Online
- File Servers (Windows File Servers, EMC, and NetApp)
- Network Devices
- Oracle Database
- SharePoint
- SharePoint Online
- SQL Server
- VMware
- Windows Server
- Group Policy
- Logon Activity
- User Activity (Video)
- Netwrix API—data imported to the Audit Database from other sources using Netwrix Auditor
  Integration API
- Netwrix Auditor Self-Audit
- Netwrix Data Classification. See
  [Sensitive Data Discovery ](/docs/auditor/10.7/administration/system-settings/sensitive-data-discovery.md)for more information.

Netwrix Auditor executes interactive search queries against data stored in the audit databases, that
is, on data collected in the last 180 days (default retention period). If you want to investigate
incidents that occurred more than 180 days ago, then you should import that data from the Long-Term
Archive. See [Investigations](/docs/auditor/10.7/administration/system-settings/general-settings.md) topic for additional information.

## Browsing Your Audit Data

On the main Netwrix Auditor page, click
![search_tile](/img/product_docs/auditor/auditor/admin/search/search_tile.webp)
on the left.

You can add any elements (a dashboard, report, alert, risk, etc.) to the Auditor Home screen to
access them instantly. See the [Navigation](/docs/auditor/10.7/administration/navigation-and-ui/index.md) and
[Customize Home Screen](/docs/auditor/10.7/administration/navigation-and-ui/customizing-dashboard.md) topics for additional information.

There you can use the UI controls to run the variety of search queries that will fecth you exactly
the data you need.

- To view all audit data stored in all Audit Databases by all monitoring plans, click **Search**
  button in the center.

  Be aware that this type of search query may take time due to a large amount of data. Thus, it is
  recommended that instead of retrieveing a massive data set, you pre-configure your search query
  using filters.

  By default, Netwrix Auditor shows only the top 2,000 entries in the search results.

- To pre-configure your search query before you click Search, you can add filters. Then the search
  query will return only data matching your filtering criteria. See
  [Use Filters in Simple Mode](/docs/auditor/10.7/administration/navigation-and-ui/favorites-and-search.md) for details.

  You can also use advanced filtering capabilities based on regular expressions (they involve
  filter fields and conditions). See [Use Filters in Advanced Mode](/docs/auditor/10.7/administration/navigation-and-ui/favorites-and-search.md) for
  details.

  ![search_filter](/img/product_docs/auditor/auditor/admin/search/search_filter.webp)

- By default, search results are open in the same window, so the subsequent search results will
  overwrite the previous search results. To view them in different windows, click Open in new
  window.
- In addition, you can customize your view by selecting columns to display.

Use search results for your own needs: save, share, create search-based alerts, subscribe to
periodic delivery of search query results, etc. See Make Search Results Actionnable for more
information.

![search_nofilter_1](/img/product_docs/auditor/auditor/admin/search/search_nofilter_1.webp)

You can also use the **Search** window to examine details for the selected activity record, or watch
a video recording (for User Ativity data).

### Examining Activity Record in Detail

To work with a certain activity record:

1. Select the activity record which details you want to review. Its key fields and user (initiator)
   account details will be displayed in the right pane.
2. To display all fields and copy them if necessary, click the Full screen... link on the right.

If you are examining User Activity entries, click the Show video... link below the entry. Review
details and play a video by clicking the Show video on the right.

3. You can instruct Netwrix Auditor to include or exclude this activity record from the search query
   results, as described in the Include and Exclude Data

## Customize View

Having reviewed the search results, you can modify the way the data is presented, for example, hide
a column or change its position, or hide the Details pane on the right.

To modify view:

1. Navigate to Tools
2. Click Select columns. The dialog that opens shows the search columns currently selected for
   display.
3. Check the columns you want to include and clear unwanted ones.
4. Set the order of displayed columns using arrows on the right.
5. Click **Hide details** if you want to hide the Details pane with the activity record and user
   (initiator) account details.
6. To restore the original view configuration, click Restore Default.

## Include and Exclude Data

Having reviewed the search results, you can proceed with your investigation by excluding or
including data. Excluding a filter value is helpful if you want to skip it in your search results
(e.g., a service account or trusted user account). On the other hand, including a filter value
ensures that only the entries containing it will be shown (e.g., a suspicious user or potentially
violated folder).

To include or exclude data

1. Review your search results and locate an entry with data you want to exclude or include.
2. Select this entry and review details.
3. Click Exclude from search or Include to search and specify a filter value from the list.
4. Click Search to update the search results.

Your exclusions and inclusions will automatically be added to the search filters, limiting the
amount of data shown in the results pane.

## Make Search Results Actionnable

You can export your search query results, save them as a custom report, subscribe to periodic
delivery of this search results, create a search-based alert.

Navigate to Tools in the top right corner of the Search window and select the required action.

| Use...         | To...                                                                                                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save as report | Save your search results as custom reports.                                                                                                                                                                                                                                                                                                         |
| Create alert   | Create an alert with the same set of filters you have just specified for your search.                                                                                                                                                                                                                                                               |
| Subscribe      | Create subscription for periodic delivery of the search query results. Subscription to the search results is not the same as creation of a custom report using this search.                                                                                                                                                                         |
| Export data    | Save your search results as a _.pdf_ or _.csv_ file. All audit data from your search query results will be exported (unlike the interactive view which is limited to the top 2,000 entries). When exporting large amount of data (e.g., changes made by a newly retired employee during the last 8 months), it is recommended to use _.csv_ format. |

## Troubleshooting Tips

If you do not see the expected information in search results, try the following:

- Verify the Audit Database retention and SQL Server settings.
- Make sure that data collection is configured properly in the monitoring plan settings.
- Check the required audit settings in your monitored infrastructure.
- Verify the data collecting account.

See next:

- [Use Filters in Advanced Mode](/docs/auditor/10.7/administration/navigation-and-ui/favorites-and-search.md)
