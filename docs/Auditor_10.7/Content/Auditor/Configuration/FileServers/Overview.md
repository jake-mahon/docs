---
sidebar_position: 1829
title: File Servers
---

Filter: 

* All Files

Submit Search

# File Servers

Netwrix Auditor can monitor for operations with files and folders on the storage systems, collect state-in-time snapshots and track changes to the object attributes. This section provides detailed information on these activities.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See the [Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html "Antivirus Exclusions for Netwrix Auditor") knowledge base article for additional information.

## Supported File Servers and Devices

The following topics list the operations with files and folders that can be monitored and reported by Auditor on these supported storage systems.:

* [Dell Data Storage](DellDataStorage/Overview)
* [Dell Isilon/PowerScale](DellIsilon/Overview "Dell Isilon/PowerScale")
* [NetApp Data ONTAP](NetAppCMode/Overview "NetApp Data ONTAP")
* [Nutanix](Nutanix/Overview)
* [Qumulo](Qumulo/Overview)
* [Synology](Synology/Overview)
* [Windows File Servers](Windows/Overview)

## State-in-Time Data

State-in-time data collection is supported for files, folders and shares on Windows-based file servers, Dell and NetApp storage systems, and Nutanix File Servers. Remember to select the corresponding option in the data source settings within the monitoring plan.

## Sensitive Data

Starting with the version 10, the product is able to report about sensitive data in your IT infrastructure. Pay attention to the "*Data categories*" column in search and reports (for the "*File*" object types only). See the [Sensitive Data Discovery](../../Admin/Settings/SensitiveDataDiscovery "Sensitive Data Discovery")  topic for additional information on how to enable monitoring of sensitive data in Auditor.

## Monitored Object Attributes

The table below lists the object types and attributes that can be monitored by Auditor.

For more information on the attributes marked with (\*) , refer to the following Microsoft article: [File Attribute Constants](https://msdn.microsoft.com/en-us/library/windows/desktop/gg258117(v=vs.85).aspx "File Attribute Constants").

| Object type | Attributes |
| --- | --- |
| File | * Attributes\* * Location * Name * Ownership * Permissions:    * Group Permissions   * User Permissions * Primary Group * Security descriptor control flags * Size * Data categories |
| Folder | * Attributes\*  The Reparse point attribute content is available for reviewing only when State-In-Time snapshot collection is enabled. Mind that reparse point content changes cannot be audited. * Location * Name * Ownership * Permissions:    * Group Permissions   * User Permissions * Primary Group * Security descriptor control flags |
| Share | * Access-based Enumeration * Caching * Continuous Availability * Description * Enable BranchCache * Encrypt Data Access * Local Path * User Limit |

**CAUTION:** File and folder attributes marked with the (\*) are not monitored by default. Please contact Netwrix Technical Support team to monitor these file and folder attributes.

In addition to general object attributes, Auditor generates the following attributes associated with the object and reserved for internal use:

* **Session ID** — This attribute is based on the user's logon ID and timestamp of the related logon event.
  Being unique for a user's logon session, it usually helps to distinguish the events and changes that occurred within that session.
* **Statement ID** — This attribute appears if an object was moved/renamed due to its root object modifications.