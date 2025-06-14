# Configure Event Log Size and Retention Settings

The procedure below describes one of the possible ways to adjust event log settings. If you have multiple target computers, you need to perform this procedure on each of them.

If you move security log files from the default system folder to a non-default one, you must reboot your target server for the reports and search functionality to work properly.

Follow the steps to configure Event Log Size and Retention Settings.

__Step 1 –__ On a target server, navigate to Start > Windows Administrative Tools __> Event Viewer__.

__Step 2 –__ Navigate to __Event Viewer tree > Windows Logs__, right-click __Security__ and select __Properties__.

![manualconfig_ws_eventviewerpr2016](/img/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/manualconfig_ws_eventviewerpr2016.png)

__Step 3 –__ Make sure __Enable logging__ is selected.

__Step 4 –__ In the __Maximum log size__ field specify the size you need.

__Step 5 –__ Make sure __Do not overwrite events (Clear logs manually)__ is cleared. If selected, change the retention method to __Overwrite events as needed (oldest events first)__.

Make sure that the Maximum security log size group policy does not overwrite your log settings. To check this, start the Group Policy Management console, proceed to the GPO that affects your server, and navigate to __Computer Configuration__ __>__ __Policies__ __>__ __Windows Settings__ __>__ __Security Settings__ __>__ __Event Log__.
