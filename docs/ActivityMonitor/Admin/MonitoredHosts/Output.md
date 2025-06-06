---
id: output
title: Output for Monitored Hosts
---

# Output for Monitored Hosts

Once a host is being monitored the event stream can be sent to multiple outputs.

![Output Properties Overview](/img/activitymonitor/admin/OutputPropertiesOverview.png "Output Properties Overview")

Configured outputs are grouped under the host. You can have multiple outputs configured for a host. The host event outputs are:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server or Netwrix Threat Manager, where supported

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![](/img/activitymonitor/admin/AddNewOutputFile.png)

**Step 3 –** Configure the tab(s) as desired.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![](/img/activitymonitor/admin/AddNewOutputSyslog.png)

**Step 3 –** Configure the tab(s) as desired.