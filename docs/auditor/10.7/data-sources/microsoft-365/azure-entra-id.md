---
title: azure entra id
sidebar_label: azure-entra-id
description: Auditor 10.7 documentation for azure entra id with configuration details, usage instructions, and implementation guidance.
---

# Using Basic Authentication with Microsoft Entra ID

With basic authentication, your Microsoft Entra ID organization will be accessed on behalf of a
user. You will need to provide user name and password in the monitored item properties. Auditor will
use this account to access the Microsoft Entra ID organization, automatically create an Microsoft
Entra ID app with required permissions, and perform initial data collection. For that, the user
account will need an administrative role in the cloud-based infrastructure.

Further permission assignment will depend on the data you plan to collect:

- To collect activity data including **logon attempts**, the administrative role is required, as
  well as the Premium Plan license.
- To collect activity data without logons, the privileged role can be revoked from the specified
  account after the initial data collection. Ongoing audit data collection will leverage Microsoft
  APIs access permissions granted to Microsoft Entra ID app and, therefore, requires no tenant-level
  administrative permissions.

## Required Roles and Permissions

| To...                                                                                                                 | Requirement                                                                                                                                                                                  | Comment                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Create Microsoft Entra ID application, run initial data collection, and perform Auditor upgrade from previous version | Any of the following role combinations: - Application Administrator & Privileged Role Administrator OR - Cloud Application Administrator & Privileged Role Administrator OR - _Global Admin_ | Prepare a user account and specify it in the monitored item properties. See the and [Microsoft Entra ID](/docs/auditor/10.7/data-sources/microsoft-365/azure-entra-id.md) topics for additional information. |
| Collect audit data, including _Successful Logons_ and/or _Failed Logons_                                              | - _Security Reader_ OR - _Security Administrator_ OR - _Application Administrator_ OR - _Cloud Application Administrator_ OR - _Global Administrator_                                        | To assign the non-privileged role, see                                                                                                                                                                       |
| Collect audit data (without logons)                                                                                   | Any of the following roles: - _Security Reader_ OR - _Application Administrator_ OR - _Cloud Application Administrator_ OR - _Global Admin_                                                  | Assign the role you need, as explained above.                                                                                                                                                                |

## Assigning a Privileged Role for Microsoft Entra ID and Office 365

When configuring a monitored item for Microsoft Entra ID (formerly Azure AD) or Office 365 auditing
with basic authentication, specify a data collecting account that has sufficient privileges in
Microsoft Entra ID. This account should be able to create a dedicated application in your Microsoft
Entra ID domain. Depending on your requirements and company policies, you can select one of the
following approaches:

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

## Assigning 'Security Administrator' or 'Security Reader' Role

To audit _Successful_ and/or _Failed Logons_ in Microsoft Entra ID, the Security Administrator or
Security Reader role is required. Follow the steps to assign the role you need:

**Step 1 –** Sign in to [Microsoft Entra ID portal](https://portal.azure.com/) using your Microsoft
account.

**Step 2 –** Select Microsoft Entra ID portal on the left.

**Step 3 –** Navigate to Roles and administrators.

**Step 4 –** Click the Security administrator or Security Reader role.

**Step 5 –** Click Add member and select the account that you want to assign the role to.

Refer to the following Microsoft article:
[Microsoft Entra built-in roles](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles)
for additional information on the Administrator role permissions.

# Assign Application Permissions Using Manifest

Follow the steps to assign application permissions using manifest.

**Step 1 –** Under App registrations, select the newly created app.

**Step 2 –** Select **Manifest** on the left.

**Step 3 –** Locate the **requiredResourceAccess** property in the manifest and edit it with the
following in the square brackets ([]).

**Step 4 –** Click **Save**.

Optionally, you can select **Download** to edit the manifest locally, and then use Upload to reapply
it to your application.

The following Application permissions will be added:

- Microsoft Graph

  - Directory.Read.All
  - AuditLog.Read.All

- Office 365 Management APIs

  - ActivityFeed.Read

To add the required permissions, do one of the following:

- For the clear installation of Auditor 10.5, add roles as described below.

- If you upgraded Auditor from the version 10.0, replace all existing content under the
  **requiredResourceAccess** property.

```
{
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
        {
            "id": "b0afded3-3588-46d8-8b3d-9842eff778da",
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

# Using Modern Authentication with Microsoft Entra ID

This option is recommended for organizations that use modern authentication as the identity
management approach, having multi-factor authentication (MFA) enabled for their user accounts. In
this scenario, Auditor will access the cloud-based infrastructure via Microsoft Graph and other
modern APIs, being authenticated through a pre-configured Microsoft Entra ID application with
appropriate access permissions.

If you plan to implement this scenario, you should register an Microsoft Entra ID app manually and
provide its settings to Auditor when configuring a monitored item.

## Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID

Follow the steps to use a data collecting account with modern authentication.

**Step 1 –** Create and Register a New App in Microsoft Entra ID app that will be used for modern
authentication. See the Create and Register a New App in Microsoft Entra ID section for additional
information.

**Step 2 –** Grant required permissions to that application using Microsoft Entra ID app manifest.
See the Grant Required Permissions section for additional information.

**Step 3 –** Configure client secret for that application. See the Configure Client Secret topic for
additional information.

**Step 4 –** Obtain tenant ID – you will need it when configuring a monitored item (Office 365
tenant) settings. See the Obtain Tenant Name section for additional information.

### Create and Register a New App in Microsoft Entra ID

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

### Grant Required Permissions

You need to grant your new application the required API permissions. Microsoft Entra ID applications
can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every
  time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use the _Application_ permissions.

To grant required permissions, assign granular _Application_ permissions required for Netwrix
Auditor to collect data from the application. To do so, perform the following steps:

**Step 1 –** Go to the **App registrations** and open the app you created to assign Auditor
permissions.

**Step 2 –** Go to **Manage > API permissions** and click **Add a permission** button.

**Step 3 –** Assign the required permissions.

Permission assignment will depend on the data you plan to collect:

- Activity data only
- Both activity and state-in-time data

| Requirement                                                                                                                                                                                                  | Comment                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft Entra ID app requires the following **Application** permissions: 1. **Microsoft Graph** - **Directory.Read.All** - **AuditLog.Read.All** 2. **Office 365 Management APIs** - **ActivityFeed.Read** | To learn how to assign required permissions, see the Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID section for additional information. |

**NOTE:** You can also assign application permissions by editing Microsoft Entra app manifest. See
the Using Modern Authentication with Microsoft Entra ID topic for additional information on how to
assign the required permissions. Information about manifest is also described in the following
Microsoft
article: [ Microsoft Entra app manifest](https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest).

### Grant Admin Consent to a Tenant

Go back to the **Microsoft Entra ID admin center** > **Applications** > **App registrations** >
**API permissions** and click **Grant admin consent for** *`<tenant name>`*. When prompted to
confirm, click **Yes**.

**NOTE:** For Office 365 permissions, go to **Request API Permissions** > **APIs my organization
users** and type "Office 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and
service principal using Microsoft Entra ID Admin portal:
[Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configure Client Secret

Follow the steps to create a new client secret to be used by the app.

**Step 1 –** Go to **Manage** > **Certificates & secrets** and click **New client secret**.

**Step 2 –** Enter the description. From the expiration options select **24 months**.

**Step 3 –** Click **Add**.

**Step 4 –** The new secret will be displayed in the list. Click **Copy to clipboard** icon on the
"Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret:
[Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret).

### Add Microsoft Entra ID monitoring plan

Follow the steps to add Microsoft Entra ID monitoring plan in the Netwrix Auditor.

**Step 1 –** In the Monitoring Plans, click **Add Plan** button.

**Step 2 –** Create a monitoring plan with the Microsoft Entra ID data source.

**Step 3 –** Add the Office 365 tenant item.

**Step 4 –** Click **Select**.

**Step 5 –** Enter your **tenant name**.

**Step 6 –** Choose modern authentication.

**Step 7 –** Enter the **Application ID** and **Application secret** you have created before.

**Step 8 –** Click **Add**.

Microsoft Entra ID monitoring plan has been added to Auditor and initial data collection has begun.

### Obtain Tenant Name

Follow the steps to obtain the tenant name.

**Step 1 –** Navigate to **Microsoft Entra ID** > **Overview**.

**Step 2 –** In the Tenant Information menu, locate the **Primary domain** field and copy its value.

**Step 3 –** Store the tenant to a safe location.

# Microsoft Entra ID

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

  - Unified audit log must be enabled for a Tenant. See the Microsoft
    [Turn auditing on or off](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide)
    article for additional information.
  - While no special settings are required. Remember to do the following:

    - Prepare a Data Collecting Account as described in
      [Permissions for Microsoft Entra ID Auditing](/docs/auditor/10.7/data-sources/microsoft-365/azure-entra-id.md) topic
    - Configure required protocols and ports, as described in the
      [Microsoft Entra ID Ports](/docs/auditor/10.7/installation-and-setup/system-requirements/ports-and-networking.md) topic

## Monitored Object Types and Attributes

See the full list of object types and attributes monitored by Microsoft Entra ID.

Collected properties for snapshot

Users properties:

```
manager,userPrincipalName,accountEnabled,ageGroup,assignedLicenses,assignedPlans,
identities,passwordProfile,businessPhones,city,companyName,consentProvidedForMinor,
country,department,displayName,employeeId,faxNumber,givenName,imAddresses,jobTitle,
legalAgeGroupClassification,mail,mailNickname,mobilePhone,onPremisesDistinguishedName,
onPremisesImmutableId,onPremisesLastSyncDateTime,onPremisesSecurityIdentifier,
onPremisesSyncEnabled,onPremisesDomainName,onPremisesSamAccountName,onPremisesUserPrincipalName,
otherMails,passwordPolicies,officeLocation,postalCode,preferredLanguage,provisionedPlans,proxyAddresses,
showInAddressList,state,streetAddress,surname,usageLocation,userType,lastPasswordChangeDateTime,
createdDateTime,externalUserState,externalUserStateChangeDateTime,isResourceAccount,licenseAssignmentStates,
refreshTokensValidFromDateTime,signInSessionsValidFromDateTime,id

```

Groups properties:

```
members,classification,createdDateTime,description,displayName,groupTypes,
mail,mailEnabled,mailNickname,onPremisesLastSyncDateTime,
onPremisesSecurityIdentifier,onPremisesSyncEnabled,proxyAddresses,
renewedDateTime,securityEnabled,visibility,resourceProvisioningOptions,id            
```

Devices properties:

```
displayName,deviceId,deviceMetadata,deviceVersion,manufacturer,model,operatingSystem,
operatingSystemVersion,profileType,trustType,accountEnabled,isCompliant,isManaged,id
            
```

DirectoryRoles properties:

```
description,displayName,roleTemplateId,id,members
            
```

DirectoryRoleTemplates properties:

```
displayName,description,id
            
```

SubscribedSkus properties:

```
capabilityStatus,consumedUnits,prepaidUnits,servicePlans,skuId,skuPartNumber,appliesTo,id
            
```

ServicePrincipals properties:

```
 accountEnabled,appId,appRoles,displayName,homepage,oauth2PermissionScopes,
 servicePrincipalNames,servicePrincipalType,tags,id
            
```

| Data source                                                                                                                                                              | Data usage                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audit logs Collected via MS Graph on endpoint _/auditLogs/directoryaudits_                                                                                               | Activity Record: who, when and some event-based Activity Record                                                                                             |
| Sign-in logs Collected via MS Graph on endpoint _/auditLogs/signIns_                                                                                                     | Logon Activity Record                                                                                                                                       |
| Users changes Collected via MS Graph on endpoint _/users/delta/…_                                                                                                        | Activity Record for users                                                                                                                                   |
| Groups changes Collected via MS Graph on endpoint _/groups/delta/…_                                                                                                      | Activity Record for groups                                                                                                                                  |
| Groups membership changes Collected via MS Graph on endpoint _/groups/delta?$deltaToken=latest&$select=members&$expand=members_                                          | Activity Record for groups membership                                                                                                                       |
| All Users Collected via MS Graph on endpoint _/users/delta/…_                                                                                                            | Snapshot for users. Used for previous values in users Activity Record. Used in SSRS (SQL Server Reporting Services) report "Entra ID Accounts – Attributes" |
| All Groups and membership Collected via MS Graph on endpoint _/groups/delta/…&$expand=members_                                                                           | Snapshot for groups and membership Groups snapshot used for previous values in groups Activity Record.                                                      |
| All devices Collected via MS Graph on endpoint _/devices_                                                                                                                | Snapshot for "Not used" devices.                                                                                                                            |
| All service principals Collected via MS Graph on endpoint _/servicePrincipals_                                                                                           | Snapshot for service principals.                                                                                                                            |
| All directory role templates Collected via MS Graph on endpoint _/directoryRoleTemplates_ All directory roles Collected via MS Graph on endpoint _/directoryRoles/delta_ | Snapshot for Entra ID directory roles Used in SSRS (SQL Server Reporting Services) report "Entra ID roles and their members"                                |
| All SKUs Collected via MS Graph on endpoint _/subscribedSkus_                                                                                                            | Snapshot for SKUs Used in SSRS report "Entra ID roles and their members"                                                                                    |

# Permissions for Microsoft Entra ID Auditing

Auditor allows you to audit Office 365 organizations that have established modern authentication as
their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
To learn more about modern authentication, refer to the following Microsoft article:
[What is modern authentication](https://docs.microsoft.com/en-us/office365/enterprise/hybrid-modern-auth-overview#what-is-modern-authentication).

In this scenario, Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID (formerly Azure
AD) application with appropriate access permissions. So, you should register an Microsoft Entra ID
app and provide its settings to Auditor  when configuring a monitored item.

## For Microsoft Entra ID Auditing

To collect audit data in your cloud-based environment, Netwrix uses a dedicated Microsoft Entra ID
application and leverages APIs access permissions granted to that app. To register such application
and assign required permissions, a Microsoft Entra ID account with an administrative role will be
required:

- If Basic Authentication is used:
  - A Microsoft Entra ID application named **Netwrix Auditor for Microsoft Entra ID** will be
    created automatically when Netwrix Auditor connects to the monitored item (Office 365 tenant)
    for the first time. Thus, you will need to prepare a Microsoft Entra ID user account with an
    administrative role in Microsoft Entra ID —to create an app and perform initial data
    collection.
  - Provide this user name and password in the monitored item properties. See the
    [Microsoft Entra ID](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md) topic for
    additional information.

See the [Using Basic Authentication with Microsoft Entra ID](/docs/auditor/10.7/data-sources/microsoft-365/azure-entra-id.md) topic for additional
information.

- If Modern Authentication is used:
  - Microsoft Entra ID application should be created manually by user with administrative role and
    assigned required permissions. See the
    [Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID](/docs/auditor/10.7/data-sources/microsoft-365/azure-entra-id.md#configuring-microsoft-entra-id-app-for-auditing-microsoft-entra-id)
    topic for additional information.
  - You will need to provide the Microsoft Entra ID app settings in the monitored item (Office 365
    tenant) properties. See the
    [Microsoft Entra ID](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md) topic for
    additional information.

See the [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/10.7/data-sources/microsoft-365/azure-entra-id.md) topic for additional
information.

Permissions for ongoing data collection will depend on data you plan to collect:

- To collect activity (event-based) data including logon attempts, the administrative role will be
  needed.
- To collect activity data without logons, the privileged role can be revoked from the specified
  account after the initial data collection.

### Grant Admin Consent to a Tenant

Go back to the **Microsoft Entra ID admin center** > **Applications** > **App registrations** >
**API permissions** and click **Grant admin consent for** *`<tenant name>`*. When prompted to
confirm, click **Yes**.

**NOTE:** For Office 365 permissions, go to **Request API Permissions** > **APIs my organization
users** and type "Office 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and
service principal using Microsoft Entra ID Admin portal:
[Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configure Client Secret

Follow the steps to create a new client secret to be used by the app.

**Step 1 –** Go to **Manage** > **Certificates & secrets** and click **New client secret**.

**Step 2 –** Enter the description. From the expiration options select **24 months**.

**Step 3 –** Click **Add**.

**Step 4 –** The new secret will be displayed in the list. Click **Copy to clipboard** icon on the
"Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret:
[Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret).

### Obtain Tenant Name

Follow the steps to obtain the tenant name.

**Step 1 –** Go to **Microsoft Entra ID** > **Overview**.

**Step 2 –** In the Tenant Information section, locate the **Primary domain** field, copy its value
and store to a safe location.
