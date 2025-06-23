# Dell Celerra & Dell VNX Access & Sensitive Data Auditing Configuration

This topic provides instructions for assigning group membership for Dell Celerra & Dell VNX devices.

## Assign Group Membership for Dell Devices

Follow the steps assign group membership through Computer Management.

**Step 1 –** Open Computer Management (`compmgmt.msc`).

**Step 2 –** Right-click on the Computer Management (local) node and select Connect to another
computer.

**Step 3 –** Enter the name of the Dell device in the textbox and click OK.

**Step 4 –** Navigate to the Local Users and Groups > Groups node for the device.

**Step 5 –** Select the Backup Operators group and add the account being provisioned.

**Step 6 –** Select the Power Users group and add the account being provisioned.

The account has been provisioned for Access Auditing and Sensitive Data Discovery Auditing.

# Dell Celerra & Dell VNX Activity Auditing Configuration

An Dell Celerra or VNX device can be configured to audit Server Message Block (SMB) protocol access
events. All audit data can be forwarded to the Dell Common Event Enabler (CEE). The Activity Monitor
listens for all events coming through the Dell CEE and translates all relevant information into
entries in the Log files or syslog messages.

Complete the following checklist prior to configuring the Activity Monitor to monitor the host.
Instructions for each item of the checklist are detailed within the following sections.

Checklist Item 1: Plan Deployment

- Prior to beginning the deployment, gather the following:

  - DNS name of Celerra or VNX CIFS share(s) to be monitored
  - Data Mover or Virtual Data Mover hosting the share(s) to be monitored
  - Account with access to the CLI
  - Download the Dell CEE from:

    - [https://www.dell.com/support](https://www.dell.com/support)

Checklist Item 2: Install Dell CEE

- Dell CEE can be installed on the same Windows server as the Activity Agent, or on a different
  server. If it is installed on the same host, the activity agent can configure it automatically.

  **_RECOMMENDED:_** The latest version of Dell CEE is the recommended version to use with the
  asynchronous bulk delivery (VCAPS) feature.

- Important:

  - Open MS-RPC ports between the Dell device and the Windows proxy server(s) where the Dell CEE
    is installed
  - Dell CEE 8.4.2 through Dell CEE 8.6.1 are not supported for use with the VCAPS feature
  - Dell CEE requires .NET Framework 3.5 to be installed on the Windows proxy server

- See the
  [Install & Configure Dell CEE](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-celerra-vnx.md)
  topic for instructions.

Checklist Item 3: Dell Device Configuration

- Configure the `cepp.conf` file on the Celerra VNX Cluster
- See the
  [Connect Data Movers to the Dell CEE Server](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-celerra-vnx.md#connect-data-movers-to-the-dell-cee-server)
  topic for instructions.

Checklist Item 4: Activity Monitor Configuration

- Deploy the Activity Monitor Activity Agent, preferably on the same server where Dell CEE is
  installed

  - After activity agent deployment, configure the Dell CEE Options tab of the agent’s Properties
    window within the Activity Monitor Console

Checklist Item 5: Configure Dell CEE to Forward Events to the Activity Agent

# Install & Configure Dell CEE

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

See the
[CEE Debug Logs](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-unity.md#cee-debug-logs)
section for information on troubleshooting issues related to Dell CEE.

After Dell CEE installation is complete, it is necessary to
[Connect Data Movers to the Dell CEE Server](#connect-data-movers-to-the-dell-cee-server).

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

## Connect Data Movers to the Dell CEE Server

The `cepp.conf` file contains information that is necessary to connect the Data Movers to the Dell
CEE server. An administrator must create a configuration file which contains at least one event, one
pool, and one server. All other parameters are optional. The `cepp.conf` file resides on the Data
Mover.

**Step 1 –** Log into the Dell Celerra or VNX server with an administrator account. The
administrative account should have a $ character in the terminal.

**NOTE:** Do not use a # charter.

**Step 2 –** Create or retrieve the `cepp.conf` file.

If there is not a `cepp.conf` file on the Data Mover(s), use a text editor to create a new blank
file in the home directory named `cepp.conf`. The following is an example command if using the text
editor ‘vi’ to create a new blank file:

$ vi cepp.conf

> If a `cepp.conf` file already exists, it can be retrieved from the Data Movers for modification
> with the following command:

$ server_file [DATA_MOVER_NAME] -get cepp.conf cepp.conf

**Step 3 –** Configure the `cepp.conf` file. For information on the `cepp.conf` file, see the Dell
[Using the Common Event Enabler for Windows Platforms](https://www.dellemc.com/en-us/collaterals/unauth/technical-guides-support-information/products/storage-3/docu48055.pdf)
guide instructions on how to add parameters or edit the values or existing parameters.

**NOTE:** The information can be added to the file on one line or separate lines by using a space
and a ”\” at the end of each line, except for the last line and the lines that contain global
options: `cifsserver`, `surveytime`, `ft`, and `msrpcuser`.

The Activity Monitor requires the following parameters to be set in the `cepp.conf` file:

- `pool name= `
  - This should equal the name assigned to the configuration container. This container is composed
    of the server(s) IP Address or FQDN where the Dell CEE is installed and where the list of
    events to be monitored is located. It can be named as desired but must be a pool name.
- `servers= `
  - This should equal the IP Address or FQDN of the Windows server where the Dell CEE is
    installed. If several servers are specified, separate them with the vertical bar (|) or a
    colon (:).
- `postevents= `
  - The following events are required (separated with the vertical bar):
    `CloseModified|CloseUnmodified|CreateDir|CreateFile|DeleteDir|DeleteFile|RenameDir|RenameFile|SetAclDir|SetAclFile `
  - If "Directory Read/List" operations are needed, append `OpenDir` to the list.
- `msrpcuser= `

  - This should equal the domain account used to run the Dell CEE Monitor and Dell CAVA services
    on the Windows server. This parameter is a security measure used to ensure events are only
    sent to the appropriate servers.

    All unspecified parameters use the default setting. For most configurations, the default
    setting is sufficient.

  Example cepp.conf file format:

  msrpcuser=[DOMAIN\DOMAINUSER]

  pool name=[POOL_NAME] \

  servers=[IP_ADDRESS1]|[IP_ADDRESS2]|... \

  postevents=[EVENT1]|[EVENT2]|...

  Example cepp.conf file format for the Activity Monitor:

  msrpcuser=[DOMAIN\DOMAINUSER running CEE services]

  pool name=[POOL_NAME for configuration container] \

  servers=[IP_ADDRESS where CEE is installed]|... \

  postevents=[EVENT1]|[EVENT2]|...

  Example of a completed cepp.conf file for the Activity Monitor:

  msrpcuser=example\user1

  pool name=pool \

  servers=192.168.30.15 \

  postevents=CloseModified|CloseUnmodified|CreateDir|CreateFile|DeleteDir|DeleteFile|RenameDir|RenameFile|SetAclDir|SetAclFile

**Step 4 –** Move the `cepp.conf` file to the Data Mover(s) root file system. Run the following
command:

$ server_file [DATA_MOVER_NAME]‑put cepp.conf cepp.conf

**NOTE:** Each Data Mover which runs Celerra Event Publishing Agent (CEPA) must have a `cepp.conf`
file, but each configuration file can specify different events.

**Step 5 –** (This step is required only if using the `msrpcuser` parameter) Register the MSRPC user
(see Step 3 for additional information on this parameter). Before starting CEPA for the first time,
the administrator must issue the following command from the Control Station and follow the prompts
for entering information:

/nas/sbin/server_user server_2 -add -md5 -passwd [DOMAIN\DOMAINUSER for msrpcuser]

**Step 6 –** Start the CEPA facility on the Data Mover. Use the following command:

server_cepp [DATA_MOVER_NAME] -service –start

Then verify the CEPA status using the following command:

server_cepp [DATA_MOVER_NAME] -service –status

Once the `cepp.config` file has been configured, it is time to configure and enable monitoring with
the Activity Monitor. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

# Dell Celerra & Dell VNX Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on Dell Celerra or Dell VNX devices. The Netwrix Activity Monitor can be configured
to monitor activity on Dell Celerra or Dell VNX devices and make the event data available for
Enterprise Auditor Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Group membership in both of the following groups:

  - Power Users
  - Backup Operators

These permissions grant the credential the ability to enumerate shares, access the remote registry,
and bypass NTFS security on folders. The credential used within the assigned Connection Profile for
these target hosts requires these permissions. See the
[Dell Celerra & Dell VNX Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-celerra-vnx.md)
topic for instructions.

**NOTE:** These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

Troubleshooting Dell Celerra & Dell VNX Denied Access Errors

If there are folders to which the credential is denied access, it is likely that the Backup
Operators group does not have the “Back up files and directories” right. In that case, it is
necessary to assign additional the “Back up files and directories” right to those groups or to
create a new local group, using Computer Management from a Windows server. Then assign rights to it
using the CelerraManagementTool.msc plugin, which is available to Dell customers. For further
information, see the Celerra guide Using Windows Administrative Tools on VNX found on the Celerra
website.

## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Enterprise Auditor for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of Dell Celerra or Dell VNX

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

Dell Celerra & Dell VNX Requirements

Additionally, the EMC Common Event Enabler (CEE) should be installed on the Windows proxy server,
where the activity agent is deployed.

**_RECOMMENDED:_** Use the latest available CEE version from the Dell Support website.

EMC CEE requires .NET Framework 3.5 to be installed on the Windows proxy server in order for the EMC
CEE service to start.

See the
[Dell Celerra & Dell VNX Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-celerra-vnx.md)
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

Additional Firewall Rules for Dell Celerra & Dell VNX Devices

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Device CEE Server                                     | TCP      | RPC Dynamic Range | CEE Communication |
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

**NOTE:** See the
[Configure Dell Registry Key Settings](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/dell-unity.md#configure-dell-registry-key-settings)
topic for information on manually setting the registry key.

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
