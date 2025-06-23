---
title: Active Directory Agent Deployment
sidebar_label: AD Deployment
description: Deploy Active Directory agents to domain controllers including read-only DCs with batch deployment options and monitoring configuration.
---

# Active Directory Agent Deployment

Before deploying the Active Directory (AD) agent, ensure all
[AD Agent Server Requirements](/docs/activitymonitor/8.0/getting-started/requirements.md) have been met. To effectively
monitor Active Directory, it is necessary to deploy an AD agent to every domain controller,
including the read only domain controllers. However, it is possible to deploy the agents in batches.
Follow the steps to deploy the AD agents to the domain controllers in the target domain.

**NOTE:** These steps are specific to deploying AD agents for monitoring Active Directory.

**Step 1 –** On the Agents tab, click Add agent to open the Add New Agent(s) window.

![Install New Agent](/img/product_docs/activitymonitor/activitymonitor/install/agent/installnew.webp)

**Step 2 –** Click on the Install agents on Active Directory domain controllers link to deploy
activity agents to multiple domain controllers.

**NOTE:** The Activity Monitor will validate the entered Host Name or IP Address entered in the
**Server Name** text box.

![Specify Agent Port](/img/product_docs/activitymonitor/activitymonitor/install/agent/portdefault.webp)

**Step 3 –** Specify the port that should be used by the new agent(s).

![Agent Install Location](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/locationdefault.webp)

**Step 4 –** Select the agent installation path.

**_RECOMMENDED:_** Use the default installation path.

![Active Directory Connection page with blank text boxes](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/adconnectionblank.webp)

**Step 5 –** On the Active Directory Connection page, enter the domain, and specify an account that
is a member of BUILTIN\Administrators group on the domain. Then, click **Connect**.

![Example of a successful connection on the Active Directory Connection page](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/adconnectionsuccessful.webp)

When the connection is successful, the Next button is enabled. Click Next to continue.

**NOTE:** An Administrator’s credentials are required to test the connection to the server. This is
the only way to enable the Next button.

![Domains to Monitor page](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/domainstomonitorpage.webp)

**Step 6 –** On the Domains To Monitor page, available domains display in a list, checked by
default. Check/uncheck the boxes as desired to identify the domains to monitor, then click Next.

![Domain Controllers to Deploy the Agent to page](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/dcstodeploytheagenttopage.webp)

**Step 7 –** On the Domain Controllers to deploy the Agent to page, available domain controllers
display in a list, checked by default. Check/uncheck the boxes as desired to identify the domain
controllers where the AD agent is to be deployed.

**NOTE:** Agents can be gradually deployed, but the AD agent needs to be installed on all domain
controllers to monitor all activity of the domain.

![Test Connection to Domain Controller](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/dcsdeployagentconnection.webp)

**Step 8 –** Click the **Test** button to verify the connection to the domains selected. Once the
connection is verified, click **Next** to continue.

![Windows Agent Settings Page](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/windowsagentsettingspage.webp)

**Step 9 –** On the Windows Agent Settings page, there are two settings to configure.

- Add Windows file activity monitoring – Select the check box to add Windows file activity
  monitoring after installing the agent. By default a new agent install monitors nothing. If
  administrators want to monitor file activity on Windows servers, it is easier to enable it after
  installation of the agent. Windows file activity monitoring can be enabled and configured later in
  the console.
- Management Group – By default, the agent only accepts commands form members of the
  BUILTIN\Administrators group. Less privilege accounts can be configured to manage the agent with
  the Management Group setting. Keep in mind that only administrators can install, update and
  uninstall the agent.

**Step 10 –** Click **Finish**. The Add New Agent(s) window closes, and the activity agent is
deployed to and installed on the target host.

During the installation process, the status will be Installing. If there are any errors, the
Activity Monitor stops the installation and lists the errors in the Agent messages box.

![AD Agent Installed](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/adagentinstalled.webp)

When the AD agent installation is complete, the status changes to **Installed** and the agent
version populates in the AD Module column. The next step is to configure the domains to be
monitored. See the [Monitored Domains Tab](/docs/activitymonitor/8.0/monitored-systems/domains/active-directory.md) section for
additional information.

# Single Activity Agent Deployment

Before deploying the activity agent, ensure all
[Activity Agent Server Requirements](/docs/activitymonitor/8.0/getting-started/requirements.md) have been met,
including those for NAS devices when applicable. Follow the steps to deploy the activity agent to a
single Windows server.

**NOTE:** These steps are specific to deploying activity agents for monitoring supported target
environments.

**Step 1 –** On the Agents tab, click Add agent to open the Add New Agent(s) window.

![Install New Agent window](/img/product_docs/activitymonitor/activitymonitor/install/agent/installnew.webp)

**Step 2 –** On the Install new agent page, enter the Server name (name or IP Address) to deploy to
a single server. Leave the field blank to deploy the agent on the local server. Click Next.

![Specify Agent Port page](/img/product_docs/activitymonitor/activitymonitor/install/agent/portdefault.webp)

**Step 3 –** On the Specify Port page, specify the port that should be used by the new agent. The
default port is 4498. Click **Next**.

![Credentials to Connect to the Server(s) page](/img/product_docs/activitymonitor/activitymonitor/install/agent/credentials.webp)

**Step 4 –** On the Credentials To Connect To The Server(s) page, select ether Windows or Linux file
monitoring. Then, enter the **User name** and **Password** to connect to the API Server.

![Test Account Connection](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/testaccountconnection.webp)

**Step 5 –** Click **Connect** to test the connection. If the connection is successful, click
**Next**. If the connection is unsuccessful, see the status message that appears for information on
the failed connection and correct the error to proceed.

![agentinstalllocation](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/agentinstalllocation.webp)

**Step 6 –** On the Agent Install location page, specify the **Agent installation path**. The
default path is `C:\Program Files\Netwrix\Activity Monitor\Agent`. Click **Next**.

![Enable Windows File Activity Monitoring page](/img/product_docs/activitymonitor/activitymonitor/admin/agents/add/enablewindowsfileactivitymonitoring.webp)

**Step 7 –** On the Windows Agent Settings window, configure the following options:

- Windows Activity Monitoring — Check the Add Windows file activity monitoring after installation
  checkbox to enable monitoring all file system activity on the targeted Windows server after
  installation. Alternatively, the Windows monitoring can be enabled later on the Monitored Hosts
  page.
- Management Group — By default, the agent only accepts commands from members from the
  BUILTIN\Administrators group. Less privileged accounts can be used to manage the agent with the
  Management group setting. Keep in mind that an administrator account must be used to install,
  upgrade or uninstall an agent. The value must be a domain or local security group entered in the
  DOMAIN\groupname format.

**Step 8 –** Click Finish. The Add New Agent(s) window closes, and the activity agent is deployed to
and installed on the target host.

During the installation process of the agent, the status will display Installing. If there are any
errors, the Activity Monitor stops the installation and lists the errors in the Agent messages box.

![consolewithagent](/img/product_docs/activitymonitor/activitymonitor/install/agent/consolewithagent.webp)

When the activity agent installation is complete, the status changes to **Installed** and the
activity agent version populates. The next step is to add hosts to be monitored. See the
[Monitored Hosts Tab](/docs/activitymonitor/8.0/monitored-systems/index.md) topic for additional information.
