# Configure the AD FS Provider In GroupID

To configure a SAML provider in GroupID, you have to specify the following:

- Issuer URL
- IDP Login URL
- Token signing certificate
- An image for the identity provider
- Advanced configurations

What do you want to do?

- [Configure the AD FS Provider in GroupID](#configure-the-ad-fs-provider-in-groupid)

## Configure the AD FS Provider in GroupID

1. In GroupID Authenticate, click the __SAML Providers__ tab.
2. On the __SAML Providers__ page, click __New Provider__.
3. On the __Create New Provider__ page, enter a name for the provider.
4. Make sure the __Client__ box displays the name of the GroupID client foe which you generated the Entity ID/Audience URL and provided that in AD FS.

Keep this page open while we copy configurations from AD FS and provide them here.

### Provide Issuer URL

The issuer URL is provided by the federation service, i.e., AD FS. Copy this URL from AD FS and provide it in GroupID.

__To fetch and enter Issuer URL:__

1. In the AD FS console, right-click __Service__ and select __Edit Federation Service Properties__.
2. On the __Federation Service Properties__ dialog box, copy the URL displayed in the __Federation Service Identifier__ box and paste it in the __Issuer__ box on the __Create New Provider__ page,

### Provide IDP Login URL

The IDP Login URL is the URL of the AD FS sign-in page.

__To fetch and enter IDP Login URL:__

1. Launch the AD FS login page and copy the URL displayed in the address bar.
2. We only need the initial part of the URL, up to _ls_. Copy it and paste it in the __IDP Login URL__ box on the __Create New Provider__ page

### Get Token-Signing Certificate

The next step is to get the token-signing certificate from AD FS and provide it in GroupID.

1. Go to the AD FS console and click __Certificates__. The certificates are displayed.
2. Double-click the token-signing certificate to open its properties.
3. On the Certificate Properties dialog box, go to the __Details__ tab and click the __Copy to File__ button to launch the Certificate Export Wizard.
4. Read the welcome message and click __Next__.
5. On the __Export File Format__ page, select the __Base-64 encoded X.509 (.CER)__ option button and click __Next__.
6. On the __File to Export__ page, specify a name for the certificate file and click __Browse__ to specify a location to save it. Then click __Next__.
7. On the next page, click __Finish__ to complete the wizard.
8. Open the certificate file in Notepad and select the entire content. Copy this certificate and paste it in the __IDP Certificate__ box on the __Create New Provider__ page. Make sure there is no trailing space after the dashes that mark the end of the certificate.

### Upload an Image for the Identity Provider

When AD FS is configured with a GroupID client, say the GroupID portal _Wizard_, it will be available on _Wizard’s_ login page for single sign-on. You can choose to display the AD FS option as an image or as a button.

To display the AD FS option as an image, you have to upload an image for it. On the __Create New Provider__ page, use the __Browse__ button under __Identity Provider Image__ to upload an image for AD FS.

NOTE: Supported image formats are: .jpg, .bmp, .png, and .gif.  
Required dimensions for the image file are: 210 x 60 pixels.

If you do not upload an image, AD FS authentication will be shown as a button. This button would have the same name as you entered in the __Name__ box on the __Create New Provider__ page.

Users can click the AD FS image or the button on the login page of the GroupID portal _Wizard_ for single sign-on.

### Specify Advanced Configurations

Next, specify some advanced configurations for the identity provider. Expand the __Advanced__ section on the __Create New Provider__ page.

1. Make sure that _RSA-SHA-256_ is selected in the __Response Signing Method__ box.
2. The __Disable GroupID Authentication__ option indicates whether to display the GroupID authentication login on the GroupID client's logiin page ( i.e., Wizard portal’s login page in our example).

   - By default, ‘No’ is selected, which means that when users access the Wizard portal’s login page, they will be shown the GroupID login and password option along with the AD FS identity provider’s button.
   - Selecting ‘Yes’ means that the GroupID login and password option will not be available on the Wizard portal’s login page. Moreover, when a single identity store and a single SAML provider is configured, the login page for the provider is displayed rather than the Wizard portal’s login page.
3. Select _Post_ in the __Request Binding__ drop-down list.  
   To verify that you have selected the correct binding type, do the following:

   1. In the AD FS console click __Relying Party Trust__ in the left pane; the middle pane displays the relying party trusts already configured.
   2. Double-click the relying party trust that you created for the GroupID portal _Wizard_. This launches the Properties dialog box for the relying party trust.
   3. Click the __Endpoints__ tab and confirm that the binding type is _POST_.
4. In AD FS, we configured an Active Directory attribute that the identity provider will use for authenticating users (see step 16 in the [Configure Relaying Party Trust in AD FS](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/adfs/configurerelayingpartytrust.md#configure-relaying-party-trust-in-ad-fs) topic). In our example, we used the UPN attribute that stores the user principal name. Now in the __Advanced__ section, we have to refer to this attribute.  
   In the __Identity Location__ list, select the _Identity is an attribute element_ option.
5. On selecting it, the __Identity Location Attribute__ box is displayed.   
   The attribute location will be in the form of a URL. Get this URL from AD FS.

   1. In the AD FS console, click __Claim Descriptions__ in the left pane and then select the Active Directory attribute you specified for authentication. In our example, it is the UPN attribute.
   2. Double-click the attribute to open its properties.
   3. On the __Attribute Properties__ dialog box, copy the URL displayed in the __Claim type__ box and paste it in the __Identity Location Attribute__ box.
6. With all configurations completed, click the __Create Provider__ button. The identity provider, i.e., AD FS, is created and displayed on the __SAML Providers__ page.
