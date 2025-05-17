---
sidebar_position: 1311
title: Using Enhanced User Provisioning
---

# Using Enhanced User Provisioning

Access management for onboarding/offboarding and access change is streamlined into a new, efficient *Enhanced User Provisioning* work flow. The new **User Access Change Request** is used to add or remove access, or grant temporary access. You can specify the access by **Affected Employees** or **Affected Roles**. The existing approval process is used.

:::note
The administrator role cannot be automatically provisioned.
:::

The new form is accessed from **Strongpoint** > **Change Management Tools** > **User Provisioning Change Request**.

The **Enhanced User Provisioning** feature is enabled as part of the **Installation Settings**.

:::note
If you choose to continue with the original method, use the Strongpoint > Change Management Tools > ITGC Change Request. When you view the Change Log, you see Change Type is set to User Role Assignment Change instead of User Onboarding.
:::

You can create a custom change request form for User Provisioning. Refer to [Using Custom Change Request Forms](use_custom_cr_forms "Open Using Custom Change Request Forms") for information on implementing your custom form.

## Enable Enhanced User Provisioning

1. Open **Strongpoint** > **Strongpoint Support** > **Installation Settings**.
2. Open the **Change Management** tab.

   ![](../../../../static/images/enus/Content/Resources/Images/enhanced_user_provisioning.png "Enabling Enhanced User Provisioning")
3. Enable **Enhanced User Provisioning**.
4. Enable the **Auto-Provisioning** and **Auto-Role Removal** options to automatically implement the changes when a **User Access Change Request** is **Complete**.
5. When **Enhanced User Provisioning** is enabled, there are new **Access and Setup** controls added to the **Policy Change Controls** tab: **User Offboarding** and **User Onboarding**:

   ![](../../../../static/images/enus/Content/Resources/Images/provisioning_change_controls.png "New provisioning change controls")

## Onboarding Users

1. Open **Strongpoint** > **Change Management Tools** > **User Provisioning Change Request**.

   ![](../../../../static/images/enus/Content/Resources/Images/user_access_change_request.png "New User Access Change Request form")
2. Enter a descriptive **Name** and **Change Overview**.
3. Select **Role Additions** for **Access type**.
4. Enter one or more **Affected Employees**.
5. Enter one or more **Affected Roles**.
6. **Save** the change request.
7. Click **Pending Approval** in the status bar.

Once the request is approved, the roles are automatically added if you enabled **Auto-Provisioning**. The change request status is shown as **Complete**. Otherwise, once the request is approved, you need to manually add the roles and update the status.

A compliant Change Log is generated:

![](../../../../static/images/enus/Content/Resources/Images/provisioning_change_log.png "A compliant change log is created")

The **Values** tab shows the details of the role changes.

## Offboarding Users

1. Open **Strongpoint** > **Change Management Tools** > **User Provisioning Change Request**.
2. Enter a descriptive **Name** and **Change Overview**.
3. Select **Role Reductions** for **Access type**. The Offboarding detail fields are now visible.
4. Check **Inactivate After Removal** if the affected employees should be inactivated. This should only be checked if you are removing all of the employee's roles.
5. Enter one or more **Affected Employees**. The **Get Roles for Affected Employees** button is now visible.

   ![](../../../../static/images/enus/Content/Resources/Images/provisioning_role_reductions.png "Provisioning role reductions")
6. Enter one or more **Affected Roles**. Or, click **Get Roles for Affected Employees** to select from the current roles.

   ![](../../../../static/images/enus/Content/Resources/Images/provisioning_role_reductions_selector.png "Select the roles to remove")
7. Enter an **Offboarding Date** (YYYY-MM-DD) or select a date using the Calendar icon.
8. Enter an **Offboarding Time** (hh:mm am/pm).
9. Select the **Timezone**.
10. **Save** the change request.
11. Click **Pending Approval** in the status bar.

Once the request is approved, the roles are automatically removed at the specified time if you enabled **Auto-Role Removal**. The change request status is shown as **Complete**. Otherwise, once the request is approved, you need to manually remove the roles and update the status.

A compliant Change Log is generated. The **Values** tab shows the details of the role changes.

:::note
If there are more than15 employees or 20 roles, multiple runs are processed. The User Provisioning Error field reports the Change Request is in process until all of the runs are complete.
:::

## Viewing User Provisioning Change Requests

To view the list of all User Access change requests: **Strongpoint** > **Change Management Tools** > **User Provisioning Change Request List**.