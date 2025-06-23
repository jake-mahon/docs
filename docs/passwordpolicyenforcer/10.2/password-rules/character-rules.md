---
title: Character Requirements Rule Configuration
sidebar_label: Character Rules
description: Configure character rules in Password Policy Enforcer for specific character requirements including uppercase, lowercase, numbers, and symbols.
---

# Character Rules

Password Policy Enforcer has seven Character rules that reject passwords if they contain, or do not
contain certain characters. These rules can increase password strength or ensure password
compatibility with other systems.

![ppe_rules_12](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_12.webp)

All the Character rules work identically, but each has their own default character set. A character
set is the collection of characters that each rule searches for when checking a password. You can
use the Character rules with their default character sets, or define your own. By default, the
Password Policy Enforcer will select the Password Policy Enforcer character on the
[Policy Priorities](/docs/passwordpolicyenforcer/10.2/password-policies/policy-priorities.md)
page.

**NOTE:** Only Password Policy Enforcer 10.2 and higher will contain the Windows character set.
Password Policy Enforcer 9, Netwrix Password Reset3 and Password Policy Enforcer/Web 7 (and older
for all products) will always use the Password Policy Enforcer character set.

This default character set contains the following:

| Rule        | Default character set                              |
| ----------- | -------------------------------------------------- |
| Alpha Lower | Lowercase alphabetic (a - z)                       |
| Alpha Upper | Uppercase alphabetic (A - Z)                       |
| Alpha       | Uppercase and lowercase alphabetic (a - z & A - Z) |
| Numeric     | Numerals (0 - 9)                                   |
| Special     | All characters not included above                  |
| High        | All characters above ANSI 126                      |
| Custom      | No default characters                              |

Select the **Enabled** check box to enable the Character rule.

Select the **contain** option if this rule should ensure that new passwords contain certain
characters. Only one character is required by default, but you can specify a different value by
choosing the required number of characters from the drop-down list beside the **contain** option.

Select the **not contain any...** option if this rule should ensure that new passwords do not
contain certain characters.

If you want to restrict this rule to certain character positions, then choose the starting position
from the **in position** drop-down list, and the ending position from the **to** drop-down list. For
example, you may want to enforce a rule that requires a numeric character in the second character
position to maintain compatibility with some other system.

Select the **Embedded** check box if users are required to embed these characters within their
passwords. For example, the passwords "12hello", "1hello", and "hello$987" do not contain any
embedded numeric characters, but these passwords do contain embedded numeric characters (shown in
bold type): "he**7**llo", "4he**3**llo", "23hello**7**$45". Embedded numeric and special characters
can help to protect passwords from cracking attacks.

Type a character set name in the **Name** text box. The Password Policy Client displays the new
name, but the Password Policy Enforcer management console continues to display the original
character set name.

Type some characters in the **Characters** text box if you would like to define a custom character
set to replace the default. For example, enter "AaEeIiOoUu" to create a vowel character set.

Click the **Messages** tab to customize the Password Policy Client rule inserts.

**NOTE:** The First Character, Last Character, and Complexity rules are easier to configure, and
easier for users to understand. Use these rules instead of the Character rules if they can enforce
your desired policy.

### Enforcing Complex Character Requirements

Character rules can be combined to enforce complex password requirements. For example, you may need
to enforce a policy such as "passwords must contain a numeric character, but not in the first two
positions" to ensure compatibility with some other system. This is done by using two of the
Character rules. The first rule (shown on the left below) ensures that passwords contain at least
one numeric character. The second rule ensures that passwords do not contain any numeric characters
in the first two positions.

|                                                                                                                            |                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![ppe_rules_13](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_13.webp) | ![ppe_rules_14](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_14.webp) |

Password Policy Enforcer has only one Numeric rule, so the second requirement must be enforced by
one of the other rules. Any unused Character rule can be used for this purpose by changing its name
and default character set. In this Example, the Custom rule was chosen as it was not being used. The
character set name was changed to "numeric", and the character set was defined as "1234567890".

# Complexity Rule

The Complexity rule rejects passwords that do not contain characters from a variety of character
sets. Using several character types can make passwords more difficult to crack.

![ppe_rules_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_4.webp)

Select the **Enabled** check box to enable the Complexity rule.

Choose the number of required character sets from the drop-down list. Passwords will be rejected if
they do not contain characters from at least the specified number of character sets.

Choose the available character sets by selecting the check boxes beside the character set names. The
number of available character sets must be equal to or greater than the number of required character
sets.

Select the **Passwords must always comply with this rule** check box to make the Complexity rule
mandatory. Password Policy Enforcer rules are mandatory by default, but can be made optional by
changing the Reject passwords that do not comply with value in the Policy Properties page. A
mandatory rule can still be disabled when a passphrase is used. See the
[Passphrases](/docs/passwordpolicyenforcer/10.2/password-rules/custom-rules.md)
topic for additional information.

Click the Messages tab to customize the Password Policy Client rule inserts.

**NOTE:** The Complexity rule uses custom character set definitions from the Character rules, even
if the Character rules are disabled.

# Unique Characters Rule

The Unique Characters rule rejects passwords that do not contain a minimum number of unique
characters. For example, the password "aaaaaaaa" only contains one unique character (a), whereas
"mypassword" contains nine unique characters (mypasword). Increasing the number of unique characters
in a password can increase password strength by avoiding repetitive sequences that are easily
guessed. The Unique Characters rule is case sensitive, so "LoOpHole" contains seven unique
characters (LoOpHle).

![ppe_rules_22](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_22.webp)

- Select the **Enabled** check box to enable the Unique Characters rule.
- Choose the minimum number of unique characters that passwords must contain from the **unique
  characters** drop-down list.
- Click the **Messages** tab to customize the Password Policy Client rule inserts.
