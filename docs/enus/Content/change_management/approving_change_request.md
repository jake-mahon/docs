---
sidebar_position: 1326
title: Approving a Change Request
---

# Approving a Change Request

Approvers are populated from the Change/Approval Policy for the Change Request. Approval notifications are sent when the Change Request owner advances the status to **Pending Approval**. Approvers must be [licensed](../installing_strongpoint/license_manager "Open the License Manager topic") Platform Governance for NetSuite users and have the correct [role permissions](../installing_strongpoint/setting_permissions "Open the Setting Role Permissions topic") if they are using a custom (non-Strongpoint) role.

![](../../../../static/images/enus/Content/Resources/Images/change_request_approving_change_request.png)

1. Approver receives an email with a link to the Change Request.
2. When the Change Request opens, **Approve** and **Reject** buttons are available at the top of the form:

   * If all approvers approve the Change Request, the status is changed to **Approved** or **Approved (Override)** if an administrator approved it. Implement the changes specified by the Change Request.
   * If an approver rejects the Change Request, the status is changed to **Rejected**. You can return the Change Request to **In Progress**, edit it, and reset it to **Pending Approval** if there are errors or omissions.
3. Change Request owner [Completes and Validates the Change Request](completing_validating_change_request "Open the Completing and Validating the Change Request topic").

:::note
Administrators can approve a Change Request. The status is set to Approved (Override) and the administrator's name is displayed in the Approval Override By field.
:::

:::note
Once the Change Request is approved, you cannot change the customizations attached to the Change Request.
:::