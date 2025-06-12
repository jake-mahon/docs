# Privilege Secure End User Overview

This topic and its subtopics are written for users who have been assigned as a Privilege Secure User.

New users added to the Console will need to go through the MFA registration process before they can log in. Privilege Secure requires a multi-factor authentication (MFA) solution (Authenticator, DUO, Symantec VIP etc) for all user accounts. Upon initial login, the user must complete MFA registration in order to proceed with using Privilege Secure. It is recommended to check with the organization's Administrators for login requirements.

There is also a Browser Extension that can be installed for Privilege Secure users. See the [Browser Extension App](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/browserextension/browserextension.md) topic for additional information.

## First Time Login

Once Privilege Secure is installed, users can launch the application from the desktop icon or can be accessed via the URL provided by an Privilege Secure Administrator, for example:

https://ExampleServer01:6500

Since Privilege Secure is a browser-based application, it is possible to access the web interface remotely. In most environments, enter the URL for the host on which Privilege Secure is installed into a supported browser address bar. For example, if Privilege Secure is installed on server ```ExampleServer01```, then the address is:

https://ExampleServer01:6500

Depending on the organization’s network environment, use the NetBIOS name, fully qualified domain name (FQDN), or IP Address of the server in the browser. Also, access can be restricted through firewalls.

Follow the steps to log in to the Privilege Secure.

__Step 1 –__ Open Privilege Secure in a browser window. The Login screen will show the Authentication Connector that is set as the default.

__NOTE:__ Privilege Secure requires a multi-factor authentication (MFA) solution (Authenticator, DUO, Symantec VIP, etc) for all user accounts unless otherwise configured by an Administrator. If required, first time users must register with an MFA to use with their login credentials.

![Default Login](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/defaultloginuser.png)

__Step 2 –__ Either click the default authentication connector button, or click __Log In with a Different Account__ to display all of the authentication connectors that are registered with Privilege Secure.

![Alternate Login](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/alternatelogin.png)

__Step 3 –__ Login to Privilege Secure with a configured authentication connector, or enter the user credentials.

- When using an authentication connector, there's no 'username' or 'password' field for the user to enter. Instead there's just a single button to login.

![Okta authentication connector](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/oktadefault.png)

- Clicking the authentication connector will redirect the user to the IdP login screen, which will log the user in (with whatever MFA is set up in the IdP) and then revert the user back to the Privilege Secure dashboard once authenticated. Steps 4-7 will be skipped when using an IdP login.

__Step 4 –__ Click Login to proceed.

__Step 5 –__ A QR code will be displayed to register with an authenticator application.

__Step 6 –__ Enter the code provided by the registered multi-factor authenticator (MFA).

![Multi Factor Authentication Login](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/mfalogin.png)

__Step 7 –__ Click MFA Login. Privilege Secure opens on the Dashboard Interface.

![Dashboard Interface](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/activedashboarduser.png)

Privilege Secure is ready to use.
