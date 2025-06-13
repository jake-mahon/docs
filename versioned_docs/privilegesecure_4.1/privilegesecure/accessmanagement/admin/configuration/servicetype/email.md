# Email Service

On the Email Services page, add and configure the settings used for email notifications.

![Email Services Page](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/servicetype/emailservicepage.png)

The Email Service page shows details of the selected email service and has the following features:

- [Email Settings Tab](#email-settings-tab)
- [Email Queue Tab](#email-queue-tab)

## Email Settings Tab

On the Email Settings tab, view and edit the email service settings.

![emailsettingstab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/servicetype/emailsettingstab.png)

The Email Settings tab has the following features:

- From Address – The address that will be shown in the 'From' field of the email
- Hostname (FQDN or IP) – SMTP host that Privilege Secure needs to connect to
- Port – SMTP port
- Credentials for Connection – Service account with credentials for the SMTP server
- Use TLS – Check the checkbox to enable TLS
- Test Settings – Click to verify the connection to the email client

## Email Queue Tab

The Email Queue tab shows all outgoing mail notifications.

![Email Service Queue Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/servicetype/emailqueuetab.png)

The Email Queue table has the following features:

- Search – Searches the To Address and Subject columns to match the search string. When matches are found, the table is filtered to the matching results.
- Column headers can be resized and sorted by ascending or descending order:

  - Created – Timestamp of notification creation
  - Sent – Timestamp of when the notification was sent
  - To Address – The email address of the recipient
  - Subject – The message text
