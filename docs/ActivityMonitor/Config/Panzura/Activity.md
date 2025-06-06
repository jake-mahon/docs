---
id: activity
title: Panzura CloudFS Monitoring
---

# Panzura CloudFS Monitoring

Netwrix Activity Monitor can be configured to monitor file system activity on Panzura CloudFS file-based storage.

The monitoring process is based on two technologies:

- Third Party Vendor Support auditing feature – Delivers audit events to Activity Monitor Agents

Auditing must be enabled on the master Panzura node and optionally overridden on the subordinate nodes to support different deployment scenarios depending on the expected load and network latency. A single agent monitors several Panzura nodes.

![](/img/activitymonitor/config/panzura/PanzuraSingleAgntMonitor.png)

![](/img/activitymonitor/config/panzura/AuditEventsTwoAgnt_Panzura.png)

The monitoring process relies on the Third Party Vendor Support auditing feature of the Panzura CloudFS platform, which uses the AMQP protocol for event delivery. Unlike typical uses of the AMQP protocol that require messaging middleware, the Panzura master and subordinate nodes connect directly to the Netwrix Activity Monitor Agent, eliminating the need for middleware.

**NOTE:** See the [Panzura](/Admin/MonitoredHosts/Add/Panzura.md "Panzura") topic for additional information on Panzura Host.

To prepare Panzura CloudFS for monitoring, auditing must be enabled.

## Enable Auditing in CloudFS

Auditing in CloudFS can be enabled either automatically or manually.

***RECOMMENDED:*** Using the automatic option using the CloudFS API streamlines the configuration process and ensures that auditing remains enabled and accurate.

## Automatic Configuration

Netwrix Activity Monitor uses the CloudFS API to configure Third Party Vendor Support auditing option.

## Manual Configuration

Follow these steps to enable auditing.

**Step 2 –** Enable the **Generate Third Party Logs** option.

**Step 3 –** Enable the **Push to Subordinate(s)** option.

**Step 4 –** Enter **other** as the Vendor Name.

**Step 5 –** Under Actions, specify close, create, delete, delxattr, mkdir, move, open, read, remove, rename, rlclaim, rmdir, setxattr, and writeUnder .

If you require monitoring of Directory Read/List operations, which typically generate a high volume of data, also include readdir to the list.

**Step 6 –** Specify * in Include Files.

**Step 7 –** Specify - in Exclude Files.

**Step 8 –** Finally, add the Panzura host to be monitored in the Activity Monitor Console.

Auditing is now enabled.

## Network Configuration

Activity Monitor agents register themselves as consumers of audit data via the CloudFS API. The agents pass their IP address and port along with other AMQP parameters. Panzura nodes use this information to establish connections with the Activity Monitor agents.

Follow the steps for network configuration.

**Step 1 –** Open Activity Monitor Console.

**Step 2 –** On the Agents tab, select an agent and click **Edit**.

**Step 3 –** Use the Network tab to select the network interface that will be used for registration.

**Step 4 –** Use the Panzura tab to modify the port. The default port is 4497.

The agent will configure the Windows Firewall to allow incoming connections to the specified port automatically. Use the following table to configure the firewall.

| Communication Direction | Protocol | Ports | Description |
| --- | --- | --- | --- |
| Activity Monitor Console to Activity Monitor Agents | TCP | 4498 | Agent communication |
| Activity Monitor Agent to Panzura nodes | TCP/HTTPS | 443 | CloudFS API |
| Panzura nodes to Activity Monitor Agent | TCP/AMQP | 4497 | Audit events |