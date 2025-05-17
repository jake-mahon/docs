---
sidebar_position: 2631
title: Output for Monitored Hosts
---

# Output for Monitored Hosts

Once a host is being monitored the event stream can be sent to multiple outputs.

![Output Properties Overview](../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/HostProperties/OutputPropertiesOverview.png "Output Properties Overview")

Configured outputs are grouped under the host. You can have multiple outputs configured for a host. The host event outputs are:

* File – Creates an activity log as a TSV or JSON file for every day of activity
* Syslog – Sends activity events to the configured SIEM server or Netwrix Threat Manager, where supported

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![](../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/MonitoredHosts/AddNewOutputFile.png)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window to modify these settings. See the [Output Types](../Outputs/Overview "Output Types") topic for additional information.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![](../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/MonitoredHosts/AddNewOutputSyslog.png)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window to modify these settings. See the [Output Types](../Outputs/Overview "Output Types") topic for additional information.