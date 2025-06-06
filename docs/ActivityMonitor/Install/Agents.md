---
id: agents
title: Agent Information
---

# Agent Information

The Activity Monitor agents perform real-time monitoring of the events occurring across supported systems and applications. There are three types of agents:

- Activity Agent – Deploy this agent to monitor:

  - Exchange Online – Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment
  - Microsoft Entra ID – Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment
  - Network Attached Storage Devices – Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment

    ***RECOMMENDED:*** The proxy Windows server should be close to the NAS device in the network to decrease latency

    - For Dell devices – The agent server must have CEE installed
  - SharePoint – Activity Agent must be deployed to the SharePoint Application server that hosts the “Central Administration” component of the SharePoint farm
  - SharePoint Online – Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment
  - SQL Server – Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment
  - Windows File Server – Activity Agent must be deployed to the server. It cannot be deployed to a proxy server.

    - Credentials used for deployments must also be provisioned for monitoring
- AD Agent – Deploy this agent to monitor Active Directory. The AD Agent is deployed to every domain controllers to monitor Active Directory domains.
- Linux Agent – Deploy this agent to monitor Linux File Servers. The Linux Agent is deployed to Linux servers to be monitored.

  - Credentials used for deployments must also be provisioned for monitoring

In order to perform centralized agent maintenance from the application console server, WMI must be enabled on the machine where the agent is installed.

You will need the following information to deploy agents from the console:

- Server name – Name or an IP Address of the server

See the [Agents Tab](/Admin/Agents/Overview.md "Agents Tab") topic for additional information on how to deploy agents using console.

The Activity Monitor Agent may also be deployed manually. Use one of the following to manually install an agent:

- [Manually Install the Activity Agent](Agent/Manual.md "Manually Install the Activity Monitor Agent")
- [Manually Install the Linux Agent](Agent/ManualLinux.md "Manually Install the Activity Monitor Linux Agent")
- [Manually Install the AD Module](Agent/ManualAD.md "Manually Install the AD Module")