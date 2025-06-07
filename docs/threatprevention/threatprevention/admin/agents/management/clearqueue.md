# Clear SQLite Agent Queue

When the Agent is unable to communicate with the Enterprise Manager, Agent events queue up in the Agents local SQLite database until the Enterprise Manager is available to accept events. The Clear SQLite Agent Queue option dumps the queue and all pending events are lost.

Follow the steps to clear the SQLite Agent queue for an Agent:

__CAUTION:__ These events are permanently deleted and are not processed by the Enterprise Manager on reconnection. This option is for diagnostic and troubleshooting purposes only.

__Step 1 –__ Click Agents in the left pane to launch the Agents interface.

__Step 2 –__ Right-click a server/Agent and select __Clear SQLite Agent Queue__ on the menu.

![Enter Credentials window](/static/img/product_docs/threatprevention/threatprevention/install/upgrade/entercredentials.png)

__Step 3 –__ On the Enter Credentials window, enter a username and password with sufficient rights to connect to the target machine and query information about shares. A local Administrator account on the target machine should have access to the system shares. Click __OK__ after entering the credentials.

__NOTE:__ The wizard does not block access to the Administration Console and can be minimized while actions are in progress. If this wizard is hidden by clicking outside of the dialog box, a flashing blue link displays on the upper right corner of the interface with the action name displayed. Click this link to bring back the focus to the wizard.

__Step 4 –__  On the Access Verification window, the system performs a prerequisites or verification check that can fail or succeed.

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care of prior to the next attempt.
- Success – Click __Next__ to begin clearing the SQLite Agent Queue

__NOTE:__ Closing the Administration Console while this action is in process causes problems with data collection.

__Step 5 –__ The Clear Agent Queue window displays the task in progress and then its status as either:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care of prior to the next attempt.
- Completed – Indicates that the task is completed

__Step 6 –__ When the task is successfully completed, click __Finish__ to close the window.

The SQLite Agent queue is automatically cleared.
