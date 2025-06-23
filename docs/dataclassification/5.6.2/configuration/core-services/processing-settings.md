---
title: System
sidebar_label: Processing Settings
description: This configuration tab contains the settings related to system health, operation and logging. Each configuration option has an associated “i” which describes...
---

# System

This configuration tab contains the settings related to system health, operation and logging. Each
configuration option has an associated “i” which describes the nature of the setting.

![core_system_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/core/core_system_thumb_0_0.webp)

## Health

| Option                           | Description                                                                                                                                                                 | Comment                                                                                                    |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **General settings**             |                                                                                                                                                                             |                                                                                                            |
| Log Level                        | Defines logging level that should be persisted to the log targets. Possible options: - **Errors** - **Errors & Warnings** - **Errors Warnings & Info** - **Verbose**        |                                                                                                            |
| Tracing                          | Used to provide additional information/ functionality.                                                                                                                      | Will apply to selected components (none by default)                                                        |
| Log Targets                      | Select where the log should be written: to a file, to Windows Event Log, or both.                                                                                           |                                                                                                            |
| File Log Location                | If you selected to write log to a file, this location path will be used.                                                                                                    | Default is _C:\ProgramData\Netwrix Data Classification\Logs_                                               |
| File Log Retention Period        | Number of days (since the last use) that file logs should be kept for before deletion.                                                                                      | To keep all logs (without automatic deletion), specify _0_ .                                               |
| Send anonymous usage statistics? | Disabled by default. When enabled, the program will send a small amount of information of how the product is being used — to improve the functionality and future offering. | Personal information/ company data will not be sent.                                                       |
| **Advanced settings**            |                                                                                                                                                                             |                                                                                                            |
| Max Database Size                | Specifies the max size (in GB) the SQL database will grow to.                                                                                                               | When this value is reached, Collector and Indexer components will be suspended. Default is _0_ (no limit). |
| Database Maintenance Schedule    | Specify the schedule for running database maintenance (including the rebuilding of SQL Server indexes)                                                                      | Default is _Everyday_.                                                                                     |

## Configuration Export

You may need to export the current configuration —to send to the support team for debugging
purposes. Go to **System Configuration > Config > Settings > Core > System** and in the
**Configuration Export** section click **Export** button.

# Core Configuration

Each configuration option has an associated “i” which describes the nature of the setting. Selecting
the Details tab provides a complete list of the Config settings – as well as an indication of the
values that have been changed from the default setting.

You can also:

- Start Product Tour—Runs a product tour, taking you around the key areas of the product.
- Run Cleaner—Runs built-in tool to automate maintenance operations.
  [See Index Maintenance for more information.](/docs/dataclassification/5.6.2/security-administration/administration/content-cleanup.md)
- Reset Cache—Force the QS caches to be reset.
