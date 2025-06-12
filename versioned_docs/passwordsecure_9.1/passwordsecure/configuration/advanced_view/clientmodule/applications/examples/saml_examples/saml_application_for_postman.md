# SAML application for Postman

## SAML configuration example for Postman

This chapter explains how to configure the SAML application for __Postman__. It is assumed that [Configuration of SAML](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/configuration_of_saml/configuration_of_saml.md) has already been activated in the Server Manager.

- First, you register with Postman.
- After logging in, click on the avatar and select "__Settings__".

![settings postman](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_1-en.png)

- Then click on __Authentication__. Select a new method in the upper right corner.

![option authentication postman](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_2-en.png)

- Here the Authentication Type must be defined with __SAML 2.0__ and any useful Authentication Name.

![add authentication method](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_3-en.png)

Then you come to the actual configuration.

- Store Provider Details
- __Identity Provider Details__
  The data from the Server Manager is uploaded as XML or stored manually.

![postman identity provider details](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_4-en.png)

- __Service Provider Details__
  The service provider details are now copied to the application in the Netwrix Password Secure Client.

![postman service provider details](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_5-en.png)

NOTE: 
Please note that a __Relay State__ is required. This value can be created in the __Configure Identity Provider Details View__.
