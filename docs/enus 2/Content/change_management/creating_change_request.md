---
sidebar_position: 2793
title: Creating a Change Request
---

# Creating a Change Request

Change requests are the method to plan, analyze, track and approve changes. You can create different types of Change Requests to match the change you want to manage. Here are two options:

* **Customization** Change request is used for Metadata changes, such as [Customizations](../customizations/customizations_overview "Open the Customizations Overview topic").
* **Data Record** - Change request is used for Data Changes to Revenue Cloud/ [CPQ](enhanced_CPQ_support "Open Enhanced CPQ Support topic").

:::note
Data Record Change Requests are only available with an Enterprise Compliance license.
:::

1. Open the **Change Requests** tab.
2. Click **New**

   ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new_light.png "New Change Request")
3. Enter information as needed.

   * **Change Request Name**: add a meaningful name to the change request.
   * **Change Request Type**: Customizations for metadata changes and Data Records for data.
   * **Parent Change Request**: enter an optional parent change request if this is part of a bigger change.
   * **Change Overview**: add a summary of the desired changes.
   * **Change Type**: select the type from the list. **Minor** is the default.
   * **Is Release**: check if this change request represents a release. The customizations from all the child change requests are rolled into this release for deployment.
4. **Save** the **Change Request**. A confirmation is displayed when the change request is saved.

   ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new2_light.png "Continue with the Change Request")
5. Add or change information as needed:

   * **External Change Request Number** and **External Link** are used for reference if the change request is coming from an external system.
   * **Completion Status**: select a status from the list. This operation can also be performed after you save the change request and proceed to Impact Analysis.
   * **Stage**: the type of change project: **Change Request**, **Development Project**, **Deployment Record**, or **Rollback Record**. This is an informational field.
   * **Change Request Group**: search for groups to add to this change request.
   * **Assigned BA**: search for a user to add as the assigned Business Analyst.
   * **Release**: search for the parent change request if this change request is part of a release.
6. Expand the **Customizations** section. **Customizations** is selected by default. Click **Customizations** to access the **Add/Remove** function.

   ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new3_light.png "Expand the Customizations section")

   * Click **Add/Remove** to add existing Customizations to the change request.

     ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new4_light.png "Add an existing customization to a change request")

     * Enter filters to search for existing customizations. For this example, the **Metadata Type** is set to **CustomField**. The matching customizations are displayed.

       ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new5_light.png "Enter filters to search for customizations")
   * Select one or more customizations. Use **Search**, **First**, **Previous**, **Next** and **Last** to navigate through the list if needed.
   * Click **Add** to add the customizations to the **Selected Customizations** list. Continue adding your existing customizations.
   * Click **Save**.
7. Click **Proposed Customizations** to enable the **Add/Remove** option if you want to create new customizations.

   * Click **Add/Remove**.

     ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new6_light.png "Add Proposed Customizations to the Change Request")
   * Click **+** (Add).

     ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new7_light.png "Add the information for the proposed customization")
   * Enter the **API Name** and **Salesforce Metadata Type**. Click **+** to add additional proposed customizations. Can be used in conjunction with customizations that already exist. All **Customizations** and **Proposed Customizations** are evaluated to determine the change level. The highest change level is used for the change request.
   * Click **Save**.
8. Click **Save** on the **Edit Change Request** form when you are finished. The **Deployment** section is only applicable after the change request is approved.

Your change request is created.

![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new8_light.png "Your Change Request is created")

## Preparing the Change Request for Approval

Review the change request:

* [Run Impact Analysis](#Run "Jump to Impact Analysis section")
* [View the DRD](#View "Jump to View the DRD section")
* [Send the Change Request for Approval](#Send "Jump to the Send the Change Request for Approval section")

### Run Impact Analysis

Open the **Impact Analysis** tab and review the information on the tabs: **Can Be Safely Deleted or Modified**, **Cannot Be Safely Deleted or Modified**, and **Inactive Customizations**.

Here is an example of items on the **Cannot Be Safely Deleted or Modified** tab. The Customizations and Impacted Customizations are links to each customization record.

![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new_impact_analysis.png "Impact Analysis Cannot Be Safely Deleted or Modified tab")

Use the **Edit** button to return to the change request and make any required modifications.

### View the DRD

Open the **DRD** tab to review the dependency diagram. Use the **Edit** button to return to the change request and make any required modifications.

![](../../../../static/images/enus 2/Content/Resources/Images/change_request_drd.png "Open the DRD tab to view the dependency diagram")

### Send the Change Request for Approval

Change request approvers are automatically assigned based on the policy. In this section, you can add additional approvers, approver notes and begin the approval process.

1. Click **Edit** to modify the change request.
2. Expand the **Approval** section.

   ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new_approvals.png "Expand Approval section")
3. Add the approval information:

   * **Approval Status**: updates the status of the change request. Typically used for editing existing change requests. Set the **Approval Status** to **Pending Approval** when you are ready.
   * **Stage**: the type of change project: **Change Request**, **Development Project**, **Deployment Record**, or **Rollback Record**. This is an informational field.
   * **Approver Notes**: optional notes about the change request.
   * **Additional Approvers**: any additional approvers. Mandated approvers are set by the policy. Click **Add/Remove** and select approvers.
4. Click **Save**.

   ![](../../../../static/images/enus 2/Content/Resources/Images/change_request_new_send_approval.png "Change Request Pending Approval")
5. Click **Submit for Approval** to start the process. Approval notifications are sent to the approvers.

:::note
If you created the Change Request in your sandbox to determine the scope of the change, recreate it in your Production environment to enable approvals and ongoing tracking. For new objects that do not yet exist in Production, edit the Change Request and enter the full API Names of these objects into the Proposed Customization fields in the Scope Section. You can add multiple API Names by using the Add button. Save the Change Request when complete.
:::