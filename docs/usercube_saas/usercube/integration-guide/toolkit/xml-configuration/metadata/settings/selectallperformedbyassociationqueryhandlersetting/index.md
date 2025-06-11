# Select All Performed by Association Query Handler Setting

This setting enables task delegation to a group of people.

## Examples

```

        <SelectAllPerformedByAssociationQueryHandlerSetting RootEntityType="AD_Entry" Binding="member" />

```

## Properties

| Property | Details |
| --- | --- |
| Binding   optional | __Type__    String   __Description__   Defines the binding used to get the list of identities to delegate to. |
| Identifier   default value: SelectAllPerformedByAssociationQueryHandler | __Type__    String   __Description__   Unique identifier of the setting. |
| RootEntityType   optional | __Type__    String   __Description__   Indicates the entity type on which the delegation is applied. |
