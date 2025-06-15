# Email Page

The Email page within the Integrations interface allows users to configure the application to send email notifications.

![Integrations interface on the Email page](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The page has the following information:

- Enabled – Indicates whether email notifications are functioning
- Mail Server – The IP address or server name of the mail server that will be used to send email notifications
- Port – The Port used by the mail server
- Use TLS – Indicates whether the TLS protocol is in use for email notifications
- Ignore Certificate Errors – Indicates whether certificate errors will be ignored when sending email
- User Name – The user name of the credentials that will be used when TLS is enabled
- Password – The password for the credentials that will be used when TLS is enabled
- Send From Address – The email address that will be listed as the sender of notifications
- Send Alerts To – The email address(es) that will receive alert notifications, use a semicolon as a seperator
- Subject – The subject line of the alert notification, which can contain data variables. For example, [Threat Type] detected by Threat Manager, which would replace the [Threat Type] variable with the type of threat detected.
- URL – The URL to the application console to be included in the email as a link
- Send Test Email – Click __Send Test Email__ to send a test notification to the configured email address(es)

## Configure Email Notifications

Follow the steps to configure email notifications.

__Step 1 –__ On the Integrations interface, click __Email__ in the navigation pane.

![Integrations interface on the Email page showing details](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/details.webp)

__Step 2 –__ Toggle the Enabled button to __ON__, which enables the Send Test Email button.

__Step 3 –__ Enter the following information:

- Mail Server – Enter the IP address or server name of the mail server that will be used to send email notifications
- Port – Enter the Port used by the mail server. The default port is 25.
- Use TLS – Toggle the button to __ON__ if you wish to enable TLS protocol is in use for email notifications
- Ignore Certificate Errors –Toggle the button to __ON__ if you wish to ensure certificate errors will be ignored when sending email
- User Name – If applicable, enter the user name of the credentials that will be used when TLS is enabled
- Password – If applicable, enter the password for the credentials that will be used when TLS is enabled
- Send From Address – Enter the email address that will be listed as the sender of notifications
- Send Alerts To – Enter the email address(es) that will receive alert notifications, use a semicolon as a seperator
- Subject – Enter the subject line of the alert notification, which can contain data variables. By default, this includes the [Threat Type] variable.
- URL – Enter the URL to the application console to be included in the email as a link. By default, this is set to ```http://localhost:8080/```

___RECOMMENDED:___ When first configuring email notification, enter your email in the Send Alerts To field for the connection test completed in Step 4. Once the test is successful, replace your email with the desired recipients.

__Step 4 –__ Click __Send Test Email__ to send a test notification to the configured email address(es). Validate the email was sent by checking that the recipient received the email.

__Step 5 –__ Click __Save Settings__ to commit the changes.

Email notifications are now configured.
