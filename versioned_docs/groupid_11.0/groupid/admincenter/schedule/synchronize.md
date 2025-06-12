# Synchronize Schedule

The GroupID scheduling function enables you to set any Synchronize job or job collection to run automatically. Create a Synchronize schedule and add Synchronize jobs and job collections as targets. When the schedule runs, the target jobs and job collections
are executed.

What do you want to do?

- [Create a Synchronize Schedule](#Create-a-Synchronize-Schedule)

## Create a Synchronize Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click __Add Schedule__ and select __Synchronize Job__. The __Create Schedule__ page
   is displayed.
5. In the __Schedule Name__ box, enter a name for the schedule.
6. The __Name Preview__ displays the schedule name prefixed with _SynchronizeJobPortal\__; the schedule is displayed with this name in email notifications.
7. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.
8. Add a Synchronize job or a job collection or both to this schedule.

   - Click __Add Jobs__ to add a Synchronize job to this schedule. The __Select Jobs to Add__ dialog box displays Synchronize jobs. Select one or more jobs and click __Add__.
   - Click __Add Job Collection__ to add a Synchronize job collection to this schedule. The __Select Job Collections to Add__ dialog box displays job collections from Synchronize. Select one or more
     job collections from the list and click __Add__.

   The selected job(s) and job collection(s) are listed in the __Target(s)__ area. They will be executed when the schedule runs.  
   To remove a job or job collection in the __Target(s)__area, click __Remove__ for it.  
   To remove all target objects, click __Remove All__.
9. Click __Add Triggers__ in the __Triggers__ area to specify a triggering criterion for the schedule, that, when met, starts the execution of the schedule. Follow step 11 in the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to add triggers.
10. Click __Add Authentication__ in the __Authentication__ area to specify an account for running the schedule in the identity store. Follow step 12 in
    the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic for details.
11. On the __Create Schedule__ page, click __Create Schedule__.
12. On the __Schedules__ page, click __Save__.  
    The schedule is displayed under __Synchronize__. See the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store) topic for more info.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
