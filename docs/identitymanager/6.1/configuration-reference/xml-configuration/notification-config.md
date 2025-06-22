# Notifications

- #### [Notification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
- #### [Notifications (Typed)](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
- #### [NotificationTemplate](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)

# Notification

A notification can be configured to be sent to a given user on a regular basis at specified times,
through the
[`SendNotificationsTask`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
as part of a job.

## Examples

The following example defines a notification to inform/remind managers of the arrival of new
employees in their team.

The notification is built based on:

- the template `Notification.cshtml`;
- the styles `Notification.css`;
- the subject defined by `TitleExpression`.

The notification is sent for each new user, i.e. each user whose contract start date is in the
future. The notification is sent to the new user's manager(s).

The notification will be sent again as a reminder after 7 days, by the next `SendNotificationsTask`.

```

<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &quot;New Employee&quot;;" QueryFilterExpression="C#:user:return $&quot;join MainRecord r where r.ContractStartDate > \&quot;{DateTime.UtcNow.ToString(&quot;yyyy-MM-ddTHH:mm:ssZ&quot;)}\&quot;&quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** required when creating a customized notification with `<Notification.../>`.                                 |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** Int64 **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression` and `QueryFilterExpression`.                                                                                                             |
| QueryFilterExpression optional    | **Type** String **Description** C# expression that returns a Usercube Squery in order to define the sending condition of the notification. The expression's variable type is defined in `OwnerEntityType`. [See more details on C# expressions](/docs/identitymanager/6.1/tools-utilities/toolkit/expressions.md). |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** required when creating a customized notification with `<Notification.../>`.                       |
| RecipientMailBinding optional     | **Type** Int64 **Description** Binding of the property that corresponds to the email addresses that will receive the notification.                                                                                                                                                                                 |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. [See more details on C# expressions](/docs/identitymanager/6.1/tools-utilities/toolkit/expressions.md).                                                            |

# AccessCertificationNotification

Reminder notification concerning access certification.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for access certification (on resources from `Directory_User`) and have
not yet performed the action. The email's content and styles are those from the original
notification, but the subject is overridden by `TitleExpression` here.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/AccessCertification_Reminder.cshtml" CssTemplate="./Templates/AccessCertification_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. [See more details on C# expressions](/docs/identitymanager/6.1/tools-utilities/toolkit/expressions.md).                                                                            |

# Notifications (Typed)

- #### [AccessCertificationNotification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
  Reminder notification concerning access certification.- ####
  [ManualProvisioningNotification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
  Reminder notification concerning manual provisioning.- ####
  [ProvisioningReviewNotification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
  Reminder notification concerning provisioning review.- ####
  [RolePolicyNotification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
  Reminder notification concerning role model tasks.- ####
  [RoleReviewNotification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
  Reminder notification concerning role review.

# ManualProvisioningNotification

Reminder notification concerning manual provisioning.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for manual provisioning (on resources from `Directory_User`) and have not
yet performed the action. The email's content and styles are those from the original notification,
but the subject is overridden by `TitleExpression` here.

```

<ManualProvisioningNotification Identifier="ManualProvisioning_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to manually provision&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<ManualProvisioningNotification Identifier="ManualProvisioning_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/ManualProvisioning_Reminder.cshtml" CssTemplate="./Templates/ManualProvisioning_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to manually provision&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. [See more details on C# expressions](/docs/identitymanager/6.1/tools-utilities/toolkit/expressions.md).                                                                            |

# ProvisioningReviewNotification

Reminder notification concerning provisioning review.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for provisioning review (on resources from `Directory_User`) and have not
yet performed the action. The email's content and styles are those from the original notification,
but the subject is overridden by `TitleExpression` here.

```

<ProvisioningReviewNotification Identifier="ProvisioningReview_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<ProvisioningReviewNotification Identifier="ProvisioningReview_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/ProvisioningReview_Reminder.cshtml" CssTemplate="./Templates/ProvisioningReview_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. [See more details on C# expressions](/docs/identitymanager/6.1/tools-utilities/toolkit/expressions.md).                                                                            |

# RolePolicyNotification

Reminder notification concerning role model tasks.

## Properties

| Property            | Type   | Description                            |
| ------------------- | ------ | -------------------------------------- |
| Identifier optional | String | Unique identifier of the notification. |

# RoleReviewNotification

Reminder notification concerning role review.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for role review (on resources from `Directory_User`) and have not yet
performed the action. The email's content and styles are those from the original notification, but
the subject is overridden by `TitleExpression` here.

```

<RoleReviewNotification Identifier="RoleReview_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending roles to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<RoleReviewNotification Identifier="RoleReview_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/RoleReview_Reminder.cshtml" CssTemplate="./Templates/RoleReview_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have access pending roles to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. [See more details on C# expressions](/docs/identitymanager/6.1/tools-utilities/toolkit/expressions.md).                                                                            |

# NotificationTemplate

A notification template is used to overwrite the subject and/or body of a native notification with
personalized templates.

Usercube natively sends notifications for usual cases.

These native notifications are based on cshtml templates available inside the `Runtime` folder. If
the provided templates do not meet your exact needs, then they can be replaced by personalized
notification templates. See the
[ Native Notifications ](/docs/identitymanager/6.1/automation/notifications/native-notifications.md)topic
for additional information.

## Examples

The following example overwrites the template of the notification provided by Usercube for role
review.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<NotificationTemplate Identifier="WorkflowReviewRolesSummary" SubjectTemplate_L1="./Templates/Notification_RoleReview_Subject.cshtml" BodyTemplate_L1="./Templates/Notification_RoleReview_Body.cshtml" />
```

The following example defines a template for the notification's subject.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
// WorkflowReviewRolesSummary_Subject.cshtml
@using Usercube.Application.DeltaProvisioning.Notification
@model WorkflowReviewRolesSummary
Review Roles - @(@Model.AssignedCompositeRoles.Any() ? @Model.AssignedCompositeRoles.FirstOrDefault().Owner.FullName : @Model.AssignedSingleRoles.FirstOrDefault().Owner.FullName)
```

## Properties

| Property                    | Type   | Description                                                                                                                                                                                                                                                                                                                            |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BodyTemplate_L1 optional    | String | Path to the Razor cshtml file that defines the email's body template in language 1 (up to 16). **NOTE:** The path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                        |
| Identifier required         | String | Identifier of the native notification to adjust, among: - `BlockedProvisioningInformations` - `OneWayPasswordReset` - `PendingAccessCertificationModel` - `PerformManualProvisioningSummary` - `RolePolicySummary` - `RunJobNotification` - `TwoWayPasswordReset` - `WorkflowReviewProvisioningSummary` - `WorkflowReviewRolesSummary` |
| SubjectTemplate_L1 optional | String | Path to the Razor cshtml file that defines the email's subject template in language 1 (up to 16). **NOTE:** The path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                     |
