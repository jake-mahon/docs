# Configure the PingOne Provider In Directory Manager

While creating the PingOne provider in Directory Manager, you simply have to import the PingOne metadata file to configure all settings for this identity provider.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the __SAML Providers__ tab.
2. On the __SAML Providers__ page, click __New Provider__.
3. On the __Create New Provider__ page, enter a name for the provider in the __Name__ box.
4. Make sure the __Client__ box displays the name of the Directory Manager client for which you generated the consumer URL and the Directory Manager metadata file (see the [Generate the Consumer URL and Metadata File](/docs/product_docs/groupid/groupid/authenticate/asserviceprovider/pingone/generatemetadata.md) topic).  
   To continue with the example, select the Directory Manager portal named _Wizard_.
5. Click the __Import from Metadata__ button under the __Advanced__ section to import the PingOne metadata file.
6. On the __Import Settings from IDP provided Metadata File__ dialog box, click __Browse__ to select the PingOne metadata file downloaded earlier. Then click __Upload__. With this, several fields on the __Create New Provider__ page are automatically filled in.
7. When PingOne is configured with a Directory Manager client, it will be available on the login page of that client (the Wizard portal in our example) for single sign-on. You can choose to display the PingOne authentication option as an image or a button. See the [Upload an Image for the Identity Provider](/docs/product_docs/groupid/groupid/authenticate/asserviceprovider/adfs/configureadfsingroupid.md#Upload-an-Image-for-the-Identity-Provider) topic for details, replacing references to AD FS with PingOne.
8. Expand the __Advanced__ section on the __Create New Provider__ page.
9. The __Response Signing Method__ box displays _RSA-SHA-256_ as the signing method type. We configured this method as the signing algorithm in PingOne.
10. For _Disable GroupID Authentication_, see step 2 in the [Specify Advanced Configurations](/docs/product_docs/groupid/groupid/authenticate/asserviceprovider/adfs/configureadfsingroupid.md#Specify-Advanced-Configurations) topic. Replace references to AD FS with the PingOne provider.
11. In the __Request Binding__ list, select _POST_, since the __Single Logout Binding Type__ is set to _Post_ in PingOne.
12. Click the __Create Provider__ button. The identity provider is created and displayed on the __SAML Providers__ page.
