# SAP GUI logon - SSO Application

## Fundamental information

Logging into SAP can be achieved via the usage of
[Start Parameter](../../learning_the_applications/start_parameter/start_parameter.md). The
prerequisite here is for the login process to be carried out via the "SAPshortcut". All available
parameters are listed in the [SAP-Wiki](https://wiki.scn.sap.com/wiki/display/NWTech/SAPshortcut).

Form Firstly, a [Forms](../../../forms/forms.md) should be created with the required fields. This
could look like this:

![SAP form](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_1-en.webp)

## Record

A corresponding record is then created via the form:

![SAP record](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_2-en.webp)

## Application

A corresponding SSO application now needs to be created.

![SAP Application](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_3-en.webp)

## Link

The record now needs to be linked with the application. To do this, open the context menu by right
clicking on the record. The previously created application can then be selected here via
**Applications** and **Connect application**.

![link record/application](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_4-en.webp)

The link is then displayed in the ribbon. Clicking on the link will now open SAP, whereby the
parameters for logging in to the application are directly transferred.
