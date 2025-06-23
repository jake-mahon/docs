---
title: Compromised Password Rule Configuration
sidebar_label: Advanced Rules
description: Configure the Compromised rule to reject passwords from prior breaches and protect against credential stuffing attacks in Password Policy Enforcer.
---

# Compromised Rule

The Compromised rule rejects passwords from prior breaches. These passwords should not be used as
they are vulnerable to credential stuffing attacks.

![ppe_rules_6_337x406](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_6_337x406.webp)

Select the **Enabled** check box to enable the Compromised rule.

Click the **...** (ellipsis) button beside each text box to select a hash file. You can also type a
path into the text box. The path can contain environment variables like

**CAUTION:** %SystemRoot%. hash files should only be read from a local disk. Using shared hash files
degrades performance, and could jeopardize security.

Click the **Messages** tab to customize the Password Policy Client rule inserts.

For the information about Have I Been Pwnd (HIBP) database usage, please see the
[HIBP Updater](/docs/passwordpolicyenforcer/10.2/tools-and-utilities/hibp-updater.md)
topic.

# Dictionary Rule

The Dictionary rule rejects passwords that are vulnerable to guessing, hybrid, and precomputed
attacks. These attacks can crack weak passwords in seconds, and they can be very effective if
passwords are based on common words.

![ppe_rules_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_5.webp)

There are two Dictionary rules in each password policy. You can use the second rule with a different
dictionary file, or to enforce a more tolerant policy for passphrases by disabling the primary rule
for long passwords.

Select the **Enabled** check box to enable the Dictionary rule.

Select the **Detect inclusion of non-alpha characters** check box if Password Policy Enforcer should
remove all non-alphabetic characters during analysis. This allows Password Policy Enforcer to reject
passwords such as "myp8asswor8d."

Select the **Detect character substitution** check box if Password Policy Enforcer should reject
passwords that rely on character substitution to comply with this rule.

Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
test passwords with their characters reversed. Enabling bi-directional analysis stops users from
circumventing this rule by reversing the order of characters in their password. For example, a user
may enter "drowssapym" instead of "mypassword".

Select the Wildcard analysis check box if Password Policy Enforcer should search for wildcard
templates in the dictionary file. Wildcard templates are specially formatted dictionary words that
Password Policy Enforcer uses to reject a range of passwords. The Dictionary rule supports two
wildcard template formats:

| Format | Example   | Description                                                                      |
| ------ | --------- | -------------------------------------------------------------------------------- | --- | --- | --- | --------- | --- | ------- | --- | --- | --- | --- | --- | --- | --------------------------------------------------------------------------------- | --- | ---------------------------------------------------------------------------------------- | --- |
| Prefix |           |                                                                                  |     | --- |     | !!BAN\*!! |     | !!2\*!! |     |     |     |     | --- |     | Rejects passwords that start with BAN. For example: band, banish, ban, bank, etc. |     | Rejects passwords that start with the numeric character 2. For example: 2ABC, 2123, etc. |     |
| Suffix | !!\*ING!! | Rejects passwords that end with ING. For example: pushing, howling, trying, etc. |

Partial matching is performed even if Wildcard analysis is disabled. For example, the dictionary
word "password" will reject the passwords "My**Password**$", "**Password**100", and
"12**password**34" even if Wildcard analysis is disabled.

Wildcard analysis should only be used to limit matching to the characters at the start or end of a
password.

Enabling Wildcard analysis slightly increases search times, so only enable this option if the
dictionary file contains wildcard templates. The sample dictionary file included with Password
Policy Enforcer does not contain any wildcard templates.

Choose a value from the Tolerance drop-down list to specify the maximum number of consecutive
matching characters that Password Policy Enforcer will tolerate before rejecting a password. For
example, the dictionary word "**sword**", and the password "4my**sword**%" contain five consecutive
matching characters (shown in bold type). Password Policy Enforcer will reject this password if the
tolerance is four (or lower), and accept it if the tolerance is five (or higher).

Click the **Browse** button to select a dictionary file, or type a path into the text box. The path
can contain environment variables like %SystemRoot%. A sample dictionary is installed in the
\Program Files (x86)\Password Policy Enforcer\ folder. The dictionary file should be read from a
local disk. Using a shared dictionary degrades performance, and could jeopardize security.

**NOTE:** The `\Program Files (x86)\` folder does not exist on 32-bit Windows, so move the
dictionary into the `\Program Files\Password Policy Enforcer\` folder if you have 32-bit and 64-bit
computers sharing a common Password Policy Enforcer configuration.

Click the **Sort** button if the dictionary file is being used with Password Policy Enforcer for the
first time, or if words have been added to the file since it was last sorted. The Password Policy
Enforcer management console will sort and reformat the file so that Password Policy Enforcer can use
it. Sorting also removes duplicate words, so the sorted file may be smaller than the original.

Click the **Messages** tab to customize the Password Policy Client rule inserts. If both Dictionary
rules have identical inserts, then only one of the inserts is shown in the corresponding Password
Policy Client message if the password is rejected by both rules.

## Sample Dictionary File

A sample dictionary file called DICT.TXT is installed in the \Program Files (x86)

\Password Policy Enforcer\ folder. This file is sorted and ready to use. It contains approximately
257,000 words, names, and acronyms.

## Creating a Custom Dictionary

You can add words to the sample dictionary file, or download larger dictionary files from the
Internet. Always sort a dictionary file before using it with Password Policy Enforcer, and make sure
that all computers have a local copy of the updated and sorted file.

The custom dictionary should meet the following requirements:

1. The dictionary should begin and end with a blank line.
2. All words are capitalized.
3. The sort button is pressed after pointing to a file in the dictionary rule.

**NOTE:** If you are using a custom dictionary, please provide a different filename. The default
dictionary file (dict.txt) may be replaced during an upgrade.

## Dictionary File Replication

Password Policy Enforcer does not distribute dictionary file updates to other computers, but you can
use the Windows Distributed File System to ensure that all domain controllers have the latest
dictionary file. Copy the dictionary file into the Sysvol share on one domain controller, and the
Distributed File System will copy the file into the Sysvol share of all other domain controllers.
Configure the Dictionary rule to read the file from \\127.0.0.1\sysvol\your.domain\filename.txt

The path above only works if the computer has a Sysvol share. This won't be the case if you are
using a workstation for policy testing, or if you are using Password Policy Enforcer to enforce
local polices. If you are using Password Policy Enforcer for local policies and want all computers
to receive dictionary file updates, then use the Sysvol share for file replication and a script or
scheduled task to copy the file to a local folder.

# First and Last Character Rules

The First and Last Character rules reject passwords that do not begin or end with an appropriate
character. These rules are typically used to ensure password compatibility with other systems.

|                                                                                                                            |                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![ppe_rules_15](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_15.webp) | ![ppe_rules_16](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_16.webp) |

Select the **Enabled** check box to enable the First or Last Character rule.

Select the **begin** (First Character rule) or **end** (Last Character rule) option if you want to
specify the **acceptable** character sets.

Select the **not begin** (First Character rule) or **not end** (Last Character rule) option if you
want to specify the **unacceptable** character.

Choose one or more character sets by selecting the check boxes beside the character set names.

**NOTE:** Click the Messages tab to customize the Password Policy Client rule inserts. The First and
Last Character rules use custom character set definitions from the Character rules, even if the
Character rules are disabled.

# User Display Name Rule

The User Display Name rule rejects passwords that are similar to a user's Active Directory display
name (full name for local accounts). Passwords that are similar to a user's display name are not
desirable because they are easily guessed.

![ppe_rules_11](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_11.webp)

- Select the **Enabled** check box to enable the User Display Name rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.
- Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
  test passwords with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in their password. For example, a
  user may enter "emanyalpsidym" instead of "mydisplayname".
- Choose a value from the **Tolerance** drop-down list to specify the maximum number of consecutive
  matching characters that Password Policy Enforcer will tolerate before rejecting a password. For
  example, the display name "John **Smith**ers", and the password "12**smith**town" contain five
  consecutive matching characters (shown in bold type). Password Policy Enforcer will reject this
  password if the tolerance is four (or lower), and accept it if the tolerance is five (or higher).
  Choose the **Auto** value to reject passwords that contain the user's entire display name.
- Click the **Messages** tab to customize the Password Policy Client rule inserts.

# User Logon Name Rule

The User Logon Name rule rejects passwords that are similar to a user's logon name (user name).
Passwords that are similar to a user's logon name are not desirable because they are easily guessed.

![ppe_rules_10](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_10.webp)

- Select the Enabled check box to enable the User Logon Name rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.

- Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
  test passwords with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in their password. For example, a
  user may enter "emannogolym" instead of "mylogonname".
- Choose a value from the **Tolerance** drop-down list to specify the maximum number of consecutive
  matching characters that Password Policy Enforcer will tolerate before rejecting a password. For
  example, the logon name "mary**jones**", and the password "**Jones**town" contain five consecutive
  matching characters (shown in bold type). Password Policy Enforcer will reject this password if
  the tolerance is four (or lower), and accept it if the tolerance is five (or higher). Choose the
  **Auto** value to reject passwords that contain the user's entire logon name.
- Click the **Messages** tab to customize the Password Policy Client rule.
