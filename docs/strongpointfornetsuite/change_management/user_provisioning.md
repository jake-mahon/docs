# Using Enhanced User Provisioning

Access management for onboarding/offboarding and access change is streamlined into a new, efficient _Enhanced User Provisioning_ work flow. The new __User Access Change Request__ is used to add or remove access, or grant temporary access. You can specify the access by __Affected Employees__ or __Affected Roles__. The existing approval process is used.

The __administrator__ role cannot be automatically provisioned.

The new form is accessed from __Strongpoint__ > __Change Management Tools__ > __User Provisioning Change Request__.

The __Enhanced User Provisioning__ feature is enabled as part of the __Installation Settings__.

If you choose to continue with the original method, use the __Strongpoint__ > __Change Management Tools__ > __ITGC Change Request__. When you view the Change Log, you see __Change Type__ is set to __User Role Assignment Change__ instead of __User Onboarding__.

You can create a custom change request form for User Provisioning. Refer to [Using Custom Change Request Forms](/docs/product_docs/strongpointfornetsuite/change_management/use_custom_cr_forms.md) for information on implementing your custom form.

## Enable Enhanced User Provisioning

1. Open __Strongpoint__ > __Strongpoint Support__ > __Installation Settings__.
2. Open the __Change Management__ tab.

   ![Enabling Enhanced User Provisioning](/static/img/product_docs/strongpointfornetsuite/change_management/enhanced_user_provisioning.png)
3. Enable __Enhanced User Provisioning__.
4. Enable the __Auto-Provisioning__ and __Auto-Role Removal__ options to automatically implement the changes when a __User Access Change Request__ is __Complete__.
5. When __Enhanced User Provisioning__ is enabled, there are new __Access and Setup__ controls added to the __Policy Change Controls__ tab: __User Offboarding__ and __User Onboarding__:

   ![New provisioning change controls](/static/img/product_docs/strongpointfornetsuite/change_management/provisioning_change_controls.png)

## Onboarding Users

1. Open __Strongpoint__ > __Change Management Tools__ > __User Provisioning Change Request__.

   ![New User Access Change Request form](/static/img/product_docs/strongpointfornetsuite/change_management/user_access_change_request.png)
2. Enter a descriptive __Name__ and __Change Overview__.
3. Select __Role Additions__ for __Access type__.
4. Enter one or more __Affected Employees__.
5. Enter one or more __Affected Roles__.
6. __Save__ the change request.
7. Click __Pending Approval__ in the status bar.

Once the request is approved, the roles are automatically added if you enabled __Auto-Provisioning__. The change request status is shown as __Complete__. Otherwise, once the request is approved, you need to manually add the roles and update the status.

A compliant Change Log is generated:

![A compliant change log is created](/static/img/product_docs/strongpointfornetsuite/change_management/provisioning_change_log.png)

The __Values__ tab shows the details of the role changes.

## Offboarding Users

1. Open __Strongpoint__ > __Change Management Tools__ > __User Provisioning Change Request__.
2. Enter a descriptive __Name__ and __Change Overview__.
3. Select __Role Reductions__ for __Access type__. The Offboarding detail fields are now visible.
4. Check __Inactivate After Removal__ if the affected employees should be inactivated. This should only be checked if you are removing all of the employee's roles.
5. Enter one or more __Affected Employees__. The __Get Roles for Affected Employees__ button is now visible.

   ![Provisioning role reductions](/static/img/product_docs/strongpointfornetsuite/change_management/provisioning_role_reductions.png)
6. Enter one or more __Affected Roles__. Or, click __Get Roles for Affected Employees__ to select from the current roles.

   ![Select the roles to remove](/static/img/product_docs/strongpointfornetsuite/change_management/provisioning_role_reductions_selector.png)
7. Enter an __Offboarding Date__ (YYYY-MM-DD) or select a date using the Calendar icon.
8. Enter an __Offboarding Time__ (hh:mm am/pm).
9. Select the __Timezone__.
10. __Save__ the change request.
11. Click __Pending Approval__ in the status bar.

Once the request is approved, the roles are automatically removed at the specified time if you enabled __Auto-Role Removal__. The change request status is shown as __Complete__. Otherwise, once the request is approved, you need to manually remove the roles and update the status.

A compliant Change Log is generated. The __Values__ tab shows the details of the role changes.

If there are more than15 employees or 20 roles, multiple runs are processed. The __User Provisioning Error__ field reports the Change Request is in process until all of the runs are complete.

## Viewing User Provisioning Change Requests

To view the list of all User Access change requests: __Strongpoint__ > __Change Management Tools__ > __User Provisioning Change Request List__.
