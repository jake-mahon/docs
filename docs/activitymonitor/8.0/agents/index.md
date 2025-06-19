# Agents Tab

The **Agents** tab is used to deploy activity agents and manage settings. This is the only tab
available until an agent is installed.

![Image of Agents Home Page](/img/product_docs/activitymonitor/activitymonitor/admin/agents/agentaddedfinalimage.webp)

The Agents tab is comprised of a button bar, a table of servers hosting activity agents, and an
Agent Messages box. The button bar allows users to take the following actions:

- Add Agent – Opens the Add New Agent(s) window to deploy the activity/AD agent to a single server
  or to multiple servers at the same time. The following sections provide additional information:

  - [Single Activity Agent Deployment](/docs/activitymonitor/8.0/agents/deployment/active-directory.md)
  - [Multiple Activity Agents Deployment](/docs/activitymonitor/8.0/agents/deployment/bulk-deployment.md)
  - [Active Directory Agent Deployment](/docs/activitymonitor/8.0/activitymonitor/admin/agents/add/activedirectory.md)
  - [Linux Agent Deployment](/docs/activitymonitor/8.0/agents/deployment/linux.md)
  - Remove – Opens the Remove Agents window where users can choose to remove the hosting server
    from the activity agents table or uninstalling the activity agent from the hosting server
    before removing the activity agent from the table. See the
    [Remove Agents](/docs/activitymonitor/8.0/agents/management/removal.md) topic for additional information.

- Edit – Opens the selected server’s Properties window to modify the server name or credentials. See
  the [Agent Properties Window](/docs/activitymonitor/8.0/agents/configuration/connection-settings.md) topic for additional information.
- Start pending modules – Starts AD agent monitoring modules which were not yet started

  - Occasionally a Microsoft Security Bulletin impacting LSASS can interfere with the AD agent
    instrumentation resulting in LSASS shutting down. The AD agents are configured to monitor for
    an LSASS process termination shortly after a server reboot. The AD agent can be configured for
    Safe Mode to prevent the Windows AD events monitoring module from loading if the version of
    all DLLs SI hooks into have changed since the last restart.

- Install – Deploy or upgrade an activity agent to the selected host
- Upgrade – [When Agent Status is Outdated] Replaces outdated activity agent with current version
- Update Installer – Opens a browser window to select the newer AD agent installer. A confirmation
  window then opens and identifies the new installer version. See the
  [Update AD Agent Installer](/docs/activitymonitor/8.0/agents/management/upgrade.md) topic for additional
  information.
- Refresh all – Refresh the status of all activity agents

The table of servers hosting activity agents provides the following information:

- Server Name – Name or IP Address of the server hosting an activity agent
- Status – Status of the deployed activity agent(s)

  **NOTE:** If the AD agent has been deployed, a status of “outdated” could apply to either the
  activity agent or the AD agent installed on the domain controller.

- Version – Version of the deployed activity agent
- AD Module – Version of the deployed AD agent
- Domain – Name or IP Address of the domain
- Messages – Count of the number of error and warning messages for the selected server
- Archive Location – If archiving is enabled for the activity agent, displays the archive file path
- Archive Size – If archiving is enabled for the activity agent, displays the archive size

![Agent Messages](/img/product_docs/activitymonitor/activitymonitor/admin/agents/agentmessages.webp)

The **Agent messages** box displays any error or warning messages from the selected activity agent.
These messages are related to deployment/installation, communication between the console and the
activity/AD agent, and upgrade of an activity/AD agent.

**NOTE:** Activity agents from Activity Monitor v3.1+ can now be controlled by Activity Monitor
v4.0+ Console.

For additional information on how to deploy agents manually, see the
[Agent Information](/docs/activitymonitor/8.0/agents/index.md) topic.

# Agent Information

The Activity Monitor agents perform real-time monitoring of the events occurring across supported
systems and applications. There are three types of agents:

- Activity Agent – Deploy this agent to monitor:

  - Exchange Online – Activity Agent must be deployed to a Windows server that acts as a proxy for
    monitoring the target environment
  - Microsoft Entra ID – Activity Agent must be deployed to a Windows server that acts as a proxy
    for monitoring the target environment
  - Network Attached Storage Devices – Activity Agent must be deployed to a Windows server that
    acts as a proxy for monitoring the target environment

    **_RECOMMENDED:_** The proxy Windows server should be close to the NAS device in the network
    to decrease latency

    - For Dell devices – The agent server must have CEE installed

  - SharePoint – Activity Agent must be deployed to the SharePoint Application server that hosts
    the “Central Administration” component of the SharePoint farm
  - SharePoint Online – Activity Agent must be deployed to a Windows server that acts as a proxy
    for monitoring the target environment
  - SQL Server – Activity Agent must be deployed to a Windows server that acts as a proxy for
    monitoring the target environment
  - Windows File Server – Activity Agent must be deployed to the server. It cannot be deployed to
    a proxy server.

    - Credentials used for deployments must also be provisioned for monitoring

- AD Agent – Deploy this agent to monitor Active Directory. The AD Agent is deployed to every domain
  controllers to monitor Active Directory domains.
- Linux Agent – Deploy this agent to monitor Linux File Servers. The Linux Agent is deployed to
  Linux servers to be monitored.

  - Credentials used for deployments must also be provisioned for monitoring

In order to perform centralized agent maintenance from the application console server, WMI must be
enabled on the machine where the agent is installed.

You will need the following information to deploy agents from the console:

- Server name – Name or an IP Address of the server
- Credentials – Account used to deploy must be a member of the BUILTIN\Administrators group on the
  target server

See the [Agents Tab](/docs/activitymonitor/8.0/agents/index.md) topic for additional information on how to deploy
agents using console.

The Activity Monitor Agent may also be deployed manually. Use one of the following to manually
install an agent:

- [Manually Install the Activity Agent](/docs/activitymonitor/8.0/agents/management/manual-installation.md)
- [ Manually Install the Linux Agent](/docs/activitymonitor/8.0/agents/management/manual-installation.md)
- [Manually Install the AD Module](/docs/activitymonitor/8.0/agents/management/manual-installation.md)
