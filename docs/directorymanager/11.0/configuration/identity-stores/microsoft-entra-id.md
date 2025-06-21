# Microsoft Entra ID Identity Store

Once you have registered GroupID and created a user with required directory role in Microsoft Entra
ID, you can now create an Microsoft Entra ID identity store in GroupID. This topic walks you through
the steps to create an Microsoft Entra ID identity store and assign a role to the Microsoft Entra ID
user in GroupID.

## To create an Microsoft Entra ID Identity Store

See the
[Create an Identity Store for Microsoft Entra ID](/docs/directorymanager/11.0/configuration/identity-stores/index.md#create-an-identity-store-for-microsoft-entra-id)
topic for creating an Microsoft Entra ID identity store.

NOTE: If you intend to use a service account user with Global Administrator directory role, then no
change is required in the default GroupID security roles settings of Microsoft Entra ID identity
store. And if you intend to use a service account user with any role, other than Global
administrator directory role (i.e. User Administrator + Exchange Administrator), then the GroupID
Administrator security role criteria group must be changed to User Account Administrator.

## GroupID Security Role Setting

If you want to use a service account user with a role other than Global administrator role for
Microsoft Entra ID identity store, you have to assign it _User Account Administrator_ role in
GroupID.

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for Microsoft Entra ID identity store
   and select **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for the administrator security role.
5. On the **Edit Security Role** page, the **Criteria** area displays the role criteria. Click **Add
   Criteria** to change it. On the **Add Criteria** dialog box, delete the existing criteria and
   search for User account administrator. Click **Save**.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Limitations of Minimum Service Account Permissions

If you are using a service account with minimum directory role assignments, the following
limitations apply:

- Only the User role can be assigned to newly created users and mailboxes objects from GroupID. The
  same applies to existing users and mailboxes, as Directory Roles cannot be changed, using a
  service account with minimum directory role assignments.

- The password reset functionality would be limited to objects falling in the User role, User
  Administrator role, and Helpdesk role.

See Also

- [Registration and Permissions Assignment](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)

# Configure in Microsoft Entra ID

In GroupID, you can create an identity store for an identity provider and perform different
functions in that provider using its identity store. These functions include group management tasks,
such as creating groups, scheduling group updates, and expiring groups; user management tasks, such
as creating users and mailboxes, managing users’ profiles, and more.

GroupID supports multiple identity providers for creating an identity store, including Microsoft
Entra ID, formerly Azure Active Directory. This section provides information that will help
configure GroupID in Microsoft Entra ID.

See Also

- [Registration and Permissions Assignment](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)

# Microsoft Entra ID Permissions

While using a Microsoft Entra ID identity store with GroupID, the user must have certain role
assignments and application permissions on the registered app in Microsoft Entra ID.

This topic lists those roles and permissions GroupID needs to perform operations in a Microsoft
Entra ID provider.

See the [ License GroupID](/docs/directorymanager/11.0/administration/admin-center/index.md)
topic for additional information on GroupID licensing.

## Graph API Application Permissions

The following application permissions are required.

![Microsoft Entra ID Application Permissions - Channel](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/channel.webp)

![Microsoft Entra ID Application Permissions - Directory](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/directory.webp)

![Microsoft Entra ID Application Permissions - Group](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/group.webp)

![Microsoft Entra ID Application Permissions - Mail](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/mail.webp)

![Microsoft Entra ID Application Permissions - Mail](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/role.webp)

![Microsoft Entra ID Application Permissions - User](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/user.webp)

![Microsoft Entra ID Application Permissions - User Password and Phone](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/user-pw-phone.webp)

## Office 365 Exchange Online Permissions

![Microsoft Entra ID Office 365 Exchange Online Permissions - ExchangeManageAsApp](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/exchange.webp)

## SharePoint Delegated Permissions

![allsites](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/allsites.webp)

# Registration and Permissions Assignment

This section discusses the GroupID application registration and permission assignment procedure.

1. Login to Microsoft Entra Admin Center (https://portal.azure.com/) with a user that is part of the
   “Global Administrator” role or any role that has rights to register an app, such as the
   “Application administrator” role. This is required in order to give consent to certain
   permissions in the application.
2. In the Microsoft Entra Admin Center, go to Microsoft Entra ID > App registration and click **New
   registration**.

   ![App registeration page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/app_registeration.webp)

3. On the **Register an application** page, specify a name for the app. Select **Supported account
   types** as _Accounts in any organizational directory (Any Microsoft Entra ID – Multitenant_).
   Leave the Redirect URI as is and click **Register**.

   ![Register an application](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/register_an_application.webp)

4. The **Overview** page is displayed. Copy the Application (client) ID and keep it safe.

   ![Overview page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/app_registeration_overview.webp)

5. Go to the **Authentication** node and set it as follows:

   ![Authenticate node](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/authenticate_node.webp)

6. Click **Save**.
7. Click **Roles and administrators** node.

   ![Roles and Administration page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/roles_and_administration.webp)

8. On the **All roles** page, add your registered application to a directory role.

   - **Global administrator**: For Global administrator, type global to filter out the Global
     administrator role. Click **Global administrator**.

     ![All roles page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/all_roles.webp)

     Click **Add assignments**. On the Add assignment page, search your application and select
     it. Click the **Add** button. The application will be listed on the Assignments page.

     ![Add assignment page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/add_assignment.webp)

   - For any role other than Global administrator, add the registered application to the following
     two directory roles:

     - **Exchange administrators**: can manage all aspects of the Exchange product
     - **User administrators**: (User Account Administrator) can manage all aspects of users and
       groups, including resetting passwords for limited administrators.

       For example, this role does not allow deleting a global administrator. User Account
       Administrators can change passwords for users, Helpdesk administrators, and other User
       Account Administrators only.

       NOTE: By default, the GroupID Administrator security role in a Microsoft Entra
       IDidentity store binds to Global Administrator. If minimum role assignment for the
       service account is used, the default Admin Security role criteria should also be changed
       to the _User Account Administrators_ group.

9. Click **Add**.
10. Go to the **API permissions** node and select **Add a permission**.

    ![API Permission page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/add_a_permission.webp)

11. The Request API permissions page opens. Click the **Microsoft Graph** API tab.

    ![Request API permissions page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/request_api_permissions.webp)

12. Click the **Application permissions** tab:

    ![Application permissions tab](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/application_permission.webp)

    Permissions get listed on the page. See the
    [Microsoft Entra ID Permissions](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)
    topic for the mandatory permissions that are required for creating the desired directory object.

13. [Optional] To add a permission from Office 365 Exchange Online API, click the **Add a
    permission** button (before the Grant admin consent for `<username>` button in the snapshot
    given in point # 14.

    Follow the steps shown on the following snapshot:

    ![Office 365 Exchange Online API](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/office365_permission.webp)

14. [Optional] To access the SharePoint API for Entitlement management, click the **Add a
    permission** button (before the Grant admin consent for `<username>` button in the snapshot
    given in point # 14). Select the SharePoint API:

    ![SharePoint API card](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/sharepoint_api_card.webp)

15. Select the Delegated permissions tab:

    ![SharePoint Delegated permissions](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/sharepoint_delegated_permissions.webp)

    See
    [SharePoint Delegated Permissions](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md#sharepoint-delegated-permissions)
    section of the
    [Microsoft Entra ID Permissions](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)
    topic for the required permission name.

This completes the registration process of GroupID in Microsoft Entra ID.

See Also

- [Register in Microsoft Entra ID](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)

# Microsoft Entra ID User

Once your application has been registered with Microsoft Entra ID, formerly Azure Active Directory,
create a user that will be set as a service account while creating an identity store for in
Microsoft Entra ID GroupID.

To create a user in Microsoft Entra ID:

1. In the Microsoft Entra Admin Center, go to Microsoft Entra ID> Users and click **New User** >
   **Create new user**.

   ![create_user](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/create_user.webp)

2. On the **User** page:

   ![create_new_user_page](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/create_new_user_page.webp)

   - The **Basics** tab contains the core fields required to create a new user.

     - **User principal name**: Enter a unique username and select a domain from the menu after
       the @ symbol. Select **Domain not listed** if you need to create a new domain. For more
       information, see
       [Add your custom domain name](https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain).
     - **Mail nickname**: If you need to enter an email nickname that is different from the user
       principal name you entered, uncheck the **Derive from user principal name** option, then
       enter the mail nickname.
     - **Display name**: Enter the user's name.
     - **Password**: Provide a password for the user to use during their initial sign-in. Uncheck
       the **Auto-generate password** option to enter a different password.
     - **Account enabled**: This option is checked by default. Uncheck to prevent the new user
       from being able to sign-in. You can change this setting after the user is created.

     Either select the **Review + create** button to create the new user or **Next: Properties**
     to complete the next section.

   - The **Properties** tab has some categories of user properties you can provide. These
     properties can be added or updated after the user is created. The properties are:

     - **Identity**: Enter the user's first and last name. Set the User type as either Member or
       Guest.
     - **Job information**: Add any job-related information, such as the user's job title,
       department, or manager.
     - **Contact information**: Add any relevant contact information for the user.
     - **Settings**: Specify the user's global location.

     Either select the **Review + create** button to create the new user or **Next: Assignments**
     to complete the next section.

   - The **Assignments** tab. You can assign the user:

     - an administrative unit
     - group(s), select a group if you want to add the user to one or more existing groups
     - role(s), assign the user a Global administrator role  
       Members of this role can create/manage groups, create/manage groups settings like naming
       and expiration policies, and view groups activity and audit reports.

     Select the **Review + create** button.

   By default, the GroupID Administrator security role in a Microsoft Entra ID identity store binds
   to Global Administrator. If minimum role assignment for the service account is used, the default
   Admin Security role criteria should also be changed to the User Account Administrators group.

The user is created and added to your Microsoft Entra ID tenant.

You can now create an identity store for Microsoft Entra ID GroupID.

Make sure you copy the application ID which is generated by Microsoft Entra ID when the application
is registered. This application ID will be required while creating an identity store for Microsoft
Entra ID.

See Also

- [Registration and Permissions Assignment](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)

# Certificate for Modern Authentication

While configuring GroupID application in Microsoft Entra ID you must provide a certificate. You can
generate this certificate using GroupID PowerShell or any other third-party application.

To generate a certificate using GroupID PowerShell:

1. Login to GroupID server and run GroupID PowerShell as an administrator.
2. Run the following command:

   ```
      $mycert = New-SelfSignedCertificate -DnsName "contoso.org" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange
      $mycert | Export-Certificate -FilePath c:\mycert.cer
   ```

   ![GroupID PowerShell Command ](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/modern_auth_command.webp)

   The generated certificate will be saved at the root level of Drive C:.

   In Microsoft Entra Admin Center portal, while configuring the GroupID application, upload this
   certificate using the Certificate & secrets node.

   ![certificates_n_secrets](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/certificates_n_secrets.webp)

   On the **Upload certificate** page:

   1. Click browse to select the generated certificate, mycert.cer, from Drive C.
   2. Provide a brief description for the certificate in the **Description** box.
   3. Click **Add**.

3. After uploading the certificate successfully, Certificate Thumbprint is displayed. Copy it and
   keep it safe.

   ![Generated Thumbprint ](/img/versioned_docs/directorymanager_11.0/directorymanager/configureentraid/register/thumbprint.webp)

   The certificate Thumbprint will be used:

   - While creating a Microsoft Entra ID identity store (on the Identity Store Details page of new
     identity store creation wizard).
   - On the Messaging System page in identity store properties when Exchange Online/Office 365 is
     set as a messaging provider.
   - In Synchronize, in a Synchronize job, when you select AD as destination, and Office 365 as a
     messaging provider on the Sync Object page, you must provide the certificate Thumbprint.

## Verify Modern Authentication

You can test Modern Authentication from GroupID Powershell in your tenant. First, verify that
Exchange Online module is installed on your GroupID server using the following cmdlet:

```
Get-InstallModule -name exchangeonlinemanagement
```

Connect to Exchange Online using the cmdlet shown below and fetch some data:

NOTE: For that you need Certificate Thumbprint and Application ID of the registered app.

```
Connect-ExchangeOnline -certificateThumbprint Thumbprint -AppId App ID -organization organization name
```

To disconnect the Exchange Online session, use the following cmdlet:

```
Disconnect-ExchangeOnline
```

After this verification process, you can use the certificate Thumbprint in GroupID.

See Also

- [Registration and Permissions Assignment](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)

# Register in Microsoft Entra ID

To use Microsoft Entra ID, formerly Azure Active Directory, identity provider, GroupID must first be
registered in Microsoft Entra Admin Center portal. The registration grants GroupID access to a
particular Microsoft Entra ID Directory and its data, such as Microsoft Entra ID groups and users.

GroupID requires:

- An application registered for GroupID in Microsoft Entra ID (with the Microsoft Graph API and
  Exchange API permissions).
- A Microsoft Entra ID Directory Role for the service account for the Microsoft Entra ID identity
  store.

  NOTE: See the
  [All Role](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#all-role)
  section for
  [User Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#user-administrator)
  and
  [Exchange Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#exchange-administrator)
  role permissions in
  [Microsoft Entra built-in roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#microsoft-entra-built-in-roles).

See Also

- [Registration and Permissions Assignment](/docs/directorymanager/11.0/configuration/identity-stores/microsoft-entra-id.md)
