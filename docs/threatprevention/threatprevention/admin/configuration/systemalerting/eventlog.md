# Event Log Tab

Alert notification via Event Log sends event notifications to the Windows Event Log. Follow the steps to enable Event Log alerting.

![System Alerting window – Event Log tab](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/configuration/systemalerting/eventlog.webp)

__Step 1 –__ Click __Configuration__ > __Alerts__ on the menu. The Netwrix Threat Prevention System Alerting window opens.

__Step 2 –__ Click the __Event Log__ tag.

__Step 3 –__ Click the button next to Disabled to toggle the setting to __Enabled__.

__Step 4 –__ Select an event category (Security, Operations, Configuration) in the left pane.

__Step 5 –__ Check the checkboxes for the event(s) for which you want to trigger Windows Event Log notifications.

__Step 6 –__ For the Security, Operations, and Configuration event categories, the Suppression time option is also available for each event. Use it to prevent Threat Prevention from generating alerts for an event for a specified time period. This limits the volume of repeat alerts for the respective event.

Click __Suppression time__ for an event and select an option from the drop-down menu:

- A duration ( 1 min, 2 min, 5 min, 10 min, 30 min, 60 min) – Once an alert is generated for the event, Threat Prevention will not generate another alert for it during the next X minutes (X is the duration you selected) even if the event occurs.
- Disabled – Alerts will not be suppressed

Example

You select a suppression time of 30 minutes for an event. Next, an alert is generated for that event. If the event occurs again within the next 30 minutes, an alert will not be generated.

The suppression time feature enables you to tackle situations where numerous alerts are generated for an event, such as Agent Latency, causing the Enterprise Manager and Administration Console to freeze.

__Step 7 –__ Click __OK__ to save the settings.

The Windows Event Log now receives alert notifications for the checked events.
