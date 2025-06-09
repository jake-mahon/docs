# Patterns Rule

The Patterns rule rejects passwords that contain character patterns such as "abcde". Character patterns weaken the password.

![Patterns rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/patterns.png)

Select the __Patterns__ check box to enable the Patterns rule.

Select __Reject character patterns like "abcde"__ to check for character patterns.

Select __Character patterns__ to set the patterns to apply. Default is both __English alphabet (a-z)__ and __Numbers (0-9)__.

Select __Detect character substitution__ if Password Policy Enforcer should reject passwords that rely on character substitution to comply with this rule.

Select __Detect words typed backwards__ if Password Policy Enforcer should additionally test passwords with their characters reversed. Enabling this analysis stops users from circumventing this rule by reversing the order of characters in their password. For example, a user may enter "edcba" instead of "abcde".

Choose a value from the __Tolerance__ drop-down list to specify the longest pattern that Password Policy Enforcer allows before rejecting a password. For example, the password "password__wxyz__" contains a four-character pattern (shown in bold type). Password Policy Enforcer rejects this password if the tolerance is set to three (or lower), and accept it if the tolerance is set to four (or higher). Choose the __Auto__ value if passwords should be rejected if they only contain a single, continuous, character pattern. For example, "abcde" would be rejected, but "abcdz" and "abc123" would not.

Select __Reject keyboard patterns like "qwerty"__ to check for keyboard patterns.

Select __Keyboard layouts__ to set the keyboard type. Default is __United States__.

Select the type of keyboard pattern: __Horizontal__, __Vertical__ or __Horizontal and Vertical__.

Select __Detect direction change__ for entries that change direction. For example, __qweewq__.

Select __Detect key repeat__ for repeated keys, based on the __Tolerance__ value. If Tolerance is 4, __aaaa__ is accepted and __aaaaa__ is rejected.

Select __Detect key skip__ for skipped keys, such as __qetuo__.

Set __Tolerance__ for the number of characters in a keyboard pattern is allowed before the password is rejected.
