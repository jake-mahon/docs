# Disable Windows Rules

The Windows password policy rules can place restrictions on password history, age, length, and complexity. If you enable the Password Policy Enforcer rules and the Windows rules, then users must comply with both sets of rules.

Password Policy Enforcer has its own history, minimum and maximum age, length, and complexity rules. See the [Rules](rules.md) topic for additional information. You can use the Password Policy Enforcer and Windows rules together. A password is only accepted if it complies with the Windows and Password Policy Enforcer password policies.

These steps disable the Windows password policy rules:

__Step 1 –__ Start the Group Policy Management Console __(gpmc.msc__).

__Step 2 –__ Expand the forest and domain items in the left pane.

__Step 3 –__ Right-click the __Default Domain Policy GPO__ (or whichever GPO you use to set your domain password policy), then click __Edit...__

__Step 4 –__ Expand the __Computer Configuration__, __Policies__, __Windows Settings__, __Security Settings__, __Account Policies__, and __Password Policy__ items.

__Step 5 –__ Double-click __Enforce password history__ in the right pane of the GPO Editor.

__Step 6 –__ Enter __0__ in the text box, then click __OK__.

__Step 7 –__ Repeat the step above for the __Maximum password age__, __Minimum password age__, and __Minimum password length__ policies.

__Step 8 –__ Double-click __Password must meet complexity requirements__ in the right pane.

__Step 9 –__ Select the __Disabled__ option, and then click __OK__.

__Step 10 –__ Close the Group Policy Management Editor.

![installing_ppe_3](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/preparing_the_computer.webp)

__NOTE:__ You do not have to disable all the Windows password policy rules to use Password Policy Enforcer. You can use a combination of Password Policy Enforcer and Windows rules together if you like. Just remember that a password is only accepted if it complies with the rules enforced by both Windows and Password Policy Enforcer.
