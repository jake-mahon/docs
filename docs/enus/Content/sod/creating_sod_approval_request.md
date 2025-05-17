---
sidebar_position: 1381
title: Creating an SoD Approval Request
---

# Creating an SoD Approval Request

You can create a custom change request form for an SoD Approval Request. Refer to [Using Custom Change Request Forms](../change_management/use_custom_cr_forms "Open Using Custom Change Request Forms") for information on implementing your custom form.

To create an SoD Approval request:

1. Open **SoD** > **SoD Change Management** > **New SoD Approval**
2. Select the SoD Examption Type. The **Scope** selections are different depending on the type.

   * **Cross Role Exemption** (default) isset on the employee level.
   * **Role Exemption** is set on the role level. With Role based exemptions, you have the option to apply to current and/or future employees to streamline onboarding.
3. Select information for **Main**:

   * **Name**: Enter a name for the request.
   * **Priority Level**: Select the priority level for the request. Select **New** to add a custom level.
   * **Reason or Compensating Control for SoD Exemption**: Enter the information supporting the approval request.
4. Enter information for **Scope**:

   * For **Cross Role Exemption**, select one or more of the **Affected Employee(s)**, **Affected Rule(s)** or **Affected Role(s)**.
   * For **Role Exemption**

     * Select one or more of the **Affected Employee(s)** and **Affected Rule(s)**.
     * Select one or more options for applying the exemption. If you choose **Select Current Employees**, the **Affected Employee** entry is enabled.
5. Click **In Progress** in the status bar to indicate you are working on the request.
6. **Save** the Change Request.
7. The Approval section is now available. Click **Edit** to add **Additional Approvers** or **Approver Notes**. Click **Save** if you make changes. Refer to [Create a Change Request](../change_management/creating_change_request "Create a Change Request") for more details about the status bar.

## Adding Employees to an Approved SoD Exemption

Employees can be added to an Approved and Open SoD Approval request. The **Add Employees to SoD Exemption** button is available after the request is Approved.

![](../../../../static/images/enus/Content/Resources/Images/SoD_add_employee.png "Add Employees to Approved SoD Exemption")

1. Click **Add Employees to SoD Exemption**.
2. Select one or more **Affected Employee(s)** to add.

   ![](../../../../static/images/enus/Content/Resources/Images/SoD_add_employee_select.png "Select Affected Employees")
3. Click **Request Approval**. Approvers must be [licensed](../installing_strongpoint/license_manager "Open the License Manager topic") Platform Governance for NetSuite users and have the correct [role permissions](../installing_strongpoint/setting_permissions "Open the Setting Role Permissions topic") if they are using a custom (non-Strongpoint) role.  
   A new request is created with **Add to SoD Exemption** prepended to the Name of the original request. The new request is set to **Pending Approval**.

   ![](../../../../static/images/enus/Content/Resources/Images/SoD_add_employee_new.png "New Request created from Add Employee to SoD Exemption button")

When the new Request is approved, the employees are added to the **Open** and **Approved** parent Change Request and the new Request is **Closed**. If the parent request status has changed, the status of the new Request is unchanged.