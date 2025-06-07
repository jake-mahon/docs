# Group Life Cycle Schedule

Directory Manager enables you to define group lifecycle settings for an identity store. See the [Manage Group Lifecycle Settings](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md) topic for additional information. Based on these settings, the Group Lifecycle schedule expires and logically deletes
groups in the identity store on a scheduled basis, keeping your directory clean and preventing group glut.

While creating a Group Lifecycle schedule, you have to specify a job triggering criterion, the containers the job will process, and notification options.

The Group Lifecycle schedule performs the following main functions:

- Expires and logically delete groups according to their respective expiry policies. See the [ Group Expiry and Deletion](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/groupexpirydeletion.md) topic for additional information.
- Sends email notifications to relevant personnel before expiring a group. Also initiates notifications for group attestation.
- Extends or reduces the life of mail-enabled distribution groups based on their usage.
- Initiates group attestation for expiring groups.

## Create a Group Life Cycle Schedule

Step 1 – In Admin Center, click __Identity Stores__ in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select __Edit__.

Step 3 – Click __Schedules__ under Settings in the left pane.

Step 4 – On the Schedules page, click __Add Schedule__ and select __Group Life Cycle Job__.  
The Create Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with _Glm\__; the schedule is displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in notifications generated for this schedule. Users are redirected to this portal to perform any necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler service. See the [Scheduler Service](/docs/product_docs/groupid/groupid/admincenter/service/schedulerservice.md) topic for additional information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance will be used.

Step 9 – You can specify containers as targets for the schedule. To do so, follow step 9 in
the [Create a Group Usage Service Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic.
The schedule will process all groups in the containers and their sub-containers listed in the Target(s) area in keeping with the Group Lifecycle settings for the identity store.

NOTE: In Group Lifecycle settings, the administrator can specify container(s) for exclusively applying or not applying the Group Life cycle policy. See the [Apply Policy on Specific Containers](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md#Apply-Policy-on-Specific-Containers) topic. With containers specified in the Target(s) area, there may be a conflict or overlapping of containers, in which case, the Group Lifecycle settings take precedence.

Step 10 – Click __Add Triggers__ in the Triggers area to specify a triggering criterion for the schedule, that, when met, starts the execution of the schedule. Follow step 11 in
the [Create a Group Usage Service Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to manage triggers.

Step 11 – Click __Add Authentication__ in the Authentication area to specify an account for running the schedule in the identity store. Follow step 12 in
the [Create a Group Usage Service Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic for additional information.

Step 12 – To set notifications for the schedule, click __Notifications__.

1. On the Notifications dialog box, select the __Send group life extension notification__ check box to send email notifications to a group’s primary and additional owners when the job extends
   the life of a group, based on group usage settings in the Group Lifecycle policy. For group usage settings, see the [Enable Group Usage Lifecycle](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md#Enable-Group-Usage-Lifecycle) topic for additional information.
2. Click __Save__.

Step 13 – On the Create Schedule page, click __Create Schedule__.

Step 14 – On the Schedules page, click __Save__.   
The schedule is displayed under Group Life Cycle. See the [View the Schedules in an Identity Store ](/docs/product_docs/groupid/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store) topic for additional information.
