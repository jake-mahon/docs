---
sidebar_position: 1316
title: Creating a Change Request
---

# Creating a Change Request

Before making any changes, it is important to understand the scope of the planned change, potential impacts and the level of change required. Documentation is also available if you are using the old [Change Request](creating_change_request_old_form "Create a Change Request with the Old Form") form. Refer to [Setting Preferred Forms](../customizations/setting_preferred_forms "Open Setting Preferred Forms topic") for information on designating your preferred Change Request form.

SuiteCloud Development Framework (SDF) users can [upload their Sandbox development file](#sdf_zip) directly into a production ITGC Change Request. The Change Request populates the scope with the existing customizations and adds new ones to proposed customizations.

:::note
If you want to see if the change would have an impact in your sandbox, you can also create a change request in your sandbox account.
:::

## Create the Change Request

1. Open **Strongpoint** > **Change Management Tools** > **ITGC Change Request**  
    The status bar displays the stage of the Change Request. A new change request displays *Not Started*.
2. Enter information in the **Main** and **Scope** sections:

   ![](../../../../static/images/enus/Content/Resources/Images/change_request_new.png)

   * **Name**: Add a name to the change request.
   * **Stage**: Select the type of change you want to make.
   * **Change Overview**: Add a summary of the desired change.
   * **Lookup Customization** launches a window where you can search for customizations in the current account or a different account:
     * Click **Change Account** to log into another account or sandbox and look up customizations. You can use the **Set up TBA Credentials** procedure in [Comparing Environments](comparing_environments "Save TBA Credentials for an environment") to save your credentials for each environment you use.
     * Enter a **Name** and click **Lookup** to find a customization by all or part of a name. For example, **a** shows everything beginning with **A**.
     * Enter a **Script ID** and click **Lookup** to find a customization by all or part of a Script ID. Uses **startswith** search operator and allows **%** wildcard. For example, entering **%\_flo** returns customizations with **\_flo** in the script id.
     * Select a **Type** and click **Lookup** to find all customizations of the selected type.
     * Enter a **Bundle ID** and click **Lookup** to find a customization that belongs to the Bundle.
     * **Select User** from the list to search all customizations **Modified By** selected user. This uses the **Change By** field in the change logs. The list is updated if the source account is changed. The **User Not Determined** option is for logs without system notes, where the user cannot be identified. **User Not Determined** can be used with the **From** and **To** filters to search on the log creation date instead of the actual change date.
     * Select dates in the **From** and/or **To** fields to search all customizations that were changed on or after the **From** date or on or before the **To** date. Use both fields to specify a search range. This uses the **Actual Change Date** field in the change logs.
     * Enter a **Script File** name and click **Lookup** to find a customization by all or part of the script file name. For example, **26** shows everything beginning with **26**.
     * Use multiple filters to further refine your search. For example, **Name** starting with **a** and **Type** of **List** show all **List** customizations starting with **A**.
     Once the customizations are displayed:
     * Hover over **Details** to see specifics of the customization.
     * Click the box(es) to select one or more customizations. Check in the **Name** header to toggle **Selecting** or **Deselecting All**.* Click **Add Selected Customizations**. If the Customization (based on Script ID) exists in the current account it is added to the **Customizations**. If it does not exist, it is added to the **Proposed Customizations**.
   * **Customizations**: Use this field if you are changing objects that already exist in your account. Can be used in conjunction with proposed customizations. Start typing in the entry box for a single value, click the **Select Multiple** icon or click **Lookup Customization** to search for customizations.
   * **Add Customizations from SDF Zip file**: SuiteCloud Development Framework (SDF) users can upload their Sandbox development file. The Change Request populates the scope with the existing customizations and adds new ones to proposed customizations.   
     Click **Choose File** and navigate to your SDF zipped file.
   * **Do Not ReSpider Automatically**: when unchecked, an Automatic ReSpider occurs when the Change Request status is set to **Completed**.   
     The ReSpider ensures that all change logs are complete prior to changing the status. If automatic ReSpidering is turned off, there is a risk of changes being marked as non-compliant if the change logs are not complete when the user changes the status to **Completed**. The default for the **Do Not ReSpider Automically** is set on the [Configuration and Stats Change Management](../installing_strongpoint/installation_settings_report#CasetoCR "Open the Installation Settings Report topic") tab.
   * **Proposed Customizations**: Use this field when you are adding customizations that do not yet exist in your account. You can add multiple Script IDs by separating them with commas. Can be used in conjunction with customizations that already exist.   
     New **Entry** and **Transaction** forms can be pre-approved by adding the Script ID of the form. The Script ID must match the Script ID set in **Customizations** > **Forms** > **Entry Form** (prefix **custform** is automatically added for you on the **Custom Entry Form**).
       
     All Customizations and Proposed Customizations are evaluated to determine the Change Level. The highest **Change Level** is used for the Change Request.

   | Proposed Customization | Change Level |
   | --- | --- |
   | customworkflow, customscript, customdeploy or anything with extensions: .js .ssp .ss | Script Object Changes |
   | customsearch, customreport | Searches and Reports |
   | customrole | User Role Changes |
   | Files with extensions: .html .txt | Web-Related Changes |
   | Everything else | Other Changes |

   * **Affected Process(es)**: Select any processes affected by this Change Request. Select **Import From Processes** to automatically import affected processes.
   * **Affected Bundle ID/APP ID**: Use this field to specify a bundle ID or SuiteApp ID. Separate multiple IDs with commas. Note, this does not run the Impact Analysis. To run the Impact Analysis, use the Lookup Customization feature with a **Bundle ID**.
3. Click **In Progress** in the status bar to indicate you are working on the Change Request.
4. **Save** the Change Request. New sections and tabs are available once you save:

   1. **Push to Jira** button is available if the [Jira integration](../integrations/jira_integration "Open the Jira Integration topic") is available, and [Allow NS to Push to Jira](../integrations/jira_integration#NSJiraPush) is enabled. When prompted, select the Jira project and click **Push**. A Jira ticket is created. The ticket number is added to the **Related Change Records** tab as an **External Change Request Number**. The customizations are added to the new Jira ticket.
   2. **Download SDF Project** button downloads the Change Request as a zip file.
   3. The **Approval** section is visible. Click **Edit to** add **Additional Approvers** or **Approver Notes**. Click **Save** if you make changes.

      ![](../../../../static/images/enus/Content/Resources/Images/change_request_new_saved.png)
   4. **Impact Analysis** is automatically run. The results are shown on the **Impact Analysis** tab.
      In addition to all of the direct dependencies, indirect dependencies are also considered to determine the change level for each customization. If there are multiple change levels, the most stringent one is applied.

      | Indirect Dependency | Change Level | Impact Analysis Results |
      | --- | --- | --- |
      | Record referenced by a scripted field | Scripted Objects | Dependent Scripts |
      | Search referenced by a scripted field |
      | Custom Field referenced by another scripted field |
      | Record referenced by a workflow related field | Workflows and Related Objects | Dependent Workflows |
      | Search referenced by a workflow related field |
      | Custom Field referenced by another workflow related field |
      | List referenced by a search related field (in a filter or formula) | Formula Objects | Critical Searches |

        
      There are three categories for customizations: Review any warnings or issues with the impacted customization record(s) before you make a change.
      * Can Be Safely Deleted or Modified
      * Cannot Be Safely Deleted or Modified
      * Inactive Customizations (Already Deleted)
   5. The **ERD** tab opens the visual Entity Relationship Diagram where you can easily review the dependencies for the Customizations affected by the change request.
   6. **Related Change Record** information results are shown on the **Related Change Records** tab:

      * Created From
      * Originated System
      * Originating Case (shown if record is created from a Case record)
      * Originating Case Company (shown if record is created from a Case record)
      * External Change Request Number
      * External Link
      * Parent Change Request
5. Click **Pending Approval** in the status bar when you are finished with the Change Request. A confirmation prompt is displayed. When confirmed, Approval Notifications are sent to the approvers.

   ![](../../../../static/images/enus/Content/Resources/Images/change_request_new_PendApprove.png)
6. Approvers approve or reject the Change Request. **Deploy** is available for approved Change Requests.

   ![](../../../../static/images/enus/Content/Resources/Images/change_request_new_Approved.png)
7. Validate the Change Request.

## Canceling a Change Request

You can Cancel a Change Request:

1. **Edit** the Change Request.
2. Click **Cancel CR**.
3. Confirm cancellation when prompted.
4. Click **Save**.

Status is changed to **Cancelled CR**.

## Status Bar States

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_not_started.png)

New Change Request. Click **In Progress** to advance the status.

Impact Analysis is run when the Change Request is Saved.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_inProgress.png)

Change Request **In Progress**.

Can be demoted to **Not Started**.

Impact Analysis is run when the Change Request is Saved.

When ready for approval, click **Pending Approval**.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_pending.png)

Approvers are notified.

Approval section added to the Change Request.

Status can be demoted.

Status promoted based on Approvers actions.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_approved.png)

Status when all approvers have approved.

Can be returned to a previous status or rejected.

**Deploy** button is available.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_approved_partial.png)

Status when Change Request is partially approved. Wait for all approvers to finish.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_approved_override.png)

Status when an administrator has approved in place of a specified approver.

**Approval Override by** field displays the approver.

**Deploy** button is available.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_approved_completed.png)

Approved and Completed.

Can be returned to a previous status.

**Deploy** button not available.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_approved_canceled.png)

Approved and Canceled.

Can be returned to a previous status.

**Deploy** button not available.

![](../../../../static/images/enus/Content/Resources/Images/change_request_bar_rejected.png)

Rejected and Completed.

Can be returned to a previous status.

**Deploy** button not available.