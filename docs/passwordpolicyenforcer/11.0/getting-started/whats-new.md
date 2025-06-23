---
title: What's New in Password Policy Enforcer 11.0
sidebar_label: What's New
description: New features and improvements in Password Policy Enforcer 11.0 including UI enhancements and Windows Server 2012 compatibility.
---

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
- Imports PPE Web V6.x configuration settings. See the
  [Install Password Policy Enforcer Web](/docs/passwordpolicyenforcer/11.0/installation/web-interface-installation.md) topic for additional
  information.

**NOTE:** PPE Web V7.11 integrates with Password Policy Enforcer V7.0 or later. Disable Password
Policy Enforcer integration in the PPE Web Configuration console if you need to use PPE Web with an
older version of Password Policy Enforcer.

#### New in PPE Web V6.x (Previous Version)

User Interface

- Updated HTML Templates allow customization of all user interface elements including error
  messages.
- The Password Policy Enforcer policy message is now shown during password changes. Earlier version
  of PPE Web had this message hard-coded in the HTML template.
- A Configuration console to configure system setting and instal license keys.
- The Setup Wizard installs and configures PPE Web without the manual setup steps from earlier
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

**NOTE:** PPE Web V6.0 integrates with Password Policy Enforcer V6.0 or later.

# What's New

## New Netwrix Community!

All Netwrix product announcements have moved to the new Netwrix Community. See announcements for
Netwrix Password Policy Enforcer in the
[Password Policy Enforcer](https://community.netwrix.com/c/password-policy-enforcer/announcements/118)
area of our new community.

The following information highlights the new and enhanced features introduced in this Netwrix
Password Policy Enforcer version 11.0.

## Password Policy Enforcer v11.0

New: Redesigned UI

The user interface of the Management Console has been fully redesigned to reflect modern design
standards and account for all the feedback our customers have given us throughout the years.

New: PowerShell cmdlets

Netwrix Password Policy Enforcer now includes a set of PowerShell cmdlets that enable administrators
to easily manage policy, generate reports, and check the health of Netwrix Password Policy Enforcer
from PowerShell in both interactive and automated ways.

New: Support Tools

Additional support tools have been added to allow administrators to check the health of the Netwrix
Password Policy Enforcer and audit the version of each installation from one location. This allows
customers to quickly identify any problems and keep their Netwrix Password Policy Enforcer
installation up to date.

New: Updated Installer

The Netwrix Password Policy Enforcer QuickStart Wizard has been replaced with MSI packages for
easier installation and upgrade of the client and the server.

New: Netwrix Password Policy Enforcer Web

PPE Web is now available to all licensed Password Policy Enforcer customers. PPE Web allows users to
change their Windows domain passwords from a web browser and integrates with Netwrix Password Policy
Enforcer to enforce customizable password policies and assist users in selecting compliant
passwords.

Enhancement: Updated policy templates

The out-of-the-box policy templates have been updated to reflect recent changes in different
compliance standards. Old templates will still be available, and customers' current policies will
not be changed as part of this update.

Enhancement: Compatibility

- Deprecation of 32-bit server installations – The product now only supports 64-bit server
  installations.
- Currently supported Password Policy Server platforms – 64-bit Windows 10, 11 and Windows Server
  2016, 2019, and 2022.
- Currently supported Password Policy Client platforms – 32-bit Windows 10 and 64-bit Windows 10,
  11, and Windows Server 2016, 2019, and 2022.
