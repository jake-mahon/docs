# Character Pattern Rule

The Character Pattern rule rejects passwords that contain character patterns such as "abcde".
Passwords should not contain character patterns because they can weaken the password.

![ppe_rules_19](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_19.webp)

- Select the **Enabled** check box to enable the Character Pattern rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.
- Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
  test passwords with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in their password. For example, a
  user may enter "edcba" instead of "abcde".
- Choose a value from the **Tolerance** drop-down list to specify the longest pattern that Password
  Policy Enforcer will tolerate before rejecting a password. For example, the password
  "password**wxyz**" contains a four-character pattern (shown in bold type). Password Policy
  Enforcer will reject this password if the tolerance is set to three (or lower), and accept it if
  the tolerance is set to four (or higher). Choose the **Auto** value if passwords should be
  rejected if they only contain a single, continuous, character pattern. For example, "abcde" would
  be rejected, but "abcdz" and "abc123" would not.
- Click the **Character Patterns** button to select which character patterns Password Policy
  Enforcer will detect. You must select at least one pattern.
- Click the **Messages** tab to customize the Password Policy Client rule inserts.

# Keyboard Pattern Rule

The Keyboard Pattern rule rejects passwords that contain keyboard patterns such as "qwerty".
Passwords should not contain keyboard patterns because they are vulnerable to cracking attacks and
shoulder surfing (observing users as they enter their password).

![ppe_rules_17](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_17.webp)

The examples for this rule are taken from a US keyboard layout. These patterns may not exist on
other keyboard layouts.

- Select the **Enabled** check box to enable the Keyboard Pattern rule.
- Choose the pattern detection mode from the **keyboard patterns** drop-down list. The Horizontal
  mode only detects horizontal patterns such as "qwerty" and "zxcvbn". The Vertical mode only
  detects vertical patterns such as "4esz" and "4rfc". The "Horizontal or vertical" mode detects
  patterns in both axes.
- Select the **Detect direction change** check box if Password Policy Enforcer should detect
  keyboard patterns that contain direction changes. For example, "qwewq" and "4rfr4" are both
  recognized as five-character keyboard patterns if direction change detection is enabled.

**NOTE:** Password Policy Enforcer detects direction changes in both axes if the pattern detection
mode is set to "Horizontal or vertical". For example, "qawsed", "qwedsa", "qwedcv", and "qwsazx" are
all recognized as six-character keyboard patterns if direction change detection is enabled and the
pattern detection mode is set to "Horizontal or vertical".

- Select the **Detect key repeat** check box if Password Policy Enforcer should detect keyboard
  patterns that contain repeated keystrokes. For example, "qwwert" and "qwwwer" are both recognized
  as six-character keyboard patterns if key repeat detection is enabled.
- Select the **Detect key skip** check box if Password Policy Enforcer should detect keyboard
  patterns that contain a horizontally skipped key. For example, "qwryui" is recognized as a six-
  character keyboard pattern if key skip detection is enabled.
- Choose a value from the **Tolerance** drop-down list to specify the longest keyboard pattern that
  Password Policy Enforcer will tolerate before rejecting a password. For example, the password
  "my**qwer**pw" contains a four-character keyboard pattern (shown in bold type). Password Policy
  Enforcer will reject this password if the tolerance is set to three (or lower), and accept it if
  the tolerance is set to four (or higher).
- Click the **Keyboard Layouts** button to select which keyboard layouts Password Policy Enforcer
  uses for pattern detection. You must select at least one layout. Click OK to configure the
  keyboard layout for the Keyboard Patter rule.

![Keyboard Layout Window](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/keboardlayoutwindow.webp)

Click the **Messages** tab to customize the Password Policy Client rule inserts.

**NOTE:** Modifier keys such as Shift and AltGr will not evade pattern detection. Key positions can
differ, even in keyboards with matching layouts. The Keyboard Pattern rule may not detect some
patterns because of these differences. Please report any missed patterns to
[Netwrix Support](https://www.netwrix.com/support.html).

# Repeating Characters Rule

The Repeating Characters rule rejects passwords that contain excessive character repetition.
Reducing character repetition can increase resistance to both brute-force and dictionary cracking
algorithms. The Repeating Characters rule is not case sensitive, so "mypaSssSword" contains four
consecutive repeating characters (SssS).

![ppe_rules_21](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_21.webp)

- Select the **Enabled** check box to enable the Repeating Characters rule.
- Choose the maximum number of consecutive repeating characters that passwords can contain from the
  **consecutive repeating characters** drop-down list.
- Click the **Messages** tab to customize the Password Policy Client rule inserts.

# Repeating Pattern Rule

The Repeating Pattern rule rejects passwords that contain repeating character sequences. Users may
use repetition to artificially increase the length of a short password. This should be avoided as it
can weaken the password.

![ppe_rules_17](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_17.webp)

- Select the **Enabled** check box to enable the Repeating Pattern rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.
- Select the **Bi-directional analysis** check box if Password Policy Enforcer should search for
  patterns with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in the repeated pattern. For example,
  a user may enter "password@drowssap" instead of "password@password".
- Choose a value from the **Tolerance** drop-down list to specify the maximum number of consecutive
  matching characters that Password Policy Enforcer will tolerate before rejecting a password. For
  example, the password "**mypwd**4**mypwd**5" contains a five- character repeating pattern (shown
  in bold type). Password Policy Enforcer will reject this password if the tolerance is four (or
  lower), and accept it if the tolerance is five (or higher).
- Click the **Messages** tab to customize the Password Policy Client rule inserts.

# Similarity Rule

The Similarity rule rejects passwords that are similar to a user's current password. Password
similarity may indicate that a user is serializing their passwords. For example, "password1",
"password2", "password3", etc. Password serialization should be avoided because it may allow an
attacker to guess the new password.

![ppe_rules_9](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppe_rules_9.webp)

Select the **Enabled** check box to enable the Similarity rule.

- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.
- Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
  test passwords with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in their password. For example, a
  user may enter "drowssapdloym" instead of "myoldpassword".
- Choose a value from the **Tolerance** drop-down list to specify the maximum number of consecutive
  matching characters that Password Policy Enforcer will tolerate before rejecting a password. For
  example, the two passwords "old**passwd**" and "new**passwd**" contain six consecutive matching
  characters (shown in bold type). Password Policy Enforcer will reject the new password if the
  tolerance is five (or lower), and accept it if the tolerance is six (or higher). Choose the
  **Auto** value to reject passwords that contain the user's entire current password.

**NOTE:** Click the Messages tab to customize the Password Policy Client rule inserts. This rule is
only enforced if the Password Policy Client is installed. It does not store or transmit passwords or
password hashes.
