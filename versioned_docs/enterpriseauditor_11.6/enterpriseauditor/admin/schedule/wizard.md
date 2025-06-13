# Schedule Wizard

The schedule wizard allows you to configure scheduled tasks for jobs, job groups, Host Discovery queries, and Host Inventory queries. The wizard has five wizard pages with options for setting up the schedule task:

- [Schedule](#Schedule)
- [Host List](#Host-List)
- [Connection](#Connection)
- [Run As](#Run-As)
- [Options](#Options)

On the Schedule page, click __New__ to schedule when the task will run. The Host List and Connection pages are optional customizations. See the relevant section below for more information on the settings on each wizard page.

When the settings on the wizard pages are configured as desired, click __OK__ to save the changes and close the window. The task is visible in the Schedule Actions view, at the Schedules node.

## Schedule

The Schedule page is for setting the schedule of when and how often the task will run. This tab needs to be properly configured for every scheduled task.

![Schedule wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/schedule.png)

The options on the Schedule page are:

- New – Opens the Trigger window to create a trigger for when the selected task will run
- Edit – Edits the selected Trigger in the Schedule view
- Delete – Deletes the selected trigger

![Trigger window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/schedule/triggerwindow.png)

The options in the Trigger window are:

- Begin the task – Select when the scheduled task will execute from a list of options
- Settings Section – Select the time interval that the scheduled task will execute. Enterprise Auditor pulls schedule frequency options from Windows Task Scheduler. The following options are applicable for scheduling Enterprise Auditor tasks on the Schedule page:

  - For __One time__ recurrence, set the Start time and date of the single execution
  - For __Daily__ recurrence, set the Start time and the daily interval of Recur every [value] days
  - For __Weekly__ recurrence, set the Start time and the weekly interval of Recur every [value] weeks on. Then select the days of the week for the execution.
  - For __Monthly__ recurrence, set the Start time. Then select either the monthly interval of Days [value] of the month or the [value] [Day of the Week] of the month. By default, this is set to recur every month. To select only specific months, use Months dropdown menu and deselect the undesired months.
  - The drop-down menu next to __Start__ opens a calendar view for selecting the date
  - Selecting the __Synchronize across time zones__ checkbox will synchronize the scheduled task to run without respect to the time zone

The remaining schedule frequencies are supplied by Windows Task Scheduler and not applicable to Enterprise Auditor task scheduling. See the Microsoft [Task Scheduler Overview](https://technet.microsoft.com/en-us/library/cc721871.aspx) article for additional information.

![Trigger window Advanced settings](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/schedule/triggerwindowadvancedsettings.png)

The options in the Advanced settings section are:

- Stop task if it runs longer than – Create a threshold for when the task will stop if it runs beyond a certain duration
- Enabled – If checked, the configurations made in the Trigger window will be enabled

## Host List

The Host List page identifies the host list the task being scheduled queries. Customizations to the configuration of this tab is optional.

![Host List wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/schedule/hostlist.png)

Choose the desired setting from the following options:

- Use Host list from Job – A default setting and applies the host list designated at the job or job group level. This is also the recommended setting.
- Use Alternate Host List – Allows a host list to be selected from the list of Hosts Lists provided. The list is from the Host Management host lists.

Under the selection window, the number of selected hosts are identified. In addition, the __Select All__ and __Clear All__ links provide for quick selection and deselection.

## Connection

The Connection page identifies the Connection Profile that is applied to the targeted hosts being queried by the task being scheduled. Customizations to the configuration of this tab is optional.

![Connection wizard page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/connection.png)

Choose the desired setting from the following options:

- Use Profile from Job – A default setting and applies the Connection Profile designated at the job or job group level

  ___RECOMMENDED:___ In most cases, this is the recommended setting
- Use the Windows account that the application is run with (System default) – Applies the account used to open the Enterprise Auditor Console
- Use Alternate Profile – Allows a Connection Profile to be selected form the Profiles list provided. The list is from the global __Settings__ > __Connection__ list of Connection Profiles.

## Run As

Select the Schedule Service account to run this task with on the Run as wizard page. To create or edit Schedule Service accounts, go to the __Settings__ > __Schedule__ node. See the [Schedule](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/schedule.md) topic for additional information.

![Run as wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/schedule/runas.png)

The options on the Run as wizard page are:

- Use default Schedule Service Account – Uses the default Schedule Service Account that is set at the __Settings__ > __Schedule__ node
- Use selected Schedule Service Account – Select the Schedule Service Account to use for the task from a list of available accounts in the drop-down menu
- Use Custom Credentials – Use custom credentials not stored in the Enterprise Auditor Console. Enter the User Name for the custom credentials.

  - Change User – Click this button to open the Schedule Custom Credentials window and specify a user name and password
  - To update the password for an existing account, click the __Change User__ button and enter a new password

## Options

Configure additional options for the task on the Options wizard page.

![Options wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/options.png)

The configurable options are:

- Comments – Enter custom comments for the scheduled task
- Stop the task if it runs for – Create the threshold for when the scheduled task will stop if it exceeds a configured duration
- Scheduled task is enabled – Selecting this checkbox will enable the scheduled task. Deselecting it will disable the scheduled task.
