# Configure Box for Crawling

Netwrix Data Classification connects to and crawls a Box source via a custom Box app, created within Box management portal.

## Prerequisites

1. Check if your Box license plan provides the capacity you need. Netwrix Data Classification uses API calls for content crawling (min one API call for a single file). Therefore, if you need to store and crawl a large amount of files in Box (e.g. 100, 000 files), then your selected plan should support a sufficient number of API calls per month. Otherwise, the solution will not be able to crawl your content in one month due to limited number of allowed API calls (e.g. with a _Starter_ plan that provides only 25 000 calls per month). So, when selecting a Business subscription plan at [https://www.box.com/pricing](https://www.box.com/pricing), remember to click __Show more features__ in the bottom and examine the information on __API calls per month__ supported by each plan.

![box_lic_plans_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/box_lic_plans_thumb_0_0.png)

2. Make sure you have configured a valid Google account (with multi-factor authentication supported) and registered it as a _Box Developer Account_. This account is needed to create an app that Netwrix Data Classification will use for interaction with Box API. For more information on the custom apps and Box API, refer to [this article](https://developer.box.com/guides/authentication/sso/).

__NOTE:__ Account with multi-factor authentication will be required for private/public keys creation and usage, so if such authentication is not enabled, the program will display a warning message and suggest to configure the necessary settings.

## Procedure Steps

There are four key stages in this procedure:

1. Create an app.
2. Authorize the app to access your organization’s data.
3. Register the source with Netwrix Data Classification.
4. Configure content for crawling within Box.

This section describes steps 1 and 2 that are performed on the Box side. Steps 3 and 4 are performed on the Netwrix Data Classification side and described in the [Box](/versioned_docs/dataclassification_5.6.2/ndc/sources/box/box.md)section.

### Step 1. Create the App

1. Log into your Box cloud-based storage facility using your _Box Developer Account_.
2. Open the Box developer's console endpoint: ```https://app.box.com/developers/console```.
3. If you have not created an app before, you will see a screen similar to the one below:

   ![box_app](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/box_app.png)
4. Click __Create New App__.
5. Select Custom App.
6. Ensure that the Authentication Method is selected as OAuth 2.0 with JWT (Server Authentication).
7. Name the app appropriately, typically Netwrix Data Classification.
8. Select View Your App on the confirmation screen.
9. Open the __Configuration__ window by clicking the related item on the left.

   Navigate to Application Access and make sure that level is set to Enterprise. Click __Save changes__.
10. Navigate to __Advanced Features__ and turn ON both switches: __Perform Actions as User__ and __Create User Access Token__.
11. Then you should create a public/private key pair to authenticate the JWT requests made by your app. Navigate to Add and Manage Public Keys and select Generate a Public/Private Keypair.

    __NOTE:__ If you have not enabled two-factor authentication for the app account in advance, you will be prompted to do it. Click __Settings__, then in the __Account Settings__, navigate to __Authentication__. Select __Require 2-step verification to protect your account__, then provide the necessary information in the __Enable Login Verification__ dialog and complete the verification. When finished, get back to the __Configuration__ section, clicking the related item in the left pane.

    ![box_keys](/img/versioned_docs/dataclassification_5.6.2/ndc/config_infrastructure/box_keys.png)
12. You will be notified about downloading a JSON file with all configuration settings of your app.

    __IMPORTANT!__  Since Box does not store any private keys, this file contains the only copy of your private key, so store it securely.

### Step 2. Authorize the App

1. Go to the __General__ section by clicking the item in the left pane.
2. Navigate to __App Authorization__ and click __Submit for Authorization__. In the dialog displayed, review the settings.

__NOTE:__ If you are a Box administrator, copy the __Client ID__ and store it to a safe location.

3. Click __Submit__ to send a request to Box administrator.

__IMPORTANT!__ If any changes are made to the app configuration later, you will need to re-authorise the app.

If you are a Box administrator, you will receive an email with submitted request. Authorize it, as decribed in Box documentation. For instance, you can take these steps:

1. Navigate to [box.com](https://www.box.com/en-gb/home) and open the __Admin Console__.
2. Click __Apps__ on the left.
3. Navigate to Custom Apps and select Authorise New App:
4. Enter the Client ID of the app you received (the _API Key_ in email).
5. Click Authorize.

See also:

Box documentation at[ https://developer.box.com/guides/authentication/#section-advanced-features](https://developer.box.com/guides/authentication/#httpsdeveloperboxcomguidesauthenticationsection-advanced-features)
