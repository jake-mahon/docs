# Authenticate your Identity Store Account

To authenticate your identity store account in Directory Manager for multifactor authentication or
[Second Factor Authentication](/docs/directorymanager/11.1/user-management/secondfactorauthentication.md), you
must use one or more authentication types that you enrolled your account with.

## Authenticate your identity store account

1. When you launch Admin Center or the Directory Manager portal, the **GroupID Authenticate** page
   is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.

   - **Authenticate using Security Questions**

     1. Select the **Security Questions** check box and click **Continue**.
     2. Provide answers to the security questions you enrolled your account with.
     3. Click **Verify and Continue**.

   - Authenticate using SMS

     To authenticate using mobile, you have to enter the last 4 digits of the mobile number you
     provided during enrollment. Directory Manager sends a confirmation code to this number; you
     have to enter the code in Directory Manager for authentication.

     1. Select the **Mobile Verification** check box and click **Continue**.
     2. Type the last four digits of your mobile number and click **Send Code**.
     3. When the verification code is successfully sent to the provided mobile number, a box
        appears on the page. Type the 5 digit access code you received on your phone by SMS.
     4. Click **Verify and Continue**.

     If you do not receive the code, recheck your mobile number and click **Send Again**.

   - Authenticate using Email

     To authenticate using Email, you have to complete the email address you provided during
     enrollment. Directory Manager then sends a confirmation code to this email address; you have
     to enter the code in Directory Manager for authentication.

     1. Select the **Email Verification** check box and click **Continue**.
     2. Complete your email address and click **Send Code**.
     3. When the verification code is successfully sent to the provided email address, a box
        appears on the page. Type the 5 digit access code received on your email address.
     4. Click **Verify and Continue**.

     If you do not receive the code, recheck your email address and click **Send Again**.

   - Authenticator using Authenticator

     1. Select the **Authenticator** check box and click **Continue**.
     2. Launch the Google Authenticator or Microsoft Authenticator app on your smartphone. The
        app generates a verification code and displays it on your phone’s screen.
     3. Enter the code in the **Security code** box.
     4. Click **Verify and Continue**.

     Authenticator apps generate a new code every 30 seconds, with each code expiring after 30
     seconds.

   - Authenticate using YubiKey

     1. Insert the YubiKey device in the USB slot of your computer.
     2. Select the **YubiKey** check box and click **Continue**.
     3. On the next page, click your YubiKey device name.  
        Directory Manager directs you to tap on the physical device.
     4. On tapping, you are authenticated in Directory Manager.

   - Authenticate using Windows Hello

     1. Select the **Windows Hello** check box and click **Continue**.
     2. On the next page, click **Authenticate and Continue**.
     3. Provide the biometric information you enrolled your account with, or with the PIN given
        in the Windows Hello sign-in options.

# Second Way Authentication - SWA

You can configure second way Authentication (SWA) to allow unenrolled users to access the following
functions in the Directory Manager portal:

- Account unlock
- Password reset

SWA allows only one-time access to these functions. Users must enroll their identity store accounts
in Directory Manager to use the stated functions again.

SWA can authenticate unenrolled users through:

- Security questions
- Mobile
- Email

Configuring these types for second way authentication is different from configuring the same
authentication types for multifactor and second factor authentication. For second way
authentication, you have to link an authentication type to a schema attribute. When resetting
account passwords or unlocking accounts using the Directory Manager portal, the value provided by
the user for an authentication type is matched to the value of the linked attribute in the
directory. If it matches, authentication is successful, and the user can perform the required action
in the portal.

For example, link the _Email_ type with the _mail_ attribute. When an unenrolled user tries to reset
the account password, he or she must provide the verification code sent to his or her email address.
On providing the right code, he or she can proceed with the operation.

Second way authentication is disabled by default for an identity store. To facilitate users to avail
it, you must enable one or more authentication types.

## Enable Second Way Authentication Via Security Questions

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way
   Authentication via Security Questions** to enable it.
5. Click **Add Security Question**.
6. On the **Add New Security Question** dialog box, type your question in the **Question** box.
7. In the **Attribute** drop-down list, select a schema attribute to map to this question.
8. Click **OK**.  
   For successful authentication, the answer a user provides for the security question must match
   the value of the linked attribute.

   **To edit or remove a security question:**

   - In the **Enable Second Way Authentication via Security Questions** area, click **Remove** for
     a question to remove it.
   - To remove all questions, click **Remove All**.
   - To change the question text or link it to a different schema attribute, click **Edit** for it.

9. Click **Save** on the **Second Way Authentication** page.

## Enable Second Way Authentication via Mobile

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations under Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way
   Authentication via Mobile** to enable it.

   NOTE: If an SMS gateway account is not linked with the identity store, **Configure Now** is
   displayed in place of the toggle button. Click it to go to the **SMS Authentication** page,
   where you can link an SMS gateway account with the identity store. See the
   [Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#link-an-sms-gateway-account-to-an-identity-store)
   topic.

5. In the **Mobile Attribute** drop-down list, select an attribute that stores mobile numbers in the
   directory.  
   For authentication via mobile, a verification code is sent to the user’s mobile number. The user
   has to enter the code in Directory Manager for authentication.
6. Click **Save**.

## Enable Second Way Authentication via Email

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations under Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way
   Authentication via Email** to enable it.

   NOTE: If an SMTP server is not defined for the identity store, **Configure Now** is displayed in
   place of the toggle button. Click it to go to the **Notifications** page for configuring an SMTP
   server. See the [Configure an SMTP Server](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

5. In the **Email Attribute** drop-down list, select an attribute that stores email addresses in the
   directory.  
   For authentication via email, a verification code is sent to the user’s email address. The user
   has to enter the code in Directory Manager for authentication.
6. Click **Save**.

## Enforce Users to Authenticate Using x Number of SWA Types

You can enforce users to authenticate with one, two, or all three SWA types.

When the enforced number of authentication types is less than the enabled types, (such as when you
have enabled all three SWA types and enforce users to authenticate with two), users can choose the
type(s) they want to use for authentication.

**To enforce SWA types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, enter a number in the **Authentication Factor (chosen
   by the end user)** box. This number must be equal or less than the enabled SWA authentication
   types. Users must use these x number of types for second way authentication.
5. Click **Save**.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Configure an SMTP Server](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [SMS Gateway](/docs/directorymanager/11.1/configuration/sms-gateway.md)

# SMS Authentication

To enable users to enroll and authenticate their identity store accounts using SMS, you must make
sure that an SMS gateway account is linked with the identity store. Using this gateway account,
Directory Manager sends confirmation codes to the users' mobile phone numbers for verification.

See the [Manage SMS Gateway Accounts](/docs/directorymanager/11.1/configuration/sms-gateway.md) topic for creating and managing
SMS gateway accounts.

What do you want to do?

- Enable SMS Authentication for an Identity Store
- Link an SMS Gateway Account to an Identity Store
- Enforce SMS Authentication for a Security Role

## Enable SMS Authentication for an Identity Store

The SMS authentication type must be enabled for an identity store before users can use it for second
factor authentication and multi-factor authentication.

To enable it, see the [Enable Authentication Types](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Link an SMS Gateway Account to an Identity Store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **SMS Authentication**.
4. In the **SMS gateway account** drop-down list on the **SMS Authentication** page, select an SMS
   gateway account to link it with the identity store. If a default SMS gateway account is defined
   before the identity store was created, it is auto selected in this list.
5. In the **Text message** box, modify the displayed message, except the [Code] placeholder.  
   This box displays the text that is sent to the users’ mobile phone numbers along with the
   confirmation code. Directory Manager randomly generates a confirmation code and inserts it into
   the [Code] placeholder. Users have to enter this code in Directory Manager for enrollment and
   authentication.
6. Click **Save**.

## Enforce SMS Authentication for a Security Role

To enforce an authentication type, see the
[Authentication Policy for Security Roles](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Manage SMS Gateway Accounts](/docs/directorymanager/11.1/configuration/sms-gateway.md)

# Authentication Policy for Security Roles

Having enabled and configured authentication types for an identity store, you can:

- Enforce authentication type(s) for a user role for multifactor authentication (MFA). Role members
  must use each of the enforced authentication types for account enrollment and authentication.  
  When not enforced, role members can enroll using any authentication type that has been enabled for
  the identity store.
- Enable second factor authentication (SFA) for a security role in an identity store.

NOTE: For MFA and SFA to work for an identity store, make sure you enable enrollment for it. See the
[Enable Enrollment](/docs/directorymanager/11.1/configuration/identity-stores.md#enable-enrollment) topic.

What do you want to do?

- Enforce Authentication Types for Multifactor Authentication
- Enable Second Factor Authentication

## Enforce Authentication Types for Multifactor Authentication

Before enforcing an authentication type for a security role, make sure it is enabled and configured
for the identity store.

**To enforce authentication types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Authentication** tab.
7. In the **Multifactor Authentication Policies** area, select the **Enforced** check box for an
   authentication type to enforce it for the role. The **Enforced** box displays the number of
   authentication types you enforced for the role.  
   Role members must enroll and authenticate for multifactor authentication using each of the
   enforced authentication types.
8. In the **Chosen by End User** box, specify a number. Role members must use this x number of
   authentication types, in addition to the enforced authentication types, for multifactor
   enrollment and authentication.  
   Let’s assume five authentication types have been enabled and configured for the identity store.

   - When you do not enforce any authentication type and specify 2 in the **Chosen by End User**
     box, role members can use any two authentication types from the five enabled types for
     multifactor authentication.
   - However, when you enforce two authentication types and specify 1 in the **Chosen by End User**
     box, role members must enroll and authenticate by the two enforced types, and then choose
     another one from the remaining three enabled authentication types, for multifactor
     authentication.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Enable Second Factor Authentication

You can enable second factor authentication for a security role in an identity store.

For second factor authentication, role members can enroll using any of the authentication types
enabled and configured for the identity store.

Users must pass second factor authentication when signing into Admin Center and the Directory
Manager portal.

**To enable second factor authentication for a role:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Authentication** tab.
7. Use the toggle button for **Second Factor Authentication** to enable or disable it for the
   security role.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)
- [Security Role Policies](/docs/directorymanager/11.1/administration/security-policies.md)

# Set up Authentication via Authenticator

Users must install an authenticator app, such as Google Authenticator or Microsoft Authenticator, on
their phones and use it to enroll and authenticate their identity store accounts in Directory
Manager.

What do you want to do?

- Enable the Authenticator Authentication Type for an Identity Store
- Enforce Authentication by Authenticator for a Role in an Identity Store

## Enable the Authenticator Authentication Type for an Identity Store

The Authenticator authentication type must be enabled for an identity store before it can be used
for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/directorymanager/11.1/configuration/identity-stores.md) topic.

## Enforce Authentication by Authenticator for a Role in an Identity Store

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.1/configuration/identity-stores.md)

# Specify Default Metadata Values

You can specify default values for the following Directory Manager metadata:

- Issuer URL
- Signing certificate

## Specify the Default Issuer URL

Follow the steps to specify the default Issuer URL.

Step 1 – In Directory Manager Authenticate, go to the Settings tab.

Step 2 – On the Settings page, the Base URL box displays the default Issuer URL, which is also
displayed in the Provider Issuer box on the Create Application page. See the
[Directory Manager Metadata for Service Provider Configurations](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#directory-manager-metadata-for-service-provider-configurations)
topic.  
You may want to change the default base/Issuer URL for any reason, for example, replace it with a
sub-domain URL or a load balancer URL.  
Replace or update the URL in the Base URL box and click **Save**.

## Update the Default Signing Certificate

Follow the steps to update the default signing certificate.

Step 1 – In Directory Manager Authenticate, go to the Settings tab.

Step 2 – On the Settings page, the Signing Certificate box displays the Directory Manager
certificate created in IIS. It displays the certificate along with the private key. This certificate
is also displayed in the Provider Signing Certificate box on the Create Application page, though
without the private key. See the
[Directory Manager Metadata for Service Provider Configurations](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#directory-manager-metadata-for-service-provider-configurations)
topic.  
You may choose to use this certificate or create a custom certificate and use that in third-party
applications.

Step 3 – To use another certificate, do the following:

1. Create your custom certificate and export it to a PFX file.
2. On the Settings page, click **Upload PFX**.
3. On the Import Windows Exported Certificate File dialog box, click **Browse** to select the
   exported certificate file. As it is password protected, enter the password and click **Load
   Certificate File**.
4. Click **Save**.

The new certificate is displayed in the Signing Certificate box on the Settings page and also on the
Create Application page.

# Configure the AD FS Provider In Directory Manager

To configure a SAML provider in Directory Manager, you have to specify the following:

- Issuer URL
- IDP Login URL
- Token signing certificate
- An image for the identity provider
- Advanced configurations

## Configure the AD FS Provider in Directory Manager

Follow the steps to configure the AD FS provider in Directory Manager.

Step 1 – In Directory Manager Authenticate, click the **SAML Providers** tab.

Step 2 – On the SAML Providers page, click **New Provider**.

Step 3 – On the Create New Provider page, enter a name for the provider.

Step 4 – Make sure the Client box displays the name of the Directory Manager client for which you
generated the Entity ID/Audience URL and provided that in AD FS.  
Keep this page open while we copy configurations from AD FS and provide them here.

## Provide Issuer URL

The issuer URL is provided by the federation service, i.e., AD FS. Copy this URL from AD FS and
provide it in Directory Manager.

Step 1 – In the AD FS console, right-click **Service** and select **Edit Federation Service
Properties**.

Step 2 – On the Federation Service Properties dialog box, copy the URL displayed in the Federation
Service Identifier box and paste it in the Issuer box on the Create New Provider page in Directory
Manager.

### Provide IDP Login URL

The IDP Login URL is the URL of the AD FS sign-in page. Follow the steps to fetch and enter IDP
Login URL.

Step 1 – Launch the AD FS login page and copy the URL displayed in the address bar.

Step 2 – We only need the initial part of the URL, up to _ls_. Copy it and paste it in the IDP Login
URL box on the Create New Provider page.

### Get Token-Signing Certificate

The next step is to get the token-signing certificate from AD FS and provide it in Directory
Manager. Follow the steps to do so.

Step 1 – Go to the AD FS console and click **Certificates**. The certificates are displayed.

Step 2 – Double-click the token-signing certificate to open its properties.

Step 3 – On the Certificate Properties dialog box, go to the Details tab and click the **Copy to
File** button to launch the Certificate Export Wizard.

Step 4 – Read the welcome message and click **Next**.

Step 5 – On the Export File Format page, select the **Base-64 encoded X.509 (.CER)** option button
and click **Next**.

Step 6 – On the File to Export page, specify a name for the certificate file and click **Browse** to
specify a location to save it. Then click **Next**.

Step 7 – On the next page, click **Finish** to complete the wizard.

Step 8 – Open the certificate file in Notepad and select the entire content. Copy this certificate
and paste it in the IDP Certificate box on the Create New Provider page in Directory Manager. Make
sure there is no trailing space after the dashes that mark the end of the certificate.

### Upload an Image for the Identity Provider

When AD FS is configured with a Directory Manager client, say the Directory Manager portal _Wizard_,
it will be available on _Wizard’s_ login page for single sign-on. You can choose to display the AD
FS option as an image or as a button.

To display the AD FS option as an image, you have to upload an image for it. On the Create New
Provider page, use the Browse button under Identity Provider Image to upload an image for AD FS.

NOTE: Supported image formats: .jpg, .bmp, .webp, .gif  
Required image file dimensions: 210 x 60 pixels

If you do not upload an image, AD FS authentication will be shown as a button. This button would
have the same name as you entered in the Name box on the Create New Provider page.

Users can click the AD FS image or the button on the login page of the Directory Manager portal
_Wizard_ for single sign-on.

### Specify Advanced Configurations

Next, specify some advanced configurations for the identity provider. Expand the Advanced section on
the Create New Provider page and provide the information as follows:

Step 1 – Make sure that _RSA-SHA-256_ is selected in the Response Signing Method box.

Step 2 – The Disable GroupID Authentication option indicates whether to display the Directory
Manager authentication login on the Directory Manager client's login page ( i.e., Wizard portal’s
login page in our example).

- By default, ‘No’ is selected, which means that when users access the Directory Manager client's
  login page, they will be shown the Directory Manager login and password option along with the
  identity provider’s button.
- Selecting ‘Yes’ means that the Directory Manager login and password option will not be available
  on the Directory Manager client's login page. Moreover, when a single identity store and a single
  SAML provider is configured, the login page for the provider is displayed rather than the
  Directory Manager client's login page.

Step 3 – Select _Post_ in the Request Binding drop-down list.  
To verify that you have selected the correct binding type, do the following:

1. In the AD FS console click **Relying Party Trust** in the left pane; the middle pane displays the
   relying party trusts already configured.
2. Double-click the relying party trust that you created for the Directory Manager portal _Wizard_.
   This launches the Properties dialog box for the relying party trust.
3. Click the **Endpoints** tab and confirm that the binding type is _POST_.

Step 4 – In AD FS, we configured an Active Directory attribute that the identity provider will use
for authenticating users (see step 16 in the
[Configure Relaying Party Trust in AD FS](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic). In our example, we
used the UPN attribute that stores the user principal name. Now in the Advanced section, we have to
refer to this attribute.  
In the Identity Location list, select the _Identity is an attribute element_ option.

Step 5 – On selecting it, the Identity Location Attribute box is displayed.  
The attribute location will be in the form of a URL. Get this URL from AD FS.

1. In the AD FS console, click **Claim Descriptions** in the left pane and then select the Active
   Directory attribute you specified for authentication. In our example, it is the UPN attribute.
2. Double-click the attribute to open its properties.
3. On the Attribute Properties dialog box, copy the URL displayed in the Claim type box and paste it
   in the Identity Location Attribute box.

Step 6 – With all configurations completed, click the **Create Provider** button. The identity
provider, i.e., AD FS, is created and displayed on the SAML Providers page.

# Configure Relaying Party Trust in AD FS

In AD FS, you have to configure the Directory Manager client with which you want to set up AD FS.
You also have to specify the claim rules for authentication.

## Configure Relaying Party Trust in AD FS

Follow the steps to configure relaying party trust in AD FS.

Step 1 – Launch the AD FS console. In the left pane, select **AD FS > Trust Relationships**.
Right-click **Relying Party Trusts** and click **Add Relying Party Trust** on the shortcut menu.  
The Add Relying Party Trust wizard opens to the Welcome page.

Step 2 – Read the welcome message and click **Start**.

Step 3 – Use the options on the Select Data Source page to either import relying party trust data
from a file, such as a metadata file, or enter the information manually.  
To enter information manually, select the **Enter data about the relying party manually** option and
click **Next**.

Step 4 – On the Specify Display Name page, specify a friendly display name for this configuration in
the Display name box. Then enter any additional notes in the Notes box and click **Next**.

Step 5 – To use the SAML 2.0 protocol as profile, select the **AD FS profile** option button on the
Choose Profile page and click **Next**.

Step 6 – On the Configure Certificate page, click **Next**.

Step 7 – On the Configure URL page, select the **Enable support for the SAML 2.0 Web SSO protocol**
option button. Then in the Relying party SAML 2.0 SSL service URL box, provide the consumer URL you
generated for the Directory Manager client. See the
[Generate the Consumer URL for a Directory Manager Client](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#generate-the-consumer-url-for-a-directory-manager-client)
topic.  
The consumer URL is the relying party trust URL, used by AD FS to authenticate. Click **Next**.

Step 8 – On the Configure Identifiers page, use the Relying party trust identifier box to provide
the audience URL you generated for the Directory Manager client. Click **Add** next to this box and
then click **Next**.  
See the [Generate Entity ID/Audience URL](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#generate-entity-idaudience-url) topic.

Step 9 – Use the Configure Multi-factor Authentication Now? page to configure multi-factor
authentication. At present, we will not configure it, so select the **I do not want to configure
multi-factor authentications settings for this relying party trust at this time** option button and
click **Next**.

Step 10 – Use the Choose Issuance Authorization Rules page to permit all users to get authenticated
on the relying party trust using AD FS. User credentials will be parsed with Active Directory.  
Select the **Permit all users to access this relying party** option button and click **Next**.

Step 11 – Use the tabs on the Ready to Add Trust page to review some preconfigured settings; then
click **Next**.

Step 12 – Click **Close** on the Finish page to complete the wizard. The wizard closes and the Edit
Claim Rules dialog box is displayed, where you have to specify claim rules for authentication.

Step 13 – On the Edit Claim Rules dialog box, the Issuance Transform Rules option correlates to the
option of authenticating using an Active Directory attribute. Click **Add Rule**.

Step 14 – To add a rule, select **Transform an Incoming Claim** from the Claim rule template
drop-down list on the Select Rule Template page and click **Next**.

Step 15 – On the Configure Rule page, specify a rule name in the Claim rule name box.

Step 16 – In the Incoming claim type and Outgoing claim type boxes, select an Active Directory
attribute for authentication, such as the UPN attribute. The incoming and outgoing claim types
should be the same as we will not specify a different text or different data for the logon process.
It will be the exact user principal name for authentication.

Step 17 – Make sure that the **Pass through all claim values** option is selected; then click
**Finish**. The new rule is configured and displayed on the Issuance Transform Rules tab.

Step 18 – Click the **Issuance Authorization Rules** tab and notice that the issuance authorization
rule is already completed.

Step 19 – Click the **Delegation Authorization Rules** tab. We do not need to delegate, so click
**Apply** and then **OK**. The AD FS console is displayed with the new relying party trust added.

The next step is to configure the AD FS provider in Directory Manager. See the
[Configure the AD FS Provider In Directory Manager](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic.

# Generate URLs

Generate the consumer URL and audience URL for the Directory Manager client with which you want to
configure AD FS. These URLs are required while creating the relying party trust in AD FS.

The consumer URL and audience URL are unique for each Directory Manager client. Clients include:

- Admin Center
- Directory Manager portals (each portal is treated as a separate client)
- Management Shell
- Directory Manager APIs

With multiple instances of Directory Manager, multiple Admin Centers and Management Shells are
available as separate clients.

## Generate the Consumer URL for a Directory Manager Client

Follow the steps to generate the consumer URL for a Directory Managerclient.

Step 1 – In Authenticate, click the **Generate URL's** tab. The Generate URL's page is displayed.  
See the [Launch Authenticate](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#launch-authenticate) section of the
[Authenticate](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional information.

Step 2 – In the Select Client to Generate Consumer URL drop-down list, select a Directory Manager
client to set up AD FS with it. Let’s suppose you select the Directory Manager portal named
_Wizard_.

Step 3 – The URL displayed in the Consumer URL box is a unique identifier for the selected client.
It is used to set up relying party trust in AD FS. Click **Copy** to copy it. Then paste it in a
file, preferably a text file, to save it.

NOTE: On upgrade to Directory Manager 11, you must generate the consumer URL again for the Directory
Manager client configured with AD FS, and update it in AD FS.

## Generate Entity ID/Audience URL

Follow the steps to generate Entity ID/Audience URL.

Step 1 – In Authenticate, click the **SAML Providers** tab. The SAML Providers page is displayed.  
See the [Launch Authenticate](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md#launch-authenticate) section of the
[Authenticate](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic for additional information.

Step 2 – Click **New Provider**.

Step 3 – On the Create New Provider page, the Identity storesdrop-down list displays the identity
stores defined in Directory Manager. Select an identity store.

The Client drop-down list displays the Directory Manager clients with respect to the identity store.
Select the client with which you want to set up the SAML provider.  
The client you select must be the one for which you generated the consumer URL.  
To continue with the example, select the Directory Manager portal named _Wizard_ in the Client
drop-down list.

Step 4 – The Entity ID/Audience box displays a URL. Click **Copy** to copy it. Then paste it in a
file, preferably a text file, to save it.

# SAML Configuration for Directory Manager using AD FS

Active Directory Federation Services (AD FS) provides users with single sign-on access to systems
and applications located across organizational boundaries.

## The AD FS Console

Use the AD FS console to configure services and policies related to the deployment of a federation
server.

- Manage the trust relationships of the federation service by using the Trust Relationships node in
  the AD FS console tree:

  - Add and configure relying party trusts.
  - Add and modify claim rules for relying party trusts.

- Configure the federation service by using the options in the Service node in the AD FS console
  tree:

  - Configure the certificates that AD FS uses for issuing and receiving tokens and publishing
    metadata.
  - Configure the types of claims that are supported by AD FS.

To learn more about the AD FS console, see the
[AD FS Console](<https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/gg557729(v=ws.10)?redirectedfrom=MSDN>)
Microsoft article.

## Configuration Steps

Follow these steps to set up AD FS as an SSO solution for Directory Manager:

- Generate the consumer URL and audience URL for the Directory Manager client with which you want to
  configure AD FS. See the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic for additional information.
- Configure relaying party trust in AD FS. As part of the process, provide the consumer URL and
  audience URL in AD FS. You must also specify the claim rules for authentication. See the
  [Configure Relaying Party Trust in AD FS](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic for additional
  information.
- [Configure the AD FS Provider In Directory Manager](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md)

That done, you can sign into Directory Manager using AD FS. See the [Sign In Using AD FS](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md)
topic for additional information.

# Sign In Using AD FS

We configured the ADS FS provider with a Directory Manager client, that is the Directory Manager
portal _Wizard_ in our example. For single sign-on using AD FS, we can choose any of the following
ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from AD
  FS.

### SP-Initiated Single Sign-On

Step 1 – Launch the Directory Manager portal _Wizard_.  
On the Login page, the availability of the user name and password fields depends on whether you
disabled Directory Manager Authentication or not (see step 2 in the
[Specify Advanced Configurations](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#specify-advanced-configurations)
topic).  
The AD FS option may be displayed as a button or an image.

Step 2 – Click the AD FS button or image; you will be redirected to the AD FS authentication page
with the URL you provided as the IDP login URL (see the
[Provide IDP Login URL](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md#provide-idp-login-url) topic).

Step 3 – Sign in as an Active Directory regular user. On signing in, the authentication is routed to
AD FS, that will validate the user with respect to the specified attribute (i.e., user principal
name – UPN in our case) and log him or her into the Directory Manager portal.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

### IdP-Initiated Single Sign-On

Step 1 – Launch the ADF FS portal using the URL provided by your organization and sign in. The AD FS
dashboard will be displayed.

Step 2 – From the Sign in to one of the following sites list, select a relying party trust. This
list contains the relying party trusts configured with AD FS for single sign-on.

Step 3 – Click **Sign in**; you will be redirected to it. Authentication will not be required.

# Generate the Consumer URL and Metadata File

In Directory Manager Authenticate, you can generate a metadata file for the Directory Manager client
with which you want to set up the PingOne identity provider.

When you import this file into PingOne, it populates all Directory Manager-related configurations
into the provider.

In Authenticate, you have to:

- Generate the consumer URL for the Directory Manager client you want to set up the PingOne identity
  provider with
- Generate the metadata file

## Generate Consumer URL

To generate the consumer URL, see the [Generate URLs](/docs/directorymanager/11.1/configuration/authentication/ldap-configuration.md) topic. Replace
references to AD FS with PingOne.

## Generate the Metadata File

In Authenticate, use the **Metadata** section on the **Generate URLs** page to generate the metadata
file for the Directory Manager client with which you want to set up PingOne for single sign-on.

Since we generated the consumer URL for the _Wizard_ portal, we should generate the metadata file
for this same portal.

**To generate the file:**

1. In Authenticate, click the **Generate URL's** tab. The **Generate URL's** page is displayed.
2. In the **Metadata** section, select an identity store in the **Identity store** drop-down list.  
   Users will be authenticated in this identity store when they use PingOne for single sign-on.
3. The **Client** drop-down list displays the Directory Manager clients for the identity store.
   Select the client for which you have already generated the consumer URL.
4. Click **Download** to download the metadata file to your machine.
