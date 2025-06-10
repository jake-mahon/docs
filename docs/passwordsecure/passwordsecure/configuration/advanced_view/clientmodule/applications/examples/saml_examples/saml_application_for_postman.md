# SAML application for Postman

## SAML configuration example for Postman

This chapter explains how to configure the SAML application for __Postman__. It is assumed that [Configuration of SAML](/docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/configuration_of_saml/configuration_of_saml.md) has already been activated in the Server Manager.

- First, you register with Postman.
- After logging in, click on the avatar and select "__Settings__".

![settings postman](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_1-en.webp)

- Then click on __Authentication__. Select a new method in the upper right corner.

![option authentication postman](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_2-en.webp)

- Here the Authentication Type must be defined with __SAML 2.0__ and any useful Authentication Name.

![add authentication method](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_3-en.webp)

Then you come to the actual configuration.

- Store Provider Details
- __Identity Provider Details__
  The data from the Server Manager is uploaded as XML or stored manually.

![postman identity provider details](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_4-en.webp)

- __Service Provider Details__
  The service provider details are now copied to the application in the Netwrix Password Secure Client.

![postman service provider details](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_5-en.webp)

NOTE: 
Please note that a __Relay State__ is required. This value can be created in the __Configure Identity Provider Details View__.
