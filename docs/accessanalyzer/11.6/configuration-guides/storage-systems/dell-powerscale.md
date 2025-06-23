# Dell Isilon/PowerScale Activity Auditing Configuration

Dell Isilon/PowerScale can be configured to audit Server Message Block (SMB) and NFS protocol access
events on the Dell Isilon/PowerScale cluster. All audit data can be forwarded to the Dell Common
Event Enabler (CEE). The Activity Monitor listens for all events coming through the Dell CEE and
translates all relevant information into entries in the log files or syslog messages.

Protocol auditing must be enabled and then configured on a per-access zone basis. For example, all
SMB protocol events on a particular access zone can be audited, while only attempts to delete files
on a different access zone can be audited.

The audit events are logged and stored on the individual OneFS nodes where the SMB/NFS client
initiated the activity. The stored events are then forwarded by the node to the Dell CEE instance or
concurrently to several instances. At this point, Dell CEE forwards the audit event to a defined
endpoint, such as Activity Monitor agent.

Complete the following checklist prior to configuring Activity Monitor to monitor the host.
Instructions for each item of the checklist are detailed within the following sections.

Checklist Item 1: Plan Deployment

- Prior to beginning the deployment, gather the following:

  - DNS name of Isilon/PowerScale CIFS share(s) to be monitored
  - Access Zone(s) containing the CIFS shares to be monitored
  - Account with access to the OneFS UI or CLI
  - Download the Dell CEE from:

    - [https://www.dell.com/support/home/en-us/](https://www.dell.com/support/home/en-us/)

**_RECOMMENDED:_** You can achieve higher throughput and fault tolerance by monitoring the
Isilon/PowerScale cluster with more than one pair of Dell CEE and Activity Monitor Agent. The
activity will be evenly distributed between the pairs.

Checklist Item 2:
[Install Dell CEE](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-powerscale.md)

- Dell CEE should be installed on a Windows or a Linux server.

  **_RECOMMENDED:_** Dell CEE can be installed on the same server as the Activity Agent, or on a
  different Windows or Linux server. If CEE is installed on the same server, the Activity Agent
  can configure it automatically.

- Important:

  - Dell CEE 8.8 is the minimum supported version. It is recommended to use the latest available
    version.
  - Dell CEE requires .NET Framework 3.5 to be installed on the Windows server

Checklist Item 3: Configure Auditing on the Dell Isilon/PowerScale Cluster

- Select method:

  - **_RECOMMENDED:_** Allow the Activity Monitor to configure auditing automatically.

    - Automation completed while the Activity Monitor is configured to monitor the
      Isilon/PowerScale device
    - Automatically sets CEE Server with the IP Address of the server where CEE is installed
    - Automatically sets Storage Cluster Name to exactly match the name known to the Activity
      Monitor
    - Choose between monitoring all Access Zones or scoping to specific Access Zones

  - [Manually Configure Auditing in OneFS](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-powerscale.md)

    - After configuration, add the Isilon/PowerScale device to be monitored by the Activity
      Monitor

- Important:

  - Value of the **Storage Cluster Name** field must exactly match the name entered for the
    monitored host in the Activity Monitor Console. If the Storage Cluster Name cannot be modified
    (for example, another 3rd party depends on it), you need to set the Host Aliases parameter in
    the Activity Monitor Console. Otherwise, if for some reason the Storage Cluster Name must be
    left empty, one can list OneFS cluster node names in the Host Aliases.

    - If the Storage Cluster Name is not empty, set the Host Aliases parameter to its value
    - If the Storage Cluster Name is empty, set the Host Aliases to a semicolon-separated list
      of OneFS node names

  - Include all Access Zones to be monitored in the auditing configuration
  - As soon as the first CEE is installed, Isilon/PowerScale will start to send all activity,
    including all previous audit events, to the agent. The start time can be modified to exclude
    previously recorded audit events to prevent the agent from becoming overloaded with data. It
    can be done using OneFS CLI only with isi audit modify command to edit the start time.

    - Start time command:

      ```
      isi audit settings global modify --cee-log-time [Protocol@2021-04-23 14:00:00]
      ```

    - View progress:

      ```
      isi_for_array isi audit progress view
      ```

    - See the Audit log time adjustment section of the Dell
      [File System Auditing with Dell PowerScale and Dell Common Event Enabler](https://www.dellemc.com/resources/en-us/asset/white-papers/products/storage/h12428-wp-best-practice-guide-isilon-file-system-auditing.pdf)
      documentation for additional information.

Checklist Item 4: Configure Dell CEE to Forward Events to the Activity Agent. See the
[Validate Setup](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-powerscale.md) topic for
additional information.

# Install Dell CEE

Dell CEE should be installed on a Windows or a Linux server. The Dell CEE software is not a Netwrix
product. Dell customers have a support account with Dell to access the download.

_Remember,_ the latest version is the recommended version of Dell CEE.

**_RECOMMENDED:_** The Dell CEE package can be installed on the Windows server where the Activity
Monitor agent will be deployed (recommended) or on any other Windows or Linux server.

Follow the steps to install the Dell CEE.

**Step 1 –** Obtain the latest CEE install package from Dell and any additional license required for
this component. It is recommended to use the most current version.

**Step 2 –** Follow the instructions in the Dell
[Using the Common Event Enabler on Windows Platforms](https://www.dell.com/support/home/en-us/product-support/product/common-event-enabler/docs)
guide to install and configure the CEE. The installation will add two services to the machine:

- EMC Checker Service (Display Name: EMC CAVA)
- EMC CEE Monitor (Display Name: EMC CEE Monitor)

**_RECOMMENDED:_** The latest version of .NET Framework and Dell CEE is recommended to use with the
asynchronous bulk delivery (VCAPS) feature.

After installation, open MS-RPC ports between the Dell device and the Dell CEE server. See the
[Dell CEE Debug Logs](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-powerscale.md#dell-cee-debug-logs)
section for information on troubleshooting issues related to Dell CEE.

## Configure Dell Registry Key Settings

There may be situations when Dell CEE needs to be installed on a different Windows server than the
one where the Activity Monitor activity agent is deployed. In those cases it is necessary to
manually set the Dell CEE registry key to forward events.

**Step 1 –** Open the Registry Editor (run regedit).

![registryeditor](/img/versioned_docs/activitymonitor_7.1/config/dellpowerstore/registryeditor.webp)

**Step 2 –** Navigate to following location:

HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\CEPP\AUDIT\Configuration

**Step 3 –** Right-click on **Enabled** and select Modify. The Edit DWORD Value window opens.

**Step 4 –** In the Value data field, enter the value of 1. Click OK, and the Edit DWORD Value
window closes.

**Step 5 –** Right-click on **EndPoint** and select Modify. The Edit String window opens.

**Step 6 –** In the Value data field, enter the StealthAUDIT value with the IP Address for the
Windows proxy server hosting the Activity Monitor activity agent. Use the following format:

StealthAUDIT@[IP ADDRESS]

Examples:

StealthAUDIT@192.168.30.15

**Step 7 –** Click OK. The Edit String window closes. Registry Editor can be closed.

![services](/img/versioned_docs/activitymonitor_7.1/config/dellpowerstore/services.webp)

**Step 8 –** Open Services (run `services.msc`). Start or Restart the EMC CEE Monitor service.

The Dell CEE registry key is now properly configured to forward event to the Activity Monitor
activity agent.

# Manually Configure Auditing in OneFS

Manual configuration for auditing is optional for newer versions as the Activity Agent can configure
the auditing automatically using the OneFS API. Follow the steps through the OneFS Storage
Administration Console.

**Step 1 –** Navigate to the **Cluster Management** tab, and select **Auditing**.

![settings](/img/versioned_docs/activitymonitor_7.1/config/dellpowerscale/settings.webp)

**Step 2 –** In the Settings section, check the Enable Protocol Access Auditing box.

**Step 3 –** In the Audited Zones section, add at least one zone to be audited. The **System** zone
is typically used. If the CIFS or NFS shares are accessible through different zones on the OneFS
cluster, include all relevant zones.

Ensure that OneFS collects only events you are interested in. By default, OneFS may monitor things
like directory reads, which can take up a large amount of space. Configuring the OneFS events that
need monitoring is not done through the Activity Monitor console. Configure OneFS event monitoring
using OneFS CLI with the isi audit modify command for each access zone. Enabling monitoring for only
what is needed for the environment will reduce the data load to the agent.

Activity Monitor monitors the following events: `close_file_modified`, `close_file_unmodified`,
`create_file`, `create_directory`, `delete_file`, `delete_directory`, `rename_file`,
`rename_directory`, `set_security_file`, `set_security_directory`, and `open_directory` (if you want
to monitor Directory List/Read events).

For each monitored access zone:

- Use isi audit settings view `isi --zone ZONENAME` to check current settings.
- Disable reporting of failure and syslog audit events with:

  isi audit settings modify --zone ZONENAME --clear-audit-failure --clear-syslog-audit-events

- Set the success audit events with:

  isi audit settings modify --zone ZONENAME
  --audit-success=close_file_modified,close_file_unmodified,create_file,create_directory,delete_file,delete_directory,rename_file,rename_directory,set_security_file,set_security_directory

![eventforwarding](/img/versioned_docs/activitymonitor_7.1/config/dellpowerscale/eventforwarding.webp)

**Step 4 –** In the Event Forwarding section, add the CEE Server URI value for the Windows or Linux
server hosting CEE. Use either of the following format:

http://[IP ADDRESS]:[PORT]/cee

http://[SERVER Name]:[PORT]/cee

**_RECOMMENDED:_** When deploying multiple Dell CEE instances at scale, it is recommended that an
accommodating agent must be configured with each CEE instance. If multiple CEE instances send events
to just one agent, it may create an overflow of data and overload the agent. Distributing the
activity stream into pairs will be the most efficient way of monitoring large data sets at scale.

**Step 5 –** Also in the Event Forwarding section, set the **Storage Cluster Name** value. It must
be an exact match to the name which is entered in the Activity Monitor for the **Monitored Host**
list.

This name is used as a ‘tag’ on all events coming through the CEE. This name must exactly match what
is in the Activity Monitor or it does not recognize the events.

**_RECOMMENDED:_** Use the CIFS DNS name for Dell OneFS.

**NOTE:** To use the Activity Monitor with Enterprise Auditor for Activity Auditing (FSAC) scans,
the name entered here must exactly match what is used for Enterprise Auditor as a target host.

If the Storage Cluster Name cannot be modified (for example, another third-party depends on it), you
need to set the Host Aliases parameter in the Activity Monitor Console:

- If the Storage Cluster Name is not empty, set the Host Aliases parameter to its value
- If the Storage Cluster Name is empty, set the Host Aliases to a semicolon-separated list of OneFS
  node names

Next, it is time to configure the monitoring agent on the Windows server to monitor the
Isilon/PowerScale device.

# Dell Isilon/PowerScale Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on Dell Isilon/PowerScale devices. The Netwrix Activity Monitor can be configured to
monitor activity on Dell Isilon/PowerScale devices and make the event data available for Enterprise
Auditor Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Group membership in the local Administrators group – LOCAL:System Provider
- Rights on the actual file tree or to the IFS root share

  - Share Permissions:

    - Read access

These permissions grant the credential the ability to enumerate shares, access the remote registry,
and bypass NTFS security on folders. The credential used within the assigned Connection Profile for
these target hosts requires these permissions. See the topic for instructions.

**NOTE:** These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

Additional Sensitive Data Discovery Auditing Permission

In order to execute scoped Sensitive Data Discovery Auditing scans, the credential must also have
the LOCAL:System provider selected in each access zone in which the shares to be scanned reside.

The credential must have an Authentication Provider configured for the Isilon/PowerScale device. For
example, if the credential is an Active Directory account, then the domain where the account resides
must be an Active Directory Authentication Provider. This is configured in the OneFS® Storage
Administration Console. Navigate to the Access tab, and select Authentication Providers.

## Local Administrator Group Membership for Isilon

Follow the steps assign membership in the local Administrators group through the OneFS Storage
Administration Console.

**Step 1 –** Navigate to the **Access** tab, and select **Membership & Roles** for the System Access
Zone.

![Groups tab](/img/versioned_docs/accessanalyzer_11.6/config/dellpowerscale/groupstab.webp)

**Step 2 –** On the **Groups** tab, set the Providers to **LOCAL: System**. Then select **View /
Edit** for the Administrators group. The View Group Details window opens.

![Edit Group window](/img/versioned_docs/accessanalyzer_11.6/config/dellpowerscale/editgroup.webp)

**Step 3 –** Click **Edit Group** and the Edit Group window opens. Click **Add Members**, and enter
the User Name and Provider in the Select a User window. Click **Select**, and then click **Save
Changes**. The Edit Group window closes.

**Step 4 –** Click **Close**. The View Group Details window closes.

Share permissions can now be granted to this credential.

## BackupAdmin Role Assignment for OneFS

Follow the steps to assign the credential to the **BackupAdmin** role through OneFS Storage
Administration Console.

**Step 1 –** Navigate to the **Access** tab > **Membership & Roles** for the System Access Zone.

![One FS Dashboard](/img/versioned_docs/accessanalyzer_11.6/config/dellpowerscale/rolestab.webp)

**Step 2 –** On the Roles tab, select **View / Edit** for the BackupAdmin role. The View Role
Details window opens.

![One FS Role Details Window](/img/versioned_docs/accessanalyzer_11.6/config/dellpowerscale/viewroledetails.webp)

**Step 3 –** Click **Edit** role and the Edit role details window opens.

**Step 4 –** Click **Add a member to this role**.

**Step 5 –** Enter the **User Name** and **Provider** in the Select a User window then click Search.
The user appears in the Search Results table.

**Step 6 –** Click **Select** and the Edit role window closes.

**Step 7 –** Click **Save Changes** and the successful save notification appears.

**Step 8 –** Click **Close**.

The View role details window closes.

## NFS Export Scan Requirements for Isilon/PowerScale

Enterprise Auditor supports scanning Isilon/PowerScale NFSv3 exports. The following settings need to
be configured in OneFS for the Enterprise Auditor server's IP address for each Isilon/PowerScale NFS
export to be scanned.

The Enterprise Auditor server IP needs to be added to the following fields in each NFS export's
settings, in the OneFS UI under **Protocols** > **UNIX sharing (NFS)** > **View/Edit** > **Edit
export** (per NFS export):

- Always read-only clients
- Root Clients

The NFS export to be scanned also needs to be configured so root squash is disabled, which is
performed in the same Edit export menu as the above settings.

**Step 1 –** Navigate to the export's **Root user mapping** settings.

**Step 2 –** Select **Map root users to a specified user**.

**Step 3 –** Set both User and Group to **0** (effectively mapping root client UID/GID to 0).

Both of these steps need to be performed in each NFS export's settings that a user would like to
scan.

### Troubleshooting NFSv3 Export Access

If Enterprise Auditor is not discovering the expected NFS export, it is possible that the export
policy is not properly configured to allow the Enterprise Auditor server or proxy server IP Address
to mount the NFS export. One step in troubleshooting this issue is to confirm a Unix client (or WSL
for Windows) in the same IP range as the Enterprise Auditor server or proxy server can mount the NFS
export.

Run the following command from a Unix host to verify the NFS mount is available:

```
showmount ‑e[NFS_HOSTNAME_OR_IP]
```

If the NFS export is returned as a result of the previous command, then Enterprise Auditor should
also be able to mount it.

## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Enterprise Auditor for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of Dell Isilon/PowerScale

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

Dell Isilon/PowerScale Requirements

Additionally, the EMC Common Event Enabler (CEE) should be installed on the Windows proxy server,
where the activity agent is deployed.

**_RECOMMENDED:_** Use the latest available CEE version from the Dell Support website.

EMC CEE requires .NET Framework 3.5 to be installed on the Windows proxy server in order for the EMC
CEE service to start.

See the
[Dell Isilon/PowerScale Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-powerscale.md)
topic for instructions.

Activity Monitor Archive Location

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Enterprise Auditor to read the activity log files must also
have READ and WRITE permissions on the archive location.

## Activity Auditing Port Requirements

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx>)
article.

Additional Firewall Rules for Dell Isilon/PowerScale Devices

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell Isilon/PowerScale device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Isilon/PowerScale to CEE Server                       | TCP      | TCP 12228         | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |

# Validate Setup

Once the Activity Monitor agent is configured to monitor the Dell device, the automated
configuration must be validated to ensure events are being monitored.

## Validate Dell CEE Registry Key Settings

After the Activity Monitor activity agent has been configured to monitor the Dell device, it will
configure the Dell CEE automatically if it is installed on the same server as the agent. This needs
to be set manually in the rare situations where it is necessary for the Dell CEE to be installed on
a different server than the Windows proxy server(s) where the Activity Monitor activity agent is
deployed.

If the monitoring agent is not registering events, validate that the EndPoint is accurately set.
Open the Registry Editor (run regedit). For the synchronous real-time delivery mode (AUDIT), use the
following steps.

**Step 1 –** Navigate to the following windows registry key:

HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\CEPP\Audit\Configuration

![registryeditorendpoint](/img/versioned_docs/activitymonitor_7.1/config/dellunity/registryeditorendpoint.webp)

**Step 2 –** Ensure that the Enabled parameter is set to 1.

**Step 3 –** Ensure that the EndPoint parameter contains an address string for the Activity Monitor
agent in the following formats:

- For the RPC protocol, `StealthAUDIT@'ip-address-of-the-agent'`

- For the HTTP protocol,` StealthAUDIT@http://'ip-address-of-the-agent':'port'`

**NOTE:** All protocol strings are case sensitive. The EndPoint parameter may also contain values
for other applications, separated with semicolons.

**Step 4 –** If you changed any of the settings, restart the CEE Monitor service.

For Asynchronous Bulk Delivery Mode

For the asynchronous bulk delivery mode with a cadence based on a time period or a number of events
(VCAPS), use the following steps.

**Step 1 –** Navigate to the following windows registry key:

HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\CEPP\VCAPS\Configuration

**Step 2 –** Ensure that the Enabled parameter is set to 1.

**Step 3 –** Ensure that the EndPoint parameter contains an address string for the Activity Monitor
agent in the following formats:

- For the RPC protocol, `StealthVCAPS@'ip-address-of-the-agent'`
- For the HTTP protocol, `StealthVCAPS@http://'ip-address-of-the-agent':'port'`

**NOTE:** All protocol strings are case sensitive. The EndPoint parameter may also contain values
for other applications, separated with semicolons.

**Step 4 –** Ensure that the FeedInterval parameter is set to a value between 60 and 600; the
MaxEventsPerFeed - between 10 and 10000.

**Step 5 –** If you changed any of the settings, restart the CEE Monitor service.

Set the following values under the Data column:

- Enabled – 1
- EndPoint – StealthAUDIT

If this is configured correctly, validate that the Dell CEE services are running. See the
[Validate Dell CEE Services are Running](#validate-dell-cee-services-are-running) topic for
additional information.

## Validate Dell CEE Services are Running

After the Activity Monitor Activity Agent has been configured to monitor the Dell device, the Dell
CEE services should be running. If the Activity Agent is not registering events and the EndPoint is
set accurately, validate that the Dell CEE services are running. Open the Services (run
`services.msc`).

![services](/img/versioned_docs/activitymonitor_7.1/config/dellpowerstore/services.webp)

The following services laid down by the Dell CEE installer should have Running as their status:

- Dell CAVA
- Dell CEE Monitor

## Dell CEE Debug Logs

If an issue arises with communication between the Dell CEE and the Activity Monitor, the debug logs
need to be enabled for troubleshooting purposes. Follow the steps.

**Step 6 –** In the Activity Monitor Console, change the **Trace level** value in the lower right
corner to Trace.

**Step 7 –** In the Activity Monitor Console, select all Dell hosts from the Monitored Hosts list
and Disable monitoring.

**Step 8 –** Download and install the Debug View tool from Microsoft on the CEE server:

> [http://docs.microsoft.com/en-us/sysinternals/downloads/debugview](http://docs.microsoft.com/en-us/sysinternals/downloads/debugview)

**Step 9 –** Open the Registry Editor (run regedit). Navigate to following location:

HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\Configuration

**Step 10 –** Right-click on **Debug** and select Modify. The Edit DWORD Value window opens. In the
Value data field, enter the value of 3F. Click OK, and the Edit DWORD Value window closes.

**NOTE:** If the Debug DWORD Value does not exist, it needs to be added.

**Step 11 –** Right-click on **Verbose** and select Modify. The Edit DWORD Value window opens. In
the Value data field, enter the value of 3F. Click OK, and the Edit DWORD Value window closes.

**NOTE:** If the Verbose DWORD Value does not exist, it needs to be added.

**Step 12 –** Run the Debug View tool (from Microsoft). In the Capture menu, select the following:

- Capture Win32
- Capture Global Win32
- Capture Events

**Step 13 –** In the Activity Monitor Console, select all Dell hosts from the Monitored Hosts list
and Enable monitoring.

**Step 14 –** Generate some file activity on the Dell device. Save the Debug View Log to a file.

**Step 15 –** Send the following logs to [Netwrix Support](https://www.netwrix.com/support.html):

- Debug View Log (from Dell Debug View tool)
- Use the **Collect Logs** button to collect debug logs from the activity agent

**_RECOMMENDED:_** After the logs have been gathered and sent to Netwrix Support, reset these
configurations.

## Linux CEE Debug Log

The debug log is stored in `/opt/CEEPack/emc_cee_svc.log` file. To enable verbose logging set Debug
and Verbose parameters under **Configuration** to 255 and restart the CEE.

**NOTE:** Debug logs should only be used for troubleshooting purposes. It's recommended to have
Debug Logs disabled by default.

```xml
...

<Configuration>

<CacheSize>100</CacheSize>

<Debug>255</Debug>

<HeartBeatIntervalSecs>10</HeartBeatIntervalSecs>

<InstrIntervalSecs>10</InstrIntervalSecs>

<NumberOfThreads>20</NumberOfThreads>

<Verbose>255</Verbose>

<HttpPort>12228</HttpPort>

<WatchDog>

<RestartCount>2</RestartCount>

<RestartDelay>5</RestartDelay>

<ResetRestartCountAfter>86400</ResetRestartCountAfter>

</WatchDog>

<LogFile>

<Path>/opt/CEEPack/</Path>

<MaxSize>100</MaxSize>

</LogFile>

</Configuration>

</CEEConfig>
```

**NOTE:** All protocol strings are case sensitive.
