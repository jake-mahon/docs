---
title: notifications
sidebar_label: notifications
description: Directory Manager 11.1 documentation for notifications with configuration details, usage instructions, and implementation guidance.
---

# Customize Notifications

Directory Manager generates a variety of notifications for different events, such as when changes
are made to a group, when workflows are triggered, and when profile validation is due for users.
Supported languages for notifications are listed in the
[Localization](/docs/directorymanager/11.1/getting-started/quick-start.md#localization) topic.

Templates for all Directory Manager notifications are available in these languages. You can
customize a notification template for the following in each of the supported languages:

- Subject line
- Message (content and format)

By default, notifications are sent to users in the English language. However, a user can opt to
receive notifications in a different language by personalizing the language settings from the
**Settings** panel in the Directory Manager portal.

## Customize a Notification Template

1. In Admin Center, click **Notifications** in the left pane. Then click **Notification Editor** on
   the **Notification Queue** page.  
   Or  
   In Admin Center, click **Notification Editor** at the bottom of the left navigation pane.

   The editor displays a list of all notifications that Directory Manager generates. Notification
   names are displayed in English, regardless of the language you select.

2. By default, English (US) is selected, so you can view and customize the notification templates in
   the English language. To set another language:

   1. Click **Filter**.
   2. On the **Filter(s)** dialog box, select a language in the **Locality** drop-down list.  
      This list displays the ISO codes of the supported languages.
   3. Click **Apply**.

3. You can search for a notification template using the following filters:

   - Select an event in the **Categories** list to get a list of notifications pertaining to that
     event.
   - Specify a search string in the search box at the top and press **Enter**; notification
     templates that have the string as part of their name or description are displayed. You can
     also search for a specific notification template by its name.

4. To open a notification template for editing, click **Open** for it in the **Actions** column.
5. Select a mode to view the template. Options are:

   - Source code - Click the **Source Code** tab to view and edit the notification template in the
     HTML editor.
   - Interactive - Click the **Interactive** tab to view the template in a user–friendly format.
     This is how the notification will be displayed to the recipients. You cannot format or edit
     the template in this view.

6. You can customize the notification template in the following ways:

   - Change the Subject Line
   - Edit and Format the Content
   - Replace the Tags

7. After saving your changes, click **Go Back** to return to the Notification Editor.

### Change the Subject Line

1. In the Source Code view, click the **Title** tile.
2. In the **Edit Title** dialog box, change the subject line of the notification and click
   **Update**.
3. Click **Save** on the menu bar.

### Edit and Format the Content

You can do the following in the Source Code view:

- Control the notification format. Use HTML tags to format heading styles, change the font and font
  size, change text alignment, and more.
- Make changes to the message content.
- Replace the tags with other relevant tags. By using a tag, you can display an attribute’s value in
  the notification.

NOTE: Do not insert tables or custom photos in a notification template.

After making the required changes, click **Save** on the menu bar.

To aid you in content management, the Source Code view uses the same editor that powers Microsoft
Visual Studio; hence, you also have the following options available:

- Use the page navigator in the top right corner of the source code view to scroll through the
  content. The navigator is divided into sections, enabling you to jump to the beginning, middle and
  end of the source code.
- Use the options on the **Edit** menu to search for target text (whether it be a word, phrase, or
  tag), to cut the selected text, to copy the selected text, and to redo and undo an operation. You
  can also insert the current date and time in the template.

### Replace the Tags

In a notification template, variables are appended with an attribute name and enclosed in percentage
signs, to display that attribute’s value in the notification. For example,
%TARGETOBJECT_DisplayName% will resolve to the display name of the targetobject; %REQUESTER_mail%
will show the email address of the requester, and so on.

**To replace a tag:**

1. In the Source Code view, click the **Dictionary** tile to view the recommended tags to replace
   the default tags with.

   ![tagdictionary](/img/product_docs/directorymanager/directorymanager/admincenter/notification/tagdictionary.webp)

   Each notification template has its own set of recommended tags.

2. Use the _Go To_ option on the **Edit** menu to search for a tag you want to replace. Refer to the
   tag dictionary to know what tags are used in the notification.
3. After replacing a tag in the template, click **Save** on the menu bar.

##### Complete List of Tags

Here is a complete list of tags for object attributes. Using tags other than these is not
recommended. By using a tag, you can display an attribute’s value in the notification.

|     | Variable         | Description                                                                                                                       |
| --- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | TARGETOBJECT     | Can be any object (user/group/contact) that is under consideration in a notification                                              |
| 2.  | REQUESTER        | The user object who makes a workflow request                                                                                      |
| 3.  | APPROVER         | The approver in workflow notifications                                                                                            |
| 4.  | ANOTHER_APPROVER | An approver, other than the ‘approver’ above, who performs an action on the workflow request (as there can be multiple approvers) |
| 5.  | BEHALFEDPERSON   | The user on whose behalf join/leave requests are made by their manager                                                            |
| 6.  | RECEIVER         | The receiver of a notification                                                                                                    |
| 7.  | AUTHOR           | A user who creates/modifies/deletes an object                                                                                     |
| 8.  | USER             | A user object under consideration in password-related notifications                                                               |
| 9.  | MASTER           | The master account of a user in password-related notifications                                                                    |

##### Complete List of Attributes

Following is a list of all attributes that can be used with tags in the notification templates: You
can also use any custom attributes.

| Attributes            |
| --------------------- | ------------------------------ | --------------------------- | ---------------------- |
| Owner                 | Member                         | MemberOf                    | Manager                |
| Name                  | DisplayName                    | FirstName                   | LastName               |
| Title                 | Company                        | Department                  | City                   |
| Office                | DistinguishedName              | ObjectId                    | ObjectType             |
| Alias                 | SamAccountName                 | EmailAddress                | CommonName             |
| GroupType             | Description                    | ObjectClass                 | ObjectCategory         |
| Telephone             | HomeDataBase                   | TargetAddress               | FaxNumber              |
| LogonName             | DLMemRejectPerms               | ObjectGUID                  | UnauthOrig             |
| AuthOrig              | DLMemSubmitPerms               | DelivContLength             | ExchCoManagedByLink    |
| HideDLMembership      | HideFromAddressLists           | RequireAuthToSendTo         | ReplyToOriginator      |
| UserID                | AdminDescription               | DisplayNamePrintable        | ReportToOwner          |
| ObjectSid             | ReportToOriginator             | HierarchicalSearchPostfix   | TokenGroups            |
| Info                  | ManagerCanUpdateMembershipList | Container                   | ThumbnailPhoto         |
| Password              | ThumbnailLogo                  | DirectReports               | JpegPhoto              |
| PasswordLastSet       | UserPasswordExpirationDate     | IsCriticalSystemObject      | UserAccountControl     |
| ModifyTimeStamp       | CreateTimeStamp                | GroupTypeLocal              | GroupTypeGlobal        |
| GroupTypeSecurity     | GroupTypeUniversal             | GroupTypeDistribution       | GroupScope             |
| SimpleDisplayName     | MsExchRequireAuthToSendTo      | ExpansionServerName         | OOFReplyToOriginator   |
| Notes                 | Country                        | State                       | Street                 |
| HomeMDB               | Exchange2010AdditionalOwners   | ProxyAddresses              | DynamicDLFilter        |
| GroupClassName        | ComputerClassName              | ContactClassName            | UserClassName          |
| DatabaseMoniker       | GroupTypeUniversalSecurity     | GroupTypeGlobalSecurity     | PublicFolderClassName  |
| AccountExpires        | GroupTypeUniversalDistribution | GroupTypeLocalDistribution  | GroupTypeLocalSecurity |
| IsDeleted             | GroupTypeLocalSecurity_Builtin | GroupTypeGlobalDistribution | AccountDisabled        |
| LastLogon             | PrimaryGroupToken              | PrimaryGroupId              | SubscribeByMail        |
| AdPublicDelgateRights | UserPrincipleName              |                             |                        |

# Notifications

Directory Manager generates email notifications whenever certain events are triggered. The
notifications are sent to administrators, object owners and other specified recipients.

To enable notifications, you must define an SMTP server for an identity store. Admin Center and the
Directory Manager portal, use the SMTP server for the respective identity store to send email
notifications.

Templates for all kinds of email notifications are predefined in Directory Manager. These are
available in different languages, enabling you to customize a notification template for any
language.

Since notification templates are global and work for all identity stores, any customization to a
template would change that notification for all identity stores.

Directory Manager also features an email service that maintains a queue of all notification requests
generated by different identity stores, and sends them one by one. This is especially helpful when
the SMTP server for an identity store is down, as notifications stay in the queue until they are
delivered when the SMTP server is up again.

# Manage the Notification Queue

Directory Manager maintains a queue of the email notification generated on events that occur in the
identity stores, and sends them one by one through the SMTP server configured for the respective
identity store. Each new email notification is stacked at the top of the queue.

When the SMTP server for an identity store is down and notifications in the queue cannot be
delivered, Directory Manager attempts to re-send them until they are successfully delivered.
Successfully delivered notifications move out of the queue.

The Email service is responsible for queuing and sending notifications. You can also manually send
notifications as well as delete notifications. Both actions are tracked in Admin Center history.

Directory Manager also features a Notification Editor that lists the notification templates for all
notifications that Directory Manager generates on various events. See the
[Customize Notifications](/docs/directorymanager/11.1/configuration/notifications.md) topic for details.

What do you want to do?

- View the Notification Queue
- Send a Notification Urgently
- Delete a Notification

## View the Notification Queue

In Admin Center, click **Notifications** in the left pane. On the **Notification Queue** page, the
following is displayed for a notification:

- **Subject:** the subject line of the email notification
- **Date:** the date and time the notification was generated
- **To:** the notification recipients specified in the _To_ line
- **From:** the email ID of the sender
- **CC:** the notification recipients specified in the _CC_ line
- **Last Retry:** the date and time of the most recent attempt to send the notification
- **Retry Count:** the total number of attempts to send the notification
- **In Progress:** displays one of the following statuses for a notification:

  - **True:** indicates that the notification is currently being processed for sending
  - **False:** indicates that the notification is not under process

  As Directory Manager processes notifications in batches, all notifications in a batch have the
  same status.

### Filter Notifications

Click **Filter** to filter the notifications based on their status as either _pending_ or _failed_.

In the **Categories** list on the **Filter** dialog box, select one of the following and click
**Apply**:

- **Pending:** to view notifications that are queued for sending and the Email service has not yet
  attempted to send them.
- **Failed:** to view notifications the Email service attempted to send but failed. The retry count
  for such notifications is incremented by ‘1’ on every failed attempt.
- **All:** to view all pending and failed notifications in the queue.

### Available Actions

- Click **Send** for a notification in the **Actions** column to send it urgently, without waiting
  for the Email service to send it on its turn.
- Click **Delete** for a notification in the **Actions** column to delete it.
- Click **Refresh** to refresh the notification queue.
- Click **Notification Editor** to launch the Notification Editor, where you can view and modify
  notification templates. See the [Customize Notifications](/docs/directorymanager/11.1/configuration/notifications.md) topic for details.

## Send a Notification Urgently

1. In Admin Center, click **Notifications** in the left pane.
2. On the **Notification Queue** page, you can send a single notification or multiple notifications
   urgently, rather than waiting for the Email service to send them in their order of sending. All
   attempts to send notifications manually are tracked in Admin Center history.

   - Click **Send** for a notification in the **Actions** column to send it urgently.
   - To send multiple notifications, select the check boxes for those notifications. To select all
     notifications, select the check box in the header row. This displays the following icons:

     ![send_refresh](/img/product_docs/directorymanager/directorymanager/admincenter/notification/send_refresh.webp)

     Click the **Send** icon to send the selected notifications urgently.

## Delete a Notification

You can delete a notification in the queue to prevent Directory Manager from sending it. Deletion
events are logged in Admin Center history.

To delete a notification:

1. In Admin Center, click **Notifications** in the left pane.
2. On the **Notification Queue** page, you can delete a single notification or multiple
   notifications together.

   - Click **Delete** for a notification in the **Actions** column to delete it.
   - To delete multiple notifications, select the check boxes for those notifications. To select
     all notifications, select the check box in the header row. This displays the following icons:

     ![send_refresh](/img/product_docs/directorymanager/directorymanager/admincenter/notification/send_refresh.webp)

     Click the **Delete** icon to delete the selected notifications.

**See Also**

- [Notifications](/docs/directorymanager/11.1/configuration/notifications.md)
- [Email Service](/docs/directorymanager/11.1/administration/services/email-service.md)
- [Admin Center History](/docs/directorymanager/11.1/administration/general-settings.md)
