# Create Alerts on Health Status

You can configure alerts to be triggered by important events in the Netwrix AuditorSystem Health log.

To create alerts to be notified on Auditor Health Status.

Follow the basic steps, required for creation of the monitoring plan that will be used to collect data on Auditor health status events. See the topic for additional information.

__Step 1 –__ Start Netwrix Auditor Event Log Manager and create the new monitoring plan.

__Step 2 –__ Make sure that the Enable event log collection checkbox is selected. Specify the name for the new plan, for example, _"_Netwrix Auditor _Health Status"_.

__Step 3 –__ Navigate to the Monitored computers list and add a server where the Auditor server resides.

__Step 4 –__ On the General tab, click Configure next to Alerts. Make sure the predefined alerts are disabled. Click Add to create anew alert.

__Step 5 –__  In the Alert Properties wizard, specify the alert name and enter alert description (optional). Specify the number alerts per email. Grouped alerts for different computers will be delivered in separate email messages. This value is set to 1 by default, which means that each alert will be delivered as a separate email message.

__Step 6 –__ Specify alert recipient if you want the alert to be delivered to a non-default email.

__Step 7 –__ Navigate to Event Filters and click Add to specify an event that will trigger the alert.

__Step 8 –__ Complete the Event Filter dialog.

- In the Event tab, specify the filter name and description. In the Event Log field select the Netwrix Auditor System Health log.
- In the Event Fields tab, select event levels that will trigger the alert.

__Step 9 –__ Click OK to save the changes and close the Event Filters dialog.

__Step 10 –__ In the Netwrix Auditor Event Log Manager wizard, navigate to the Notifications section and specify the email address where notifications will be delivered.

___RECOMMENDED:___  click __Send Test Email__. The system will send a test message to the specified email address and inform you if any problems are detected.

__Step 11 –__ In the Audit Archiving filters, select the Netwrix Auditor  System Health as the inclusive filter.

__Step 12 –__ Click Save to save your changes.

![emailhealthstatusevent](/img/product_docs/auditor/auditor/admin/alertsettings/emailhealthstatusevent.png)

If an event occurs that triggers an alert, an email notification will be sent immediately to the specified recipients.
