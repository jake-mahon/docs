# What's New

#### Password Policy Server

- Accepts encrypted client requests from Password Policy Enforcer v9.x clients. Responses to encrypted requests are also encrypted.
- A new Compromised rule to reject passwords from prior security breaches. See the [Compromised Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#compromised-rule) topic for additional information.
- The History rule can use a more secure hash function called Argon2. See the [History Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#history-rule) topic for additional information.
- Can log an event when passwords are rejected. See the [Policy Properties](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#policy-properties) topic for additional information.
- Can be configured to only accept encrypted client requests. Enabled by default for new configurations, but not when upgrading from an older version. See the [Policy Properties](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#policy-properties) topic for additional information.
- Can enforce domain password policies on pure IPv6 networks
- No longer backwards compatible with Password Policy Enforcer v3.x clients

#### Password Policy Client

- Sends encrypted client requests
- Improved handling of responses from servers with multiple IP addresses
- Works over Microsoft DirectAccess connections
- Can query domain controllers on pure IPv6 networks
- Added parameters to the Client API for Compromised rule client hash files. See the [Compromised Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#compromised-rule) topic for additional information.

#### Management Console

- Imports Password Policy Enforcer v8.x configuration settings. See the [Upgrading from v8.x](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/installation.md#upgrading-from-v8x) topic for additional information.
- Increased maximum age to five years. See the
- Improved file selection dialog default folder behavior and allow selection of read-only files.
- Depreciated the exactly 7 or 14 characters Length rule option. This option is hidden unless it is currently selected. See the [Length Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#length-rule) topic for additional information.

### New in v8.x (Previous Version)

#### Password Policy Server

- Now compatible with Windows 10 Server 2016
- Works with additional LSA protection on Windows 2012 R2 and later
- Uses a new communications library with better performance and more options
- Can be configured to ignore client queries by setting the port number to zero
- Added a configuration value to control the maximum transmit time for the Password Policy Server
- Modified the default rule inserts to fit the space available on Windows 10. See the [Customizing Rule Inserts](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md#customizing-rule-inserts) topic for additional information.

#### Password Policy Client

- Now compatible with Windows 10 and Windows Server 2016
- Hides non-essential user interface elements on the Windows 10 Change Password screen to increase the space available for the Password Policy message. See the [Changing the Default Settings](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md#changing-the-default-settings) topic for additional information.
- Displays the Password Policy message in a message box on Windows 10 computers with small screens. The Password policy message box can also be shown on larger screens by changing the default display settings. See the [Changing the Default Settings](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md#changing-the-default-settings) topic for additional information.
- Replaces the leading minus sign in the Password Policy and Rejection Reason messages with a bullet character on Windows Vista and later
- Uses a new communications library with better performance and more options
- Improved compatibility with third-party credential providers
- Added a parameter to the Client API to differentiate between password changes and password resets

#### Management Console

- Improved warning messages relating to the enforcement of the default policy when there are no other policy assignments

### New in v7.x (Older Version)

#### Password Policy Rules

- The Maximum Age rule can delay the expiry of passwords that exceed a certain length to encourage the use of longer passwords. See the [Maximum Age Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#maximum-age-rule) topic for additional information.
- A new Character Pattern rule detects patterns like abcde and 12345. See the [Character Pattern Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#character-pattern-rule) topic for additional information.
- A new Repeating Pattern rule detects password like Passw0rdPassw0rd and P@ssw0Password. This stops users from using repetition to increase the length of a short password. See the [Repeating Pattern Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#repeating-pattern-rule) topic for additional information.
- A second Dictionary rule has been added to allow for more flexible detection of dictionary words. See the [Dictionary Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#dictionary-rule) topic for additional information. The second rile can be used with different settings and it can remain enabled if the first Dictionary rule is disabled for passphrases. See the [Passphrases](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#passphrases) topic for additional information. This can be used to relax requirements for passphrases without totally disabling dictionary checking.
- A new Custom Character rule without a predefined character set allows custom character sets to be used without overwriting one of the default character sets. See the [Character Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#character-rules) topic for additional information.

#### Password Policy Server

- Now compatible with Windows 8.1 and Windows Server 2012 R2
- Added support for local password policies. See the [Domain and Local Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/domain_and_local_policies.md) topic for additional information.
- The dictionary file and password synchronization script paths can now contain environment variables. See the [Dictionary Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#dictionary-rule) and [Policy Properties](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#policy-properties) topics for additional information.

#### Password Policy Client

- Now compatible with Windows 8.1 and Windows Server 2021 R2
- Improved compatibility with third-party credential providers
- Displays a diagnostic message if the Password Policy Server does not respond to a request. This is likely to happen if a domain controller is not running Password Policy Enforcer or if a firewall is blocking access to the PPS port.

#### Management Console

- Imports Password Policy Enforcer v6.x configuration settings. See the [Upgrading from v6.x](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/installation.md#upgrading-from-v6x) topic for additional information.
- Option to mask passwords when testing policies. See the [Testing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#testing-policies) topic for additional information.
- Improved dictionary file sorting performance by up to 400%. See the [Dictionary Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#dictionary-rule) topic for additional information.
- Improved performance when opening the Policy Properties page for polices where all assignments are by container. See the [Policy Properties](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#policy-properties) and [Assigning Policies to Users](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#assigning-policies-to-users) topics for additional information.

#### Mailer Service

- A /test parameter has been added to test the Password Policy Enforcer Mailer's delivery options. It sends a test e-mail to the mail server or pickup folder. See the [Command Line Interface](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/mailer.md#command-line-interface) and [Email Delivery Options](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/mailer.md#email-delivery-options) topics for additional information.
- The e-mail body filename can now contain environment variables. See the [Email Message Options](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/mailer.md#email-message-options) topic for additional information.

#### Installer & QuickStart Wizard Installer & QuickStart Wizard

- The Password Policy Enforcer Client installer now attempts to complete the installation without restarting Windows on Windows Vista and later
- The Quickstart Wizard Express Setup option now allows you to choose which component(s) to install. See the[Manual Installation (Express Setup)](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/installation.md#manual-installation-express-setup) topic for additional information.
- The Quickstart Wizard now displays a warning message if run on an unsupported Windows version.

### New in v6.x (Older Version)

#### Password Policy Rules

- A new History rule similar to Windows History rule. Password Policy Enforcer's History rule can enforce different history requirements for each Password Policy Enforcer policy. This rule can stop password reuse for a specified number of days, or a specified number of password changes. See the [History Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#history-rule) topic for additional information.
- The Maximum Age rule has been redesigned to reduce the likelihood of a user being allowed to logon on the day their password expires, and then being denied access to some network resources some time after logon. See the [Maximum Age Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#maximum-age-rule) topic for additional information.

#### Password Policy Server

- Now compatible with Windows Server 2008 R2.
- Password Policy Enforcer can disable some rules when a user enters a passphrase (long password). This allows you to enforce a complex password policy while still encouraging users to use passphrases. See the [Passphrases](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#passphrases) topic for additional information.

#### Password Policy Client

- Now compatible with Windows 7 (x86 and x64 editions) as well as Windows Server 2008 R2.
- The Password Policy Enforcer Client API is now included with the Password Policy Client. Send and email to support@netwrix.com if you would like to enforce Password Policy Enforcer's password policies from your own applications. See the [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) topic for additional information.

#### Management Console

- Imports Password Policy Enforcer v5.x configuration settings. See the [Upgrading from v5.x](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/installation.md#upgrading-from-v5x) topic for additional information.

#### Mailer Service

- The Password Policy Enforcer Mailer reminds users to change their password by sending them e-mail reminders before their password's expiry date. See the [Mailer](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/mailer.md) topic for additional information.
