---
sidebar_position: 6054
title: FileSystemAccess Data Collector
---

# FileSystemAccess Data Collector

The FileSystemAccess (FSAA) Data Collector collects permissions, content, and activity, and sensitive data information for Windows and NAS file systems. The FSAA Data Collector has been preconfigured within the File System Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [File System Solution](../../../Solutions/FileSystem/Overview "File System Solution") topic for additional information.

Protocols

* Remote Registry
* WMI

Ports

* Ports vary based on the Scan Mode Option selected. See the [File System Scan Options](../../../Requirements/Solutions/FileSystem/ScanOptions "File System Scan Options") topic for additional information.

Permissions

* Permissions vary based on the Scan Mode Option selected. See the [File System Supported Platforms](../../../Requirements/Target/FileSystems "File System Supported Platforms") topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. By default, SDD scans are configured to run two concurrent threads. For example, if the job is configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are required (8x2x2=32).

## FSAA Query Configuration

The FSAA Data Collector is configured through the File System Access Auditor Data Collector Wizard. The wizard contains the following pages, which change based up on the query category selected:

* [FSAA: Query Selection](QuerySelection "FSAA: Query Selection")
* [FSAA: Applet Settings](AppletSettings "FSAA: Applet Settings")
* [FSAA: Scan Server Selection](ScanServerSelection "FSAA: Scan Server Selection")
* [FSAA: Scan Settings](ScanSettings "FSAA: Scan Settings")
* [FSAA: Azure Tenant Mapping](AzureTenantMapping "FSAA: Azure Tenant Mapping")
* [FSAA: Activity Settings](ActivitySettings "FSAA: Activity Settings")
* [FSAA: Default Scoping Options](DefaultScopingOptions "FSAA: Default Scoping Options")
* [FSAA: Scoping Options](ScopingOptions "FSAA: Scoping Options")
* [FSAA: Scoping Queries](ScopingQueries "FSAA: Scoping Queries")
* [FSAA: Sensitive Data Settings](SensitiveDataSettings "FSAA: Sensitive Data Settings")
* [FSAA: SDD Criteria Settings](SDDCriteria "FSAA: SDD Criteria Settings")
* [FSAA: Bulk Import Settings](BulkImport "FSAA: Bulk Import Settings")
* [FSAA: FSAA Update Service Setting](UpdateServiceSettings "FSAA: FSAA Update Service Setting")