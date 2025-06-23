# Create Alerts for Event Log

Alerts are configurable notifications triggered by certain events and sent to the specified
recipients. You can enable or disable, and modify existing alerts, and create new alerts. To do it,
click Configure next to Alerts.

Follow the steps to create new alert.

**Step 1 –** In the Alerts window, click Add to start new alert.

**Step 2 –** On the Alert Properties step, specify the alert name and enter alert description
(optional). Specify the number alerts per email. Grouped alerts for different computers will be
delivered in separate email messages. This value is set to 1 by default, which means that each alert
will be delivered as a separate email message.

**Step 3 –** On the Notifications step, configure email notifications and customize the notification
template, if needed. Click Edit next to Customize notifications template. Edit the template by
deleting or inserting information fields.

The %ManagedObjectName% variable will be replaced with your monitoring plan name.

**Step 4 –** On the Event filters step, specify an event that will trigger the alert.

**Step 5 –** Complete the Event Filters wizard. Complete the following fields:

- In the Event tab:

  | Option      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
  | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Name        | Specify the filter name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | Description | Enter the description for this filter (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | Event Log   | Select an event log from the drop-down list. You will be alerted on events from this event log. You can also input a different event log. To find out a log’s name, navigate to Start > Windows Administrative Tools > **Event Viewer** > **Applications and Services Logs** > Microsoft > Windows and expand the required Log_Name node, right-click the file under it and select Properties. Find the event log’s name in the Full Name field. Auditor does not collect the Analytic and Debug logs, so you cannot configure alerts for these logs. You can use a wildcard (\*). In this case you will be alerted on events from all Windows logs except for the ones mentioned above. |

- In the Event Fields tab:

  | Option      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Event ID    | Enter the identifier of a specific event that you want to be alerted on. You can add several IDs separated by comma.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | Event Level | Select the event types that you want to be alerted on. If the Event Level checkbox is cleared, you will be alerted on all event types of the specified log.                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | Computer    | Specify a computer. You will only be alerted on events from this computer. If you want to specify several computers, you can define a mask for this parameter. Below is an example of a mask: - \* - any machine - computer – a machine named ‘computer’ - \*computer\* - machines with names like ‘xXxcomputerxXx’ or ‘newcomputer’ - computer? – machines with names like ‘computer1’ or ‘computerV’ - co?puter - machines with names like ‘computer’ or ‘coXputer’ - ????? – any machine with a 5-character name - ???\* - any machine with a 3-character name or longer |
  | User        | Enter a user’s name. You will be alerted only on the events generated under this account. If you need to specify several users, you can define a mask for this parameter in the same way as described above.                                                                                                                                                                                                                                                                                                                                                                |
  | Source      | Specify this parameter if you want to be alerted on the events from a specific source. If you need to specify several users, you can define a mask for this parameter in the same way as described above.                                                                                                                                                                                                                                                                                                                                                                   |
  | Category    | Specify this parameter if you want to be alerted on a specific event category.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

  ![eventfilters](/img/product_docs/auditor/auditor/admin/alertsettings/eventfilters.webp)

- In the Insertion Strings tab:

  | Option                                         | Description                                                                                                                                                                        |
  | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Consider the following event Insertion Strings | Specify this parameter if you want to receive alerts on events containing a specific string in the EventData. You can use a wildcard (\*). Click Add and specify Insertion String. |

**Step 6 –** Click OK to save the changes and close the Event Filters dialog.

# Create Alerts on Health Status

You can configure alerts to be triggered by important events in the Netwrix AuditorSystem Health
log.

To create alerts to be notified on Auditor Health Status.

Follow the basic steps, required for creation of the monitoring plan that will be used to collect
data on Auditor health status events. See the topic for additional information.

**Step 1 –** Start Netwrix Auditor Event Log Manager and create the new monitoring plan.

**Step 2 –** Make sure that the Enable event log collection checkbox is selected. Specify the name
for the new plan, for example, _"\_Netwrix Auditor \_Health Status"_.

**Step 3 –** Navigate to the Monitored computers list and add a server where the Auditor server
resides.

**Step 4 –** On the General tab, click Configure next to Alerts. Make sure the predefined alerts are
disabled. Click Add to create anew alert.

**Step 5 –** In the Alert Properties wizard, specify the alert name and enter alert description
(optional). Specify the number alerts per email. Grouped alerts for different computers will be
delivered in separate email messages. This value is set to 1 by default, which means that each alert
will be delivered as a separate email message.

**Step 6 –** Specify alert recipient if you want the alert to be delivered to a non-default email.

**Step 7 –** Navigate to Event Filters and click Add to specify an event that will trigger the
alert.

**Step 8 –** Complete the Event Filter dialog.

- In the Event tab, specify the filter name and description. In the Event Log field select the
  Netwrix Auditor System Health log.
- In the Event Fields tab, select event levels that will trigger the alert.

**Step 9 –** Click OK to save the changes and close the Event Filters dialog.

**Step 10 –** In the Netwrix Auditor Event Log Manager wizard, navigate to the Notifications section
and specify the email address where notifications will be delivered.

**_RECOMMENDED:_** click **Send Test Email**. The system will send a test message to the specified
email address and inform you if any problems are detected.

**Step 11 –** In the Audit Archiving filters, select the Netwrix Auditor System Health as the
inclusive filter.

**Step 12 –** Click Save to save your changes.

![emailhealthstatusevent](/img/product_docs/auditor/auditor/admin/alertsettings/emailhealthstatusevent.webp)

If an event occurs that triggers an alert, an email notification will be sent immediately to the
specified recipients.

# Create Alerts for Non-Owner Mailbox Access Events

If you have a monitoring plan configured to audit Exchange, you can configure alerts to be triggered
by non-owner mailbox access events (e.g., opening a message folder, opening/modifying/deleting a
message) using the event log alerts. To enable monitoring of non-owner mailbox access events, you
need to create a monitoring plan for auditing event logs.

## Create Alerts for Non-Owner Mailbox Access Events

The procedure below describes the basic steps, required for creation of a monitoring plan that will
be used to collect data on non-owner mailbox access events. See
[Event Log Manager](/docs/auditor/10.7/tools-and-utilities/event-log-tools.md) topic for additional information.

Follow the steps to create alert for non-owner mailbox access events.

**Step 1 –** Create a monitoring plan in Netwrix Auditor Event Log Manager.

**Step 2 –** Make sure that the Enable event log collection checkbox is selected. Specify the name
for the new plan, for example, "_Non-owner mailbox access auditing_".

**Step 3 –** Navigate to the Monitored computers list and add a server where your Exchange
organization resides.

**Step 4 –** On the General tab, click Configure next to Alerts. Make sure the predefined alerts are
disabled. Click Add to create an alert for non-owner mailbox access event.

**Step 5 –** In the Alert Properties wizard, specify the alert name and enter alert description
(optional). Specify the number alerts per email. Grouped alerts for different computers will be
delivered in separate email messages. This value is set to 1 by default, which means that each alert
will be delivered as a separate email message.

**Step 6 –** Specify alert recipient if you want the alert to be delivered to a non-default email.

**Step 7 –** Navigate to Event Filters and click Add to specify an event that will trigger the
alert.

**Step 8 –** Complete the Event Filter dialog.

- In the Event tab, specify the filter name and description. In the Event Log field enter _"Netwrix
  Non-Owner Mailbox Access Agent"_.

- In the Event Fields tab, complete the following fields:

  - Event ID—Enter the identifier of a specific event that you want to be alerted on. You can add
    several IDs separated by comma. Review the event IDs available in the Netwrix **Non-Owner
    Mailbox Access Agent** event log:

    | ID  | Description                                 | Access Type (as displayed in XML view of event details) |
    | --- | ------------------------------------------- | ------------------------------------------------------- |
    | 1   | A folder was opened                         | actFolderOpen                                           |
    | 2   | A message was opened                        | actMessageOpened                                        |
    | 3   | A message was sent                          | actMessageSubmit                                        |
    | 4   | A message was changed and saved             | actChangedMessageSaved                                  |
    | 5   | A message was deleted                       | actMessageDeleted                                       |
    | 6   | A folder was deleted                        | actFolderDeleted                                        |
    | 7   | The entire contents of a folder was deleted | actAllFolderContentsDeleted                             |
    | 8   | A message was created and saved             | actMessageCreatedAndSaved                               |
    | 9   | A message was moved or/and copied           | actMessageMoveCopy                                      |
    | 10  | A folder was moved or/and copied            | actFolderMoveCopy                                       |
    | 14  | A folder was created                        | actFolderCreated                                        |

  - Source—Enter _"Netwrix Non-Owner Mailbox Access Agent"_.

- In the Insertion Strings tab, select Consider the following event Insertion Strings to receive
  alerts on events containing a specific string in the EventData. Click Add and specify the
  Insertion String.

**Step 9 –** Click OK to save the changes and close the Event Filters dialog.

**Step 10 –** In the Netwrix Auditor Event Log Manager wizard, navigate to Notifications and specify
the email address where notifications will be delivered.

**_RECOMMENDED:_** click **Send Test Email**. The system will send a test message to the specified
email address and inform you if any problems are detected.

**Step 11 –** Click Edit next to Audit Archiving Filters step, in the Inclusive Filters section
clear the filters you do not need, click Add and specify the following information:

- The filter name and description (e.g., Non-owner mailbox access event)
- In Event Log, enter _"Netwrix Non-Owner Mailbox Access Agent"_.
- In Write to, select Long-Term Archive. The events will be saved into the local repository.

**Step 12 –** Click Save. If an event occurs that triggers an alert, an email notification will be
sent immediately to the specified recipients.

## Review Event Description

Review the example of the MessageOpened event in the XML view:

![eventmessageopen](/img/product_docs/auditor/auditor/admin/alertsettings/eventmessageopen.webp)

Depending on the event, the strings in the description may vary. The first eight strings are common
for all events:

| String  | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| String1 | The event type: info or warning                                             |
| String2 | The event date and time in the following format: YYYY_MM_DD_hh_mm_ss_000    |
| String3 | The name of the user accessing mailbox                                      |
| String4 | The SID of the user accessing mailbox                                       |
| String5 | The GUID of the mailbox being accessed                                      |
| String6 | Shows whether the user accessing mailbox is the owner: it is always _false_ |
| String7 | The IP of the computer accessing the mailbox                                |
| String8 | The access type                                                             |

The following strings depend on the non-owner access type, represented by different Event IDs:

| Event ID | Access type (String 8)                                              | Strings       | Description                                                                                    |
| -------- | ------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------- |
| 1        | actFolderOpen                                                       | String9       | The internal folder URL                                                                        |
| 2        | actMessageOpened                                                    | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 3        | actMessageSubmit                                                    | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | Email addresses of the message recipients, separated by a semicolon |               |                                                                                                |
| String12 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 4        | actChangedMessageSaved                                              | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | The message type: IPM.Note – Email, IPM.Contact – contact, etc.     |               |                                                                                                |
| 5        | actMessageDeleted                                                   | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 6        | actFolderDeleted                                                    | String9       | The internal folder URL                                                                        |
| 7        | actAllFolderContentsDeleted                                         | String9       | The internal folder URL                                                                        |
| 8        | actMessageCreatedAndSaved                                           | String9       | The internal message URL                                                                       |
| 9        | actMessageMoveCopy                                                  | String9       | The message being moved/copied—the final part of the message URL, e.g., /Inbox/testMessage.EML |
| String10 | The action – copy or move                                           |               |                                                                                                |
| String11 | The folder URL the message is copied/moved from                     |               |                                                                                                |
| String12 | The destination folder URL                                          |               |                                                                                                |
| String13 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 10       | actFolderMoveCopy                                                   | Strings 9 -13 | The string descriptions for the folder are similar to those for messages.                      |
| 14       | actFolderCreated                                                    | String9       | The new folder URL                                                                             |

With different Exchange versions and/or different email clients, the same non-owner action (e.g.,
copying a message) may generate different events: e.g., actMessageMoveCopy with one server/client or
actMessageCreatedAndSaved with another.

You can add the required strings contained in % symbols for your own custom alert separated by
a` <br>` tag in `<b>Event Parameters:</b>`. Event parameter descriptions can also be added.

In the example below, the following information has been added:

- The description for String 3—User accessing mailbox
- String 8 with the description
- String 9 with the description

![editnotificationtemplate](/img/product_docs/auditor/auditor/admin/alertsettings/editnotificationtemplate.webp)
