# Microsoft Entra ID Auditing Configuration

The Access Analyzer for Entra ID Solution provides the ability to audit Microsoft Entra ID, formerly Azure Active Directory. It scans:

- Microsoft Entra ID (formerly Azure AD)

__NOTE:__ A user account with the Global Administrator role is required to register an app with Microsoft Entra ID.

Data Collector

- [AzureADInventory Data Collector](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/overview.md)

Configuration Settings from the Registered Application

The following settings are needed from your tenant once you have registered the application:

- Client ID – This is the Application (client) ID for the registered application
- Key – This is the Client Secret Value generated when a new secret is created

  __CAUTION:__ It is not possible to retrieve the value after saving the new key. It must be copied first.

__NOTE:__ In order to add custom attributes, you will also need to know the Tenant name of the Entra ID environment.

## Permissions

The following permissions are required:

- Microsoft Graph API

  - Application Permissions:

    - AuditLog.Read.All – Read all audit log data
    - Directory.Read.All – Read directory data
  - Delegated Permissions:

    - Group.Read.All – Read all groups
    - User.Read.All – Read all users' full profiles
- Access URLs

  - https://login.windows.net
  - https://graph.windows.net
  - https://login.microsoftonline.com
  - https://graph.microsoft.com

    - All sub-directories of the access URLs listed

## Register a Microsoft Entra ID Application

Follow the steps to register Access Analyzer with Microsoft Entra ID.

__NOTE:__ The steps below are for registering an app through the Microsoft Entra admin center. These steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

__Step 2 –__ On the left navigation menu, navigate to __Identity__ > __Applications__ and click App registrations.

__Step 3 –__ In the top toolbar, click __New registration__.

__Step 4 –__ Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Access Analyzer (formerly Enterprise Auditor) Entra ID
- Supported account types – Select __Accounts in this organizational directory only__

__Step 5 –__ Click __Register__.

The Overview page for the newly registered app opens. Review the newly created registered application. Now that the application has been registered, permissions need to be granted to it.

## Grant Permissions to the Registered Application

Follow the steps to grant permissions to the registered application.

__NOTE:__ The steps below are for registering an app through the Microsoft Entra admin center. These steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 2 –__ On the registered app blade, click __API permissions__ in the Manage section.

__Step 3 –__ In the top toolbar, click __Add a permission__.

__Step 4 –__ On the Request API permissions blade, select __Microsoft Graph__ on the Microsoft APIs tab. Select the following permissions:

- Under Application Permissions, select:

  - AuditLog.Read.All – Read all audit log data
  - Directory.Read.All – Read directory data
- Under Delegated Permissions, select:

  - Group.Read.All – Read all groups
  - User.Read.All – Read all users' full profiles

__Step 5 –__ At the bottom of the page, click __Add Permissions__.

__Step 6 –__ Click __Grant Admin Consent for [tenant]__. Then click __Yes__ in the confirmation window.

Now that the permissions have been granted to it, the Connection Profile and host settings for Access Analyzer need to be collected.

__NOTE:__ Additional permissions need to be configured to collect Microsoft Entra roles information. See the [Microsoft Entra Roles Auditing Configuration](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/entraid/entraroles.md) topic for additional information.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

__NOTE:__ The steps below are for registering an app through the Microsoft Entra admin center. These steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 2 –__ Copy the __Application (client) ID__ value.

__Step 3 –__ Save this value in a text file.

This Application (client) ID value is needed for the Access Analyzer Connection Profile and the Custom Attributes page of the AzureADInventory Data Collector. See the [Azure Active Directory for User Credentials](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/profile/entraid.md) topic and the [AzureADInventory: Custom Attributes](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/customattributes.md) topic for additional information. Next generate the application’s Client Secret Key.

## Generate the Client Secret Key

Follow the steps to find the registered application's Client Secret, create a new key, and save its value when saving the new key.

__NOTE:__ The steps below are for registering an app through the Microsoft Entra admin center. These steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__CAUTION:__ It is not possible to retrieve the value after saving the new key. It must be copied first.

__Step 1 –__ Select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 2 –__ On the registered app blade, click __Certificates & secrets__ in the Manage section.

__Step 3 –__ In the top toolbar, click __New client secret__.

__Step 4 –__ On the Add a client secret blade, complete the following:

- Description – Enter a unique description for this secret
- Expires – Select the duration.

  __NOTE:__ Setting the duration on the key to expire requires reconfiguration at the time of expiration. It is best to configure it to expire in 1 or 2 years.

__Step 5 –__ Click __Add__ to generate the key.

__CAUTION:__ If this page is left before the key is copied, then the key is not retrievable, and this process will have to be repeated.

__Step 6 –__ The Client Secret will be displayed in the Value column of the table. You can use the Copy to clipboard button to copy the Client Secret.

__Step 7 –__ Save this value in a text file.

This Client Secret value is needed for the Access Analyzer Connection Profile and the Custom Attributes page of the AzureADInventory Data Collector. See the [Azure Active Directory for User Credentials](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/profile/entraid.md) topic and the [AzureADInventory: Custom Attributes](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/customattributes.md) topic for additional information.

## Identify the Tenant Name

Follow the steps to find the Tenant Name where the registered application resides.

__NOTE:__ The steps below are for registering an app through the Microsoft Entra admin center. These steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

__Step 2 –__ On the left navigation menu, navigate to __Identity__ > __Settings__ and click __Domain names__ to open the Custom domain names list.

__Step 3 –__ Copy the domain name from the list of domains.

__Step 4 –__ Save this value in a text file.

This is needed for the Host List and the Custom Attributes page of the AzureADInventory Data Collector. See the [Microsoft Entra ID Connection Profile & Host List](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/configurejob.md) and [AzureADInventory: Custom Attributes](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/customattributes.md) topics for additional information.
