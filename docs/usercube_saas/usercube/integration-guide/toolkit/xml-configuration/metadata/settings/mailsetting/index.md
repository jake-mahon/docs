# Mail Setting

## Examples

The following example indicates that notifications for users from ```Directory_User``` are to be sent to the email addresses contained by the ```Email``` property.

```

<MailSetting MailProperty="Directory_User:Email"/>

```

## Properties

| Property | Details |
| --- | --- |
| Identifier   default value: MailSettings | __Type__    String   __Description__   Unique identifier of the setting. |
| LanguageCode   optional | __Type__    String   __Description__   Language code for the notifications sent by server-side tasks, using the ISO 639-1 standard. For example, "en-US" represents American English. |
| MailProperty   optional | __Type__    String   __Description__   Property whose values are to be used by Identity Manager to send emails. |
