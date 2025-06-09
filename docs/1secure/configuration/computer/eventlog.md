# Configure Event Log Size and Retention Settings

The procedure below describes one of the possible ways to adjust event log settings. If you have multiple target computers, you need to perform this procedure on each of them.

If you move security log files from the default system folder to a non-default one, you must reboot your target server for the reports and search functionality to work properly.

Follow the steps to configure Event Log Size and Retention Settings.

__Step 1 –__ On a target server, navigate to Start > Windows Administrative Tools > Event Viewer.

__Step 2 –__ Navigate to Event Viewer tree > Windows Logs, right-click __Security__ and select __Properties__.

![Log Properties dialog box](/img/product_docs/1secure/configuration/computer/manualconfig_ws_eventviewerpr2016_thumb_0_0.png)

__Step 3 –__ Make sure Enable logging is selected.

__Step 4 –__ In the Maximum log size field, specify the desired log size.

__Step 5 –__ Make sure the Do not overwrite events (Clear logs manually) check box is cleared. If selected, change the retention method to _Overwrite events as needed (oldest events first)_.

Make sure the Maximum security log size group policy does not overwrite your log settings. To check this, start the Group Policy Management console, proceed to the GPO that affects your server, and navigate to Computer Configuration > Policies > Windows Settings > Security Settings > Event Log.
