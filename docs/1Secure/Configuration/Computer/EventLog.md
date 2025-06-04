---
id: eventlog
title: Eventlog
---

If you move security log files from the default system folder to a non-default one, you must reboot your target server for the reports and search functionality to work properly.

**Step 1 –** On a target server, navigate to Start > Windows Administrative Tools > Event Viewer.

**Step 2 –** Navigate to Event Viewer tree > Windows Logs, right-click **Security** and select **Properties**.

[![Log Properties dialog box](/img/1secure/configuration/ManualConfig_WS_EventViewerPr2016_thumb_0_0.png "Log Properties dialog box")](/static/img/1secure/configuration/ManualConfig_WS_EventViewerPr2016.png)

**Step 3 –** Make sure Enable logging is selected.

**Step 4 –** In the Maximum log size field, specify the desired log size.

**Step 5 –** Make sure the Do not overwrite events (Clear logs manually) check box is cleared. If selected, change the retention method to *Overwrite events as needed (oldest events first)*.