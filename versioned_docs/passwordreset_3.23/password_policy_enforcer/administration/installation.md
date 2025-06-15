# Installation

Netwrix Password Policy Enforcer V9.12 is compatible with Windows 2008, 2012, 2016, and 2019 servers. It can also be installed on Windows Vista, 7, 8, and 10 workstations to enforce local polices. See the [Domain and Local Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/domain_and_local_policies.md) topic for additional information. If you need to install Password Policy Enforcer on Windows 2003 domain controllers, then install V8.03 instead of V9.12. Password Policy Enforcer V8.03 is available from the [Netwrix website](https://www.netwrix.com/password_policy_enforcer.html).

## SysWindows 2008, 2008 R2, 2012, 2012 R2, 2016, or 2019.

- Windows Vista, 7, 8, 8.1, or 10.
- Fifteen megabytes free disk space.
- Eight megabytes free RAM (72 megabytes if using Argon2 hashes).

__NOTE:__ Users do not have to change their password immediately after Password Policy Enforcer is installed. They can continue using their current password until it expires, even if their current password does not comply with the password policy. Installing Password Policy Enforcer does not extend the Active Directory schema.

## Installation Types

Password Policy Enforcer should be installed onto every domain controller to enforce the password policy for domain user accounts, or onto individual servers and workstations to enforce the password policy for local user accounts.

If your domain contains some read-only domain controllers, then installation of Password Policy Enforcer on these servers is only necessary if you are using the following features:

- [Maximum Age Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#maximum-age-rule)
- [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md)
- [Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset)
- [](/versioned_docs/passwordreset_3.23/password_policy_enforcer/evaluation/password_reset.md)[Web](/versioned_docs/passwordreset_3.23/password_policy_enforcer/web/web_overview.md)

You can install Password Policy Enforcer manually if you only need to install it on a few computers. See the [Manual Installation (Express Setup)](#manual-installation-express-setup) topic for additional information.

It is recommended to perform an automated installation with Group Policy if you need to install it on many computers in a domain. See the [Automated Installation (Advanced Setup)](#automated-installation-advanced-setup) topic for additional information.

### Manual Installation (Express Setup)

Manual installation is recommended for small to medium networks. You need to repeat the installation procedure below on every computer that should enforce the password policy. To install Password Policy Enforcer onto a computer:

__Step 1 –__ Start the Password Policy Enforcer installer (PPE912.exe).

__Step 2 –__ Read the license agreement, and then click Yes if you accept all the license terms and conditions.

__Step 3 –__ Select the Express option, and then click Next.

__Step 4 –__ Select the Password Policy Server check box if it is not selected.

__Step 5 –__ Click Next to install Password Policy Enforcer.

__Step 6 –__ Click Yes when asked to restart the computer.

Password Policy Enforcer has its own password rules, so you may want to disable the Windows password policy rules before configuring Password Policy Enforcer. See the [Disable the Windows Password Policy Rules](#disable-the-windows-password-policy-rules) topic for additional information.

### Automated Installation (Advanced Setup)

An automated installation uses Group Policy to distribute Password Policy Enforcer. This type of installation is recommended when you need to install Password Policy Enforcer on many computers. This section shows you how to install Password Policy Enforcer on domain controllers to enforce domain policies, but you can also use Group Policy to target member servers and workstations if you need to enforce local policies. See the [Domain and Local Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/domain_and_local_policies.md) topic for additional information.

#### Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System) path. To create a Password Policy Enforcer distribution point:

__Step 1 –__ Log on to a server as an administrator.

__Step 2 –__ Create a shared network folder to distribute the files from.

__Step 3 –__ Give the __Domain Controllers__ security group read access to the share, and limit write access to authorized personnel only.

#### Copy PPE912.msi into the Distribution Point

__Step 1 –__ Start the Password Policy Enforcer installer (PPE912.exe).

__Step 2 –__ Read the license agreement, and then click __Yes__ if you accept all the license terms and conditions.

__Step 3 –__ Select the __Advanced__ option, and then click __Next__.

__Step 4 –__ Right-click the __PPE912.msi__ icon, click __Copy__, and then paste the file into the distribution point.

![installing_ppe](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe.png)

__Step 5 –__ Give the __Domain Controllers__ security group read access to the PPE912.msi file in the distribution point.

__Step 6 –__ Click __Finish__.

#### Create a Group Policy Object

__Step 1 –__ Start the Group Policy Management Console (gpmc.msc).

__Step 2 –__ Expand the forest and domain items in the left pane.

__Step 3 –__ Right-click the __Domain Controllers OU__ in the left pane, and then click __Create a GPO in this domain, and Link it here...__

__Step 4 –__ Enter __Password Policy Enforcer__ in the provided field, and then press __Enter__.

![installing_ppe_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe_1.png)

#### Edit the Group Policy Object

__Step 1 –__ Right-click the __Password Policy Enforcer GPO__, and then click the __Edit...__ button.

__Step 2 –__ Expand the __Computer Configuration__, __Policies__, and __Software Settings__ items.

__Step 3 –__ Right-click the __Software installation__ item, and then select __New__ > __Package...__

__Step 4 –__ Enter the full __UNC path to PPE912.msi__ in the Open dialog box.

__NOTE:__ You must enter a UNC path so that other computers can access this file over the network. For example: \\file server\distribution point share\PPE912.msi

__Step 5 –__ Click __Open__.

__Step 6 –__ Select the __Assigned deployment method__, and then click __OK__.

![installing_ppe_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe_2.png)

__Step 7 –__ Close the Group Policy Management Editor.

#### Complete the Installation

Restart each domain controller to complete the installation. Windows installs Password Policy Enforcer during startup, and then immediately restarts the computer a second time to complete the installation.

Password Policy Enforcer will not enforce a password policy at this time because no policies are defined. Users can still change their password, and will only need to comply with the Windows password policy rules (if enabled).

## Disable the Windows Password Policy Rules

The Windows password policy rules can place restrictions on password history, age, length, and complexity. If you enable the Password Policy Enforcer rules and the Windows rules, then users will have to comply with both sets of rules.

Password Policy Enforcer has its own history, minimum and maximum age, length, and complexity rules. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information. You can use the Password Policy Enforcer and Windows rules together. A password is only accepted if it complies with the Windows and Password Policy Enforcer password policies.

Follow the steps below to disable the Windows password policy rules:

__Step 1 –__ Start the Group Policy Management Console (gpmc.msc).

__Step 2 –__ Expand the forest and domain items in the left pane.

__Step 3 –__ Right-click the __Default Domain Policy GPO__ (or whichever GPO you use to set your domain password policy), then click __Edit...__

__Step 4 –__ Expand the __Computer Configuration__, __Policies__, __Windows Settings__, __Security Settings__, __Account Policies__, and __Password Policy__ items.

__Step 5 –__ Double-click __Enforce password history__ in the right pane of the GPO Editor.

__Step 6 –__ Enter __0__ in the text box, then click __OK__.

__Step 7 –__ Repeat the step above for the __Maximum password age__, __Minimum password age__, and __Minimum password length__ policies.

__Step 8 –__ Double-click __Password must meet complexity requirements__ in the right pane.

__Step 9 –__ Select the __Disabled__ option, and then click __OK__.

__Step 10 –__ Close the Group Policy Management Editor.

![installing_ppe_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/preparing_the_computer.png)

__NOTE:__ You do not have to disable all the Windows password policy rules to use Password Policy Enforcer. You can use a combination of Password Policy Enforcer and Windows rules together if you like. Just remember that a password is only accepted if it complies with the rules enforced by both Windows and Password Policy Enforcer.

## Upgrading from v9.x

The Password Policy Enforcer V9.12 Password Policy Server is backwards compatible with the V9.x Password Policy Client. You do not have to upgrade existing V9.x Password Policy Clients to use the V9.12 Password Policy Server.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V9.x installations and upgrades them to V9.12. See the installation topic for additional information. If you are performing an automated installation with Group Policy, then add PPE912.msi to the same Group Policy Object used to install the older version. See the [Automated Installation (Advanced Setup)](#automated-installation-advanced-setup) topic for additional information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V9.x installations and upgrades them to V9.12. See the [Installing the PPC](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md#installing-the-ppc) topic for additional information. If you are distributing the PPC with Group Policy, then add PPEClt912.msi to the same Group Policy Object used to install the older version. Upgrade and reboot the Password Policy Servers before upgrading the clients.

### Upgrading the Mailer

The Password Policy Enforcer installer detects existing V9.x installations of the Password Policy Enforcer Mailer and upgrades them to V9.12. See the [Installing the Mailer](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/mailer.md#installing-the-mailer) topic for additional information.

## Upgrading from v8.x

The Password Policy Enforcer V9.12 Password Policy Server is backwards compatible with the V8.x Password Policy Client. You can benefit from most of the new features by upgrading the Password Policy Server on the domain controllers. Do this before deploying the V9.12 Password Policy Client. See the [What's New](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/what_s_new.md) topic for additional information.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V8.x installations and upgrades them to V9.12. See the installation topic for additional information. If you are performing an automated installation with Group Policy, then add PPE912.msi to the same Group Policy Object used to install the older version. See the [Automated Installation (Advanced Setup)](#automated-installation-advanced-setup) topic for additional information.

Open the Password Policy Enforcer V9.12 management console immediately after upgrading to automatically import the V8.x configuration settings into the new version.

![installing_ppe_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe_4.png)

The management console imports valid subscription license keys, but it will not import V8.x perpetual license keys as they cannot be used with Password Policy Enforcer V9.12. Password Policy Enforcer will revert to a 30-day evaluation license if it cannot import the license key. Open the PPS Properties page page after an upgrade to check your license details. See the [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topic for additional information.

You can run a combination of V8.x and V9.x Password Policy Servers, but extended use of both versions is not recommended as it adds administrative overhead. Maintain both versions only for a short time while you roll out Password Policy Enforcer V9.x.

__NOTE:__ Any configuration changes made from the V9.12 management console will only affect V9.x domain controllers. Likewise, any changes made from the V8.x management console will only affect V8.x domain controllers. You must make configuration changes in both management consoles until all domain controllers are upgraded to V9.x. Failure to do so may lead to inconsistent enforcement of the password policy.

Older versions of the Password Policy Enforcer Client (prior to V6.0) cannot detect passphrases. Users must comply with the policy's compliance level when these older clients are installed. See the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) topic for additional information.

Password Policy Enforcer V9.x accepts passphrases that comply with all enabled rules, irrespective of the compliance level. Password Policy Enforcer V6.x did not do this, so it was possible to configure Password Policy Enforcer in a way that would reject all passphrases because they could not meet the compliance level after some rules were disabled. Password Policy Enforcer V6.x clients will continue to use the old compliance level calculation until they are upgraded to V9.x. Take this into consideration when setting the compliance level while Password Policy Enforcer V6.x clients are still in use. This includes Netwrix Password Reset v2.x and PPE/Web v6.x. See the [Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset) and [Web](/versioned_docs/passwordreset_3.23/password_policy_enforcer/web/web_overview.md) topics for additional information.

Password Policy Enforcer V9.x allows the use of longer rule insert in PPC messages. Older versions of the Password Policy Enforcer Client (prior to V7.0), including PPE/Web V6.x and Netwrix Password Reset V2.x may truncate messages with long inserts. See the [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) topic for additional information.

PPE/Web V3.x and Netwrix Password Reset V1.x use the Password Policy Enforcer V3.x communication protocol. These clients are not compatible with the V9.x server.

__CAUTION:__ Do not use the automatic tolerance option with Password Policy Enforcer V4.x clients. These clients will enforce an extremely restrictive password policy if this option is enabled. They will reject any password that contains a character found in the comparison parameter. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V8.x installations and upgrades them to V9.12. If you are distributing the PPC with Group Policy, then add PPEClt912.msi to the same Group Policy Object used to install the older version. Upgrade and reboot the Password Policy Servers before upgrading the clients.

### Upgrading the Mailer

The Password Policy Enforcer installer detects existing V8.x installations of the Password Policy Enforcer Mailer and upgrades them to V9.12. See the [Installing the Mailer](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/mailer.md#installing-the-mailer) topic for additional information.

## Upgrading from v7.x

The Password Policy Enforcer V9.12 Password Policy Server is backwards compatible with the V7.x Password Policy Client. You can benefit from most of the new features by upgrading the Password Policy Server on the domain controllers. Do this before deploying the V9.12 Password Policy Client. See the [What's New](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/what_s_new.md) topic for additional information.

### Upgrading the Password Policy Server

## Upgrading from v6.x

The Password Policy Enforcer V9.12 Password Policy Server is backwards compatible with the V6.x Password Policy Client. You can benefit from most of the new features by upgrading the Password Policy Server on the domain controllers. Do this before deploying the V9.12 Password Policy Client. See the [What's New](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/what_s_new.md) topic for additional information.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V6.x installations and upgrades them to V9.12. See the installation topic for additional information. If you are performing an automated installation with Group Policy, then add PPE912.msi to the same Group Policy Object used to install the older version. See the [Automated Installation (Advanced Setup)](#automated-installation-advanced-setup) topic for additional information.

Open the Password Policy Enforcer V9.12 management console immediately after upgrading to automatically import the V6.x configuration settings into the new version.

![installing_ppe_7](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe_7.png)

The management console imports valid subscription license keys, but it will not import V6.x perpetual license keys as they cannot be used with Password Policy Enforcer V9.12. Password Policy Enforcer will revert to a 30-day evaluation license if it cannot import the license key. Open the PPS Properties page after an upgrade to check your license details. See the [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topic for additional information.

You can run a combination of V6.x and V9.x Password Policy Servers, but extended use of both versions is not recommended as it adds administrative overhead. Maintain both versions only for a short time while you roll out Password Policy Enforcer V9.x. If you are using Password Policy Enforcer's Maximum Age rule and would like to enable the new extended maximum age feature for long passwords, then you must first upgrade the domain controller holding the PDC emulator operations master role to Password Policy Enforcer V9.x. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

__NOTE:__ Any configuration changes made from the V9.12 management console will only affect V9.x domain controllers. Likewise, any changes made from the V6.x management console will only affect V6.x domain controllers. You must make configuration changes in both management consoles until all domain controllers are upgraded to V9.x. Failure to do so may lead to inconsistent enforcement of the password policy.

The __Do not check admin/helpdesk password resets__ property in the PPS Properties page was renamed to __Enforce policy when password is reset__. The check box value changes after upgrading, but Password Policy Enforcer enforces the same policy. See the [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topic for additional information.

Password Policy Enforcer V6.x included two dictionary files. DICT.TXT, and an optimized version called DICT_O.TXT. The two files had identical coverage when the tolerance was set below five, but DICT_O.TXT offered better performance due to its smaller file size. The performance difference is insignificant on modern servers, so Password Policy Enforcer V9.x includes only DICT.TXT. If you are using DICT_O.TXT with the Dictionary rules, then you should reconfigure it to use DICT.TXT after upgrading. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

Older versions of the Password Policy Enforcer Client (prior to V6.0) cannot detect passphrases. Users must comply with the policy's compliance level when these older clients are installed. PE V9.x accepts passphrases that comply with all enabled rules, irrespective of the compliance level. See the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) topic for additional information. Password Policy Enforcer V6.x did not do this, so it was possible to configure Password Policy Enforcer in a way that would reject all passphrases because they could not meet the compliance level after some rules were disabled. Password Policy Enforcer V6.x clients will continue to use the old compliance level calculation until they are upgraded to V9.x. Take this into consideration when setting the compliance level while Password Policy Enforcer V6.x clients are still in use. This includes Netwrix Password Reset v2.x and PPE/Web v6.x. See the [Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset) and [Web](/versioned_docs/passwordreset_3.23/password_policy_enforcer/web/web_overview.md) topics for additional information.

Password Policy Enforcer V9.x allows the use of longer rule inserts in PPC messages. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information. Older versions of the Password Policy Enforcer Client (prior to V7.0), including PPE/Web V6.x and Netwrix Password Reset V2.x may truncate messages with long inserts.

PPE/Web V3.x and Netwrix Password Reset V1.x use the Password Policy Enforcer V3.x communication protocol. These clients are not compatible with the V9.x server.

__CAUTION:__ Do not use the automatic tolerance option with Password Policy Enforcer V4.x clients. These clients will enforce an extremely restrictive password policy if this option is enabled. They will reject any password that contains a character found in the comparison parameter. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

The Password Policy Enforcer Client for Windows 8, 10, Server 2012, Server 2016, and Server 2019 displays messages in a smaller area than previous versions of Windows. Some of the default message components were shortened to fit the available space. See the [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) topic for additional information. Your existing templates and macros will not change, but some of the default inserts may be different to the ones your users are familiar with. Any new policies you create after upgrading to Password Policy Enforcer V9.x will use the new templates and macros.

If you would like to use the new templates and macros for your existing policies, create a new policy and copy the templates from the new policy to your existing policies. Templates are in the tab of the Policy Properties page. See [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) and [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) topics for additional information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V6.x installations and upgrades them to V9.12. See the [Installing the PPC](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md#installing-the-ppc) topic for additional information. If you are distributing the PPC with Group Policy, then add PPEClt912.msi to the same Group Policy Object used to install the older version. Upgrade and reboot the Password Policy Servers before upgrading the clients.

### Upgrading the Mailer

The Password Policy Enforcer installer detects existing V6.x installations of the Password Policy Enforcer Mailer and upgrades them to V9.12. See the [Installing the Mailer](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/mailer.md#installing-the-mailer) topic for additional information.

## Upgrading from v5.x

The Password Policy Enforcer V9.12 Password Policy Server is backwards compatible with the V5.x Password Policy Client. You can benefit from most of the new features by upgrading the Password Policy Server on the domain controllers. Do this before deploying the V9.12 Password Policy Client. See the [What's New](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/what_s_new.md) topic for additional information.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V5.x installations and upgrades them to V9.12. See the installation topic for additional information. If you are performing an automated installation with Group Policy, then add PPE912.msi to the same Group Policy Object used to install the older version. See the [Automated Installation (Advanced Setup)](#automated-installation-advanced-setup) topic for additional information.

Open the Password Policy Enforcer V9.12 management console immediately after upgrading to automatically import the V5.x configuration settings into the new version.

![installing_ppe_8](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/installing_ppe_8.png)

The management console imports valid subscription license keys, but it will not import V5.x perpetual license keys as they cannot be used with Password Policy Enforcer V9.12. Password Policy Enforcer will revert to a 30-day evaluation license if it cannot import the license key. Open the PPS Properties page after an upgrade to check your license details. See the [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topic for additional information.

You can run a combination of V5.x and V9.x Password Policy Servers, but extended use of both versions is not recommended as it adds administrative overhead. Maintain both versions only for a short time while you roll out Password Policy Enforcer V9.x. If you are using Password Policy Enforcer's Maximum Age rule and would like to enable the new extended maximum age feature for long passwords, then you must first upgrade the domain controller holding the PDC emulator operations master role to Password Policy Enforcer V9.x.

__NOTE:__ The Maximum Age rule in Password Policy Enforcer V5.x granted users one grace logon after their password expired. Password Policy Enforcer V9.x does not allow grace logons, but some grace logons may occur until all domain controllers are upgraded. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

If you have deployed the Password Policy Client and will be using the passphases feature, then update your existing Password Policy message templates to let users know that they may not have to comply with all the rules. See the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) and [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topics for additional information. You can use the new [PASSPHRASE_NOTICE] macro instead of hard-coding the message text into the template. Password Policy Enforcer replaces the macro with this text "You may not have to comply with all these rules if your password contains [n] or more characters."

__NOTE:__ Any configuration changes made from the V9.12 management console will only affect V9.x domain controllers. Likewise, any changes made from the V5.x management console will only affect V5.x domain controllers. You must make configuration changes in both management consoles until all domain controllers are upgraded to V9.x. Failure to do so may lead to inconsistent enforcement of the password policy.

The __Do not check admin/helpdesk password resets__ property in the PPS Properties page was renamed to __Enforce policy when password is reset__. The check box value changes after upgrading, but Password Policy Enforcer enforces the same policy. See the [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topic for additional information.

Password Policy Enforcer V5.x included two dictionary files. DICT.TXT, and an optimized version called DICT_O.TXT. The two files had identical coverage when the tolerance was set below five, but DICT_O.TXT offered better performance due to its smaller file size. The performance difference is insignificant on modern servers, so Password Policy Enforcer V9.x includes only DICT.TXT. If you are using DICT_O.TXT with the Dictionary rule, then you should reconfigure it to use DICT.TXT after upgrading. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

Older versions of the Password Policy Enforcer Client (prior to V6.0) cannot detect passphrases. Users must comply with the policy's compliance when these older clients are installed. See the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) topic for additional information.

Password Policy Enforcer V9.x allows the use of longer rule inserts in PPC messages. Older versions of the Password Policy Enforcer Client (prior to V7.0), including PPE/Web V6.x and Netwrix Password Reset V2.x may truncate messages with long inserts. See the [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) topic for additional information.

PPE/Web V3.x and Netwrix Password Reset V1.x use the Password Policy Enforcer V3.x communication protocol. These clients are not compatible with the V9.x server.

__CAUTION:__ Do not use the automatic tolerance option with Password Policy Enforcer V4.x clients. These clients will enforce an extremely restrictive password policy if this option is enabled. They will reject any password that contains a character found in the comparison parameter. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

The Password Policy Enforcer Client for Windows 8, 10, Server 2012, Server 2016, and Server 2019 displays messages in a smaller area than previous versions of Windows. Some of the default message components were shortened to fit the available space. Your existing templates and macros will not change, but some of the default inserts may be different to the ones your users are familiar with. Any new policies you create after upgrading to Password Policy Enforcer V9.x will use the new templates and macros. See [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) topic for additional information.

If you would like to use the new templates and macros for your existing policies, create a new policy and copy the templates from the new policy to your existing policies. Templates are in the Messages tab of the Policy Properties page. See [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) and the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) topics for additional information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V5.x installations and upgrades them to V9.12. See the [Installing the PPC](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md#installing-the-ppc) topic for additional information. If you are distributing the PPC with Group Policy, then add PPEClt912.msi to the same Group Policy Object used to install the older version. Upgrade and reboot the Password Policy Servers before upgrading the clients.

## Upgrading from v4.x

The Password Policy Enforcer V9.12 Password Policy Server is backwards compatible with the V4.x Password Policy Client. You can benefit from most of the new features by upgrading the Password Policy Server on the domain controllers. Do this before deploying the V9.12 Password Policy Client. See the [What's New](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/what_s_new.md) topic for additional information.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V4.x installations and upgrades them to V9.12. See the installation topic for additional information. If you are performing an automated installation with Group Policy, then add PPE912.msi to the same Group Policy Object used to install the older version. See the [Automated Installation (Advanced Setup)](#automated-installation-advanced-setup) topic for additional information.

Open the Password Policy Enforcer V9.12 management console immediately after upgrading to automatically import the V4.x configuration settings into the new version.

![installing_ppe_9](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/installing_ppe_9.png)

The management console imports valid subscription license keys, but it will not import V4.x perpetual license keys as they cannot be used with Password Policy Enforcer V9.12. Password Policy Enforcer will revert to a 30-day evaluation license if it cannot import the license key. Open the PPS Properties page after an upgrade to check your license details. See the [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topic for additional information.

You can run a combination of V4.x and V9.x Password Policy Servers, but extended use of both versions is not recommended as it adds administrative overhead. Maintain both versions only for a short time while you roll out Password Policy Enforcer V9.x.

If you have deployed the Password Policy Client and will be using the passphases feature, then update your existing Password Policy message templates to let users know that they may not have to comply with all the rules. See the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) and [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topics for additional information. You can use the new [PASSPHRASE_NOTICE] macro instead of hard-coding the message text into the template. Password Policy Enforcer replaces the macro with this text "You may not have to comply with all these rules if your password contains [n] or more characters."

__NOTE:__ Any configuration changes made from the V9.12 management console will only affect V9.x domain controllers. Likewise, any changes made from the V4.x management console will only affect V4.x domain controllers. You must make configuration changes in both management consoles until all domain controllers are upgraded to V9.x. Failure to do so may lead to inconsistent enforcement of the password policy.

The __Do not check admin/helpdesk password resets__ property in the PPS Properties page was renamed to __Enforce policy when password is reset__. The check box value changes after upgrading, but Password Policy Enforcer enforces the same policy. See the [Configuration](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuration.md) topic for additional information.

Password Policy Enforcer V4.x included two dictionary files. DICT.TXT, and an optimized version called DICT_O.TXT. The two files had identical coverage when the tolerance was set below five, but DICT_O.TXT offered better performance due to its smaller file size. The performance difference is insignificant on modern servers, so Password Policy Enforcer V9.x includes only DICT.TXT. If you are using DICT_O.TXT with the Dictionary rule, then you should reconfigure it to use DICT.TXT after upgrading. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

Older V4.x clients will work with the new server, but you should upgrade to the V9.x client as it has many improvements.

Older versions of the Password Policy Enforcer Client (prior to V6.0) cannot detect passphrases. Users must comply with the policy's compliance level when these older clients are installed. See the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) topic for additional information.

Password Policy Enforcer V9.x allows the use of longer rule inserts in PPC messages. Older versions of the Password Policy Enforcer Client (prior to V7.0), including PPE/Web V6.x and Netwrix Password Reset V2.x may truncate messages with long inserts. See [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) topic for additional information.

PPE/Web V3.x and Netwrix Password Reset V1.x use the Password Policy Enforcer V3.x communication protocol. These clients are not compatible with the V9.x server.

__CAUTION:__ Do not use the automatic tolerance option with Password Policy Enforcer V4.x clients. These clients will enforce an extremely restrictive password policy if this option is enabled. They will reject any password that contains a character found in the comparison parameter. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

The Password Policy Enforcer Client for Windows 8, 10, Server 2012, Server 2016, and Server 2019 displays messages in a smaller area than previous versions of Windows. Some of the default message components were shortened to fit the available space. See [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) topic for additional information. Your existing templates and macros will not change, but some of the default inserts may be different to the ones your users are familiar with. Any new policies you create after upgrading to Password Policy Enforcer V9.x will use the new templates and macros.

If you would like to use the new templates and macros for your existing policies, create a new policy and copy the templates from the new policy to your existing policies. Templates are in the Messages tab of the Policy Properties page. See [Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md) and the [Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md) topics for additional information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V4.x installations and upgrades them to V9.12. See the [Installing the PPC](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md#installing-the-ppc) topic for additional information. If you are distributing the PPC with Group Policy, then add PPEClt912.msi to the same Group Policy Object used to install the older version. Upgrade and reboot the Password Policy Servers before upgrading the clients.
