---
title: overview
sidebar_label: overview
description: Directory Manager 11.1 documentation for overview with configuration details, usage instructions, and implementation guidance.
---

# GroupID Entitlement Schedule

An Entitlement schedule is automatically created for an identity store when:

- A server is added for permission analysis on the Entitlement page in an Active Directory identity
  store. See the [Manage File Servers](/docs/directorymanager/11.1/configuration/entitlements.md) for additional information on
  adding a server.

  Or

- A SharePoint site is added for permission analysis on the Entitlement page in a Microsoft Entra ID
  identity store. See the [Manage SharePoint Sites](/docs/directorymanager/11.1/configuration/entitlements.md) topic for
  additional information on adding a SharePoint site.

By default, the schedule runs weekly to compute permissions on shared files and folders residing on
the specified servers (for Active Directory), and the document libraries present in the specified
sites (for SharePoint). It then replicates these permissions to Elasticsearch, enabling users to
view, manage and update these permissions in the Directory Manager portal.

On the very first run of the Entitlement schedule, it computes all permissions from scratch and
performs a complete replication. On each next run, it will create a parallel index for that specific
server/SharePoint site index with the suffix \_replication which computes all permissions from
scratch. In the meantime, user can perform actions on Directory Manager Entitlement. The actions
performed during this parallel replication are committed directly at the provider and stored in the
database. These changes are then immediately committed to elastic after the replication is complete.

The scope schedule changes are replicated after the new index is done replicating permissions from
the server/SharePoint. When this parallel index gets completely replicated, it becomes the new
primary index for this server/SharePoint site and the \_replication index is deleted from indices.

The GroupID Entitlement schedule runs in the context of the following accounts:

- For file servers, the schedule runs in the context of the service account defined for the identity
  store. In case you specify a different account for a file server, the schedule runs in the context
  of the changed account. See the
  [Connect to a File Server Using a Different Account](/docs/directorymanager/11.1/configuration/entitlements.md#connect-to-a-file-server-using-a-different-account)
  topic.
- For a SharePoint site, the schedule runs in the context of the account you specified to connect to
  the SharePoint admin site. In case you specify a different account for a site, the schedule runs
  in the context of the changed account. See the
  [Connect to a Site Using a Different Account](/docs/directorymanager/11.1/configuration/entitlements.md#connect-to-a-site-using-a-different-account)
  topic.

You cannot create or delete a GroupID Entitlement schedule; only edit the existing schedule.

## Update the Schedule

Follow the steps to update the GroupID Entitlement schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to **GroupID Entitlement**. Then click the
ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the
schedule as read-only. The name format is
`_Entitlement_<the name of the machine the schedule is created on>`.

Step 6 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 7 – The **Triggers** area displays the default triggering frequency for the schedule.

- To change a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Step 8 – Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 9 – After making the changes, click **Update Schedule**.

Step 10 – On the Schedules page, click **Save**.  
For general schedule info, see the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# Entitlement Scope Schedule

An Entitlement Scope schedule is automatically created for an identity store when:

- A server is added for permission analysis on the Entitlement page in an Active Directory identity
  store. See the [Manage File Servers](/docs/directorymanager/11.1/configuration/entitlements.md) for additional information on
  adding a server.

  Or

- A SharePoint site is added for permission analysis on the Entitlement page in a Microsoft Entra ID
  identity store. See the [Manage SharePoint Sites](/docs/directorymanager/11.1/configuration/entitlements.md) topic for
  additional information on adding a SharePoint site.

Using the Directory Manager portal, users can update the permissions on files and folders residing
on file servers (for Active Directory) and the document libraries in SharePoint sites (for Microsoft
Entra ID). These changes to permissions are instantly committed to the respective file server or
site; however, they are displayed in the Directory Manager portal after the Entitlement Scope
schedule runs.

By default, the schedule runs daily to replicate the permissions from file servers or sites to
Elasticsearch. Permissions are replicated for the target folder, site, or document library and its
sub-trees, till the nth level. Changes made to permissions outside of Directory Manager are beyond
the scope of this schedule.

Permissions replicated by the Entitlement Scope schedule are also replicated by the
[GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md), as the latter replicates permissions from scratch.
However, the default triggering frequency for the Directory Manager Entitlement schedule (i.e.,
weekly) necessitates a separate Entitlement Scope schedule.

The Entitlement Scope schedule runs in the context of the following accounts:

- For file servers, the schedule runs in the context of the service account defined for the identity
  store. In case you specify a different account for a file server, the schedule runs in the context
  of the changed account. See the
  [Connect to a File Server Using a Different Account](/docs/directorymanager/11.1/configuration/entitlements.md#connect-to-a-file-server-using-a-different-account)
  topic for additional information.
- For a SharePoint site, the schedule runs in the context of the account you specified to connect to
  the SharePoint admin site. In case you specify a different account for a site, the schedule runs
  in the context of the changed account. See the
  [Connect to a Site Using a Different Account](/docs/directorymanager/11.1/configuration/entitlements.md#connect-to-a-site-using-a-different-account)
  topic for additional information.

You cannot create or delete an Entitlement Scope schedule; only edit the existing schedule.

## Update the Entitlement Scope Schedule

Follow the steps to update the Entitlement Scope schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to Entitlement Scope. Then click the
ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the
schedule as read-only. The name format is
_Entitlement_`<the name of the machine the schedule is created on>`_Scope_.

Step 6 – In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 7 – The Triggers area displays the default triggering frequency for the schedule.

- To change a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Step 8 – Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 9 – After making the changes, click **Update Schedule**.

Step 10 – On the Schedules page, click **Save**.  
For general schedule info, see the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store)topic
for additional information.

# Entitlement Temporary Permissions Schedule

An Entitlement Temporary Permissions schedule is automatically created for an identity store when:

- A server is added for permission analysis on the Entitlement page in an Active Directory identity
  store. See the [Manage File Servers](/docs/directorymanager/11.1/configuration/entitlements.md) for additional information on
  adding a server.

  Or

- A SharePoint site is added for permission analysis on the **Entitlement** page in a Microsoft
  Entra ID identity store. See the [Manage SharePoint Sites](/docs/directorymanager/11.1/configuration/entitlements.md) topic
  for additional information on adding a SharePoint site.

The Entitlement Temporary Permissions schedule updates the temporary permissions granted to objects
on shared files and folders residing on file servers (for Active Directory), and the document
libraries in SharePoint sites (for Microsoft Entra ID). This is how it works:

- Administrators and other users can set a start and end date to grant certain permission(s)
  temporarily to an object on shared resources, such as file shares and document libraries in a
  SharePoint site.
- They can also set a start and end date to revoke certain permission(s) temporarily for an object
  on shared resources, such as file shares and document libraries in a SharePoint site.
- The Entitlement Temporary Permissions schedule temporarily grants and revokes permissions for an
  object on the specified dates.

Let’s assume that the Entitlement Temporary Permissions schedule is scheduled to run once a week,
say Mondays. If temporary permissions are to be granted to an object on file server share for three
days - Wednesday till Friday, it will not happen. This is because the Entitlement Temporary
Permissions schedule did not run on the specific days for temporary permissions update. Make sure
that the schedule is set to run at a frequency that meets your temporary permission requirements.

The Entitlement Temporary Permissions schedule runs in the context of the following accounts:

- For file servers, the schedule runs in the context of the service account defined for the identity
  store. In case you specify a different account for a file server, the schedule runs in the context
  of the changed account. See the
  [Connect to a File Server Using a Different Account](/docs/directorymanager/11.1/configuration/entitlements.md#connect-to-a-file-server-using-a-different-account)
  topic.
- For a SharePoint site, the schedule runs in the context of the account you specified to connect to
  the SharePoint admin site. In case you specify a different account for a site, the schedule runs
  in the context of the changed account. See the
  [Connect to a Site Using a Different Account](/docs/directorymanager/11.1/configuration/entitlements.md#connect-to-a-site-using-a-different-account)
  topic.

You cannot create or delete an Entitlement Temporary Permissions schedule; only edit the existing
schedule.

## Update the Entitlement Temporary Permissions Schedule

Follow the steps to udpate the Entitlement Temporary Permissions schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to Entitlement Temporary Permissions. Then
click the ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the
schedule as read-only. The name format is
_Entitlement_`<the name of the machine the schedule is created on>`_ TemporaryPermission_.

Step 6 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 7 – The Triggers area displays the default triggering frequency for the schedule.

- To change a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Step 8 – Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 9 – After making the changes, click **Update Schedule**.

Step 10 – On the Schedules page, click **Save**.  
For general schedule info, see the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store)topic
for additional information.

# Group Usage Service Schedule

A Group Usage Service schedule monitors expansion events and timestamps affected groups of the
Microsoft Exchange Server(s) for an identity store.

An expansion event occurs when an Exchange Server expands a distribution list for sending messages.
The event is recorded in the Exchange Server's message tracking log, which the Group Usage Service
schedule reads, parsing for the timestamp that indicates when the distribution list was last used.

The timestamp is then used by the [Group Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md) to extend or reduce
the life of mail-enabled distribution groups based on their usage. See the
[Enable Group Usage Lifecycle](/docs/directorymanager/11.1/administration/services/overview.md#enable-group-usage-lifecycle)
topic.

While creating a Group Usage Service schedule, you have to specify a job triggering criterion, the
containers the job will process, and the messaging servers for reading expansion logs.

## Create a Group Usage Service Schedule

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Group Usage Service Job**.  
The Create Schedule page is displayed.

Step 5 – In the **Schedule Name** box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_GUS\_\_; the schedule is
displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the **Portal URL** drop-down list to include it in
notifications generated for the schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 9 – You can specify containers as targets for the schedule. The schedule will process all
groups in those containers and sub-containers.

- Select the **Include all containers** check box to run the schedule on all the containers in the
  identity store.  
  Or
- Click **Add Container** to add one or more containers as targets. The Add Container(s) dialog box
  shows the domain name and the OUs in the identity store. Select the check boxes for the required
  containers and click **Add**; the selected containers are displayed in the Target(s) area. To
  exclude a sub-container, clear the check box for it on the Add Container(s) dialog box.
- To remove a container in the Target(s) area, click **Remove** for it.  
  To remove all target objects, click **Remove All**.

Step 10 – You can also specify one or more messaging servers. The job reads expansion logs from
these servers.

1. Click **Add Server** in the Messaging Server area. The Add Messaging Servers dialog box displays
   the messaging servers in the identity store.
2. Select the check boxes for the messaging servers that the Group Usage Service schedule should
   process.

   Or

   Select the Server Name check box if you want this job to read the expansion logs of all
   messaging servers in the identity store.

3. Click **Add**. The messaging server(s) are displayed in the Messaging Server area.

Step 11 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. See the [Triggers](/docs/directorymanager/11.1/automation/triggers.md)
topic for information on the triggering criterion setting.

Step 12 – After specifying the settings for triggers, click **Add**. The trigger is displayed in the
Triggers area.

A schedule can have one or more triggers, allowing the schedule to be started in many ways. With
multiple triggers, the schedule will start when any of the triggers occur.  
To enable or disable a trigger - Click **Edit** for a trigger in the Triggers area and use the
toggle button at the top of the Update Trigger dialog box to enable or disable the trigger.  
To remove a trigger - Click **Remove** for a trigger to remove it.

Step 13 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store.  
The Authentication dialog box displays your accounts in the respective identity store that you have
used for signing in. Select an account to authenticate with it or click **Login with a different
user** to provide the credentials of another account to run the schedule in the identity store.

NOTE: Make sure this account falls under a high priority security role that has elevated permissions
in the identity store (for example, Administrator).

NOTE: If you are creating this schedule in a Microsoft Entra ID identity store, you can only specify
the logged-in user's account. See the
[Schedules for Microsoft Entra ID Identity Store](/docs/directorymanager/11.1/automation/overview.md#schedules-for-microsoft-entra-id-identity-store)
section of the [Schedules](/docs/directorymanager/11.1/automation/overview.md) topic for additional information.

Step 14 – On the Create Schedule page, click **Create Schedule**.

Step 15 – On the Schedules page, click **Save**.  
 The schedule is displayed under Group Usage Service. See the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# History Retention Schedule

While configuring history tracking for an identity store, you can choose to keep history records
forever in the Directory Manager database or retain history for a specific period. See the
[Configure History Tracking](/docs/directorymanager/11.1/administration/services/overview.md) topic
for additional information. In case you select the latter option, the History Retention schedule is
auto created for the identity store. This schedule runs on a specified frequency to check if the
retention period is over for any history records, and if so, move them from the Directory Manager
database to the following .csv files:

- History – Contains history data of the Directory Manager portal (including Synchronize),
  Management Shell, and scheduled jobs. It also contains history data for the identity store,
  security roles, and workflow configurations.
- AuditingHistory – Contains history data of all authentication actions performed in Directory
  Manager, as logged in Helpdek history. See the [History in Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic
  for additional information.
- PasswordCenterHistory – Contains history data of all actions tracked in Helpdesk, except the
  authentication action. See the [History in Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic for additional
  information.
- AdminCenterHistory – Contains Admin Center history data. See the
  [Admin Center History](/docs/directorymanager/11.1/administration/general-settings.md) topic for additional information.

These files are available at the following location on the Directory Manager server:

`X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\HistoryBin\`

(X is the Directory Manager installation drive)

History data moved to these files is not longer displayed in Directory Manager.

NOTE: Admin Center history does not fall in a specific identity store, so its retention mechanism is
different. Directory Manager checks the identity store of the user who performed an action logged in
Admin Center history, and archives that record according to the history retention setting of the
identity store that user belongs to.

After the History Retention schedule runs, the following information is displayed on the **History**
page in identity store configurations:

![History Retension Information ](/img/product_docs/directorymanager/directorymanager/admincenter/schedule/historyretention.webp)

You cannot create or delete a History Retention schedule; only update the existing one.

## Update the History Retention Schedule

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to **History Retention**. Then click the
ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the schedule name is displayed in the Schedule Name box as
read-only.  
The default name format is: _HistoryRetention_`<identity store ID>`_`<identity store name>`_.

Step 6 – The Name Preview box displays the schedule name as HistoryRetention; the schedule is
displayed with this name in email notifications.

Step 7 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 8 – The Triggers area displays the default triggering frequency for the schedule.

- To change a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 9 – Click **Update Schedule**.

Step 10 – On the Schedules page, click **Save**.  
For general schedule info, see the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# Manage Schedules

Directory Manager enables you to run, modify, disable, and delete the schedules defined for an
identity store.

## View the Schedules in an Identity Store

Follow the steps to view the schedules in an identity store.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to a job name to view the schedules defined
for it.  
The following is displayed for a schedule:

| Label     | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enable    | Shows whether a schedule is enabled or disabled. Use the toggle button next to a schedule to disable an enabled schedule and vice versa. Directory Manager does not execute a disabled schedule.                                                                                                                                                                                                       |
| Job Name  | The name of a schedule.                                                                                                                                                                                                                                                                                                                                                                                |
| Target(s) | The group(s) and container(s) that a schedule processes.                                                                                                                                                                                                                                                                                                                                               |
| Last Run  | The date and time a schedule last ran.                                                                                                                                                                                                                                                                                                                                                                 |
| Next Run  | The next date and time a schedule will run.                                                                                                                                                                                                                                                                                                                                                            |
| Actions   | Click the ellipsis button for a schedule in the **Actions** column and select an option: - Edit – To update the schedule's settings, such as targets, triggers, and notifications. - Delete – To delete a schedule. - Run – To manually run a schedule instantly. - Terminate – To manually terminate a running schedule instantly. This option is available for schedules that are currently running. |

### Search a Schedule

Directory Manager enables you to search for a schedule by different attributes, such as job name,
job target, last run time, the kind of notifications set for a job and the user name used for
authentication in a job.

Follow the steps to apply a filter.

Step 1 – On the Schedules page, expand the Schedule Filters area by clicking the plus sign.

Step 2 – In the _Select a Filter_ box, select an attribute to filter schedules.

Step 3 – In the _Select an Operator_ drop-down list, select an operator to apply to the selected
attribute. This drop-down displays the operators on the basis of the selected attribute. Available
operators are:

| Condition           | Description                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Starts with         | Returns everything that starts with the value.                                                                              |
| Does not start with | Returns everything that does not start with the value.                                                                      |
| Ends with           | Returns everything that ends with the value. Searching with this condition is resource-intensive for the directory.         |
| Does not end with   | Returns everything that does not end with the value. Searching with this condition is resource-intensive for the directory. |
| Is exactly          | Returns everything that matches the value.                                                                                  |
| Is not              | Returns everything that does not match the value.                                                                           |
| Contains            | Returns everything that contains the value. Searching with this condition is resource-intensive for the directory.          |
| Not contain         | Returns everything that does not contain the value. Searching with this condition is resource-intensive for the directory.  |
| Present             | Returns everything that has a value.                                                                                        |
| Not present         | Returns everything that does not have a value.                                                                              |
| Greater or equal    | Returns everything with a value greater than or equal to the given value.                                                   |
| Less or equal       | Returns everything with a value lesser than or equal to the given value.                                                    |

Step 4 – In the _Select a Value_ box, specify a value for the attribute. The selected attribute and
operator determine the kind of value that can be entered in this box. For some operators, such as
_Present_ and _Not Present_, this field is not available. These operators check if a value for the
attribute is present or not.

- To add more filters – On adding a filter, the next row is displayed, so you can add another
  filter.
- To remove a filter row – To remove a filter row, click **Remove** for it.
- To remove the filter – To remove all the filter rows, click **Clear**.

Step 5 – To apply the filter, click **Apply**. With multiple filters, schedules that satisfy all the
filters are displayed.

## Enable/Disable a Schedule

Follow the steps to enable/disable a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Use the Enable toggle button for a schedule to enable or disable it.  
A disabled schedule is not executed in the identity store.

Step 6 – Click **Save**.

## Update Triggers for a Schedule

A trigger is a criterion that, when met, starts the execution of a schedule.

Follow the steps to update triggers for a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Edit**.

Step 6 – On the Edit Schedule page, the Triggers area displays the trigger(s) set for the schedule.

- To update a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.
- To remove a trigger, click **Remove** for it.

Follow step 11 in the [Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md) topic to manage triggers.

Step 7 – Click **Update Schedule**.

Step 8 – Click **Save** on the Schedules page.

## Update Targets for a Schedule

Targets in a schedule are the objects processed by that schedule.

Follow the steps to update the targets.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Edit**.

Step 6 – On the Edit Schedule page, the Target(s) area displays the target objects for the
schedule.  
Target types differ for different schedule types. For example, you can set containers as targets for
a Group Lifecycle schedule; and jobs and job collections for a Synchronize schedule. Other
schedules, such as a User Lifecycle schedule, may not require a target, as they execute certain
functions for an identity store.

- To add a target object to a schedule, refer to the instructions for the respective schedule.
- To remove a target object, click **Remove** for it.
- To remove all target objects, click **Remove All**.

Step 7 – Click **Update Schedule**.

Step 8 – Click **Save** on the Schedules page.

## Update Notification Settings for a Schedule

Follow the steps to update notification settings for a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Edit**.

Step 6 – On the Edit Schedule page, click the **Notifications** button to update notification
settings for the schedule.  
Notification settings differ for different schedule types. For example, a Smart Group Update
schedule has a different set of notification options from a Group Lifecycle schedule. Other
schedules, such as the Directory Manager Entitlement and Workflow Acceleration schedules, do not
have notification settings.  
To manage the notification settings for a schedule, refer to the instructions for the respective
schedule.

Step 7 – Click **Update Schedule**.

Step 8 – Click **Save** on the Schedules page.

## Run a Schedule Instantly

Follow the steps to run a schedule instantly.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Run** to execute it instantly.

## Terminate a Running Schedule

You can terminate a schedule that is currently running in an identity store. On termination, objects
that have already been processed by the schedule will not be reverted while the remaining stay
unprocessed.

Follow the steps to terminate a running schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a currently running schedule and select **Terminate** to stop
it instantly.

## Delete a Schedule

Follow the steps to delete a schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign for a job to view the schedules defined for it.

Step 5 – Click the ellipsis button for a schedule and select **Delete**.  
The Delete option is not available for system-defined schedules.

Step 6 – On the Delete Schedule dialog box, click **Delete**.

Step 7 – Click **Save** on the Schedules page.

# Orphan Group Update Schedule

An orphan group is one without a primary owner.

An Orphan Group Update schedule is responsible for assigning a primary owner to orphan groups. For
this, the orphan group must have at least one additional owner, since the schedule promotes a
group’s additional owner as its primary owner.

When an Orphan Group Update schedule runs, it promotes the first additional owner in the additional
owners’ list (be it a user, contact, or security group) as the primary owner and a notification is
sent to the promoted owner. Note the following:

- A temporary additional owner is not promoted as the primary owner. When such an owner is the first
  in the list, the schedule skips it and moves to the next additional owner in the list.
- When a security group is promoted as the primary owner, a notification is sent to all group
  members.
- When a mail-enabled user is promoted as the primary owner, the schedule also adds him or her as
  the group’s Exchange additional owner.
- When a user is promoted as the primary owner of more than one group, a single notification is sent
  to him or her, containing details of the groups added to his or her ownership.

The promotion of an additional owner to primary owner may violate the Group Owners policy for the
minimum number of additional owners required. A notification is sent to the promoted owner to add an
additional owner to comply with the policy. See the
[Group Owners Policy](/docs/directorymanager/11.1/administration/security-policies.md) topic.

With history tracking enabled, history is logged at the group level and at the promoted owner’s
level. See the
[Configure History Tracking](/docs/directorymanager/11.1/administration/services/overview.md) topic.

## Create an Orphan Group Update Schedule

Follow the steps to create an Orphan Group Update Schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Orphan Group Update Job**. The
Create Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_OrphanGroupUpdater\_\_; the
schedule is displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in
notifications generated by the schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 9 – You can specify containers as targets for the schedule. The schedule will process all
groups in these containers and their sub-containers. To specific containers as target, follow step 9
in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic.

Step 10 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to add triggers.

Step 11 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. See step 12 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic for additional information.

Step 12 – On the Create Schedule page, click **Create Schedule**.

Step 13 – On the Schedules page, click **Save**.  
The schedule is displayed under Orphan Group Update. See the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# Schedules

The scheduling feature in Directory Manager enables you to perform several operations by creating
scheduled jobs for an identity store. These schedules auto run at the specified day, time, and
frequency.

## Schedules for Active Directory, Google Workspae, and Generic LDAP Identity Stores

You can define the following schedules for an identity store:

- A [Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md) monitors group usage and time stamps groups
  with the date and time they were last used.
- A [Group Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md) expires and deletes groups according to their
  expiry policy. It executes the Group Lifecycle policy for the identity store.
- A [History Retention Schedule](/docs/directorymanager/11.1/automation/overview.md) archives identity store history data in
  Directory Manager.
- A [GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md) replicates object permissions on file servers and
  SharePoint sites for an Active Directory and Microsoft Entra ID identity store respectively.
- An [Entitlement Scope Schedule](/docs/directorymanager/11.1/automation/overview.md) replicates changes made to object permissions
  on file servers and SharePoint sites using Directory Manager.
- An [Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/automation/overview.md) updates the
  temporary permissions for objects on file servers and SharePoint sites.
- A [Managed By Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md) manages the temporary additional owners
  for groups and temporary additional managers for users.
- A [Membership Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md) updates the temporary membership of
  groups.
- An [Orphan Group Update Schedule](/docs/directorymanager/11.1/automation/overview.md) sets the primary owner for an orphan
  group.
- A [Reports Schedule](/docs/directorymanager/11.1/automation/scheduled-reports.md)can automatically generate reports that you link with the
  schedule.
- A [Schema Replication Schedule](/docs/directorymanager/11.1/automation/overview.md) replicates the schema of an identity
  provider to the Directory Manager database.
- A [Smart Group Update Schedule](/docs/directorymanager/11.1/automation/overview.md)updates Smart Groups and Dynasties.
- A [Synchronize Schedule](/docs/directorymanager/11.1/automation/synchronization.md) can execute Synchronize jobs and job groups at a set
  frequency.
- A [User Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md) disables users who do not validate their profiles
  within a given period, based on the settings defined for user profile validation.
- A [Workflow Acceleration Schedule](/docs/directorymanager/11.1/automation/workflow-automation.md) forwards workflow requests to
  approvers and auto approves requests according to workflow approver acceleration rules.

NOTE: Role members with the _Manage Scheduling_ permission in an identity store can create and
manage scheduled jobs. See the
[Modify Role Permissions](/docs/directorymanager/11.1/administration/security-roles.md#modify-role-permissions) topic for additional
information.

Schedules are saved in the Directory Manager database. The GroupIDSchedulerService, created in the
GroupIDSite11 site in native IIS is responsible for initiating schedule runs.

## Schedules for Microsoft Entra ID Identity Store

The following schedules are automatically created when their associated configurations are done in
an identity store.

- Entitlement ([GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md),
  [Entitlement Scope Schedule](/docs/directorymanager/11.1/automation/overview.md),
  [Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/automation/overview.md))
- [User Life Cycle Schedule](/docs/directorymanager/11.1/automation/lifecycle-management.md)
- [History Retention Schedule](/docs/directorymanager/11.1/automation/overview.md)
- [Workflow Acceleration Schedule](/docs/directorymanager/11.1/automation/workflow-automation.md)

In a Microsoft Entra ID identity provider, the Entra ID user must be logged into the Admin Center
while making configurations of these schedules. The schedules are then run in the context of the
logged in user. The following dialog box displays the username of the logged-in user when you
configure a schedule:

![entraidscheduleauthenticate](/img/product_docs/directorymanager/directorymanager/admincenter/schedule/entraidscheduleauthenticate.webp)

Use the Login with a different user option to provide the credentials of another account to run the
schedule in the identity store is not available for a Microsoft Entra ID identity store.

NOTE: The existing schedules will continue to work. The SAML provider authentication does not apply
on them.

# Schema Replication Schedule

An Identity store is built on an identity provider, that could be Active Directory, Microsoft Entra
ID, Google Workspace, or Generic LDAP. The Schema Replication schedule replicates the schema of
these identity providers to the Directory Manager database.

Unlike other schedules that exist separately for each identity store, Directory Manager has only one
Schema Replication schedule that serves all identity stores. While the schedule is displayed
separately for each identity store, it does not represent separate schedules. So when you run the
Schema Replication schedule for an identity store, it replicates the schema for all identity stores
in Directory Manager. And if you terminate it, the process is terminated for all identity stores.
Moreover, the schedule runs every time it is triggered from any of the identity stores, be it
manually or according to its triggers.

When the Schema Replication schedule runs for the first time, it replicates schema from scratch. In
all subsequent runs, it replicates any changes made to the schema. Of this replicated schema, you
can choose the object attributes you actually want to use in an identity store. See the
[Specify Object Attributes to Replicate](/docs/directorymanager/11.1/configuration/replication.md#specify-object-attributes-to-replicate)
topic for details.

NOTE: For Microsoft Entra ID, schema is replicated from the schema file for Graph API v 3.26.0.

The Schema Replication schedule runs in the context of the super admin account in the Directory
Manager provider. You cannot create or delete a Schema Replication schedule; only update the
existing one.

## Update the Schema Replication Schedule

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to Schema Replication. Then click the
ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the
schedule as read-only.

Step 6 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

**CAUTION:** In case of multiple Scheduler services, you must bind the same service with the Schema
Replication schedules in all the identity stores.

Step 7 – The Triggers area displays the default triggering frequency for the schedule.

- To change it, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 8 – Click **Update Schedule**.

Step 9 – On the Schedules page, click **Save**.  
 For general schedule info, see the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# Smart Group Update Schedule

You can create a Smart Group Update schedule and bind it to Smart Groups and Dynasties in an
identity store. When the schedule runs, it updates the following:

- Group membership - Each Smart Group and Dynasty has a user-defined query specified for it. When a
  Smart Group Update schedule runs, it updates the membership of target groups with records fetched
  by the query.
- Certain attribute values for nested Smart Groups and Dynasty children.

A Smart Group or Dynasty that is not linked with a Smart Group Update schedule will not be auto
updated.

You can configure notifications for a schedule that are sent to designated recipients in response to
an event, such as when the schedule successfully updates all target groups or fails to update any
target group.

## Create a Smart Group Update Schedule

Follow the steps to create a Smart Group Update Scedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Smart Group Update Job**. The
Create Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_SmartGroup\_\_; the
schedule is displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in
notifications generated for the schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 9 – You can specify containers and groups as targets for the schedule. For a container, the
schedule processes all groups in it and its sub-containers. In the case of groups, the schedule
processes the added groups only (i.e., it does not process nested groups).

1. To specific containers as target, follow step 9 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
   topic. The schedule will process all Smart Groups and Dynasties in the containers and their
   sub-containers listed in the Target(s) area.
2. To add Smart Groups and Dynasties as targets, click **Add Group**. On the Add Object(s) dialog
   box, specify a container to search for the desired groups; then perform a search to locate and
   select the groups.

   - Click the down arrow in the **Search Container** box and select a container to limit the
     search scope to it.
   - Select the **Include Sub-Containers** check box to include the sub-containers within the
     selected container to search for the group(s).
   - Enter a search string in the search box; group names starting with the string are displayed as
     you type. Click **Add** for a group to select it.  
     You can also perform an advanced search to locate a group. Click **Advanced** in the search
     box and use the search fields to enter a search string. On clicking **Search**, groups
     matching the string are displayed. Select the group you want to add as target.
   - After selecting one or more groups, click **Add** the groups are displayed in the Target(s)
     area.

3. To remove a container or group in the Target(s) area, click **Remove** for it.  
   To remove all target objects, click **Remove All**.

Step 10 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to add triggers.

Step 11 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic for additional information.

Step 12 – To enable notifications for the schedule, click **Notifications**. On the Notifications
dialog box, specify an event for triggering notifications for the schedule and add recipients.

1. Use the toggle button at the top to enable notifications for the schedule.
2. In the Send Notification to the following email IDs box, enter the email addresses of
   notification recipients, using a semicolon to separate multiple addresses. These recipients will
   get a report on the event you select for **Send Notification**.

   NOTE: If the email ID of a target group’s additional owner is specified in this box, the
   additional owner will receive notifications even if the Do not Notify check box is selected for
   it in the respective group’s properties.

3. Select the **Send Report to group owner(s)** check box to send a report to each unique group
   owner of the groups processed by the schedule. A Dynasty owner receives a notification for its
   groups and direct child Dynasties.  
   Group owners include the primary owner, additional owner(s), and Exchange additional owner(s).

   NOTE: An additional owner of a target group will not receive notifications when the Do not
   Notify check box is selected for it in the respective group’s properties, even with the Send
   Report to group owner(s) check box selected.

4. In the Send Notification area, select one of the following options:

   - Always – Always send notifications, whether the schedule succeeds or fails to update the
     groups.
   - Only when job succeeds – Send notifications when the schedule successfully updates all the
     groups. Even when one group fails to be updated, notifications are not sent.
   - Only when job fails – Send notifications when the schedule fails to update groups, even when
     all except one group is not updated.
   - Only when membership changes – Send notifications when any changes are made to group
     membership as a result of the schedule run.

5. Click **Save**.

   NOTE: When a Smart Group Update schedule is bound to a single OU that contains all expired Smart
   Groups/Dynasties, notifications will not be sent, even if the _Always_ option is selected.
   Expired Smart Groups and Dynasties are not evaluated for the update process. However, even if
   one group in the OU is not expired, notifications will be sent for all objects with _failed_
   status for expired objects.

Step 13 – On the Create Schedule page, click **Create Schedule**.

Step 14 – On the Schedules page, click **Save**.  
The schedule is displayed under Smart Group Update. See the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for more info for additional information.

# Scheduler Service

In Directory Manager, schedules perform different tasks in an identity store. They run at a
specified frequency to auto execute their respective functions. The Scheduler service is responsible
for triggering these schedules at their respective frequency.

## View Scheduler Service Details

Follow the steps to view details of Scheduler service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the **Scheduler Service** tab.

The tab displays the default Scheduler service(s) hosted in native IIS. The number of services
displayed on the tab depend on the number of nodes in all Elasticsearch clusters in your
environment, as each cluster has its own Scheduler services. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/administration/services/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topic for additional information.  
For details displayed on a service card, see the table in the
[View Data Service Details](/docs/directorymanager/11.1/administration/services/data-service.md#view-data-service-details) topic.

You cannot create a new Scheduler service or delete the existing one.

## Manage Scheduler Service Settings

You can manage the following settings for a Scheduler service:

- [Change a Service’s Display Name](/docs/directorymanager/11.1/administration/services/data-service.md#change-a-services-display-name)
- [Start or Stop a Service](/docs/directorymanager/11.1/administration/services/data-service.md#start-or-stop-a-service)
- [View the Deployment Settings for a Service](/docs/directorymanager/11.1/administration/services/data-service.md#view-the-deployment-settings-for-a-service)
- [Specify Log Settings for a Service](/docs/directorymanager/11.1/administration/services/data-service.md#specify-log-settings-for-a-service)
