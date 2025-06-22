# Process Exclusions Tab

The Process Exclusions tab on an output Properties window is where monitoring scope by Windows
processes can be modified. These settings are initially configured when the output is added.

**NOTE:** Netwrix product processes are excluded by default from activity monitoring.

Select an output for a Windows file server host on the Monitored Hosts tab and click **Edit** to
open the output Properties window.

![Process Exclusions Tab](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/processexclusions.webp)

The tab contains the following settings and features:

- Add – Opens the Add or Edit Process window to add a new process to the list. See the
  [Add or Edit Process Window](/docs/activitymonitor/8.0/data-collection/filtering/process-exclusions.md) topic for additional information.
- Remove – Removes the selected path from the list. Confirmation is not requested.

  **CAUTION:** If a process is removed by accident, use the **Cancel** button to discard the
  change.

- Edit – Opens the Add or Edit Process window to modify the selected process. See the
  [Add or Edit Process Window](/docs/activitymonitor/8.0/data-collection/filtering/process-exclusions.md) topic for additional information.

The table lists process that will be excluded, displaying columns for Process Name and Events.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

# Add or Edit Process Window

The Add or Edit Process window is opened from the Process Exclusions tab of a monitored host's
output Properties window.

![Add or Edit Process popup window](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/window/addoreditprocessprocessexclusions.webp)

- Process name – Displays the name of the process to be excluded. You can enter a process name in
  the textbox or select a process from the Running processes list.
- Filter – Indicates if the filter will be for **All events** or only **Read events**
- Running Processes – Lists all processes currently running on the host

Then click OK. The Add or Edit Path window closes, and the path is added to the filtering list for
the monitored host.
