---
sidebar_position: 2584
title: Administration
---

# Administration

The Activity Monitor Console is used to deploy and manage activity agents, configure host monitoring, and search events within activity log files.

![Activity Monitor with Navigation tabs identified](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/ConsoleNavigation/ActivityMonitorMain.png "Activity Monitor with Navigation tabs identified")

There are up to three tabs at the top left of the window:

* Agents – Deploy activity / AD agents and manage settings. This is the only tab available until an agent is installed. See the [Agent Information](../Install/Agents "Agent Deployment") topic for additional information
* Monitored Domains – Configure activity monitoring per host (appears after the first Active Directory agent is deployed). See the [Monitored Domains Tab](MonitoredDomains/Overview "Monitored Domains Tab") topic for additional information.
* Monitored Hosts – Configure activity monitoring per host (appears after first activity agent is deployed). See the [Monitored Hosts Tab](MonitoredHosts/Overview "Monitored Hosts Tab")
* Search – Magnifying glass icon used to search activity log files (appears after first activity agent is deployed)

  * See the [Search Feature](Search/Overview "Search Feature") topic for additional information.

In the Status bar at the bottom of the console is the following information:

* Version – Version number for the Activity Monitor
* License information – Identifies the organization associated with the license. See the [Install Application](../Install/Application#_Import_License_Key "Install Application") topic for additional information.
* Trace Level – Creates Trace Logs to provide troubleshooting information. See the [Trace Logs](../Troubleshooting/TraceLogs#_Trace_Logs "Trace Logs") topic for additional information.
* Collect Logs – Collects Trace Logs produced by Trace level