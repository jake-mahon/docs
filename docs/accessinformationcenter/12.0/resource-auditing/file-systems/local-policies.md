# Local Policies Level Reports

Local policies have an impact on effective access. There are no reports at the **Local Policies**
node, but the following reports are available at the local policy level:

- [Effective Policy Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/local-policies.md)
- [Policy Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/local-policies.md)

# Effective Policy Report

The Effective Policy report at the local policy level provides a list of users and groups who are
effectively granted or denied access through the selected policy.

![Effective Policy report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/localpolicies/effectivepolicy.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- ObjectSid – Security ID of the object
- Policy – Allow or Deny access

If the selected trustee is a group, the Group Membership pane will display the group membership,
including nested groups.

# Policy Report

The Policy report at the local policy level provides a list of policies assigned for the selected
local policy.

![Policy report](/img/product_docs/threatprevention/threatprevention/admin/configuration/databasemaintenance/policy.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- ObjectSid – Security ID of the object
- Policy – Allow or Deny access

If the selected trustee is a group, the Group Membership pane will display the group membership,
including nested groups.
