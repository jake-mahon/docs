# Registration and Permissions Assignment

This section discusses the Directory Manager application registration and permission assignment procedure.

Step 1 – Login to Microsoft Entra Admin Center (https://portal.azure.com/) with a user that is part of the “Global Administrator” role or any role that has rights to register an app, such as the “Application administrator” role. This is required in order to give consent to certain permissions in the application.

Step 2 – In the Microsoft Entra Admin Center, go to Microsoft Entra ID > __App registration__ and click __New registration__.

![App registeration page](/img/product_docs/groupid/groupid/configureentraid/register/app_registeration.webp)

Step 3 – On the __Register an application__ page, specify a name for the app. Select __Supported account types__ as _Accounts in any organizational directory (Any Microsoft Entra ID – Multitenant_). Leave the Redirect URI as is and click __Register__.

![Register an application](/img/product_docs/groupid/groupid/configureentraid/register/register_an_application.webp)

Step 4 – The __Overview__ page is displayed. Copy the Application (client) ID and keep it safe.

![Overview page](/img/product_docs/groupid/groupid/configureentraid/register/app_registeration_overview.webp)

Step 5 – Go to the __Authentication__ node and set it as follows:

![Authenticate node](/img/product_docs/groupid/groupid/configureentraid/register/authenticate_node.webp)

Step 6 – Click __Save__.

Step 7 – Select the __Certificates & secrets__ node in the left pane to uploaded a certificate for secure authentication in Microsoft Entra ID. See the [Generate a certificate](/docs/groupid/groupid/configureentraid/register/modauth.md#generate-a-certificate) section of the [Certificate for Entra ID Authentication ](/docs/groupid/groupid/configureentraid/register/modauth.md)topic for additional information.

![Certificate & secrets page](/img/product_docs/groupid/groupid/configureentraid/register/pfxcertifupload.webp)

Step 8 – To upload the certificate:

1. Select __Upload certificate__.
2. On the Upload certificate page, click browse to browse to the location where you have saved the generated certificate in .cer format.
3. Provide a brief description for the certificate in the __Description__ box.
4. Click Add.

Step 9 – Click __Roles and administrators__ node.

![Roles and Administration page](/img/product_docs/groupid/groupid/configureentraid/register/roles_and_administration.webp)

Step 10 –  On the __All roles__ page, add your registered application to a directory role.

- __Global administrator__: For Global administrator, type global to filter out the Global administrator role. Click __Global administrator__.

  ![All roles page](/img/product_docs/groupid/groupid/configureentraid/register/all_roles.webp)

  Click __Add assignments__. On the Add assignment page, search your application and select it. Click the __Add__ button. The application will be listed on the Assignments page.

  ![Add assignment page](/img/product_docs/groupid/groupid/configureentraid/register/add_assignment.webp)
- For any role other than Global administrator, add the registered application to the following two directory roles:

  - __Exchange administrators__: can manage all aspects of the Exchange product
  - __User administrators__: (User Account Administrator) can manage all aspects of users and groups, including resetting passwords for limited administrators.

    For example, this role does not allow deleting a global administrator. User Account Administrators can change passwords for users, Helpdesk administrators, and other User Account Administrators only.

    NOTE: By default, the Directory Manager Administrator security role in a Microsoft Entra IDidentity store binds to Global Administrator. If minimum role assignment for the service account is used, the default Admin Security role criteria should also be changed to the _User Account Administrators_ group.

Step 11 – Click __Add__.

Step 12 – Go to the __API permissions__ node and select __Add a permission__.

![API Permission page](/img/product_docs/groupid/groupid/configureentraid/register/add_a_permission.webp)

Step 13 – The Request API permissions page opens. Click the __Microsoft Graph__ API tab.

![Request API permissions page](/img/product_docs/groupid/groupid/configureentraid/register/request_api_permissions.webp)

Step 14 – Click the __Application permissions__ tab:

![Application permissions tab](/img/product_docs/groupid/groupid/configureentraid/register/application_permission.webp)

Permissions get listed on the page. See the [Microsoft Entra ID Permissions](/docs/groupid/groupid/configureentraid/register/apppermissions.md) topic for the mandatory permissions that are required for creating the desired directory object.

Step 15 – [Optional] To add a permission from Office 365 Exchange Online API, click the __Add a permission__ button (before the Grant admin consent for `username` button in the snapshot given in point # 14.

Follow the steps shown on the following snapshot:

![Office 365 Exchange Online API](/img/product_docs/groupid/groupid/configureentraid/register/office365_permission.webp)

Step 16 – [Optional] To access the SharePoint API for Entitlement management, click the __Add a permission__ button (before the Grant admin consent for `username` button in the snapshot given in point # 14). Select the SharePoint API:

![SharePoint API card](/img/product_docs/groupid/groupid/configureentraid/register/sharepoint_api_card.webp)

Step 17 – Select the __Delegated permissions__ tab:

![SharePoint Delegated permissions](/img/product_docs/groupid/groupid/configureentraid/register/sharepoint_delegated_permissions.webp)

See [SharePoint Delegated Permissions](/docs/groupid/groupid/configureentraid/register/apppermissions.md#sharepoint-delegated-permissions) section of the [Microsoft Entra ID Permissions](/docs/groupid/groupid/configureentraid/register/apppermissions.md) topic for the required permission name.

This completes the registration process of Directory Manager in Microsoft Entra ID.
