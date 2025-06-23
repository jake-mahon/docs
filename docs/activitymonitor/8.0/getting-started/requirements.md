---
title: Activity Agent Server Requirements
sidebar_label: Requirements
description: System requirements for Activity Monitor including supported Windows Server versions, RAM, processor, and disk space specifications for optimal performance.
---

# Activity Agent Server Requirements

The Activity Agent is installed on Windows servers to monitor Microsoft Entra ID, Network Attached
Storage (NAS) devices, SharePoint farms, SharePoint Online, SQL Server, and Windows file servers.
The server where the agent is deployed can be physical or virtual. The supported operating systems
are:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2

RAM, Processor, and Disk Space

- RAM – 4 GB minimum
- Processor – x64. 4+ cores recommended; 2 cores minimum
- Disk Space – 1 GB minimum plus additional space needed for activity log files
- Network – a fast low-latency connection to the monitored platforms (file servers, SQL Server),
  preferably the same data center

**NOTE:** Disk usage depends on the monitoring scope, user activity, types of client applications,
and the retention settings. Number of events per user per day may vary from tens to millions. A
single file system event is roughly 300 bytes.

Old files are zipped, typical compression ratio is 20. Optionally, old files are moved from the
server to a network share. See the [Archiving Tab](/docs/activitymonitor/8.0/agents/configuration/storage-and-archiving.md) topic
for additional information.

Additional Server Requirements

The following are additional requirements for the agent server:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article
- WMI enabled on the machine, which is optional but required for centralized Agent maintenance
- Remote Registry Service enabled
- For monitoring Dell devices, Dell CEE (Common Event Enabler) installed

Permissions for Installation

The following permission is required to install and manage the agent:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

Activity Agent Ports

See the [Activity Agent Ports](/docs/activitymonitor/8.0/reference/port-requirements.md) topic for firewall port requirements.

## Supported Exchange Online

The Activity Monitor provides the ability to monitor Exchange Online:

**NOTE:** For monitoring Exchange Online, the Activity Agent must be deployed to a Windows server
that acts as a proxy for monitoring the target environment.

- Exchange Online

See the [Exchange Online Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/cloud-platforms/exchange-online.md)
topic for target environment requirements.

## Supported Microsoft Entra ID

The Activity Monitor provides the ability to monitor Microsoft Entra ID:

**NOTE:** For monitoring Microsoft Entra ID, the Activity Agent must be deployed to a Windows server
that acts as a proxy for monitoring the target environment.

- Microsoft Entra ID (formerly Azure AD)

See the [Microsoft Entra ID Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/cloud-platforms/entra-id.md) topic
for target environment requirements.

## Supported Network Attached Storage Devices

The Activity Monitor provides the ability to monitor NAS file server devices:

**NOTE:** For monitoring NAS devices, the Activity Agent must be deployed to a Windows server that
acts as a proxy for monitoring the target environment.

CTERA Edge Filter

- CTERA Portal 7.5.x+
- CTERA Edge Filer 7.5.x+

See the [CTERA Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/other-storage.md) topic for target
environment requirements.

Dell Celerra® & VNX

- Celerra 6.0+
- VNX 7.1
- VNX 8.1

See the
[Dell Celerra & Dell VNX Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/dell-configuration.md)
topic for target environment requirements.

Dell Isilon/PowerScale

- 7.0+

See the
[Dell Isilon/PowerScale Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/dell-configuration.md)
topic for target environment requirements.

Dell PowerStore®

See the [Dell PowerStore Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/dell-configuration.md)
topic for target environment requirements.

Dell Unity

See the [Dell Unity Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/dell-configuration.md) topic for
target environment requirements.

Hitachi

- 11.2+

See the [Hitachi Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/hitachi-configuration.md) topic for target
environment requirements.

Nasuni Nasuni Edge Appliances

- 8.0+

See the [Nasuni Edge Appliance Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/other-storage.md)
topic for target environment requirements.

NetApp Data ONTAP

- 7-Mode 7.3+
- Cluster-Mode 8.2+

See the following topics for target environment requirements:

- [NetApp Data ONTAP 7-Mode Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/netapp-configuration.md)
- [NetApp Data ONTAP Cluster-Mode Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/netapp-configuration.md)

Nutanix

See the [Nutanix Files Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/other-storage.md) topic for
target environment requirements.

Panzura

See the [Panzura CloudFS Monitoring](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/other-storage.md) topic for target environment
requirements.

Qumulo

- Qumulo Core 5.0.0.1B+

See the [Qumulo Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/other-storage.md) topic for target
environment requirements.

## Supported SharePoint Farms Platforms

The Activity Monitor provides the ability to monitor SharePoint farms:

**NOTE:** For monitoring a SharePoint farm, the Activity Agent must be deployed to the SharePoint
Application server that hosts the "Central Administration" component of the SharePoint farm.

- SharePoint® 2019
- SharePoint® 2016
- SharePoint® 2013

- SharePoint® Server Subscription Edition

See the [SharePoint On-Premise Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/cloud-platforms/sharepoint-online.md)
topic for target environment requirements.

## Supported SharePoint Online

The Activity Monitor provides the ability to monitor SharePoint Online:

**NOTE:** For monitoring SharePoint Online, the Activity Agent must be deployed to a Windows server
that acts as a proxy for monitoring the target environment.

- SharePoint Online®

See the
[SharePoint Online Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/cloud-platforms/sharepoint-online.md) topic
for target environment requirements.

## Supported SQL Server Platforms

The Activity Monitor provides the ability to monitor SQL Server:

**NOTE:** For monitoring SQL Server, it is recommended to install the Activity Agent must be
deployed to a Windows server that acts as a proxy for monitoring the target environment.

- SQL Server 2022

- SQL Server 2022
- SQL Server 2019
- SQL Server 2017
- SQL Server 2016

See the [SQL Server Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/database-systems/sql-server.md) topic for
target environment requirements.

## Supported Windows File Servers Platforms

The Activity Monitor provides the ability to monitor Windows file servers:

**NOTE:** For monitoring a Windows file server, the Activity Agent must be deployed to the server.
It cannot be deployed to a proxy server.

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the [Windows File Server Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/active-directory/activity-monitoring.md)
topic for target environment requirements.

# AD Agent Server Requirements

Active Directory (AD) monitoring can be accomplished through two primary methods:

- Activity Monitor Agents with the AD Module
- Retrieving activity data from Netwrix Threat Prevention

Both approaches require the installation of agents on each domain controller within the monitored
domain and are compatible with Netwrix Access Analyzer (formerly Enterprise Auditor) and Netwrix
Threat Manager, feeding them AD activity data.

Activity Monitor Agents: This option focuses solely on monitoring AD activity, providing basic
visibility into AD events without additional features.

![nam_admodule](/img/product_docs/activitymonitor/activitymonitor/requirements/nam_admodule.webp)

Netwrix Threat Prevention: Offers a more comprehensive and flexible monitoring experience, including
advanced features like operation blocking and enhanced monitoring capabilities.

![ntp](/img/product_docs/activitymonitor/activitymonitor/requirements/ntp.webp)

These methods provide organizations with a choice between basic AD activity monitoring and a more
versatile, security-enhanced option.

Activity Monitor and Threat Prevention Compatibility Matrix

| Activity Monitor Version | Threat Prevention (formerly Stealth Intercept) Version | Threat Prevention Version |
| ------------------------ | ------------------------------------------------------ | ------------------------- |
| 7.1                      | 7.3                                                    | 7.4                       |
| 7.0                      | 7.3                                                    |                           |

## Requirements

The AD Agent is deployed to every domain controllers to monitor Active Directory domains. The server
can be physical or virtual. The supported operating systems are:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

RAM, Cores, and Disk Space

These depend on the amount of activity expected:

| Environment | Recommended | Minimum |
| ----------- | ----------- | ------- |
| RAM         | 8+ GB       | 4+ GB   |
| Cores       | 4+ CPU      | 2 CPU   |
| Disk Space  | 50 GB       | 50 GB   |

The disk space requirement covers the following:

- Agent Size – 150 MB
- Agent Queues – In the event of a network outage, the agent will cache up to 40 GB of event data
- Diagnostic Logging – 1 GB

Old files are zipped, typical compression ratio is 20. Optionally, old files are moved from the
server to a network share. See the [Archiving Tab](/docs/activitymonitor/8.0/agents/configuration/storage-and-archiving.md) topic
for additional information.

Additional Server Requirements

The following are additional requirements for the agent server:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article
- WMI enabled on the machine, which is optional but required for centralized Agent maintenance

Permissions for Installation

The following permission is required to install and manage the agent:

- Membership in the Domain Administrators group
- READ and WRITE access to the archive location for Archiving feature only

## Supported Active Directory Platforms

The Activity Monitor provides the ability to monitor Active Directory:

**NOTE:** For monitoring an Active Directory domain, the AD Agent must be installed on all domain
controllers within the domain to be monitored.

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the [Active Directory Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/active-directory/activity-monitoring.md)
topic for target environment requirements.

## AD Agent Compatibility with Non-Netwrix Security Products

The following products conflict with the agent:

**CAUTION:** Do not install these products on a server where an agent is deployed. Do NOT install an
agent on a server where these products are installed.

- Quest Change Auditor (aka Dell ChangeAuditor)
- PowerBroker Auditor for Active Directory by BeyondTrust

The following products, which protect LSASS, may prevent the agent from injecting into LSASS, and
thereby prevent monitoring Active Directory events:

- Cisco AMP for Endpoints Connector
- Avast Business Antivirus

  - Specifically the “Avast self-defense module”

**NOTE:** These products and other similar products can be configured via a whitelist to allow the
agent to operate.

# Linux Agent Server Requirements

The server where the agent is deployed can be physical or virtual. The supported operating systems
are:

- Red Hat Enterprise Linux

  - V 9.x
  - V 8.x

- Activity Monitor supports RHEL kernels in FIPS mode compliant with FIPS 140-2 and FIPS 140-3.

## Target Requirements

**NOTE:** For monitoring a Linux file server, the The Linux Agent is deployed to Linux servers to be
monitored. It cannot be deployed to a proxy server.

## Supported Protocols

The following protocols are supported for the Linux agent:

- Local
- Common Internet File System (CIFS) / Server Message Block (SMB)
- Network File System (Mounted Client-Side)

**NOTE:** Server-Side NFS protocol is not supported.

## Permissions for Installation

The following permission is required by the account used to install and manage the agent:

- Root privileges with password (or SSH private key)

For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.

## Immutable Mode

For file activity monitoring on Linux, Activity Monitor relies on **auditd** component of the Linux
Auditing System. One of the features of auditd is the **immutable mode** or `-e 2` command, which
locks the audit configuration and protects it from being changed. When the immutable mode is
enabled, the only way to change the auditing configuration is to reboot the server.

To check if the immutable mode is enabled, use the `auditctl -s` command. If the immutable mode is
active, the command will print `enabled 2`. Alternatively, check for the `-e 2` line in the
`/etc/audit/rules.d/audit.rules` file.

Activity Monitor supports the immutable mode. It compares the current auditd configuration with the
desired one. If they differ and the immutable mode is enabled, the product displays a warning that a
server restart is required in the status section of the **Monitored Hosts** tab. After the reboot,
the changes take effect and the immutable mode is enabled.

# Requirements

This topic describes the recommended configuration of the servers needed to install the application
in a production environment. Depending on the size of the organization, it is recommended to review
your environment and requirements with a Netwrix engineer prior to deployment to ensure all
exceptions are covered.

## Architecture Overview

The following servers are required for installation of the application:

Core Component

- Activity Monitor Console Server – This is where the v8.0 application is installed.

  **NOTE:** The Activity Monitor Console can be hosted on the same machine as other Netwrix
  products.

- Agents – There are three types of agents that are deployed in the target environment used to
  monitor activity:

  - Activity Agent – The Activity Agent is installed on Windows servers to monitor Microsoft Entra
    ID, Network Attached Storage (NAS) devices, SharePoint farms, SharePoint Online, SQL Server,
    and Windows file servers. See the [Activity Agent Server Requirements](/docs/activitymonitor/8.0/getting-started/requirements.md) topic
    for additional information.
  - AD Agent – The AD Agent is deployed to every domain controllers to monitor Active Directory
    domains. See the [AD Agent Server Requirements](/docs/activitymonitor/8.0/getting-started/requirements.md) topic for additional information.
  - Linux Agent – The Linux Agent is deployed to Linux servers to be monitored. See the
    [Linux Agent Server Requirements](/docs/activitymonitor/8.0/getting-started/requirements.md) topic for additional information.

Target Environment Considerations

The target environment encompasses all servers, devices, or infrastructure to be monitored by
Activity Monitor. Most solutions have additional target requirements.

## Activity Monitor Console Machine Requirements

The machine can be a Windows Server or desktop, as well as physical or virtual. The following
Windows Server operating systems are supported:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

The following Windows desktop operating systems are supported:

- Windows 11
- Windows 10

RAM, Processor, and Disk Space

- RAM – 1 GB minimum
- Processor – x64
- Disk Space – 1 GB minimum

Additional Machine Requirements

The following are additional requirements for the Console machine:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article

Permissions for Installation

The following permission is required to install and use the application:

- Membership in the local Administrators group for the Activity Monitor Console server
