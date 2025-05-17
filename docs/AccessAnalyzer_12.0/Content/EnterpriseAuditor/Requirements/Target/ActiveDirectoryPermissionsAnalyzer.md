---
sidebar_position: 4906
title: "Domain\_Target Requirements, Permissions, and Ports"
---

# Domain Target Requirements, Permissions, and Ports

The Access Analyzer for Active Directory Permissions Analyzer Solution is compatible with the following Active Directory versions as targets:

* Windows Server 2016 and later
* Windows 2003 Forest level or higher

**NOTE:** See the Microsoft [Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support "Windows Server end of support and Microsoft 365 Apps") article for additional information.

Domain Controller Requirements

The following are requirements for the domain controllers to be scanned:

* .NET Framework 4.5+ installed
* WINRM Service installed

Data Collectors

Successful use of the Access Analyzer Active Directory Permissions Analyzer solution requires the necessary settings and permissions in a Microsoft® Active Directory® environment described in this topic and its subtopics. This solution employs the following data collectors to scan the domain:

* [ADInventory Data Collector](../../Admin/DataCollector/ADInventory/Overview "ADInventory Data Collector")
* [ADPermissions Data Collector](../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector")

## Permissions

* LDAP Read permissions
* Read on all AD objects
* Read permissions on all AD Objects

## Ports

The following firewall ports are needed:

For ADInventory Data Collector

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

For ADPermissions Data Collector

* TCP 389
* TCP 135 – 139
* Randomly allocated high TCP ports