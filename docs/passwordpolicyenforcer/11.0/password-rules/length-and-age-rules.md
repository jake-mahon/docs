---
title: Password Length and Age Rules
sidebar_label: Length and Age Rules
description: Configure password length and age rules in Password Policy Enforcer including minimum/maximum length and password expiration policies.
---

# Length Rule

The Length rule rejects passwords that contain too few or too many characters. Longer passwords are
generally stronger, so only specify a maximum password length if password compatibility must be
maintained with a system that cannot accept long passwords.

![Length rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/length.webp)

Select the **Length** check box to enable the Length rule.

Select one of the options:

**At least** specifies the minimum number of characters that passwords must contain. Choose the
minimum number of characters from the drop-down list.

**No more than** specifies the maximum number of characters that passwords can contain. Choose the
maximum number of characters from the drop-down list.

**Between** specifies the minimum and maximum number of characters that passwords can contain.
Choose the minimum number of characters from the first drop-down list, and the maximum from the
second drop- down list.

# Age (Max) Rule

The Maximum Age rule forces users to change their passwords regularly. This decreases the likelihood
of an attacker discovering a password before it changes. This rule can only be enforced by domain
policies.

![Maximum Age rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/agemax.webp)

Select the **Age (Max)** checkbox to enable the Maximum Age rule.

Choose a value from the first days drop-down list to specify how many days must elapse before
passwords expire.

You can encourage users to choose longer passwords by extending the lifetime of their password if it
exceeds a certain length. To enable this feature, choose a higher value from the second days
drop-down list and a minimum length from the contains drop-down list. Passwords that contain the
required number of characters do not expire until the second (higher) days value. If both days
values are identical, then passwords will expire after the specified number of days, irrespective of
length.

**NOTE:** When the Maximum Age rule is configured to delay the expiry of longer passwords, it
creates an Active Directory security group called "PPE Extended Maximum Age Users". Password Policy
Enforcer uses this group to identify which users are eligible for a delayed password expiry. Users
are added and removed from the group automatically. You can move and rename this group, but do not
change the pre-Windows 2000 name. Contact Netwrix support if you must change the pre-Windows 2000
name. Change a Password Policy Enforcer configuration setting (any setting) after moving or renaming
the group to trigger a cache update in Password Policy Enforcer. Password Policy Enforcer recreates
this group if you delete it. To stop creating a group, make the two days values equal in all
policies.

Choose a value from the Mode drop-down list to specify how Password Policy Enforcer handles expired
passwords. The Standard mode forces all users with expired passwords to change their password during
logon. The Transitional modes force a percentage of users with expired passwords to change their
password during logon. The Warning mode warns users that their password has expired without forcing
them to change it.

Use the Warning and Transitional modes to gradually introduce a new password policy. These modes
reduce the number of forced password changes, allowing the help desk to deal with any extra calls
relating to the new policy. Switch to the Standard mode after most users have had a chance to change
their password.

It takes approximately 50 days for all users with expired passwords to be forced to change them in
the 2% Transitional mode (2% every day). The 5% Transitional mode reduces this to 20 days, and the
10% Transitional mode further reduces it to 10 days. The selection algorithm is randomized, so these
are estimates only. You must switch to the Standard mode to ensure that all old passwords will
expire.

Users with expired passwords are always prompted to change their password, even in the Transitional
and Warning modes. Users can ignore the prompt to change their password unless they are being forced
to change it.

**NOTE:** The password expiry prompt is a Windows client feature, and is displayed even if the
Password Policy Client is not installed. Windows clients display the prompt 5 days before passwords
expire by default. You can alter this behavior in the Windows Group Policy security settings. See
the
[Interactive logon: Prompt user to change password before expiration](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/interactive-logon-prompt-user-to-change-password-before-expiration)
Microsoft article for additional information.

Password Policy Enforcer expires passwords at 1:00 AM every day on the domain controller holding the
PDC emulator operations master role. It sets "User must change password at next logon" for users
whose password has expired, or is due to expire on that day. Password Policy Enforcer does not
expire passwords if the Maximum Age rule is in Warning mode, or for users with "Password never
expires" set in Active Directory. Some passwords will not expire immediately when the Maximum Age
rule is in a Transitional mode.

### Set up Email

Click the **Set up email** to configure the e-mail message options.

Type the name and email address you wish to appear in the email's From field in the **From** text
box. The correct format is "Display Name" `<mailbox@domain.com>`

Type the text for the email's Subject field in the **Subject** text box.

Type the body of the email in the large text box. The email is sent as plain text unless the body
includes the `<html>` tag. If sending email as HTML, you must include the complete HTML document
starting with `<html>` and ending with `</html>`. If the body is too long to fit in the text box,
type a path to a file like this:

`file:C:\path\filename.ext`

The path can contain environment variables like %SystemRoot%. Do not use quotes for long filenames
and do not include any other text. The Password Policy Enforcer Mailer will read the email body from
the specified file.

The email's subject and body can contain various macros. Use these macros to personalize the email.

| Macro               | Replaced with                         |
| ------------------- | ------------------------------------- |
| [LOGON_NAME]        | User's logon name                     |
| [FIRST_NAME]        | User's first name                     |
| [LAST_NAME]         | User's last name                      |
| [DAYS_TO_EXPIRY]    | Days until password expires           |
| [EXPIRY_DATE]       | Expiry date in short format           |
| [EXPIRY_DATE_LONG]  | Expiry date in long format            |
| [EXPIRY_DAY]        | Expiry day (1 to 31)                  |
| [EXPIRY_DAY_NAME]   | Expiry day (Monday, Tuesday, ...)     |
| [EXPIRY_MONTH]      | Expiry month (1 to 12)                |
| [EXPIRY_MONTH_NAME] | Expiry month (January, February, ...) |
| [EXPIRY_YEAR]       | Expiry year (2021, 2022, ...)         |

### Set up SMTP

Opens the Notification settings. See the [Configuration Console](/docs/passwordpolicyenforcer/11.0/configuration/configuration-console.md) topic for
additional details.

# Age (Min) Rule

The Minimum Age rule stops users from quickly cycling through a series of passwords in order to
evade the History and Similarity rules. This rule can only be enforced by domain policies.

![Minimum age rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/agemin.webp)

Select the **Age (Min)** check box to enable the Minimum Age rule.

Select the number of days before a user can change their password.

**NOTE:** The Minimum Age rule is unique because users cannot comply with it by choosing a different
password; they must wait until the required number of days has elapsed. The Password Policy Client
consequently handles rejections by this rule differently to other rules. Rather than displaying the
usual message components, the Password Policy Client only displays the Minimum Age rule's Reason
insert. See [Password Policy Client](/docs/passwordpolicyenforcer/11.0/configuration/password-client-configuration.md) topic for additional information.
The Rejection Reason template, macros, and inserts from other rules are not displayed when a
password change is denied by the Minimum Age rule.

The Minimum Age rule is not enforced during policy testing, but the test log does show the user's
password age. A log entry is also added if the Minimum Age rule would have rejected the password
change.
