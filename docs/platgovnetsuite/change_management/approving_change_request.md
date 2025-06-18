# Approving a Change Request

Approvers are populated from the Change/Approval Policy for the Change Request. Approval
notifications are sent when the Change Request owner advances the status to **Pending Approval**.
Approvers must be [licensed](/docs/platgovnetsuite/installing_strongpoint/license_manager.md) Platform Governance for
NetSuite users and have the correct
[role permissions](/docs/platgovnetsuite/installing_strongpoint/setting_permissions.md) if they are using a custom
(non-Strongpoint) role.

![change_request_approving_change_request](/img/product_docs/platgovnetsuite/change_management/change_request_approving_change_request.webp)

1. Approver receives an email with a link to the Change Request.
2. When the Change Request opens, **Approve** and **Reject** buttons are available at the top of the
   form:

    - If all approvers approve the Change Request, the status is changed to **Approved** or
      **Approved (Override)** if an administrator approved it. Implement the changes specified by
      the Change Request.
    - If an approver rejects the Change Request, the status is changed to **Rejected**. You can
      return the Change Request to **In Progress**, edit it, and reset it to **Pending Approval** if
      there are errors or omissions.

3. Change Request owner
   [Completes and Validates the Change Request](/docs/platgovnetsuite/change_management/completing_validating_change_request.md).

Administrators can approve a Change Request. The status is set to **Approved (Override)** and the
administrator's name is displayed in the **Approval Override By** field.

Once the Change Request is approved, you cannot change the customizations attached to the Change
Request.
