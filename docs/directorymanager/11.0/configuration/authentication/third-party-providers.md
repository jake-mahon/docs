# Configure the AD FS Provider In GroupID

To configure a SAML provider in GroupID, you have to specify the following:

- Issuer URL
- IDP Login URL
- Token signing certificate
- An image for the identity provider
- Advanced configurations

What do you want to do?

- Configure the AD FS Provider in GroupID

## Configure the AD FS Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider.
4. Make sure the **Client** box displays the name of the GroupID client foe which you generated the
   Entity ID/Audience URL and provided that in AD FS.

Keep this page open while we copy configurations from AD FS and provide them here.

### Provide Issuer URL

The issuer URL is provided by the federation service, i.e., AD FS. Copy this URL from AD FS and
provide it in GroupID.

**To fetch and enter Issuer URL:**

1. In the AD FS console, right-click **Service** and select **Edit Federation Service Properties**.
2. On the **Federation Service Properties** dialog box, copy the URL displayed in the **Federation
   Service Identifier** box and paste it in the **Issuer** box on the **Create New Provider** page,

### Provide IDP Login URL

The IDP Login URL is the URL of the AD FS sign-in page.

**To fetch and enter IDP Login URL:**

1. Launch the AD FS login page and copy the URL displayed in the address bar.
2. We only need the initial part of the URL, up to _ls_. Copy it and paste it in the **IDP Login
   URL** box on the **Create New Provider** page

### Get Token-Signing Certificate

The next step is to get the token-signing certificate from AD FS and provide it in GroupID.

1. Go to the AD FS console and click **Certificates**. The certificates are displayed.
2. Double-click the token-signing certificate to open its properties.
3. On the Certificate Properties dialog box, go to the **Details** tab and click the **Copy to
   File** button to launch the Certificate Export Wizard.
4. Read the welcome message and click **Next**.
5. On the **Export File Format** page, select the **Base-64 encoded X.509 (.CER)** option button and
   click **Next**.
6. On the **File to Export** page, specify a name for the certificate file and click **Browse** to
   specify a location to save it. Then click **Next**.
7. On the next page, click **Finish** to complete the wizard.
8. Open the certificate file in Notepad and select the entire content. Copy this certificate and
   paste it in the **IDP Certificate** box on the **Create New Provider** page. Make sure there is
   no trailing space after the dashes that mark the end of the certificate.

### Upload an Image for the Identity Provider

When AD FS is configured with a GroupID client, say the GroupID portal _Wizard_, it will be
available on _Wizard's_ login page for single sign-on. You can choose to display the AD FS option as
an image or as a button.

To display the AD FS option as an image, you have to upload an image for it. On the **Create New
Provider** page, use the **Browse** button under **Identity Provider Image** to upload an image for
AD FS.

NOTE: Supported image formats are: .jpg, .bmp, .webp, and .gif.  
Required dimensions for the image file are: 210 x 60 pixels.

If you do not upload an image, AD FS authentication will be shown as a button. This button would
have the same name as you entered in the **Name** box on the **Create New Provider** page.

Users can click the AD FS image or the button on the login page of the GroupID portal _Wizard_ for
single sign-on.

### Specify Advanced Configurations

Next, specify some advanced configurations for the identity provider. Expand the **Advanced**
section on the **Create New Provider** page.

1. Make sure that _RSA-SHA-256_ is selected in the **Response Signing Method** box.
2. The **Disable GroupID Authentication** option indicates whether to display the GroupID
   authentication login on the GroupID client's logiin page ( i.e., Wizard portal's login page in
   our example).

   - By default, 'No' is selected, which means that when users access the Wizard portal's login
     page, they will be shown the GroupID login and password option along with the AD FS identity
     provider's button.
   - Selecting 'Yes' means that the GroupID login and password option will not be available on the
     Wizard portal's login page. Moreover, when a single identity store and a single SAML provider
     is configured, the login page for the provider is displayed rather than the Wizard portal's
     login page.

3. Select _Post_ in the **Request Binding** drop-down list.  
   To verify that you have selected the correct binding type, do the following:

   1. In the AD FS console click **Relying Party Trust** in the left pane; the middle pane displays
      the relying party trusts already configured.
   2. Double-click the relying party trust that you created for the GroupID portal _Wizard_. This
      launches the Properties dialog box for the relying party trust.
   3. Click the **Endpoints** tab and confirm that the binding type is _POST_.

4. In AD FS, we configured an Active Directory attribute that the identity provider will use for
   authenticating users (see step 16 in the
   [Configure Relaying Party Trust in AD FS](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
   topic). In our example, we used the UPN attribute that stores the user principal name. Now in the
   **Advanced** section, we have to refer to this attribute.  
   In the **Identity Location** list, select the _Identity is an attribute element_ option.
5. On selecting it, the **Identity Location Attribute** box is displayed.  
   The attribute location will be in the form of a URL. Get this URL from AD FS.

   1. In the AD FS console, click **Claim Descriptions** in the left pane and then select the
      Active Directory attribute you specified for authentication. In our example, it is the UPN
      attribute.
   2. Double-click the attribute to open its properties.
   3. On the **Attribute Properties** dialog box, copy the URL displayed in the **Claim type** box
      and paste it in the **Identity Location Attribute** box.

6. With all configurations completed, click the **Create Provider** button. The identity provider,
   i.e., AD FS, is created and displayed on the **SAML Providers** page.

# Configure Relaying Party Trust in AD FS

In AD FS, you have to configure the GroupID client with which you want to set up AD FS. You also
have to specify the claim rules for authentication.

## Configure Relaying Party Trust in AD FS

1. Launch the AD FS console. In the left pane, select **AD FS > Trust Relationships**. Right-click
   **Relying Party Trusts** and click **Add Relying Party Trust** on the shortcut menu.  
   The **Add Relying Party Trust** wizard opens to the **Welcome** page.
2. Read the welcome message and click **Start**.
3. Use the options on the **Select Data Source** page to either import relying party trust data from
   a file, such as a metadata file, or enter the information manually.  
   To enter information manually, select the **Enter data about the relying party manually** option
   and click **Next**.
4. On the **Specify Display Name** page, specify a friendly display name for this configuration in
   the **Display name** box. Then enter any additional notes in the **Notes** box and click
   **Next**.
5. To use the SAML 2.0 protocol as profile, select the **AD FS profile** option button on the
   **Choose Profile** page and click **Next**.
6. On the **Configure Certificate** page, click **Next**.
7. On the **Configure URL** page, select the **Enable support for the SAML 2.0 Web SSO protocol**
   option button. Then in the **Relying party SAML 2.0 SSL service URL** box, provide the consumer
   URL you generated for the GroupID client. See the
   [Generate the Consumer URL for a GroupID Client](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#generate-the-consumer-url-for-a-groupid-client)
   topic.  
   The consumer URL is the relying party trust URL, used by AD FS to authenticate.  
   Click **Next**.
8. On the **Configure Identifiers** page, use the **Relying party trust identifier** box to provide
   the audience URL you generated for the GroupID client. Click **Add** next to this box and then
   click **Next**.  
   See the
   [Generate Entity ID/Audience URL](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#generate-entity-idaudience-url)
   topic.
9. Use the **Configure Multi-factor Authentication Now?** page to configure multi-factor
   authentication. At present, we will not configure it, so select the **I do not want to configure
   multi-factor authentications settings for this relying party trust at this time** option button
   and click **Next**.
10. Use the **Choose Issuance Authorization Rules** page to permit all users to get authenticated on
    the relying party trust using AD FS. User credentials will be parsed with Active Directory.  
    Select the **Permit all users to access this relying party** option button and click **Next**.
11. Use the tabs on the **Ready to Add Trust** page to review some preconfigured settings; then
    click **Next**.
12. Click **Close** on the **Finish** page to complete the wizard. The wizard closes and the **Edit
    Claim Rules** dialog box is displayed, where you have to specify claim rules for authentication.

**Specify claim rules for authentication:**

13. On the **Edit Claim Rules** dialog box, the **Issuance Transform Rules** option correlates to
    the option of authenticating using an Active Directory attribute. Click **Add Rule**.
14. To add a rule, select _Transform an Incoming Claim_ from the **Claim rule template** drop-down
    list on the **Select Rule Template** page and click **Next**.
15. On the **Configure Rule** page, specify a rule name in the **Claim rule name** box.
16. In the **Incoming claim type** and **Outgoing claim type** boxes, select an Active Directory
    attribute for authentication, such as the UPN attribute. The incoming and outgoing claim types
    should be the same as we will not specify a different text or different data for the logon
    process. It will be the exact user principal name for authentication.
17. Make sure that the **Pass through all claim values** option is selected; then click **Finish**.
    The new rule is configured and displayed on the **Issuance Transform Rules** tab.
18. Click the **Issuance Authorization Rules** tab and notice that the issuance authorization rule
    is already completed.
19. Click the **Delegation Authorization Rules** tab. We do not need to delegate, so click **Apply**
    and then **OK**. The AD FS console is displayed with the new relying party trust added.  
    The next step is to configure the AD FS provider in GroupID. See the
    [Configure the AD FS Provider In GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
    topic.

# Generate URLs

Generate the consumer URL and audience URL for the GroupID client with which you want to configure
AD FS. These URLs are required while creating the relying party trust in AD FS.

The consumer URL and audience URL are unique for each GroupID client. Clients include:

- Admin Center
- GroupID portals (each portal is treated as a separate client)
- Management Shell
- GroupID APIs

With multiple instances of GroupID, multiple Admin Centers and Management Shells are available as
separate clients.

What do you want to do?

- [Generate the Consumer URL for a GroupID Client](#generate-the-consumer-url-for-a-groupid-client)
- [Generate Entity ID/Audience URL](#generate-entity-idaudience-url)

## Generate the Consumer URL for a GroupID Client

1. In Authenticate, click the **Generate URL's** tab. The **Generate URL's** page is displayed.
2. In the **Select Client to Generate Consumer URL** drop-down list, select a GroupID client to set
   up AD FS with it. Let’s suppose you select the GroupID portal named _Wizard_.
3. The URL displayed in the **Consumer URL** box is a unique identifier for the selected client. It
   is used to set up relying party trust in AD FS. Click **Copy** to copy it. Then paste it in a
   file, preferably a text file, to save it.

NOTE: On upgrade to GroupID 11, you must generate the consumer URL again for the GroupID client
configured with AD FS, and update it in AD FS.

## Generate Entity ID/Audience URL

1. In Authenticate, click the **SAML Providers** tab. The **SAML Providers** page is displayed.
2. Click **New Provider**.
3. On the **Create New Provider** page, the **Identity stores** drop-down list displays the identity
   stores defined in GroupID. Select an identity store.

   The **Client** drop-down list displays the GroupID clients with respect to the identity store.
   Select the client with which you want to set up the SAML provider.  
    The client you select must be the one for which you generated the consumer URL.  
    To continue with the example, select the GroupID portal named _Wizard_ in the **Client**
   drop-down list.

4. The **Entity ID/Audience** box displays a URL. Click **Copy** to copy it. Then paste it in a
   file, preferably a text file, to save it.

# SAML Configuration for GroupID using AD FS

Active Directory Federation Services (AD FS) provides users with single sign-on access to systems
and applications located across organizational boundaries.

## The AD FS Console

Use the AD FS console to configure services and policies related to the deployment of a federation
server.

- Manage the trust relationships of the federation service by using the **Trust Relationships** node
  in the AD FS console tree:

  - Add and configure relying party trusts.
  - Add and modify claim rules for relying party trusts.

- Configure the federation service by using the options in the **Service** node in the AD FS console
  tree:

  - Configure the certificates that AD FS uses for issuing and receiving tokens and publishing
    metadata.
  - Configure the types of claims that are supported by AD FS.

To learn more about the AD FS console, see
[AD FS Console](<https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/gg557729(v=ws.10)?redirectedfrom=MSDN>).

## Configuration Steps

Follow these steps to set up AD FS as an SSO solution for GroupID:

- Generate the consumer URL and audience URL for the GroupID client with which you want to configure
  AD FS.
- Configure relaying party trust in AD FS. As part of the process, provide the consumer URL and
  audience URL in AD FS. You must also specify the claim rules for authentication.
- Configure the AD FS provider in GroupID.

That done, you can sign into GroupID using AD FS.

See Also

- [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure Relaying Party Trust in AD FS](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure the AD FS Provider In GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Sign In Using AD FS](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)

# Sign In Using AD FS

We configured the ADS FS provider with a GroupID client, that is the GroupID portal _Wizard_ in our
example. For single sign-on using AD FS, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from AD
  FS.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   On the **Login** page, the availability of the user name and password fields depends on whether
   you disabled GroupID Authentication or not (see step 2 in the
   [Specify Advanced Configurations](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#specify-advanced-configurations)
   topic).  
   The AD FS option may be displayed as a button or an image.
2. Click the AD FS button or image; you will be redirected to the AD FS authentication page with the
   URL you provided as the IDP login URL (see the
   [Provide IDP Login URL](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#provide-idp-login-url)
   topic).
3. Sign in as an Active Directory regular user. On signing in, the authentication is routed to AD
   FS, that will validate the user with respect to the specified attribute (i.e., user principal
   name – UPN in our case) and log him or her into the GroupID portal.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the ADF FS portal using the URL provided by your organization and sign in. The AD FS
   dashboard will be displayed.
2. From the **Sign in to one of the following sites** list, select a relying party trust.  
   This list contains the relying party trusts configured with AD FS for single sign-on.
3. Click **Sign in**; you will be redirected to it. Authentication will not be required.

# Configure GroupID in Microsoft Entra ID for SSO

Following are the steps to create and configure the GroupID application in Microsoft Entra Admin
Center:

- Create an application for GroupID in Microsoft Entra Admin Center.
- Assign owners to the application.
- Assign users to log into GroupID using Microsoft Entra ID SSO.
- Specify SAML SSO configurations for the application.

## Configure GroupID in Microsoft Entra ID

1. Sign into Microsoft Entra Admin Center.
2. Go to **Microsoft Entra ID > Enterprise applications**.
3. On the **Enterprise applications** page, click **New application** to add a new application.
4. On the **Browse Microsoft Entra Gallery** page, click **Create your own application**.
5. On the **Create your own application** pane, do the following:

   1. Enter a name for your application In the **What's the name of your app?** box (for example,
      Entra SSO).
   2. Select the **Integrate any other application you don't find in the gallery (Non-gallery)**
      option button.
   3. Click **Create**.  
      On creating an application, an Overview page is displayed for it.

6. On the **Overview** page, click **Properties** in the left pane to navigate to the application's
   properties.
7. On the Properties page, make sure the application is enabled so that users can sign in. For this,
   the **Enabled for Users to sign in** option should be set to _Yes_.
8. The **Name** box displays the application name. You can change the application logo. Your
   application is displayed with the logo in the Access Panel Applications.
9. Make sure **Assignment required?** is set to _Yes_. We will be assigning users manually, who
   would be able to log into the GroupID portal _Wizard_ using Microsoft Entra SSO.

**Assign owners to the application:**

10. To assign one or more users as owners of the application, click **Owners** under **Manage** in
    the left pane.
11. On the **Owners** page, click **Add** and search the user(s) you want to assign as owners. For
    example, you can specify your service account as an owner.

**Assign users to log into GroupID using Microsoft Entra ID SSO:**

12. The next step is to assign users who can sign into the GroupID portal _Wizard_ using Microsoft
    Entra ID SSO. You can specify users and groups.  
    Click **Users and groups** under **Manage** in the left pane. On the **Users and groups** page,
    click **Add user/group**. On the **Add Assignment** page, search for your required user or
    group, select it and click **Assign**.

**Specify SAML SSO configurations for the application:**

13. Click **Single sign-on** under **Manage** in the left pane. The **Single sign-on** page displays
    different methods that Microsoft Entra ID provides for single sign on. Select _SAML_.  
    The **SAML-based Sign-on** page is displayed, where you have to set single sign-on options for
    GroupID.
14. On the **Basic SAML Configuration** card, click **Edit**
15. On the **Basic SAML Configuration** pane, provide the Entity ID and Consumer URL that you copied
    earlier. See the
    [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
    topic.  
    After adding the information, click **Save**.
16. Back on the **SAML-based sign-on** page, the **Attributes & Claims** card displays the
    attributes used for logging in. Let’s keep the defaults.
17. On the **SAML Certificates** card, download _Certificate (Base64)_.

# Configure the Microsoft Entra SSO Application in GroupID

To configure a SAML provider in GroupID, you have to specify the following:

- IDP certificate
- IDP Login URL
- Issuer URL
- Advanced configurations

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box. For
   example, Entra ID SSO.
4. Make sure the **Client** box displays the name of the GroupID client for which you generated the
   Entity ID/Audience URL and provided that while creating the GroupID application in Microsoft
   Entra Admin Center.
5. Open the Certificate (Base64) file that you downloaded from Microsoft Entra Admin Center and copy
   the certificate information.  
   On the **Create New Provider** page, paste it in the **IDP Certificate** box. Make sure you have
   not copied any trailing space.
6. In Microsoft Entra Admin Center, copy the Login URL from the **Set up Azure SSO** card on the
   **SAML-based sign-on** page and paste it in the **IDP Login URL** box on the **Create New
   Provider** page.
7. Again, copy the Azure AD Identifier URL from the **Set up Azure SSO** card on the **SAML-based
   sign-on** page and paste it in the **Issuer** box on the **Create New Provider** page.
8. Expand the **Advanced** section on the **Create New Provider** page.
9. Select _Post_ in the **Request Binding** drop-down list.
10. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the Microsoft Entra SSO provider.
11. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.

# Generate URLs

To generate the consumer URL and audience URL, see the
[Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
topic. Replace references to AD FS with Microsoft Entra ID SSO.

# SAML Configuration for GroupID using Microsoft Entra ID SSO

Microsoft Entra ID SSO enables users to conveniently access all their apps from any location, on any
device, from a centralized and branded portal for a simplified user experience and better
productivity.

Here are the steps to configure single sign-on in GroupID using Microsoft Entra ID as a provider:

- Generate the consumer URL and audience URL for the GroupID client with which you want to configure
  Microsoft Entra ID SSO.
- Configure GroupID in Microsoft Entra ID.
- Configure the Microsoft Entra ID SSO application in GroupID.

That done, you can sign into GroupID using Microsoft Entra ID SSO.

See Also

- [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure GroupID in Microsoft Entra ID for SSO](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure the Microsoft Entra SSO Application in GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Sign In Using Microsoft Entra ID SSO](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)

# Sign In Using Microsoft Entra ID SSO

We configured Microsoft Entra ID SSO with a GroupID client, that is the GroupID portal _Wizard_ in
our example. For single sign-on using Microsoft Entra ID SSO, we can choose any of the following
ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  the Microsoft Entra ID SSO application.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   On the **Login** page, notice the Microsoft Entra ID SSO button. You can login using your GroupID
   credentials or click this button to log in.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication or not (see step 10 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#configure-the-provider-in-groupid)
   topic).
2. Click the button or image for Microsoft Entra ID SSO; the Microsoft Sign In page is displayed.
3. Enter your credentials and click **Sign In**. You will be routed to the main page of the GroupID
   portal _Wizard_.  
   Only users defined for our app in Microsoft Entra Admin Center can log in by entering their user
   names and passwords. See step 11 in the
   [Configure GroupID in Microsoft Entra ID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#configure-groupid-in-microsoft-entra-id)
   topic.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the Microsoft My Apps portal using the following URL and sign in.  
   https://myapps.microsoft.com
2. Click the GroupID app that we created to work with the _Wizard_ portal for single sign-on; it
   will redirect you to your portal.

# Configure GroupID In Okta

To configure GroupID in Okta, follow these steps:

- Create an app for GroupID in Okta.
- Download the Okta metadata file.
- Configure Users in Okta.

## Configure GroupID In Okta

1. Launch Okta and sign in.
2. On signing in, the Okta dashboard is displayed.
3. To configure the GroupIDapplication in Okta, click **Applications** in the ribbon at the top.
4. On the **Applications** page, click the **Add Application** button.
5. The **Add Application** page displays some preconfigured options. Click the **Create New App**
   button.
6. On the **Create a New Application Integration** dialog box, select the **SAML 2.0** option button
   and click **Create**.
7. On the **General Settings** tab of the **Create SAML Integration** page, provide a user-friendly
   name for the app (for example, GroupID Okta Sign-On) in the **App name** box.
8. Use the **App Logo** option to upload a logo for the GroupID app. This logo will be displayed on
   the Okta dashboard. When a user signs into Okta, he or she will be redirected to the dashboard
   that will have GroupID and other applications listed for single sign-on.
9. Click **Next**.
10. On the **Configure SAML** tab of the **Create SAML Integration** page, provide the consumer URL
    and audience URL that you generated for the GroupID client In the **Single sign on URL** and
    **Audience URI (SP Entity ID)** boxes respectively. See the
    [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
    topic.
11. We will not specify any default relay state, so leave the **Default Relay State** field blank.
12. Leave the **Name ID format** field selected to _Unspecified_.
13. In the **Application username** list, make sure _Okta username_ is selected. This implies that
    only users defined in Okta can authenticate on the GroupID portal _Wizard_ using the Okta single
    sign-on option. See the [Configure Users in Okta](#configure-users-in-okta) topic.
14. Click **Show Advanced Settings**.
15. The **Attribute Statements** area is for specifying an attribute that will be used to
    authenticate users who will be signing into GroupID using Okta. Hence, this attribute is meant
    for user identification.  
    Skip this section and leave the selections to default. The Okta provider would authenticate
    users on the basis of the username.
16. Click **Next**.
17. On the **Feedback** tab of the **Create SAML Integration** page, select the option, **I’m a
    software vendor. I’d like to integrate my app with Okta** and click **Finish**.

With this, the GroupID OKTA SSO app is successfully added in Okta, and the **Sign-On** page is
displayed.

### Download the Okta Metadata File

You can download a metadata file from Okta and import it into GroupID to configure the Okta provider
in GroupID.

**To download the file:**

1. On the **Sign-On** page, go to the **Sign On** tab. In the **Sign On Methods** area, click the
   **Identity Provider metadata** link.
2. On the **Opening metadata** dialog box, make sure the **Save File** option is selected and click
   **OK**. The file downloads and the **Library** dialog box opens, showing the downloaded file.
3. Right-click the metadata file and select the **Open Containing Folder** option on the shortcut
   menu.
4. The next dialog box displays the file at its download location. Either copy the file to your
   desktop for simplicity or save its location, so that you can easily locate it for import into
   GroupID.

### Configure Users in Okta

You must define users in Okta. Only these users can authenticate on the GroupID portal _Wizard_
using Okta. See the
[Sign In Using Okta](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
topic.

There are multiple ways to define users in Okta, such as:

- Add users manually
- Use a CSV file to import users
- Use the Active Directory tool provided by Okta (that syncs Active Directory users to Okta)

For all of these, if Okta finds an existing user in its own database, it will link the GroupID
application to the existing account. If not, it will create a new Okta account for the user. For new
users, Okta generates a password and sends it to them by email.

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
   authenticate on the GroupID portal _Wizard_ using Okta.
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

# Configure the Okta Provider In GroupID

While creating the Okta provider in GroupID, you simply have to import the Okta metadata file to
configure all settings for this identity provider.

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the GroupID client for which you generated the
   Entity ID/Audience URL and provided that while creating the GroupID application in Okta.
5. While creating the GroupID application in Okta, we downloaded a metadata file. See the
   [Download the Okta Metadata File](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#download-the-okta-metadata-file)
   topic.  
   To import this file, click the **Import from Metadata** button under the **Advanced** section.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the Okta metadata file downloaded earlier. Then click **Upload**. With this, several fields on
   the **Create New Provider** page are automatically filled in.
7. When Okta is configured with a GroupID client, it will be available on the login page of that
   client (the Wizard portal in our example) for single sign-on. You can choose to display the Okta
   authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with Okta.
8. Expand the **Advanced** section on the **Create New Provider** page.  
   View the settings and leave them to defaults.
9. For _Disable GroupID Authentication_, see step 2 in the
   [Specify Advanced Configurations](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#specify-advanced-configurations)
   topic. Replace references to AD FS with the Okta provider.
10. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.

# Generate URLs

To generate the consumer URL and audience URL, see the
[Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
topic. Replace references to AD FS with Okta.

# SAML Configuration for GroupID using Okta

Okta provides secure identity management and single sign-on to any application, whether in the
cloud, on-premises or on a mobile device for the employees in an organization.

Here are the steps to configure single sign-on in GroupID using Okta as a provider:

- Generate the consumer URL and audience URL for the GroupID client with which you want to configure
  Okta.
- Configure GroupID in Okta.
- Configure the Okta provider in GroupID.

That done, you can sign into GroupID using Okta.

See Also

- [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure GroupID In Okta](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure the Okta Provider In GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Sign In Using Okta](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)

# Sign In Using Okta

We configured Okta with a GroupID client, that is the GroupID portal _Wizard_ in our example. For
single sign-on using Okta, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  Okta.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   On the **Login** page, notice the Okta button. You can login using your GroupID credentials or
   click Okta to log in.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication or not (see step 9 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#configure-the-provider-in-groupid)
   topic).
2. Click the button/image/link for Okta; the Okta Sign In page is displayed.
3. Enter your credentials and click **Sign In**. You will be routed to the main page of the GroupID
   portal _Wizard_.  
   Only users defined for our app in Okta can log in by entering their user names and passwords. See
   the
   [Configure Users in Okta](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#configure-users-in-okta)
   topic.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the Okta portal using the URL provided by your organization and sign in. The Okta
   dashboard displays the apps configured with Okta for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.

# Configure GroupID In OneLogin

Configuring GroupID in OneLogin involve the following steps:

- Create an app for the GroupID portal _Wizard_ in OneLogin.
- Configure this app by specifying the consumer URL and audience URL.
- Specify an attribute for authenticating users who use the OneLogin single sign-on option to log
  into the _Wizard_ portal.
- Define SSO settings.

You also have to:

- Define users in OneLogin, who can authenticate on the _Wizard_ portal using OneLogin.
- Download the OneLogin metadata file, that will be used to configure the OneLogin provider in
  GroupID.

## Create an App for GroupID in OneLogin

1. Launch OneLogin.
2. On the Home page, click **New App** to add a new application in the OneLogin control panel.  
   To continue with our example, we will be adding the GroupID portal _Wizard_.
3. The **Find Applications** page is displayed, with a list of already created applications. In the
   **Find Applications** box, type ‘SAML’ to search for single sign-on applications.
4. In the search results, select the **SAML Test Connector (IdP)** option (without any attributes or
   any sign responses).
5. On the **Add SAML Test Connector (IdP)** page, specify a user-friendly name for the application
   in the **Display Name** box.
6. You can also upload an image for the GroupID app that will be displayed on the user dashboard in
   OneLogin.  
   When a user logs into OneLogin, he or she will be redirected to the dashboard that will have
   GroupID and other applications listed for single sign-on.
7. Click **Save**.  
   A message is displayed that the app is added and a few links are displayed under the message.
   Using them, you can specify certain settings for the app.

**Provide consumer URL and audience URL:**

8. Click the **Configurations** link. The **Configurations** page for the new app is displayed.
9. In the **ACS (Consumer) URL Validator** and **ACS (Consumer) URL** boxes, provide the consumer
   URL that you generated for the GroupID client _Wizard_. See the
   [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
   topic.
10. In the **Audience** box. provide the audience URL that you generated for the GroupID client
    _Wizard_.

**Specify attribute for user authentication:**

11. Click the **Parameters** link at the top.
12. On the **Parameters** page, _Email_ is already set as the entity ID that will be used for
    authenticating users who opt to sign into GroupID using the OneLogin single sign-on option.
    Leave all settings to default.

**Configure SSO settings:**

13. Click the **SSO** link at the top.
14. In the **SAML Signature Algorithm** list on the **SSO** page, select _SHA-256_.
15. The page also displays the Issuer URL and the endpoint URLs for both the post and redirect
    methods. You will have to provide the Issuer URL and the SAML 2.0 Endpoint (HTTP) URL while
    configuring the OneLogin provider in GroupID. Copy and paste them in a file, preferably a text
    file, to save them.

**Define users:**

16. Click the **Access** link at the top. The **Policy** list displays any policies that you may
    have configured for users. You can select a policy to enforce it.
17. Click the **Users** link at the top. To define and manage users, see the
    [Define Users in OneLogin](#define-users-in-onelogin) topic.
18. Click **Save**.

### Download the OneLogin Metadata File

You can download a metadata file from OneLogin and import it into GroupID to configure the OneLogin
provider in GroupID.

**To download the file:**

1. On the OneLogin Home page, click **More Actions** in the top right corner and select **SAML
   Metadata**. This will download the OneLogin metadata file on your machine.
2. For convenience, either copy the file to your desktop or save its location, so that you can
   easily locate it for import into GroupID.  
   Importing the metadata file will being in all the configurations for the OneLogin identity
   provider in GroupID.

### Define Users in OneLogin

You must define users in OneLogin. Only these users can authenticate on the GroupID portal _Wizard_
using OneLogin. See the
[Sign In Using OneLogin](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
topic.

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
   the app that you created for GroupID in OneLogin. Then click **Continue**.
10. Another dialog box opens to display the user's email. you provided this email while creating the
    user. Click **Save**.
11. Back on the **Applications** page, click **Save User**.
12. Next, you have to update the user’s password in OneLogin. Click the **User Info** link. Them
    click **More Actions** and select _Change Password_.
13. On the **Change Password** dialog box, specify a new password for the user and click **Update**.
14. Click **Save User**.

# Configure the OneLogin Provider in GroupID

While creating the OneLogin provider in GroupID, you simply have to import the OneLogin metadata
file to configure all settings for it.

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the GroupID client for which you generated the
   consumer URL and audience URL (see the
   [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
   topic).  
   To continue with the example, select the GroupID portal named _Wizard_.

**Import the OneLogin metadata file:**

5. Click the **Import from Metadata** button under the **Advanced** section to import the OneLogin
   metadata file that you downloaded earlier. See the
   [Download the OneLogin Metadata File](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#download-the-onelogin-metadata-file)
   topic.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the PingOne metadata file. Then click **Upload**. With this, several fields on the **Create New
   Provider** page are automatically filled in. However, you still have to provide the Issuer URL
   and IDP Login URL.

**Provide Issuer URL and IDP Login URL:**

7. In the **Issuer** box, enter the issuer URL you copied from the SSO page in OneLogin. See step 15
   in
   the[Create an App for GroupID in OneLogin](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#create-an-app-for-groupid-in-onelogin)
   topic.
8. In the **IDP Login URL** box, enter the endpoint URL for the post method. You copied this URL
   earlier from the **SAML 2.0 Endpoint (HTTP)** box on the **SSO** page in OneLogin. See step 15 in
   the[Create an App for GroupID in OneLogin](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#create-an-app-for-groupid-in-onelogin)
   topic.

**Upload an image for the identity provider:**

9. When OneLogin is configured with a GroupID client, it will be available on the login page of that
   client (the Wizard portal in our example) for single sign-on. You can choose to display the
   OneLogin authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with OneLogin.

**Specify advanced settings:**

10. Expand the **Advanced** section on the **Create New Provider** page.
11. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the OneLogin provider.
12. In the **Request Binding** drop-down list, select _POST_, since we used the endpoint URL for the
    post method in the **IDP Login URL** box.
13. We will not use the assertion encryption, so make sure _Disabled_ is selected in the **Assertion
    Encryption** drop-down list.
14. In the **Response Signing Method**drop-down list, select _RSA-SHA-256_, since we configured this
    method as the signing algorithm in the **SAML Signature Algorithm** list on the **SSO** page in
    OneLogin. See step 14 in
    the[Create an App for GroupID in OneLogin](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#create-an-app-for-groupid-in-onelogin)
    topic.
15. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.

# Generate URLs

To generate the consumer URL and audience URL, see the
[Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
topic. Replace references to AD FS with OneLogin.

# SAML Configuration for GroupID using OneLogin

OneLogin provides single sign-on and identity management for organizations that embrace cloud
computing.

Here are the steps to configure single sign-on in GroupID using OneLogin as a provider:

- Generate the consumer URL and audience URL for the GroupID client with which you want to configure
  OneLogin.
- Configure GroupID in OneLogin.
- Configure the OneLogin provider in GroupID.

That done, you can sign into GroupID using OneLogin.

See Also

- [Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure GroupID In OneLogin](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure the OneLogin Provider in GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Sign In Using OneLogin](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)

# Sign In Using OneLogin

We configured OneLogin with a GroupID client, that is the GroupID portal _Wizard_ in our example. We
also created a user, Leo Ferguson, in OneLogin who should be able to log into the _Wizard_ portal
using the OneLogin single sign-on option.

For single sign-on using OneLogin, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  OneLogin.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication or not (see step 11 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#configure-the-provider-in-groupid)
   topic).
2. Click the button or image for OneLogin; the OneLogin sign in page is displayed.
3. Enter Leo Ferguson’s login name and password, and click **Login**. The user is successfully
   logged into the _Wizard_ portal using the OneLogin single sign on option.  
   Only users defined for our app in OneLogin can log in by entering their user names and passwords.
   See the
   [Define Users in OneLogin](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#define-users-in-onelogin)
   topic.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the OneLogin portal using the URL provided by your organization and log in. The OneLogin
   dashboard displays the apps configured with OneLogin for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.

# Configure GroupID In PingOne

To configure GroupID in PingOne, follow these steps:

- Create an app for GroupID in PingOne
- Download the PingOne metadata file
- Map attributes for user authentication
- Configure users in PingOne

## Configure GroupID In PingOne

1. Launch the PingOne Identity dashboard.
2. Click **Applications** in the ribbon at the top.
3. On the **My Applications** tab of the **Applications** page, click **Add Application** and select
   the **New SAML Application** option to configure the GroupID client _Wizard_ in PingOne.  
   The new application is added and displayed in the **My Applications** area. The **Application
   Details** section is also displayed.
4. In the **Application Name** box, provide a name for the application.
5. In the **Application Description** box, provide a description. For example, you can specify the
   GroupID client with which you want to set up PingOne for single sign-on.
6. Select an option from the **Category** drop-down list, for example, Information Technology.
7. You can choose to upload an image for the GroupID app. This image will be displayed on the
   PingOne dashboard. When a user signs into PingOne, he or she will be redirected to the dashboard
   that has GroupID and other applications listed for single sign-on.
8. Click the **Continue to Next Step** button.
9. On the next page, make sure the **I have the SAML configuration** tile is selected.
10. Use the metadata file you generated for the _Wizard_ portal in GroupID to configure certain
    settings on this page. See the
    [Generate the Metadata File](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#generate-the-metadata-file)
    topic.  
    Click the **Select File** button next to **Upload Metadata**. Simply select the metadata file
    and it will be uploaded, thereby bringing in the required settings to configure the GroupID
    client _Wizard_ within PingOne. For example, the **Entity ID** box is populated with the
    required URL.
11. In the **Application URL** box, copy the same URL as displayed in the **Assertion Consumer
    Service (ACS)** box.
12. Select the _Post_ option button for **Single Logout Binding Type**.
13. In the **Signing Algorithm** drop-down list, select _RSA_SHA256_.
14. Click the **Download** link next to **SAML Metadata** to download the metadata file from the
    PingOne identity provider.  
    While creating the PingOne provider in GroupID, you can import this file to bring in all the
    configurations for PingOne.
15. No further configurations are required on this page. Scroll down and click the **Continue to
    Next Step** button. The **SSO Attribute Mapping** area is displayed.

### Attribute Mapping in PingOne

The next step is to specify an attribute that will be used to authenticate users who will be signing
into GroupID using the PingOne single sign-on facility. Hence, this attribute is meant for user
identification.

1. In the **SSO Attribute Mapping** area, click the **Add new attribute** button. A new row is
   displayed.
2. Click the **Advanced** button in this row; the **Advanced Attribute Options** dialog box is
   displayed.
3. In the **NameFormat** drop-down list, select the first option, i.e., the one ending with
   _unspecified_.
4. In the **IDP Attribute Name or Literal Value** box, type or select the Active Directory attribute
   you want to use for authentication. For example, _E-mail_. This attribute facilitates user
   identification.  
   To define users in PingOne, see the [Configure Users in PingOne](#configure-users-in-pingone)
   topic.
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
    The new GroupID application you created in PingOne is displayed under **My Applications**.

### Configure Users in PingOne

You must define users in PingOne. These users are authenticated in GroupID on the basis of an
attribute, as discussed in the [Attribute Mapping in PingOne](#attribute-mapping-in-pingone) topic.

Only the users you define here can authenticate on the GroupID portal _Wizard_ using PingOne. See
the
[Sign In Using PingOne](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
topic.

**To configure users:**

1. In PingOne, click **Users** in the ribbon at the top. The **Users** page is displayed.
2. Click the **Add Users** button and select the **Create New User** option to create a user.
3. On the **User** page, specify a password in the **New Password** and **Confirm New Password**
   boxes.
4. Specify a user name in the **Username** box.  
   The user will use this user name and password for single sign-on into GroupID using PingOne.
5. Enter other details of the user, such as first name, last name, and the email address.
6. Click **Save** to create the user.

# Configure the PingOne Provider In GroupID

While creating the PingOne provider in GroupID, you simply have to import the PingOne metadata file
to configure all settings for this identity provider.

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the GroupID client for which you generated the
   consumer URL and the GroupID metadata file (see the
   [Generate the Consumer URL and Metadata File](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
   topic).  
   To continue with the example, select the GroupID portal named _Wizard_.
5. Click the **Import from Metadata** button under the **Advanced** section to import the PingOne
   metadata file.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the PingOne metadata file downloaded earlier. Then click **Upload**. With this, several fields on
   the **Create New Provider** page are automatically filled in.
7. When PingOne is configured with a GroupID client, it will be available on the login page of that
   client (the Wizard portal in our example) for single sign-on. You can choose to display the
   PingOne authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with PingOne.
8. Expand the **Advanced** section on the **Create New Provider** page.
9. The **Response Signing Method** box displays _RSA-SHA-256_ as the signing method type. We
   configured this method as the signing algorithm in PingOne.
10. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the PingOne provider.
11. In the **Request Binding** list, select _POST_, since the **Single Logout Binding Type** is set
    to _Post_ in PingOne.
12. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.

# Generate the Consumer URL and Metadata File

In GroupID Authenticate, you can generate a metadata file for the GroupID client with which you want
to set up the PingOne identity provider.

When you import this file into PingOne, it populates all GroupID-related configurations into the
provider.

In Authenticate, you have to:

- Generate the consumer URL for the GroupID client you want to set up the PingOne identity provider
  with
- Generate the metadata file

## Generate Consumer URL

To generate the consumer URL, see the
[Generate URLs](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
topic. Replace references to AD FS with PingOne.

## Generate the Metadata File

In Authenticate, use the **Metadata** section on the **Generate URLs** page to generate the metadata
file for the GroupID client with which you want to set up PingOne for single sign-on.

Since we generated the consumer URL for the _Wizard_ portal, we should generate the metadata file
for this same portal.

**To generate the file:**

1. In Authenticate, click the **Generate URL's** tab. The **Generate URL's** page is displayed.
2. In the **Metadata** section, select an identity store in the **Identity store** drop-down list.  
   Users will be authenticated in this identity store when they use PingOne for single sign-on.
3. The **Client** drop-down list displays the GroupID clients for the identity store. Select the
   client for which you have already generated the consumer URL.
4. Click **Download** to download the metadata file to your machine.

# SAML Configuration for GroupID using PingOne

PingOne is an Identity as a Service (IDaaS) solution that enables organizations to deliver single
sign-on with just one username and password.

Here are the steps to configure single sign-on in GroupID using PingOne as a provider:

- Generate the consumer URL andGroupID metadata file for the GroupID client with which you want to
  configure PingOne.
- Configure GroupID in PingOne.
- Configure the PingOne provider in GroupID.

That done, you can sign into GroupID using PingOne.

See Also

- [Generate the Consumer URL and Metadata File](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure GroupID In PingOne](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Configure the PingOne Provider In GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)
- [Sign In Using PingOne](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md)

# Sign In Using PingOne

We configured PingOne with a GroupID client, that is the GroupID portal _Wizard_ in our example. We
also created a user in PingOne who should be able to sign into the _Wizard_ portal using the PingOne
single sign-on option.

For single sign-on using PingOne, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  PingOne.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication or not (see step 10 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#configure-the-provider-in-groupid)
   topic).
2. Click the button for PingOne; the PingOne Sign In page is displayed.
3. Enter your credentials and sign in. You will be routed to the main page of the GroupID portal
   _Wizard_.  
   Only users defined for our app in PingOne can log in using PingOne single sign-on. See the
   [Configure Users in PingOne](/docs/directorymanager/11.0/configuration/authentication/third-party-providers.md#configure-users-in-pingone)
   topic.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the PingOne portal using the URL provided by your organization and sign in.  
   The PingOne dashboard will be displayed. It lists the apps configured with PingOne for single
   sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.
