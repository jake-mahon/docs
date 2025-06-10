# Azure Active Directory for User Credentials

The information in this topic applies to __Select Account Type__ > __Azure Active Directory__ in the User Credentials window. This account type is for Microsoft Entra ID, formerly Azure Active Directory.

![User Credentials Window - Azure Active Directory](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/connection/profile/entraid.webp)

The required credentials for this account type are:

- Client ID – Application (client) ID of the Access Analyzer application registered with Microsoft Entra ID. See the [Identify the Client ID](/docs/accessanalyzer/config/entraid/access.md#identify-the-client-id) topic for additional information.
- Password Storage – Application (Uses the configured Profile Security setting as selected at the __Settings__ > __Application__ node. See the [Application](/docs/accessanalyzer/enterpriseauditor/admin/settings/application/overview.md) topic for additional information.)
- Key – The required Key depends on the target environment the Connection Profile is being used for:

  - Entra ID – Client secret value for the Access Analyzer application registered with Microsoft Entra ID. See the [Generate the Client Secret Key](/docs/accessanalyzer/config/entraid/access.md#generate-the-client-secret-key) topic for additional information.
  - SharePoint Online – The comma delimited string containing the path to the certificate PFX file, certificate password, and the Microsoft Entra ID environment identifier ( ```CertPath,CertPassword,AzureEnvironment```). See the [SharePoint Online Credential for a Connection Profile using Modern Authentication](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/configurejob.md#sharepoint-online-credential-for-a-connection-profile-using-modern-authentication)topic for additional information.
