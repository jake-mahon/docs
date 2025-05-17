---
sidebar_position: 233
title: Create Update Delete Menus
---

# Create Update Delete Menus

Creates creation, update and delete menus for an entity. Read these menuItems again on the main menuItems of the entity with the following naming rule:
"Search\_" + Identifier of entity type.
if this menuItem does not exist, create it in the database.

:::warning
The workflows for adding, deleting and modifying the entity must be created beforehand. For this scaffolding, the names of these 3 workflows must comply with the following standard:
entity type identifier + "\_Create"
entity type identifier + "\_Update"
entity type identifier + "\_Delete"
:::

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| EntityType required | **Type**  String  **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```
      

```