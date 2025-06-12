# Configure Local Audit Policies

You can choose whether to configure legacy policies as described below or to configure advanced policies. See the [Configure Advanced Audit Policies](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/advancedpolicy.md) topic for more information.

Follow the steps to configure local audit policies.

__Step 1 –__ On the audited server, open the __Local Security Policy__ snap-in: navigate to Start > Windows Administrative Tools__>__Local Security Policy.

__Step 2 –__ Navigate to __Security Settings > Local Policies > Audit Policy__.

| Policy Name | Audit Events |
| --- | --- |
| Audit account management | _"Success"_ |
| Audit object access | _"Success"_ |
| Audit policy change | _"Success"_ |

Local audit policy is configured and can be changed in the same location:

![manualconfig_ws_local_audit_policies2016](/img/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/manualconfig_ws_local_audit_policies2016.png)
