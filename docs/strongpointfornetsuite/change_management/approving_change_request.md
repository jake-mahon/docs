# Approving a Change Request

Approvers are populated from the Change/Approval Policy for the Change Request. Approval notifications are sent when the Change Request owner advances the status to __Pending Approval__. Approvers must be [licensed](/docs/product_docs/strongpointfornetsuite/installing_strongpoint/license_manager.md) Platform Governance for NetSuite users and have the correct [role permissions](/docs/product_docs/strongpointfornetsuite/installing_strongpoint/setting_permissions.md) if they are using a custom (non-Strongpoint) role.

![change_request_approving_change_request](/static/img/product_docs/strongpointfornetsuite/change_management/change_request_approving_change_request.png)

1. Approver receives an email with a link to the Change Request.
2. When the Change Request opens, __Approve__ and __Reject__ buttons are available at the top of the form:

   - If all approvers approve the Change Request, the status is changed to __Approved__ or __Approved (Override)__ if an administrator approved it. Implement the changes specified by the Change Request.
   - If an approver rejects the Change Request, the status is changed to __Rejected__. You can return the Change Request to __In Progress__, edit it, and reset it to __Pending Approval__ if there are errors or omissions.
3. Change Request owner [Completes and Validates the Change Request](/docs/product_docs/strongpointfornetsuite/change_management/completing_validating_change_request.md).

Administrators can approve a Change Request. The status is set to __Approved (Override)__ and the administrator's name is displayed in the __Approval Override By__ field.

Once the Change Request is approved, you cannot change the customizations attached to the Change Request.
