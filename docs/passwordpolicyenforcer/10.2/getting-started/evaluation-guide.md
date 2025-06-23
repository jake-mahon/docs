---
title: Evaluation Guide Conclusion and Next Steps
sidebar_label: Evaluation Guide
description: Conclusion of the Password Policy Enforcer evaluation guide with next steps for administration and integration with related products.
---

# Conclusion

Congratulations! You have successfully installed, configured, and tested Netwrix Password Policy
Enforcer. This guide is only an introduction to Password Policy Enforcer's capabilities. You can
enforce almost any password policy imaginable with Password Policy Enforcer, customize the Password
Policy Client messages, and even synchronize passwords with other networks and applications. The
[Administration](/docs/passwordpolicyenforcer/10.2/administration/index.md)
topic contains more information to help you get the most out of Password Policy Enforcer.

You may also be interested in Netwrix Password Reset and PPE/Web. These products allow users to
securely manage their passwords from a web browser. Both products integrate with Password Policy
Enforcer to ensure that passwords comply with the password policy, and to help users choose
compliant passwords.

Password Reset is a self-service password management system that allows users to change their
password, reset a forgotten password, and unlock their account without calling the helpdesk. It
includes the Password Reset Client, which allows users to access APR from the Windows Logon and
Unlock screens.

The [Web](/docs/passwordpolicyenforcer/10.2/web-interface/index.md)
application allows users to change their password from a web browser.

![conclusion_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/conclusion_1.webp)

# Configuring Policy Rules

The policy you just created does not enforce any password requirements yet. You can now configure
the policy to enforce these rules:

- Password must contain at least seven characters.
- Password must contain at least one lowercase alpha character.
- Password must contain at least one uppercase character.
- Password must not be similar to the user's logon name.
- Password must not exist in a dictionary of common passwords.

**Step 1 –** Click the **Users** policy in the left pane of the management console to display the
policy's rules. Rules are displayed in the right pane.

![configuring_policy_rules](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/configuring_policy_rules.webp)

**Step 2 –** Double-click the **Length** rule.

**Step 3 –** Select the **Characters (Alpha Lower)** rule.

**Step 4 –** Select the **Enabled** check box, then click **OK**.

**Step 5 –** Double-click the **Characters (Alpha Upper)** rule.

**Step 6 –** Select the **Enabled** check box, then click **OK**.

**Step 7 –** Double-click the **User Logon Name** rule.

**Step 8 –** Select the **Enabled** check box, then click **OK**.

**Step 9 –** Double-click the **Dictionary** rule.

**Step 10 –** Select the **Enabled** check box.

**Step 11 –** Click **Browse**, select **Dict.txt** from the **\Program File (x86)\Password Policy
Enforcer** folder.

**Step 12 –** Click **Open**, then click **OK**.

**NOTE:** Press F1 while using the management console to display help information for the current
window.

# Creating a Password Policy

There are no password policies defined when Password Policy Enforcer is first installed. You can now
create your first Password Policy Enforcer password policy. Password Policy Enforcer accepts all
passwords in this state, so users only need to comply with the Windows password policy rules (if
enabled).

Follow the steps below to create a Password Policy Enforcer password policy.

**Step 1 –** Click **Start** > **Password Policy Enforcer 10** > **PPE Configuration** to open the
Password Policy Enforcer management console.

Click **Yes** when asked if you would like to create a new Password Policy Enforcer configuration.

**Step 2 –** Click the **Policies** item in the left pane of the management console, then click
**New Policy** in the right pane. This opens the New Policy page.

![managing_policies](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/managing_policies.webp)

**Step 3 –** Enter a unique policy name in the **New policy name** text box.

- If the new policy should inherit its default configuration from an existing policy, choose a
  policy from the **Copy settings from** drop-down list.
- If the new policy should inherit settings from commonly used frameworks, select a Policy Template
  from the drop-down list. For a list of policies see
  [Policy Templates ](/docs/passwordpolicyenforcer/10.2/password-policies/policy-configuration.md).

**Step 4 –** Click **OK**.

**Step 5 –** Click **No** when asked if you would like to assign users to the policy.

![creating_a_password_policy_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/creating_a_password_policy_2.webp)

**Step 6 –** Click the **Password Policy Server** item in the left pane of the management console,
and then click **PPS Properties** in the right pane.

**Step 7 –** Choose the new **Users** (in step 3) policy from the Default Policy drop-down, then
click **OK**.

**Step 8 –** Click **Yes** when asked to confirm the choice of Default Policy.

# Enforcing Multiple Policies

Password Policy Enforcer can enforce up to 256 password policies on each domain or computer. You can
assign policies to users directly, or indirectly through Active Directory security groups and
containers (Organizational Units).

### Create Additional Password Policy

Follow the steps to create an additional password policy.

**Step 1 –** Click the **Policies** item in the left pane of the management console, then click
**New Policy** in the right pane.

![managing_policies](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/managing_policies.webp)

**Step 2 –** Enter **Admins** in the New Policy name text box, then choose the **Users** policy from
the **Copy Settings From:** drop-down.

**Step 3 –** Click **OK** to create the policy, then click the **Assigned To** tab.

![enforcing_multiple_policies_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/enforcing_multiple_policies_1.webp)

**Step 4 –** Click the **Add...** button beside the Groups list and type "**domain admins**" in the
provided field.

- If the test computer is not a domain controller, click the **Add...** button and type
  "**PPETestAdmin**" in the provided field.

**Step 5 –** Click OK.

![enforcing_multiple_policies_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/enforcing_multiple_policies_2.webp)

**Step 6 –** Click **OK** to close the Policy Properties page.

- Members of the Domain Admins group (or the PPETestAdmin user, if not using a domain controller)
  must now comply with the Administrators policy. All other users must comply with the Users policy.
  Users will not notice any difference at this point because the two polices are enforcing identical
  rules.

### Differentiate Password Policies

The example below instructs how to change the minimum password length for the Admins policy from
seven to nine characters. To differentiate the policies, change the minimum password length for the
Admins policy from seven to nine characters.

Follow the steps below to differentiate password policies.

**Step 1 –** Click the **Admins** policy in the left pane of the management console.

**Step 2 –** Double-click the **Length** rule.

**Step 3 –** Choose **9** from the At Least drop-down list, then click **OK**.

Use the Password Policy Enforcer management console, the Windows Change Password screen, the Active
Directory Users and Computers console, or the Local Users and Groups console to test password
changes and resets for the PPETestUser and PPETestAdmin accounts. Password Policy Enforcer should
enforce the Users policy for PPETestUser, and the Admins policy for PPETestAdmin.

**NOTE:** The
[Administration](/docs/passwordpolicyenforcer/10.2/administration/index.md)
topic contains more information about policy assignments, and how Password Policy Enforcer resolves
policy assignment conflicts that occur when more than one policy is assigned to a user.

# Evaluation

Netwrix Password Policy Enforcer is an advanced password filter for Windows. This Evaluator's Guide
shows you how to quickly install, configure, and test Password Policy Enforcer. Password Policy
Enforcer helps you to secure your network by ensuring that users choose strong passwords. If a user
chooses a password that does not comply with the password policy, Password Policy Enforcer
immediately rejects the password and tells the user why their password was rejected.

![introduction_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/introduction_3.webp)

Unlike password cracking products that check passwords after they are accepted by the operating
system, Password Policy Enforcer checks new passwords immediately to ensure that weak passwords do
not jeopardize system security.

**NOTE:** You can also use Password Policy Enforcer to ensure that passwords are compatible with
other systems, and to synchronize passwords with other systems and applications.

The
[Administration](/docs/passwordpolicyenforcer/10.2/administration/index.md)
topic contains additional installation and configuration information. Refer to the Administrator's
topic for more detailed coverage of the information in this document.

# Improving the Password Policy

Password Policy Enforcer rules have properties that control how rules are enforced. You can improve
the effectiveness of the Users policy by enabling "character substitution detection" and
"bi-directional analysis" for the User Logon Name and Dictionary rules.

When character substitution detection is enabled, Password Policy Enforcer searches passwords for
common character substitutions. For example, an S replaced with a $. If a password only complies
with the policy because of the substitution (i.e. the substitution is needed to make the password
compliant), then Password Policy Enforcer rejects the password.

Bi-directional analysis tests passwords with their characters reversed to stop users from
circumventing a rule by entering a non-compliant password backwards. For example, "drowssapym"
instead of "mypassword".

Follow the steps below to enable the character substitution detection and bi-directional analysis
properties for the User Logon Name and Dictionary rules.

**Step 1 –** Click the **Users** policy in the left pane of the management console.

**Step 2 –** Double-click the **User Logon Name** rule.

**Step 3 –** Select the **Detect Character Substitution** and **Bi-directional analysis** check
boxes, then click **OK**.

**Step 4 –** Double-click the **Dictionary Rule**.

**Step 5 –** Select the **Detect Character Substitution** and **Bi-direction analysis** check boxes,
then click **OK**.

Test the improved Users policy with passwords that were accepted under the previous policy (see the
table below). Password Policy Enforcer should reject all of them.

| Password | Result   | Reason                             |
| -------- | -------- | ---------------------------------- |
| tseTEPP  | Rejected | Similar to user logon name         |
| kravdraA | Rejected | Similar to word in dictionary file |
| Aardv@rk | Rejected | Similar to word in dictionary file |

# Netwrix Password Reset and Web

Netwrix Password Reset and Web allows users to securely manage their passwords from a web browser.
Both products integrate with Netwrix Password Policy Enforcer to ensure that passwords comply with
the password policy, and to help users choose compliant passwords.

Password Reset is a self-service password management system that allows users to change their
password, reset a forgotten password, and unlock their account without calling the helpdesk. It
includes the Password Reset Client, which allows users to access APR from the Windows Logon and
Unlock screens.

The [Web](/docs/passwordpolicyenforcer/10.2/web-interface/index.md)
application allows users to change their password from a web browser.

Go
to[](https://www.netwrix.com/active_directory_password_reset_tool.html)[ www.netwrix.com](https://www.netwrix.com/password_policy_enforcer.html)
for more information, or to download an evaluation copy.

![netwrix_password_reset_and_ppe_1105x808](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/netwrix_password_reset_and_ppe_1105x808.webp)

# Testing the Password Policy

The Users policy is now being enforced for all users. You can test the policy from the Password
Policy Enforcer management console, the Windows Change Password screen, or the Active Directory
Users and Computers / Local Users and Groups consoles.

## Management Console

This is often the best way to test password policies because it shows you the most information.
Follow the steps below to test password policies from the Password Policy Enforcer management
console.

**Step 1 –** Click the Policies item in the left pane of the management console, then click Test
Policies in the right pane.

![testing_the_password_policy](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy.webp)

**Step 2 –** Enter a user name in the User name text box.

**Step 3 –** Enter a password in the Old Password and New Password text boxes.

The Password Policy Enforcer management console tests the password by simulating a password change,
but it does not change the user's password. It displays a green check mark below the Test button if
the new password complies with the Password Policy Enforcer password policy, or a red cross if it
does not comply. Detailed test results appear in the results panel below the New Password text box.

The Results tab shows the test results for each rule. The check boxes show which rules the new
password complied with.

| Rule                                                                                                                                                     | Status of Password Compliance with Rule           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ![testing_the_password_policy_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_1.webp) | Rule disabled or not tested.                      |
| ![testing_the_password_policy_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_2.webp) | Rule enabled, password complies with rule         |
| ![testing_the_password_policy_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_3.webp) | Rule enabled, password does not comply with rule. |

Click the Log tab to view Password Policy Enforcer's internal event log. The information in the
event log can help you to understand why Password Policy Enforcer accepted or rejected a password.

**NOTE:** Policy testing simulates a password change, but it may not always reflect what happens
when a user changes their password. See the
[Managing Policies](/docs/passwordpolicyenforcer/10.2/password-policies/creating-policies.md)
topic for more information.

## Windows Change Password Screen

This is how most users change their password. Testing password policies from the Windows Change
Password screen is useful because it allows you to see what your users see.

Follow the steps below to test password policies from the Windows Change Password screen.

**Step 1 –** Press **CTRL + ALT + DEL**.

**Step 2 –** Click the **Change a password** option.

**Step 3 –** Enter a user name in the User name text box.

**Step 4 –** Enter passwords in the Old Password, New Password, and Confirm Password text boxes.

**Step 5 –** Click the **submit arrow**.

You may have noticed that the Change Password screen looks different after installing Password
Policy Enforcer. The Password Policy Enforcer password policy is shown during password changes if
the Password Policy Client is installed. This helps users to choose a compliant password. The
Password Policy Client also changes the message that users see when their password is rejected. Both
these messages are customizable.

![introduction_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/introduction_3.webp)

The Password Policy Client does not modify any Windows system files, and you do not have to install
it to enforce a Password Policy Enforcer password policy. Web browser based versions of the Password
Policy Enforcer Client are also available. See the
[Administration](/docs/passwordpolicyenforcer/10.2/password-reset/index.md)
and
[](http://www.anixis.com/products/ppeweb/)[Web](/docs/passwordpolicyenforcer/10.2/web-interface/index.md)
topics for more information. Password Reset and Password Policy Enforcer/Web are licensed
separately.

## Active Directory Users / Computers Console and local Users and Groups Console

Administrators often change domain passwords from the Active Directory Users and Computers console
and local passwords from the Local Users and Groups console. In fact, these consoles do not change
passwords; they reset them. This is an important distinction because a password reset is:

- Restricted to privileged users
- Performed without knowing the current password

Password Policy Enforcer can enforce the password policy for both password changes and password
resets. It does this by default, but you can configure it to only enforce the password policy for
password changes. The Minimum Age rule is never enforced when a password is reset.

Follow the steps below to test password policies from these consoles.

**Step 1 –** Open the appropriate console:

- If Password Policy Enforcer is enforcing a domain policy, open the Active Directory Users and
  Computers console
- If Password Policy Enforcer is enforcing a local policy, open the Local Users and Groups console

**Step 2 –** Right-click a user, then click **Reset Password**.

**Step 3 –** Enter a password in the **New password** and **Confirm password** text boxes.

**Step 4 –** Click **OK**.

**NOTE:** These consoles do not explain why a password was rejected. Use the Password Policy
Enforcer management console, or the Change Password screen with the Password Policy Enforcer Client
installed to see this information.

The table below contains some sample passwords and expected test results when the Users policy is
enforced. Try to change the password for the PPETestUser account to confirm that Password Policy
Enforcer is enforcing the password policy correctly.

| Password | Result   | Reason                                       |
| -------- | -------- | -------------------------------------------- |
| AbdF6    | Rejected | Does not contain at least 7 characters       |
| abd65fgo | Rejected | Does not contain an upper alpha character    |
| ABD65FGO | Rejected | Does not contain a lower alpha character     |
| PPETest1 | Rejected | Similar to user logon name                   |
| Aardvark | Rejected | Similar to common password (dictionary file) |
| tseTEPP  | Accepted | N/A                                          |
| kravdraA | Accepted | N/A                                          |
| Aardv@rk | Accepted | N/A                                          |

Password Policy Enforcer accepts the last three passwords in the table because they comply with the
password policy, but this highlights some weaknesses in this policy:

- tseTEPP is part of the user logon name with the characters reversed
- kravdraA is Aardvark with the characters reversed
- Aardv@rk is Aardvark with an @ substituting an "a."

These three passwords are only marginally stronger than the rejected passwords. The next section
shows you how to improve the password policy so Password Policy Enforcer will reject these
passwords.

**NOTE:** Contact Netwrix support[ ](mailto:support@anixis.com)if Password Policy Enforcer is not
working as expected, and we will help you to resolve the problem.
