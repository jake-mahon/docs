---
sidebar_position: 7468
title: Sign In Using OneLogin
---

# Sign In Using OneLogin

We configured OneLogin with a Directory Manager client, that is the Directory Manager portal *Wizard* in our example. We also created a user, Leo Ferguson, in OneLogin who should be able to log into the *Wizard* portal using the OneLogin single sign-on option.

For single sign-on using OneLogin, we can choose any of the following ways:

* SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the Directory Manager portal, Wizard.
* IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from OneLogin.

### SP-Initiated Single Sign-On

1. Launch the Directory Manager portal *Wizard*.  
   The availability of the user name and password fields depends on whether you disabled Directory Manager Authentication or not (see step 11 in the [Configure the Provider in Directory Manager](ConfigureOneLoginInGroupID#Configur "Configure the Provider in Directory Manager") topic).
2. Click the button or image for OneLogin; the OneLogin sign in page is displayed.
3. Enter Leo Ferguson’s login name and password, and click **Login**. The user is successfully logged into the *Wizard* portal using the OneLogin single sign on option.  
   Only users defined for our app in OneLogin can log in by entering their user names and passwords. See the [Define Users in OneLogin](ConfigureInOneLogin#Define "Define Users in OneLogin") topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the OneLogin portal using the URL provided by your organization and log in. The OneLogin dashboard displays the apps configured with OneLogin for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.