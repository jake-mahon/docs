# Character Pattern Rule

The Character Pattern rule rejects passwords that contain character patterns such as "abcde". Passwords should not contain character patterns because they can weaken the password.

![ppe_rules_19](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_19.png)

- Select the __Enabled__ check box to enable the Character Pattern rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject passwords that rely on character substitution to comply with this rule.
- Select the __Bi-directional analysis__ check box if Password Policy Enforcer should additionally test passwords with their characters reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing the order of characters in their password. For example, a user may enter "edcba" instead of "abcde".
- Choose a value from the __Tolerance__ drop-down list to specify the longest pattern that Password Policy Enforcer will tolerate before rejecting a password. For example, the password "password__wxyz__" contains a four-character pattern (shown in bold type). Password Policy Enforcer will reject this password if the tolerance is set to three (or lower), and accept it if the tolerance is set to four (or higher). Choose the __Auto__ value if passwords should be rejected if they only contain a single, continuous, character pattern. For example, "abcde" would be rejected, but "abcdz" and "abc123" would not.
- Click the __Character Patterns__ button to select which character patterns Password Policy Enforcer will detect. You must select at least one pattern.
- Click the __Messages__ tab to customize the Password Policy Client rule inserts.
