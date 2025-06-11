# Set Up Policies

Change / Approval Policies have two tabs: [Details](#Details) and [Related](#Related).

You can create a New Policy, or edit an existing one:

1. Expand the __Change / Approval Policies__ tab.
2. Change the __Recently Viewed__ pinned list to __All Policies__ to see a list of existing policies.
3. Click  __New__ to create a new policy or select an existing policy and click __Edit__.

## Details

> [Information](#Information) general information about the policy.
>
> [Code and Data Model Changes](#Code-and-Data-Model-Changes) change control level for code and data model changes.
>
> [Automation Changes](#Automation-Changes) change control level for approval process, business process, flow, workflow and process builder changes.
>
> [Sharing and Visibility Changes](#Sharing-and-Visibility-Changes) change control level for role, profile, permission set, data security, sharing non material and indirect changes to profile changes.
>
> [Integration Changes](#Integration-Changes) change control level for external site, identity, and access changes.
>
> [Configuration Changes](#Configuration-Changes) change control level for data quality and general settings changes.
>
> [Display and UI Changes](#Display-and-UIChanges) change control level for application, label and translation, layout and template changes.
>
> [Analytics Changes](#Analytics-Changes) change control level for reports, dashboards, list view, and Einstein changes.
>
> [Control Changes](#Control-Changes) change control level for control changes.
>
> [Application Configuration Changes (Data)](#Application-Configuration-Changes-Data)
>
> [Health Check Changes](#Health-Check-Changes) change control level for health check changes.
>
> [IT Policies](#ITPolicies) preliminary and final approvers.
>
> [Customization Policies](#Customization-Policies) impacted customization approval.
>
> [Management Policies](#Management-Policies) executive approver and approval settings.
>
> [Change Enablement Defaults](#Change-Enablement-Defaults) merge approval list, non conforming alerts, and sequential approval requests.
>
> __System Information__, __Created By__ and __Last Modified By__ dates. Informational only, cannot be edited.

Once the policy is saved, __System Information__ is added show the __Created By__ and __Last Modified By__ user and time stamp. The information you entered on the form is shown on the __Details__ tab. The [Related](#Related) tab is now available to add Customizations and view additional information and history.

### Information

![New Policy form](/img/product_docs/strongpointforsalesforce/change_management/policy_new1.webp)

- __Change/Approval Policy Name__
- __Default Policy__: Check if this is the default change/approval policy.
- __Parent Policy__: Search and add a parent policy (if applicable).
- __Active__: Check if the policy is active.

Set the required Change Level for each Metadata Type. The Default is shown in the form.

| __Change Level__ | __Description__ |
| --- | --- |
| __Log Changes Only__ | Since the system automatically logs all changes, this change level requires no actions for compliance. Any changes to these objects are automatically marked compliant. |
| __Change Request__ | Any changes to these objects require an Approved Change Request. |
| __Sandbox Development & Testing__ | Any changes to these objects require an Approved Change Request in the Stage Development Project. It also requires that a parent Change Request is attached to the Development Project. |
| __Full Software Development Lifecycle__ | Any changes to these objects require an Approved Change Request. |

### Code and Data Model Changes

![Code and Data Model Changes](/img/product_docs/strongpointforsalesforce/change_management/policy_new2.webp)

### Automation Changes

![Automation Change Levels](/img/product_docs/strongpointforsalesforce/change_management/policy_new3.webp)

### Sharing and Visibility Changes

![Sharing and Visbility Change Level](/img/product_docs/strongpointforsalesforce/change_management/policy_new4.webp)

### Integration Changes

![Integration Change Levels](/img/product_docs/strongpointforsalesforce/change_management/policy_new5.webp)

### Configuration Changes

![Configuration Change Levels](/img/product_docs/strongpointforsalesforce/change_management/policy_new6.webp)

### Display and UI Changes

![Display / UI Change Levels](/img/product_docs/strongpointforsalesforce/change_management/policy_new7.webp)

### Analytics Changes

![Analytics Change Levels](/img/product_docs/strongpointforsalesforce/change_management/policy_new8.webp)

### Control Changes

![Control Change Levels](/img/product_docs/strongpointforsalesforce/change_management/policy_new9.webp)

Controls the change level required for different types of changes. Health Check Changes affect the way changes are handled for the customization records for each Salesforce Health Check group (session settings, file upload and security settings), so you can track and report on current settings. There is a [Health Settings](/docs/strongpointforsalesforce/customizations/understanding_customization_record.md#health-settings) tab for the specific records on the customization record.

### Application Configuration Changes (Data)

![Application Configuration Changes (Data)](/img/product_docs/strongpointforsalesforce/change_management/policy_new16.webp)

Set objects and fields that are __Tracked Non-blocking__ or __Tracked Blocking__ to be part of the policy and require a Ticket and an approval.

Refer to [Set Up Data Tracking](/docs/strongpointforsalesforce/change_management/set_up_data_tracking.md) for more information on activating and validating tracked fields.

### Health Check Changes

![Health Check Changes](/img/product_docs/strongpointforsalesforce/change_management/policy_new16_a.webp)

Select the change level for __Health Check Changes__: __None__, __Log Changes Only__, __Change Request__, __Sandbox Development & Testing__, or __Full Software Development Lifecycle__.

### IT Policies

![Set IT Policies](/img/product_docs/strongpointforsalesforce/change_management/policy_new10.webp)

Specify the __Preliminary Approver__. Enter part of the name to see a matching list. For critical changes, you can also set a __Final Approver__. This person must approve all changes affected by the rule.

### Customization Policies

![Customization Policies](/img/product_docs/strongpointforsalesforce/change_management/policy_new12.webp)

__Require Impacted Customization Approval__: select this option to require approval from all impacted Customization owners.

### Management Policies

![Set Management Policies](/img/product_docs/strongpointforsalesforce/change_management/policy_new13.webp)

__Executive Approver__: a business executive who must approve the change.

__Maximum number of Approvals Required__: approval is granted once the specified number of approvals is complete. If this field is blank, all approvers must approve.

__No Order Required__: select this option to allow approvals in any order. If it is not checked, approvals occur in the order specified.

### Change Enablement Defaults

![Change Enablement Defaults](/img/product_docs/strongpointforsalesforce/change_management/policy_new15.webp)

__Merge Approval Lists__: select this option to merge lists when multiple policies apply to a change.

__Sequential Approval Requests__: select this option to send approval emails one at a time as each approver approves the change. If not checked, all approvers receive the approval emails at the same time.

__Non-conforming Customization Alerts__: select this option to alert Customization Owners if there is a non-conforming change to their Customization.

## Related

The __Related__ tab is available once a policy is saved. You can add and view Customizations, Change Logs, Change Requests and view status and history associated with the Policy. Links are available for easy navigation to each item.

Change Logs are created when customizations are added or removed.

![Policy Related tab](/img/product_docs/strongpointforsalesforce/change_management/policy_related_tab.webp)

### Add or Remove Customizations

You can add or remove customizations from the __Related__ tab on the policy. Custom Fields Inherit the CustomObject Policy when added.

- New Custom Fields are automatically added to the parent __CustomObject__ Policy if it exists.
- Existing Custom Fields are added to the parent __CustomObject__ Policy from the Custom Object customization record.
- Change Logs are generated for customization changes.
- Changes are reported in the __Reports__ > __Change Enablement__ > __Change/Approval Policy Changes__.

1. Open the policy and click the __Related__ tab.
2. Click __Add Customizations__.

   ![Add customizations](/img/product_docs/strongpointfornetsuite/change_management/policy_add_customizations.webp)
3. Select a __Metadata Type__ to filter the list.
4. Enter a search term or scroll through the list to locate customizations.
5. Click to select a customization. Use Shift-click or click and drag to select multiple contiguous items or Ctrl-click to select multiple customizations.

   ![Selecting Customizations](/img/product_docs/strongpointforsalesforce/change_management/policy_add_customizations2.webp)
6. Click __Add__ to add the customizations to the __Selected Customizations__ list. For existing customizations, select them in the __Selected Customizations__ and click __Remove__ to take them out of the list.
7. Click __Save__ when complete.

### Select Change Level by Salesforce Type

This feature enables you to easily add customizations to the policy based on Salesforce type. It is available on the __Related__ tab on the policy.

1. Open the policy and click the __Related__ tab.
2. Click __Select Change Level by SF Type__. You can set the policy as the __Default__ and toggle it as __Active__ in the __Policy Details__.

   ![Adding customizations by Salesforce Type](/img/product_docs/strongpointforsalesforce/change_management/policy_change_by_sf_type.webp)
3. Set __Category__ and __Sub-Category__ filters if you want to narrow the list. Sub-categories are not available for all Categories.

   ![Set filters for Salesforce type](/img/product_docs/strongpointforsalesforce/change_management/policy_add_sf_type2.webp)
4. Click to select a __Salesforce Type__ from the __Available Salesforce Type List__. Use Shift-click or click and drag to select multiple contiguous items or Ctrl-click to select multiple types.

   ![Add selections to the Selected Salesforce Type List](/img/product_docs/strongpointforsalesforce/change_management/policy_add_sf_type3.webp)
5. Click the right arrow to add selections to the __Selected Salesforce Type List__. Click the left arrow to remove items from the selected list.
6. Click __Save__ when complete. A confirmation dialog is displayed. Click __OK__ to confirm you want to add all of the customizations from the selected Salesforce types.
