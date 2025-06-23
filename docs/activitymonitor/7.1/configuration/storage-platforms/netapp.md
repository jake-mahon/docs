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
[Provision FPolicy Account](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)

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
  [Enable HTTP or HTTPS](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md) topic
  for instructions.

Checklist Item 4:
[Configure FPolicy](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)

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
  [Customize FPolicy Policy Name](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)
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

# NetApp Data ONTAP Cluster-Mode Activity Auditing Configuration

The Activity Monitor agent employed to monitor NetApp leverages NetApp ONTAP API, and the NetApp
FPolicy framework to monitor file system events. This includes both NetApp 7-Mode and Cluster-Mode
configurations. For more information about FPolicy read the
[What are the two parts of the FPolicy solution ](https://library.netapp.com/ecmdocs/ECMP1401220/html/GUID-54FE1A84-6CF0-447E-9AAE-F43B61CA2138.html)
article.

Activity Monitor requires two communication channels for ONTAP monitoring:

1. Activity Monitor Agent connects to ONTAP on port 80 or 443 for access to ONTAP API (ONTAPI/ZAPI
   or REST API).
2. Data LIFs of the SVM connect to Activity Monitor Agent on port 9999 for FPolicy notifications.

The ONTAP API access is mandatory; without the API access the agent will not be able to receive and
translate events from FPolicy. Both classic ONTAPI/ZAPI and the new REST API are supported. The
agent uses the API to retrieve information about the storage virtual machines (SVM): CIFS settings,
list of volumes, list of LIFs. Depending on the configuration, the agent can also retrieve the state
of FPolicy to ensure it is enabled; configure FPolicy and register or unregister itself.

The FPolicy framework enables the collection of audit events on the ONTAP side and their transfer to
the agent(s) via the designated Data LIFs. Each LIF establishes its own connection with one or
several agents and sends notifications as soon as the file transaction occurs. The FPolicy
connection is asynchronous and buffered; both ONTAP and Activity Monitor have techniques in place to
make sure that connections are alive and working. The connection can be secured using TLS with
server or mutual authentication.

FPolicy may have a significant impact on file system throughput, and it is always a best practice to
monitor performance when enabling FPolicy.

**_RECOMMENDED:_** Create a tailored FPolicy which only collects the desired activity from the
environment to limit the scope and impact.

For scale-out and fault tolerance purposes, the product supports a range of deployment options. A
single agent can receive events from multiple SVMs. Or events from a single SVM can be distributed
among multiple agents. Or a set of SVMs can distribute events among a set of agents. The choice
depends on the fault tolerance requirements and the expected event flow. As a rule of thumb, the
_average_ load on a single agent should not exceed 5000 events per second.

Configuration Checklist

Complete the following checklist prior to configuring the activity monitoring of NetApp Data ONTAP
Cluster-Mode devices. Instructions for each item of the checklist are detailed within the following
sections.

Checklist Item 1: Plan Deployment

- Gather the following information:

  - Names of the SVM(s) to be monitored

    - FPolicy is configured for each SVM separately
    - This should be the SVM(s) hosting the CIFS or NFS shares(s) to be monitored

  - Credentials to access ONTAP to provision a role and account.
  - Desired functionality level:

    - _Manual_. A user configures FPolicy manually and ensures it stays enabled.
    - _Enable and Connect FPolicy_. The product ensures that FPolicy stays enabled and connected
      all the time. RECOMMENDED.
    - _Configure FPolicy_. The product configures FPolicy automatically and ensures it stays
      enabled and connected all the time. RECOMMENDED.

  - Volumes or shares on each SVM to be monitored

    - Limiting the FPolicy to select volumes or shares is an effective way to limit the
      performance impact of FPolicy

  - Successful/failed file operations to be monitored

    - Limiting the FPolicy to specific file operations is an effective way to limit the
      performance impact of FPolicy

  - IP Address of the server(s) where the Activity Monitor Agent is deployed
  - API enabled in ONTAP: the classic ONTAPI/ZAPI or the new REST API

    - The product supports the REST API for ONTAP 9.13.1 and above.

  - Encryption and Authentication protocol for FPolicy connection

    - No Authentication (default)
    - TLS, server authentication (the SVM authenticates the agent)
    - TLS, mutual authentication (both the SVM and the agent authenticate each other)

Checklist Item 2:
[Provision ONTAP Account](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)

- Permission names depend on the API used, ONTAPI/ZAPI or REST API.
- The case of domain and username created during the account provisioning process must match exactly
  to the credentials provided to the activity agent for authentication to work.
- The credential associated with the FPolicy used to monitor activity must be provisioned with
  access to (at minimum) the following CLI or API commands, according to the level of collection
  desired:

  - Manual, Collect Activity Events Only (Least Privilege)

    - ONTAPI/ZAPI

      - `version` – Readonly access
      - `volume` – Readonly access
      - `vserver` – Readonly access

    - REST API

      - `/api/cluster` – Readonly access
      - `/api/protocols/cifs/services` – Readonly access
      - `/api/storage/volumes` – Readonly access
      - `/api/svm/svms` – Readonly access

  - Employ the “Enable and connect FPolicy” Option (Less Privilege) – RECOMMENDED

    - ONTAPI/ZAPI

      - `version` – Readonly access
      - `volume` – Readonly access
      - `vserver` – Readonly access
      - `network interface` – Readonly access
      - `vserver fpolicy disable` – All access
      - `vserver fpolicy enable` – All access
      - `vserver fpolicy engine-connect` – All access

    - REST API

      - `/api/cluster` – Readonly access
      - `/api/protocols/cifs/services` – Readonly access
      - `/api/storage/volumes` – Readonly access
      - `/api/svm/svms` – Readonly access
      - `/api/network/ip/interfaces` – Readonly access
      - `/api/protocols/fpolicy` – All access

  - Employ the “Configure FPolicy” Option (Automatic Configuration of FPolicy) – RECOMMENDED

    - ONTAPI/ZAPI

      - `version` – Readonly access
      - `volume` – Readonly access
      - `vserver` – Readonly access
      - `network interface` – Readonly access
      - `vserver fpolicy` – All access
      - `security certificate install` – All access (only if FPolicy uses a TLS connection)

    - REST API

      - `/api/cluster` – Readonly access
      - `/api/protocols/cifs/services` – Readonly access
      - `/api/storage/volumes` – Readonly access
      - `/api/svm/svms` – Readonly access
      - `/api/network/ip/interfaces` – Readonly access
      - `/api/protocols/fpolicy` – All access
      - `/api/security/certificates` – All access (only if FPolicy uses a TLS connection)

  - Enterprise Auditor Integration requires the addition of the following CLI command:

    - `security login role show-ontapi` – Readonly access

Checklist Item 3:
[Configure Network](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)

- Agent must be able to connect to ONTAP API via a management LIF on ports HTTP (80) or HTTPS (443)

  - NetApp firewall policy may need to be modified.
  - LIF's service policy may need to be modified to include `management-https` or
    `management-http` services.
  - Either of these ports is required. Activity Monitor requires ONTAP API access.

- ONTAP cluster nodes, which serve the SVM, must be able to connect to the agent on port 9999.

  - LIFs' service policy may need to be modified to include `data-fpolicy-client` service.
  - Each data serving node should have its own LIF with the `data-fpolicy-client` service.
  - The default port 9999 can be changed in the agent's settings.

Checklist Item 4:
[Configure FPolicy](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)

- Remember: all FPolicy objects and SVM names are case sensitive.
- FPolicy must be configured for each SVM to be monitored.
- If using TLS, … authentication options, generate needed certificates and PEM files
- Select method:

  - Configure FPolicy Manually – If you want to exclude certain volumes or shares; a tailored
    FPolicy decreases the impact on NetApp.

    - Required when the FPolicy account is provisioned for either Least Privileged or Less
      Privilege permission model
    - If using TLS, … authentication options, set authentication

  - Allow the Activity Monitor to create an FPolicy automatically

    - If using TLS, … authentication options, set authentication
    - This option is enabled using the **Configure FPolicy. Create or modify FPolicy objects if
      needed** checkbox for each monitored SVM.
    - It monitors file system activity on all volumes and shares of the SVM.
    - FPolicy configuration is automatically updated to reflect the Activity Monitor
      configuration.
    - Requires a Privileged Access credential be provided.

Checklist Item 5: Activity Monitor Configuration

- Deploy the Activity Monitor Agent to a Windows server.
- Configure the Agent to monitor the SVM.

# Configure Network

Activity Monitor requires two communication channels for ONTAP monitoring:

1. ONTAP API – Activity Monitor Agent connects to ONTAP on port 80 (http) or 443 (https) for access
   to ONTAP API (ONTAPI/ZAPI or REST API).
2. FPolicy – Data LIFs of the SVM connect to Activity Monitor Agent on port 9999 for FPolicy
   notifications.

The following sections discuss network configuration required to enable API and FPolicy
communication.

## ONTAP API

The ONTAP API access is mandatory; without the API access the agent will not be able to receive and
translate events from FPolicy. The agent uses the API to retrieve information about the SVM: CIFS
settings, list of volumes, list of LIFs. Depending on the configuration, the agent can also retrieve
the state of FPolicy to ensure it is enabled; configure FPolicy and register or unregister itself.

The API access is needed either through the SVM's LIF or through the cluster management LIF with
_vserver tunneling_ feature. If you want to use the vserver tunneling feature, specify the cluster
management LIF's address in the "Management LIF" parameter in the host's settings in the Activity
Monitor.

Both classic ONTAPI/ZAPI and the new REST API are supported. Starting with ONTAP 9.13.1, the product
uses REST API by default if it is available. HTTP and HTTPS protocols are supported. For HTTPS, two
modes are supported: strict and ignore errors. For the strict mode, the product allows you to
disable the host name validation in case the agent cannot resolve the FQDN of the LIF.

Enabling the API access varies depending on ONTAP version. The following sections list common steps
on enabling the API access. Please refer to the NetApp documentation for more details.

### Management-http Service

Starting with ONTAP 9.6, data LIFs used for HTTPS communication with the Activity Monitor are
required to use a service policy that includes the `management-https` service. This service enables
HTTPS access to the LIF.

The following examples offer guidance for managing service policies, but may vary depending on the
NetApp environment’s specific configuration and needs.

**Step 1** – Display LIFs of the SVM. Take note of the _service policy_ name used by the LIF you
want to be used for API access.

```
network interface show -vserver [SVM] -instance
```

**Step 2** – Check the services included in the SVM service policy

```
network interface service-policy show -policy [POLICY_NAME]
```

**Step 3** – Add the `management-https` service if it is missing

```
set -privilege advanced
network interface service-policy add-service -service management-https -policy [POLICY_NAME] -vserver [SVM]
```

Example:

```
set -privilege advanced
network interface service-policy add-service -service management-https -policy default-data-files -vserver testserver
```

### Firewall Policy

For ONTAP 9.5 and older, the following commands can be used to either create a new firewall policy
or modify an existing policy if ONTAPI is blocked.

#### Create New Firewall HTTP Policy

Use the following commands with the Cluster Management LIF to create a new firewall HTTP policy:

```
system services firewall policy clone ‑policy data ‑vserver [ADMIN_SVM_NAME] ‑destination-policy [FIREWALL_POLICY_NAME] ‑destination-vserver [SVM_NAME]
system services firewall policy create ‑vserver [SVM_NAME] ‑policy [FIREWALL_POLICY_NAME] ‑service http ‑allow-list [IP_ADDRESS]/[NETMASK], [IP_ADDRESS]/[NETMASK]
```

Example:

```
system services firewall policy clone ‑policy data ‑vserver myontap ‑destination-policy enterpriseauditorfirewall ‑destination-vserver testserver
system services firewall policy create ‑vserver testserver ‑policy enterpriseauditorfirewall ‑service http ‑allow-list 192.168.30.15/32
```

#### Create New Firewall HTTPS Policy

Use the following commands with the Cluster Management LIF to create a new firewall HTTPS policy:

```
system services firewall policy clone ‑policy data ‑vserver [ADMIN_SVM_NAME] ‑destination-policy [FIREWALL_POLICY_NAME] ‑destination-vserver [SVM_NAME]
system services firewall policy create ‑vserver [SVM_NAME] ‑policy [FIREWALL_POLICY_NAME] ‑service https ‑allow-list [IP_ADDRESS]/[NETMASK], [IP_ADDRESS]/[NETMASK]
```

Example:

```
system services firewall policy clone ‑policy data ‑vserver myontap ‑destination-policy enterpriseauditorfirewall ‑destination-vserver testserver
system services firewall policy create ‑vserver testserver ‑policy enterpriseauditorfirewall ‑service https ‑allow-list 192.168.30.15/32
```

#### Apply Firewall Policy to SVM Data LIF

Use the following command to modify an existing firewall policy:

```
network interface modify ‑vserver [SVM_NAME] ‑lif [DATA LIF NAME] ‑firewall-policy [FIREWALL_POLICY_NAME]
```

Example:

```
network interface modify ‑vserver testserver ‑lif datal ‑firewall-policy enterpriseauditorfirewall
```

For more information about creating a firewall policy and assigning it to a LIF, read the
[Configure firewall policies for LIFs](https://docs.netapp.com/us-en/ontap/networking/configure_firewall_policies_for_lifs.html)[ ](https://docs.netapp.com/us-en/ontap/networking/configure_firewall_policies_for_lifs.html)
article.

#### Validate Firewall Policy

Run the following command to validate the firewall policy:

```
system services firewall policy show ‑policy [FIREWALL_POLICY_NAME] ‑service [HTTP_HTTPS]
```

Example:

```
system services firewall policy show ‑policy enterpriseauditorfirewall ‑service http
```

Verify that the output is displayed as follows:

![validatefirewall](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/validatefirewall.webp)

## FPolicy

The FPolicy framework enables the collection of audit events on the ONTAP side and their transfer to
the agent(s) via the designated Data LIFs. Each LIF establishes its own connection with one or
several agents and sends notifications as soon as the file transaction occurs. The FPolicy
connection is asynchronous and buffered; both ONTAP and Activity Monitor have techniques in place to
make sure that connections are alive and working. The connection can be secured using TLS with
server or mutual authentication.

ONTAP cluster nodes connect to the agent on port 9999 by default. The port can be changed in the
agent's settings. The agent adds this port to Windows Firewall exclusions automatically. Please
ensure the port is not blocked by other firewalls between ONTAP and the agent.

### Data-fpolicy-client Service

Starting with ONTAP 9.8, each data LIF of the SVM must have the **data-fpolicy-client** service
included in its service-policy configuration. This service enables the FPolicy protocol for the LIF.
Use the following commands to ensure that the service is included.

**Step 1** – Display LIFs of the SVM. Take note of the _service policy_ name used by the data LIFs.

```
network interface show -vserver [SVM] -instance
```

**Step 2** – Check the services included in the SVM service policy

```
network interface service-policy show -policy [POLICY_NAME]
```

**Step 3** – Add the **data-fpolicy-client** service if it is missing

```
set -privilege advanced
network interface service-policy add-service -service data-fpolicy-client -policy [POLICY_NAME] -vserver [SVM]
```

Example:

```
set -privilege advanced
network interface service-policy add-service -service data-fpolicy-client -policy default-data-files -vserver testserver
```

# Configure FPolicy

Activity Monitor relies on the NetApp FPolicy framework for monitoring of file access events on
SVMs. FPolicy needs to be configured for each SVM.

There are two ways to configure FPolicy:

- Activity Monitor agent can facilitate the
  [Automatic Configuration of FPolicy](#automatic-configuration-of-fpolicy) for the monitored SVM
  using the ONTAP API. This mode is simple, but does not allow you to exclude certain volumes or
  shares of the SVM from being monitored. It also requires additional permissions to create and
  modify FPolicy.
- Another option is to [Manually Configure FPolicy](#manually-configure-fpolicy) for each SVM. This
  mode allows you to fine tune FPolicy by excluding certain volumes or shares from being monitored.
  It also reduces product permissions.

Regardless of the chosen approach for FPolicy configuration, one also needs to perform extra steps
if the FPolicy communication has to be secured with TLS.

## TLS Authentication Options

There are two TLS FPolicy Authentication options that can be used:

- TLS, server authentication – Server only authentication

  - A certificate (Server Certificate) for the Agent server needs to be generated and copied to a
    PEM file. The Server Certificate PEM file needs to be saved locally on the Activity Monitor
    Console server.
  - For manual FPolicy configuration, the Server Certificate needs to be installed on the SVM, and
    then server-authentication set.
  - For automatic FPolicy configuration, the Activity Monitor manages installation of the Server
    Certificate.

- TLS, mutual authentication – Mutual authentication

  - A certificate (Server Certificate) for the Agent server needs to be generated and copied to a
    PEM file. The Server Certificate PEM file needs to be saved locally on the Activity Monitor
    Console server.
  - A certificate (Client Certificate) for the SVM needs to be copied to a PEM file and saved
    locally on the Activity Monitor Console server.
  - For manual FPolicy configuration, the Server Certificate needs to be installed on the SVM and
    then mutual-authentication set.
  - For automatic FPolicy configuration, mutual-authentication set before the configuration
    process. The Activity Monitor manages installation of both certificates.

### Generate Server Certificate

A certificate (Server Certificate) for the Agent server needs to be generated and copied to a PEM
file. This is required for both of the TLS authentication options.

The PEM file must contain both Public Key and Private Key parts. A certificate may be self-signed or
issued by a certification authority. Below are the steps for generation of a self-signed certificate
using OpenSSL toolkit.

Use the following command on the agent server to create the Server Certificate and copy it to a .pem
file:

```
openssl.exe req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=[ACTIVITY_AGENT_SERVER_NAME]" 
copy cert.pem+key.pem [CERTIFICATE_FILE_NAME.pem]
del cert.pem key.pem .rnd
```

Example:

```
openssl.exe req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=testagentserver" 
copy cert.pem+key.pem agentkey.pem
del cert.pem key.pem .rnd
```

openssl.exe req x509 newkey rsa:2048 keyout key.pem out cert.pem days 365 nodes subj
"/CN=testagentserver"

copy cert.pem+key.pem agentkey.pem

del cert.pem key.pem .rnd

In this example ` agentkey.pem` would be used as the Server Certificate. Save the Server Certificate
locally on the Activity Monitor Console server.

### Create PEM File for Client Certificate

A certificate (Client Certificate) for the SVM needs to be copied to a PEM file. This is required
for the TLS, mutual authentication option. Follow the steps to create the PEM file for the Client
Certificate.

**Step 1 –** On the SVM , use the following command to show the security certificate details:

```
security certificate show -vserver [SVM_NAME] -type server instance
```

Example:

```
security certificate show -vserver testserver -type server instance
```

**Step 2 –** Copy the security certificate details into a text file and copy the public key to a PEM
file. The following variables from security details will be needed to set mutual-authentication
during Part 6 of manual configuration and prior to automatic configuration:

- SVM
- Common Name
- Certificate Serial
- Public Key Certificate

**Step 3 –** Copy the value of Public Key Certificate field to a PEM file. The value spans multiple
lines, starts with "`----BEGIN CERTIFICATE-----`" and ends with "`-----END CERTIFICATE-----`".

The Client Certificate PEM file has been created.

## Manually Configure FPolicy

This section describes how to manually configure FPolicy. Manual configuration of the FPolicy is
recommended if the policy needs to be scoped to monitor select volumes or shares. It is necessary to
create several FPolicy components and then enable the FPolicy. See the sections corresponding to
each part of this list:

- Part 1: Install Server Certificate on the SVM (only if using TLS authentication)

  - This is only needed if using either of the TLS, … authentication options.

- Part 2: Create External Engine

  - The External Engine defines how FPolicy makes and manages connections to external FPolicy
    servers like Activity Monitor Agent.

- Part 3: Create FPolicy Events

  - An FPolicy event defines which protocol(s) to monitor and which file access events to monitor.

- Part 4: Create FPolicy Policy

  - The FPolicy policy associates the other three FPolicy components and allows for the
    designation of a privileged FPolicy user
  - If running the Access Auditing (FSAA), Activity Auditing (FSAC), and/or Sensitive Data
    Discovery Auditing scans, then this is the user account credential to be added to the
    Enterprise Auditor Connection Profile.

- Part 5: Create FPolicy Scope

  - The FPolicy scope creates the filters necessary to perform scans on specific shares or
    volumes.

- Part 6: Set TLS Authentication (optional)

  - This is only needed if using either of the TLS authentication options.

- Part 7: Enable the FPolicy

  - Once the FPolicy is enabled, the Activity Monitor Agent can be configured to monitor the SVM.

- Part 8: Connect FPolicy Server / Agent to Cluster Node (optional)

  - This is only needed if there is an issue with connection to the Cluster node or for
    troubleshooting a disconnection issue.

### Part 1: Install Server Certificate on the SVM

If using the TLS authentication options, it is necessary to install the Server Certificate on the
SVM.

Use the following command to install the Server Certificate:

```
security certificate install type client-ca -vserver [SVM_NAME]
```

Example:

```
security certificate install type client-ca -vserver testserver
```

The command will ask you to provide a public certificate. Copy the public key from the Server
Certificate PEM file, i.e. the block starting with "`-----BEGIN CERTIFICATE-----`" and ending with
"`-----END CERTIFICATE-----`". Paste the block to the terminal window.

#### Validate Part 1: Server Certificate Install

Run the following command to validate the Server Certificate is installed:

```
security certificate show -vserver [SVM_NAME] -commonname [ACTIVITY_AGENT_SERVER_NAME] -type client-ca instance
```

Example:

```
security certificate show -vserver testserver -commonname testagentserver -type client-ca instance
```

### Part 2: Create External Engine

The External Engine defines how FPolicy makes and manages connections to external FPolicy servers.

IMPORTANT:

- The `-primary-servers` must be the server hosting the Activity Monitor Agent.
- If intending to use the Activity Monitor with Enterprise Auditor, then the primary server must
  also be the proxy server from which the Enterprise Auditor Access Auditing (FSAC) scans are
  running, e.g. the Enterprise Auditor Console server for local mode or the proxy server if running
  in any of the proxy mode options.
- The following values are required:

  - `engine-name StealthAUDITEngine`, the names of the external engine object can be customized
    (see below).
  - `port 9999`, Port number can be customized, but it is recommended to use 9999.
  - `extern-engine-type asynchronous`
  - `ssl-option no-auth`
  - `send-buffer-size 6291456`, for ONTAP 9.10+ use `send-buffer-size 8388608`

**CAUTION:** All parameters are case sensitive.

Use the following command to create the external engine:

```
set -privilege advanced
vserver fpolicy policy external-engine create -vserver [SVM_NAME] -engine-name StealthAUDITEngine -primary-servers [IP_ADDRESS,…] -port 9999 -extern-engine-type asynchronous -ssl-option no-auth -send-buffer-size 6291456
```

Example:

```
set -privilege advanced
vserver fpolicy policy external-engine create -vserver testserver -engine-name StealthAUDITEngine -primary-servers 192.168.30.15 -port 9999 -extern-engine-type asynchronous -ssl-option no-auth -send-buffer-size 6291456
```

#### Validate Part 2: External Engine Creation

Run the following command to validate the creation of the external engine:

```
fpolicy policy external-engine show -instance
```

Verify that the output is displayed as follows:

![Output Displayed](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/validateexternalenginecreation.webp)

Relevant NetApp Documentation: To learn more about creating an external engine, please visit the
NetApp website and read the
[vserver fpolicy policy external-engine create](https://docs.netapp.com/us-en/ontap-cli-9141/vserver-fpolicy-policy-external-engine-create.html)
article.

### Part 3: Create FPolicy Event

An event defines which protocol to monitor and which file access events to monitor.

IMPORTANT:

- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.
- Enterprise Auditor and the Activity Monitor are capable of monitoring both NFS and CIFS. However,
  it is necessary to create separate events for each protocol.
- The following values are required:

  - `event-name`

    - For CIFS shares – ` StealthAUDITScreeningCifs` for successful events;
      `StealthAUDITScreeningFailedCifs` for failed events.
    - For NFS shares – `StealthAUDITScreeningNfsV3, StealthAUDITScreeningNfsV4` for successful
      events; `StealthAUDITScreeningFailedNfsV3, StealthAUDITScreeningFailedNfsV4` for failed
      events.  
      The names of the event objects can be customized (see
      [Customization of FPolicy Object Names](#customization-of-fpolicy-object-names)).

  - `volume-operation true`
  - `protocol` – one of the following `cifs`, `nfsv3`, `nfsv4`
  - `monitor-fileop-failure` – `true `or `false`, indicates whether failed file operations are
    reported.

- Limiting the file operations to be monitored is an excellent way to limit the performance impact
  the FPolicy will have on the NetApp device. The file operations from which to choose are below
  with additional filter options:

  - `create` – File create operations
  - `create_dir` – Directory create operations
  - `close` – File close operations

    - Enable this operation for NFSv4 to capture all read operations

  - `delete` – File delete operations
  - `delete_dir` – Directory delete operations
  - `link` – Link operations
  - `open` – File open operations for CIFS protocol

    - `open-with-delete-intent` – Limits notification to only when an attempt is made to open a
      file with the intent to delete it, according to the `FILE_DELETE_ON_CLOSE` flag
      specification

      **NOTE:** File open operations are only supported with the `open-with-delete-intent`
      filter applied.

  - `read` – File read operations

    - `first-read` – Limits notification to only first read operations for CIFS protocol. For
      ONTAP 9.2+, this filter can be used for both CIFS and NFS protocols.

  - `rename`– File rename operations
  - `rename_dir`– Directory rename operations
  - `setattr` – Set attribute operations and permission changes. The following filters are
    available for ONTAP 9.0+ to limit events to permission changes only:

    - CIFS:

      - `setattr-with-owner-change`
      - `setattr-with-group-change`
      - `setattr-with-sacl-change`
      - `setattr-with-dacl-change`

    - NFSv3:

      - `setattr-with-owner-change`
      - `setattr-with-group-change`
      - `setattr-with-mode-change`

    - NFSv4:

      - `setattr-with-owner-change`
      - `setattr-with-group-change`
      - `setattr-with-mode-change`
      - `setattr-with-sacl-change`
      - `setattr-with-dacl-change`

  - `symlink` – Symbolic link operations
  - `write` – File write operations

    - `first-write` – Limits notification to only first write operations for CIFS protocol. For
      ONTAP 9.2+, this filter can be used for both CIFS and NFS protocols.

- For failed/denied events, the list of supported file operations is limited to the following
  values:

  - CIFS: `open`
  - NFSv3:
    `create, create_dir, read, write, delete, delete_dir, rename, rename_dir, setattr, link`
  - NFSv4:
    `open, create, create_dir, read, write, delete, delete_dir, rename, rename_dir, setattr, link`

**CAUTION:** All parameters are case sensitive.

Use the following command to create the FPolicy event for CIFS protocols:

```
vserver fpolicy policy event create -vserver [SVM_NAME] -event-name StealthAUDITScreeningCifs -volume-operation true -protocol cifs -file-operations [COMMA_SEPARATED_FILE_OPERATIONS] -filters [COMMA_SEPARATED_FILTERS]
```

Example:

```
vserver fpolicy policy event create -vserver testserver -event-name StealthAUDITScreeningCifs -volume-operation true -protocol cifs -file-operations create,create_dir,delete,delete_dir,open,read,write,rename,rename_dir,setattr -filters first-read,first-write,open-with-delete-intent,setattr-with-owner-change,setattr-with-group-change,setattr-with-sacl-change,setattr-with-dacl-change
```

Use the following command to create the FPolicy event for NFSv3 protocols:

```
vserver fpolicy policy event create -vserver [SVM_NAME] -event-name StealthAUDITScreeningNfsV3 -volume-operation true -protocol nfsv3 -file-operations [COMMA_SEPARATED_FILE_OPERATIONS] -filters [COMMA_SEPARATED_FILTERS]
```

Example:

```
vserver fpolicy policy event create -vserver testserver -event-name StealthAUDITScreeningNfsV3 -volume-operation true -protocol nfsv3 -file-operations create,create_dir,delete,delete_dir,read,write,rename,rename_dir,setattr,link,symlink -filters first-read,first-write,setattr-with-owner-change,setattr-with-group-change,setattr-with-mode-change
```

Use the following command to create the FPolicy event for NFSv4 protocols:

```
vserver fpolicy policy event create -vserver [SVM_NAME] -event-name StealthAUDITScreeningNfsV4 -volume-operation true -protocol nfsv4 -file-operations [COMMA_SEPARATED_FILE_OPERATIONS] -filters [COMMA_SEPARATED_FILTERS]
```

Example:

```
vserver fpolicy policy event create -vserver testserver -event-name StealthAUDITScreeningNfsV4 -volume-operation true -protocol nfsv4 -file-operations create,create_dir,delete,delete_dir,read,write,rename,rename_dir,setattr,link,symlink,close -filters setattr-with-group-change,setattr-with-mode-change,setattr-with-sacl-change,setattr-with-dacl-change
```

#### Validate Part 3: FPolicy Event Creation

Run the following command to validate the creation of the FPolicy event:

```
fpolicy policy event show -event-name [StealthAUDITScreeningCifs or StealthAUDITScreeningNfsV3 or StealthAUDITScreeningNfsV4 or ...] -instance
```

Example:

```
fpolicy policy event show -event-name StealthAUDITScreeningCifs -instance
```

Verify that the output is displayed as follows:

![Output Displayed](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/fpolicyeventcreation.webp)

Relevant NetApp Documentation: To learn more about creating an event, please visit the NetApp
website and read the
[vserver fpolicy policy event create](https://docs.netapp.com/us-en/ontap-cli-9141/vserver-fpolicy-policy-event-create.html)
article.

### Part 4: Create FPolicy Policy

The FPolicy policy associates the other three FPolicy components and allows for the designation of a
privileged FPolicy user, or the provisioned FPolicy account. If running the Access Auditing (FSAA),
Activity Auditing (FSAC), and/or Sensitive Data Discovery Auditing scans in Enterprise Auditor, then
this is also the user account credential to be added to the Enterprise Auditor Connection Profile.

IMPORTANT:

- To monitor both CIFS and NFS protocols, two FPolicy Event were created. Multiple events can be
  included in the FPolicy policy.
- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.
- The External Engine and FPolicy Event used in this command must be the External Engine created in
  Part 2 and the FPolicy Event created in Part 3 from the previous steps.
- The following values are required:

  - `policy-name StealthAUDIT`, the name of the policy object can be customized (see
    [Customization of FPolicy Object Names](#customization-of-fpolicy-object-names)).

- The following values are required for Enterprise Auditor integration:

  - `privileged-user-name`, which must be a provisioned FPolicy account
  - `allow-privileged-access yes`

**CAUTION:** All parameters are case sensitive.

Use the following command to create the FPolicy policy to monitor both CIFS and NFS protocols:

```
vserver fpolicy policy create -vserver [SVM_NAME] -policy-name StealthAUDIT -events StealthAUDITScreeningCifs,StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -is-mandatory false -allow-privileged-access yes -privileged-user-name [DOMAIN\DOMAINUSER]
```

Example:

```
vserver fpolicy policy create -vserver testserver -policy-name StealthAUDIT -events StealthAUDITScreeningCifs,StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -is-mandatory false -allow-privileged-access yes -privileged-user-name example\user1
```

Use the following command to create the FPolicy policy to monitor only CIFS protocols:

```
vserver fpolicy policy create -vserver [SVM_NAME] -policy-name StealthAUDIT -events StealthAUDITScreeningCifs -engine StealthAUDITEngine -is-mandatory false -allow-privileged-access yes -privileged-user-name [DOMAIN\DOMAINUSER]
```

Example:

```
vserver fpolicy policy create -vserver testserver -policy-name StealthAUDIT -events StealthAUDITScreeningCifs -engine StealthAUDITEngine -is-mandatory false -allow-privileged-access yes -privileged-user-name example\user1
```

Use the following command to create the FPolicy policy to monitor only NFS protocols:

```
vserver fpolicy policy create -vserver [SVM_NAME] -policy-name StealthAUDIT -events StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -is-mandatory false -allow-privileged-access yes -privileged-user-name [DOMAIN\DOMAINUSER]
```

Example:

```
vserver fpolicy policy create -vserver testserver -policy-name StealthAUDIT -events StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -is-mandatory false -allow-privileged-access yes -privileged-user-name example\user1
```

#### Validate Part 4: FPolicy Policy Creation

Run the following command to validate the creation of the FPolicy policy:

```
fpolicy policy show -instance
```

![Output Displayed](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/validatefpolicypolicycreation.webp)

Relevant NetApp Documentation: To learn more about creating a policy, please visit the NetApp
website and read the
[vserver fpolicy policy create](https://docs.netapp.com/us-en/ontap-cli-9141/vserver-fpolicy-policy-create.html)
article.

### Part 5: Create FPolicy Scope

The FPolicy scope creates the filters necessary to perform scans on specific shares or volumes. It
is possible to set the scope to monitor all volumes or all shares by replacing the volume/share name
variable [SVM_NAME] in the command with an asterisk (\*).

IMPORTANT:

- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.
- It is not necessary to specify both volumes and shares. One or the other is sufficient.
- If you want to monitor everything, set the "`volumes-to-include`" value to "`*`".

Use the following command to create the FPolicy scope by specifying volume(s):

```
vserver fpolicy policy scope create -vserver [SVM_NAME] -policy-name StealthAUDIT -volumes-to-include [VOLUME_NAME],[VOLUME_NAME]
```

Example:

```
vserver fpolicy policy scope create -vserver testserver -policy-name StealthAUDIT -volumes-to-include samplevolume1,samplevolume2
```

Use the following command to create the FPolicy scope by specifying share(s):

```
vserver fpolicy policy scope create -vserver [SVM_NAME] -policy-name StealthAUDIT -shares-to-include [SHARE_NAME],[SHARE_NAME]
```

Example:

```
vserver fpolicy policy scope create -vserver testserver -policy-name StealthAUDIT -shares-to-include sampleshare1,sampleshare2
```

#### Validate Part 5: FPolicy Scope Creation

Run the following command to validate the FPolicy scope creation:

```
fpolicy policy scope show -instance
```

![Output Displayed](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/validatefpolicyscopecreation.webp)

Relevant NetApp Documentation: To learn more about creating scope, please visit the NetApp website
and read the
[vserver fpolicy policy scope create](https://docs.netapp.com/us-en/ontap-cli-9141/vserver-fpolicy-policy-scope-create.html)
article.

### Part 6: Set TLS Authentication

If using the TLS authentication options, it is necessary to set authentication for the type of
authentication.

#### Set Server-Authentication

Use the following command to set server-authentication:

```
vserver fpolicy policy externalengine modify -vserver [SVM_NAME] -engine-name StealthAUDITEngine -ssl-option server-auth
```

Example:

```
vserver fpolicy policy externalengine modify -vserver testserver -engine-name StealthAUDITEngine -ssl-option server-auth
```

#### Set Mutual-Authentication

Use the following command to set mutual-authentication:

```
vserver fpolicy policy external-engine modify ‑vserver [SVM_NAME] -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name [COMMON_NAME] -certificate-serial [CERTIFICATE_SERIAL] -certificate-ca [CERTIFICATE_AUTHORITY]
```

Example:

```
vserver fpolicy policy external-engine modify -vserver testserver -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name testserver -certificate-serial 461AC46521B31321330EBBE4321AC51D -certificate-ca "VeriSign Universal Root Certification Authority"
```

#### Validate Mutual-Authentication Is Set

Run the following command to confirm mutual-authentication is set:

```
vserver fpolicy policy external-engine show -fields ssl-option
```

### Part 7: Enable the FPolicy

The FPolicy must be enabled before the Activity Monitor Agent can be configured to monitor the SVM.

IMPORTANT:

- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.

Use the following command to enable the FPolicy:

```
vserver fpolicy enable -vserver [SVM_NAME] -policy-name StealthAUDIT -sequence-number [INTEGER]
```

Example:

```
vserver fpolicy enable -vserver testserver -policy-name StealthAUDIT -sequence-number 10
```

#### Validate Part 7: FPolicy Enabled

Run the following command to validate the FPolicy scope creation:

```
vserver fpolicy show
```

![Output Displayed](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/validatefpolicyenabled.webp)

Relevant NetApp Documentation: To learn more about enabling a policy, please visit the NetApp
website and read the
[vserver fpolicy enable](https://docs.netapp.com/us-en/ontap-cli-9121//vserver-fpolicy-enable.html)
article.

### Part 8: Connect FPolicy Server / Agent to Cluster Node

Manually connecting the FPolicy server (or Agent server) to the Cluster Node is only needed if there
is an issue with connection to the Cluster Node or for troubleshooting a disconnection issue.

Use the following command to connect the `StealthAUDITEngine` that belongs to the `StealthAUDIT`
policy to all Cluster Nodes:

```
policy engine-connect -vserver [SVM_NAME] -policy-name StealthAUDIT -node *
```

Example:

```
policy engine-connect -vserver testserver -policy-name StealthAUDIT -node *
```

#### Validate Part 8: Connection to Cluster Node

Run the following command to validate connection to the Cluster Node:

```
fpolicy show-engine -vserver [SVM_NAME] -policy-name StealthAUDIT -node *
```

![Output Displayed](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/connectiontoclusternode.webp)

## Automatic Configuration of FPolicy

The Activity Monitor can automatically configure FPolicy on the targeted SVM. The FPolicy created
will monitor file system activity from all volumes and shares of the SVM. This feature can be
enabled using the **Configure FPolicy. Create or modify FPolicy objects if needed** checkbox in the
monitored host's properties in the Activity Monitor.

If using the TLS, mutual authentication option, you will need to create the PEM file for the Client
Certification, which is needed during the monitored host configuration in the Activity Monitor. It
will also be necessary to set mutual authentication on the SVM.

### Set TLS Mutual-Authentication

If using the TLS, mutual authentication options, it is necessary to set authentication.

Use the following command to set mutual-authentication:

```
vserver fpolicy policy external-engine modify -vserver [SVM_NAME] -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name [COMMON_NAME] -certificate-serial [CERTIFICATE_SERIAL] -certificate-ca [CERTIFICATE_AUTHORITY]
```

Example:

```
vserver fpolicy policy external-engine modify -vserver testserver -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name testserver -certificate-serial 461AC46521B31321330EBBE4321AC51D -certificate-ca "VeriSign Universal Root Certification Authority"
```

#### Validate: Mutual-Authentication

Run the following command to confirm mutual-authentication is set:

```
vserver fpolicy policy external-engine show -fields ssl-option
```

## Customization of FPolicy Object Names

Activity Monitor uses the following FPolicy object names by default:

- Policy name: `StealthAUDIT`
- External Engine name: `StealthAUDITEngine`
- CIFS Event name: `StealthAUDITScreeningCifs`
- NFS v3 Event name: `StealthAUDITScreeningNfsV3`
- NFS v4 Event name: `StealthAUDITScreeningNfsV4`
- Failed CIFS Event name: `StealthAUDITScreeningFailedCifs`
- Failed NFS v3 Event name: `StealthAUDITScreeningFailedNfsV3`
- Failed NFS v4 Event name: `StealthAUDITScreeningFailedNfsV4`

These names can be customized in the monitored host's settings in the Activity Monitor. It can be
useful in two scenarios:

- You want the names to match the company policies;
- You want to configure FPolicy manually using your custom names, but also want to leverage the
  "Enable and Connect FPolicy" feature of the Activity Monitor, so that the product ensures that
  FPolicy stays enabled and connected at all times.

# Provision ONTAP Account

This topic describes the steps needed to create a user account with the privileges required to
connect the Activity Monitor Agent to ONTAP API and to execute the API calls required for activity
monitoring and configuration.

Provisioning this account is a two part process:

- Part 1: Create Security Role
- Part 2: Create Security Login

## Part 1: Create Security Role

This section provides instructions for creating an access-control role. An access-control role
consists of a role name and a set of commands or API endpoints to which the role has access. It also
includes an access level (none, read-only, or all) and a query that applies to the specified command
or API endpoint.

The permissions needed depends on the functionality level:

- Least Privileged: ONLY Collect Events – This is the minimal functionality level. A user manually
  configures FPolicy and ensures that it stays enabled and connected. The product only collects
  events. This functionality level is not recommended as it requires an additional solution that
  tracks the state of FPolicy and fixes the problem should ONTAP disconnect or should the policy
  become disabled.
- **_RECOMMENDED:_** Less Privileged: Enable/Connect Policy & Collect Events – With this level, the
  user still performs the initial FPolicy configuration manually. The product tracks the state of
  FPolicy with periodic checks to ensure it stays enabled and connected all the time.
- **_RECOMMENDED:_** Automatically Configure the FPolicy – With this full-blown level, no manual
  configuration is needed. The product performs the initial FPolicy configuration; updates FPolicy
  to reflect configuration changes; ensures that FPolicy stays enabled and connected all the time.

No matter which set of permissions you provision, validate the configuration before continuing to
Part 2. See the
[Validate Part 1: Security Role Configuration](#validate-part-1-security-role-configuration) topic
for additional information.

If the FPolicy is to be used for both the Activity Monitor and Enterprise Auditor, the account also
needs to be provisioned with an additional permission. See the
[Enterprise Auditor Integration](#enterprise-auditor-integration) topic for additional information.

The commands to create a role and names of permissions depend on the ONTAP API used. The product
supports both the classic ONTAPI/ZAPI and the new REST API. For ONTAPI/ZAPI you need to use
`security login role create` command to create a RBAC access control role. The required commands are
listed in the `cmddirname` parameter. For REST API, use `security login rest-role create` command to
create a REST access control role. The required API endpoint is specified in the `api` parameter.
The following sections provide instructions for both API modes.

### Least Privileged: ONLY Collect Events

If the desire is for a least privileged model, the Activity Monitor requires the following
permissions to collect events.

#### ONTAPI/ZAPI

- `version` – Readonly access
- `volume` – Readonly access
- `vserver` – Readonly access

Use the following commands to provision read-only access to all required commands:

```
security login role create -role [ROLE_NAME] -cmddirname "version" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "volume" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver" -access readonly -query "" -vserver [SVM_NAME]    
```

Example:

```
security login role create -role enterpriseauditor -cmddirname "version" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditor -cmddirname "volume" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditor -cmddirname "vserver" -access readonly -query "" -vserver testserver
```

#### REST API

- `/api/cluster` – Readonly access
- `/api/protocols/cifs/services` – Readonly access
- `/api/storage/volumes` – Readonly access
- `/api/svm/svms` – Readonly access

Use the following commands to provision read-only access to all required API endpoints:

```
security login rest-role create -role [ROLE_NAME] -api "/api/cluster" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/cifs/services" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/storage/volumes" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/svm/svms" -access readonly -vserver [SVM_NAME]
```

Example:

```
security login rest-role create -role enterpriseauditorrest -api "/api/cluster" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/cifs/services" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/storage/volumes" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/svm/svms" -access readonly -vserver testserver
```

**NOTE:** If the FPolicy account is configured with these permissions, it is necessary to manually
configure the FPolicy. See the
[Configure FPolicy](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)
topic for additional information.

### Less Privileged: Enable/Connect FPolicy & Collect Events

If the desire is for a less privileged model, the Activity Monitor requires the following
permissions to collect events:

#### ONTAPI/ZAPI

- `version` – Readonly access
- `volume` – Readonly access
- `vserver` – Readonly access

  `network interface` – Readonly access

- `vserver fpolicy disable` – All access
- `vserver fpolicy enable` – All access

  _Remember,_ this permission permits the Activity Monitor to enable the FPolicy. If the “Enable
  and connect FPolicy” option is employed but the permission is not provided, the agent will
  encounter “Failed to enable policy” errors, but it will still be able to connect to the FPolicy.
  Since this permission model requires a manual configuration of the FPolicy, then the need to
  manually enable the FPolicy will be met.

- `vserver fpolicy engine-connect` – All access

Use the following command to provision access to all required commands:

```
security login role create -role [ROLE_NAME] -cmddirname "version" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "volume" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "network interface" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy disable" -access all -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy enable" -access all -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy engine-connect" -access all -query "" -vserver [SVM_NAME]
```

Example:

```
security login role create -role enterpriseauditorrest -cmddirname "version" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "volume" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "network interface" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy disable" -access all -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy enable" -access all -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy engine-connect" -access all -query "" -vserver testserver
```

#### REST API

- `/api/cluster` – Readonly access
- `/api/protocols/cifs/services` – Readonly access
- `/api/storage/volumes` – Readonly access
- `/api/svm/svms` – Readonly access
- `/api/network/ip/interfaces` – Readonly access
- `/api/protocols/fpolicy` – All access

Use the following commands to provision read-only access to all required API endpoints:

```
security login rest-role create -role [ROLE_NAME] -api "/api/cluster" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/cifs/services" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/storage/volumes" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/svm/svms" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/network/ip/interfaces" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/fpolicy" -access all -vserver [SVM_NAME]
```

Example:

```
security login rest-role create -role enterpriseauditorrest -api "/api/cluster" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/cifs/services" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/storage/volumes" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/svm/svms" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/network/ip/interfaces" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/fpolicy" -access all -vserver testserver
```

**NOTE:** If the FPolicy account is configured with these permissions, it is necessary to manually
configure the FPolicy. See the
[Configure FPolicy](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)
topic for additional information.

### Automatically Configure the FPolicy

If the desire is for the Activity Monitor to automatically configure the FPolicy, the security role
requires the following permissions:

#### ONTAPI/ZAPI

- `version` – Readonly access
- `volume` – Readonly access
- `vserver` – Readonly access

  `network interface` – Readonly access

- `vserver fpolicy` – All access
- `security certificate install` – All access

  _Remember,_ this permission is only needed for FPolicy TLS connections.

Use the following command to provision access to all required commands:

```
security login role create -role [ROLE_NAME] -cmddirname "version" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "volume" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "network interface" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy" -access all -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "security certificate install" -access all -query "" -vserver [SVM_NAME]
```

Example:

```
security login role create -role enterpriseauditorrest -cmddirname "version" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "volume" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "network interface" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy" -access all -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "security certificate install" -access all -query "" -vserver testserver
```

#### REST API

- `/api/cluster` – Readonly access
- `/api/protocols/cifs/services` – Readonly access
- `/api/storage/volumes` – Readonly access
- `/api/svm/svms` – Readonly access
- `/api/network/ip/interfaces` – Readonly access
- `/api/protocols/fpolicy` – All access
- `/api/security/certificates` – All access

  Remember, this permission is only needed for FPolicy TLS connections.

Use the following commands to provision access to all required API endpoints:

```
security login rest-role create -role [ROLE_NAME] -api "/api/cluster" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/cifs/services" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/storage/volumes" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/svm/svms" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/network/ip/interfaces" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/fpolicy" -access all -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/security/certificates" -access all -vserver [SVM_NAME]
```

Example:

```
security login rest-role create -role enterpriseauditorrest -api "/api/cluster" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/cifs/services" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/storage/volumes" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/svm/svms" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/network/ip/interfaces" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/fpolicy" -access all -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/security/certificates" -access all -vserver testserver
```

**NOTE:** If the FPolicy account is configured with these permissions, the Activity Monitor can
automatically configure the FPolicy. See the
[Configure FPolicy](/docs/activitymonitor/7.1/configuration/storage-platforms/netapp.md)
topic for additional information.

### Enterprise Auditor Integration

If the desire is for FPolicy to be used with both the Activity Monitor and Enterprise Auditor, then
the following permission is also required:

- `security login role show-ontapi` – Readonly access

Use the following command to provision read-only access to security login role show-ontapi commands:

```
security login role create -role [ROLE_NAME] -cmddirname "security login role show-ontapi" -access readonly -query "" -vserver [SVM_NAME]
```

Example:

```
security login role create -role enterpriseauditor -cmddirname "security login role show-ontapi" -access readonly -query "" -vserver testserver
```

### Validate Part 1: Security Role Configuration

For ONTAPI, run the following command to validate the RBAC security role configuration:

```
security login role show [ROLE_NAME]
```

Example:

```
security login role show enterpriseauditor
```

Relevant NetApp Documentation: For more information about creating RBAC access control roles, read
the
[security login role create](https://docs.netapp.com/us-en/ontap-cli-9141//security-login-role-create.html)
article.

For REST API, run the following command to validate the REST security role configuration:

```
security login rest-role show [ROLE_NAME]
```

Example:

```
security login rest-role show enterpriseauditorrest
```

For more information about creating REST access control roles, read the
[security login rest-role create](https://docs.netapp.com/us-en/ontap-cli-9141/security-login-rest-role-create.html)
article.

## Part 2: Create Security Login

Once the access control role has been created, apply it to a domain account. Ensure the following
requirements are met:

- The SVM used in the following command must be the same SVM used when creating the access control
  role in Part 1.
- All parameters are case sensitive.
- It is recommended to use lowercase for both domain and username. The case of domain and username
  created during the account provisioning process must match exactly to the credentials provided to
  the Activity Monitor activity agent for authentication to work.

Use the following command to create the security login for the security role created in Part 1:

```
security login create -user-or-group-name [DOMAIN\DOMAINUSER] -application ontapi -authentication-method [DOMAIN_OR_PASSWORD_AUTH] -role [ROLE_NAME] -vserver [SVM_NAME]
```

Example:

```
security login create -user-or-group-name example\user1 -application ontapi -authentication-method domain -role enterpriseauditor -vserver testserver
```

Validate this security login was created.

### Validate Part 2: Security Login Creation

Run the following command to validate security login:

```
security login show [DOMAIN\DOMAINUSER]
```

Example:

```
security login show example\user1
```

Verify that the output is displayed as follows:

![validatesecuritylogincreation](/img/versioned_docs/activitymonitor_7.1/config/netappcmode/validatesecuritylogincreation.webp)

For more information about creating security logins, read the
[security login create](https://docs.netapp.com/us-en/ontap-cli-9141/security-login-create.html)
article.
