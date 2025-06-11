# Manually Install the AD Module

The AD Module, powered by Threat Prevention, can only be installed on domain controllers.

Follow the steps to manually deploy the AD Module.

__Step 1 –__ From the Threat Prevention server, copy the Agent executable ( ```...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\Setup\SI Agent.exe```) to the machine where you want to install the Agent. Then run the executable. The Netwrix Threat Prevention Windows Agent Setup wizard opens.

![StealthINTERCEPT Windows Agent Setup wizard on the Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

__Step 2 –__ On the Welcome page, click __Install__. The Setup Progress page is displayed, followed by another Welcome page.

![Threat Prevention Windows Agent - Welcome Page](/img/product_docs/activitymonitor/activitymonitor/install/agent/welcome2.webp)

__Step 3 –__ Click __Next__.

![End-User License Agreement Page](/img/product_docs/activitymonitor/activitymonitor/install/agent/license.webp)

__Step 4 –__ On the End-User License Agreement page, check the __I accept the terms in the License Agreement__ box and click __Next__.

![Destination Folder Page](/img/product_docs/activitymonitor/activitymonitor/install/destinationfolder.webp)

__Step 5 –__ _(Optional)_ On the Destination Folder page, change the installation directory location.

- To change the default installation directory location, click __Change…__.

![Change Destination Folder Page](/img/product_docs/activitymonitor/activitymonitor/install/agent/changedestination.webp)

> > - Use the Look In field to select the desired installation folder.
> > - When the Folder name is as desired, click __OK__. The wizard returns to the Destination Folder page.
> > - Click __Next__.

> To use the default installation directory location, skip the previous step and click __Next__ on the Destination Folder page.

![CA Certificate Configiration Page](/img/product_docs/activitymonitor/activitymonitor/install/agent/cacertconfig.webp)

__Step 6 –__ Keep the default radio button selection, Managed by Threat Prevention.

__NOTE:__ The CA Certificate Configuration page is not applicable to the Activity Monitor.

![Enterprise Manager Location Information Page](/img/product_docs/activitymonitor/activitymonitor/install/agent/enterprisemanageram.webp)

__Step 7 –__ On the Enterprise Manager Location Information page, select the __Option__ button for a product to enable communication with it.

- Select the __SAM configuration file__ radio button.
- In the __Address or Path__ field, enter the path to the activity agent configuration file for this host. Remember, the Activity Monitor activity agent must already be deployed on the domain controller and enabled before installing the AD Agent. The default path is: ```…\STEALTHbits\StealthINTERCEPT\SIWindowsAgent\SAMConfig.xml```
- The port configuration only applies to the Enterprise Manager Host option.
- Configure additional Agent options as desired:

  - Safe Mode

    - The Safe Mode option prevents the __Windows AD Events__ monitoring module from loading if the LSASS DLL versions has been modified since the last time the Threat Prevention Windows Agent service was started.
  - Start Agent Service

    - The __Start Agent Service__ option starts the Threat Prevention Windows Agent service after the installation is complete. If the Threat Prevention Windows Agent service is not started at the time of installation, the Activity Monitor Agent will start as needed.
  - Create Windows Firewall Rules

    - The __Create Windows Firewall Rules__ option creates the rules needed to open this port during the installation process. If using a third party firewall, uncheck this option and manually create the necessary firewall rules.
- When the settings are configured, click __Next__.

![Select Event Sources Page](/img/product_docs/activitymonitor/activitymonitor/install/agent/eventsourcesad.webp)

__Step 8 –__ On the Select Event Sources page, select __Windows Active Directory Events__ as needed by the Activity Monitor for the Active Directory solution. Click __Next__.

![Windows Agent Setup wizard on the Ready page](/img/product_docs/activitymonitor/activitymonitor/install/agent/readytoinstall.webp)

__Step 9 –__ On the Ready to install Threat Prevention Windows Agent page, click __Install__. The Setup wizard displays the installation status.

![Windows Agent Setup wizard on the Operation successful page](/img/product_docs/activitymonitor/activitymonitor/install/agent/success.webp)

__Step 10 –__ When installation is complete, click __Close__.

The AD Module (SI Agent) is now installed on the server.

## Add the AD Agent to the Console

Follow the steps to add the Activity Monitor Windows Agent (with the AD Module) to the Console:

__Step 1 –__ Open the Activity Monitor Console.

__Step 2 –__ On the Agents tab, click __Add Agent__. The Add New Agent(s) window opens.

![Install New Agent](/img/product_docs/activitymonitor/activitymonitor/install/agent/installnew.webp)

__Step 3 –__ Click the __install agents on Active Directory domain controllers__ link.

![Specify Agent Port](/img/product_docs/activitymonitor/activitymonitor/install/agent/specifyport.webp)

__Step 4 –__ Specify the port for the Activity Monitor Agent. Click __Next__.

![Agent Install Location](/img/product_docs/activitymonitor/activitymonitor/install/agent/installlocation.webp)

__Step 5 –__ Specify the path of the Activity Monitor Agent, that has already been installed. Click __Next__.

![Active Directory Connection](/img/product_docs/activitymonitor/activitymonitor/install/agent/adconnection.webp)

__Step 6 –__ On the Active Directory Connection page, specify the credentials for the domain or domain controller(s) where the agent is installed. Click __Connect__ to verify connection to the domain. Click __Next__.

![Domains to Monitor](/img/product_docs/activitymonitor/activitymonitor/install/agent/domains.webp)

__Step 7 –__ Select the domain of the domain controller(s) where the agent is installed. Click __Next__.

![Domain Controllers to Deploy Agent](/img/product_docs/activitymonitor/activitymonitor/install/agent/domaincontroller.webp)

__Step 8 –__ Select the domain controller(s) where the agent is installed. Click __Test__.

__NOTE:__ 
When clicking Test while adding the Agent to the Console, the connection may fail. When clicking Test, the Activity Monitor verifies not only its ability to manage the agent but the console's ability to deploy the agent as well. Errors can be ignored if the agent was manually installed.

__Step 9 –__ Ignore the warning messages that the agent cannot be installed or upgraded and click __Next__.

![Windows Agent Settings](/img/product_docs/activitymonitor/activitymonitor/install/agent/windowsagent.webp)

__Step 10 –__ Specify the Activity Monitor Agent Management Group (if desired). Click __Finish__.

__NOTE:__ 
The Activity Monitor Agent Management Group allows users in the specified group to manage agents, but does not allow users in specified group to install, upgrade, or uninstall agents.

The console will automatically detect the agent as it is already installed.

The Agent is now added to the Activity Monitor Console.
