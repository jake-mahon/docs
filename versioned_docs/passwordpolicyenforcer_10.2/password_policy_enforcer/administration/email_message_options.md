# Email Message Options

Email message options are set for each password policy from the [Maximum Age Rule](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/maximum_age_rule.md) rule properties page. Follow the steps below to configure the email message options for a policy.

__Step 1 –__ Click the __Polices__ item to display the Polices view.

__Step 2 –__ Double-click the desired policy in the right pane of the management console.

__Step 3 –__ Double-click the __Age (Max)__ rule.

__Step 4 –__ Select the __Enabled__ check box to enable the Maximum Age rule.

__Step 5 –__ Choose a value from the Days and Mode dropdown lists.

__Step 6 –__ Click the __Email__ tab.

![the_ppe_mailer_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_ppe_mailer_1.png)

Choose values from the days drop-down lists to specify when emails will be sent. By default, emails are sent 14, 7, and 2 days before a user's password expires.

Choose the first item in a list (blank) to send fewer than three emails.

Type the name and email address you wish to appear in the email's From field in the __From__ text box. The correct format is "Display Name" <[mailbox@domain.com](mailto:mailbox@domain.com)>

Type the text for the email's Subject field in the __Subject__ text box.

Type the body of the email in the large text box. The email is sent as plain text unless the body includes the <html> tag. If sending email as HTML, you must include the complete HTML document starting with <html> and ending with

</html>. If the body is too long to fit in the text box, type a path to a file like this:

```file:C:\path\filename.ext```

The path can contain environment variables like %SystemRoot%. Do not use quotes for long filenames and do not include any other text. The Password Policy Enforcer Mailer will read the email body from the specified file.

The email's subject and body can contain various macros. Use these macros to personalize the email.

| Macro | Replaced with |
| --- | --- |
| [LOGON\_NAME] | User's logon name |
| [FIRST\_NAME] | User's first name |
| [LAST\_NAME] | User's last name |
| [DAYS\_TO\_EXPIRY] | Days until password expires |
| [EXPIRY\_DATE] | Expiry date in short format |
| [EXPIRY\_DATE\_LONG] | Expiry date in long format |
| [EXPIRY\_DAY] | Expiry day (1 to 31) |
| [EXPIRY\_DAY\_NAME] | Expiry day (Monday, Tuesday, ...) |
| [EXPIRY\_MONTH] | Expiry month (1 to 12) |
| [EXPIRY\_MONTH\_NAME] | Expiry month (January, February, ...) |
| [EXPIRY\_YEAR] | Expiry year (2021, 2022, ...) |
