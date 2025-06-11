# Dictionary Rule

The Dictionary rule rejects passwords that are vulnerable to guessing, hybrid, and precomputed attacks. These attacks can crack weak passwords in seconds, and they can be very effective if passwords are based on common words.

There are two Dictionary rules in each password policy. You can use the second rule with a different dictionary file, or to enforce a more tolerant policy for passphrases by disabling the primary rule for long passwords.

- Enable the __Dictionary__ button to enable the Dictionary rule.
- The Dictionary file box displays name __Dict.txt__ of a sample file, it is installed in the __\Program Files\Password Policy Enforcer__ folder. This file is sorted and ready to use. It contains approximately 257,000 words, names, and acronyms.
- If you wish to add a secondary dictionary, __Click__ +Add Dictionary to add a secondary dictionary.
- __Type__ a path of the secondary dictionary file in the Secondary dictionary box.   
  You can specify rules for both the dictionaries as follows:
  - Select the __Detect inclusion of non-alpha characters__ check box if Password Policy Enforcer should remove all non-alphabetic characters during analysis. This allows Password Policy Enforcer to reject passwords such as "myp8asswor8d."
  - Select the __Detect character substitution__ check box if Password Policy Enforcer should reject passwords that rely on character substitution to comply with this rule.
  - Select the __Bi-directional analysis__ check box if Password Policy Enforcer should additionally test passwords with their characters reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing the order of characters in their password. For example, a user may enter "drowssapym" instead of "mypassword".
  - Select the __Wildcard analysis__ check box if Password Policy Enforcer should search for wildcard templates in the dictionary file. Wildcard templates are specially formatted dictionary words that Password Policy Enforcer uses to reject a range of passwords. The Dictionary rule supports two wildcard template formats:

    | Format | Example | Description |
    | --- | --- | --- |
    | Prefix |  |  |  | --- |  | !!BAN\*!! |  | !!2\*!! |  |  |  |  | --- |  | Rejects passwords that start with BAN.  For example: band, banish, ban, bank, etc. |  | Rejects passwords that start with the numeric character 2.  For example: 2ABC, 2123, etc. |  |
    | Suffix | !!\*ING!! | Rejects passwords that end with ING. For example: pushing, howling, trying, etc. |

    Partial matching is performed even if Wildcard analysis is disabled. For example, the dictionary word "password" will reject the passwords "My__Password__$", "__Password__100", and "12__password__34" even if Wildcard analysis is disabled.

    Wildcard analysis should only be used to limit matching to the characters at the start or end of a password.

    Enabling Wildcard analysis slightly increases search times, so only enable this option if the dictionary file contains wildcard templates. The sample dictionary file included with Password Policy Enforcer does not contain any wildcard templates.
  - Choose a value from the Tolerance drop-down list to specify the maximum number of consecutive matching characters that Password Policy Enforcer will tolerate before rejecting a password. For example, the dictionary word "__sword__", and the password "4my__sword__%" contain five consecutive matching characters (shown in bold type). Password Policy Enforcer will reject this password if the tolerance is four (or lower), and accept it if the tolerance is five (or higher).
