---
id: auditlogsrole
title: '[anchor:kanchor5]Assigning Management Roles'
---

Assigning Management Roles

# <span id="kanchor5"></span>Assigning Management Roles

2. Use the following syntax to assign the required management role to a user:

   `New-ManagementRoleAssignment -Name  -User  -Role `

   For example:

   `New-ManagementRoleAssignment -Name "AuditLogsNetwrixRole" -User Corp\jsmith -Role "Audit Logs"`

   In this example, the user CORP\jsmith has been assigned the **Audit Logs** role.