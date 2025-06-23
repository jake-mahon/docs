---
title: End User Guide Overview
sidebar_label: User Guide
description: Complete guide for Privilege Secure end users covering login, MFA registration, session management, browser extension, and dashboard functionality.
---

# Privilege Secure End User Overview

This topic and its subtopics are written for users who have been assigned as a Privilege Secure
User.

New users added to the Console will need to go through the MFA registration process before they can
log in. Privilege Secure requires a multi-factor authentication (MFA) solution (Authenticator, DUO,
Symantec VIP etc) for all user accounts. Upon initial login, the user must complete MFA registration
in order to proceed with using Privilege Secure. It is recommended to check with the organization's
Administrators for login requirements.

There is also a Browser Extension that can be installed for Privilege Secure users. See the
[Browser Extension App](/docs/privilegesecure/4.1/user-guide/browser-extension/index.md)
topic for additional information.

## First Time Login

Once Privilege Secure is installed, users can launch the application from the desktop icon or can be
accessed via the URL provided by an Privilege Secure Administrator, for example:

https://ExampleServer01:6500

User can access the Privilege Secure Console locally or remotely depending on the organization
network environment. See the
[Quick Start](/docs/privilegesecure/4.1/getting-started/quick-start.md)
topic for additional information.

### Browser Requirement

- Google Chrome [version 75 or later]
- Mozilla Firefox [version 70 or later]
- Microsoft Edge [version 44 or later]

### MFA Registration

Each user must register Multi-Factor Authentication (MFA) to access Privilege Secure. The following
MFA providers are supported:

- Duo Security
- Microsoft Authenticator, Authy, Google Authenticator, or any compatible TOTP-based authenticator
- Email
- RSA Authentication Manager
- Symantec VIP
- Remote Authentication Dial-In User Service (RADIUS)

For a complete list of MFA providers and their configuration requirements, see the topic for
[Multi-Factor Authentication](/docs/privilegesecure/4.1/administration/users-and-groups/multi-factor-authentication.md).

New users are required to register MFA on first login. Some MFA providers can be pre-registered to
speed up the login process.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
