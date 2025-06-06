---
id: credentials
title: Credentials
---

# Credentials

The page is a list of grids containing credentials for different types of device, protocol or service. While some grids may only be visible if certain licensees or options are in place, this is the full list:

- ITSM System Credentials
- Cloud System Credentials
- SSH / Telnet Credentials
- Splunk Credentials
- ESXi / vCenter Credentials
- Database Credentials

Each grid has a button to create a new credential. The far right column contains buttons to edit and delete specific credentials.

## ITSM System Credentials

These credentials are used to connect to an ITSM and discover devices to scan from the ITSM's configuration item catalog.

![ITSM System Credentials](/img/changetracker/admin/ITSM System Credentials.png "ITSM System Credentials")

## Cloud System Credentials

These credentials are used by the Cloud Tracker feature to track changes to cloud platform configuration.

![Cloud System Credentials](/img/changetracker/admin/Cloud System Credentials_1120x365.png "Cloud System Credentials")

## SSH / Telnet Credentials

These credentials are used for agentless connections to devices (Linux, switches, routers, etc.) via SSH or Telnet. Credentials for Windows agentless connections are also stored here.

![SSH Telnet Credentials](/img/changetracker/admin/SSH Telnet Credentials_1118x372.png "SSH Telnet Credentials")

## Splunk Credentials

These credentials are used to connect to the API of a Splunk instance and pull specific logs into Change Tracker as change events.

![Splunk Credentials](/img/changetracker/admin/Splunk Credentials_1122x369.png "Splunk Credentials")

## ESXi / vCenter Credentials

These credentials are used to connect to ESXi devices or to connect to a vSphere and discover all of it's ESXi nodes.

![EXsi Credentials](/img/changetracker/admin/ESXi Credentials.png "EXsi Credentials")

## Database Credentials

These credentials are used by database compliance reports to connect directly to a database instance.

![Database Credentials](/img/changetracker/admin/Database Credentials_1113x358.png "Database Credentials")