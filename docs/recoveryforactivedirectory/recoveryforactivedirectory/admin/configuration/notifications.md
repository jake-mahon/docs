# Notifications Page

The Notifications page allows the configuration of notifications, which is required for sending an email when a collection (backup) job is completed. Only a user with the administrator role can configure notifications.

Click __Configuration__ in the left pane. Then click the __Notification tab__ on the Configuration page to open the Notification page.

![Notifications Page](/img/product_docs/1secure/admin/notifications.png)

Follow the steps to configure notifications.

__Step 1 –__ Select the __Enable__ check box to configure email notifications.

__Step 2 –__ In the SMTP Settings section, configure the SMTP server. If the SMTP server does not require authentication, the Account name and Account password fields can be left blank.

- SMTP Server – The server and port information
- Account Name – Name of the account to use for accessing the mail server
- Account Password – Password for the account

__Step 3 –__ Select an encryption protocol to encode the email notifications from the Encryption method drop-down menu.

__Step 4 –__ In the Send Email As section, configure the email address and display name to use for sending email notifications.

- Email address – Create an email address to be used, for example: noreply@companyname.com
- Display name – Name to be displayed on the email notifications

__Step 5 –__ Click the __Test__ button to verify the notifications are configured correctly.

__Step 6 –__ Click the __Save__ button to save the configurations.

Notifications have been configured in the system.

__NOTE:__ The recipients of the notification can be added from the Domains page. See the [Add a Domain](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/domain.md#Add-a-Domain) topic for additional information.
