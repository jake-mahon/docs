# Configuring Policy Rules

The policy you just created does not enforce any password requirements yet. You can now configure the policy to enforce these rules:

- Password must contain at least seven characters.
- Password must contain at least one lowercase alpha character.
- Password must contain at least one uppercase character.
- Password must not be similar to the user's logon name.
- Password must not exist in a dictionary of common passwords.

__Step 1 –__ Click the __Users__ policy in the left pane of the management console to display the policy's rules. Rules are displayed in the right pane.

![configuring_policy_rules](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/configuring_policy_rules.png)

__Step 2 –__ Double-click the __Length__ rule.

__Step 3 –__ Select the __Characters (Alpha Lower)__ rule.

__Step 4 –__ Select the __Enabled__ check box, then click __OK__.

__Step 5 –__ Double-click the __Characters (Alpha Upper)__ rule.

__Step 6 –__ Select the __Enabled__ check box, then click __OK__.

__Step 7 –__ Double-click the __User Logon Name__ rule.

__Step 8 –__ Select the __Enabled__ check box, then click __OK__.

__Step 9 –__ Double-click the __Dictionary__ rule.

__Step 10 –__ Select the __Enabled__ check box.

__Step 11 –__ Click __Browse__, select __Dict.txt__ from the __\Program File (x86)\Password Policy Enforcer__ folder.

__Step 12 –__ Click __Open__, then click __OK__.

__NOTE:__ Press F1 while using the management console to display help information for the current window.
