# Register an Application (Service Provider) in GroupID

To register a service provider in GroupID, you have to create an application for the provider in GroupID.

Next, while configuring GroupID in the service provider, you have to provide GroupID metadata. You can copy metadata values and paste them in the service provider.

## Create an Application for a Service Provider in GroupID

1. In GroupID Authenticate, go to the __SAML Applications__ tab and click __New Application__.
2. On the __Create Application__ page, enter a name for the application in the __Name__ box. The application will be displayed on the GroupID Login page with this name.
3. Copy the consumer URL from the service provider and enter it In the __Consumer URL__ box.
4. Copy the audience URL from the service provider and enter it In the __Entity ID/Audience__ box.
5. From the __Identity store__ drop-down list, select the identity store to use for authenticating users.  
   For single sign-on, third-party application users must authenticate through an identity store defined in GroupID. For example, to authenticate users through Active Directory, select an AD-based identity store.
6. Next, specify an attribute as a claim. Service provider application users are authenticated in GroupID based on this attribute.  
   Enter the attribute name in the __Claims__ box. As you type, the system displays the attributes in the selected identity store that start with the text. Select the required attribute.  
   GroupID will match the value of this attribute in the application and in the identity store for authentication.
7. Click __Browse__ under __Identity Provider Image__ to upload an image for the application, such as the application logo.

   NOTE: Supported image formats: .jpg, .bmp, .png, and .gif  
   Image file dimensions: 210 x 60 pixels

Specify advanced settings for the application:

8. Expand the __Advanced__ section by clicking the down arrow head.
9. Select _Enabled_ or _Disabled_ in the __Response Signing__drop-down list, depending on whether it is enabled or disabled in the service provider.
10. Select a response signing method from the __Response Signing Method__ drop-down list. This method should be the same for the identity provider (GroupID) and the service provider (third-party application).
11. Select _Post_ or _Redirect_ in the __Response Binding__ drop-down list, depending on how the service provider accepts the response.
12. If you are not using assertion encryption, make sure _Disabled_ is selected in the __Assertion Encryption__ drop-down list.  
    To use assertion encryption as an advanced security feature, select __Enabled__. Then provide the certificate, key transport algorithm, and encryption algorithm to encrypt the response.
13. Generate a logout URL in the service provider and enter it in the __Single Logout URL__ box. When a user clicks this URL, he or she will be logged out of all applications that have been authenticated through GroupID (i.e., applications that he or she is single signed in through GroupID).
14. Provide the GroupID metadata in the service provider to register GroupID as an identity provider in it. See the [GroupID Metadata for Service Provider Configurations](#GroupID-Metadata-for-Service-Provider-Configurations) topic.
15. Click __Create Application__ to create the service provider in GroupID.

### GroupID Metadata for Service Provider Configurations

As part of registering an application in GroupID, you also have to provide GroupID metadata in the service provider.

__To copy metadata:__

1. On the __Create Application__ page, expand the __Metadata__ section by clicking the down arrow head.
2. Copy the Issuer URL and GroupID certificate from the __Provider Issuer__ and __Provider Signing Certificate__ boxes and paste them in the service provider.
3. Both the __Provider IDP Redirect Endpoint__ and __Provider IDP POST Endpoint__ are given here. Depending on how the service provider sends the request or the mechanism used, copy the appropriate URL and paste it in the service provider.
4. The __Single Logout Endpoint POST__ box displays a URL. Requests are posted on this URL for logging out from the current and all other third-party applications configured in GroupID.
5. The __Login URL__ box displays a URL. On clicking it, the user is redirected to the GroupID Login page where GroupID is acting as an identity provider. If the user is already logged into GroupID, he/she will be auto-authenticated; else the user will have to provide the credentials.
