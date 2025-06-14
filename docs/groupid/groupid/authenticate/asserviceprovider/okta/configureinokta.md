# Configure Directory Manager In Okta

To configure Directory Manager in Okta, follow these steps:

- Create an app for Directory Manager in Okta
- Download the Okta metadata file
- Configure Users in Okta

## Configure Directory Manager In Okta

1. Launch Okta and sign in.
2. On signing in, the Okta dashboard is displayed.
3. To configure the Directory Managerapplication in Okta, click __Applications__ in the ribbon at the top.
4. On the __Applications__ page, click the __Add Application__ button.
5. The __Add Application__ page displays some preconfigured options. Click the __Create New App__ button.
6. On the __Create a New Application Integration__ dialog box, select the __SAML 2.0__ option button and click __Create__.
7. On the __General Settings__ tab of the __Create SAML Integration__ page, provide a user-friendly name for the app (for example, Directory Manager Okta Sign-On) in the __App name__ box.
8. Use the __App Logo__ option to upload a logo for the Directory Manager app. This logo will be displayed on the Okta dashboard. When a user signs into Okta, he or she will be redirected to the dashboard that will have Directory Manager and other applications listed for single sign-on.
9. Click __Next__.
10. On the __Configure SAML__ tab of the __Create SAML Integration__ page, provide the consumer URL and audience URL that you generated for the Directory Manager client In the __Single sign on URL__ and __Audience URI (SP Entity ID)__ boxes respectively. See the [Generate URLs](/docs/groupid/groupid/authenticate/asserviceprovider/okta/generateurls.md) topic.
11. We will not specify any default relay state, so leave the __Default Relay State__ field blank.
12. Leave the __Name ID format__ field selected to _Unspecified_.
13. In the __Application username__ list, make sure _Okta username_ is selected. This implies that only users defined in Okta can authenticate on the Directory Manager portal _Wizard_ using the Okta single sign-on option. See the Configure Users in Okta topic.
14. Click __Show Advanced Settings__.
15. The __Attribute Statements__ area is for specifying an attribute that will be used to authenticate users who will be signing into Directory Manager using Okta. Hence, this attribute is meant for user identification.  
    Skip this section and leave the selections to default. The Okta provider would authenticate users on the basis of the username.
16. Click __Next__.
17. On the __Feedback__ tab of the __Create SAML Integration__ page, select the option, __I’m a software vendor. I’d like to integrate my app with Okta__ and click __Finish__.

With this, the Directory Manager OKTA SSO app is successfully added in Okta, and the __Sign-On__ page is displayed.

### Download the Okta Metadata File

You can download a metadata file from Okta and import it into Directory Manager to configure the Okta provider in Directory Manager.

__To download the file:__

1. On the __Sign-On__ page, go to the __Sign On__ tab. In the __Sign On Methods__ area, click the __Identity Provider metadata__ link.
2. On the __Opening metadata__ dialog box, make sure the __Save File__ option is selected and click __OK__. The file downloads and the __Library__ dialog box opens, showing the downloaded file.
3. Right-click the metadata file and select the __Open Containing Folder__ option on the shortcut menu.
4. The next dialog box displays the file at its download location. Either copy the file to your desktop for simplicity or save its location, so that you can easily locate it for import into Directory Manager.

### Configure Users in Okta

You must define users in Okta. Only these users can authenticate on the Directory Manager portal _Wizard_ using Okta. See the [Sign In Using Okta](/docs/groupid/groupid/authenticate/asserviceprovider/okta/signin.md) topic.

There are multiple ways to define users in Okta, such as:

- Add users manually
- Use a CSV file to import users
- Use the Active Directory tool provided by Okta (that syncs Active Directory users to Okta)

For all of these, if Okta finds an existing user in its own database, it will link the Directory Manager application to the existing account. If not, it will create a new Okta account for the user. For new users, Okta generates a password and sends it to them by email.

__To configure users:__

1. Click the __People__ tab on the __Sign-On__ page.
2. To create users manually, visit the [Add users manually](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-add-users.htm) page.  
   To import users into Okta, visit the [Import users](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-import-users-main.htm) page.  
   To use an Active Directory tool for adding users, see the [Import Active Directory users on demand](https://help.okta.com/en-us/content/topics/directory/ad-agent-import-users-on-demand.htm) page.
3. After defining users, you must manually add these users. On the __People__ tab, click the __Assign to People__ button.
4. On the __Assign Okta Sign-On to People__ dialog box, click __Assign__ for a user so that they can authenticate on the Directory Manager portal _Wizard_ using Okta.
5. The next page on the dialog box displays the __User Name__ field populated with the user name. Remove the domain after the user’s name, i.e., the part starting with ‘@’. After removing the domain, we are left with the user name. The user will use this name to authenticate on the _Wizard_ portal using Okta.  
   This done, click __Save and Go Back__.
6. Repeat steps 4 and 5 for all the required users and then click __Done__ on the __Assign Okta Sign-On to People__ dialog box. The users will be displayed on the __People__ page.
7. The next step is to activate the user accounts. Click the __Directory__ link in the ribbon at the top.
8. On the __Directory__ page, click the __Activate__ link for the required user.
9. On the __Activate Person__ dialog box, click __Activate User__.  
   With this, we have successfully configured users within the Okta provider.
