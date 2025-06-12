# User Display Name Rule

The User Display Name rule rejects passwords that are similar to a user's Active Directory display name (full name for local accounts). Passwords that are similar to a user's display name are not desirable because they are easily guessed.

![ppe_rules_11](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_11.png)

- Select the __Enabled__ check box to enable the User Display Name rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject passwords that rely on character substitution to comply with this rule.
- Select the __Bi-directional analysis__ check box if Password Policy Enforcer should additionally test passwords with their characters reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing the order of characters in their password. For example, a user may enter "emanyalpsidym" instead of "mydisplayname".
- Choose a value from the __Tolerance__ drop-down list to specify the maximum number of consecutive matching characters that Password Policy Enforcer will tolerate before rejecting a password. For example, the display name "John __Smith__ers", and the password "12__smith__town" contain five consecutive matching characters (shown in bold type). Password Policy Enforcer will reject this password if the tolerance is four (or lower), and accept it if the tolerance is five (or higher). Choose the __Auto__ value to reject passwords that contain the user's entire display name.
- Click the __Messages__ tab to customize the Password Policy Client rule inserts.
