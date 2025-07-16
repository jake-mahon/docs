---
title: "Characters (Complexity) Rule"
description: "Characters (Complexity) Rule"
sidebar_position: 30
---

# Characters (Complexity) Rule

The Complexity rule rejects passwords that do not contain characters from a variety of character
sets. Using several character types can make passwords more difficult to crack.

![Character Complexity Rule](/img/product_docs/passwordpolicyenforcer/11.0/administration/charcomplexity.webp)

Select the **Characters (Complexity)** checkbox to enable the Character Complexity rule.

Select the number of required character sets. Passwords are rejected if they do not contain
characters from at least the specified number of character sets.

Select the available character sets. The number of available character sets must be equal to or
greater than the number of required character sets.

Select the **Passwords must always comply with this rule** check box to make the Complexity rule
mandatory. Password Policy Enforcer rules are mandatory by default, but can be made optional by
changing the Reject passwords that do not comply with value in the Policy Properties page. A
mandatory rule can still be disabled when a passphrase is used. See the [Passphrase](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/passphrases.md)
topic for additional information.

:::note
The Complexity rule uses custom character set definitions from the Character rules, even
if the Character rules are disabled.
:::


This default character set contains the following:

| Rule        | Default character set                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Alpha Lower | Lowercase alphabetic (a <ul><li>z)</li></ul>                             |
| Alpha Upper | Uppercase alphabetic (A <ul><li>Z)</li></ul>                             |
| Alpha       | Uppercase and lowercase alphabetic (a <ul><li>z & A</li><li>Z)</li></ul> |
| Numeric     | Numerals (0 <ul><li>9)</li></ul>                                         |
| Special     | All characters not included above                                        |
| High        | All characters above ANSI 126                                            |
| Custom      | No default characters                                                    |

