# Customizing Rule Inserts

Rule inserts allow the Password Policy and Rejection Reason messages to display the most appropriate information for each user. Most Password Policy Enforcer rules have a Policy and Reason insert. The Policy insert is used by the [POLICY] macro, and the Reason insert is used by the [REASON] macro.

Follow the steps below to edit a rule's inserts.

__Step 1 –__ Click the __Policies__ item to display the Policies view.

![customizing_rule_inserts_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/customizing_rule_inserts_1.png)

__Step 2 –__ Click the __desired policy__ in the right pane of the management console. In this example it is Policy 1.

![customizing_rule_inserts_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/customizing_rule_inserts_2.png)

__Step 3 –__ Double-click the __desired rule__ to display the Rule Properties page. In this example it is a [Compromised Rule](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/compromised_rule.md).

![customizing_rule_inserts_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/customizing_rule_inserts_3.png)

__Step 4 –__ Click the __Messages__ tab.

![customizing_rule_inserts_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/customizing_rule_inserts_4.png)

__Step 5 –__ Choose a language from the Language list.

![customizing_rule_inserts_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/customizing_rule_inserts_5.png)

__Step 6 –__ Edit the rule inserts in the Policy and Reason text boxes.

__NOTE:__ Use the \n escape sequence to start a new line in a message template or rule insert (Password Policy Client V5.1 and later). Inserts and lines starting with two or more spaces, a minus, and a space are shown with a bullet to the left (Password Policy Client V8.0 and later).

## Customizing Password Policy Client Messages

The Password Policy Client displays three messages to help users choose a password:

- The Password Policy message is shown as the user changes their password. This message explains the password policy to the user.
- The Rejection Reason message is shown if a password does not comply with the Password Policy Enforcer password policy. This message tells the user why their password was rejected.
- The Generic Rejection message is shown if Password Policy Enforcer does not have a specific reason for the rejection, generally because the password does not comply with the Windows password policy.

### Password Policy Client Message Components

Password Policy Client messages are built using templates, macros, and inserts. The image below shows a sample policy message with the template in blue, a macro in green, and policy inserts in white.

![the_password_policy_client_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_2.jpg)
