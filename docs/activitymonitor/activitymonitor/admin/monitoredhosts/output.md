# Output for Monitored Hosts

Once a host is being monitored the event stream can be sent to multiple outputs.

![Output Properties Overview](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/outputpropertiesoverview.webp)

Configured outputs are grouped under the host. You can have multiple outputs configured for a host. The host event outputs are:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server or Netwrix Threat Manager, where supported

## Add File Output

Follow the steps to add a File output.

__Step 1 –__ On the Monitored Hosts tab, select the desired host and click __Add Output__.

__Step 2 –__ Select __File__ from the drop-down menu. The Add New Output window opens.

![addnewoutputfile](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/addnewoutputfile.webp)

__Step 3 –__ Configure the tab(s) as desired.

__Step 4 –__ Click __Add Output__ to save your settings. The Add New Output window closes.

The new output displays in the table. Click the __Edit__ button to open the Output properties window to modify these settings. See the [Output Types](/docs/activitymonitor/activitymonitor/admin/outputs/overview.md) topic for additional information.

## Add Syslog Output

Follow the steps to add a Syslog output.

__Step 1 –__ On the Monitored Hosts tab, select the desired host and click __Add Output__.

__Step 2 –__ Select __Syslog__ from the drop-down menu. The Add New Output window opens.

![addnewoutputsyslog](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/addnewoutputsyslog.webp)

__Step 3 –__ Configure the tab(s) as desired.

__Step 4 –__ Click __Add Output__ to save your settings. The Add New Output window closes.

The new output displays in the table. Click the __Edit__ button to open the Output properties window to modify these settings. See the [Output Types](/docs/activitymonitor/activitymonitor/admin/outputs/overview.md) topic for additional information.
