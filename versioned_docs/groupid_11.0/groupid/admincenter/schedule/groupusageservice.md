# Group Usage Service Schedule

A Group Usage Service schedule monitors expansion events and timestamps affected groups of the Microsoft Exchange Server(s) for an identity store.

An expansion event occurs when an Exchange Server expands a distribution list for sending messages. The event is recorded in the Exchange Server's message tracking log, which the Group Usage Service schedule reads, parsing for the timestamp that indicates
when the distribution list was last used.

The timestamp is then used by the [Group Life Cycle Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/grouplifecycle.md) to extend or reduce the life of mail-enabled distribution groups based on their usage. See the [Enable Group Usage Lifecycle](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md#enable-group-usage-lifecycle) topic.

While creating a Group Usage Service schedule, you have to specify a job triggering criterion, the containers the job will process, and the messaging servers for reading expansion logs.

What do you want to do?

- [Create a Group Usage Service Schedule](#create-a-group-usage-service-schedule)

## Create a Group Usage Service Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under Settings in the left pane.
4. On the Schedules page, click __Add Schedule__ and select __Group Usage Service Job__.  
   The __Create Schedule__ page is displayed.
5. In the __Schedule Name__ box, enter a name for the schedule.
6. The __Name Preview__ box displays the schedule name prefixed with _GUS__; the schedule is displayed with this name in email notifications.
7. Select a GroupID portal URL in the __Portal URL__ drop-down list to include it in notifications generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.
9. You can specify containers as targets for the schedule. The schedule will process all groups in those containers and sub-containers.

   - Select the __Include all containers__ check box to run the schedule on all the containers in the identity store.  
     Or
   - Click __Add Container__ to add one or more containers as targets. The __Add Container(s)__ dialog box shows the domain name and the OUs in the identity store. Select the
     check boxes for the required containers and click __Add__; the selected containers are displayed in the __Target(s)__ area. To exclude a sub-container, clear the check
     box for it on the __Add Container(s)__ dialog box.
   - To remove a container in the __Target(s)__ area, click __Remove__ for it.  
     To remove all target objects, click __Remove All__.
10. You can also specify one or more messaging servers. The job reads expansion logs from these servers.

    1. Click __Add Server__ in the __Messaging Server__ area. The __Add Messaging Servers__ dialog box displays the messaging servers in the identity store.
    2. Select the check boxes for the messaging servers that the Group Usage Service schedule should process.

       Or

       Select the Server Name check box if you want this job to read the expansion logs of all messaging servers in the identity store.
    3. Click __Add__. The messaging server(s) are displayed in the __Messaging Server__ area.
11. Click __Add Triggers__ in the __Triggers__ area to specify a triggering criterion for the schedule, that, when met, starts the execution of the schedule.

    1. In the __Begin the Task__ drop-down list on the __New Trigger__ dialog box, select a trigger to start the schedule.

       - __On a schedule:__ To start a schedule at a specific time of day or starting it multiple times on a daily, weekly, or monthly schedule.
       - __At startup:__ To start the schedule every time the GroupIDSchedulerService starts. This is a GroupID service created in native IIS.
    2. On selecting an option, the dialog box displays relevant settings for the trigger.  
       The __Triggers__ dialog box is the same as available in Windows Task Scheduler. Visit the [Triggers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc748841%28v%3dws.10%29) page for
       help.
    3. After specifying the settings, click __Add__. The trigger is displayed in the __Triggers__ area.

    A schedule can have one or more triggers, allowing the schedule to be started in many ways. With multiple triggers, the schedule will start when any of the triggers occur.  
    __To enable or disable a trigger__ - Click __Edit__ for a trigger in the __Triggers__ area and use the toggle button at the
    top of the __Update Trigger__ dialog box to enable or disable the trigger.  
    __To remove a trigger__ - Click __Remove__ for a trigger to remove it.
12. Click __Add Authentication__ in the __Authentication__ area to specify an account for running the schedule in the identity store.  
    The __Authentication__ dialog box displays your accounts in the respective identity store that you have used for signing in. Select an account to authenticate with it or click __Login with a different user__ to provide the credentials of another account to run the schedule in the identity store.

    NOTE: Make sure this account falls under a high priority security role that has elevated permissions in the identity store (for example, Administrator).

    NOTE: If you are creating this schedule in a Microsoft Entra ID identity store, you can only specify the logged-in user's account. See the [Schedules for Microsoft Entra ID Identity Store](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md#schedules-for-microsoft-entra-id-identity-store) section of the [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md) topic for additional information.
13. On the __Create Schedule__ page, click __Create Schedule__.
14. On the __Schedules__ page, click __Save__.  
     The schedule is displayed under __Group Usage Service__. See the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#view-the-schedules-in-an-identity-store) topic for more info.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
- [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md)
