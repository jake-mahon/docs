# Reset User MFA

Privilege Secure allows administrators to reset a user MFA directly from the Users page. Resetting the user's MFA will generate a TOTP secret for the user and force them to register an authenticator. This option is only available when the Internal MFA option is enabled on the User Details page. See [Authentication Connector Tab](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/authenticationconnector.md) for additional information.

Follow the steps below to reset a user's MFA.

__Step 1 –__ Navigate to the Policy > __Users & Groups__ page.

__Step 2 –__ Select the desired user or group account.

![Reset MFA for Users and Groups Account](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/usersgroupsresetmfa.png)

__Step 3 –__ Click the __Reset MFA__ button.

![Reset MFA for Account Confermation Window](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/usersgroups/usersgroupsresetmfawindow.png)

__Step 4 –__ Click the __Reset MFA__ button in the confirmation window.

The user's MFA has been reset and they will be prompted to register a new MFA the next time they log in to Privilege Secure.
