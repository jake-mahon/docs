# Configure Dropbox for Crawling

Netwrix Data Classification connects to and crawls a Dropbox source via a custom Dropbox app,
created within Dropbox management console.

You will need to create a Dropbox App and authorize it. Do the following:

1. Create a new App
2. Generate Access token

To create a new app

To create a new app, you should sign in to Dropbox cloud using a Dropbox Business account with
administrative rights. Refer to
[Dropbox documentation](https://developer.box.com/guides/authentication/#dropbox-documentation) for
more information on the accounts and rights.

1. Navigate to
   [https://www.dropbox.com/developers/apps/create](https://www.dropbox.com/developers/apps/create)
2. On the Choose an API step, select Scoped Access.
3. On the Choose the type of access you need step, select Full Dropbox type.
4. Provide a name for your App. For example, Netwrix Data Classification.

   **NOTE:** Remember to agree with Dropbox API Terms and Conditions.

5. Click Create app.

   ![dropbox_create_app](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/dropbox_create_app.webp)

To authorize your app

1. Once your App has been created, navigate to the Permissions tab.
2. Select the following permissions and click submit.

   - account_info.read
   - files.metadata.write
   - files.metadata.read
   - files.content.write
   - files.content.read
   - sharing.read
   - team_info.read
   - team_data.member
   - team_data.team_space
   - files.team_metadata.write
   - members.read

3. Navigate to the Settings tab then scroll down to OAuth2 option and set the members.read Access
   token expiration to _‘No expiration’_ then click Generate under Generated access token.

   **NOTE:** If you change the app’s permissions you will need to regenerate this token.

4. Copy the token to a clipboard. You will need it later when adding a Dropbox source in Netwrix
   Data Classificationadministrative web console.

   ![dropbox_authorize_app](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/dropbox_authorize_app.webp)

# Configure IT Infrastructure

Successful crawling requires a certain configuration of native audit settings in the audited
environment. Configuring your IT infrastructure may also include enabling certain built-in Windows
services, etc. Proper audit configuration is required to ensure audit data integrity, otherwise your
change reports may contain warnings, errors or incomplete audit data.

Review the following for additional information:

- [Configure Box for Crawling](/docs/dataclassification/5.6.2/configuration/infrastructure/cloud-storage-configuration.md)
- [Configure Dropbox for Crawling](/docs/dataclassification/5.6.2/configuration/infrastructure/cloud-storage-configuration.md)
- [Configure Microsoft Exchange for Crawling and Classification](/docs/dataclassification/5.6.2/configuration/infrastructure/exchange-configuration.md)
- [Configure NFS File Share for Crawling](/docs/dataclassification/5.6.2/configuration/infrastructure/file-system-configuration.md)
- [Configure G Suite and Google Drive for Crawling](/docs/dataclassification/5.6.2/configuration/infrastructure/cloud-storage-configuration.md)
- [Set Up MIP Integration](/docs/dataclassification/5.6.2/workflows-automation/mip-integration/mip-configuration.md)

# Configure Box for Crawling

Netwrix Data Classification connects to and crawls a Box source via a custom Box app, created within
Box management portal.

## Prerequisites

1. Check if your Box license plan provides the capacity you need. Netwrix Data Classification uses
   API calls for content crawling (min one API call for a single file). Therefore, if you need to
   store and crawl a large amount of files in Box (e.g. 100, 000 files), then your selected plan
   should support a sufficient number of API calls per month. Otherwise, the solution will not be
   able to crawl your content in one month due to limited number of allowed API calls (e.g. with
   a *Starter* plan that provides only 25 000 calls per month). So, when selecting a Business
   subscription plan at [https://www.box.com/pricing](https://www.box.com/pricing), remember to
   click **Show more features** in the bottom and examine the information on **API calls per month**
   supported by each plan.

![box_lic_plans_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/box_lic_plans_thumb_0_0.webp)

2. Make sure you have configured a valid Google account (with multi-factor authentication supported)
   and registered it as a _Box Developer Account_. This account is needed to create an app that
   Netwrix Data Classification will use for interaction with Box API. For more information on the
   custom apps and Box API, refer to
   [this article](https://developer.box.com/guides/authentication/sso/).

**NOTE:** Account with multi-factor authentication will be required for private/public keys creation
and usage, so if such authentication is not enabled, the program will display a warning message and
suggest to configure the necessary settings.

## Procedure Steps

There are four key stages in this procedure:

1. Create an app.
2. Authorize the app to access your organization’s data.
3. Register the source with Netwrix Data Classification.
4. Configure content for crawling within Box.

This section describes steps 1 and 2 that are performed on the Box side. Steps 3 and 4 are performed
on the Netwrix Data Classification side and described in the
[Box](/docs/dataclassification/5.6.2/data-sources/cloud-storage/box.md)section.

### Step 1. Create the App

1. Log into your Box cloud-based storage facility using your _Box Developer Account_.
2. Open the Box developer's console endpoint: `https://app.box.com/developers/console`.
3. If you have not created an app before, you will see a screen similar to the one below:

   ![box_app](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/box_app.webp)

4. Click **Create New App**.
5. Select Custom App.
6. Ensure that the Authentication Method is selected as OAuth 2.0 with JWT (Server Authentication).
7. Name the app appropriately, typically Netwrix Data Classification.
8. Select View Your App on the confirmation screen.
9. Open the **Configuration** window by clicking the related item on the left.

   Navigate to Application Access and make sure that level is set to Enterprise. Click **Save
   changes**.

10. Navigate to **Advanced Features** and turn ON both switches: **Perform Actions as User** and
    **Create User Access Token**.
11. Then you should create a public/private key pair to authenticate the JWT requests made by your
    app. Navigate to Add and Manage Public Keys and select Generate a Public/Private Keypair.

    **NOTE:** If you have not enabled two-factor authentication for the app account in advance, you
    will be prompted to do it. Click **Settings**, then in the **Account Settings**, navigate to
    **Authentication**. Select **Require 2-step verification to protect your account**, then provide
    the necessary information in the **Enable Login Verification** dialog and complete the
    verification. When finished, get back to the **Configuration** section, clicking the related
    item in the left pane.

    ![box_keys](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/box_keys.webp)

12. You will be notified about downloading a JSON file with all configuration settings of your app.

    **IMPORTANT!** Since Box does not store any private keys, this file contains the only copy of
    your private key, so store it securely.

### Step 2. Authorize the App

1. Go to the **General** section by clicking the item in the left pane.
2. Navigate to **App Authorization** and click **Submit for Authorization**. In the dialog
   displayed, review the settings.

**NOTE:** If you are a Box administrator, copy the **Client ID** and store it to a safe location.

3. Click **Submit** to send a request to Box administrator.

**IMPORTANT!** If any changes are made to the app configuration later, you will need to re-authorise
the app.

If you are a Box administrator, you will receive an email with submitted request. Authorize it, as
decribed in Box documentation. For instance, you can take these steps:

1. Navigate to [box.com](https://www.box.com/en-gb/home) and open the **Admin Console**.
2. Click **Apps** on the left.
3. Navigate to Custom Apps and select Authorise New App:
4. Enter the Client ID of the app you received (the _API Key_ in email).
5. Click Authorize.

See also:

Box documentation
at[ https://developer.box.com/guides/authentication/#section-advanced-features](https://developer.box.com/guides/authentication/#httpsdeveloperboxcomguidesauthenticationsection-advanced-features)

# Configure G Suite and Google Drive for Crawling

Netwrix Data Classification can crawl both: Personal Google Drives and G Suite domains. Netwrix Data
Classification for Google Drive uses the OAuth 2.0 protocol to authenticate to your G Suite domain.
You will need to create a service account and authorize it to access data in individual and shared
Drives on behalf of users using the Google Drive API. Depending on your drive type, do the
following:

- [Сonfiguring G Suite for Crawling](#сonfiguring-g-suite-for-crawling)
- [Configuring Personal Google Drive for Crawling](#configuring-personal-google-drive-for-crawling)

## Сonfiguring G Suite for Crawling

In Google Cloud Platform web console:

1. Create a new project
2. Select Application type
3. Create a new service account
4. Create a service account key (JSON, save a copy for the data source configuration)
5. Enable G Suite domain-wide delegation for the service account (write down the Client ID)
6. Enable Google Drive API

In G Suite Admin Console:

1. Authorize service account to access the Google Drive API

To configure G Suite for crawling

**IMPORTANT!** Google administrative interfaces tend to change over time, so refer to the following
guide for up-to-data instructions on creating OAuth 2.0 service accounts:
[Using OAuth 2.0 for Server to Server Applications](https://developers.google.com/identity/protocols/OAuth2ServiceAccount).

Review the following for additional information:

| To...                                                 | Do...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create a new project                                  | 1. Navigate to https://console.developers.google.com (Google Cloud Platform web console) while logged in as a G-Suite administrator within the domain to be crawled (if the user is not added within the correct domain then the correct data will not be identified). 2. Create a new project.                                                                                                                                                                                                                                                                                                                                                                     |
| Select Application type                               | 1. Once a new project has been created, navigate to APIs&Services → OAuth consent screen. 2. Set User type to "_Internal_". 3. Provide the name for new application. 4. Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Create a new service account                          | 1. In Google Cloud Platform web console, navigate to Credentials and click Create Credentials. 2. Then, click Service account. 3. Create service account as described in Google official [article](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#article). 4. On the Grant this service account access to project (optional) step, do not select any roles. 5. On the Grant users access to this service account (optional) step, do not grant any user access. Click Done.                                                                                                                                                                 |
| Create a service account key                          | 1. On the Service accounts section, click edit on the account you want to create a key for. 2. Click ![add_key_icon](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/add_key_icon.webp) icon under Actions and select Create key. 3. In the Create private key for `<Service account name>` dialog, select JSON format, and download the file to a known location as it will be required later. **NOTE:** Your new public / private keypair is generated and downloaded to your machine; it serves as the only copy of this key. You are responsible for storing it securely. If you lose this keypair, you will need to generate a new one. |
| Delegate domain-wide authority to the service account | 1. On the Service accounts section, select your service account and click Edit. 2. Click the Show Domain-Wide Delegation link and tick the Enable G Suite Domain-wide Delegation checkbox. 3. Click Save. 4. Once completed, review the "_Domain wide delegation_" column for this account and make sure that the delegation enabled. 5. Click the View Client ID link. 6. Copy your Client ID, you will need it later.                                                                                                                                                                                                                                             |
| Enable Google Drive API                               | 1. In Google Cloud Platform web console, navigate to the API Dashboard and select Enable APIs and Services (if APIs have not previously been enabled). 2. Search for Google Drive API and click Enable (or Manage). 3. Search for Admin SDK API and click Enable (or Manage). 4. Switch to G Suite Admin Console. 5. Navigate to Security → API Controls → Manage Domain-wide Delegation within the Google admin portal. 6. Set the client name to the Client ID you copied on the previous step. 7. Set the API scopes and select Authorize: - https://www.googleapis.com/auth/drive - https://www.googleapis.com/auth/admin.directory.user                        |

## Configuring Personal Google Drive for Crawling

In Google Cloud Platform web console:

1. Create a new project
2. Select Application type
3. Create a new service account
4. Create a service account key (JSON, save a copy for the data source configuration)
5. Enable Google Drive API

In your Google Drive:

1. Allow sharing for your files and folders

Review the following for additional information:

| To...                                    | Do...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create a new project                     | 1. Navigate to https://console.developers.google.com Google Cloud Platform web console) while logged in as a G-Suite administrator within the domain to be crawled (if the user is not added within the correct domain then the correct data will not be identified). 2. Create a new project.                                                                                                                                                                                                                                                                                                                                                          |
| Select Application type                  | 1. Once a new project has been created, navigate to APIs&Services → OAuth consent screen. 2. Set User type to "_Internal_". 3. Provide the name for new application. 4. Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Create a new service account             | 1. In Google Cloud Platform web console, navigate to IAM & Admin→Service Accounts. 2. Create service account as described in Google official [article](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#article). 3. On the Grant this service account access to project (optional) step, do not select any roles. 4. On the Grant users access to this service account (optional) step, do not grant any user access. Click Done.                                                                                                                                                                                                 |
| Create a service account key             | 1. On the Service accounts page, select the account you want to create a key for. 2. Click ![add_key_icon](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/add_key_icon.webp) icon under Actions and select Create key. 3. In the Create private key for `<Service account name>` dialog, select JSON format, and download the file to a known location as it will be required later. **NOTE:** Your new public/private keypair is generated and downloaded to your machine; it serves as the only copy of this key. You are responsible for storing it securely. If you lose this keypair, you will need to generate a new one. |
| Enable Google Drive API                  | 1. In Google Cloud Platform web console, navigate to the API Dashboard and select Enable APIs and Services (if APIs have not previously been enabled). 2. Search for Google Drive API and click Enable (or Manage).                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Allow sharing for your files and folders | 1. Navigate to each Google Drive account that you wish to crawl 2. Right click each file / folder you wish to crawl and select Share… 3. Enter email address of the service account you created on the Create a new service account step. To view email address, do the following: - In Google API console, navigate to IAM & Admin → Service Accounts. - Select your service account and click Edit. - Review email address in the Email field. 4. If you wish to write classifications or apply workflows, ensure that Can organize, add, &edit option is selected (expand the menu to the right of People field).                                    |
