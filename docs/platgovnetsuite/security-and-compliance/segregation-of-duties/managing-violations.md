# Creating an Approved Change Request to Clear a Violation

## Assign a Non-Compliant Role to an Employee

Make sure the SoD Rule that it will violate is **Non-Blocking**. This way the employee record can be
saved even if it is a non-compliant role.

To assign a non-compliant role to an employee:

1. Open **Lists** > **Employees** > **Employees**
2. Click **Edit** for the affected employee.
3. Assign the **non-compliant role**.
4. Click **Save**.

This creates a SoD Violation Log.

## Create an Approved Change Request - New Method

To create an approved change request:

1. Open **SoD** > **SoD Change Management** > **New SoD Approval**
2. Enter information in the following fields:

   - **Name**: Enter a name for the request.
   - **Priority Level**: Select the priority level for the request. Select **New** to add a custom
     level.
   - **Reason for Role or Permission Change**: Enter the information supporting the approval
     request.
   - Select one or more of the **Affected Employee(s)**, **Affected Rule(s)** and **Affected User
     Role(s)**.

3. Click **In Progress** in the status bar to indicate you are working on the request.
4. **Save** the Change Request.
5. The Approval section is now available. Click **Edit** to add **Additional Approvers** or
   **Approver Notes**. Click **Save** if you make changes. Refer to
   [Create a Change Request](/docs/platgovnetsuite/change-management/working-with-changes/creating-change-requests.md) for more details about
   the status bar.

The violation clears in the employee record after the approved Change Request is saved.

## Create an Approved Change Request - Old Method

To create an approved change request:

1. Open **Strongpoint** > **Change Management Tools** > **Change Request** > **New**
2. Add the following required fields for pre-approval:

   - **Name**: Enter a name for the request.
   - **Change Type**: **SoD Approval**
   - **Completion Status**: **In Progress**
   - **Change Overview**: Enter a description for the change
   - **Customization**: Select the non-compliant role you want to assign to an employee.
   - **Approval Status**: **Approved**

3. Under the **SoD** tab:

   - Select the **Affected Employee**
   - Set the **Completion Status** to **NOT Completed**

4. Click **Save**.

The violation clears in the employee record after the approved Change Request is saved.

# SoD Clean Up

The new **SoD** > **SoD Clean Up** menu accesses the power of Saved Searches to enable easy,
efficient clean up of your roles. Many NetSuite accounts are littered with unused roles and role
assignments. Eliminating this clutter reduces the violations you encounter, and makes it easier to
see exactly what is going on in your accounts.

Platform Governance for NetSuite automatically removes employees from SoD Approval requests if one
of these conditions occur:

- NetSuite access is removed
- Applicable role(s) are removed
- Employee is In-activatated

Netwrix recommends performing SoD testing and role clean up in a sandbox account. This lays the
groundwork for a smooth transition to production with minimal compliance incidents to review.

Saved Searches are:

- **Employees with Standard Roles** identifies all employees assigned to standard roles.
- **Employees with Unused Logins** identifies any employees who have not logged in.
- **Employee Permission Changes** identifies all employee permission changes that have occurred.
- **Unused Roles - Not Assigned** identifies roles not assigned to any user.
- **Unused Roles - Assigned But Not In Use** identifies roles assigned to a user, but never used.
- **Role Assignments with No Login in Six Months** identifies assigned roles where a user has not
  logged in within the past six months.
- **Role Permission Change** identifies all role permission changes that have occurred.
- **Employees with Multiple Roles Detailed** identifies users with multiple roles and lists the
  roles. Multiple roles create conflicts. Users who require multiple roles for support or
  administration can be isolated in a sandbox using Platform Governance for NetSuite to keep the
  sandbox the same as production for troubleshooting and support.
- **Employees with Multiple Roles Summary** identifies users with multiple roles.
- **Current Global Permission** identifies users with global permissions, which can cause conflicts.
  Best practice is to not use global permissions on a long-term basis.
