---
id: connection
title: Connection Tab
---

# Connection Tab

The Connection tab allows users to modify the agent host server name and the credentials used for installation and communication. The tab varies based on the type of agent selected.

## For Activity Agent

The server name can be modified in the text box. Modifying the name value does not move the activity agent to a new server. The credentials can be updated or modified as well.

*Remember,* **Test** the credentials before clicking OK to ensure a successful connection.

![Connection Tab for Agent Properties](/img/activitymonitor/admin/ConnectionTab.png)

Agent server fields:

- Server name – Name or IP address of the server where the agent is deploy
- Port – Port the agent uses for communication with the application

Credential fields:

- Password – Password for the supplied User name

Permissions

- Membership in the local Administrators group

Less Privileged Permissions Option

Follow the steps to use this window.

**Step 1 –** Select the Domain from the drop-down menu.

**Step 4 –** If successful, click OK.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent Properties window closes.

## For Linux Agent

The server name can be modified in the text box. Modifying the name value does not move the Linux agent to a new server. The credentials can be updated or modified as well.

*Remember,* **Test** the credentials before clicking OK to ensure a successful connection.

![](/img/activitymonitor/admin/LinuxConnectionTab.png)

Agent server fields:

- Server name – Name or IP address of the server where the agent is deploy
- Port – Port the agent uses for communication with the application

Credential fields:

- Password – Password for the supplied User name

Permissions

- Root privileges with password (or SSH private key)

The **Trace level** option configures the level for the agent log it includes the following levels:

- Same Level as the Console (uses the global level selected in the console)
- Trace (the most verbose) many collection points and can slow down

  **CAUTION:** Selecting the **Trace** option can slow down collection due to the large amount of data points
- Debug
- Info (recommended)
- Warning
- Error
- Fatal