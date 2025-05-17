---
sidebar_position: 6883
title: Agent Installer Update Window
---

# Agent Installer Update Window

Netwrix periodically releases updated Agent installation packages. Typically these updates are associated with Microsoft KBs (hot-fixes) which alter the LSASS components interfering with the Agent instrumentation. See the [Agent Information](../../../Install/Agent/Overview "Agent Information") topic for additional information.

To download an installation package, the Threat Prevention server must be connected to the internet. It may be necessary to allow the following URL in the browser security settings:

* For Threat Prevention v7.5: [https://www.netwrix.com/go/siagent750zip](https://www.netwrix.com/go/siagent750zip "Agent file")

Follow the steps to download the updated Agent installer.

**Step 1 –** Click **Agents** in the left pane to launch the Agents interface. Then click **Update Agent Installer** to launch the Agent Installer Update window.

![Agent Installer Update window](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/AgentsInterfaceActions/CheckforNewVersion.png "Agent Installer Update window")

**Step 2 –** Click **Check for Newer Version of the Netwrix Threat Prevention Agent**. Threat Prevention downloads the Agent installer from a static URL and then compares the Agent installer currently in use to the installer downloaded.

![Agent Installer Update window showing that Agent Installer is up-to-date](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/AgentsInterfaceActions/UpToDate.png "Agent Installer Update window showing that Agent Installer is up-to-date")

* If the versions are the same, the message specifies **Agent Installer is up-to-date…** and displays the Agent version number. Click **Close** to close the window.

![Agent Installer Update window showing that Agent version is outdated](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/AgentsInterfaceActions/AgentVersionMismatch.png "Agent Installer Update window showing that Agent version is outdated")

* If the downloaded version is newer, the message displays both version numbers and provides an option to apply the update. Click **Apply Update**.

**NOTE:** When the Agent installer is replaced with a newer version, all Agents’ versions in the Agents interface are highlighted to indicate they are not the current version. Agents should then be updated to the new version using the Upgrade Agent option on the right-click menu.