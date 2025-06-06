---
id: overview
title: Administration
---

# Administration

The Activity Monitor Console is used to deploy and manage activity agents, configure host monitoring, and search events within activity log files.

![Activity Monitor with Navigation tabs identified](/img/activitymonitor/admin/ActivityMonitorMain.png "Activity Monitor with Navigation tabs identified")

There are up to three tabs at the top left of the window:

- Monitored Domains – Configure activity monitoring per host (appears after the first Active Directory agent is deployed). See the [Monitored Domains Tab](MonitoredDomains/Overview.md "Monitored Domains Tab") topic for additional information.
- Monitored Hosts – Configure activity monitoring per host (appears after first activity agent is deployed). See the [Monitored Hosts Tab](MonitoredHosts/Overview.md "Monitored Hosts Tab")
- Search – Magnifying glass icon used to search activity log files (appears after first activity agent is deployed)

  - See the [Search Feature](Search/Overview.md "Search Feature") topic for additional information.

In the Status bar at the bottom of the console is the following information:

- Version – Version number for the Activity Monitor
- Connection Status – Lists the Database Status and Port. If no database agent is active, the Console displays **Database Agent Not Connected** in the lower-left corner.
- License information – Identifies the organization associated with the license. See the [Import License Key](/Install/ImportLicenseKey.md "Import License Key") topic for additional information.
- Trace Level – Creates Trace Logs to provide troubleshooting information. See the [Trace Logs](/Troubleshooting/TraceLogs.md "Trace Logs") topic for additional information.
- Collect Logs – Collects Trace Logs produced by Trace level