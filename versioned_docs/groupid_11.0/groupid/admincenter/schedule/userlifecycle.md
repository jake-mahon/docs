# User Life Cycle Schedule

The User Life Cycle schedule monitors the profile validation process in GroupID. It performs the following main functions in keeping with the user profile validation settings
for an identity store:

- Monitors the profile validation dates of users
- Generates reminder emails
- Disables users who do not validate their profiles within the given period

What do you want to do?

- [Create a User Life Cycle Schedule](#Create-a-User-Life-Cycle-Schedule)

## Create a User Life Cycle Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click __Add Schedule__ and select __User Life Cycle Job__. The __Create Schedule__ page is displayed.
5. In the __Schedule Name__ box, enter a name for the schedule.
6. The __Name Preview__ box displays the schedule name prefixed with _UserLifeCycle\__; the schedule is displayed with this name in email notifications.
7. Select a GroupID portal URL in the __Portal URL__ drop-down list to include it in notifications generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.
9. Click __Add Triggers__ in the __Triggers__ area to specify a triggering criterion for the schedule, that, when met, starts the execution of the schedule. Follow step 11 in the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to add triggers.
10. Click __Add Authentication__ in the __Authentication__ area to specify an account for running the schedule in the identity store. Follow step 12 in
    the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic for details.
11. On the __Create Schedule__ page, click __Create Schedule__.
12. On the __Schedules__ page, click __Save__.  
    The schedule is displayed under __User Life Cycle__.
    See the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store)topic for more info.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
- [Configure User Profile Validation](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/profilevalidation.md)
