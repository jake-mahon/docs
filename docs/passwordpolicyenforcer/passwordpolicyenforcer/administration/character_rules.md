# Character (Granular) Rules

Password Policy Enforcer has seven Character rules that reject passwords if they contain, or do not contain certain characters. These rules can increase password strength or ensure password compatibility with other systems.

![Character (Granular) Rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/chargranular.png)

All the Character rules work identically, but each has their own default character set. A character set is the collection of characters that each rule searches for when checking a password. You can use the Character rules with their default character sets, or define your own. By default, the Password Policy Enforcer selects the Password Policy Enforcer character on the [Set Priorities](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/manage_policies.md#set-priorities) page.

__NOTE:__ Only Password Policy Enforcer 11 and higher will contain the Windows character set. Password Policy Enforcer 9, Netwrix Password Reset3 and Password Policy Enforcer Web 7 (and older for all products) use the Password Policy Enforcer character set.

Select the __Characters (Granular)__ check box to enable the Characters rule.

For each selected character set, select whether they __Contain__ or __Not contain__ the specified number of characters.

Select the __contain__ option if this rule should ensure that new passwords contain certain characters. Only one character is required by default, but you can specify a different value by choosing the required number of characters from the drop-down list beside the __contain__ option.

Select the __not contain any...__ option if this rule should ensure that new passwords do not contain certain characters.

You can further restrict the rule by defining positions or embedding characters.

Click the + sign by the character set.

Select __In position__.

![Restricting Characters](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/chargranularrestrict.png)

If you want to restrict this rule to certain character positions, choose the starting position from the first entry box and the ending position from the second entry box. For example, you may want to enforce a rule that requires a numeric character in the second character position to maintain compatibility with some other system.

![Require a number in position 2](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/chargranularrestrict2.png)

Click the + sign by the character set.

Select __Embedded__.

Select the __Embedded__ check box if users are required to embed these characters within their passwords. For example, the passwords "12hello", "1hello", and "hello$987" do not contain any embedded numeric characters, but these passwords do contain embedded numeric characters (shown in bold type): "he__7__llo", "4he__3__llo", "23hello__7__$45". Embedded numeric and special characters can help to protect passwords from cracking attacks.

__NOTE:__ The First Character, Last Character, and Complexity rules are easier to configure, and easier for users to understand. Use these rules instead of the Character rules if they can enforce your desired policy.

You can customize character sets with the Characters option for a selected set.

__Step 1 –__ Click __Characters__ beside a selected Character set.

__Step 2 –__ Enter a __Name__. This example uses __vowels__.

![Set up custom character set](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/chargranularvowel.png)

__Step 3 –__ Enter the __Characters__. This example uses __AaEeIiOoUu__.

__Step 4 –__ Click __Apply__.

If you save and test the policy, you see __vowels__ is listed as a requirement.

To remove a custom set, click __Characters__ and delete the information. Click __Apply__.

### Enforcing Complex Character Requirements

Character rules can be combined to enforce complex password requirements. For example, you may need to enforce a policy such as "passwords must contain a numeric character, but not in the first two positions" to ensure compatibility with some other system.

This is done by using two of the Character rules:

Set __Characters (Complexity)__ to require 1 Numeric character.

![Require a numeric value](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/chargranularrestrict3.png)

Set __Characters (Granular)__ to not contain numeric values in the first two positions.

![Don't allow numeric values in first two positions](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/chargranularrestrict4.png)
