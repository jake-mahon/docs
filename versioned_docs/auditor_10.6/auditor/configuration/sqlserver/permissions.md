# Permissions for SQL Server Auditing

Before you start creating a monitoring plan to audit your SQL Server, plan for the account that will be used for data collection – it should meet the requirements listed below. Then you will provide this account in the monitoring plan wizard.

Starting with version 9.96, you can use group Managed Service Accounts (gMSA) as data collecting accounts.

__On the target SQL Server:__

1. To access SQL Server, Windows authentication will be used, so data collection account should be a Windows account specified in the _domain\user_ format (_domain\user$_ for Managed Service Account).   
   SQL Server logins and authentication method are not supported.
2. The account must be assigned the __System Administrator__ server role for this SQL Server. See [Assigning 'System Administrator' Role](#assigning-system-administrator-role) section for more information.
3. For auditing SQL Server availability on groups, the account must have the sysadmin server role granted on each server added to an availability group.
4. If you plan to collect state-in-time data from SQL Server, in addition to requirements above the account will also need:
   - Local __Administrator__ rights on the target SQL Server.
   - If SQL Server is included in the Active Directory domain, the account should also be included in that domain.

## Assigning 'System Administrator' Role

1. On the computer where audited SQL Server instance is installed, navigate to __Start → All Programs → Microsoft SQL Server → SQL Server Management Studio__.
2. Connect to the SQL Server instance.
3. In the left pane, expand the __Security__ node. Right-click the __Logins__ node and select __New Login__ from the pop-up menu.

   ![manualconfig_ssms_newlogin2016](/img/versioned_docs/auditor_10.6/auditor/configuration/sqlserver/manualconfig_ssms_newlogin2016.png)
4. Click __Search__ next to __Login Name__ and specify the user that you want to assign the __sysadmin__ role to.
5. Specify the __Server roles__ tab and assign the __sysadmin__ role to the new login.
