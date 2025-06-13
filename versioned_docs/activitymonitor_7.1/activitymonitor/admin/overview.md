# Administration

The Activity Monitor Console is used to deploy and manage activity agents, configure host monitoring, and search events within activity log files.

![Activity Monitor with Navigation tabs identified](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/activitymonitormain.png)

There are up to three tabs at the top left of the window:

- Agents – Deploy activity / AD agents and manage settings. This is the only tab available until an agent is installed. See the [Agent Information](/versioned_docs/activitymonitor_7.1/activitymonitor/install/agents.md) topic for additional information
- Monitored Domains – Configure activity monitoring per host (appears after the first Active Directory agent is deployed). See the [Monitored Domains Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/overview.md) topic for additional information.
- Monitored Hosts – Configure activity monitoring per host (appears after first activity agent is deployed). See the [Monitored Hosts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/overview.md)
- Search – Magnifying glass icon used to search activity log files (appears after first activity agent is deployed)

  - See the [Search Feature](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/search/overview.md) topic for additional information.

In the Status bar at the bottom of the console is the following information:

- Version – Version number for the Activity Monitor
- License information – Identifies the organization associated with the license. See the [Install Application](/versioned_docs/activitymonitor_7.1/activitymonitor/install/application.md#Install-Application) topic for additional information.
- Trace Level – Creates Trace Logs to provide troubleshooting information. See the [Trace Logs](/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/tracelogs.md#Trace-Logs) topic for additional information.
- Collect Logs – Collects Trace Logs produced by Trace level
