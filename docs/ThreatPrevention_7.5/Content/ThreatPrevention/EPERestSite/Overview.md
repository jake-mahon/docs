---
sidebar_position: 6648
title: EPE Rest Site
---

# EPE Rest Site

The EPE Rest Site is an optional web server that third parties can use to integrate with the Threat Prevention Enterprise Password Enforcer (EPE) solution. It allows third-party applications to submit a candidate password to check whether it complies with the current EPE rules defined on the [EPE Settings Window](../Admin/Configuration/EPESettings "EPE Settings Window").

It uses GET and POST APIs for:

* Site Account Management
* Login to EPE REST Service
* Check Password (Basic, Digest and Bearer variations)

You can use the Boomerang plugin for the Chrome browser to work with the EPE Rest Site.

## Supported Languages

The EPE Rest Site offers multi-language support, ensuring users receive clear and consistent messages when a candidate password is rejected. Supported languages are:

* Chinese Simplified
* Chinese Traditional
* Czech
* Dutch
* English
* French
* German
* Hungarian
* Italian
* Japanese
* Korean
* Polish
* Portuguese
* Spanish
* Thai

The EPE Rest Site uses the password rejection messages provided/translated on the Custom Messages Editor window. To access it, click the **Modify Messages** button on the EPE Settings window. See the [User Feedback Module](../Admin/Configuration/EPESettings#User "User Feedback Module")  topic for additional information.