# SharePoint Online Activity Auditing Configuration

In order to collect logs and monitor SharePoint Online activity using the Netwrix Activity Monitor, it needs to be registered with Microsoft® Entra ID® (formerly Azure AD).

__NOTE:__ A user account with the Global Administrator role is required to register an app with Microsoft Entra ID.

Additional Requirement

In addition to registering the application with Microsoft Entra ID, the following is required:

- Enable Auditing for SharePoint Online

See the [Enable Auditing for SharePoint Online](#enable-auditing-for-sharepoint-online) topic for additional information.

Configuration Settings from the Registered Application

The following settings are needed from your tenant once you have registered the application:

- Tenant ID – This is the Tenant ID for Microsoft Entra ID
- Client ID – This is the Application (client) ID for the registered application
- Client Secret – This is the Client Secret Value generated when a new secret is created

  __CAUTION:__ It is not possible to retrieve the value after saving the new key. It must be copied first.

Permissions for Microsoft Graph API

- Application:

  - Directory.Read.All – Read directory data
  - Sites.Read.All – Read items in all site collections
  - User.Read.All – Read all users' full profiles

Permissions for Office 365 Management APIs

- Application Permissions:

  - ActivityFeed.Read – Read activity data for your organization
  - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data

## Register a Microsoft Entra ID Application

Follow the steps to register Activity Monitor with Microsoft Entra ID.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

__Step 2 –__ On the left navigation menu, navigate to __Identity__ > __Applications__ and click App registrations.

__Step 3 –__ In the top toolbar, click __New registration__.

__Step 4 –__ Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Activity Monitor for SharePoint
- Supported account types – Select __Accounts in this organizational directory only__
- Redirect URI – Set the Redirect URI to __Public client/native__  (Mobile and desktop) from the drop down menu. In the text box, enter the following:

  Urn:ietf:wg:oauth:2.0:oob

__Step 5 –__ Click __Register__.

The Overview page for the newly registered app opens. Review the newly created registered application. Now that the application has been registered, permissions need to be granted to it.

## Grant Permissions to the Registered Application

Follow the steps to grant permissions to the registered application.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 2 –__ On the registered app blade, click __API permissions__ in the Manage section.

__Step 3 –__ In the top toolbar, click __Add a permission__.

__Step 4 –__ On the Request API permissions blade, select __Microsoft Graph__ on the Microsoft APIs tab. Select the following permissions:

- Application:

  - Directory.Read.All – Read directory data
  - Sites.Read.All – Read items in all site collections
  - User.Read.All – Read all users' full profiles

__Step 5 –__ At the bottom of the page, click __Add Permissions__.

__Step 6 –__ In the top toolbar, click __Add a permission__.

__Step 7 –__ On the Request API permissions blade, select __Office 365 Management APIs__ on the Microsoft APIs tab. Select the following permissions:

- Application Permissions:

  - ActivityFeed.Read – Read activity data for your organization
  - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data

__Step 8 –__ At the bottom of the page, click __Add Permissions__.

__Step 9 –__ Click __Grant Admin Consent for [tenant]__. Then click __Yes__ in the confirmation window.

Now that the permissions have been granted to it, the settings required for Activity Monitor need to be collected.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 2 –__ Copy the __Application (client) ID__ value.

__Step 3 –__ Save this value in a text file.

This is needed for adding a SharePoint Online host in the Activity Monitor. Next identify the Tenant ID.

## Identify the Tenant ID

The Tenant ID is available in two locations within Microsoft Entra ID.

Registered Application Overview Blade

You can copy the Tenant ID from the same page where you just copied the Client ID. Follow the steps to copy the Tenant ID from the registered application Overview blade.

__Step 1 –__ Copy the Directory (tenant) ID value.

__Step 2 –__ Save this value in a text file.

This is needed for adding a SharePoint Online host in the Activity Monitor. Next generate the application’s Client Secret Key.

Overview Page

Follow the steps to find the tenant name where the registered application resides.

__NOTE:__ The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly if you start from a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

__Step 2 –__ Copy the Tenant ID value.

__Step 3 –__ Save this value in a text file.

This is needed for adding a SharePoint Online host in the Activity Monitor. Next generate the application’s Client Secret Key.

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

This is needed for adding a SharePoint Online host in the Activity Monitor.

## Enable Auditing for SharePoint Online

Follow the steps to enable auditing for SharePoint Online so the Activity Monitor can receive events.

__Step 1 –__ In the Microsoft Purview compliance portal at [https://compliance.microsoft.com](https://compliance.microsoft.com/), go to __Solutions__ > __Audit__. Or, to go directly to the Audit page at [https://compliance.microsoft.com/auditlogsearch](https://compliance.microsoft.com/auditlogsearch).

__Step 2 –__ If auditing is not turned on for your organization, a banner is displayed prompting you start recording user and admin activity.

__Step 3 –__ Select the __Start recording__ user and __admin activity__ banner.

It may take up to 60 minutes for the change to take effect. The Activity Monitor now has SharePoint Online auditing enabled as needed to receive events. See the Microsoft [Turn auditing on or off](https://learn.microsoft.com/en-us/microsoft-365/compliance/audit-log-enable-disable?view=o365-worldwide) article for additional information on enabling or disabling auditing.
