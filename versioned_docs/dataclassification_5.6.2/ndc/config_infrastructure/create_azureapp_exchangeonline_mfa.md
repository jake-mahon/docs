# Create Azure AD app for Modern Authentication

To connect to Exchange Online organization that uses Modern authentication, you need to create an Azure AD application, as described in this section.

## Step 1: Prepare application certificate

Prepare application certificate as follows:

1. Create (or load) an IIS certificate on NDC Server (recommended).

__NOTE:__ This certificate should be installed for the local machine so that it can be accessed by Netwrix Data Classification and other services.

2. Export the certificate (.CER file):
   1. Open the certificate in IIS management console.
   2. Go to the __Details__ tab.
   3. Select __Copy to File__.

   __NOTE:__  Do not export private key.

   4. Set file type to _DER-encoded CER_.

## Step 2: Create and Register a new app in Azure AD

To register a new Azure AD application, do the following:

1. Sign into the __Microsoft 365 Admin Center__ (with your _Global Administrator_, _Application Administrator_ or _Cloud Application Administrator_ account) and go to the __Azure Active Directory admin center__.
2. Under the __App registrations__ section, select __New registration__:
3. d

![mfa_o365_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/mfa_o365_thumb_0_0.png)

4. In the __Name__ field, enter the application name.
5. In the __Supported account types__ select who can use this application – use the __Accounts in this organizational directory only__ option.
6. Click the __Register__ button.

__NOTE:__ Application redirect URI is optional, you can leave it blank on this step.

7. Your application ID is now available in the __Overview__ section. Copy it to a safe location.

## Step 3: Grant Required Permissions

Next, you need to grant your new application the required API permissions.

Azure AD applications can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use _Application_ permissions.

__NOTE:__ By default, a new application is granted one delegated permission for __Microsoft Graph API__ – __User.Read__. It is not required and can be removed.

Do the following:

When found, click on the entry and proceed with adding the necessary permissions. The steps from here on remain the same, so in most cases you would need the Application permissions entry, and the relevant set of permissions therein (such as full\_access\_as\_app for EWS OAuth, Exchange.ManageAsApp for CBA). Select the relevant entries, hit the Add permissions

1. At the top of the __Request API permissions__ pane, click the __APIs my organization uses__ tab and search for _Office 365 Exchange Online_.
2. Click on the _Office 365 Exchange Online_ entry in the list of apps found.
3. Proceed with adding the permissions for this app: select __Application permissions__ and then select __full\_access\_as\_app__.
4. Click __Add permissions__.

Finally, you need to grant admin consent to the tenant (that is, for Exchange organization whose audit data will be collected by the newly registered app).

Do the following:

1. Go to the new app settings > __API permissions__ and click __Grant admin consent for `<tenant name>`__.
2. When prompted to confirm granting, click __Yes.__

## Step 4: Configure Certificates & secrets

Having configured the app, you can upload its application certificate.

1. In the app settings, click __Certificates & secrets__ and select __Upload certificate__.
2. Upload the .CER file you prepared at [Step 1: Prepare application certificate](#step-1-prepare-application-certificate).
3. Copy the certificate thumbprint to a safe location.

## Step 5: Obtain Tenant ID

1. Open __Azure Active Directory admin center__.
2. Select __Azure Active Directory > Overview__ section for the required Exchange Online organization.
3. Locate the __Tenant ID__ and copy it to a safe location.
