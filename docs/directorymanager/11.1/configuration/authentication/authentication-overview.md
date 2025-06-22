# Directory Manager as an Identity Provider

Directory Manager can provide the services of an identity provider. You can register a third-party
application as a service provider in Directory Manager to authenticate users in that application
through Directory Manager.

To use Directory Manager as an identity provider, you have to: register an application (service
provider) in Directory Manager. See the
[Register an Application (Service Provider) in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional
information.

You can also specify default values for the issuer URL and signing certificate, that are used to
configure Directory Manager in the service provider. See the
[Specify Default Metadata Values](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic for additional information.

To sign in using Directory Manager, see the [Sign In Using Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic.

# Register an Application (Service Provider) in Directory Manager

To register a service provider in Directory Manager, you have to create an application for the
provider in Directory Manager.

Next, while configuring Directory Manager in the service provider, you have to provide Directory
Manager metadata. You can copy metadata values and paste them in the service provider.

## Create an Application for a Service Provider

Follow the steps to create an application for a service provider in Directory Manager.

Step 1 – In Directory Manager Authenticate, go to the SAML Applications tab and click **New
Application**.

Step 2 – On the Create Application page, enter a name for the application in the Name box. The
application will be displayed on the Directory Manager Login page with this name.

Step 3 – Copy the consumer URL from the service provider and enter it In the Consumer URL box.

Step 4 – Copy the audience URL from the service provider and enter it In the Entity ID/Audience box.

Step 5 – From the Identity store drop-down list, select the identity store to use for authenticating
users.  
For single sign-on, third-party application users must authenticate through an identity store
defined in Directory Manager. For example, to authenticate users through Active Directory, select an
AD-based identity store.

Step 6 – Next, specify an attribute as a claim. Service provider application users are authenticated
in Directory Manager based on this attribute.  
Enter the attribute name in the Claims box. As you type, the system displays the attributes in the
selected identity store that start with the text. Select the required attribute.  
Directory Manager will match the value of this attribute in the application and in the identity
store for authentication.

Step 7 – Click **Browse** under Identity Provider Image to upload an image for the application, such
as the application logo.

NOTE: Supported image formats: .jpg, .bmp, .webp, and .gif  
Image file dimensions: 210 x 60 pixels

Step 8 – Expand the Advanced section by clicking the down arrow head to specify advanced settings
for the application.

Step 9 – Select _Enabled_ or _Disabled_ in the Response Signing drop-down list, depending on whether
it is enabled or disabled in the service provider.

Step 10 – Select a response signing method from the Response Signing Method drop-down list. This
method should be the same for the identity provider (Directory Manager) and the service provider
(third-party application).

Step 11 – Select _Post_ or _Redirect_ in the Response Binding drop-down list, depending on how the
service provider accepts the response.

Step 12 – If you are not using assertion encryption, make sure _Disabled_ is selected in the
Assertion Encryption drop-down list.  
To use assertion encryption as an advanced security feature, select **Enabled**. Then provide the
certificate, key transport algorithm, and encryption algorithm to encrypt the response.

Step 13 – Generate a logout URL in the service provider and enter it in the Single Logout URL box.
When a user clicks this URL, he or she will be logged out of all applications that have been
authenticated through Directory Manager (i.e., applications that he or she is single signed in
through Directory Manager).

Step 14 – Provide the Directory Manager metadata in the service provider to register Directory
Manager as an identity provider in it. See the Directory Manager Metadata for Service Provider
Configurations topic.

Step 15 – Click **Create Application** to create the service provider in Directory Manager.

### Directory Manager Metadata for Service Provider Configurations

As part of registering an application in Directory Manager, you also have to provide Directory
Manager metadata in the service provider.

Follow the steps to copy the metadata.

Step 1 – On the Create Application page, expand the Metadata section by clicking the down arrow
head.

Step 2 – Copy the Issuer URL and Directory Manager certificate from the Provider Issuer and Provider
Signing Certificate boxes and paste them in the service provider.

Step 3 – Both the Provider IDP Redirect Endpoint and Provider IDP POST Endpoint are given here.
Depending on how the service provider sends the request or the mechanism used, copy the appropriate
URL and paste it in the service provider.

Step 4 – The Single Logout Endpoint POST box displays a URL. Requests are posted on this URL for
logging out from the current and all other third-party applications configured in Directory Manager.

Step 5 – The Login URL box displays a URL. On clicking it, the user is redirected to the Directory
Manager Login page where Directory Manager is acting as an identity provider. If the user is already
logged into Directory Manager, he/she will be auto-authenticated; else the user will have to provide
the credentials.

# Sign In Using Directory Manager

Let’s assume that we configured three service providers in Directory Manager. Users should be able
to access these applications through Directory Manager.

For single sign-on using Directory Manager, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from any
  of the registered service providers.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  Directory Manager.

### IdP-Initiated Single Sign-On

Step 1 – In Directory Manager Authenticate, go to the SAML Applications tab and click **New
Application**.

Step 2 – On the Create Application page, click the _Login URL_ displayed in the Metadata section.  
On clicking it, the user is redirected to the Directory Manager login page where Directory Manager
is acting as an identity provider. If the user is already logged into Directory Manager, he/she will
be auto-authenticated; else the user will have to provide the credentials.

# Configure Directory Manager in Microsoft Entra ID for SSO

Following are the steps to create and configure the Directory Manager application in Microsoft Entra
Admin Center:

- Create an application for Directory Manager in Microsoft Entra Admin Center.
- Assign owners to the application.
- Assign users to log into Directory Manager using Microsoft Entra ID SSO.
- Specify SAML SSO configurations for the application.

## Configure Directory Manager in Microsoft Entra ID

Follow the steps to configure Directory Manager in Microsoft Entra ID.

Step 1 – Sign into Microsoft Entra Admin Center.

Step 2 – Go to Microsoft Entra ID > Enterprise applications.

Step 3 – On the Enterprise applications page, click **New application** to add a new application.

Step 4 – On the Browse Microsoft Entra Gallery page, click **Create your own application**.

Step 5 – On the Create your own application pane, do the following:

1. Enter a name for your application In the What's the name of your app? box (for example, Entra
   SSO).
2. Select the **Integrate any other application you don't find in the gallery (Non-gallery)** option
   button.
3. Click **Create**.  
   On creating an application, an Overview page is displayed for it.

Step 6 – On the Overview page, click **Properties** in the left pane to navigate to the
application's properties.

Step 7 – On the Properties page, make sure the application is enabled so that users can sign in. For
this, the Enabled for Users to sign in option should be set to _Yes_.

Step 8 – The Name box displays the application name. You can change the application logo. Your
application is displayed with the logo in the Access Panel Applications.

Step 9 – Make sure Assignment required? is set to _Yes_. We will be assigning users manually, who
would be able to log into the Directory Manager portal _Wizard_ using Microsoft Entra SSO.

Step 10 – Next, assign owners to the application. To assign one or more users as owners of the
application, click **Owners** under Manage in the left pane.

Step 11 – On the Owners page, click **Add** and search the user(s) you want to assign as owners. For
example, you can specify your service account as an owner.

Step 12 – The next step is to assign users who can sign into the Directory Manager portal _Wizard_
using Microsoft Entra ID SSO. You can specify users and groups.  
Click **Users and groups** under Manage in the left pane. On the Users and groups page, click **Add
user/group**. On the Add Assignment page, search for your required user or group, select it and
click **Assign**.

Step 13 – Now you have to specify SAML SSO configurations for the application. Click **Single
sign-on** under Manage in the left pane. The Single sign-on page displays different methods that
Microsoft Entra ID provides for single sign on. Select _SAML_.  
The SAML-based Sign-on page is displayed, where you have to set single sign-on options for Directory
Manager.

Step 14 – On the Basic SAML Configuration card, click **Edit**.

Step 15 – On the Basic SAML Configuration pane, provide the Entity ID and Consumer URL that you
copied earlier. See the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic.  
After adding the information, click **Save**.

Step 16 – Back on the SAML-based sign-on page, the Attributes & Claims card displays the attributes
used for logging in. Let’s keep the defaults.

Step 17 – On the SAML Certificates card, download _Certificate (Base64)_.

# Configure the Microsoft Entra SSO Application in Directory Manager

To configure a SAML provider in Directory Manager, you have to specify the following:

- IDP certificate
- IDP Login URL
- Issuer URL
- Advanced configurations

## Configure the Provider in Directory Manager

Follow the steps to configure the provider in Directory Manager.

Step 1 – In Directory Manager Authenticate, click the **SAML Providers** tab.

Step 2 – On the SAML Providers page, click **New Provider**.

Step 3 – On the Create New Provider page, enter a name for the provider in the Name box. For
example, Entra ID SSO.

Step 4 – Make sure the Client box displays the name of the Directory Manager client for which you
generated the Entity ID/Audience URL and provided that while creating the Directory Manager
application in Microsoft Entra Admin Center.

Step 5 – Open the Certificate (Base64) file that you downloaded from Microsoft Entra Admin Center
and copy the certificate information.  
On the Create New Provider page, paste it in the IDP Certificate box. Make sure you have not copied
any trailing space.

Step 6 – In Microsoft Entra Admin Center, copy the Login URL from the Set up Azure SSO card on the
SAML-based sign-on page and paste it in the IDP Login URL box on the Create New Provider page.

Step 7 – Again, copy the Azure AD Identifier URL from the Set up Azure SSO card on the SAML-based
sign-on page and paste it in the Issuer box on the Create New Provider page.

Step 8 – Expand the Advanced section on the Create New Provider page.

Step 9 – Select _Post_ in the Request Binding drop-down list.

Step 10 – The Disable GroupID Authentication option indicates whether to display the Directory
Manager authentication login on the Directory Manager client's login page.

- By default, ‘No’ is selected, which means that when users access the Directory Manager client's
  login page, they will be shown the Directory Manager login and password option along with the
  identity provider’s button.
- Selecting ‘Yes’ means that the Directory Manager login and password option will not be available
  on the Directory Manager client's login page. Moreover, when a single identity store and a single
  SAML provider is configured, the login page for the provider is displayed rather than the
  Directory Manager client's login page.

Step 11 – Click the **Create Provider** button. The identity provider is created and displayed on
the SAML Providers page.

# Generate URLs

To generate the consumer URL and audience URL, see the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md)
topic. Replace references to AD FS with Microsoft Entra ID SSO.

# SAML Configuration for Directory Manager using Microsoft Entra ID SSO

Microsoft Entra ID SSO enables users to conveniently access all their apps from any location, on any
device, from a centralized and branded portal for a simplified user experience and better
productivity.

Here are the steps to configure single sign-on in Directory Manager using Microsoft Entra ID as a
provider:

- Generate the consumer URL and audience URL for the Directory Manager client with which you want to
  configure Microsoft Entra ID SSO. See the[Generate URLs](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional
  information.
- [Configure Directory Manager in Microsoft Entra ID for SSO](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)
- [Configure the Microsoft Entra SSO Application in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)

That done, you can sign into Directory Manager using Microsoft Entra ID SSO. See the
[Sign In Using Microsoft Entra ID SSO](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional information.

# Sign In Using Microsoft Entra ID SSO

We configured Microsoft Entra ID SSO with a Directory Manager client, that is the Directory Manager
portal _Wizard_ in our example. For single sign-on using Microsoft Entra ID SSO, we can choose any
of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  the Microsoft Entra ID SSO application.

### SP-Initiated Single Sign-On

Step 1 – Launch the Directory Manager portal _Wizard_.  
On the Login page, notice the Microsoft Entra ID SSO button. You can login using your Directory
Manager credentials or click this button to log in.  
The availability of the user name and password fields depends on whether you disabled Directory
Manager Authentication or not (see step 10 in the
[Configure the Provider in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#configure-the-provider-in-directory-manager)
topic).

Step 2 – Click the button or image for Microsoft Entra ID SSO; the Microsoft Sign In page is
displayed.

Step 3 – Enter your credentials and click **Sign In**. You will be routed to the main page of the
Directory Manager portal _Wizard_.  
Only users defined for our app in Microsoft Entra Admin Center can log in by entering their user
names and passwords. See step 11 in the
[Configure Directory Manager in Microsoft Entra ID](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#configure-directory-manager-in-microsoft-entra-id)
topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

### IdP-Initiated Single Sign-On

Step 1 – Launch the Microsoft My Apps portal using the following URL and sign in.  
https://myapps.microsoft.com

Step 2 – Click the Directory Manager app that we created to work with the _Wizard_ portal for single
sign-on; it will redirect you to your portal.

# Configure Directory Manager In Okta

To configure Directory Manager in Okta, follow these steps:

- Create an app for Directory Manager in Okta
- Download the Okta metadata file
- Configure Users in Okta

## Configure Directory Manager In Okta

1. Launch Okta and sign in.
2. On signing in, the Okta dashboard is displayed.
3. To configure the Directory Managerapplication in Okta, click **Applications** in the ribbon at
   the top.
4. On the **Applications** page, click the **Add Application** button.
5. The **Add Application** page displays some preconfigured options. Click the **Create New App**
   button.
6. On the **Create a New Application Integration** dialog box, select the **SAML 2.0** option button
   and click **Create**.
7. On the **General Settings** tab of the **Create SAML Integration** page, provide a user-friendly
   name for the app (for example, Directory Manager Okta Sign-On) in the **App name** box.
8. Use the **App Logo** option to upload a logo for the Directory Manager app. This logo will be
   displayed on the Okta dashboard. When a user signs into Okta, he or she will be redirected to the
   dashboard that will have Directory Manager and other applications listed for single sign-on.
9. Click **Next**.
10. On the **Configure SAML** tab of the **Create SAML Integration** page, provide the consumer URL
    and audience URL that you generated for the Directory Manager client In the **Single sign on
    URL** and **Audience URI (SP Entity ID)** boxes respectively. See the
    [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic.
11. We will not specify any default relay state, so leave the **Default Relay State** field blank.
12. Leave the **Name ID format** field selected to _Unspecified_.
13. In the **Application username** list, make sure _Okta username_ is selected. This implies that
    only users defined in Okta can authenticate on the Directory Manager portal _Wizard_ using the
    Okta single sign-on option. See the Configure Users in Okta topic.
14. Click **Show Advanced Settings**.
15. The **Attribute Statements** area is for specifying an attribute that will be used to
    authenticate users who will be signing into Directory Manager using Okta. Hence, this attribute
    is meant for user identification.  
    Skip this section and leave the selections to default. The Okta provider would authenticate
    users on the basis of the username.
16. Click **Next**.
17. On the **Feedback** tab of the **Create SAML Integration** page, select the option, **I’m a
    software vendor. I’d like to integrate my app with Okta** and click **Finish**.

With this, the Directory Manager OKTA SSO app is successfully added in Okta, and the **Sign-On**
page is displayed.

### Download the Okta Metadata File

You can download a metadata file from Okta and import it into Directory Manager to configure the
Okta provider in Directory Manager.

**To download the file:**

1. On the **Sign-On** page, go to the **Sign On** tab. In the **Sign On Methods** area, click the
   **Identity Provider metadata** link.
2. On the **Opening metadata** dialog box, make sure the **Save File** option is selected and click
   **OK**. The file downloads and the **Library** dialog box opens, showing the downloaded file.
3. Right-click the metadata file and select the **Open Containing Folder** option on the shortcut
   menu.
4. The next dialog box displays the file at its download location. Either copy the file to your
   desktop for simplicity or save its location, so that you can easily locate it for import into
   Directory Manager.

### Configure Users in Okta

You must define users in Okta. Only these users can authenticate on the Directory Manager portal
_Wizard_ using Okta. See the [Sign In Using Okta](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic.

There are multiple ways to define users in Okta, such as:

- Add users manually
- Use a CSV file to import users
- Use the Active Directory tool provided by Okta (that syncs Active Directory users to Okta)

For all of these, if Okta finds an existing user in its own database, it will link the Directory
Manager application to the existing account. If not, it will create a new Okta account for the user.
For new users, Okta generates a password and sends it to them by email.

**To configure users:**

1. Click the **People** tab on the **Sign-On** page.
2. To create users manually, visit the
   [Add users manually](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-add-users.htm)
   page.  
   To import users into Okta, visit the
   [Import users](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-import-users-main.htm)
   page.  
   To use an Active Directory tool for adding users, see the
   [Import Active Directory users on demand](https://help.okta.com/en-us/content/topics/directory/ad-agent-import-users-on-demand.htm)
   page.
3. After defining users, you must manually add these users. On the **People** tab, click the
   **Assign to People** button.
4. On the **Assign Okta Sign-On to People** dialog box, click **Assign** for a user so that they can
   authenticate on the Directory Manager portal _Wizard_ using Okta.
5. The next page on the dialog box displays the **User Name** field populated with the user name.
   Remove the domain after the user’s name, i.e., the part starting with ‘@’. After removing the
   domain, we are left with the user name. The user will use this name to authenticate on the
   _Wizard_ portal using Okta.  
   This done, click **Save and Go Back**.
6. Repeat steps 4 and 5 for all the required users and then click **Done** on the **Assign Okta
   Sign-On to People** dialog box. The users will be displayed on the **People** page.
7. The next step is to activate the user accounts. Click the **Directory** link in the ribbon at the
   top.
8. On the **Directory** page, click the **Activate** link for the required user.
9. On the **Activate Person** dialog box, click **Activate User**.  
   With this, we have successfully configured users within the Okta provider.

# Configure the Okta Provider In Directory Manager

While creating the Okta provider in Directory Manager, you simply have to import the Okta metadata
file to configure all settings for this identity provider.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the Directory Manager client for which you
   generated the Entity ID/Audience URL and provided that while creating the Directory Manager
   application in Okta.
5. While creating the Directory Manager application in Okta, we downloaded a metadata file. See the
   [Download the Okta Metadata File](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#download-the-okta-metadata-file) topic.  
   To import this file, click the **Import from Metadata** button under the **Advanced** section.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the Okta metadata file downloaded earlier. Then click **Upload**. With this, several fields on
   the **Create New Provider** page are automatically filled in.
7. When Okta is configured with a Directory Manager client, it will be available on the login page
   of that client (the Wizard portal in our example) for single sign-on. You can choose to display
   the Okta authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with Okta.
8. Expand the **Advanced** section on the **Create New Provider** page.  
   View the settings and leave them to defaults.
9. For _Disable GroupID Authentication_, see step 2 in the
   [Specify Advanced Configurations](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#specify-advanced-configurations)
   topic. Replace references to AD FS with the Okta provider.
10. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.

# Generate URLs

To generate the consumer URL and audience URL, see the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md)
topic. Replace references to AD FS with Okta.

# SAML Configuration for Directory Manager using Okta

Okta provides secure identity management and single sign-on to any application, whether in the
cloud, on-premises or on a mobile device for the employees in an organization.

Here are the steps to configure single sign-on in Directory Manager using Okta as a provider:

- Generate the consumer URL and audience URL for the Directory Manager client with which you want to
  configure Okta. See the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional information.
- [Configure Directory Manager In Okta](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)
- [Configure the Okta Provider In Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)

That done, you can sign into Directory Manager using Okta. See the [Sign In Using Okta](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)
topic for additional information.

# Sign In Using Okta

We configured Okta with a Directory Manager client, that is the Directory Manager portal _Wizard_ in
our example. For single sign-on using Okta, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  Okta.

### SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   On the **Login** page, notice the Okta button. You can login using your Directory Manager
   credentials or click Okta to log in.  
   The availability of the user name and password fields depends on whether you disabled Directory
   Manager Authentication or not (see step 9 in the
   [Configure the Provider in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#configure-the-provider-in-directory-manager)
   topic).
2. Click the button/image/link for Okta; the Okta Sign In page is displayed.
3. Enter your credentials and click **Sign In**. You will be routed to the main page of the
   Directory Manager portal _Wizard_.  
   Only users defined for our app in Okta can log in by entering their user names and passwords. See
   the [Configure Users in Okta](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#configure-users-in-okta) topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

### IdP-Initiated Single Sign-On

1. Launch the Okta portal using the URL provided by your organization and sign in. The Okta
   dashboard displays the apps configured with Okta for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.

# Configure Directory Manager In OneLogin

Configuring Directory Manager in OneLogin involve the following steps:

- Create an app for the Directory Manager portal _Wizard_ in OneLogin
- Configure this app by specifying the consumer URL and audience URL
- Specify an attribute for authenticating users who use the OneLogin single sign-on option to log
  into the _Wizard_ portal
- Define SSO settings

You also have to:

- Define users in OneLogin, who can authenticate on the _Wizard_ portal using OneLogin.
- Download the OneLogin metadata file, that will be used to configure the OneLogin provider in
  Directory Manager.

## Create an App for Directory Manager in OneLogin

1. Launch OneLogin.
2. On the Home page, click **New App** to add a new application in the OneLogin control panel.  
   To continue with our example, we will be adding the Directory Manager portal _Wizard_.
3. The **Find Applications** page is displayed, with a list of already created applications. In the
   **Find Applications** box, type ‘SAML’ to search for single sign-on applications.
4. In the search results, select the **SAML Test Connector (IdP)** option (without any attributes or
   any sign responses).
5. On the **Add SAML Test Connector (IdP)** page, specify a user-friendly name for the application
   in the **Display Name** box.
6. You can also upload an image for the Directory Manager app that will be displayed on the user
   dashboard in OneLogin.  
   When a user logs into OneLogin, he or she will be redirected to the dashboard that will have
   Directory Manager and other applications listed for single sign-on.
7. Click **Save**.  
   A message is displayed that the app is added and a few links are displayed under the message.
   Using them, you can specify certain settings for the app.

**Provide consumer URL and audience URL:**

8. Click the **Configurations** link. The **Configurations** page for the new app is displayed.
9. In the **ACS (Consumer) URL Validator** and **ACS (Consumer) URL** boxes, provide the consumer
   URL that you generated for the Directory Manager client _Wizard_. See the
   [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic.
10. In the **Audience** box. provide the audience URL that you generated for the Directory Manager
    client _Wizard_.

**Specify attribute for user authentication:**

11. Click the **Parameters** link at the top.
12. On the **Parameters** page, _Email_ is already set as the entity ID that will be used for
    authenticating users who opt to sign into Directory Manager using the OneLogin single sign-on
    option. Leave all settings to default.

**Configure SSO settings:**

13. Click the **SSO** link at the top.
14. In the **SAML Signature Algorithm** list on the **SSO** page, select _SHA-256_.
15. The page also displays the Issuer URL and the endpoint URLs for both the post and redirect
    methods. You will have to provide the Issuer URL and the SAML 2.0 Endpoint (HTTP) URL while
    configuring the OneLogin provider in Directory Manager. Copy and paste them in a file,
    preferably a text file, to save them.

**Define users:**

16. Click the **Access** link at the top. The **Policy** list displays any policies that you may
    have configured for users. You can select a policy to enforce it.
17. Click the **Users** link at the top. To define and manage users, see the Define Users in
    OneLogin topic.
18. Click **Save**.

### Download the OneLogin Metadata File

You can download a metadata file from OneLogin and import it into Directory Manager to configure the
OneLogin provider in Directory Manager.

**To download the file:**

1. On the OneLogin Home page, click **More Actions** in the top right corner and select **SAML
   Metadata**. This will download the OneLogin metadata file on your machine.
2. For convenience, either copy the file to your desktop or save its location, so that you can
   easily locate it for import into Directory Manager.  
   Importing the metadata file will being in all the configurations for the OneLogin identity
   provider in Directory Manager.

### Define Users in OneLogin

You must define users in OneLogin. Only these users can authenticate on the Directory Manager portal
_Wizard_ using OneLogin. See the [Sign In Using OneLogin](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic.

**To define a user:**

1. In OneLogin, click **Users** in the ribbon at the top; the **All Users** page is displayed.
2. Click the **New User** button.
3. On the **New User** page, create a new user, for example, Leo Ferguson. Enter the required
   information for this user and click **Save User** to create the user.  
   A message is displayed that the user is created and a few links are displayed under the message.
   Using them, you can specify certain settings for the user.  
   Notice that we specified a user name but no password for the user. We will specify it later.
4. Click the **Authentication** link.
5. On the Authentication page, make sure _OneLogin_ is selected in the **Authenticated By**
   drop-down list.
6. In the **User Security Policy** drop-down list, select _Default policy_.
7. Click the **Applications** link.
8. On the **Applications** page, click the plus sign to specify the application that the user (i.e.,
   Leo Ferguson in our example) will be able to log on to.
9. On the **Assign New Login** dialog box, use the **Select Application** drop-down list to select
   the app that you created for Directory Manager in OneLogin. Then click **Continue**.
10. Another dialog box opens to display the user's email. you provided this email while creating the
    user. Click **Save**.
11. Back on the **Applications** page, click **Save User**.
12. Next, you have to update the user’s password in OneLogin. Click the **User Info** link. Them
    click **More Actions** and select _Change Password_.
13. On the **Change Password** dialog box, specify a new password for the user and click **Update**.
14. Click **Save User**.

# Configure the OneLogin Provider in Directory Manager

While creating the OneLogin provider in Directory Manager, you simply have to import the OneLogin
metadata file to configure all settings for it.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the Directory Manager client for which you
   generated the consumer URL and audience URL (see the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic).  
   To continue with the example, select the Directory Manager portal named _Wizard_.

**Import the OneLogin metadata file:**

5. Click the **Import from Metadata** button under the **Advanced** section to import the OneLogin
   metadata file that you downloaded earlier. See the
   [Download the OneLogin Metadata File](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#download-the-onelogin-metadata-file)
   topic.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the PingOne metadata file. Then click **Upload**. With this, several fields on the **Create New
   Provider** page are automatically filled in. However, you still have to provide the Issuer URL
   and IDP Login URL.

**Provide Issuer URL and IDP Login URL:**

7. In the **Issuer** box, enter the issuer URL you copied from the SSO page in OneLogin. See step 15
   in the
   [Create an App for Directory Manager in OneLogin](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#create-an-app-for-directory-manager-in-onelogin)
   topic.
8. In the **IDP Login URL** box, enter the endpoint URL for the post method. You copied this URL
   earlier from the **SAML 2.0 Endpoint (HTTP)** box on the **SSO** page in OneLogin. See step 15 in
   the[Create an App for Directory Manager in OneLogin](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#create-an-app-for-directory-manager-in-onelogin)
   topic.

**Upload an image for the identity provider:**

9. When OneLogin is configured with a Directory Manager client, it will be available on the login
   page of that client (the Wizard portal in our example) for single sign-on. You can choose to
   display the OneLogin authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with OneLogin.

**Specify advanced settings:**

10. Expand the **Advanced** section on the **Create New Provider** page.
11. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the OneLogin provider.
12. In the **Request Binding** drop-down list, select _POST_, since we used the endpoint URL for the
    post method in the **IDP Login URL** box.
13. We will not use the assertion encryption, so make sure _Disabled_ is selected in the **Assertion
    Encryption** drop-down list.
14. In the **Response Signing Method**drop-down list, select _RSA-SHA-256_, since we configured this
    method as the signing algorithm in the **SAML Signature Algorithm** list on the **SSO** page in
    OneLogin. See step 14 in
    the[Create an App for Directory Manager in OneLogin](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#create-an-app-for-directory-manager-in-onelogin)
    topic.
15. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.

# Generate URLs

To generate the consumer URL and audience URL, see the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md)
topic. Replace references to AD FS with OneLogin.

# SAML Configuration for Directory Manager using OneLogin

OneLogin provides single sign-on and identity management for organizations that embrace cloud
computing.

Here are the steps to configure single sign-on in Directory Manager using OneLogin as a provider:

- Generate the consumer URL and audience URL for the Directory Manager client with which you want to
  configure OneLogin. See the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional information.
- [Configure Directory Manager In OneLogin](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)
- [Configure the OneLogin Provider in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)

That done, you can sign into Directory Manager using OneLogin. See the
[Sign In Using OneLogin](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional information.

# Sign In Using OneLogin

We configured OneLogin with a Directory Manager client, that is the Directory Manager portal
_Wizard_ in our example. We also created a user, Leo Ferguson, in OneLogin who should be able to log
into the _Wizard_ portal using the OneLogin single sign-on option.

For single sign-on using OneLogin, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  OneLogin.

### SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled Directory
   Manager Authentication or not (see step 11 in the
   [Configure the Provider in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#configure-the-provider-in-directory-manager)
   topic).
2. Click the button or image for OneLogin; the OneLogin sign in page is displayed.
3. Enter Leo Ferguson’s login name and password, and click **Login**. The user is successfully
   logged into the _Wizard_ portal using the OneLogin single sign on option.  
   Only users defined for our app in OneLogin can log in by entering their user names and passwords.
   See the [Define Users in OneLogin](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#define-users-in-onelogin) topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

### IdP-Initiated Single Sign-On

1. Launch the OneLogin portal using the URL provided by your organization and log in. The OneLogin
   dashboard displays the apps configured with OneLogin for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.

# Directory Manager as a Service Provider

You can configureDirectory Manager as a service provider with the following identity providers:

- AD FS
- Microsoft Entra ID SSO
- Okta
- PingOne
- OneLogin

# Configure Directory Manager In PingOne

To configure Directory Manager in PingOne, follow these steps:

- Create an app for Directory Manager in PingOne
- Download the PingOne metadata file
- Map attributes for user authentication
- Configure users in PingOne

## Configure Directory Manager In PingOne

1. Launch the PingOne Identity dashboard.
2. Click **Applications** in the ribbon at the top.
3. On the **My Applications** tab of the **Applications** page, click **Add Application** and select
   the **New SAML Application** option to configure the Directory Manager client _Wizard_ in
   PingOne.  
   The new application is added and displayed in the **My Applications** area. The **Application
   Details** section is also displayed.
4. In the **Application Name** box, provide a name for the application.
5. In the **Application Description** box, provide a description. For example, you can specify the
   Directory Manager client with which you want to set up PingOne for single sign-on.
6. Select an option from the **Category** drop-down list, for example, Information Technology.
7. You can choose to upload an image for the Directory Manager app. This image will be displayed on
   the PingOne dashboard. When a user signs into PingOne, he or she will be redirected to the
   dashboard that has Directory Manager and other applications listed for single sign-on.
8. Click the **Continue to Next Step** button.
9. On the next page, make sure the **I have the SAML configuration** tile is selected.
10. Use the metadata file you generated for the _Wizard_ portal in Directory Manager to configure
    certain settings on this page. See the
    [Generate the Metadata File](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#generate-the-metadata-file) topic.  
    Click the **Select File** button next to **Upload Metadata**. Simply select the metadata file
    and it will be uploaded, thereby bringing in the required settings to configure the Directory
    Manager client _Wizard_ within PingOne. For example, the **Entity ID** box is populated with the
    required URL.
11. In the **Application URL** box, copy the same URL as displayed in the **Assertion Consumer
    Service (ACS)** box.
12. Select the _Post_ option button for **Single Logout Binding Type**.
13. In the **Signing Algorithm** drop-down list, select _RSA_SHA256_.
14. Click the **Download** link next to **SAML Metadata** to download the metadata file from the
    PingOne identity provider.  
    While creating the PingOne provider in Directory Manager, you can import this file to bring in
    all the configurations for PingOne.
15. No further configurations are required on this page. Scroll down and click the **Continue to
    Next Step** button. The **SSO Attribute Mapping** area is displayed.

### Attribute Mapping in PingOne

The next step is to specify an attribute that will be used to authenticate users who will be signing
into Directory Manager using the PingOne single sign-on facility. Hence, this attribute is meant for
user identification.

1. In the **SSO Attribute Mapping** area, click the **Add new attribute** button. A new row is
   displayed.
2. Click the **Advanced** button in this row; the **Advanced Attribute Options** dialog box is
   displayed.
3. In the **NameFormat** drop-down list, select the first option, i.e., the one ending with
   _unspecified_.
4. In the **IDP Attribute Name or Literal Value** box, type or select the Active Directory attribute
   you want to use for authentication. For example, _E-mail_. This attribute facilitates user
   identification.  
   To define users in PingOne, see the Configure Users in PingOne topic.
5. In the **Function** list, you can select the conversion methodology. For example, you can convert
   the first name or last name to upper case, lower case, or even use regular expressions. We will
   not use any conversion methodology here.
6. Click **Save** on the **Advanced Attribute Options** dialog box.
7. The specified attribute is displayed in the **Identity Bridge Attribute or Literal Value** box in
   the **SSO Attribute Mapping** area. Provide a user-friendly name for the attribute in the
   **Application Attribute** box.
8. There is one change we have to make. For attribute mapping, the email listed should be accurate,
   since we selected E-mail as the unique identifier.  
   Click the **Advanced** button in the row; the **Advanced Attribute Options** dialog box is
   displayed.
9. On clicking _E-mail_ in the **IDP Attribute Name or Literal Value** box, a drop-down is
   displayed. Select the _Email_ option. With this, users will be authenticated with their email
   address. Click **Save**.
10. Back on the **SSO Attribute Mapping** area, click the **Save & Publish** button.
11. The configurations we made in PingOne will be displayed. Click **Finish**.  
    The new Directory Manager application you created in PingOne is displayed under **My
    Applications**.

### Configure Users in PingOne

You must define users in PingOne. These users are authenticated in Directory Manager on the basis of
an attribute, as discussed in the Attribute Mapping in PingOne topic.

Only the users you define here can authenticate on the Directory Manager portal _Wizard_ using
PingOne. See the [Sign In Using PingOne](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic.

**To configure users:**

1. In PingOne, click **Users** in the ribbon at the top. The **Users** page is displayed.
2. Click the **Add Users** button and select the **Create New User** option to create a user.
3. On the **User** page, specify a password in the **New Password** and **Confirm New Password**
   boxes.
4. Specify a user name in the **Username** box.  
   The user will use this user name and password for single sign-on into Directory Manager using
   PingOne.
5. Enter other details of the user, such as first name, last name, and the email address.
6. Click **Save** to create the user.

# Configure the PingOne Provider In Directory Manager

While creating the PingOne provider in Directory Manager, you simply have to import the PingOne
metadata file to configure all settings for this identity provider.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the Directory Manager client for which you
   generated the consumer URL and the Directory Manager metadata file (see the
   [Generate the Consumer URL and Metadata File](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic).  
   To continue with the example, select the Directory Manager portal named _Wizard_.
5. Click the **Import from Metadata** button under the **Advanced** section to import the PingOne
   metadata file.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the PingOne metadata file downloaded earlier. Then click **Upload**. With this, several fields on
   the **Create New Provider** page are automatically filled in.
7. When PingOne is configured with a Directory Manager client, it will be available on the login
   page of that client (the Wizard portal in our example) for single sign-on. You can choose to
   display the PingOne authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with PingOne.
8. Expand the **Advanced** section on the **Create New Provider** page.
9. The **Response Signing Method** box displays _RSA-SHA-256_ as the signing method type. We
   configured this method as the signing algorithm in PingOne.
10. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the PingOne provider.
11. In the **Request Binding** list, select _POST_, since the **Single Logout Binding Type** is set
    to _Post_ in PingOne.
12. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.

# SAML Configuration for Directory Manager using PingOne

PingOne is an Identity as a Service (IDaaS) solution that enables organizations to deliver single
sign-on with just one username and password.

Here are the steps to configure single sign-on in Directory Manager using PingOne as a provider:

- Generate the consumer URL andDirectory Manager metadata file for the Directory Manager client with
  which you want to configure PingOne. See the
  [Generate the Consumer URL and Metadata File](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic for additional
  information.
- [Configure Directory Manager In PingOne](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)
- [Configure the PingOne Provider In Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)

That done, you can sign into Directory Manager using PingOne. See the
[Sign In Using PingOne](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional information.

# Sign In Using PingOne

We configured PingOne with a Directory Manager client, that is the Directory Manager portal _Wizard_
in our example. We also created a user in PingOne who should be able to sign into the _Wizard_
portal using the PingOne single sign-on option.

For single sign-on using PingOne, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  PingOne.

### SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled Directory
   Manager Authentication or not (see step 10 in the
   [Configure the Provider in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#configure-the-provider-in-directory-manager)
   topic).
2. Click the button for PingOne; the PingOne Sign In page is displayed.
3. Enter your credentials and sign in. You will be routed to the main page of the Directory Manager
   portal _Wizard_.  
   Only users defined for our app in PingOne can log in using PingOne single sign-on. See the
   [Configure Users in PingOne](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#configure-users-in-pingone) topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

### IdP-Initiated Single Sign-On

1. Launch the PingOne portal using the URL provided by your organization and sign in.  
   The PingOne dashboard will be displayed. It lists the apps configured with PingOne for single
   sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.

# Authenticate

Authenticate is a federation service that verifies a user's identity in an identity store before
allowing them to log in and use a Directory Manager application. With Authenticate, users are
provided single sign-on support across all Directory Manager applications that use the same identity
store.

You can use Directory Manager both as a service provider and as an identity provider.

#### As a Service Provider

Authenticate can be extended with third party single sign-on solutions that support the SAML 2.0
standard. Supported identity providers include:

- AD FS
- Microsoft Entra ID SSO
- Okta
- PingOne
- OneLogin

You can also implement multifactor authentication in `Directory Manager using a third-party single
sign-on solution or with the options available in Directory Manager.

See the [Directory Manager as a Service Provider](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for
additional information.

#### As an Identity Provider

Directory Manager can be implemented as an identity provider in your organization. The administrator
can configure third-party applications (service providers) with Directory Manager, in which case
Directory Manager authenticates and authorizes users for those applications. See the
[Directory Manager as an Identity Provider](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional
information.

## Launch Authenticate

In Admin Center, click **Manage SAML** in the top right corner to launch Authenticate.

The Authenticate page has four tabs. Of these, the following are used when configuring Directory
Manager as a service provider:

- SAML Providers – This tab displays the identity providers that have been configured for Directory
  Manager. if any. Use the New Provider button to add an identity provider.
- Generate URLs – This tab contains settings (such as the consumer URL and the metadata URL) that
  are used to configure Directory Manager in an identity provider.

The following tabs are used when configuring Directory Manager as an identity provider:

- SAML Applications – This tab displays the third-party applications that use Directory Manager as
  an identity provider. Use the New Application button to add a service provider.
- Settings – his tab contains default settings that are used while configuring Directory Manager as
  an identity provider within third-party applications.
