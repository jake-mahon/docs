# Access SharePoint Online using modern authentication

This option is recommended for organizations that use modern authentication as the identity management approach, having multi-factor authentication (MFA) enabled for their user accounts. In this scenario, Netwrix Data Classification will access the cloud-based infrastructure via Microsoft Graph and other modern APIs, being authenticated through a pre-configured Microsoft Entra ID application with appropriate access permissions.

So, if you plan to implement such scenario, you should register a Microsoft Entra ID app manually and provide its settings to Netwrix Data Classification when configuring a monitored item.

## Step 1: Prepare an Application Certificate

Prepare application certificate as follows:

1. Create (or load) an IIS certificate on NDC Server (recommended).

__NOTE:__ This certificate should be installed for the local machine so that it can be accessed by Netwrix Data Classification and other services.

2. Export the certificate (.CER file):
   1. Open Certificate Manager.
   2. Go to search and type in __Certificate__.
   3. Choose __Manage Computer Certificates__.
   4. Right-click on the certificate you created.
   5. Select __All Tasks__, __Export__.
   6. On the displayed message, click ____Do not export private key____.
   7. Set file type to _DER-encoded binary x.509_ (CER).
   8. Chose location to save the certificate and name it as __leave.cer__. You can later upload it to the Microsoft Entra ID admin center.

## Step 2: Create and Register a New App in Microsoft Entra ID

Follow the steps to register a new Microsoft Entra ID application.

1. Sign into the __Microsoft 365 Admin Center__ (with your _Global Administrator_, _Application Administrator_ or _Cloud Application Administrator_ account).
2. Search for and select __Microsoft Entra ID__.

   ![entraidportal](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/entraidportal.png)
3. Under the Microsoft Entra ID select the __App registrations__ section.
4. Select __New registration__:

![mfa_o365_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/mfa_o365_thumb_0_0.png)

5. In the Name field, enter the application name.
6. In the Supported account types, select who can use this application – use the __Accounts in this organizational directory only__ option.
7. Click the __Register__ button.

   __NOTE:__ Application redirect URl is optional, you can leave it blank on this step.

   ![mfa_0365_2](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/mfa_0365_2.png)
8. Copy your application ID from the Overview section it to a safe location.

## Step 3: Grant Required Permissions

Next, you need to grant your new application the required API permissions.

Microsoft Entra ID applications can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use _Application_ permissions.

__NOTE:__ By default, a new application is granted one delegated permission for __Microsoft Graph API__ – __User.Read__. It is not required and can be removed.

Do the following:

When found, click on the entry and proceed with adding the necessary permissions. The steps from here on remain the same, so in most cases you would need the Application permissions entry, and the relevant set of permissions therein.

1. Select the relevant entries and then click __Add permissions__.
2. On the __Request API permissions__> Microsoft APIs pane, scroll down and select SharePoint.
3. Select Application Permissions.
4. Apply the following permissions:

   - Graph – Application permissions (With admin consent granted)

     - Sites.FullControl.All (Crawling)
   - SharePoint – Application permissions (With admin consent granted)

     - Sites.FullControl.All (Crawling)
     - TermStore.ReadWrite.All (Term Set access)

   ![mfa_0365_3](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/mfa_0365_3.png)

   __NOTE:__ For taxonomy manager to full operate you must also make the user “app@sharepoint” a taxonomy admin (or group admin).

   You need to add app@sharepoint identity as a Term Store Administrator, by going to the term store on the website https://xxxx-admin.sharepoint.com/\_layouts/15/termstoremanager.aspx (where "xxxx" is your tenant).
5. Click ____Add permissions____.

## Step 4: Configure Certificates & Secrets

Having configured the app, you can upload its application certificate.

1. In the app settings, click __Certificates & secrets__ and select __Upload certificate__.
2. Upload the .CER file you prepared at [Step 1: Prepare an Application Certificate](#step-1-prepare-an-application-certificate).
3. Copy the certificate thumbprint to a safe location.

## Step 5: Obtain Tenant ID

1. Open the Microsoft Entra Admin Center.
2. Select the __Microsoft Entra ID > Overview__ section for the required SharePoint Online organization.
3. Locate the __Tenant ID__ and copy it to a safe location.
