# Configure the Microsoft Entra SSO Application in GroupID

To configure a SAML provider in GroupID, you have to specify the following:

- IDP certificate
- IDP Login URL
- Issuer URL
- Advanced configurations

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the __SAML Providers__ tab.
2. On the __SAML Providers__ page, click __New Provider__.
3. On the __Create New Provider__ page, enter a name for the provider in the __Name__ box. For example, Entra ID SSO.
4. Make sure the __Client__ box displays the name of the GroupID client for which you generated the Entity ID/Audience URL and provided that while creating the GroupID application in Microsoft Entra Admin Center.
5. Open the Certificate (Base64) file that you downloaded from Microsoft Entra Admin Center and copy the certificate information.  
   On the __Create New Provider__ page, paste it in the __IDP Certificate__ box. Make sure you have not copied any trailing space.
6. In Microsoft Entra Admin Center, copy the Login URL from the __Set up Azure SSO__ card on the __SAML-based sign-on__ page and paste it in the __IDP Login URL__ box on the __Create New Provider__ page.
7. Again, copy the Azure AD Identifier URL from the __Set up Azure SSO__ card on the __SAML-based sign-on__ page and paste it in the __Issuer__ box on the __Create New Provider__ page.
8. Expand the __Advanced__ section on the __Create New Provider__ page.
9. Select _Post_ in the __Request Binding__ drop-down list.
10. For _Disable GroupID Authentication_, see step 2 in the [Specify Advanced Configurations](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/adfs/configureadfsingroupid.md#Specify-Advanced-Configurations) topic. Replace references to AD FS with the Microsoft Entra SSO provider.
11. Click the __Create Provider__ button. The identity provider is created and displayed on the __SAML Providers__ page.
