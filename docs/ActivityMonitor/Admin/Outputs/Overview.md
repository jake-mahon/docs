---
id: overview
title: Output Types
---

# Output Types

Once a domain or a host is being monitored the event stream can be sent to multiple outputs. There are three types of outputs:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server For Monitored Hosts, this options is also used to send activity events to Netwrix Threat Manager, where supported
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or receives Active Directory monitoring events from Netwrix Threat Prevention for integration with Netwrix Access Analyzer (formerly Enterprise Auditor)

  **NOTE:** This output is only available for Monitored Domains

See the [Output for Monitored Domains](/Admin/MonitoredDomains/Output.md "Output for Monitored Domains") topic and the [Output for Monitored Hosts](/Admin/MonitoredHosts/Output.md "Output for Monitored Hosts") topic for information on adding an output.

Output configurations vary based on the type of domain/host selected.

## For Active Directory Domains

Output Properties window has the following tabs:

- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only
- [Threat Manager Tab](ThreatManager.md "Threat Manager Tab"), Netwrix Threat Manageroutput only

## For Dell Device Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Protocols Tab](Protocols.md "Protocols Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Exchange Online Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- Application Exclusions Tab
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- Mailbox Exclusions Tab
- [Operations Tab](Operations.md "Operations Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Hitachi Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Linux Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [GID Exclusions Tab](GIDExclusions.md "GID Exclusions Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Protocols Tab](Protocols.md "Protocols Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Microsoft Entra ID Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Nasuni Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Protocols Tab](Protocols.md "Protocols Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For NetApp Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Protocols Tab](Protocols.md "Protocols Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Nutanix Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Protocols Tab](Protocols.md "Protocols Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Panzura Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Qumulo Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Protocols Tab](Protocols.md "Protocols Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For SharePoint Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For SharePoint Online Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For SQL Server Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Objects Tab](Objects.md "Objects Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only

## For Windows File Server Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](AdditionalProperties.md "Additional Properties Tab")
- [Log Files Tab](LogFiles.md "Log Files Tab"), File output only
- [Operations Tab](Operations.md "Operations Tab")
- [Path Filtering Tab](PathFiltering.md "Path Filtering Tab")
- [Protocols Tab](Protocols.md "Protocols Tab")
- [Process Exclusions Tab](ProcessExclusions.md "Process Exclusions Tab")
- [Syslog Tab](Syslog.md "Syslog Tab"), Syslog output only