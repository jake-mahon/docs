# Access Exchange Online Using Modern Authentication

Support for modern authentication will allow you to audit the organizations where MFA is enabled for all users, including service accounts.

This option is recommended for organizations that use modern authentication as the identity management approach, having multi-factor authentication (MFA) enabled for their user accounts. In this scenario, Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and other modern APIs, being authenticated through a pre-configured Microsoft Entra ID application with appropriate access permissions.

If you plan to implement this scenario, you should register an Microsoft Entra ID app manually and provide its settings to Netwrix Auditor when configuring a monitored item.

### Create and Register a New App in Microsoft Entra ID

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

### Grant Required Permissions

You need to grant your new application the required API permissions. Microsoft Entra ID applications can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use the _Application_ permissions.

Follow the steps to grant required permissions.

__Step 1 –__ Assign granular _Application_ permissions required for Netwrix Auditor to collect data from the application. To do so, perform the following steps:

- Go to the __App registrations__ and open the app you created to assign Auditor permissions.
- Go to __Manage > API permissions__ and click __Add a permission__ button.
- Assign the required permissions.

Permission assignment will depend on the data you plan to collect: activity data only or both activity and state-in-time data.

| To... | Requirement | Comment |
| --- | --- | --- |
| Collect audit data | Microsoft Entra ID app requires the following __Application__ permissions:   1. Microsoft Graph    - Directory.Read.All    - Application.ReadWrite.All    - Mail.ReadBasic.All    - MailboxSettings.Read 2. Microsoft 365 Management APIs    - ActivityFeed.Read 3. Microsoft 365 Exchange Online     - Exchange.ManageAsApp | To learn how to assign required permissions, see the [Access Exchange Online Using Modern Authentication](#Access-Exchange-Online-Using-Modern-Authentication) section for additional information. |
| Roles | _Exchange Administrator_ (_Exchange Service Administrator_) assigned to application service principal  OR  _Global Administrator_ assigned to application service principal |  |

__NOTE:__ You can also assign application permissions by editing Microsoft Entra app manifest. See the [Access Exchange Online Using Modern Authentication](#Access-Exchange-Online-Using-Modern-Authentication) topic for additional information on how to assign the required permissions. Information about manifest is also described in the following Microsoft article: [ Microsoft Entra app manifest](https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest).

__Step 2 –__ Grant admin consent to the tenant (that is, for the Microsoft 365 organization whose audit data will be collected by the newly registered app).

See the following Microsoft article for additional information: [Grant admin consent in App registrations](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent?pivots=portal#Grant-admin-consent-in-App-registrations).

#### Grant Admin Consent to a Tenant

Follow the steps to grant Admin consent to a tenant.

Go to the __Microsoft Entra ID admin center__ > __Applications__ > __App registrations__ >  __API permissions__ and click __Grant admin consent for__ _<tenant name>_.
When prompted to confirm, click __Yes__.

__NOTE:__ For Microsoft 365 permissions, go to __Request API Permissions__ > __APIs my organization users__ and type "Microsoft 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and service principal using Microsoft Entra ID Admin portal: [Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Grant Required Roles

Follow the steps to grant the required Microsoft Entra ID (formerly Azure AD) roles to the new application.

__Step 1 –__ In the Entra portal, click View under Manage Azure Active Directory.

__Step 2 –__ Select __Roles and administrators__ under Manage.

__Step 3 –__ Select the Exchange Administrator or Global Administrator role.

__Step 4 –__ On the Assignments page that appears, click Add assignments.

__Step 5 –__ In the Add assignments flyout that appears, find and select the created application, and click Add.

See the following Microsoft article for additional information on how to create an application and service principal using Azure AD Admin portal: [Create an Azure Active Directory application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configure Client Secret

Follow the steps to create a new client secret to be used by the app.

__Step 1 –__ Go to __Manage__ > __Certificates & secrets__ and click __New client secret__.

__Step 2 –__ Enter the description. From the expiration options select __24 months__.

__Step 3 –__ Click __Add__.

__Step 4 –__ The new secret will be displayed in the list. Click __Copy to clipboard__ icon on the "Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret: [Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#Add-a-client-secret).

## Add an Exchange Online Monitoring Plan

Follow the steps to add Exchange Online monitoring plan in the Netwrix Auditor:

__Step 1 –__ In the Monitoring Plans, click __Add Plan__ button.

__Step 2 –__ Create a monitoring plan with the Exchange Online data source.

__Step 3 –__ Add the "Microsoft 365 tenant" item.

__Step 4 –__ Click __Select__.

__Step 5 –__ Enter your tenant name.

__Step 6 –__ Choose modern authentication.

__Step 7 –__ Enter Application ID and Application secret you have created before.

__Step 8 –__ Click __Add__.

Exchange Online monitoring plan has been added to Auditor and initial data collection has begun.

### Obtain the Tenant Name

Follow the steps to obtain the tenant name.

__Step 1 –__ Navigate to __Microsoft Entra ID__ >  __Overview__.

__Step 2 –__ In the __Tenant information__ locate the __Primary domain__ field, copy its value and store to a safe location.

See the following Microsoft article for additional information on how to obtain tenant name: [Locate important IDs for a user](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names).

Then, create a corresponding monitoring plan in Netwrix Auditor and add an item (Microsoft 365 tenant) to it. See the [Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/microsoftentraid/overview.md#Microsoft-Entra-ID) topic for additional information.
