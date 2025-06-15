# Administration Console and Agent Not Communicating with the Enterprise Manager

As a requirement for configuring custom managed certificates, the Threat Prevention Administration Console and Agent must connect to the Enterprise Manager service using the Enterprise Manager server DNS name, hostname, or FQDN (instead of the IP address).

If you use the IP address (localhost IP or corresponding IP) when installing the Administration Console or Agent, and then configure custom managed certificates for Enterprise Manager and the Agent, the console and Agent will fail to connect to Enterprise Manager.

__NOTE:__ To configure custom managed certificates for the Enterprise Manager and the Agent, see the [Certificate Management Wizard](../install/certificatemanagementwizard.md) and [Create Custom Managed Certificates for Each Agent](../install/agent/customcert.md) topics respectively.

You must provide the Enterprise Manager server DNS name when you install the following:

- Threat Prevention server (see the [Application Server Install](../install/application.md) topic)
- Threat Prevention Agent (see the [Manual Agent Deployment](../install/agent/manual.md) topic)
- Remote instance of the Administration Console (see the [Administration Console Remote Install](../install/adminconsole.md) topic)

If you have already installed the above with the IP address of the Enterprise Manager server, you can change it to the DNS name post-install by modifying the following config files:

- SIWinConsole.exe.Config  
  Path: ```…\Netwrix\Netwrix Threat Prevention\SIWinConsole\SIWinConsole.exe.Config```
- SIWindowsAgent.exe.config  
  Path: ```…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\SIWindowsAgent.exe.config```

Follow the steps to modify these files.

__Step 1 –__ Open the SIWindowsAgent.exe.config or SIWinConsole.exe.Config file.

__Step 2 –__ Find the parameter: `<add key="managerAddress" value=`

__Step 3 –__ Change the parameter to use the DNS name of the Enterprise Manager server. For example:

`<add key="managerAddress" value="exampleservername.domain.local:3740" />`
