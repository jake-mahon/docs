---
id: permissions
title: Permissions for SQL Server Auditing
---

# Permissions for SQL Server Auditing

  SQL Server logins and authentication method are not supported.

  - Local Administrator rights on the target SQL Server.

## Assign 'System Administrator' Role

**Step 1 –** On the computer where the audited SQL Server instance is installed, navigate to Start > All Programs > Microsoft SQL Server > SQL Server Management Studio.

**Step 2 –** Connect to the SQL Server instance.

**Step 3 –** In the left pane, expand the Security node. Right-click the Logins node and select **New Login** from the pop-up menu. The Login - New window is displayed.

![Login - New window](/img/1secure/configuration/ManualConfig_SSMS_NewLogin2016.png "Login - New window")

**Step 4 –** Click **Search** next to the Login Name box and specify the user you want to assign the sysadmin role.

**Step 5 –** Click the **Server Roles** tab and assign the sysadmin role to the new login.