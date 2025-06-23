---
title: Reset User MFA
sidebar_label: reset mfa
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Reset User MFA

Privilege Secure allows administrators to reset a user MFA directly from the Users page. Resetting
the user's MFA will generate a TOTP secret for the user and force them to register an authenticator.
This option is only available when the Internal MFA option is enabled on the User Details page. See
[Authentication Connector Tab](/docs/privilegesecure/4.2/administration/users-and-groups/user-tabs/authentication-connector.md) for additional
information.

Follow the steps below to reset a user's MFA.

**Step 1 –** Navigate to the Policy > **Users & Groups** page.

**Step 2 –** Select the desired user or group account.

![Reset MFA for Users and Groups Account](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/usersgroupsresetmfa.webp)

**Step 3 –** Click the **Reset MFA** button.

![Reset MFA for Account Confermation Window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/usersgroupsresetmfawindow.webp)

**Step 4 –** Click the **Reset MFA** button in the confirmation window.

The user's MFA has been reset and they will be prompted to register a new MFA the next time they log
in to Privilege Secure.
