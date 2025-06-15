# Installation

Netwrix Password Policy Enforcer 10.2 is compatible with Windows Servers 2016, 2019, and 2022. It
can also be installed on Windows 8, 10, and 11 workstations to enforce local polices. See the
[Domain and Local Policies](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/domain_and_local_policies.md)
topic for additional information.

## Windows 2016, 2019, or 2022

- Windows 8, 8.1, 10, or 11
- Fifteen megabytes free disk space
- Eight megabytes free RAM (72 megabytes if using Argon2 hashes)

**NOTE:** Users do not have to change their password immediately after Password Policy Enforcer is
installed. They can continue using their current password until it expires, even if their current
password does not comply with the password policy. Installing Password Policy Enforcer does not
extend the Active Directory schema.

## Installation Types

Password Policy Enforcer should be installed onto every domain controller to enforce the password
policy for domain user accounts, or onto individual servers and workstations to enforce the password
policy for local user accounts.

If your domain contains some read-only domain controllers, then installation of Password Policy
Enforcer on these servers is only necessary if you are using the following features:

- [Rules](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/rules.md)
- [Password Policy Client](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/password_policy_client.md)
- [Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset)
- [Password Reset](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/password_reset.md)
- [Web](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/web_overview.md)

You can install Password Policy Enforcer manually if you only need to install it on a few computers.
See the
[Manual Installation (Express Setup)](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/manual_installation.md)
topic for additional information.

It is recommended to perform an automated installation with Group Policy if you need to install it
on many computers in a domain. See the
[Automated Installation (Advanced Setup)](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/automated_installation.md)
topic for additional information.
