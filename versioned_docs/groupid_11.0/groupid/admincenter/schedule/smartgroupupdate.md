# Smart Group Update Schedule

You can create a Smart Group Update schedule and bind it to Smart Groups and Dynasties in an identity store. When the schedule runs, it updates the following:

- Group membership - Each Smart Group and Dynasty has a user-defined query specified for it. When a Smart Group Update schedule runs, it updates the membership of target groups with records fetched by the query.
- Certain attribute values for nested Smart Groups and Dynasty children.

A Smart Group or Dynasty that is not linked with a Smart Group Update schedule will not be auto updated.

You can configure notifications for a schedule that are sent to designated recipients in response to an event, such as when the schedule successfully updates all target groups or fails to update any target group.

What do you want to do?

- [Create a Smart Group Update Schedule](#Create-a-Smart-Group-Update-Schedule)

## Create a Smart Group Update Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click __Add Schedule__ and select __Smart Group Update Job__. The __Create Schedule__ page is displayed.
5. In the __Schedule Name__ box, enter a name for the schedule.
6. The __Name Preview__ box displays the schedule name prefixed with _SmartGroup\__; the schedule is displayed with this name in email notifications.
7. Select a GroupID portal URL in the __Portal URL__ drop-down list to include it in notifications generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.
9. You can specify containers and groups as targets for the schedule. or a container, the schedule processes all groups in it and its sub-containers. In the case of groups, the schedule processes the added groups only (i.e., it does not process nested
   groups).

   1. To specific containers as target, follow step 9 in
      the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic. The schedule will process all Smart Groups and Dynasties in the containers and their sub-containers listed in the __Target(s)__ area.
   2. To add Smart Groups and Dynasties as targets, click __Add Group__. On the __Add Object(s)__ dialog box, specify a container to search for the desired groups; then perform a search to locate and
      select the groups.

      - Click the down arrow in the __Search Container__ box and select a container to limit the search scope to it.
      - Select the __Include Sub-Containers__ check box to include the sub-containers within the selected container to search for the group(s).
      - Enter a search string in the search box; group names starting with the string are displayed as you type. Click __Add__ for a group to select it.  
        You can also perform an advanced search to locate
        a group. Click __Advanced__ in the search box and use the search fields to enter a search string. On clicking __Search__, groups matching the string are displayed.
        Select the group you want to add as target.
      - After selecting one or more groups, click __Add__ the groups are displayed in the __Target(s)__ area.
   3. To remove a container or group in the __Target(s)__ area, click __Remove__ for it.  
      To remove all target objects, click __Remove All__.
10. Click __Add Triggers__ in the __Triggers__ area to specify a triggering criterion for the schedule, that, when met, starts the execution of the schedule. Follow step 11 in the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to add triggers.
11. Click __Add Authentication__ in the __Authentication__ area to specify an account for running the schedule in the identity store. Follow step 12 in
    the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic for details.
12. To enable notifications for the schedule, click __Notifications__. On the __Notifications__ dialog box, specify an event for triggering notifications
    for the schedule and add recipients.

    1. Use the toggle button at the top to enable notifications for the schedule.
    2. In the __Send Notification to the following email IDs__ box, enter the email addresses of notification recipients, using a semicolon to separate multiple addresses. These recipients will get a report on the
       event you select for __Send Notification__.

       NOTE: If the email ID of a target group’s additional owner is specified in this box, the additional owner will receive notifications even if the __Do not Notify__ check box is selected for it in the respective
       group’s properties.
    3. Select the __Send Report to group owner(s)__ check box to send a report to each unique group owner of the groups processed by the schedule. A Dynasty owner receives a notification for its groups and
       direct child Dynasties.  
       Group owners include the primary owner, additional owner(s), and Exchange additional owner(s).

       NOTE: An additional owner of a target group will not receive notifications when the __Do not Notify__ check box is selected for it in the respective group’s properties, even with the __Send Report to group owner(s)__ check box selected.
    4. In the __Send Notification__ area, select one of the following options:

       - __Always -__ Always send notifications, whether the schedule succeeds or fails to update the groups.
       - __Only when job succeeds -__ Send notifications when the schedule successfully updates all the groups. Even when one group fails to be updated, notifications are not sent.
       - __Only when job fails -__ Send notifications when the schedule fails to update groups, even when all except one group is not updated.
       - __Only when membership changes -__ Send notifications when any changes are made to group membership as a result of the schedule run.
    5. Click __Save__.

       NOTE: When a Smart Group Update schedule is bound to a single OU that contains all expired Smart Groups/Dynasties, notifications will not be sent, even if the _Always_ option is selected. Expired Smart Groups and Dynasties are not evaluated for the
       update process. However, even if one group in the OU is not expired, notifications will be sent for all objects with _failed_ status for expired objects.
13. On the __Create Schedule__ page, click __Create Schedule__.
14. On the Schedules page, click __Save__.  
    The schedule is displayed under __Smart Group Update__. See the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store) topic for more info.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
