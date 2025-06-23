---
title: Password Policy Configuration Options
sidebar_label: Policy Configuration
description: Configure Password Policy Enforcer settings including Windows rules management, domain policies, and local configuration options.
---

# Disable Windows Rules

The Windows password policy rules can place restrictions on password history, age, length, and
complexity. If you enable the Password Policy Enforcer rules and the Windows rules, then users will
have to comply with both sets of rules.

Password Policy Enforcer has its own history, minimum and maximum age, length, and complexity rules.
See the
[Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
topic for additional information. You can use the Password Policy Enforcer and Windows rules
together. A password is only accepted if it complies with the Windows and Password Policy Enforcer
password policies.

Follow the steps below to disable the Windows password policy rules:

**Step 1 –** Start the Group Policy Management Console (gpmc.msc).

**Step 2 –** Expand the forest and domain items in the left pane.

**Step 3 –** Right-click the **Default Domain Policy GPO** (or whichever GPO you use to set your
domain password policy), then click **Edit...**

**Step 4 –** Expand the **Computer Configuration**, **Policies**, **Windows Settings**, **Security
Settings**, **Account Policies**, and **Password Policy** items.

**Step 5 –** Double-click **Enforce password history** in the right pane of the GPO Editor.

**Step 6 –** Enter **0** in the text box, then click **OK**.

**Step 7 –** Repeat the step above for the **Maximum password age**, **Minimum password age**, and
**Minimum password length** policies.

**Step 8 –** Double-click **Password must meet complexity requirements** in the right pane.

**Step 9 –** Select the **Disabled** option, and then click **OK**.

**Step 10 –** Close the Group Policy Management Editor.

![installing_ppe_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/preparing_the_computer.webp)

**NOTE:** You do not have to disable all the Windows password policy rules to use Password Policy
Enforcer. You can use a combination of Password Policy Enforcer and Windows rules together if you
like. Just remember that a password is only accepted if it complies with the rules enforced by both
Windows and Password Policy Enforcer.

# Domain and Local Policies

Netwrix Password Policy Enforcer V7.5 and later can enforce password policies for both domain and
local user accounts.

Domain user accounts exist in Active Directory. Information about these accounts is kept on the
domain controllers, and changes to the accounts are replicated amongst the domain controllers.

Local user accounts exist in the SAM database of workstations and servers. The workstations and
servers may be standalone, or domain members. Information about these accounts is only kept on the
host computer, and does not replicate to any other computers.

A typical Windows network has both domain and local user accounts, but you may not want to enforce
Password Policy Enforcer password policies for both account types. If your users normally logon with
a domain account, then you will most likely only use Password Policy Enforcer to enforce password
policies for the domain accounts.

## Installation Differences

To enforce password policies for domain user accounts, you should install Password Policy Enforcer
onto all the domain controllers in the domain. If you have read-only domain controllers and aren't
using the
[Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md),
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/password-policy-client.md),
or other software (such as
[Netwrix Password Reset](https://www.netwrix.com/active_directory_password_reset_tool.html)) that
uses the Password Policy Enforcer Client protocol, then you do not need to install Password Policy
Enforcer on the read-only domain controllers.

To enforce password policies for local user accounts, you should install Password Policy Enforcer
onto the computers containing the user accounts you wish to enforce password policies for. These
computers may be workstations or servers, and they may be standalone or domain members. It is
normally not necessary to install Password Policy Enforcer onto all the workstations and servers in
a domain because most users in a domain logon with a domain account. If this is the case, then you
will most likely only need to install Password Policy Enforcer on the domain controllers.

## Operational Differences

Most of Password Policy Enforcer's rules and features can be used with both domain and local
policies, but there are some differences. When enforcing the password policy for domain accounts,
Password Policy Enforcer queries Active Directory to get information about the accounts.

While it is theoretically possible to get most of this information from the SAM database for local
accounts, there is a technical limitation which stops password filters from querying the SAM. There
is also some information, such as the user's OU, which does not exist in the SAM. Because of these
limitations, the following rules and features cannot be used with local password policies:

- The Minimum Age and Maximum Age rules (you can use the Windows version of these rules with
  Password Policy Enforcer). See the
  [Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
  topic for additional information.
- Policy assignments by groups and containers. See the
  [Managing Policies](/docs/passwordpolicyenforcer/10.2/password-policies/creating-policies.md)
  topic for additional information.

Password Policy Enforcer's configuration is stored in Active Directory for domain password policies,
and in the Windows registry for local password policies. The Connect To page in the Password Policy
Enforcer management console allows you to choose a configuration source. See the
[Connect to a Configuration](/docs/passwordpolicyenforcer/10.2/administration/connecting-to-domains.md)
topic for additional information. Changes you make to Password Policy Enforcer's domain
configuration are replicated to all domain controllers in the domain. Changes to a local
configuration are applied only to the local computer. If you want to use the same local
configuration for many computers, export the HKLM\SOFTWARE\ANIXIS\Password Policy Enforcer 10.0\
registry key from the configured computer, and import it into the other computers.

You can also use Group Policy to distribute Password Policy Enforcer's local configuration to many
computers in a domain. This is only necessary for local password policies. Domain password policies
automatically replicate to the domain controllers because they are stored in Active Directory.

Follow the steps below to distribute Password Policy Enforcer's local configuration with Group
Policy.

**Step 1 –** Start the Group Policy Management Console (gpmc.msc).

**Step 2 –** Expand the forest and domain items in the left pane.

**Step 3 –** Right-click the **Group Policy** object that you would like to use to distribute the
configuration, and then click the **Edit...** button.

**Step 4 –** Expand the Computer Configuration, Preferences, and Windows Settings items in the left
pane.

**Step 5 –** Right-click the **Registry** item, and then select **New** > **Registry Wizard**.

![domain_and_local_policies](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/domain_and_local_policies.webp)

**Step 6 –** Select the computer that contains the Password Policy Enforcer local configuration that
you want to distribute, and then click **Next**.

**Step 7 –** Expand the **HKEY_LOCAL_MACHINE**, **SOFTWARE**, and **ANIXIS** items.

**Step 8 –** Click the **Password Policy Enforcer 10.0** item, and then select the check boxes
beside each item in the bottom pane of the window.

![domain_and_local_policies_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/domain_and_local_policies_1.webp)

**Step 9 –** Click **Finish**.

**Step 10 –** Close the Group Policy Management Editor.

Password Policy Enforcer's local configuration is applied to the target computers in the domain.
This does not happen immediately, as Windows takes some time to apply the changes to Group Policy.
You can force an immediate refresh of Group Policy on the local computer with this command:
`gpupdate /target:computer`

# Policy Properties

Follow the steps to open the Policy Properties page.

![managing_policies_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_1.webp)

**Step 1 –** Click the **Policies** item to display the Policies view.

**Step 2 –** Click the desired policy in the right pane of the management console.

**Step 3 –** Click **Properties** in the right pane of the management console.

Each Password Policy Enforcer policy must have a unique name. To change the name of a policy, type
the new name in the text box beside the policy icon.

Password Policy Enforcer only enforces enabled policies. Select the **Enabled** check box if
Password Policy Enforcer should enforce this policy, or deselect it to disable the policy. The
policy's icon in the left pane of the management console changes to an X icon when a policy is
disabled.

**NOTE:** A user's password history may be updated even when the policy assigned to the user is
disabled. See the
[Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
topic for additional information.

The **Default character set** drop-down list specifies which character set Password Policy
Enforcer will use to enforce its rules. The default value (Netwrix Password Policy
Enforcer) requires users to comply with rules that use the Password Policy Enforcer character set.
Choose the alternate option (Windows) to have users comply with rules that use the Windows character
set.

**NOTE:** Only Password Policy Enforcer 10.0 and higher will contain the Windows character set.
Password Policy Enforcer 9, Netwrix Password Reset and Password Policy Enforcer/Web 7 (and older for
all products) will always use the Password Policy Enforcer character set.

**CAUTION:** This value should not be changed while using PPE9.x clients, APR 3.x and Password
Policy Enforcer/Web 7.x (and older for all above). These clients only support the Password Policy
Enforcer character set. They will work if Password Policy Enforcer is configured to use the Windows
character sets, but they will still continue to use the Password Policy Enforcer character set as
that is all they know.

- Some languages such as Japanese do not distinguish between uppercase and lowercase. These
  characters will be in the Windows Alpha set, but not in the Upper or Lower sets.
- Characters classified as a space, punctuation, control or blank by Windows are included in the
  Special character set. If these characters are also included in some other set by Windows (for
  example, a superscript one is both a decimal digit and punctuation), then Password Policy Enforcer
  only includes them in the Special character set when the Windows character set is selected.
- When using the Password Policy Enforcer character set, all characters above ANSI 126 are included
  in the High set. When using the Windows character set, a character is only included in the High
  set if it is above ANSI 126 and not included in any other set by Windows.

The **Reject passwords that do not comply with** drop-down list specifies the required compliance
level for this policy. The default value (all the rules) requires users to comply with all enabled
rules. Choose an alternative option if Password Policy Enforcer should enforce a more lenient
password policy. The Minimum Age and Maximum Age rules are excluded from compliance level
calculations. See the
[Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
topic for additional information.

When setting the compliance level, consider that some rules may be disabled when a user enters a
passphrase. See the Passphrases section below for additional information. Password Policy Enforcer
accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This
ensures that passphrases can be used, even if they do not meet the compliance level when Password
Policy Enforcer is configured to disable one or more rules for passphrases.

Password Policy Enforcer can start a password synchronization application or script whenever a user
successfully changes their password. Enter the full path to the executable in the **Execute this
program when a password is changed** text box. The path can contain environment variables like
`%SystemRoot%`. Every computer running Password Policy Enforcer should have a local copy of the
program, and only authorized users should have access to it, or any of its components.

The user logon name and new password are sent to the program as command-line parameters. For
example, if you add the commands below to a batch file, Password Policy Enforcer will record each
user's logon name and new password in a text file called passwords.txt:

echo Username: %1 >> c:\passwords.txt

echo Password: %2 >> c:\passwords.txt

**CAUTION:** This script is shown as an example only. You should not store user passwords.

The command can now include the [USERNAME] and [PASSWORD] macros. If neither is specified, then the
command is executed with both parameters to maintain compatibility with existing programs/scripts.

**_RECOMMENDED:_** Use the [USERNAME] parameter if the password is not needed by the program/script
so that the password is not unnecessarily sent to the change notification command/script.

Record any configuration notes about this policy in the Notes text box.

- Click the **Assigned To** tab to assign this policy to users, groups, or containers.
- Click the **Passphrases** tab to specify which rules should be disabled when a user enters a
  passphrase.
- Click the **Messages** tab to customize the Password Policy Client message templates for this
  policy.

# Enforce Password Reset with Azure Password Writeback

You can use Password Policy Enforcer to enforce password policies for passwords reset from Microsoft
Entra ID and O365 by enabling password writeback in Microsoft Entra ID. See the
[How does self-service password reset writeback work in Microsoft Entra ID?](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-writeback)
Microsoft knowledge base article for additional information on password writeback in Microsoft Entra
ID. Password writeback sends all new passwords from Microsoft Entra ID to an available, on-premises
domain controller to check with Password Policy Enforcer. This happens while the user is resetting
their password. See the
[Tutorial: Enable Microsoft Entra self-service password reset writeback to an on-premises environment](https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback)
and
[How it works: Microsoft Entra self-service password reset](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-howitworks#how-it-works-microsoft-entra-self-service-password-reset) Microsoft
knowledge base articles for additional information on password writeback for Microsoft Entra ID.

# Policy Templates

Password Policy Enforcer contains Out-of-the-box Policy Templates based on the requirements of the
most popular regulatory frameworks.

- CIS Password Policy Guide — See the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- CIS Password Policy Guide MFA — See the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- HIPPA — HIPAA Security Rule requires that organizations must implement procedures for creating,
  changing, and safeguarding passwords.

  - It also recommends training the workforce on ways to safeguard password information and
    establish guidelines to create and change passwords in a periodic cycle.
  - HIPAA doesn’t offer any specific password complexity guidelines. To comply with HIPAA,
    organizations are better off following NIST password guidelines.
  - Most of healthcare institutions use the NIST framework.

- NERC CIP — See the
  [CIP-007-6 — Cyber Security – Systems Security Management](https://www.nerc.com/_layouts/15/PrintStandard.aspx?standardnumber=CIP-007-6&title=Cyber%20Security%20-%20System%20Security%20Management&Jurisdiction=United%20States) article
  for additional information.
- NIST 800-63b — See the
  [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article
  for additional information.
- PCI DSS — See the
  [PCI Document Library](https://www.pcisecuritystandards.org/document_library?category=pcidss&document=pci_dss) web
  site for additional information.
- ISO/IEC 27002 — See the
  [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article
  for additional information.
