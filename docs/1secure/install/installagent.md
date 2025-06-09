# Install Agent

This topic describes an installation of the agent for collecting the data from your sources. Prior to installing the agent, ensure that all installation requirements have been met. See the [Netwrix Cloud Agent Software Requirements](/docs/1secure/requirements/cloudagentrequirements.md) topic for additional information.

## Configure Netwrix Cloud Agent

To collect the data from the Computer and Active Directory you will need to install and configure the Netwrix Cloud Agent.

Follow the steps to configure an agent.

__Step 1 –__ In the Netwrix 1Secure Website, go to Home page and select the Add organization icon to add an organization. Specify the name of the organization, timezone, country, and tags.

__Step 2 –__ Click __Save__.

__Step 3 –__ On the Agent Config panel, select __Download Agent__ to start downloading agent for analyzing your data.

__Step 4 –__  Complete the [Install the Agent](#install-the-agent) steps. Ensure you tick Launch Netwrix Cloud Agent Configuration tool and click Finish.

![organization_cloudagent](/img/product_docs/1secure/install/organization_cloudagent.png)

__Step 5 –__ On the displayed Netwrix Cloud Agent Configuration screen, select Configure to configure with Netwrix Cloud Agent.

![installagent_copyagent](/img/product_docs/1secure/install/installagent_copyagent.png)

__Step 6 –__  Go back to your Netwrix 1Secure configuration panel and copy the agent connection details by selecting Copy Connection String. This information will be used for agent deployment.

![cloudagent_copyagent](/img/product_docs/1secure/install/cloudagent_copyagent.png)

__Step 7 –__  Paste the information in the Netwrix Cloud Agent Configuration that you copied earlier and save settings.

__NOTE:__ The agent status has changed to __Connected__ (green).

__Step 8 –__ Go back to the Netwrix 1Secure configuration panel and select __Retry connecting to the client__. The agent status shall change to Healthy.

## Install the Agent

Follow the steps to install the agent.

__Step 1 –__ Check the prerequisites.

__Step 2 –__ Download the agent installer while adding the organization.

![organization_cloudagentsetup1](/img/product_docs/1secure/install/organization_cloudagentsetup1.png)

__Step 3 –__ Click __Next__ to continue.

![installnetwrixcloudagent](/img/product_docs/1secure/install/installnetwrixcloudagent.png)

__Step 4 –__ Specify the installation folder and click __Next__ to continue.

![installagentnetwrixcloudagentready](/img/product_docs/1secure/install/installagentnetwrixcloudagentready.png)

__Step 5 –__ Click __Install__. The agent starts the installation process.

![installagentnetwrixcloudagentinstalling](/img/product_docs/1secure/install/installagentnetwrixcloudagentinstalling.png)

![installagentnetwrixcloudagentfinish](/img/product_docs/1secure/install/installagentnetwrixcloudagentfinish.png)

__Step 6 –__ Keep the __Launch Netwrix Cloud Agent Configuration__ tool checkbox selected and click Finish to complete the setup.
