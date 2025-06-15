# Azure Active Directory for User Credentials

The information in this topic applies to **Select Account Type** > **Azure Active Directory** in the
User Credentials window. This account type is for Microsoft Entra ID, formerly Azure Active
Directory.

![User Credentials Window - Azure Active Directory](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/connection/profile/entraid.png)

The required credentials for this account type are:

- Client ID – Application (client) ID of the Enterprise Auditor application registered with
  Microsoft Entra ID. See the
  [Identify the Client ID](/versioned_docs/enterpriseauditor_11.6/config/entraid/access.md#identify-the-client-id)
  topic for additional information.
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/application/overview.md)
  topic for additional information.)
- Key – The required Key depends on the target environment the Connection Profile is being used for:

    - Entra ID – Client secret value for the Enterprise Auditor application registered with
      Microsoft Entra ID. See the
      [Generate the Client Secret Key](/versioned_docs/enterpriseauditor_11.6/config/entraid/access.md#generate-the-client-secret-key)
      topic for additional information.
    - SharePoint Online – The comma delimited string containing the path to the certificate PFX
      file, certificate password, and the Microsoft Entra ID environment identifier (
      `CertPath,CertPassword,AzureEnvironment`). See the
      [SharePoint Online Credential for a Connection Profile using Modern Authentication](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/configurejob.md#sharepoint-online-credential-for-a-connection-profile-using-modern-authentication)topic
      for additional information.
