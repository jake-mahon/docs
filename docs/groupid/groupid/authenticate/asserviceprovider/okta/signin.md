# Sign In Using Okta

We configured Okta with a Directory Manager client, that is the Directory Manager portal _Wizard_ in our example. For single sign-on using Okta, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from Okta.

### SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   On the __Login__ page, notice the Okta button. You can login using your Directory Manager credentials or click Okta to log in.  
   The availability of the user name and password fields depends on whether you disabled Directory Manager Authentication or not (see step 9 in the [Configure the Provider in Directory Manager](/docs/groupid/groupid/authenticate/asserviceprovider/okta/configureoktaingroupid.md#Configure-the-Provider-in-Directory-Manager) topic).
2. Click the button/image/link for Okta; the Okta Sign In page is displayed.
3. Enter your credentials and click __Sign In__. You will be routed to the main page of the Directory Manager portal _Wizard_.  
   Only users defined for our app in Okta can log in by entering their user names and passwords. See the [Configure Users in Okta](/docs/groupid/groupid/authenticate/asserviceprovider/okta/configureinokta.md#Configure-Users-in-Okta) topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the Okta portal using the URL provided by your organization and sign in. The Okta dashboard displays the apps configured with Okta for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.
