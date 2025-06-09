# Creating a Change Request

Before making any changes, it is important to understand the scope of the planned change, potential impacts and the level of change required. Documentation is also available if you are using the old [Change Request](/docs/strongpointfornetsuite/change_management/creating_change_request_old_form.md) form. Refer to [Setting Preferred Forms](/docs/strongpointfornetsuite/customizations/setting_preferred_forms.md) for information on designating your preferred Change Request form.

SuiteCloud Development Framework (SDF) users can [upload their Sandbox development file](#upload-their-Sandbox-development-file) directly into a production ITGC Change Request. The Change Request populates the scope with the existing customizations and adds new ones to proposed customizations.

If you want to see if the change would have an impact in your sandbox, you can also create a change request in your sandbox account.

## Create the Change Request

1. Open __Strongpoint__ > __Change Management Tools__ > __ITGC Change Request__  
    The status bar displays the stage of the Change Request. A new change request displays _Not Started_.
2. Enter information in the __Main__ and __Scope__ sections:

   ![change_request_new](/img/product_docs/strongpointfornetsuite/change_management/change_request_new.png)

   - __Name__: Add a name to the change request.
   - __Stage__: Select the type of change you want to make.
   - __Change Overview__: Add a summary of the desired change.
   - __Lookup Customization__ launches a window where you can search for customizations in the current account or a different account:
     - Click __Change Account__ to log into another account or sandbox and look up customizations. You can use the __Set up TBA Credentials__ procedure in [Comparing Environments](/docs/strongpointfornetsuite/change_management/comparing_environments.md) to save your credentials for each environment you use.
     - Enter a __Name__ and click __Lookup__ to find a customization by all or part of a name. For example, __a__ shows everything beginning with __A__.
     - Enter a __Script ID__ and click __Lookup__ to find a customization by all or part of a Script ID. Uses __startswith__ search operator and allows __%__ wildcard. For example, entering __%\_flo__ returns customizations with __\_flo__ in the script id.
     - Select a __Type__ and click __Lookup__ to find all customizations of the selected type.
     - Enter a __Bundle ID__ and click __Lookup__ to find a customization that belongs to the Bundle.
     - __Select User__ from the list to search all customizations __Modified By__ selected user. This uses the __Change By__ field in the change logs. The list is updated if the source account is changed. The __User Not Determined__ option is for logs without system notes, where the user cannot be identified. __User Not Determined__ can be used with the __From__ and __To__ filters to search on the log creation date instead of the actual change date.
     - Select dates in the __From__ and/or __To__ fields to search all customizations that were changed on or after the __From__ date or on or before the __To__ date. Use both fields to specify a search range. This uses the __Actual Change Date__ field in the change logs.
     - Enter a __Script File__ name and click __Lookup__ to find a customization by all or part of the script file name. For example, __26__ shows everything beginning with __26__.
     - Use multiple filters to further refine your search. For example, __Name__ starting with __a__ and __Type__ of __List__ show all __List__ customizations starting with __A__.
     Once the customizations are displayed:
     - Hover over __Details__ to see specifics of the customization.
     - Click the box(es) to select one or more customizations. Check in the __Name__ header to toggle __Selecting__ or __Deselecting All__.- Click __Add Selected Customizations__. If the Customization (based on Script ID) exists in the current account it is added to the __Customizations__. If it does not exist, it is added to the __Proposed Customizations__.
   - __Customizations__: Use this field if you are changing objects that already exist in your account. Can be used in conjunction with proposed customizations. Start typing in the entry box for a single value, click the __Select Multiple__ icon or click __Lookup Customization__ to search for customizations.
   - __Add Customizations from SDF Zip file__: SuiteCloud Development Framework (SDF) users can upload their Sandbox development file. The Change Request populates the scope with the existing customizations and adds new ones to proposed customizations.   
     Click __Choose File__ and navigate to your SDF zipped file.
   - __Do Not ReSpider Automatically__: when unchecked, an Automatic ReSpider occurs when the Change Request status is set to __Completed__.   
     The ReSpider ensures that all change logs are complete prior to changing the status. If automatic ReSpidering is turned off, there is a risk of changes being marked as non-compliant if the change logs are not complete when the user changes the status to __Completed__. The default for the __Do Not ReSpider Automically__ is set on the [Configuration and Stats Change Management](/docs/strongpointfornetsuite/installing_strongpoint/installation_settings_report.md#configuration-and-stats-change-management) tab.
   - __Proposed Customizations__: Use this field when you are adding customizations that do not yet exist in your account. You can add multiple Script IDs by separating them with commas. Can be used in conjunction with customizations that already exist.   
     New __Entry__ and __Transaction__ forms can be pre-approved by adding the Script ID of the form. The Script ID must match the Script ID set in __Customizations__ > __Forms__ > __Entry Form__ (prefix __custform__ is automatically added for you on the __Custom Entry Form__).
       
     All Customizations and Proposed Customizations are evaluated to determine the Change Level. The highest __Change Level__ is used for the Change Request.
   | Proposed Customization | Change Level |
   | --- | --- |
   | customworkflow, customscript, customdeploy or anything with extensions: .js .ssp .ss | Script Object Changes |
   | customsearch, customreport | Searches and Reports |
   | customrole | User Role Changes |
   | Files with extensions: .html .txt | Web-Related Changes |
   | Everything else | Other Changes |
   - __Affected Process(es)__: Select any processes affected by this Change Request. Select __Import From Processes__ to automatically import affected processes.
   - __Affected Bundle ID/APP ID__: Use this field to specify a bundle ID or SuiteApp ID. Separate multiple IDs with commas. Note, this does not run the Impact Analysis. To run the Impact Analysis, use the Lookup Customization feature with a __Bundle ID__.
3. Click __In Progress__ in the status bar to indicate you are working on the Change Request.
4. __Save__ the Change Request. New sections and tabs are available once you save:

   1. __Push to Jira__ button is available if the [Jira integration](/docs/strongpointfornetsuite/integrations/jira_integration.md) is available, and [Allow NS to Push to Jira](/docs/strongpointfornetsuite/integrations/jira_integration.md#allow-nsto-push-to-jira) is enabled. When prompted, select the Jira project and click __Push__. A Jira ticket is created. The ticket number is added to the __Related Change Records__ tab as an __External Change Request Number__. The customizations are added to the new Jira ticket.
   2. __Download SDF Project__ button downloads the Change Request as a zip file.
   3. The __Approval__ section is visible. Click __Edit to__ add __Additional Approvers__ or __Approver Notes__. Click __Save__ if you make changes.

      ![change_request_new_saved](/img/product_docs/strongpointfornetsuite/change_management/change_request_new_saved.png)
   4. __Impact Analysis__ is automatically run. The results are shown on the __Impact Analysis__ tab.
      In addition to all of the direct dependencies, indirect dependencies are also considered to determine the change level for each customization. If there are multiple change levels, the most stringent one is applied.

      | Indirect Dependency | Change Level | Impact Analysis Results |
      | --- | --- | --- |
      | Record referenced by a scripted field | Scripted Objects | Dependent Scripts |
      | Search referenced by a scripted field |  |  |
      | Custom Field referenced by another scripted field |  |  |
      | Record referenced by a workflow related field | Workflows and Related Objects | Dependent Workflows |
      | Search referenced by a workflow related field |  |  |
      | Custom Field referenced by another workflow related field |  |  |
      | List referenced by a search related field (in a filter or formula) | Formula Objects | Critical Searches |
        
      There are three categories for customizations: Review any warnings or issues with the impacted customization record(s) before you make a change.
      - Can Be Safely Deleted or Modified
      - Cannot Be Safely Deleted or Modified
      - Inactive Customizations (Already Deleted)
   5. The __ERD__ tab opens the visual Entity Relationship Diagram where you can easily review the dependencies for the Customizations affected by the change request.
   6. __Related Change Record__ information results are shown on the __Related Change Records__ tab:

      - Created From
      - Originated System
      - Originating Case (shown if record is created from a Case record)
      - Originating Case Company (shown if record is created from a Case record)
      - External Change Request Number
      - External Link
      - Parent Change Request
5. Click __Pending Approval__ in the status bar when you are finished with the Change Request. A confirmation prompt is displayed. When confirmed, Approval Notifications are sent to the approvers.

   ![change_request_new_pendapprove](/img/product_docs/strongpointfornetsuite/change_management/change_request_new_pendapprove.png)
6. Approvers approve or reject the Change Request. __Deploy__ is available for approved Change Requests.

   ![change_request_new_approved](/img/product_docs/strongpointfornetsuite/change_management/change_request_new_approved.png)
7. Validate the Change Request.

## Canceling a Change Request

You can Cancel a Change Request:

1. __Edit__ the Change Request.
2. Click __Cancel CR__.
3. Confirm cancellation when prompted.
4. Click __Save__.

Status is changed to __Cancelled CR__.

## Status Bar States

![change_request_bar_not_started](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_not_started.png)

New Change Request. Click __In Progress__ to advance the status.

Impact Analysis is run when the Change Request is Saved.

![change_request_bar_inprogress](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_inprogress.png)

Change Request __In Progress__.

Can be demoted to __Not Started__.

Impact Analysis is run when the Change Request is Saved.

When ready for approval, click __Pending Approval__.

![change_request_bar_pending](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_pending.png)

Approvers are notified.

Approval section added to the Change Request.

Status can be demoted.

Status promoted based on Approvers actions.

![change_request_bar_approved](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved.png)

Status when all approvers have approved.

Can be returned to a previous status or rejected.

__Deploy__ button is available.

![change_request_bar_approved_partial](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_partial.png)

Status when Change Request is partially approved. Wait for all approvers to finish.

![change_request_bar_approved_override](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_override.png)

Status when an administrator has approved in place of a specified approver.

__Approval Override by__ field displays the approver.

__Deploy__ button is available.

![change_request_bar_approved_completed](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_completed.png)

Approved and Completed.

Can be returned to a previous status.

__Deploy__ button not available.

![change_request_bar_approved_canceled](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_approved_canceled.png)

Approved and Canceled.

Can be returned to a previous status.

__Deploy__ button not available.

![change_request_bar_rejected](/img/product_docs/strongpointfornetsuite/change_management/change_request_bar_rejected.png)

Rejected and Completed.

Can be returned to a previous status.

__Deploy__ button not available.
