# Approving a Change Request

Approvers are populated from the Change/Approval Policy for the Change Request. Approval
notifications are sent when the Change Request owner advances the status to **Pending Approval**.
Approvers must be [licensed](/docs/platgovnetsuite/getting-started/requirements-and-licensing.md) Platform Governance for
NetSuite users and have the correct
[role permissions](/docs/platgovnetsuite/installation-and-setup/permissions-and-access.md) if they are using a custom
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
   [Completes and Validates the Change Request](/docs/platgovnetsuite/change-management/working-with-changes/validating-changes.md).

Administrators can approve a Change Request. The status is set to **Approved (Override)** and the
administrator's name is displayed in the **Approval Override By** field.

Once the Change Request is approved, you cannot change the customizations attached to the Change
Request.

# Opportunistic Clearance

Many non-compliant change logs are generated due to one or more related objects not being included
in a Change Request. You can set up to automatically clear low risk non-compliant changes that meet
specific criteria. By default, opportunistic clearance is not enabled. To enable it:

1. Open **Strongpoint** > **Strongpoint\_\_**Support** >**Installation Settings\_\_
2. Click **Edit** to open **Configuration and Stats**.
3. Select the **Change Management** tab.
4. Select **Enable Opportunistic Clearance**.

Automatic clearance applies in these cases:

- Deployment or Library Script changes related to an Approved Script Change.
- Field changes related to an Approved Record Change.
- Record changes related to an Approved Field Change.
- Search changes related to an Approved Workflow Change.
- Help or Description text updates. These changes are always compliant. This object change is
  reported in the Change Log as **Documentation Change** for the **Change Type** and the
  **Resolution** set to _Automatically cleared documentation change. Only Help or Description
  changed_. The Change Log is closed.

### Deployment or Library Script Changes related to an Approved Script Change

Deployment or library script changes must meet these rules to be automatically cleared:

- Customization is a deployment or library script with one of the following:
  - Script has an Open Approved Change Request.
  - Main script has an Open Approved Change Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/change-management/policies/setting-up-policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open
Approved CR via related customization [\_**Object Name\* \*\*(**\*ScriptID**_)]\*\*. The \_Object
Name_ and _ScriptID_ are inserted from the original Change Request. The deployment or library script
does not need to be present in any Open Approved Change Request.
[Example Script Use Case](/docs/platgovnetsuite/change-management/examples/script-deployments.md)

### Field Changes related to an Approved Record Change

Field changes must meet these rules to be automatically cleared:

- Customization is a field with one of the following:
  - Field has an Open Approved Change Request
  - Field has no script or workflow dependencies and the parent record has an Open Approved Change
    Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/change-management/policies/setting-up-policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open
Approved CR via related customization [\_**Field Name**\_]**. The _Field Name_ is inserted from the
original Change Request. The field does not need to be present in any Open Approved Change Request.
[Example Field Change Use Case](/docs/platgovnetsuite/change-management/examples/field-changes.md)

### Record Changes related to an Approved Field Change

Record changes must meet these rules to be automatically cleared:

- Customization is a record with one of the following:
  - Record has an Open Approved Change Request
  - Record has no script **or** workflow dependencies and any field that has the record as a
    parent has an Open Approved Change Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/change-management/policies/setting-up-policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open
Approved CR via related customization [\_**Record Name**\_]**. The _Record Name_ is inserted from
the original Change Request. The record does not need to be present in any Open Approved Change
Request. [Example Record Change Use Case](/docs/platgovnetsuite/change-management/examples/record-changes.md)

### Search Changes related to an Approved Workflow Change

Approved Workflow changes must meet these rules to be automatically cleared:

- Customization is a search with an Open Approved Change Request, or **all** of the following:
  - Search is used in a workflow.
  - Search is not used by any script.
  - Related Workflow has an Open Approved Change Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/change-management/policies/setting-up-policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open
Approved CR via related customization** **[\_**Search Name**\_]**. The _Search Name_ is inserted
from the original Change Request.The search does not need to be present in any Open Approved Change
Request.[ Example Search Change Use Case](/docs/platgovnetsuite/change-management/examples/search-changes.md)
