# Manage the Notification Queue

Directory Manager maintains a queue of the email notification generated on events that occur in the identity stores, and sends them one by one through the SMTP server configured for the respective identity store. Each new email notification is stacked at the
top of the queue.

When the SMTP server for an identity store is down and notifications in the queue cannot be delivered, Directory Manager attempts to re-send them until they are successfully delivered. Successfully delivered notifications move out of the queue.

The Email service is responsible for queuing and sending notifications. You can also manually send notifications as well as delete notifications. Both actions are tracked in Admin Center history.

Directory Manager also features a Notification Editor that lists the notification templates for all notifications that Directory Manager generates on various events. See the [Customize Notifications](/docs/groupid/groupid/admincenter/notification/customize.md) topic for details.

What do you want to do?

- View the Notification Queue
- Send a Notification Urgently
- Delete a Notification

## View the Notification Queue

In Admin Center, click __Notifications__ in the left pane. On the __Notification Queue__ page, the following is displayed for a notification:

- __Subject:__ the subject line of the email notification
- __Date:__ the date and time the notification was generated
- __To:__ the notification recipients specified in the _To_ line
- __From:__ the email ID of the sender
- __CC:__ the notification recipients specified in the _CC_ line
- __Last Retry:__ the date and time of the most recent attempt to send the notification
- __Retry Count:__ the total number of attempts to send the notification
- __In Progress:__ displays one of the following statuses for a notification:

  - __True:__ indicates that the notification is currently being processed for sending
  - __False:__ indicates that the notification is not under process

  As Directory Manager processes notifications in batches, all notifications in a batch have the same status.

### Filter Notifications

Click __Filter__ to filter the notifications based on their status as either _pending_ or _failed_.

In the __Categories__ list on the __Filter__ dialog box, select one of the following and click __Apply__:

- __Pending:__ to view notifications that are queued for sending and the Email service has not yet attempted to send them.
- __Failed:__ to view notifications the Email service attempted to send but failed. The retry count for such notifications is incremented by ‘1’ on every failed attempt.
- __All:__ to view all pending and failed notifications in the queue.

### Available Actions

- Click __Send__ for a notification in the __Actions__ column to send it urgently, without waiting for the Email service to send it on its turn.
- Click __Delete__ for a notification in the __Actions__ column to delete it.
- Click __Refresh__ to refresh the notification queue.
- Click __Notification Editor__ to launch the Notification Editor, where you can
  view and modify notification templates. See the [Customize Notifications](/docs/groupid/groupid/admincenter/notification/customize.md) topic for details.

## Send a Notification Urgently

1. In Admin Center, click __Notifications__ in the left pane.
2. On the __Notification Queue__ page, you can send a single notification or multiple notifications urgently, rather
   than waiting for the Email service to send them in their order of sending. All attempts to send notifications manually are tracked in Admin Center history.

   - Click __Send__ for a notification in the __Actions__ column to send it urgently.
   - To send multiple notifications, select the check boxes for those notifications. To select all notifications, select the check box in the header row. This displays the following icons:

     ![send_refresh](/img/product_docs/groupid/groupid/admincenter/notification/send_refresh.webp)

     Click the __Send__ icon to send the selected notifications urgently.

## Delete a Notification

You can delete a notification in the queue to prevent Directory Manager from sending it. Deletion events are logged in Admin Center history.

To delete a notification:

1. In Admin Center, click __Notifications__ in the left pane.
2. On the __Notification Queue__ page, you can delete a single notification or multiple
   notifications together.

   - Click __Delete__ for a notification in the __Actions__ column to delete it.
   - To delete multiple notifications, select the check boxes for those notifications. To select all notifications, select the check box in the header row. This displays the following icons:

     ![send_refresh](/img/product_docs/groupid/groupid/admincenter/notification/send_refresh.webp)

     Click the __Delete__ icon to delete the selected notifications.

__See Also__

- [Notifications](/docs/groupid/groupid/admincenter/notification/overview.md)
- [Email Service](/docs/groupid/groupid/admincenter/service/emailservice.md)
- [Admin Center History](/docs/groupid/groupid/admincenter/general/history.md)
