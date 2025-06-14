# Manage Schedules

GroupID enables you to run, modify, disable, and delete the schedules defined for an identity store.

What do you want to do?

- [View the Schedules in an Identity Store ](#view-the-schedules-in-an-identity-store)
- [Enable/Disable a Schedule](#enabledisable-a-schedule)
- [Update Triggers for a Schedule](#update-triggers-for-a-schedule)
- [Update Targets for a Schedule](#update-targets-for-a-schedule)
- [Update Notification Settings for a Schedule](#update-notification-settings-for-a-schedule)
- [Run a Schedule Instantly](#run-a-schedule-instantly)
- [Terminate a Running Schedule](#terminate-a-running-schedule)
- [Delete a Schedule](#delete-a-schedule)

## View the Schedules in an Identity Store

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign next to a job name to view the schedules defined for it.  
   The following is displayed for a schedule:

   | Label | Description |
   | --- | --- |
   | Enable | Shows whether a schedule is enabled or disabled.  Use the toggle button next to a schedule to disable an enabled schedule and vice versa.  GroupID does not execute a disabled schedule. |
   | Job Name | The name of a schedule. |
   | Target(s) | The group(s) and container(s) that a schedule processes. |
   | Last Run | The date and time a schedule last ran. |
   | Next Run | The next date and time a schedule will run. |
   | Actions | Click the ellipsis button for a schedule in the __Actions__ column and select an option:  - __Edit:__ to update the schedule's settings, such as targets, triggers, and notifications. - __Delete:__ to delete a schedule. - __Run:__ to manually run a schedule instantly. - __Terminate:__ to manually terminate a running schedule instantly. This option is available for schedules that are currently running. |

### Search a Schedule

GroupID enables you to search for a schedule by different attributes, such as job name, job target, last run time, the kind of notifications set for a job and the user name used for authentication in a job.

__To apply a filter:__

1. On the __Schedules__ page, expand the __Schedule Filters__ area by clicking the plus sign.
2. In the _Select a Filter_ box, select an attribute to filter schedules.
3. In the _Select an Operator_ drop-down list, select an operator to apply to the selected attribute. This drop-down displays the operators on the basis of the selected attribute. Available operators are:

   (missing or bad snippet)
4. In the _Select a Value_ box, specify a value for the attribute. The selected attribute and operator determine the kind of value that can be entered in this box. For some operators, such as _Present_ and _Not Present_,
   this field is not available. These operators check if a value for the attribute is present or not.

   __To add more filters__ - On adding a filter, the next row is displayed, so you can add another filter.  
   __To remove a filter row__ - To remove a filter row, click __Remove__ for it.  
   __To remove the filter__ - To remove all the filter rows, click __Clear__.
5. To apply the filter, click __Apply__. With multiple filters, schedules that satisfy all the filters are displayed.

## Enable/Disable a Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign for a job to view the schedules defined for it.
5. Use the __Enable__ toggle button for a schedule to enable or disable it.  
   A disabled schedule is not executed in the identity store.
6. Click __Save__.

## Update Triggers for a Schedule

A trigger is a criterion that, when met, starts the execution of a schedule.

__To update triggers for a schedule:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select __Edit__.
6. On the __Edit Schedule__ page, the __Triggers__ area displays the trigger(s) set for the schedule.

   - To update a trigger, click __Edit__ for it.
   - To add a new trigger, click __Add Trigger__.
   - To remove a trigger, click __Remove__ for it.

   Follow step 11 in
   the [Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md) topic to manage triggers.
7. Click __Update Schedule__.
8. Click __Save__ on the __Schedules__ page.

## Update Targets for a Schedule

Targets in a schedule are the objects processed by that schedule.

__To update the targets:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select __Edit__.
6. On the __Edit Schedule__ page, the __Target(s)__ area displays the target objects for the schedule.  
   Target types differ for different schedule types. For example, you can set containers as targets for a Group Lifecycle schedule; and jobs and job collections for a Synchronize schedule. Other schedules, such as a User Lifecycle schedule,
   may not require a target, as they execute certain functions for an identity store.

   - To add a target object to a schedule, refer to the instructions for the respective schedule.
   - To remove a target object, click __Remove__ for it.
   - To remove all target objects, click __Remove All__.
7. Click __Update Schedule__.
8. Click __Save__ on the __Schedules__ page.

## Update Notification Settings for a Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select __Edit__.
6. On the __Edit Schedule__ page, click the __Notifications__ button to update notification settings for the schedule.  
   Notification settings differ for different schedule types. For example, a Smart Group Update schedule has a different set of notification options from a Group Lifecycle schedule. Other schedules, such as the GroupID Entitlement and Workflow
   Acceleration schedules, do not have notification settings.  
   To manage the notification settings for a schedule, refer to the instructions for the respective schedule.
7. Click __Update Schedule__.
8. Click __Save__ on the __Schedules__ page.

## Run a Schedule Instantly

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select __Run__ to execute it instantly.

## Terminate a Running Schedule

You can terminate a schedule that is currently running in an identity store. On termination, objects that have already been processed by the schedule will not be reverted while the remaining stay unprocessed.

__To terminate a running schedule:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a currently running schedule and select __Terminate__ to stop it instantly.

## Delete a Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign for a job to view the schedules defined for it.
5. Click the ellipsis button for a schedule and select __Delete__.  
   The __Delete__ option is not available for system-defined schedules.
6. On the __Delete Schedule__ dialog box, click __Delete__.
7. Click __Save__ on the __Schedules__ page.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
