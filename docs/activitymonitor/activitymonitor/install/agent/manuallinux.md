# Manually Install the Linux Agent

Follow the steps to manually install the agent.

__Step 1 –__ Transfer the rpm package to the Linux server.

For example, following is a pscp command:

pscp.exe -P 22 -p -v "C:\Program Files\Netwrix\Activity Monitor\Console\Agents\activity-monitor-agentd-7.0.0-1234.rhel.x86\_64.rpm" root@123.456.789.123:/tmp/

![pscp Command](/img/product_docs/activitymonitor/activitymonitor/install/agent/screen1.webp)

__Step 2 –__ Install the Activity Monitor Linux Agent RPM Package on the Linux server.

For example, the following command can be used:

sudo yum localinstall activity-monitor-agentd-7.0.0-1234.rhel.x86\_64.rpm

![Install Linux Agent RPM Package on the Linux server](/img/product_docs/activitymonitor/activitymonitor/install/agent/screen2.webp)

__Step 3 –__ Add firewall rules to the Linux server, and restart firewall service.

__NOTE:__ This should be the same port number specified in the Activity Monitor console for the Linux agent. Default port is 4498.

For example, the following commands can be used:

sudo firewall-cmd --zone=public --add-port=4498/tcp --permanent

sudo systemctl restart firewalld

sudo firewall-cmd --list-all

__Step 4 –__ Generate the Activity Monitor Agent client certificate on Linux server from the Activity Monitor Agent install directory.

The following commands can be used:

cd /usr/bin/activity-monitor-agentd/

sudo ./activity-monitor-agentd create-client-certificate --name amagent

![Generate the Activity Monitor Agent Client Certificate](/img/product_docs/activitymonitor/activitymonitor/install/agent/screen3.webp)

__Step 5 –__ Copy full certificate output from previous command on the Linux server.

__NOTE:__  This will be needed to add the agent to the console.

## Add the Linux Agent to the Console

Before deploying the Activity agent in a Linux environment, ensure all Prerequisites have been met. To effectively monitor activity on a Linux host, it is necessary to deploy an agent to the host. Follow the steps to deploy the agent to the Linux host. See the [Linux Agent Server Requirements](/docs/activitymonitor/activitymonitor/requirements/linuxagent.md) topic for additional information.

Follow the steps to add the agent to the console.

__Step 1 –__ Open the Activity Monitor Console.

__Step 2 –__ On the Agents tab, click __Add Agent__. The Add New Agent(s) window opens.

![Install New Agent](/img/product_docs/activitymonitor/activitymonitor/install/agent/installnew.webp)

__Step 3 –__ Specify the server name or IP Address that already has the Linux agent installed. To add multiple server names, see the Multiple Activity Agents Deployment topic for additional information. Click __Next__.

![Specify Agent Port](/img/product_docs/activitymonitor/activitymonitor/install/agent/specifyagentport.webp)

__Step 4 –__ Specify the port to be used for the agent. Click __Next__.

![Credentials to Connect to Server.](/img/product_docs/activitymonitor/activitymonitor/install/agent/credentials.webp)

__Step 5 –__ In Activity Monitor console add the Linux agent using the client certificate option, and paste the full output of the client certificate information (from Step 3 of ‘Manually Installing Activity Monitor Linux Agent’) into the client certificate field. Click __Connect__. Then click __Next__.

__NOTE:__ When clicking Connect while adding the Agent to the Console, the connection may fail. When clicking Connect, the Activity Monitor verifies not only its ability to manage the agent but the console's ability to deploy the agent as well. Errors can be ignored if the agent was manually installed.

![Linux Agent Options](/img/product_docs/activitymonitor/activitymonitor/install/agent/linuxagentoptions.webp)

__Step 6 –__ On the Linux Agent Options page, select which user name to use to run the daemon. To use root, leave the __Service user name__ field blank. Click __Test__ to test the connection.

__Step 7 –__ Click __Finish__. The Add New Agent(s) window closes, and the activity agent is deployed to and installed on the target host.

__NOTE:__ The console will automatically detect the agent as it is already installed.

The Agent is now added to the Activity Monitor Console.

__Step 8 –__  On the Agents tab of the console, select the newly added agent. Click __Edit__ to view Agent Properties.

![Server Properties](/img/product_docs/activitymonitor/activitymonitor/install/agent/properties.webp)

__Step 9 –__ Specify Linux account credentials (to be able to install, upgrade, and uninstall agent). Click __Test__ to verify. Then press __OK__ to save changes.
