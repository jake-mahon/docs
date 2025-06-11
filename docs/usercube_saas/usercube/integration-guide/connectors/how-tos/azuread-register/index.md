# Register for Microsoft Entra ID

This guide shows how to [register](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) Identity Manager as an application, i.e. grant Identity Manager a service account, with Microsoft Identity Platform to authenticate to a Microsoft Entra ID (formerly Azure Active Directory), and how to grant Identity Manager the [directory permissions](https://docs.microsoft.com/en-us/graph/permissions-reference) for reading the data to be exported via the [Microsoft Graph API](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-graph-api).

## Create a New Registration

Create a new registration for Identity Manager with Microsoft Identity Platform by proceeding as follows:

1. Go to [the Microsoft portal](https://portal.azure.com/).
2. Log in using the organization's credentials.
3. Find the __Microsoft Entra ID__ menu on the left panel.
4. Go to __App Registrations__ in the left panel.
5. Click the __+ New Registration__ button in the top menu.

   ![Azure AD Export - Add New Registration](/img/product_docs/usercube/usercube/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportregistration.webp)

   A new registration form is displayed:

   - Name: display name of your application for the currently created registration. It is used to identify this registration within Microsoft Entra ID. In the case at hand, it won't be displayed to the end-user since Identity Manager doesn't access the Microsoft Entra ID using end-user identity but [its own](https://docs.microsoft.com/en-us/graph/auth-v2-service).

     Netwrix Identity Manager (formerly Usercube) recommends using a mnemonic name resembling Identity Manager Organization in order to remember it as the registration of Identity Manager within the target Microsoft Entra ID, for example Identity Manager Contoso.
   - [Supported account types](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-supported-account-types): select __Accounts in this organizational directory only (... - Single tenant)__.

     Identity Manager uses its own identity to access the API. It doesn't access the data on behalf of a user. To authenticate, it uses credentials of a service account granted by this registration, in the form of an __ApplicationId__ and a secret Client Secret.

     See how to get __ApplicationId__ and __ApplicationKey__.

     This service account is stored in the organizational directory, and hence using the [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege), only __Accounts in this organizational directory__ are supported for authentication within this registration scope.
   - Redirect URI:

     - The left combo box represents the type of application. It influences the authorization protocol exchanges. Identity Manager is of type Web.
     - The right line edit isn't applicable to our case and should be left blank. It is used for end-user authentication, but doesn't apply to Identity Manager.
6. Confirm the registration with the __Register__ button at the bottom of the page.

### Get the application's identifier

__ApplicationId__ is available in the registration overview. Get it by proceeding as follows:

1. Go to __App Registrations__ in the left panel.
2. Select __Owned applications__ > __Identity Manager__.
3. Go to __Overview__ in the left panel.

   The __Essentials__ top panel displays the __Application (client) ID__ required by the Identity Manager Agent. The same page also displays the __Directory (tenant) ID__ that will also be needed by the Identity Manager Agent.

   ![Azure AD Export - New ApplicationId](/img/product_docs/usercube/usercube/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportapplicationid.webp)

### Get the application's secret key

A __Client Secret__ key needs to be generated. Get it by proceeding as follows:

1. Go to __App Registrations__ in the left panel.
2. Select __Owned applications__ > __Identity Manager__.
3. Go to __Certificate & Secrets__ in the left panel.
4. Click the __+ New client secret__ button in the bottom panel __Client Secrets__.
5. Input a mnemonic name such as Identity Manager Organization Secret.
6. It is recommended to use a short __expiration period__ such as 1 year.
7. Confirm the creation with the __Add__ button.

   The Client Secret is now listed in the bottom panel __Client Secrets__. The Client Secret value is needed by the Identity Manager Agent settings file.

   ![Azure AD Export - New Client Secret](/img/product_docs/usercube/usercube/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportsecret.webp)

   The __Client Secret__ value is only displayed in the UI in plain text at first. After a while, it is only displayed as ```**************```. It should hence be stored in the appsettings.agent.json file or an environment variable as soon as it is created, to be used subsequently by Identity Manager. If the key is lost, a new key can be created to replace the lost one.

## Grant Directory Permissions

Grant Identity Manager directory permissions by proceeding as follows:

1. Go to __App Registrations__ in the left panel.
2. Select __Owned applications__ > __Identity Manager__.
3. Go to __API Permissions__ in the left panel.
4. Click on the __+ Add a permission__ button.

   ![Azure AD Export - Add Permission](/img/product_docs/usercube/usercube/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportpermissions.webp)
5. Go to __Microsoft graph__ > __Application permissions__.
6. Search and open the __Directory__ category.
7. Check the __Directory.Read.All__ permission.

   If you plan on configuring fulfillment too, you must only check the __Directory.ReadWrite.All__ permission.

   ![Azure AD Export - Directory Permission](/img/product_docs/usercube/usercube/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportdirectorypermission.webp)
8. Confirm with the __Add permissions__ button at the bottom of the page.

   You now see the Directory.Read.All or Directory.ReadWrite.All permission in the __Configured permissions__ list with a  __⚠ Not granted for ...__ status.
9. Grant admin consent by clicking on __√ Grant admin consent for__ name of the organization.

   ![Azure AD Export - Grant Admin Consent](/img/product_docs/usercube/usercube/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportadminconsent.webp)

   You should now see the status displayed as __√ Granted for__ name of the organization.
