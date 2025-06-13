# Manage Advanced Workflow Settings

You can specify advanced settings for workflow, such as set a default approver for workflow requests and define approver acceleration settings.

NOTE: Functions discussed in this topic are licensed under different add-ons. See the [
License GroupID](/versioned_docs/groupid_11.0/groupid/admincenter/general/licensing.md) topic.

What do you want to do?

- [Specify a Default Approver](#Specify-a-Default-Approver)
- [Apply Approver Acceleration](#Apply-Approver-Acceleration)
- [Delete Workflow Requests](#Delete-Workflow-Requests)
- [Integrate with Microsoft Power Automate](#Integrate-with-Microsoft-Power-Automate)

## Specify a Default Approver

You can designate a recipient as the default approver for workflow requests. Requests are routed to this recipient based on the following rules:

- When approver acceleration is not enabled, the applicable rules are discussed in the [Workflow Approval Scenarios](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/overview.md#Workflow-Approval-Scenarios) topic.
- When approver acceleration is enabled:

  - A request is sent to the default approver when the last approver in the acceleration chain does not approve or deny it within the specific number of days.
  - A request is routed to the default approver when the hierarchy breaks at any point in the acceleration chain. For example, if the maximum acceleration level is set to 3 but there is no recipient to accelerate the request after second level acceleration, the request goes to the default approver.

The default approver also receives group expiry and deletion notifications for groups without owners.

__To specify a default approver:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Workflows__ under __Settings__ in the left pane.
4. On the __Workflows__ page, click the __Advanced Workflow Settings__ tab.
5. On th __Advanced Workflow Settings__ tab, use the __Default Approver__ box to specify a recipient as the default approver. To search for a recipient:

   - Enter a search string in the box. Group and user names starting with the string are displayed as you type. Select a user or group to set as the default approver.

     Or
   - Click __Advanced__ to search an object by different parameters, such as name, department, company, and email.  
     In the _advanced search_ box, enter a search string and click __Search__. User and group objects matching the string are displayed. Select the required object.

   To remove the default approver, click __Delete__ for it.
6. Click __Save__.

## Apply Approver Acceleration

The workflow approver acceleration feature ensures that no workflow request remains undecided. To apply setting related to approver acceleration, see the [Workflow Approver Acceleration](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/approveracceleration.md) topic.

## Delete Workflow Requests

You can delete the workflow requests generated for an identity store based on certain settings. For example, you can delete the ‘denied’ requests that are old by 30 days or more.

__To delete workflow requests:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Workflows__ under __Settings__ in the left pane.
4. On the __Workflows__ page, click the __Advanced Workflow Settings__ tab. Go to the __Workflow Requests__ section.
5. In the __Delete requests that are x or more days old__ box, specify a number, say 30. Workflow requests that are 30 days old and older will be auto deleted.
6. Select the type of requests you want to delete.

   - __Pending:__ to delete requests that are pending, including your own.
   - __Approved:__ to delete requests that have been approved.
   - __Denied:__ to delete requests that have been denied.
7. Click __Delete__. GroupID deletes requests of the selected type that are old or older than the specified number of days.
8. Click __Save__.

## Integrate with Microsoft Power Automate

You can also link your Power Automate flows to GroupID workflows. For details, see the [Integrate with Power Automate](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/integrate.md) topic.

__See Also__

- [Workflows](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/overview.md)
- [Implement Workflows](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/implement.md)
- [Workflow Approver Acceleration](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/approveracceleration.md)
- [Integrate with Power Automate](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/integrate.md)
