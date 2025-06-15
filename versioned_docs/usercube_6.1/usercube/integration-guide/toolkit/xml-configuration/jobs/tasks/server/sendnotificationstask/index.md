# SendNotificationsTask

Task that sends all the custom notifications defined by the [```Notification```](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/notifications/notification/index.md) XML tag.

## Examples

The following example, included in a job potentially scheduled periodically, will send all custom notifications defined via ```Notification``` such as the example below. The task will send the notifications concerning the ```Directory_User``` entity type.

```

<SendNotificationsTask Identifier="SendNotifications" DisplayName_L1="Send notifications">	<TaskEntityType EntityType="Directory_User" /></SendNotificationsTask>

Knowing that we have for example:
<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &quot;New Employee&quot;;" QueryFilterExpression="C#:user:return $&quot;join MainRecord r where r.ContractStartDate > \&quot;{DateTime.UtcNow.ToString(&quot;yyyy-MM-ddTHH:mm:ssZ&quot;)}\&quot;&quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| BatchSize   default value: 0 | __Type__    Int32   __Description__   Block size for batch calculation. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type that the task is to be applied on. |
