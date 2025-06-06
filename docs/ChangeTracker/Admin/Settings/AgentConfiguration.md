---
id: agentconfiguration
title: Agent Configuration
---

# Agent Configuration

There are multiple ways to set values in an agent's configuration file on installation. Once an agent has been configured and has successfully registered with the Hub, its configuration can be managed remotely with the Agent Updates tab.See the [Agent Installation](/Install/Agent/Overview.md "Agent Installation") topic for additional information.

Follow these steps to update the agent hub configuration.

![](/img/changetracker/admin/RemoteAgentConfig.png)

**Step 2 –** Select **Update HubDetails** to open the Update agent hub details window.

**Step 3 –** Select the devices or groups of devices to configure and then enter the desired values.

**CAUTION:** Altering the URL could cause the agent to be unable to communicate with the Hub and require direct manual intervention to resolve.

For most fields, leaving a blank value will ensure that the current values for those fields in the target agent's configuration files will remain as they are. Leaving the Name prefix field blank will remove any existing prefix for the target devices.

**Step 4 –** Click **OK** to broadcast the new configuration to the agents on the target devices.

![](/img/changetracker/admin/BroadcastAgentConfig.png)

This should take less than a minute to apply.