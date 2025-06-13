# Improving the Password Policy

Password Policy Enforcer rules have properties that control how rules are enforced. You can improve the effectiveness of the Users policy by enabling "character substitution detection" and "bi-directional analysis" for the User Logon Name and Dictionary rules.

When character substitution detection is enabled, Password Policy Enforcer searches passwords for common character substitutions. For example, an S replaced with a $. If a password only complies with the policy because of the substitution (i.e. the substitution is needed to make the password compliant), then Password Policy Enforcer rejects the password.

Bi-directional analysis tests passwords with their characters reversed to stop users from circumventing a rule by entering a non-compliant password backwards. For example, "drowssapym" instead of "mypassword".

Follow the steps below to enable the character substitution detection and bi-directional analysis properties for the User Logon Name and Dictionary rules.

__Step 1 –__ Click the __Users__ policy in the left pane of the management console.

__Step 2 –__ Double-click the __User Logon Name__ rule.

__Step 3 –__ Select the __Detect Character Substitution__ and __Bi-directional analysis__ check boxes, then click __OK__.

__Step 4 –__ Double-click the __Dictionary Rule__.

__Step 5 –__ Select the __Detect Character Substitution__ and __Bi-direction analysis__ check boxes, then click __OK__.

Test the improved Users policy with passwords that were accepted under the previous policy (see the table below). Password Policy Enforcer should reject all of them.

| Password | Result | Reason |
| --- | --- | --- |
| tseTEPP | Rejected | Similar to user logon name |
| kravdraA | Rejected | Similar to word in dictionary file |
| Aardv@rk | Rejected | Similar to word in dictionary file |
