# Notification: Change Type

Use the Select Change Type page to choose the types of changes for which to trigger a notification.
The selections on this page are optional. This page is only active if Change Detection Table is
selected on the Table Type page.

![Notification Data Analysis Module wizard Select Change Type page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/changetype.webp)

The following options are available:

- Notify me when a property changes – Used to watch for changes in settings, such as a change to a
  registry value or a service user account assignment change
- Notify me when something new is detected – Used to watch for something new, such as a new
  permissions assignment or someone being added to a group
- Notify me when something is removed – Used to watch for something being removed, such as a user
  being removed from a group or an application uninstalled

# Notification: Command Line

The Command Line properties page is available when the Command-line Executable notification type is
selected on the Type page.

![Notification Data Analysis Module wizard Command Line properties page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/commandline.webp)

The following options are available:

- Application – Specify an application to receive the notification. Click the ellipsis (**…**) to
  view and select from a list of executable files.
- Arguments – If required, specify command line inputs for the application in the text box. If the
  argument must come from a value in the database (for example, a timeout value), insert it here via
  the Fields drop-down menu above.

  - Fields – To pass one or more fields into the command line arguments, click the drop-down menu,
    select a field from the lists, and click **Add**

# Notification: Criteria

Use the Notification Criteria page to specify criteria to trigger a notification.

![Notification Data Analysis Module wizard Criteria page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

The following options are available:

- No Criteria – Set no criteria to trigger a notification if any property changes. If selected, any
  row will trigger the notification.
- Simple Criteria – Select criteria to send a notification based on the value of a specific property
  or column in the database. The trigger can be if the property or column value is greater than,
  equal to, or less than the value provided.
- Advanced Criteria – Use the Filter Builder to create custom triggers when a value meets the
  defined conditions. See the
  [Advanced Search](/docs/accessanalyzer/11.6/administration/navigation.md#advanced-search)
  topic for additional information.

# Notification: Event Log

The Event Log properties page is available when the Event log notification type is selected on the
Type page. Use this page to specify the type of event, the event ID, and the description for the
event.

![Notification Data Analysis Module wizard Event Log properties page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/eventlog.webp)

The following options are available:

- Log – The event log name is Enterprise Auditor
- Type – Specify the log type. The drop-down menu displays the following options:

  - Information
  - Warning
  - Error
  - FailureAudit
  - SuccessAudit

- Event ID – Specify the event ID
- Description – Enter a description of the event

  - Fields – To pass fields into the description, click on the drop-down list, select a field from
    the list, then click **Add**

# Notification: Frequency

Use the Notification Frequency page to specify the frequency by which to generate the notifications.

![Notification Data Analysis Module wizard Notification Frequency page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/frequency.webp)

The following options are available:

- Generate notifications immediately
- Delay notifications until conditions have been met – Set the frequency condition

# Notification: Hosts

Use the Select Hosts page to scope hosts and to select specific hosts to target.

![Notification Data Analysis Module wizard Select Hosts page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/hosts.webp)

The following options are available:

- I want notification sent for all hosts
- I want notifications sent only for the hosts listed below
- I want notifications sent for all hosts except the ones listed below

If the first option is selected, the host list selection window is not enabled. If either the second
or third option is selected, the following options are enabled:

- Show me all host lists – Activates the host list selection window, from which individual host
  lists can be selected
- Enter hosts manually – Manually enter specific host names. Once the name is entered, click the add
  (**+**) button to add it to the selection box. Ensure the checkbox next to the host name is
  selected to include it in the list of hosts.

# Notification Analysis Module

The Notification Data analysis module provides the ability to send an email or command-line
notification to selected targets based on the values contains in any table.

The Notification Data Analysis Module has the following prerequisites:

- Configure the **Notification** node in the global settings

  - See the
    [Notification](/docs/accessanalyzer/11.6/administration/settings/notifications.md)
    topic for additional information

- Enable History for the table specified as the source

  - Only required if configuring Frequency or Time Window, or when using the Change Detection
    table as a source on the Table Type page

## Configuration

The Notification analysis module is configured through the Notification Data Analysis Module wizard,
which contains the following wizard pages:

- Welcome
- [Notification: Table Type](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Select Table](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Change Type](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Criteria](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Hosts](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Type](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: SMTP](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Command Line](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Event Log](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Frequency](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Time Window](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)
- [Notification: Summary](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md)

The Welcome page lists the prerequisites needed for the Notification Analysis Module to function
properly.

![Notification Data Analysis Module wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. To proceed, click **Next**.

# Notification: Select Table

Select the table containing data on which to trigger a notification. The selection on the Table Type
page determines the options available on this page. See the
[Notification: Table Type](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md) topic
for additional information.

![Notification Data Analysis Module wizard Select Table page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/selecttable.webp)

The Select table page has the following options:

- Show All Tables – All tables within the SQL Server database
- Show All SA Tables – All Enterprise Auditor tables within the SQL Server database
- Show only tables for this job

# Notification: SMTP

The SMTP properties page is available when the Email notification type is selected on the Type page.
Use this page to specify SMTP notification properties, including recipients, subject line, and email
body.

![Notification Data Analysis Module wizard SMTP properties page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/smtp.webp)

The following options are available:

- E-mail – Enter an email address to add to the notification list

  - Add – Add an email address to the E-mail field
  - Remove – Remove an email address from the Recipients list
  - Combine multiple messages into single message – Sends one email for all objects in the record
    set instead of one email per object to all recipients

- Subject – Specify a subject for the email. The subject can include field variables.

  **_RECOMMENDED:_** If configuring a Notification analysis module for a pre-configured job, it is
  recommended not to change the existing field variables.

- Insert Field – Select a source data column to add to the message body or subject line. Click the
  drop-down to see a list of columns. Once the column displays in the field, click an arrow to
  insert the field.

  - Down arrow – Adds the selected source column to the message text
  - Up arrow – Adds the selected source column to the subject text

- Embed HTML Report – Embed a HTML report in the notification email. Click the Embed HTML Report
  button to navigate to the HTML file.
- Show sample input source data – Opens the Sample Source Data window, containing sample input
  source data as it currently exists in the database
- Show dialog to set SMTP options – Opens the SMTP Options window, where SMTP global settings can be
  overwritten through manual configuration
- Preview – Displays a preview of the email.

  **NOTE:** The preview may not show any or all of the filters applied in previous steps.

- Clear Template – Clears all data from the subject and message boxes. Does not clear e-mail
  addresses.
- Text Box – Specify the text of the email message. The toolbar above the text box contains various
  icons providing access to text editing and formatting tools. To insert fields from Enterprise
  Auditor, choose a field from the drop-down menu and click the Down arrow. Block tag formatting is
  supported.

# Notification: Summary

The Summary Page displays all the information input in each of the configured options from the
previous pages of the wizard.

![Notification Data Analysis Module wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is best practice to
click **Cancel** to close the Notification Data Analysis Module wizard to ensure no accidental
clicks are saved.

# Notification: Table Type

Use the Source Table Selection page to choose the type of table to use as the data source for
notifications.

![Notification Data Analysis Module wizard Source Table Selection page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/tabletype.webp)

The following options are available:

- Change Detection Table – Sends notifications when changes are detected in the data. When selected,
  the option of **Show only tables for this job** becomes the default selection on the Select Table
  page. This option targets only change detection tables within the current job. Possible tables (if
  any) display on the Select Table page. See the
  [Notification: Select Table](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md) topic
  for additional information.

  **NOTE:** Change Detection Table also locks selections to tables on the Select Table page that
  are selected through Other. To select tables outside of **Show only tables for this job**,
  select Other on the Table Type page, then select either **Show All Tables** or **Show All SA
  Tables**, then click back to return to the Table Type page. Now selecting Change Detection Table
  and proceeding defaults the selection on the Select Table page to whichever was previously
  selected through Other.

- Other – Sends a notification based on a value within a selected table. Selecting this option
  enables the following options on the Select Table page, each of which lists a specific set of
  tables available for selection:

  - Show All Tables
  - Show All SA Tables
  - Show only tables for this job

# Notification: Time Window

Use this page to specify whether to include only rows collected in the last execution.

![Notification Data Analysis Module wizard Time window page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/timewindow.webp)

The following option is available:

- Only include rows from most recent run for `[<table name>]` – Select the checkbox to scope the
  task to the most recent data

  **NOTE:** The checkbox is only enabled if the table selected on the Select Table page has a
  Enterprise Auditor **JobRunTimeKey** property. Otherwise, the checkbox is cleared by default.

# Notification: Type

Use the Notification Type page to specify one or more notification types.

![Notification Data Analysis Module wizard Notification Type page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/notification/type.webp)

The following options are available:

- Email – Sends a notification email to specified addresses defined on the SMTP page. See the
  [Notification: SMTP](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md) topic
  for additional information.
- Command-line Executable – Runs a command-line program such as a batch file. On the Command Line
  page, define the specific application to run and any flags or arguments that must be set at
  runtime. See the
  [Notification: Command Line](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md) topic
  for additional information.
- Event Log – Creates a Windows Event Log item on the Enterprise Auditor Event Log. On the Event Log
  page, define the following:

  - Type of event (Information, Warning, Error, SuccessAudit, FailureAudit)
  - Event ID
  - Description of the event

  See the
  [Notification: Event Log](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/notifications.md) topic
  for additional information.
