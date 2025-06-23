---
title: Authentication Tab
sidebar_label: authentication
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Authentication Tab

The Authentication tab for applications shows authentication information about the application.

![Authentication Tab for Application User](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/applicationauthenticationtab.webp)

The tab displays the following information:

- Certificate Serial Number — The serial number of the client certificate used to authenticate the
  application. The certificate should be signed by a Certificate Authority (CA). Ensure the
  certificate is trusted by IIS by adding the CA trusted root certificate to the Trusted Root
  Certification Authorities on the Privilege Secure server.
- API Key — The unique key used as part of Application authentication. The API key has the following
  icons:

  - Copy — Copies the value to the clipboard. Only available when the API Key is visible.
  - Reveal / Hide — Shows or hides value
  - Regenerate — Generates a new API key. Only the current API key is valid.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

# Authentication Connector Tab

The Authentication Connector tab for a user or group shows the type of multi-factor authentication
(MFA) being used for the selected user or group. The settings on this tab determine the options
displayed on the login page for the user.

The list is populated from the previously configured authentication connectors on the
Authentications page. See the
[Authentication Page](/docs/privilegesecure/4.1/configuration/authentication/index.md)
topic for additional information.

![Users Authentication Connector Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/userauthenticationtab.webp)

Select the method of authentication for the user or group:

- Internal MFA — User will be prompted using the internal MFA when signing into the Privilege Secure
  console
- Duo (and other RADIUS profile values) — RADIUS profile that will be used for MFA when the user
  signs into the Privilege Secure console
- Duo SAML — SAML profile that will be used for MFA when the user signs into the Privilege Secure
  console
- Not Required — No multi-factor authentication is required for the user. Login only requires a user
  name and password. Intended for users who access Privilege Secure over a VPN where MFA has already
  been leveraged.

  **CAUTION:** Disabling multi-factor authentication can create a significant security
  vulnerability.

The following information determines which MFA method has priority:

- If the user is a member of an Active Directory group that has a different RADIUS profile, the
  group assignment will take precedence over the Internal MFA setting on the user.
- If the user MFA setting is for a RADIUS profile, the User assignment will take precedence over any
  group RADIUS profile setting.
- If the user is a member of multiple Active Directory groups, each having different RADIUS
  profiles, the user assignment will be determined by the alphabetical order of the RADIUS profile
  name.
