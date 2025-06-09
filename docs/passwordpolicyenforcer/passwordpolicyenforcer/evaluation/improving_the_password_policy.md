# Improve the Password Policy

Password Policy Enforcer rules have properties that control how rules are enforced. You can improve the effectiveness of the Users policy by enabling character substitution detection and bi-directional analysis (words typed backwards) for the __Similarity__ and __Dictionary__ rules.

When character substitution detection is enabled, Password Policy Enforcer searches passwords for common character substitutions. For example, an S replaced with a $. If a password only complies with the policy because of the substitution ( the substitution is needed to make the password compliant), then Password Policy Enforcer rejects the password.

Bi-directional analysis tests passwords with their characters reversed to stop users from circumventing a rule by entering a non-compliant password backwards. For example, "drowssapym" instead of "mypassword".

Click on your policy name on the Configuration Console dashboard if needed.

__Step 1 –__ Open the __Dictionary__ rule.

![Open the Dictionary rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evaldict.png)

__Step 2 –__ Select the __Detect character substitution__ and __Detect words typed backwards__ check boxes.

__Step 3 –__ Open the __Similarity__ rule.

__Step 4 –__ For __User logon name__ select __Yes__ for __Character substitution__ and __Words typed backwards__.

__Step 5 –__ Click __Save__.

Test the improved policy with passwords that were accepted under the previous policy. Password Policy Enforcer should reject all of them.

| Password | Result | Reason |
| --- | --- | --- |
| tseTEPP | Rejected | Similar to user logon name |
| kravdraA | Rejected | Similar to word in dictionary file |
| Aardv@rk | Rejected | Similar to word in dictionary file |
