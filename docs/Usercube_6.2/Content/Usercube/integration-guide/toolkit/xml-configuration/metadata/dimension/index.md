---
sidebar_position: 754
title: Dimension
---

# Dimension

A dimension is an [Entity Type](../entitytype/index "Entity Type") used to define an organizational filter for the Identity Manager role model.

## Examples

The following XML fragment defines the dimension `Organization0`. The dimension values are of `Directory_Organization` type. The `ColumnMapping` attribute specifies the column (0 to 127) used to store the dimension value in the assignment rule tables.

```


```
Some types of entities can be organized in a hierarchical tree structure. Thus, for example, organizational units form a tree structure modeled by a `Parent` navigation property that links the entity type to itself. It is possible to use the hierarchical aspect of a dimension in an assignment rule criterion. For example, the assignment must be extended to the whole subunits of a department. Such a dimension must be declared as a hierarchical dimension by specifying the attribute `IsHierarchical="true"`.

```
...	
		...


```
The attribute `ParentProperty` specifies the navigational property defining the hierarchy (`Parent` is the navigation property that links the `Directory_Organization` type to itself).

## Properties

| Property | Details |
| --- | --- |
| ColumnMapping required | **Type**  Int32  **Description** Specifies the corresponding column in the role model rules. |
| DisplayName\_L1 optional | **Type**  String  **Description** Display name of the dimension in language 1 (up to 16). |
| EntityType required | **Type**  Int64  **Description** References the linked entity type. |
| Identifier required | **Type**  String  **Description** Unique identifier of the dimension. |
| IsExcludedFromRoleMining default value: false | **Type**  Boolean  **Description** `true` to exclude the dimension from role mining. It means that the dimension is not used as a criteria in the generated rules. |
| IsHierarchical default value: false | **Type**  Boolean  **Description** `true` to define a hierarchical dimension. **Note:** Cannot be used without `ParentProperty`. |
| ParentProperty optional | **Type**  Int64  **Description** Specifies the navigational property defining the hierarchy. |