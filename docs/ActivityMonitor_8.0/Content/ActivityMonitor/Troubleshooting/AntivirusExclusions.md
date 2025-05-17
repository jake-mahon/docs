---
sidebar_position: 2594
title: Antivirus Exclusions
---

# Antivirus Exclusions

Windows activity monitoring and performance of the Activity Agent may be negatively affected by antivirus protections. Add the following components to antivirus exclusions in order to avoid potential performance degradation.

## Directories

The following directories can be added to antivirus exclusions:

* `` — Agent installation directory. Default path is `%ProgramFiles%\Netwrix\Activity Monitor\Agent`. The agent stores binaries and install files in this location.
* `` — Agent configuration directory. Default path is `%ProgramData%\Netwrix\Activity Monitor\Agent`. The agent stores configuration, and debug log files in this location.
* `\ActivityLogs` — Default location for collected activity files. If files are stored in a separate location, specify the user-designated directory instead of the default location.
* `\Data` — Various temporary data files, which may be actively updated.

## Binary Files

The following binary files can be added to antivirus exclusions:

* Active Directory Monitoring

  * `\MonitorService.exe` — Active Directory monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
  * `%ProgramFiles%\Stealthbits\StealthINTERCEPT\SIWindowsAgent.exe` — Active Directory Module service.
* Dell Celerra/VNX, Isilon/PowerScale, PowerStore, and Unity Monitoring

  * `\CelerraServerSvc.exe` — Dell Monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* Hitachi Monitoring

  * `\HitachiService.exe` — Hitachi HNAS monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* Microsoft Entra ID (formerly Azure AD) Monitoring

  * `\MonitorService.exe` — Microsoft Entra ID monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* Nasuni Monitoring

  * `\MonitorService.exe` — Nasuni monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* NetApp Monitoring

  * `\FPolicyServerSvc.exe` — NetApp Monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* Panzura Monitoring

  * `\MonitorService.exe` — Panzura monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* SharePoint Monitoring

  * `\MonitorService.exe` — SharePoint 2016, 2019 monitoring service
  * `\net35\MonitorService.exe` — SharePoint 2010 monitoring service
  * `\net40\MonitorService.exe` — SharePoint 2013 monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* SharePoint Online Monitoring

  * `\MonitorService.exe` — SharePoint Online monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* SQL Server Monitoring

  * `\MonitorService.exe` — SQL Server monitoring service
  * `\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
* Windows Monitoring

  * `%SystemRoot%\System32\drivers\SBTFSF.sys` — The File System filter driver
  * `\SBTService.exe` — Windows File System monitoring service.
  * `\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service