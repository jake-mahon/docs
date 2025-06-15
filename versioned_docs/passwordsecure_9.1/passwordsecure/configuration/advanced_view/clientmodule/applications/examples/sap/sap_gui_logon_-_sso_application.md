# SAP GUI logon - SSO Application

## Fundamental information

Logging into SAP can be achieved via the usage of
[Start Parameter](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/learning_the_applications/start_parameter/start_parameter.md).
The prerequisite here is for the login process to be carried out via the "SAPshortcut". All
available parameters are listed in the
[SAP-Wiki](https://wiki.scn.sap.com/wiki/display/NWTech/SAPshortcut).

Form Firstly, a
[Forms](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms.md)
should be created with the required fields. This could look like this:

![SAP form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_1-en.png)

## Record

A corresponding record is then created via the form:

![SAP record](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_2-en.png)

## Application

A corresponding SSO application now needs to be created.

![SAP Application](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_3-en.png)

## Link

The record now needs to be linked with the application. To do this, open the context menu by right
clicking on the record. The previously created application can then be selected here via
**Applications** and **Connect application**.

![link record/application](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/applications/examples/sap/sap_gui_logon_4-en.png)

The link is then displayed in the ribbon. Clicking on the link will now open SAP, whereby the
parameters for logging in to the application are directly transferred.
