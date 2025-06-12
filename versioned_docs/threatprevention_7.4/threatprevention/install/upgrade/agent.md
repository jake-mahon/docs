# Upgrade Agent

The Threat Prevention Agent is updated from the Agents interface.

__NOTE:__ If you are using an Endpoint Detection and Response (EDR) solution to protect LSASS, you must create an exclusion for Threat Prevention using any of these methods:

- Add the path or names of the files listed under Agent Server in the [Antivirus Software Considerations](/versioned_docs/threatprevention_7.4/threatprevention/install/overview.md#Antivirus-Software-Considerations) topic in the EDR.
- Add the hash of the individual files in the EDR. In this case, every time a new Agent version is deployed, the hashes change and will have to be updated. If this is not done prior to upgrade, the Agent will not be able to hook into LSASS as the executable hash will be different.

In most cases, only the SIWindowsAgent.exe and SI.ActiveDirectoryMonitor.dll files need to be white-listed.

Follow the steps to upgrade a deployed Agent through the Agents interface.

__Step 1 –__ Click __Agents__ in the left pane to open the Agents interface.

__Step 2 –__ On the [Agents Interface](/versioned_docs/threatprevention_7.4/threatprevention/admin/agents/overview.md), select the desired server/Agent and on the top toolbar, select __Update Agent Installer__. The [Agent Installer Update Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/agents/window/agentinstallerupdate.md) opens.

__Step 3 –__ On the Agent Installer Update window, click __Check for Newer Version of the Netwrix Threat Prevention Agent__. The green bar indicates the progress of checking the Agent for a newer version. If a new version is available, click __Apply Update__.

_Remember,_ when an Agent is out-of-date, the Version String column on the Agents interface has an orange background.

__Step 4 –__ Right-click an out-of-date Agent and select __Upgrade Agent__ on the right-click menu. The Access Verification window opens.

__NOTE:__ The wizard does not block access to the Administration Console and can be minimized while actions are in progress. If this wizard is hidden by clicking outside of the dialog box, a flashing blue link displays on the upper right corner of the interface with the action name displayed. Click this link to bring back the focus to the wizard.

![Access Verification window](/img/versioned_docs/threatprevention_7.4/threatprevention/install/upgrade/accessverification.png)

__Step 5 –__ The Access Verification window displays one of the following statuses:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care of prior to the next attempt.
- Success – If this is displayed as status, click __Next__ to begin upgrading the Agent.
- If some but not all items fail, it is possible to click __Next__ to continue the action on those where access verification was successful.

__NOTE:__ Closing the Administration Console while this action is in process causes problems with data collection.

![Upgrade Agent window](/img/versioned_docs/threatprevention_7.4/threatprevention/install/upgrade/upgradeagent.png)

__Step 6 –__ On the Upgrade Agent window, the old Agent will be uninstalled and the newer version of the Agent installed. One of two status messages display:

- Started – Self-upgrading agent
- Failed – Read the failure messages and close the window. Ensure any error messages are taken care of prior to the next attempt.

__Step 7 –__ When the task is successfully completed, click __Finish__ to close the window.

The Agent's status is displayed as Active.
