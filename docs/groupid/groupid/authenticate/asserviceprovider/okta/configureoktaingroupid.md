# Configure the Okta Provider In Directory Manager

While creating the Okta provider in Directory Manager, you simply have to import the Okta metadata file to configure all settings for this identity provider.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the __SAML Providers__ tab.
2. On the __SAML Providers__ page, click __New Provider__.
3. On the __Create New Provider__ page, enter a name for the provider in the __Name__ box.
4. Make sure the __Client__ box displays the name of the Directory Manager client for which you generated the Entity ID/Audience URL and provided that while creating the Directory Manager application in Okta.
5. While creating the Directory Manager application in Okta, we downloaded a metadata file. See the [Download the Okta Metadata File](/docs/groupid/groupid/authenticate/asserviceprovider/okta/configureinokta.md#download-the-okta-metadata-file) topic.  
   To import this file, click the __Import from Metadata__ button under the __Advanced__ section.
6. On the __Import Settings from IDP provided Metadata File__ dialog box, click __Browse__ to select the Okta metadata file downloaded earlier. Then click __Upload__. With this, several fields on the __Create New Provider__ page are automatically filled in.
7. When Okta is configured with a Directory Manager client, it will be available on the login page of that client (the Wizard portal in our example) for single sign-on. You can choose to display the Okta authentication option as an image or a button. See the [Upload an Image for the Identity Provider](/docs/groupid/groupid/authenticate/asserviceprovider/adfs/configureadfsingroupid.md#upload-an-image-for-the-identity-provider) topic for details, replacing references to AD FS with Okta.
8. Expand the __Advanced__ section on the __Create New Provider__ page.  
   View the settings and leave them to defaults.
9. For _Disable GroupID Authentication_, see step 2 in the [Specify Advanced Configurations](/docs/groupid/groupid/authenticate/asserviceprovider/adfs/configureadfsingroupid.md#specify-advanced-configurations) topic. Replace references to AD FS with the Okta provider.
10. Click the __Create Provider__ button. The identity provider is created and displayed on the __SAML Providers__ page.
