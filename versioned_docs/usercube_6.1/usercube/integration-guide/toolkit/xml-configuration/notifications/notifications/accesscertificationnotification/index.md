# AccessCertificationNotification

Reminder notification concerning access certification.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified by the native notification for access certification (on resources from ```Directory_User```) and have not yet performed the action. The email's content and styles are those from the original notification, but the subject is overridden by ```TitleExpression``` here.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different templates for the content and the styles.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/AccessCertification_Reminder.cshtml" CssTemplate="./Templates/AccessCertification_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property | Details |
| --- | --- |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the notification. |
| OwnerEntityType   required | __Type__    String   __Description__   Identifier of the entity type that represents the population affected by the notification, and the variable type used in ```TitleExpression```. |
| CssTemplate   optional | __Type__    String   __Description__   Path to the css file that defines the styles for the email.   __Note:__ the path must be relative to the configuration folder, and the file must be inside it.   __Note:__ when no template is specified, the reminder notification will use the same template as the original notification. |
| RazorTemplate   optional | __Type__    String   __Description__   Path to the Razor cshtml file that defines the email's body template.   __Note:__ the path must be relative to the configuration folder, and the file must be inside it.   __Note:__ when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval   default value: 0 | __Type__    Int32   __Description__   Time period (in minutes) after which a reminder of the original notification should be sent.   __Note:__ the notification reminder will be sent by the first ```SendNotificationsTask``` after the reminder interval is exceeded. |
| TitleExpression   optional | __Type__    String   __Description__   C# expression that defines the email's subject. The expression's variable type is defined in ```OwnerEntityType```. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
