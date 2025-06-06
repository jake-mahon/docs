---
id: output
title: Output for Monitored Domains
---

# Output for Monitored Domains

Once a domain is being monitored the event stream can be sent to multiple outputs.

![Monitored Domains tab with Domain Outputs added](/img/activitymonitor/admin/ActiivtyMonitorDomainOutputsAdded.png "Monitored Domains tab with Domain Outputs added")

Configured outputs are grouped under the domain. You can have multiple outputs configured for a domain. The domain event outputs are:

- File – Creates an activity log as a JSON file for every day of activity

  **NOTE:** This is required to search event data for Active Directory within the application.
- Syslog – Sends activity events to the configured SIEM server
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or receives Active Directory monitoring events from Netwrix Threat Prevention for integration with Netwrix Access Analyzer (formerly Enterprise Auditor)

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![Log Files configuration](/img/activitymonitor/admin/LogFiles.png "Log Files configuration")

**Step 3 –** Configure the tab(s) as desired.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![Syslog Properties](/img/activitymonitor/admin/SyslogUDP.png "Syslog Properties")

**Step 3 –** Configure the tab(s) as desired.

## Add Netwrix Threat Manager Output

**NOTE:** An App Token created by Netwrix Threat Manager is used to authenticate connection between the applications. See the App Tokens Page topic of the [Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend "Netwrix Threat Manager Documentation") for additional information.

Follow the steps to add a Netwrix Threat Manager output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Netwrix Threat Manager (StealthDEFEND)** from the drop-down menu. The Add New Output window opens.

![StealthDEFEND Properties](/img/activitymonitor/admin/StealthDEFENDProperties.png "StealthDEFEND Properties")

**Step 3 –** Configure the tab(s) as desired.