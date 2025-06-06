---
id: activedirectory
title: Active Directory Agent Deployment
---

# Active Directory Agent Deployment

Before deploying the Active Directory (AD) agent, ensure all [AD Agent Server Requirements](/Requirements/ADAgent.md "AD Agent Server Requirements") have been met. To effectively monitor Active Directory, it is necessary to deploy an AD agent to every domain controller, including the read only domain controllers. However, it is possible to deploy the agents in batches. Follow the steps to deploy the AD agents to the domain controllers in the target domain.

**NOTE:** These steps are specific to deploying AD agents for monitoring Active Directory.

**Step 1 –** On the Agents tab, click Add agent to open the Add New Agent(s) window.

![Install New Agent](/img/activitymonitor/admin/InstallNew.png "Install New Agent")

**Step 2 –** Click on the Install agents on Active Directory domain controllers link to deploy activity agents to multiple domain controllers.

**NOTE:** The Activity Monitor will validate the entered Host Name or IP Address entered in the **Server Name** text box.

![Specify Agent Port](/img/activitymonitor/admin/PortDefault.png "Specify Agent Port")

**Step 3 –** Specify the port that should be used by the new agent(s).

![Agent Install Location](/img/activitymonitor/admin/LocationDefault.png "Agent Install Location")

**Step 4 –** Select the agent installation path.

***RECOMMENDED:*** Use the default installation path.

![Active Directory Connection page with blank text boxes](/img/activitymonitor/admin/ADConnectionBlank.png "Active Directory Connection page")

![Example of a successful connection on the Active Directory Connection page](/img/activitymonitor/admin/ADConnectionSuccessful.png "Example of a successful connection on the Active Directory Connection page")

When the connection is successful, the Next button is enabled. Click Next to continue.

**NOTE:** An Administrator’s credentials are required to test the connection to the server. This is the only way to enable the Next button.

![Domains to Monitor page](/img/activitymonitor/admin/DomainstoMonitorPage.png "Domains to Monitor page")

**Step 6 –** On the Domains To Monitor page, available domains display in a list, checked by default. Check/uncheck the boxes as desired to identify the domains to monitor, then click Next.

![Domain Controllers to Deploy the Agent to page](/img/activitymonitor/admin/DCstoDeploytheAgentToPage.png "Domain Controllers to Deploy the Agent to page")

**Step 7 –** On the Domain Controllers to deploy the Agent to page, available domain controllers display in a list, checked by default. Check/uncheck the boxes as desired to identify the domain controllers where the AD agent is to be deployed.

**NOTE:** Agents can be gradually deployed, but the AD agent needs to be installed on all domain controllers to monitor all activity of the domain.

![Test Connection to Domain Controller](/img/activitymonitor/admin/DCsDeployAgentConnection.png "Test Connection to Domain Controller")

**Step 8 –** Click the **Test** button to verify the connection to the domains selected. Once the connection is verified, click **Next** to continue.

- Add Windows file activity monitoring – Select the check box to add Windows file activity monitoring after installing the agent. By default a new agent install monitors nothing. If administrators want to monitor file activity on Windows servers, it is easier to enable it after installation of the agent. Windows file activity monitoring can be enabled and configured later in the console.

**Step 10 –** Click **Finish**. The Add New Agent(s) window closes, and the activity agent is deployed to and installed on the target host.

During the installation process, the status will be Installing. If there are any errors, the Activity Monitor stops the installation and lists the errors in the Agent messages box.

![AD Agent Installed](/img/activitymonitor/admin/ADAgentInstalled.png "AD Agent Installed")

When the AD agent installation is complete, the status changes to **Installed** and the agent version populates in the AD Module column. The next step is to configure the domains to be monitored. See the [Monitored Domains Tab](/Admin/MonitoredDomains/Overview.md "Monitored Domains Tab") section for additional information.