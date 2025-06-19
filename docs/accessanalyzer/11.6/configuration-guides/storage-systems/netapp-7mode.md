# NetApp Data ONTAP 7-Mode Access & Sensitive Data Auditing Configuration

This topic provides instructions for configuring API calls and bypassing NTFS security for NetApp
Data ONTAP 7-Mode devices.

## Share Enumeration – API Calls for 7-Mode

To enumerate the shares on a NetApp Data ONTAP 7-Mode device, File System scans require a credential
provisioned with access to (at minimum) the following API calls:

```
login-http-admin
api-system-api-list
api-system-get-version
api-cifs-share-list-iter-*
```

If the query configuration option to “Exclude system shares” is deselected, the credential must also
have the ability to run the following command, which is also configuration-specific:

```
api-volume-list-info-iter-*
```

## Bypass NTFS Security for 7-Mode

In order to bypass NTFS, the credential needs to at least have the following permissions on the
NetApp device:

- Group membership in both of the following groups:

  - Power Users
  - Backup Operators

If the query configuration option to “Exclude system shares” is deselected, the credential must
have:

- Group membership in the local Administrators group

**NOTE:** All NetApp groups are assigned an RID. Built-in NetApp groups such as Power Users and
Backup Operators are assigned specific RID values. On 7-Mode NetApp devices, system access checks
for a group are identified by the RID assigned to the group and not by the role it has. Therefore,
application’s ability to bypass access checks with the Power Users and Backup Operators group has
nothing to do with the power role or the backup role. Neither role is required. For example, the
built-in Power User group, even when stripped of all roles, still has more file system access
capabilities than any other non-built-in group.

If only running the Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, proceed
to the
[Provision Account](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)
topic for instructions. If also running Activity Auditing (FSAC) scan, then the FPolicy Account
Provisioned for the Netwrix Activity Monitor will meet the needs of the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans. Proceed to the
[NetApp Data ONTAP 7-Mode Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)
topic for instructions.

This credential is used within the Connection Profile assigned to the File System scans.

# NetApp Data ONTAP 7-Mode Activity Auditing Configuration

The Activity Monitor agent employed to monitor NetApp leverages 128-bit encrypted Remote Procedure
Calls (RPC), NetApp ONTAP-API, and NetApp FPolicy to monitor file system events. This includes both
NetApp 7-Mode and Cluster-Mode configurations. To learn more about FPolicy please visit the NetApp
website and read the
[What FPolicy is](https://library.netapp.com/ecmdocs/ECMP1401220/html/GUID-54FE1A84-6CF0-447E-9AAE-F43B61CA2138.html)
article.

If the activity agent is stopped, a notification will be sent to the NetApp device to disconnect and
disable the associated FPolicy policy, but it will not be removed.

If the network connection is lost between the activity agent and the NetApp device, the NetApp
device is configured with a default timeout to wait for a response. If a response is not received
from the Activity Agent within the timeout, then the NetApp device will disconnect and disable the
FPolicy policy. The Activity Agent will check every minute by default to see if the FPolicy policy
has been disabled and will enable it (if the auto-enable functionality is enabled for the agent).
The default setting to check every minute is configurable.

The NetApp FPolicy uses a “push” mechanism such that notification will only be sent to the activity
agent when a transaction occurs. Daily activity log files are created only if activity is performed.
No activity log file will be created if there is no activity for the day.

Configuration Checklist

Complete the following checklist prior to configuring activity monitoring of NetApp Data ONTAP
7-Mode devices. Instructions for each item of the checklist are detailed within the following
topics.

Checklist Item 1: Plan Deployment

- Gather the following information:
  - Names of the vFiler™(s) to be monitored
  - DNS name of the CIFS shares(s) to be monitored

Checklist Item 2:
[Provision FPolicy Account](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)

- Group membership with a role granting access to the following commands:

  ```
  login-http-admin
  api-system-api-list
  api-system-get-version
  api-cifs-share-list-iter-*
  api-volume-list-info-iter-*
  ```

- For Automatic FPolicy creation (Checklist Item 4), group membership with a role granting access to
  the following command:

  ```
  api-fpolicy*
  ```

- To use the “Enable and connect FPolicy” option within the Activity Monitor, group membership with
  a role granting access to the following command:

  ```
  cli-fpolicy*
  ```

- Group membership in:

  - ONTAP Power Users
  - ONTAP Backup Operators

Checklist Item 3: Firewall Configuration

- HTTP (80) or HTTPS (443)
- HTTP or HTTPS protocols need to be enabled on the NetApp filer
- TCP 135
- TCP 445
- Dynamic port range: TCP/UDP 137-139
- See the
  [Enable HTTP or HTTPS](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)
  topic for instructions.

Checklist Item 4:
[Configure FPolicy](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)

- If using vFilers:

  - FPolicy operates on the vFiler so the FPolicy must be created on the vFiler

    **NOTE:** Activity Monitor must target the vFiler

- Select method:

  **_RECOMMENDED:_** Configure FPolicy Manually – A tailored FPolicy

  - Allow the Activity Monitor to create an FPolicy automatically
    - This option is enabled when the Activity Monitor agent is configured to monitor the NetApp
      device on the NetApp FPolicy Configuration page of the Add New Hosts window.
    - It monitors all file system activity.

Checklist Item 5: Activity Monitor Configuration

- Deploy the Activity Monitor Activity Agent to a Windows proxy server
- Configure the Activity Agent to monitor the NetApp device

# Configure FPolicy

Select a method to configure the FPolicy for NetApp Data ONTAP 7-Mode devices:

**_RECOMMENDED:_**
[Manually Configure FPolicy (Recommended Option)](#manually-configure-fpolicy-recommended-option) –
A tailored FPolicy

- If using vFilers the FPolicy must be created on the vFiler, and the Activity Monitor must target
  the vFiler. This is because FPolicy operates on the affected vFiler. Therefore, when executing
  these commands on a vFiler, the commands must be run from a vFiler context (e.g. via the vFiler
  run command).
- Allow the Activity Monitor to create an FPolicy automatically. See the
  [Automatic Configuration of FPolicy](#automatic-configuration-of-fpolicy) topic for additional
  information.

  - This option is enabled when the Activity Monitor Activity Agent is configured to monitor the
    NetApp device on the NetApp FPolicy Configuration page of the Add New Hosts window.
  - It monitors all file system activity.

## Manually Configure FPolicy (Recommended Option)

This section describes how to manually configure FPolicy. Manual configuration of the FPolicy is
recommended so that the policy can be scoped. It is necessary to create six FPolicy components and
then enable the FPolicy. See the sections corresponding to each part of this list:

- [Part 1: Create FPolicy](#part-1-create-fpolicy)
- [Part 2: Set FPolicy Required to Off](#part-2-set-fpolicy-required-to-off)
- [Part 3: Set FPolicy to Collect Permission Changes](#part-3-set-fpolicy-to-collect-permission-changes)
- [Part 4: Set FPolicy to Monitor Alternate Data Streams](#part-4-set-fpolicy-to-monitor-alternate-data-streams)
- [Part 5: Set FPolicy to Monitor Disconnected Sessions](#part-5-set-fpolicy-to-monitor-disconnected-sessions)
- [Part 6: Scope FPolicy for Specific Volumes](#part-6-scope-fpolicy-for-specific-volumes)
- [Part 7: Enable FPolicy](#part-7-enable-fpolicy)

If using vFilers the FPolicy must be created on the vFiler, and the Activity Monitor must target the
vFiler. This is because FPolicy operates on the affected vFiler. Therefore, when executing these
commands on a vFiler, the commands must be run from a vFiler context (e.g. via the vFiler run
command).

Relevant NetApp Documentation: To learn more about configuring file policies, please visit the
NetApp website and read
[na_fpolicy – configure file policies](https://library.netapp.com/ecmdocs/ECMP1196890/html/man1/na_fpolicy.1.html)
article.

### Part 1: Create FPolicy

Create the FPolicy on the vFiler.

IMPORTANT:

- The policy should be named "StealthAUDIT"
- The only supported policy type is "screen" for file screening.

Use the following command to create the FPolicy:

```
fpolicy create StealthAUDIT screen
```

### Part 2: Set FPolicy Required to Off

If the `FPolicy Required` value is set to on, user requests are denied if an FPolicy server is not
available to implement the policy. If it is set to off, user requests are allowed when it is not
possible to apply the policy to the file because no FPolicy server is available.

IMPORTANT:

- The `FPolicy Required` value should be set to **off**

Use the following command to set the `FPolicy Required` value to off:

```
fpolicy options StealthAUDIT required off
```

### Part 3: Set FPolicy to Collect Permission Changes

The cifs_setattr value must be set to on in order for CIFS requests to change file security
descriptors to be screened by the policy.

IMPORTANT:

- The `cifs_setattr` value must be set to **on**

Use the following command to enable the FPolicy to collect permission changes:

```
fpolicy options StealthAUDIT cifs_setattr on
```

### Part 4: Set FPolicy to Monitor Alternate Data Streams

The monitor_ads value must be set to on in order for CIFS requests for alternate data streams (ADS)
to be monitored by the policy.

IMPORTANT:

- The `monitor_ads` value must be set to **on**

Use the following command to enable the FPolicy to monitor ADS:

```
fpolicy options StealthAUDIT monitor_ads on
```

### Part 5: Set FPolicy to Monitor Disconnected Sessions

The cifs_disconnect_check value must be set to on in order for CIFS requests associated with
disconnected sessions to be monitored by the policy.

IMPORTANT:

- The `cifs_disconnect_check` value must be set to **on**

Use the following command to enable the FPolicy to monitor disconnected sessions:

```
fpolicy options StealthAUDIT cifs_disconnect_check on
```

### Part 6: Scope FPolicy for Specific Volumes

The FPolicy can be scoped either to monitor only specified volumes (inclusion) or to not monitor
specific volumes (exclusion).

IMPORTANT:

- Choose to scope by including or excluding volumes

Use the following command to scope the FPolicy by volume:

```
fpolicy ‑volume [INCLUDE OR EXCLUSION] ‑add StealthAUDIT [VOLUME_NAME],[VOLUME_NAME]
```

Inclusion Example:

```
fpolicy ‑volume include ‑add StealthAUDIT samplevolume1,samplevolume2
```

Exclusion Example:

```
fpolicy ‑volume exclusion ‑add StealthAUDIT samplevolume1,samplevolume2
```

### Part 7: Enable FPolicy

The FPolicy must be enabled before the Activity Monitor Activity Agent can be configured to monitor
the NetApp device.

IMPORTANT:

- The Activity Monitor must register with the NetApp device as an FPolicy server. By default, it
  looks for a policy named `StealthAUDIT`. See the
  [Customize FPolicy Policy Name](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)
  section for information on using a different policy name.

Use the following command to enable the FPolicy to monitor disconnected sessions:

```
fpolicy enable StealthAUDIT
```

## Automatic Configuration of FPolicy

The Activity Monitor can automatically configure FPolicy on the targeted NetApp Data ONTAP 7-Mode
device. The FPolicy created monitors all file system activity. This is done when the NetApp device
is assigned to the agent for monitoring. This option is enabled on the NetApp FPolicy Configuration
page of the Add New Host window.

# Customize FPolicy Policy Name

There may be situations when FPolicy needs to be named something other than StealthAUDIT. In those
cases it is necessary to manually add a parameter to the Activity Monitor agent’s `sbtfilemon.ini`
file. After the monitoring agent has been deployed, follow the steps.

**Step 1 –** Open to the `sbtfilemon.ini` file on the agent server in a text editor:

…\STEALTHbits\StealthAUDIT\FSAC

**Step 2 –** Add the following parameter:

```
FPOLICY_POLICY_NAME=[POLICY_NAME]
```

Example:

```
FPOLICY_POLICY_NAME=EnterpriseAuditor
```

**Step 3 –** Save and close the `sbtfilemon.ini` file.

When the Activity Agent is configured to monitor a NetApp device, it looks for the FPolicy named in
the parameter.

# Enable HTTP or HTTPS

The Activity Monitor Activity Agent must be able to send ONTAPI calls to the vFiler’s data LIF over
HTTP or HTTPS. The following commands will enable the HTTP or HTTPS communication between the vFiler
and the Activity Monitor.

Use the following command to enable HTTP:

```
options httpd.admin.enable on
```

Check HTTP Status:

```
options httpd.admin.enable
```

Use the following command to enable HTTPS:

```
options httpd.admin.ssl.enable on
```

Check HTTP Status:

```
options httpd.admin.ssl.enable
```

# NetApp Data ONTAP 7-Mode Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on NetApp Data ONTAP 7-Mode devices. The Netwrix Activity Monitor can be configured
to monitor activity on NetApp Data ONTAP 7-Mode devices and make the event data available for
Enterprise Auditor Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Enumerate shares by executing specific API calls
- Bypass NTFS security to read the entire folder structure to be scanned and collect file/folder
  permissions

These permissions grant the credential the ability to enumerate shares, access the remote registry,
and bypass NTFS security on folders. The credential used within the assigned Connection Profile for
these target hosts requires these permissions. See the
[NetApp Data ONTAP 7-Mode Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)
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

Windows Proxy Server for Activity Agent Monitoring of NetApp Data ONTAP 7-Mode Device

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

NetApp Data ONTAP 7-Mode Device Requirements

An FPolicy must be configured on the target device for Activity Auditing (FSAC) scans. A tailored
FPolicy is recommended as it decreases the impact on the NetApp device. The credential associated
with the FPolicy used to monitor activity must be provisioned with access to the following API
calls:

```
login-http-admin
api-system-api-list
api-system-get-version
api-cifs-share-list-iter-*
api-volume-list-info-iter-*
```

If the Activity Monitor will be automatically configuring the FPolicy, then the following command is
also needed:

```
api-fpolicy*
```

If the Activity Monitor will be configured to use the “Enable and connect to the FPolicy” option,
then the following command is also needed:

```
cli-fpolicy*
```

The credential must also have the following permissions on the target device:

- Group membership in both of the following groups:

  - ONTAP Power Users
  - ONTAP Backup Operators

See the
[NetApp Data ONTAP 7-Mode Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/netapp-7mode.md)
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

Additional Firewall Rules for NetApp Data ONTAP 7-Mode Device

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target NetApp Data ONTAP 7-Mode device:

| Communication Direction           | Protocol         | Ports                                | Description |
| --------------------------------- | ---------------- | ------------------------------------ | ----------- |
| Activity Agent Server to NetApp\* | HTTP (optional)  | 80                                   | ONTAPI      |
| Activity Agent Server to NetApp\* | HTTPS (optional) | 443                                  | ONTAPI      |
| Activity Agent Server to NetApp   | TCP              | 135, 139 Dynamic Range (49152-65535) | RPC         |
| Activity Agent Server to NetApp   | TCP              | 445                                  | SMB         |
| Activity Agent Server to NetApp   | UDP              | 137, 138                             | RPC         |
| NetApp to Activity Agent Server   | TCP              | 135, 139 Dynamic Range (49152-65535) | RPC         |
| NetApp to Activity Agent Server   | TCP              | 445                                  | SMB         |
| NetApp to Activity Agent Server   | UDP              | 137, 138                             | RPC         |

\*Only required if using the FPolicy Configuration and FPolicy Enable and Connect options in
Activity Monitor.

**NOTE:** If either HTTP or HTTPS are not enabled, the FPolicy on the NetApp Data ONTAP 7-Mode
device must be configured manually. Also, the External Engine will not reconnect automatically in
the case of a server reboot or service restart.

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |

# Provision Account

This section describes the steps needed to create a user account with the privileges required to
execute Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans from Enterprise
Auditor. It is necessary to:

- Create Role
- Create a Group & Assign Role
- Add User to Group

Relevant NetApp Documentation: To learn more about node access controls, please visit the NetApp
website and read the
[na_useradmin – Administers node access controls](https://library.netapp.com/ecmdocs/ECMP1511537/html/man1/na_useradmin.1.html)
article.

## Create Role

This section provides instructions for creating a role with access to the following commands:

```
login-http-admin
api-system-api-list
api-system-get-version
api-cifs-share-list-iter-*
api-volume-list-info-iter-*
```

The following command needs to be run to create the role.

```
useradmin role ‑add [ROLE_NAME] ‑c "[ROLE_DESCRIPTION]" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter
```

Example:

```
useradmin role ‑add enterpriseauditor ‑c "Role for Enterprise Auditor" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*
```

After the role is created, Create a Group & Assign Role.

## Create a Group & Assign Role

Once the role has been created, it must be attached to a group. The following command needs to be
run to create a group and assign the role to it.

```
useradmin group add [GROUP_NAME] ‑r [ROLE_NAME]
```

Example:

```
useradmin group add nwxgroup ‑r enterpriseauditor
```

After the group is created and the role is assigned, Add User to Group.

## Add User to Group

The final step is to add the domain user to the new group, Backup Operators group, and Power Users
group. The following command needs to be run to add the user to all three groups.

```
useradmin domainuser ‑add [DOMAIN\USER] ‑g [GROUP_NAME, WITHIN " MARKS IF MULTIPLE WORDS], "Backup Operators","Power Users"
```

Example:

```
useradmin domainuser ‑add example\user1 ‑g nwxgroup,"Backup Operators","Power Users"
```

This credential is used within the Connection Profile assigned to the File System scans.

# Provision FPolicy Account

This topic describes the steps needed to create a user account with the privileges required to
connect the Activity Monitor Activity Agent to the FPolicy engine and to execute the NetApp API
calls required for activity monitoring and configuration.

Provisioning this account is a three part process:

- Part 1: Create Role with API/CLI Access
- Part 2: Create a Group & Assign Role
- Part 3: Add User to Group

Relevant NetApp Documentation: To learn more about node access controls, please visit the NetApp
website and read the
[na_useradmin – Administers node access controls](https://library.netapp.com/ecmdocs/ECMP1511537/html/man1/na_useradmin.1.html)
article.

## Part 1: Create Role with API/CLI Access

This section provides instructions for creating a role with access to the following commands:

```
login-http-admin
api-system-api-list
api-system-get-version
api-cifs-share-list-iter-*
api-volume-list-info-iter-*
api-fpolicy*
cli-fpolicy*
```

**NOTE:** The `api-fpolicy*` command is required for automatic configuration of FPolicy. The
`cli-fpolicy*` command is required to use the “Enable and connect FPolicy” option for a Monitored
Host configuration.

The following command needs to be run to create the role.

Run the following command when provisioning an account for manual configuration of FPolicy; it
includes the "Enable and connect FPolicy" option requirement:

```
useradmin role ‑add [ROLE_NAME] ‑c "[ROLE_DESCRIPTION]" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,cli‑fpolicy*
```

Example:

```
useradmin role ‑add enterpriseauditor ‑c "Role for Enterprise Auditor" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,cli‑fpolicy*
```

Run the following command when provisioning an account for automatic configuration of FPolicy; it
includes the "Enable and connect FPolicy" option requirement:

```
useradmin role ‑add [ROLE_NAME] ‑c "[ROLE_DESCRIPTION]" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,api‑fpolicy*,cli‑fpolicy*
```

Example:

```
useradmin role ‑add enterpriseauditor ‑c "Role for Enterprise Auditor" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,api‑fpolicy*,cli‑fpolicy*
```

After the role is created, complete Part 2: Create a Group & Assign Role.

## Part 2: Create a Group & Assign Role

Once the role has been created, it must be attached to a group. The following command needs to be
run to create a group and assign the role to it.

```
useradmin group ‑add [GROUP_NAME] ‑r [ROLE_NAME]
```

Example:

```
useradmin group ‑add nwxgroup ‑r enterpriseauditor
```

After the group is created and the role is assigned, complete Part 3: Add User to Group.

## Part 3: Add User to Group

The final step is to add the domain user to the new group, Backup Operators group, and Power Users
group. The following command needs to be run to add the user to all three groups.

```
useradmin domainuser ‑add [DOMAIN\USER] ‑g [GROUP_NAME, WITHIN " MARKS IF MULTIPLE WORDS],"Backup Operators","Power Users"
```

Example:

```
useradmin domainuser ‑add example\user1 ‑g nwxgroup,"Backup Operators","Power Users"
```
