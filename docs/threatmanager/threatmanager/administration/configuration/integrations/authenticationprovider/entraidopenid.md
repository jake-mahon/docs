# Microsoft Entra ID Configuration

For enhanced security, you can integrate Microsoft Entra ID OpenID Connect with Threat Manager using Proof Key for Code Exchange (PKCE).

Make sure the following requirements are fulfilled before configuring Microsoft Entra ID OpenID Connect in Threat Manager.

- Full Netwrix Threat Manager version 3.0.473+ or RO 3.0.90+ is installed
- Direct users (not groups) are supported in the Access User List
- MSAL.js 2.0 version is supported. See the Microsoft [MSAL.js 2.0 is now generally available with support for authorization code flow](https://devblogs.microsoft.com/microsoft365dev/msal-js-2-0-supports-authorization-code-flow-is-now-generally-available/) article for additional information.

First, you need to register an application for Threat Manager in Microsoft Entra ID and then use the registered application's information for configuring Microsoft Entra ID OpenID Connect in Threat Manager.

## Register and configure an application

Follow the steps to register and then configure the application.

__Step 1 –__ Login to Microsoft Entra admin center (https://portal.azure.com/) with a user that is part of the “Global Administrator” role or any role that has rights to register an app, such as the “Application administrator” role. This is required in order to give consent to certain permissions in the application.

__Step 2 –__ In the Microsoft Entra admin center, go to Microsoft Entra ID > App registration and click __New registration__.

![NTM EntraIDOpenID Connect Application New Registeration page](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/entraidnewregister.png)

__Step 3 –__ Fill out the Name field, for example, _MyProduct OpenID App._

__Step 4 –__ Choose one of the options in the __Supported account types__ section based on your needs, for example, _Accounts in this organizational directory only_.

__Step 5 –__ In the Redirect URI section, select the __Single-page application (SPA)__ option from the Select a plateform drop down.

__Step 6 –__ Enter the URL in the following specified format

```{HTTP/S protocol}://{IP address or DNS name}:{port if needed}/callback```

- HTTP/S protocol – Use depending on your configuration (http or https)

- IP address or DNS name – Provide the domain name or IP address, (for example, threatManager.MyCompany.com or 192.168.74.200)

- Port – Threat Manager’s default port is 8080, but it could be changed according to your needs

- End the URL with /callback

The full Redirect URL will be in one of the following format:

- https://threatManager.MyCompany.com:8080/callback

- https://192.168.74.200:8080/callback

__Step 7 –__ Click __Register__.

__Step 8 –__ The Overview page is displayed. Copy the Application (client) ID and Directory (Tenant) ID and keep them safe.

![EntraID Application and Tenant IDs page](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/appntenantids.png)

__Step 9 –__ In the left pane, select __Authentication__.

__Step 10 –__ In the Implicit grant and hybrid section, select the __Access tokens__ as necessary to support the implicit flow, especially for Single-Page Application (SPA).

![Entra ID SPA Token option](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/entraidtoken.png)

__Step 11 –__ Click __Save__.

__Step 12 –__ Under the Manage section, select __Token Configuration__.

__Step 13 –__ Click __Add optional claim__.

__Step 14 –__ Select __ID__ token type.

__Step 15 –__ In the Claim column, select _onprem\_sid_ check box.

__Step 16 –__ Click __Add__.

__Step 17 –__ Click __Add optional claim__.

__Step 18 –__ Select __Access__ token type.

__Step 19 –__ Check _onprem\_sid_ field.

__Step 20 –__ Click __Add__.

![Optional Claims added](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/claims.png)

## Configure Entra ID OpenID Connect

Follow the steps to configure Microsoft Entra ID OpenID connect in Threat Manager.

__Step 1 –__ On the Integrations interface, select the OpenID Authentication Provider under the Authentication Provider node.

The page for the OpenID provider had two tabs:

- Configuration
- Users/Groups

![Entra ID OpenID COnnect Configuration tab](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/entraidconfig.png)

## Configuration Tab

Follow the steps to configure Microsoft Entra ID OpenID Connect in Threat Manager.

- Default – The default profile applied when a user is assigned multiple authentication profiles. When off, the profile will be determined in alphabetical order of the profile name. Toggle off and on as desired.
- Authority – The Microsoft Entra ID OpenID Connect provider authority URL. It should be in the following format:  
  ```https://login.microsoftonline.com/{Tenant ID}/v2.0```  
  Use the tenant ID of the registered application.
- Client Id – The ID assigned to the registered application in Microsoft Entra ID.
- Login Type – The login type to use to log into the account. For Microsoft Entra ID, select _Sid_ from the drop-down list.
- User Source – The source type to use to validate the user from the token. For Microsoft Entra ID, select _Id Token Parse_ from the drop-down list.
- User Source Field – The field in the token to use for validating the user. For Microsoft Entra ID, select _onprem\_sid_ from the drop-down list.

## Users/Group Tab

The Users/Groups tab displays users and groups that are currently assigned to this authentication profile. To give access to the application to new users, click the New Access button, which opens the Add Console Access window. To assign this authentication provider to existing users, go to System Settings > User Access Page.

![UserGroups tab for an authneication provider](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/usersgroupssamltab.png)

The table displays the following information:

- Access rule type – Indicates the access type as _Allow_, which enables console access, or _Deny_, which disables console access
- Login name – The NTStyle domain name for the user or group account
- Display name – The display name for the user or group account
- Domain name – Name of the domain. This may be either the domain DNS name or domain controller hostname.
- Role – The role assigned to the user or group for accessing this application
- Authentication Type – Type of MFA authentication assigned to the user or group
- Action – This column has the following icons for conducting actions on the user or group:

  - Edit icon – Allows you to edit the columns in the selected row by enabling drop-down menus. The edit icon changes to a save icon while in edit mode.
  - Trash icon – Opens a Warning window to confirm the action of deleting the user or group. Removing a user or group removes console access for it.
  - Reset MFA button – Forces the user or every user in the group to reconfigure MFA on the next login. This option is only available if an MFA authentication type is applied to the user or group.

## Troubleshooting

In case the Microsoft Entra ID OpenID Connect configurations do not work and an error is displayed, you can perform the following steps to troubleshoot the error.

__Step 1 –__ Open any site or tool that provides the possibility to decode a JWT token, for example,``` https://jwt.io/```.

__Step 2 –__ Right click on the Threat Manager login page and select __Inspect__. The Dev Tools page opens.

![Dev Tools page](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/devtools.png)

__Step 3 –__ Click the __Network__ tab and check the __Preserve log__ check box.

__Step 4 –__ Enter __oidcSignin__ in the __Filter__ field and select __All__ to show all requests.

__Step 5 –__ Click the Microsoft Entra ID OpenID Connect button on the Threat Manager login page.

__Step 6 –__ Log in to Microsoft Entra ID.

![Dev Tools page](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/putmethod.png)

__Step 7 –__ On the Dev Tools page, find a request with the PUT method which has the following format:

```{HTTP/S protocol}://{NTM IP address or DNS name}:{port if needed}/oidcSignin/{ID}```

![PayLoad tab](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/payloadtab.png)

__Step 8 –__ Open the __Payload__ tab and copy the value from the Request Payload box.

__Step 9 –__ Open ```https://jwt.io/``` and insert the __Request Payload__ value in the ENCODED VALUE section.

![Claim verification](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/authenticationprovider/claim.png)

Check that the field from the claims setting exist and has the value. If claims don’t exist, please check the claims configuration in Microsoft Entra ID.
