# Output Types

Once a domain or a host is being monitored the event stream can be sent to multiple outputs. There
are three types of outputs:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server For Monitored Hosts, this options is
  also used to send activity events to Netwrix Threat Manager, where supported
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or
  receives Active Directory monitoring events from Netwrix Threat Prevention for integration with
  Netwrix Enterprise Auditor

  **NOTE:** This output is only available for Monitored Domains

See the
[Output for Monitored Domains](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
topic and the
[Output for Monitored Hosts](/docs/activitymonitor/7.1/administration/monitored-resources/hosts.md)
topic for information on adding an output.

Output configurations vary based on the type of domain/host selected.

## For Active Directory Domains

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only
- [Threat Manager Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/threat-manager.md),
  Netwrix Threat Manageroutput only

## For Dell Device Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Protocols Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Exchange Online Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- Application Exclusions Tab
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- Mailbox Exclusions Tab
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Hitachi Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Linux Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [GID Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Protocols Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Microsoft Entra ID Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Nasuni Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Protocols Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For NetApp Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Protocols Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Nutanix Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Protocols Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Panzura Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Qumulo Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Protocols Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For SharePoint Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For SharePoint Online Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For SQL Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Objects Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

## For Windows File Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Log Files Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md),
  File output only
- [Operations Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Protocols Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md)
- [Process Exclusions Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
- [Syslog Tab](/docs/activitymonitor/7.1/administration/outputs-and-logging/syslog.md), Syslog
  output only

# Log Files Tab

The Log Files tab on an output Properties window is where the activity log settings can be modified.
These settings are initially configured when the output is added.

Select a File output from either the Monitored Domains tab or the Monitored Hosts tab and click
**Edit** to open the output Properties window. The tab varies based on the type of domain/host
selected.

## For Active Directory Domains

The tab contains the following settings:

![logfilesactivedirectory](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfilesactivedirectory.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days. The Active Directory activity log settings also affect log size by controlling the
  information recorded per event.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

- This log file is for Netwrix Enterprise Auditor (StealthAUDIT) – Indicates whether Netwrix
  Enterprise Auditor collect the data from this configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix
  Enterprise Auditorcan only read one of them.

- Enable periodic AD Status Check event reporting – Indicates periodic AD Status Check event
  reporting is enabled, which means the agent will send out status messages every five minutes to
  verify whether the connection is still active.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For File Server and NAS Device Hosts

The tab contains the following settings:

![Log File Tab - Windows File servers and NAS devices hosts](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/windowsfilenasdevices.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

  - For integration with Netwrix Enterprise Auditor File System Solution, this value must be
    higher than the number of days between the 0.Collection > 1-FSAC System Scans Job scans. See
    the
    [Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
    for additional information.
  - For integration with Netwrix Threat Prevention NAS monitoring, this setting only controls the
    log retention period for NAS devices, as Netwrix Threat Prevention does not read Windows file
    server activity from Activity Monitor.

- Report account names – Indicates if an Account Name column is added in the activity log files
- Add header to Log files – Indicates if headers are added in the activity log filesAdd header to
  Log files – Indicates if headers are added in the activity log files

  **NOTE:** This is needed to feed data into Splunk in a Syslog output. However, Netwrix
  Enterprise Auditor does not support log files with headers. Therefore, do not select this option
  for a File output designed for Netwrix Enterprise Auditor.

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
- This log file is for Netwrix Enterprise Auditor (StealthAUDIT) – Indicates whether Netwrix
  Enterprise Auditor collect the data from this configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix
  Enterprise Auditorcan only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Linux Hosts

The tab contains the following settings:

![Log Files Tab for Linux Hosts](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/linux.webp)

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

  **NOTE:** This is needed to feed data into Splunk in a Syslog output. However, Netwrix
  Enterprise Auditor does not support log files with headers. Therefore, do not select this option
  for a File output designed for Netwrix Enterprise Auditor.

- Add C:\ to the beginning of the reported file paths – Adds C:\ to the beginning of the reported
  file paths in the activity log file
- Report UNC paths – Indicates if a UNC Path column and a Rename UNC Path column are added in the
  activity log files. This option corresponds to the REPORT_UNC_PATH parameter in the INI file. When
  the option is enabled, the added columns are populated when a file is accessed remotely through
  the UNC Path. If a file is accessed locally, these columns are empty.
- Report operations with millisecond precision – Indicates the timestamps of events being recorded
  in the activity log file has been changed for better ordering of events if multiple events occur
  within the same second
- This log file is for Netwrix Enterprise Auditor (StealthAUDIT) – Indicates whether Netwrix
  Enterprise Auditor collect the data from this configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix
  Enterprise Auditorcan only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Microsoft Entra ID, SharePoint Online, and SQL Server Hosts

The tab contains the following settings:

![Log File Tab - Azure Active Directory](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/azuread.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

- This log file is for Netwrix Enterprise Auditor (StealthAUDIT) – Indicates whether Netwrix
  Enterprise Auditor collect the data from this configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix
  Enterprise Auditorcan only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Hosts

The tab contains the following settings:

![Log File Tab - SharePoint On-Premises hosts](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/sharepointonprem.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Log file format – Indicates the file type used for the activity log. The default is JSON. See
  [SharePoint JSON Log File](/docs/activitymonitor/7.1/reference/file-output-formats.md) topic
  and the
  [SharePoint TSV Log File](/docs/activitymonitor/7.1/reference/file-output-formats.md)
  topic for additional information.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

  **NOTE:** This setting effects activity log retention whether or not the archiving feature is
  enabled.

  **_RECOMMENDED:_** Keep a minimum of 10 days of activity logs. Raw activity logs should be
  retained to meet an organization’s audit requirements.

- This log file is for Netwrix Enterprise Auditor (StealthAUDIT) – Indicates whether Netwrix
  Enterprise Auditor collect the data from this configured output

  **NOTE:** While the Activity Monitor can have multiple configurations per host, Netwrix
  Enterprise Auditorcan only read one of them.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

# Additional Properties Tab

The Additional Properties tab on an output Properties window is where comments and displayed host
name can be modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts tab and click **Edit** to open the output Properties
window.

![Additional Properties](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/additionalpropertiestab.webp)

The options are:

- Report hostname as – The value entered here will customize the hostname that is reported for the
  event in the activity log outputs
- Comment – The value entered here will appear in the Comments column in the Monitored Hosts tab
  table.

Often, the Additional Properties Tab is used to indicate the purpose of the output, e.g. for Netwrix
Enterprise Auditor. This can be useful if using multiple outputs with different configurations for
different purposes. For example, a SharePoint site could be added as a host and configured for
Netwrix Enterprise Auditor data collection. It can be added again with different monitoring options
and be configured for SIEM notification.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

Integration with Netwrix Threat Prevention for NAS Monitoring

If a Threat Prevention Agent has been deployed to the same Windows proxy server where and activity
agent is deployed to monitor NAS devices, then the **Comment** column in the monitored hosts table
identifies the host as being “Managed by Threat Prevention”, and that ‘monitored host’ configuration
is not editable through the Activity Monitor Console. Simply add the host again for other outputs.

# Objects Tab

The Objects tab on an output Properties window is where monitoring scope by SQL Server objects can
be modified. These settings are initially configured when the output is added.

Select an output for a SQL Server host on the Monitored Hosts tab and click **Edit** to open the
output Properties window.

![Objects Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/objectstab.webp)

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

![linux](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/linux.webp)

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

![Host Properties - Azure AD Operations tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/azureadoperationstab.webp)

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

![operations](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission change

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Qumulo Hosts

The tab contains the following settings and features:

![qumulooutputproperties](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/qumulooutputproperties.webp)

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

![Operations Tab for SharePoint](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/sp.webp)

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

![Operations Tab for SharePoint Online Properties](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operationstab.webp)

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

![sql](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/sql.webp)

- DML operations – Scope by DML operation events: Select, Update, Merge, Insert, Delete, Execute
- Audit operations – Scope by audit operation events: Login, Logout, Login Failed, Error
- Permission operations – Scope by permission operation events: Grant, Deny, Revoke, Alter Role
- Suppress subsequent logon/logout events from the same user in [VALUE] minutes interval

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Windows File Server Hosts

The tab contains the following settings and features:

![Operations Tab for File System](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/fs.webp)

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

See[Suppress Windows Explorer Activity](/docs/activitymonitor/7.1/administration/outputs-and-logging/filtering-and-exclusions.md)
topic for more information.

# Protocols Tab

The Protocols tab on an output Properties window is where monitoring scope by protocol can be
modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts tab and click **Edit** to open the output Properties
window.

![Protocols Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocolstab.webp)

The tab contains the following settings:

- Protocols – Indicates if **All** protocols, only **CIFS** protocols, or only **NFS** protocols are
  included

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.
