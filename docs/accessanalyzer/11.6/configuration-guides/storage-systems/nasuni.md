---
title: nasuni
sidebar_label: nasuni
description: Documentation for nasuni functionality in Access Analyzer including configuration and usage information.
---

# Nasuni Edge Appliance Access & Sensitive Data Auditing Configuration

It is necessary to generate an API Key Name and Passcode for each on-premise Nasuni Edge Appliance
and cloud filer.

## Nasuni Filer Management Interface

Follow the steps to generate a Nasuni API Access Key in the Nasuni Filer Management Interface.

**Step 1 –** Within the **Configuration** menu, under **USERS & SECURITY**, select API Access Keys.
The API Access Keys page opens.

**Step 2 –** Click Add API Key button. The Add API Key window opens.

**Step 3 –** Enter a Name for thekey; for example, the name of the application.

**Step 4 –** Click Create Key.

**Step 5 –** In the Successfully Generated API Key window, copy the Key Passcode.

Both the Key Name and the Key Passcode are required for each Nasuni Edge Appliance and cloud filer.
They are used as the credentials in the Enterprise Auditor Connection Profile for 0-FS_Nasuni Job.

**NOTE:** Nasuni API key names are case sensitive. When providing them, ensure they are entered in
the exact same case as generated.

See the Nasuni
[Management Console Guide](https://nasuni.my.salesforce.com/sfc/p/#management-console-guide)
documentation for additional information.

## Nasuni Management Console

Follow the steps to generate a Nasuni API Access Key in the Nasuni Management Console.

**Step 1 –** Click Filers and select API Keys from the menu on the left. The Filer API Access Key
Settings page opens.

**Step 2 –** Click New API Key button. The Add API Access Key window opens.

**Step 3 –** From the Filer drop-down menu, select the desired Nasuni Edge Appliance. Then enter a
Name for the key; for example, the name of the application.

**Step 4 –** Click Add API Key.

**Step 5 –** A message appears which includes the Key Passcode; copy the Key Passcode.

Both the Key Name and the Key Passcode are required for each Nasuni Edge Appliance and cloud filer.
They are used as the credentials in the Enterprise Auditor Connection Profile for 0-FS_Nasuni Job.

**NOTE:** Nasuni API key names are case sensitive. When providing them, ensure they are entered in
the exact same case as generated.

See the
[Nasuni Management Console Guide](https://nasuni.my.salesforce.com/sfc/p/#nasuni-management-console-guide)
documentation for additional information.

## Nasuni Best Practices for Access Auditing

Nasuni is a hybrid NAS where actively-used data is stored on a Nasuni Edge appliance while the
authoritative copy of all files and meta data is stored in private or public cloud object storage
platforms by the UniFS® global file system, and there are egress fees associated with transferring
data between the two. In order to minimize these egress fees and optimize scan performance, it is
recommended to deploy a dedicated Nasuni Edge Appliance with all shares to be scanned by Enterprise
Auditor mounted, and the Enterprise Auditor console server, in the same region where the
authoritative copy resides.

See the
[External Auditing and Nasuni Best Practices](https://nasuni.my.salesforce.com/sfc/p/#external-auditing-and-nasuni-best-practices)
documentation for additional information.

# Nasuni Edge Appliance Activity Auditing Configuration

Generation of an API Access Key is required for Nasuni activity monitoring. The Nasuni Edge
Appliance generates its own audit trail. An API Access Key is used by the Activity Monitor to form a
network connection to the appliance. Nasuni will then stream event data to the activity agent. See
[Nasuni Support Documentation](https://www.nasuni.com/support/) for additional information.

Configuration Checklist

Complete the following checklist prior to configuring activity monitoring of Nasuni Edge Appliances.
Instructions for each item of the checklist are detailed within the following topics.

Checklist Item 1: Generate Nasuni API Access Key

- Generate an API Access Key for each Nasuni Edge Appliance to be monitored through one of the
  following:

  - Nasuni Filer Management Interface
  - Nasuni Management Console

Checklist Item 2: Activity Monitor Configuration

- Deploy the Activity Monitor activity agent to a Windows proxy server

## Nasuni Filer Management Interface

Follow the steps to generate a Nasuni API Access Key in the Nasuni Filer Management Interface.

**Step 1 –** Within the **Configuration** menu, under **USERS & SECURITY**, select API Access Keys.
The API Access Keys page opens.

**Step 2 –** Click Add API Key button. The Add API Key window opens.

**Step 3 –** Enter a Name for thekey; for example, the name of the application.

**Step 4 –** Click Create Key.

**Step 5 –** In the Successfully Generated API Key window, copy the Key Passcode.

Both the Key Name and the Key Passcode are required by the Activity Monitor in order to connect to
the Nasuni Edge Appliance. Once the API Key has been generated, it is time to configure and enable
monitoring with the Activity Monitor console.

**NOTE:** Nasuni API key names are case sensitive. When providing them, ensure they are entered in
the exact same case as generated.

## Nasuni Management Console

Follow the steps to generate a Nasuni API Access Key in the Nasuni Management Console.

**Step 1 –** Click Filers and select API Keys from the menu on the left. The Filer API Access Key
Settings page opens.

**Step 2 –** Click New API Key button. The Add API Access Key window opens.

**Step 3 –** From the Filer drop-down menu, select the desired Nasuni Edge Appliance. Then enter a
Name for the key; for example, the name of the application.

**Step 4 –** Click Add API Key.

**Step 5 –** A message appears which includes the Key Passcode; copy the Key Passcode.

Both the Key Name and the Key Passcode are required by the Activity Monitor in order to connect to
the Nasuni Edge Appliance. Once the API Key has been generated, it is time to configure and enable
monitoring with the Activity Monitor console.

**NOTE:** Nasuni API key names are case sensitive. When providing them, ensure they are entered in
the exact same case as generated.

# Nasuni Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on on-premise Nasuni Edge Appliances. The Netwrix Activity Monitor can be configured
to monitor activity on on-premise Nasuni Edge Appliances and make the event data available for
Enterprise Auditor Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Group membership in the local Administrators group

This is in addition to the API Key Name and Passcode which must be generated for each on-premise
Nasuni Edge Appliance and cloud filer. The credential used within the assigned Connection Profile
for these target hosts requires these permissions. See the
[Nasuni Edge Appliance Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/nasuni.md)
topic for instructions.

**NOTE:** These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Enterprise Auditor for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of Nasuni Edge Appliance

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

Nasuni Edge Appliance Requirements

Additionally, it is necessary to generate an API Access Key for Nasuni activity monitoring. See the
[Nasuni Edge Appliance Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/nasuni.md)
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

Additional Firewall Rules for Nasuni Edge Appliance

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Nasuni Edge Appliance:

| Communication Direction         | Protocol      | Ports | Description            |
| ------------------------------- | ------------- | ----- | ---------------------- |
| Agent Server to Nasuni          | HTTPS         | 8443  | Nasuni API calls       |
| Nasuni to Activity Agent Server | AMQP over TCP | 5671  | Nasuni event reporting |

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
