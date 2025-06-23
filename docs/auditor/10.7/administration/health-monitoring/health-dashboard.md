# Netwrix Auditor Health Log

Daily summary of the Netwrix Auditor health log is displayed in the Health log widget. The chart
shows how many events with different severity levels were written to the product health log in the
last 24 hours. To open the health log, click the **Open Health Log** link in the Health Status
dashboard. See the topic for additional information.

If you want to clear Netwrix Auditor Health Log, son the computer where Auditor Server is installed,
navigate to **EventViewer** -> **Application and Services Logs** and locate the **Netwrix Auditor
System Health log**. Then, follow the instructions provided by Microsoft. See the Microsoft article
for additional information on
[How to Clear Event Logs](https://learn.microsoft.com/en-us/host-integration-server/core/how-to-clear-event-logs1).

![healthlog](/img/product_docs/auditor/auditor/admin/healthstatus/dashboard/healthlog.webp)

## Netwrix Auditor System Health Log

When an error occurs, a system administrator or support engineer must determine what caused this
error and prevent it from recurring. For your convenience, Auditor records important events in the
proprietary Netwrix Auditor **System Health** event log.

You can review events directly in the product:

- When issues encountered during data collection, click Details... in the Status column and select
  View Health Log.

  OR

- In the main screen, in the Configuration section click the Health status tile, then in the Health
  log dashboard widget click Open health log.

You can also inspect the log in the Event Viewer.

There are three types of events that can be logged:

| Event Type  | Description                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Information | An event that describes the successful operation beginning or completion. For example, the product successfully completed data collection for a monitoring plan.        |
| Warning     | An event that is not necessarily significant, but may indicate a possible future problem. For example, the product failed to process a domain controller.               |
| Error       | An event that indicates a significant problem such as loss of data or loss of functionality. For example, the product failed to retrieve settings for your data source. |

Review the following:

- Inspect Events in Health Log

If you want to monitor Auditor health status in more depth, you can do the following:

- Create a monitoring plan for this log using Event Log Manager to collect activity data. See the
  Health Status overview for additional information.
- Configure alerts triggered by specific events in the product's health log.
  [Create Alerts on Health Status](/docs/auditor/10.7/administration/alerts-and-notifications/alert-types.md)

## Inspect Events in Health Log

Follow the steps o inspect events in Netwrix Auditor health log

**Step 1 –** On the main Auditor page, select the Health status tile, then in the Health log
dashboard widget click Open health log.

**Step 2 –** Select an entry to review it in details. You can also copy event details. Select the
event in the list and click Copy details at the bottom of the window.

For your convenience, Auditor provides you with filters so that you can narrow down the number of
events on the screen and focus on those that matter most. For example, warnings on failed data
collection or events of an important monitoring plan.

### Filter Events

Follow the steps to filter events.

**Step 1 –** Select Filters in the upper part of the Netwrix Auditor Health Log window.

**Step 2 –** Complete the following fields:

| Option          | Description                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logged          | Specify event logging time period (date range, yesterday, etc.).                                                                                                                                                        |
| Event level     | Select level of the events that you want to be displayed.                                                                                                                                                               |
| Event source    | Select services and applications whose events you want to view.                                                                                                                                                         |
| Monitoring plan | Select to display events from one or several monitoring plans.                                                                                                                                                          |
| Item name       | Select to display events from the certain item(s) you need.                                                                                                                                                             |
| Event ID        | Enter event ID number or range of event IDs separated by commas. For example, 1, 3, 5-99. You can also exclude unwanted event IDs from being displayed. Type the minus sign before selected event ID. For example, -76. |

![healthlogfilters_thumb_0_0](/img/product_docs/auditor/auditor/admin/healthstatus/dashboard/healthlogfilters_thumb_0_0.webp)

The applied filters will be listed on the top of the screen under the window title.

# Monitoring Overview

Aggregated statistics on the monitoring plans is provided in the Monitoring overview widget. It
displays current statuses of all monitoring plans:

- Ready (green indicator)—The monitoring plans (one or several) successfully processed the data
  sources with all their items and are ready for the next run.
- Pay attention (yellow indicator)—The monitoring plans (one or several) require your attention, as
  some items were not processed completely but only partially. This status applies to the monitoring
  plans targeted at Logon Activity and Windows File Server. See the table below for details.
- Take action (red indicator)—Any data source or item in the monitoring plan (one or several) was
  processed with errors.

After you click View details, the Monitoring Overview window will be displayed.

![monitoringoverview_thumb_0_0](/img/product_docs/auditor/auditor/admin/healthstatus/dashboard/monitoringoverview_thumb_0_0.webp)

It provides the hierarchical list of monitoring plans, processed data sources and corresponding
items with their current status and date/time of the last data processing session. For data sources
and items their current status is depicted as follows:

| Entity          | Status                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data source     | Disabled                                                                                                                 | A data source can be disabled manually via its settings (by switching Monitor this data source and collect activity data to OFF), or automatically, if the license is not valid any more (for example, the count of licensed objects was exceeded, or the trial period has expired).                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Empty           | No items have been added to this data source yet.                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Enabled         | Monitor this data source and collect activity data is set to ON in the data source settings.                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Not available   | The monitoring plan is corrupted and cannot process its data sources, so it is recommended to remove it and create anew. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Not responding  | Data collector for this data source is not responding. The underlying items will not be displayed for such data source.  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Working         | The data source is being processed at the moment.                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| (not displayed) | The data source status is unknown.                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Item            | Pay attention                                                                                                            | The item was processed with some issues (non-critical). This status applies to the monitoring plans targeted at Logon Activity and Windows File Server. It means that data collection from at least one entity completed with errors. For example, a MyFileServer item included in the File Server monitoring plan contains all CIFS shares hosted on the MyFileServer computer. If any of these shares was processed with errors while others were processed successfully, the processing of the whole MyFileServer item will be considered partially completed, and the monitoring plan will have a yellow indicator, requiring your attention. Click the Details link to examine the product log. |
| Ready           | The item was processed successfully and is ready for the next run of data collection.                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Take action     | Critical error(s) occurred while processing this item. Click the Details link to examine the product log.                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Working         | The item is being processed at the moment.                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

You can use the Search field, or apply a filter to display the information you need. For example, in
the Apply Filters dialog you can select the Show only plans with issues to display only the
monitoring plans that require attention and corrective actions.

This information will help you to troubleshoot the product operation, detect and eliminate the root
cause of the monitoring errors, providing for auditing continuity and compliance.

# Health Status Dashboard

New Health Status dashboard facilitates Auditor maintenance and troubleshooting tasks, providing IT
specialists with at-a-glance view on the most critical factors: data collection performance, product
health and storage capacity. The dashboard comprises a set of widgets that display the status of
these aspects using aggregated statistics and charts. Nearly each widget allows you to drill down to
the detailed information on the aspect you are interested in.

To view the dashboard, on the main Auditor page, click the Health status tile located in the
Configuration section.

The dashboard includes the following widgets:

- The Activity records by date chart—Shows the number of activity records produced by your data
  sources, collected and saved by Netwrix Auditor during the last 7 days. See the
  [Activity Records Statistics](/docs/auditor/10.7/administration/health-monitoring/activity-statistics.md) topic for additional information.
- The Monitoring overview widget—Shows aggregated statistics on the statuses of all monitoring plans
  configured in Netwrix Auditor at the moment. See the [Monitoring Overview](/docs/auditor/10.7/administration/health-monitoring/health-dashboard.md)
  topic for additional information.
- The Health log chart—Shows the statistics on the events written in the Netwrix Auditor health log
  in the last 24 hours. Click the link in this widget to view the log. See the
  [Netwrix Auditor Health Log](/docs/auditor/10.7/administration/health-monitoring/health-dashboard.md) topic for additional information.
- The Database statistics widget—Helps you to estimate database capacity on the default SQL Server
  instance that hosts the product databases. See the [Database Statistics](/docs/auditor/10.7/administration/health-monitoring/database-statistics.md)
  topic for additional information.
- The Long-Term Archive widget—Helps you to estimate the capacity of the Long-Term Archive
  file-based storage. To modify its settings, including location and retention, click the link in
  this widget. See the [System Health](/docs/auditor/10.7/installation-and-setup/system-requirements/hardware-and-software.md#system-health) topic
  for additional information.
- The Working Folder widget—Helps you to estimate the capacity of the Auditor working folder used to
  keep operational information (configuration files of the product components, log files, and other
  data) on the Auditor Server. See the
  [System Health](/docs/auditor/10.7/installation-and-setup/system-requirements/hardware-and-software.md#system-health) topic for additional
  information.

![healthstatusdashboard_thumb_0_0](/img/product_docs/auditor/auditor/admin/healthstatus/dashboard/healthstatusdashboard_thumb_0_0.webp)

You can also instruct Netwrix Auditor to forward similar statistics as a health summary email to
personnel in charge. For that, click Notification settings, then follow the steps described in the
[Notifications](/docs/auditor/10.7/administration/alerts-and-notifications/email-notifications.md) topic.

# Self-Audit

Built-in Netwrix Auditor self-audit allows you to track changes to the product configuration,
including monitoring plans, data sources, audit scope and details about it (before-after values).
This helps you to ensure that monitoring scope is complete and changed only in line with the
workflows adopted by our organization.

The corresponding option is available on the General tab of Netwrix AuditorSettings. By default, the
**Collect data for self-audit checkbox** is selected (enabled).

![selfaudit_thumb_0_0](/img/product_docs/auditor/auditor/admin/healthstatus/selfaudit_thumb_0_0.webp)

### Search for Self-audit Results

All Auditor self-audit Activity Records can be found quickly using AuditIntelligence Search.

Follow the steps to search for self-audit results.

**Step 1 –** In Auditor, navigate to Search.

**Step 2 –** Set the Data source filter to **Self-audit**.

**Step 3 –** Click Search to review results:

![selfaudit_search_thumb_0_0](/img/product_docs/auditor/auditor/admin/healthstatus/selfaudit_search_thumb_0_0.webp)

**NOTE:** After reviewing your search results, apply filters to narrow your data. See the
[View Reports](/docs/auditor/10.7/reporting/report-management/viewing-reports.md) topic for additional information.

**Step 4 –** After browsing your data, navigate to Tools to use the search results as intended. See
the [View and Search Collected Data](/docs/auditor/10.7/administration/navigation-and-ui/favorites-and-search.md) topic for additional information.

### Review Auditor Self-Audit Report

Also, there is a new Netwrix Auditor Self-Audit report available under Organization Level Reports in
the predefined set of reports. This report shows detailed information on changes to Auditor
monitoring plans, data sources and audited items.

Follow the steps to review the Self-audit report.

**Step 1 –** In Auditor, navigate to Reports > Organization Level Reports.

**Step 2 –** Select the Netwrix Auditor Self-Audit report and click View.

![selfaudit_report](/img/product_docs/auditor/auditor/admin/healthstatus/selfaudit_report.webp)

## Netwrix Auditor Self-Audit Scope

Review the full list of components and settings captured within Netwrix Auditor self-audit scope.

| Object type                                                                                                                                                    | Action                       | What                                                                                                                                                                                                                                                          | Details                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Local logon                                                                                                                                                    | - Successful Logon - Logoff  | - Netwrix Auditor server name                                                                                                                                                                                                                                 | -                                                                                                                                      |
| Remote logon                                                                                                                                                   | - Successful Logon - Logoff  | - Netwrix Auditor server name                                                                                                                                                                                                                                 | -                                                                                                                                      |
| Netwrix Auditor global settings                                                                                                                                | - Modified                   | - Self-audit settings - Usage statistics collection settings - Tags - Audit database settings - Long-term archive settings - Data import for investigations - Notification settings - Integration API settings - License settings - Check for update settings | - Self audit (enabled / disabled) - Settings changed                                                                                   |
| Monitoring plan                                                                                                                                                | - Added - Modified - Removed | - Monitoring plan name                                                                                                                                                                                                                                        | - Monitoring plan path changed - Role assignments (added / removed) - Activity Summary recipients (added / removed) - Settings changed |
| Data source                                                                                                                                                    | - Added - Modified - Removed | - Monitoring plan name \ Data source name                                                                                                                                                                                                                     | - Monitoring status (enabled / disabled) - Settings changed                                                                            |
| Item                                                                                                                                                           | - Added - Modified - Removed | - Monitoring plan name \ Data source name \ Item name                                                                                                                                                                                                         | - Item name changed - Settings changed                                                                                                 |
| Alert                                                                                                                                                          | - Added - Modified - Removed | - Alert name                                                                                                                                                                                                                                                  | - Name changed - Mode (enabled / disabled) - Alert recipients (added / removed) - Settings changed                                     |
| Monitoring plans folder                                                                                                                                        | - Added - Modified - Removed | - All Monitoring Plans \ Folder name                                                                                                                                                                                                                          | - Name changed - Role assignments (added / removed)                                                                                    |
| Monitoring plans root folder                                                                                                                                   | - Modified                   | - All Monitoring Plans                                                                                                                                                                                                                                        | - Role assignment (added / removed)                                                                                                    |
| Custom search-based report                                                                                                                                     | - Added - Modified - Removed | - Report name                                                                                                                                                                                                                                                 | - Name changed - Settings changed                                                                                                      |
| - Subscription to custom search-based report - Subscription to overview reports - Subscription to SSRS-based report - Subscription to risk assessment overview | - Added - Modified - Removed | - Subscription name                                                                                                                                                                                                                                           | - Name changed - Mode (enabled / disabled) - Subscription recipients (added / removed) - Settings changed                              |
| Configuration integrity                                                                                                                                        | - Added - Modified           | - Configuration data - Configuration integrity state                                                                                                                                                                                                          | - Alerts, saved searches, subscriptions, etc.                                                                                          |
