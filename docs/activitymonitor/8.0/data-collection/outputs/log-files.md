---
title: Log File Output Configuration
sidebar_label: Log Files
description: Configure file output for monitored domains to create JSON activity logs and enable event searching within Activity Monitor for comprehensive auditing.
---

# Output for Monitored Domains

Once a domain is being monitored the event stream can be sent to multiple outputs.

![Monitored Domains tab with Domain Outputs added](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/actiivtymonitordomainoutputsadded.webp)

Configured outputs are grouped under the domain. You can have multiple outputs configured for a
domain. The domain event outputs are:

- File – Creates an activity log as a JSON file for every day of activity

  **NOTE:** This is required to search event data for Active Directory within the application.

- Syslog – Sends activity events to the configured SIEM server
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or
  receives Active Directory monitoring events from Netwrix Threat Prevention for integration with
  Netwrix Access Analyzer (formerly Enterprise Auditor)

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![Log Files configuration](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/logfiles.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/data-collection/index.md) topic for additional
information.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![Syslog Properties](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/syslogudp.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/data-collection/index.md) topic for additional
information.

## Add Netwrix Threat Manager Output

**NOTE:** An App Token created by Netwrix Threat Manager is used to authenticate connection between
the applications. See the App Tokens Page topic of the
[Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend) for
additional information.

Follow the steps to add a Netwrix Threat Manager output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Netwrix Threat Manager (StealthDEFEND)** from the drop-down menu. The Add New
Output window opens.

![StealthDEFEND Properties](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/stealthdefendproperties.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/data-collection/index.md) topic for additional
information.

# Output for Monitored Hosts

Once a host is being monitored the event stream can be sent to multiple outputs.

![Output Properties Overview](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/outputpropertiesoverview.webp)

Configured outputs are grouped under the host. You can have multiple outputs configured for a host.
The host event outputs are:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server or Netwrix Threat Manager, where
  supported

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![addnewoutputfile](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/addnewoutputfile.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/data-collection/index.md) topic for additional
information.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![addnewoutputsyslog](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/addnewoutputsyslog.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/data-collection/index.md) topic for additional
information.

# Additional Properties Tab

The Additional Properties tab on an output Properties window is where comments and displayed host
name can be modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts tab and click **Edit** to open the output Properties
window.

![Additional Properties](/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/additionalpropertiestab.webp)

The options are:

- Report hostname as – The value entered here will customize the hostname that is reported for the
  event in the activity log outputs
- Comment – The value entered here will appear in the Comments column in the Monitored Hosts tab
  table.

Often, the Additional Properties Tab is used to indicate the purpose of the output, e.g. for Netwrix
Access Analyzer (formerly Enterprise Auditor). This can be useful if using multiple outputs with
different configurations for different purposes. For example, a SharePoint site could be added as a
host and configured for Netwrix Access Analyzer (formerly Enterprise Auditor) data collection. It
can be added again with different monitoring options and be configured for SIEM notification.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

Integration with Netwrix Threat Prevention for NAS Monitoring

If a Threat Prevention Agent has been deployed to the same Windows proxy server where and activity
agent is deployed to monitor NAS devices, then the **Comment** column in the monitored hosts table
identifies the host as being “Managed by Threat Prevention”, and that ‘monitored host’ configuration
is not editable through the Activity Monitor Console. Simply add the host again for other outputs.

# Log Files Tab

The Log Files tab on an output Properties window is where the activity log settings can be modified.
These settings are initially configured when the output is added.

Select a File output from either the Monitored Domains tab or the Monitored Hosts tab and click
**Edit** to open the output Properties window. The tab varies based on the type of domain/host
selected.

## For Active Directory Domains

The tab contains the following settings:

![logfilesactivedirectory](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/logfilesactivedirectory.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days. The Active Directory activity log settings also affect log size by controlling the
  information recorded per event.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix Access
  Analyzer (formerly Enterprise Auditor)can only read one of them.

- Enable periodic AD Status Check event reporting – Indicates periodic AD Status Check event
  reporting is enabled, which means the agent will send out status messages every five minutes to
  verify whether the connection is still active.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For File Server and NAS Device Hosts

The tab contains the following settings:

![Log File Tab - Windows File servers and NAS devices hosts](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/windowsfilenasdevices.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

  - For integration with Netwrix Access Analyzer (formerly Enterprise Auditor) File System
    Solution, this value must be higher than the number of days between the 0.Collection > 1-FSAC
    System Scans Job scans. See the
    [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
    for additional information.
  - For integration with Netwrix Threat Prevention NAS monitoring, this setting only controls the
    log retention period for NAS devices, as Netwrix Threat Prevention does not read Windows file
    server activity from Activity Monitor.

- Report account names – Indicates if an Account Name column is added in the activity log files
- Add header to Log files – Indicates if headers are added in the activity log filesAdd header to
  Log files – Indicates if headers are added in the activity log files

  **NOTE:** This is needed to feed data into Splunk in a Syslog output. However, Netwrix Access
  Analyzer (formerly Enterprise Auditor) does not support log files with headers. Therefore, do
  not select this option for a File output designed for Netwrix Access Analyzer (formerly
  Enterprise Auditor).

- Report UNC paths – Indicates if a UNC Path column and a Rename UNC Path column are added in the
  activity log files. This option corresponds to the REPORT_UNC_PATH parameter in the INI file. When
  the option is enabled, the added columns are populated when a file is accessed remotely through
  the UNC Path. If a file is accessed locally, these columns are empty.

  - The UNC Path is in the following format:

    - For CIFS activity – The path is in `\\[HOST]\[SHARE]\[PATH]` format, e.g.
      `\\ExampleHost\TestShare\DocTeam\Temp.txt`
    - For NFS activity – The path is in `[HOST]:/[VOLUME]/[PATH] `format, e.g.
      `ExampleHost:/ExampleVolume/DocTeam/Temp.txt`

  **NOTE:** When this option is selected, a warning message might be displayed.

- Report operations with millisecond precision – Indicates the timestamps of events being recorded
  in the activity log file has been changed for better ordering of events if multiple events occur
  within the same second
- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix Access
  Analyzer (formerly Enterprise Auditor)can only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Linux Hosts

The tab contains the following settings:

![Log Files Tab for Linux Hosts](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/linux.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

- Add header to Log files – Indicates if headers are added in the activity log filesAdd header to
  Log files – Indicates if headers are added in the activity log files

  **NOTE:** This is needed to feed data into Splunk in a Syslog output. However, Netwrix Access
  Analyzer (formerly Enterprise Auditor) does not support log files with headers. Therefore, do
  not select this option for a File output designed for Netwrix Access Analyzer (formerly
  Enterprise Auditor).

- Add C:\ to the beginning of the reported file paths – Adds C:\ to the beginning of the reported
  file paths in the activity log file
- Report UNC paths – Indicates if a UNC Path column and a Rename UNC Path column are added in the
  activity log files. This option corresponds to the REPORT_UNC_PATH parameter in the INI file. When
  the option is enabled, the added columns are populated when a file is accessed remotely through
  the UNC Path. If a file is accessed locally, these columns are empty.
- Report operations with millisecond precision – Indicates the timestamps of events being recorded
  in the activity log file has been changed for better ordering of events if multiple events occur
  within the same second
- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix Access
  Analyzer (formerly Enterprise Auditor)can only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Microsoft Entra ID, SharePoint Online, and SQL Server Hosts

The tab contains the following settings:

![Log File Tab - Azure Active Directory](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/azuread.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix Access
  Analyzer (formerly Enterprise Auditor)can only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Hosts

The tab contains the following settings:

![Log File Tab - SharePoint On-Premises hosts](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/sharepointonprem.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Log file format – Indicates the file type used for the activity log. The default is JSON. See
  [SharePoint JSON Log File](/docs/activitymonitor/8.0/data-collection/data-formats/platform-specific-formats.md) topic and the
  [SharePoint TSV Log File](/docs/activitymonitor/8.0/data-collection/data-formats/platform-specific-formats.md) topic for additional information.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix Access
  Analyzer (formerly Enterprise Auditor)can only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

# Objects Tab

The Objects tab on an output Properties window is where monitoring scope by SQL Server objects can
be modified. These settings are initially configured when the output is added.

Select an output for a SQL Server host on the Monitored Hosts tab and click **Edit** to open the
output Properties window.

![Objects Tab](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/objectstab.webp)

The **Refresh** button populates the list of SQL Server objects for the selected host. By default,
all objects are checked and will be monitored. Check and uncheck objects as desired.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

# Operations Tab

The Operations tab on an output Properties window is where monitoring scope by operation can be
modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts tab and click **Edit** to open the output Properties
window. The tab varies based on the type of host selected.

## For Linux Hosts

The tab contains the following settings and features:

![linux](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/linux.webp)

Use the options in the Operations tab to filter the list of available audit activities. The options
are:

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Microsoft Entra ID Hosts

The tab contains the following settings and features:

![Host Properties - Azure AD Operations tab](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/azureadoperationstab.webp)

- Monitor Sign-Ins activity – Indicates if user sign-ins activity is monitored
- Monitor Audit activity – Indicates if audit for all operations is monitored
- Service – Filter the table by Service using the drop-down menu
- Category – Filter the table by Category using the drop-down menu
- Operation – Filter the table by Operation using the textbox

The table lists operations being monitored, displaying columns for Service, Category, and Operation.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Nasuni Hosts

The tab contains the following settings and features:

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List
- Link Operations – Scope by link operation events: Add, Delete
- Suppress reporting of File Explorer's excessive directory traversal activity – When you open a
  folder, Windows File Explorer tends to read all sub-folders to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read / List option for Directory Operations is
  selected.
- Suppress reporting of File Explorer's excessive file read activity – When you open a folder,
  Windows File Explorer tends to read files in the folder to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read option for File Operations is selected.
- Suppress Microsoft Office operations on temporary files – Filters out events for Microsoft Office
  temporary files. When Microsoft Office files are saved or edited, many temporary files are
  created. With this option enabled, events for these temporary files are ignored.
- Suppress operations on common temporary files – Filters out events for common temporary files.
  With this option enabled, events for these common temporary files are ignored.
- Suppress duplicate operations for [VALUE] seconds

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Nutanix Hosts

The tab contains the following settings and features:

![operations](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission change

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Qumulo Hosts

The tab contains the following settings and features:

![qumulooutputproperties](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/qumulooutputproperties.webp)

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List
- Share Operations – Scope by share operation events: Add, Delete, Update, Read / Connect
- Suppress operations on common temporary files – Filters out events for common temporary files.
  With this option enabled, events for these common temporary files are ignored.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Host

The tab contains the following settings and features:

![Operations Tab for SharePoint](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/sp.webp)

- SharePoint operations – Scope by SharePoint operation events: Check-Out, View, Update, Child
  Delete, Undelete, Copy, Audit Mask Change, Child Move, Custom, Check-In, Delete, Profile Change,
  Schema Change, Workflow, Move, Search, File Fragment Write
- Permission Operations – Scope by permission operation events: Creation of a user group, Addition
  of a new member to a group, creation of a new role, Changing a role, Changing the permissions of a
  user or group, Turning off inheritance of security settings, Granting App Permissions, Deletion of
  a group, Deletion of a member from a group, Removal of a role, Turning off inheritance of role,
  Turning on inheritance of security settings, Deletion of audited events, Revoking App Permissions

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Online Host

The tab contains a subset of tabs. Each tab has a **Select All** check box to include all events for
that tab.

![Operations Tab for SharePoint Online Properties](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operationstab.webp)

You can scope by the following events:

| Tab                        | Event                                         |
| -------------------------- | --------------------------------------------- |
| Content Explorer           | Accessed item                                 |
| DLP                        | Designated false positive                     |
| DLP                        | Matched DLP rule                              |
| DLP                        | Undone DLP action                             |
| File and Page              | Accessed File                                 |
| File and Page              | Accessed File (ext)                           |
| File and Page              | Changed compliance policy label               |
| File and Page              | Changed record status to locked               |
| File and Page              | Changed record status to unlocked             |
| File and Page              | Checked in file                               |
| File and Page              | Checked out file                              |
| File and Page              | Copied file                                   |
| File and Page              | Deleted file                                  |
| File and Page              | Deleted file from recycle bin                 |
| File and Page              | Deleted file from second-stage recycle bin    |
| File and Page              | Deleted record compliance policy label        |
| File and Page              | Detected document sensitivity mismatch        |
| File and Page              | Detected malware in file                      |
| File and Page              | Discarded file checkout                       |
| File and Page              | Downloaded file                               |
| File and Page              | Modified file                                 |
| File and Page              | Modified file (ext)                           |
| File and Page              | Moved file                                    |
| File and Page              | Performed search query                        |
| File and Page              | Prefetched page                               |
| File and Page              | Previewed file                                |
| File and Page              | Recycled all minor versions of file           |
| File and Page              | Recycled all versions of file                 |
| File and Page              | Recycled version of file                      |
| File and Page              | Renamed file                                  |
| File and Page              | Restored file                                 |
| File and Page              | Uploaded file                                 |
| File and Page              | View signaled by client                       |
| File and Page              | Viewed page                                   |
| File and Page              | Viewed page (ext)                             |
| Folder                     | Copied folder                                 |
| Folder                     | Created folder                                |
| Folder                     | Deleted folder                                |
| Folder                     | Deleted folder from recycle bin               |
| Folder                     | Deleted folder from second-stage recycle bin  |
| Folder                     | Modified folder                               |
| Folder                     | Moved folder                                  |
| Folder                     | Renamed folder                                |
| Folder                     | Restored folder                               |
| List                       | Created list                                  |
| List                       | Created list column                           |
| List                       | Created list column                           |
| List                       | Created list content type                     |
| List                       | Created list item                             |
| List                       | Created site column                           |
| List                       | Created site content type                     |
| List                       | Deleted list                                  |
| List                       | Deleted list column                           |
| List                       | Deleted list content type                     |
| List                       | Deleted list item                             |
| List                       | Deleted site column                           |
| List                       | Deleted site content type                     |
| List                       | Recycled list item                            |
| List                       | Restored list                                 |
| List                       | Restored list item                            |
| List                       | Updated list                                  |
| List                       | Updated list column                           |
| List                       | Updated list content type                     |
| List                       | Updated list item                             |
| List                       | Updated site column                           |
| List                       | Updated site content type                     |
| Other                      | Other events                                  |
| Sensitive Label            | Applied sensitivity label to file             |
| Sensitive Label            | Applied sensitivity label to site             |
| Sensitive Label            | Changed sensitivity label applied to file     |
| Sensitive Label            | Removed sensitivity label from file           |
| Sensitive Label            | Removed sensitivity label from site           |
| Sharing and Access Request | Accepted access request                       |
| Sharing and Access Request | Accepted sharing invitation                   |
| Sharing and Access Request | Added permission level to site collection     |
| Sharing and Access Request | Blocked sharing invitation                    |
| Sharing and Access Request | Created a company shareable link              |
| Sharing and Access Request | Created access request                        |
| Sharing and Access Request | Created an anonymous link                     |
| Sharing and Access Request | Created secure link                           |
| Sharing and Access Request | Created sharing invitation                    |
| Sharing and Access Request | Deleted secure link                           |
| Sharing and Access Request | Denied access request                         |
| Sharing and Access Request | Removed a company shareable link              |
| Sharing and Access Request | Removed an anonymous link                     |
| Sharing and Access Request | Shared file, folder, or site                  |
| Sharing and Access Request | Unshared file, folder, or site                |
| Sharing and Access Request | Updated access request                        |
| Sharing and Access Request | Updated an anonymous link                     |
| Sharing and Access Request | Updated sharing invitation                    |
| Sharing and Access Request | Used a company shareable link                 |
| Sharing and Access Request | Used an anonymous link                        |
| Sharing and Access Request | Used secure link                              |
| Sharing and Access Request | User added to secure link                     |
| Sharing and Access Request | User removed from secure link                 |
| Sharing and Access Request | Withdrew sharing invitation                   |
| Site Administration        | Added allowed data location                   |
| Site Administration        | Added exempt user agent                       |
| Site Administration        | Added geo location admin                      |
| Site Administration        | Allowed user to create groups                 |
| Site Administration        | Canceled site geo move                        |
| Site Administration        | Changed a sharing policy                      |
| Site Administration        | Changed device access policy                  |
| Site Administration        | Changed exempt user agents                    |
| Site Administration        | Changed network access policy                 |
| Site Administration        | Completed site geo move                       |
| Site Administration        | Created Sent To connection                    |
| Site Administration        | Created site collection                       |
| Site Administration        | Deleted orphaned hub site                     |
| Site Administration        | Deleted Sent To connection                    |
| Site Administration        | Deleted site                                  |
| Site Administration        | Enabled document preview                      |
| Site Administration        | Enabled legacy workflow                       |
| Site Administration        | Enabled Office on Demand                      |
| Site Administration        | Enabled result source for People Searches     |
| Site Administration        | Enabled RSS feeds                             |
| Site Administration        | Joined site to hub site                       |
| Site Administration        | Registered hub site                           |
| Site Administration        | Removed allowed data location                 |
| Site Administration        | Removed geo location admin                    |
| Site Administration        | Renamed site                                  |
| Site Administration        | Scheduled site geo move                       |
| Site Administration        | Set host site                                 |
| Site Administration        | Set storage quota for geo location            |
| Site Administration        | Unjoined site from hub site                   |
| Site Administration        | Unregistered hub site                         |
| Site Permissions           | Added site collection admin                   |
| Site Permissions           | Added user or group to SharePoint group       |
| Site Permissions           | Broke permission level inheritance            |
| Site Permissions           | Broke sharing inheritance                     |
| Site Permissions           | Created group                                 |
| Site Permissions           | Deleted group                                 |
| Site Permissions           | Modified access request setting               |
| Site Permissions           | Modified 'Members Can Share' setting          |
| Site Permissions           | Modified permissions level on site collection |
| Site Permissions           | Modified site permissions                     |
| Site Permissions           | Removed permission level from site collection |
| Site Permissions           | Removed site collection admin                 |
| Site Permissions           | Removed user or group from SharePoint group   |
| Site Permissions           | Requested site admin permissions              |
| Site Permissions           | Restored sharing inheritance                  |
| Site Permissions           | Updated group                                 |
| Synchronization            | Allowed computer to sync files                |
| Synchronization            | Blocked computer from syncing files           |
| Synchronization            | Downloaded file changes to computer           |
| Synchronization            | Downloaded files to computer                  |
| Synchronization            | Uploaded file changes to document library     |
| Synchronization            | Uploaded files to document library            |

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SQL Server Hosts

The tab contains the following settings and features:

![sql](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/sql.webp)

- DML operations – Scope by DML operation events: Select, Update, Merge, Insert, Delete, Execute
- Audit operations – Scope by audit operation events: Login, Logout, Login Failed, Error
- Permission operations – Scope by permission operation events: Grant, Deny, Revoke, Alter Role
- Suppress subsequent logon/logout events from the same user in [VALUE] minutes interval

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Windows File Server Hosts

The tab contains the following settings and features:

![Operations Tab for File System](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/fs.webp)

- Operation Type – Scope events by operation type:

  - All – Both allowed and denied operations
  - Allowed only – Only allowed operations
  - Denied only – Only denied operations

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List
- Share Operations – Scope by share operation events: Add, Delete, Update, Permission change
- VSS Operations – Scope by VSS operation events: Snapshot add, Snapshot delete, Read
- Suppress reporting of File Explorer's excessive directory traversal activity – When you open a
  folder, Windows File Explorer tends to read all sub-folders to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read / List option for Directory Operations is
  selected.
- Suppress reporting of File Explorer's excessive file read activity – When you open a folder,
  Windows File Explorer tends to read files in the folder to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read option for File Operations is selected.
- Suppress Permission Change operations with reordered ACL – Prevents tracking events where
  permission updates occurred resulting in reordered ACEs, but with no other changes in the ACL
- Suppress Inherited Permissions Changes – Prevents tracking events where changes for inherited
  permissions occurred. This option is provided to improve overall performance and reduce output log
  volume.
- Suppress Microsoft Office operations on temporary files – Filters out events for Microsoft Office
  temporary files. When Microsoft Office files are saved or edited, many temporary files are
  created. With this option enabled, events for these temporary files are ignored.
- Suppress operations on common temporary files – Filters out events for common temporary files.
  With this option enabled, events for these common temporary files are ignored.
- Suppress duplicate operations for [VALUE] seconds

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

See[Suppress Windows Explorer Activity](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md) topic for more information.

# Protocols Tab

The Protocols tab on an output Properties window is where monitoring scope by protocol can be
modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts tab and click **Edit** to open the output Properties
window.

![Protocols Tab](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/protocolstab.webp)

The tab contains the following settings:

- Protocols – Indicates if **All** protocols, only **CIFS** protocols, or only **NFS** protocols are
  included

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

# Message Template Window

The Message Template window is opened from the ellipsis (…) button for the Syslog Message Template
field on the Syslog tab of the output Properties window.

![Message Template window](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/window/syslogmessagetemplate.webp)

You can select a preconfigured template from the drop-down menu or create a custom template. The
available preconfigured templates vary based on the type of domain/host selected.

## For Monitored Domains

Monitored Domains Syslog outputs have the following preconfigured Templates:

- V 1.0 for AlienVault SIEM
- V 1.0 for Generic CEF SIEM – Incorporates the CEF message format
- V 1.0 for Generic LEEF SIEM – Incorporates the LEEF message format
- V 1.0 for Generic SYSLOG SIEM
- V 1.0 for HP ArcSight SIEM
- V 1.0 for LogRhythm SIEM
- V 1.0 for McAfee ESM SIEM
- V 1.0 for IBM QRadar SIEM
- V 1.0 for Splunk SIEM
- V 2.0 for IBM QRadar SIEM 7.2.4
- V 2.0 for Splunk SIEM

Custom templates can be created. Select the desired template or create a new template by modifying
an existing template within the Message Template window. The new message template will be named
Custom. Macro variables are also available to customize the Syslog message template.

Macro Variables for Monitored Domains

Macros are text strings that are replaced with actual values at run time. The following Macro
variables are available to customize the Syslog message template:

| Variable                       | Definition                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------ |
| %AFFECTED_OBJECT_ACCOUNT_NAME% | Affected Object Name                                                                 |
| %AFFECTED_OBJECT_SID%          | Affected Object SID                                                                  |
| %ATTRIBUTE_NAME%               | Attribute Name                                                                       |
| %ATTRIBUTE_VALE%               | New Attribute Value                                                                  |
| %BLOCKED_EVENT%                | True if the operation was denied, False otherwise                                    |
| %CLASS_NAME%                   | Class Name                                                                           |
| %COMPANY%                      | Company Name                                                                         |
| %DN%                           | Distinguished Name of the Affected Object                                            |
| %ERTYPE_ID%                    | Event Type ID                                                                        |
| %EVENT_CODE%                   | Code                                                                                 |
| %EVENT_NAME%                   | Event Name                                                                           |
| %EVENT_SOURCE_NAME%            | Event Source Name                                                                    |
| %EVENT_SOURCE_TYPE%            | Event Source Type                                                                    |
| %EVENTNAMETRANSLATED%          | Translated Event Name                                                                |
| %EVENTS_COUNT%                 | Consolidated Events Count                                                            |
| %HOST%                         | Message Source Hostname                                                              |
| %OLD_ATTRIBUTE_VALUE%          | Old Attribute Value                                                                  |
| %OPERATION%                    | Operation Performed                                                                  |
| %ORIGINATING_CLIENT%           | Originating Client                                                                   |
| %ORIGINATING_SERVER%           | Originating Server                                                                   |
| %ORIGINATING_SERVERIP%         | Originating Server IP Address                                                        |
| %ORIGINATINGCLIENTHOST%        | Originating Server Host Name                                                         |
| %ORIGINATINGCLIENTIP%          | Originating Client IP Address                                                        |
| %ORIGINATINGCLIENTMAC%         | Originating Client MAC                                                               |
| %ORIGINATINGCLIENTPROTOCOL%    | Originating Client Protocol                                                          |
| %PERMISSIONS_SDDL_DESCRIPTION% | Windows only: Permission change details in readable format                           |
| %PERPETRATOR%                  | Perpetrator                                                                          |
| %PERPETRATOR_NAME%             | Perpetrator Name                                                                     |
| %PERPETRATOR_SID%              | Perpetrator SID                                                                      |
| %USERNAME%                     | 'Username' part of the %PERPETRATOR_NAME% field if it is in 'DOMAIN\Username' format |
| %PRODUCT%                      | Product Name                                                                         |
| %PRODUCT_VERSION%              | Product Version                                                                      |
| %SETTING_NAME%                 | Setting Name                                                                         |
| %SUCCESS%                      | Success                                                                              |
| %STATUS%                       | Status                                                                               |
| %SYSLOG_DATE%                  | Current Date Time in Syslog Format                                                   |
| %SYSLOG_EVENTID%               | Syslog Event ID                                                                      |
| %TARGETHOST%                   | Target Host                                                                          |
| %TARGETHOSTIP%                 | Target Host IP                                                                       |
| %TIME_STAMP%                   | Date Timestamp of Event                                                              |
| %TIME_STAMP_UTC%               | Date Timestamp of Event in UTC                                                       |

## For Monitored Hosts

Monitored Hosts Syslog outputs have the following preconfigured Templates:

- AlienVault / Generic Syslog
- CEF – Incorporates the CEF message format
- HP Arcsight
- LEEF – Incorporates the LEEF message format
- LogRhythm
- McAfee
- QRadar – Use this template for IBM QRadar integration. See the
  [Netwrix File Activity Monitor App for QRadar](/docs/activitymonitor/8.0/integrations/siem/qradar.md) topic for
  additional information.
- Splunk – Use this template for Splunk integration. See the Configure the
  [File Activity Monitor App for Splunk](/docs/activitymonitor/8.0/integrations/siem/splunk.md) topic for additional
  information.
- Netwrix Threat Manager (StealthDEFEND) – Use this template for Netwrix Threat Manager integration.
  This is the only supported template for Threat Manager.

Custom templates can be created. Select the desired template or create a new template by modifying
an existing template within the Message Template window. The new message template will be named
Custom. Macro variables are also available to customize the Syslog message template.

Macro Variables

Macros are text strings that are replaced with actual values at run time. Not all macro variables
are applicable to all environment types. The following Macro variables are available to customize
the Syslog message template:

| Environment                                             | Variable                       | Definition                                                                                                                                 |
| ------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| SharePoint Online                                       | %ABSOLUTE_URL%                 | Absolute URL of the affected object                                                                                                        |
| SharePoint Online                                       | %ACCESS%                       | Access granted by the sharing operation                                                                                                    |
| SharePoint                                              | %APPPRINCIPAL_ID%              | App Principal ID                                                                                                                           |
| File Servers & NAS Devices                              | %ATTRIBUTE_NAME%               | Rename events only: Fixed string: Filename                                                                                                 |
| File Servers & NAS Devices                              | %ATTRIBUTE_VALUE%              | Rename events only: New file path                                                                                                          |
| File Servers & NAS Devices SharePoint                   | %BLOCKED_EVENT%                | True if the operation was denied, False otherwise                                                                                          |
| SharePoint SharePoint Online                            | %CLIENT_IP%                    | IP address of the user                                                                                                                     |
| File Servers & NAS Devices SharePoint SharePoint Online | %COMPANY%                      | Fixed string: Stealthbits                                                                                                                  |
| SharePoint Online                                       | %CUSTOM_EVENT%                 | Custom Event information                                                                                                                   |
| SharePoint Online                                       | %DEST_FILE_EXT%                | New file extension of copied or moved file                                                                                                 |
| SharePoint Online                                       | %DEST_FILENAME%                | Name of the file that is copied or moved                                                                                                   |
| SharePoint Online                                       | %DEST_RELATIVE_PATH%           | URL of the destination folder where a folder is copied or moved                                                                            |
| SharePoint Online                                       | %DLP_EXCEPTION%                | Reasons why a policy no longer applies and any information about false positive or override                                                |
| SharePoint Online                                       | %DLP_POLICY%                   | Policy(s) that triggered the event                                                                                                         |
| SharePoint Online                                       | %DLP_SENSITIVE%                | Indicates whether the event contains the value of the sensitive data type (true/false)                                                     |
| SharePoint SharePoint Online                            | %DOC_LOCATION%                 | A relative URL of the file or document accessed by the user                                                                                |
| SharePoint SharePoint Online                            | %EVENT_DATA%                   | - For SharePoint, raw event data - Fore SharePoint Online, additional event data                                                           |
| File Servers & NAS Devices                              | %EVENT_NAME%                   | Operation type: Read/Create/Update/Delete/Access Rights Change/ Rename/ `<empty>`. The same as %OPERATION%                                 |
| SharePoint SharePoint Online                            | %EVENT_SOURCE%                 | Originating source of the event (SharePoint or ObjectModel)                                                                                |
| File Servers & NAS Devices                              | %EVENT_SOURCE_NAME%            | Domain name                                                                                                                                |
| SharePoint SharePoint Online                            | %EVENT_TYPE%                   | Event type                                                                                                                                 |
| File Servers & NAS Devices                              | %FILE_NAME%                    | File name                                                                                                                                  |
| File Servers & NAS Devices                              | %FILE_PATH%                    | Full path                                                                                                                                  |
| File Servers & NAS Devices                              | %FILE_SIZE%                    | Size of File                                                                                                                               |
| File Servers & NAS Devices                              | %FILE_TYPE%                    | File extension                                                                                                                             |
| SharePoint                                              | %FULL_PATH%                    | Full Path                                                                                                                                  |
| File Servers & NAS Devices SharePoint SharePoint Online | %HOST%                         | Hostname of Agent                                                                                                                          |
| SharePoint Online                                       | %ID%                           | Unique ID of the audit record                                                                                                              |
| File Servers & NAS Devices                              | %IO_TYPE%                      | Type of I/O: Filesystem/VSS                                                                                                                |
| SharePoint                                              | %ITEM_ID%                      | Item ID                                                                                                                                    |
| SharePoint SharePoint Online                            | %ITEM_TITLE%                   | Item title                                                                                                                                 |
| SharePoint SharePoint Online                            | %ITEM_TYPE%                    | Item type (File, Folder, Web, Site, Tenant, DocumentLibrary, Page)                                                                         |
| SharePoint Online                                       | %LIST_ID%                      | ID of the List                                                                                                                             |
| SharePoint Online                                       | %LIST_ITEM_ID%                 | ID of the List Item                                                                                                                        |
| SharePoint Online                                       | %LIST_NAME%                    | Name of the List                                                                                                                           |
| SharePoint Online                                       | %LIST_URL%                     | URL of the List                                                                                                                            |
| SharePoint                                              | %LOCATION_TYPE%                | Location type of the SharePoint document location                                                                                          |
| SharePoint Online                                       | %MACHINE_DOMAIN_INFO%          | Information about device sync operation                                                                                                    |
| SharePoint Online                                       | %MACHINE_ID%                   | Information about device sync operation                                                                                                    |
| SharePoint Online                                       | %NEW_DOC_LOCATION%             | A relative URL to which the object is copied or moved                                                                                      |
| File Servers & NAS Devices                              | %NEW_FILE_NAME%                | Rename event only: New file name                                                                                                           |
| File Servers & NAS Devices                              | %NEW_FILE_PATH%                | Rename event only: New full path                                                                                                           |
| File Servers & NAS Devices                              | %NEW_FILE_TYPE%                | New File Extension                                                                                                                         |
| File Servers & NAS Devices                              | %OBJECT_TYPE%                  | Object type: FILE/FOLD/UNK                                                                                                                 |
| File Servers & NAS Devices                              | %OLD_ATTRIBUTE_VALUE%          | Rename only: Old file path                                                                                                                 |
| File Servers & NAS Devices                              | %OPERATION%                    | Operation type: Read/Create/Update/Delete/Access Rights Change/Rename/Unknown                                                              |
| SharePoint Online                                       | %ORGANIZATION_ID%              | Organization tenant ID                                                                                                                     |
| File Servers & NAS Devices                              | %ORIGINATING_CLIENT%           | IP Address of originating client or process name                                                                                           |
| File Servers & NAS Devices                              | %ORIGINATING_CLIENT_HOST%      | Hostname of originating client                                                                                                             |
| File Servers & NAS Devices                              | %ORIGINATING_SERVER%           | Hostname of monitored host                                                                                                                 |
| File Servers & NAS Devices                              | %ORIGINTAING_SERVER_IP%        | IP Address of monitored host                                                                                                               |
| SharePoint                                              | %PARAM%                        | Parameters that come with the event                                                                                                        |
| SharePoint                                              | %PATH%                         | Truncated path                                                                                                                             |
| File Servers & NAS Devices                              | %PERMISSIONS_SDDL_DESCRIPTION% | Windows events only: Permission change details in readable format                                                                          |
| File Servers & NAS Devices                              | %PERMISSIONS_SDDL_DIFF%        | Windows events only: Permission change details in SDDL format, '`<REMOVED>` `<ADDED>`'                                                     |
| File Servers & NAS Devices                              | %PERPETRATOR%                  | User name                                                                                                                                  |
| File Servers & NAS Devices SharePoint SharePoint Online | %PRODUCT%                      | Fixed string: Activity Monitor                                                                                                             |
| File Servers & NAS Devices SharePoint SharePoint Online | %PRODUCT_VERSION%              | Product Version                                                                                                                            |
| File Servers & NAS Devices SharePoint SharePoint Online | %PROTOCOL%                     | Protocol type: CIFS/NFS/VSS/FTP/HDFS/HTTP/HTTPS/Unknown                                                                                    |
| File Servers & NAS Devices                              | %PROTOCOL_VERSION%             | NetApp Data ONTAP Cluster-Mode device events only: Protocol Version                                                                        |
| File Servers & NAS Devices                              | %RENAMEUNCPATH%                | Rename events only: New UNC path / New NFS export path                                                                                     |
| SharePoint Online                                       | %RESULT_STATUS%                | Succeeded, PartiallySucceeded, Failed, True, or False                                                                                      |
| SharePoint Online                                       | %SCOPE%                        | online or onprem                                                                                                                           |
| SharePoint Online                                       | %SHARING_ID%                   | Unique ID of the sharing operation                                                                                                         |
| SharePoint SharePoint Online                            | %SITE_ID%                      | ID of the Site                                                                                                                             |
| SharePoint Online                                       | %SITE_NAME%                    | Name of the Site                                                                                                                           |
| SharePoint SharePoint Online                            | %SITE_URL%                     | URL of the Site                                                                                                                            |
| SharePoint Online                                       | %SOURCE%                       | Source (SharePoint, SharePointFileOperation, …)                                                                                            |
| SharePoint Online                                       | %SOURCE_FILE_EXT%              | File extension                                                                                                                             |
| SharePoint Online                                       | %SOURCE_FILENAME%              | File or folder name                                                                                                                        |
| SharePoint                                              | %SOURCE_NAME%                  | Source Name                                                                                                                                |
| SharePoint Online                                       | %SOURCE_RELATIVE_PATH%         | URL of the folder that contains the file accessed by the user                                                                              |
| File Servers & NAS Devices SharePoint SharePoint Online | %SUCCESS%                      | True if the operation was allowed, False otherwise                                                                                         |
| File Servers & NAS Devices SharePoint SharePoint Online | %SYSLOG_DATE%                  | Timestamp of event (server time, Syslog format: MMM dd HH:mm:ss)                                                                           |
| File Servers & NAS Devices                              | %TAGS%                         | Operation Tags. Reports 'Copy' for events that are probable copies                                                                         |
| SharePoint Online                                       | %TARGET_NAME%                  | UPN or name of the target user or group that a resource was shared with                                                                    |
| SharePoint Online                                       | %TARGET_TYPE%                  | Type of target user or group that a resource was shared with (Member, Guest, Group, or Partner)                                            |
| File Servers & NAS Devices SharePoint SharePoint Online | %TIME_STAMP%                   | Timestamp of event (server time, format: yyyy-MM-dd HH:mm:ss.zzz)                                                                          |
| SharePoint Online                                       | %TIME_STAMP_OFFSET%            | Timestamp of event with timezone offset (server time, format: yyyy-MM-ddTHH:mm:ss.zz+HH:mm)                                                |
| File Servers & NAS Devices SharePoint SharePoint Online | %TIME_STAMP_UTC%               | Timestamp of event (UTC, format: yyyy-MM-dd HH:mm:ss.zzz)                                                                                  |
| SharePoint Online                                       | %TIME_STAMP_Z%                 | Timestamp of event (UTC, format: yyyy-MM-ddTHH:mm:ss.zzZ)                                                                                  |
| File Servers & NAS Devices                              | %UNCPATH%                      | UNC path / NFS export path                                                                                                                 |
| SharePoint Online                                       | %UPDATE_TYPE%                  | Added, Removed, or Updated                                                                                                                 |
| SharePoint Online                                       | %USER_AGENT%                   | User client or browser                                                                                                                     |
| SharePoint SharePoint Online                            | %USER_ID%                      | - For SharePoint, ID of the SharePoint user - For SharePoint Online, UPN of the user who performed the operation                           |
| SharePoint SharePoint Online                            | %USER_LOGIN%                   | - For SharePoint, SharePoint User Login / Encoded Claim - For SharePoint Online, An alternative ID of the user. "DlpAgent" for DLP events. |
| SharePoint SharePoint Online                            | %USER_NAME%                    | SharePoint user name                                                                                                                       |
| File Servers & NAS Devices SharePoint                   | %USER_SID%                     | User SID or UID                                                                                                                            |
| SharePoint Online                                       | %USER_TYPE%                    | Type of the user performed the operation                                                                                                   |
| SharePoint Online                                       | %VERSION%                      | New version of the document/version of deleted document                                                                                    |
| SharePoint                                              | %WEB_APPLICATION_NAME%         | Title of the SharePoint Web Application                                                                                                    |
| SharePoint SharePoint Online                            | %WEB_TITLE%                    | Title of the Site Collection                                                                                                               |
| SharePoint Online                                       | %WORKLOAD%                     | Office 356 service where the activity occurred                                                                                             |
