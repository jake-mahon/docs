# Assigning an Employee Role with a Pre-Approved Change Request

## Create a pre-approved Change Request

1. Open **SoD** > **SoD Change Management** > **New SoD Approval**

   ![sod_new_change_request](/img/product_docs/platgovnetsuite/sod/sod_new_change_request.webp)

2. **Enter information in the following fields:**

   - **Name**: Enter a name for the request.
   - **Priority Level**: Select the priority level for the request. Select **New** to add a custom
     level.
   - **Reason for Role or Permission Change** Enter the information supporting the approval
     request.
   - Select one or more of the **Affected Employee(s)**, **Customization (User Role)**, **Proposed
     User Role(s)**, **Proposed Global Permission(s)**, and **Affected Rule(s)**.

3. Click **In Progress** in the status bar to indicate you are working on the request.
4. Click **Preview SoD Violations** to see what violations may occur.
5. **Save** the Change Request.
6. The Approval section is now available. Click **Edit** to add **Additional Approvers** or
   **Approver Notes**. Click **Save** if you make changes. Refer to
   [Create a Change Request](/docs/platgovnetsuite/change-management/working-with-changes/creating-change-requests.md) for more details about
   the status bar.
7. Click **Pending Approval** on the status bar.

   ![sod_new_change_request_pending](/img/product_docs/platgovnetsuite/sod/sod_new_change_request_pending.webp)

## Assign a Non-Compliant Role to an Employee

1. Open **Lists** > **Employees** > **Employees**
2. Select **Edit** by the Affected Employee Name.
3. Open the **Access** tab.
4. Check **Give Access**.
5. On the **Roles** tab, select the **Role**.
6. Click **Add**.
7. Click **Save**.

# Creating an SoD Approval Request

You can create a custom change request form for an SoD Approval Request. Refer to
[Using Custom Change Request Forms](/docs/platgovnetsuite/change-management/working-with-changes/change-request-forms.md) for information on
implementing your custom form.

To create an SoD Approval request:

1. Open **SoD** > **SoD Change Management** > **New SoD Approval**
2. Select the SoD Examption Type. The **Scope** selections are different depending on the type.

   - **Cross Role Exemption** (default) isset on the employee level.
   - **Role Exemption** is set on the role level. With Role based exemptions, you have the option
     to apply to current and/or future employees to streamline onboarding.

3. Select information for **Main**:

   - **Name**: Enter a name for the request.
   - **Priority Level**: Select the priority level for the request. Select **New** to add a custom
     level.
   - **Reason or Compensating Control for SoD Exemption**: Enter the information supporting the
     approval request.

4. Enter information for **Scope**:

   - For **Cross Role Exemption**, select one or more of the **Affected Employee(s)**, **Affected
     Rule(s)** or **Affected Role(s)**.
   - For **Role Exemption**

     - Select one or more of the **Affected Employee(s)** and **Affected Rule(s)**.
     - Select one or more options for applying the exemption. If you choose **Select Current
       Employees**, the **Affected Employee** entry is enabled.

5. Click **In Progress** in the status bar to indicate you are working on the request.
6. **Save** the Change Request.
7. The Approval section is now available. Click **Edit** to add **Additional Approvers** or
   **Approver Notes**. Click **Save** if you make changes. Refer to
   [Create a Change Request](/docs/platgovnetsuite/change-management/working-with-changes/creating-change-requests.md) for more details about
   the status bar.

## Adding Employees to an Approved SoD Exemption

Employees can be added to an Approved and Open SoD Approval request. The **Add Employees to
SoD Exemption** button is available after the request is Approved.

![Add Employees to Approved SoD Exemption](/img/product_docs/platgovnetsuite/sod/sod_add_employee.webp)

1. Click **Add Employees to SoD Exemption**.
2. Select one or more **Affected Employee(s)** to add.

   ![Select Affected Employees](/img/product_docs/platgovnetsuite/sod/sod_add_employee_select.webp)

3. Click **Request Approval**. Approvers must be
   [licensed](/docs/platgovnetsuite/getting-started/requirements-and-licensing.md) Platform Governance for NetSuite users
   and have the correct [role permissions](/docs/platgovnetsuite/installation-and-setup/permissions-and-access.md) if they
   are using a custom (non-Strongpoint) role.  
   A new request is created with **Add to SoD Exemption** prepended to the Name of the original
   request. The new request is set to **Pending Approval**.

   ![New Request created from Add Employee to SoD Exemption button](/img/product_docs/platgovnetsuite/sod/sod_add_employee_new.webp)

When the new Request is approved, the employees are added to the **Open** and **Approved** parent
Change Request and the new Request is **Closed**. If the parent request status has changed, the
status of the new Request is unchanged.

# SoD Notifications

SoD notifications offer a streamlined process for creating change requests and presenting
information to approvers for SoD violations.

1. When a task causes an SoD violation, a dialog box is displayed with an option to request an
   approval.

   ![sod_nonblocking_msg](/img/product_docs/platgovnetsuite/sod/sod_nonblocking_msg.webp)

2. Click **Yes** to begin an Approval.

   ![sod_approve_req_msg](/img/product_docs/platgovnetsuite/sod/sod_approve_req_msg.webp)

3. Add the reason for the approval request. Click **OK**.
4. A confirmation is displayed when the change request is created. You can click the link to view
   the request.
5. Once a change request is generated,Platform Governance for NetSuite sends email to the approvers.
   The email shows the requested change, the SoD violation(s) and links to the change request.

   ![sod_email_msg](/img/product_docs/platgovnetsuite/sod/sod_email_msg.webp)
