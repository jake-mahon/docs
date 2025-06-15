# Group Life Cycle Schedule

GroupID enables you to define group lifecycle settings for an identity store (see the [Manage Group Lifecycle Settings](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md) topic). Based on these settings, the Group Lifecycle schedule expires and logically deletes
groups in the identity store on a scheduled basis, keeping your directory clean and preventing group glut.

While creating a Group Lifecycle schedule, you have to specify a job triggering criterion, the containers the job will process, and notification options.

The Group Lifecycle schedule performs the following main functions:

- Expires and logically delete groups according to their respective expiry policies (see the [ Group Expiry and Deletion](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/groupexpirydeletion.md) topic).
- Sends email notifications to relevant personnel before expiring a group. Also initiates notifications for group attestation.
- Extends or reduces the life of mail-enabled distribution groups based on their usage.
- Initiates group attestation for expiring groups.

What do you want to do?

- [Create a Group Life Cycle Schedule](#create-a-group-life-cycle-schedule)

## Create a Group Life Cycle Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click __Add Schedule__ and select __Group Life Cycle Job__.  
   The __Create Schedule__ page is displayed.
5. In the __Schedule Name__ box, enter a name for the schedule.
6. The __Name Preview__ box displays the schedule name prefixed with _Glm__; the schedule is displayed with this name in email notifications.
7. Select a GroupID portal URL in the __Portal URL__ drop-down list to include it in notifications generated for this schedule. Users are redirected to this portal to perform any necessary action.
8. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.
9. You can specify containers as targets for the schedule. To do so, follow step 9 in
   the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#create-a-group-usage-service-schedule) topic.
   The schedule will process all groups in the containers and their sub-containers listed in the __Target(s)__ area in keeping with the Group Lifecycle settings for the identity store.

   NOTE: In Group Lifecycle settings, the administrator can specify container(s) for exclusively applying or not applying the Group Life cycle policy. See the [Apply Policy on Specific Containers](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md#apply-policy-on-specific-containers) topic. With containers specified in the __Target(s)__ area, there may be a conflict or overlapping of containers, in which case, the Group Lifecycle settings take precedence.
10. Click __Add Triggers__ in the __Triggers__ area to specify a triggering criterion for the schedule, that, when met, starts the execution of the schedule. Follow step 11 in
    the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#create-a-group-usage-service-schedule) topic to manage triggers.
11. Click __Add Authentication__ in the __Authentication__ area to specify an account for running the schedule in the identity store. Follow step 12 in
    the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#create-a-group-usage-service-schedule) topic for details.
12. To set notifications for the schedule, click __Notifications__.

    1. On the __Notifications__ dialog box, select the __Send group life extension notification__ check box to send email notifications to a group’s primary and additional owners when the job extends
       the life of a group, based on group usage settings in the Group Lifecycle policy. For group usage settings, see the [Enable Group Usage Lifecycle](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md#enable-group-usage-lifecycle) topic.
    2. Click __Save__.
13. On the __Create Schedule__ page, click __Create Schedule__.
14. On the __Schedules__ page, click __Save__.   
    The schedule is displayed under __Group Life Cycle__. See the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#view-the-schedules-in-an-identity-store) topic for more info.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
