# Output for Monitored Domains

Once a domain is being monitored the event stream can be sent to multiple outputs.

![Monitored Domains tab with Domain Outputs added](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/actiivtymonitordomainoutputsadded.png)

Configured outputs are grouped under the domain. You can have multiple outputs configured for a domain. The domain event outputs are:

- File – Creates an activity log as a JSON file for every day of activity

  __NOTE:__ This is required to search event data for Active Directory within the application.
- Syslog – Sends activity events to the configured SIEM server
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or receives Active Directory monitoring events from Netwrix Threat Prevention for integration with Netwrix Access Analyzer (formerly Enterprise Auditor)

## Add File Output

Follow the steps to add a File output.

__Step 1 –__ On the Monitored Domains tab, select the desired domain and click __Add Output__.

__Step 2 –__ Select __File__ from the drop-down menu. The Add New Output window opens.

![Log Files configuration](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/logfiles.png)

__Step 3 –__ Configure the tab(s) as desired.

__Step 4 –__ Click __Add Output__ to save your settings. The Add New Output window closes.

The new output displays in the table. Click the __Edit__ button to open the Output properties window to modify these settings. See the [Output Types](/docs/activitymonitor/activitymonitor/admin/outputs/overview.md) topic for additional information.

## Add Syslog Output

Follow the steps to add a Syslog output.

__Step 1 –__ On the Monitored Domains tab, select the desired domain and click __Add Output__.

__Step 2 –__ Select __Syslog__ from the drop-down menu. The Add New Output window opens.

![Syslog Properties](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/syslogudp.png)

__Step 3 –__ Configure the tab(s) as desired.

__Step 4 –__ Click __Add Output__ to save your settings. The Add New Output window closes.

The new output displays in the table. Click the __Edit__ button to open the Output properties window to modify these settings. See the [Output Types](/docs/activitymonitor/activitymonitor/admin/outputs/overview.md) topic for additional information.

## Add Netwrix Threat Manager Output

__NOTE:__ An App Token created by Netwrix Threat Manager is used to authenticate connection between the applications. See the App Tokens Page topic of the [Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend) for additional information.

Follow the steps to add a Netwrix Threat Manager output.

__Step 1 –__ On the Monitored Domains tab, select the desired domain and click __Add Output__.

__Step 2 –__ Select __Netwrix Threat Manager (StealthDEFEND)__ from the drop-down menu. The Add New Output window opens.

![StealthDEFEND Properties](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/stealthdefendproperties.png)

__Step 3 –__ Configure the tab(s) as desired.

__Step 4 –__ Click __Add Output__ to save your settings. The Add New Output window closes.

The new output displays in the table. Click the __Edit__ button to open the Output properties window to modify these settings. See the [Output Types](/docs/activitymonitor/activitymonitor/admin/outputs/overview.md) topic for additional information.
