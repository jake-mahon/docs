# Entity Property Expression

An entity property expression is a property computed from a binding and/or C# or literal expressions. See the [Expressions](../../../expressions/index.md) topic for additional information.

## Examples

The following example computes the record display name.

```

<EntityPropertyExpression Identifier="Directory_UserRecord_InternalDisplayName" Expression="C#:person:return person.LastName + " " + person.FirstName;"
    EntityType="Directory_UserRecord" Property="InternalDisplayName" />

```

## Properties

| Property | Details |
| --- | --- |
| Binding   optional | __Type__    Int64   __Description__   References the binding used to compute the result. |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the referenced entity type |
| Expression   optional | __Type__    String   __Description__   References the C# or literal expression used to compute the result. See the [Expressions](../../../expressions/index.md) topic for additional information. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the expression. |
| Priority   default value: 0 | __Type__    Int32   __Description__   Specifies the execution priority. |
| Property   required | __Type__    Int64   __Description__   Identifier of the referenced entity property |
| PropertyCriteria   optional | __Type__    Int64   __Description__   References the property criteria used to compute navigation properties. |
