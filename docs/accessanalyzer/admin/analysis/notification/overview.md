# Notification Analysis Module

The Notification Data analysis module provides the ability to send an email or command-line
notification to selected targets based on the values contains in any table.

The Notification Data Analysis Module has the following prerequisites:

- Configure the **Notification** node in the global settings

    - See the [Notification](../../settings/notification.md) topic for additional information

- Enable History for the table specified as the source

    - Only required if configuring Frequency or Time Window, or when using the Change Detection
      table as a source on the Table Type page

## Configuration

The Notification analysis module is configured through the Notification Data Analysis Module wizard,
which contains the following wizard pages:

- Welcome
- [Notification: Table Type](tabletype.md)
- [Notification: Select Table](selecttable.md)
- [Notification: Change Type](changetype.md)
- [Notification: Criteria](criteria.md)
- [Notification: Hosts](hosts.md)
- [Notification: Type](type.md)
- [Notification: SMTP](smtp.md)
- [Notification: Command Line](commandline.md)
- [Notification: Event Log](eventlog.md)
- [Notification: Frequency](frequency.md)
- [Notification: Time Window](timewindow.md)
- [Notification: Summary](summary.md)

The Welcome page lists the prerequisites needed for the Notification Analysis Module to function
properly.

![Notification Data Analysis Module wizard Welcome page](../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. To proceed, click **Next**.
