# SAML Application for Dropbox

## SAML Configuration Example for Dropbox

This chapter explains how to configure the SAML application for __Dropbox__. It is assumed that [Configuration of SAML](../../configuration_of_saml/configuration_of_saml.md) has already been activated in the Server Manager.

- Log in as administrator at the __Dropbox__
- Open the Admin Console

![Admin Console](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_1-en.webp)s

- Open Settings

![settings dropbox](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_2-en.webp)

- Single Sign On

![SSO dropbox](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_3-en.webp)

- This is where the data SSO URL and the certificate from the Server Manager must be deposited.

![database settings](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_4-en.webp)

- In the Advanced view, a new SAML application must be created in the Applications module.
- Then the target page (login URL) and the XML file must be stored in the application.

![login with SAML](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_5-en.webp)

The XML file must look like [this](https://cdn.manula.com/user/3511/docs/dropbox.xml).

- The application can now be executed via the Basic view.
