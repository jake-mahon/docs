# Windows File Server Access & Sensitive Data Auditing Configuration

Permissions required for Enterprise Auditor to execute Access Auditing (SPAA) and/or Sensitive Data
Discovery Auditing scans on a Windows file server are dependent upon the Scan Mode Option selected.
See the
[File System Supported Platforms](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

However, additional considerations are needed when targeting a Windows File System Clusters or DFS
Namespaces.

## Windows File System Clusters

The permissions necessary to collect file system data from a Windows File System Cluster must be set
for all nodes that comprise the cluster.

**NOTE:** It is necessary to target the Windows File Server Cluster (name of the cluster) of
interest when running a File System scan against a Windows File System Cluster.

Configure credentials on all cluster nodes according to the Windows Operating Systems required
permissions for the desired scan mode with these additional considerations:

- For
  [Applet Mode](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md#applet-mode)
  and
  [Proxy Mode with Applet](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md#proxy-mode-with-applet):

  - Applet will be deployed to each node
  - Credential used in the Connection Profile must have rights to deploy the applet to each node

- For
  [Proxy Mode as a Service](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md#proxy-mode-as-a-service):

  - Proxy Service must be installed on each node
  - For Sensitive Data Discovery Auditing scans, the Sensitive Data Discovery Add-on must be
    installed on each node

Additionally, the credential used within the Connection Profile must have rights to remotely access
the registry on each individual cluster node.

_Remember,_ Remote Registry Service must be enabled on all nodes that comprise the cluster.
Configure the credential(s) with the following rights on all nodes:

- Group membership in the local Administrators group
- Granted the “Log on as a batch” privilege

Host List Consideration

It is necessary to target the Windows File Server Cluster (name of the cluster) of interest when
running a File System scan against a Windows File System Cluster. Within the Master Host Table,
there should be a host entry for the cluster as well as for each node. Additionally, each of these
host entries must have the name of the cluster in the `WinCluster` column in the host inventory
data. This may need to be updated manually.

See the View/Edit section of the
[Host Management Activities](/docs/accessanalyzer/11.6/administration/host-management/management.md)
topic for additional information on host inventory.

- For FSAA and SDD scans, configure a custom host list to target the cluster's Role Server.
- For FSAC scans, configure a custom host list to target the Windows File Server Cluster.

The host targeted by the File System scans is only the host entry for the cluster. For example:

The environment has a Windows File System Cluster named `ExampleCluster1` with three nodes named
`ExampleNodeA`, `ExampleNodeB`, and `ExampleNodeC`. There would be four host entries in the
StealthAUDIT Master Host Table: `ExampleCluster1`, `ExampleNodeA`, `ExampleNodeB`, and
`ExampleNodeC`. Each of these four entries would have the same value of the cluster name in the
`WinCluster` column: `ExampleCluster1`. Only the `ExampleCluster1` host would be in the host list
targeted by the File System scans.

Sensitive Data Discovery Scans

For Sensitive Data Discovery Auditing scans on a Windows File System Cluster it is necessary for the
credential to also have Group membership in both of the following local groups for all nodes which
comprise the cluster:

- Power Users
- Backup Operators

Activity Auditing Scans

The Netwrix Activity Monitor must deploy an Activity Agent on all nodes that comprise the Windows
File System Cluster. The Activity Agent generates activity log files stored on each node. Enterprise
Auditor targets the Windows File Server Cluster (name of the cluster) of interest in order to read
the activity. See the
[Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/windows-file-systems.md)
topic for additional information.

The credential used Enterprise Auditor to read the activity log files must have:

- Membership in the local Administrators group

The FileSystemAccess Data Collector needs to be specially configured to run the
[1-FSAC System Scans Job](/docs/accessanalyzer/11.6/solutions/file-systems/permissions-analysis.md)
against a Windows File System Cluster. On the
[FSAA: Activity Settings](/docs/accessanalyzer/11.6/data-collection/file-systems/configuration.md),
configure the Host Mapping option. This provides a method for mapping between the target host and
the hosts where activity logs reside. However, this feature requires **advanced SQL scripting
knowledge** to build the query.

Membership in the local Administrators group

### Least Privilege Permission Model for Windows Cluster

If a least privilege model is required by the organization, then the credential must have READ
access on the following registry keys:

- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\SBTLogging\Parameters`
- `HKEY_LOCAL_MACHINE\Cluster\Nodes`

Additionally, the credential must have READ access to the path where the activity log files are
located.

## DFS Namespaces

The FileSystem > 0.Collection > 0-FSDFS System Scans Job is configured by default to target the
default domain controller for the domain in which Enterprise Auditor resides. This is the
appropriate target host for this job when targeting a domain-based namespace. To target a standalone
namespace or multiple namespaces, create a custom host list of the server(s) hosting the
namespace(s). Then assign the custom host list to the 0-FSDFS System Scans Job. No additional host
list is require for the FileSystem > 0.Collection Job Group unless additional file servers are also
being targeted.

DFS as Part of a Windows Cluster Consideration

If the DFS hosting server is part of a Windows Cluster, then the Windows File System Clusters
requirements must be included with the credential.

DFS and Activity Auditing Consideration

For activity monitoring, the Netwrix Activity Monitor must have a deployed Activity Agent on all DFS
servers identified by the 0-FSDFS System Scans Job and populated into the dynamic host list. See the
[Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/windows-file-systems.md)
topic for additional information.

# Windows File Server Activity Auditing Configuration

In order for the Netwrix Activity Monitor to monitor Windows file server activity, an Activity Agent
must be deployed to the server. It cannot be deployed to a proxy server. However, additional
considerations are needed when targeting a Windows File System Clusters or DFS Namespaces.

## Windows File System Clusters

In order to monitor a Windows File System Cluster, an Activity Agent needs to be deployed on all
nodes that comprise the Windows File System Cluster. The credential used to deploy the Activity
Agent must have the following permissions on the server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

After the agent has been deployed, it is necessary to modify the HOST parameter in the
`SBTFilemon.ini` file to be the name of the cluster. For integration with Netwrix Enterprise
Auditor, this must be an exact match to the name of the cluster in the Master Host Table.

## DFS Namespaces

In order to monitor activity on DFS Namespaces, an Activity Agent needs to be deployed on all DFS
servers.

**NOTE:** The FileSystem > 0.Collection > 0-FSDFS System Scans Job in Netwrix Enterprise Auditor can
be used to identify all DFS servers.

The credential used to deploy the Activity Agent must have the following permissions on the server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

# Windows File Server Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on Windows file servers. The Netwrix Activity Monitor can be configured to monitor
activity on Windows file servers and make the event data available for Enterprise Auditor Activity
Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

- Permissions vary based on the Scan Mode Option selected. See the
  [File System Supported Platforms](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
  topic for additional information.

Windows File System Cluster Requirements

See the
[Windows File Server Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/windows-file-systems.md)
topic for instructions.

Windows File System DFS Namespaces Requirements

See the
[Windows File Server Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/windows-file-systems.md)
topic for instructions.

## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Enterprise Auditor for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

## Activity Auditing Permissions

Requirements to Deploy the Activity Agent on the Windows File Server

The Netwrix Activity Monitor must have an Activity Agent deployed on the Windows file server to be
monitored. While actively monitoring, the Activity Agent generates activity log files stored on the
server. The credential used to deploy the Activity Agent must have the following permissions on the
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

Windows File System Cluster Requirements

See the
[Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/windows-file-systems.md)
topic for instructions.

Windows File System DFS Namespaces Requirements

See the
[Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/storage-systems/windows-file-systems.md)
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

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
