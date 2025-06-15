# Manually Install the Activity Agent

The Netwrix Activity Monitor Agent can be deployed via the console or manually.

Follow the steps to manually install the agent.

__Step 1 –__ Navigate to the Activity Monitor Console installation path and locate the agent installation package. The default location is:

```C:\Program Files\Netwrix\Activity Monitor\Console\Agents\x64\SBFileMonAgent.msi```

__Step 2 –__ Copy the Activity Monitor agent installation package to the target server.

__Step 3 –__ Click the Activity Monitor agent installation package and the Wizard opens.

![Activity Monitor Agent Setup Wizard - Welcome Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

__Step 4 –__ On the welcome page click __Next__.

![End-User License Agreement Page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.png)

__Step 5 –__ On the End-User License Agreement page, select the __I accept the terms in the License Agreement__ option and click __Next__.

![Destination Folder Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/destinationfolder.png)

__Step 6 –__ (Optional) On the Destination Folder page, click __Change__ to change the installation directory location.

![Change Destination Folder Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/changedestination.png)

__Step 7 –__ Click __OK__ on the Change destination folder page to return to the Destination folder page. Click __Next__.

![Ready to install Netwrix Activity Monitor Agent 64-bit Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/readyinstall.png)

__Step 8 –__ On the Ready to install page, click __Install__. The installation process begins. The Setup wizard displays the installation status.

![Completion Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/complete.png)

__Step 9 –__ When installation is complete, click Finish.

## (Optional) Command Line Installation

If needed, the following command line options can be used with extra logging and install options. The Activity Monitor Agent command line has the following parameters:

- AGENT_PORT

  - To specify Activity Monitor Agent port.
  - Default value: “4498”
  - AGENT_PORT=1234
- AGENTINSTALLLOCATION

  - To specify the Activity Monitor Agent installation path.
  - Default value: “C:\Program Files\Netwrix\Activity Monitor\Agent”
  - AGENTINSTALLLOCATION=“D:\AMAgent”
- MANAGEMENT_GROUP

  - To specify the Activity Monitor Agent Management Group (This allows user to limit users in the specified group to manage agents, but does not allow users in specified group to install, upgrade, or uninstall agents).
  - Default value: “BUILTIN\Administrators”
  - MANAGEMENT_GROUP=AMDOMAIN\AMGROUP
- /l\*v

  - To include verbose install logging.
  - /l\*v "C:\amagent.log"

  __NOTE:__  If installation fails, locate the log file, and search for "Return value 3". The lines above "Return value 3" should contain information on what caused the installation to fail.
- /qn

  - To install the agent in quiet / Unattended Mode (without UI)

Example:

```msiexec.exe /i C:\SBFileMonAgent.msi AGENT_PORT=1234 AGENTINSTALLLOCATION=“D:\AMAgent” MANAGEMENT_GROUP=AMDOMAIN\AMGROUP /l*v c:\amagent.log /qn```

## Add the Activity Agent to the Console

Before deploying the Activity Monitor agent, ensure all [Activity Agent Server Requirements](/versioned_docs/activitymonitor_7.1/activitymonitor/requirements/activityagent.md) have been met, including those for NAS devices when applicable.

__NOTE:__ These steps are specific to deploying activity agents for monitoring file systems, SharePoint, SQL Server, Azure and Office 365 environments. See the [Active Directory Agent Deployment](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/activedirectory.md) section for instruction on deploying the AD agent. See the [Linux Agent Deployment](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/linux.md) topic for instructions on deploying agents to Linux servers.

Follow the steps to deploy the activity agent to a single Windows server.

__Step 1 –__ Open the Activity Monitor Console.

__Step 2 –__ On the Agents tab, click __Add Agent__. The Add New Agent(s) window opens.

![Install New Agent Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/installnew.png)

__Step 3 –__ Specify the server name where the agent will be deployed. To add multiple server names, see the [Multiple Activity Agents Deployment](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/multiple.md) topic for additional information. Click __Next__.

![Agent Port Configuration](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/portdefault.png)

__Step 4 –__ Specify the port to be used for the agent. Click __Next__.

![Credentials to connect to servers](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/credentials.png)

__Step 5 –__ On the Credentials to Connect to the Server(s) page, specify the credentials for the server to which the agent is deployed. See the [Single Activity Agent Deployment](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/single.md) topic for additional information on credential options. Click __Connect__.

__NOTE:__ When clicking __Connect__ while adding the Agent to the Console, the connection may fail. When clicking Connect, the Activity Monitor verifies not only its ability to manage the agent but the console's ability to deploy the agent as well. Errors can be ignored if the agent was manually installed.

__Step 6 –__ Regardless of the warning messages that the agent cannot be installed or upgraded, click __Next__. The console will automatically detect the agent as it is already installed.

![Agent Install Location](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/installlocation.png)

__Step 7 –__ Specify the path of the Activity Monitor Agent, that has already been installed. Click __Next__.

![Windows Agent Settings](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/windowsagent.png)

__Step 8 –__ Specify the Activity Monitor Agent Management Group (if desired). Click Finish.

__NOTE:__ The Activity Monitor Agent Management Group allows users in the specified group to manage agents, but does not allow users in specified group to install, upgrade, or uninstall agents.

The Agent is now added to the Activity Monitor.

During the installation process of the agent, the status will display Installing. If there are any errors, the Activity Monitor stops the installation and lists the errors in the Agent messages box.

![Activity Monitor Agent Installed](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/consolewithagent.png)

When the Activity Monitor agent installation is complete, the status changes to __Installed__ and the activity agent version populates. The next step is to add hosts to be monitored.
