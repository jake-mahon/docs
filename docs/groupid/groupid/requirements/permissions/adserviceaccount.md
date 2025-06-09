# Service Account for Active Directory and Exchange

You must have a service account to connect an identity store to an Active Directory domain. Directory Manager uses the account to access objects in Active Directory. If Microsoft Exchange is configured as the messaging provider for the identity store, you can
also delegate permissions to this account to access Exchange objects.

You can use an existing account, provided it has the required permissions, or you can create a new one. Instructions for both options are discussed in the following sections, although it is recommended that you create a new service account rather
than using an existing account.

NOTE: You must add the service account to the membership of the Local Administrator group of the member server on which Directory Manager is installed.

What do you want to do?

- [Use an Existing Account as a Service Account](#Use-an-Existing-Account-as-a-Service-Account)
- [Create a New Service Account](#Create-a-New-Service-Account)
- [SQL Server Account and Database Permissions ](#SQLServer-Account-and-Database-Permissions)

## Use an Existing Account as a Service Account

Verify that the account that you want to use as a service account has the following Active Directory and Exchange permissions:

Exchange permissions are required if Microsoft Exchange is configured as the messaging provider for the identity store.

|  |  |
| --- | --- |
| Active Directory | Recommended: __Domain Admins__  Minimum permissions:   - [Grant permissions to create and delete users, contacts, and groups.](#Grant-permissions-to-create-and-delete-users-contacts-and-groups) - [Grant permissions to modify users, contacts, and groups.](#Grant-permissions-to-modify-users-contacts-and-groups)   See the [Create a New Service Account](#Create-a-New-Service-Account) topic for instructions on modifying the service account to grant the required permissions. |
| Exchange 2013/2016/2019 | Recipient Management |

## Create a New Service Account

If you do not have a service account, you need to create one. Follow the three sets of instructions in this section to:

1. [Create a Service Account:](#Create-a-Service-Account)
2. [Delegate Active Directory Permissions to the New Account:](#Delegate-Active-Directory-Permissions-to-the-New-Account)
3. [Delegate Exchange Permissions to the New Account:](#Delegate-Exchange-Permissions-to-the-New-Account)

   f Exchange is configured as the messaging provider for the identity store)

### Create a Service Account:

1. Select either:

   - __Server Manager__ from the Windows Start screen.

     Or
   - __Server Manager__ from the Quick Launch toolbar available by default on the Windows taskbar.

     Or
   - __Administrative Tools__ from the Windows Start screen.
2. In case of Server Manager selection, select __Tools > Active Directory Users and Computers__.  
   In case of Administrative Tools selection, select the __Active Directory Users and Computers__ option in the __Name__ column.
3. In the directory tree, select the required container, point to __New__, and then click __User__. The __New User__ dialog box is displayed.
4. Enter the required information for the user.

After creating the user, you can click the container to view the newly created user.

### Delegate Active Directory Permissions to the New Account:

In the __Active Directory Users and Computers__ console:

1. Select __Advanced Features__ from the __View__ menu.
2. In the left pane, right-click the domain name or organizational unit and select the __Properties__ option. On the Properties window, select the __Security__ tab.

   ![security_tab](/img/product_docs/groupid/groupid/requirements/permissions/security_tab.png)
3. Click the __Advanced__ button; the __Advanced Security Settings__ window is displayed.

   ![advsecsettings](/img/product_docs/groupid/groupid/requirements/permissions/advsecsettings.png)
4. Click the __Add__ button. The __Permission Entry__ window is displayed.

   ![permissionentry](/img/product_docs/groupid/groupid/requirements/permissions/permissionentry.png)
5. Click the __Select a principal__ link next to __Principal__. The Select User, Computer, Service Account, or Group dialog box is displayed.

   ![select_user](/img/product_docs/groupid/groupid/requirements/permissions/select_user.png)

   Type the name of the service account in the __Enter the object name to select__ box. Click __OK__. The __Permissions Entry__ window is displayed with all fields enabled (see step 4).
6. In the __Applies to__ box, select __This object and all descendant objects__.
7. Grant permissions to create and delete users, contacts, and groups.

   1. Scroll down the list of permissions in the __Permissions__ box and select the check boxes for the options shown below:

      ![permissions_list](/img/product_docs/groupid/groupid/requirements/permissions/permissions_list.png)
   2. Click __OK__. The granted permissions appear in the __Advanced Security Settings__ window as shown below:

      ![advsecsettingsgrantedpermissions](/img/product_docs/groupid/groupid/requirements/permissions/advsecsettingsgrantedpermissions.png)
8. Grant permissions to modify users, contacts, and groups.

   1. Click the __Add__ button on the __Advanced Security Settings__ window. The __Permission Entry__ window is displayed (see step 4).
   2. Click the __Select a principal__ link next to Principal. The Select User, Computer, Service Account, or Group dialog box is displayed. Type the name of the service account in the __Enter the object name to select__ box and click __OK__. The __Permissions Entry__ window is displayed.
   3. In the __Applies to__ box, select the __Descendant Contact objects__ option and select the __Full control__ check box in the _Permissions_ area. It is as follows:

      ![fullcontrolcontact](/img/product_docs/groupid/groupid/requirements/permissions/fullcontrolcontact.png)
   4. Click __OK__. The granted permissions appear in the __Advanced Security Settings__ window as shown below:

      ![advsecsettingsfullcontrolcontact](/img/product_docs/groupid/groupid/requirements/permissions/advsecsettingsfullcontrolcontact.png)
   5. Repeat steps a – d for __Descendant Group objects__ and __Descendant User objects__ on the Permission Entry window.  
      The service account now has permissions to modify users, contacts, and groups. These permissions appear in the __Advanced Security Settings__ window. It is as shown below:

      ![advsecsettingsreqpermissions](/img/product_docs/groupid/groupid/requirements/permissions/advsecsettingsreqpermissions.png)
9. Click __OK__.

### Delegate Exchange Permissions to the New Account:

In addition to Active Directory permissions, the service account also needs access permissions for Exchange, when Exchange is configured as the messaging provider for the identity store.

Instructions for delegating permissions for each supported Exchange Server version are as follows.

__For Exchange Server 2013/2016/2019:__

Launch Exchange Management Shell and type the following command:

```
Add-RoleGroupMember "Recipient Management" -Member domain name\user
```

## SQL Server Account and Database Permissions

See the [Authentication Modes](/docs/groupid/groupid/requirements/setupauthentication.md) topic for information about the roles and permissions the SQL server and database accounts must have for [SQL Server Authentication](/docs/groupid/groupid/requirements/setupauthentication.md#SQL-Server-Authentication) mode and for [Windows Authentication](/docs/groupid/groupid/requirements/setupauthentication.md#Windows-Authentication) mode.

__See Also__

- [Create an Identity Store](/docs/groupid/groupid/admincenter/identitystore/create.md)
- [Manage an Identity Store](/docs/groupid/groupid/admincenter/identitystore/manage.md)
