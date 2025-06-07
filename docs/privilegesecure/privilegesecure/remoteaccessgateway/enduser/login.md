# First Time Login

Remote Access Gateway users can access the portal via the URL provided by a Netwrix Privilege Secure Administrator, for example:

```https://[ExampleRagPortalIpAddress]```

Follow the steps to log in to the Privilege Secure.

__Step 1 –__ Open the Remote Access Gateway in a browser window. The Login screen will show the Authentication method that is set as the default.

__NOTE:__ Privilege Secure requires a multi-factor authentication (MFA) solution (Authenticator, DUO, Symantec VIP, etc) for all user accounts unless otherwise configured by an Administrator. If required, first time users must register with an MFA to use with their login credentials.

__Step 2 –__ Either click the default __Authentication Connector__ button, or click __Log In with a Different Account__ to display all of the authentication connectors that are registered with Privilege Secure.

![loginrag](/static/img/product_docs/privilegesecure/privilegesecure/remoteaccessgateway/enduser/loginrag.png)

__Step 3 –__ Login to the Remote Access Gateway using federated login, or entering the AD or NPS local user credentials. (The method will depend on how the Remote Access Gateway has been configured by your administrator).

- When using an authentication connector, there's no 'username' or 'password' field for the user to enter. Instead there's just a single button to login.

  ![mfaloginrag](/static/img/product_docs/privilegesecure/privilegesecure/remoteaccessgateway/enduser/mfaloginrag.png)
- Clicking the authentication connector will redirect the user to the IdP login screen, which will log the user in (with whatever MFA is set up in the IdP) and then revert the user back to the Privilege Secure dashboard once authenticated. Steps 4-7 will be skipped when using an IdP login.

__Step 4 –__ Click Login to proceed.

__Step 5 –__ A QR code will be displayed to register with an authenticator application.

__Step 6 –__ Enter the code provided by the registered multi-factor authenticator (MFA).

![authcoderag](/static/img/product_docs/privilegesecure/privilegesecure/remoteaccessgateway/enduser/authcoderag.png)

__Step 7 –__ Click __MFA Login__. Privilege Secure opens on the Access Interface.

![accessdashboardrag](/static/img/product_docs/privilegesecure/privilegesecure/remoteaccessgateway/enduser/accessdashboardrag.png)

__Step 8 –__ Once the authentication is complete, the Access dashboard is displayed.

The Remote Access Gateway is ready to use.
