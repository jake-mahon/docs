# SharePoint Online Access & Sensitive Data Auditing Configuration

Netwrix Enterprise Auditor uses Modern Authentication to execute Access Auditing (SPAA) and/or
Sensitive Data Discovery Auditing scans for the target SharePoint Online & OneDrive for Business
environments. This involves creating and defining a Microsoft Entra ID application for app–only
access to SharePoint Online.

**NOTE:** A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.

Configuration Settings from the Registered Application

The following settings are needed from your tenant once you have registered the application:

- Client ID – This is the Application (client) ID for the registered application
- Key – The comma delimited string containing the path to the certificate PFX file, certificate
  password, and the Microsoft Entra ID environment identifier (
  `CertPath,CertPassword,AzureEnvironment`)

Configure Modern Authentication for SharePoint Online using SP_RegisterAzureAppAuth Instant Job

Registering a Microsoft Entra ID application and provisioning it to grant permissions to SharePoint
Online can be automated using the SP_RegisterAzureAppAuth job from the Enterprise Auditor Instant
Job Library. The SP_RegisterAzureAppAuth job uses the PowerShell Data Collector to automatically
configure modern authentication for SharePoint Online. It requires:

- A Connection Profile containing the following two user credentials, both with an Account Type of
  **Task (Local)**:

  - Microsoft Entra ID Global Admin credential
  - A credential with the username `newapp` that contains the password for the new application

- Microsoft Graph API PowerShell module to be installed on targeted hosts

See the
[SP_RegisterAzureAppAuth Job](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information.

## Permissions

The following permissions are required:

Permissions for Microsoft Graph API

- Application Permissions:

  - Application.Read.All – Read all applications
  - AuditLog.Read.All – Read all audit log data
  - Directory.Read.All – Read directory data
  - Domain.Read.All – Read domains
  - Files.Read.All – Read files in all site collections
  - GroupMember.Read.All – Read all group memberships
  - InformationProtectionPolicy.Read.All – Read all published labels and label policies for an
    organization
  - Member.Read.Hidden – Read all hidden memberships
  - Organization.Read.All – Read organization information
  - OrgContact.Read.All – Read organization contact
  - Policy.Read.All – Read your organization's policies
  - Policy.Read.ConditionalAccess – Read you organization's conditional access policies
  - Policy.Read.PermissionGrant – Read consent and permission grant policies
  - ServiceHealth.Read.All – Read service health
  - ServiceMessage.Read.All – Read service messages
  - Sites.Read.All – Read items in all site collections
  - Team.ReadBasic.All – Get a list of all teamss
  - TeamMember.Read.All – Read the members of all teams

- Delegated Permissions:

  - Group.Read.All – Read all groups
  - User.Read.All – Read all users' full profiles

Permissions for Office 365 Management APIs

- Application Permissions:

  - ActivityFeed.Read – Read activity data for your organization
  - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data
  - ServiceHealth.Read – Read service health information for your organization

Permissions for SharePoint

- Application Permissions:

  - Sites.FullControl.All – Have full control of all site collections
  - Sites.Read.All – Read items in all site collections
  - TermStore.Read.All – Read managed metadata
  - User.Read.All – Read user profiles

## Create Self–Signed Certificate

To configure the Entra ID Application for invoking SharePoint Online with an App Only access token,
create and configure a self–signed X.509 certificate. This certificate authenticates the application
against Entra ID while requesting the App Only access token. See the Microsoft
[Granting access via Azure AD App-Only](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread)
article for additional information.

Follow the steps create the self-signed X.509 certificate.

**Step 1 –** To generate a certificate, use the sample PowerShell command below:

- Change the following parameters in the sample PowerShell command. See the Microsoft
  [New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate)
  article for additional information.

  - DNS Name – Specifies a DNS name to put into the subject alternative name extension of the
    certificate
  - Subject – A unique name for the new App (always starts with CN=, to denote a canonical name)
  - FriendlyName – Same as Subject name minus the canonical name prefix
  - NotAfter – A datetime string denoting the certificate's expiration date - in the above sample,
    Get-Date.AddYears(11) specifies that the certificate will expire 11 years from the current
    datetime

Example PowerShell:

```
$cert=New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -DnsName stealthbits.com -Subject "CN=StealthAUDIT SharePoint Auditor" -FriendlyName "StealthAUDIT SharePoint Auditor" -KeyAlgorithm RSA -KeyLength 2048 -KeyExportPolicy Exportable -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" -NotAfter (Get-Date).AddYears(11)
```

**Step 2 –** Export the certificate public key as a .cer file to the PrivateAssemblies folder in
Enterprise Auditor with the Export–Certificate cmdlet using the certificate path stored in the
$certPath variable (see Step 1).

**NOTE:** The environment variable `SAINSTALLDIR` always points to the base Enterprise Auditor
install directory; simply append the PrivateAssemblies to point to that folder with the following
cmdlet:

```
Export-Certificate -Cert $cert -FilePath "$($env:SAINSTALLDIR)PrivateAssemblies\spaa_cert.cer" -Type CERT
```

- See the Microsoft
  [Export-Certificate](https://docs.microsoft.com/en-us/powershell/module/pki/export-certificate)
  article for additional information.

**Step 3 –** Export the certificate private key as a .pfx file to the same folder by running the
following cmdlet:

```
Export-PfxCertificate -Cert $cert -FilePath "$($env:SAINSTALLDIR)PrivateAssemblies\spaa_cert.pfx" -Password (ConvertTo-SecureString -String "PasswordGoesHere" -Force -AsPlainText)
```

**_RECOMMENDED:_** Change the string in the Password parameter from "PasswordGoesHere" to something
more secure before running this cmdlet.

- See the Microsoft
  [Export-PfxCertificate](https://docs.microsoft.com/en-us/powershell/module/pki/export-pfxcertificate)
  article for additional information.

## Register a Microsoft Entra ID Application

Follow the steps to register Enterprise Auditor with Microsoft Entra ID.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** and click App
registrations.

**Step 3 –** In the top toolbar, click **New registration**.

**Step 4 –** Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Enterprise
  Auditor Entra ID for SharePoint
- Supported account types – Select **Accounts in this organizational directory only**

**Step 5 –** Click **Register**.

The Overview page for the newly registered app opens. Review the newly created registered
application. Now that the application has been registered, permissions need to be granted to it.

## Upload Self-Signed Certificate

Follow the steps to provision the upload your self-signed certificate.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **Certificates & secrets** in the Manage section.

**Step 3 –** Select the Certificates tab.

**Step 4 –** In the tool bar, click **Upload Certificate**.

**Step 5 –** Navigate to the to PrivateAssemblies folder and select the `spaa_cert.cer` file.
Optionally add a Description.

**Step 6 –** Click **Add**.

The upload certificate public key .cer file is an application key credential.

## Grant Permissions to the Registered Application

Follow the steps to grant permissions to the registered application.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **API permissions** in the Manage section.

**Step 3 –** In the top toolbar, click **Add a permission**.

**Step 4 –** On the Request API permissions blade, select **Microsoft Graph** on the Microsoft APIs
tab. Select the following permissions:

- Application Permissions:

  - Application.Read.All – Read all applications
  - AuditLog.Read.All – Read all audit log data
  - Directory.Read.All – Read directory data
  - Domain.Read.All – Read domains
  - Files.Read.All – Read files in all site collections
  - GroupMember.Read.All – Read all group memberships
  - InformationProtectionPolicy.Read.All – Read all published labels and label policies for an
    organization
  - Member.Read.Hidden – Read all hidden memberships
  - Organization.Read.All – Read organization information
  - OrgContact.Read.All – Read organization contact
  - Policy.Read.All – Read your organization's policies
  - Policy.Read.ConditionalAccess – Read you organization's conditional access policies
  - Policy.Read.PermissionGrant – Read consent and permission grant policies
  - ServiceHealth.Read.All – Read service health
  - ServiceMessage.Read.All – Read service messages
  - Sites.Read.All – Read items in all site collections
  - Team.ReadBasic.All – Get a list of all teamss
  - TeamMember.Read.All – Read the members of all teams

- Delegated Permissions:

  - Group.Read.All – Read all groups
  - User.Read.All – Read all users' full profiles

**Step 5 –** At the bottom of the page, click **Add Permissions**.

**Step 6 –** In the top toolbar, click **Add a permission**.

**Step 7 –** On the Request API permissions blade, select **Office 365 Management APIs** on the
Microsoft APIs tab. Select the following permissions:

- Application Permissions:

  - ActivityFeed.Read – Read activity data for your organization
  - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data
  - ServiceHealth.Read – Read service health information for your organization

**Step 8 –** At the bottom of the page, click **Add Permissions**.

**Step 9 –** In the top toolbar, click **Add a permission**.

**Step 10 –** On the Request API permissions blade, select **SharePoint** on the Microsoft APIs tab.
Select the following permissions:

- Application Permissions:

  - Sites.FullControl.All – Have full control of all site collections
  - Sites.Read.All – Read items in all site collections
  - TermStore.Read.All – Read managed metadata
  - User.Read.All – Read user profiles

**Step 11 –** At the bottom of the page, click **Add Permissions**.

**Step 12 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

Now that the permissions have been granted to it, the Connection Profile and host settings for
Enterprise Auditor need to be collected.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** Copy the **Application (client) ID** value.

**Step 3 –** Save this value in a text file.

This is needed for the Enterprise Auditor Connection Profile. See the
[Azure Active Directory for User Credentials](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

# SharePoint Online Activity Auditing Configuration

In order to collect logs and monitor SharePoint Online activity using the Netwrix Activity Monitor,
it needs to be registered with Microsoft® Entra ID® (formerly Azure AD).

**NOTE:** A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.

Additional Requirement

In addition to registering the application with Microsoft Entra ID, the following is required:

- Enable Auditing for SharePoint Online

See the [Enable Auditing for SharePoint Online](#enable-auditing-for-sharepoint-online) topic for
additional information.

Configuration Settings from the Registered Application

The following settings are needed from your tenant once you have registered the application:

- Tenant ID – This is the Tenant ID for Microsoft Entra ID
- Client ID – This is the Application (client) ID for the registered application
- Client Secret – This is the Client Secret Value generated when a new secret is created

  **CAUTION:** It is not possible to retrieve the value after saving the new key. It must be
  copied first.

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

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** and click App
registrations.

**Step 3 –** In the top toolbar, click **New registration**.

**Step 4 –** Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Activity Monitor
  for SharePoint
- Supported account types – Select **Accounts in this organizational directory only**
- Redirect URI – Set the Redirect URI to **Public client/native** (Mobile and desktop) from the drop
  down menu. In the text box, enter the following:

  Urn:ietf:wg:oauth:2.0:oob

**Step 5 –** Click **Register**.

The Overview page for the newly registered app opens. Review the newly created registered
application. Now that the application has been registered, permissions need to be granted to it.

## Grant Permissions to the Registered Application

Follow the steps to grant permissions to the registered application.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **API permissions** in the Manage section.

**Step 3 –** In the top toolbar, click **Add a permission**.

**Step 4 –** On the Request API permissions blade, select **Microsoft Graph** on the Microsoft APIs
tab. Select the following permissions:

- Application:

  - Directory.Read.All – Read directory data
  - Sites.Read.All – Read items in all site collections
  - User.Read.All – Read all users' full profiles

**Step 5 –** At the bottom of the page, click **Add Permissions**.

**Step 6 –** In the top toolbar, click **Add a permission**.

**Step 7 –** On the Request API permissions blade, select **Office 365 Management APIs** on the
Microsoft APIs tab. Select the following permissions:

- Application Permissions:

  - ActivityFeed.Read – Read activity data for your organization
  - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data

**Step 8 –** At the bottom of the page, click **Add Permissions**.

**Step 9 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

Now that the permissions have been granted to it, the settings required for Activity Monitor need to
be collected.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** Copy the **Application (client) ID** value.

**Step 3 –** Save this value in a text file.

This is needed for adding a SharePoint Online host in the Activity Monitor. Next identify the Tenant
ID.

## Identify the Tenant ID

The Tenant ID is available in two locations within Microsoft Entra ID.

Registered Application Overview Blade

You can copy the Tenant ID from the same page where you just copied the Client ID. Follow the steps
to copy the Tenant ID from the registered application Overview blade.

**Step 1 –** Copy the Directory (tenant) ID value.

**Step 2 –** Save this value in a text file.

This is needed for adding a SharePoint Online host in the Activity Monitor. Next generate the
application’s Client Secret Key.

Overview Page

Follow the steps to find the tenant name where the registered application resides.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**Step 1 –** Sign into the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** Copy the Tenant ID value.

**Step 3 –** Save this value in a text file.

This is needed for adding a SharePoint Online host in the Activity Monitor. Next generate the
application’s Client Secret Key.

## Generate the Client Secret Key

Follow the steps to find the registered application's Client Secret, create a new key, and save its
value when saving the new key.

**NOTE:** The steps below are for the Microsoft Entra Admin Center. These steps might vary slightly
if you start from a different Microsoft portal. See the relevant Microsoft documentation for
additional information.

**CAUTION:** It is not possible to retrieve the value after saving the new key. It must be copied
first.

**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **Certificates & secrets** in the Manage section.

**Step 3 –** In the top toolbar, click **New client secret**.

**Step 4 –** On the Add a client secret blade, complete the following:

- Description – Enter a unique description for this secret
- Expires – Select the duration.

  **NOTE:** Setting the duration on the key to expire requires reconfiguration at the time of
  expiration. It is best to configure it to expire in 1 or 2 years.

**Step 5 –** Click **Add** to generate the key.

**CAUTION:** If this page is left before the key is copied, then the key is not retrievable, and
this process will have to be repeated.

**Step 6 –** The Client Secret will be displayed in the Value column of the table. You can use the
Copy to clipboard button to copy the Client Secret.

**Step 7 –** Save this value in a text file.

This is needed for adding a SharePoint Online host in the Activity Monitor.

## Enable Auditing for SharePoint Online

Follow the steps to enable auditing for SharePoint Online so the Activity Monitor can receive
events.

**Step 1 –** In the Microsoft Purview compliance portal at
[https://compliance.microsoft.com](https://compliance.microsoft.com/), go to **Solutions** >
**Audit**. Or, to go directly to the Audit page at
[https://compliance.microsoft.com/auditlogsearch](https://compliance.microsoft.com/auditlogsearch).

**Step 2 –** If auditing is not turned on for your organization, a banner is displayed prompting you
start recording user and admin activity.

**Step 3 –** Select the **Start recording** user and **admin activity** banner.

It may take up to 60 minutes for the change to take effect. The Activity Monitor now has SharePoint
Online auditing enabled as needed to receive events. See the Microsoft
[Turn auditing on or off](https://learn.microsoft.com/en-us/microsoft-365/compliance/audit-log-enable-disable?view=o365-worldwide)
article for additional information on enabling or disabling auditing.

# SharePoint Online Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (SPAA) and Sensitive Data Discovery Auditing
scans on SharePoint Online. The Netwrix Activity Monitor can be configured to monitor activity on
SharePoint Online and make the event data available for Enterprise Auditor Activity Auditing (SPAC)
scans.

## Access & Sensitive Data Auditing Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
  topic for additional information.

See the
[SharePoint Online Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/collaboration/sharepoint-online.md)
topic for instructions.

**NOTE:** You can use the **SP_RegisterAzureAppAuth** instant job to make the configuration for
SharePoint Online easier. This job registers the necessary Microsoft Entra ID application and
provisions it with the required permissions. See the
[SP_RegisterAzureAppAuth Job](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information.

## Access & Sensitive Data Auditing Port Requirements

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of SharePoint Online

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

SharePoint Requirements

See the
[SharePoint Online Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/collaboration/sharepoint-online.md)
topic for instructions.

Activity Monitor Archive Location

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Enterprise Auditor to read the activity log files must also
have READ and WRITE permissions on the archive location.

## Activity Auditing Port Requirements

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx>)
article.

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
