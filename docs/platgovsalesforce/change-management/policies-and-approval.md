---
title: Change and Approval Policies Configuration
sidebar_label: Policies & Approval
description: Define change management requirements and approval workflows with configurable policies based on IT risk and process requirements for compliance.
---

# Change and Approval Policy

The Advanced Change Management system uses a set of policy records called Change and Approval
Policies.

Change and Approval Policies define:

- The level of change management required for a given change (for example, ApexClass modification
  vs. a report).
- The level of approval required and the participants in that approval process.

When Change Requests are created, Platform Governance for Salesforce analyzes the impacted
customizations and processes. It identifies the Change Policy that applies based on the IT risk from
the Customization Record and the process risk from the Process Records.

The Change and Approval Policy also determines the change level required for any detected changes to
be compliant. This ensures that even changes that do not go through the planned change management
process are analyzed against the policy for compliance.

For example, a company may have multiple policies:

1. A **Default Policy** that applies to any customization or process without a specific policy. This
   generally requires that scripted changes go through a relatively high level of review compared to
   non-scripted changes.
2. A **Controls Policy** that specifically applies to key reports and controls listed on the policy
   that need very specific approval to modify and ensures there are no changes without a proper
   audit review.
3. A **Custom Object Policy** to manage Custom fields and object.

Once in place, policies remind users of the level of change management required as well as monitors
the changes that do occur and raises alerts to IT by custom reports if there are any change
violations.

## Change Process Overview

Platform Governance for Salesforce automatically detects any changes to the customizations in your
system and log them. The system finds the relevant Change/Approval Policy and determines the change
level required for compliance. It then looks for the relevant change record. For example, if it
determines that a script changed and a Full Software Development Lifecycle was required for
compliance, it looks for an approved Deployment Record. If it does not find one, it flags the change
as non-compliant. An alert is sent to the Object owners notifying them of the non-compliant change.

1. **Detect the Change**: [Automated Scanner](/docs/platgovsalesforce/getting-started/initial-setup.md)
   must be enabled forPlatform Governance for Salesforce to detect a change.
2. **Log the Change**: creates a Change Log.
3. **Locate the Relevant Policy**: locates the correct policy for the object.
4. **Locate the Relevant Change Record**: determines if the change needs a Change Request.
5. **Determine if the Change is Compliant**:

   - If Platform Governance for Salesforce finds the appropriate Change Request or if the change is
     **Log Only**, it marks the change as compliant and attaches the Change Log to the Change
     Record.
   - If Platform Governance for Salesforce determines the change is non-compliant (does not fall
     under the relevant policy) it send an alert to IT and Object Owners to investigate the change
     and document what needs to be done to make the change compliant.

6. **Change Reporting and Resolution**: Platform Governance for Salesforce provides predefined
   [reports](/docs/platgovsalesforce/reporting/change-management-reports.md) you can review as part of your regular Change Management
   Process.

# Set Up Policies

Change / Approval Policies have two tabs: Details and Related.

You can create a New Policy, or edit an existing one:

1. Expand the **Change / Approval Policies** tab.
2. Change the **Recently Viewed** pinned list to **All Policies** to see a list of existing
   policies.
3. Click **New** to create a new policy or select an existing policy and click **Edit**.

## Details

> Information general information about the policy.
>
> Code and Data Model Changes change control level for code and data model changes.
>
> Automation Changes change control level for approval process, business process, flow, workflow and
> process builder changes.
>
> Sharing and Visibility Changes change control level for role, profile, permission set, data
> security, sharing non material and indirect changes to profile changes.
>
> Integration Changes change control level for external site, identity, and access changes.
>
> Configuration Changes change control level for data quality and general settings changes.
>
> Display and UI Changes change control level for application, label and translation, layout and
> template changes.
>
> Analytics Changes change control level for reports, dashboards, list view, and Einstein changes.
>
> Control Changes change control level for control changes.
>
> Application Configuration Changes (Data)
>
> Health Check Changes change control level for health check changes.
>
> IT Policies preliminary and final approvers.
>
> Customization Policies impacted customization approval.
>
> Management Policies executive approver and approval settings.
>
> Change Enablement Defaults merge approval list, non conforming alerts, and sequential approval
> requests.
>
> **System Information**, **Created By** and **Last Modified By** dates. Informational only, cannot
> be edited.

Once the policy is saved, **System Information** is added show the **Created By** and **Last
Modified By** user and time stamp. The information you entered on the form is shown on the
**Details** tab. The Related tab is now available to add Customizations and view additional
information and history.

### Information

![New Policy form](/img/product_docs/platgovsalesforce/change_management/policy_new1.webp)

- **Change/Approval Policy Name**
- **Default Policy**: Check if this is the default change/approval policy.
- **Parent Policy**: Search and add a parent policy (if applicable).
- **Active**: Check if the policy is active.

Set the required Change Level for each Metadata Type. The Default is shown in the form.

| **Change Level**                        | **Description**                                                                                                                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Log Changes Only**                    | Since the system automatically logs all changes, this change level requires no actions for compliance. Any changes to these objects are automatically marked compliant.                 |
| **Change Request**                      | Any changes to these objects require an Approved Change Request.                                                                                                                        |
| **Sandbox Development & Testing**       | Any changes to these objects require an Approved Change Request in the Stage Development Project. It also requires that a parent Change Request is attached to the Development Project. |
| **Full Software Development Lifecycle** | Any changes to these objects require an Approved Change Request.                                                                                                                        |

### Code and Data Model Changes

![Code and Data Model Changes](/img/product_docs/platgovsalesforce/change_management/policy_new2.webp)

### Automation Changes

![Automation Change Levels](/img/product_docs/platgovsalesforce/change_management/policy_new3.webp)

### Sharing and Visibility Changes

![Sharing and Visbility Change Level](/img/product_docs/platgovsalesforce/change_management/policy_new4.webp)

### Integration Changes

![Integration Change Levels](/img/product_docs/platgovsalesforce/change_management/policy_new5.webp)

### Configuration Changes

![Configuration Change Levels](/img/product_docs/platgovsalesforce/change_management/policy_new6.webp)

### Display and UI Changes

![Display / UI Change Levels](/img/product_docs/platgovsalesforce/change_management/policy_new7.webp)

### Analytics Changes

![Analytics Change Levels](/img/product_docs/platgovsalesforce/change_management/policy_new8.webp)

### Control Changes

![Control Change Levels](/img/product_docs/platgovsalesforce/change_management/policy_new9.webp)

Controls the change level required for different types of changes. Health Check Changes affect the
way changes are handled for the customization records for each Salesforce Health Check group
(session settings, file upload and security settings), so you can track and report on current
settings. There is a [Health Settings](/docs/platgovsalesforce/org-maintenance/customization-tracking.md) tab
for the specific records on the customization record.

### Application Configuration Changes (Data)

![Application Configuration Changes (Data)](/img/product_docs/platgovsalesforce/change_management/policy_new16.webp)

Set objects and fields that are **Tracked Non-blocking** or **Tracked Blocking** to be part of the
policy and require a Ticket and an approval.

Refer to [Set Up Data Tracking](/docs/platgovsalesforce/change-management/change-tracking.md) for more information on activating and
validating tracked fields.

### Health Check Changes

![Health Check Changes](/img/product_docs/platgovsalesforce/change_management/policy_new16_a.webp)

Select the change level for **Health Check Changes**: **None**, **Log Changes Only**, **Change
Request**, **Sandbox Development & Testing**, or **Full Software Development Lifecycle**.

### IT Policies

![Set IT Policies](/img/product_docs/platgovsalesforce/change_management/policy_new10.webp)

Specify the **Preliminary Approver**. Enter part of the name to see a matching list. For critical
changes, you can also set a **Final Approver**. This person must approve all changes affected by the
rule.

### Customization Policies

![Customization Policies](/img/product_docs/platgovsalesforce/change_management/policy_new12.webp)

**Require Impacted Customization Approval**: select this option to require approval from all
impacted Customization owners.

### Management Policies

![Set Management Policies](/img/product_docs/platgovsalesforce/change_management/policy_new13.webp)

**Executive Approver**: a business executive who must approve the change.

**Maximum number of Approvals Required**: approval is granted once the specified number of approvals
is complete. If this field is blank, all approvers must approve.

**No Order Required**: select this option to allow approvals in any order. If it is not checked,
approvals occur in the order specified.

### Change Enablement Defaults

![Change Enablement Defaults](/img/product_docs/platgovsalesforce/change_management/policy_new15.webp)

**Merge Approval Lists**: select this option to merge lists when multiple policies apply to a
change.

**Sequential Approval Requests**: select this option to send approval emails one at a time as each
approver approves the change. If not checked, all approvers receive the approval emails at the same
time.

**Non-conforming Customization Alerts**: select this option to alert Customization Owners if there
is a non-conforming change to their Customization.

## Related

The **Related** tab is available once a policy is saved. You can add and view Customizations, Change
Logs, Change Requests and view status and history associated with the Policy. Links are available
for easy navigation to each item.

Change Logs are created when customizations are added or removed.

![Policy Related tab](/img/product_docs/platgovsalesforce/change_management/policy_related_tab.webp)

### Add or Remove Customizations

You can add or remove customizations from the **Related** tab on the policy. Custom Fields Inherit
the CustomObject Policy when added.

- New Custom Fields are automatically added to the parent **CustomObject** Policy if it exists.
- Existing Custom Fields are added to the parent **CustomObject** Policy from the Custom Object
  customization record.
- Change Logs are generated for customization changes.
- Changes are reported in the **Reports** > **Change Enablement** > **Change/Approval Policy
  Changes**.

1. Open the policy and click the **Related** tab.
2. Click **Add Customizations**.

   ![Add customizations](/img/product_docs/platgovnetsuite/change_management/policy_add_customizations.webp)

3. Select a **Metadata Type** to filter the list.
4. Enter a search term or scroll through the list to locate customizations.
5. Click to select a customization. Use Shift-click or click and drag to select multiple contiguous
   items or Ctrl-click to select multiple customizations.

   ![Selecting Customizations](/img/product_docs/platgovsalesforce/change_management/policy_add_customizations2.webp)

6. Click **Add** to add the customizations to the **Selected Customizations** list. For existing
   customizations, select them in the **Selected Customizations** and click **Remove** to take them
   out of the list.
7. Click **Save** when complete.

### Select Change Level by Salesforce Type

This feature enables you to easily add customizations to the policy based on Salesforce type. It is
available on the **Related** tab on the policy.

1. Open the policy and click the **Related** tab.
2. Click **Select Change Level by SF Type**. You can set the policy as the **Default** and toggle it
   as **Active** in the **Policy Details**.

   ![Adding customizations by Salesforce Type](/img/product_docs/platgovsalesforce/change_management/policy_change_by_sf_type.webp)

3. Set **Category** and **Sub-Category** filters if you want to narrow the list. Sub-categories are
   not available for all Categories.

   ![Set filters for Salesforce type](/img/product_docs/platgovsalesforce/change_management/policy_add_sf_type2.webp)

4. Click to select a **Salesforce Type** from the **Available Salesforce Type List**. Use
   Shift-click or click and drag to select multiple contiguous items or Ctrl-click to select
   multiple types.

   ![Add selections to the Selected Salesforce Type List](/img/product_docs/platgovsalesforce/change_management/policy_add_sf_type3.webp)

5. Click the right arrow to add selections to the **Selected Salesforce Type List**. Click the left
   arrow to remove items from the selected list.
6. Click **Save** when complete. A confirmation dialog is displayed. Click **OK** to confirm you
   want to add all of the customizations from the selected Salesforce types.
