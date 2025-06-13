# Configure GroupID in Microsoft Entra ID for SSO

Following are the steps to create and configure the GroupID application in Microsoft Entra Admin Center:

- Create an application for GroupID in Microsoft Entra Admin Center.
- Assign owners to the application.
- Assign users to log into GroupID using Microsoft Entra ID SSO.
- Specify SAML SSO configurations for the application.

## Configure GroupID in Microsoft Entra ID

1. Sign into Microsoft Entra Admin Center.
2. Go to __Microsoft Entra ID > Enterprise applications__.
3. On the __Enterprise applications__ page, click __New application__ to add a new application.
4. On the __Browse Microsoft Entra Gallery__ page, click __Create your own application__.
5. On the __Create your own application__ pane, do the following:

   1. Enter a name for your application In the __What's the name of your app?__ box (for example, Entra SSO).
   2. Select the __Integrate any other application you don't find in the gallery (Non-gallery)__ option button.
   3. Click __Create__.  
      On creating an application, an Overview page is displayed for it.
6. On the __Overview__ page, click __Properties__ in the left pane to navigate to the application's properties.
7. On the Properties page, make sure the application is enabled so that users can sign in. For this, the __Enabled for Users to sign in__ option should be set to _Yes_.
8. The __Name__ box displays the application name. You can change the application logo. Your application is displayed with the logo in the Access Panel Applications.
9. Make sure __Assignment required?__ is set to _Yes_. We will be assigning users manually, who would be able to log into the GroupID portal _Wizard_ using Microsoft Entra SSO.

__Assign owners to the application:__

10. To assign one or more users as owners of the application, click __Owners__ under __Manage__ in the left pane.
11. On the __Owners__ page, click __Add__ and search the user(s) you want to assign as owners. For example, you can specify your service account as an owner.

__Assign users to log into GroupID using Microsoft Entra ID SSO:__

12. The next step is to assign users who can sign into the GroupID portal _Wizard_ using Microsoft Entra ID SSO. You can specify users and groups.  
    Click __Users and groups__ under __Manage__ in the left pane. On the __Users and groups__ page, click __Add user/group__. On the __Add Assignment__ page, search for your required user or group, select it and click __Assign__.

__Specify SAML SSO configurations for the application:__

13. Click __Single sign-on__ under __Manage__ in the left pane. The __Single sign-on__ page displays different methods that Microsoft Entra ID provides for single sign on. Select _SAML_.  
    The __SAML-based Sign-on__ page is displayed, where you have to set single sign-on options for GroupID.
14. On the __Basic SAML Configuration__ card, click __Edit__
15. On the __Basic SAML Configuration__ pane, provide the Entity ID and Consumer URL that you copied earlier. See the [Generate URLs](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/entrasso/generateurls.md) topic.  
    After adding the information, click __Save__.
16. Back on the __SAML-based sign-on__ page, the __Attributes & Claims__ card displays the attributes used for logging in. Let’s keep the defaults.
17. On the __SAML Certificates__ card, download _Certificate (Base64)_.
