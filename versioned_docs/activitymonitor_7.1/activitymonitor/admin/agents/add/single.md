# Single Activity Agent Deployment

Before deploying the activity agent, ensure all [Activity Agent Server Requirements](/versioned_docs/activitymonitor_7.1/activitymonitor/requirements/activityagent.md) have been met, including those for NAS devices when applicable. Follow the steps to deploy the activity agent to a single Windows server.

__NOTE:__ These steps are specific to deploying activity agents for monitoring supported target environments.

__Step 1 –__ On the Agents tab, click Add agent to open the Add New Agent(s) window.

![Install New Agent window](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/installnew.png)

__Step 2 –__ On the Install new agent page, enter the Server name (name or IP Address) to deploy to a single server. Leave the field blank to deploy the agent on the local server. Click Next.

![Specify Agent Port page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/portdefault.png)

__Step 3 –__ On the Specify Port page, specify the port that should be used by the new agent. The default port is 4498. Click __Next__.

![Credentials to Connect to the Server(s) page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/credentials.png)

__Step 4 –__ On the Credentials To Connect To The Server(s) page, select ether Windows or Linux file monitoring. Then, enter the __User name__ and __Password__ to connect to the API Server.

[![Test Account Connection](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/testaccountconnection.png)](/versioned_docs/activitymonitor_7.1/resources/images/activitymonitor/manualinstall/single/testaccountconnection.png)

__Step 5 –__ Click __Connect__ to test the connection. If the connection is successful, click __Next__. If the connection is unsuccessful, see the status message that appears for information on the failed connection and correct the error to proceed.

![agentinstalllocation](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/agentinstalllocation.png)

__Step 6 –__ On the Agent Install location page, specify the __Agent installation path__. The default path is ```C:\Program Files\Netwrix\Activity Monitor\Agent```. Click __Next__.

![Enable Windows File Activity Monitoring page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/enablewindowsfileactivitymonitoring.png)

__Step 7 –__  On the Windows Agent Settings window, configure the following options:

- Windows Activity Monitoring — Check the Add Windows file activity monitoring after installation checkbox to enable monitoring all file system activity on the targeted Windows server after installation. Alternatively, the Windows monitoring can be enabled later on the Monitored Hosts page.
- Management Group — By default, the agent only accepts commands from members from the BUILTIN\Administrators group. Less privileged accounts can be used to manage the agent with the Management group setting. Keep in mind that an administrator account must be used to install, upgrade or uninstall an agent. The value must be a domain or local security group entered in the DOMAIN\groupname format.

__Step 8 –__ Click Finish. The Add New Agent(s) window closes, and the activity agent is deployed to and installed on the target host.

During the installation process of the agent, the status will display Installing. If there are any errors, the Activity Monitor stops the installation and lists the errors in the Agent messages box.

![consolewithagent](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/consolewithagent.png)

When the activity agent installation is complete, the status changes to __Installed__ and the activity agent version populates. The next step is to add hosts to be monitored. See the [Monitored Hosts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/overview.md) topic for additional information.
