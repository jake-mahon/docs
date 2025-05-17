---
sidebar_position: 101
title: Entity Association
---

# Entity Association

An entity association is used to model an association in Identity Manager's metadata. See the [Connector](../../connectors/connector/index "Connector")topic for additional information on a whole connector with its entity properties and associations.

## Examples

The following example associates one title (as a property from the entity type `Directory_UserRecord`) with several user records (as a property from the entity type `Directory_Title`).

```


```
### Many-to-many association

The following example associates SAB users with groups, with the possibility to link one group to several users, and one user to several groups.

```


```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 optional | **Type**  String  **Description** Display name of the association in language 1 (up to 16). |
| Identifier required | **Type**  String  **Description** Unique identifier of the association. It must be unique to the entity model scope. |
| IsProperty1Collection default value: false | **Type**  Boolean  **Description** `true` to define a many-to-one association. |
| IsProperty2Collection default value: false | **Type**  Boolean  **Description** `true` to define a one-to-many association. |
| Property1 required | **Type**  Int64  **Description** Defines the first navigation property. A navigation property can be mono-valued or multi-valued (with its corresponding `IsPropertyCollection` set to `true`). Mono-valued navigation properties may be optimized (with a `TargetColumnIndex`) or not (without `TargetColumnIndex`). See more details under the TargetColumnIndex section of the [Entity Type](../entitytype/index "Entity Type") properties page. |
| Property2 required | **Type**  Int64  **Description** Defines the second navigation property. |