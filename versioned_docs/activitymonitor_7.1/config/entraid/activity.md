# Microsoft Entra ID Activity Auditing Configuration

It is necessary to register Activity Monitor as a web application to the targeted Microsoft Entra ID (formerly Azure AD), in order for Activity Monitor to monitor the environment. This generates the Client ID and Client Secret needed by the Activity Agent. See [Microsoft Support](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-reporting-api-prerequisites-azure-portal) for assistance in configuring the Microsoft Entra ID web application.

__NOTE:__ A user account with the Global Administrator role is required to register an app with Microsoft Entra ID.

Configuration Settings from the Registered Application

The following settings are needed from your tenant once you have registered the application:

- Tenant ID – This is the Tenant ID for Microsoft Entra ID
- Client ID – This is the Application (client) ID for the registered application
- Client Secret – This is the Client Secret Value generated when a new secret is created

  __CAUTION:__ It is not possible to retrieve the value after saving the new key. It must be copied first.

## Permissions

The following permissions are required:

- Microsoft Graph API

  - Application Permissions:

    - AuditLog.Read.All – Read all audit log data
    - Directory.Read.All – Read directory data
    - User.Read.All – Read all users' full profiles

## Register a Microsoft Entra ID Application

Follow the steps to register Activity Monitor with Microsoft Entra ID.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

__Step 2 –__ On the left navigation menu, navigate to __Identity__ > __Applications__ and click App registrations.

__Step 3 –__ In the top toolbar, click __New registration__.

__Step 4 –__ Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Activity Monitor Entra ID
- Supported account types – Select __Accounts in this organizational directory only__
- Redirect URI – Set the Redirect URI to __Public client/native__  (Mobile and desktop) from the drop down menu. In the text box, enter the following:

  Urn:ietf:wg:oauth:2.0:oob

__Step 5 –__ Click __Register__.

The Overview page for the newly registered app opens. Review the newly created registered application. Now that the application has been registered, permissions need to be granted to it.

## Grant Permissions to the Registered Application

Follow the steps to set up permissions to enable the Activity Monitor to monitor data and collect logs from Microsoft Entra ID.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 2 –__ On the registered app blade, click __API permissions__ in the Manage section.

__Step 3 –__ In the top toolbar, click __Add a permission__.

__Step 4 –__ On the Request API permissions blade, select __Microsoft Graph__ on the Microsoft APIs tab. Select the following permissions:

- Under Application Permissions, select:

  - AuditLog.Read.All – Read all audit log data
  - Directory.Read.All – Read directory data
  - User.Read.All – Read all users' full profiles

__Step 5 –__ At the bottom of the page, click __Add Permissions__.

__Step 6 –__ Click __Grant Admin Consent for [tenant]__. Then click __Yes__ in the confirmation window.

Now that the permissions have been granted to it, the settings required for Activity Monitor need to be collected.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 2 –__ Copy the __Application (client) ID__ value.

__Step 3 –__ Save this value in a text file.

This is needed for adding an Microsoft Entra ID host in the Activity Monitor. Next identify the Tenant ID.

## Identify the Tenant ID

The Tenant ID is available in two locations within Microsoft Entra ID.

Registered Application Overview Blade

You can copy the Tenant ID from the same page where you just copied the Client ID. Follow the steps to copy the Tenant ID from the registered application Overview blade.

__Step 1 –__ Copy the Directory (tenant) ID value.

__Step 2 –__ Save this value in a text file.

This is needed for adding an Microsoft Entra ID host in the Activity Monitor. Next generate the application’s Client Secret Key.

Overview Page

Follow the steps to find the tenant name where the registered application resides.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

__Step 2 –__ Copy the Tenant ID value.

__Step 3 –__ Save this value in a text file.

This is needed for adding an Microsoft Entra ID host in the Activity Monitor. Next generate the application’s Client Secret Key.

## Generate the Client Secret Key

Follow the steps to find the registered application's Client Secret, create a new key, and save its value when saving the new key.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

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

This is needed for adding an Microsoft Entra ID in the Activity Monitor.
