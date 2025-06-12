# Harden Agent

You van harden an Agent to protect it from being altered, stopped, or started from within the local Service Control Manager.

Follow the steps to harden the Agent on a server.

__Step 1 –__ Click Agents in the left pane to launch the Agents interface.

__Step 2 –__ Right-click a server/Agent and select __Harden Agent__ on the menu.

![Enter Credentials window](/img/versioned_docs/threatprevention_7.4/threatprevention/install/upgrade/entercredentials.png)

__Step 3 –__ On the Enter Credentials window, enter a username and password with sufficient rights to connect to the target machine and query information about shares. A local Administrator account on the target machine should have access to the system shares. Click __OK__ after entering the credentials.

__NOTE:__ The wizard does not block access to the Administration Console and can be minimized while actions are in progress. If this wizard is hidden by clicking outside of the dialog box, a flashing blue link displays on the upper right corner of the interface with the action name displayed. Click this link to bring back the focus to the wizard.

__Step 4 –__ On the Access Verification window, the given credentials either succeed or fail during a prerequisites or verification check.

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care of prior to the next attempt.
- Success – Click __Next__ to begin hardening the Agent.

__NOTE:__ Closing the Administration Console while this action is in process causes problems with data collection.

__Step 5 –__ The Harden Agent window displays the task in progress and then its status as either:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care of prior to the next attempt.
- Completed – Indicates that the task is completed

__Step 6 –__ When the task is successfully completed, click __Finish__ to close the window.

The Agent's status is displayed as _Hardened_.
