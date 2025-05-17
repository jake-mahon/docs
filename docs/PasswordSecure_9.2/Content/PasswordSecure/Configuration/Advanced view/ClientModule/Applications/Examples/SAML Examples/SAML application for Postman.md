---
sidebar_position: 6433
title: SAML application for Postman
---

# SAML application for Postman

## SAML configuration example for Postman

This chapter explains how to configure the SAML application for **Postman**. It is assumed that [Configuration of SAML](../../Configuration of SAML/Configuration of SAML "Configuration of SAML") has already been activated in the Server Manager.

* First, you register with Postman.
* After logging in, click on the avatar and select "**Settings**".

![settings postman](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_postman_1-en.png "settings postman")

* Then click on **Authentication**. Select a new method in the upper right corner.

![option authentication postman](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_postman_2-en.png "option authentication postman")

* Here the Authentication Type must be defined with **SAML 2.0** and any useful Authentication Name.

![add authentication method](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_postman_3-en.png "add authentication method")

Then you come to the actual configuration.

* Store Provider Details
* **Identity Provider Details**
  The data from the Server Manager is uploaded as XML or stored manually.

![postman identity provider details](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_postman_4-en.png "postman identity provider details")

* **Service Provider Details**
  The service provider details are now copied to the application in the Netwrix Password Secure Client.

![postman service provider details](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/saml_postman_5-en.png "postman service provider details")

NOTE: 
Please note that a **Relay State** is required. This value can be created in the **Configure Identity Provider Details View**.