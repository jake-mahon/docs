# Configure Directory Manager in Microsoft Entra ID for SSO

Following are the steps to create and configure the Directory Manager application in Microsoft Entra Admin Center:

- Create an application for Directory Manager in Microsoft Entra Admin Center.
- Assign owners to the application.
- Assign users to log into Directory Manager using Microsoft Entra ID SSO.
- Specify SAML SSO configurations for the application.

## Configure Directory Manager in Microsoft Entra ID

Follow the steps to configure Directory Manager in Microsoft Entra ID.

Step 1 – Sign into Microsoft Entra Admin Center.

Step 2 – Go to Microsoft Entra ID > Enterprise applications.

Step 3 – On the Enterprise applications page, click __New application__ to add a new application.

Step 4 – On the Browse Microsoft Entra Gallery page, click __Create your own application__.

Step 5 – On the Create your own application pane, do the following:

1. Enter a name for your application In the What's the name of your app? box (for example, Entra SSO).
2. Select the __Integrate any other application you don't find in the gallery (Non-gallery)__ option button.
3. Click __Create__.  
   On creating an application, an Overview page is displayed for it.

Step 6 – On the Overview page, click __Properties__ in the left pane to navigate to the application's properties.

Step 7 – On the Properties page, make sure the application is enabled so that users can sign in. For this, the Enabled for Users to sign in option should be set to _Yes_.

Step 8 – The Name box displays the application name. You can change the application logo. Your application is displayed with the logo in the Access Panel Applications.

Step 9 – Make sure Assignment required? is set to _Yes_. We will be assigning users manually, who would be able to log into the Directory Manager portal _Wizard_ using Microsoft Entra SSO.

Step 10 – Next, assign owners to the application. To assign one or more users as owners of the application, click __Owners__ under Manage in the left pane.

Step 11 – On the Owners page, click __Add__ and search the user(s) you want to assign as owners. For example, you can specify your service account as an owner.

Step 12 – The next step is to assign users who can sign into the Directory Manager portal _Wizard_ using Microsoft Entra ID SSO. You can specify users and groups.  
Click __Users and groups__ under Manage in the left pane. On the Users and groups page, click __Add user/group__. On the Add Assignment page, search for your required user or group, select it and click __Assign__.

Step 13 – Now you have to specify SAML SSO configurations for the application. Click __Single sign-on__ under Manage in the left pane. The Single sign-on page displays different methods that Microsoft Entra ID provides for single sign on. Select _SAML_.  
The SAML-based Sign-on page is displayed, where you have to set single sign-on options for Directory Manager.

Step 14 – On the Basic SAML Configuration card, click __Edit__.

Step 15 – On the Basic SAML Configuration pane, provide the Entity ID and Consumer URL that you copied earlier. See the [Generate URLs](generateurls.md) topic.  
After adding the information, click __Save__.

Step 16 – Back on the SAML-based sign-on page, the Attributes & Claims card displays the attributes used for logging in. Let’s keep the defaults.

Step 17 – On the SAML Certificates card, download _Certificate (Base64)_.
