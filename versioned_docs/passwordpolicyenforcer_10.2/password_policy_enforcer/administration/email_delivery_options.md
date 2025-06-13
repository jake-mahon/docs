# Email Delivery Options

You must configure the email delivery options in the PPS Properties page before the Password Policy Enforcer Mailer will send email notification to users.

Follow the steps below to configure the email delivery options.

__Step 1 –__ Click the __Password Policy Server__ item to display the Password Policy Server view.

__Step 2 –__ Click __PPS Properties__ in the right pane of the management console.

__Step 3 –__ Click the __Email__ tab.

![the_ppe_mailer](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_ppe_mailer.png)

__Step 4 –__ Select the __Disable email reminders__ option to disable email delivery.

Select the __Send email to an SMTP server__ option to have the Password Policy Enforcer Mailer send email notification directly to an SMTP server. Type the name or IP address of an SMTP server in the __Server__ text box, and the SMTP port number in the __Port__ text box. Enter credentials for the SMTP server in the Username and Password fields.

Select the __Use TLS__ checkbox to enable TLS encryption when using SMTP for email notification delivery.

Select the __Save email to a pickup folder__ option to have the Password Policy Enforcer Mailer save emails to a folder for later delivery by a mail server. Click the __Browse__ button to select a folder. The mail server must monitor this folder for new email.

__NOTE:__ Saving email to a pickup folder is the fastest and most reliable delivery method. Use this option if your mail server supports pickup folders.

The Password Policy Enforcer Mailer sends emails at 2:00 AM every day. Check the Windows Application Event Log to monitor its progress. You can also run the Password Policy Enforcer Mailer from the command line to send email immediately, or to troubleshoot problems.
