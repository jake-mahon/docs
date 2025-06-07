# Resource

The ```<Resource>``` element also allows the definition of a resource entity directly from within the configuration. Such element must specify:

- the entity type using the ```Type``` attribute
- a unique ```Id```
- property values using corresponding column names as attributes

When inserting resource-identity in the resource table this way, the Id attribute must be a positive integer. Negative Ids are reserved for Identity Manager's engine.

## Examples

The following sample inserts two entities of type ```User```: John Smith and Anthony Baker. John Smith is the manager of Anthony Baker.

The ```User```__Entity Type__ is defined as follows:

```

  <EntityType Identifier="User">    <Property Identifier="FirstName" Type="String" TargetColumnIndex="4" />    <Property Identifier="LastName" Type="String" TargetColumnIndex="5" />    <Property Identifier="Manager" Type="String" TargetColumnIndex="128" />  </EntityType>

```

The two new resources are inserted in the database using the ```<Resource>``` tag.

They are assigned the ids ```300``` and ```301```, they are positive integers (since User type resources are resource-identity) and not yet used in the __UR\_Resource__ table.

The ```User``` resource properties (FirstName, LastName and Manager) are matched to a __UR\_Resource__ table column, such as ```C4```, ```C5``` or ```I40``` according to their data column index, in the above __Entity Type__ definition.

- FirstName: index 4 => column C4
- LastName: index 5 => column C5
- Manager: index 128 => column I40

```

<Resource Type="User" Id="300" C4="John" C5="Smith" /><Resource Type="User" Id="301" C4="Anthony" C5="Baker" I40="-300" />

```

Most encountered use cases in real life is populating very tiny datasets like employee categories (Internal, External) or personal titles (Mr, Ms). Identities are almost never insert this way. This contrived example aims at illustrating the method.

## Properties

| Property | Details |
| --- | --- |
| C0   optional | __Type__    String   __Description__   A column of storage. Going from 0 to 127. |
| Dirty   default value: false | __Type__    Boolean   __Description__   Flag set by the Identity Manager-Set-RecentlyModifiedFlag task. |
| DisplayName\_L1   optional | __Type__    String   __Description__   Display name of the resource in language 1 (up to 16). |
| I40   optional | __Type__    Int64   __Description__   This columns are used to store the id of an linked entity. When an entity type has a mono-valued association we usually use this columns to store the information. By default there are 10 columns for the storage of the mono-valued associations. |
| Type   required | __Type__    Int64   __Description__   The type of the resource. References the internal id of an EntityType. |
