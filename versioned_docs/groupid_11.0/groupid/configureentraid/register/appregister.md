# Registration and Permissions Assignment

This section discusses the GroupID application registration and permission assignment procedure.

1. Login to Microsoft Entra Admin Center (https://portal.azure.com/) with a user that is part of the “Global Administrator” role or any role that has rights to register an app, such as the “Application administrator” role. This is required in order to give consent to certain permissions in the application.
2. In the Microsoft Entra Admin Center, go to Microsoft Entra ID > App registration and click __New registration__.

   ![App registeration page](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/app_registeration.png)
3. On the __Register an application__ page, specify a name for the app. Select __Supported account types__ as _Accounts in any organizational directory (Any Microsoft Entra ID – Multitenant_). Leave the Redirect URI as is and click __Register__.

   ![Register an application](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/register_an_application.png)
4. The __Overview__ page is displayed. Copy the Application (client) ID and keep it safe.

   ![Overview page](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/app_registeration_overview.png)
5. Go to the __Authentication__ node and set it as follows:

   ![Authenticate node](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/authenticate_node.png)
6. Click __Save__.
7. Click __Roles and administrators__ node.

   ![Roles and Administration page](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/roles_and_administration.png)
8. On the __All roles__ page, add your registered application to a directory role.

   - __Global administrator__: For Global administrator, type global to filter out the Global administrator role. Click __Global administrator__.

     ![All roles page](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/all_roles.png)

     Click __Add assignments__. On the Add assignment page, search your application and select it. Click the __Add__ button. The application will be listed on the Assignments page.

     ![Add assignment page](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/add_assignment.png)
   - For any role other than Global administrator, add the registered application to the following two directory roles:

     - __Exchange administrators__: can manage all aspects of the Exchange product
     - __User administrators__: (User Account Administrator) can manage all aspects of users and groups, including resetting passwords for limited administrators.

       For example, this role does not allow deleting a global administrator. User Account Administrators can change passwords for users, Helpdesk administrators, and other User Account Administrators only.

       NOTE: By default, the GroupID Administrator security role in a Microsoft Entra IDidentity store binds to Global Administrator. If minimum role assignment for the service account is used, the default Admin Security role criteria should also be changed to the _User Account Administrators_ group.
9. Click __Add__.
10. Go to the __API permissions__ node and select __Add a permission__.

    ![API Permission page](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/add_a_permission.png)
11. The Request API permissions page opens. Click the __Microsoft Graph__ API tab.

    ![Request API permissions page](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/request_api_permissions.png)
12. Click the __Application permissions__ tab:

    ![Application permissions tab](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/application_permission.png)

    Permissions get listed on the page. See the [Microsoft Entra ID Permissions](/versioned_docs/groupid_11.0/groupid/configureentraid/register/apppermissions.md) topic for the mandatory permissions that are required for creating the desired directory object.
13. [Optional] To add a permission from Office 365 Exchange Online API, click the __Add a permission__ button (before the Grant admin consent for `<username>` button in the snapshot given in point # 14.

    Follow the steps shown on the following snapshot:

    ![Office 365 Exchange Online API](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/office365_permission.png)
14. [Optional] To access the SharePoint API for Entitlement management, click the __Add a permission__ button (before the Grant admin consent for `<username>` button in the snapshot given in point # 14). Select the SharePoint API:

    ![SharePoint API card](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/sharepoint_api_card.png)
15. Select the Delegated permissions tab:

    ![SharePoint Delegated permissions](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/sharepoint_delegated_permissions.png)

    See [SharePoint Delegated Permissions](/versioned_docs/groupid_11.0/groupid/configureentraid/register/apppermissions.md#sharepoint-delegated-permissions) section of the [Microsoft Entra ID Permissions](/versioned_docs/groupid_11.0/groupid/configureentraid/register/apppermissions.md) topic for the required permission name.

This completes the registration process of GroupID in Microsoft Entra ID.

See Also

- [Register in Microsoft Entra ID](/versioned_docs/groupid_11.0/groupid/configureentraid/register/overview.md)
