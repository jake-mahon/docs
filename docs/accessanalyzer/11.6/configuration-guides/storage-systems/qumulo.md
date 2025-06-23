# Qumulo Activity Auditing Configuration

The Netwrix Activity Monitor can be configured to monitor activity on Qumulo devices. To prepare
Qumulo to be monitored, an account needs to be provisioned and the audit event format may need to be
modified.

## Provision Account

Activity Monitor requires an account with the Observers role to monitor a Qumulo cluster. Follow the
steps to create a new account in the Qumulo web user interface with the Observers role.

**Step 1 –** Create a new user in **Cluster** > **Local Users & Groups**.

**Step 2 –** Assign the Observers role to the user using **Cluster** > **Role Management**.

This credential will then be used when configuring the Activity Agent to monitor the Qumulo device.

## Verify Audit Event Format

Qumulo reports audit events in one of two formats: CSV and JSON. While the Netwrix Activity Monitor
supports both, the JSON format is recommended as it provides more detail. In particular, it allows
the product to distinguish between permission change events and attribute change events, presents
granular information for permission changes, and includes user SIDs instead of just usernames. The
advanced filtering of Microsoft Office activity also requires the JSON format.

The JSON format for audit events was introduced in Qumulo Core 6.0.1. The new format can be enabled
via an SSH session to the Qumulo cluster.

Follow the steps to verify that audit event format and change the format, if needed.

**Step 1 –** Connect to the Qumulo cluster with SSH.

**Step 2 –** Execute the following command to log in:

`qq --host <ip-address-of-qumulo> login -u <user-name>`

The command will ask for the password.

**Step 3 –** Execute the following command to check current format:

qq audit_get_syslog_config

The format will be shown in the **format** field. The old format is **csv**; the new format is
**json**.

**Step 4 –** Execute the following command to change the format, if needed:

qq audit_set_syslog_config --json

The change willshould be reflected in the **format** field.

# Qumulo Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on Qumulo devices. The Netwrix Activity Monitor can be configured to monitor activity
on Qumulo devices and make the event data available for Enterprise Auditor Activity Auditing (FSAC)
scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Group membership in the Data-Administrators role

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

Netwrix Activity Monitor requires an account with the Observers role to monitor a Qumulo cluster.
See the
[Qumulo Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/qumulo.md)
topic for instructions.

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

Additional Firewall Rules for Qumulo Devices

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Qumulo device:

| Communication Direction         | Protocol | Ports | Description            |
| ------------------------------- | -------- | ----- | ---------------------- |
| Activity Agent Server to Qumulo | TCP      | 8000  | Qumulo API             |
| Qumulo to Activity Agent Server | TCP      | 4496  | Qumulo Event Reporting |

Protect the port with a username and password. The credentials will be configured in Qumulo.

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
