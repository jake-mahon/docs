# Configure GroupID In PingOne

To configure GroupID in PingOne, follow these steps:

- Create an app for GroupID in PingOne
- Download the PingOne metadata file
- Map attributes for user authentication
- Configure users in PingOne

## Configure GroupID In PingOne

1. Launch the PingOne Identity dashboard.
2. Click __Applications__ in the ribbon at the top.
3. On the __My Applications__ tab of the __Applications__ page, click __Add Application__ and select the __New SAML Application__ option to configure the GroupID client _Wizard_ in PingOne.  
   The new application is added and displayed in the __My Applications__ area. The __Application Details__ section is also displayed.
4. In the __Application Name__ box, provide a name for the application.
5. In the __Application Description__ box, provide a description. For example, you can specify the GroupID client with which you want to set up PingOne for single sign-on.
6. Select an option from the __Category__ drop-down list, for example, Information Technology.
7. You can choose to upload an image for the GroupID app. This image will be displayed on the PingOne dashboard. When a user signs into PingOne, he or she will be redirected to the dashboard that has GroupID and other applications listed for single sign-on.
8. Click the __Continue to Next Step__ button.
9. On the next page, make sure the __I have the SAML configuration__ tile is selected.
10. Use the metadata file you generated for the _Wizard_ portal in GroupID to configure certain settings on this page. See the [Generate the Metadata File](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/pingone/generatemetadata.md#Generate-the-Metadata-File) topic.  
    Click the __Select File__ button next to __Upload Metadata__. Simply select the metadata file and it will be uploaded, thereby bringing in the required settings to configure the GroupID client _Wizard_ within PingOne. For example, the __Entity ID__ box is populated with the required URL.
11. In the __Application URL__ box, copy the same URL as displayed in the __Assertion Consumer Service (ACS)__ box.
12. Select the _Post_ option button for __Single Logout Binding Type__.
13. In the __Signing Algorithm__ drop-down list, select _RSA\_SHA256_.
14. Click the __Download__ link next to __SAML Metadata__ to download the metadata file from the PingOne identity provider.   
    While creating the PingOne provider in GroupID, you can import this file to bring in all the configurations for PingOne.
15. No further configurations are required on this page. Scroll down and click the __Continue to Next Step__ button. The __SSO Attribute Mapping__ area is displayed.

### Attribute Mapping in PingOne

The next step is to specify an attribute that will be used to authenticate users who will be signing into GroupID using the PingOne single sign-on facility. Hence, this attribute is meant for user identification.

1. In the __SSO Attribute Mapping__ area, click the __Add new attribute__ button. A new row is displayed.
2. Click the __Advanced__ button in this row; the __Advanced Attribute Options__ dialog box is displayed.
3. In the __NameFormat__ drop-down list, select the first option, i.e., the one ending with _unspecified_.
4. In the __IDP Attribute Name or Literal Value__ box, type or select the Active Directory attribute you want to use for authentication. For example, _E-mail_. This attribute facilitates user identification.  
   To define users in PingOne, see the [Configure Users in PingOne](#Configure-Users-in-PingOne) topic.
5. In the __Function__ list, you can select the conversion methodology. For example, you can convert the first name or last name to upper case, lower case, or even use regular expressions. We will not use any conversion methodology here.
6. Click __Save__ on the __Advanced Attribute Options__ dialog box.
7. The specified attribute is displayed in the __Identity Bridge Attribute or Literal Value__ box in the __SSO Attribute Mapping__ area. Provide a user-friendly name for the attribute in the __Application Attribute__ box.
8. There is one change we have to make. For attribute mapping, the email listed should be accurate, since we selected E-mail as the unique identifier.  
   Click the __Advanced__ button in the row; the __Advanced Attribute Options__ dialog box is displayed.
9. On clicking _E-mail_ in the __IDP Attribute Name or Literal Value__ box, a drop-down is displayed. Select the _Email_ option. With this, users will be authenticated with their email address. Click __Save__.
10. Back on the __SSO Attribute Mapping__ area, click the __Save & Publish__ button.
11. The configurations we made in PingOne will be displayed. Click __Finish__.  
    The new GroupID application you created in PingOne is displayed under __My Applications__.

### Configure Users in PingOne

You must define users in PingOne. These users are authenticated in GroupID on the basis of an attribute, as discussed in the [Attribute Mapping in PingOne](#Attribute-Mapping-in-PingOne) topic.

Only the users you define here can authenticate on the GroupID portal _Wizard_ using PingOne. See the [Sign In Using PingOne](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/pingone/signin.md) topic.

__To configure users:__

1. In PingOne, click __Users__ in the ribbon at the top. The __Users__ page is displayed.
2. Click the __Add Users__ button and select the __Create New User__ option to create a user.
3. On the __User__ page, specify a password in the __New Password__ and __Confirm New Password__ boxes.
4. Specify a user name in the __Username__ box.  
   The user will use this user name and password for single sign-on into GroupID using PingOne.
5. Enter other details of the user, such as first name, last name, and the email address.
6. Click __Save__ to create the user.
