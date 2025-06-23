---
title: Generic SIEM Integration
sidebar_label: Generic SIEM
description: Configure generic SIEM integration with Netwrix Auditor for flexible security information and event management system connections.
---

# Automate Add-On Execution

To ensure you feed the most recent data to your SIEM solution, Netwrix recommends scheduling a daily
task for running the add-on.

**Perform the following steps to create a scheduled task:**

**Step 1 –** On the computer where you want to execute the add-on, navigate to **Task Scheduler**.

**Step 2 –** On the **General** tab, specify a task name. Make sure the account that runs the task
has all necessary rights and permissions.

**Step 3 –** On the **Triggers** tab, click **New** and define the schedule. This option controls
how often audit data is exported from Auditor and saved to event log. Netwrixrecommends scheduling a
daily task.

**Step 4 –** On the **Actions** tab, click **New** and specify action details. Review the following
for additional information:

| Option                   | Value                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Action                   | Start a program                                                                                                                         |
| Program/script           | `<Path to add-on>\NetwrixAuditorForCEF\NetwrixAuditorCEFExport.exe`                                                                     |
| Add arguments (optional) | `/configpath:"<Path to config.xml>"` For more information about configuration, see the [Configuration File](#configuration-file) topic. |

**Step 5 –** Review advanced settings (if applicable) and click **OK**.

## Configuration File

To configure settings for exporting audit data to event log, you need to edit the `configuration.xml`
file.

Navigate to the add-on installation folder and edit `config.xml`. Review the parameters and their
possible values:

| Parameter                                                                  | Description                                                                                                                                                                              |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<DataSource>NetwrixAuditorServer</DataSource>`                            | Specifies the server name where Netwrix Auditor resides. This parameter can contain a server name, FQDN, or IP address. If not specified, localhost is used by default.                  |
| `<AdapterType>syslog</AdapterType>`                                        | Specifies the SIEM type and format for event export. For CEF, set this parameter to _syslog_. This is the default value.                                                                 |
| `<DestinationHost>123.123.123.123</DestinationHost>`                       | Specifies the IP address or name of the computer to which events will be sent. For local logging, use _127.0.0.1_ or leave empty.                                                        |
| `<DestinationPort>514</DestinationPort>`                                   | Specifies the port for sending events. 514 is the default UDP port.                                                                                                                      |
| `<Facility>16</Facility>`                                                  | Specifies the facility number for syslog. For the list of supported facilities, see the table below. The default value is 16.                                                            |
| `<OutputDelimiter>%tab%</OutputDelimiter>`                                 | Specifies the delimiter that separates fields in the output. Supported values are **%tab%**, **%space%**, **%comma%**, **%semicolon%**, and **%pipe%**. The default value is **%pipe%**. |
| `<OutputDateTimeFormat>MM/dd/yyyy HH:mm:ss</OutputDateTimeFormat>`         | Specifies the format for date and time. The default format is _MM/dd/yyyy HH:mm:ss_. For additional information, see the MSDN documentation for custom date and time format strings.     |
| `<FilterDataSource>Exchange Online</FilterDataSource>`                     | Optional. Filters events by data source name. If not specified, events from all data sources are exported.                                                                               |
| `<DatabaseConnectionTimeoutSeconds>240</DatabaseConnectionTimeoutSeconds>` | Optional. Specifies the timeout value for database connections.                                                                                                                          |
| `<SqlCommandTimeoutSeconds>120</SqlCommandTimeoutSeconds>`                 | Optional. Specifies the timeout value for SQL commands.                                                                                                                                  |

### Syslog Facility

Configure facility numbers according to your SIEM requirements:

| Value | Keyword  | Description              |
| ----- | -------- | ------------------------ |
| 0     | kern     | Kernel messages          |
| 1     | user     | User-level messages      |
| 2     | mail     | Mail system              |
| 3     | daemon   | System daemons           |
| 4     | auth     | Security/authorization   |
| 5     | syslog   | Internal syslog messages |
| 6     | lpr      | Line printer subsystem   |
| 7     | news     | Network news subsystem   |
| 8     | uucp     | UUCP subsystem           |
| 9     | cron     | Clock daemon             |
| 10    | authpriv | Security/authorization   |
| 11    | ftp      | FTP daemon               |
| 12    | ntp      | NTP subsystem            |
| 13    | logaudit | Log audit                |
| 14    | logalert | Log alert                |
| 15    | clock    | Clock daemon             |
| 16    | local0   | Local use 0 (default)    |
| 17    | local1   | Local use 1              |
| 18    | local2   | Local use 2              |
| 19    | local3   | Local use 3              |
| 20    | local4   | Local use 4              |
| 21    | local5   | Local use 5              |
| 22    | local6   | Local use 6              |
| 23    | local7   | Local use 7              |
