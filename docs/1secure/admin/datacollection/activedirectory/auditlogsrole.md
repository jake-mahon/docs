# Assigning Management Roles

Perform this procedure only if the account selected for data collection is not a member of the __Organization Management__ or the __Records Management__ group.

1. On the computer where Microsoft Exchange 2019, 2016, 2013 or 2010 is installed, open the __Exchange Management Shell__ under an account that belongs to the __Organization Management__ group.
2. Use the following syntax to assign the required management role to a user:

    ```New-ManagementRoleAssignment -Name <assignment name> -User <UserName> -Role <role name>```

   For example:

   ```New-ManagementRoleAssignment -Name "AuditLogsNetwrixRole" -User Corp\jsmith -Role "Audit Logs"```

   In this example, the user CORP\jsmith has been assigned the __Audit Logs__ role.
