---
id: assigning-management-roles
title: 'Assigning Management Roles'
pagination_label: 'Assigning Management Roles'
sidebar_label: 'Assigning Management Roles'
sidebar_position: 66
description: 'Learn how to assign required management roles to accounts for Exchange data collection.'
---

# Assigning Management Roles

Perform this procedure only if the account selected for data collection is not a member of the
**Organization Management** or the **Records Management** group.

1. On the computer where Microsoft Exchange 2019, 2016, 2013 or 2010 is installed, open the
   **Exchange Management Shell** under an account that belongs to the **Organization Management**
   group.
2. Use the following syntax to assign the required management role to a user:

   `New-ManagementRoleAssignment -Name <assignment name> -User <UserName> -Role <role name>`

   For example:

   `New-ManagementRoleAssignment -Name "AuditLogsNetwrixRole" -User Corp\jsmith -Role "Audit Logs"`

   In this example, the user CORP\jsmith has been assigned the **Audit Logs** role.

---

id: define-log-on-as-a-batch-job-policy
title: "Define Log On As a Batch Job Policy"
pagination_label: "Define Log On As a Batch Job Policy"
sidebar_label: "Define Log On As a Batch Job Policy"
sidebar_position: 67
description: "Learn how to configure Log On As a Batch Job policy for Data Processing Account access."

---

# Define Log On As a Batch Job Policy

During the source addition, the Log on as a batch job policy is automatically defined for the Data
Processing Account as a local security policy. However, if you have the Deny log on as a batch job
policy defined locally or on the domain level, the local Log on as a batch job policy will be reset.
In this case, redefine the Deny log on as a batch job policy through the Local Security Policy
console on your computer or on the domain level through the Group Policy Management console.

You can configure this policy via the **Local Security Policy** snap-in or using the Group Policy
Management console.

## To configure the Log On As a Batch Job policy via the **Local Security Policy** snap-in

**Step 1 –** On any domain controller in the target domain, open the **Local Security Policy**
snap-in: navigate to Start →Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012) and select Local Security Policy.

**Step 2 –** Navigate to **Security Settings → Local Policies → User Rights Assignment** and locate
the **Log on as a batch job** policy.

![manualconfig_ws_logonasbatch](/img/product_docs/1secure/admin/datacollection/activedirectory/manualconfig_ws_logonasbatch.webp)

**Step 3 –** Double-click the **Log on as a batch job** policy, and click **Add User or Group**.
Specify the account that you want to define this policy for.

## To configure the Log On As a Batch Job policy using the Group Policy Management console

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start → Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) → Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` → Domains → `<domain name>` →
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit .

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies → Windows Settings → Security Settings → Local Policies.

**Step 4 –** On the right, double-click the User Rights Assignment policy.

**Step 5 –** Locate the Log on as a batch job policy and double-click it.

**Step 6 –** In the Log on as a batch job Properties dialog, click Add User or Group and specify the
user that you want to define this policy for.

**Step 7 –** Navigate to Start → Run and type "_cmd_". Input the `gpupdate /force` command and press
Enter. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

## **Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

id: granting-permissions-for-deleted-objects-container
title: "Granting Permissions for 'Deleted Objects' Container"
pagination_label: "Granting Permissions for 'Deleted Objects' Container"
sidebar_label: "Granting Permissions for 'Deleted Objects' Container"
sidebar_position: 69
description: "Learn how to grant permissions for the Deleted Objects container for non-Domain Admin data collection accounts."

---

# Granting Permissions for 'Deleted Objects' Container

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

**Step 1 –** Log on to any domain controller in the target domain with a user account that is a
member of the **Domain Admins** group.

**Step 2 –** Navigate to **Start → Run** and type _"cmd"_.

**Step 3 –** Input the following command: `dsacls <deleted_object_dn> /takeownership`

where `deleted_object_dn` is the distinguished name of the deleted directory object.

For example: `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership`

**Step 4 –** To grant permission to view objects in the **Deleted Objects** container to a user or a
group, type the following command:

`dsacls <deleted_object_dn> /G <user_or_group>:<Permissions>`

where `deleted_object_dn` is the distinguished name of the deleted directory object
and` user_or_group` is the user or group for whom the permission applies, and `Permissions` is the
permission to grant.

For example, `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP`

In this example, the user CORP\jsmith has been granted **List Contents** and **Read Property**
permissions for the **Deleted Objects** container in the **corp.local** domain. These permissions
let this user view the contents of the **Deleted Objects** container, but do not let this user make
any changes to objects in this container. These permissions are equivalent to the default
permissions that are granted to the **Domain Admins** group.

---

id: assigning-permission-to-read-the-registry-key
title: "Assigning Permission To Read the Registry Key"
pagination_label: "Assigning Permission To Read the Registry Key"
sidebar_label: "Assigning Permission To Read the Registry Key"
sidebar_position: 70
description: "Learn how to assign registry key read permissions for data collection accounts on domain controllers."

---

# Assigning Permission To Read the Registry Key

This permission is required only if the account selected for data collection is not a member of the
Domain Admins group.

This permission should be assigned on each domain controller in the audited domain, so if your
domain contains multiple domain controllers, it is recommended to assign permissions through Group
Policy.

To assign permissions manually, use the Registry Editor snap-in or the Group Policy Management
console.

## To assign permission via the Registry Editor snap-in

On your target server, open Registry Editor: navigate to Start → Run and type "regedit".

**Step 1 –** In the left pane, navigate to _HKEY_LOCAL_MACHINE\SYSTEM\CurrentControl
Set\Services\EventLog\Security_.

**Step 2 –** Right-click the **Security** node and select **Permissions** from the pop-up menu.

**Step 3 –** Click **Add** and enter the name of the user that you want to grant permissions to.

**Step 4 –** Check **Allow** next to the **Read** permission.

For auditing Logon Activity, you also need to assign the Read permission to the
_HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv_ registry key.

## To assign permission using the Group Policy Management console

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start → Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) → Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` → Domains → `<domain name>` →
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit .

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies → Windows Settings → Security Settings → Registry.

**Step 4 –** Right-click in the pane and select Add Key.

**Step 5 –** Navigate to `HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv` and click OK.

**Step 6 –** Click Add and enter the name of the user that you want to grant permissions to and
press Enter.

**Step 7 –** Check Allow next to the _"Read"_ permission and click OK.

**Step 8 –** In the pop-up window, select Propagate inheritable permissions to all subkeys and click
OK.

**Step 9 –** Repeat the steps 4-8 for keys below:

- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg`;
- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security`.

**Step 10 –** Close Group Policy Management console.

**Step 11 –** Navigate to Start → Run and type "_cmd_". Input the `gpupdate /force` command and
press Enter. The group policy will be updated.

**Step 12 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 13 –** Ensure that new GPO settings were applied to the domain controllers.
