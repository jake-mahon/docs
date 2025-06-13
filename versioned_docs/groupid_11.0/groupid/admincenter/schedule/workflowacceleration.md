# Workflow Acceleration Schedule

A Workflow Acceleration schedule facilitates the workflow approver acceleration process for workflow requests. This schedule is auto created when approver acceleration is enabled for the identity store. See the [Workflow Approver Acceleration](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/approveracceleration.md) topic.

By default, the schedule runs daily to accelerate workflow requests to approvers, according to workflow acceleration settings for an identity store and some predefined rules for approver acceleration. It also generates notifications to inform approvers
about pending workflow requests.

You cannot create or delete a Workflow Acceleration schedule; only update the existing one.

What do you want to do?

- [Update the Workflow Acceleration Schedule](#Update-the-Workflow-Acceleration-Schedule)

## Update the Workflow Acceleration Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign next to __Workflow Acceleration__. Then click the ellipsis button for the schedule and select __Edit__.
5. On the __Edit Schedule__ page, the __Schedule Name__ and __Name Preview__ boxes display the name of the schedule as read-only. The schedule is displayed with the name displayed for _Name Preview_ in email notifications
6. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.
7. The __Triggers__ area displays the default triggering frequency for the schedule.

   - To change it, click __Edit__ for it.
   - To add a new trigger, click __Add Trigger__.

   Follow step 11 in
   the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to manage triggers.
8. The __Authentication__ area displays an account for running the schedule in the identity store. To change it, click __Add Authentication__. Follow step 12 in
   the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic for details.
9. Click __Update Schedule__.
10. On the __Schedules__ page, click __Save__.  
    For general schedule info, see the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store) topic.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
