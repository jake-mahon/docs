---
sidebar_position: 6432
title: SAML Application for Dropbox
---

# SAML Application for Dropbox

## SAML Configuration Example for Dropbox

This chapter explains how to configure the SAML application for **Dropbox**. It is assumed that [Configuration of SAML](../../Configuration of SAML/Configuration of SAML "Configuration of SAML") has already been activated in the Server Manager.

* Log in as administrator at the **Dropbox**
* Open the Admin Console

![Admin Console](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_dropbox_1-en.png "Admin Console")s

* Open Settings

![settings dropbox](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_dropbox_2-en.png "settings dropbox")

* Single Sign On

![SSO dropbox](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_dropbox_3-en.png "SSO dropbox")

* This is where the data SSO URL and the certificate from the Server Manager must be deposited.

![database settings](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_dropbox_4-en.png "database settings")

* In the Advanced view, a new SAML application must be created in the Applications module.
* Then the target page (login URL) and the XML file must be stored in the application.

![login with SAML](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_dropbox_5-en.png "login with SAML")

The XML file must look like [this](https://cdn.manula.com/user/3511/docs/dropbox.xml).

* The application can now be executed via the Basic view.