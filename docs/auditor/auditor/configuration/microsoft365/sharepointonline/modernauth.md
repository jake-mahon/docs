# Using Modern Authentication with SharePoint Online

This option is recommended for organizations that use modern authentication as the identity management approach, having multi-factor authentication (MFA) enabled for their user accounts. In this scenario,Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and other modern APIs, being authenticated through a pre-configured Microsoft Entra ID application with appropriate access permissions.

If you plan to implement such scenario, you should register an Microsoft Entra ID app manually and provide its settings to Auditor when configuring a monitored item.

Support for modern authentication will allow you to audit the organizations where MFA is enabled for all users, including service accounts.

Required configuration procedure includes several manual steps, as described in the corresponding section:

## Configuring Microsoft Entra ID App for Auditing SharePoint Online

To collect data with modern authentication, you should do the following:

__Step 1 –__ Create an Microsoft Entra ID app that will be used for modern authentication. See the Creating and registering a new app in Microsoft Entra ID topic for additional information.

__Step 2 –__ Grant required permissions to that application using Microsoft Entra ID app manifest. See the Granting required permissions topic for additional information.

__Step 3 –__ Configure client secret for that application. See the Configuring client secret topic for additional information.

__Step 4 –__ Obtain tenant ID – you will need it when configuring a monitored item (Office 365 tenant) settings. See the Obtaining tenant name topic for additional information.

### Creating and registering a new app in Microsoft Entra ID

You will need to create a dedicated app for each cloud-based data source you plan to audit:

- Microsoft Entra ID (formerly Azure AD)
- Exchange Online
- SharePoint Online
- MS Teams

If you plan to audit all of them, you need to create 4 apps.

Follow the steps to register a new Microsoft Entra ID application.

__Step 1 –__ Sign into the __Microsoft 365 Admin Center__ with your _Global Administrator_, _Application Administrator_ or _Cloud Application Administrator_ account and go to the __Microsoft Entra ID admin center__.

__Step 2 –__ Under the App registrations section, select __New registration__.

__Step 3 –__ In the Name field, enter the application name.

__Step 4 –__ In the Supported account types select who can use this application – use the __Accounts in this organizational directory only__ option.

__Step 5 –__ Click the __Register__ button. Application __Redirect URI__ is optional, you can leave it blank.

__Step 6 –__ Your Application (client) ID is now available in the Overview section. Copy it to a safe location.

See the following Microsoft article for additional information on how to create an application and service principal using Microsoft Entra ID Admin portal: [Create an Microsoft Entra ID application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Granting required permissions

You need to grant your new application the required API permissions. Microsoft Entra ID applications can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use the _Application_ permissions.

To grant required permissions, assign granular _Application_ permissions required for Netwrix Auditor to collect data from the application. To do so, perform the following steps:

__Step 1 –__ Go to the __App registrations__ and open the app you created to assign Auditor permissions.

__Step 2 –__ Go to __Manage > API permissions__ and click __Add a permission__ button.

__Step 3 –__ Assign the required permissions.

Permission assignment will depend on the data you plan to collect:

- Activity data only
- Both activity and state-in-time data

| To... | Requirement | Comment |
| --- | --- | --- |
| Collect activity and State-in-Time data | Microsoft Entra ID app requires the following Application permissions:   1. Office 365 Management APIs    - ActivityFeed.Read 2. Microsoft Graph    - Application.ReadWrite.All    - Directory.Read.All 3. SharePoint     - Sites.FullControl.All | To learn how to assign required permissions, see the Configuring Microsoft Entra ID App for Auditing SharePoint Online section for additional information.  Application.ReadWrite.All is required for automatic rotation of the certificate. Rotating certificates in the Entra ID application is important for the following reasons:   - Mitigate Risks from Expired Certificates - Enhance Security - Compliance Requirements - Operational Continuity |

__NOTE:__ You can also assign application permissions by editing Microsoft Entra app manifest. See the Using Modern Authentication with SharePoint Online topic for additional information on how to assign the required permissions. Information about manifest is also described in the following Microsoft article: [ Microsoft Entra app manifest](https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest).

### Granting Admin consent to a tenant

Go back to the __Microsoft Entra ID admin center__ > __Applications__ > __App registrations__ >  __API permissions__ and click __Grant admin consent for__ _`<tenant name>`_.
When prompted to confirm, click __Yes__.

__NOTE:__ For Office 365 permissions, go to __Request API Permissions__ > __APIs my organization users__ and type "Office 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and service principal using Microsoft Entra ID Admin portal: [Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configuring client secret

Follow the steps to create a new client secret to be used by the app.

__Step 1 –__ Go to __Manage__ > __Certificates & secrets__ and click __New client secret__.

__Step 2 –__ Enter the description. From the expiration options select __24 months__.

__Step 3 –__ Click __Add__.

__Step 4 –__ The new secret will be displayed in the list. Click __Copy to clipboard__ icon on the "Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret: [Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret).

### Obtaining tenant name

Follow the steps to obtain the tenant name.

__Step 1 –__ Navigate to __Microsoft Entra ID__ >  __Overview__.

__Step 2 –__ In the __Tenant information__ locate the __Primary domain__ field, copy its value and store to a safe location.

See the following Microsoft article for additional information on how to obtain tenant name: [Locate important IDs for a user](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names).

Then, create a corresponding monitoring plan in Netwrix Auditor and add an item (Office 365 tenant) to it. See the [Microsoft Entra ID](../../../admin/monitoringplans/microsoftentraid/overview.md) topic for additional information.
