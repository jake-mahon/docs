# Using Basic Authentication with SharePoint Online

With basic authentication, your SharePoint Online will be accessed on behalf of a user. You will
need to provide Microsoft 365 user name and password in the monitored item properties. To access the
Microsoft Entra ID (formerly Azure AD)/Microsoft 365 organization and perform initial data
collection, the user account will need an administrative role in the cloud-based infrastructure.

The user account should be a _Cloud-only_ account.

Further permission assignment will depend on the data you plan to collect:

- To collect both activity and state-in-time data, the administrative role will be still needed. See
  the table below for details.
- To collect activity data only, the privileged role can be revoked from the specified account after
  the initial data collection.

## Required Roles and Permissions

| To...                                   | Requirement                                                                                                                                                                                                                                                          | Comment                                                                                                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Collect activity and state-in-time data | Any of the following role combinations: - Application Administrator & Privileged Role Administrator OR - Cloud Application Administrator & Privileged Role Administrator OR - _Global Admin_ (_Company Administrator_ in Microsoft Entra ID PowerShell terms)        | Prepare a **Cloud-only** user account and specify it in the monitored item properties. See the [SharePoint Online](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md) topic for additional information. |
| Collect activity data only              | 1. For initial connection to SharePoint Online, initial data collection, and Netwrix Auditor upgrade from previous version — any of the role combinations listed above. 2. After the initial data collection, the privileged roles can be revoked from this account. |                                                                                                                                                                                                                          |

## Assigning a Privileged Role for SharePoint and Microsoft 365

When configuring a monitored item for Microsoft Entra ID (formerly Azure AD) or Microsoft 365
auditing with basic authentication, specify a data collecting account that has sufficient privileges
in Microsoft Entra ID. This account should be able to create a dedicated application in your
Microsoft Entra ID domain. Depending on your requirements and company policies, you can select one
of the following approaches:

- Assign a privileged role (for example, _Application Administrator_ & _Privileged Role
  Administrator_) to the account, then revoke it after the application creation and initial data
  collection, and assign a less-privileged role to this account (for example, _Security Reader_).
- Use the account with a privileged role on a regular basis. Any additional role assignments will
  not be necessary in this case. If you select this method, contact your security administrator to
  avoid violations of security policies in your organization.

**NOTE:** If you previously used a non-privileged account for Microsoft Entra ID data collection in
your Netwrix Auditor, consider that after the upgrade you will have to perform the role assignment
procedure again, selecting one of these approaches. Until then, data collection will not be
performed.

Follow the steps to assign a privileged role to the account.

**Step 1 –** Sign in to Microsoft Entra ID portal using your Microsoft account.

**Step 2 –** Select Microsoft Entra ID on the left.

**Step 3 –** Select the account that you want to use as data collecting account, or create a new
user.

**Step 4 –** Make sure you have disabled multi-factor authentication for this account.

**Step 5 –** Expand Directory role and select the role you need (for example, Global admin or any
other privileged role).

_Remember,_ In Microsoft Graph API, Microsoft Entra ID Graph API, and Microsoft Entra ID PowerShell,
the Global admin role is identified as Company Administrator.

**Step 6 –** Click OK.

**Step 7 –** In Auditor, create a monitoring plan for auditing Microsoft Entra ID and specify this
account with this privileged role on the Specify the account for collecting data step.

**Step 8 –** Wait until initial data collection completes.

**Step 9 –** Open Microsoft Entra ID portal and remove the privileged role from the account.

**Step 10 –** Assign a less-privileged role to this account.

A less privileged role has now been assigned to the account.

# Assigning Application Permissions Using Manifest

Follow the steps to assign application permissions using Manifest.

**Step 1 –** Under **App registrations**, select the newly created app.

**Step 2 –** Select **Manifest** on the left.

**Step 3 –** Locate the **requiredResourceAccess** property in the manifest and edit it with the
following in the square brackets ([]). Then click **Save**.

Optionally, you can select **Download** to edit the manifest locally, and then use Upload to reapply
it to your application.

Do one of the following:

- For the clear installation of Netwrix Auditor, add roles as described in the
  [Using Modern Authentication with SharePoint Online](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md)
  topic.

- If you upgraded Netwrix Auditor from the version 10.0, replace all existing content under the
  **requiredResourceAccess** property.

```
{
    "resourceAppId": "00000003-0000-0ff1-ce00-000000000000",
    "resourceAccess": [
        {
            "id": "678536fe-1083-478a-9c59-b99265e6b0d3",
            "type": "Role"
        }
    ]
},
{
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
        {
            "id": "1bfefb4e-e0b5-418b-a88f-73c46d2cc8e9",
            "type": "Role"
        },
        {
            "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
            "type": "Role"
        }
    ]
},
{
"resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",
"resourceAccess": [
        {
            "id": "594c1fb6-4f81-4475-ae41-0c394909246c",
            "type": "Role"
        }
    ]
}
```

# Using Modern Authentication with SharePoint Online

This option is recommended for organizations that use modern authentication as the identity
management approach, having multi-factor authentication (MFA) enabled for their user accounts. In
this scenario,Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID application with
appropriate access permissions.

If you plan to implement such scenario, you should register an Microsoft Entra ID app manually and
provide its settings to Auditor when configuring a monitored item.

Support for modern authentication will allow you to audit the organizations where MFA is enabled for
all users, including service accounts.

Required configuration procedure includes several manual steps, as described in the corresponding
section:

## Configuring Microsoft Entra ID App for Auditing SharePoint Online

To collect data with modern authentication, you should do the following:

**Step 1 –** Create an Microsoft Entra ID app that will be used for modern authentication. See the
[Creating and registering a new app in Microsoft Entra ID](#creating-and-registering-a-new-app-in-microsoft-entra-id)
topic for additional information.

**Step 2 –** Grant required permissions to that application using Microsoft Entra ID app manifest.
See the [Granting required permissions](#granting-required-permissions) topic for additional
information.

**Step 3 –** Configure client secret for that application. See the
[Configuring client secret](#configuring-client-secret) topic for additional information.

**Step 4 –** Obtain tenant ID – you will need it when configuring a monitored item (Microsoft 365
tenant) settings. See the [Obtaining tenant name](#obtaining-tenant-name) topic for additional
information.

### Creating and registering a new app in Microsoft Entra ID

You will need to create a dedicated app for each cloud-based data source you plan to audit:

- Microsoft Entra ID (formerly Azure AD)
- Exchange Online
- SharePoint Online
- MS Teams

If you plan to audit all of them, you need to create 4 apps.

Follow the steps to register a new Microsoft Entra ID application.

**Step 1 –** Sign into the **Microsoft 365 Admin Center** with your _Global Administrator_,
_Application Administrator_ or _Cloud Application Administrator_ account and go to the **Microsoft
Entra ID admin center**.

**Step 2 –** Under the App registrations section, select **New registration**.

**Step 3 –** In the Name field, enter the application name.

**Step 4 –** In the Supported account types select who can use this application – use the **Accounts
in this organizational directory only** option.

**Step 5 –** Click the **Register** button. Application **Redirect URI** is optional, you can leave
it blank.

**Step 6 –** Your Application (client) ID is now available in the Overview section. Copy it to a
safe location.

See the following Microsoft article for additional information on how to create an application and
service principal using Microsoft Entra ID Admin portal:
[Create an Microsoft Entra ID application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Granting required permissions

You need to grant your new application the required API permissions. Microsoft Entra ID applications
can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every
  time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use the _Application_ permissions.

Follow the steps to grant required permissions.

**Step 1 –** Assign granular _Application_ permissions required for Netwrix Auditor to collect data
from the application. To do so, perform the following steps:

- Go to the **App registrations** and open the app you created to assign Auditor permissions.
- Go to **Manage > API permissions** and click **Add a permission** button.
- Assign the required permissions.

Permission assignment will depend on the data you plan to collect: activity data only or both
activity and state-in-time data.

| To...                                   | Requirement                                                                                                                                                                                                                           | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Collect activity and State-in-Time data | Microsoft Entra ID app requires the following Application permissions: 1. Microsoft 365 Management APIs - ActivityFeed.Read 2. Microsoft Graph - Application.ReadWrite.All - Directory.Read.All 3. SharePoint - Sites.FullControl.All | To learn how to assign required permissions, see the [Configuring Microsoft Entra ID App for Auditing SharePoint Online](#configuring-microsoft-entra-id-app-for-auditing-sharepoint-online) section for additional information. Application.ReadWrite.All is required for automatic rotation of the certificate. Rotating certificates in the Entra ID application is important for the following reasons: - Mitigate Risks from Expired Certificates - Enhance Security - Compliance Requirements - Operational Continuity |

**NOTE:** You can also assign application permissions by editing Microsoft Entra app manifest. See
this topic for additional information on how to assign the required permissions. Information about
manifest is also described in the following Microsoft
article: [ Microsoft Entra app manifest](https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest).

**Step 2 –** Grant admin consent to the tenant (that is, for the Microsoft 365 organization whose
audit data will be collected by the newly registered app).

See the following Microsoft article for additional information:
[Grant admin consent in App registrations](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent?pivots=portal#grant-admin-consent-in-app-registrations).

### Granting Admin consent to a tenant

Go to the **Microsoft Entra ID admin center** > **Applications** > **App registrations** > **API
permissions** and click **Grant admin consent for** *`<tenant name>`*. When prompted to confirm,
click **Yes**.

**NOTE:** For Microsoft 365 permissions, go to **Request API Permissions** > **APIs my organization
users** and type "Microsoft 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and
service principal using Microsoft Entra ID Admin portal:
[Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configuring client secret

Follow the steps to create a new client secret to be used by the app.

**Step 1 –** Go to **Manage** > **Certificates & secrets** and click **New client secret**.

**Step 2 –** Enter the description. From the expiration options select **24 months**.

**Step 3 –** Click **Add**.

**Step 4 –** The new secret will be displayed in the list. Click **Copy to clipboard** icon on the
"Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret:
[Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret).

### Obtaining tenant name

Follow the steps to obtain the tenant name.

**Step 1 –** Navigate to **Microsoft Entra ID** > **Overview**.

**Step 2 –** In the **Tenant information** locate the **Primary domain** field, copy its value and
store to a safe location.

See the following Microsoft article for additional information on how to obtain tenant name:
[Locate important IDs for a user](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names).

Then, create a corresponding monitoring plan in Netwrix Auditor and add an item (Microsoft 365
tenant) to it. See the
[Microsoft Entra ID](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
topic for additional information.

# SharePoint Online

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in the following way:

- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

  - Unified audit log must be enabled for a Tenant. See the Microsoft
    [Turn auditing on or off](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide)
    article for additional information.
  - Prepare a Data Collecting Account as described in the
    [Permissions for SharePoint Online Auditing ](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md)
    topic.
  - Configure required protocols and ports, as described in the
    [SharePoint Online Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
    topic.

Review a full list of object types and attributes Netwrix Auditor can collect on SharePoint Online.
OneDrive for Business changes are reported as SharePoint Online.

| Object type                    | Attributes                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Site Collection                | - Site Collection administrators                                                                                                                                                                                                                                                                 |
| Document                       | - Name - Permissions - URL - Data categories                                                                                                                                                                                                                                                     |
| Site                           | - Permissions                                                                                                                                                                                                                                                                                    |
| Site Collection Sharing Policy | - Sharing with external users - Sharing using anonymous access links                                                                                                                                                                                                                             |
| Sharing Policy                 | - Sharing with external users - Sharing using anonymous access links - External users must accept sharing invitations using the same account that the invitations were sent to - Sharing Domain Restriction mode - Allow domain list - Deny domain list - Require anonymous links expire in days |
| Group                          | - Members - Name                                                                                                                                                                                                                                                                                 |
| Folder                         | - Permissions                                                                                                                                                                                                                                                                                    |
| Sharing Invitation             | - Expiration date - Shared with                                                                                                                                                                                                                                                                  |
| Access Request                 | - Expiration date                                                                                                                                                                                                                                                                                |

## Sensitive data

Starting with the version 10, Netwrix Auditor is able to report about sensitive data in your IT
infrastructure. Pay attention to the "_Data categories_" column in search and reports (for the
"_Document_" object types only). See the
[Sensitive Data Discovery ](/docs/auditor/10.6/administration/settings/general-settings.md)topic
for additional information on how to enable monitoring of sensitive data in Netwrix Auditor.

# Permissions for SharePoint Online Auditing

Auditor allows you to audit Microsoft 365 organizations that have established modern authentication
as their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
To learn more about modern authentication, refer to the following Microsoft article:
[What is modern authentication](https://docs.microsoft.com/en-us/office365/enterprise/hybrid-modern-auth-overview#what-is-modern-authentication).

In this scenario, Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID (formerly Azure
AD) application with appropriate access permissions. So, you should register an Microsoft Entra ID
app and provide its settings to Auditor  when configuring a monitored item.

## Authentication for SharePoint Online Auditing

To collect audit data from your SharePoint Online and OneDrive for Business, Netwrix Auditor uses a
dedicated Microsoft Entra ID application and leverages APIs access permissions granted to that app.
To register this application and assign required permissions, an Microsoft Entra ID account with an
administrative role will be required:

- If Modern Authentication is used:
  - Microsoft Entra ID application should be created manually by user with administrative role and
    assigned required permissions. This app will allow you to collect both activity and
    state-in-time data. See the
    [Configuring Microsoft Entra ID App for Auditing SharePoint Online](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md#configuring-microsoft-entra-id-app-for-auditing-sharepoint-online)
    section for additional information.
  - You will need to provide the Microsoft Entra ID app settings in the monitored item (Microsoft
    365 tenant) properties. See the
    [Microsoft Entra ID](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
    topic for additional information.

See the
[Using Modern Authentication with SharePoint Online](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md)
topic for additional information.

- If Basic Authentication is used:

  - Microsoft Entra ID application named **Netwrix Auditor for Microsoft Entra ID** will be
    created automatically when Netwrix Auditor connects to the monitored item (Microsoft 365
    tenant) for the first time. Thus, you will need to prepare an Microsoft 365 user account with
    an administrative role in Microsoft Entra ID — to create an app and perform initial data
    collection.
  - Provide this user name and password in the monitored item properties. See the
    [Microsoft Entra ID](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
    topic for additional information.
  - Permissions for ongoing data collection will depend on data you plan to collect:

    - To collect both activity (event-based) and state-in-time data, the administrative role
      will be still needed.
    - To collect activity data only, the privileged role can be revoked from the specified
      account after the initial data collection.

See the
[Using Basic Authentication with SharePoint Online](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md)
topic for additional information.
