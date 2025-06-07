# Notification

A notification can be configured to be sent to a given user on a regular basis at specified times, through the [
Send Notifications Task
](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/sendnotificationstask/index.md) as part of a job.

## Examples

The following example defines a notification to inform/remind managers of the arrival of new employees in their team.

The notification is built based on:

- the template ```Notification.cshtml```;
- the styles ```Notification.css```;
- the subject defined by ```TitleExpression```.

The notification is sent for each new user, i.e. each user whose contract start date is in the future. The notification is sent to the new user's manager(s).

The notification will be sent again as a reminder after 7 days, by the next ```SendNotificationsTask```.

```

<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &quot;New Employee&quot;;" QueryFilterExpression="C#:user:return $&quot;join MainRecord r where r.ContractStartDate > \&quot;{DateTime.UtcNow.ToString(&quot;yyyy-MM-ddTHH:mm:ssZ&quot;)}\&quot;&quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />

```

## Properties

| Property | Details |
| --- | --- |
| CssTemplate   optional | __Type__    String   __Description__   Path to the css file that defines the styles for the email.   __Note:__ the path must be relative to the configuration folder, and the file must be inside it.    __Note:__ required when creating a customized notification with ```<Notification.../>```. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the notification. |
| OwnerEntityType   required | __Type__    Int64   __Description__   Identifier of the entity type that represents the population affected by the notification, and the variable type used in ```TitleExpression``` and ```QueryFilterExpression```. |
| QueryFilterExpression   optional | __Type__    String   __Description__   C# expression that returns a Identity Manager Squery in order to define the sending condition of the notification. The expression's variable type is defined in ```OwnerEntityType```. See the [Expressions](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/expressions/index.md) topic for additional information. |
| RazorTemplate   optional | __Type__    String   __Description__   Path to the Razor cshtml file that defines the email's body template.   __Note:__ the path must be relative to the configuration folder, and the file must be inside it.    __Note:__ required when creating a customized notification with ```<Notification.../>```. |
| RecipientMailBinding   optional | __Type__    Int64   __Description__   Binding of the property that corresponds to the email addresses that will receive the notification. |
| ReminderInterval   default value: 0 | __Type__    Int32   __Description__   Time period (in minutes) after which a reminder of the original notification should be sent.   __Note:__ the notification reminder will be sent by the first ```SendNotificationsTask``` after the reminder interval is exceeded. |
| TitleExpression   optional | __Type__    String   __Description__   C# expression that defines the email's subject. The expression's variable type is defined in ```OwnerEntityType```. See the [Expressions](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/expressions/index.md) topic for additional information. |
