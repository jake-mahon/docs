---
sidebar_position: 6431
title: SAP GUI logon - SSO Application
---

# SAP GUI logon - SSO Application

## Fundamental information

Logging into SAP can be achieved via the usage of [Start Parameter](../../Learning the applications/Start parameter/Start Parameter "Start Parameter"). The prerequisite here is for the login process to be carried out via the "SAPshortcut".
All available parameters are listed in the [SAP-Wiki](https://wiki.scn.sap.com/wiki/display/NWTech/SAPshortcut).

Form
Firstly, a [Forms](../../../Forms/Forms "Forms") should be created with the required fields. This could look like this:

![SAP form](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/sap_gui_logon_1-en.png "SAP form")

## Record

A corresponding record is then created via the form:

![SAP record](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/sap_gui_logon_2-en.png "SAP record")

## Application

A corresponding SSO application now needs to be created.

![SAP Application](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/sap_gui_logon_3-en.png "SAP Application")

## Link

The record now needs to be linked with the application. To do this, open the context menu by right clicking on the record. The previously created application can then be selected here via **Applications** and **Connect application**.

![link record/application](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/sap_gui_logon_4-en.png "link record/application")

The link is then displayed in the ribbon. Clicking on the link will now open SAP, whereby the parameters for logging in to the application are directly transferred.