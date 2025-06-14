# SelectPersonasByFilterQueryHandlerSetting

This setting is used to filter the entity type used by authentication mechanism.

## Examples

```

    <SelectPersonasByFilterQueryHandlerSetting ResourceDisplayNameProperty="AD_Entry:displayName" PersonTypeFilterProperty="AD_Entry:objectCategory" PersonTypeFilter="Person" />

```

## Properties

| Property | Details |
| --- | --- |
| Identifier   default value: SelectPersonasByFilterQueryHandler | __Type__    String   __Description__   Unique identifier of the setting. |
| MailProperty   optional | __Type__    String   __Description__   Defines the mail property.   __Note:__ required to receive the email for two-way password reset, when relevant. |
| OwnerPhotoTagProperty   optional | __Type__    String   __Description__   Defines the photo tag property. |
| PersonTypeFilter   optional | __Type__    String   __Description__   The documentation is not yet available. |
| PersonTypeFilterProperty   optional | __Type__    String   __Description__   Defines the filter property |
| PhotoProperty   optional | __Type__    String   __Description__   The documentation is not yet available. |
| ResourceDisplayNameProperty   optional | __Type__    String   __Description__   Represents the display property. |
