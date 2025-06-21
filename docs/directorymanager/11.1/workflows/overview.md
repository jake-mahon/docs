# Manage Advanced Workflow Settings

You can specify advanced settings for workflow, such as set a default approver for workflow requests
and define approver acceleration settings.

NOTE: Functions discussed in this topic are licensed under different add-ons. See the
[ Licensing ](/docs/directorymanager/11.1/administration/licensing.md) topic.

## Specify a Default Approver

You can designate a recipient as the default approver for workflow requests. Requests are routed to
this recipient based on the following rules:

- When approver acceleration is not enabled, the applicable rules are discussed in the
  [Workflow Approval Scenarios](/docs/directorymanager/11.1/workflows/overview.md#workflow-approval-scenarios) topic.
- When approver acceleration is enabled:

  - A request is sent to the default approver when the last approver in the acceleration chain
    does not approve or deny it within the specific number of days.
  - A request is routed to the default approver when the hierarchy breaks at any point in the
    acceleration chain. For example, if the maximum acceleration level is set to 3 but there is no
    recipient to accelerate the request after second level acceleration, the request goes to the
    default approver.

The default approver also receives group expiry and deletion notifications for groups without
owners.

**To specify a default approver:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Workflows** page, click the **Advanced Workflow Settings** tab.
5. On th **Advanced Workflow Settings** tab, use the **Default Approver** box to specify a recipient
   as the default approver. To search for a recipient:

   - Enter a search string in the box. Group and user names starting with the string are displayed
     as you type. Select a user or group to set as the default approver.

     Or

   - Click **Advanced** to search an object by different parameters, such as name, department,
     company, and email.  
     In the _advanced search_ box, enter a search string and click **Search**. User and group
     objects matching the string are displayed. Select the required object.

   To remove the default approver, click **Delete** for it.

6. Click **Save**.

## Apply Approver Acceleration

The workflow approver acceleration feature ensures that no workflow request remains undecided. To
apply setting related to approver acceleration, see the
[Workflow Approver Acceleration](/docs/directorymanager/11.1/workflows/acceleration.md) topic.

## Delete Workflow Requests

You can delete the workflow requests generated for an identity store based on certain settings. For
example, you can delete the ‘denied’ requests that are old by 30 days or more.

**To delete workflow requests:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Workflows** page, click the **Advanced Workflow Settings** tab. Go to the **Workflow
   Requests** section.
5. In the **Delete requests that are x or more days old** box, specify a number, say 30. Workflow
   requests that are 30 days old and older will be auto deleted.
6. Select the type of requests you want to delete.

   - **Pending:** to delete requests that are pending, including your own.
   - **Approved:** to delete requests that have been approved.
   - **Denied:** to delete requests that have been denied.

7. Click **Delete**. Directory Manager deletes requests of the selected type that are old or older
   than the specified number of days.
8. Click **Save**.

## Integrate with Microsoft Power Automate

You can also link your Power Automate flows to Directory Manager workflows. For details, see the
[Integrate with Power Automate](/docs/directorymanager/11.1/workflows/integration.md) topic.

# Workflows

A workflow is a set of rules that Directory Manager uses as a built-in auditing system to ensure
that changes made to an object are approved by an authorized user before they are committed to the
directory.

Workflows are defined for an identity store and apply to the different operations, such as group
creation and expiry.

A workflow triggers when a certain operation, performed by a user, meets the criteria defined for
that workflow. Designated users can approve or deny workflow requests using the Directory Manager
portal.

NOTE: Workflows require an SMTP server to be configured for the identity store. See the
[Configure an SMTP Server](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## System Workflows

Directory Manager provides the following predefined workflows (also called system workflows) that
trigger when their associated events occur:

|     | Workflow Name                              | Description                                                                                                                                                        | Default Approver                                           |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 1.  | Workflow to Reset Password                 | When a user resets his or her password. It does not apply when helpdesk users reset the passwords of other users.                                                  | Primary and additional managers of the user                |
| 2.  | Workflow to Change Group Expiration Policy | When a user changes the expiry policy of a group By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver. | None                                                       |
| 3.  | Workflow to Nest a Group                   | When a user adds a group (Group A) to the membership of another group (Group B)                                                                                    | Primary and additional owners of the added group (Group A) |
| 4.  | Workflow to Join a Group                   | When a user joins a semi-private group                                                                                                                             | Primary and additional owners of the group                 |
| 5.  | Workflow to Leave a Group                  | When a user leaves a semi-private group                                                                                                                            | Primary and additional owners of the group                 |
| 6.  | Workflow to Transfer a User                | When a user transfers his or her direct report                                                                                                                     | The new manager                                            |
| 7.  | Workflow to Terminate a User               | When a manager terminates a direct report By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver.        | None                                                       |
| 8.  | Workflow to Change Manager                 | When a user changes his or her primary or additional manager                                                                                                       | Existing primary and additional managers of the user       |

You can also define new workflows for an identity store.

NOTE: You cannot delete a system workflow, but you can disable it. You can also modify it to a
limited extent.

## Synchronize Jobs and Workflows

Workflows apply to Synchronize jobs as follows:

- When you manually run a Synchronize job, Directory Manager evaluates whether the task it will
  perform falls under the scope of a workflow. If yes, then a workflow request is triggered. The job
  will run when the request is approved.  
  Workflows do not apply to Synchronize jobs that auto run through a Synchronize schedule.  
  **Example:** You have a Synchronize job that changes the job title of users in bulk. You also have
  a ‘Change Title’ workflow that triggers when the job title of a user is changed. In this case, the
  Synchronize job falls under the scope of the ‘Change Title’ workflow. When the job is run
  manually, the workflow triggers and an approval request goes to the recipient set as the workflow
  approver. If the approver approves the request, the job will run. If not, then it will not run.
- When you manually run a job collection in which some jobs fall under the scope of workflows while
  others do not, workflow requests will be triggered for the respective jobs while the other jobs
  will run as usual.
- When a workflow request against a Synchronize job is pending for approval, another request will be
  triggered when the same user or any other user runs the same job again.
- When a Synchronize job runs to set the manager for a user who does not already have a manager, the
  following happens:

  - The _Workflow to Change Manager_ will trigger if a default approver is set in advanced
    workflow settings.
  - If the default approver is not set, the workflow will not trigger and the user's manager will
    be set without requiring any approval.

- When a Synchronize job updates multiple attributes for an object type and different workflows have
  been defined for the various attributes that it updates, then a separate request is triggered for
  each of the applicable workflows and sent to the respective approvers. Even when one of these
  requests is approved, the job runs, irrespective of whether another approver denies it.  
  **Example:** A Synchronize job falls under the scope of three workflows. Hence, three requests are
  generated and sent to three different recipients for approval. If an approver approves it, another
  denies it, and the third does not take any action, the job will run and update all target
  attributes.
- Filters in workflows do not apply to Synchronize jobs.

## How are Workflow Requests Handled

When a workflow is triggered, an approval request is generated and sent to the designated
approver(s), informing them of the actions that a user wants to perform in an identity store. The
approver can view these requests in the Directory Manager portal.

- If the approver is satisfied with the requested actions, he or she can approve the request and the
  changes are committed to the directory.
- If the approver deems the actions inappropriate, he or she can deny the request and provide a
  reason for denial.

In any case, the requester and other approvers (in case of multiple approvers) are notified of the
outcome.

## Workflow Approval Scenarios

The following scenarios are valid when workflow approver acceleration settings are not applied.

- When the object specified as an approver for a workflow is not available (such as if it is
  disabled or not specified), workflow requests are sent to the default approver. If the default
  approver is disabled or not specified either, the requests are auto approved. See the
  [Specify a Default Approver](/docs/directorymanager/11.1/workflows/overview.md#specify-a-default-approver) topic.
- If the requester is also the approver for that workflow, the request is auto approved.

## Integration with Microsoft Power Automate

To automate your everyday tasks, you can also link your Directory Manager workflows to Power
Automate flows.
