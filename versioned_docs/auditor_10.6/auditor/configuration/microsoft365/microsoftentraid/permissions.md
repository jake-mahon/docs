# Permissions for Microsoft Entra ID Auditing

Auditor allows you to audit Microsoft 365 organizations that have established modern authentication as their identity management approach, including support for [multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks). To learn more about modern authentication, refer to the following Microsoft article: [What is modern authentication](https://docs.microsoft.com/en-us/office365/enterprise/hybrid-modern-auth-overview#What-is-modern-authentication).

In this scenario, Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and other modern APIs, being authenticated through a pre-configured Microsoft Entra ID (formerly Azure AD) application with appropriate access permissions. So, you should register an Microsoft Entra ID app and provide its settings to Auditor  when configuring a monitored item.

## For Microsoft Entra ID Auditing

To collect audit data in your cloud-based environment, Netwrix uses a dedicated Microsoft Entra ID application and leverages APIs access permissions granted to that app. To register such application and assign required permissions, a Microsoft Entra ID account with an administrative role will be required:

- If Basic Authentication is used:
  - A Microsoft Entra ID application named __Netwrix Auditor for Microsoft Entra ID__ will be created automatically when Netwrix Auditor connects to the monitored item (Office 365 tenant) for the first time. Thus, you will need to prepare a Microsoft Entra ID user account with an administrative role in Microsoft Entra ID —to create an app and perform initial data collection.
  - Provide this user name and password in the monitored item properties. See the [Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/microsoftentraid/overview.md#Microsoft-Entra-ID) topic for additional information.

See the [Using Basic Authentication with Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/microsoftentraid/basicauth.md) topic for additional information.

- If Modern Authentication is used:
  - Microsoft Entra ID application should be created manually by user with administrative role and assigned required permissions. See the [Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/microsoftentraid/modernauth.md#Configuring-Microsoft-Entra-ID-App-for-Auditing-Microsoft-Entra-ID) topic for additional information.
  - You will need to provide the Microsoft Entra ID app settings in the monitored item (Office 365 tenant) properties. See the [Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/microsoftentraid/overview.md#Microsoft-Entra-ID) topic for additional information.

See the [Using Modern Authentication with Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/microsoftentraid/modernauth.md) topic for additional information.

Permissions for ongoing data collection will depend on data you plan to collect:

- To collect activity (event-based) data including logon attempts, the administrative role will be needed.
- To collect activity data without logons, the privileged role can be revoked from the specified account after the initial data collection.

### Grant Admin Consent to a Tenant

Go to the __Microsoft Entra ID admin center__ > __Applications__ > __App registrations__ >  __API permissions__ and click __Grant admin consent for__ _<tenant name>_.
When prompted to confirm, click __Yes__.

__NOTE:__ For Microsoft 365 permissions, go to __Request API Permissions__ > __APIs my organization users__ and type "Microsoft 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and service principal using Microsoft Entra ID Admin portal: [Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configure Client Secret

Follow the steps to create a new client secret to be used by the app.

__Step 1 –__ Go to __Manage__ > __Certificates & secrets__ and click __New client secret__.

__Step 2 –__ Enter the description. From the expiration options select __24 months__.

__Step 3 –__ Click __Add__.

__Step 4 –__ The new secret will be displayed in the list. Click __Copy to clipboard__ icon on the "Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret: [Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#Add-a-client-secret).

### Obtain Tenant Name

Follow the steps to obtain the tenant name.

__Step 1 –__ Go to __Microsoft Entra ID__ > __Overview__.

__Step 2 –__ In the Tenant Information section, locate the __Primary domain__ field, copy its value and store to a safe location.
