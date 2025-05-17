---
sidebar_position: 7885
title: Email Service
---

# Email Service

On the Email Services page, add and configure the settings used for email notifications.

![Email Services Page](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Configuration/ServiceNodes/EmailService/EmailServicePage.png "Email Services Page")

The Email Service page shows details of the selected email service and has the following features:

* [Email Settings Tab](#Email "Jump to the Email Settings Tab section")
* [Email Queue Tab](#Email2 "Jump to the Email Queue Tab section")

## Email Settings Tab

On the Email Settings tab, view and edit the email service settings.

![](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Configuration/ServiceNodes/EmailService/EmailSettingsTab.png)

The Email Settings tab has the following features:

* From Address – The address that will be shown in the 'From' field of the email
* Hostname (FQDN or IP) – SMTP host that Privilege Secure needs to connect to
* Port – SMTP port
* Credentials for Connection – Service account with credentials for the SMTP server
* Use TLS – Check the checkbox to enable TLS
* Test Settings – Click to verify the connection to the email client

## Email Queue Tab

The Email Queue tab shows all outgoing mail notifications.

![Email Service Queue Tab](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Configuration/ServiceNodes/EmailService/EmailQueueTab.png "Email Service Queue Tab")

The Email Queue table has the following features:

* Search – Searches the To Address and Subject columns to match the search string. When matches are found, the table is filtered to the matching results.
* Column headers can be resized and sorted by ascending or descending order:

  * Created – Timestamp of notification creation
  * Sent – Timestamp of when the notification was sent
  * To Address – The email address of the recipient
  * Subject – The message text