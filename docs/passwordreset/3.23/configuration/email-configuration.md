# Mailer

Netwrix Password Policy Enforcer can send email reminders to domain users before their passwords
expire. This is especially useful for users who logon infrequently, and for remote users who access
the network without logging on to the domain. You must install the Password Policy Enforcer Mailer
and configure the email delivery and email message options to send email reminders to users.

Add your email address to a service account, and the Password Policy Enforcer Mailer will remind you
to change the service account password before it expires.

## Installing the Mailer

The Password Policy Enforcer Mailer is not installed by default. Only install it on one server in
each domain. The Password Policy Enforcer Mailer can be installed on any server, including a domain
controller.

Follow the steps below to install the Password Policy Enforcer Mailer:

**Step 1 –** Start the Password Policy Enforcer Installer (PPE912.exe).

**Step 2 –** Read the license agreement, then click **Yes** if you accept all the license terms and
conditions.

**Step 3 –** Select the **Advanced** option, then click **Next**.

**Step 4 –** Doulbe-click the **PPE912.msi** file.

**Step 5 –** If you are prompted to Modify, Repair, or Remove the installation, select **Modify**,
then click **Next**. Proceed to step 11.

**NOTE:** If not prompted, proceed to step 6.

**CAUTION:** If prompted to Modify, Repair, or Remove, do not modify any settings or disable any
features as described in steps 6 - 10.

**Step 6 –** Click **Next** when the Password Policy Enforcer Installation Wizard opens.

**Step 7 –** Select **I accept the license agreement**, then click **Next**.

**Step 8 –** Select the **Custom** option, then click **Next**.

**Step 9 –** Click the **icon** beside the Password Policy Server feature, then click the **Entire
feature will be unavailable** button.

**Step 10 –** Repeat step 10 for the Management Console, Documentation, and Dictionaries features
unless you also want to configure Password Policy Enforcer from this server.

**Step 11 –** Click the **icon** beside the Password Policy Enforcer Mailer Service feature, then
click the **Will be installed on local hard drive** button.

**Step 12 –** Click **Next** twice.

**Step 13 –** Wait for the Password Policy Enforcer Mailer to install, then click **Finish** twice.

## Email Delivery Options

You must configure the email delivery options in the PPS Properties page before the Password Policy
Enforcer Mailer will send email to users.

Follow the steps below to configure the email delivery options.

**Step 1 –** Click the PPS item to display the PPS view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

**Step 3 –** Click the **email** tab.

![the_ppe_mailer](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_ppe_mailer.webp)

**Step 4 –** Select the **Disable email reminders** option to disable email delivery.

Select the **Send email to an SMTP server** option to have the Password Policy Enforcer Mailer send
emails directly to an SMTP server. Type the name or IP address of an SMTP server in the **Server**
text box, and the SMTP port number in the **Port** text box.

Select the **Save email to a pickup folder** option to have the Password Policy Enforcer Mailer save
emails to a folder for later delivery by a mail server. Click the **Browse** button to select a
folder. The mail server must monitor this folder for new email.

**NOTE:** Saving email to a pickup folder is the fastest and most reliable delivery method. Use this
option if your mail server supports pickup folders.

The Password Policy Enforcer Mailer sends emails at 2:00 AM every day. Check the Windows Application
Event Log to monitor its progress. You can also run the Password Policy Enforcer Mailer from the
command line to send email immediately, or to troubleshoot problems.

## Email Message Options

Email message options are set for each password policy from the Maximum Age
rule[ ](/docs/passwordreset/3.23/configuration/password-policies.md)properties
page.

Follow the steps below to configure the email message options for a policy.

**Step 1 –** Click the **Polices** item to display the Polices view.

**Step 2 –** Double-click the desired policy in the right pane of the management console.

**Step 3 –** Double-click the Age (Max) rule.

**Step 4 –** Select the Enabled check box to enable the Maximum Age rule.

**Step 5 –** Choose a value from the Days and Mode dropdown lists.

**Step 6 –** Click the Email tab.

![the_ppe_mailer_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_ppe_mailer_1.webp)

Choose values from the days drop-down lists to specify when emails will be sent. By default, emails
are sent 14, 7, and 2 days before a user's password expires.

Choose the first item in a list (blank) to send fewer than three emails.

Type the name and email address you wish to appear in the email's From field in the **From** text
box. The correct format is `"Display Name" <mailbox@domain.com>`

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
| [EXPIRY_YEAR]       | Expiry year (2016, 2017, ...)         |

## Command Line Interface

You can run the Password Policy Enforcer Mailer from the command line to deliver email immediately,
or to troubleshoot problems. PPEMail.exe is copied into the \Program Files (x86)

\Password Policy Enforcer\ folder when the Password Policy Enforcer Mailer is installed.

PPEMail.exe starts a simulation when run without any parameters. It finds users whose password will
expire soon, but no email is sent or saved to the pickup folder. Use the simulation mode to find
common configuration errors that may stop the Password Policy Enforcer Mailer from delivering email.

Running PPEMail.exe with the /send parameter disables simulation mode. Any emails that are due to be
sent today are sent immediately. PPEMail.exe can

identify a wider range of configuration errors when run in this mode. Use the /send parameter
judiciously to avoid sending duplicate emails to users.

To test email delivery options without sending any emails to users, run PPEMail.exe with the /test
parameter followed by your email address. For example, PPEMail.exe /test johnsmith@netwrix.com. This
will send one test email to your mail server or pickup folder.
