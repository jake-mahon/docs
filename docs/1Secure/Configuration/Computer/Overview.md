---
id: overview
title: Prepare for Windows File Server Monitoring
---

# Prepare for Windows File Server Monitoring

This topic provides the requirements, limitations, protocols, and other considerations necessary for data collection from the computer while working with Netwrix 1Secure.

## Check requirements

Make sure the Windows File Servers you want to monitor meet the requirements listed in the [Prerequisites for Data Sources](../../Requirements/PrerequisitesForDataSources.md "Prerequisites for Data Sources") section.

## Decide on audit data to collect

**Step 1 –** Review the list of objects and attributes that can be monitored by Netwrix 1Secure: .

**Step 2 –** Plan for the file servers and shares you want to audit. Consider the following:

- If you have multiple file shares frequently accessed by a significant number of users, it is reasonable to audit object changes only. Tracking all events may result in too much data written to the audit logs, whereas only some part of it may be of any interest.

  Audit flags must be set on every file share or the whole computer you want to audit.

Administrative hidden shares like default system root or Windows directory (*ADMIN$*), default drive shares (*D$, E$*), etc. will not be monitored.

## Review considerations and limitations

The following considerations and limitations refer to data collection:

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster is not supported.

The following considerations and limitations refer to reporting:

- If a file server is running Windows Server 2008 SP2, Netwrix 1Secure may be unable to retrieve workstation name for the failed read attempts.
- In the reports and search results, in some cases, Netwrix 1Secure UI displays not the actual time when the event occurred but data collection time.
- Due to Windows limitations, the *copy/rename/move* actions on remote file shares may be reported as two sequential actions: copying – as adding a new file and reading the initial file; renaming/moving – as removing the initial file and adding a new file with the same name.
- To report on *copy* actions on remote file shares, make sure that audit of successful read operations is enabled. See for details.

Depending on your auditing requirements, you may need to audit your file server objects for:

- Successful read, added, modified, removed, renamed, moved, copied attempts;
- Failed read, added, modified, removed, renamed, moved, copied attempts;

- Remote registry service
- Inbound connection rules for Windows firewall

  - Configure Advanced Audit Policies

## Configure required protocols and ports

Set up protocols and ports as described in the [Protocols and Ports Required for Monitoring File Servers](ProtocolsAndPorts.md "Protocols and Ports Required for Monitoring File Servers") section.