---
title: Integration API Ports and Configuration
sidebar_label: Getting Started
description: Network ports and protocols required for Netwrix Auditor Integration API connections and add-on configurations.
---

# Integration API Ports

Review a full list of protocols and ports required for add-ons or any queries leveraging Netwrix
Auditor Integration API.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

On any computer you plan to host the add-on (source), allow outbound connections to remote 9699 TCP
port. On the computer where Netwrix Auditor Server resides (target), allow inbound connections to
local 9699 TCP port.

| Add-on                                                                                                 | Port    | Protocol     | Source                | Target                       | Purpose                                                                                                                         |
| ------------------------------------------------------------------------------------------------------ | ------- | ------------ | --------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| All add-ons or queries                                                                                 | 9699    | TCP          | Script or query host  | Netwrix Auditor  Server      | The default Netwrix Auditor Integration API port. However, you can configure another TCP port for that purpose.                 |
| AlienVault USM                                                                                         | 53      | UDP/TCP      | Script host           | DNS Server                   | DNS Client                                                                                                                      |
| Amazon Web Services                                                                                    | 443     | TCP          | Script host           | Amazon Web Services          | —                                                                                                                               |
| 53                                                                                                     | UDP/TCP | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |
| - Event Log Export - IBM QRadar - Intel Security - LogRhythm - SolarWinds Log & Event Manager - Splunk | 53      | UDP/TCP      | Script host           | DNS server                   | DNS Client                                                                                                                      |
| CEF Export                                                                                             | 53      | UDP/TCP      | Script host           | DNS server                   | DNS Client                                                                                                                      |
| - Cisco Network Devices - Privileged User Monitoring - General Linux Syslog                            | 514     | UDP          | Cisco network devices | Service host                 | The default port for Cisco network devices remote Syslog logging. However, you can configure another UDP port for that purpose. |
| 53                                                                                                     | UDP     | Service host | DNS server            | DNS Client                   |                                                                                                                                 |
| HPE ArcSight                                                                                           | 515     | TCP          | Script host           | ArcSight Logger              | —                                                                                                                               |
| 514                                                                                                    | UDP     | Script host  | ArcSight Logger       | —                            |                                                                                                                                 |
| 53                                                                                                     | UDP/TCP | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |
| 53                                                                                                     | UDP     | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |
| RADIUS Server                                                                                          | 139     | TCP          | Script host           | RADIUS server                | RPC/NP Eventlog                                                                                                                 |
| 445                                                                                                    | TCP     | Script host  | RADIUS server         | RPC/NP Eventlog              |                                                                                                                                 |
| 137                                                                                                    | UDP     | Script host  | RADIUS server         | RPC/NP Eventlog              |                                                                                                                                 |
| 138                                                                                                    | UDP     | Script host  | RADIUS server         | RPC/NP Eventlog              |                                                                                                                                 |
| 135                                                                                                    | TCP     | Script host  | RADIUS server         | RPC Endpoint Mapper Eventlog |                                                                                                                                 |
| 1024 – 65535 (Dynamically assigned)                                                                    | TCP     | Script host  | RADIUS server         | RPC Eventlog                 |                                                                                                                                 |
| 53                                                                                                     | UDP/TCP | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |

# Prerequisites

Netwrix Auditor Integration API uses HTTPS for communication with the automatically generated
certificate. The default communication port is 9699.

Refer to the [Security](/docs/auditor/10.7/api-reference/authentication-and-security.md) topic for detailed instructions on how to disable HTTPS and
manage other API settings.

## Configure Integration API Settings

Follow the steps to change the port.

**Step 1 –** In the Netwrix Auditor main window, navigate to the Integration tile.

**Step 2 –** Make sure the Leverage Integration API option is enabled.

**Step 3 –** Click Modify under the API settings section and specify a port number. Windows firewall
rule will be automatically created.

**Step 4 –** If you use a third-party firewall, you must create a rule for inbound connections
manually.

![Integration API Settings](/img/product_docs/auditor/auditor/addon/connectwise/integrations_thumb_0_0.webp)

## Configure Audit Database Settings

When you first configure the Audit Database settings in Netwrix Auditor, the product also creates
several databases for special purposes, including Netwrix_Auditor_API. This database is designed to
store data imported from the other sources using Netwrix Auditor Integration API.

Make sure that the Audit Database settings are configured in Netwrix Auditor. To check or configure
these settings, navigate to the **Settings > Audit Database**.

You cannot use Netwrix Auditor Integration API without configuring the Audit Database.

Refer to the [Audit Database](/docs/auditor/10.7/administration/system-settings/audit-database.md) topic for detailed instructions on
how to configure SQL Server settings.
