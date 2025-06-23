---
title: Threat Manager System Requirements
sidebar_label: System Requirements
description: Hardware and software requirements for Threat Manager including database server, application server, action service, and client specifications.
---

# Action Service Requirements

The Action Service can be installed on additional servers.

_Remember,_ the Action Service is installed on the Threat Manager Console server.

The Windows server can be physical or virtual. The following Windows server operating systems are
supported:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- US English language installation

RAM, CPU, and Disk Space

Minimum hardware requirements:

- 4 GB RAM
- 1 CPU Core
- 500 MB Total Disk Space

Additional Server Requirements

The following are additional requirements for the application server:

- .NET 8.0.11
- .NET Desktop Runtime 8.0.11
- ASP.NET Core 8.0.11
- PowerShell 5.1+ installed

# Client Requirements

Threat Manager is a web service which can be accessed locally or remotely if the server’s firewall
permits it. The supported browsers are:

- Google Chrome
- Apple Safari
- Microsoft Edge
- Mozilla Firefox

# Database Server Requirements

**NOTE:** Use this information when the database server is separate from the application server.

The Windows server can be physical or virtual. The following Windows server operating systems are
supported:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- US English language installation

Additional Server Requirements

The following are additional requirements for the database server:

- .NET 8.0.11
- .NET Desktop Runtime 8.0.11
- ASP.NET Core 8.0.11
- VC++ redist v14.28.29914

Additional Considerations

The following considerations must be accommodated for:

- When running antivirus scans against the PostgreSQL v14 database, the PostgreSQL data folder must
  be excluded from the scans in order to prevent database complications.
- For performance reasons, disable Windows File Indexing on the drive containing the Threat Manager
  database.
- Disk Defragmentation jobs should never be performed on the drive containing Threat Manager
  PostgreSQL database. This can cause operational issues with the PostgreSQL database.

# Requirements

This topic describes the recommended configuration of the servers needed to install the application
in a production environment. Depending on the size of the organization, it is recommended to review
your environment and requirements with a Netwrix engineer prior to deployment to ensure all
exceptions are covered.

## Architecture Overview

The following servers are required for installation of the application:

Core Component

- Threat Manager Database Server – This is where the Threat Manager PostgreSQL database is
  installed.
- Threat Manager Application Server – This is where the v3.0 application is installed.
- Threat Manager Client – Threat Manager is a web service that can be accessed locally or remotely
  through a supported browser.
- Threat Manager Action Service Server – Actions automate security responses and connect various
  security applications and processes together. The Action Service is installed with Threat Manager
  on the application server. However, it can be installed on additional servers.

See the following topics for server requirements:

- [Database Server Requirements](/docs/threatmanager/3.0/installation/requirements/system-requirements.md)
- [Application Server Requirements](/docs/threatmanager/3.0/installation/requirements/system-requirements.md)
- [Action Service Requirements](/docs/threatmanager/3.0/installation/requirements/system-requirements.md)
- [Client Requirements](/docs/threatmanager/3.0/installation/requirements/system-requirements.md)
- [Ports Requirements](/docs/threatmanager/3.0/installation/requirements/ports-and-networking.md)

Target Environment Considerations

The target environment encompasses all servers, devices, or infrastructure being monitored by
Netwrix Threat Prevention or Netwrix Activity Monitor in addition to data collected by Netwrix
Access Analyzer (formerly Enterprise Auditor).

- Active Directory Activity Data– Active Directory activity data is collected through integration
  with Threat Prevention or the Activity Monitor.
- File System Activity Data – File System activity data is collected through integration with Threat
  Prevention or the Activity Monitor.
- File System Sensitive Data – File System sensitive data is collected through integration with
  Access Analyzer.

See the following documents for server requirements:

- [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
- [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
- [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)

# Application Server Requirements

**CAUTION:** Netwrix Threat Manager cannot be installed on the same server as Netwrix Threat Manager
Reporting Module.

The Windows server can be physical or virtual. The following Windows server operating systems are
supported:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- US English language installation

RAM, CPU, and Disk Space

These are dependent upon the total number of daily events sent to Threat Manager. It is suggested to
use the total events for a peak day of the week, by activity.

| Environment      | Enterprise | Extra Large | Large  | Medium | Small | Extra Small |
| ---------------- | ---------- | ----------- | ------ | ------ | ----- | ----------- |
| Daily Events     | 130 M      | 90 M        | 45 M   | 21 M   | 4.5 M | 875 K       |
| RAM              | 64 GB      | 64 GB       | 32 GB  | 32 GB  | 32 GB | 16 GB       |
| Cores            | 24         | 12          | 8      | 8      | 4     | 4           |
| Daily Disk Usage | 300 GB     | 170 GB      | 120 GB | 40 GB  | 10 GB | 5 GB        |
| Total Disk Space | 4 TB       | 3 TB        | 2 TB   | 1 TB   | 1 TB  | 1 TB        |
| IOPS             | 8,000      | 5,000       | 3,000  | 2,000  | 1,000 | 500         |

**NOTE:** All values are based upon a seven day event retention period in Threat Manager.

Daily events to be monitored by Threat Manager can typically be discovered by using Netwrix Threat
Prevention or Netwrix Activity Monitor. When planning a deployment where there is currently no
Netwrix agent deployed, it can be more difficult to plan for scale. However, the following are
estimations based on organization size can be used:

- For fewer than 1,000 active users

  - Generally assume 21 million daily events (Medium environment)

- For 1,000-10,000 active users

  - Generally assume 45 million daily events (Large environment)

- For more than 10,000 active users

  - Generally assume at minimum 100 million daily events (Extra Large-Enterprise environment)

Minimum hardware requirements:

- 8 GB RAM
- 4 CPU Cores

- 150 GB Disk Space

Additional Server Requirements

The following are additional requirements for the application server:

- .NET 8.0.11
- .NET Desktop Runtime 8.0.11
- ASP.NET Core 8.0.11
- VC++ redist v14.28.29914
- Python v3.10.8x64

Additional Considerations when Database is on the Application Server

The following considerations must be accommodated for:

- When running antivirus scans against the PostgreSQL v14 database, the PostgreSQL data folder must
  be excluded from the scans in order to prevent database complications.
- For performance reasons, disable Windows File Indexing on the drive containing the Threat Manager
  database.
- Disk Defragmentation jobs should never be performed on the drive containing Threat Manager
  PostgreSQL database. This can cause operational issues with the PostgreSQL database.

Permissions for Installation and Application Use

The following permissions are required to install and use the application:

- Membership in the local Administrators group

## Virtual Environment Recommendations

While physical machines are always preferred, we fully support the use of virtual machines. This
section contains special considerations when leveraging virtualization.

- VMWare® ESX® – If using ESX, the following specifications are recommended:

  - ESX 4.0 / ESXi™ 4.1 or higher
  - Virtual Hardware 7 or higher
  - All Virtual Machines installed on the same datacenter / rack

- Virtual Storage Consideration

  - In the server requirements, when separate disks are required for the servers, that should
    translate to separate data stores on the VM host machine.
