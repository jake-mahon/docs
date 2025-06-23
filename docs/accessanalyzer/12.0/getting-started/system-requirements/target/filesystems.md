---
title: Getting Started: filesystems
sidebar_label: filesystems
description: Getting started guide for filesystems in Access Analyzer including setup instructions and initial configuration steps.
---

# File System Supported Platforms

Netwrix Access Analyzer (formerly Enterprise Auditor) audits Microsoft® Windows® file servers,
Azure Files storage accounts, Network Attached Storage (NAS) devices, and Unix platforms.

Access Analyzer employs the File System Solution to execute Access Auditing (FSAA), Activity
Monitoring (FSAC), and Sensitive Data Discovery Auditing scans. The Activity Monitoring (FSAC) scans
also require an additional application, either Netwrix Activity Monitor or Netwrix Threat
Prevention, to monitor the target environment.

**NOTE:** Access Auditing and Sensitive Data Discovery Auditing support CIFS and NFSv3.

Ports and permissions vary based on the scan mode option selected as well as the target environment.

Data Collectors

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/12.0/data-collection/ad-inventory/overview.md)
- [FileSystemAccess Data Collector](/docs/accessanalyzer/12.0/data-collection/fsaa/overview.md)

Permissions and Ports for ADInventory Data Collector Prerequisite

The following permissions are needed:

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft
  [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
  article and the Microsoft
  [Dsacls](<https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx>) article for
  additional information.

The following firewall ports are needed:

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

Permissions and Ports for FileSystemAccess Data Collector

- Permissions vary based on the Scan Mode Option selected. See the File System Supported Platforms
  topic for additional information.

## Supported Windows Platforms

The following are supported Microsoft® Windows® operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the [Windows File Server Target Requirements](/docs/accessanalyzer/12.0/configuration/windows-file/overview.md) topic for
target environment requirements.

Windows File System Clusters

See the topic for target environment requirements.

Windows File System DFS Namespaces

See the topic for target environment requirements.

## Azure Files Support

Azure Files is a fully managed, cloud-based file sharing service from Microsoft that allows users to
access file shares from anywhere as a virtual network drive. Access Analyzer supports Access
Auditing (FSAA) and Sensitive Data Discovery Auditing scans of Azure Files.

See the [Azure Files Target Requirements](/docs/accessanalyzer/12.0/getting-started/system-requirements/target/config/azure-files.md) topic for additional information.

## Supported Network Attached Storage Devices

The following are supported Network Attached Storage (NAS) devices.

Dell Celerra® & VNX

- Celerra 6.0+
- VNX 7.1
- VNX 8.1

See the [Dell Celerra & Dell VNX Target Requirements](/docs/accessanalyzer/12.0/configuration/dell-celerra-vnx/overview.md)
topic for target environment requirements.

Dell Isilon/PowerScale

- 7.0+

See the [Dell Isilon/PowerScale Target Requirements](/docs/accessanalyzer/12.0/configuration/dell-powerscale/overview.md)
topic for target environment requirements.

Dell Unity

See the [Dell Unity Target Requirements](/docs/accessanalyzer/12.0/configuration/dell-unity/overview.md) topic for target
environment requirements.

Hitachi

- 11.2+

See the [Hitachi Target Requirements](/docs/accessanalyzer/12.0/configuration/hitachi/overview.md) topic for target
environment requirements.

Nasuni Nasuni Edge Appliances

- 8.0+

See the [Nasuni Target Requirements](/docs/accessanalyzer/12.0/configuration/nasuni/overview.md) topic for target
environment requirements.

NetApp Data ONTAP

- 7-Mode 7.3+
- Cluster-Mode 8.2+

See the following topics for target environment requirements:

- [NetApp Data ONTAP Cluster-Mode Target Requirements](/docs/accessanalyzer/12.0/configuration/netapp-c-mode/overview.md)
- [NetApp Data ONTAP 7-Mode Target Requirements](/docs/accessanalyzer/12.0/configuration/netapp-7-mode/overview.md)

Nutanix

See the [Nutanix Target Requirements](/docs/accessanalyzer/12.0/configuration/nutanix/overview.md) topic for target
environment requirements.

Qumulo

- Qumulo Core 5.0.0.1B+

See the [Qumulo Target Requirements](/docs/accessanalyzer/12.0/configuration/qumulo/overview.md) topic for target
environment requirements.

## Supported Unix Platforms

The following are supported Unix operating systems for Access Auditing (FSAA) and Sensitive Data
Discovery Auditing only:

- AIX® 4+
- Solaris™ 8+
- Red Hat® Enterprise Linux® 4+
- Red Hat® Linux® 5.2+
- HP-UX® 11+
- SUSE® 10+
