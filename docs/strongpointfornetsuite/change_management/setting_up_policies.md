# Setting Up Policies

- Policy Information general information about the policy.
- Set Up a Default Policy procedure to set up your default policy and approvers.
- Change Controls reference information for the Change Controls tab.
- Approvals reference information for the Approvals tab.
- Process Policies reference information for the Process Policies tab.
- Customization Policies reference information for the Customization Policies tab.
- Control Policies reference information for the Control Policies tab.
- SoD Policies reference information for the SoD Policies tab.
- Set Up Additional Policies set up additional policies as required.

## Policy Information

- __Name__: Policy name.
- __Default Policy__: Checked if it is the default policy.
- __Enable Global Object Level Policy__: Disabled by default. Check to enable.  
   Change Policy picking process with __Global Object Level Policy__ _disabled_:
  - If customizations or customization processes are attached to specific policies, pick the most stringent policy.
  - If there are no object-specific policies, pick __Default Policy__.  
  Change Policy picking process with __Global Object Level Policy__ _enabled_:
  - If customizations or customization processes are attached to specific policies, pick the most stringent policy.
  - If there are no object-specific policies, look for policies that are not attached to any customization or process. Compare the change level among all resulting policies and the Default Policy, then pick the most stringent policy.
- __Parent Policy__: Parent policy information to help organize policies, does not impact the process. This field is not available when editing the Default Policy. For child policies, it can be changed when the policy is edited.
- __Owner__: Person who created the policy.
- __Inactive__: Checked if the policy is not active.
- __Log XML Only Change__: Checked to track online changes that occur in the XML, such as NetSuite internal changes.Recommended to leave this unchecked due to the volume of false positives you would need to manage.

![changeandapprovalpolicy1](/img/product_docs/strongpointfornetsuite/change_management/changeandapprovalpolicy1.webp)

## Set Up a Default Policy

1. Open __Strongpoint__ > __Change Management Tools__ > __Change/Approval Policy__
2. Edit the __Default Policy__ so that it has the following settings:

- __Header__: Everything in the Header should remain the same including the name Default.
- __Change Controls:__

  ![Policy Default Change Controls](/img/product_docs/strongpointfornetsuite/change_management/policy_default_change_controls2.webp)
- __Approvals__: Select the policy approvers on the Approvals tab.

3. Click __Save__

## Change Controls

Each object type has an independent change level. The change level specifies what approval is required for changes to the objects to be compliant with this policy.

### Change Levels

__No Logs Created__: changes to these objects update the customization documentation is updated but does not create change logs. A warning text is displayed when the Administrator sets the change level to __No Logs Created__.

__Log Changes Only__: changes to these objects are automatically marked compliant.

__Process Issue Only__: changes to these objects require an __Approved Process Issue__ with a status not set to __Completed__.

__Change Request__: changes to these objects require an __Approved Change Request__ with a status not set to __Completed__.

__Sandbox Development & Testing__: changes to these objects require an __Approved Change Request__ in the __Stage Deployment Record__ with a status not set to __Completed__.

__Full Software Development Lifecycle__: changes to these objects require an __Approved Change Request__ in the __Stage Deployment Record__ with a status not set to __Completed__, and a parent __Change Request__ attached to the __Deployment Record__.

To add new change levels, select __New__ or use the __+__ next to a field when editing the policy.

### Object Types

#### Complex Objects

- __Scripted Objects__: Scripts, Workflows and any object upon with a script or workflow dependency. Default: Log Changes Only
- __Formula Objects__: Fields used in Formulas. Default: Sandbox Development & Testing
- __Workflows and Related Objects__: Changes to Workflows, or any objects used by a Workflow. When an object is used by a Script and a Workflow, we use the higher level between Scripted Objects, and Workflows and Related Objects change controls. Default: Change Request
- __Integration Objects__: Changes to External Records, External Fields, External Systems, and Integrations. Default: Log Changes Only
- __Non-Managed Bundle/App Deployments__: Bundle or SuiteApp Deploy into an account, updates of the bundle or SuiteApp object are handled by object type. (Only non-managed bundles/Apps). Default: Sandbox Development & Testing
- __Agent Controls__: Changes to Control Searches. Default: Log Changes Only
- __Mass Updates__: Changes to Mass Updates Default: Log Changes Only

#### Other Configurable Objects

- __Searches and Reports__: Searches and Reports not flagged as controls or scripted. Default: Change Request
- __Fields__: Changes to custom fields. Default: Log Changes Only
- __Lists__: Changes to custom lists. Default: Log Changes Only
- __Records__: Changes to custom records. Default: Log Changes Only
- __Groups__: Changes to groups. Default: Log Changes Only
- __Forms and Template Changes__: Changes to Forms and Templates. Default: Log Changes Only
- __Web-Related Changes__: Objects affecting web objects, for example fields displayed in a site or any part of SuiteCommerce Advanced. Default: Log Changes Only
- __Departments/Locations/Class__: Changes to department, location, or class. Default: Log Changes Only
- __Subsidiaries__: Changes to subsidiary. Default: Log Changes Only

#### Access and Setup

- __User Roles__: Changes to role assignments on the Change Control. Default: Log Changes Only
- __User Role Assignment__: Changes to user role assignments on the Change Control. Default: Log Changes Only
- __User Role Related Objects__: Changes related to user role changes on the Change Control. Default: Log Changes Only
- __NetSuite SetUp and Preferences__: Changes to NetSuite setup objects including accounting lists, segments, enabled features and preferences. Default: Log Changes Only
- __Accounting Lists__: Changes to accounting lists. Default: Log Changes Only
- __Custom Segments__: Changes to custom segments. Default: Log Changes Only
- __User Offboarding__: Available when [Enhanced User Provisioning](/docs/strongpointfornetsuite/change_management/user_provisioning.md) is enabled.
- __User Onboarding__: Available when [Enhanced User Provisioning](/docs/strongpointfornetsuite/change_management/user_provisioning.md) is enabled.

## Approvals

Approvers initiate the change request and enable it to move to the next stage.

![Policy Approvals tab](/img/product_docs/strongpointfornetsuite/change_management/policy_approvals_tab.webp)

Policy Change Approvers

This section is only applies to the default policy.

- __Preliminary Approver (Policy Change)__: Specifies the preliminary approver required for a policy change. They are listed as the first approver in the Change Request.
- __Final Approver (Policy Change)__: Specifies the final approver required for a policy change. The person who needs to approve after all other approvals have been obtained.

  __NOTE:__ Specifying a __Final Approver__ locks the default policy and all child policies. If a user attempts to change a policy, a notice is displayed. Click __Request Approval__. The form is launched, with your proposed changes populated.

  ![Record Save Blocked](/img/product_docs/strongpointfornetsuite/change_management/record_save_blocked.webp)

ITGC Approvers

Groups are an efficient method to specify approvers. For example, if you need one approver from each of several company functions, you can create a group for each functional area, and select a minimum of 1 approval. Once each group has approved, the policy moves on to the __Final Approver__.

- __Group Name__: enter a descriptive name to identify the approvers.
- __Approvers__: click in the entry box and select approvers from the available user list.
- __No Order Required__: check the box if approvers can approve in any order. If not checked, approvers must approve in the order specified in the __Approvers__ entry.
- __Min # of Approvals Required__: select the minimum number of approvers for the group. This option is not available if __No Order Required__ is not checked.
- __Add Row__: click to add another ITGC Approver Group. Click the red __X__ to delete an existing group.

Final Approver

- __Final Approver__: Specifies the final approver of changes affected by given policies.
- __No Order Required__: Check this box to allow concurrent approvers. If blank, approvals route in order. Default is blank.
- __Max # of Approvals Required__: Specifies the maximum number of approvals to consider a change complete. If blank, all approvers are required.
- __Change ID__: Opens a form displaying the __Name__, __Old ID__ and an input field for the __New ID__. __Change ID__ is available as a button when you __Edit__ the policy.

## Process Policies

Process Policies specify which processes the policy applies to and how they should be managed. Process Policies are only applicable if you implement Manage Process Risk.

- __Require Affected Process Approval__: Check to require approval from process owners on the Change Request. Default is checked.
- __Include Process Editors as Alternates__: Check to include Process Editors as alternate approvers. Process Editors are specified on the __Continuous__ __Improvement__ tab of the __Process__ record. Default is not checked.
- __Require Impacted Process Approval__: Check to require approval from process owners of related objects. Often these owners are not specifically listed in the Change Request. Default is not checked.
- __Require Parent Process Owner Approval__: Owners of processes at or above the parent level must approve. Default is not checked.
- __New Process__: Launches the new Process form.

## Customization Policies

Customization Policies specifies the objects affected by the policy.

- __Require Object Owner Approval__: Owner of the customization record. Likely the person who created the object. Default is not checked. Recommend checking this box.
- __Require Impacted Customization Approval__: Owner of any impacted customization record in NetSuite. Default is not checked.
- __View__ and __Customization__: Select a View and navigate to a Customization. Click __Attach__ to add the selected customization to the Policy.
- __New Customization__: Launches the new Customization form.
- __Customize View__: Launches the Active Customizations Search results.

## Control Policies

Control Policies specify controls for this policy.

- __Control Assignee Approval__: Checked if there is a control assignee in Control Policies.
- __Process Owner(s)__: Checked if there are any process owners in Control Policies.
- __Control Owner__: Checked if there is a control owner in Control Policies.

## SoD Policies

Segregation of Duties Policies specify the approvers for this policy.

- __SoD Preliminary Approver__: One or more preliminary SoD approvers for changes affected by the policy.
- __SoD Final Approver__: One or more final SoD approvers for changes affected by the policy.
- __Require Change Request__: If checked, a Change Request is Required for any changes to the policy.

## Set Up Additional Policies

In some cases, you may want stricter controls on certain objects. For example, many of our public companies create a specific policy for SOX related searches, since they want it tighter than Log Only for those objects. To set up object specific policies, the initial spider must be complete, so you can attach the Customization Record to the policy.

To set up additional policies:

1. Open __Strongpoint__> __Change Management Tools__ > __Change/Approval Policy__ > __New__
2. Enter the policy information.
3. Assign the __Change Levels__ on the __Change Controls__ tab.
4. Assign the __Approvers__ on the __IT Policies__ tab.
5. Click __Save__
6. Click __Edit__
7. Open the __Customization Policies__ tab.
  
![policy_add_customizations](/img/product_docs/strongpointfornetsuite/change_management/policy_add_customizations.webp)

- Check __Require Object Owner Approval__ if needed.
- Check __Require Impacted Customization Approval__ if needed.

8. Add Customizations. Attaching customizations to the policy is how Platform Governance for NetSuite knows a particular policy should be applied to specific objects. If there are multiple policies applied to specific objects, the higher change level is selected to keep the change compliant.

- Change the __View__ to help locate the desired customization.
- Enter all of part of the customization in __Customization__, or click the double down arrow icon to select the __List__ option.
- Select the customization.
- Click __Attach__.

9. Click __Save__ when you are finished adding customizations to the Policy.

Another method to add customization is through NetSuite's __Mass Update__. Here is the basic process. Refer to the NetSuite help for more information on Mass Update.

1. Open __Lists__ > __Mass Updates__
2. Expand __General Updates__ > __Custom Records__ > __Customization__
3. Use the Criteria tab to locate and __Add__ your customizations.
4. Open the __Mass Update Fields__ tab.
5. Locate the __Change/ Approval Policy__ field. (You can use your browser’s Find function.)
6. Check the box and select your new __Policy__.
7. __Save__ and run the Mass Update.
8. Save your __Change Approval Policy__.
