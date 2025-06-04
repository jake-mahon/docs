---
id: sso
title: Single Sign On
---

# Single Sign On

Single Sign On (SSO) is a powerful authentication process that enhances security and improves user experience by allowing users to access multiple applications with a single set of login credentials. Single Sign On (SSO) allows you to log in to 1Secure using Microsoft Entra ID or Open ID Connect credentials. It enhances the user experience by enabling access with existing organizational credentials.

## Log In Through Single Sign On

![1Secure Invitation Email](/img/1secure/admin/1SecureInvitation(SSO).png "1Secure Invitation Email")

**Step 1 –** Click **Access 1Secure** button in the invitation email. You are navigated to the 1Secure login page.

![Log In page](/img/1secure/admin/CompanyLogin.png "Log In page")

**Step 2 –** On the login page, click the **Log In** button.

**Step 3 –** In the Email address field, specify a valid email address registered with 1Secure, then click **Continue**. Based on your authentication status, one of the following will occur:

- If you are logged out of your authentication provider, you will be redirected to the authentication provider's login page. For example, if you are using Microsoft Entra ID, you will be redirected to the Microsoft Entra ID login page. Authenticate using your credentials. After successful authentication, you will be logged in to 1Secure.
- If you are already logged in to your authentication provider, then you will be directly logged in to 1Secure application.

## SSO Configuration with Authentication Services

To enable Single Sign-On (SSO) for tenant users, an MSP must configure SSO using one of the following authentication services:

- [Configure SSO with Microsoft Entra ID Authentication](#configure-sso-with-microsoft-entra-id-authentication "Configure SSO with Microsoft Entra ID Authentication")
- [Configure SSO with OpenID Connect Authentication](#configure-sso-with-openid-connect-authentication "Configure SSO with OpenID Connect Authentication")

**NOTE:** When you first log in to 1Secure, SSO is not enabled, and 1Secure Authentication is applied by default. This method requires Multi-factor authentication (MFA) to verify your identity for secure access. See the [Log In](LogIn.md/LogIn.md#log-in "Log In") topic for additional information on Multi-factor authentication.

### Configure SSO with Microsoft Entra ID Authentication

Follow the steps to configure SSO with Microsoft Entra ID authentication.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **My organization**. The My organization page is displayed

![My Organization page](/img/1secure/admin/MyOrg_Authentication.png "My Organization page")

**Step 4 –** In Method drop-down menu, select **Entra ID**.

**Step 5 –** In Client ID field, specify the client ID of the app registered in Microsoft Entra ID. See the [Register an App in Microsoft Entra ID For Authentication](#register-an-app-in-microsoft-entra-id-for-authentication "Register an App in Microsoft Entra ID For Authentication") topic for additional information.

**Step 6 –** Click **Save**. The Single Sing-On (SSO) is configured with Microsoft Entra ID authentication.

### Configure SSO with OpenID Connect Authentication

Follow the steps to configure SSO with OpenID Connect authentication.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **My organization**. The My organization page is displayed

![My Organization page](/img/1secure/admin/MyOrg_Authentication.png "My Organization page")

**Step 4 –** In Method drop-down menu, select **OpenID Connect**.

**Step 5 –** In Client ID field, specify the client ID of the OpenID application that 1Secure uses to communicate with the OpenID provider.

**Step 6 –** In Discovery url field, specify the Discovery URL of the OpenID application.

**Step 7 –** Click **Save**. The Single Sign On (SSO) is configured with OpenID Connect authentication.

### Register an App in Microsoft Entra ID For Authentication

To configure Single Sign On (SSO) with Microsoft Entra ID authentication, register an application in the Microsoft Microsoft Entra ID by following the steps mentioned below.

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/ "Microsoft Entra admin center").

**Step 2 –** On the left navigation menu, navigate to **Identity** \> **Applications** \> **App registrations** page.

**Step 3 –** On the App registrations page, click **New registration** in the top toolbar. The Register an application page is displayed.

**Step 4 –** Specify the following information on the Register an application page:

- Name – Enter a user-facing display name for the application, for example, Netwrix 1Secure Entra ID
- Platform – Select the **Web** platform in the drop-down menu
- Redirect URL (optional) – Enter **https://auth.netwrix.com/login/callback**

**Step 5 –** Click **Register**.

- Application (client) ID – A client ID for the registered application
- Directory (tenant) ID – A tenant ID for the registered application
- Client Secret – A client secret value generated when a new client secret key is created for the registered application. See the [Generate Client Secret Value](../../Configuration/EntraID/RegisterConfig.md#generate-client-secret-value "Generate Client Secret Value") topic for additional information.