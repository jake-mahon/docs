# Multiple Activity Agents Deployment

Before deploying the activity agent, ensure all Prerequisites are met, including those for NAS devices when applicable. Follow the steps to deploy the activity agent to a multiple Windows servers. See the [Activity Agent Server Requirements](/docs/product_docs/activitymonitor/activitymonitor/requirements/activityagent.md) topic for additional information.

__NOTE:__ These steps are specific to deploying activity agents for monitoring supported target environments.

__Step 1 –__ On the Agents tab, click Add agent to open the Add New Agent(s) window.

![Install New Agent](/static/img/product_docs/activitymonitor/activitymonitor/install/agent/installnew.png)

__Step 2 –__ On the Install new agent page, click the install agents on multiple hosts link to deploy activity agents to multiple hosts.

![Specify Agent Port page - specify port that should be used by new agent](/static/img/product_docs/activitymonitor/activitymonitor/install/agent/portdefault.png)

__Step 3 –__ On the Specify Agent Port page, specify the port that should be used by the new agent. The default port is 4498. Click __Next__.

![Install Agents on Multiple Hosts page](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/installagentsonmultiplehosts.png)

__Step 4 –__ Windows or Linux hosts can be entered as either a name or an IP Address. The options are:

- Add server — Opens the Host name or IP address window. See the [Manual Entry](#Manual-Entry) topic for additional information.
- Remove — Removes an entered host name or IP address from the table
- Import — Opens the Import from file window. See the [Import a List](#Import-a-List) topic for additional information.

There are two methods for adding multiple hosts are:

Manual Entry

Use __Manual Entry__ to manually type the host names or IP addresses of the servers to be monitored.

![Enter Host Name or IP Address window](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/hostnameoripaddresswindow.png)

For Manual Entry, the options are:

- Click Add server. The Host name or IP Address window opens.
- Enter the servers, separating the hosts with spaces, commas, or semicolons.
  - (Optional) A multi-line list can be pasted into this textbox. When the servers have been entered, click OK. The Host name or IP address window closes and the identified servers are in the list.

Import a List

Use __Import a List__ to import host names or IP addresses from an external source.

![Import Hosts from a CSV File window](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/importhostsfromacsvfilewindow.png)

For Import a List:

- Click Import. The Import from file window opens.
- Enter the file path, or use the ellipsis (…) to navigate to the file.
- Identify the Separator used on the file (Comma, Semicolon, Tab, or Space). This is set to __Comma__ for CSV format by default.
- If the first row of the file contains column headers, then check the First row contains field names box. If there are no column headers, uncheck this box.
- A preview of the selected file displays. Select the column with the host names.
- Click OK. The Import from file window closes and the identified servers are in the list.

The Activity Monitor will monitor the Host Names or IP Address added to the __Install Agents on Multiple Hosts__ table. Click __Next__.

![Credentials to Connect to the Server(s) window](/static/img/product_docs/activitymonitor/activitymonitor/install/agent/credentials.png)

__Step 5 –__ On the Credentials To Connect To The Server(s) page, connect to the server using either a __User name__ and __password__, a Public Key, or a Client Certificate.

The options for connecting with a Password are:

- User name
- Password

![Credentials to Connect to the Server(s) ](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/publickey.png)

The options for connecting with a Public Key are:

- User name
- Private Key

- Use the Public Key option to install an agent using SSH

![clientcertificate](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/clientcertificate.png)

To connect with a Client Certificate, select the Client Certificate (for already installed agents) option. Copy the following command into a command prompt:

activity-monitor-agentd --create-client-certificate --client-name [NAME]

Using an existing Client Certificate installs a new agent without using SSH.

__Step 6 –__ Click __Connect__ to test the connection. If the connection is successful, click __Next__.

The credentials are tested against each server added on the __Install Agent(s) on Multiple Hosts__ page. If the connection is unsuccessful, see the status message that appears for information on the failed connection. Activity agents are only successfully deployed for servers where the test status returns Ok. Failed deployments can be retried through the Connection tab of the agent’s Properties window. When one or more of the connections are successful, click Next.

![Agent Installation Path page](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/agentinstalllocation.png)

__Step 7 –__ On the Agent Install Location page, browse to theselect the agent installation path. The default path is ```C:\Program Files\Netwrix\Activity Monitor\Agent```. Click __Next__.

![Windows Agent Settings](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/enablewindowsfileactivitymonitoring.png)

__Step 8 –__  On the Windows Agent Settings window, configure the following options:

- Add Windows file activity monitoring after installation — Check the Add Windows file activity monitoring after installation checkbox to enable monitoring all file system activity on the targeted Windows server after installation.
- Management Group — By default, the agent only accepts commands from members from the BUILTIN\Administrators group. Less privileged accounts can be used to manage the agent with the Management group setting. Keep in mind that an administrator account must be used to install, upgrade, or uninstall an agent.

__Step 9 –__ Click Finish. The Add New Agent(s) window closes, and the activity agent is deployed to and installed on the target host.

During the installation process, the status will be __Installing__. If there are any errors, the Activity Monitor stops the installation for that host and lists the errors in the __Agent messages__ box.

![Multiple Agents Installed](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/adagentinstalled.png)

When the activity agent installation completes, the status changes to __Installed__ and the activity agent version populates. The next step is to add hosts to be monitored. See the [Monitored Hosts Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/overview.md) topic for additional information.
