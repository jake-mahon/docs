# Example Applications

In this section you'll find examples for applications.

- [SAP GUI logon - SSO Application](/docs/passwordsecure/9.2/core-features/applications/application-examples.md)
- [SAML Application for Dropbox](/docs/passwordsecure/9.2/core-features/applications/application-examples.md)
- [SAML application for Postman](/docs/passwordsecure/9.2/core-features/applications/application-examples.md)

# SAML Application for Dropbox

## SAML Configuration Example for Dropbox

This chapter explains how to configure the SAML application for **Dropbox**. It is assumed that
[Configuration of SAML](/docs/passwordsecure/9.2/core-features/applications/saml-configuration.md) has already been
activated in the Server Manager.

- Log in as administrator at the **Dropbox**
- Open the Admin Console

![Admin Console](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_1-en.webp)s

- Open Settings

![settings dropbox](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_2-en.webp)

- Single Sign On

![SSO dropbox](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_3-en.webp)

- This is where the data SSO URL and the certificate from the Server Manager must be deposited.

![database settings](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_4-en.webp)

- In the Advanced view, a new SAML application must be created in the Applications module.
- Then the target page (login URL) and the XML file must be stored in the application.

![login with SAML](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_dropbox_5-en.webp)

The XML file must look like [this](https://cdn.manula.com/user/3511/docs/dropbox.xml).

- The application can now be executed via the Basic view.

# SAML application for Postman

## SAML configuration example for Postman

This chapter explains how to configure the SAML application for **Postman**. It is assumed that
[Configuration of SAML](/docs/passwordsecure/9.2/core-features/applications/saml-configuration.md) has already been
activated in the Server Manager.

- First, you register with Postman.
- After logging in, click on the avatar and select "**Settings**".

![settings postman](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_1-en.webp)

- Then click on **Authentication**. Select a new method in the upper right corner.

![option authentication postman](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_2-en.webp)

- Here the Authentication Type must be defined with **SAML 2.0** and any useful Authentication Name.

![add authentication method](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_3-en.webp)

Then you come to the actual configuration.

- Store Provider Details
- **Identity Provider Details** The data from the Server Manager is uploaded as XML or stored
  manually.

![postman identity provider details](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_4-en.webp)

- **Service Provider Details** The service provider details are now copied to the application in the
  Netwrix Password Secure Client.

![postman service provider details](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/saml_examples/saml_postman_5-en.webp)

NOTE: Please note that a **Relay State** is required. This value can be created in the **Configure
Identity Provider Details View**.

# SAP GUI logon - SSO Application

## Fundamental information

Logging into SAP can be achieved via the usage of
[Start Parameter](/docs/passwordsecure/9.2/core-features/applications/application-configuration.md). The
prerequisite here is for the login process to be carried out via the "SAPshortcut". All available
parameters are listed in the [SAP-Wiki](https://wiki.scn.sap.com/wiki/display/NWTech/SAPshortcut).

Form Firstly, a [Forms](/docs/passwordsecure/9.2/core-features/forms-module/forms-overview.md) should be created with the required fields. This
could look like this:

![SAP form](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_1-en.webp)

## Record

A corresponding record is then created via the form:

![SAP record](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_2-en.webp)

## Application

A corresponding SSO application now needs to be created.

![SAP Application](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_3-en.webp)

## Link

The record now needs to be linked with the application. To do this, open the context menu by right
clicking on the record. The previously created application can then be selected here via
**Applications** and **Connect application**.

![link record/application](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_4-en.webp)

The link is then displayed in the ribbon. Clicking on the link will now open SAP, whereby the
parameters for logging in to the application are directly transferred.
