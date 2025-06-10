# Creating a Change Request

Change requests are the method to plan, analyze, track and approve changes. You can create different types of Change Requests to match the change you want to manage. Here are two options:

- __Customization__ Change request is used for Metadata changes, such as [Customizations](/docs/strongpointforsalesforce/customizations/customizations_overview.md).
- __Data Record__ - Change request is used for Data Changes to Revenue Cloud/ [CPQ](/docs/strongpointforsalesforce/change_management/enhanced_cpq_support.md).

Data Record Change Requests are only available with an Enterprise Compliance license.

1. Open the __Change Requests__ tab.
2. Click __New__

   ![New Change Request](/img/product_docs/strongpointforsalesforce/change_management/change_request_new_light.webp)
3. Enter information as needed.

   - __Change Request Name__: add a meaningful name to the change request.
   - __Change Request Type__: Customizations for metadata changes and Data Records for data.
   - __Parent Change Request__: enter an optional parent change request if this is part of a bigger change.
   - __Change Overview__: add a summary of the desired changes.
   - __Change Type__: select the type from the list. __Minor__ is the default.
   - __Is Release__: check if this change request represents a release. The customizations from all the child change requests are rolled into this release for deployment.
4. __Save__ the __Change Request__. A confirmation is displayed when the change request is saved.

   ![Continue with the Change Request](/img/product_docs/strongpointforsalesforce/change_management/change_request_new2_light.webp)
5. Add or change information as needed:

   - __External Change Request Number__ and __External Link__ are used for reference if the change request is coming from an external system.
   - __Completion Status__: select a status from the list. This operation can also be performed after you save the change request and proceed to Impact Analysis.
   - __Stage__: the type of change project: __Change Request__, __Development Project__, __Deployment Record__, or __Rollback Record__. This is an informational field.
   - __Change Request Group__: search for groups to add to this change request.
   - __Assigned BA__: search for a user to add as the assigned Business Analyst.
   - __Release__: search for the parent change request if this change request is part of a release.
6. Expand the __Customizations__ section. __Customizations__ is selected by default. Click __Customizations__ to access the __Add/Remove__ function.

   ![Expand the Customizations section](/img/product_docs/strongpointforsalesforce/change_management/change_request_new3_light.webp)

   - Click __Add/Remove__ to add existing Customizations to the change request.

     ![Add an existing customization to a change request](/img/product_docs/strongpointforsalesforce/change_management/change_request_new4_light.webp)

     - Enter filters to search for existing customizations. For this example, the __Metadata Type__ is set to __CustomField__. The matching customizations are displayed.

       ![Enter filters to search for customizations](/img/product_docs/strongpointforsalesforce/change_management/change_request_new5_light.webp)
   - Select one or more customizations. Use __Search__, __First__, __Previous__, __Next__ and __Last__ to navigate through the list if needed.
   - Click __Add__ to add the customizations to the __Selected Customizations__ list. Continue adding your existing customizations.
   - Click __Save__.
7. Click __Proposed Customizations__ to enable the __Add/Remove__ option if you want to create new customizations.

   - Click __Add/Remove__.

     ![Add Proposed Customizations to the Change Request](/img/product_docs/strongpointforsalesforce/change_management/change_request_new6_light.webp)
   - Click __+__ (Add).

     ![Add the information for the proposed customization](/img/product_docs/strongpointforsalesforce/change_management/change_request_new7_light.webp)
   - Enter the __API Name__ and __Salesforce Metadata Type__. Click __+__ to add additional proposed customizations. Can be used in conjunction with customizations that already exist. All __Customizations__ and __Proposed Customizations__ are evaluated to determine the change level. The highest change level is used for the change request.
   - Click __Save__.
8. Click __Save__ on the __Edit Change Request__ form when you are finished. The __Deployment__ section is only applicable after the change request is approved.

Your change request is created.

![Your Change Request is created](/img/product_docs/strongpointforsalesforce/change_management/change_request_new8_light.webp)

## Preparing the Change Request for Approval

Review the change request:

- [Run Impact Analysis](#Run-Impact-Analysis)
- [View the DRD](#View-the-DRD)
- [Send the Change Request for Approval](#Send-the-Change-Request-for-Approval)

### Run Impact Analysis

Open the __Impact Analysis__ tab and review the information on the tabs: __Can Be Safely Deleted or Modified__, __Cannot Be Safely Deleted or Modified__, and __Inactive Customizations__.

Here is an example of items on the __Cannot Be Safely Deleted or Modified__ tab. The Customizations and Impacted Customizations are links to each customization record.

![Impact Analysis Cannot Be Safely Deleted or Modified tab](/img/product_docs/strongpointforsalesforce/change_management/change_request_new_impact_analysis.webp)

Use the __Edit__ button to return to the change request and make any required modifications.

### View the DRD

Open the __DRD__ tab to review the dependency diagram. Use the __Edit__ button to return to the change request and make any required modifications.

![Open the DRD tab to view the dependency diagram](/img/product_docs/strongpointforsalesforce/change_management/change_request_drd.webp)

### Send the Change Request for Approval

Change request approvers are automatically assigned based on the policy. In this section, you can add additional approvers, approver notes and begin the approval process.

1. Click __Edit__ to modify the change request.
2. Expand the __Approval__ section.

   ![Expand Approval section](/img/product_docs/strongpointforsalesforce/change_management/change_request_new_approvals.webp)
3. Add the approval information:

   - __Approval Status__: updates the status of the change request. Typically used for editing existing change requests. Set the __Approval Status__ to __Pending Approval__ when you are ready.
   - __Stage__: the type of change project: __Change Request__, __Development Project__, __Deployment Record__, or __Rollback Record__. This is an informational field.
   - __Approver Notes__: optional notes about the change request.
   - __Additional Approvers__: any additional approvers. Mandated approvers are set by the policy. Click __Add/Remove__ and select approvers.
4. Click __Save__.

   ![Change Request Pending Approval](/img/product_docs/strongpointforsalesforce/change_management/change_request_new_send_approval.webp)
5. Click __Submit for Approval__ to start the process. Approval notifications are sent to the approvers.

If you created the Change Request in your sandbox to determine the scope of the change, recreate it in your Production environment to enable approvals and ongoing tracking.   
For new objects that do not yet exist in Production, edit the Change Request and enter the full API Names of these objects into the Proposed Customization fields in the Scope Section. You can add multiple API Names by using the Add button. Save the Change Request when complete.
