# Approving Policy Changes

1. Open **Strongpoint** > **Change Management Tools** > **Policy Change Approval (Beta)  
   ![policy_approval_new](/img/product_docs/platgovnetsuite/change_management/policy_approval_new.webp)**
2. Enter information into the required **Name**, **Change Overview** and **Policies** fields.
   **Change Type** is preset to **Policy Change Approval**.
3. Click **In Progress** on the status bar.
4. Click **Save**.
5. Review the approvers. Click **Edit** to add or change approvers. An administrator can add
   themselves as an additional approver and set the Approval Status to Approved to immediately
   approve the request. The status bar shows **Approved (Override)**.

   ![change_request_bar_approved_override](/img/product_docs/platgovnetsuite/change_management/change_request_bar_approved_override.webp)

6. Click **Pending Approval** to begin the normal approval process. Approvers must be
   [licensed](/docs/platgovnetsuite/getting-started/requirements-and-licensing.md) Platform Governance for NetSuite users
   and have the correct [role permissions](/docs/platgovnetsuite/installation-and-setup/permissions-and-access.md) if they
   are using a custom (non-Strongpoint) role.
7. Approvers can use the link in the email notification to **Approve** or **Reject** the Policy
   Change.

   - Rejected changes can be edited and resubmitted. Click **In Progress** (hover over the status
     bar), make your changes, and click **Pending Approval**.
   - Click **Deploy** to deploy approved changes. When finished, click **Complete**.

# Changing or Deactivating Policies

Policy records determine the non compliance level of changes. Given that changes to these records
has a direct impact on the compliance levels, it is important to document and approve any
modifications. You can deactivate or modify policies with an open and approved change request.

This diagram shows the overall process of what happens when you update a policy:

![modifypolicy-cr](/img/product_docs/platgovnetsuite/change_management/modifypolicy-cr.webp)

## Change a Policy

You can modify an existing policy by creating an open and approved change request.

To change an existing policy:

1. Create a new change request.
2. Fill in all mandatory fields including:

- **Change Type**: Policy Change Approval
- **Policies**: Select the policy you want to deactivate.
- Get the Change Request **Approved**.
- Click **Save**
- Make the approved changes to the policy.

## Deactivate a Policy

Policies cannot be deleted; however you can deactivate the policy.

To deactivate a policy:

1. Create a new **change request**.
2. Fill in all mandatory fields including:

- **Change Type**: Policy Change Approval
- **Policies**: Select the policy you want to deactivate.

![deactivatepolicy](/img/product_docs/platgovnetsuite/change_management/deactivatepolicy.webp)3.
Get the Change Request **Approved**. 4. Click **Save** 5. Check the **Inactive** box.

![inactivebox](/img/product_docs/platgovnetsuite/change_management/inactivebox.webp)6.
Click **Save**
