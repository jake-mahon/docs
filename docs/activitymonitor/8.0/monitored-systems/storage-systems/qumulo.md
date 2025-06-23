---
title: Qumulo Storage System Monitoring
sidebar_label: Qumulo
description: Configure Qumulo storage system monitoring settings including device configuration and activity monitoring for file system operations.
---

# Qumulo Tab

The Qumulo tab provides features to configure settings for monitoring Qumulo devices.

![Agent Properties - Qumulo](/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/qumulo.webp)

The available options are:

- Syslog port (TCP) – Enter the TCP port that Qumulo will use to connect to the agent. The agent
  will add the port to the firewall exclusions automatically. The default is 4496. The range of
  valid values is from 1000 to 65535.
- IPv4 or IPv6 allowlist – Specify the IP addresses of the Qumulo nodes, which are allowed to
  connect to the agent server port. Multiple addresses can be entered separated by space, comma (,),
  semicolon (;), or as a multi-line list. Leave the box blank to accept connections from any hosts.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent
Properties window closes.

# Qumulo

Understanding File Activity Monitoring

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of
  values

It provides the ability to feed activity data to SIEM products. The following dashboards have been
specifically created for Activity Monitor event data:

- For IBM® QRadar®, see the
  [Netwrix File Activity Monitor App for QRadar](/docs/activitymonitor/8.0/integrations/siem/qradar.md) for additional
  information.
- For Splunk®, see the [File Activity Monitor App for Splunk](/docs/activitymonitor/8.0/integrations/siem/splunk.md) for
  additional information.

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Access Analyzer (formerly Enterprise Auditor)
- Netwrix Threat Prevention
- Netwrix Threat Manager

Prior to adding a Qumulo host to the Activity Monitor, the prerequisites for the target environment
must be met. See the [Qumulo Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/other-storage.md)
topic for additional information.

_Remember,_ the Activity Agent must be deployed to a Windows server that acts as a proxy for
monitoring the target environment.

## Add Qumulo Host

Follow the steps to add a Qumulo host to be monitored.

**Step 1 –** In Activity Monitor, go to the Monitored Hosts tab and click **Add**. The Add New Host
window opens.

![addagent01](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addagent01.webp)

**Step 2 –** On the Choose Agent page, select the Agent to monitor the file server from the
drop-down list. Click **Next**.

![addhostqumulo01](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostqumulo01.webp)

**Step 3 –** On the Add Host page, select the **Qumulo** radio button and enter the file server
name. Click **Next**.

![addhostqumulo02](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostqumulo02.webp)

**Step 4 –** On the Qumulo Options page, enter the user name and password.

- Protocol – Select from the following options in the drop-down list:
  - Auto Detect
  - HTTPS
  - HTTPS, ignore certificate errors
- Connect – Click **Connect** to connect to the Qumulo device using the selected protocol and
  validate the connection.

The following values are shown for information purposes. You can use them to configure auditing in
Qumulo.

- Syslog Address – Address to configure Qumulo cluster.
- Port – Port to configure Qumulo cluster.

Click **Next**.

![nutanixoptions_07](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_07.webp)

**Step 5 –** On the Where To Log The Activity page, select whether to send the activity to either a
Log File or Syslog Server. Click **Next**.

**NOTE:** An option must be selected before moving to the next step.

![addhostqumulo04](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostqumulo04.webp)

**Step 6 –** If Log File is selected on the Where To Log The Activity page, configure the File
Output page.

- Specify output file path – Specify the file path where TSV log files are saved on the agent's
  server. Click the ellipses button (...) to open the Windows Explorer to navigate to a folder
  destination. Click **Test** to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered as the number of
  days elapses. The default is 10 days. Use the dropdown to specify whether to keep the Log files
  for a set number of Hours or Days.
- This log file is for Access Analyzer – Enable this option to have Access Analyzer collect this
  monitored host configuration

  **_RECOMMENDED:_** Identify the configuration to be read by Access Analyzer when integration is
  available.

  **NOTE:** While Activity Monitor can have multiple configurations for log file outputs per host,
  Access Analyzer can only read one of them.

- Add header to Log files – Adds headers to TSV files. This is used to feed data into Splunk.

  **NOTE:** Access Analyzer does not support log files with the header.

Click **Next**.

![nutanixoptions_09](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_09.webp)

**Step 7 –** If Syslog Server is selected on the Where To Log The Activity page, configure the
Syslog Output page.

- Syslog server in SERVER[:PORT] format – Type the **Syslog server name** with a SERVER:Port format
  in the textbox.
  - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
    organization’s environment can resolve the name format used.
- Syslog Protocol – Identify the **Syslog protocol** to be used for the Event stream. The drop-down
  menu includes:

  - UDP
  - TCP
  - TLS

  The TCP and TLS protocols add the **Message framing** drop-down menu. See the
  [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md) topic for additional information.

- The Test button sends a test message to the Syslog server to check the connection. A green check
  mark or red will determine whether the test message has been sent or failed to send. Messages vary
  by Syslog protocol:

  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md) topic for additional information.

Click **Finish**.

![addhostqumulo06](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostqumulo06.webp)

The added Qumulo host is displayed in the monitored hosts table. Once a host has been added for
monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md) topic
for additional information.

## Host Properties for Qumulo

Configuration settings can be edited through the tabs in the host’s Properties window. The
configurable host properties are:

- [Qumulo Tab](/docs/activitymonitor/8.0/monitored-systems/storage-systems/qumulo.md)
- [Inactivity Alerts Tab](/docs/activitymonitor/8.0/monitored-systems/hosts/windows.md)

See the [Host Properties Window](/docs/activitymonitor/8.0/monitored-systems/index.md) topic for additional information.

# Qumulo Tab

The Qumulo tab allows users to modify settings after a Qumulo host has been configured. Once a
Qumulo host is added to the monitored hosts table, the configuration can be edited in the host
Properties.

![Qumulo Host Properties](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/qumulohostproperties.webp)

The configurable options are:

- Cluster name – Enter the name of the filer
- Username – Enter the user name for the Qumulo user
- Password – Enter the password for the user name
- Protocol – Select one of the following protocols from the drop-down menu:

  - Auto Detect
  - HTTPS
  - HTTPS, ignore certificate errors

- Connect – Click to connect using the selected protocol and validate the connection with Qumulo

![Trusted Server Certificate popup window](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/trustedservercertificate.webp)-
HTTPS Options – Opens the Trusted server certificate window to customize the certificate
verification during a TLS session

- Import – Click to browse for a trusted server certificate
- Remove – Click to remove the selected trusted server certificate
- Enable hostname verification – Select this checkbox to ensure that the host name the product
  connects and matches the name in the certificate (CN name)
- Click **OK** to close the window and save the modifications.
