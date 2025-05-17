---
sidebar_position: 99
title: Entity Property Expression
---

# Entity Property Expression

An entity property expression is a property computed from a binding and/or C# or literal expressions. See the [Expressions](../../../expressions/index "Expressions") topic for additional information.

## Examples

The following example computes the record display name.

```


```
## Properties

| Property | Details |
| --- | --- |
| Binding optional | **Type**  Int64  **Description** References the binding used to compute the result. |
| EntityType required | **Type**  Int64  **Description** Identifier of the referenced entity type |
| Expression optional | **Type**  String  **Description** References the C# or literal expression used to compute the result. See the [Expressions](../../../expressions/index "Expressions") topic for additional information. |
| Identifier required | **Type**  String  **Description** Unique identifier of the expression. |
| Priority default value: 0 | **Type**  Int32  **Description** Specifies the execution priority. |
| Property required | **Type**  Int64  **Description** Identifier of the referenced entity property |
| PropertyCriteria optional | **Type**  Int64  **Description** References the property criteria used to compute navigation properties. |