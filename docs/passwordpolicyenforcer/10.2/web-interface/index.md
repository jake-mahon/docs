---
title: Password Policy Enforcer Web Interface
sidebar_label: Web Interface
description: Password Policy Enforcer Web allows users to change Windows domain passwords from a web browser with customizable password policies and integration.
---

# Web

Password Policy Enforcer/Web allows users to change their Windows domain password from a web
browser. It can optionally integrate with Password Policy Enforcer to enforce customizable password
policies and help users choose a compliant password.

Click the following link to download a 30-day trial of Password Policy Enforcer/Web:

[https://releases.netwrix.com/products/passwordpolicyenforcer/10.1/passwordpolicyenforcer-web-7.11.zip](https://www.netwrix.com/download/commercial/Password_Policy_Enforcer_WEB_7.11.zip)

![introduction_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/introduction_4.webp)

Password Policy Enforcer/Web communicates directly with the domain controllers, so it works best
when both the web server and domain controllers are on the same network. If you need to put the web
server in a DMZ for extra security, then consider using Netwrix Password Reset instead of Password
Policy Enforcer/Web.

Password Reset also allows users to change their password from a web browser, but it has many other
features including the ability to work in a DMZ without any domain controllers. Use Password Reset
if you need to:

- Allow users to reset a forgotten password or unlocked their account by answering questions about
  themselves, such as their date of birth, first pet's name, etc. Users can access APR from the web
  browser, or from the Windows Logon and Unlock screens if the APR Client is installed.
- Send e-mail alerts to users whenever their account is used in the password management system.
- Keep a detailed, searchable audit log of all user activity.
- Separate the web server from he internal network for extra security.

See the [Netwrix Password Reset](https://www.netwrix.com/active_directory_password_reset_tool.html)
page for additional information on the Password Reset product.

# What's New

User Interface

- Displays a diagnostic message if the Password Policy Enforcer does not respond to a request. This
  is likely to happen if a domain controller is not running Password Policy Enforcer, or if a
  firewall is blocking access to the PPS port.

Compatibility

- Compatible with Windows Server 2012 and 2012 R2 (as well as Windows Server 2003, 2003 R2, 2008,
  and 2008 R2).
- Improved Setup Wizard to ensure that PPEWeb.dll is always added to the list of Web Service
  Extensions on Windows 2003 and 2003 R2 64-bit editions.

Other

- Uses the Password Policy Enforcer V7.x libraries for improved compatibility with new features in
  recent version of Password Policy Enforcer.
- The Configuration Console prompts for elevation to ensure that user has sufficient permissions to
  write configuration settings.
- Imports PPE/Web V6.x configuration settings. See the
  [Upgrading from PPW/Web V6.x](/docs/passwordpolicyenforcer/10.2/web-interface/installation.md#upgrading-from-ppwweb-v6x)
  topic for additional information.

**NOTE:** PPE/Web V7.11 integrates with Password Policy Enforcer V7.0 or later. Disable Password
Policy Enforcer integration in the PPE/Web Configuration console if you need to use PPE/Web with an
older version of Password Policy Enforcer.

#### New in PPE/Web V6.x (Previous Version)

User Interface

- Updated HTML Templates allow customization of all user interface elements including error
  messages.
- The Password Policy Enforcer policy message is now shown during password changes. Earlier version
  of PPE/Web had this message hard-coded in the HTML template.
- A Configuration console to configure system setting and instal license keys.
- The Setup Wizard installs and configures PPE/Web without the manual setup steps from earlier
  versions.

Compatibility

- Compatible with Windows Server 2008 and 2008 R2 (as well as Windows Server 2003 and 2003 R2).
- Compatible with 64-bit and 32-bit Windows editions.

Other

- Additional validation of all user input to improve security.
- Can get user and domain names from URL parameters.
- Uses the Password Policy Enforcer V6.0 libraries for improved compatibility with new features in
  recent versions of Password Policy Enforcer.
- Can be used without Password Policy Enforcer if Password Policy Enforcer's additional password
  policy controls are not needed.

**NOTE:** PPE/Web V6.0 integrates with Password Policy Enforcer V6.0 or later.
