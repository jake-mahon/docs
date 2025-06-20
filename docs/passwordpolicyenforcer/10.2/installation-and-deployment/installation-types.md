# Installation

Netwrix Password Policy Enforcer 10.2 is compatible with Windows Servers 2016, 2019, and 2022. It
can also be installed on Windows 8, 10, and 11 workstations to enforce local polices. See the
[Domain and Local Policies](/docs/passwordpolicyenforcer/10.2/password-policies/policy-configuration.md)
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

- [Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
- [Password Policy Client](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/password-policy-client.md)
- [Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset)
- [Password Reset](/docs/passwordpolicyenforcer/10.2/getting-started/evaluation-guide.md)
- [Web](/docs/passwordpolicyenforcer/10.2/web-interface/index.md)

You can install Password Policy Enforcer manually if you only need to install it on a few computers.
See the
[Manual Installation (Express Setup)](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/installation-types.md)
topic for additional information.

It is recommended to perform an automated installation with Group Policy if you need to install it
on many computers in a domain. See the
[Automated Installation (Advanced Setup)](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/automated-deployment.md)
topic for additional information.

# Manual Installation (Express Setup)

Manual installation is recommended for small to medium networks. You need to repeat the installation
procedure below on every computer that should enforce the password policy. To install Password
Policy Enforcer onto a computer:

**Step 1 –** Start the Password Policy Enforcer installer (PPE10.2.exe).

**Step 2 –** Read the license agreement, and then click **Yes** if you accept all the license terms
and conditions.

**Step 3 –** Select the Express option, and then click **Next**.

**Step 4 –** Select the **Password Policy Server** check box if it is not selected.

**Step 5 –** Click **Next** to install Password Policy Enforcer.

**Step 6 –** Click **Yes** when asked to restart the computer.

Password Policy Enforcer has its own password rules, so you may want to disable the Windows password
policy rules before configuring Password Policy Enforcer. See the
[Disable Windows Rules](/docs/passwordpolicyenforcer/10.2/password-policies/policy-configuration.md)
topic for additional information.
