# Configure Local Audit Policies

You can choose to configure local audit policies or advanced audit policies.See the [Configure Advanced Audit Policies](/docs/auditor/auditor/configuration/fileservers/windows/advancedpolicy.md) topic for more information.

Follow the steps to configure local audit policies.

__Step 1 –__ On the audited server, open the Local Security Policy snap-in: navigate to Start > Windows Administrative Tools > Local Security Policy.

__Step 2 –__ Navigate to Security Settings > Local Policies > Audit Policy.

__Step 3 –__ Configure the following audit policies.

| Policy Name | Audit Events |
| --- | --- |
| Audit account management | "Success" |
| Audit object access | "Success" |
| Audit policy change | "Success" |

Local audit policy is configured.

![Local Security Policy snap-in](/img/product_docs/1secure/configuration/computer/manualconfig_ws_local_audit_policies2016.webp)
