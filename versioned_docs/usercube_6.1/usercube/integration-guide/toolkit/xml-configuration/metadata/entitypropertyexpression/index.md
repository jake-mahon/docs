# EntityPropertyExpression

An entity property expression is a property computed from a binding and/or [C#](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#c) or [literal](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#literal) expressions.

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
| Expression   optional | __Type__    String   __Description__   References the C# or literal expression used to compute the result. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the expression. |
| Priority   default value: 0 | __Type__    Int32   __Description__   Specifies the execution priority. |
| Property   required | __Type__    Int64   __Description__   Identifier of the referenced entity property |
| PropertyCriteria   optional | __Type__    Int64   __Description__   References the property criteria used to compute navigation properties. |
