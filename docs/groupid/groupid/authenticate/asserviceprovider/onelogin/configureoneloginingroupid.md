# Configure the OneLogin Provider in Directory Manager

While creating the OneLogin provider in Directory Manager, you simply have to import the OneLogin metadata file to configure all settings for it.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the __SAML Providers__ tab.
2. On the __SAML Providers__ page, click __New Provider__.
3. On the __Create New Provider__ page, enter a name for the provider in the __Name__ box.
4. Make sure the __Client__ box displays the name of the Directory Manager client for which you generated the consumer URL and audience URL (see the [Generate URLs](generateurls.md) topic).  
   To continue with the example, select the Directory Manager portal named _Wizard_.

__Import the OneLogin metadata file:__

5. Click the __Import from Metadata__ button under the __Advanced__ section to import the OneLogin metadata file that you downloaded earlier. See the [Download the OneLogin Metadata File](configureinonelogin.md#download-the-onelogin-metadata-file) topic.
6. On the __Import Settings from IDP provided Metadata File__ dialog box, click __Browse__ to select the PingOne metadata file. Then click __Upload__. With this, several fields on the __Create New Provider__ page are automatically filled in. However, you still have to provide the Issuer URL and IDP Login URL.

__Provide Issuer URL and IDP Login URL:__

7. In the __Issuer__ box, enter the issuer URL you copied from the SSO page in OneLogin. See step 15 in the [Create an App for Directory Manager in OneLogin](configureinonelogin.md#create-an-app-for-directory-manager-in-onelogin) topic.
8. In the __IDP Login URL__ box, enter the endpoint URL for the post method. You copied this URL earlier from the __SAML 2.0 Endpoint (HTTP)__ box on the __SSO__ page in OneLogin. See step 15 in the[Create an App for Directory Manager in OneLogin](configureinonelogin.md#create-an-app-for-directory-manager-in-onelogin) topic.

__Upload an image for the identity provider:__

9. When OneLogin is configured with a Directory Manager client, it will be available on the login page of that client (the Wizard portal in our example) for single sign-on. You can choose to display the OneLogin authentication option as an image or a button. See the [Upload an Image for the Identity Provider](../adfs/configureadfsingroupid.md#upload-an-image-for-the-identity-provider) topic for details, replacing references to AD FS with OneLogin.

__Specify advanced settings:__

10. Expand the __Advanced__ section on the __Create New Provider__ page.
11. For _Disable GroupID Authentication_, see step 2 in the [Specify Advanced Configurations](../adfs/configureadfsingroupid.md#specify-advanced-configurations) topic. Replace references to AD FS with the OneLogin provider.
12. In the __Request Binding__ drop-down list, select _POST_, since we used the endpoint URL for the post method in the __IDP Login URL__ box.
13. We will not use the assertion encryption, so make sure _Disabled_ is selected in the __Assertion Encryption__ drop-down list.
14. In the __Response Signing Method__drop-down list, select _RSA-SHA-256_, since we configured this method as the signing algorithm in the __SAML Signature Algorithm__ list on the __SSO__ page in OneLogin. See step 14 in the[Create an App for Directory Manager in OneLogin](configureinonelogin.md#create-an-app-for-directory-manager-in-onelogin) topic.
15. Click the __Create Provider__ button. The identity provider is created and displayed on the __SAML Providers__ page.
