# Configure Policy Rules

The policy you just created does not enforce any password requirements yet. You can now configure the policy to enforce these rules:

- Password must contain at least seven characters.
- Password must contain at least one lowercase alpha character.
- Password must contain at least one uppercase character.
- Password must not be similar to the user's logon name.
- Password must not exist in a dictionary of common passwords.

When you create a policy, the policy settings are opened. You can open the settings for a policy at any time by clicking the policy name on the Configuration Console dashboard.

![New policy open for settings](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/newpolicysettings.webp)

Requirement: Password must contain at least seven characters.

This condition is set with the __Length__ rule.

__Step 1 –__ Select __Length__.

__Step 2 –__ Click the __Length__ checkbox to enable the rule.

__Step 3 –__ Select __7__ for the __At least...__ value. Depending on the template, this might be the default.

![Set the Length](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evallength.webp)

Requirement: Password must contain at least one lowercase alpha character.

This condition is set with the __Characters (Complexity)__ rule.

__Step 1 –__ Select __Characters (Complexity)__.

__Step 2 –__ Click the __Characters (Complexity)__ checkbox to enable the rule.

__Step 3 –__ Select __1__ as the __Must contain at least...__  value.

__Step 4 –__ Select __Lower Alpha (a-z)__.

__Step 5 –__ Select __Upper Alpha (A-Z)__ for the next requirement while you are here.

![Set upper and lower case requirements](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evalchars.webp)

Password must contain at least one uppercase character.

This condition is set with the __Characters (Granular)__ rule.

__Step 1 –__ Select __Characters (Granular)__.

__Step 2 –__ Click the __Characters (Granular)__ checkbox to enable the rule.

__Step 3 –__ Select __1__ as the __Must contain at least...__  value.

__Step 4 –__ Select __Upper Alpha (A-Z)__ __Contain__ __1__ or more characters.

__Step 5 –__ Select __Lower Alpha (a-z)__ __Contain__ __1__ or more characters.

![set character granularity](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evalcharsgran.webp)

Requirement: Password must not be similar to the user's logon name.

This condition is set with the __Similarity__ rule.

__Step 1 –__ Select __Similarity__.

__Step 2 –__ Click the __Similarity__ checkbox to enable the rule.

__Step 3 –__ Select __User logon name__.

![Set Similarity rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evalsimilarity.webp)

Requirement: Password must not exist in a dictionary of common passwords.

This condition is set with the __Dictionary__ rule.

__Step 1 –__ Select __Dictionary__.

__Step 2 –__ Click the __Dictionary__ checkbox to enable the rule.

__Step 3 –__ Click __Browse__.

__Step 4 –__ Navigate to __\Program Files\Password Policy Enforcer__ folder and select__Dict.txt__.

![Enable the sample dictionary](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evaldict.webp)

When you have added all the rules, click __Save__ to save your new policy.
