---
sidebar_position: 7235
title: Service Account for Active Directory and Exchange
---

# Service Account for Active Directory and Exchange

You must have a service account to connect an identity store to an Active Directory domain. Directory Manager uses the account to access objects in Active Directory. If Microsoft Exchange is configured as the messaging provider for the identity store, you can
also delegate permissions to this account to access Exchange objects.

You can use an existing account, provided it has the required permissions, or you can create a new one. Instructions for both options are discussed in the following sections, although it is recommended that you create a new service account rather
than using an existing account.

NOTE: You must add the service account to the membership of the Local Administrator group of the member server on which Directory Manager is installed.

What do you want to do?

* [Use an Existing Account as a Service Account](#use "Use an Existing Account as a Service Account")
* [Create a New Service Account](#create "Create a New Service Account")
* [SQL Server Account and Database Permissions](#SQL%C2%A0Serv "SQL Server Account and Database Permissions")

## Use an Existing Account as a Service Account

Verify that the account that you want to use as a service account has the following Active Directory and Exchange permissions:

Exchange permissions are required if Microsoft Exchange is configured as the messaging provider for the identity store.

|  |  |
| --- | --- |
| Active Directory | Recommended: **Domain Admins**  Minimum permissions:   * [Grant permissions to create and delete users, contacts, and groups.](#step7 "Grant permissions to create and delete users, contacts, and groups.Scroll down the list of permissions in the Permissions box and select the check boxes for the options shown below:Click OK. The granted permissions appear in the Advanced Security Settings window as shown below: Figure 5: Advanced Security Settings window showing granted permissions") * [Grant permissions to modify users, contacts, and groups.](#step8 "Grant permissions to modify users, contacts, and groups.Click the Add button on the Advanced Security Settings window (Figure 5). The Permission Entry window (Figure 3) is displayed.Click the Select a principal link next to Principal. The Select User, Computer, Service Account, or Group dialog box (Figure 4) is displayed. Type the name of the service account in the Enter the object name to select box and click OK. The Permissions Entry window is displayed.In the Applies to box, select the Descendant Contact objects option and select the Full control check box in the Permissions area. It is as follows: Figure 6: Permission Entry window with the Full Control option selected for the Contact objectClick OK. The granted permissions appear in the Advanced Security Settings window as shown below: Figure 7: Advanced Security Settings window showing Full Control permission on Contact objectsRepeat steps a – d for Descendant Group objects and Descendant User objects on the Permission Entry window. The service account now has permissions to modify users, contacts, and groups. These permissions appear in the Advanced Security Settings window. It is as shown below: Figure 8: Advanced Security Settings window with all required permissions")   See the [Create a New Service Account](#create "Create a New Service Account") topic for instructions on modifying the service account to grant the required permissions. |
| Exchange 2013/2016/2019 | Recipient Management |

## Create a New Service Account

If you do not have a service account, you need to create one. Follow the three sets of instructions in this section to:

1. [Create a Service Account:](#create2 "Create a Service Account:")
2. [Delegate Active Directory Permissions to the New Account:](#delegate "Delegate Active Directory Permissions to the New Account:")
3. [Delegate Exchange Permissions to the New Account:](#exchange "Delegate Exchange Permissions to the New Account:")

   f Exchange is configured as the messaging provider for the identity store)

### Create a Service Account:

1. Select either:

   * **Server Manager** from the Windows Start screen.

     Or
   * **Server Manager** from the Quick Launch toolbar available by default on the Windows taskbar.

     Or
   * **Administrative Tools** from the Windows Start screen.
2. In case of Server Manager selection, select **Tools > Active Directory Users and Computers**.  
   In case of Administrative Tools selection, select the **Active Directory Users and Computers** option in the **Name** column.
3. In the directory tree, select the required container, point to **New**, and then click **User**. The **New User** dialog box is displayed.
4. Enter the required information for the user.

After creating the user, you can click the container to view the newly created user.

### Delegate Active Directory Permissions to the New Account:

In the **Active Directory Users and Computers** console:

1. Select **Advanced Features** from the **View** menu.
2. In the left pane, right-click the domain name or organizational unit and select the **Properties** option. On the Properties window, select the **Security** tab.

   ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/Security tab.png)
3. Click the **Advanced** button; the **Advanced Security Settings** window is displayed.

   ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/AdvSecSettings.png)
4. Click the **Add** button. The **Permission Entry** window is displayed.

   ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/PermissionEntry.png)
5. Click the **Select a principal** link next to **Principal**. The Select User, Computer, Service Account, or Group dialog box is displayed.

   ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/Select User.png)

   Type the name of the service account in the **Enter the object name to select** box. Click **OK**. The **Permissions Entry** window is displayed with all fields enabled (see step 4).
6. In the **Applies to** box, select **This object and all descendant objects**.
7. Grant permissions to create and delete users, contacts, and groups.

   1. Scroll down the list of permissions in the **Permissions** box and select the check boxes for the options shown below:

      ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/permissions list.png)
   2. Click **OK**. The granted permissions appear in the **Advanced Security Settings** window as shown below:

      ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/AdvSecSettingsgrantedpermissions.png)
8. Grant permissions to modify users, contacts, and groups.

   1. Click the **Add** button on the **Advanced Security Settings** window. The **Permission Entry** window is displayed (see step 4).
   2. Click the **Select a principal** link next to Principal. The Select User, Computer, Service Account, or Group dialog box is displayed. Type the name of the service account in the **Enter the object name to select** box and click **OK**. The **Permissions Entry** window is displayed.
   3. In the **Applies to** box, select the **Descendant Contact objects** option and select the **Full control** check box in the *Permissions* area. It is as follows:

      ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/FullControlContact.png)
   4. Click **OK**. The granted permissions appear in the **Advanced Security Settings** window as shown below:

      ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/AdvSecSettingsFullControlContact.png)
   5. Repeat steps a – d for **Descendant Group objects** and **Descendant User objects** on the Permission Entry window.  
      The service account now has permissions to modify users, contacts, and groups. These permissions appear in the **Advanced Security Settings** window. It is as shown below:

      ![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/ServiceAccount/AdvSecSettingsreqpermissions.png)
9. Click **OK**.

### Delegate Exchange Permissions to the New Account:

In addition to Active Directory permissions, the service account also needs access permissions for Exchange, when Exchange is configured as the messaging provider for the identity store.

Instructions for delegating permissions for each supported Exchange Server version are as follows.

**For Exchange Server 2013/2016/2019:**

Launch Exchange Management Shell and type the following command:

```
Add-RoleGroupMember "Recipient Management" -Member domain name\user
```
## SQL Server Account and Database Permissions

See the [Authentication Modes](../SetupAuthentication "Authentication Modes") topic for information about the roles and permissions the SQL server and database accounts must have for [SQL Server Authentication](../SetupAuthentication#SQL_Server_Authentication "SQL Server Authentication") mode and for [Windows Authentication](../SetupAuthentication#Windows_Authentication "Windows Authentication") mode.

**See Also**

* [Create an Identity Store](../../AdminCenter/IdentityStore/Create "Create an Identity Store")
* [Manage an Identity Store](../../AdminCenter/IdentityStore/Manage "Manage an Identity Store")